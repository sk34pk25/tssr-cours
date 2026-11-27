# Mémo — LVM Debian

**Synthèse du support et du TP du module 8 ; compléments de méthode signalés dans le cours.**

| Couche | Rôle | Observation |
|---|---|---|
| PV | Périphérique préparé pour LVM | `pvs`, `pvdisplay` |
| VG | Réserve d’extents provenant des PV | `vgs`, `vgdisplay` |
| LV | Capacité logique allouée dans le VG | `lvs`, `lvdisplay` |
| Système de fichiers | Organisation des fichiers dans le LV | `lsblk -f`, `df -h` |
| Montage | Insertion dans l’arborescence | `findmnt` |

## Séquence du laboratoire

Commandes du support du module 08 ; consignes du TP ci-dessous.

```bash
pvcreate /dev/sdb1 /dev/sdb2 /dev/sdc1 /dev/sdd
vgcreate vggroup1 /dev/sdb1 /dev/sdb2 /dev/sdc1
lvcreate -n lv1 -L 2G vggroup1
vgextend vggroup1 /dev/sdd
lvextend -r -L +512M /dev/vggroup1/lv1
lvextend -r -L 1G /dev/vggroup1/lv2
```

Consignes du TP : ajouter un nouveau disque de 40 Go ; créer un volume logique de 20 Go nommé lvvar ; agrandir le volume logique lvhome avec le reste de l’espace disponible du groupe de volume. Support : lvextend avec l’option -l suivi de l’argument “100%FREE” permet d’affecter l’espace libre au volume logique ; avec un LV existant, saisir le chemin complet /dev/<nomduVG>/<nomduLV>.

`-L +512M` ajoute 512 Mio ; `-L 1G` vise une taille finale de 1 Gio. L’option `-r` demande une adaptation du système de fichiers lorsque celle-ci est prise en charge ; ne pas supposer qu’elle appelle toujours le même outil.

Une réduction nécessite de traiter le système de fichiers avant de retirer l’espace du LV. La possibilité et la procédure dépendent du format ; ne pas inverser simplement une commande d’extension.

[Cours complet](../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md) · [TP LVM](../tp/administration-linux/module-08/index.md) · [TP systèmes de fichiers](../tp/administration-linux/module-09/index.md).
