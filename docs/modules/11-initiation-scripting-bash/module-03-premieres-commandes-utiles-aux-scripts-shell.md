# Module 03 — Premières commandes utiles aux scripts shell

Le support présente quatre gestes de base dans le terminal. Affichez une information, effacez l’écran, transmettez un code de sortie et cherchez l’aide des commandes intégrées.

## Afficher et mettre en forme

`echo` écrit ses arguments sur la sortie standard. Le support présente `echo -e` pour interpréter des séquences d’échappement. Les guillemets conservent le texte avec ses espaces dans un seul argument.

| Séquence | Effet avec `echo -e` dans Bash |
| --- | --- |
| `\c` | Arrête l’affichage et supprime le saut de ligne final |
| `\n` | Nouvelle ligne |
| `\t` | Tabulation |
| `\\` | Antislash littéral |

```bash
echo "Début du contrôle"
echo -e 'Nom\tStatut\nlocal\tprêt'
```

**Complément pédagogique.** Pour une valeur issue d’une saisie, `printf '%s\n' "$message"` fixe le format. Le contenu de la variable reste une donnée. [Commandes intégrées Bash](https://www.gnu.org/software/bash/manual/html_node/Bash-Builtins.html)

## Effacer l’écran et identifier une commande

Le support emploie `clear` pour effacer l’affichage du terminal. Dans l’environnement habituel, `clear` est externe. Bash intègre `echo`, `exit` et `help`. Dans le laboratoire, `type` indique comment chaque nom est résolu.

```bash
type echo
type clear
type exit
```

## Sortir et transmettre un statut

`exit n` termine le shell courant avec un statut. Par convention, `0` indique le succès et un statut non nul représente une autre issue. L’appelant lit le statut dans `$?`. Sans `exit` explicite, le script se termine avec le statut de la dernière commande exécutée. `exit` sans argument réutilise ce statut. [Commandes intégrées du shell](https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html)

```bash
bash -c 'exit 4'
statut=$?
printf 'Statut lu par l’appelant : %s\n' "$statut"
```

Le résultat prévu est `4`. Copiez `$?` immédiatement, avant qu’une nouvelle commande ne le remplace.

## Trouver l’aide de Bash

```bash
help
help wait
help exit
```

`help` liste les rubriques d’aide. `help wait` montre l’aide de cette commande, comme dans le support. `help exit` détaille le code de sortie. Une commande externe dispose de sa propre documentation.

### Transmission du statut — Complément pédagogique

```mermaid
flowchart LR
    A["Commande ou script"] --> B["Statut rendu à l’appelant"]
    B --> C["Lire $? immédiatement"]
    C --> D["Afficher, conserver ou tester"]
```

## Mini-quiz

1. Quelle séquence produit une tabulation ?
2. D’où vient le statut en fin de script sans `exit` explicite ?
3. Comment ouvrir l’aide de `wait` ?

**Réponses.** `\t` avec l’interprétation des séquences. De la dernière commande exécutée. `help wait`.

[Fiche de révision](../../revision/11-initiation-scripting-bash/module-03-premieres-commandes-utiles-aux-scripts-shell.md)
