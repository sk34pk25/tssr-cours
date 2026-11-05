# TP — Module 08 — Gestion des espaces de stockage avancée — LVM

Exécuter l’énoncé avant de consulter la correction. Les consignes, captures et solutions de la source sont accessibles dans l’onglet Original ; les précisions pédagogiques sont séparées.

- [Énoncés complets](enonces.md)
- [Corrigés commentés](corrections.md)
- [Cours du module](../../../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md)

## Points à surveiller

Identifier le VG existant et le contrôleur SCSI réel avant de reprendre les noms de la correction. `lvextend -l +100%FREE` consomme tous les extents libres du VG visé. Le TP suivant prend en charge le système de fichiers ; sans adaptation de cette couche, un LV agrandi ne suffit pas.

[Liste des TP du cours](../index.md).
