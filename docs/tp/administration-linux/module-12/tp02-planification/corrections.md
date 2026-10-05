# Correction — TP02 — Gestion de la planification des tâches

**Sources originales (A) :** solution M12TP02 et support M12 Drive. **Correction (B) :** synthèse contrôlable.

La solution configure les deux tâches utilisateur dans la crontab de François : la première à 9 h 15 du lundi au vendredi, la seconde à 10 h le samedi. Elle distingue l’archivage en mode mise à jour et la compression hebdomadaire.

La tâche système est ajoutée à `/etc/crontab` pour une exécution toutes les 30 minutes le mardi. La sortie détaillée de `ps faux` est horodatée avec `date` avant écriture dans le journal prévu. Vérifier le résultat après une occurrence plutôt que de déduire la réussite de la seule saisie de la règle.
