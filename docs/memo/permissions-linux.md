# Mémo — Permissions Linux

| Droits | Calcul |
|---|---|
| rwx | 4+2+1 = 7 |
| rw- | 4+2 = 6 |
| r-x | 4+1 = 5 |
| r-- | 4 |

Exemples du support : `rwxr-x---` = 750 ; `rw-rw-r--` = 664.

```bash
chmod <-R> [ugoa][+ - =][rwxX] fichier ou dossier
chmod g+w,o-rx /data/commun
chmod 770 /data/commun
chmod -R g+w,o-rx /data/commun
chown <-R> [user]:[group] fichier(dossier)
chown penthium:users /data
chown -R :users /data/commun
umask
umask 0007
```

La commande chmod permet de modifier les droits. Sur Debian, l’umask par défaut des utilisateurs est de 0022. Sticky bit : tout fichier créé ne pourra être supprimé que par son propriétaire et par root. Ex : /tmp.

- [Cours — droits sur les fichiers et répertoires](../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md)
