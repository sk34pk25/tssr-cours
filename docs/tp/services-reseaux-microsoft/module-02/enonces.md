# Énoncés — Module 02 — Active Directory

## Enoncé du TP 1 - Mise en place d’un domaine Active Directory

### Services réseau en environnement Microsoft Mise en place d’un domaine Active Directory

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 2 et réalisé les TP précédents.

30 minutes à 1 heure

Prérequis :

Disposer des machines virtuelles installées dans le TP 01 du module 01.

Création d’un contexte de domaine Active Directory :

### Domaine Monprenom.local

### W19-CD1 Contrôleur de domaine Serveur DNS

### W10-CLI1 Client membre

### W19-SRV1 Serveur membre

Analyse de différents cas d’ouverture de session :

Assurez-vous au préalable que les trois hôtes communiquent entre eux.

Pouvez-vous ouvrir une session avec un compte local sur W10-CLI1 ?

### Oui Non

Pouvez-vous ouvrir une session avec un compte du domaine sur W10-CLI1 ?

### Oui Non

Avec quel(s) compte(s) utilisateur(s) ?

Pouvez-vous ouvrir une session sur le contrôleur de domaine W19-CD1 ?

### Oui Non

Avec quel(s) compte(s) utilisateur(s) ?

Dans quelle(s) console(s) et dans quel emplacement pouvez-vous visualiser les machines hôtes membres du domaine ?

### Preuves attendues

Relever les comptes ordinateurs et comparer une ouverture de session locale avec une ouverture de session de domaine. Préciser le compte utilisé sur chaque machine.

## Enoncé du TP 2 - Utilisateurs et groupes en contexte de domaine AD

### Services réseau en environnement Microsoft Utilisateurs et groupes en contexte de domaine AD

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 2 et réalisé les TP précédents.

1 à 2 heures

Prérequis :

Avoir réalisé le TP précédent du Module 02.

Recherche d’objets dans l’annuaire : Utilisez les fonctions de recherche de l’AD pour contrôler si les comptes locaux existants existent toujours.

Si oui, où se trouvent-ils ?

Où se trouve le compte d’ordinateur W19-CD1 ?

Création de la structure de stockage des objets de l’annuaire :

Créez les unités d’organisation en vous basant sur les informations du tableau ci-dessous.

### Création des modèles et comptes utilisateurs

Créez des modèles d’utilisateurs pour les services :

Les caractéristiques des comptes utilisateurs selon leur service d’appartenance sont indiquées ci-après :

### Les utilisateurs du service Production

### Leur tranche horaire est soit

- De 6h à 12h o De 13h à 21h Chaque collaborateur n’est affecté qu’à une tranche horaire Ils travaillent tous dans l’agence de Vertou Ils font partie du groupe Production

### Les utilisateurs du service Informatique

Ils disposent de l’ensemble des privilèges à l’échelle du domaine (à l’exception de la secrétaire) Ils travaillent tous à l’agence de Nantes

### Les utilisateurs du service Commercial

Ils ne pourront se connecter que sur les postes clients Windows 10 Ils travaillent tous dans l’agence de Rennes

| Type | Nom |
| --- | --- |
| Agence | Nantes |
| Agence | Vertou |
| Agence | Rennes |
| Services | Production |
| Services | Informatique |
| Services | Commercial |
| Fonction dans les services | Intérimaire |
| Fonction dans les services | Secrétaire |
| Ordinateurs | Serveurs Membres |
| Ordinateurs | Postes Clients |

En partant de vos nouveaux modèles :

Vous contrôlerez la bonne prise en compte des caractéristiques des comptes créés.

Dépendance aux services de domaine AD : 1. Arrêtez le service DNS du contrôleur de domaine. 2. Redémarrez le poste client puis effectuez les tests suivants.

Parvenez-vous à ouvrir une session sur le domaine avec l’utilisateur précédemment utilisé ?

### Oui Non

Parvenez-vous à ouvrir une session sur le domaine avec un utilisateur qui n’a encore jamais utilisé W10-CLI1 ?

### Oui Non

Après avoir relancé le service DNS, arrêtez le service Netlogon, quelle est la conséquence de cet arrêt ?

Pour rétablir la situation, relancez les services Services de domaine Active Directory.

| Service Informatique | Service Production | Service Commercial |
| --- | --- | --- |
| Stéphane | Philippe | Camille (Secrétaire) |
| Sophie (Secrétaire) | Pascal | Claude |
| Samir | Paul | Corentin |
| mon prénom | Isabelle (Intérimaire) | Ines (Intérimaire) |

Cadre de réponse vide dans le support.

### Preuves attendues

Contrôler les douze comptes par service, site, groupe et restriction de connexion. Comparer les essais DNS/Netlogon avec un compte déjà utilisé et un compte neuf.

## Enoncé du TP 3 - L’accès aux ressources

### Services réseau en environnement Microsoft L’accès aux ressources

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 2 et réalisé les TP précédents.

1 à 2 heures

Prérequis :

Avoir réalisé le TP précédent du Module 02.

### Ajout et préparation d’un nouvel espace disque

Ajoutez deux disques de 10 Go chacun au serveur membre W19-SRV1.

Créez un volume en miroir de 5 Go au format NTFS.

Ce volume sera accessible via une lettre de lecteur et depuis C:\datasafe.

L’espace restant (de ces deux disques) sera accessible via le lecteur D:\.

Configuration de profils itinéraires :

Modifier le compte modèle du service Commercial afin que chaque utilisateur du service dispose d’un profil itinérant.

Ce profil sera stocké sur le serveur membre depuis C:\datasafe\users et accessible depuis un partage intitulé « Profils ». Les comptes existants sont-ils impactés par ces modifications ?

### Oui Non

Sinon, apportez les modifications nécessaires.

### Partage de ressources

### Configurez le partage de ressources en respectant les contraintes indiquées

Le partage Production :

Accessible uniquement aux membres du service Production et aux administrateurs (ces derniers pourront tout y faire).

Le partage Applications :

Accessible en lecture à tous les membres de la société et en écriture aux membres du service Informatique. Les secrétaires n’auront aucun accès.

Le partage Prospects :

Accessible exclusivement aux Commerciaux.

Ajouter un partage Public qui donnera accès aux données se trouvant sur D:\ sur le serveur membre W19-SRV1. Ce partage sera accessible à tous en lecture.

| Nom du partage | Localisation sur W19-SRV1 |
| --- | --- |
| Production | C:\datasafe\prod |
| Applications | C:\datasafe\appli |
| Prospects | C:\datasafe\en_cours |

### Preuves attendues

Tester chaque partage depuis W10-CLI1 avec un utilisateur concerné et un utilisateur exclu. Comparer lecture, modification et refus, puis vérifier la synchronisation du profil commercial.

## Enoncé du TP 4 - La gestion des impressions

### La gestion des impressions

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 2 et avoir réalisé les TP précédents.

30 mn à 1 heure

Prérequis :

- Avoir réalisé le TP précédent du Module 02.

### Mise en place du service d’impression

W19-SRV1 sera le serveur en charge de la gestion des imprimantes. Le fichier de pilote unique et universel est présent sur le partage distrib (lecteur R:) à l’endroit suivant : ‘Drivers\Drivers_imprimante_TSSR090_services_réseau_Microsoft’, il commence par upd-pcl6-x64-… Dans ce fichier compressé, le fichier d’installation “.inf” à utiliser est hpzipa23.inf Configuration d’imprimantes L’entreprise vient d'investir dans un périphérique d'impression réseau à destination du service commercial sur le site de Rennes. Le modèle est HP Color LaserJet M552. Réalisez les actions nécessaires sur le serveur afin de pouvoir mettre à disposition ce périphérique sur le réseau.

Adresse IP Nom imprimante Param. par défaut Qui peut imprimer ?

| Adresse IP | Nom imprimante | Paramètres par défaut | Qui peut imprimer ? |
| --- | --- | --- | --- |
| 172.28.10.46 | Imp-Commercial-35RDC | Recto/Verso | Service commercial |

Paramètres supplémentaires :

- Les administrateurs du domaine auront le contrôle total sur la gestion de ces imprimantes

- Les imprimantes seront publiées dans l’annuaire Active Directory La société possède un périphérique HP Laserjet 5 destinée à imprimer des bons de livraison/retrait pour le service production. Les livreurs doivent impérativement récupérer ceux-ci avant de quitter la plateforme logistique. L'imprimante actuelle ne suffit plus aujourd’hui pour suivre la cadence de l'usine. La direction a donc décidé d'investir dans deux nouveaux périphériques d'impression de modèle HP Color LaserJet Pro MFP M274 réunies au sein d’un « pool » d’imprimantes, permettant de paralléliser les travaux et donc de gagner du temps. Réalisez les actions nécessaires sur le serveur afin de mettre à disposition ces périphériques sur le réseau.

Paramètres supplémentaires :

- Les administrateurs du domaine auront le contrôle total sur la gestion de cette imprimante

- Les périphériques seront configurés dans un « pool » d’imprimantes

- L’imprimante sera publiée dans l’annuaire Active Directory Installation d’une imprimante sur un poste client

- Installer manuellement l’imprimante partagée IMP-Commercial-35RDC sur le poste client W10

- Tester l’impression avec un compte utilisateur membre du groupe G-Commercial

| Adresse IP | Nom imprimante | Qui peut imprimer ? |
| --- | --- | --- |
| 172.28.10.90 et 172.28.10.91 | Imp-BL44-Usine | Service production |

### Preuves attendues

Vérifier les ports TCP/IP, la file, le pilote, le recto verso, le pool et la publication AD. Tester une impression du compte commercial depuis W10.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-02-module-02.md)
