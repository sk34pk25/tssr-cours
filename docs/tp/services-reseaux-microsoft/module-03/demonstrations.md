# Démonstrations — Module 03 — Stratégies de groupe

## Fiche démo 1 - Appréhender la console GPMC

### Appréhender la console GPMC

### Démonstration 01 du module 03

### Cette démonstration décrit les différents points relatifs à la console de GPO

### Déroulement

- Prérequis

Avoir installé et configuré une VM Windows Server.

Avoir renommé correctement la VM.

Avoir attribué une IP fixe à la VM.

L’objectif de la GPO qui va être créée est de cacher l’icône Internet Explorer pour les utilisateurs d’une OU spécifique.

- Ouverture de la console MMC

Après l’ouverture de session sur la session du domaine, cliquer sur le menu démarrer (1), puis sur la tuile Windows Administrative Tools (2).

- Ajout du raccourci dans la barre des tâches

Dans l’explorateur qui vient de s’ouvrir, faire un clic droit sur la ligne Group Policy Management (1), puis sur le menu Pin to taskbar (2). L’icône (3) apparaît.

- Accès à la console GPMC

Cliquer sur le raccourci précédemment créé afin de voir la console des GPO apparaître.

- Création GPO utilisateur

Faire un clic droit sur la ligne Utilisateur (1) ou tout autre OU, puis sur le menu Create GPO in the domain, and lin kit here… (2). Indiquer le nom de la GPO (3) puis cliquer sur le bouton OK. La GPO apparaît (4).

- Ajout des paramètres à la GPO

Faire un clic droit sur la ligne GPO_Exemple (1), puis sur le menu Edit (2). Aller dans les menus User Configuration (3) , Administrative Template (4), Desktop (5). Double cliquer sur la ligne Hide Internet Explorer icon on desktop (6). Cocher le bouton radio Enabled (7) puis cliquer sur le bouton Apply (8). Enfin cliquer sur le bouton OK.

### Étapes illustrées dans le support

1. Dans Hide Internet Explorer icon on desktop, sélectionner Enabled puis Apply.
2. Le paramètre illustré masque l’icône Internet Explorer du Bureau et de la barre de lancement rapide pour l’utilisateur.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-03-module-03.md)
