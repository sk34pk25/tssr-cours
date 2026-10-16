# Module 03 — Premières commandes utiles aux scripts shell

## Objectifs

Le support présente l’affichage d’informations, l’effacement de l’écran, la sortie du shell courant et l’aide des commandes intégrées.

## Afficher avec `echo`

La syntaxe indiquée est :

```bash
echo [option] "expression"
```

Avec `echo -e`, le support présente les séquences suivantes :

| Séquence | Effet indiqué |
| --- | --- |
| `\c` | suppression du retour à la ligne final |
| `\n` | nouvelle ligne |
| `\t` | tabulation |
| `\\` | antislash |

## Effacer et quitter

Le support cite :

```bash
clear
exit [ n ]
exit 0
```

`clear` est présenté parmi les commandes internes du shell dans le support : cette présentation documentaire est conservée sans en faire une affirmation technique générale. Le support associe aussi l’absence d’un `exit` explicite à `exit 0` ; cette formulation historique n’est pas généralisée au-delà de la source.

## Code de retour

La variable réservée `$?` est utilisée pour présenter le code retourné au shell parent.

## Aide intégrée

Le support utilise :

```bash
help
help wait
```

La présence de `wait` est limitée à `help wait` dans ce module : elle ne constitue pas une section sur la gestion de processus.

## Synthèse

M03 est limité aux commandes et séquences présentées dans son support : `echo`, `echo -e`, `clear`, `exit`, `$?` et `help`. Aucun TP, exercice, correction, script autonome ou Kahoot n’est fourni pour ce module.

## Révision

- [Fiche de révision M03](../../revision/11-initiation-scripting-bash/module-03-premieres-commandes-utiles-aux-scripts-shell.md)
