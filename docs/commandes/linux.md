# Commandes GNU/Linux

```bash
pwd
ls -la
find /var/log -type f -name '*.log'
grep -Rni 'erreur' /var/log
systemctl --failed
journalctl -u ssh --since today
ip addr
ip route
lsblk -f
findmnt
getent passwd utilisateur
id utilisateur
stat fichier
```

## Paquets

```bash
sudo apt update
apt search nom
apt show paquet
sudo apt install paquet
sudo apt upgrade
sudo apt full-upgrade
sudo apt remove paquet
sudo apt purge paquet
sudo apt clean
dpkg -L paquet
dpkg -l '*mot-cle*'
```

`apt update` actualise les index des dépôts ; il n'installe pas les mises à jour. Lire la liste des changements avant une mise à niveau. `upgrade` évite les suppressions de paquets installés, tandis que `full-upgrade` peut adapter les dépendances par installation ou suppression.

`dpkg -L` liste les fichiers installés par un paquet ; `dpkg -l` interroge son état local. Dans un script, préférer `apt-get` lorsque la stabilité de la sortie et du comportement est nécessaire.
