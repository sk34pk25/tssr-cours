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

Identifier d’abord le disque ajouté et le VG existant. Les noms ci-dessous sont ceux d’un exemple de correction, à vérifier sur la VM.

```bash
pvcreate /dev/sdb1
vgextend vgsystem /dev/sdb1
lvcreate -n lvvar -L 20G vgsystem
lvextend -l +100%FREE /dev/vgsystem/lvhome
```

Le TP ajoute un disque de 40 Go, prépare une partition LVM, crée lvvar de 20 Go et attribue le reste à lvhome. `+100%FREE` consomme tous les extents libres du groupe visé. Sans adaptation du système de fichiers, la nouvelle capacité du LV n’est pas encore utilisable par ses fichiers.

`-L +512M` ajoute 512 Mio ; `-L 1G` vise une taille finale de 1 Gio. L’option `-r` demande une adaptation du système de fichiers lorsque celle-ci est prise en charge ; ne pas supposer qu’elle appelle toujours le même outil.

Une réduction nécessite de traiter le système de fichiers avant de retirer l’espace du LV. La possibilité et la procédure dépendent du format ; ne pas inverser simplement une commande d’extension.

[Cours complet](../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md) · [TP LVM](../tp/administration-linux/module-08/index.md) · [TP systèmes de fichiers](../tp/administration-linux/module-09/index.md).
