# Énoncés — Module 04 — La gestion du stockage

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enoncé du TP - Gestion du stockage

### Systèmes Clients Microsoft

#### Gérer le stockage

#### TP du Module 04 — La gestion du stockage

À travers ce TP, vous serez amené à ajouter des supports de stockage à votre VM puis à créer des volumes sur les disques à l’aide de la console de gestion des disques et à l’aide de diskpart. Enfin, vous découvrirez les volumes présents sur Discovery grâce à PowerShell.

#### Durée estimée

#### 1 heure 30 minutes

#### Énoncé

#### Lisez l'ensemble de ce TP avant de vous lancer dans la pratique

#### À l'aide de VMware WorkStation, ajoutez 2 disques durs de 60 Go

#### chacun à votre VM Win10-XX (Store virtual disk as a single file)

#### Avec la console graphique de votre VM Windows 10

Sur le premier disque, créer 3 partitions principales de 15 Go chacune sans assigner de lettre de lecteur et sans formater.

Créer une 4e partition de 7 Go sans assigner de lettre de lecteur et sans formater. Formater les deux premières partitions de 15 Go en NTFS. La première sera nommée DATA, la seconde TOOLS. Attribuer la lettre D au volume DATA et la lettre E au volume TOOLS. Formater la partition de 7 Go restante en FAT32, que vous nommerez ARCHIVE et lui attribue la lettre de votre choix.

Étendre le volume DATA de 15 Go supplémentaire. Pour cela vous n'utiliserez que l'espace libre disponible sur le disque 2.

#### En ligne de commande sur votre VM Windows 10

Formater la 3 e partition de 15 Go en NTFS. Vous la nommerez COMMUN et lui attribuerez la lettre de votre choix. Étendre le volume COMMUN en utilisant l'espace libre restant sur le disque 1.

Supprimer le volume DATA. Recréer le volume DATA avec l'ensemble de l'espace libre des deux disques.

#### Rédiger une procédure GestionDuStockage reprenant la configuration de

vos disques avec l'interface graphique et avec diskpart. Utilisez psr, un traitement de texte ou un autre outil.

#### Exemple :

#### - Ajoutez un disque dur supplémentaire avec VMware WorkStation

#### - Avec l’interface graphique, initialisez le disque

#### - Créez un volume formaté en NTFS avec une lettre de votre choix sur ce

#### nouveau lecteur

#### - Lancez diskpart

#### - Sur le nouveau disque, créez un volume supplémentaire en NTFS avec une

#### lettre de lecteur

#### Enregistrez votre procédure GestionDuStockage dans le dossier Procédures

#### Investigation sur la VM Discovery à l'aide de PowerShell

Affichez le numéro, la taille et le type de table de partitionnement des disques durs

#### présents sur la VM

Affichez la lettre de lecteur , le nom et la taille totale des volumes qui possèdent un

#### FriendlyName

#### Le volume C: ne possède pas de nom. Attribuez-lui le nom "System"

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
