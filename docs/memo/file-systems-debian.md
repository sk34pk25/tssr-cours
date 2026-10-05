# Mémo — Systèmes de fichiers Debian

**Sources originales (A) :** support et solution M09TP01 Drive. **Mémo (B) :** sélection structurée des commandes et vérifications présentes dans les sources.

## Préparer et identifier

```bash
mkfs.ext4 -L VAR /dev/<VG>/lvvar
blkid
lsblk -f
```

`mkfs.ext4` crée le système de fichiers ; l’option `-L` lui affecte une étiquette. Avant le formatage, vérifier sans ambiguïté le volume visé : cette opération remplace sa structure de données.

## Monter et vérifier

```bash
mount /dev/<source> /mnt/<repertoire>
findmnt
umount /mnt/<repertoire>
```

Pour un montage temporaire, la source conseille `/mnt` et ses sous-répertoires. `findmnt` confirme la source, la cible, le type et les options du montage.

## Persister le montage

`/etc/fstab` associe le système de fichiers, son point de montage, son type et ses options au démarrage. Pour les partitions, préférer un UUID plutôt qu’un nom comme `/dev/sdb1`; le TP M09 utilise le LABEL `VAR` pour le LV monté sur `/var`. Tester la configuration avant redémarrage.

## Migration de `/var`

Prendre un snapshot, relever les fichiers en cours d’utilisation avec `lsof`, limiter les écritures, monter temporairement le nouveau volume et copier les données en préservant les attributs. Vérifier ensuite le montage et les journaux dans `/var/log`.

Voir le [TP M09](../tp/administration-linux/module-09/index.md) et le [cours](../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md).
