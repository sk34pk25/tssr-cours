# Énoncé — TP1 — Flux de sorties vers Internet

Avant de démarrer, récupérer « Règles de pare-feu.xlsx » et choisir une plage dans « List-IP-Stagiaires.xlsx », déposé dans Teams. Durée estimée de l’énoncé : 2 h. Le document est titré TP1.

Objectifs de l’énoncé : définir des règles de flux, séparer les réseaux internes et contrôler les flux vers Internet. Si possible, travailler en binômes, analyser le schéma et reporter les règles dans le fichier Excel fourni par la formatrice ou le formateur.

La page 2 de l’énoncé n’a pas de texte hors en-tête. Les pages du PDF qui ne portent que l’en-tête de formation sont des captures d’écran. Aucun texte n’y est extractible : elles ne sont pas recopiées, et aucun logo n’est repris.

Dans le fichier d’attribution, s’attribuer une colonne. À partir de la plage « Lan Global /24 », calculer :

| Élément | Lan SRV /26 | Lan Client /25 | Lan DMZ /26 |
|---|---|---|---|
| Plage disponible | à calculer | à calculer | à calculer |
| IP du routeur | avant-dernière de sa plage | avant-dernière de sa plage | avant-dernière de sa plage |
| SRV-CD | 21e adresse disponible |  |  |
| SRV-MBR | 23e adresse disponible |  |  |
| SRV-WEB |  |  | 8e adresse disponible |
| CLT-WIN |  | 10e adresse disponible |  |
| CLT-DEB |  | 12e adresse disponible |  |

Mettre à jour le schéma. Le fichier « SchémaRéseauTP1.drawio » est fourni pour être modifié.

Ensuite : identifier les segments et leurs besoins ; n’ouvrir que les ports strictement nécessaires et bloquer le trafic non autorisé ; justifier chaque règle ; remplir le classeur. Les colonnes vertes sont les actions « permit », les colonnes rouges les actions « deny ».

L’énoncé indique qu’une solution existe sous forme de PDF commenté.

[Retour](index.md) · [Cours](../../../modules/17-reseau-et-securite/module-01-flux-de-sorties-vers-internet.md)
