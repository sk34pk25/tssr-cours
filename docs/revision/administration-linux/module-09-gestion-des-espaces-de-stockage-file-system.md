# Fiche de révision — Module 09 — Gestion des espaces de stockage — File System

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

Le nombre de liens physiques renseigne les entrées qui désignent un même inode. La place n’est pas nécessairement rendue dès que le dernier nom disparaît : un processus peut conserver le fichier ouvert. Cette précision explique les divergences possibles entre fichiers visibles et occupation du disque.

## Tableau de mémorisation

| Date | Sens |
|---|---|
| `atime` | Accès, selon les options et la politique de mise à jour |
| `mtime` | Modification du contenu |
| `ctime` | Modification de l’état / métadonnées de l’inode, pas date de création |

## Se tester sans regarder


1. Monter un volume sur `/var` copie-t-il l’ancien contenu ?
2. `ctime` indique-t-il la création du fichier ?
3. Quelle commande observe les inodes disponibles ?

??? success "Réponses"
    1. Non ; la migration nécessite une copie et une phase de validation.
    2. Non, c’est la modification de l’état de l’inode.
    3. `df -i`.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md) · [TP du parcours](../../tp/administration-linux/index.md).
