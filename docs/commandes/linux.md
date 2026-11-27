# Commandes GNU/Linux

```bash
who am i
ls -A
ls -ld /tmp
ls /etc/*.conf
ls -d /etc/[a-d]*
head -n 2 /etc/hosts
wc -l /etc/passwd
grep -i dupont Edition
grep -v '^$' Edition
find /etc -type f -name "ho*"
find ~ -type d
tar -czvf /tmp/$LOGNAME.tar.gz $HOME
tar -tf /tmp/$LOGNAME-v2.tar
```

## Sessions, fichiers et flux

| Besoin | Commande | Contrôle |
| --- | --- | --- |
| Observer sa connexion et son compte | `who am i` | Comparer terminal, heure de connexion, UID et groupes. |
| Lister les entrées `.conf` sous `/etc` | `ls /etc/*.conf` | Les noms affichés sont les entrées correspondantes, y compris les répertoires. |
| Lire les attributs de `/tmp` | `ls -ld /tmp` | Lire les permissions du répertoire et repérer le sticky bit. |
| Comparer des liens | `ls -l edition* Edition /tmp/stag30/edition2.txt` | Commande de la correction du TP 2 – Les liens. |
| Rechercher par nom dans les enfants directs | `find /etc -type f -name "ho*"` | Le motif entre guillemets est interprété par `find`. |
| Écarter les lignes vides d’un fichier | `grep -v '^$' Edition` | Les lignes contenant des espaces restent visibles. |
| Contrôler une archive | `tar -tf /tmp/$LOGNAME-v2.tar` | Vérifier les chemins et la présence des fichiers avant une restauration. |

Les TP reprennent ces commandes dans leur contexte, avec l’énoncé, le corrigé et les vérifications à effectuer. [Utilisation d’une distribution GNU/Linux](../modules/04-utilisation-gnu-linux/index.md)

Les commandes de paquets sont dans [Administration Debian](administration-debian.md).
