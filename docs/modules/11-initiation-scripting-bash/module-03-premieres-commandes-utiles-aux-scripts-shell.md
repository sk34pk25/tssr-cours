# Module 03 — Premières commandes utiles aux scripts shell

Le support présente quatre gestes de base dans le terminal. Affichez une information, effacez l’écran, transmettez un code de sortie et cherchez l’aide des commandes intégrées.

## Objectifs

- Afficher une donnée et un libellé dans des formats reproductibles.
- Identifier les commandes intégrées et consulter leur aide.
- Conserver et expliquer le statut de sortie d’une commande.

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

## Mise en pratique — Affichage et statut

Aucun TP distinct n’est fourni pour ce module. Cet essai pédagogique reprend les commandes du support.

1. Affichez un libellé et une valeur contenant des espaces. Comparez `echo -e` et `printf` pour produire une tabulation.
2. Relevez la catégorie indiquée par `type echo` et `type clear`. Ouvrez l’aide intégrée de `exit`.
3. Dans un shell enfant, demandez le statut `4` avec le bloc précédent. Enregistrez `$?` aussitôt et vérifiez sa valeur avant de poursuivre.

| Contrôle | Résultat prévu |
| --- | --- |
| Affichage avec tabulation | Une séparation visible entre libellé et valeur |
| `type echo` dans Bash | Une commande intégrée, sauf redéfinition locale |
| `bash -c 'exit 4'` | L’appelant continue et peut lire le statut `4` |

### Transmission du statut — Complément pédagogique

```mermaid
flowchart LR
    A["Commande ou script"] --> B["Statut rendu à l’appelant"]
    B --> C["Lire $? immédiatement"]
    C --> D["Afficher, conserver ou tester"]
```

## À retenir

La sortie standard contient les données destinées à l’appelant. Le statut représente l’issue du traitement. Lisez-le immédiatement et cherchez l’aide avec l’outil adapté à la catégorie de commande.

## Mini-quiz

1. Quelle séquence représente une tabulation ?
2. D’où vient le statut d’un script sans `exit` explicite ?
3. Comment afficher l’aide de la commande intégrée `wait` ?
4. Pourquoi enregistrer `$?` avant un affichage de diagnostic ?
5. Pourquoi passer le format séparément dans `printf '%s\n' "$message"` ?

??? success "Réponses commentées"
    1. `\t` lorsque la commande interprète les séquences d’échappement.
    2. De la dernière commande exécutée.
    3. Avec `help wait` dans Bash.
    4. L’affichage a son propre statut et peut remplacer celui que l’on veut observer.
    5. Le format reste constant même si le message contient des caractères qui ressemblent à des directives.

## Appliquer ce module

[Fiche de révision](../../revision/11-initiation-scripting-bash/module-03-premieres-commandes-utiles-aux-scripts-shell.md)
