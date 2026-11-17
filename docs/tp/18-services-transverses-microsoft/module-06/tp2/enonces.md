# Énoncé — TP2 — Applications et pilotes

Services transverses en environnement Microsoft (RDS/WDS)

Déployer des applications

et drivers

TP 2 du Module 6 – Microsoft Deployment Toolkit (MDT)

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 4 à 6 et d’avoir

réalisé les TP précédents.

Il est nécessaire d’avoir accès au partage distrib nommé « distrib ».

Durée estimée

2h00

Objectifs

Toujours avec WDS et MDT, il vous est demandé de déployer :

- 2 applications : le navigateur web Firefox et le client FTP Filezilla
- Des drivers : ceux de VMware qui sont manquants dans la VM précédemment
déployée CLINVX

Consignes

Etape 1 : Récupérer les sources des applications et des drivers

Depuis Distrib, récupérer et copier sur DEPLOY :

- Les applications Firefox et Filezilla (extension en .exe).
- Les drivers compressés et archivés au format ZIP de VMware Workstation pour les
systèmes d’exploitation client Windows 10.

Etape 2 : Déployer les applications

Mettre en place dans MDT la configuration qui va permettre de déployer :

- Firefox → il doit être automatiquement installé à chaque déploiement.
- Filezilla → on laisse le choix d’installer ou non cette application
Etape 3 : Déployer les drivers

Mettre en place la configuration sous MDT pour installer les drivers et ne plus afficher d’erreur

Services transverses en environnement Microsoft (RDS/WDS)

de pilotes manquants dans le Gestionnaire de périphériques suite au déploiement.

Installer les pilotes

VMware liés à

ces périphériques

Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les

ressources à télécharger.

Vidéos du module citées comme prérequis : **Inexistant**.

Bases de machines, ISO, installeurs ADK, MDT, applications et pilotes du partage distrib : **Inexistant** dans ce dossier.
