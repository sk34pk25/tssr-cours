# Mémo — Permissions Linux

| Droit | Valeur | Fichier | Répertoire |
|---|---:|---|---|
| `r` | 4 | Lire le contenu | Lister les noms |
| `w` | 2 | Modifier le contenu | Avec `x`, créer, renommer ou supprimer des entrées |
| `x` | 1 | Exécuter | Traverser le répertoire |

```bash
chmod 640 rapport.txt
chmod u=rw,g=r,o= rapport.txt
chown alice:compta rapport.txt
stat rapport.txt
namei -l /chemin/vers/rapport.txt
```

Pour un accès à un fichier, contrôler chaque répertoire du chemin, pas seulement le fichier final.

La suppression d’un fichier dépend d’abord des droits sur son répertoire parent. Dans un répertoire partagé avec le *sticky bit* (par exemple `/tmp`), le droit d’écriture seul ne suffit pas pour supprimer l’entrée d’un autre utilisateur. Le propriétaire du fichier, celui du répertoire et l’administrateur disposent de droits distincts.

- [Cours — droits sur les fichiers et répertoires](../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md)
