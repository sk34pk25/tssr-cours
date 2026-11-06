# Module 07 — Les structures de boucle

Une boucle répète des commandes. Définissez le premier état, ce qui déclenche un passage, la progression et la sortie. Le support utilise une condition de saisie, un compteur et une liste de fichiers.

## Objectifs

- Écrire le test, l’initialisation et la progression de chaque boucle.
- Parcourir les mois, les années ou les fichiers sans perdre leurs limites.
- Lire des champs séparés par deux-points et vérifier le résultat après la boucle.

## Faire progresser le traitement

`expr` effectue un calcul entier avec ses opérandes séparés par des espaces. Protégez `*` pour qu’il soit transmis à `expr` au lieu de développer des noms de fichiers. Le support cite également `let` et l’arithmétique Bash.

```bash
expr 2 + 7
expr 2 \* 7
n=0
n=$((n + 1))
printf '%s\n' "$n"
```

`$((…))` développe la valeur du calcul. `((…))` exécute une expression arithmétique et produit un statut. Vérifiez la progression dans chaque branche de la boucle, en particulier lorsqu’une erreur mène à une nouvelle tentative.

## Répéter avec while ou until

| Structure | Entrée dans le corps | Fin |
| --- | --- | --- |
| `while CONDITION` | Le test réussit | Le test a un statut non nul |
| `until CONDITION` | Le test a un statut non nul | Le test réussit |
| `while true` | À chaque passage | Une instruction comme `break` ou `exit` arrête le traitement |
| `for item in …` | Une fois par élément développé | Tous les éléments ont été traités |

Le support présente `while` pour demander un nom tant qu’il est vide et `until` pour demander un âge jusqu’à l’obtention d’une valeur. Dans ce dernier cas, une valeur non vide peut encore être non numérique. Traitez la fin de l’entrée pour éviter une boucle de demandes sans saisie possible.

```bash
nom=
while [[ -z $nom ]]; do
    IFS= read -r -p "Nom : " nom || exit 1
done

age=
until [[ $age =~ ^[0-9]+$ ]]; do
    IFS= read -r -p "Âge entier : " age || exit 1
done
```

Dans un menu, `while true` répète l’affichage. Le choix de quitter mène à `break` pour quitter la boucle ou `exit` pour terminer le script. Un choix inconnu doit produire un retour compréhensible avant le nouveau passage.

## Itérer sur une liste avec for

`for` parcourt les mots issus de la liste après les développements applicables. Les séparateurs d’`IFS` jouent sur le découpage des développements non cités. Les mots cités restent entiers. Avec `"$@"`, chaque argument fourni au script reste un élément.

```bash
for extension in sh txt bash; do
    printf 'Extension : %s\n' "$extension"
done
for argument in "$@"; do
    printf 'Argument : <%s>\n' "$argument"
done
```

Le support montre `set | grep ^IFS` et `IFS=$' \t\n'`. Modifier `IFS` agit sur les développements ultérieurs qui utilisent le découpage de champs. Une affectation placée juste avant `read` limite son usage à la lecture concernée. `for var in $(cat fichier.txt)` découpe des mots et peut développer des caractères génériques. Cette forme est inadaptée aux lignes contenant des espaces ou des motifs.

## Lire des lignes avec while read

```bash
while IFS= read -r ligne || [[ -n $ligne ]]; do
    printf '%s\n' "$ligne"
done < fichier.txt
```

`IFS=` préserve les espaces en bordure. `-r` conserve les antislashs. Le second test permet de traiter la dernière ligne même si elle est dépourvue de saut de ligne. Pour répartir les champs de `/etc/passwd`, utilisez `IFS=: read -r nom passe uid gid commentaire home shell`. Les champs vides et les espaces dans un commentaire restent en place.

Le support présente aussi `cat Edition | while read …` et `done < <(cat Edition)`. Une boucle dans un tube s’exécute généralement dans un sous-shell. Ses affectations peuvent rester locales à ce processus. Une redirection depuis un fichier ou une substitution de processus permet de garder la boucle dans le shell courant. [Pipelines Bash](https://www.gnu.org/software/bash/manual/html_node/Pipelines.html)

Un deuxième `read` sans redirection dans la boucle consomme la ligne suivante de la même entrée. Pour demander une réponse à l’utilisateur, le support redirige ce `read` depuis `/dev/tty`. Cette forme nécessite un terminal de contrôle.

## Trois travaux pratiques

| TP | Traitement | Vérification |
| --- | --- | --- |
| 01 partie 1 | Analyser `13.sh` et compléter sa documentation. Les mois sont parcourus jusqu’à 13 | Compteur initial, détection du vendredi, format de calendrier |
| 01 partie 2 | Rechercher les années bissextiles dans un intervalle inclusif | `2026 2029` donne 2028. Préciser la règle des siècles |
| 02 | Compter les fichiers selon une liste d’extensions | Répertoire contenant des espaces, extension absente et total |
| 03 | Lire `/etc/passwd` avec `while read` et afficher nom et UID | Délimiter sur `:` et conserver les champs vides |

### TP 01 — Contrôler la sentinelle et l’intervalle

Pour `13.sh`, repérez d’abord l’année attendue, le premier mois et la fin à la valeur 13. Relevez où se font le test du vendredi, le comptage et le classement final. Le résultat du test fondé sur `cal` dépend de la présentation du calendrier. La correction pédagogique propose GNU `date` pour vérifier le jour sans lire des colonnes de calendrier.

Pour les années bissextiles, vérifiez les deux bornes avant de commencer. Parcourez chaque année de la plage, bornes comprises, puis affichez les années retenues et leur nombre. Une année divisible par 100 est exclue, sauf si elle est divisible par 400. La variante de correction applique la règle grégorienne.

### TP 02 — Compter par extension

Préparez le fichier d’extensions demandé par le TP. Parcourez les fichiers ordinaires visibles du premier niveau. Séparez le total de fichiers et les compteurs par extension. Conservez les limites d’un nom contenant des espaces. Un dossier dont le nom finit par `.sh` ne doit pas augmenter le compteur des scripts.

### TP 03 — Extraire le nom et l’UID

Définissez le deux-points comme séparateur du `read` et affectez un nom à chacun des sept champs. Affichez seulement le premier et le troisième champ. Redirigez le fichier vers la boucle. Une description contenant des espaces ou un champ vide ne déplace pas l’UID.

| Jeu d’essai | Résultat attendu |
| --- | --- |
| Années 2026 à 2029 | Une seule année, 2028 |
| Année 1900, puis 2000 | 1900 exclue, 2000 retenue |
| Fichier `nom composé.sh` et dossier `archives.sh` | Un fichier `.sh` compté |
| Ligne de compte avec un commentaire composé | Le couple identifiant et UID est lu sans décalage |

### Progression — Complément pédagogique

```mermaid
flowchart TD
    A["Initialiser"] --> B{"Poursuivre ?"}
    B -->|Oui| C["Traiter et mettre à jour"]
    C --> B
    B -->|Non| D["Présenter le résultat"]
```

## À retenir

Une boucle doit rendre explicites le départ, la progression et l’arrêt. Les guillemets protègent les noms parcourus. Le séparateur du fichier doit piloter le découpage effectué par `read`.

## Mini-quiz

1. Quand une boucle `until` s’arrête-t-elle ?
2. Pourquoi rediriger un fichier dans une boucle dont on réutilise le compteur ?
3. Que fait un second `read` s’il partage la même entrée ?
4. Pourquoi 1900 et 2000 ne donnent-elles pas le même résultat ?
5. Quel champ contient l’UID dans le TP 03 ?

??? success "Réponses commentées"
    1. Lorsque la condition réussit, donc qu’elle rend le statut zéro.
    2. La boucle s’exécute dans le shell courant. Dans un pipeline, elle s’exécute généralement dans un sous-shell.
    3. Il consomme la ligne suivante de cette entrée.
    4. Ce sont des siècles. 2000 est divisible par 400, alors que 1900 ne l’est pas.
    5. Le troisième champ séparé par deux-points. Le premier contient l’identifiant.

## Appliquer ce module

- [TP du module et corrections](../../tp/11-initiation-scripting-bash/module-07/index.md)
- [Fiche de révision](../../revision/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md)
