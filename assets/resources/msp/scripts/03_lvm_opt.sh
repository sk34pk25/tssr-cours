#!/bin/bash
set -euo pipefail
# Exécuter en root après avoir vérifié que /dev/sdc et /dev/sdd sont bien les deux nouveaux disques de 20 Go.
apt update
apt install -y lvm2
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS
read -r -p 'Confirmer la création LVM sur /dev/sdc et /dev/sdd (taper OUI) : ' confirm
[[ "$confirm" == 'OUI' ]] || exit 1

pvcreate /dev/sdc /dev/sdd
vgcreate vg_applications /dev/sdc /dev/sdd
lvcreate -L 32G -n lv_opt vg_applications
mkfs.ext4 -L OPT /dev/vg_applications/lv_opt

mkdir -p /mnt/nouveau_opt
mount /dev/vg_applications/lv_opt /mnt/nouveau_opt
cp -a /opt/. /mnt/nouveau_opt/
umount /mnt/nouveau_opt

UUID=$(blkid -s UUID -o value /dev/vg_applications/lv_opt)
echo "UUID=$UUID /opt ext4 defaults 0 2" >> /etc/fstab
mount -a
findmnt /opt
pvs; vgs; lvs
