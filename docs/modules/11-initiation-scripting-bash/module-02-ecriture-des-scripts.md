# Module 02 — Écriture des scripts

Créez un fichier texte à partir de l’algorithme, choisissez son interpréteur et contrôlez les résultats. Le support utilise Bash et l’éditeur `vi` ou `vim`.

## Objectifs

- Écrire un fichier texte avec un shebang et des commentaires utiles.
- Comparer l’appel par Bash au lancement direct du fichier.
- Contrôler la syntaxe et relier chaque sortie à une étape du TP.

## Interpréteur, commentaires et permissions

Ouvrez `monscript.sh` avec `vi monscript.sh`. Placez le shebang en première ligne. Documentez le rôle du script avec `#`. Un en-tête peut donner son usage, ses dépendances et sa version.

```bash
#!/bin/bash
# Afficher un premier message sur la console.
echo "Hello world"
```

Le suffixe `.sh` identifie le fichier pour le lecteur. La permission d’exécution et le shebang servent au lancement direct. Le support montre `which bash` pour rechercher l’interpréteur. `command -v bash` permet aussi de voir comment le shell résout ce nom.

| Forme | Effet |
| --- | --- |
| `bash monscript.sh` | Bash lit le fichier indiqué |
| `chmod u+x ./monscript.sh` | Ajoute l’exécution au propriétaire |
| `chmod ug+x ./monscript.sh` | Ajoute l’exécution au propriétaire et au groupe |
| `./monscript.sh` | Lance le fichier selon son shebang |

Le support présente aussi `chmod +x ./monscript.sh`. Enregistrez le texte avec des fins de ligne Unix LF pour que le shebang soit interprété correctement.

## Identifier une erreur

```bash
bash -n monscript.sh
```

**Complément pédagogique.** `bash -n` contrôle la syntaxe sans exécuter les commandes. Ce contrôle précède un essai en laboratoire. Dans le support, `bash -x monscript.sh` exécute le script et affiche les commandes après développement des arguments. Examinez les valeurs sur des données de test et gardez les secrets hors de la trace. [Options de Bash](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)

Le support ajoute aussi temporairement un affichage et un `read` pour faire une pause. Voici un exemple où le diagnostic passe par la sortie d’erreur.

```bash
#!/bin/bash
read -r -p "Tapez votre nom : " nom || exit 1
printf 'Diagnostic — nom reçu : %s\n' "$nom" >&2
read -r -p "Appuyez sur Entrée pour poursuivre. " pause
printf 'Bienvenue %s sur la machine %s\n' "$nom" "$HOSTNAME"
```

Retirez les pauses de diagnostic avant un lancement automatisé. Conservez les messages qui permettent à l’appelant de comprendre une erreur.

## TP 02 — Script à partir d’un algorithme

Suivez les actions de l’énoncé dans leur ordre. Affichez l’accueil, listez les fichiers `*.sh` et `*.bash` du répertoire courant, ajoutez une ligne vide, puis affichez la version et les emplacements de Bash avant la recherche de mises à jour.

| Action | Commande de la correction | Lecture du résultat |
| --- | --- | --- |
| Lister les scripts | `ls -l *.sh` et `ls -l *.bash` | Les deux motifs sont développés séparément |
| Interroger Bash | `bash --version` | Version de l’interpréteur appelé |
| Repérer les emplacements | `whereis bash` | Résultats de recherche des fichiers associés |
| Consulter les mises à jour | `apt list --upgradable \| grep bash` | Filtre textuel sur la liste des mises à jour connues |

**Clarification pédagogique.** Sans correspondance, le motif peut être transmis tel quel à `ls`. `whereis bash` recherche certains emplacements, dont le résultat varie selon l’installation. La liste dépend des métadonnées APT disponibles et le filtre peut retenir des paquets dont le nom contient `bash`. Le script fourni dans le Drive est consultable dans la correction du TP.

### Organiser et vérifier les sorties

1. Créez un fichier avec des fins de ligne LF. Placez le shebang et un commentaire d’usage avant l’accueil.
2. Placez deux fichiers de test, dont un nom avec des espaces. Comparez les listes par extension dans le dossier de travail. Relevez aussi le cas où une extension ne correspond à aucun fichier.
3. Distinguez la version retournée par `bash --version` des emplacements retournés par `whereis bash`. Vérifiez séparément l’emplacement du fichier de configuration si l’énoncé le demande.
4. Consultez la liste APT et interprétez sa sortie. Un filtre sans ligne peut signifier qu’aucun nom ne correspond aux informations locales. L’exercice ne demande pas d’installer une mise à jour.
5. Contrôlez d’abord la syntaxe. Pour tester le lancement direct en VM, ajoutez le droit d’exécution au propriétaire et comparez la sortie attendue à la sortie observée.

```bash
bash -n monscript.sh
chmod u+x ./monscript.sh
```

### Du fichier à la trace — Complément pédagogique

```mermaid
flowchart LR
    A["Algorithme"] --> B["Fichier et shebang"]
    B --> C["Contrôle syntaxique"]
    C --> D["Essai dans le laboratoire"]
    D --> E["Trace ou diagnostic ciblé"]
```

## À retenir

Le shebang choisit l’interpréteur pour un lancement direct. Le droit d’exécution rend ce lancement possible. L’analyse syntaxique, la trace et la vérification du résultat répondent à trois questions différentes.

## Mini-quiz

1. Quel élément sélectionne l’interpréteur pour `./monscript.sh` ?
2. Que contrôle `bash -n monscript.sh` ?
3. Que montre `bash -x` ?
4. Quel effet a `chmod u+x` sur ce fichier ?
5. Que vérifier si `ls -l *.bash` échoue dans le dossier du TP ?

??? success "Réponses commentées"
    1. Le shebang de la première ligne, lorsque le fichier peut être exécuté.
    2. La syntaxe. Une commande manquante ou un résultat inattendu peuvent apparaître ensuite lors d’un essai.
    3. La trace des commandes exécutées et de leurs arguments développés. Une valeur sensible peut y apparaître.
    4. Il ajoute le droit d’exécution du propriétaire. Un appel explicite par `bash` requiert surtout de pouvoir lire le fichier.
    5. Vérifier la présence d’un fichier correspondant. Avec les réglages usuels, le motif non développé est transmis à `ls`.

## Appliquer ce module

- [TP 02 et correction](../../tp/11-initiation-scripting-bash/module-02/index.md)
- [Fiche de révision](../../revision/11-initiation-scripting-bash/module-02-ecriture-des-scripts.md)
