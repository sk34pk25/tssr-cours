# Fiche de révision — Module 06 — Plug-ins et inventaire

Vérifier la remontée d’un inventaire et importer des données avec un modèle DataInjection contrôlé.

## Repères du laboratoire

Préparer un serveur GLPI fonctionnel et les versions du plug-in et de l’agent prévues par le laboratoire. Garder les fichiers CSV de référence disponibles pour vérifier les colonnes.

## Contrôles à savoir réaliser

| Contrôle | Preuve à relever |
| --- | --- |
| Collecte | Contrôler la destination de l’agent, l’entité d’arrivée et l’objet découvert ou mis à jour. |
| Correspondance CSV | Comparer l’en-tête fourni aux champs du modèle. Distinguer la donnée importée et la clé qui sert au rapprochement. |
| Rapport | Lire les créations, mises à jour et rejets, puis vérifier les objets concernés dans GLPI et l’absence de doublon. |

## Retenir puis vérifier

**Contrôler le rapprochement avant l’import. Un rapport et la consultation des objets sont deux preuves complémentaires.**

**1. Pourquoi tester l’import sur un échantillon ?**

??? success "Réponse expliquée"
    Il permet de vérifier les champs et la clé de rapprochement avant d’appliquer la correspondance à toutes les lignes.

**2. Que vérifier si la collecte crée un doublon ?**

??? success "Réponse expliquée"
    Comparer les identifiants transmis par l’agent et les critères d’import ou de liaison. Vérifier l’entité attendue.

**3. Quels résultats distinguer après l’import ?**

??? success "Réponse expliquée"
    Les objets créés, les mises à jour et les lignes rejetées. Vérifier ensuite les objets réellement présents.

## Pour pratiquer

- [Cours complet](../../modules/07-administration-glpi/module-06-plug-ins-et-inventaire.md)
- [Travaux pratiques](../../tp/glpi/module-06/index.md)
- [Mémo GLPI et SQL](../../memo/glpi-sql.md)
