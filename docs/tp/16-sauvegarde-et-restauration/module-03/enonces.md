# Énoncé · Sauvegarde et restauration Veeam

Durée estimée : 1 heure. Avoir suivi les modules 1 à 3 et réalisé le TP précédent. Transcription dans le [module 03](../../../modules/16-sauvegarde-et-restauration/module-03-gestion-du-stockage.md).

Objectifs : installer Veeam Backup & Replication ; sauvegarder des VM ; restaurer une VM.

1. Sur SRV-HyperV, ouvrir le port 445, Accès réseau (NP-in).
2. Sur Srv-backup, désinstaller Backup Exec et installer VEEAM 12 backup & replication.
3. Inventory, Add Server : nom `SRV-HyperV`, type Microsoft Hyper-V Server (Standalone), compte `SRV-HyperV\administrateur`, task limit 4. L’énoncé écrit « Crédential ».
4. Vérifier la présence de SRV-AD1 et SRV-FIC1.
5. Home, Backup job, Virtual Machine. Nom `SVGD-FIC1`, VM `Srv-Fic1`, stockage Default Backup Repository, task limit 4. Exécution immédiate.
6. Si la complète n’a pas d’erreur, supprimer srv-fic1 dans Hyper-V, restaurer la VM entière, puis vérifier que le serveur est opérationnel.

[Correction inexistante](corrections.md)
