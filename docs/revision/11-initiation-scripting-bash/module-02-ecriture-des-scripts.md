# Fiche de révision — Module 02 — Écriture des scripts

| Élément | Rôle |
| --- | --- |
| `#!/bin/bash` | Interpréteur utilisé lors d’un lancement direct |
| `# commentaire` | Explication destinée au lecteur |
| `chmod u+x ./monscript.sh` | Permission d’exécution du propriétaire |
| `bash -n monscript.sh` | Contrôle de la syntaxe |
| `bash -x monscript.sh` | Exécution avec trace des commandes développées |
| `read -r nom` | Lecture d’une saisie dans une variable |

Enregistrez le script en LF. Après un contrôle de syntaxe, comparez le résultat attendu avec la trace du laboratoire. Un message de diagnostic utile peut afficher le contexte vers la sortie d’erreur avec `>&2`. Une pause `read` est utile pendant le diagnostic interactif.

**TP 02.** Les actions couvrent `ls -l *.sh`, `ls -l *.bash`, `bash --version`, `whereis bash` et la consultation des mises à jour connues par APT. Prévoyez le cas où aucun fichier ne correspond à un motif.

## Questions flash

1. Comment distinguer un problème de syntaxe d’un problème de permissions ?
2. Que vérifier quand le filtre APT n’affiche aucune ligne ?

??? success "Réponses commentées"
    1. Lancer d’abord `bash -n monscript.sh`. Si la syntaxe passe mais que `./monscript.sh` est refusé, vérifier le droit d’exécution, le shebang et les fins de ligne.
    2. Regarder la liste de départ et la fraîcheur des informations locales. Un filtre vide ne dit pas à lui seul pourquoi aucune ligne ne correspond.

- [Cours](../../modules/11-initiation-scripting-bash/module-02-ecriture-des-scripts.md)
- [TP et correction](../../tp/11-initiation-scripting-bash/module-02/index.md)
