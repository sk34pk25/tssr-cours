# Démonstrations — Module 02 — Active Directory

## Fiche démo 1 - Mise en place d'un contexte AD

### Mise en place d’un contexte Active Directory

### Démonstration 01 du module 02

Cette démonstration décrit les différentes étapes relatives à la mise en place d’un contexte Active Directory

### Déroulement

- Prérequis

- Avoir installé et configuré une VM Windows Server.

- Avoir renommé correctement la VM.

- Avoir attribué une IP fixe à la VM.

- Ajout du rôle

Lors de l’accès à la session du serveur, le Gestionnaire de Serveur ou Serveur Manager se lance automatiquement.

Pour lancer la console permettant la gestion des disques, cliquer sur Manage (1), puis sur Add Roles and Features (2).

- Ajout du rôle Active Directory

Cliquer sur le bouton Next (1). Sur la fenêtre Select installation type, cliquer sur le bouton Next (2). Cliquer sur le bouton Next (3) sur la fenêtre Select destination server. Cocher Active Directory Domain Services (4), puis cliquer sur le bouton Add Features (5) de la fenêtre contextuelle qui vient de s’ouvrir. Puis, cliquer sur le bouton Next (6). Sur la fenêtre Select features, cliquer sur le bouton Next (7). Cliquer sur le bouton Next (8) sur la fenêtre Active Directory Domain Services. Enfin, cocher la case Restart the destination server automatically if required (9), puis cliquer sur le bouton Yes (10) de la fenêtre contextuelle qui apparaît. Enfin, cliquer sur le bouton Install (11) pour lancer le processus d’installation du rôle. Cliquer sur le bouton Close (12) pour terminer le processus d’installation.

- Configuration de l’Active Directory

Une fois l’installation terminée, un « flag » jaune (1) apparaît sur le dashboard. Cliquer sur le drapeau (2), puis sur la ligne Promote this server to a domain controller (3). Dans la partie Select the deployment operation (4), cocher le bouton radio Add a new forest (5). Par la suite, spécifier le nom de votre domaine dans l’input box Root domaine name (6), puis cliquer sur le bouton Next (7). Renseigner un mot de passe de récupération et le confirmer (8), puis cliquer sur le bouton Next (9). Dans la fenêtre DNS Options, cliquer sur le bouton Next (10). Cliquer sur le bouton Next (11) dans la fenêtre Additional Options. Cliquer sur le bouton Next (12) dans la fenêtre Paths. Dans cette fenêtre l’ensemble des éléments de configurations sont repris, cliquer sur le bouton Next (13). Une fois les prérequis validés (14), cliquer sur le bouton Install (15). À l’issue de l’installation, la VM va redémarrer pour appliquer les modifications.

### Étapes illustrées dans le support

1. Avancer depuis DNS Options. L’avertissement de délégation DNS est présenté dans l’assistant.
2. Dans Additional Options, vérifier le nom NetBIOS MONDOMAINE.
3. Dans Paths, conserver les chemins proposés C:\Windows\NTDS pour la base et ses journaux et C:\Windows\SYSVOL pour SYSVOL.
4. Dans Review Options, relire le domaine, les niveaux fonctionnels et les composants, puis passer à Prerequisites Check.
5. Lorsque tous les contrôles prérequis réussissent, lancer Install.

- Validation de la configuration AD

À la suite du redémarrage de la VM, la mire de connexion doit proposer la connexion sur le domaine précédemment configuré (1).

## Fiche démo 2 - Les bases de gestion d'un domaine

### Les bases de gestion d’un domaine

### Démonstration 02 du module 02

Cette démonstration décrit les différentes étapes relatives aux opérations courantes dans la gestion d’un domaine Active Directory.

### Déroulement

- Ouverture de la console MMC

Après l’ouverture de session sur la session du domaine, cliquer sur le menu démarrer (1), puis sur la tuile Windows Administrative Tools (2).

- Ajout du raccourci dans la barre des tâches

Dans l’explorateur qui vient de s’ouvrir, faire un clic droit sur la ligne Active Directory Users and Computers (1), puis sur la ligne Pin to taskbar (2). L’icône (3) apparaît.

- Accès à la console Active Directory

Cliquer sur le raccourci précédemment créé afin de voir l’arborescence de l’Active Directory précédemment configuré.

- Création Unité d’Organisation

Faire un clic droit à la racine du domaine (1), puis sur la ligne New (2) et enfin sur la ligne Organizational Unit (3). Indiquer dans l’input box Mon Entreprise (4), puis cliquer sur le bouton OK (5). L’UO apparaît dans l’arborescence du domaine (6).

- Création Arborescence

Dans l’UO « Mon Entreprise » qui vient d’être créée, créer les UO suivantes :

### - Utilisateurs

### - Ordinateurs

### - Groupes

- Création Utilisateur

Se positionner dans l’UO Utilisateurs (1). Faire un clic droit, aller sur la ligne New (2), puis sur la ligne User (3). Dans les deux input box First name et Last name (4), indiquer un prénom et un nom. Dans l’input box User logon name (5), indiquer un login de connexion pour l’utilisateur, puis cliquer sur le bouton Next (6). Sur les lignes Password et Confirm password (7), indiquer un mot de passe avec Majuscule + Minuscule + Chiffre, puis cliquer sur le bouton Next (8). Enfin, cliquer sur le bouton Finish (9). L’utilisateur apparaît dans l’UO Utilisateurs (10).

- Création Ordinateur

Se positionner dans l’UO Ordinateurs (1). Faire un clic droit, aller sur la ligne New (2), puis sur la ligne Computer (3). Dans l’input box Computer name (4), indiquer un nom de machine, puis cliquer sur le bouton Next (5). Cliquer sur le bouton Next (6). Enfin, cliquer sur le bouton Finish (7). L’ordinateur apparaît dans l’UO Ordinateurs (8).

- Création Utilisateur

Se positionner dans l’UO Groupes (1). Faire un clic droit, aller sur la ligne New (2), puis sur la ligne Group (3). Dans l’input box Group Name (4), indiquer le nom du groupe, puis cliquer sur le bouton OK (5). Le groupe apparaît dans l’UO Groupes (6).

- Intégration Ordinateurs dans AD

Prérequis : avoir une VM Windows 10 configurée (correctement nommée, sur le même sous-réseau que la VM sur laquelle l’Active Directory est installé).

Aller dans les propriétés système de la VM Windows 10. Pour ce faire, appuyer simultanément sur la touche Windows du clavier ainsi que la touche R du clavier. Indiquer control dans l’input-box (1), puis cliquer sur le bouton OK (2). Cliquer sur le lien Système et sécurité (3). Cliquer sur le lien Système (4). Cliquer sur le lien Modifier les paramètres (5). Cliquer sur le bouton Modifier (6). Cocher le bouton radio Domaine et indiquer le nom du domaine à rejoindre (7), puis cliquer sur le bouton OK (8). Saisir les informations de sécurité (9), puis cliquer sur le bouton OK (10). Après redémarrage de la VM, la mire de connexion propose la connexion sur le domaine.

### Étapes illustrées dans le support

1. Sur W10-Client2, ouvrir Système puis Modifier les paramètres.
2. Dans Propriétés système, utiliser Modifier et choisir Domaine. Saisir mondomaine.local, puis valider.
3. S’authentifier avec le compte autorisé à joindre le domaine et le secret fourni par le formateur.

- Vérification de l’ajout du nouvel ordinateur dans l’AD

Se connecter sur la VM sur laquelle est installé l’Active Directory. Ouvrir la console Active Directory Users and Computers. Aller sur l’UO Computers (1). Faire un clic droit sur le nouvel ordinateur, puis sur le menu Move (2). Sélectionner l’UO Ordinateurs précédemment créée (3), puis cliquer sur le bouton OK (4). L’ordinateur se trouve désormais dans l’UO Ordinateurs précédemment créé.

## Fiche démo 3 - L'accès aux ressources

### L’accès aux ressources

### Démonstration 03 du module 02

Cette démonstration décrit comment gérer les accès à des ressources partagées dans un contexte de domaine Active Directory.

### Déroulement

- Création de groupes de Domaine Local

Ouvrir la console Active Directory Users and Computers sur la VM où est installé l’Active Directory. Se positionner sur l’Unité d’Organisation Groupes (1). Créer quatre nouveaux groupes.

L’ensemble de ces groupes sera de type « Domaine Local » :

### DL_Public_CT = Groupe de Domaine Local pour la ressource Public en accès Contrôle Total

### DL_Public_M = Groupe de Domaine Local pour la ressource Public en accès Modification

### DL_Public_L = Groupe de Domaine Local pour la ressource Public en accès Lecture

### DL_Public_R = Groupe de Domaine Local pour la ressource Public en accès Refus

- Affectations Groupe Global Utilisateur

Se positionner sur l’Unité d’Organisation Utilisateurs (1). Double cliquer sur l’utilisateur présent dans l’Unité d’Organisation. Cliquer sur l’onglet Member Of (2). Cliquer sur le bouton Add (3). Dans l’input-box Enter the object name to select, indiquer le nom du Groupe Global créé dans la démonstration précédente (4), puis appuyer sur la touche [Entrée] du clavier. Enfin, cliquer sur le bouton Apply (5) pour valider l’ajout du groupe à l’utilisateur.

- Affectations groupe de Domaine Local

Se positionner sur l’Unité d’Organisation Groupes (1). Double cliquer sur le groupe DL_Public_M. Cliquer sur l’onglet Members (2). Cliquer sur le bouton Add… (3). Dans l’input-box Enter the object name to select, indiquer le nom du Groupe Global créé dans la démonstration précédente (4), puis appuyer sur la touche [Entrée] du clavier. Enfin, cliquer sur le bouton Apply (5) pour valider l’ajout du groupe.

- Création de la ressource partagée

Se positionner sur un volume (ici le RAID1 créé lors des démonstrations précédentes). Création d’un nouveau dossier nommé Public (1). Faire un clic droit sur le dossier Public puis sur le menu Properties (2). Cliquer sur l’onglet Sharing (3), puis sur le bouton Advanced Sharing… (4). Cliquer sur la case à cocher Share this folder (5), puis cliquer sur le bouton Permissions (6). Ajouter l’ensemble des droits pour le groupe Everyone (7), puis cliquer sur le bouton Apply (8). Cliquer sur le bouton Apply (9), puis sur le bouton OK (10). Cliquer sur l’onglet Security (11). Sélectionner le groupe Users (12), puis cliquer sur le bouton Edit… (13). Sélectionner le groupe Users, puis cliquer sur le bouton Remove (14). Cliquer sur le bouton Apply (15). Cliquer sur le bouton Add… (16). Ajouter dans l’input-box les 4 DL précédemment créés (17), puis cliquer sur le bouton OK (18). Positionner les droits adéquats pour chaque DL. Enfin, cliquer sur le bouton Apply (19), puis le bouton OK (20).

### Étapes illustrées dans le support

1. Dans les propriétés du dossier Public sur H:, ouvrir Partage puis Partage avancé.
2. Cocher Share this folder, conserver le nom Public, ouvrir Permissions et accorder Full Control à Everyone dans l’exemple.
3. Valider le partage, ouvrir l’onglet Security du dossier, puis modifier les autorisations. La capture montre la suppression de l’entrée Users dans le réglage proposé.

### Étapes illustrées dans le support

1. Dans Permissions for Public, ajouter les groupes DL_Public_CT, DL_Public_L, DL_Public_M et DL_Public_R.
2. Attribuer le contrôle total au groupe CT, la lecture au groupe L et la modification au groupe M. Le groupe R reçoit les refus indiqués par la capture.
3. Appliquer les réglages puis fermer la boîte de dialogue.

## Fiche démo 4 - La gestion des impressions

### La gestion des impressions

### Démonstration 04 du module 02

Cette démonstration décrit comment gérer les impressions dans un contexte Active Directory

### Déroulement

- Installation du rôle Services d’impression et de numérisation de documents

Sur la VM W2019, lancer l’utilitaire d’installation de rôle (via le dashboard), puis cocher la case Print and Document Services (1). Cliquer sur le bouton Add Features (2) sur la fenêtre contextuelle. Cliquer sur le bouton Next (3). Cliquer sur le bouton Next (4). Cliquer sur le bouton Next (5). Cocher la case Restart the destination server automatically if required (6), puis cliquer sur le bouton Install (7). Enfin, cliquer sur le bouton Close (8).

### Étapes illustrées dans le support

1. Dans l’assistant d’ajout, continuer après Select features puis lire Print and Document Services.
2. Dans Select role services, cocher Print Server. Confirmer la sélection, lancer Install, vérifier la réussite et choisir Close.

- Ajout du raccourci dans la barre des tâches

Ouvrir Administrative Tools, puis création du raccourci Print Management (1) dans la barre des taches (2).

- Installation d’un nouveau driver.

NB : un update via Windows Update sera utile s’il n’y a pas de driver sélectionnable dans l’utilitaire d’ajout.

Ouvrir la console Print Management depuis le raccourci précédemment créé. Se positionner sur la ligne Driver (1). Faire un clic droit dans la zone blanche centrale, puis sur le menu Add Driver… (2). Dans l’utilitaire d’installation, cliquer sur le bouton Next (3). Cliquer sur le bouton Next (4) (pour la démonstration, seuls des drivers x64 seront installés). Sélection d’un driver, ici HP Color LaserJet Pro MFP M274 PCL 6 (5), puis cliquer sur le bouton Next (6). Enfin, cliquer sur le bouton Finish (7). Le driver apparaît correctement (8).

### Étapes illustrées dans le support

1. Dans Print Management, ouvrir Drivers, puis Add Driver.
2. Dans l’assistant, sélectionner l’architecture x64 puis le constructeur HP et le pilote HP Color LaserJet Pro MFP M274 PCL 6.
3. Terminer puis vérifier le pilote dans Drivers.

- Installation d’un nouveau port.

Se positionner sur la ligne Ports (1). Faire un clic droit dans la zone blanche centrale, puis sur la ligne Add Port… (2). Sélection de la ligne Standard TCP/IP Port (2), puis cliquer sur le bouton New Port… (3). Cliquer sur le bouton Next de l’utilitaire d’ajout de port (4). Indiquer dans l’input-box Printer Name or IP Adress l’adresse IP de l’imprimante (5). Indiquer dans l’input-box Port Name un nom de port (6), puis cliquer sur le bouton Next (7). Cliquer sur le bouton Next (8). Enfin, cliquer sur le bouton Finish (9). Le port apparaît correctement (10).

- Installation d’une nouvelle imprimante

Se positionner sur la ligne Printers (1). Faire un clic droit dans la zone blanche centrale, puis sur la ligne Add Printer… (2). Sélectionner le bouton radio Add a new printer using an existing port (3), sélectionner dans la combo-box le port créé précédemment (4). Cliquer sur le bouton Next (5). Sélectionner le bouton radio Use an existing printer driver on the computer (6), puis le driver précédemment installé (7). Cliquer sur le bouton Next (8). Cliquer sur le bouton Next (9). Cliquer sur le bouton Next (10). Enfin, cliquer sur le bouton Finish (11). L’imprimante apparaît correctement (12).

### Étapes illustrées dans le support

1. Dans Print Management, ouvrir Printers puis Add Printer.
2. Choisir Add a new printer using an existing port et le port TCP/IP standard P_192.168.1.100.
3. Choisir Use an existing printer driver on the computer et le pilote HP Color LaserJet Pro MFP M274 PCL 6.
4. Dans Printer Name and Sharing Settings, renseigner le nom et activer Share this printer. Vérifier le nom de partage, l’emplacement et le commentaire.

### Étapes illustrées dans le support

1. Relire le récapitulatif Printer Found. Il affiche le modèle HP Color LaserJet Pro MFP M274 PCL 6, le port TCP/IP standard P_192.168.1.100 et le nom de partage.
2. Choisir Next puis Finish après la réussite. La capture finale montre l’imprimante prête dans Print Management.

- Installation imprimante sur poste client

L’imprimante étant installée sur le serveur d’impression, elle est désormais disponible pour l’ensemble des utilisateurs du domaine.

Une fois connecté sur la VM W10 avec un utilisateur du domaine, ouvrir l’explorateur de document. Indiquer dans la barre, le nom de la VM sur lequel le serveur d’impression est installé (1), puis appuyer sur la touche [Entrée]. Double cliquer sur l’imprimante nouvellement installée sur le serveur cible (2). Quand la fenêtre contextuelle apparaît, c’est que le processus d’installation est terminé, l’imprimante est correctement installée la VM cliente.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-02-module-02.md)
