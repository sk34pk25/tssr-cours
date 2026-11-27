# Commandes — Administration Debian GNU/Linux

**Source : Administration Debian GNU/Linux, supports de cours des modules 02 à 12 (Drive).** Commandes reprises telles qu’elles apparaissent dans les supports (invite `root@deb:~#` retirée). Les lignes de syntaxe `<…>` / `[…]` sont celles du support.

## Module 02 — Installation

```bash
su -
sudo -i
sudo passwd root
passwd
```

[Cours](../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian.md)

## Module 03 — Démarrage (GRUB, systemd, arrêt)

```bash
update-grub
ls -l /boot/
systemctl get-default
systemctl set-default multi-user.target
systemctl isolate rescue.target
systemctl list-units
systemctl list-units --all
systemctl status cron.service
systemctl start cron.service
systemctl stop cron.service
systemctl restart cron.service
systemctl enable networking
systemctl disable networking
shutdown [-rhc] <heure> <message>
shutdown -h now
shutdown -h +10 "Arrêt du serveur dans 10mn !"
reboot
shutdown -r now
shutdown -r 16:30 "reboot à 16h30"
shutdown -c
```

[Cours](../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md)

## Module 05 — Réseau

```bash
ip a
ip r
cat /etc/resolv.conf
vim /etc/network/interfaces
vim /etc/resolv.conf
systemctl stop networking.service
systemctl start networking.service
systemctl restart networking.service
systemctl restart NetworkManager
```

[Cours](../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau.md)

## Module 06 — Paquets

```bash
vim /etc/apt/sources.list
apt update
apt-get update
apt upgrade
apt-get upgrade
apt full-upgrade
apt-get dist-upgrade
apt install paquet1 <paquet2>
apt-get install paquet1 <paquet2>
apt remove paquet1 <paquet2>
apt-get remove paquet1 <paquet2>
apt purge paquet1
apt-get purge paquet1
apt clean
apt-get clean
apt search regex
apt-get search regex
apt show paquet
apt-cache show paquet
dpkg -l "*ftp*"
dpkg -L telnet
dpkg -S /usr/bin/scp
```

[Cours](../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels.md)

## Module 07 — Partitionnement

```bash
fdisk -l /dev/sda
fdisk /dev/sdb
```

[Cours](../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage.md)

## Module 08 — LVM

```bash
pvcreate /dev/sdb1 /dev/sdb2 /dev/sdc1 /dev/sdd
vgcreate vggroup1 /dev/sdb1 /dev/sdb2 /dev/sdc1
lvcreate -n lv1 -L 2G vggroup1
lvcreate -n lv2 -L 512M vggroup1
vgextend vggroup1 /dev/sdd
lvextend -r -L +512M /dev/vggroup1/lv1
lvextend -r -L 1G /dev/vggroup1/lv2
vgs
vgdisplay
vgdisplay vggroup2
lvs
lvdisplay
lvdisplay /dev/vggroup1/lv2
```

[Cours](../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md)

## Module 09 — Systèmes de fichiers

```bash
mkfs.[fstype] <options> [périphérique de stockage]
mkfs.ext4 /dev/sda2
mkfs.ext4 /dev/vggroup1/lv1
mkfs.ntfs /dev/sde1
tune2fs <options> [périphérique de stockage]
resize2fs <options> [périphérique de stockage]
fsck.<fstype> <options> [périphérique de stockage]
blkid
lsblk
lsblk -f
ls /mnt
mount <options> [périphérique source] [/point/de/montage]
mount -t ext4 /dev/sdc1 /mnt
mount
findmnt
findmnt /dev/sdc1
umount /mnt
mount /srv/data
df -h
du -hs /etc
```

[Cours](../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md)

## Module 10 — Utilisateurs et groupes

```bash
cat /etc/group
cat /etc/gshadow
cat /etc/passwd
cat /etc/shadow
groupadd <options> [nom du groupe]
groupmod <options> [nom du groupe]
groupdel <options> [nom du groupe]
gpasswd <options> [nom du groupe]
useradd <options> [utilisateur]
usermod <options> [utilisateur]
userdel <options> [nom du groupe]
```

[Cours](../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md)

## Module 11 — Droits

```bash
ls -ld
chmod <-R> [ugoa][+ - =][rwxX] fichier ou dossier
chmod g+w,o-rx /data/commun
chmod 770 /data/commun
chmod -R g+w,o-rx /data/commun
chown <-R> [user]:[group] fichier(dossier)
chown penthium:users /data
chown -R :users /data/commun
umask [mode]
umask
umask 0007
chmod <-R> [ugoa][+ - =][st] fichier ou dossier
```

[Cours](../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md)

## Module 12 — Maintenance

```bash
systemctl status sshd.service
journalctl
journalctl -f
journalctl -u cron
journalctl _PID=1
journalctl /usr/sbin/sshd
journalctl -p err
journalctl -f /usr/sbin/sshd -p info
logger -p cron.info Message de test
systemctl disable rsyslog
cat /etc/debian_version
uname -a
lscpu
lspci
lsusb
du -sh /root
ls -lh fichier
lsof /root
ps -ef
free -h
```

[Cours](../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md)
