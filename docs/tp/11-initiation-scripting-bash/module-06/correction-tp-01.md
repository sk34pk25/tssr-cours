# Correction TP 01 — Arguments et refus de root

La correction source contrôle le nombre d’arguments avec `[ $# -eq 1 ] && name=$1`, `[[ $# -gt 1 ]]` et `[[ $# -eq 0 ]]`, puis utilise `read -p ...`, `[[ $name = root ]]`, `echo -e ...`, `exit 1` et `exit 2`.

## Points à relire

Le libellé interne renvoie encore aux « caractères spéciaux ». Le message de refus de `root` diffère entre consigne et correction. La consigne demande rouge gras sur fond noir, sans que le code fourni fixe explicitement ce fond. La saisie vide n’est pas complètement validée dans la solution démontrée.
