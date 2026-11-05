# TP — Module 04 — Debian en mode maintenance

Exécuter l’énoncé avant de consulter la correction. Les consignes, captures et solutions de la source sont accessibles dans l’onglet Original ; les précisions pédagogiques sont séparées.

- [Énoncés complets](enonces.md)
- [Corrigés commentés](corrections.md)
- [Cours du module](../../../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance.md)

## Points à surveiller

Le shell `init=/bin/bash` ne monte pas nécessairement le volume séparé de `/home`. Identifier les montages avant d’interpréter un répertoire vide. Utiliser un tiret ASCII dans `mount -o`. Le TP demande d’observer l’accès à passwd ; aucune modification arbitraire de ce fichier n’est nécessaire.

[Liste des TP du cours](../index.md).
