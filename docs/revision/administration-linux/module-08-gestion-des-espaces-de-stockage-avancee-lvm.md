# Fiche de révision — Module 08 — Gestion des espaces de stockage avancée — LVM

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

| Niveau | Observer rapidement | Observer en détail | Modifier dans le support |
|---|---|---|---|
| PV | `pvs` | `pvdisplay` | `pvcreate` |
| VG | `vgs` | `vgdisplay` | `vgcreate`, `vgextend` |
| LV | `lvs` | `lvdisplay` | `lvcreate`, `lvextend`, `lvreduce` |

## Tableau de mémorisation

| Niveau | Observer rapidement | Observer en détail | Modifier dans le support |
|---|---|---|---|
| PV | `pvs` | `pvdisplay` | `pvcreate` |
| VG | `vgs` | `vgdisplay` | `vgcreate`, `vgextend` |
| LV | `lvs` | `lvdisplay` | `lvcreate`, `lvextend`, `lvreduce` |

## Se tester sans regarder


1. Quelle commande renseigne l’espace non alloué du groupe ?
2. Que signifie le signe `+` dans `-L +512M` ?
3. Quelle couche faut-il contrôler après l’extension du LV ?

??? success "Réponses"
    1. `vgs` ou `vgdisplay`.
    2. Une augmentation, plutôt qu’une taille finale absolue.
    3. Le système de fichiers, puis le montage et la capacité réellement visible.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md) · [TP du parcours](../../tp/administration-linux/index.md).
