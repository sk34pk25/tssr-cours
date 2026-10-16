# Correction source — TP 02 — Boucle `for`

La correction emploie `chemin=$1`, `extfile=./ext.txt`, `nbfictotal=$(ls $chemin | wc -l)`, puis une boucle `for ext in $(cat $extfile)` pour calculer `nbfic=$(ls $chemin/*.$ext 2>/dev/null | wc -w)` et n'afficher que les extensions avec un nombre positif.

## NEEDS_REVIEW

- `ext.txt` est absent : **NOT_PRESENT_AS_READABLE_SOURCE / SOURCE_MISSING** ;
- `ls $chemin | wc -l` ne distingue pas fichiers et répertoires ;
- `wc -w` est sensible aux espaces dans les noms ;
- les variables de chemin ne sont pas protégées ;
- un second shebang apparaît dans la correction source.

Aucun `ext.txt` n'est créé par ce module.
