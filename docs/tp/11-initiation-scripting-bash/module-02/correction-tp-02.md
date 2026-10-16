# Correction — TP 02 — Script à partir d’un algorithme

La correction restitue le script shell fourni dans Drive comme texte source. Il n’est pas exécuté par cette documentation.

```bash
#!/bin/bash

echo "Bonjour, cette machine est fin prête pour scripter ..."

echo "Scripts shells présents ici :"

ls -l *.sh
ls -l *.bash

echo ""

echo "Informations relatives à l’interpréteur Bash : "

bash --version

whereis bash

echo "Mise à jour disponible ?"

apt list --upgradable | grep bash
```

## Observations à conserver

- `whereis bash` est la commande fournie, sans garantie que le bashrc global demandé apparaisse à lui seul ;
- `ls -l *.sh` et `ls -l *.bash` peuvent rencontrer l’absence de correspondance ;
- « Scripts Shell » et « Scripts shells » coexistent dans les sources ;
- `apt list --upgradable | grep bash` est une étape du scénario, non une méthode universelle.
