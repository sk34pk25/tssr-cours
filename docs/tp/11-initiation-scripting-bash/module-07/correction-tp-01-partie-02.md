# Correction source — TP 01, partie 2 — Années bissextiles

> Script source en CRLF, lu comme texte et jamais exécuté.

La correction attend deux arguments et emploie `anneedeb`, `anneefin`, `anneecourante`, `nbannees`, `fevrier` et `listannees`. Elle utilise une boucle `until`, `cal 02 $anneecourante`, puis :

```bash
echo "$fevrier" | grep "29" | grep -v "[0-9][0-9]29" >/dev/null 2>&1
```

Elle incrémente ensuite le compteur et `anneecourante` avec `expr`.

## NEEDS_REVIEW

- le message de syntaxe cite `script_M6TP2.sh` ;
- seule la quantité d'arguments est validée ;
- la validité des années et l'ordre de la plage ne sont pas entièrement validés ;
- le commentaire « Si plus d'une année » accompagne le test `-gt 0` ;
- le script source est en CRLF.
