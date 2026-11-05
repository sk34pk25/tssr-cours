# Correction — TP 01 — Organigramme

L’organigramme d’origine enchaîne cinq décisions. Toute branche « non » dans ces vérifications mène à la fin.

| Décision | Oui | Non |
| --- | --- | --- |
| Eau disponible ? | Vérifier le café | Fin |
| Café disponible ? | Vérifier le filtre | Fin |
| Filtre disponible ? | Vérifier la cafetière | Fin |
| Cafetière disponible ? | Vérifier l’électricité | Fin |
| Électricité disponible ? | Initialiser la quantité et le compteur | Fin |
| Compteur égal au nombre de tasses ? | Allumer la cafetière, puis fin | Ajouter une dose d’eau et une dose de café, incrémenter et revenir au test |

Suivez les flèches pour deux tasses. La branche « non » de la dernière décision revient au test, alors que les cinq premiers « non » terminent l’algorithme. Comparez le trajet à la [correction en pseudo-code](correction-pseudo-code.md).
