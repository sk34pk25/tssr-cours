# Mémo — LVM Debian

**Sources originales (A) :** support et solution M08TP01 Drive. **Mémo (B) :** sélection structurée des commandes présentes dans les sources.

## Chaîne à contrôler

```text
partition Linux LVM → PV → VG → LV
```

```bash
pvs
vgs
lvs
```

Ces trois commandes servent à relever l’état des volumes physiques, groupes de volumes et volumes logiques avant et après l’exercice.

## Commandes du scénario M08

```bash
pvcreate /dev/<partition-lvm>
vgextend <VG> /dev/<partition-lvm>
lvcreate -n lvvar -L 20G <VG>
lvextend -l 100%FREE /dev/<VG>/<LV>
```

Le scénario source utilise `fdisk` pour créer une partition et lui attribuer le type `8e` (Linux LVM). Les noms de disque, de groupe et de volume doivent être relevés sur la VM de laboratoire : ils ne sont pas universels.

## Détection du disque de laboratoire

```bash
udevadm info --query=path --name=sda
echo "- - -" > /sys/class/scsi_host/host<numero>/scan
```

La seconde commande déclenche un scan SCSI du `host` identifié dans le laboratoire ; elle ne doit être utilisée qu’après avoir vérifié le périphérique et le contexte de la VM.

Voir le [TP M08](../tp/administration-linux/module-08/index.md) et le [cours](../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md).
