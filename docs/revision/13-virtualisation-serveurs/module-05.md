# Révision — Module 05 : infrastructure vSphere

## Composantes à distinguer

- vSphere : solution de virtualisation.
- ESXi / ESX : hyperviseurs cités par le support historique.
- vCenter : regroupement et gestion de plusieurs hyperviseurs dans le schéma.
- Client vSphere / vSphere Web Client : interfaces d’administration du support.

Le support décrit vSphere 6.x ; l’atelier utilise ESXi 7 sous Workstation 16.
La concordance des versions est un point explicite du cours.

## Fonctions à retenir

| Fonction | Repère de révision |
| --- | --- |
| vMotion | Déplacement d’une VM entre hôtes. |
| Storage vMotion | Déplacement du stockage entre banques de données. |
| DRS / Storage DRS | Déplacements automatisés selon les ressources. |
| DPM | Veille des hyperviseurs selon la charge du cluster. |
| HA | Redémarrage des VM ciblées sur un autre hôte après défaillance. |
| FT | Protection des VM ciblées présentée comme sans interruption par le support ; ne pas généraliser au-delà de ce contexte. |

Les migrations sont annoncées au module 8, sans procédure ajoutée à cette fiche.
Le comparatif des licences est daté du 16 août 2021 : il ne décrit pas les offres
actuelles. Les cellules incomplètes du dernier tableau ne sont pas reconstituées.

## Atelier : valeurs du texte

Deux hyperviseurs, chacun avec deux CPU d’un cœur, une carte bridgée et deux disques
de 40 et 200 Go. Le disque de 40 Go reçoit ESXi ; celui de 200 Go devient la banque
VMFS. La VM Windows Server 2019 reçoit un CPU d’un cœur, 2 Go de RAM et 32 Go de disque.

**NEEDS_REVIEW :** les hyperviseurs ont 6 Go de RAM dans le texte, 8 Go dans les
schémas. Les avertissements de certificat de la solution restent des observations
historiques à examiner dans leur contexte. Les ressources binaires ne sont pas jointes.

[Cours](../../modules/13-virtualisation-serveurs/module-05.md) ·
[Atelier et correction](../../tp/13-virtualisation-serveurs/module-05/index.md)

Provenance A : trois PDF M05 du Drive TSSR en lecture seule ; B : synthèse fidèle.
Aucune question, ressource externe ou association Kahoot n’est ajoutée.
