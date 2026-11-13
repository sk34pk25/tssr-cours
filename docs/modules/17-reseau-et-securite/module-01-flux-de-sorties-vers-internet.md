# Module 01 — Étudier les flux de sorties vers Internet

Semaine **1/2**. Énoncé TP1, 2 h. Correction titrée TD1, 1 h.

[Énoncé](../../tp/17-reseau-et-securite/module-01/enonces.md) · [Correction](../../tp/17-reseau-et-securite/module-01/corrections.md) · [Révision](../../revision/17-reseau-et-securite/module-01.md) · [Kahoot préparé](../../kahoot/17-reseau-et-securite-module-01.md)

Support de cours : **Inexistant**. Le dossier ne contient que l’énoncé et la correction.

=== "Cours Original"

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

=== "Cours Optimisé IA"

    Le support est **Inexistant**. Ce module est une matrice de flux, avant toute installation.

    1. Choisir une plage « Lan Global /24 ». Le nom de stagiaire du classeur n’est pas publié.
    2. La découper en client /25, serveurs /26 et DMZ /26. La correction montre l’exemple `172.20.2.0/24`.
    3. Mettre le routeur sur l’avant-dernière adresse de chaque plage.
    4. Placer les serveurs et les clients aux rangs du document suivi. Ne pas mélanger les rangs de l’énoncé et ceux de la correction.
    5. Reporter les adresses sur le drawio.
    6. Écrire les règles : ports strictement nécessaires, reste bloqué, une justification par ligne.

    Schéma reconstruit d’après les seuls libellés du drawio, ce n’est pas le fichier original :

    | Zone | Libellés |
    |---|---|
    | Amont | Routeur formateur `192.168.150.100/24` |
    | LANCLT | Client Linux et client Windows, annotation VMnet10 et `172.20.X.Y/?` |
    | LANSRV | SRV-CD (Active Directory, DNS) et SRV-MBR (DHCP), annotation VMnet11 |
    | LANDMZ | SRV-WEB, annotation VMnet12 |
    | Commutation | Quatre symboles de commutateur, sans nom |

    Le classeur de règles a quatre feuilles : WAN, LANCLT, LANSRV, LAVDMZ. Colonnes : numéro, action, protocole, IP source et masque, port d’origine, IP de destination et masque, port de destination, justification.

    Seule WAN a deux exemples : Pass TCP de Any vers Wan IP sur 80 et 443 ; Block Any de Any vers Wan IP. Les trois autres feuilles n’ont que les titres. La matrice attendue est donc à produire. Elle n’est pas fournie.
