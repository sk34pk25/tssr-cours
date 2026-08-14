# Registre d’audit et de traçabilité des visuels

## Méthode appliquée

Les **59 pages de cours** ont été relues sous l’angle pédagogique : structure, flux, comparaison, localisation d’une interface, séquence de diagnostic ou absence de gain visuel réel.

- Toutes les pages affichent désormais leurs objectifs sous forme de quatre repères visuels numérotés, générés à partir du contenu exact de la page.
- 36 pages reçoivent en plus un ou plusieurs schémas dédiés, une capture source ou une représentation structurée.
- Les 23 pages restantes conservent le traitement transversal des objectifs : leur contenu est principalement textuel, procédural ou dépend d’une interface variable, et un diagramme supplémentaire aurait seulement décoré la page.
- Les diagrammes utilisent HTML/CSS ou Mermaid selon la nature de l’information ; aucune illustration générique n’a été ajoutée.
- Les captures retenues sont issues des supports fournis, ne montrent aucun secret réel et sont accompagnées d’un texte alternatif, d’une légende et d’une provenance.

## Couverture des notions prioritaires

| Notion | Page de cours | Visuel ajouté | Origine |
|---|---|---|---|
| Modèle OSI | Réseaux 01 | Pile complète des 7 couches, rôles, exemples et PDU | Recréation HTML/CSS d’après le support |
| Encapsulation | Réseaux 01 | Données → segment → paquet → trame → bits | Recréation HTML/CSS d’après le support |
| MAC, IP et ports | Réseaux 01 | Quatre cartes de repérage par couche | Recréation HTML/CSS |
| Commutateur et routeur | Réseaux 01 | Chemin PC → switch → routeur → switch → PC | Mermaid, synthèse du cours |
| Binaire et hexadécimal | Réseaux 02 | Poids d’un octet et équivalences de bases | Recréation HTML/CSS |
| IPv4 et CIDR | Réseaux 03 | Quatre octets et barre réseau/hôte d’un /24 | Recréation HTML/CSS |
| Sous-réseautage | Réseaux 03 | Découpage d’un /24 en /27 avec pas de 32 | Recréation HTML/CSS |
| VLSM | Réseaux 03 | Allocation /25, /26 et /27 du plus grand besoin au plus petit | Recréation HTML/CSS |
| ARP | Réseaux 04 | Séquence requête diffusée, réponse unicast et trame | Mermaid, synthèse du cours |
| Routage | Réseaux 04 | Décision local/distant et liaison de deux réseaux | Mermaid, synthèse du cours |
| Diagnostic réseau | Réseaux 05 et dépannage | Progression interface → IP → passerelle → Internet → DNS → service | Mermaid et cartes d’interprétation |
| IPv6 | Réseaux 06 | Huit quartets, compression, portées et Neighbor Discovery | HTML/CSS et Mermaid |
| Microsoft 365 | M365 01 et 05 | Architecture identité/licence/services et emplacement réel des fichiers Teams | Mermaid, synthèse des supports |
| Outlook | M365 04 | Trajet d’un message et capture Outlook web | Mermaid + capture source |
| Windows | Windows 02, 04, 06, 07, 08, 12 | Installation, stockage, ACL, réseau/pare-feu, partage et image | HTML/CSS, Mermaid et captures sources |
| Réseaux VMware | Windows additionnel | Comparaison Bridged, NAT, Host-only et LAN segment | Mermaid, synthèse du support |
| Arborescence Linux | Linux utilisation 04 | Racine, `/etc`, `/home`, `/var`, `/tmp` et chemins | Mermaid |
| Liens Linux | Linux utilisation 05 | Nom, inode, lien physique et lien symbolique | Mermaid |
| systemd | Administration Linux 03 | Firmware → GRUB → noyau → systemd → unités et boucle de diagnostic | Mermaid et cartes |
| Stockage Linux | Administration Linux 07 et 09 | Périphérique → partition → système de fichiers → montage | Mermaid |
| LVM | Administration Linux 08 | PV → VG → LV, puis ordre d’extension | HTML/CSS et Mermaid, pages 5 et 9–11 du support |
| Utilisateurs et permissions | Administration Linux 10 et 11 | Fichiers d’identité, groupes et décomposition `rwx`/octal | Mermaid et HTML/CSS |
| MSP | MSP 01 | Topologie du laboratoire 172.16.0.128/26 et progression de la mission | Mermaid et HTML/CSS, énoncé/correction |
| Cycle ITIL | ITIL 01 | Stratégie → conception → transition → exploitation → amélioration | Mermaid, structure v3 du support |
| Exploitation ITIL | ITIL 06 | Événement/incident/problème/demande et escalade N1–N3 | Cartes et Mermaid |
| Ticket GLPI | ITIL 09 | Nouveau → en cours → résolu → clos, avec retour si solution refusée | Mermaid + capture source |
| Architecture GLPI | GLPI 01 | Navigateur → Apache → PHP → MariaDB | Mermaid |
| Parc et inventaire | GLPI 03 et 06 | Actif → CI → relations → tickets et remontée GLPI Agent | Mermaid |
| Règles métier GLPI | GLPI 04 | Saisie → gabarit → critères/actions → ticket | Mermaid + schéma source |

## Audit des 59 pages de cours

| Séquence | Pages avec visuel dédié | Pages avec traitement transversal uniquement | Total |
|---|---|---|---:|
| Bases des réseaux | Modules 01 à 06 | — | 6 |
| Systèmes clients Microsoft | 02, 04, 06, 07, 08, 12, additionnel Workstation | 01, 03, 05, 09, 10, 11, 13 | 14 |
| Microsoft 365 | 01, 04, 05 | 02, 03 | 5 |
| Utilisation GNU/Linux | 03, 04, 05 | 06, 07, 08 | 6 |
| Administration Debian GNU/Linux | 03, 06, 07, 08, 09, 10, 11, 12 | 01, 02, 04, 05 | 12 |
| Sensibilisation ITIL et gestion de parc | 01, 06, 09 | 02, 03, 04, 05, 07, 08 | 9 |
| Administration GLPI | 01, 03, 04, 05, 06 | 02 | 6 |
| MSP Systèmes clients | 01 | — | 1 |
| **Total** | **36** | **23** | **59** |

Le traitement transversal n’est pas un état « sans visuel » : les objectifs de ces pages sont présentés en grille numérotée, responsive et compatible avec les thèmes clair et sombre. La colonne signifie seulement qu’aucun second diagramme n’a été jugé plus informatif que le texte ou la procédure existante.

## Captures et schémas extraits des supports

| Fichier publié | Support et emplacement | Utilisation | Contrôle de confidentialité |
|---|---|---|---|
| `assets/images/microsoft-365/outlook-web-interface.jpg` | Microsoft 365, module 04, page 26 | Repérage de l’interface Outlook web | Vue générique, aucun secret ni boîte personnelle |
| `assets/images/systemes-clients-microsoft-2/configuration-ipv4-windows.jpg` | Windows, module 07, page 3 | Champs IPv4, masque, passerelle et DNS | Valeurs de laboratoire uniquement |
| `assets/images/systemes-clients-microsoft-2/pare-feu-windows-avance.jpg` | Windows, module 07, page 5 | Console de pare-feu avancé | Aucun compte ni secret visible |
| `assets/images/itil-gestion-parc/creation-ticket-glpi.jpg` | Administration GLPI, module 04, page 3 | Formulaire anonyme de ticket | Champs vides, aucune identité |
| `assets/images/itil-gestion-parc/regles-ticket-glpi.jpg` | Administration GLPI, module 04, page 7 | Ordre gabarit/règles/base | Schéma conceptuel sans donnée personnelle |

Les autres visuels ont été recréés pour éviter d’insérer des pages de diapositives entières, améliorer l’accessibilité et conserver une lecture nette sur mobile.

## Validation du rendu

- 40 blocs Mermaid répartis sur 38 pages ; chaque bloc produit un SVG avec Mermaid 11.16.1 local.
- 5 nouveaux visuels sources servis localement, avec texte alternatif, légende et agrandissement GLightbox.
- Les composants HTML/CSS utilisent les variables sémantiques du thème et restent lisibles en clair comme en sombre.
- Les diagrammes larges restent dans leur conteneur défilable sur petit écran ; aucune largeur globale de page n’est créée.
- Les pages prioritaires ont été contrôlées à 375 px et en vue bureau dans le navigateur intégré.
