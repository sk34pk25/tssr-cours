# TP — tp01-journalisation

Exécuter l’énoncé avant de consulter la correction. Les consignes, captures et solutions de la source sont accessibles dans l’onglet Original ; les précisions pédagogiques sont séparées.

- [Énoncés complets](enonces.md)
- [Corrigés commentés](corrections.md)
- [Cours du module](../../../../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md)

## Points à surveiller

Le journal systemd peut être persistant ; vérifier sa configuration et les services installés. Une crontab système ajoute un champ utilisateur. Les captures emploient parfois `warning.log` au singulier alors que l’énoncé demande `warnings.log` : choisir ce dernier de façon cohérente. La légende « 1ère minute » de la correction de planification contredit 10 h : la ligne attendue commence par `0 10`. Le serveur voit sshd et les shells distants, pas nécessairement un processus nommé PuTTY.

[Liste des TP du cours](../../index.md).
