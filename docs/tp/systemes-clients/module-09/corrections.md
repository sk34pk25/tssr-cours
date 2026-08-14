# Corrections — Module 09 — Les pilotes et les imprimantes

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - Les pilotes et imprimantes

### Systèmes Clients Microsoft

#### Les pilotes et les

#### imprimantes

#### TP du Module 09 — Les pilotes et les imprimantes

#### Sur Win10-XX

- Avec la commande cmd.exe adaptée, générez les fichiers CSV suivants :

  - Pilotes_detail.csv recensant les informations détaillées sur l’ensemble des

#### pilotes

  - Pilotes_signature.csv contenant les informations sur la signature des pilotes

- Vous pourrez ouvrir et convertir ces fichiers avec Excel

#### driverquery /v /fo CSV &gt; pilotes_details.csv

#### driverquery /si /fo CSV &gt; pilotes_signatures.csv

#### Possibilités d'ouvrir les fichiers CSV avec Excel

#### Sélectionner la colonne A

#### Menu Données

#### Convertir

#### Délimité &gt; Suivant

#### Cocher Virgule

#### Terminer

- Avec l'interface graphique

  - Affichez le s informations détaillées sur le pilote graphique avec la console

MMC adaptée. Retrouvez le VENDOR_ID et le DEVICE_ID du périphérique.

#### Rechercher &gt; devmgmt.msc

#### Déployez le nœud Cartes graphiques

#### Clic droit sur VMware SVGA 3D &gt; Propriétés

#### Onglet Détails

#### Propriété ID compatibles

#### Le VENDOR_ID est 15AD

#### Le DEVICE_ID est 0405

Il est possible de se rendre sur le site www.pcilookup.com et d'y renseigner ces ID pour retrouver des informations sur le matériel en question.

#### Gestion des imprimantes

Quelles sont les imprimantes disponibles par défaut sur votre VM Win10 -XX ? Les retrouvez-

#### vous dans la console MMC adaptée ?

#### Panneau de configuration

#### Matériel et audio

#### Périphériques et imprimantes

Les imprimantes disponibles par défaut sont FAX, Microsoft Print to PDF , Microsoft XPS

#### Document Writer

#### Dans la console Gestionnaire de périphérique

Nœud Files d'attente à l'impression, nous retrouvons nos imprimantes.

- Éditez les propriétés de l'imprimante Microsoft Print to PDF

  - Faites en sorte que Microsoft Print to PDF soit définie comme imprimante par

défaut. Sans configuration particulière, l'imprimante sortira des documents en orientation paysage. Imprimez une page de test pour vérification. Clic droit sur l'imprimante Microsoft Print to PDF &gt; Définir comme imprimante par défaut Clic droit sur l'imprimante Microsoft Print to PDF &gt; Propriétés de l'imprimante

#### Préférence

#### Orientation : Paysage

#### OK

#### Imprimer une page de test

Cette imprimante est virtuelle et va sortir un document numérique au format PDF. Indiquer le nom et l'emplacement du futur document (par exemple sur le bureau) et vérifiez

#### qu'il est bien au format paysage

- Depuis votre VM Win10 -XX, connectez -vous à l'i mprimante partagée

#### HP_LaserJet_Accueil_RDC_Bât2 disponible via Discovery

  - Attendez quelques minutes le temps que le pilote s'installe puis vérifier sa

#### présence dans le panneau de configuration et dans la console MMC adaptée

Avec votre explorateur Windows, dans la barre de navigation, entrez le chemin UNC suivant

#### \\@ ip de Discovery\HP_LaserJet_Accueil_RDC_Bât2

Renseigner les login / mdp de l'utilisateur adm lorsque vous êtes challengé.

#### Faites un clic droit sur HP_LaserJet_Accueil_RDC_Bât &gt; Connecter…

Au bout d'un certain temps, la nouvelle imprimante partagée apparaît dans la liste des imprimantes dans le panneau de configuration.

#### Sur Discovery

#### Gestion de configurations personnalisées

- À l'aide de PowerShell, afficher les informations par défaut concernant l'imprimante

#### "HP LaserJet"

`Get-Printer -name "HP LaserJet"`

- Affichez maintenant les informations suivantes concernant "HP LaserJet" :

  - Son nom

  - Si elle est partagée ou non

  - Le nom du partage

  - Le nom du port

  - Son emplacement

  - Sa priorité

`Get-Printer -Name "HP LaserJet" | select Name,Shared,ShareName,PortName,Location,`

#### Priority
