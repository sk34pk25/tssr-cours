# Corrections — Module 04 — La gestion du stockage

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - Gestion du stockage

### Systèmes Clients Microsoft

#### Gérer le stockage

#### TP du Module 04 — La gestion du stockage

- A l'aide de VMware WorkStation, ajoutez 2 disques durs de 60 Go chacun à votre VM

Win10-XX (Store virtual disk as a single file).

#### Dans VMware WorkStation, faites un clic droit sur votre VM Win10-XX

#### Pour rajouter un disque, cliquez sur Add… en bas de la fenêtre

#### Hard Disk &gt; Next

#### SCSI (Recommanded) &gt; Next

`Create a new virtuel disk &gt; Next`

#### Maximum disk size (GB): 60

#### Store virtual disk as a single file &gt; Next

#### Entrez un nom parlant pour le fichier &gt; Finish

Le nouveau disque apparaît dans la liste du matériel de votre VM.

#### Répétez ces étapes pour rajouter un second disque dur dans la VM

#### Avec la console graphique de votre VM Windows 10

- Sur le premier disque, créer 3 partitions principales de 15Go chacune sans assigner

de lettre de lecteur et sans formater. Ouvrir la console de gestion des disques (disponible dans MaConsole sur le bureau ou via diskmgmt.msc). Les deux nouveaux disques sont présents mais pas encore initialisés. Faire un c lic droit sur

#### Disque 1 &gt; Initialiser le disque

Initialiser les deux disques avec une GUID Partition Table.

#### Les prochaines étapes doivent être réalisées trois fois

Faire un clic droit sur l'espace non alloué du disque 1 &gt; Nouveau volume simple

#### L'assistant se lance &gt; Suivant

Taille totale du volume simple en Mo : 15360 (ce qui correspond à 15 Go). Ne pas attribuer de lettre de lecteur ni de chemin d'accès de lecteur. Ne pas formater ce volume.

#### Terminer

À l'issue de la création de vos trois partitions principales sur le disque 1, vous devez obtenir

#### un écran similaire à celui présenté ci-dessous :

#### Refaire les étapes 1 à 6 deux fois de suite

- Créer une 4e partition de 7 Go sans assigner de lettre de lecteur et sans formater.

Faire un clic droit sur l'espace non alloué du disque 1.

#### Nouveau volume simple

#### L'assistant démarre &gt; Suivant

Taille totale du volume simple en Mo : 7168 (ce qui correspond à 7 Go). Ne pas attribuer de lettre de lecteur ni de chemin d'accès de lecteur. Ne pas formater ce volume. Nous nous trouv ons sur un disque initialisé avec une table de partitionnement GPT. Nous possédons donc 4 partitions principales. Si vous avez initialisé votre disque avec une table de partitionnement au format MBR, pas de problème. Vous devez cependant obtenir 3 partitions principales ainsi qu'une partition étendue contenant un lecteur logique.

- Formater les deux premières partitions de 15Go en NTFS. La première sera nommée

DATA, la seconde TOOLS. Faire un clic droit sur la première partition principale du disque 1 &gt; Formater

Faire un clic droit sur la seconde partition principale du disque 1 &gt; Formater

- Attribuer la lettre D au volume DATA et la lettre E au volume TOOLS.

Faire un c lic droit sur le Volume D: Lecteur DVD pour d'abord libérer la lettre D et ensuite l'attribuer au nouveau volume. Faire un clic droit sur le Volume D: &gt; Modifier la lettre de lecteur et les chemins d'accès…

#### Supprimer &gt; Oui

Vous pouvez ensuite attribuer la lettre de lecteur que vous souhaitez (exemple Z) Faire un clic droit sur le volume DATA &gt; Modifier la lettre de lecteur et les chemins d'accès…

Ajouter la lettre D. Faire un clic droit sur le volume TOOLS &gt; Modifier la lettre de lecteur et les chemins d'accès… Ajouter la lettre E. Après ces étapes, les volumes sont visibles dans l'explorateur Windows, donc utilisables ! Une notification en bas à droite du bureau nous l'indique d'ailleurs.

- Formater la partition de 7Go restante en FAT32, que vous nommerez ARCHIVE et

attribuer lui la lettre de votre choix.

#### Faire un clic droit sur la partition de 7 Go &gt; Formater…

Faire un clic droit sur ARCHIVE &gt; Modifier la lettre de lecteur et les chemins d'accès… Ajouter la lettre de votre choix.

- Étendre le volume DATA de 15Go supplémentaire. Pour cela vous n'utiliserez que

l'espace libre disponible sur le disque 2.

#### Faire un clic droit sur le volume DATA &gt; Etendre le volume

#### Suivant

Clic sur disque 2 &gt; Ajouter &gt;

#### Clic sur disque 1 &gt; &lt; Supprimer

#### Sélectionner l'espace en Mo : 15360

#### Suivant

#### Terminer

Le système indique qu'il va automatiquement basculer les disque s de base en disque s

#### dynamiques pour qu'ils puissent travailler "en équipe" &gt; Oui

La légende et les codes couleur ont évolué. Les partitions principales se sont transformées en volume simple et le volume DATA en volume fractionné.

#### En ligne de commande sur votre VM Windows 10

- Formater la 3 e partition de 15Go en NTFS. Vous la nommerez COMMUN et lui

attribuerez la lettre de votre choix. Lancer une fenêtre de ligne de commande cmd.exe.

`diskpart`

#### list disk

`select disk 1`

#### list volume

`select volume X (où X correspond au volume de 15 Go bruts RAW, le volume n) ; 1 dans le`

#### cas de cette solution)

#### format FS=NTFS LABEL=COMMUN QUICK

#### assign letter=k

list vol (pour vérifier que le lecteur K de 15 Go est bien formaté en NTFS) .

- Étendre le volume COMMUN en utilisant l'espace libre restant sur le disque 1.

- Supprimer le volume DATA.

- Recréez le volume DATA avec l'ensemble de l'espace libre des deux disques.

#### Investigation sur la VM Discovery à l'aide de PowerShell

- Affichez le numéro, la taille et le type de table de partitionnement des disques durs

#### présents sur la VM

`Get-Disk | select number,size,PartitionStyle`

- Affichez la lettre de lecteur, le nom et la taille totale des volumes qui possèdent un

#### FriendlyName

#### Pour vérifier les informations générales :

`Get-Volume`

#### Pour n'afficher que les disques qui possèdent un FriendlyName

`Get-Volume -FriendlyName Informatique,Achat-Ventes,Compta`

#### Pour répondre à la consigne :

`Get-Volume -FriendlyName Informatique,Achat-Ventes,Compta | Select DriveLetter,`

#### FileSystem,LabelSize

- Le volume C: ne possède pas de nom. Attribuez-lui le nom "System"

`Set-Volume -DriveLetter C -NewFileSystemLabel "System"`
