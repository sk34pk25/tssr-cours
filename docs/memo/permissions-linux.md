# Mémo — Permissions Linux

| Droit | Valeur | Fichier | Répertoire |
|---|---:|---|---|
| `r` | 4 | Lire le contenu | Lister les noms |
| `w` | 2 | Modifier le contenu | Créer/supprimer des entrées |
| `x` | 1 | Exécuter | Traverser le répertoire |

```bash
chmod 640 rapport.txt
chmod u=rw,g=r,o= rapport.txt
chown alice:compta rapport.txt
stat rapport.txt
namei -l /chemin/vers/rapport.txt
```

Pour un accès à un fichier, contrôler chaque répertoire du chemin, pas seulement le fichier final.
