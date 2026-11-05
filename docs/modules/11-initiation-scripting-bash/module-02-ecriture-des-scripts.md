# Module 02 — Écriture des scripts

Créez un fichier texte à partir de l’algorithme, choisissez son interpréteur et contrôlez les résultats. Le support utilise Bash et l’éditeur `vi` ou `vim`.

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

### Du fichier à la trace — Complément pédagogique

```mermaid
flowchart LR
    A["Algorithme"] --> B["Fichier et shebang"]
    B --> C["Contrôle syntaxique"]
    C --> D["Essai dans le laboratoire"]
    D --> E["Trace ou diagnostic ciblé"]
```

## Mini-quiz

1. Quel élément sélectionne l’interpréteur lors de `./monscript.sh` ?
2. Que contrôle `bash -n` ?
3. Que montre `bash -x` ?

**Réponses.** Le shebang. La syntaxe. Les commandes réellement exécutées et leurs arguments développés.

- [TP 02 et correction](../../tp/11-initiation-scripting-bash/module-02/index.md)
- [Fiche de révision](../../revision/11-initiation-scripting-bash/module-02-ecriture-des-scripts.md)
