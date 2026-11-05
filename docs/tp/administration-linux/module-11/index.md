# TP — Module 11 — Droits sur les fichiers et répertoires

Exécuter l’énoncé avant de consulter la correction. Les consignes, captures et solutions de la source sont accessibles dans l’onglet Original ; les précisions pédagogiques sont séparées.

- [Énoncés complets](enonces.md)
- [Corrigés commentés](corrections.md)
- [Cours du module](../../../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md)

## Points à surveiller

Dans un répertoire sticky, le propriétaire du répertoire et un utilisateur privilégié restent des exceptions autorisées à la suppression. SetGID règle le groupe hérité, mais pas automatiquement le droit d’écriture de tous les fichiers. Tester plusieurs utilisateurs avec leur umask réel.

[Liste des TP du cours](../index.md).
