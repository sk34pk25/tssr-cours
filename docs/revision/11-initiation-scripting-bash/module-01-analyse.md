# Fiche de révision — Module 01 — Analyse

| Étape | Repère |
| --- | --- |
| Besoin | Situation initiale et service demandé par le porteur du besoin |
| Cahier des charges | Contraintes, entrées, résultats attendus et comportement en cas d’erreur |
| Algorithme | Ordre des actions et conditions |
| Vérification | Une entrée et un résultat prévu pour chaque branche |

Le pseudo-code exprime les étapes en texte. Un organigramme utilise des ovales pour le début et la fin, des rectangles pour les actions, des losanges pour les décisions et des flèches pour le sens du parcours.

**Rappel du TP café.** Vérifiez l’eau, le café, le filtre, la cafetière et l’électricité. Avec toutes les ressources, partez de `d=0`. Après chaque ajout d’eau et de café, augmentez `d`. Allumez à `d=n`.

**Autoévaluation.** Déroulez l’algorithme pour deux tasses puis pour un filtre manquant. Repérez dans chaque cas la branche qui mène à la fin.

## Questions flash

1. Que fixer avant d’écrire le script d’échecs de connexion ?
2. Pour deux tasses, quelles valeurs le compteur prend-il ?

??? success "Réponses commentées"
    1. La source du journal, le nombre de résultats par défaut et le traitement des arguments invalides.
    2. 0, 1, puis 2. Le test réussit alors et l’allumage se fait une seule fois.

- [Cours](../../modules/11-initiation-scripting-bash/module-01-analyse.md)
- [TP et corrections](../../tp/11-initiation-scripting-bash/module-01/index.md)
