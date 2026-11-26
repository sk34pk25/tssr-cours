# TP — Module 06 — Plug-ins et inventaire

## Objectif du laboratoire

Vérifier la remontée d’un inventaire et importer des données avec un modèle DataInjection contrôlé.

## Préparer et réaliser l’atelier

Préparer un serveur GLPI fonctionnel et les versions du plug-in et de l’agent prévues par le laboratoire. Garder les fichiers CSV de référence disponibles pour vérifier les colonnes.

1. [Lire l’énoncé complet](enonces.md).
2. Réaliser les étapes dans le laboratoire et relever les preuves.
3. [Comparer avec la correction](corrections.md), puis reprendre la [fiche de révision](../../../revision/glpi/module-06-plug-ins-et-inventaire.md).

| Contrôle | Preuve à relever |
| --- | --- |
| Collecte | Contrôler la destination de l’agent, l’entité d’arrivée et l’objet découvert ou mis à jour. |
| Correspondance CSV | Comparer l’en-tête fourni aux champs du modèle. Distinguer la donnée importée et la clé qui sert au rapprochement. |
| Rapport | Lire les créations, mises à jour et rejets, puis vérifier les objets concernés dans GLPI et l’absence de doublon. |

## Liens

- [Cours du module](../../../modules/07-administration-glpi/module-06-plug-ins-et-inventaire.md)
- [Tous les ateliers GLPI](../index.md)
- [Mémo GLPI et SQL](../../../memo/glpi-sql.md)

## Ressources du scénario

Les captures de correction sont placées à leur étape dans la [correction](corrections.md).

- [modèle excel data injection gabarit vide.csv](../../../assets/resources/donnees/glpi/modele-excel-data-injection-gabarit-vide-csv.csv)
- [modèle excel data injection gabarit.csv](../../../assets/resources/donnees/glpi/modele-excel-data-injection-gabarit-csv.csv)

## Modèle DataInjection

Le classeur n’est pas publié. Le CSV du même modèle reste disponible ci-dessus. Le fichier vide reprend uniquement les en-têtes. La ligne d’exemple du classeur rempli est :

| Champ | Exemple |
| --- | --- |
| Nom gabarit | GAB-Lattitude7520 |
| Est un gabarit | 1 |
| Nom | `<Latitude 7520 - ####>` |
| Lieu | Olympie > Enceinte du sanctuaire > Salle des trésors > Salle de stock |
| Statut | en stock |
| Type | Portable |
| Fabricant | DELL |
| Modèle | Latitude 7520 |
| Numéro d'inventaire | `<Latitude7520 - ####>` |
| OS architecture | 64-bit |
| Noyau | Hybride |
| OS | Windows 10 |
| OS Version | 20H2 |
| OS edition | PRO |
| Processeur nom | i7-1185G7 |
| Processeur Fabricant | Intel |
| Processeur fréquence | 4800 |
| Processeur nb de cœur | 4 |
| Processeur nb de thread | 8 |
| Processeur modèle | 1185G7 |
| mémoire nom | DELL intégrée |
| mémoire Fabricant | DELL |
| mémoire Taille | 16000 |
| mémoire Fréquence | 2666 |
| mémoire Type | DDR4 |
| HDD nom | SSD-PCIe-M2 |
| HDD fabricant | Intel |
| HDD capacité | 512000 |
| HDD Interface | PCIe |
| Carte réseau | RJ45-Killer-E3000 |
| Port réseau nom | Port- |
| Port réseau num | 1 |
| Port réseau type | Paire torsadée (RJ-45) |
