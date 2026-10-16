# Correction — TP1 : Recherches et regex

```bash
grep Dupont Edition
grep -i dupont Edition
grep -v '^$' Edition
```

```bash
grep -sl localhost /etc/*
find /etc -type f -name "ho*"
find ~ -type d
find ~ -type f -name "*txt" -exec cp {} {}.save \;
```

Les résultats affichés par ces commandes sont des observations du laboratoire : ils
dépendent notamment du contenu de `Edition`, de `/etc` et du répertoire personnel.

## NEEDS_REVIEW — formes source à conserver

- La solution utilise `grep -sl localhost /etc/*` : aucune variante récursive ou
  « améliorée » n'est substituée.
- La solution utilise `-name "*txt"` : le motif est conservé, sans le remplacer par
  `-name "*.txt"`.

## Provenance

- **A — source TSSR :** solution TP1 *Recherches et regex*.
- **B — structuration pédagogique :** commandes séparées des observations de laboratoire.
