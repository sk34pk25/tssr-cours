# Correction — TP 01 — Arguments et refus de root

L’énoncé demande exactement un nom à utiliser. En l’absence d’argument, le script invite à saisir ce nom. Plusieurs arguments donnent le statut 1. Pour `root`, le texte demandé est rouge gras sur fond noir, avec un statut 2.

## Variante pédagogique de script_M6TP1.sh

```bash
#!/bin/bash
case $# in
    0)
        printf '%s' "Veuillez saisir votre nom d’utilisateur : "
        IFS= read -r nom || exit 1
        ;;
    1) nom=$1 ;;
    *)
        printf 'Usage : %s [nom]\n' "$0" >&2
        exit 1
        ;;
esac

if [[ $nom == root ]]; then
    printf '\033[1;31;40m%s\033[0m\n' "Le compte root est interdit" >&2
    exit 2
fi
if [[ -z $nom ]]; then
    printf '%s\n' "Un nom est nécessaire." >&2
    exit 1
fi

printf 'Bonjour %s, bienvenue sur la machine %s\n' "$nom" "$HOSTNAME"
printf '%s\n' '---  Fin du script ---'
```

La correction du Drive décompose ces conditions avec des enchaînements `&&` et utilise un autre libellé de refus. Cette variante suit le texte de l’énoncé et fixe explicitement le fond via `40`.

| Entrée | Observation attendue |
| --- | --- |
| Aucun argument, puis `paul` | Invite, accueil et fin |
| `paul` | Accueil avec le nom de machine et fin |
| Deux arguments | Usage, statut 1 |
| `root` | Refus et statut 2 |
| Saisie vide | Erreur de saisie, statut 1 |

[Revenir aux TP du module](index.md)
