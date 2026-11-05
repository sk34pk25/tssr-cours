# Énoncés — Module 06 — Gestion des paquets logiciels

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M06TP01 - Enoncé - Gestion des paquets logiciels

### Gestion des paquets

Durée estimée

30 à 45 mn

### Énoncé :

### I. Gérer les installations logicielles avec interface graphique

Afficher le composant les "Software & Updates"

- Vérifier les paramétrages dans les différents onglets
- Rechercher les informations relatives aux dépôts configurés
- Désactiver le dépôt CDROM si nécessaire

Vérifier la configuration du fichier sources.list dans /etc/apt :

- Quelles lignes définissent l'emplacement des sources d'installation des paquets binaires ?
- Quelles lignes définissent l'emplacement des mises à jour ?
- Pouvez-vous récupérer les paquets sous la forme du code source ?
- Désactiver l'accès aux dépôts concernant le code source.

Effectuer une mise à jour des paquets installés avec apt :

- Combien de paquets seront mis à jour ? ( pourquoi ? )

Installer le logiciel suivant avec l'outil "Logiciels"

- Gparted (outil de partitionnement)
- Lancer cette application depuis les menus Gnome

Installer les paquets suivants avec la commande apt :

- vim  (Editeur VI amélioré)
- Serveur SSH   (rechercher d’abord le nom du paquet adapté)
- terminator

Afficher les informations sur ces 3 paquets avec les commandes :

- $ apt show \<paquet\>
- $ dpkg -L \<paquet\>

Connectez-vous via Putty sur votre VM Debian graphique.

### II. Gérer les installations logicielles sans interface graphique

Configurer manuellement les dépôts Internet dans le fichier /etc/apt/sources.list

- Ajouter les directives :
- deb http://ftp.fr.debian.org/debian/ bookworm main
- deb http://ftp.fr.debian.org/debian/ bookworm-updates main
- Garder la directive :
- deb http://security.debian.org/debian-security bookworm-security main

Vérifier les mises à jour disponibles

- Combien de paquets seront mis à jour ?
- Effectuer les mises à jour et redémarrer si nécessaire

Installer les paquets suivants avec la commande apt :

- vim  (éditeur VIM)
- cifs-utils (outils pour la connexion aux partages SMB)

Configurer le fonctionnement de VIM pour les deux Postes:

- Lancer l'édition : # vi /etc/vim/vimrc
- Décommenter la ligne contenant la mention : syntax on (active la coloration syntaxique)
- Ajouter les modifications suivantes pour retrouver un comportement normal de vim en créant le fichier : /etc/vim/vimrc.local   source /usr/share/vim/vim90/defaults.vim  let skip\_defaults\_vim = 1  if has('mouse')  set mouse=r  endif  set paste Solution

## Clarifications et contrôles — complément pédagogique

Le scénario d’installation cible Debian 11, mais certaines consignes demandent Bookworm et certaines captures montrent Bullseye. Ne pas mélanger ces dépôts ni transformer implicitement l’exercice en migration. Le chemin defaults.vim dépend de la version de Vim. `apt-get search` est corrigé en `apt-cache search` ou `apt search` ; dpkg interroge l’état local.

Pour les justifications et références officielles, lire le [cours optimisé](../../../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
