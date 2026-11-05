# Mémo — Systèmes de fichiers Debian

**Repères du module 9 et de son TP ; les précisions techniques sont justifiées dans le cours optimisé.**

| Étape | Commandes | Contrôle |
|---|---|---|
| Identifier | `lsblk -f`, `blkid`, `lvs` | Bon périphérique, type, UUID et étiquette |
| Créer ext4 | `mkfs.ext4 -L VAR /dev/vgsystem/lvvar` | Cible vérifiée : le formatage remplace ses structures |
| Examiner ext | `tune2fs -l /dev/vgsystem/lvvar` | Paramètres réellement présents |
| Adapter home | `resize2fs /dev/vgsystem/lvhome` | LV déjà agrandi, format compatible |
| Monter temporairement | `mount /dev/vgsystem/lvvar /mnt/var` | Point créé, puis `findmnt /mnt/var` |
| Démonter | `umount /mnt/var` | Aucun usage bloquant |
| Tester fstab | `mount /var`, puis `findmnt /var` | Source, cible, type et options corrects |

Les noms vgsystem/lvvar/lvhome correspondent à une correction : relever les noms présents avant d’utiliser les exemples. Le type du volume doit convenir à l’outil ; `resize2fs` n’est pas un outil universel pour tous les formats.

## Entrée du TP

```text
LABEL=VAR /var ext4 defaults 0 2
```

Les six champs sont source, cible, type, options, dump et vérification. L’étiquette doit identifier le volume attendu de façon unique sur la machine. Un nom `/dev/sdX` dépend de la détection ; un UUID cloné peut aussi être dupliqué.

## Migration de /var

Préparer un retour arrière, limiter les écritures, vérifier les fichiers ouverts, monter la destination temporairement, copier les contenus avec leurs métadonnées nécessaires, puis comparer. Monter sur `/var` masque les anciens contenus ; cela ne les copie pas. Valider les services et le montage lu depuis fstab avant le redémarrage.

`df -h` observe l’occupation du système de fichiers, `df -i` les inodes, `du -sh` les objets parcourus. Un fichier supprimé encore ouvert peut continuer à occuper de l’espace. La taille d’un répertoire affichée par `ls -l` n’est pas sa taille récursive.

[Cours complet](../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md) · [TP](../tp/administration-linux/module-09/index.md).
