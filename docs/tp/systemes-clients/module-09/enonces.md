# Énoncés — Module 09 — Les pilotes et les imprimantes

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enonc‚ du TP - Les pilotes et les imprimantes

### Systèmes Clients Microsoft

#### Les pilotes et les

#### imprimantes

#### TP du Module 09 — Les pilotes et les imprimantes

Au cours de ce TP, vous serez amené à rechercher et à afficher des informations concernant les pilotes et les imprimantes de votre VM Windows 10 ainsi que de votre seconde VM. Votre seconde VM héberge une imprimante et il s'agira d'y accéder via le réseau, de l'installer et de vérifier sa présence sur votre système.

#### Durée estimée

#### 1 heure

#### Énoncé

#### Lisez l'ensemble de cet atelier avant de vous lancer dans la pratique

#### Sur Win10-XX

#### Avec la commande cmd.exe adaptée, générez les fichiers CSV suivants :

  - Pilotes_detail.csv recensant les informations détaillées sur l’ensemble des

#### pilotes

  - Pilotes_signature.csv contenant les informations sur la signature des pilotes

#### Vous pourrez ouvrir et convertir ces fichiers avec Excel

#### Avec l'interface graphique

  - Affichez les informations détaillées sur le pilote graphique avec la console

MMC adaptée. Retrouvez le VENDOR_ID et le DEVICE_ID du périphérique.

#### Gestion des imprimantes

Quelles sont les 4 imprimantes disponibles par défaut sur votre VM Win10-XX ? Les

#### retrouvez-vous dans la console MMC adaptée ?

#### Éditez les propriétés de l'imprimante Microsoft Print to PDF

  - Faites en sorte que Microsoft Print to PDF soit définie comme imprimante par

défaut. Sans configuration particulière, l'imprimante sortira des documents en orientation paysage. Imprimez une page de test pour vérification.

#### Depuis votre VM Win10-XX, connectez-vous à l'imprimante partagée

HP_LaserJet_Accueil_RDC_Bât2 disponible via Discovery.

  - Attendez quelques minutes le temps que le pilote s'installe puis vérifier sa

#### présence dans le panneau de configuration et dans la console MMC

#### adaptée

#### Sur Discovery

#### Gestion de configurations personnalisées

À l'aide de PowerShell, afficher les informations par défaut concernant l'imprimante "HP LaserJet". Affichez maintenant les informations suivantes concernant "HP LaserJet" :

  - Son nom

  - Si elle est partagée ou non

  - Le nom du partage

  - Le nom du port

  - Son emplacement

  - Sa priorité

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
