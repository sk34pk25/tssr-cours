# Module 01 — Analyse

Avant d’écrire un script, décrivez le besoin avec la personne qui le formule. L’analyse aboutit à des règles vérifiables. Le cahier des charges donne le cadre, puis l’algorithme décrit les actions et leur ordre.

## Objectifs

- Distinguer le besoin, le cahier des charges et l’algorithme.
- Représenter une décision, une répétition et une sortie.
- Dérouler un scénario à la main pour contrôler sa terminaison.

## Du besoin au script

| Étape | Travail | Résultat |
| --- | --- | --- |
| Énoncé du problème | Partir de la situation et du résultat demandé | Besoin d’administration ou d’un utilisateur |
| Cahier des charges | Identifier les contraintes avec le porteur du besoin | Environnement, données, dépendances, critères de réussite |
| Algorithme | Prévoir les décisions et ordonner les actions | Pseudo-code ou organigramme |
| Écriture | Traduire l’algorithme dans le langage choisi | Fichier de commandes lu par l’interpréteur |

## Représenter et relire l’algorithme

Le pseudo-code met les étapes en texte. Indentez l’intérieur d’un test ou d’une boucle et repérez le retour à l’étape de décision. Dans l’organigramme, l’ovale représente le début et la fin, le rectangle une action, le losange une décision et le parallélogramme une entrée ou une sortie. Étiquetez chaque branche et suivez les flèches pour vérifier le résultat d’une saisie.

## Exemple de connexion

Le support demande d’afficher les derniers échecs de connexion sur Debian 10. Le script Bash `logonfails.sh` vise un lancement manuel ou automatique, sans dépendance supplémentaire dans le scénario. L’utilisateur peut indiquer le nombre d’échecs. Le défaut est 42. Le support prévoit de journaliser l’exécution.

```text
Début
  log ← /var/log/secure
  nbdefaut ← 42
  Si un seul argument est fourni
    nb ← cet argument
  Fin Si
  Si nb est absent ou n’est pas un entier
    nb ← nbdefaut
  Fin Si
  Afficher les nb derniers échecs de connexion issus de log
  Journaliser l’exécution de logonfails.sh
Fin
```

**Clarification pédagogique.** `/var/log/secure` est le chemin illustratif du support. Vérifiez le mécanisme de journalisation et les droits de lecture sur le système utilisé. Le support alterne `nbdefaut` et `nbdefault` dans ses représentations. Une implémentation doit employer un nom cohérent. Précisez aussi le comportement avec zéro, un entier négatif ou plusieurs arguments.

| Cas | Règle à contrôler |
| --- | --- |
| Aucun argument | Retenir la valeur par défaut |
| Un entier valide | Employer le nombre fourni |
| Valeur non numérique | Appliquer le défaut |
| Journal inaccessible | Définir une erreur observable |
| Nombre demandé supérieur au nombre de résultats | Définir la sortie attendue |

## TP 01 — Préparer du café

Pour obtenir `n` tasses, vérifiez la présence de l’eau, du café moulu, du filtre, de la cafetière et de l’électricité. Une ressource absente mène à la fin. Initialisez le compteur à zéro. À chaque passage, ajoutez une dose d’eau et une dose de café, puis incrémentez le compteur. Allumez la cafetière une fois la quantité atteinte. Déroulez les deux corrections avec une ressource absente, puis avec deux tasses.

### Dérouler l’atelier pas à pas

1. Notez le nombre de tasses et les cinq ressources à contrôler. Pour tracer la boucle, choisissez un nombre entier strictement positif.
2. Si une ressource manque, suivez la branche d’arrêt. Le compteur et l’allumage n’interviennent pas.
3. Si toutes les ressources sont présentes, partez de `d=0`. Pour deux tasses, le compteur prend successivement les valeurs `0`, `1` et `2`. À chaque incrément, les deux doses ont déjà été ajoutées.
4. Comparez les deux traces avec le pseudo-code et l’organigramme de correction. Les actions et l’ordre doivent coïncider.

| Saisie et ressources | Preuve à relever |
| --- | --- |
| Filtre absent | Arrêt sur le test du filtre et aucun allumage |
| Deux tasses, ressources présentes | Deux passages, puis allumage une seule fois |
| Quantité vide, nulle ou négative | Le support ne définit pas ce cas. Préciser son traitement dans le cahier des charges avant de coder |

### Schéma de synthèse — Complément pédagogique

```mermaid
flowchart TD
    A["Relever les contraintes"] --> B{"Ressources présentes ?"}
    B -->|Non| F["Terminer"]
    B -->|Oui| C["Initialiser d à 0"]
    C --> D{"d = n ?"}
    D -->|Non| E["Ajouter les deux doses et incrémenter d"]
    E --> D
    D -->|Oui| G["Allumer la cafetière"]
    G --> F
```

## À retenir

Le cahier des charges fixe les cas à couvrir. L’algorithme rend visibles les décisions et l’ordre des actions. Une trace manuelle vérifie le compteur et la condition d’arrêt avant l’écriture du script.

## Mini-quiz

1. Quel document fixe le résultat attendu et les contraintes de l’environnement ?
2. Que doit montrer le losange d’un organigramme ?
3. Quand incrémenter le compteur de doses dans le TP ?
4. Que doit faire l’algorithme si le filtre manque ?
5. Que spécifier si le demandeur autorise zéro tasse ?

??? success "Réponses commentées"
    1. Le cahier des charges, élaboré avec le porteur du besoin.
    2. Une décision dont les issues sont étiquetées, par exemple « Oui » et « Non ».
    3. Après l’ajout d’une dose d’eau et d’une dose de café.
    4. Terminer avant l’ajout des doses et l’allumage.
    5. Le résultat attendu et la condition d’arrêt pour cette valeur. Le scénario du support ne le précise pas.

## Appliquer ce module

- [Énoncé et corrections du TP 01](../../tp/11-initiation-scripting-bash/module-01/index.md)
- [Fiche de révision](../../revision/11-initiation-scripting-bash/module-01-analyse.md)
