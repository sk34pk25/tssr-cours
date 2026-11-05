# Révision — Module 01 · Présentation et types d’hyperviseurs

Distinguer mutualisation, consolidation et rationalisation, puis situer le logiciel entre le matériel et les invités.


## Choisir un montage

| Situation | Décision | Vérification |
| --- | --- | --- |
| Tester un système depuis son poste | Hyperviseur de type 2 avec une VM isolée ou en NAT selon le test | Le système hôte reste utilisable et la VM reçoit le réseau prévu. |
| Regrouper des serveurs en production | Hyperviseur de type 1, capacité et reprise dimensionnées | La mémoire disponible, les accès réseau, le stockage et la reprise satisfont les besoins des services. |
| Maintenir plusieurs applications anciennes | VM distinctes et ressources mutualisées | Chaque application retrouve son environnement et les dépendances sont documentées. |

La **consolidation** réduit le nombre d’hôtes physiques en regroupant les charges. La **mutualisation** met une capacité à la disposition de plusieurs charges. La **rationalisation** standardise les configurations et les pratiques de gestion. Quatre anciennes machines regroupées sur un même hôte illustrent la consolidation. Un stockage commun illustre la mutualisation. L’usage de modèles et d’un plan de sauvegarde commun illustre la rationalisation.

Pour préparer un PRA, relever les dépendances et tester le redémarrage des VM dans l’ordre attendu. La perte d’un hôte consolidé peut toucher plusieurs services à la fois.


## Question de révision

Pourquoi un seul hôte physique puissant ne garantit-il pas la disponibilité des services ?

??? success "Correction"

    Les VM partagent les ressources et dépendent de l’hôte. Il faut vérifier les conditions de reprise et la capacité d’un hôte de secours.

[Revenir au cours](../../modules/13-virtualisation-serveurs/module-01.md)
