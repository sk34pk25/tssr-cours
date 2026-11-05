# Fiche de révision — Module 03 — Premières commandes utiles

| Besoin | Forme |
| --- | --- |
| Afficher un texte | `echo "message"` |
| Interpréter des séquences | `echo -e` avec `\c`, `\n`, `\t` ou `\\` |
| Afficher une valeur avec un format fixe | `printf '%s\n' "$valeur"` |
| Effacer l’écran | `clear`, habituellement externe |
| Voir comment Bash résout un nom | `type echo` ou `type clear` |
| Terminer le shell avec un statut | `exit 0`, `exit 2` |
| Lire le dernier statut | `$?` immédiatement après le retour |
| Voir l’aide intégrée | `help` ou `help wait` |

`\c` termine l’affichage sans saut de ligne, `\n` produit un saut, `\t` une tabulation et `\\` un antislash. Sans `exit` explicite, le statut final est celui de la dernière commande exécutée.

**Autoévaluation.** Après `bash -c 'exit 2'`, le statut à récupérer est `2`. Il change dès qu’une autre commande synchrone se termine.

[Cours](../../modules/11-initiation-scripting-bash/module-03-premieres-commandes-utiles-aux-scripts-shell.md)
