# Module 09 — Gestion des espaces de stockage — File System

**Cours optimisé — reformulation pédagogique du support et des TP associés.** Les exemples du parcours conservent leur contexte Debian 11 ; les corrections et actualisations sont identifiées comme compléments externes. Les transcriptions intégrales se consultent dans l’onglet Original.
## Du volume aux fichiers

Le système de fichiers organise les données, les répertoires et leurs métadonnées sur un volume. Le support utilise les notions de blocs, d’inodes et d’entrées de répertoire. Un nom dans un répertoire renvoie à un inode ; l’inode décrit notamment type, propriétaire, droits, dates et références aux données. Le nom du fichier ne réside pas simplement dans l’inode.

Le nombre de liens physiques renseigne les entrées qui désignent un même inode. La place n’est pas nécessairement rendue dès que le dernier nom disparaît : un processus peut conserver le fichier ouvert. Cette précision explique les divergences possibles entre fichiers visibles et occupation du disque.

## Dates et familles de systèmes de fichiers

| Date | Sens |
|---|---|
| `atime` | Accès, selon les options et la politique de mise à jour |
| `mtime` | Modification du contenu |
| `ctime` | Modification de l’état / métadonnées de l’inode, pas date de création |

Le support compare ext2 sans journal, ext3 avec journal et ext4, puis les formats utilisables pour des échanges avec d’autres systèmes. Une journalisation facilite la cohérence après incident ; elle n’est ni une sauvegarde ni une garantie que toute écriture applicative a atteint le disque.

!!! info "Clarification externe — valeurs historiques"
    La taille d’inode de 128 octets et les limites des systèmes de fichiers du support ne sont pas des constantes applicables à tous les volumes. Les paramètres dépendent du format et de sa création ; ext4 est une évolution de la famille ext, pas un format sans lien avec ext3. Références : [ext4(5)](https://manpages.debian.org/trixie/e2fsprogs/ext4.5.en.html) et [inode(7)](https://manpages.debian.org/trixie/manpages/inode.7.en.html).

## Identifier avant de formater

```bash
lsblk -f
blkid
findmnt
```

`lsblk -f` relie périphériques, types de systèmes de fichiers, étiquettes et montages. `blkid` lit des identifiants ; `findmnt` décrit les montages effectifs. Comparer ces trois vues avec LVM avant de viser un LV. **Formater remplace les structures du système de fichiers ciblé** : vérifier son identité et les données à préserver.

```bash
mkfs.ext4 -L VAR /dev/vggroup1/lvvar
tune2fs -l /dev/vggroup1/lvvar
tune2fs -L VAR /dev/vggroup1/lvvar
```

Le premier exemple crée un ext4 avec étiquette ; le troisième change l’étiquette d’un ext existant. Ce ne sont pas des opérations équivalentes. `mkfs.ntfs`, également cité, suppose les outils correspondants disponibles. `tune2fs` peut examiner ou régler les paramètres ext, dont les intervalles de contrôle ; il ne s’utilise pas comme outil universel pour tous les formats.

## Agrandir et vérifier

`resize2fs` adapte les systèmes ext compatibles. Dans le TP, il permet à home d’utiliser la capacité de LV ajoutée au module 8. S’il a déjà été adapté par une extension `-r`, aucun agrandissement supplémentaire n’est nécessaire. `fsck` est une famille de vérificateurs : choisir le bon outil et l’état de montage requis, généralement démonté pour une réparation. Ne pas réparer à l’aveugle un système de fichiers monté en écriture.

## Monter et démonter

```bash
mount -t ext4 /dev/vggroup1/lvvar /mnt/var
findmnt /mnt/var
umount /mnt/var
```

Créer auparavant le point de montage. Monter un volume sur un répertoire masque temporairement le contenu auparavant visible sous ce répertoire ; cela ne le copie pas et ne le supprime pas. Une erreur « occupé » au démontage demande d’identifier les processus ou répertoires courants concernés.

Le support décrit `ro/rw`, `exec/noexec`, `suid/nosuid`, `sync/async` et `remount`. Ces options affectent le montage ; leur choix doit correspondre à l’usage. `remount` modifie un montage existant et ne remplace pas un premier montage.

## Déclarer un montage durable

`/etc/fstab` comporte six champs : source, point de montage, type, options, champ dump et ordre de vérification. La source peut être un chemin, `UUID=` ou `LABEL=`. L’UUID est généralement plus stable que l’ordre `/dev/sdX`, mais un clone peut dupliquer un identifiant : vérifier le volume réel.

```text
LABEL=VAR  /var  ext4  defaults  0  2
```

Cette entrée reprend le principe du TP, avec une étiquette unique sur la machine. Les options `defaults` regroupent des comportements comme lecture-écriture, montage automatique et exécution ; elles ne constituent pas une politique adaptée à tous les usages. Tester `mount /var`, puis `findmnt /var`, avant de compter sur le prochain démarrage. Le test lit l’entrée fstab au lieu de répéter tous les paramètres manuellement.

## TP — migrer /var en conservant les données

Le scénario demande de formater lvvar en ext4, de lui affecter `VAR`, d’adapter le système de fichiers de home et de déplacer l’usage de `/var` vers le nouveau volume. La source recommande un snapshot, l’examen avec `lsof`, l’arrêt des écritures, un montage temporaire et une copie préservant les permissions. Le corrigé utilise le mode rescue pour limiter les services actifs.

Complément de méthode : confirmer que plus rien n’écrit dans l’ancien `/var`, copier les **contenus y compris cachés** avec leurs métadonnées, comparer source et destination, puis monter le nouveau volume et vérifier les services. La conservation des ACL, attributs étendus et liens doit correspondre aux données présentes ; une simple copie récursive ne couvre pas automatiquement tout. Garder un retour arrière jusqu’à validation. Ne pas transposer un arrêt de journald d’un TP à une machine de production sans étude de ses dépendances.

## Mesurer l’espace

```bash
df -h
df -i
du -sh /etc
```

`df` renseigne le système de fichiers, `df -i` ses inodes et `du` l’espace des objets parcourus. La taille affichée par `ls -l` pour un répertoire n’est pas la taille récursive de ses contenus, ni la taille de son inode. Des fichiers supprimés encore ouverts, les métadonnées et les permissions de parcours peuvent expliquer des écarts.

## Schéma explicatif — complément pédagogique

```mermaid
flowchart LR
 L["LV ou partition"] --> F["Système de fichiers"] --> M["Montage"] --> A["Arborescence visible"]
 E["fstab : intention persistante"] --> M
```

## Autoévaluation

1. Monter un volume sur `/var` copie-t-il l’ancien contenu ?
2. `ctime` indique-t-il la création du fichier ?
3. Quelle commande observe les inodes disponibles ?

??? success "Réponses"
    1. Non ; la migration nécessite une copie et une phase de validation.
    2. Non, c’est la modification de l’état de l’inode.
    3. `df -i`.

## Pour travailler ce module

- [Fiche de révision](../../revision/administration-linux/module-09-gestion-des-espaces-de-stockage-file-system.md)
- [Travaux pratiques](../../tp/administration-linux/module-09/index.md)
- [Progression du cours](index.md)
