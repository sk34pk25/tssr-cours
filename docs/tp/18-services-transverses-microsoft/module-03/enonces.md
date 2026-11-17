# Énoncé — TP du module 3 — Publication d’applications

Services transverses en environnement Microsoft (RDS/WDS)

Publier des applications

TP du Module 3 – Remote Desktop Services (RDS) - Publication

d’applications

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 3 et d’avoir

réalisé les TP 1 et 2.

Durée estimée

2h00

Objectifs

- Configurer le service RDS afin de publier des applications RemoteApp
- Accéder à des applications publiées depuis un poste client
- Via le Portail Web
- Via le Menu Démarrer
Consignes

Etape 1 : Préparation du serveur RDS

- Récupérer l’application Filezilla et LibreOffice depuis le partage distrib et les installer sur
le serveur RDS.

- Choisir les paramètres d’installation par défaut.
- Vérifier la bonne exécution des applications sur le serveur RDS.
Etape 2 : Publication d’application RemoteApp

- Publier les applications LibreOffice Calc / LibreOffice Writer / Filezilla dans la collection
configurée lors de l’atelier 2.

- Tester l’accès aux applications publiées sur CLI10 depuis le portail web d’Accès Bureau
à distance en utilisant le navigateur web Internet Explorer à l’adresse

https://rds.prenom.lab/RDweb

- Faire en sorte de regrouper les applications dans des dossiers Bureautique et Outils sur le
portail web.

Etape 3 : Accès aux applications publiées

- Limiter l’accès à toutes les applications uniquement aux membres des services Direction,
Pédagogique et Informatique.

Services transverses en environnement Microsoft (RDS/WDS)

- Limiter l’accès à Filezilla uniquement aux membres du service Informatique.
- Vérifier l’accès aux applications depuis le portail web pour prénom3, prénom2 et prénom5.
Etape 4 : Configuration des raccourcis pour les applications publiées

- Depuis le contrôleur de domaine, récupérer et exporter le certificat de RDS.
- Sur INFRA, lancer Internet Explorer.
- Indiquer l’URL du service RDS Web Accès https://rds.prenom.lab/rdweb.
- Cliquer sur Erreur de Certificat puis sur Afficher les certificats.
- Depuis l’onglet Détails, cliquer sur Copier dans un fichier.
- L’assistant d’export du certificat se lance.
- Choisir pour format d’export X509 encodé en base 64
- Nommer le certificat RDS.cer et l’enregistrer localement sur la machine.
- Utiliser une stratégie de groupe pour rendre le certificat de confiance pour les postes du
domaine.

- Sur INFRA, lancer la console de Gestion des stratégies de groupes.
- Créer une nouvelle stratégie liée au domaine nommée Deploy-Certificats-
Clients.

- Editer cette stratégie : Configuration ordinateur / Stratégie / Paramètres
Windows / Paramètres de sécurité / Stratégie de clé publique / Autorités de

certification racines de confiance et cliquer sur Importer.

- Depuis l’assistant d’import de certificats, sélectionner le certificat exporté
précédemment. L’importer dans la stratégie.

- Forcer l’actualisation des stratégies de groupe sur CLI10 et vérifier la bonne prise en
compte de la nouvelle stratégie.

- Depuis CLI10, se reconnecter au portail d’accès au Bureau à distance par le Web et
vérifier qu’il n’y a plus d’erreur de certificat.

- Pour prénom1, rendre accessibles les raccourcis RemoteApp dans le menu Démarrer :
- Configurer le composant « Connexion RemoteApp et Bureau à distance ».
- URL de connexion au serveur RDS :
https://rds.prenom.lab/RDweb/feed/webfeed.aspx

- Vérifier la présence des raccourcis dans le menu Démarrer.
- Quelles applications sont accessibles ?
- Pour prénom5, configurer les raccourcis RemoteApp dans le menu Démarrer et vérifier leur
présence

- Quelles applications sont accessibles ?
Etape 5 : Snapshot de l’infrastructure

- Réaliser un Snapshot nommé « Atelier 3 OK » des machines virtuelles.
Services transverses en environnement Microsoft (RDS/WDS)

Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les

ressources à télécharger.

Vidéos du module citées comme prérequis : **Inexistant**.

Bases de machines, ISO, installeurs ADK, MDT, applications et pilotes du partage distrib : **Inexistant** dans ce dossier.
