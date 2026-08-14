# Exécuter en administrateur sur votre W10 (172.16.0.189).
$Path = 'D:\Support_Info'
$ShareName = 'Support_Info$'
$ItGroup = 'l_informatique'

New-Item -ItemType Directory -Path $Path -Force | Out-Null

# Permissions NTFS : héritage supprimé, système/administrateurs en contrôle total,
# service informatique en modification.
icacls $Path /inheritance:r | Out-Null
icacls $Path /grant:r '*S-1-5-18:(OI)(CI)F' '*S-1-5-32-544:(OI)(CI)F' "${ItGroup}:(OI)(CI)M" | Out-Null

if (Get-SmbShare -Name $ShareName -ErrorAction SilentlyContinue) {
    Remove-SmbShare -Name $ShareName -Force
}
New-SmbShare -Name $ShareName -Path $Path -ChangeAccess $ItGroup -FullAccess 'Administrateurs'

Get-SmbShare -Name $ShareName
cmd /c 'net share'
