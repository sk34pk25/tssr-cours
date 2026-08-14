# Rapport de validation

## Inventaire

- 292 fichiers analysés, soit 438 961 052 octets.
- 174 PDF, 8 DOCX, 8 XLSX, 4 CSV, 60 PNG, 12 TXT, 11 scripts, 7 PKA et 8 autres binaires/archives.
- 275 éléments textuels ou visuels exploitables directement.
- 17 éléments sans contenu directement extractible, dont 7 activités Packet Tracer conservées comme ressources et 8 installateurs/paquets non publiés.
- 4 paires de doublons exacts identifiées et consolidées.

## Modules trouvés

- Bases des réseaux : 6 modules.
- Systèmes clients Microsoft : 13 modules et 1 module additionnel.
- Microsoft 365 — Outils collaboratifs : 5 modules.
- Utilisation d’une distribution GNU/Linux : modules 3 à 8 uniquement, conformément aux sources présentes.
- Administration Debian GNU/Linux : 12 modules.
- Sensibilisation ITIL et gestion de parc : 9 modules.
- Administration GLPI : 6 modules.
- MSP Systèmes clients : 1 mise en situation.

## Chronologie officielle et réaffectations documentées

- Le parcours global suit désormais les neuf périodes datées communiquées : Microsoft 365, Réseaux, Windows 1/2, Windows 2/2, Utilisation Linux, Administration Linux 1/2, Administration Linux 2/2, MSP, puis ITIL/Gestion de parc 1/2.
- Les dates, formateurs et modalités sont visibles sur la vue d’ensemble, les neuf pages d’étape, l’accueil et les index de cours.
- Les séquences en deux semaines restent deux étapes distinctes ; l’ordre interne des modules n’est pas modifié.
- Administration GLPI reste une séquence technique complémentaire hors des neuf périodes datées fournies ; elle est reliée à l’étape ITIL/Gestion de parc sans inventer de dixième période.

- Les cinq DOCX « Synthèse » rangés sous Réseaux concernent les modules Windows 1 à 5 : ils sont intégrés à ces modules.
- Le module additionnel Workstation présent sous Linux est un doublon exact du support Windows : une seule page Windows est conservée.

## Sécurité et obsolescence

- Un script contenait un secret en clair : il n’est pas publié ; une variante interactive sans secret le remplace.
- Les tableaux contenant des mots de passe d’exercice sont publiés sous forme expurgée.
- L’ancienne correction MSP et ses scripts fragiles sont remplacés par la solution consolidée.
- Les différences Windows 10, Debian, Microsoft 365, GLPI et FusionInventory sont signalées et reliées aux sources officielles.

## Contrôles

- [x] Navigation : 273 pages Markdown présentes et 273 cibles déclarées.
- [x] Liens internes : 832 liens locaux résolus.
- [x] Markdown : chaque page possède un titre H1 et la structure est analysable.
- [x] Blocs de code : 260 délimiteurs équilibrés.
- [x] Diagrammes : 40 blocs Mermaid rendus avec Mermaid 11.16.1 fourni localement ; les 40 SVG ont été vérifiés dans le navigateur, sans erreur et sans CDN à l’exécution.
- [x] MkDocs strict : génération réussie avec MkDocs 1.6.1 et Material 9.7.7.
- [x] Recherche de secrets : aucune forme sensible ni valeur issue du batch historique exclu.
- [x] Recherche de marqueurs involontaires : aucun TODO, TBD, texte factice ou trace conversationnelle.
- [x] Couverture : 292 sources sur 292 recensées et affectées à une page, une ressource ou une décision explicite.
- [x] Rendu : accueil, chronologie, étape datée, cours OSI/IPv4/LVM/MSP/ITIL/GLPI, captures sources, dépannage, glossaire et page 404 contrôlés dans un navigateur réel.
- [x] Thèmes : accueil, chronologie, objectifs de cours, schémas HTML/CSS et Mermaid contrôlés dans les palettes claire et sombre.
- [x] Responsive : aucun débordement à 375, 768 ou 1 440 px ; cartes, code, images et diagrammes restent lisibles.
- [x] Recherche intégrée : la requête « PowerShell » retourne 40 documents et affiche les pages attendues.
- [x] Galerie : les 34 images du corrigé GLPI et les 5 nouveaux visuels issus des supports sont agrandissables ; ouverture et fermeture vérifiées.
- [x] Contrastes : textes, liens et boutons principaux mesurés entre 5,26:1 et 16,27:1 selon la combinaison testée.
- [x] Accessibilité : lien d’évitement, focus visible, intitulés des boutons de thème, structure des titres et préférence de réduction des animations présents.

## Build MkDocs

Commande exécutée depuis la racine du projet : `.venv/bin/mkdocs build --strict`.

Résultat : **succès**, sans avertissement de contenu, de lien ou de navigation. Material affiche uniquement sa notice générale relative à la future branche MkDocs 2 ; le projet borne volontairement MkDocs à la branche 1.x dans `requirements.txt`.

Versions validées : MkDocs 1.6.1, Material for MkDocs 9.7.7 et MkDocs GLightbox 0.5.2.

## Refonte visuelle premium

- Palette claire : fond `#f5f7fb`, surfaces blanches légèrement teintées, texte `#172033`, indigo `#4355d7` et accent cyan `#0e7490`.
- Palette sombre : fond `#0e1420`, surfaces `#151c29` à `#1a2332`, texte `#edf1f8`, indigo `#8997ff` et accent cyan `#67d5ec`.
- Typographies : Inter pour l’interface et la lecture, JetBrains Mono pour le code.
- Navigation : en-tête compact translucide, fil d’Ariane, sections latérales, sommaire actif, recherche et retour en haut.
- Composants : héros, cartes d’accès rapide, cartes de parcours, index de modules, blocs de code, admonitions, détails, tableaux, listes de contrôle, étapes numérotées, galerie, diagrammes et 404.
- Repli sûr : le contenu et les liens restent utilisables sans la couche JavaScript personnalisée ; celle-ci n’altère pas le contenu source.

## Enrichissement visuel pédagogique

- 59 pages de cours auditées ; toutes présentent leurs objectifs sous forme de repères numérotés.
- 36 pages disposent en plus d’un schéma ou d’une capture dédiée ; les 23 autres ont été conservées sans diagramme artificiel après revue de leur valeur pédagogique.
- Les priorités demandées sont couvertes : OSI, PDU, encapsulation, MAC/IP/ports, switch/routeur, IPv4, sous-réseautage, VLSM, routage, ARP, IPv6, diagnostic, Microsoft 365, Windows, Linux, LVM, systemd, MSP, ITIL et GLPI.
- Cinq images directement extraites des supports ont été retenues après contrôle de confidentialité ; les autres notions ont été recréées en HTML/CSS ou Mermaid.
- La traçabilité détaillée, l’audit par séquence et la provenance des captures sont consignés dans `VISUALS.md`.

## Fichiers non publiés tels quels

Les installateurs `.exe`, le paquet `.deb`, l’archive FusionInventory `.bz2`, les données contenant des mots de passe et les anciennes corrections techniquement fragiles restent recensés dans `docs/ressources/inventaire-sources.md`. Leur contenu utile est intégré, remplacé ou expurgé selon le cas.
