# TP 01 — Arguments et refus de root

## Scénario

Avec un argument, il est utilisé comme nom. Sans argument, une saisie est demandée. Avec plus d’un argument, le script quitte avec le code `1`. Le nom `root` est refusé avec le message de scénario et le code `2`; sinon, le message d’accueil et la fin de script prévus sont affichés.

## Formes attestées

`[ $# -eq 1 ] && name=$1`, `[[ $# -gt 1 ]]`, `[[ $# -eq 0 ]]`, `[[ $name = root ]]`, `read -p ...`, `echo -e ...`, `exit 1` et `exit 2`.

## Preuves à relever

| Cas | Preuve |
| --- | --- |
| Aucun argument | Invite de saisie, puis accueil si le nom est valide |
| Un nom ordinaire | Accueil et statut zéro |
| Deux arguments | Message d’usage et statut 1 |
| Argument `root` | Refus et statut 2 |

Consignez le statut immédiatement après chaque appel.

[Correction du TP](correction-tp-01.md)
