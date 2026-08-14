# Portail de formation TSSR

Portail personnel de formation construit avec MkDocs et Material for MkDocs. Il réunit 273 pages de cours, parcours daté, travaux pratiques, exercices, révisions, mémos, commandes, procédures de dépannage, glossaire et ressources.

## Installation

Python 3.11 ou une version plus récente est recommandé.

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

Sous Windows, remplacer `.venv/bin/` par `.venv\\Scripts\\`.

## Lancement local

```bash
.venv/bin/mkdocs serve
```

Ouvrir ensuite `http://127.0.0.1:8000/`.

## Génération et validation stricte

```bash
.venv/bin/mkdocs build --strict
```

Le site statique est généré dans `site/`.

## Expérience proposée

- accueil éditorial avec accès rapides, métriques et aperçu du parcours officiel en neuf étapes datées ;
- navigation hiérarchique, fil d’Ariane, sommaire local, recherche plein texte et retour en haut ;
- thèmes clair et sombre avec préférence mémorisée ;
- index de parcours transformés en cartes tout en conservant leur sémantique de tableau ;
- blocs de code sombres avec syntaxe, libellé de langage et copie ;
- admonitions, détails repliables, onglets, listes de contrôle et étapes guidées ;
- diagrammes Mermaid autonomes, sans chargement CDN à l’exécution ;
- galerie GLightbox pour les captures des TP, avec zoom et navigation tactile ;
- mise en page adaptée aux écrans de 375 px jusqu’aux grands écrans, plus une feuille d’impression dédiée ;
- page 404 personnalisée.

## Système de design

Les styles sont séparés par responsabilité :

- `docs/assets/stylesheets/tokens.css` : palettes, surfaces, espacements, rayons, ombres et variables Material ;
- `docs/assets/stylesheets/base.css` : typographie, largeur de lecture, liens et focus clavier ;
- `docs/assets/stylesheets/navigation.css` : en-tête, recherche, navigation latérale, sommaire et pied de page ;
- `docs/assets/stylesheets/components.css` : cartes, code, tableaux, admonitions, TP, révisions, dépannage et glossaire ;
- `docs/assets/stylesheets/chronology.css` : frise officielle, métadonnées datées et navigation précédent/suivant ;
- `docs/assets/stylesheets/visuals.css` : objectifs visuels, schémas OSI/IPv4/LVM et composants pédagogiques responsive ;
- `docs/assets/stylesheets/homepage.css` : héros, accès rapides et cartes de parcours ;
- `docs/assets/stylesheets/responsive.css` : adaptations tablette, mobile et réduction des animations ;
- `docs/assets/stylesheets/print.css` : rendu imprimable.

La couche JavaScript personnalisée reste progressive et minimale : `docs/assets/javascripts/extra.js` ajoute uniquement le contexte de page, les libellés des blocs de code et les étapes guidées. Mermaid 11.16.1 est fourni localement avec sa licence MIT afin que les diagrammes restent disponibles hors ligne.

## Organisation éditoriale

- `docs/parcours` : chronologie officielle en neuf étapes, du 8 juin au 7 août 2026 ;
- `docs/modules` : cours techniques, avec ordre interne des modules préservé ;
- `docs/tutoriels` : procédures longues et reproductibles ;
- `docs/tp` : énoncés, corrections et ressources séparés ;
- `docs/exercices` : quiz et cas pratiques ;
- `docs/revision` : fiches rapides par module ;
- `docs/memo` : références courtes ;
- `docs/commandes` : commandes commentées par environnement ;
- `docs/troubleshooting` : diagnostic orienté symptômes ;
- `docs/glossaire` : termes de la formation ;
- `docs/ressources` : inventaire, provenance et références officielles.

Les ressources exécutables anciennes ne sont pas servies par le site. Les activités Packet Tracer et les données de TP utiles sont conservées sous `docs/assets/resources`.

## Fichiers de personnalisation

- `mkdocs.yml` centralise la navigation, les fonctionnalités Material, les deux palettes et les plugins ;
- `overrides/main.html` charge le moteur Mermaid local après le thème puis rend les diagrammes à chaque navigation instantanée ;
- `overrides/404.html` fournit la page d’erreur personnalisée ;
- `VALIDATION.md` consigne l’inventaire initial et les contrôles éditoriaux, techniques et visuels ;
- `VISUALS.md` documente l’audit des 59 cours, les décisions d’illustration et la provenance des captures.
