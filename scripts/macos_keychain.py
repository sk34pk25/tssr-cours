"""Native Keychain access: no subprocess, argv secret, file or secondary prompt."""
import ctypes as C
from contextlib import contextmanager
import hmac
import sys

KEYCHAIN_SERVICE = 'TSSR_AGENT_SUPABASE'


class KeychainError(ValueError):
    code = 'KEYCHAIN_UNAVAILABLE'


class KeychainNotFound(KeychainError):
    code = 'KEYCHAIN_ITEM_NOT_FOUND'


class KeychainAccessDenied(KeychainError):
    code = 'KEYCHAIN_ACCESS_DENIED'


class KeychainEmptySecret(KeychainError):
    code = 'KEYCHAIN_EMPTY_SECRET'


def check_status(status):
    if status == -25300:
        raise KeychainNotFound()
    if status in (-25293, -25308, -25315, -128):
        raise KeychainAccessDenied()
    if status:
        raise KeychainError()


class MacOSKeychain:
    def __init__(self, service=KEYCHAIN_SERVICE):
        if sys.platform != 'darwin':
            raise KeychainError()
        self.service = service
        try:
            self.cf = C.CDLL('/System/Library/Frameworks/CoreFoundation.framework/CoreFoundation')
            self.sec = C.CDLL('/System/Library/Frameworks/Security.framework/Security')
            signatures = [
                (self.cf, 'CFStringCreateWithBytes', C.c_void_p, [C.c_void_p, C.c_void_p, C.c_long, C.c_uint32, C.c_bool]),
                (self.cf, 'CFDataCreate', C.c_void_p, [C.c_void_p, C.c_void_p, C.c_long]),
                (self.cf, 'CFDictionaryCreateMutable', C.c_void_p, [C.c_void_p, C.c_long, C.c_void_p, C.c_void_p]),
                (self.cf, 'CFDictionarySetValue', None, [C.c_void_p, C.c_void_p, C.c_void_p]),
                (self.cf, 'CFRelease', None, [C.c_void_p]),
                (self.cf, 'CFGetTypeID', C.c_ulong, [C.c_void_p]),
                (self.cf, 'CFDataGetTypeID', C.c_ulong, []),
                (self.cf, 'CFDataGetLength', C.c_long, [C.c_void_p]),
                (self.cf, 'CFDataGetBytePtr', C.c_void_p, [C.c_void_p]),
                (self.sec, 'SecItemCopyMatching', C.c_int32, [C.c_void_p, C.POINTER(C.c_void_p)]),
                (self.sec, 'SecItemAdd', C.c_int32, [C.c_void_p, C.c_void_p]),
                (self.sec, 'SecItemUpdate', C.c_int32, [C.c_void_p, C.c_void_p]),
            ]
            for library, name, result, arguments in signatures:
                function = getattr(library, name)
                function.restype, function.argtypes = result, arguments
        except (OSError, AttributeError):
            raise KeychainError() from None

    def constant(self, name):
        library = self.cf if name.startswith('kCF') else self.sec
        return C.c_void_p.in_dll(library, name).value

    @contextmanager
    def dictionary(self, values):
        # No-retain callbacks: explicitly own all temporary values through call completion.
        refs = []
        dictionary = self.cf.CFDictionaryCreateMutable(None, 0, None, None)
        if not dictionary:
            raise KeychainError()
        try:
            for name, value in values.items():
                if isinstance(value, str):
                    encoded = value.encode('utf-8')
                    ref = self.cf.CFStringCreateWithBytes(None, encoded, len(encoded), 0x08000100, False)
                    refs.append(ref)
                elif isinstance(value, bytes):
                    ref = self.cf.CFDataCreate(None, value, len(value))
                    refs.append(ref)
                else:
                    ref = value
                if not ref:
                    raise KeychainError()
                self.cf.CFDictionarySetValue(dictionary, self.constant(name), ref)
            yield dictionary
        finally:
            self.cf.CFRelease(dictionary)
            for ref in refs:
                if ref:
                    self.cf.CFRelease(ref)

    def query(self, email):
        return {'kSecClass': self.constant('kSecClassGenericPassword'),
                'kSecAttrService': self.service, 'kSecAttrAccount': email,
                'kSecUseAuthenticationUI': self.constant('kSecUseAuthenticationUIFail')}

    def get_password(self, email):
        values = self.query(email)
        values.update(kSecReturnData=self.constant('kCFBooleanTrue'),
                      kSecMatchLimit=self.constant('kSecMatchLimitOne'))
        result = C.c_void_p()
        try:
            with self.dictionary(values) as query:
                check_status(self.sec.SecItemCopyMatching(query, C.byref(result)))
            if not result.value or self.cf.CFGetTypeID(result) != self.cf.CFDataGetTypeID():
                raise KeychainError()
            size = self.cf.CFDataGetLength(result)
            if not size:
                raise KeychainEmptySecret()
            if size < 0 or size > 65536:
                raise KeychainError()
            try:
                return C.string_at(self.cf.CFDataGetBytePtr(result), size).decode('utf-8')
            except UnicodeError:
                raise KeychainError() from None
        finally:
            if result.value:
                self.cf.CFRelease(result)

    def store_password(self, email, password):
        if not password:
            raise KeychainEmptySecret()
        encoded = password.encode('utf-8')
        values = self.query(email)
        with self.dictionary(values) as query, self.dictionary({'kSecValueData': encoded}) as update:
            status = self.sec.SecItemUpdate(query, update)
        if status == -25300:
            with self.dictionary({**values, 'kSecValueData': encoded}) as create:
                status = self.sec.SecItemAdd(create, None)
        check_status(status)
        if not hmac.compare_digest(self.get_password(email).encode('utf-8'), encoded):
            raise KeychainError()
