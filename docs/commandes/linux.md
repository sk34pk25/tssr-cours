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

## Sessions, fichiers et flux

| Besoin | Commande | Contrôle |
| --- | --- | --- |
| Observer sa connexion et son compte | `who am i`, puis `id` | Comparer terminal, heure de connexion, UID et groupes. |
| Lister les entrées `.conf` sous `/etc` | `ls -d -- /etc/*.conf` | Les noms affichés sont les entrées correspondantes, y compris les répertoires. |
| Lire les attributs de `/tmp` | `ls -ld -- /tmp` | Lire les permissions du répertoire et repérer le sticky bit. |
| Comparer des liens | `ls -li -- edition1.txt edition3.txt` | Deux liens physiques d’un même système de fichiers partagent un inode. |
| Rechercher par nom dans les enfants directs | `find /etc -maxdepth 1 -type f -name '*.conf'` | Le motif entre guillemets est interprété par `find`. |
| Écarter les lignes vides d’un fichier | `grep -v '^$' Edition` | Les lignes contenant des espaces restent visibles. |
| Contrôler une archive | `tar -tf sauvegarde.tar` | Vérifier les chemins et la présence des fichiers avant une restauration. |

Les TP reprennent ces commandes dans leur contexte, avec l’énoncé, le corrigé et les vérifications à effectuer. [Utilisation d’une distribution GNU/Linux](../modules/04-utilisation-gnu-linux/index.md)

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
