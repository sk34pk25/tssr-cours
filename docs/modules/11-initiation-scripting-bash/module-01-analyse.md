# Module 01 — Analyse

**Objectif :** passer d’un besoin à une analyse structurée, puis à une représentation en pseudo-code et en organigramme avant l’écriture éventuelle d’un script.

## Partir du besoin et des contraintes

Avant d’écrire un script, le support demande d’identifier le besoin à couvrir et les contraintes du scénario. L’analyse permet alors de préciser ce qui doit être fourni au traitement, ce qui doit être fait, puis le résultat attendu.

| Élément d’analyse | Question à poser |
| --- | --- |
| Besoin | Quel résultat veut-on obtenir ? |
| Contraintes | Quelles conditions ou limites faut-il respecter ? |
| Données d’entrée | Quelles informations sont nécessaires au départ ? |
| Traitement | Quelles étapes doivent être réalisées ? |
| Résultat | Quel résultat doit être produit ou vérifié ? |

## Représenter l’algorithme

Le module présente deux représentations complémentaires :

- le **pseudo-code**, pour formuler les étapes du traitement ;
- l’**organigramme**, pour représenter visuellement les décisions et l’enchaînement des actions.

Ces deux formes servent à vérifier la logique du besoin avant l’écriture éventuelle d’un script.

## Exemple du support : `logonfails.sh`

Le support situe son exemple dans un scénario historique Debian 10 et Bash. Le script illustratif `logonfails.sh` s’appuie sur le fichier illustratif `/var/log/secure`. Le nombre de résultats peut être fourni en argument ; une valeur par défaut de `42` est indiquée. Le support évoque un usage interactif ou automatique.

Les noms `log`, `nb`, `nbdefaut` et `nbdefault` sont conservés tels qu’ils apparaissent dans les documents. La variation entre `nbdefaut` et `nbdefault` est une divergence documentaire à examiner, non une normalisation à introduire.

## TP 01 — Préparer du café

Le TP applique la démarche à une quantité donnée de café. Les ressources citées sont l’eau, le café, le filtre, la cafetière, l’électricité et le nombre de tasses `n`.

La logique source est la suivante :

1. vérifier la présence des ressources ;
2. terminer lorsqu’une ressource manque ;
3. initialiser `d=0` ;
4. ajouter une dose d’eau et de café tant que `d` n’atteint pas `n` ;
5. incrémenter `d` ;
6. allumer la cafetière.

Le pseudo-code et l’organigramme fournis avec le TP sont deux corrections complémentaires. Ce module ne fournit pas de script Bash de correction pour ce scénario.

## Vérifier avant d’écrire

La vérification consiste à confronter le besoin, les ressources, les conditions d’arrêt et les étapes représentées. Une incohérence dans le pseudo-code ou dans l’organigramme doit être conservée comme point de revue documentaire, plutôt que corrigée silencieusement.

## Synthèse

L’analyse décompose un besoin en contraintes, données, traitement et résultat. Le pseudo-code et l’organigramme permettent de contrôler cette décomposition avant l’écriture éventuelle d’un script.

## Aller plus loin dans le module

- [TP 01 — Algorithme](../../tp/11-initiation-scripting-bash/module-01/index.md)
- [Énoncé du TP](../../tp/11-initiation-scripting-bash/module-01/tp-01-algorithme.md)
- [Correction en pseudo-code](../../tp/11-initiation-scripting-bash/module-01/correction-pseudo-code.md)
- [Correction en organigramme](../../tp/11-initiation-scripting-bash/module-01/correction-organigramme.md)
- [Fiche de révision](../../revision/11-initiation-scripting-bash/module-01-analyse.md)
