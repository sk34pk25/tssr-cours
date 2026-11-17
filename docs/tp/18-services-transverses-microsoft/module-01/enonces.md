# Énoncé — TP 1 — Mise en place de l’infrastructure

Services transverses en environnement Microsoft (RDS/WDS)

Active Directory

TP 1 du Module 1 – Mise en place de l’infrastructure

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1.

Durée estimée

2h00

Objectifs

- Créer un environnement de maquettage contenant trois serveurs, un client et une
machine virtuelle sans système d’exploitation.

- Disposer d’un contexte de domaine Active Directory fonctionnel et y intégrer les
machines.

- Disposer des services DNS et DHCP fonctionnels.
Prérequis

- VMware Workstation doit être installé sur votre machine physique.
- Récupérer des bases VMware Workstation de machines virtuelles sous Windows
Server 2019 et Windows 10, ou (à défaut) les images ISO d’installation de ces

systèmes d’exploitation.

Consignes

Etape 1 : intégration des machines virtuelles

- Créer les 5 machines virtuelles suivantes :
Nom de la VM       Système d’exploitation              RAM      Réseau

INFRA       Windows Serveur 2019 Standard         1024 MB   Vmnet 10

RDS        Windows Serveur 2019 standard         1024 MB   Vmnet 10

DEPLOY       Windows Serveur 2019 standard         1024 MB   Vmnet 10

CLI10               Windows 10 Pro                1024 MB   Vmnet 10

CLINVX               Windows 10 Pro                1024 MB   Vmnet 10

Vous pouvez partir de base de systèmes préinstallés disponible sur le partage distrib

nommé « Distrib »

Services transverses en environnement Microsoft (RDS/WDS)

La machine virtuelle CLINVX ne disposera d’aucun système d’exploitation installé, son type

à renseigner dans VMware Workstation est « Windows 10 x64».

Etape 2 : configuration réseau et nommage des postes

- Vérifier les noms d’hôtes des différentes machines, les modifier au besoin.
- Configurer l’adressage IP suivante sur les machines :
Nom de la VM           Adresse IP

INFRA             192.168.1.1 / 24

RDS              192.168.1.2 / 24

DEPLOY             192.168.1.3 / 24

CLI10              Client DHCP

- Aucune passerelle par défaut n’est à configurer. Renseigner l’adresse IP de INFRA
comme adresse de serveur DNS.

- Activer la règle de pare-feu permettant aux postes de répondre aux requêtes « ping ».
- S’assurer de la bonne communication entre les différentes machines virtuelles.
Etape 3 : installation et configuration des rôles

- Ajouter les rôles suivants au serveur INFRA : Services de domaine Active Directory, DNS,
DHCP.

- Promouvoir INFRA contrôleur de domaine d’un nouveau domaine dans une nouvelle
forêt. Le domaine sera nommé prénom.eni (ou prénom est à remplacer par votre

prénom).

- Configurer le service DHCP en lui ajoutant une plage pour votre réseau. Les adresses à
distribuer par ce service iront de 192.168.1.100 à 192.168.1.199. Le service devra fournir

l’adresse du serveur DNS et le suffixe DNS correspondant à votre domaine.

- Vérifier que CLI10 obtient bien ses informations de configuration IP auprès du service
DHCP puis l’intégrer à votre domaine Active Directory.

- Intégrer les serveurs RDS, DEPLOY et CLI10 dans votre domaine Active Directory.
- Créer les utilisateurs et leurs groupes respectifs d’après les critères suivants et en
respectant les principes de nommage et d’organisation des objets dans l’Active

Directory.

Les cinq prénoms du document source sont remplacés par `prénom1` à `prénom5`, dans l’ordre du tableau. `VotrePrénom` est déjà le placeholder du compte administrateur.

Utilisateur          Service                    Privilège

prénom1           Direction                   Utilisateur

prénom2           Direction                   Utilisateur

prénom3         Pédagogique                   Utilisateur

prénom4          Pédagogique                   Utilisateur

prénom5          Informatique                  Utilisateur

VotrePrénom        Informatique                Administrateur

Etape 4 : snapshot de l’infrastructure

- Réaliser un Snapshot nommé « Atelier 1 OK » de toutes les machines virtuelles de votre
infrastructure.

Services transverses en environnement Microsoft (RDS/WDS)

Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les

ressources à télécharger.

Vidéos du module citées comme prérequis : **Inexistant**.

Bases de machines, ISO, installeurs ADK, MDT, applications et pilotes du partage distrib : **Inexistant** dans ce dossier.
