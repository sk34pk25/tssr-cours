# Énoncés — Module 09 — Gestion des espaces de stockage — File System

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M09TP01 - Enoncé - Préparation des systèmes de fichiers

### Préparation des systèmes de fichiers

Durée estimée

30 à 45 minutes

### I. Gestion des systèmes de fichier

A partir du volume logique lvvar, configurer un système de fichier ext4 avec une étiquette VAR

Agrandir le système de fichier présent dans le volume logique home afin qu’il utilise toute la place du volume logique.

### II. Migration du répertoire /var

Migrer le répertoire /var vers le volume logique var tout en préservant les données existantes.

Conseils de mise en œuvre :

- Faites un snapshot de votre VM
- Vérifier l'utilisation de /var avant de copier les fichiers (lsof).
- Prendre toutes les précautions nécessaires pour éviter l’écriture dans l’arborescence de /var afin de pouvoir copier correctement les fichiers
- Utiliser un montage temporaire pour pouvoir copier les données de l'ancien vers le nouveau volume
- Copier les données en préservant les permissions

### III. Automatisation du montage au démarrage : sur la station avec environnement graphique

Activer le montage automatique au démarrage du volume logique lvvar vers /var

## Clarifications et contrôles — complément pédagogique

Le montage masque le contenu précédent ; il ne le migre pas. Confirmer l’arrêt des écritures avant la copie, préserver les métadonnées nécessaires et conserver un retour arrière. Tester l’entrée fstab avec un montage réellement lu depuis ce fichier, puis contrôler findmnt avant de redémarrer.

Pour les justifications et références officielles, lire le [cours optimisé](../../../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
