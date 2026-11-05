# Correction — TP 01, partie 1 — Vendredi 13

L’original propose `13.sh` à annoter et sa solution. Le premier argument donne l’année, `nummois` commence à 1 et la boucle s’arrête à 13. Le script extrait une ligne du calendrier, cherche les mois concernés, compte les occurrences et sélectionne un niveau avec `case`.

| Zone à documenter | Ce qu’elle fait |
| --- | --- |
| En-tête | Décrit l’usage `./13.sh annee` et le résultat attendu |
| Vérification d’argument | Affiche la syntaxe et rend le statut 13 si l’argument manque |
| Boucle `until` | Parcourt les douze mois, d’un compteur initial à la sentinelle 13 |
| Test du calendrier | Dépend de la position des jours dans la sortie de `cal` |
| Compteur et `case` | Accumulent les mois, puis sélectionnent le niveau et la couleur |

Le script source suppose une mise en page particulière de `cal`. Il utilise `nbremois` avant une initialisation explicite et demande le mois à `date` sans transmettre l’année. Les scripts calendaires d’origine utilisent des fins de ligne CRLF. Pour un fichier à lancer directement dans la VM, enregistrez le texte avec des fins de ligne LF.

## Variante pédagogique avec GNU date

Cette variante garde la boucle et le classement. Le treizième jour est un vendredi lorsque `%u` rend `5`. `%B` fournit le nom du mois dans la locale du poste. [Formats de date GNU](https://www.gnu.org/software/coreutils/manual/html_node/Date-conversion-specifiers.html)

```bash
#!/bin/bash
if [[ $# -ne 1 || $1 != [1-9][0-9][0-9][0-9] ]]; then
    printf 'Usage : %s annee-sur-quatre-chiffres\n' "$0" >&2
    exit 13
fi

annee=$1
nummois=1
nbremois=0
mois=()
until (( nummois == 13 )); do
    printf -v jour '%04d-%02d-13' "$annee" "$nummois"
    semaine=$(date -u --date="$jour" +%u) || exit 2
    if [[ $semaine == 5 ]]; then
        nommois=$(date -u --date="$jour" +%B) || exit 2
        mois+=("$nommois")
        nbremois=$((nbremois + 1))
    fi
    nummois=$((nummois + 1))
done

case "$nbremois" in
    1) niveau=calme; couleur=32 ;;
    2) niveau=moyenne; couleur=33 ;;
    *) niveau="à forte vigilance"; couleur=31 ;;
esac
printf 'Mois concernés : %s\n' "${mois[*]}"
printf '%s sera une année \033[%sm%s\033[0m (%s).\n' \
    "$annee" "$couleur" "$niveau" "$nbremois"
```

Pour 2009, janvier ne remplit pas le test et février, mars et novembre le remplissent. Le résultat prévu est trois occurrences. Essayez aussi une valeur invalide et l’absence d’argument.

[Revenir aux TP du module](index.md)
