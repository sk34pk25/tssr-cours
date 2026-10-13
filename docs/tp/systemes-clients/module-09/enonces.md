# Énoncé — Module 09 — Les pilotes et les imprimantes

## Contexte

Vous travaillez sur une VM Windows 10 et une seconde VM Discovery qui héberge une imprimante. L'atelier consiste à rechercher et afficher des informations sur les pilotes et les imprimantes, à installer l'imprimante partagée puis à vérifier sa présence.

**Durée estimée : 1 heure.** Lisez l'ensemble de l'atelier avant de commencer.

## Environnement

- `Win10-XX` ;
- VM Discovery ;
- imprimante partagée `HP_LaserJet_Accueil_RDC_Bât2` disponible via Discovery.

Les machines, l'imprimante et les pilotes associés sont des prérequis de laboratoire mentionnés dans la source ; ils ne sont pas fournis dans le dossier Drive M09 live. Si une authentification est demandée, utilisez les identifiants fournis par le formateur.

## 1. Exporter les informations sur les pilotes

Depuis `Win10-XX`, utilisez la commande `cmd.exe` adaptée pour générer les fichiers CSV suivants :

- `Pilotes_detail.csv`, contenant les informations détaillées sur l'ensemble des pilotes ;
- `Pilotes_signature.csv`, contenant les informations sur la signature des pilotes.

Ouvrez et convertissez ces fichiers avec Excel si nécessaire.

## 2. Inspecter le matériel dans l'interface graphique

Avec la console MMC adaptée, affichez les informations détaillées sur le pilote graphique. Relevez le `VENDOR_ID` et le `DEVICE_ID` du périphérique observé.

## 3. Contrôler les imprimantes disponibles

Répondez à la question source : **quelles sont les 4 imprimantes disponibles par défaut** sur la VM `Win10-XX` ? Vérifiez si elles apparaissent également dans la console MMC adaptée.

## 4. Configurer Microsoft Print to PDF

Éditez les propriétés de Microsoft Print to PDF :

1. définissez cette imprimante comme imprimante par défaut ;
2. sans autre configuration, utilisez l'orientation paysage demandée ;
3. imprimez une page de test pour vérifier le résultat.

## 5. Connecter l'imprimante partagée

Depuis `Win10-XX`, connectez-vous à l'imprimante `HP_LaserJet_Accueil_RDC_Bât2` disponible via Discovery. Attendez le temps nécessaire à l'installation du pilote, puis vérifiez sa présence dans le panneau de configuration et la console MMC adaptée.

## 6. Interroger l'imprimante depuis Discovery

Avec PowerShell, affichez d'abord les informations par défaut de l'imprimante `HP LaserJet`. Affichez ensuite :

- son nom ;
- son état partagé ou non ;
- le nom du partage ;
- le nom du port ;
- son emplacement ;
- sa priorité.

## Livrables et vérifications

Conservez les deux exports CSV, les relevés matériels demandés, le résultat de la page de test PDF et les informations PowerShell attendues. Consultez la [correction](corrections.md) seulement après votre tentative.
