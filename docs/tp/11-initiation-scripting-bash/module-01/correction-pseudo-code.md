# Correction — TP 01 — Pseudo-code

L’énoncé demande de traduire la préparation du café en étapes. Comparez le test de chaque ressource et la boucle au trajet de l’[organigramme](correction-organigramme.md).

```text
Vérifier la présence de l’eau, du café, du filtre, de la cafetière et de l’électricité
Si une ressource manque, terminer
d = 0
Tant que d n’atteint pas n
  ajouter une dose d’eau et de café
  incrémenter d
Fin tant que
Allumer la cafetière
```

La vérification attendue consiste à retrouver la condition d’arrêt, l’initialisation de `d`, la répétition jusqu’à `n` et l’allumage final.
