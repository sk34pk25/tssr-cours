# Fiche de révision — Module 03 — Premières commandes utiles aux scripts shell

## Afficher

```bash
echo [option] "expression"
echo -e
```

Avec `echo -e`, le support cite `\c`, `\n`, `\t` et `\\`.

## Shell et code de retour

```bash
clear
exit [ n ]
exit 0
$?
```

`$?` présente le code retourné au shell parent. Les formulations du support concernant `clear` et l’absence d’`exit` explicite restent à interpréter dans leur contexte documentaire.

## Aide

```bash
help
help wait
```

`wait` n’est abordé ici qu’au travers de l’aide intégrée.

Pour le contexte : [cours du module](../../modules/11-initiation-scripting-bash/module-03-premieres-commandes-utiles-aux-scripts-shell.md).
