# Module 05 — Les caractères spéciaux du script

Ce module organise plusieurs commandes dans un même script. Il montre comment lier une action au succès d’une autre, partager une redirection et rendre une information visible par la couleur.

## Objectifs

- Choisir un enchaînement en fonction du statut recherché.
- Comparer le groupe courant, le sous-shell et les redirections.
- Construire un script d’écriture qui s’arrête si une étape requise échoue.

## Choisir la règle d’enchaînement

| Forme | Quand la deuxième commande est appelée | Statut de la liste |
| --- | --- | --- |
| `A ; B` | Après A, quel que soit son statut dans le déroulement ordinaire | Celui de B |
| `A && B` | Si A réussit, statut zéro | Celui de la dernière commande exécutée |
| `A \|\| B` | Si A a un statut non nul | Celui de la dernière commande exécutée |
| `A \| B` | Les processus communiquent par un tube | Celui de B par défaut |

Le support montre la création de `/data` puis d’un fichier dans ce dossier. Avec `;`, la seconde commande est tentée même si la première échoue. Pour que la création du fichier dépende de celle du répertoire, employez `&&`. Pour afficher un message si la création échoue, utilisez `||`. `2>/dev/null` cache la sortie d’erreur de la commande à laquelle il est attaché. Le code de retour reste disponible. [Listes de commandes](https://www.gnu.org/software/bash/manual/html_node/Lists.html)

```bash
mkdir ./data && touch ./data/file1
mkdir ./autre-data 2>/dev/null || printf '%s\n' "Création du répertoire impossible" >&2
ls -l ./data
```

**Complément pédagogique.** `A && B || C` appelle C si A échoue ou si B échoue. Pour sélectionner exactement une branche d’après A, utilisez `if`. Un tube transmet la sortie standard de A à l’entrée standard de B. Il ne propage pas automatiquement l’échec de A. Bash offre `set -o pipefail` pour obtenir le dernier statut non nul d’un pipeline en échec. [Pipelines Bash](https://www.gnu.org/software/bash/manual/html_node/Pipelines.html)

## Regrouper des commandes

Les parenthèses créent un sous-shell. Les accolades exécutent le groupe dans le shell courant dans une commande ordinaire. Le groupe entre accolades requiert les espaces et un séparateur avant `}`. Le support indique contradictoirement un environnement enfant pour les accolades. Une affectation de variable rend la distinction observable.

```bash
valeur=parent
( valeur=enfant; printf 'Dans le groupe : %s\n' "$valeur" )
printf 'Après les parenthèses : %s\n' "$valeur"
{ valeur=courant; printf 'Dans le groupe : %s\n' "$valeur"; }
printf 'Après les accolades : %s\n' "$valeur"
```

L’exemple affiche `enfant` dans les parenthèses, puis `parent` après. Les deux derniers affichages donnent `courant`. Une redirection placée après la fermeture peut s’appliquer à l’ensemble du groupe. Un tube peut modifier le contexte d’exécution du groupe. [Regroupement de commandes](https://www.gnu.org/software/bash/manual/html_node/Command-Grouping.html)

## Afficher des couleurs

Les codes de premier plan vont de 30 à 37 dans la table du support. Les arrière-plans correspondants vont de 40 à 47.

| Couleur | Texte | Fond |
| --- | --- | --- |
| Noir | 30 | 40 |
| Rouge | 31 | 41 |
| Vert | 32 | 42 |
| Jaune | 33 | 43 |
| Bleu | 34 | 44 |
| Magenta | 35 | 45 |
| Cyan | 36 | 46 |
| Gris clair | 37 | 47 |

Le support indique les attributs 0 pour réinitialiser, 1 pour le gras, 4 pour le souligné, 7 pour inverser, 8 pour masquer et 9 pour barrer. La séquence commence par `\033[` ou `\e[` et finit par `m`. Réinitialisez le style avec `\033[0m`. Le rendu dépend du terminal. Conservez un libellé qui reste lisible sans la couleur.

```bash
echo -e "voici du \033[1;32mvert\033[0m"
printf '\033[1;32m%s\033[0m\n' 'Fichier prêt'
```

## TP 01 — Créer un dossier et un fichier

Demandez le dossier, créez-le, créez `fic_M5TP1.txt`, écrivez le texte attendu et affichez son contenu. Le support distingue les messages du dossier et du fichier par couleur. Un chemin peut contenir des espaces. Protégez ses développements par des guillemets et arrêtez le traitement si une étape requise échoue. La redirection `>` remplace le contenu du fichier. Réalisez le TP dans un répertoire de travail réservé à l’exercice.

### Vérifier chaque effet dans le dossier du TP

1. Lisez le chemin de destination et refusez une saisie vide. Utilisez un dossier d’exercice.
2. Créez le dossier et contrôlez le statut avant de construire le chemin de `fic_M5TP1.txt`.
3. Créez puis écrivez le fichier. Affichez le contenu seulement après une écriture réussie. Vérifiez que la couleur n’affecte que le message et réinitialisez-la avant l’affichage suivant.
4. Comparez le fichier créé, la sortie standard et la sortie d’erreur. Un nom avec des espaces doit produire un seul dossier et un seul fichier.

| Cas | Vérification |
| --- | --- |
| Dossier nouveau ou déjà présent | Le dossier est prêt et le contenu final est celui de l’énoncé |
| Chemin déjà occupé par un fichier | La création du dossier échoue et les actions suivantes sont interrompues |
| Saisie vide | Message explicite et statut non nul |

### Enchaînement du TP — Complément pédagogique

```mermaid
flowchart TD
    A["Lire le dossier"] --> B{"Création possible ?"}
    B -->|Non| X["Afficher une erreur et quitter"]
    B -->|Oui| C{"Écriture du fichier possible ?"}
    C -->|Non| X
    C -->|Oui| D["Afficher le contenu"]
```

## À retenir

`&&` et `||` testent des statuts. Un tube transmet des données. Regrouper les commandes fixe la portée d’une redirection et le contexte des affectations. Un diagnostic utile reste lisible quand le terminal n’affiche pas la couleur.

## Mini-quiz

1. Que fait `B` après `A && B` quand A échoue ?
2. Quel groupe conserve une affectation dans le shell courant hors d’un tube ?
3. Quel descripteur rediriger pour séparer les diagnostics ?
4. Si A réussit et B échoue dans `A && B || C`, que fait la liste ?
5. Que faire après un message coloré dans le TP ?

??? success "Réponses commentées"
    1. B n’est pas exécutée.
    2. Le groupe ordinaire entre accolades.
    3. Le descripteur `2` correspond à la sortie d’erreur standard.
    4. Elle exécute C. Utilisez un `if` si la branche doit dépendre uniquement du statut de A.
    5. Réinitialiser le style pour que les sorties suivantes gardent leur apparence normale.

## Appliquer ce module

- [TP 01 et correction](../../tp/11-initiation-scripting-bash/module-05/index.md)
- [Fiche de révision](../../revision/11-initiation-scripting-bash/module-05-les-caracteres-speciaux-du-script.md)
