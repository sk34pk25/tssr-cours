# Correction source — TP 01, partie 1 — Vendredi 13

> Script source en CRLF, lu comme texte et jamais exécuté. Cette page documente le scénario fourni ; elle ne valide pas son exécution.

Le script reçoit l'année dans `$1`, initialise `nummois=1`, définit les couleurs, vérifie l'argument avec `[[ -z $1 ]]` et sort avec `exit 13` s'il manque.

Il boucle jusqu'à `nummois=13`, emploie `cal $nummois $annee | grep 13`, normalise la ligne trouvée, teste `[[ $ligne13 = *13\ 14 ]]`, produit le nom de mois avec `date --date "$nummois/01" +%B`, puis incrémente `nbremois` et `nummois` avec `expr`. Un `case $nbremois in` choisit enfin la couleur et le niveau.

## NEEDS_REVIEW

- `nbremois` est utilisé sans initialisation explicite ;
- le résultat dépend de `cal` et de la locale ;
- `date --date "$nummois/01" +%B` ne reçoit pas `$annee` ;
- l'exemple `scp` est générique et incomplet comme destination distante ;
- les prérequis citent les vidéos M01 à M06 ;
- le script source est en CRLF.
