# Fiche de révision — Module 04 — Les variables

| Opération | Repère |
| --- | --- |
| Affecter | `nom="valeur composée"`, sans espaces autour de `=` |
| Réutiliser | `printf '%s\n' "$nom"` |
| Transmettre aux enfants | `export NOMVAR=valeur` |
| Créer une lecture seule | `declare -r LIMITE=42` |
| Remplacer les paramètres du shell | `set -- valeur1 valeur2` |
| Lire une ligne entière | `IFS= read -r ligne` |
| Retirer une variable | `unset tampon` |

`$0` identifie l’invocation, `$#` compte les arguments et `$1` donne le premier. `"$@"` transmet chaque argument séparément, tandis que `"$*"` les réunit en une chaîne. `$$` donne l’identifiant du shell invoqué, `$!` celui du dernier lancement en arrière-plan et `$?` le dernier statut.

**TP 01.** Repérez `HISTFILE` et `PATH`. Après la saisie d’un fichier texte, contrôlez les fins de ligne avec `wc -l` et les extraits avec `head -n 2` et `tail -n 2`. Protégez les chemins cités et vérifiez l’accès avant la lecture.

- [Cours](../../modules/11-initiation-scripting-bash/module-04-les-variables-dans-les-scripts.md)
- [TP et correction](../../tp/11-initiation-scripting-bash/module-04/index.md)
