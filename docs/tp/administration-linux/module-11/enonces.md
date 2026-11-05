# Énoncés — Module 11 — Droits sur les fichiers et répertoires

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M11TP01 - Enoncé - Gestion des permissions

### Gestion des permissions

Durée estimée

45 minutes à 1 heure

### Créer une structure de stockage sur le serveur sans interface graphique pour les fichiers utilisateurs.

Trouver les solutions pour les besoins suivants :

- Public : un répertoire public accessible en lecture / écriture pour tous les utilisateurs
- Dépôt : un répertoire depot accessible en lecture / écriture pour tous les utilisateurs mais dans lequel seul le propriétaire du fichier pourra le supprimer
- Admin : un répertoire admin accessible en lecture / écriture pour le groupe admin uniquement
- Documentation : un répertoire documentation accessible en lecture pour tous les utilisateurs et en lecture/écriture pour le groupe documentation.  Faire en sorte que tout nouveau fichier créé dans ce répertoire appartienne au groupe documentation

Vous aurez besoin de configurer les droits spéciaux pour certains des répertoires. Faites-en sorte que l’arborescence créée soit pertinente d’un point de vue FHS. Tester les paramétrages avec les différents types de comptes utilisateurs (administrateur, utilisateur, gestionnaire de la documentation ...).

## Clarifications et contrôles — complément pédagogique

Dans un répertoire sticky, le propriétaire du répertoire et un utilisateur privilégié restent des exceptions autorisées à la suppression. SetGID règle le groupe hérité, mais pas automatiquement le droit d’écriture de tous les fichiers. Tester plusieurs utilisateurs avec leur umask réel.

Pour les justifications et références officielles, lire le [cours optimisé](../../../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
