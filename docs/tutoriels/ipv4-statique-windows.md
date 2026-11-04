# Tutoriel — Configurer une adresse IPv4 statique sous Windows

Le module 07 distingue adresse, masque, passerelle, DNS et profil de pare-feu. Préparer les valeurs du laboratoire avant d’intervenir et relever l’ancienne configuration pour pouvoir la rétablir.

## 1. Lire l’état actuel

```cmd
ipconfig /all
```

```powershell
Get-NetAdapter
Get-NetIPConfiguration
```

| Paramètre | Question de contrôle |
|---|---|
| Interface | Est-ce bien la carte reliée au réseau du scénario ? |
| Adresse et préfixe | L’adresse est-elle libre et dans le sous-réseau prévu ? |
| Passerelle | Est-elle joignable sur ce réseau et nécessaire pour les destinations distantes ? |
| DNS | Quel serveur doit résoudre les noms du scénario ? |
| Profil | Public, privé ou domaine : quelles règles s’appliquent ? |

## 2. Configurer avec l’interface graphique

Dans le chemin Windows 10 du support : **Panneau de configuration → Réseau et Internet → Centre Réseau et partage → Modifier les paramètres de la carte**.

1. Ouvrir les propriétés de la bonne carte.
2. Ouvrir **Protocole Internet version 4 (TCP/IPv4)**.
3. Renseigner l’adresse, le masque, la passerelle et les DNS prévus.
4. Valider puis relire les valeurs avec `ipconfig /all`.

Selon la version de Windows, certains paramètres sont également accessibles depuis **Paramètres → Réseau et Internet**. Le résultat à contrôler reste la configuration effective de la carte.

## 3. Exemple PowerShell — complément externe

Les valeurs suivantes sont un **exemple pédagogique externe**, à remplacer par celles du laboratoire. Travailler depuis la console de la VM : changer sa carte réseau peut interrompre une session distante.

```powershell
New-NetIPAddress -InterfaceAlias 'Ethernet' -IPAddress 192.168.10.20 -PrefixLength 24 -DefaultGateway 192.168.10.1
Set-DnsClientServerAddress -InterfaceAlias 'Ethernet' -ServerAddresses 192.168.10.10,192.168.10.11
Get-NetIPConfiguration -InterfaceAlias 'Ethernet'
```

Ne pas relancer la création si la même adresse ou la même route existe déjà : lire l’état et adapter la configuration ciblée.

## 4. Vérifier séparément chaque service

1. Contrôler l’interface et les paramètres affichés.
2. Tester la passerelle si elle autorise ICMP.
3. Tester une destination distante prévue par le scénario.
4. Interroger un nom avec `nslookup`.
5. Contrôler le profil et la règle de pare-feu si le test attendu échoue.

Une résolution DNS en échec ne se corrige pas en remplaçant arbitrairement l’adresse IP. Un ping sans réponse ne prouve pas à lui seul que la cible est arrêtée.

## 5. Revenir à DHCP — complément externe

Pour annuler **l’exemple ci-dessus uniquement**, retirer les valeurs manuelles créées sur cette interface, puis réactiver DHCP et les DNS automatiques. Vérifier chaque cible avant validation :

```powershell
Remove-NetIPAddress -InterfaceAlias 'Ethernet' -IPAddress 192.168.10.20 -Confirm
Remove-NetRoute -InterfaceAlias 'Ethernet' -DestinationPrefix '0.0.0.0/0' -NextHop 192.168.10.1 -Confirm
Set-NetIPInterface -InterfaceAlias 'Ethernet' -AddressFamily IPv4 -Dhcp Enabled
Set-DnsClientServerAddress -InterfaceAlias 'Ethernet' -ResetServerAddresses
Get-NetIPConfiguration -InterfaceAlias 'Ethernet'
```

La route peut déjà avoir disparu avec la configuration précédente ; dans ce cas, ne pas supprimer une autre route pour remplacer celle de l’exemple. Après renouvellement du bail, vérifier de nouveau adresse, passerelle et DNS.

Références externes Microsoft : [Remove-NetIPAddress](https://learn.microsoft.com/en-us/powershell/module/nettcpip/remove-netipaddress), [Set-NetIPInterface](https://learn.microsoft.com/en-us/powershell/module/nettcpip/set-netipinterface).

- [Cours du module 07](../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu.md)
- [TP et correction](../tp/systemes-clients/module-07/index.md)
