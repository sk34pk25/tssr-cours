# Mémo — Systèmes de fichiers Debian

**Repères du module 9 et de son TP ; les précisions techniques sont justifiées dans le cours optimisé.**

| Étape | Commande du support |
|---|---|
| Identifier | `blkid`, `lsblk`, `lsblk -f` |
| Créer | `mkfs.[fstype] <options> [périphérique de stockage]` — ex. `mkfs.ext4 /dev/vggroup1/lv1` |
| Étiquette / superbloc | `tune2fs <options> [périphérique de stockage]` : -L permet de modifier l’étiquette, -l permet d’afficher les informations du superbloc |
| Redimensionner | `resize2fs <options> [périphérique de stockage]` |
| Monter | `mount -t ext4 /dev/sdc1 /mnt`, puis `findmnt /dev/sdc1` |
| Démonter | `umount /mnt` |
| Tester fstab | `mount /srv/data` |
| Occupation | `df -h`, `du -hs /etc` |

## Consignes du TP

- A partir du volume logique lvvar, configurer un système de fichier ext4 avec une étiquette VAR.
- Activer le montage automatique au démarrage du volume logique lvvar vers /var.

Afin de garantir la bonne intégration d’une nouvelle ligne dans le fichier /etc/fstab, il est important de la tester avant le redémarrage du poste. Le moyen le plus simple est d’utiliser la commande mount en ne précisant que le point de montage. Si la commande ne renvoie rien, c’est que le montage s’est correctement effectué.

[Cours complet](../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md) · [TP](../tp/administration-linux/module-09/index.md).
