# Fiche de révision — Module 03 — Connaissances des notions de base d’Excel

## Repères essentiels

- Un **classeur** contient des feuilles ; une cellule est repérée par sa colonne et sa ligne, par exemple `A1`.
- Une référence peut être remplacée par un **nom** dans le gestionnaire de noms.
- Les parenthèses rendent un ordre de calcul explicite.
- La poignée de recopie reproduit une formule et peut incrémenter des valeurs.
- Un tableau nommé rend une recherche et une formule plus lisibles.

## Fonctions du module

| Usage | Fonctions à reconnaître |
|---|---|
| Former un code | `MAJUSCULE`, `GAUCHE`, `DROITE`, `CONCAT` ou `&` |
| Construire un numéro basé sur une date | `ANNEE`, `MOIS`, `JOUR`, `SI`, `OU` |
| Retrouver une valeur dans un tableau | `RECHERCHEV` |
| Ne pas afficher une erreur de recherche | `SIERREUR` |
| Compter ou totaliser selon un critère | `NB.SI.ENS`, `SOMME.SI.ENS` |
| Calculer une part des ventes | `SOMME` et division |

## Méthode du TP

1. Identifier les tableaux, leurs noms et la donnée qui sert de clé.
2. Créer et vérifier une formule sur une première ligne.
3. Tester explicitement les cellules vides et les recherches sans résultat.
4. Recopier la formule seulement après contrôle.
5. Construire le tableau croisé dynamique, puis le graphique demandé.
6. Vérifier que les totaux reportés correspondent aux données de détail.

## Points de vigilance

- Une clé de recherche doit pointer vers le bon tableau et la bonne colonne de retour.
- Les mois et jours inférieurs à dix nécessitent un contrôle si le numéro de commande doit garder deux chiffres.
- Ne masquez pas une erreur sans identifier sa cause : `SIERREUR` est utilisé dans le TP pour produire un résultat vide lorsqu’aucune valeur exploitable n’est trouvée.
- Vérifiez le résultat d’une formule avant de l’étirer sur toute la colonne.

## Questions flash

1. Quelle information devez-vous définir avant une `RECHERCHEV` ?
2. Pourquoi une formule de numéro de commande doit-elle traiter les cellules vides ?
3. À quoi servent les tableaux nommés `Clients` et `Ouvrage` dans le TP ?
4. Quel contrôle relie le tableau croisé dynamique au total d’achats de chaque client ?

Pour approfondir : [cours complet](../../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel.md) · [TP](../../tp/microsoft-365/module-03/index.md) · [Kahoot du module](../../kahoot/03-microsoft-365-outils-collaboratifs-03-connaissances-des-notions-de-base-d-excel.md).

## Provenance

- **Sources A :** `Module 03 - Support de cours.pdf`, Drive `1iMM4_v_Oj8W9fCRz_eZZfRFRLbyfCWKk`, SHA-256 `454b907751a8980aa3560a8af585e67e572aff0ba80dc51587332bb9c7873f22` ; `M3 - Enoncé du TP - Utilisation d'Excel.pdf`, Drive `1LBnGQASfwJWAa-v07lZ8Hig74kYlcqCq`, SHA-256 `632e56cdcd27bb7885adb0ef9b0ae09a514512f8718f9d944b39ce1d217bd4f3` ; `M3 - Solution du TP - Utilisation d'Excel.pdf`, Drive `1p8MSdBOHgRnxz8hqdreos-Lzm6ZZSilu`, SHA-256 `ac619d926498a7c21967526161e23ec8bc19a963e1397a174a53cb5bb7d372cb`.
- **Structuration B :** sélection, réorganisation et formulation des points de révision à partir de ces sources seulement.
