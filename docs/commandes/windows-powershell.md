# Commandes Windows et PowerShell

Repères des modules Systèmes clients Microsoft. Exécuter les commandes dans la console indiquée : `cmd` et PowerShell n’ont pas la même syntaxe. Les noms de machine, interfaces, comptes et chemins des TP appartiennent au laboratoire.

## 1. Chercher, comprendre, vérifier — M03

| Besoin | Commande PowerShell | Résultat à contrôler |
|---|---|---|
| Trouver une commande | `Get-Command *LocalGroup*` | La commande correspond au besoin, pas seulement au mot recherché. |
| Lire l’aide | `Get-Help Get-Service -Full` | Syntaxe, paramètres et contexte. |
| Voir des exemples | `Get-Help Get-Help -Examples` | Exemple applicable à l’objet étudié. |
| Découvrir des propriétés | `Get-Disk \| Get-Member` | Noms et types des propriétés. |
| Lire un fichier | `Get-Content C:\PowerShell\Intro.txt` | Contenu du fichier de laboratoire demandé. |
| Identifier la version | `$PSVersionTable` | Version de la console effectivement ouverte. |

Dans `cmd`, utiliser `help`, `cd /?`, `dir`, `type` et `copy` selon l’activité. `cd \` place à la racine du lecteur courant ; `cd /d C:\` change aussi de lecteur. Après une copie ou une redirection, relire le fichier produit.

## 2. Identités et groupes — M05

```cmd
whoami /user
whoami /groups
net user
net localgroup
```

```powershell
Get-LocalUser
Get-LocalGroup
Get-LocalGroupMember -Group 'Administrateurs'
```

Comparer le SID et les appartenances avec le compte de test. Les noms de groupes prédéfinis dépendent de la langue de Windows ; reprendre ceux réellement présents dans la VM.

## 3. Disques et ACL — M04 et M06

```powershell
Get-Disk | Select-Object Number,FriendlyName,PartitionStyle,Size
Get-Volume | Select-Object DriveLetter,FileSystemLabel,FileSystem,Size,SizeRemaining
Get-Acl M:\2022
```

`Get-Acl` affiche les droits ; `Set-Acl` est la cmdlet de modification étudiée dans le cours. Lire l’aide et préparer l’objet ACL avant toute modification. Dans `diskpart`, commencer par `list disk` et `list volume` : un numéro tiré d’une capture ne suffit pas pour choisir une cible.

## 4. Réseau, résolution de noms et pare-feu — M07

| Commande | Ce qu’elle vérifie |
|---|---|
| `ipconfig /all` | IP, masque, passerelle, DNS et état DHCP des interfaces. |
| `ping <adresse>` | Échange ICMP avec une destination, si le filtrage l’autorise. |
| `tracert <destination>` | Sauts observés vers la destination. |
| `nslookup <nom>` | Réponse DNS, distincte du test par IP. |
| `route print` | Table de routage. |
| `arp -a` | Cache des associations IPv4/MAC. |

```powershell
Get-NetIPConfiguration
Get-NetFirewallRule -Enabled True |
    Select-Object DisplayName,Profile,Direction,Action
```

Un ping sans réponse ne suffit pas à conclure à une panne : vérifier la cible, le profil de pare-feu et les règles ICMP avant de modifier le filtrage.

## 5. Partages, pilotes et imprimantes — M08 et M09

```cmd
net view
net use
net share
driverquery /v
driverquery /si
```

```powershell
Get-SmbShare | Select-Object Name,Path
Get-SmbShareAccess -Name '<partage-du-laboratoire>'
Get-Printer | Select-Object Name,DriverName,PortName,Shared
```

Les valeurs entre chevrons sont à remplacer. Les droits d’un partage et les droits NTFS se vérifient séparément, avec l’utilisateur concerné. La présence d’une imprimante ne remplace pas un test d’impression.

## 6. Filtrer avant de formater — M11

```powershell
Get-Volume | Where-Object {
    $_.SizeRemaining -gt 8GB -and $_.Size -le 25GB
} | Select-Object FileSystemLabel,DriveLetter,FileSystem | Format-List

Get-Service | Where-Object {
    $_.Status -eq 'Running' -and $_.StartType -eq 'Automatic'
} | Select-Object Name,Status
```

Le premier exemple traduit « plus de 8 Go libres et capacité ne dépassant pas 25 Go ». Il inclut la borne 25 Go ; la correction source utilise aussi une variante stricte `-lt`, signalée dans le TP. Conserver les objets jusqu’à la dernière étape ; `Format-Table` et `Format-List` servent à l’affichage final.

| Opérateur | Effet |
|---|---|
| `>` / `1>` | Rediriger la réussite vers un fichier en le remplaçant. |
| `>>` / `1>>` | Ajouter la réussite en fin de fichier. |
| `2>` | Rediriger les erreurs. |
| `2>&1` | Joindre le flux d’erreurs au flux de réussite. |

## 7. Consoles et préparation d’image — M10 à M13

| Outil | Usage étudié |
|---|---|
| `eventvwr.msc` | Consulter les événements. |
| `resmon` | Observer les ressources en temps réel. |
| `perfmon /rel` | Consulter l’Historique de fiabilité. |
| `sysdm.cpl` | Propriétés système et protection/restauration. |
| `shutdown /r /o` | Redémarrer vers les options avancées de récupération. |
| `mmc` | Composer une console, notamment pour les stratégies locales ciblées. |
| `secpol.msc` | Stratégies de sécurité locale du TP. |
| `regedit` | Examiner les clés et valeurs du Registre. |

Commande Sysprep du support, à utiliser uniquement sur le master du laboratoire préparé pour le clonage :

```cmd
C:\Windows\System32\Sysprep\sysprep.exe /oobe /generalize /shutdown
```

Après l’arrêt, le support demande de capturer ou cloner le master sans le redémarrer. [Relire le déroulé complet](../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image.md) avant cette opération.

## Vérifier ses résultats

- [Cours complet](../modules/02-systemes-clients-microsoft/index.md)
- [TP et corrections](../tp/systemes-clients/index.md)
- [Exercices de synthèse](../exercices/quiz-systemes-clients.md)
