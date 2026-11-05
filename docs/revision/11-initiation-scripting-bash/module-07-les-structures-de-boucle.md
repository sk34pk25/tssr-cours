# Fiche de révision — Module 07 — Les boucles

| Besoin | Forme |
| --- | --- |
| Répéter pendant le succès du test | `while` |
| Répéter jusqu’au succès du test | `until` |
| Parcourir les arguments ou une liste | `for element in "$@"` ou une liste explicite |
| Lire ligne par ligne | `while IFS= read -r ligne` avec `done < fichier` |
| Lire des champs séparés par deux-points | `IFS=: read -r login passe uid gid commentaire home shell` |
| Poser une question pendant la lecture | Deuxième `read` dirigé vers `/dev/tty` si disponible |

Identifiez l’initialisation, le test, le corps et la progression. `expr 2 \* 7` protège l’opérateur multiplication. Une boucle alimentée par un tube s’exécute généralement dans un sous-shell. Une redirection de fichier permet de réutiliser les affectations après la boucle.

**TP.** Le vendredi 13 et les années bissextiles mettent en œuvre `until`. Le comptage par extension mobilise `for` et un fichier de configuration. L’extraction du nom et de l’UID repose sur `while read` et le séparateur `:`.

- [Cours](../../modules/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md)
- [TP et corrections](../../tp/11-initiation-scripting-bash/module-07/index.md)
