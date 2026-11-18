# Énoncé — TP1 — Mise en œuvre de MDT

Services transverses en environnement Microsoft (RDS/WDS)

Mise en œuvre de MDT

TP1 du Module 6 – Microsoft Deployment Tools (MDT)

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 4 à 6 et d’avoir

réalisé le TP précédent.

Il est nécessaire d’avoir accès au partage distrib nommé « distrib ».

Durée estimée

3h30

Objectifs

- Implémenter MDT et le configurer pour permettre le déploiement d’images.
Consignes

Etape 1 : Récupération et installation des outils de déploiement

- Récupérer les sources d’installation d’ADK (attention ADK contient 2 applications à
installer) et MDT disponibles sur le partage distrib et les copier sur le bureau du serveur

DEPLO.

- Installer ADK, ADKWinPEAddons puis MDT sur ce serveur.
Etape 2 : Etablir une configuration MDT minimale

- Depuis le serveur INFRA, lancer la console de gestion des comptes du domaine
Active Directory.

- Créer un compte de service qui sera utilisé dans le cadre du processus de
déploiement. Le mot de passe associé au compte n’expirera pas et ne pourra pas

être changé par l’utilisateur.

- Sur le serveur DEPLOY, créer un dossier MDT à la racine du lecteur D.
- Lancer la console de gestion de MDT
- Créer un nouveau partage de déploiement
- Pour partager le dossier D:\MDT
- Remarque : à terme, l’installation de système lié à ce partage sera
totalement automatisée (sans interaction utilisateur).

- Ce partage vise à déployer le système d’exploitation Windows 10 Pro intégré aux
services WDS (WDS installé au TP précédent). Paramétrer l’image d’installation MDT

qui sera liée à WDS.

Services transverses en environnement Microsoft (RDS/WDS)

- Créer une nouvelle séquence de tâches
- Ayant pour identifiant votre numéro de stagiaire
- Avec pour nom : DEP-W10-PRO
- Basée sur le modèle « Client Standard »
- Pour déployer le système « Windows 10 Pro »
- Les autres paramètres de la séquence seront à compléter à votre
convenance

- Mettre à jour le partage de déploiement pour forcer la prise en compte des
modifications apportées au service.

- Dans l’explorateur Windows, depuis les propriétés du dossier du partage de
déploiement (D:\MDT), afficher la liste de contrôle d’accès de ce partage. Le

groupe des Utilisateurs authentifiés devra disposer du Contrôle Total sur ce partage.

Etape 3 : Mettre à jour l’image de boot du service WDS pour utiliser celle fournie par MDT

- Lancer la console de gestion des services de déploiement Windows et remplacer
l’image de démarrage actuellement configurée par celle mise à disposition par

MDT.

Etape 4 : Test de déploiement d’un client

Avant chaque nouveau test de déploiement,

appliquer de nouveau le Snapshot « Atelier 4 OK »

sur CLINVX

- Démarrer la machine virtuelle CLINVX et vérifier qu’elle arrive à l’écran de bienvenue
MDT.

- Depuis cet écran, modifier au besoin le choix du clavier.
- Lancer l’assistant de déploiement et d’installation de système.
- Identifiez-vous avec le compte de domaine créé au début de l’étape
2.

- Laisser les choix par défaut en réponse aux questions de la séquence
de tâche.

- Lancer le déploiement.
- S’assurer que le déploiement aboutisse bien à son terme (sans erreur).
Etape 5 : Automatiser totalement le processus de déploiement d’un système client

- Depuis la console de gestion de MDT, modifier le fichier Bootstrap.ini.
- Renseigner les informations d’authentification pour l’accès au partage de
déploiement.

- Faire en sorte de ne pas afficher le message de bienvenue MDT.
Texte à trous, à compléter :

Services transverses en environnement Microsoft (RDS/WDS)

Penser    à   ……………………………………………………………….        [côté MDT] et

………………………………………………………………………………………… [côté WDS] pour

prendre en compte les modifications apportées.

- Relancer l’installation du client et relever les questions posées par l’installeur.
………………………………………………………………………………………………………………….

…………..………………………………………………………………………………………………………

……………………..……………………………………………………………………………………………

………………………………..…………………………………………………………………………………

…………………………………………..………………………………………………………………………

- Trouver les paramètres permettant de passer les étapes identifiées précédemment
et de fournir les informations demandées.

- Ajouter ces paramètres / valeurs à votre fichier CustomSettings.ini.
- Si besoin et par mesure de simplification, les informations liées à l’intégration
au domaine pourront être omises et le poste configuré en contexte de groupe

de travail.

- Vous pouvez mettre en place le monitoring pour surveiller le déroulement du
déploiement.

- Vérifier si l’installation est à présent totalement automatisée.
Etape 6 : Snapshot de l’infrastructure

- Réaliser un Snapshot nommé « Atelier 5 OK » des machines virtuelles.
Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les

ressources à télécharger.

Vidéos du module citées comme prérequis : **Inexistant**.

Bases de machines, ISO, installeurs ADK, MDT, applications et pilotes du partage distrib : **Inexistant** dans ce dossier.
