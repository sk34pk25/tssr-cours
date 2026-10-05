# Correction — Module 08 — Stockage avancé LVM

**Sources originales (A) :** solution M08TP01 et support M08 Drive. **Correction (B) :** contrôles reformulés.

Après ajout du disque virtuel, la solution identifie le `host` SCSI puis déclenche son scan avant de contrôler l’apparition du nouveau disque. `fdisk` crée la partition ; le type est changé vers `8e` (Linux LVM). La partition devient un volume physique avec `pvcreate`, est ajoutée au groupe existant avec `vgextend`, puis `lvcreate -n lvvar -L 20G` crée le volume attendu. Pour affecter le reste au volume existant, la solution utilise `lvextend -l 100%FREE /dev/<VG>/<LV>`.

Avant et après chaque étape, contrôler les objets LVM :

```bash
pvs
vgs
lvs
```

Ne pas supposer le nom du disque, du groupe ni du volume : les relever sur la VM de laboratoire.
