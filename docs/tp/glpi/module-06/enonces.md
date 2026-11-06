# TP 06 — Énoncé — Plug-ins et inventaire

## Préparer l’atelier

Préparer un serveur GLPI fonctionnel et les versions du plug-in et de l’agent prévues par le laboratoire. Garder les fichiers CSV de référence disponibles pour vérifier les colonnes.

Réaliser les consignes avant de consulter la correction. Conserver une preuve pour chaque résultat, puis comparer avec les critères de validation du module.

## Consignes complètes


### Plugins

### TP du Module 6 – Présentation des plugins – Inventaire avec FusionInventory

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 6 et d’avoir réalisé les TP proposés.

### Objectifs

- Installer le plugin FusionInventory et l’agent.

### Prérequis

- Avoir un serveur GLPI fonctionnel.

Contexte :

- La société Olympus vous demande d’installer le plugin FusionInventory et l’agent sur l’application GLPI au sein de son domaine.

### Adressage IP des VM : 192.168.1.0/24 + DHCP salle

Le réseau VMNet18 relie `srv-CD1` (`192.168.1.1`), `srv-glpi` (`192.168.1.2`) et le LAN de pfSense (`192.168.1.254`). Le WAN de pfSense reçoit son adresse du réseau de salle par DHCP.

### Principales tâches à réaliser

Installation du Plugins FusionInventory.

- Récupérez depuis le serveur Debian, le fichier fusioninventory-9.5.0+1.0.tar.bz2.

- Extrayez l’archive fusioninventory-9.5.0+1.0.tar.bz2 dans le répertoire /var/www/glpi/plugins.

- Changez l’utilisateur propriétaire pour www-data sur ce répertoire et tout son contenu.

- Installez et activez le plugin dans l’interface GLPI.

- Installez l’agent FusionInventory sur votre contrôleur de domaine Olympus.gr.

### Bonus

- Activez le marketplace puis installez le plugin « Data injection ».

- Un fichier avec seulement les en-têtes et un autre rempli est disponible auprès du formateur.


## Fichier DataInjection réellement fourni

Les fichiers sont séparés par `;`. Les accents sont lisibles en Windows-1252. Le gabarit vide a les mêmes en-têtes ; la ligne remplie est transcrite sans modifier ses noms.

| Colonne CSV | Valeur fournie |
|---|---|
| Nom gabarit | GAB-Lattitude7520 |
| Est un gabarit | 1 |
| Nom | <Latitude 7520 - ####>  |
| Lieu | Olympie > Enceinte du sanctuaire > Salle des trésors > Salle de stock |
| Statut | en stock |
| Type | Portable |
| Fabricant | DELL |
| Modèle | Latitude 7520 |
| Numéro d'inventaire | <Latitude7520 - ####> |
| OS architecture | 64-bit |
| Noyau | Hybride |
| OS | Windows 10 |
| OS Version | 20 H2 |
| OS edition | PRO |
| Processeur nom | i7-1185G7 |
| Processeur Fabricant | Intel |
| Processeur fréquence | 4800 |
| Processeur nb de cœur | 4 |
| Processeur nb de thread | 8 |
| Processeur modèle | 1185 G7 |
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


## Méthode et vérifications

Le TP correspond à FusionInventory 9.5.0+1.0, agent 2.6 et au serveur GLPI du laboratoire. Utiliser les fichiers fournis sans chercher à appliquer cette version à un GLPI récent. Le répertoire extrait doit contenir l’extension, puis l’interface doit montrer son installation et son activation.

La commande `cp` du corrigé est reformée pour contenir un chemin source complet, sans espace entre dossier et nom du fichier. Après l’installation de l’agent sur Olympus.gr, vérifier l’URL du serveur, le déclenchement d’un inventaire et la fiche obtenue. Un deuxième inventaire doit actualiser la fiche sans doublon.

Pour DataInjection : créer le modèle, choisir le CSV vide pour ses en-têtes, associer les champs puis importer le CSV rempli. Vérifier accents, entité/lieu, numérotation, composants, OS et rapport d’import. Les 33 colonnes et la ligne réellement fournie figurent ci-dessous ; les deux fichiers XLSX sont les équivalents disponibles dans les ressources.

## Livrables

| Contrôle | Preuve à relever |
| --- | --- |
| Collecte | Contrôler la destination de l’agent, l’entité d’arrivée et l’objet découvert ou mis à jour. |
| Correspondance CSV | Comparer l’en-tête fourni aux champs du modèle. Distinguer la donnée importée et la clé qui sert au rapprochement. |
| Rapport | Lire les créations, mises à jour et rejets, puis vérifier les objets concernés dans GLPI et l’absence de doublon. |

- [Correction expliquée](corrections.md)
- [Cours du module](../../../modules/07-administration-glpi/module-06-plug-ins-et-inventaire.md)

- [Fiche de révision](../../../revision/glpi/module-06-plug-ins-et-inventaire.md)
