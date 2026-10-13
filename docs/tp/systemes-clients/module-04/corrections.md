# Correction — Module 04 — La gestion du stockage

Cette correction réorganise la solution TSSR par méthodes, étapes et contrôles. Les repères de VM et les valeurs observées restent propres au laboratoire.

## 1. Ajouter les deux disques à la VM

Dans VMware Workstation, la solution ajoute deux disques de 60 Go à la VM Windows :

1. ouvrir les paramètres matériels de la VM et choisir l’ajout d’un disque dur ;
2. conserver le type SCSI recommandé par la solution ;
3. créer un nouveau disque virtuel de 60 Go, stocké dans un fichier unique ;
4. lui donner un nom parlant ;
5. répéter l’opération pour le second disque ;
6. vérifier que les deux nouveaux disques apparaissent dans le matériel de la VM.

## 2. Créer la structure graphique demandée

Ouvrir la gestion des disques depuis la console de laboratoire ou avec `diskmgmt.msc`. Les deux nouveaux disques apparaissent d’abord comme non initialisés.

### Chemin GPT montré dans la correction

La correction initialise les deux disques avec une **GUID Partition Table (GPT)**. Sur le disque 1 :

1. créer trois volumes de 15 Go, sans lettre ni formatage ;
2. créer un quatrième volume de 7 Go, sans lettre ni formatage ;
3. formater les deux premiers volumes de 15 Go en NTFS, avec les libellés DATA et TOOLS ;
4. libérer la lettre `D` si elle est occupée par le lecteur DVD du laboratoire, puis l’attribuer à DATA ; attribuer `E` à TOOLS ;
5. formater le volume de 7 Go en FAT32, avec le libellé ARCHIVE, puis lui attribuer une lettre ;
6. étendre DATA de 15 Go avec l’espace disponible sur le disque 2.

Le passage de DATA sur les deux disques déclenche, dans la solution, la conversion des disques de base en disques dynamiques ; le résultat attendu est un volume DATA fractionné.

### Alternative MBR décrite séparément

La solution précise que, si le disque a été initialisé en **MBR**, il faut obtenir trois partitions principales et une partition étendue contenant un lecteur logique. Cette alternative ne doit pas être fusionnée avec le chemin GPT ci-dessus : le compte rendu doit indiquer le modèle effectivement suivi.

## 3. Finaliser le volume COMMUN avec `diskpart`

La solution utilise une invite de commandes puis `diskpart` pour cibler le disque et le volume bruts de 15 Go. La séquence conserve notamment :

```text
diskpart
list disk
select disk 1
list volume
select volume X
format FS=NTFS LABEL=COMMUN QUICK
assign letter=k
list vol
```

`X` représente le volume brut de 15 Go identifié dans l’environnement ; ce numéro ne doit pas être supposé identique sur une autre VM. Le contrôle final consiste à vérifier que le lecteur attribué est bien formaté en NTFS.

La solution demande ensuite d’étendre COMMUN avec l’espace libre restant sur le disque 1, de supprimer DATA, puis de recréer DATA avec l’ensemble de l’espace libre des deux disques.

## 4. Relever les volumes de Discovery avec PowerShell

La solution propose les contrôles suivants :

```powershell
Get-Disk | Select Number,Size,PartitionStyle
Get-Volume
Get-Volume -FriendlyName Informatique,Achat-Ventes,Compta
Get-Volume -FriendlyName Informatique,Achat-Ventes,Compta | Select DriveLetter,FileSystem,Label,Size
Set-Volume -DriveLetter C -NewFileSystemLabel "System"
```

Les noms de volumes utilisés pour le filtrage appartiennent à la VM Discovery de la solution. Vérifiez l’existence des volumes avant d’exécuter une commande sur une autre machine.

## Contrôles de résultat

- les deux disques ajoutés sont visibles dans la VM ;
- les tailles, lettres, libellés et systèmes de fichiers demandés correspondent à la partie du scénario effectuée ;
- le chemin GPT ou l’alternative MBR est explicitement identifié ;
- le volume COMMUN est contrôlé après son formatage ;
- la procédure `GestionDuStockage` conserve les preuves demandées ;
- les informations PowerShell correspondent aux volumes réellement présents sur Discovery.

!!! warning "Cibler le bon stockage"
    Le formatage, la suppression et l’extension de volumes sont des opérations destructives ou structurantes. Ne réutilisez ni numéros de disque, ni numéros de volume, ni lettres observés dans la solution sans les vérifier dans la VM concernée.
