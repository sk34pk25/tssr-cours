# Énoncé · Installation et configuration de Backup Exec

Durée estimée : 3 heures. Avoir suivi les modules 1 et 2 et réalisé le TP d’infrastructure. La transcription des tableaux est dans l’onglet **Cours Original** du [module 02](../../../modules/16-sauvegarde-et-restauration/module-02-types-de-sauvegarde.md).

Objectifs : installer Veritas Backup Exec ; créer le stockage iSCSI ; sauvegarder le contrôleur et le serveur de fichiers.

1. Sur srv-ad1, créer un utilisateur et ouvrir une session avec lui.
2. Sur srv-backup, installation personnalisée locale en français. Passer les avertissements de vérification et l’ajout de licence. Options : défaut, Advanced Disk-based Backup, NDMP. Compte de service : admin du domaine. Instance locale de SQL Express.
3. Initiateur iSCSI vers `192.168.30.1`, port `3260`. Formater le disque de 80 Go.
4. Stockage sur disque nommé `backup`, description `backup sur nas`, 4 écritures simultanées.
5. Ajouter Srv-ad1 avec mise à niveau de l’agent. Job `srv-ad1 job`, complète puis incrémentale, complète initiale, démarrage immédiat.
6. Ajouter Srv-fic1. Si l’erreur `0xe00086ce` apparaît, copier `C:\Program Files\Veritas\Backup Exec\Agents` vers `C:\` de la cible par `c$`, exécuter `C:\Agents\RAWSX64\setup.exe`, puis refaire l’ajout.
7. Job `srv-fic1 job`, complète, complète initiale, démarrage immédiat.

[Correction inexistante](corrections-installation.md)
