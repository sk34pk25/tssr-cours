# Énoncé — Module 04 — Debian en mode maintenance

!!! danger "Laboratoire isolé et accès privilégié"
    Le TP utilise des voies de récupération qui peuvent ouvrir une session administrative sans le mot de passe habituel. Réaliser uniquement sur une machine virtuelle de laboratoire autorisée, relever l'état initial et ne pas employer cette méthode pour contourner le contrôle d'accès d'un système qui ne vous appartient pas.

**Sources originales (A) :** `M04TP01 - Énoncé - Debian en mode maintenance`.
**Énoncé du portail (B) :** reformulation structurée des tâches de la source TSSR.

**Durée indicative de la source :** 30 minutes à 1 heure.

## Partie 1 — Serveur Debian sans environnement graphique

1. Démarrer la machine virtuelle de laboratoire et ouvrir le menu GRUB.
2. Utiliser la méthode de maintenance décrite dans le support de cours afin d'obtenir le shell de secours prévu par le TP.
3. Constater l'état initial du système de fichiers racine, puis l'activer en écriture seulement dans le périmètre de la machine de laboratoire.
4. Vérifier si un fichier peut être créé dans l'espace personnel de `root`.
5. Essayer d'accéder au répertoire personnel de l'utilisateur créé à l'installation, relever le résultat et l'expliquer à partir de l'organisation des systèmes de fichiers de la machine.
6. Avant l'arrêt forcé indiqué par l'environnement de laboratoire, synchroniser les écritures et consigner ce qui a été modifié.

## Partie 2 — Serveur Debian avec environnement graphique

1. Démarrer la machine virtuelle sur l'image d'installation Debian prévue pour le laboratoire. Dans VMware, donner le focus à la console et utiliser la touche indiquée par la source pour choisir le CD-ROM ; vérifier qu'il reste connecté après un redémarrage.
2. Dans les options avancées du média, choisir le mode de secours, puis renseigner les paramètres de langue, de clavier et de nom demandés par l'assistant.
3. Sélectionner le système de fichiers racine du système installé à monter.
4. Accéder au fichier `/etc/passwd` du système installé. Vérifier s'il est modifiable sans conserver de modification.
5. Identifier le compte actif dans le shell de secours et déterminer si un mot de passe a été fourni pour y accéder.
6. Quitter le laboratoire en restaurant l'état demandé et en notant la méthode de démarrage utilisée.

## Voir aussi

- [Présentation du TP](index.md)
- [Correction du TP](corrections.md)
- [Cours — Debian en mode maintenance](../../../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance.md)
