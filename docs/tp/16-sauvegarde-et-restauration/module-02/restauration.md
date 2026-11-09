# Énoncé · Sauvegarde et restauration Backup Exec

Durée estimée : 1 heure. Avoir réalisé le TP d’installation. Transcription dans le [module 02](../../../modules/16-sauvegarde-et-restauration/module-02-types-de-sauvegarde.md).

Objectifs : restaurer un utilisateur de l’annuaire ; créer un partage NTFS ; dupliquer les sauvegardes.

1. Vérifier la complète srv-ad1. S’il n’y a pas d’erreur, supprimer sur srv-ad1 l’utilisateur créé au TP précédent.
2. Restauration granulaire de cet utilisateur seul, puis test de connexion.
3. Sur srv-fic1, ajouter un disque de 45 Go et le partage `backup-fic1`.
4. Ajouter ce partage au pool de srv-backup.
5. Le job srv-ad1 doit dupliquer vers `backup-fic1` après la complète et après l’incrémentale. L’énoncé écrit « le doit job doit effectuer une duplication ».
6. Vérifier les paramètres de stockage des jobs, puis relancer une complète.

[Correction inexistante](corrections-restauration.md)
