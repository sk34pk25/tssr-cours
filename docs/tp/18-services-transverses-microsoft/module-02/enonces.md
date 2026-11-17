# Énoncé — TP 2 — Bureaux distants

Services transverses en environnement Microsoft (RDS/WDS)

Mise en œuvre d’un

bureau à distance

TP 2 du Module 2 – Remote Desktop Services (RDS) – Bureaux distants

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 et 2 et d’avoir

réalisé le TP 1 du Module 1.

Durée estimée

2h00

Objectifs

- Intégrer le service RDS à une infrastructure existante.
- Configurer le service RDS afin de fournir les services de bureaux virtuels aux
utilisateurs.

Consignes

Etape 1 : Installation et configuration du service RDS

- Installer le rôle des services bureau à distance sur RDS.
- Ajouter les services de rôle nécessaires à la mise en œuvre du service.
- Effectuer la configuration du service :
- Type de déploiement : Standard
- Scénario de déploiement : Déploiement de bureaux basés sur une session
- Tous les services de rôle nécessaires au fonctionnement du service seront hébergés
par le serveur RDS.

- Créer une collection avec les paramètres de configuration par défaut :
- Ne pas activer les disques de profil utilisateur
- Vérifier dans le Gestionnaire de serveur les paramétrages effectués :
- Vue d’ensemble / Serveurs / Collections
Etape 2 : Test du service Bureau à distance

- Depuis CLI10, tester l’ouverture d’une session distante sur RDS avec un des comptes
utilisateur de l’Active Directory (laisser la session ouverte) :

- En cas de dysfonctionnement, vérifier les paramètres de la collection.
Services transverses en environnement Microsoft (RDS/WDS)

- Modifier la configuration des services RDS afin que seuls les membres des services
Direction et Pédagogique puissent se connecter en bureau à distance sur RDS :

- Tester avec les comptes prénom3 et prénom5 (laisser les sessions ouvertes).
- Modifier la configuration des services RDS afin que les lecteurs locaux du client ne
puissent pas être utilisés via la connexion distante :

- Tester avec les comptes prénom1 et prénom4 (laisser les sessions ouvertes).
- Tester les fonctionnalités de gestion des connexions :
- Déconnexion / Envoyer un message / Cliché instantané / Fermer la session
Etape 3 : Snapshot de l’infrastructure

- Réaliser un Snapshot nommé « Atelier 2 OK » des machines virtuelles.
Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les

ressources à télécharger.

Vidéos du module citées comme prérequis : **Inexistant**.

Bases de machines, ISO, installeurs ADK, MDT, applications et pilotes du partage distrib : **Inexistant** dans ce dossier.
