# TP 01 — Arguments et refus de root

## Scénario

Avec un argument, il est utilisé comme nom. Sans argument, une saisie est demandée. Avec plus d’un argument, le script quitte avec le code `1`. Le nom `root` est refusé avec le message de scénario et le code `2`; sinon, le message d’accueil et la fin de script prévus sont affichés.

## Formes attestées

`[ $# -eq 1 ] && name=$1`, `[[ $# -gt 1 ]]`, `[[ $# -eq 0 ]]`, `[[ $name = root ]]`, `read -p ...`, `echo -e ...`, `exit 1` et `exit 2`.
