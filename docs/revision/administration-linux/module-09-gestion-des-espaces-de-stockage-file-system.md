# Fiche de révision — Module 09 — Gestion des espaces de stockage — File System

**Sources originales (A) :** support, énoncé et solution M09TP01 Drive. **Fiche (B) :** synthèse reformulée.

## À connaître absolument

- Un système de fichiers Unix contient notamment superbloc, inodes, blocs d’indirection et blocs de données ; le nom d’un fichier se trouve dans son répertoire, pas dans l’inode.
- `mkfs.ext4` prépare un système de fichiers ext4 ; `tune2fs` modifie des options ext et peut afficher le superbloc.
- `blkid` et `lsblk -f` permettent de relever type, UUID et étiquette ; `findmnt` rend les montages lisibles.
- `mount` rend un système de fichiers accessible à un point de montage ; `umount` le détache lorsqu’il n’est plus utilisé.

## Montage persistant

`/etc/fstab` déclare les montages du démarrage. La source privilégie un UUID pour une partition, un LABEL lorsqu’il est suffisamment distinct, et le chemin du périphérique pour les LV. Elle déconseille `/dev/sdb1` pour une partition persistante, car son nom peut changer.

## Séquence du TP M09

1. Préparer ext4 sur `lvvar`, avec le LABEL `VAR`, puis vérifier avec `blkid`.
2. Étendre le système de fichiers de `lvhome` seulement après la vérification de son volume logique.
3. Prendre un snapshot, limiter les écritures dans `/var`, copier les données depuis un montage temporaire et contrôler le résultat.
4. Déclarer le montage de `/var` dans `fstab`, tester la configuration et redémarrer seulement après un test concluant.

## Checklist de maîtrise

- [ ] Expliquer la différence entre formatage, montage et montage persistant.
- [ ] Relever l’UUID, le type et le LABEL d’un volume.
- [ ] Identifier les risques spécifiques de la migration de `/var`.
- [ ] Relier une entrée `fstab` au point de montage constaté par `findmnt`.

Pour approfondir : [cours complet](../../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md) · [TP](../../tp/administration-linux/module-09/index.md) · [mémo](../../memo/file-systems-debian.md).
