# Module 04 — Services complémentaires

## Objectifs

Déployer le pack Office aux postes clients, comprendre les réglages OneDrive, mettre en place des sites SharePoint sécurisés et cadrer l’usage de Teams.

## Se repérer dans le support

| Pages PDF | Notions du support |
| --- | --- |
| 1–5 | Objectifs, Office Online, applications clientes et installation par les utilisateurs |
| 6–12 | Sources locales, Office Deployment Tool, configuration XML et déploiement par GPO |
| 13–15 | Administration des partages, synchronisation et appareils OneDrive |
| 16–19 | SharePoint, sites, bibliothèques, limites et permissions |
| 20–24 | Administration Teams, création des groupes/équipes, réunions et organisation |

## Préparer le déploiement Office

Le support distingue les applications en ligne et les applications clientes. Il illustre l’utilisation de sources locales, d’un fichier de configuration XML et de stratégies de groupe. Les captures détaillent le choix de l’architecture, des applications, du canal et des langues, puis le téléchargement et l’installation.

Lire le résultat attendu dans la correction du TP avant de comparer le déploiement constaté. Les noms de serveurs, partages, chemins et machines sont ceux du laboratoire ; ils ne doivent pas être repris comme des valeurs de production.

## Organiser les données et les droits

Le cours présente les réglages de partage, de synchronisation et d’accès des appareils dans OneDrive. Il attire l’attention sur la bande passante de la première synchronisation et sur les usages hors connexion.

Pour SharePoint, distinguer site, bibliothèque et permissions. Les documents insistent sur la simplicité des droits, la segmentation et la maîtrise de la création de sites. Le second TP et sa correction illustrent des groupes et niveaux d’autorisation ainsi que les tests à effectuer.

## Cadrer Teams

Les pages Teams relient la création de groupes et d’équipes à la maîtrise de l’environnement. Elles présentent les membres, canaux, niveaux de confidentialité, stratégies de réunion et paramètres de l’organisation. Les chiffres et limites affichés dans les supports sont historiques ; ils ne constituent pas une promesse de service actuelle.

## Illustration IA / externe au cours — progression

```mermaid
flowchart LR
  A[Configurer le déploiement Office] --> B[Vérifier les postes]
  C[Définir sites et bibliothèques] --> D[Attribuer et tester les droits]
  D --> E[Cadrer équipes et réunions]
```

## Pour réviser

Retrouver le rôle du XML et de l’outil de déploiement, distinguer OneDrive et une bibliothèque SharePoint dans le support, et expliquer comment vérifier les accès réellement accordés.

## Travaux pratiques du module

[Ateliers, énoncés et corrections](../../tp/14-messagerie-cloud/module-04/index.md).

## Kahoot

- [TSSR-Messagerie Cloud-Module-04](../../kahoot/14-messagerie-cloud-module-04.md)

## Provenance

Les documents originaux sont présentés séparément de cette aide IA / externe au cours. Les pages indiquées sont les pages PDF, et non les numéros de diapositives.

- [Module 04 - Support de cours.pdf](https://drive.google.com/file/d/1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_/view?usp=drivesdk) · SHA-256 `30380f017a48637a05691119c307fba975923128b4d8409b0cca1a59ae501a61`
- [M4 - Solution du TP2 - Administration SharePoint et OneDrive.pdf](https://drive.google.com/file/d/1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9/view?usp=drivesdk) · SHA-256 `5cb1e4dbf1ad8029178a7c64f4759fa26c767ff28640e7bcb3b566449df93e60`
- [M4 - Solution du TP 1 - Déploiement Office 365.pdf](https://drive.google.com/file/d/11qy2tWr5VU5QdKrj8Ztldb3XcGN1NgnS/view?usp=drivesdk) · SHA-256 `3ec56eac14b68e7b92df4c2456a282250d62b1110a01d808fe17d53df3fd389a`
- [M4 - Enoncé du TP 1 - Déploiement Office 365.pdf](https://drive.google.com/file/d/1Nh_4blT_klGJjhXhSJE754bpm5t90Ebx/view?usp=drivesdk) · SHA-256 `a61f9b4317b5488dcc74a2879ba199a2b7e264f58ddb4d83911044ad39904e1e`
- [M4 - Enoncé du TP2 - Administration SharePoint et OneDrive.pdf](https://drive.google.com/file/d/1A9Y6kqGcVxuZTFK7bD0UGUG9HPCu72g9/view?usp=drivesdk) · SHA-256 `f04b735edcb54e16ebc4a80f87f5a811a7ba60e00ea28306976d39ec78ea5cb5`
