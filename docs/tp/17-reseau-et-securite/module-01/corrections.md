# Correction — TP1 — Flux de sorties vers Internet

La correction est titrée TD1, durée estimée 1 h. L’objectif y parle d’une infrastructure sécurisée et d’un travail en binômes. Le prérequis cite les mêmes deux fichiers.

Exemple chiffré de la correction, à partir de la plage Lan « Global /24 » `172.20.2.0/24` :

| Élément | Lan SRV /26 | Lan Client /25 | Lan DMZ /26 |
|---|---|---|---|
| Plage | 172.20.2.128 – 172.20.2.191 /26 | 172.20.2.0 – 172.20.2.127 /25 | 172.20.2.192 – 172.20.2.255 /26 |
| Avant-dernière, notée pour le routeur | 190 | 126 | 254 |
| SRV-CD, « 21ième » | 150 |  |  |
| SRV-MBR, « 23ième » | 152 |  |  |
| SRV-WEB, le texte dit « 7ième » |  |  | 200 |
| CLT-WIN, le texte dit « 9ième » |  | 10 |  |
| CLT-DEB, le texte dit « 11ième » |  | 12 |  |

Les rangs de l’énoncé (8e, 10e, 12e) et ceux de la correction (7e, 9e, 11e) diffèrent. Les deux textes sont conservés. Aucune autre valeur n’est calculée ici.

La correction répète ensuite les mêmes consignes : modifier le drawio, identifier les segments, n’ouvrir que les ports nécessaires, justifier, remplir le classeur. Elle ne contient pas de matrice remplie. Les pages du PDF qui ne portent que l’en-tête de formation sont des captures d’écran. Aucun texte n’y est extractible : elles ne sont pas recopiées, et aucun logo n’est repris.

La dernière page répète que la solution est un PDF commenté. Il n’y a pas d’autre corrigé écrit.

[Retour](index.md) · [Cours](../../../modules/17-reseau-et-securite/module-01-flux-de-sorties-vers-internet.md)
