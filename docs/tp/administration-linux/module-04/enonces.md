# Énoncés — Module 04 — Debian en mode maintenance

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M04TP01 - Enoncé - Debian en mode maintenance

### Debian en mode maintenance

Durée estimée

30 minutes à 1 heure

### I. Sur le serveur Debian sans environnement graphique

Utiliser le menu GRUB pour démarrer le serveur en mode maintenance et sans avoir besoin de s’authentifier avec le mot de passe de root (voir support de cours)

- Activer l’écriture sur la partition racine.
- Pouvez-vous créer un fichier dans l’espace personnel du compte root ?
- Pouvez-vous accéder au répertoire personnel de l’utilisateur créé à l’installation ?
- Est-ce normal ?

### II. Sur le serveur Debian avec environnement graphique

Démarrer dans le "Rescue mode" (dans "Advanced options") à partir de l'ISO d'installation Debian\* :

- Sélectionner la langue, le nom (comme lors d'une installation)
- Sélectionner le système de fichiers racine à monter

Accéder au fichier /etc/passwd sur votre disque dur.

- Pouvez-vous le modifier ? (attention à ne rien casser !!)
- Avec quel utilisateur êtes-vous connecté ?
- Avez-vous indiqué un mot de passe ?

### \* Menu de démarrage dans VMware Workstation:

Pour démarrer depuis le CD, appuyez sur la touche "Echap" lors de l'affichage du logo VMware au démarrage du système.

Attention, pensez à faire le "focus" sur votre VM en cliquant dans la fenêtre console afin que la touche "Echap" soit bien prise en compte par votre VM (et non par votre poste physique.)

En cas de redémarrage, pensez à connecter votre CDROM

## Clarifications et contrôles — complément pédagogique

Le shell `init=/bin/bash` ne monte pas nécessairement le volume séparé de `/home`. Identifier les montages avant d’interpréter un répertoire vide. Utiliser un tiret ASCII dans `mount -o`. Le TP demande d’observer l’accès à passwd ; aucune modification arbitraire de ce fichier n’est nécessaire.

Pour les justifications et références officielles, lire le [cours optimisé](../../../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
