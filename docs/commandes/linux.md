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
```

Dans un script, préférer `apt-get` lorsque la stabilité de la sortie et du comportement est nécessaire.
