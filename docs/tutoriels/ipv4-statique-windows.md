# Tutoriel — Configurer une adresse IPv4 statique sous Windows

## Avant de commencer

Noter l’ancienne configuration et vérifier que l’adresse choisie n’est pas déjà utilisée.

## Interface graphique

1. Ouvrir **Paramètres**.
2. Aller dans **Réseau et Internet**.
3. Ouvrir les propriétés de l’interface Ethernet ou Wi-Fi.
4. Repérer **Affectation d’adresse IP** puis choisir **Modifier**.
5. Sélectionner **Manuel** et activer IPv4.
6. Saisir l’adresse, la longueur de préfixe, la passerelle et les DNS.
7. Enregistrer puis désactiver/réactiver l’interface si nécessaire.

!!! note
    Sous certaines versions de Windows 10, le chemin passe par **Panneau de configuration > Réseau et Internet > Centre Réseau et partage > Modifier les paramètres de la carte > Propriétés > Protocole Internet version 4**.

## PowerShell

```powershell
Get-NetAdapter
New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.10.20 -PrefixLength 24 -DefaultGateway 192.168.10.1
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses 192.168.10.10,192.168.10.11
Get-NetIPConfiguration -InterfaceAlias "Ethernet"
```

## Retour arrière

```powershell
Set-NetIPInterface -InterfaceAlias "Ethernet" -Dhcp Enabled
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ResetServerAddresses
```

## Vérification

Tester la passerelle, une adresse distante, puis un nom DNS. Une adresse correcte sans route ou sans DNS ne constitue pas une validation complète.
