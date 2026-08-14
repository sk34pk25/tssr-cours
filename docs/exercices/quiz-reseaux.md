# Quiz — Bases des réseaux

Questions et réponses issues des fichiers Kahoot fournis. Les formulations conversationnelles ou métadonnées de génération ont été retirées.

## Cours_Reseaux_Modules1_2_Quiz_Kahoot

===== PAGE 1 =====

Cours Réseaux - Modules 1 et 2 Contenu du cours fourni Connaitre les couches du modèle OSI Manipuler les unités de mesure informatique Appréhender l’adressage IP Connaître la communication au sein d’un réseau Découvrir les premières commandes Modèle OSI : Une Structure en 7 Couches Le modèle OSI (Open Systems Interconnection) est une norme qui définit comment les communications se font entre deux systèmes sur un réseau. Ce modèle théorique est divisé en 7 couches distinctes, chaque couche ayant une fonction spécifique et communiquant avec celles situées directement au-dessus et en dessous d'elle. Cette segmentation permet de structurer les processus réseau et de faciliter le développement et le débogage des protocoles réseau. Le PDU (Protocol Data Unit) : Qu’est-ce que c’est ? Le PDU (Unité de Données de Protocole en français) est un terme utilisé dans le domaine des réseaux pour désigner une unité de données qui est échangée entre deux entités réseau dans le cadre d'une communication sur une couche spécifique du modèle OSI. Chaque couche du modèle OSI a son propre PDU, qui change en fonction du rôle et des tâches de la couche concernée. Le PDU comprend à la fois les données utilisateur et les informations de contrôle ajoutées par les protocoles de la couche pour garantir le bon acheminement des données sur le réseau. Le PDU à travers les différentes couches du Modèle OSI Chaque couche du modèle OSI encapsule les données reçues de la couche supérieure en y ajoutant ses propres en-têtes (et éventuellement un pied de trame pour certaines couches) afin de former un nouveau PDU. Encapsulation et Désencapsulation des PDU Chaque fois qu'une couche du modèle OSI reçoit des données de la couche supérieure, elle encapsule ces données dans un PDU en ajoutant des informations spécifiques à son rôle (adresses, numéro de séquence, contrôle d'erreur, etc.). Ce processus d'encapsulation se poursuit jusqu'à la couche physique, où les données sont converties en signaux et transmises sur le réseau. À l'arrivée, le processus inverse se produit. Les données sont désencapsulées couche par couche, les informations ajoutées à chaque PDU étant retirées par la couche correspondante jusqu'à ce que les données d'origine soient reconstituées et livrées à l'application finale. PDU et SDU : Le Passage d’une Couche à l’Autre dans le Modèle OSI Dans le modèle OSI (Open Systems Interconnection), chaque couche a un rôle bien défini dans le traitement des données lors de la communication réseau. Le transfert de données entre ces couches implique deux concepts importants : le PDU (Protocol Data Unit) et le SDU (Service Data Unit). PDU : C'est l'unité de données transmise d'une couche à une autre. Elle inclut les données utilisateur ainsi que les informations de contrôle propres à la couche qui traite le PDU. SDU : C'est l'unité de données fournie par une couche N+1 à la couche N. La couche N+1 donne des données brutes à la couche N pour qu'elle les prépare à la transmission. Processus de Transformation : Du PDU au SDU et vice-versa Lorsqu'une couche (N+1) termine son travail sur les données, elle génère un PDU (par exemple, un segment pour la couche transport ou un paquet pour la couche réseau). Ce PDU devient alors le

===== PAGE 2 =====

SDU pour la couche N, c'est-à-dire qu'il est transmis à la couche inférieure (la couche N) sous forme brute, sans aucune information spécifique à la couche N ajoutée. Étapes principales

#### Le PDU de la couche N+1 devient le SDU de la couche N 

Lorsque la couche N+1 finit son travail, elle envoie son PDU à la couche N. La couche N considère alors ce PDU comme un SDU, une donnée à traiter.

#### Ajout du PCI (Protocol Control Information) 

La couche N ajoute son propre PCI (Protocol Control Information), qui contient des informations de contrôle comme les adresses, les numéros de séquence, les mécanismes de gestion d’erreur, etc. Cette étape est appelée encapsulation. Le PCI est essentiel car il permet à la couche N d’assurer ses responsabilités, par exemple le routage à la couche réseau ou la segm entation à la couche transport.

#### Formation d’un nouveau PDU 

Une fois que la couche N a ajouté son PCI au SDU, elle forme un nouveau PDU spécifique à sa propre couche. Ce PDU sera ensuite transmis à la couche inférieure (la couche N-1), où le même processus se répétera.

#### Exemple Concret (de la Couche Transport à la Couche Réseau) 

Prenons l'exemple du transfert d'un segment TCP (couche transport) à un paquet IP (couche

#### réseau) 

Couche Transport (N+1) : La couche transport prépare un PDU appelé segment TCP, contenant les données applicatives et les informations de contrôle de la couche transport (numéro de séquence, ports source et destination, etc.). Transmission à la Couche Réseau (N) : Ce segment TCP devient alors le SDU pour la couche réseau. La couche réseau reçoit ce SDU et doit maintenant y ajouter ses propres informations. Ajout du PCI Réseau : La couche réseau ajoute son PCI, qui contient des informations importantes comme l’adresse IP source, l’adresse IP de destination, et d'autres données de routage. Formation du Paquet IP (PDU) : Après l'ajout du PCI, le SDU de la couche réseau devient un nouveau PDU sous forme de paquet IP. Ce paquet sera ensuite transmis à la couche inférieure (couche liaison de données) pour être envoyé physiquement à travers le réseau. SDU : C'est le bloc de données brutes provenant de la couche supérieure. PCI : C'est l'information de contrôle ajoutée par la couche pour gérer l'acheminement et le traitement des données. PDU : C'est le résultat final de l’encapsulation, après ajout du PCI au SDU. Ce PDU est ensuite transmis à la couche inférieure, où le processus recommence. À chaque étape de la communication, les données sont encapsulées dans un nouveau PDU en fonction des exigences de la couche concernée, avant d'être finalement transmises sur le réseau sous forme de bits (à la couche physique). Les Ports et Protocoles dans le Modèle OSI Dans le modèle OSI (Open Systems Interconnection), chaque couche joue un rôle bien défini dans le processus de communication réseau.

===== PAGE 3 =====

Les protocoles sont des ensembles de règles qui régissent la manière dont les données sont échangées à chaque niveau, tandis que les ports sont des identifiants numériques utilisés par les applications au sein de la couche transport pour distinguer les différentes communications. Le modèle OSI comporte 7 couches, et chaque couche utilise des protocoles spécifiques pour effectuer ses tâches. Les ports sont principalement utilisés à la couche transport (couche 4), mais les protocoles existent à toutes les couches, jouant un rôle crucial dans la communication entre systèmes. 1. Couche Physique (Physique) Rôle : Transmission des bits sous forme de signaux électriques, optiques ou radio à travers des supports physiques (câbles, fibres optiques, ondes radio, etc.). Protocoles : Cette couche ne comporte pas vraiment de protocoles au sens classique, mais plutôt des normes et spécifications physiques comme Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), ou encore Bluetooth, qui définissent la manière dont les bits sont transmis. Exemples Ethernet Wi-Fi (802.11) 2. Couche Liaison de Données (Data Link) Rôle : Assurer une transmission fiable des trames entre deux équipements adjacents sur le même réseau. Elle gère les erreurs de transmission, la synchronisation des trames et l'accès au support physique.

#### Protocoles 

Ethernet (IEEE 802.3) : Protocole dominant pour les réseaux locaux câblés. Wi-Fi (IEEE 802.11) : Protocole pour les réseaux locaux sans fil. PPP (Point-to-Point Protocol) : Utilisé pour la communication entre deux nœuds réseau, souvent pour les connexions internet via modem. HDLC (High-Level Data Link Control) : Protocole pour les connexions série synchrone. 3. Couche Réseau (Network) Rôle : Responsable de l’acheminement des paquets entre les différents réseaux et de la gestion des adresses logiques (par exemple, adresses IP).

#### Protocoles 

`IP (Internet Protocol) : Le protocole principal pour l'acheminement des p`

aquets sur l'Internet et d'autres réseaux. IPv4 : Version la plus répandue d'IP, utilisant des adresses 32 bits. IPv6 : Nouvelle version d'IP, avec des adresses 128 bits, pour répondre à l'épuisement des adresses IPv4. ICMP (Internet Control Message Protocol) : Utilisé pour envoyer des messages de diagnostic et de contrôle, comme les messages d'erreur ou de ping.

`ARP (Address Resolution Protocol) : Traduit les adresses IP en adresses MAC pour la`

communication au sein du même réseau local. OSPF (Open Shortest Path First) : Protocole de routage utilisé dans les réseaux internes pour déterminer le meilleur chemin. 4. Couche Transport (Transport) Rôle : Assurer une communication fiable de bout en bout entre les hôtes, gérant le contrôle d’erreurs, le flux et la segmentation des données. Ports : La couche transport utilise les ports pour identifier les différentes communications entre les applications. Un port est un identifiant numérique attribué à chaque application communicante (par exemple, HTTP utilise le port 80).

#### Protocoles 

TCP (Transmission Control Protocol) : Protocole orienté connexion, garantissant la livraison fiable des données dans le bon ordre. Il utilise des mécanismes comme le contrôle de flux et la gestion

===== PAGE 4 =====

des erreurs. UDP (User Datagram Protocol) : Protocole non orienté connexion, plus rapide mais sans garantie de livraison des données (utilisé pour les flux audio/vidéo en temps réel). Exemples de ports Port 22 : SSH (Secure Shell) pour l'administration distante sécurisée. Port 25 : SMTP (Simple Mail Transfer Protocol) pour l'envoi d'emails. Port 53 : DNS (Domain Name System) pour la résolution de noms de domaine. Port 67 et 68 : DHCP (Dynamic Host Configuration Protocol) pour l'attribution d'adresses IP dynamiques. Port 80 : HTTP pour le web. Port 443 : HTTPS pour les communications web sécurisées. Port 143 : IMAP (Internet Message Access Protocol) pour la gestion des emails sur un serveur distant. Port 389 : LDAP (Lightweight Directory Access Protocol) pour les services d'annuaire. Port 3389 : RDP (Remote Desktop Protocol) pour la prise en main à distance de bureaux Windows. Port 161 et 162 : SNMP (Simple Network Management Protocol) pour la gestion des équipements réseau (161 pour les requêtes, 162 pour les notifications). 5. Couche Session (Session) Rôle : Établir, gérer et terminer les sessions entre deux applications. Elle est aussi responsable de la synchronisation et de la reprise des échanges en cas d’interruption.

#### Protocoles 

RPC (Remote Procedure Call) : Permet à un programme d'exécuter des procédures sur un autre ordinateur. NetBIOS : Utilisé pour gérer les connexions et l’échange de données entre ordinateurs sur un réseau local. 6. Couche Présentation (Presentation) Rôle : Gérer la traduction des données entre le format utilisé par l'application et celui nécessaire pour la transmission réseau. Elle s’occupe également du chiffrement et de la compression des données.

#### Protocoles 

SSL (Secure Sockets Layer) et TLS (Transport Layer Security) : Protocoles de sécurité pour le chiffrement des communications (utilisés pour HTTPS). JPEG, MPEG : Protocoles de codage des données multimédia pour garantir leur bonne transmission. 7. Couche Application (Application) Rôle : Fournir des services réseau aux applications utilisées par l'utilisateur final. C'est ici que se situent les protocoles que nous utilisons quotidiennement pour le web, les emails, le transfert de fichiers, etc.

#### Protocoles 

HTTP/HTTPS (Hypertext Transfer Protocol / Secure) : Protocole utilisé pour naviguer sur le web. FTP (File Transfer Protocol) : Protocole de transfert de fichiers. SMTP (Simple Mail Transfer Protocol) : Utilisé pour l’envoi d’emails. DNS (Domain Name System) : Traduit les noms de domaine en adresses IP. Exemple : l'encapsulation lors d'un envoi de mail 1. Couche Application (Couche 7) Rôle : L'utilisateur compose un email via une application de messagerie, et celui-ci est envoyé à travers le protocole SMTP (Simple Mail T ransfer Protocol). Encapsulation : À ce niveau, les données brutes (l'email complet, y compris le texte et les pièces jointes) sont appelées APDU (Application Protocol Data Unit). L'APDU est la forme sous laquelle les données sont manipulées dans la couche Application, avant d'être transmises à la couche inférieure. L'APDU est ensuite transmis à la couche Présentation.

===== PAGE 5 =====

2. Couche Présentation (Couche 6) Rôle : La couche Présentation convertit les données dans un format standardisé pour la transmission, et peut aussi appliquer du chiffrement ou de la compression. Encapsulation : À ce niveau, l'APDU est encapsulé dans un PPDU (Presentation Protocol Data Unit). Si un chiffrement comme SSL ou TLS est utilisé, un en-tête spécifique sera ajouté à ce stade pour indiquer la méthode de cryptage. Le PPDU est ensuite transmis à la couche Session. 3. Couche Session (Couche 5) Rôle : La couche Session gère la communication entre l'application cliente (votre logiciel de messagerie) et le serveur de messagerie. Encapsulation : À cette couche, le PPDU est encapsulé dans un SPDU (Session Protocol Data Unit), qui contient des informations nécessaires à la gestion de la session, comme les mécanismes de synchronisation et les informations d'identification de session. Le SPDU est ensuite transmis à la couche Transport. 4. Couche Transport (Couche 4) Rôle : Cette couche est responsable du transport fiable des données entre l'hôte émetteur et le serveur de messagerie, en segmentant les données et en assurant le contrôle d’erreurs. Le protocole utilisé est généralement TCP pour garantir une transmission fiable. Encapsulation : Le SPDU est encapsulé dans un TPDU, également appelé Segment dans le cas de TCP. L'en-tête ajouté à cette couche contient des informations cruciales telles que le numéro de port (par exemple, port 25 pour SMTP), les numéros de séquence pour l'ordonnancement des segments, et les informations de contrôle d’erreurs. Les segments (TPDU) sont ensuite envoyés à la couche Réseau. 5. Couche Réseau (Couche 3) Rôle : Cette couche est responsable de l’acheminement des paquets à travers différents réseaux, en utilisant les adresses IP source et destination pour déterminer le chemin. Encapsulation : Le TPDU (Segment) est encapsulé dans un RPDU, ou paquet (PDU au niveau de la couche Réseau). L'en-tête ajouté à ce niveau contient les adresses IP de source et de destination, permettant au paquet de circuler à travers le réseau. Le RPDU (paquet) est ensuite transmis à la couche Liaison de Données. 6. Couche Liaison de Données (Couche 2) Rôle : La couche Liaison de Données assure la transmission fiable des données sur le lien physique, et gère les adresses MAC pour les communications entre deux appareils sur un même réseau. Encapsulation : Le RPDU (paquet) est encapsulé dans une LPDU, ou trame (PDU au niveau de la couche Liaison de Données). L'en-tête de la trame inclut les adresses MAC source et destination, ainsi que des informations de contrôle d’erreurs spécifiques au réseau local. La trame (LPDU) est ensuite envoyée à la couche Physique. 7. Couche Physique (Couche 1) Rôle : La couche Physique transforme la trame (LPDU) en bits (0 et 1) et les transmet sur le support physique sous forme de signaux électriques, optiques ou radio. Cette couche utilise des supports comme les câbles Ethernet ou les ondes Wi-Fi pour la transmission des bits. Encapsulation : À ce stade, aucune encapsulation supplémentaire n'est effectuée. Les bits sont simplement transmis à l'appareil destinataire. Déroulement du Processus de Réception Le serveur de messagerie destinataire reçoit les bits et, à travers un processus de désencapsulation, retire les en-têtes à chaque couche. Les bits sont convertis en trame (LPDU), puis en paquet (RPDU), et ainsi de suite, jusqu'à reconstituer l'APDU contenant l'email dans sa forme finale au niveau de la couche Application. La Désencapsulation : Exemple de la Réception d’un Email

===== PAGE 6 =====

Lorsque vous recevez un email, le processus de d ésencapsulation se déroule. Ce mécanisme inverse consiste à enlever les informations ajoutées par chaque couche lors de l'encapsulation à l’envoi, pour extraire les données brutes. À chaque couche, les en-têtes sont analysés et enlevés pour permettre aux données de remonter jusqu'à la couche Application.

#### Voici comment cela se passe pour un email reçu 

1. Couche Physique (Couche 1) Rôle : Les bits sont reçus sous forme de signaux électriques, optiques ou radio, selon le support physique utilisé (par exemple, câble Ethernet ou Wi-Fi). Désencapsulation : Ces bits sont transmis à la couche Liaison de Données pour être reconstitués en LPDU (trames). À ce niveau, aucun traitement spécifique n'est effectué sur le contenu des données, on ne fait que transmettre les bits pour être analysés par la couche supérieure. Les bits sont convertis en une trame et transmis à la couche Liaison de Données. 2. Couche Liaison de Données (Couche 2) Rôle : La couche Liaison de Données vérifie les informations ajoutées à la trame, comme les adresses MAC (source et destination) et les mécanismes de contrôle d'erreurs. Désencapsulation : La LPDU (trame) est analysée. Une fois la vérification de l’adresse MAC de destination effectuée (qui correspond à l'appareil récepteur), l'en-tête de la trame est enlevé. Ce qui reste est le RPDU, ou paquet. Le paquet (RPDU) est transmis à la couche Réseau. 3. Couche Réseau (Couche 3) Rôle : La couche Réseau gère le routage des paquets en fonction des adresses IP. Elle vérifie si l'adresse IP de destination correspond à l'adresse de l'ordinateur récepteur. Désencapsulation : Le RPDU (paquet) est analysé, et son en-tête IP est enlevé. Cette en-tête contient des informations comme l'adresse IP source et destination. Si l'adresse IP de destination correspond à l'ordinateur récepteur, le paquet est accepté et transmis à la couche Transport. Ce qui reste est le TPDU, ou Segment. Le segment est ensuite envoyé à la couche Transport. 4. Couche Transport (Couche 4) Rôle : La couche Transport est responsable de l'acheminement fiable des données. Elle vérifie des informations comme le numéro de port de destination et le contrôle d'erreurs pour assurer une transmission correcte. Désencapsulation : Le TPDU (Segment) est analysé, et l'en-tête TCP est enlevé. Cette en-tête contient des informations telles que le numéro de port (par exemple, port 25 pour SMTP), les numéros de séquence des segments, et les mécanismes de correction d'erreurs. Après l’enlèvement de cet en-tête, ce qui reste est le SPDU (Session Protocol Data Unit). Le SPDU est ensuite transmis à la couche Session. 5. Couche Session (Couche 5) Rôle : La couche Session gère l’établissement, la gestion et la terminaison de la session de communication entre le serveur de messagerie et le client. Désencapsulation : Le SPDU est analysé, et l'en-tête de la couche Session est enlevé, révélant les PPDU (Presentation Protocol Data Unit), qui sont ensuite transmis à la couche Présentation. 6. Couche Présentation (Couche 6) Rôle : Cette couche s’assure que les données sont dans un format approprié pour l'application de destination, en effectuant la décompression ou le déchiffrement si nécessaire. Désencapsulation : Le PPDU est analysé, et l’en-tête de la couche Présentation est enlevé. Si du chiffrement a été appliqué (par exemple via SSL ou TLS), cette couche s’occupe de déchiffrer les données avant de les transmettre à la couche Application sous forme d'APDU (Application Protocol Data Unit).

===== PAGE 7 =====

7. Couche Application (Couche 7) Rôle : La couche Application est responsable de la gestion des services réseau à destination des applications utilisateur, comme l’affichage de l'email dans un client de messagerie (Outlook, Thunderbird, etc.). Désencapsulation : Le APDU est enfin reçu et interprété. À ce niveau, l'email complet (texte, pièces jointes, etc.) est reconstitué et présenté à l'utilisateur via l'application de messagerie. Analogie du modèle OSI avec le cheminement d'une lett re via un transporteur Détail de la communication d'un utilisateur souhaitant accéder à un site web La couche physique : Fondement du Modèle OSI Dans le modèle OSI, la couche Physique est la première couche, responsable de la transmission des données brutes sous forme de signaux physiques à travers divers supports de communication, comme les câbles, les ondes radio, ou encore la fibre optique. En d’autres termes, c’est elle qui transforme les informations en impulsions électriques, en signaux lumineux ou en ondes radio pour les envoyer d'un point à un autre sur le réseau. Elle est chargée de l’envoi et de la réception des bits de données sous forme de signaux. Elle s’assure que chaque bit est transmis avec précision d’un dispositif à un autre sans se soucier de l’interprétation de ces bits. Son travail est de fournir un canal de communication fiable, sur lequel les couches supérieures peuvent s’appuyer pour transférer des informations complexes. Les fonctions de la couche physique

#### Elle assure plusieurs fonctions importantes, notamment 

Définition du support de transmission : Elle spécifie le type de support physique utilisé, qu'il s'agisse de câbles Ethernet, de fibres optiques ou de technologies sans fil comme le Wi-Fi. Cette couche dicte aussi les caractéristiques de ces supports, par exemple, la longueur maximale d'un câble ou la fréquence utilisée pour les signaux radio. Encodage et synchronisation des bits : La couche physique encode les données en signaux compatibles avec le support de transmission. Elle permet également la synchronisation des bits pour que l’émetteur et le récepteur soient alignés sur le rythme des transmissions, garantissant ainsi une communication précise. Débit de transfert : Elle contrôle le taux de transmission, c’est-à-dire la vitesse à laquelle les données sont envoyées, souvent mesurée en bits par seconde (bps). Ce débit varie en fonction de la capacité du support physique utilisé et peut être limité par les équipements en place. Topologie physique du réseau : Elle définit la structure physique du réseau, comme la manière dont les différents périphériques sont interconnectés, que ce soit en étoile, en bus, en anneau ou en mesh (maillé). Gestion des connexions physiques : La couche physique s’assure que les connexions physiques sont établies, maintenues et coupées selon les besoins. Elle supervise des aspects comme la détection de collision de signaux dans les réseaux partagés et la détection de l'état de la ligne (libre ou occupée). La couche physique peut être comparée aux routes et voies de transport que nous utilisons pour nous déplacer d'un endroit à un autre. Par exemple, dans une autoroute, les voitures représentent les données, et les routes représentent le canal physique. La couche Physique se préoccupe seulement de fournir une route pour que les voitures passent, sans s'occuper du contenu transporté par chaque voiture. Matériel et Équipements de la Couche Physique Elle fait appel à divers équipements réseau pour transmettre les données, notamment :

===== PAGE 8 =====

Les câbles (Ethernet, fibre optique, coaxial) Les connecteurs (RJ45, par exemple) Les émetteurs et récepteurs radio pour les réseaux sans fil Les hubs et répéteurs, qui renforcent le signal sur les longues distances Les modems, qui convertissent les signaux numériques en signaux analogiques et vice versa La couche physique ne gère ni les erreurs ni la vérification de la destination des données ; elle se limite strictement au transport des bits. C’est pourquoi elle dépend des couches supérieures du modèle OSI pour assurer le bon fonctionnement de la communication réseau. Les Câbles Réseau : Types et Utilisations Dans les réseaux informatiques, les câbles sont essentiels pour permettre la transmission des données entre différents appareils, comme les ordinateurs, les commutateurs, ou encore les routeurs. L’un des types de câbles les plus utilisés est le câble à paires torsadées, qui se décline en plusieurs configurations selon le type de connexion souhaité : le câble droit et le câble croisé. Couleurs associées aux cables à paires torsadéesCâble à Paires Torsadées (Twisted Pair Cable) Le câble à paires torsadées est un câble formé de fils de cuivre organisés en paires. Chaque paire de fils est torsadée pour réduire les interférences électromagnétiques. Ce type de câble est largement utilisé pour les réseaux Ethernet, notamment dans les catégories CAT5e, CAT6, et CAT6a, qui offrent des vitesses de transmission pouvant aller jusqu’à 10 Gbps. Avantages des Paires Torsadées Réduction des interférences : La torsion des paires de fils permet de réduire les interférences internes et externes. Fiabilité : Adapté aux environnements réseau courants avec des distances de câblage allant jusqu’à 100 mètres pour le câblage Ethernet standard. Types de Câbles à Paires Torsadées

#### Les câbles à paires torsadées peuvent être de deux types 

UTP (Unshielded Twisted Pair) : Sans blindage, il est léger et moins coûteux, mais plus vulnérable aux interférences. STP (Shielded Twisted Pair) : Avec un blindage pour chaque paire ou pour l’ensemble du câble, il est mieux protégé contre les interférences électromagnétiques, mais plus cher. Câble Droit (Straight-Through Cable) Un câble droit est un type de câble à paires torsadées dans lequel les fils suivent exactement le même schéma de connexion aux deux extrémités du câble, en utilisant un des standards de câblage (T568A ou T568B). Ce câble est utilisé pour connecter des appareils de types différents dans un réseau. Utilisation du Câble Droit

#### Le câble droit est couramment utilisé pour les connexions suivantes 

Ordinateur vers commutateur (switch) Ordinateur vers routeur Commutateur vers routeur En général, le câble droit sert à relier des équipements qui n’appartiennent pas à la même catégorie, comme un poste de travail à un commutateur. Schéma de câblage d’un Câble Droit Pour un câble droit, chaque fil est connecté dans le même ordre aux deux extrémités du câble. Par exemple, dans le standard T568B, les fils suivent cet ordre aux deux extrémités :

===== PAGE 9 =====

Blanc/orange Orange Blanc/vert Bleu Blanc/bleu Vert Blanc/marron Marron Câble Croisé (Crossover Cable) Le câble croisé est un autre type de câble à paires torsadées, où les fils sont croisés pour permettre une communication directe entre deux appareils de même type, sans passer par un commutateur ou un routeur. Utilisation du Câble Croisé

#### Le câble croisé est utilisé pour relier directement 

Deux ordinateurs Deux commutateurs Deux routeurs Le but est d’inverser les connexions des fils pour que la sortie (transmission) d’un appareil soit reliée à l’entrée (réception) de l’autre. Cela permet aux deux appareils de communiquer directement entre eux. Schéma de câblage d’un Câble Croisé Dans un câble croisé, un côté utilise le schéma T568A, et l’autre côté utilise le schéma T568B. Cela

#### crée un croisement entre les fils de transmission et de réception 

#### Extrémité T568A 

Blanc/vert Vert Blanc/orange Bleu Blanc/bleu Orange Blanc/marron Marron

#### Extrémité T568B 

Blanc/orange Orange Blanc/vert Bleu Blanc/bleu Vert Blanc/marron Marron Avec ce câblage, les fils de transmission (TX) d’un appareil sont connectés aux fils de réception (RX) de l’autre appareil, permettant ainsi une communication bidirectionnelle. Choisir le Bon Câble Le choix entre un câble droit et un câble croisé dépend des équipements à connecter : Câble Droit : Utilisé pour connecter des appareils de types différents (par exemple, un ordinateur et un commutateur).

===== PAGE 10 =====

Câble Croisé : Utilisé pour connecter des appareils de même type (par exemple, deux ordinateurs directement entre eux). Cependant, les équipements réseau modernes, comme les commutateurs et les cartes réseau, intègrent souvent la fonction Auto MDI-X qui détecte automatiquement le type de câble et ajuste les connexions en conséquence. Cela permet l'utilisation d’un câble droit à la place d’un câble croisé, même pour des appareils de même type. Conclusion La co uche Physique est donc la base de toute communication réseau. Elle fournit le support essentiel permettant aux couches supérieures de transmettre des informations en assurant la conversion des données en signaux, l’encodage des bits, la synchronisation et le débit de transmission. Bien que son rôle soit limité à la transmission des bits, c’est une couche cruciale, car sans elle, aucune communication ne pourrait avoir lieu entre les dispositifs. La couche Liaison de Données : Fondement du transfert fiable Dans le modèle OSI, la couche Liaison de données (ou Data Link Layer) est la deuxième couche, située juste au-dessus de la couche Physique. Son rôle principal est de fournir un transfert de données fiable entre deux dispositifs connectés sur un même réseau local. Elle permet de détecter et parfois corriger les erreurs de transmission, et garantit que les données envoyées par un émetteur sont correctement reçues par le récepteur sur le réseau local. Elle s'assure que les données peuvent être transférées sans erreurs au niveau de la trame entre deux périphériques connectés physiquement. Ce processus inclut l’encapsulation des paquets reçus de la couche Réseau sous forme de trames en ajoutant un en-tête et une fin de trame pour en définir les limites et les contrôles nécessaires. Elle définit également les adresses MAC, assurant ainsi l'identification des équipements connectés sur un réseau local. Les Deux Sous-couches de la couche liaison La couche Liaison est souvent subdivisée en deux sous-couches, chacune ayant des

#### responsabilités spécifiques 

Sous-couche de Contrôle de Liaison Logique (LLC) : La sous-couche LLC gère les connexions logiques entre les appareils et permet à plusieurs protocoles réseau (par exemple, IP ou IPX) de fonctionner sur un même support physique. Elle est responsable de l’identification des protocoles utilisés pour chaque trame et du multiplexage des protocoles. Sous-couche de Contrôle d’Accès au Support (MAC) : La sous-couche MAC contrôle l’accès au support physique. Elle gère la méthode d’accès (par exemple, CSMA/CD dans les réseaux Ethernet) et est responsable de l’adressage physique (adresse MAC), qui identifie de manière unique chaque appareil sur le réseau. Les Fonctions de la Couche Liaison de Données La couche Liaison de données assure plusieurs fonctions essentielles au transfert fiable des

#### informations 

Encapsulation en trames : Les données reçues de la couche Réseau sont divisées en trames. Une trame est une unité de données spécifique à cette couche, contenant à la fois les données (paquets) et les informations de contrôle (en-têtes et fin de trame). Contrôle d’erreurs : Elle détecte et, dans certains cas, corrige les erreurs qui pourraient survenir pendant la transmission. Cela se fait grâce à des techniques comme les bits de parité, le contrôle de redondance cyclique (CRC) ou les codes de Hamming. Contrôle de flux : La couche Liaison peut ajuster le flux de données pour éviter une surcharge de l'équipement récepteur. Elle garantit que les données ne sont pas envoyées plus rapidement que le

===== PAGE 11 =====

récepteur ne peut les traiter. Adressage MAC : Elle utilise les adresses MAC (Media Access Control) pour identifier les dispositifs de façon unique sur le réseau. Chaque trame comporte une adresse MAC source et une adresse MAC de destination, permettant aux trames d'atteindre les bons dispositifs. Contrôle d’accès au support : En réseaux partagés (comme Ethernet), cette couche décide quel appareil peut émettre des données à un moment donné, évitant ainsi les collisions. On peut comparer la couche Liaison à un service postal de tri local. Imaginons qu'une lettre arrive à un centre de tri où elle est identifiée (grâce aux adresses) et contrôlée pour vérifier qu'elle est complète (contrôle d’erreurs). Ce centre de tri vérifie ensuite le bon acheminement vers la destination locale, sans s’occuper des étapes plus lointaines (relevant de la couche Réseau). Équipements Reliés à la Couche Liaison La c ouche Liaison de données fait appel à différents équipements de réseau, tels que : Les commutateurs (switches) : qui fonctionnent en utilisant les adresses MAC pour transférer les trames entre les dispositifs sur le même réseau local. Les ponts (bridges) : qui relient plusieurs segments de réseau en opérant au niveau des adresses MAC. Exemple Pratique de Fonctionnement Imaginons un ordinateur A qui envoie un fichier à un ordinateur B sur le même réseau local : Encapsulation en trame : L'ordinateur A encapsule les données en ajoutant un en-tête contenant l'adresse MAC de l’ordinateur B, ainsi qu'un contrôle de redondance pour s'assurer que les données ne sont pas altérées en chemin. Contrôle d’accès au support : Si plusieurs appareils veulent émettre en même temps, la sous-couche MAC décide qui envoie la première trame pour éviter les collisions. Transmission et réception : La trame est envoyée à l’ordinateur B, qui vérifie que l'adresse MAC de destination lui correspond, puis analyse le contenu pour vérifier s'il n’y a pas d’erreurs. Confirmation : Si tout est en ordre, la trame est acceptée, et le transfert est réussi. La couche Liaison est limitée à la communication entre dispositifs sur le même réseau local. Pour les communications inter-réseaux, elle dépend de la couche Réseau (couche 3), qui permet le routage des données vers d'autres réseaux. La couche Liaison de données joue un rôle essentiel dans la fiabilité de la communication locale. En assurant l'encapsulation des données en trames, la gestion des erreurs et le contrôle d'accès au support, elle garantit que les données peuvent circuler correctement au sein du même réseau local. Grâce à elle, les données passent de la couche Physique à la couche Réseau de manière ordonnée, avec un contrôle efficace et sécurisé. La Couche Réseau : Le Routage des Données Dans le modèle OSI, la couche Réseau (ou Network Layer) est la troisième couche, jouant un rôle crucial dans la transmission des données à travers différents réseaux. Sa fonction principale est de déterminer la manière dont les données sont envoyées d'un appareil à un autre, même lorsqu'ils sont situés sur des réseaux différents. La couche Réseau est responsable du routage des paquets de données, de l'adressage logique et de la gestion de la congestion sur le réseau. La couche Réseau s'assure que les données (sous forme de paquets) peuvent être transférées entre les dispositifs sur des réseaux distincts. Elle utilise des adresses logiques (généralement des adresses IP) pour identifier les sources et les destinations, ce qui lui permet d'acheminer les paquets de manière efficace et sécurisée. Les Fonctions de la Couche Réseau

===== PAGE 12 =====

#### La couche Réseau remplit plusieurs fonctions essentielles 

Routage : Le routage consiste à déterminer le chemin optimal que les paquets de données doivent emprunter pour atteindre leur destination. Cela implique l'utilisation d'algorithmes de routage qui prennent en compte différents critères, comme la distance, la bande passante et la congestion du réseau. Adressage : La couche Réseau utilise des adresses IP pour identifier de manière unique chaque appareil sur le réseau. Contrairement aux adresses MAC qui sont physiques et fixes, les adresses

`IP peuvent être dynamiques (attribuées par DHCP) ou statiques.`

Fragmentation et Réassemblage : Si un paquet de données est trop volumineux pour être transmis sur un réseau donné, la couche Réseau peut le fragmenter en paquets plus petits. Ces fragments sont ensuite réassemblés à la destination pour former le paquet original. Contrôle de la congestion : La couche Réseau peut également gérer la congestion du réseau en contrôlant le flux de paquets. Elle surveille l'état du réseau et ajuste les transmissions en conséquence pour éviter de saturer les liaisons. Gestion des erreurs : Bien que le contrôle des erreurs soit principalement effectué par la couche Liaison, la couche Réseau peut également détecter certains types d'erreurs lors du routage et prendre des mesures pour les corriger ou les signaler. Protocoles Associés à la Couche Réseau Plusieurs protocoles fonctionnent au sein de la couche Réseau, les plus connus étant : Internet Protocol (IP) : C'est le principal protocole de la couche Réseau, responsable de l’adressage et du routage des paquets sur Internet. Il existe deux versions principales : IPv4 et IPv6. IPv4 utilise des adresses sur 32 bits, tandis qu'IPv6 utilise des adresses sur 128 bits, permettant un plus grand nombre d'adresses uniques. Internet Control Message Protocol (ICMP) : Utilisé pour les messages de contrôle et de diagnostic, comme les pings, ICMP aide à vérifier la connectivité et à signaler des erreurs. Routing Information Protocol (RIP) et Open Shortest Path First (OSPF) : Protocoles de routage qui permettent aux routeurs d'échanger des informations sur les chemins disponibles et d'optimiser le routage des paquets. Pour mieux comprendre le rôle de la couche Réseau, imaginez-la comme le système postal. Lorsqu'un colis est envoyé d'un pays à un autre, le système postal doit déterminer le meilleur itinéraire pour acheminer le colis à sa destination, en tenant compte des différents modes de transport (avion, camion, train) et des adresses (identification du destinataire). Équipements Associés à la Couche Réseau La couche Réseau utilise plusieurs équipements pour réaliser ses fonctions : Routeurs : Dispositifs qui acheminent les paquets entre différents réseaux. Ils prennent des décisions de routage basées sur les adresses IP et les tables de routage. Passerelles : Dispositifs qui relient différents réseaux (par exemple, un réseau local à Internet) et peuvent effectuer des traductions de protocole. La couche Réseau ne s'occupe pas de la transmission physique des données, cela étant pris en charge par la couche Liaison et la couche Physique. De plus, bien qu'elle gère le routage, elle ne garantit pas la livraison des paquets (ce rôle est dévolu à la couche Transport). La couche Réseau joue un rôle fondamental dans la transmission des données à travers différents

===== PAGE 13 =====

réseaux. En gérant le routage, l'adressage et la fragmentation des paquets, elle assure que les données parviennent à leur destination correcte de manière efficace. Une compréhension approfondie de cette couche est essentielle pour quiconque souhaite travailler dans le domaine des réseaux informatiques. La Couche Transport : La Gestion Fiable de la Communication Dans le modèle OSI, la couche Transport (ou Transport Layer) est la quatrième couche, située entre la couche Réseau et la couche Session. Elle est chargée d’assurer une transmission fiable et efficace des données entre deux appareils connectés au réseau. Elle fournit des services de gestion de la communication et veille à ce que les données envoyées par l’émetteur soient reçues correctement et dans le bon ordre par le récepteur. La couche Transport assure que les données peuvent être transférées entre deux points de manière fiable, même si le réseau est sujet à des erreurs, des pertes de paquets ou des variations de débit. Elle introduit les notions de segments (unité de données spécifique à cette couche) et de numérotation pour garantir que les données sont reconstituées dans le bon ordre à l’arrivée. Les Fonctions de la Couche Transport La couche Transport remplit plusieurs fonctions essentielles pour assurer la qualité et la fiabilité

#### des communications 

Segmentation et Réassemblage : Les données provenant de la couche Session sont découpées en segments avant d’être envoyées sur le réseau. Chaque segment est numéroté, ce qui permet à la couche Transport du récepteur de réassembler les segments dans le bon ordre. Contrôle de Flux : La couche Transport ajuste la vitesse de transmission des données pour éviter de saturer le récepteur. Cela permet de contrôler la quantité de données envoyée en fonction de la capacité de réception. Contrôle d’Erreur : Les segments sont accompagnés de vérifications d’erreurs pour s’assure r qu’ils ne sont pas corrompus pendant le transport. Si une erreur est détectée, le segment peut être renvoyé. Gestion des Connexions : La couche Transport établit, maintient et termine les connexions logiques entre les applications des appareils communicants. Cela inclut la gestion des sessions de connexion et la détection des connexions coupées. Multiplexage : Elle permet à plusieurs applications de partager la même connexion réseau en distinguant les flux de données grâce à l’utilisation de ports. Cela permet à différentes applications de s'exécuter en simultané sans conflit. Protocoles Associés à la Couche Transport Les protocoles de la couche Transport sont responsables de la gestion des connexions et de la

#### fiabilité des communications. Les principaux sont 

TCP (Transmission Control Protocol) : Un protocole orienté connexion, qui garantit la livraison des segments dans le bon ordre et sans erreurs. TCP assure une communication fiable, idéale pour les applications nécessitant une transmission intégrale, comme le transfert de fichiers ou l’affichage de pages web. UDP (User Datagram Protocol) : Un protocole sans connexion, plus léger que TCP, qui n’assure pas le suivi de l’ordre ou de l’intégrité des paquets. UDP est utilisé pour des applications en temps réel (comme le streaming vidéo ou la VoIP) où la rapidité prime sur la fiabilité. Exemple Pratique : Envoi d’un Fichier Pour illustrer le rôle de la couche Transport, imaginons l'envoi d'un fichier depuis un ordinateur A

#### vers un ordinateur B 

===== PAGE 14 =====

Segmentation : Le fichier est découpé en segments par la couche Transport de l'ordinateur A, et chaque segment reçoit un numéro. Transmission et Contrôle d’Erreur : Chaque segment est envoyé avec un code de contrôle. Si un segment est perdu ou corrompu, l'ordinateur B peut demander à A de le renvoyer. Réassemblage : Une fois tous les segments reçus, la couche Transport de l'ordinateur B les réassemble en un fichier complet et vérifie qu’ils sont dans le bon ordre. Port et Multiplexage La couche Transport utilise les numéros de port pour identifier les applications d’envoi et de réception. Par exemple, le port 80 est souvent utilisé pour les requêtes HTTP (web), et le port 443 pour le HTTPS (web sécurisé). Ainsi, plusieurs applications peuvent fonctionner simultanément sur le même appareil sans interférence. Avantages et Inconvénients de TCP et UDP TCP garantit une communication fiable avec correction d’erreur, mais peut introduire de la latence car il vérifie que chaque segment est reçu correctement. Il est idéal pour des applications où l’intégrité des données est critique. UDP, en revanche, est plus rapide car il n’implémente pas de vérification de réception des segments, mais il peut entraîner des pertes de données. Ce protocole est souvent choisi pour des applications de temps réel où quelques pertes de paquets sont acceptables pour une transmission plus rapide. Équipements Reliés à la Couche Transport La couche Transport fonctionne principalement dans le logiciel, par exemple au niveau des systèmes d’exploitation et des applications réseau, sans impliquer d’équipement matériel spécifique comme les routeurs ou commutateurs (relevant des couches inférieures). Cependant, des équipements comme les firewalls utilisent la couche Transport pour filtrer le trafic selon les numéros de ports, ce qui contribue à la sécurité réseau. La couche Transport est essentielle pour la fiabilité et le contrôle des communications. En gérant la segmentation, le contrôle d’erreur, le flux et le multiplexage, elle permet aux données de transiter entre les applications de manière fiable et organisée. Elle assure une expérience utilisateur cohérente et de haute qualité en prenant en compte les besoins spécifiques des applications. Cisco Packet Tracer Ce logiciel permet de créer, configurer et simuler des topologies de réseau sans nécessiter de matériel physique, offrant ainsi un environnement de formation interactif et flexible. Il permet au x utilisateurs de concevoir et de tester différents types de réseaux. Principales Fonctions

#### Voici les principales fonctionnalités de cet outil 

Simulation de Réseau : Cisco Packet Tracer permet de simuler un large éventail de dispositifs réseau (routeurs, commutateurs, pare-feu, etc.), des protocoles et des technologies réseau comme les VLAN, OSPF, et le routage dynamique. Cela permet d’apprendre comment configurer ces dispositifs sans avoir accès à du matériel coûteux.

#### Mode Simulation et Mode Temps Réel 

===== PAGE 15 =====

En mode Temps Réel, les paquets de données circulent en continu comme dans un réseau réel, permettant d’observer les flux de communication en temps réel. En mode Simulation, on peut suivre chaque étape de la transmission des paquets, visualiser les processus de routage et de commutation, et observer comment chaque couche du modèle OSI intervient. Ce mode est particulièrement utile pour l’analyse détaillée des échanges réseau. Configuration CLI : Packet Tracer permet d’utiliser l’interface en ligne de commande (CLI) pour configurer les dispositifs Cisco. Cela aide les utilisateurs à pratiquer les commandes Cisco IOS (Internetwork Operating System) et à se préparer aux certifications Cisco, comme le CCNA (Cisco Certified Network Associate). Scénarios et Tests de Réseau : Les utilisateurs peuvent créer des scénarios de réseau variés, tester des configurations et même diagnostiquer des problèmes réseau en utilisant des outils intégrés comme le ping, le traceroute, et les captures de paquets. Collaboration et Apprentissage à Distance : Cisco Packet Tracer dispose de fonctionnalités pour l’apprentissage collaboratif. Les étudiants peuvent travailler ensemble sur des projets en réseau et partager des fichiers Packet Tracer (.pkt) pour collaborer ou pour que les instructeurs évaluent leur travail. Environnement de Programmation IoT : Le logiciel inclut des composants IoT (Internet of Things), permettant aux utilisateurs de créer des réseaux incluant des capteurs et des dispositifs intelligents, tout en configurant leurs interactions. Utilisation Pédagogique de Cisco Packet Tracer Dans le cadre de l'apprentissage en réseau, Packet Tracer est un outil pédagogique qui aide à : Visualiser les Concepts Réseau : Il facilite la compréhension des concepts abstraits, comme le routage, le DNS, DHCP, et les couches du modèle OSI, en les rendant visuels et interactifs. Pratiquer les Configurations : Les utilisateurs peuvent pratiquer les configurations réseau et développer des compétences pratiques, ce qui les prépare efficacement pour des environnements de production ou des examens de certification. Tester et Diagnostiquer : Grâce aux modes de simulation, les utilisateurs peuvent tester différents scénarios et apprendre à diagnostiquer les problèmes réseau, comme les défaillances de connexion ou les erreurs de configuration. La structure en 7 couches 1. Couche Physique (Physique) C'est la couche la plus basse du modèle. Elle est responsable de la transmission des données sous forme de signaux électriques ou optiques à travers le support de transmission (câbles, fibres optiques, ondes radio, etc.). Les équipements de cette couche incluent les répéteurs, les hubs et les câbles. 2. Couche Liaison de Données (Data Link) Elle assure un transfert fiable des données entre deux équipements adjacents, en gérant les erreurs de transmission et en structurant les données en trames. Cette couche comprend des sous-couches comme le MAC (Media Access Control) et le LLC (Logical Link Control). Les commutateurs (switches) opèrent souvent à ce niveau. 3. Couche Réseau (Network) Cette couche est responsable du routage des données à travers différents réseaux et de la gestion des adresses logiques (comme les adresses IP). Elle permet de choisir le chemin le plus approprié pour transmettre les paquets d'une source à une destination. Les routeurs sont des équipements de la couche réseau. 4. Couche Transport (Transport) Elle gère le contrôle de bout e

===== PAGE 16 =====

n bout des connexions et s'assure que les données arrivent sans erreur, dans le bon ordre, et sans duplication. Les protocoles couramment associés à cette couche sont TCP (Transmission Control Protocol) et UDP (User Datagram Protocol). 5. Couche Session (Session) Cette couche établit, gère et termine les sessions entre les applications sur les différentes machines. Elle est également chargée de synchroniser les échanges, assurant ainsi une communication fluide. 6. Couche Présentation (Presentation) Elle est souvent appelée "traductrice de données". Son rôle est de convertir les données en un format que l'application peut comprendre, gérer la compression des données et la cryptographie. Par exemple, elle peut convertir des fichiers de texte brut en un format sécurisé. 7. Couche Application (Application) C'est la couche la plus élevée, où se trouvent les applications réseau que nous utilisons tous les jours (navigateur web, client de messagerie, etc.). Elle fournit des services directement aux utilisateurs, tels que l'accès à des fichiers, la gestion des bases de données ou encore l'envoi d'e-mails.

### Module 2 - Les unités informatiques

Objectifs Les bases de numération Principe de numération décimale Principe de numération binaire Principe de numération octale Principe de numération héxadécimale Equivalence des valeurs Conversion décimale/binaire Conversion binaire/décimale Conversion décimale/octale Conversion octale/décimale Conversion décimale/hexadécimale Conversion hexadécimale/décimale Les différentes unités informatiques Les préfixes et équivalence des unités Démonstration - Les conversions Connaître le principe de numération Effectuer des conversions Comprendre les unités informatiques En informatique, la numération est le système utilisé pour représenter les nombres. Les bases les plus courantes sont la base binaire (base 2), la base octale (base 8), la base décimale (base 10), et la base hexadécimale (base 16). En base binaire, les nombres sont représentés avec des 0 et des 1 (bits). C’est la base fondamentale en informatique, car elle correspond directement au fonctionnement des circuits électroniques, qui utilisent deux états : activé (1) et désactivé (0). La base octale utilise les chiffres de 0 à 7. Elle est parfois employée pour représenter de grands nombres binaires de manière plus compacte.

===== PAGE 17 =====

La base décimale est la base standard utilisée par les humains, allant de 0 à 9. En informatique, elle est souvent convertie en binaire pour être traitée par la machine. En base hexadécimale, les nombres sont représentés de 0 à 9 et de A à F (où A = 10, B = 11, …, F = 15). Cette base permet de représenter efficacement les grands nombres binaires, chaque chiffre hexadécimal correspondant à quatre bits binaires. Ces systèmes de numération facilitent le traitement, le stockage et l'affichage des données en informatique. Le Principe de la Numération Décimale Le système de numération décimale, également appelé base 10, est le système de numération le plus familier et celui que nous utilisons couramment dans notre vie quotidienne. Il se compose de dix chiffres allant de 0 à 9 et se base sur les puissances de 10. Chaque position d'un chiffre dans un nombre décimal représente une puissance de 10, et la valeur de chaque chiffre est multipliée par cette puissance. Structure et Valeur des Chiffres en Décimal Dans un nombre décimal, chaque chiffre a une place spécifique qui lui attribue une valeur pondérée en fonction de sa position. La valeur d’un nombre est déterminée en multipliant chaque chiffre par la puissance de 10 correspondant à sa position, en partant de la droite. Par exemple, pour le

#### nombre 325, on a 

×

+

×

+

×

=

+

+

=

Ainsi, le chiffre 3 dans la centaine représente

×

, le 2 dans la dizaine représente

===== PAGE 18 =====

×

, et le 5 dans l’unité représente

×

. Le Principe de la Numération Binaire Dans le monde informatique, la numération binaire (ou base 2) est le système de numération fondamental. Il repose sur deux chiffres seulement : 0 et 1. Ce système est essentiel pour comprendre le fonctionnement des ordinateurs, car il correspond directement aux états des circuits électroniques, qui peuvent être soit en position activée (1), soit en position désactivée (0). Pourquoi Utiliser le Système Binaire en Informatique ? Le binaire est particulièrement adapté à l’informatique car il permet une représentation simple et efficace des données par les circuits électroniques. Les 0 et 1 du binaire correspondent aux deux états de tension d’un transistor : passage de courant (représenté par 1) et absence de courant (représenté par 0). Ainsi, les ordinateurs utilisent le binaire pour traiter et stocker des informations de manière rapide et fiable. Structure et Valeur des Bits Dans le système binaire, chaque chiffre est appelé un bit (Binary Digit), et chaque bit représente une puissance de 2. Par exemple, pour le nombre binaire 1011, chaque bit correspond à une

#### puissance de 2, en partant de la droite 

×

+

×

+

×

+

×

=

+

+

+

===== PAGE 19 =====

=

La Numération Octale La numération octale est un système numérique en base 8, qui utilise huit chiffres de 0 à 7. Chaque position dans un nombre octal représente une puissance de 8. Bien que moins courante que la numération binaire ou décimale, la base octale est parfois utilisée en informatique pour simplifier la lecture et la manipulation des nombres binaires. Pourquoi Utiliser la Base Octale ? Le système octal est principalement utilisé comme une méthode de représentation compacte des nombres binaires. Un chiffre octal peut être directement traduit en trois bits binaires, car

=

8=23. Ainsi, le système octal permet de réduire la longueur des séquences binaires en groupes de trois, ce qui facilite la lecture et la gestion des données. Structure et Conversion Binaire-Octal Dans le système octal, chaque position d’un chiffre représente une puissance de 8. Par exemple, le

#### nombre octal 237 signifie 

×

+

×

+

×

=

+

+

=

(en d e ■ cimal) Pour convertir un nombre binaire en octal, on regroupe simplement les bits par paquets de trois (en

===== PAGE 20 =====

partant de la droite) et on les remplace par leur valeur octale. Par exemple, pour convertir le

#### nombre binaire 110110 en octal 

Séparer en groupes de trois : 110 110.

#### Convertir chaque groupe en octal 

=

et

=

, donc le résultat est 66 en octal. Utilisation de l’Octal en Informatique et Réseaux Bien que l’octal ne soit pas autant utilisé aujourd’hui, il a joué un rôle important dans les systèmes Unix pour représenter les permissions des fichiers et dans certaines configurations de bas niveau, notamment dans l’écriture des codes de contrôle des périphériques. En réseau, le système octal est moins commun, mais on le trouve parfois pour certains aspects spécifiques, comme : Configuration de Permissions : En Unix/Linux, les permissions des fichiers et dossiers sont souvent définies en utilisant un système de notation octale, avec des valeurs telles que 755 ou 644 pour indiquer les droits de lecture, d’écriture et d’exécution. Compacité pour les Systèmes de Fichiers : Avant que le système hexadécimal ne soit largement adopté, l’octal permettait de manipuler et d’afficher plus efficacement des informations binaires, en particulier dans le développement et la configuration des systèmes réseau et des périphériques de stockage. La Numération Hexadécimale La numération hexadécimale est un système en base 16, qui utilise seize symboles pour représenter les valeurs : les chiffres de 0 à 9 et les lettres A à F (où A correspond à 10, B à 11, …, F à 15). Ce système est largement utilisé en informatique car il permet de représenter des nombres binaires longs de manière concise et lisible. Pourquoi Utiliser la Base Hexadécimale ? Le système hexadécimal est particulièrement utile en informatique pour représenter de grandes quantités de données binaires en for mat abrégé. Chaque chiffre hexadécimal correspond à quatre bits (ou un demi-octet), car

=

16=24. Ainsi, un nombre binaire peut être regroupé par blocs de quatre bits, chaque bloc correspondant à un chiffre hexadécimal. Cela simplifie considérablement la lecture et l’écriture des adresses mémoire, des codes de couleurs, et des adresses IP dans le cas des réseaux IPv6. Structure et Conversion Binaire-Hexadécimal Dans un nombre hexadécimal, chaque position d’un chiffre représente une puissance de 16. Par

#### exemple, le nombre hexadécimal 2AF signifie 

×

===== PAGE 21 =====

+

×

+

×

=

+

+

=

(en d e ■ cimal) Pour convertir un nombre binaire en hexadécimal, il suffit de regrouper les bits en paquets de quatre, en partant de la droite, puis de remplacer chaque paquet par son équivalent hexadécimal.

#### Par exemple, pour convertir le binaire 10101111 en hexadécimal 

Séparer en groupes de quatre : 1010 1111.

#### Convertir chaque groupe 

= A et

= F , ce qui donne AF en hexadécimal. Utilisation de la Base Hexadécimale en Réseaux La numération hexadécimale est très présente dans les réseaux informatiques, surtout avec les adresses IPv6 et dans les configurations de bas niveau, comme les adresses MAC. Adresses IPv6 : Les adresses IPv6 utilisent la base hexadécimale pour simplifier l’écriture et la lecture de longues adresses de 128 bits. Par exemple, une adresse IPv6 comme 2001:0db8:85a3:0000:0000:8a2e:0370:7334 est en réalité composée de 128 bits divisés en blocs de quatre. Adresses MAC : Les adresses physiques des cartes réseau, ou adresses MAC, sont également écrites en hexadécimal, par exemple 00:1A:2B:3C:4D:5E. Ce format permet de représenter de manière concise les adresses uniques attribuées aux périphériques réseau. Couleurs Web : En conception web, les couleurs sont souvent exprimées en hexadécimal pour définir les valeurs de rouge, vert et bleu (RGB). Par exemple, la couleur #FF5733 est une représentation hexadécimale indiquant un niveau élevé de rouge (FF), un niveau moyen de vert (57), et un niveau bas de bleu (33).

===== PAGE 22 =====

Le principe de conversion d'un nombre décimal en binaire repose sur la méthode des divisions successives par 2.

#### Voici les étapes de cette méthode 

Diviser le nombre décimal par 2 et noter le reste (qui sera toujours 0 ou 1). Prendre le quotient obtenu et le diviser de nouveau par 2. Répéter cette opération jusqu’à obtenir un quotient égal à 0. Le nombre binaire est formé en lisant les restes de bas en haut, c'est-à-dire en commençant par le dernier reste obtenu jusqu'au premier. Exemple : Conversion du Nombre Décimal 25 en Binaire

#### Prenons l'exemple de la conversion du nombre décimal 25 en binaire 

25 ÷ 2 = 12, reste 1 12 ÷ 2 = 6, reste 0 6 ÷ 2 = 3, reste 0 3 ÷ 2 = 1, reste 1 1 ÷ 2 = 0, reste 1 En lisant les restes de bas en haut, on obtient le nombre binaire 11001. Ainsi, 25 en base 10 est égal à 11001 en base 2.

#### Pour convertir un nombre décimal en binaire 

Divisez le nombre par 2 et notez le reste. Répétez l’opération avec le quotient jusqu'à atteindre 0. Le nombre binaire final s'obtient en lisant les restes de bas en haut. Conversion d’un Nombre Binaire en Nombre Décimal La conversion d'un nombre binaire (base 2) en nombre décimal (base 10) repose sur le principe des puissances de 2. Chaque chiffre (ou bit) d’un nombre binaire correspond à une puissance de 2, en commençant de la droite (position 0) vers la gauche. Méthode de Conversion Pour convertir un nombre binaire en décimal, on suit les étapes suivantes : Identifiez les positions des bits dans le nombre binaire, en commençant par la droite (le premier bit est la position 0). Multipliez chaque bit par

2 élevé à la puissance correspondant à sa position. Additionnez tous les produits obtenus pour obtenir le nombre décimal. Exemple : Conversion du Nombre Binaire 10110 en Décimal Prenons le nombre binaire 10110 et convertissons-le en base 10. En partant de la droite, on note la position de chaque bi

===== PAGE 23 =====

#### t 

Le bit tout à droite (0) est à la position 0 Le bit suivant (1) est à la position 1 Le bit suivant (1) est à la position 2 Le bit suivant (0) est à la position 3 Le bit le plus à gauche (1) est à la position 4 On multiplie chaque bit par

#### à la puissance de sa position 

(

×

) + (

×

) + (

×

) + (

×

) + (

×

)

#### En simplifiant les calculs 

(

×

) + (

×

===== PAGE 24 =====

) + (

×

) + (

×

) + (

×

) =

+

+

+

+

=

Ainsi, le nombre binaire 10110 correspond au nombre décimal 22.

#### Pour convertir un nombre binaire en décimal 

Multipliez chaque bit par une puissance de 2, en fonction de sa position (de droite à gauche). Additionnez les valeurs obtenues pour obtenir le nombre en base 10. Conversion d’un Nombre Décimal en Nombre Octal La conversion d’un nombre décimal (base 10) en nombre octal (base 8) est une méthode courante en informatique pour simplifier la représentation des valeurs numériques, surtout en lien avec la gestion des systèmes et des permissions. Le système octal utilise huit chiffres (0 à 7) et repose sur des puissances de 8. Méthode de Conversion La conversion d’un nombre décimal en octal suit la méthode des divisions successives par 8 : Diviser le nombre décimal par 8 et noter le reste. Prendre le quotient obtenu et le diviser à nouveau par 8.

===== PAGE 25 =====

Répéter cette opération jusqu’à obtenir un quotient de 0. Le nombre octal est formé en lisant les restes de bas en haut, en commençant par le dernier reste obtenu jusqu'au premier. Exemple : Conversion du Nombre Décimal 156 en Octal

#### Prenons l’exemple de la conversion du nombre décimal 156 en octal 

156 ÷ 8 = 19, reste 4 19 ÷ 8 = 2, reste 3 2 ÷ 8 = 0, reste 2 En lisant les restes de bas en haut, on obtient le nombre octal 234. Ainsi, 156 en base 10 est égal à 234 en base 8.

#### Pour convertir un nombre décimal en octal 

Divisez le nombre par 8 et notez le reste. Répétez avec le quotient jusqu'à obtenir 0. Lisez les restes de bas en haut pour obtenir le nombre en base 8 Conversion d’un Nombre Octal en Nombre Décimal La conversion d’un nombre octal (base 8) en nombre décimal (base 10) s’appuie sur les puissances de 8. Chaque chiffre dans un nombre octal représente une puissance de 8, en partant de la droite (position 0) vers la gauche. Méthode de Conversion Pour convertir un nombre octal en nombre décimal, on utilise les étapes suivantes : Identifiez les positions des chiffres dans le nombre octal, en commençant par la droite (le premier chiffre est la position 0). Multipliez chaque chiffre par

élevé à la puissance de sa position. Additionnez les produits obtenus pour obtenir le nombre en base 10. Exemple : Conversion du Nombre Octal 234 en Décimal Prenons le nombre octal 234 et convertissons-le en base 10.

#### En partant de la droite, on note la position de chaque chiffre 

Le chiffre le plus à droite (4) est à la position 0 Le chiffre suivant (3) est à la position 1 Le chiffre le plus à gauche (2) est à la position 2 On multiplie chaque chiffre par

#### à la puissance de sa position 

(

×

===== PAGE 26 =====

) + (

×

) + (

×

)

#### En simplifiant les calculs 

(

×

) + (

×

) + (

×

) =

+

+

=

Ainsi, le nombre octal 234 correspond au nombre décimal 156.

#### Pour convertir un nombre octal en décimal 

Multipliez chaque chiffre par une puissance de 8, selon sa position. Additionnez les valeurs obtenues pour obtenir le nombre en base 10.

===== PAGE 27 =====

Conversion d’un Nombre Décimal en Nombre Hexadécimal Le système de numération hexadécimal est une base de 16 qui utilise les chiffres de 0 à 9 et les lettres A à F pour représenter les valeurs de 0 à 15. Cette base est couramment utilisée en informatique pour représenter des valeurs binaires de façon plus compacte, car chaque chiffre hexadécimal équivaut à quatre bits binaires. Méthode de Conversion La conversion d’un nombre décimal en hexadécimal se fait en utilisant la méthode des divisions

#### successives par 16 

Divisez le nombre décimal par 16 et notez le reste (qui sera compris entre 0 et 15). Si le reste est 10, 11, 12, 13, 14, ou 15, remplacez-le par les lettres hexadécimales correspondantes : A, B, C, D, E, et F. Prenez le quotient obtenu et divisez-le à nouveau par 16. Répétez l’opération jusqu’à ce que le quotient soit 0. Le nombre hexadécimal final est obtenu en lisant les restes de bas en haut, en commençant par le dernier reste obtenu jusqu'au premier. Exemple : Conversion du Nombre Décimal 254 en Hexadécimal Convertissons le nombre décimal 254 en hexadécimal. 254 ÷ 16 = 15, reste 14 (14 correspond à la lettre E en hexadécimal). 15 ÷ 16 = 0, reste 15 (15 correspond à la lettre F en hexadécimal). En lisant les restes de bas en haut, on obtient le nombre hexadécimal FE. Ainsi, 254 en base 10 est égal à FE en base 16.

#### Pour convertir un nombre décimal en hexadécimal 

Divisez le nombre par 16 et notez le reste. Remplacez les restes supérieurs à 9 par les lettres correspondantes (A à F). Lisez les restes de bas en haut pour obtenir le nombre hexadécimal. Conversion d’un Nombre Hexadécimal en Nombre Décimal Le système hexadécimal est une base de 16, utilisant les chiffres de 0 à 9 et les lettres A à F (A pour 10, B pour 11, jusqu'à F pour 15). La conversion d’un nombre hexadécimal en nombre décimal s’appuie sur les puissances de 16, en attribuant une puissance à chaque position de droite à gauche. Méthode de Conversion Pour convertir un nombre hexadécimal en nombre décimal, on suit ces étapes : Identifiez les positions des chiffres hexadécimaux, en commençant par la droite (la première position est 0). Multipliez chaque chiffre par

16 élevé à la puissance correspondant à sa position.

===== PAGE 28 =====

Additionnez les produits obtenus pour obtenir le nombre décimal. Exemple : Conversion du Nombre Hexadécimal 3F en Décimal Prenons l'exemple du nombre hexadécimal 3F et convertissons-le en base 10.

#### En partant de la droite, identifions la position de chaque chiffre 

Le chiffre F (qui vaut 15 en décimal) est à la position 0. Le chiffre 3 est à la position 1. Multiplions chaque chiffre par

#### à la puissance de sa position 

(

×

) + (

×

)

#### En simplifiant les calculs 

(

×

) + (

×

) =

+

=

Ainsi, le nombre hexadécimal 3F correspond au nombre décimal 63.

#### Pour convertir un nombre hexadécimal en décimal 

Multipliez chaque chiffre hexadécimal par une puissance de 16 en fonction de sa position. Additionnez les valeurs obtenues pour obtenir le nombre en base 10.

===== PAGE 29 =====

Les Différentes Unités Informatiques Dans le monde informatique, la représentation et la manipulation des données sont au cœur de l’activité des systèmes et des réseaux. Les unités informatiques sont essentielles pour quantifier la taille des informations, la mémoire et la capacité de stockage. Ces unités suivent un système de notation en base 2 ou base 10 pour représenter les données et sont divisées en plusieurs échelles, chacune représentant une quantité précise d’informations. Les Bits et les Octets Le bit (b) est la plus petite unité de mesure en informatique. Il représente une valeur binaire unique, soit 0 ou 1, correspondant à un état électrique de marche ou d’arrêt. L’octet (B) est constitué de 8 bits. Il est souvent utilisé pour représenter un caractère ou une petite unité d’information. Par exemple, une lettre dans un fichier texte simple peut occuper environ 1 octet. Les Multiples de l’Octet Les unités supérieures sont basées sur des multiples de l’octet pour permettre de mesurer de plus grandes quantités d’informations. Il existe deux systèmes de notation principaux : le système binaire (en base 2), utilisé en informatique, et le système décimal (en base 10), plus courant dans la vie quotidienne. Système Binaire (Base 2) Kio (Kibioctet) : 1 Kio =

octets, soit 1 024 octets. Mio (Mebioctet) : 1 Mio =

octets, soit 1 048 576 octets. Gio (Gibioctet) : 1 Gio =

octets, soit environ 1,07 milliard d’octets. Tio (Tebioctet) : 1 Tio =

octets , soit environ 1,1 billion d’octets. Système Décimal (Base 10) Ko (Kilooctet) : 1 Ko =

octets, soit 1 000 octets. Mo (Megaoctet) : 1 Mo =

octets, soit 1 000 000 octets. Go (Gigaoctet) : 1 Go =

===== PAGE 30 =====

octets, soit 1 milliard d’octets. To (Téraoctet) : 1 To =

octets, soit 1 billion d’octets. Ces systèmes créent parfois une confusion, notamment dans le domaine des disques durs ou des supports de stockage, où les fabricants utilisent souvent les valeurs décimales (base 10) tandis que les systèmes d’exploitation se réfèrent aux valeurs binaires (base 2). Unités de Vitesse de Transmission Dans les réseaux, il est également essentiel de mesurer la vitesse de transfert des données : bps (bits par seconde) : La vitesse de base pour mesurer le transfert de données. Kbps, Mbps, Gbps : Correspondent respectivement à 1 000, 1 000 000 et 1 000 000 000 bits par seconde. Ces unités sont utilisées pour quantifier le débit d’une connexion réseau, par exemple lors du transfert de fichiers ou du streaming de vidéos. Conversion de la base 10 à la base 2, première méthode Pour convertir un nombre décimal en nombre binaire, on utilise un tableau. Ce tableau binaire va se limiter aux huit premières valeurs représentant un octet. Il peut être agrandi pour la conversion de nombre décimal supérieur à 255. Prendre un nombre décimal : ex : 156 Puis procéder par soustraction donnant un résultat ≥ 0 156 - 128 = 28 28 est ≥ 0 donc j’inscris 1 dans la colonne 128 28 - 64 = 36 36 est ≤ 0 donc j’inscris 0 dans la colonne 64 28 - 32 = 4 4 est ≤ 0 donc j’inscris 0 dans la colonne 32 28 - 16 = 12 12 est ≥ 0 donc j’inscris 1 dans la colonne 16 12 - 8 = 4 4 est ≥ 0 donc j’inscris 1 dans la colonne 8 4 - 4 = 0 0 est ≥ 0 donc j’inscris 1 dans la colonne 4

===== PAGE 31 =====

La conversion est terminée mais le tableau n’est pas rempli alors on le complète avec des 0, ici des 0 sont rajoutés dans les colonnes 2 et 1 Le résultat 156 en décimal est égal à 10010100 en binaire Conversion de la base 10 à la base 2, deuxième méthode Pour convertir un nombre décimal en nombre binaire, on utilise un tableau. Ce tableau binaire va se limiter aux huit premières valeurs représentant un octet. Il peut être agrandi pour la conversion de nombre décimal supérieur à 255. Prendre un nombre décimal ex : 235 Puis procéder par addition donnant un résultat ≤ inférieur au nombre recherché : 0 + 128 = 128 128 est ≤ 235 donc j’inscris 1 dans la colonne 128 128 + 64 = 192 192 est ≤ 235 donc j’inscris 1 dans la colonne 64 192 + 32 = 224 224 est ≤ 235 donc j’inscris 1 dans la colonne 32 224 + 16 = 240 240 est ≥ 235 donc j’inscris 0 dans la colonne 16 224 + 8 = 232 232 est ≤ 235 donc j’inscris 1 dans la colonne 8 232 + 4 = 236 236 est ≥ 235 donc j’inscris 0 dans la colonne 4 232 + 2 = 234 234 est ≤ 235 donc j’inscris 1 dans la colonne 2 234 + 1 = 235 235 est ≤ 235 donc j’inscris 1 dans la colonne 1 Le résultat : 235 en décimal est égal à 1110 1011 en binaire

===== PAGE 32 =====

===== PAGE 33 =====

Quiz Kahoot QUIZ KAHOOT (30 QUESTIONS) 1. Combien de couches comporte le modèle OSI ? Réponse : 7 2. Quelle couche transmet les bits sous forme de signaux ? Réponse : Physique 3. Quel protocole est utilisé pour naviguer sur le Web ? Réponse : HTTP 4. Quel protocole est utilisé pour envoyer des emails ? Réponse : SMTP 5. Quel est le port standard HTTP ? Réponse : 80 6. Quel est le port standard HTTPS ? Réponse : 443 7. Une adresse MAC est utilisée à quelle couche ? Réponse : Liaison de données 8. Combien de bits contient un octet ? Réponse : 8 9. Quelle base utilise uniquement 0 et 1 ? Réponse : Binaire 10. Que signifie DNS ? Réponse : Domain Name System 11. Quel est le PDU de la couche Transport ? Réponse : Segment 12. Quel est le PDU de la couche Réseau ? Réponse : Paquet 13. Quel est le PDU de la couche Liaison ? Réponse : Trame 14. Quel protocole traduit une IP en MAC ? Réponse : ARP 15. Quel protocole est orienté connexion ? Réponse : TCP 16. Quel protocole est privilégié pour le streaming ? Réponse : UDP 17. Quel équipement travaille à la couche Réseau ? Réponse : Routeur 18. Quel câble utilise le même schéma aux deux extrémités ? Réponse : Câble droit 19. Un câble croisé relie principalement deux équipements du même type. 20. Quelle commande teste la connectivité réseau ? Réponse : ping 21. Convertir 25 en binaire. Réponse : 11001 22. Convertir 10110 en décimal. Réponse : 22 23. Convertir 156 en octal. Réponse : 234 24. Convertir 234 (octal) en décimal. Réponse : 156 25. Convertir 254 en hexadécimal. Réponse : FE 26. Convertir 3F en décimal. Réponse : 63 27. Combien vaut 1 Kio ? Réponse : 1024 octets 28. Combien vaut 1 Ko ? Réponse : 1000 octets 29. Quel protocole de routage est cité ? Réponse : OSPF 30. Lors de l'encapsulation, que fait une couche ? Réponse : Ajoute ses informations de contrôle

## cours kahoot module 1 et 2

Connaitre les couches du modèle OSI Manipuler les unités de mesure informatique Appréhender l’adressage IP Connaître la communication au sein d’un réseau Découvrir les premières commandes Modèle OSI : Une Structure en 7 Couches Le modèle OSI (Open Systems Interconnection) est une norme qui définit comment les communications se font entre deux systèmes sur un réseau. Ce modèle théorique est divisé en 7 couches distinctes, chaque couche ayant une fonction spécifique et communiquant avec celles situées directement au-dessus et en dessous d'elle.

Cette segmentation permet de structurer les processus réseau et de faciliter le développement et le débogage des protocoles réseau.

Le PDU (Protocol Data Unit) : Qu’est-ce que c’est ? Le PDU (Unité de Données de Protocole en français) est un terme utilisé dans le domaine des réseaux pour désigner une unité de données qui est échangée entre deux entités réseau dans le cadre d'une communication sur une couche spécifique du modèle OSI. Chaque couche du modèle OSI a son propre PDU, qui change en fonction du rôle et des tâches de la couche concernée. Le PDU comprend à la fois les données utilisateur et les informations de contrôle ajoutées par les protocoles de la couche pour garantir le bon acheminement des données sur le réseau.

Le PDU à travers les différentes couches du Modèle OSI Chaque couche du modèle OSI encapsule les données reçues de la couche supérieure en y ajoutant ses propres en-têtes (et éventuellement un pied de trame pour certaines couches) afin de former un nouveau PDU.

Encapsulation et Désencapsulation des PDU Chaque fois qu'une couche du modèle OSI reçoit des données de la couche supérieure, elle encapsule ces données dans un PDU en ajoutant des informations spécifiques à son rôle (adresses, numéro de séquence, contrôle d'erreur, etc.). Ce processus d'encapsulation se poursuit jusqu'à la couche physique, où les données sont converties en signaux et transmises sur le réseau.

À l'arrivée, le processus inverse se produit. Les données sont désencapsulées couche par couche, les informations ajoutées à chaque PDU étant retirées par la couche correspondante jusqu'à ce que les données d'origine soient reconstituées et livrées à l'application finale. PDU et SDU : Le Passage d’une Couche à l’Autre dans le Modèle OSI Dans le modèle OSI (Open Systems Interconnection), chaque couche a un rôle bien défini dans le traitement des données lors de la communication réseau. Le transfert de données entre ces couches implique deux concepts importants : le PDU (Protocol Data Unit) et le SDU (Service Data Unit).

PDU : C'est l'unité de données transmise d'une couche à une autre. Elle inclut les données utilisateur ainsi que les informations de contrôle propres à la couche qui traite le PDU. SDU : C'est l'unité de données fournie par une couche N+1 à la couche N. La couche N+1 donne des données brutes à la couche N pour qu'elle les prépare à la transmission.

Processus de Transformation : Du PDU au SDU et vice-versa Lorsqu'une couche (N+1) termine son travail sur les données, elle génère un PDU (par exemple, un segment pour la couche transport ou un paquet pour la couche réseau). Ce PDU devient alors le SDU pour la couche N, c'est-à-dire qu'il est transmis à la couche inférieure (la couche N) sous forme brute, sans aucune information spécifique à la couche N ajoutée.

Étapes principales

#### Le PDU de la couche N+1 devient le SDU de la couche N 

Lorsque la couche N+1 finit son travail, elle envoie son PDU à la couche N. La couche N considère alors ce PDU comme un SDU, une donnée à traiter.

#### Ajout du PCI (Protocol Control Information) 

La couche N ajoute son propre PCI (Protocol Control Information), qui contient des informations de contrôle comme les adresses, les numéros de séquence, les mécanismes de gestion d’erreur, etc. Cette étape est appelée encapsulation. Le PCI est essentiel car il permet à la couche N d’assurer ses responsabilités, par exemple le routage à la couche réseau ou la segmentation à la couche transport.

#### Formation d’un nouveau PDU 

Une fois que la couche N a ajouté son PCI au SDU, elle forme un nouveau PDU spécifique à sa propre couche. Ce PDU sera ensuite transmis à la couche inférieure (la couche N-1), où le même processus se répétera.

#### Exemple Concret (de la Couche Transport à la Couche Réseau) 

Prenons l'exemple du transfert d'un segment TCP (couche transport) à un paquet IP (couche réseau) :

Couche Transport (N+1) : La couche transport prépare un PDU appelé segment TCP, contenant les données applicatives et les informations de contrôle de la couche transport (numéro de séquence, ports source et destination, etc.).

Transmission à la Couche Réseau (N) : Ce segment TCP devient alors le SDU pour la couche réseau. La couche réseau reçoit ce SDU et doit maintenant y ajouter ses propres informations.

Ajout du PCI Réseau : La couche réseau ajoute son PCI, qui contient des informations importantes comme l’adresse IP source, l’adresse IP de destination, et d'autres données de routage.

Formation du Paquet IP (PDU) : Après l'ajout du PCI, le SDU de la couche réseau devient un nouveau PDU sous forme de paquet IP. Ce paquet sera ensuite transmis à la couche inférieure (couche liaison de données) pour être envoyé physiquement à travers le réseau.

SDU : C'est le bloc de données brutes provenant de la couche supérieure.

PCI : C'est l'information de contrôle ajoutée par la couche pour gérer l'acheminement et le traitement des données.

PDU : C'est le résultat final de l’encapsulation, après ajout du PCI au SDU. Ce PDU est ensuite transmis à la couche inférieure, où le processus recommence.

À chaque étape de la communication, les données sont encapsulées dans un nouveau PDU en fonction des exigences de la couche concernée, avant d'être finalement transmises sur le réseau sous forme de bits (à la couche physique).

Les Ports et Protocoles dans le Modèle OSI Dans le modèle OSI (Open Systems Interconnection), chaque couche joue un rôle bien défini dans le processus de communication réseau.

Les protocoles sont des ensembles de règles qui régissent la manière dont les données sont échangées à chaque niveau, tandis que les ports sont des identifiants numériques utilisés par les applications au sein de la couche transport pour distinguer les différentes communications.

Le modèle OSI comporte 7 couches, et chaque couche utilise des protocoles spécifiques pour effectuer ses tâches.

Les ports sont principalement utilisés à la couche transport (couche 4), mais les protocoles existent à toutes les couches, jouant un rôle crucial dans la communication entre systèmes.

1. Couche Physique (Physique) Rôle : Transmission des bits sous forme de signaux électriques, optiques ou radio à travers des supports physiques (câbles, fibres optiques, ondes radio, etc.). Protocoles : Cette couche ne comporte pas vraiment de protocoles au sens classique, mais plutôt des normes et spécifications physiques comme Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), ou encore Bluetooth, qui définissent la manière dont les bits sont transmis. Exemples

Ethernet Wi-Fi (802.11) 2. Couche Liaison de Données (Data Link) Rôle : Assurer une transmission fiable des trames entre deux équipements adjacents sur le même réseau. Elle gère les erreurs de transmission, la synchronisation des trames et l'accès au support physique.

#### Protocoles 

Ethernet (IEEE 802.3) : Protocole dominant pour les réseaux locaux câblés. Wi-Fi (IEEE 802.11) : Protocole pour les réseaux locaux sans fil. PPP (Point-to-Point Protocol) : Utilisé pour la communication entre deux nœuds réseau, souvent pour les connexions internet via modem. HDLC (High-Level Data Link Control) : Protocole pour les connexions série synchrone. 3. Couche Réseau (Network) Rôle : Responsable de l’acheminement des paquets entre les différents réseaux et de la gestion des adresses logiques (par exemple, adresses IP).

#### Protocoles 

`IP (Internet Protocol) : Le protocole principal pour l'acheminement des paquets sur l'Internet et d'autres réseaux.`

IPv4 : Version la plus répandue d'IP, utilisant des adresses 32 bits. IPv6 : Nouvelle version d'IP, avec des adresses 128 bits, pour répondre à l'épuisement des adresses IPv4. ICMP (Internet Control Message Protocol) : Utilisé pour envoyer des messages de diagnostic et de contrôle, comme les messages d'erreur ou de ping.

`ARP (Address Resolution Protocol) : Traduit les adresses IP en adresses MAC pour la communication au sein du même réseau local.`

OSPF (Open Shortest Path First) : Protocole de routage utilisé dans les réseaux internes pour déterminer le meilleur chemin. 4. Couche Transport (Transport) Rôle : Assurer une communication fiable de bout en bout entre les hôtes, gérant le contrôle d’erreurs, le flux et la segmentation des données. Ports : La couche transport utilise les ports pour identifier les différentes communications entre les applications. Un port est un identifiant numérique attribué à chaque application communicante (par exemple, HTTP utilise le port 80).

#### Protocoles 

TCP (Transmission Control Protocol) : Protocole orienté connexion, garantissant la livraison fiable des données dans le bon ordre. Il utilise des mécanismes comme le contrôle de flux et la gestion des erreurs. UDP (User Datagram Protocol) : Protocole non orienté connexion, plus rapide mais sans garantie de livraison des données (utilisé pour les flux audio/vidéo en temps réel). Exemples de ports

Port 22 : SSH (Secure Shell) pour l'administration distante sécurisée. Port 25 : SMTP (Simple Mail Transfer Protocol) pour l'envoi d'emails. Port 53 : DNS (Domain Name System) pour la résolution de noms de domaine. Port 67 et 68 : DHCP (Dynamic Host Configuration Protocol) pour l'attribution d'adresses IP dynamiques. Port 80 : HTTP pour le web. Port 443 : HTTPS pour les communications web sécurisées. Port 143 : IMAP (Internet Message Access Protocol) pour la gestion des emails sur un serveur distant. Port 389 : LDAP (Lightweight Directory Access Protocol) pour les services d'annuaire. Port 3389 : RDP (Remote Desktop Protocol) pour la prise en main à distance de bureaux Windows. Port 161 et 162 : SNMP (Simple Network Management Protocol) pour la gestion des équipements réseau (161 pour les requêtes, 162 pour les notifications). 5. Couche Session (Session) Rôle : Établir, gérer et terminer les sessions entre deux applications. Elle est aussi responsable de la synchronisation et de la reprise des échanges en cas d’interruption.

#### Protocoles 

RPC (Remote Procedure Call) : Permet à un programme d'exécuter des procédures sur un autre ordinateur. NetBIOS : Utilisé pour gérer les connexions et l’échange de données entre ordinateurs sur un réseau local. 6. Couche Présentation (Presentation) Rôle : Gérer la traduction des données entre le format utilisé par l'application et celui nécessaire pour la transmission réseau. Elle s’occupe également du chiffrement et de la compression des données.

#### Protocoles 

SSL (Secure Sockets Layer) et TLS (Transport Layer Security) : Protocoles de sécurité pour le chiffrement des communications (utilisés pour HTTPS). JPEG, MPEG : Protocoles de codage des données multimédia pour garantir leur bonne transmission. 7. Couche Application (Application) Rôle : Fournir des services réseau aux applications utilisées par l'utilisateur final. C'est ici que se situent les protocoles que nous utilisons quotidiennement pour le web, les emails, le transfert de fichiers, etc.

#### Protocoles 

HTTP/HTTPS (Hypertext Transfer Protocol / Secure) : Protocole utilisé pour naviguer sur le web. FTP (File Transfer Protocol) : Protocole de transfert de fichiers. SMTP (Simple Mail Transfer Protocol) : Utilisé pour l’envoi d’emails. DNS (Domain Name System) : Traduit les noms de domaine en adresses IP.

Exemple : l'encapsulation lors d'un envoi de mail 1. Couche Application (Couche 7) Rôle : L'utilisateur compose un email via une application de messagerie, et celui-ci est envoyé à travers le protocole SMTP (Simple Mail Transfer Protocol). Encapsulation : À ce niveau, les données brutes (l'email complet, y compris le texte et les pièces jointes) sont appelées APDU (Application Protocol Data Unit). L'APDU est la forme sous laquelle les données sont manipulées dans la couche Application, avant d'être transmises à la couche inférieure. L'APDU est ensuite transmis à la couche Présentation.

2. Couche Présentation (Couche 6) Rôle : La couche Présentation convertit les données dans un format standardisé pour la transmission, et peut aussi appliquer du chiffrement ou de la compression. Encapsulation : À ce niveau, l'APDU est encapsulé dans un PPDU (Presentation Protocol Data Unit). Si un chiffrement comme SSL ou TLS est utilisé, un en-tête spécifique sera ajouté à ce stade pour indiquer la méthode de cryptage. Le PPDU est ensuite transmis à la couche Session.

3. Couche Session (Couche 5) Rôle : La couche Session gère la communication entre l'application cliente (votre logiciel de messagerie) et le serveur de messagerie. Encapsulation : À cette couche, le PPDU est encapsulé dans un SPDU (Session Protocol Data Unit), qui contient des informations nécessaires à la gestion de la session, comme les mécanismes de synchronisation et les informations d'identification de session. Le SPDU est ensuite transmis à la couche Transport.

4. Couche Transport (Couche 4) Rôle : Cette couche est responsable du transport fiable des données entre l'hôte émetteur et le serveur de messagerie, en segmentant les données et en assurant le contrôle d’erreurs. Le protocole utilisé est généralement TCP pour garantir une transmission fiable. Encapsulation : Le SPDU est encapsulé dans un TPDU, également appelé Segment dans le cas de TCP. L'en-tête ajouté à cette couche contient des informations cruciales telles que le numéro de port (par exemple, port 25 pour SMTP), les numéros de séquence pour l'ordonnancement des segments, et les informations de contrôle d’erreurs. Les segments (TPDU) sont ensuite envoyés à la couche Réseau.

5. Couche Réseau (Couche 3) Rôle : Cette couche est responsable de l’acheminement des paquets à travers différents réseaux, en utilisant les adresses IP source et destination pour déterminer le chemin. Encapsulation : Le TPDU (Segment) est encapsulé dans un RPDU, ou paquet (PDU au niveau de la couche Réseau). L'en-tête ajouté à ce niveau contient les adresses IP de source et de destination, permettant au paquet de circuler à travers le réseau. Le RPDU (paquet) est ensuite transmis à la couche Liaison de Données.

6. Couche Liaison de Données (Couche 2) Rôle : La couche Liaison de Données assure la transmission fiable des données sur le lien physique, et gère les adresses MAC pour les communications entre deux appareils sur un même réseau. Encapsulation : Le RPDU (paquet) est encapsulé dans une LPDU, ou trame (PDU au niveau de la couche Liaison de Données). L'en-tête de la trame inclut les adresses MAC source et destination, ainsi que des informations de contrôle d’erreurs spécifiques au réseau local. La trame (LPDU) est ensuite envoyée à la couche Physique.

7. Couche Physique (Couche 1) Rôle : La couche Physique transforme la trame (LPDU) en bits (0 et 1) et les transmet sur le support physique sous forme de signaux électriques, optiques ou radio. Cette couche utilise des supports comme les câbles Ethernet ou les ondes Wi-Fi pour la transmission des bits. Encapsulation : À ce stade, aucune encapsulation supplémentaire n'est effectuée. Les bits sont simplement transmis à l'appareil destinataire. Déroulement du Processus de Réception Le serveur de messagerie destinataire reçoit les bits et, à travers un processus de désencapsulation, retire les en-têtes à chaque couche. Les bits sont convertis en trame (LPDU), puis en paquet (RPDU), et ainsi de suite, jusqu'à reconstituer l'APDU contenant l'email dans sa forme finale au niveau de la couche Application.

La Désencapsulation : Exemple de la Réception d’un Email Lorsque vous recevez un email, le processus de désencapsulation se déroule. Ce mécanisme inverse consiste à enlever les informations ajoutées par chaque couche lors de l'encapsulation à l’envoi, pour extraire les données brutes. À chaque couche, les en-têtes sont analysés et enlevés pour permettre aux données de remonter jusqu'à la couche Application.

#### Voici comment cela se passe pour un email reçu 

1. Couche Physique (Couche 1) Rôle : Les bits sont reçus sous forme de signaux électriques, optiques ou radio, selon le support physique utilisé (par exemple, câble Ethernet ou Wi-Fi). Désencapsulation : Ces bits sont transmis à la couche Liaison de Données pour être reconstitués en LPDU (trames). À ce niveau, aucun traitement spécifique n'est effectué sur le contenu des données, on ne fait que transmettre les bits pour être analysés par la couche supérieure. Les bits sont convertis en une trame et transmis à la couche Liaison de Données.

2. Couche Liaison de Données (Couche 2) Rôle : La couche Liaison de Données vérifie les informations ajoutées à la trame, comme les adresses MAC (source et destination) et les mécanismes de contrôle d'erreurs. Désencapsulation : La LPDU (trame) est analysée. Une fois la vérification de l’adresse MAC de destination effectuée (qui correspond à l'appareil récepteur), l'en-tête de la trame est enlevé. Ce qui reste est le RPDU, ou paquet. Le paquet (RPDU) est transmis à la couche Réseau.

3. Couche Réseau (Couche 3) Rôle : La couche Réseau gère le routage des paquets en fonction des adresses IP. Elle vérifie si l'adresse IP de destination correspond à l'adresse de l'ordinateur récepteur. Désencapsulation : Le RPDU (paquet) est analysé, et son en-tête IP est enlevé. Cette en-tête contient des informations comme l'adresse IP source et destination. Si l'adresse IP de destination correspond à l'ordinateur récepteur, le paquet est accepté et transmis à la couche Transport. Ce qui reste est le TPDU, ou Segment. Le segment est ensuite envoyé à la couche Transport.

4. Couche Transport (Couche 4) Rôle : La couche Transport est responsable de l'acheminement fiable des données. Elle vérifie des informations comme le numéro de port de destination et le contrôle d'erreurs pour assurer une transmission correcte. Désencapsulation : Le TPDU (Segment) est analysé, et l'en-tête TCP est enlevé. Cette en-tête contient des informations telles que le numéro de port (par exemple, port 25 pour SMTP), les numéros de séquence des segments, et les mécanismes de correction d'erreurs. Après l’enlèvement de cet en-tête, ce qui reste est le SPDU (Session Protocol Data Unit). Le SPDU est ensuite transmis à la couche Session.

5. Couche Session (Couche 5) Rôle : La couche Session gère l’établissement, la gestion et la terminaison de la session de communication entre le serveur de messagerie et le client. Désencapsulation : Le SPDU est analysé, et l'en-tête de la couche Session est enlevé, révélant les PPDU (Presentation Protocol Data Unit), qui sont ensuite transmis à la couche Présentation. 6. Couche Présentation (Couche 6) Rôle : Cette couche s’assure que les données sont dans un format approprié pour l'application de destination, en effectuant la décompression ou le déchiffrement si nécessaire. Désencapsulation : Le PPDU est analysé, et l’en-tête de la couche Présentation est enlevé. Si du chiffrement a été appliqué (par exemple via SSL ou TLS), cette couche s’occupe de déchiffrer les données avant de les transmettre à la couche Application sous forme d'APDU (Application Protocol Data Unit). 7. Couche Application (Couche 7) Rôle : La couche Application est responsable de la gestion des services réseau à destination des applications utilisateur, comme l’affichage de l'email dans un client de messagerie (Outlook, Thunderbird, etc.). Désencapsulation : Le APDU est enfin reçu et interprété. À ce niveau, l'email complet (texte, pièces jointes, etc.) est reconstitué et présenté à l'utilisateur via l'application de messagerie.

Analogie du modèle OSI avec le cheminement d'une lettre via un transporteur Détail de la communication d'un utilisateur souhaitant accéder à un site web La couche physique : Fondement du Modèle OSI Dans le modèle OSI, la couche Physique est la première couche, responsable de la transmission des données brutes sous forme de signaux physiques à travers divers supports de communication, comme les câbles, les ondes radio, ou encore la fibre optique. En d’autres termes, c’est elle qui transforme les informations en impulsions électriques, en signaux lumineux ou en ondes radio pour les envoyer d'un point à un autre sur le réseau. Elle est chargée de l’envoi et de la réception des bits de données sous forme de signaux. Elle s’assure que chaque bit est transmis avec précision d’un dispositif à un autre sans se soucier de l’interprétation de ces bits. Son travail est de fournir un canal de communication fiable, sur lequel les couches supérieures peuvent s’appuyer pour transférer des informations complexes.

Les fonctions de la couche physique

#### Elle assure plusieurs fonctions importantes, notamment 

Définition du support de transmission : Elle spécifie le type de support physique utilisé, qu'il s'agisse de câbles Ethernet, de fibres optiques ou de technologies sans fil comme le Wi-Fi. Cette couche dicte aussi les caractéristiques de ces supports, par exemple, la longueur maximale d'un câble ou la fréquence utilisée pour les signaux radio.

Encodage et synchronisation des bits : La couche physique encode les données en signaux compatibles avec le support de transmission. Elle permet également la synchronisation des bits pour que l’émetteur et le récepteur soient alignés sur le rythme des transmissions, garantissant ainsi une communication précise.

Débit de transfert : Elle contrôle le taux de transmission, c’est-à-dire la vitesse à laquelle les données sont envoyées, souvent mesurée en bits par seconde (bps). Ce débit varie en fonction de la capacité du support physique utilisé et peut être limité par les équipements en place.

Topologie physique du réseau : Elle définit la structure physique du réseau, comme la manière dont les différents périphériques sont interconnectés, que ce soit en étoile, en bus, en anneau ou en mesh (maillé).

Gestion des connexions physiques : La couche physique s’assure que les connexions physiques sont établies, maintenues et coupées selon les besoins. Elle supervise des aspects comme la détection de collision de signaux dans les réseaux partagés et la détection de l'état de la ligne (libre ou occupée).

La couche physique peut être comparée aux routes et voies de transport que nous utilisons pour nous déplacer d'un endroit à un autre. Par exemple, dans une autoroute, les voitures représentent les données, et les routes représentent le canal physique. La couche Physique se préoccupe seulement de fournir une route pour que les voitures passent, sans s'occuper du contenu transporté par chaque voiture. Matériel et Équipements de la Couche Physique Elle fait appel à divers équipements réseau pour transmettre les données, notamment :

Les câbles (Ethernet, fibre optique, coaxial) Les connecteurs (RJ45, par exemple) Les émetteurs et récepteurs radio pour les réseaux sans fil Les hubs et répéteurs, qui renforcent le signal sur les longues distances Les modems, qui convertissent les signaux numériques en signaux analogiques et vice versa La couche physique ne gère ni les erreurs ni la vérification de la destination des données ; elle se limite strictement au transport des bits. C’est pourquoi elle dépend des couches supérieures du modèle OSI pour assurer le bon fonctionnement de la communication réseau. Les Câbles Réseau : Types et Utilisations Dans les réseaux informatiques, les câbles sont essentiels pour permettre la transmission des données entre différents appareils, comme les ordinateurs, les commutateurs, ou encore les routeurs. L’un des types de câbles les plus utilisés est le câble à paires torsadées, qui se décline en plusieurs configurations selon le type de connexion souhaité : le câble droit et le câble croisé.

Couleurs associées aux cables à paires torsadéesCâble à Paires Torsadées (Twisted Pair Cable) Le câble à paires torsadées est un câble formé de fils de cuivre organisés en paires. Chaque paire de fils est torsadée pour réduire les interférences électromagnétiques. Ce type de câble est largement utilisé pour les réseaux Ethernet, notamment dans les catégories CAT5e, CAT6, et CAT6a, qui offrent des vitesses de transmission pouvant aller jusqu’à 10 Gbps.

Avantages des Paires Torsadées

Réduction des interférences : La torsion des paires de fils permet de réduire les interférences internes et externes. Fiabilité : Adapté aux environnements réseau courants avec des distances de câblage allant jusqu’à 100 mètres pour le câblage Ethernet standard. Types de Câbles à Paires Torsadées

#### Les câbles à paires torsadées peuvent être de deux types 

UTP (Unshielded Twisted Pair) : Sans blindage, il est léger et moins coûteux, mais plus vulnérable aux interférences. STP (Shielded Twisted Pair) : Avec un blindage pour chaque paire ou pour l’ensemble du câble, il est mieux protégé contre les interférences électromagnétiques, mais plus cher. Câble Droit (Straight-Through Cable) Un câble droit est un type de câble à paires torsadées dans lequel les fils suivent exactement le même schéma de connexion aux deux extrémités du câble, en utilisant un des standards de câblage (T568A ou T568B). Ce câble est utilisé pour connecter des appareils de types différents dans un réseau.

Utilisation du Câble Droit

#### Le câble droit est couramment utilisé pour les connexions suivantes 

Ordinateur vers commutateur (switch) Ordinateur vers routeur Commutateur vers routeur En général, le câble droit sert à relier des équipements qui n’appartiennent pas à la même catégorie, comme un poste de travail à un commutateur.

Schéma de câblage d’un Câble Droit Pour un câble droit, chaque fil est connecté dans le même ordre aux deux extrémités du câble. Par exemple, dans le standard T568B, les fils suivent cet ordre aux deux extrémités :

Blanc/orange Orange Blanc/vert Bleu Blanc/bleu Vert Blanc/marron Marron Câble Croisé (Crossover Cable)

Le câble croisé est un autre type de câble à paires torsadées, où les fils sont croisés pour permettre une communication directe entre deux appareils de même type, sans passer par un commutateur ou un routeur.

Utilisation du Câble Croisé

#### Le câble croisé est utilisé pour relier directement 

Deux ordinateurs Deux commutateurs Deux routeurs Le but est d’inverser les connexions des fils pour que la sortie (transmission) d’un appareil soit reliée à l’entrée (réception) de l’autre. Cela permet aux deux appareils de communiquer directement entre eux.

Schéma de câblage d’un Câble Croisé Dans un câble croisé, un côté utilise le schéma T568A, et l’autre côté utilise le schéma T568B. Cela crée un croisement entre les fils de transmission et de réception :

#### Extrémité T568A 

Blanc/vert Vert Blanc/orange Bleu Blanc/bleu Orange Blanc/marron Marron

#### Extrémité T568B 

Blanc/orange Orange Blanc/vert Bleu Blanc/bleu Vert Blanc/marron Marron Avec ce câblage, les fils de transmission (TX) d’un appareil sont connectés aux fils de réception (RX) de l’autre appareil, permettant ainsi une communication bidirectionnelle.

Choisir le Bon Câble Le choix entre un câble droit et un câble croisé dépend des équipements à connecter :

Câble Droit : Utilisé pour connecter des appareils de types différents (par exemple, un ordinateur et un commutateur). Câble Croisé : Utilisé pour connecter des appareils de même type (par exemple, deux ordinateurs directement entre eux). Cependant, les équipements réseau modernes, comme les commutateurs et les cartes réseau, intègrent souvent la fonction Auto MDI-X qui détecte automatiquement le type de câble et ajuste les connexions en conséquence. Cela permet l'utilisation d’un câble droit à la place d’un câble croisé, même pour des appareils de même type.

Conclusion La couche Physique est donc la base de toute communication réseau. Elle fournit le support essentiel permettant aux couches supérieures de transmettre des informations en assurant la conversion des données en signaux, l’encodage des bits, la synchronisation et le débit de transmission. Bien que son rôle soit limité à la transmission des bits, c’est une couche cruciale, car sans elle, aucune communication ne pourrait avoir lieu entre les dispositifs. La couche Liaison de Données : Fondement du transfert fiable Dans le modèle OSI, la couche Liaison de données (ou Data Link Layer) est la deuxième couche, située juste au-dessus de la couche Physique. Son rôle principal est de fournir un transfert de données fiable entre deux dispositifs connectés sur un même réseau local. Elle permet de détecter et parfois corriger les erreurs de transmission, et garantit que les données envoyées par un émetteur sont correctement reçues par le récepteur sur le réseau local. Elle s'assure que les données peuvent être transférées sans erreurs au niveau de la trame entre deux périphériques connectés physiquement. Ce processus inclut l’encapsulation des paquets reçus de la couche Réseau sous forme de trames en ajoutant un en-tête et une fin de trame pour en définir les limites et les contrôles nécessaires. Elle définit également les adresses MAC, assurant ainsi l'identification des équipements connectés sur un réseau local.

Les Deux Sous-couches de la couche liaison La couche Liaison est souvent subdivisée en deux sous-couches, chacune ayant des responsabilités spécifiques :

Sous-couche de Contrôle de Liaison Logique (LLC) : La sous-couche LLC gère les connexions logiques entre les appareils et permet à plusieurs protocoles réseau (par exemple, IP ou IPX) de fonctionner sur un même support physique. Elle est responsable de l’identification des protocoles utilisés pour chaque trame et du multiplexage des protocoles.

Sous-couche de Contrôle d’Accès au Support (MAC) : La sous-couche MAC contrôle l’accès au support physique. Elle gère la méthode d’accès (par exemple, CSMA/CD dans les réseaux Ethernet) et est responsable de l’adressage physique (adresse MAC), qui identifie de manière unique chaque appareil sur le réseau.

Les Fonctions de la Couche Liaison de Données La couche Liaison de données assure plusieurs fonctions essentielles au transfert fiable des informations :

Encapsulation en trames : Les données reçues de la couche Réseau sont divisées en trames. Une trame est une unité de données spécifique à cette couche, contenant à la fois les données (paquets) et les informations de contrôle (en-têtes et fin de trame).

Contrôle d’erreurs : Elle détecte et, dans certains cas, corrige les erreurs qui pourraient survenir pendant la transmission. Cela se fait grâce à des techniques comme les bits de parité, le contrôle de redondance cyclique (CRC) ou les codes de Hamming.

Contrôle de flux : La couche Liaison peut ajuster le flux de données pour éviter une surcharge de l'équipement récepteur. Elle garantit que les données ne sont pas envoyées plus rapidement que le récepteur ne peut les traiter.

Adressage MAC : Elle utilise les adresses MAC (Media Access Control) pour identifier les dispositifs de façon unique sur le réseau. Chaque trame comporte une adresse MAC source et une adresse MAC de destination, permettant aux trames d'atteindre les bons dispositifs.

Contrôle d’accès au support : En réseaux partagés (comme Ethernet), cette couche décide quel appareil peut émettre des données à un moment donné, évitant ainsi les collisions.

On peut comparer la couche Liaison à un service postal de tri local. Imaginons qu'une lettre arrive à un centre de tri où elle est identifiée (grâce aux adresses) et contrôlée pour vérifier qu'elle est complète (contrôle d’erreurs). Ce centre de tri vérifie ensuite le bon acheminement vers la destination locale, sans s’occuper des étapes plus lointaines (relevant de la couche Réseau). Équipements Reliés à la Couche Liaison La couche Liaison de données fait appel à différents équipements de réseau, tels que :

Les commutateurs (switches) : qui fonctionnent en utilisant les adresses MAC pour transférer les trames entre les dispositifs sur le même réseau local. Les ponts (bridges) : qui relient plusieurs segments de réseau en opérant au niveau des adresses MAC. Exemple Pratique de Fonctionnement Imaginons un ordinateur A qui envoie un fichier à un ordinateur B sur le même réseau local :

Encapsulation en trame : L'ordinateur A encapsule les données en ajoutant un en-tête contenant l'adresse MAC de l’ordinateur B, ainsi qu'un contrôle de redondance pour s'assurer que les données ne sont pas altérées en chemin.

Contrôle d’accès au support : Si plusieurs appareils veulent émettre en même temps, la sous-couche MAC décide qui envoie la première trame pour éviter les collisions.

Transmission et réception : La trame est envoyée à l’ordinateur B, qui vérifie que l'adresse MAC de destination lui correspond, puis analyse le contenu pour vérifier s'il n’y a pas d’erreurs.

Confirmation : Si tout est en ordre, la trame est acceptée, et le transfert est réussi.

La couche Liaison est limitée à la communication entre dispositifs sur le même réseau local. Pour les communications inter-réseaux, elle dépend de la couche Réseau (couche 3), qui permet le routage des données vers d'autres réseaux. La couche Liaison de données joue un rôle essentiel dans la fiabilité de la communication locale. En assurant l'encapsulation des données en trames, la gestion des erreurs et le contrôle d'accès au support, elle garantit que les données peuvent circuler correctement au sein du même réseau local. Grâce à elle, les données passent de la couche Physique à la couche Réseau de manière ordonnée, avec un contrôle efficace et sécurisé. La Couche Réseau : Le Routage des Données Dans le modèle OSI, la couche Réseau (ou Network Layer) est la troisième couche, jouant un rôle crucial dans la transmission des données à travers différents réseaux. Sa fonction principale est de déterminer la manière dont les données sont envoyées d'un appareil à un autre, même lorsqu'ils sont situés sur des réseaux différents. La couche Réseau est responsable du routage des paquets de données, de l'adressage logique et de la gestion de la congestion sur le réseau. La couche Réseau s'assure que les données (sous forme de paquets) peuvent être transférées entre les dispositifs sur des réseaux distincts. Elle utilise des adresses logiques (généralement des adresses IP) pour identifier les sources et les destinations, ce qui lui permet d'acheminer les paquets de manière efficace et sécurisée.

Les Fonctions de la Couche Réseau

#### La couche Réseau remplit plusieurs fonctions essentielles 

Routage : Le routage consiste à déterminer le chemin optimal que les paquets de données doivent emprunter pour atteindre leur destination. Cela implique l'utilisation d'algorithmes de routage qui prennent en compte différents critères, comme la distance, la bande passante et la congestion du réseau.

Adressage : La couche Réseau utilise des adresses IP pour identifier de manière unique chaque appareil sur le réseau. Contrairement aux adresses MAC qui sont physiques et fixes, les adresses IP peuvent être dynamiques (attribuées par DHCP) ou statiques.

Fragmentation et Réassemblage : Si un paquet de données est trop volumineux pour être transmis sur un réseau donné, la couche Réseau peut le fragmenter en paquets plus petits. Ces fragments sont ensuite réassemblés à la destination pour former le paquet original.

Contrôle de la congestion : La couche Réseau peut également gérer la congestion du réseau en contrôlant le flux de paquets. Elle surveille l'état du réseau et ajuste les transmissions en conséquence pour éviter de saturer les liaisons.

Gestion des erreurs : Bien que le contrôle des erreurs soit principalement effectué par la couche Liaison, la couche Réseau peut également détecter certains types d'erreurs lors du routage et prendre des mesures pour les corriger ou les signaler.

Protocoles Associés à la Couche Réseau Plusieurs protocoles fonctionnent au sein de la couche Réseau, les plus connus étant :

Internet Protocol (IP) : C'est le principal protocole de la couche Réseau, responsable de l’adressage et du routage des paquets sur Internet. Il existe deux versions principales : IPv4 et IPv6. IPv4 utilise des adresses sur 32 bits, tandis qu'IPv6 utilise des adresses sur 128 bits, permettant un plus grand nombre d'adresses uniques.

Internet Control Message Protocol (ICMP) : Utilisé pour les messages de contrôle et de diagnostic, comme les pings, ICMP aide à vérifier la connectivité et à signaler des erreurs.

Routing Information Protocol (RIP) et Open Shortest Path First (OSPF) : Protocoles de routage qui permettent aux routeurs d'échanger des informations sur les chemins disponibles et d'optimiser le routage des paquets.

Pour mieux comprendre le rôle de la couche Réseau, imaginez-la comme le système postal. Lorsqu'un colis est envoyé d'un pays à un autre, le système postal doit déterminer le meilleur itinéraire pour acheminer le colis à sa destination, en tenant compte des différents modes de transport (avion, camion, train) et des adresses (identification du destinataire). Équipements Associés à la Couche Réseau La couche Réseau utilise plusieurs équipements pour réaliser ses fonctions :

Routeurs : Dispositifs qui acheminent les paquets entre différents réseaux. Ils prennent des décisions de routage basées sur les adresses IP et les tables de routage.

Passerelles : Dispositifs qui relient différents réseaux (par exemple, un réseau local à Internet) et peuvent effectuer des traductions de protocole.

La couche Réseau ne s'occupe pas de la transmission physique des données, cela étant pris en charge par la couche Liaison et la couche Physique. De plus, bien qu'elle gère le routage, elle ne garantit pas la livraison des paquets (ce rôle est dévolu à la couche Transport). La couche Réseau joue un rôle fondamental dans la transmission des données à travers différents réseaux. En gérant le routage, l'adressage et la fragmentation des paquets, elle assure que les données parviennent à leur destination correcte de manière efficace. Une compréhension approfondie de cette couche est essentielle pour quiconque souhaite travailler dans le domaine des réseaux informatiques. La Couche Transport : La Gestion Fiable de la Communication Dans le modèle OSI, la couche Transport (ou Transport Layer) est la quatrième couche, située entre la couche Réseau et la couche Session. Elle est chargée d’assurer une transmission fiable et efficace des données entre deux appareils connectés au réseau. Elle fournit des services de gestion de la communication et veille à ce que les données envoyées par l’émetteur soient reçues correctement et dans le bon ordre par le récepteur. La couche Transport assure que les données peuvent être transférées entre deux points de manière fiable, même si le réseau est sujet à des erreurs, des pertes de paquets ou des variations de débit. Elle introduit les notions de segments (unité de données spécifique à cette couche) et de numérotation pour garantir que les données sont reconstituées dans le bon ordre à l’arrivée.

Les Fonctions de la Couche Transport La couche Transport remplit plusieurs fonctions essentielles pour assurer la qualité et la fiabilité des communications :

Segmentation et Réassemblage : Les données provenant de la couche Session sont découpées en segments avant d’être envoyées sur le réseau. Chaque segment est numéroté, ce qui permet à la couche Transport du récepteur de réassembler les segments dans le bon ordre.

Contrôle de Flux : La couche Transport ajuste la vitesse de transmission des données pour éviter de saturer le récepteur. Cela permet de contrôler la quantité de données envoyée en fonction de la capacité de réception.

Contrôle d’Erreur : Les segments sont accompagnés de vérifications d’erreurs pour s’assurer qu’ils ne sont pas corrompus pendant le transport. Si une erreur est détectée, le segment peut être renvoyé.

Gestion des Connexions : La couche Transport établit, maintient et termine les connexions logiques entre les applications des appareils communicants. Cela inclut la gestion des sessions de connexion et la détection des connexions coupées.

Multiplexage : Elle permet à plusieurs applications de partager la même connexion réseau en distinguant les flux de données grâce à l’utilisation de ports. Cela permet à différentes applications de s'exécuter en simultané sans conflit.

Protocoles Associés à la Couche Transport Les protocoles de la couche Transport sont responsables de la gestion des connexions et de la fiabilité des communications. Les principaux sont :

TCP (Transmission Control Protocol) : Un protocole orienté connexion, qui garantit la livraison des segments dans le bon ordre et sans erreurs. TCP assure une communication fiable, idéale pour les applications nécessitant une transmission intégrale, comme le transfert de fichiers ou l’affichage de pages web.

UDP (User Datagram Protocol) : Un protocole sans connexion, plus léger que TCP, qui n’assure pas le suivi de l’ordre ou de l’intégrité des paquets. UDP est utilisé pour des applications en temps réel (comme le streaming vidéo ou la VoIP) où la rapidité prime sur la fiabilité.

Exemple Pratique : Envoi d’un Fichier Pour illustrer le rôle de la couche Transport, imaginons l'envoi d'un fichier depuis un ordinateur A vers un ordinateur B :

Segmentation : Le fichier est découpé en segments par la couche Transport de l'ordinateur A, et chaque segment reçoit un numéro.

Transmission et Contrôle d’Erreur : Chaque segment est envoyé avec un code de contrôle. Si un segment est perdu ou corrompu, l'ordinateur B peut demander à A de le renvoyer.

Réassemblage : Une fois tous les segments reçus, la couche Transport de l'ordinateur B les réassemble en un fichier complet et vérifie qu’ils sont dans le bon ordre.

Port et Multiplexage La couche Transport utilise les numéros de port pour identifier les applications d’envoi et de réception. Par exemple, le port 80 est souvent utilisé pour les requêtes HTTP (web), et le port 443 pour le HTTPS (web sécurisé). Ainsi, plusieurs applications peuvent fonctionner simultanément sur le même appareil sans interférence.

Avantages et Inconvénients de TCP et UDP TCP garantit une communication fiable avec correction d’erreur, mais peut introduire de la latence car il vérifie que chaque segment est reçu correctement. Il est idéal pour des applications où l’intégrité des données est critique.

UDP, en revanche, est plus rapide car il n’implémente pas de vérification de réception des segments, mais il peut entraîner des pertes de données. Ce protocole est souvent choisi pour des applications de temps réel où quelques pertes de paquets sont acceptables pour une transmission plus rapide.

Équipements Reliés à la Couche Transport La couche Transport fonctionne principalement dans le logiciel, par exemple au niveau des systèmes d’exploitation et des applications réseau, sans impliquer d’équipement matériel spécifique comme les routeurs ou commutateurs (relevant des couches inférieures). Cependant, des équipements comme les firewalls utilisent la couche Transport pour filtrer le trafic selon les numéros de ports, ce qui contribue à la sécurité réseau.

La couche Transport est essentielle pour la fiabilité et le contrôle des communications. En gérant la segmentation, le contrôle d’erreur, le flux et le multiplexage, elle permet aux données de transiter entre les applications de manière fiable et organisée. Elle assure une expérience utilisateur cohérente et de haute qualité en prenant en compte les besoins spécifiques des applications. Cisco Packet Tracer Ce logiciel permet de créer, configurer et simuler des topologies de réseau sans nécessiter de matériel physique, offrant ainsi un environnement de formation interactif et flexible.

Il permet aux utilisateurs de concevoir et de tester différents types de réseaux.

Principales Fonctions

#### Voici les principales fonctionnalités de cet outil 

Simulation de Réseau : Cisco Packet Tracer permet de simuler un large éventail de dispositifs réseau (routeurs, commutateurs, pare-feu, etc.), des protocoles et des technologies réseau comme les VLAN, OSPF, et le routage dynamique. Cela permet d’apprendre comment configurer ces dispositifs sans avoir accès à du matériel coûteux.

#### Mode Simulation et Mode Temps Réel 

En mode Temps Réel, les paquets de données circulent en continu comme dans un réseau réel, permettant d’observer les flux de communication en temps réel. En mode Simulation, on peut suivre chaque étape de la transmission des paquets, visualiser les processus de routage et de commutation, et observer comment chaque couche du modèle OSI intervient. Ce mode est particulièrement utile pour l’analyse détaillée des échanges réseau. Configuration CLI : Packet Tracer permet d’utiliser l’interface en ligne de commande (CLI) pour configurer les dispositifs Cisco. Cela aide les utilisateurs à pratiquer les commandes Cisco IOS (Internetwork Operating System) et à se préparer aux certifications Cisco, comme le CCNA (Cisco Certified Network Associate).

Scénarios et Tests de Réseau : Les utilisateurs peuvent créer des scénarios de réseau variés, tester des configurations et même diagnostiquer des problèmes réseau en utilisant des outils intégrés comme le ping, le traceroute, et les captures de paquets.

Collaboration et Apprentissage à Distance : Cisco Packet Tracer dispose de fonctionnalités pour l’apprentissage collaboratif. Les étudiants peuvent travailler ensemble sur des projets en réseau et partager des fichiers Packet Tracer (.pkt) pour collaborer ou pour que les instructeurs évaluent leur travail.

Environnement de Programmation IoT : Le logiciel inclut des composants IoT (Internet of Things), permettant aux utilisateurs de créer des réseaux incluant des capteurs et des dispositifs intelligents, tout en configurant leurs interactions.

Utilisation Pédagogique de Cisco Packet Tracer Dans le cadre de l'apprentissage en réseau, Packet Tracer est un outil pédagogique qui aide à :

Visualiser les Concepts Réseau : Il facilite la compréhension des concepts abstraits, comme le routage, le DNS, DHCP, et les couches du modèle OSI, en les rendant visuels et interactifs. Pratiquer les Configurations : Les utilisateurs peuvent pratiquer les configurations réseau et développer des compétences pratiques, ce qui les prépare efficacement pour des environnements de production ou des examens de certification. Tester et Diagnostiquer : Grâce aux modes de simulation, les utilisateurs peuvent tester différents scénarios et apprendre à diagnostiquer les problèmes réseau, comme les défaillances de connexion ou les erreurs de configuration. La structure en 7 couches 1. Couche Physique (Physique) C'est la couche la plus basse du modèle. Elle est responsable de la transmission des données sous forme de signaux électriques ou optiques à travers le support de transmission (câbles, fibres optiques, ondes radio, etc.). Les équipements de cette couche incluent les répéteurs, les hubs et les câbles.

2. Couche Liaison de Données (Data Link) Elle assure un transfert fiable des données entre deux équipements adjacents, en gérant les erreurs de transmission et en structurant les données en trames. Cette couche comprend des sous-couches comme le MAC (Media Access Control) et le LLC (Logical Link Control). Les commutateurs (switches) opèrent souvent à ce niveau.

3. Couche Réseau (Network) Cette couche est responsable du routage des données à travers différents réseaux et de la gestion des adresses logiques (comme les adresses IP). Elle permet de choisir le chemin le plus approprié pour transmettre les paquets d'une source à une destination. Les routeurs sont des équipements de la couche réseau.

4. Couche Transport (Transport) Elle gère le contrôle de bout en bout des connexions et s'assure que les données arrivent sans erreur, dans le bon ordre, et sans duplication. Les protocoles couramment associés à cette couche sont TCP (Transmission Control Protocol) et UDP (User Datagram Protocol).

5. Couche Session (Session) Cette couche établit, gère et termine les sessions entre les applications sur les différentes machines. Elle est également chargée de synchroniser les échanges, assurant ainsi une communication fluide.

6. Couche Présentation (Presentation) Elle est souvent appelée "traductrice de données". Son rôle est de convertir les données en un format que l'application peut comprendre, gérer la compression des données et la cryptographie.

Par exemple, elle peut convertir des fichiers de texte brut en un format sécurisé.

7. Couche Application (Application) C'est la couche la plus élevée, où se trouvent les applications réseau que nous utilisons tous les jours (navigateur web, client de messagerie, etc.). Elle fournit des services directement aux utilisateurs, tels que l'accès à des fichiers, la gestion des bases de données ou encore l'envoi d'e-mails.

### Module 2 - Les unités informatiques

Objectifs Les bases de numération Principe de numération décimale Principe de numération binaire Principe de numération octale Principe de numération héxadécimale Equivalence des valeurs Conversion décimale/binaire Conversion binaire/décimale Conversion décimale/octale Conversion octale/décimale Conversion décimale/hexadécimale Conversion hexadécimale/décimale Les différentes unités informatiques Les préfixes et équivalence des unités Démonstration - Les conversions

Connaître le principe de numération Effectuer des conversions Comprendre les unités informatiques

En informatique, la numération est le système utilisé pour représenter les nombres. Les bases les plus courantes sont la base binaire (base 2), la base octale (base 8), la base décimale (base 10), et la base hexadécimale (base 16).

En base binaire, les nombres sont représentés avec des 0 et des 1 (bits). C’est la base fondamentale en informatique, car elle correspond directement au fonctionnement des circuits électroniques, qui utilisent deux états : activé (1) et désactivé (0).

La base octale utilise les chiffres de 0 à 7. Elle est parfois employée pour représenter de grands nombres binaires de manière plus compacte.

La base décimale est la base standard utilisée par les humains, allant de 0 à 9. En informatique, elle est souvent convertie en binaire pour être traitée par la machine.

En base hexadécimale, les nombres sont représentés de 0 à 9 et de A à F (où A = 10, B = 11, …, F = 15). Cette base permet de représenter efficacement les grands nombres binaires, chaque chiffre hexadécimal correspondant à quatre bits binaires.

Ces systèmes de numération facilitent le traitement, le stockage et l'affichage des données en informatique.

Le Principe de la Numération Décimale Le système de numération décimale, également appelé base 10, est le système de numération le plus familier et celui que nous utilisons couramment dans notre vie quotidienne. Il se compose de dix chiffres allant de 0 à 9 et se base sur les puissances de 10. Chaque position d'un chiffre dans un nombre décimal représente une puissance de 10, et la valeur de chaque chiffre est multipliée par cette puissance.

Structure et Valeur des Chiffres en Décimal Dans un nombre décimal, chaque chiffre a une place spécifique qui lui attribue une valeur pondérée en fonction de sa position. La valeur d’un nombre est déterminée en multipliant chaque chiffre par la puissance de 10 correspondant à sa position, en partant de la droite. Par exemple, pour le nombre 325, on a :

×

+

×

+

×

=

+

+

=

Ainsi, le chiffre 3 dans la centaine représente

×

, le 2 dans la dizaine représente

×

, et le 5 dans l’unité représente

×

.

Le Principe de la Numération Binaire Dans le monde informatique, la numération binaire (ou base 2) est le système de numération fondamental. Il repose sur deux chiffres seulement : 0 et 1. Ce système est essentiel pour comprendre le fonctionnement des ordinateurs, car il correspond directement aux états des circuits électroniques, qui peuvent être soit en position activée (1), soit en position désactivée (0).

Pourquoi Utiliser le Système Binaire en Informatique ? Le binaire est particulièrement adapté à l’informatique car il permet une représentation simple et efficace des données par les circuits électroniques. Les 0 et 1 du binaire correspondent aux deux états de tension d’un transistor : passage de courant (représenté par 1) et absence de courant (représenté par 0). Ainsi, les ordinateurs utilisent le binaire pour traiter et stocker des informations de manière rapide et fiable.

Structure et Valeur des Bits Dans le système binaire, chaque chiffre est appelé un bit (Binary Digit), et chaque bit représente une puissance de 2. Par exemple, pour le nombre binaire 1011, chaque bit correspond à une puissance de 2, en partant de la droite :

×

+

×

+

×

+

×

=

+

+

+

=

La Numération Octale La numération octale est un système numérique en base 8, qui utilise huit chiffres de 0 à 7. Chaque position dans un nombre octal représente une puissance de 8. Bien que moins courante que la numération binaire ou décimale, la base octale est parfois utilisée en informatique pour simplifier la lecture et la manipulation des nombres binaires.

Pourquoi Utiliser la Base Octale ? Le système octal est principalement utilisé comme une méthode de représentation compacte des nombres binaires. Un chiffre octal peut être directement traduit en trois bits binaires, car

=

8=23. Ainsi, le système octal permet de réduire la longueur des séquences binaires en groupes de trois, ce qui facilite la lecture et la gestion des données.

Structure et Conversion Binaire-Octal Dans le système octal, chaque position d’un chiffre représente une puissance de 8. Par exemple, le nombre octal 237 signifie :

×

+

×

+

×

=

+

+

=

(en d e ˊ cimal)

Pour convertir un nombre binaire en octal, on regroupe simplement les bits par paquets de trois (en partant de la droite) et on les remplace par leur valeur octale. Par exemple, pour convertir le nombre binaire 110110 en octal :

Séparer en groupes de trois : 110 110.

#### Convertir chaque groupe en octal 

=

et

=

, donc le résultat est 66 en octal. Utilisation de l’Octal en Informatique et Réseaux Bien que l’octal ne soit pas autant utilisé aujourd’hui, il a joué un rôle important dans les systèmes Unix pour représenter les permissions des fichiers et dans certaines configurations de bas niveau, notamment dans l’écriture des codes de contrôle des périphériques. En réseau, le système octal est moins commun, mais on le trouve parfois pour certains aspects spécifiques, comme :

Configuration de Permissions : En Unix/Linux, les permissions des fichiers et dossiers sont souvent définies en utilisant un système de notation octale, avec des valeurs telles que 755 ou 644 pour indiquer les droits de lecture, d’écriture et d’exécution.

Compacité pour les Systèmes de Fichiers : Avant que le système hexadécimal ne soit largement adopté, l’octal permettait de manipuler et d’afficher plus efficacement des informations binaires, en particulier dans le développement et la configuration des systèmes réseau et des périphériques de stockage.

La Numération Hexadécimale La numération hexadécimale est un système en base 16, qui utilise seize symboles pour représenter les valeurs : les chiffres de 0 à 9 et les lettres A à F (où A correspond à 10, B à 11, …, F à 15). Ce système est largement utilisé en informatique car il permet de représenter des nombres binaires longs de manière concise et lisible.

Pourquoi Utiliser la Base Hexadécimale ? Le système hexadécimal est particulièrement utile en informatique pour représenter de grandes quantités de données binaires en format abrégé. Chaque chiffre hexadécimal correspond à quatre bits (ou un demi-octet), car

=

16=24. Ainsi, un nombre binaire peut être regroupé par blocs de quatre bits, chaque bloc correspondant à un chiffre hexadécimal. Cela simplifie considérablement la lecture et l’écriture des adresses mémoire, des codes de couleurs, et des adresses IP dans le cas des réseaux IPv6.

Structure et Conversion Binaire-Hexadécimal Dans un nombre hexadécimal, chaque position d’un chiffre représente une puissance de 16. Par exemple, le nombre hexadécimal 2AF signifie :

×

+

×

+

×

=

+

+

=

(en d e ˊ cimal)

Pour convertir un nombre binaire en hexadécimal, il suffit de regrouper les bits en paquets de quatre, en partant de la droite, puis de remplacer chaque paquet par son équivalent hexadécimal. Par exemple, pour convertir le binaire 10101111 en hexadécimal :

Séparer en groupes de quatre : 1010 1111.

#### Convertir chaque groupe 

= A et

= F , ce qui donne AF en hexadécimal. Utilisation de la Base Hexadécimale en Réseaux La numération hexadécimale est très présente dans les réseaux informatiques, surtout avec les adresses IPv6 et dans les configurations de bas niveau, comme les adresses MAC.

Adresses IPv6 : Les adresses IPv6 utilisent la base hexadécimale pour simplifier l’écriture et la lecture de longues adresses de 128 bits. Par exemple, une adresse IPv6 comme 2001:0db8:85a3:0000:0000:8a2e:0370:7334 est en réalité composée de 128 bits divisés en blocs de quatre.

Adresses MAC : Les adresses physiques des cartes réseau, ou adresses MAC, sont également écrites en hexadécimal, par exemple 00:1A:2B:3C:4D:5E. Ce format permet de représenter de manière concise les adresses uniques attribuées aux périphériques réseau.

Couleurs Web : En conception web, les couleurs sont souvent exprimées en hexadécimal pour définir les valeurs de rouge, vert et bleu (RGB). Par exemple, la couleur #FF5733 est une représentation hexadécimale indiquant un niveau élevé de rouge (FF), un niveau moyen de vert (57), et un niveau bas de bleu (33).

Le principe de conversion d'un nombre décimal en binaire repose sur la méthode des divisions successives par 2.

#### Voici les étapes de cette méthode 

Diviser le nombre décimal par 2 et noter le reste (qui sera toujours 0 ou 1). Prendre le quotient obtenu et le diviser de nouveau par 2. Répéter cette opération jusqu’à obtenir un quotient égal à 0. Le nombre binaire est formé en lisant les restes de bas en haut, c'est-à-dire en commençant par le dernier reste obtenu jusqu'au premier. Exemple : Conversion du Nombre Décimal 25 en Binaire

#### Prenons l'exemple de la conversion du nombre décimal 25 en binaire 

25 ÷ 2 = 12, reste 1 12 ÷ 2 = 6, reste 0 6 ÷ 2 = 3, reste 0 3 ÷ 2 = 1, reste 1 1 ÷ 2 = 0, reste 1 En lisant les restes de bas en haut, on obtient le nombre binaire 11001.

Ainsi, 25 en base 10 est égal à 11001 en base 2.

#### Pour convertir un nombre décimal en binaire 

Divisez le nombre par 2 et notez le reste. Répétez l’opération avec le quotient jusqu'à atteindre 0. Le nombre binaire final s'obtient en lisant les restes de bas en haut.

Conversion d’un Nombre Binaire en Nombre Décimal La conversion d'un nombre binaire (base 2) en nombre décimal (base 10) repose sur le principe des puissances de 2. Chaque chiffre (ou bit) d’un nombre binaire correspond à une puissance de 2, en commençant de la droite (position 0) vers la gauche.

Méthode de Conversion Pour convertir un nombre binaire en décimal, on suit les étapes suivantes :

Identifiez les positions des bits dans le nombre binaire, en commençant par la droite (le premier bit est la position 0). Multipliez chaque bit par

2 élevé à la puissance correspondant à sa position. Additionnez tous les produits obtenus pour obtenir le nombre décimal. Exemple : Conversion du Nombre Binaire 10110 en Décimal Prenons le nombre binaire 10110 et convertissons-le en base 10.

#### En partant de la droite, on note la position de chaque bit 

Le bit tout à droite (0) est à la position 0 Le bit suivant (1) est à la position 1 Le bit suivant (1) est à la position 2 Le bit suivant (0) est à la position 3 Le bit le plus à gauche (1) est à la position 4 On multiplie chaque bit par

#### à la puissance de sa position 

(

×

) + (

×

) + (

×

) + (

×

) + (

×

)

#### En simplifiant les calculs 

(

×

) + (

×

) + (

×

) + (

×

) + (

×

) =

+

+

+

+

=

Ainsi, le nombre binaire 10110 correspond au nombre décimal 22.

#### Pour convertir un nombre binaire en décimal 

Multipliez chaque bit par une puissance de 2, en fonction de sa position (de droite à gauche). Additionnez les valeurs obtenues pour obtenir le nombre en base 10.

Conversion d’un Nombre Décimal en Nombre Octal

La conversion d’un nombre décimal (base 10) en nombre octal (base 8) est une méthode courante en informatique pour simplifier la représentation des valeurs numériques, surtout en lien avec la gestion des systèmes et des permissions. Le système octal utilise huit chiffres (0 à 7) et repose sur des puissances de 8.

Méthode de Conversion La conversion d’un nombre décimal en octal suit la méthode des divisions successives par 8 :

Diviser le nombre décimal par 8 et noter le reste. Prendre le quotient obtenu et le diviser à nouveau par 8. Répéter cette opération jusqu’à obtenir un quotient de 0. Le nombre octal est formé en lisant les restes de bas en haut, en commençant par le dernier reste obtenu jusqu'au premier. Exemple : Conversion du Nombre Décimal 156 en Octal

#### Prenons l’exemple de la conversion du nombre décimal 156 en octal 

156 ÷ 8 = 19, reste 4 19 ÷ 8 = 2, reste 3 2 ÷ 8 = 0, reste 2 En lisant les restes de bas en haut, on obtient le nombre octal 234.

Ainsi, 156 en base 10 est égal à 234 en base 8.

#### Pour convertir un nombre décimal en octal 

Divisez le nombre par 8 et notez le reste. Répétez avec le quotient jusqu'à obtenir 0. Lisez les restes de bas en haut pour obtenir le nombre en base 8

Conversion d’un Nombre Octal en Nombre Décimal La conversion d’un nombre octal (base 8) en nombre décimal (base 10) s’appuie sur les puissances de 8. Chaque chiffre dans un nombre octal représente une puissance de 8, en partant de la droite (position 0) vers la gauche.

Méthode de Conversion Pour convertir un nombre octal en nombre décimal, on utilise les étapes suivantes :

Identifiez les positions des chiffres dans le nombre octal, en commençant par la droite (le premier chiffre est la position 0). Multipliez chaque chiffre par

élevé à la puissance de sa position. Additionnez les produits obtenus pour obtenir le nombre en base 10. Exemple : Conversion du Nombre Octal 234 en Décimal Prenons le nombre octal 234 et convertissons-le en base 10.

#### En partant de la droite, on note la position de chaque chiffre 

Le chiffre le plus à droite (4) est à la position 0 Le chiffre suivant (3) est à la position 1 Le chiffre le plus à gauche (2) est à la position 2 On multiplie chaque chiffre par

#### à la puissance de sa position 

(

×

) + (

×

) + (

×

)

#### En simplifiant les calculs 

(

×

) + (

×

) + (

×

) =

+

+

=

Ainsi, le nombre octal 234 correspond au nombre décimal 156.

#### Pour convertir un nombre octal en décimal 

Multipliez chaque chiffre par une puissance de 8, selon sa position. Additionnez les valeurs obtenues pour obtenir le nombre en base 10.

Conversion d’un Nombre Décimal en Nombre Hexadécimal

Le système de numération hexadécimal est une base de 16 qui utilise les chiffres de 0 à 9 et les lettres A à F pour représenter les valeurs de 0 à 15. Cette base est couramment utilisée en informatique pour représenter des valeurs binaires de façon plus compacte, car chaque chiffre hexadécimal équivaut à quatre bits binaires.

Méthode de Conversion La conversion d’un nombre décimal en hexadécimal se fait en utilisant la méthode des divisions successives par 16 :

Divisez le nombre décimal par 16 et notez le reste (qui sera compris entre 0 et 15). Si le reste est 10, 11, 12, 13, 14, ou 15, remplacez-le par les lettres hexadécimales correspondantes : A, B, C, D, E, et F. Prenez le quotient obtenu et divisez-le à nouveau par 16. Répétez l’opération jusqu’à ce que le quotient soit 0. Le nombre hexadécimal final est obtenu en lisant les restes de bas en haut, en commençant par le dernier reste obtenu jusqu'au premier. Exemple : Conversion du Nombre Décimal 254 en Hexadécimal Convertissons le nombre décimal 254 en hexadécimal.

254 ÷ 16 = 15, reste 14 (14 correspond à la lettre E en hexadécimal). 15 ÷ 16 = 0, reste 15 (15 correspond à la lettre F en hexadécimal). En lisant les restes de bas en haut, on obtient le nombre hexadécimal FE.

Ainsi, 254 en base 10 est égal à FE en base 16.

#### Pour convertir un nombre décimal en hexadécimal 

Divisez le nombre par 16 et notez le reste. Remplacez les restes supérieurs à 9 par les lettres correspondantes (A à F). Lisez les restes de bas en haut pour obtenir le nombre hexadécimal.

Conversion d’un Nombre Hexadécimal en Nombre Décimal Le système hexadécimal est une base de 16, utilisant les chiffres de 0 à 9 et les lettres A à F (A pour 10, B pour 11, jusqu'à F pour 15). La conversion d’un nombre hexadécimal en nombre décimal s’appuie sur les puissances de 16, en attribuant une puissance à chaque position de droite à gauche. Méthode de Conversion Pour convertir un nombre hexadécimal en nombre décimal, on suit ces étapes :

Identifiez les positions des chiffres hexadécimaux, en commençant par la droite (la première position est 0). Multipliez chaque chiffre par

16 élevé à la puissance correspondant à sa position. Additionnez les produits obtenus pour obtenir le nombre décimal. Exemple : Conversion du Nombre Hexadécimal 3F en Décimal Prenons l'exemple du nombre hexadécimal 3F et convertissons-le en base 10.

#### En partant de la droite, identifions la position de chaque chiffre 

Le chiffre F (qui vaut 15 en décimal) est à la position 0. Le chiffre 3 est à la position 1. Multiplions chaque chiffre par

#### à la puissance de sa position 

(

×

) + (

×

)

#### En simplifiant les calculs 

(

×

) + (

×

) =

+

=

Ainsi, le nombre hexadécimal 3F correspond au nombre décimal 63.

#### Pour convertir un nombre hexadécimal en décimal 

Multipliez chaque chiffre hexadécimal par une puissance de 16 en fonction de sa position. Additionnez les valeurs obtenues pour obtenir le nombre en base 10.

Les Différentes Unités Informatiques Dans le monde informatique, la représentation et la manipulation des données sont au cœur de l’activité des systèmes et des réseaux. Les unités informatiques sont essentielles pour quantifier la taille des informations, la mémoire et la capacité de stockage. Ces unités suivent un système de notation en base 2 ou base 10 pour représenter les données et sont divisées en plusieurs échelles, chacune représentant une quantité précise d’informations.

Les Bits et les Octets Le bit (b) est la plus petite unité de mesure en informatique. Il représente une valeur binaire unique, soit 0 ou 1, correspondant à un état électrique de marche ou d’arrêt. L’octet (B) est constitué de 8 bits. Il est souvent utilisé pour représenter un caractère ou une petite unité d’information. Par exemple, une lettre dans un fichier texte simple peut occuper environ 1 octet. Les Multiples de l’Octet Les unités supérieures sont basées sur des multiples de l’octet pour permettre de mesurer de plus grandes quantités d’informations. Il existe deux systèmes de notation principaux : le système binaire (en base 2), utilisé en informatique, et le système décimal (en base 10), plus courant dans la vie quotidienne.

Système Binaire (Base 2)

Kio (Kibioctet) : 1 Kio =

octets, soit 1 024 octets. Mio (Mebioctet) : 1 Mio =

octets, soit 1 048 576 octets. Gio (Gibioctet) : 1 Gio =

octets, soit environ 1,07 milliard d’octets. Tio (Tebioctet) : 1 Tio =

octets, soit environ 1,1 billion d’octets. Système Décimal (Base 10)

Ko (Kilooctet) : 1 Ko =

octets, soit 1 000 octets. Mo (Megaoctet) : 1 Mo =

octets, soit 1 000 000 octets. Go (Gigaoctet) : 1 Go =

octets, soit 1 milliard d’octets. To (Téraoctet) : 1 To =

octets, soit 1 billion d’octets.

Ces systèmes créent parfois une confusion, notamment dans le domaine des disques durs ou des supports de stockage, où les fabricants utilisent souvent les valeurs décimales (base 10) tandis que les systèmes d’exploitation se réfèrent aux valeurs binaires (base 2).

Unités de Vitesse de Transmission Dans les réseaux, il est également essentiel de mesurer la vitesse de transfert des données :

bps (bits par seconde) : La vitesse de base pour mesurer le transfert de données. Kbps, Mbps, Gbps : Correspondent respectivement à 1 000, 1 000 000 et 1 000 000 000 bits par seconde. Ces unités sont utilisées pour quantifier le débit d’une connexion réseau, par exemple lors du transfert de fichiers ou du streaming de vidéos.

Conversion de la base 10 à la base 2, première méthode Pour convertir un nombre décimal en nombre binaire, on utilise un tableau.

Ce tableau binaire va se limiter aux huit premières valeurs représentant un octet. Il peut être agrandi pour la conversion de nombre décimal supérieur à 255.

Prendre un nombre décimal : ex : 156 Puis procéder par soustraction donnant un résultat ≥ 0 156 - 128 = 28 28 est ≥ 0 donc j’inscris 1 dans la colonne 128

28 - 64 = 36 36 est ≤ 0 donc j’inscris 0 dans la colonne 64

28 - 32 = 4 4 est ≤ 0 donc j’inscris 0 dans la colonne 32

28 - 16 = 12 12 est ≥ 0 donc j’inscris 1 dans la colonne 16

12 - 8 = 4 4 est ≥ 0 donc j’inscris 1 dans la colonne 8

4 - 4 = 0 0 est ≥ 0 donc j’inscris 1 dans la colonne 4

La conversion est terminée mais le tableau n’est pas rempli alors on le complète avec des 0, ici des 0 sont rajoutés dans les colonnes 2 et 1

Le résultat 156 en décimal est égal à 10010100 en binaire Conversion de la base 10 à la base 2, deuxième méthode Pour convertir un nombre décimal en nombre binaire, on utilise un tableau.

Ce tableau binaire va se limiter aux huit premières valeurs représentant un octet. Il peut être agrandi pour la conversion de nombre décimal supérieur à 255.

Prendre un nombre décimal ex : 235 Puis procéder par addition donnant un résultat ≤ inférieur au nombre recherché : 0 + 128 = 128 128 est ≤ 235 donc j’inscris 1 dans la colonne 128

128 + 64 = 192 192 est ≤ 235 donc j’inscris 1 dans la colonne 64

192 + 32 = 224 224 est ≤ 235 donc j’inscris 1 dans la colonne 32

224 + 16 = 240 240 est ≥ 235 donc j’inscris 0 dans la colonne 16

224 + 8 = 232 232 est ≤ 235 donc j’inscris 1 dans la colonne 8

232 + 4 = 236 236 est ≥ 235 donc j’inscris 0 dans la colonne 4

232 + 2 = 234 234 est ≤ 235 donc j’inscris 1 dans la colonne 2

234 + 1 = 235 235 est ≤ 235 donc j’inscris 1 dans la colonne 1

Le résultat : 235 en décimal est égal à 1110 1011 en binaire

## cours kahoot module 3 et 4

Présentation de l'adressage IPv4 Les classes IPv4 Démonstration - Les classes IPv4 TP - Les classes IPv4 Calcul des adresses Démonstration - Les types d'adresses IPv4 TP - Calcul d'adresses La notation CIDR Démonstration - La notation CIDR TP - Notion CIDR Les adresses privées Les adresses APIPA Les sous-réseaux Démonstration - Calcul des adresses de sous-réseaux TP - Calcul des sous-réseaux TP - Packet Tracer Adressage IPv4 TP - Packet Tracer - Fichier à télécharger

Une adresse IPv4 est constituée de 32 bits découpés en 4 octets distincts.

#### Une adresse IPv4 est composée 

d’un identifiant réseau (ID_Réseau) d’un identifiant d’hôte unique sur le réseau logique (ID_Hôtes) Pour communiquer avec d’autres hôtes sur son réseau logique, un hôte réseau a besoin :

d’une adresse IP d’un masque de sous-réseau. À partir de son adresse IP et son masque de sous-réseau, l’hôte réseau va calculer :

son adresse de réseau logique son adresse de diffusion

Une adresse IPv4 est composée de 32 bits (4 octets) et est représentée sous forme de quatre nombres décimaux séparés par des points, chacun des quatre nombres étant compris entre 0 et 255.

#### Par exemple 

192.168.1.1

#### En binaire, cette adresse se représenterait ainsi 

11000000.10101000.00000001.00000001 Chaque section de 8 bits (ou 1 octet) est appelée octet, et elle permet d’obtenir 256 combinaisons possibles par section (de 0 à 255).

Classes d’adresses IPv4 Les adresses IPv4 sont divisées en différentes classes pour mieux organiser le réseau, et chaque classe définit la répartition des bits pour le réseau et l'hôte.

Classe A : Destinée aux réseaux de grande taille, elle utilise les adresses de 0.0.0.0 à 127.255.255.255. Le premier octet représente le réseau, et les trois suivants représentent l’hôte. Classe B : Utilisée pour les réseaux de taille moyenne, avec des adresses de 128.0.0.0 à 191.255.255.255. Les deux premiers octets sont réservés pour le réseau, et les deux derniers pour l’hôte. Classe C : Utilisée pour les petits réseaux, de 192.0.0.0 à 223.255.255.255. Les trois premiers octets représentent le réseau, et le dernier octet est pour l’hôte. Classe D : Réservée pour les adresses de multidiffusion (ou multicast), allant de 224.0.0.0 à 239.255.255.255. Classe E : Réservée pour des utilisations futures ou expérimentales, de 240.0.0.0 à 255.255.255.255. Adresses Spéciales

#### Certaines adresses IPv4 ont des significations spécifiques 

Adresse de boucle locale (localhost) : 127.0.0.1 — utilisée pour les tests et la communication à l'intérieur de l'appareil. Adresse réseau : Utilisée pour identifier le réseau lui-même (ex. : 192.168.1.0 pour un réseau de classe C). Adresse de diffusion (broadcast) : Permet d’envoyer un message à tous les appareils d'un réseau (ex. : 192.168.1.255). Aller vers l’activité

#### Dans l’adressage IPv4, chaque adresse IP est divisée en deux parties 

L’ID réseau : Identifie le réseau auquel appartient l’adresse. L’adresse hôte : Identifie un appareil (hôte) spécifique dans ce réseau. Pour récupérer ces deux éléments, on utilise le masque de sous-réseau. Ce masque détermine quels bits de l’adresse IP correspondent à la partie réseau et lesquels correspondent à la partie hôte.

#### Voici comment procéder 

Étapes du Calcul des Adresses Convertir l’adresse IP en binaire Une adresse IPv4 est composée de 4 octets (32 bits) exprimés en notation décimale pointée. Chaque octet est converti en binaire pour faciliter les opérations.

Convertir le masque de sous-réseau en binaire Le masque de sous-réseau, également écrit en notation CIDR (par exemple, /24), indique combien de bits sont dédiés à l’identification du réseau. En binaire, les bits du masque sont composés de 1 pour la partie réseau et de 0 pour la partie hôte.

Appliquer une opération logique AND L’opération AND est effectuée entre l’adresse IP et le masque de sous-réseau pour obtenir l’ID réseau. Dans une opération AND, un bit est 1 seulement si les deux bits correspondants dans l’opération sont également 1.

Identifier la partie hôte La partie hôte est obtenue en effectuant l’opération XOR ou en examinant les bits restants après avoir déduit les bits réseau.

Exemple Pratique : Adresse IP 192.168.1.10/24 Convertir en binaire

Adresse IP : 192.168.1.10 En binaire : 11000000.10101000.00000001.00001010 Masque de sous-réseau : /24 En binaire : 11111111.11111111.11111111.00000000 Appliquer l’opération AND L’ID réseau est obtenu en appliquant un AND entre l’adresse IP et le masque :

Adresse IP : 11000000.10101000.00000001.00001010 Masque : 11111111.11111111.11111111.00000000 ID Réseau : 11000000.10101000.00000001.00000000 En notation décimale : 192.168.1.0

Trouver l’adresse hôte Les bits de la partie hôte sont les bits restants après l’application du masque. Adresse IP : 11000000.10101000.00000001.00001010 ID Réseau : 11000000.10101000.00000001.00000000 Adresse Hôte : 00000000.00000000.00000000.00001010 En décimal : 10

Résultat Final Adresse IP : 192.168.1.10 ID Réseau : 192.168.1.0 Adresse Hôte : 10 Généralisation Si le masque est /n, les n premiers bits de l’adresse IP sont utilisés pour l’ID réseau, et les 32−n32 - n32−n bits restants sont pour l’adresse hôte. Le calcul est identique, quelle que soit la plage d’adresses ou le masque.

Analyse de l’adresse IP 192.168.10.100 avec le masque 255.255.255.0 Pour déterminer le type de cette adresse IP, nous allons analyser les éléments suivants :

1. Conversion de l’adresse IP et du masque en binaire

#### Adresse IP 

#### 192.168.10.100 en binaire 

11000000.10101000.00001010.01100100

#### Masque 

#### 255.255.255.0 en binaire 

11111111.11111111.11111111.00000000 2. Calcul de l’ID réseau L’ID réseau est obtenu en appliquant une opération AND entre l’adresse IP et le masque de sous-réseau.

Adresse IP : 11000000.10101000.00001010.01100100 Masque : 11111111.11111111.11111111.00000000 ID Réseau : 11000000.10101000.00001010.00000000 En décimal, l’ID réseau est : 192.168.10.0.

3. Calcul de l’adresse de diffusion (broadcast) L’adresse de broadcast est obtenue en mettant tous les bits de la partie hôte à 1.

ID Réseau : 11000000.10101000.00001010.00000000 Partie Hôte : 00000000.00000000.00000000.11111111 Broadcast : 11000000.10101000.00001010.11111111 En décimal, l’adresse de broadcast est : 192.168.10.255.

4. Calcul des adresses disponibles pour les hôtes

#### Les adresses hôtes sont comprises entre 

ID réseau + 1 : 192.168.10.1 Adresse de broadcast - 1 : 192.168.10.254 Cela donne une plage d’hôtes de 192.168.10.1 à 192.168.10.254.

5. Reconnaissance du type d’adresse

#### L’adresse IP 192.168.10.100 

Appartient à la plage d’adresses privées de la Classe C (192.168.0.0 à 192.168.255.255). Utilisée dans un réseau local (LAN). Conclusion : L’adresse 192.168.10.100 est une adresse privée utilisée pour un hôte spécifique dans le réseau 192.168.10.0/24.

Résumé des Calculs Élément Valeur Adresse IP 192.168.10.100 Masque 255.255.255.0 ID Réseau 192.168.10.0 Adresse de Broadcast 192.168.10.255 Plage d’Hôtes 192.168.10.1 - 192.168.10.254 Type d’Adresse Privée (Classe C) Analyse de l’adresse IP 172.25.192.0 avec le masque 255.255.240.0 Pour analyser cette adresse IP et son masque, nous allons suivre les mêmes étapes.

1. Conversion de l’adresse IP et du masque en binaire

#### Adresse IP 

#### 172.25.192.0 en binaire 

10101100.00011001.11000000.00000000

#### Masque 

#### 255.255.240.0 en binaire 

11111111.11111111.11110000.00000000 2. Calcul de l’ID réseau L’ID réseau est obtenu en appliquant une opération AND entre l’adresse IP et le masque.

Adresse IP : 10101100.00011001.11000000.00000000 Masque : 11111111.11111111.11110000.00000000 ID Réseau : 10101100.00011001.11000000.00000000 En décimal, l’ID réseau est : 172.25.192.0.

3. Calcul de l’adresse de diffusion (broadcast) L’adresse de broadcast est obtenue en mettant tous les bits de la partie hôte à 1.

ID Réseau : 10101100.00011001.11000000.00000000 Partie Hôte : 00000000.00000000.00001111.11111111 Broadcast : 10101100.00011001.11001111.11111111 En décimal, l’adresse de broadcast est : 172.25.207.255.

4. Calcul des adresses disponibles pour les hôtes

#### Les adresses hôtes sont comprises entre 

ID réseau + 1 : 172.25.192.1 Adresse de broadcast - 1 : 172.25.207.254 Cela donne une plage d’hôtes de 172.25.192.1 à 172.25.207.254.

5. Reconnaissance du type d’adresse

#### L’adresse IP 172.25.192.0 

Appartient à la plage d’adresses privées de la Classe B (172.16.0.0 à 172.31.255.255). Utilisée dans un réseau local (LAN). N’est pas routable sur Internet sans translation d’adresse (NAT). Conclusion : L’adresse 172.25.192.0 est une adresse privée utilisée comme ID réseau dans le réseau 172.25.192.0/20.

Résumé des Calculs Élément Valeur Adresse IP 172.25.192.0 Masque 255.255.240.0 Préfixe CIDR /20 ID Réseau 172.25.192.0 Adresse de Broadcast 172.25.207.255 Plage d’Hôtes 172.25.192.1 - 172.25.207.254 Type d’Adresse Privée (Classe B) Détail supplémentaire : Pourquoi un masque /20 ? Le masque 255.255.240.0 correspond à 20 bits pour l’ID réseau et 12 bits pour les hôtes :

20 bits réseau : Les 16 bits des deux premiers octets (255.255) + 4 bits supplémentaires dans le troisième octet (240). 12 bits hôtes : Les 4 bits restants dans le troisième octet + les 8 bits du dernier octet. Cela permet d’avoir (2^{12} - 2 = 4094 adresses utilisables pour les hôtes.

La Notation CIDR La notation CIDR (Classless Inter-Domain Routing) est une méthode utilisée pour exprimer les adresses IP et les masques de sous-réseau de manière plus flexible et économique en adresses. Elle a été introduite pour répondre aux limitations de l'adressage de classe traditionnelle (classe A, B, C), qui pouvait gaspiller des adresses en allouant des blocs de tailles fixes. La notation CIDR permet donc de découper les adresses en sous-réseaux plus petits, selon les besoins spécifiques de chaque réseau.

Comment Fonctionne la Notation CIDR ? Dans la notation CIDR, une adresse IP est suivie d’un slash (/) et d'un nombre, qui représente le nombre de bits utilisés pour identifier la partie réseau de l'adresse. Par exemple, dans 192.168.1.0/24 :

192.168.1.0 est l'adresse réseau. /24 signifie que les 24 premiers bits de l'adresse sont réservés pour l'identification du réseau, et les 8 bits restants sont utilisés pour les hôtes. Pourquoi Utiliser CIDR ? La notation CIDR permet de créer des sous-réseaux de tailles variées en fonction des besoins. Cela est essentiel pour les réseaux modernes, car elle optimise l’espace d’adressage IPv4 en attribuant des blocs de tailles adaptées plutôt que des classes entières. Par exemple, une entreprise peut obtenir un bloc de taille précise pour ses besoins (par exemple, /28, /29) sans gaspiller d’adresses inutilisées.

Conversion en Masque Décimal Chaque notation CIDR peut être convertie en masque de sous-réseau décimal. Par exemple :

/24 correspond à 255.255.255.0 en décimal (les 24 premiers bits sont des 1, les 8 restants des 0). /16 correspond à 255.255.0.0. /26 correspond à 255.255.255.192. CIDR Masque Décimal Bits de Réseau Bits d’Hôtes Nombre d'Hôtes /24 255.255.255.0 24 8 254 /26 255.255.255.192 26 6 62 /28 255.255.255.240 28 4 14 Exemple d'Utilisation : 192.168.10.0/26

#### Si l'on prend 192.168.10.0/26 

Les 26 premiers bits (soit 255.255.255.192) sont réservés pour l'identifiant réseau. Les 6 bits restants permettent de créer 64 adresses, mais seulement 62 hôtes utilisables (les adresses de réseau et de broadcast ne sont pas attribuables aux hôtes).

Pour convertir un masque de sous-réseau en préfixe CIDR, il suffit de compter le nombre de bits à 1 dans la représentation binaire du masque. Ce nombre correspond à la valeur du préfixe CIDR.

Étapes de Conversion d’un Masque de Sous-Réseau en Préfixe CIDR Convertir le masque en binaire : Écrivez chaque octet du masque sous sa forme binaire. Compter le nombre de 1 : Comptez tous les bits à 1 dans le masque. Ce nombre représente le préfixe CIDR. Exemples de Conversion Masque Décimal Masque en Binaire Préfixe CIDR 255.0.0.0 11111111.00000000.00000000.00000000 /8 255.255.0.0 11111111.11111111.00000000.00000000 /16 255.255.255.0 11111111.11111111.11111111.00000000 /24 255.255.255.128 11111111.11111111.11111111.10000000 /25 255.255.255.192 11111111.11111111.11111111.11000000 /26 255.255.255.240 11111111.11111111.11111111.11110000 /28 A l'inverse, pour trouver le masque à partir d’un préfixe CIDR, il faut transformer le préfixe CIDR en une série de bits à 1 (qui indiquent la partie réseau), suivie de bits à 0 (qui indiquent la partie hôte) dans une adresse de 32 bits.

Étapes pour trouver le masque IP à partir du CIDR Écrire le nombre de bits en 1 correspondant au préfixe CIDR. Compléter avec des 0 pour atteindre un total de 32 bits. Diviser les 32 bits en 4 octets de 8 bits. Convertir chaque octet binaire en notation décimale. Exemples de Conversion Exemple 1 : Préfixe CIDR /24

#### Écrire 24 bits à 1 et compléter avec 8 bits à 0 

11111111.11111111.11111111.00000000

#### Diviser en octets 

11111111 . 11111111 . 11111111 . 00000000

#### Convertir chaque octet en décimal 

255.255.255.0 Le masque est donc 255.255.255.0 pour un /24.

Exemple 2 : Préfixe CIDR /26

#### Écrire 26 bits à 1 et compléter avec 6 bits à 0 

11111111.11111111.11111111.11000000

#### Diviser en octets 

11111111 . 11111111 . 11111111 . 11000000

#### Convertir chaque octet en décimal 

255.255.255.192 Le masque est donc 255.255.255.192 pour un /26.

Exemple 3 : Préfixe CIDR /20

#### Écrire 20 bits à 1 et compléter avec 12 bits à 0 

11111111.11111111.11110000.00000000

#### Diviser en octets 

11111111 . 11111111 . 11110000 . 00000000

#### Convertir chaque octet en décimal 

255.255.240.0 Le masque est donc 255.255.240.0 pour un /20.

Table de Référence Rapide CIDR Masque Décimal /8 255.0.0.0 /16 255.255.0.0 /24 255.255.255.0 /26 255.255.255.192 /28 255.255.255.240 /30 255.255.255.252

Les adresses IP privées sont des adresses définies par l'IETF pour être utilisées exclusivement dans les réseaux internes, comme les réseaux domestiques, les réseaux d'entreprises, ou tout environnement local où la communication se fait en interne et non sur Internet. Ces adresses privées sont utiles pour préserver l'espace d'adressage IPv4 global, qui est limité, et pour sécuriser les réseaux en empêchant l'accès direct aux adresses internes depuis l'extérieur. Plages d'Adresses IP Privées Dans le cadre de la norme IPv4, trois plages d'adresses IP ont été réservées pour les réseaux privés, selon la RFC 1918 :

Plage de Classe A : 10.0.0.0 à 10.255.255.255

Préfixe CIDR : /8 Nombre total d'adresses : 16 777 216 Utilisation : Cette plage est souvent utilisée dans les grandes entreprises qui nécessitent de nombreux sous-réseaux. Plage de Classe B : 172.16.0.0 à 172.31.255.255

Préfixe CIDR : /12 Nombre total d'adresses : 1 048 576 Utilisation : Utilisée dans les réseaux de taille moyenne qui nécessitent une certaine flexibilité dans le découpage en sous-réseaux. Plage de Classe C : 192.168.0.0 à 192.168.255.255

Préfixe CIDR : /16 Nombre total d'adresses : 65 536 Utilisation : Très populaire pour les petits réseaux, comme les réseaux domestiques et les petites entreprises. Pourquoi Utiliser des Adresses Privées ? Les adresses privées permettent d’éviter l'épuisement rapide de l'espace d'adressage IPv4 en attribuant des adresses IP locales au sein d'un réseau fermé. Les ordinateurs, smartphones, imprimantes et autres appareils connectés au réseau utilisent ces adresses pour communiquer entre eux.

Ces adresses privées ne sont pas routables sur Internet. Cela signifie qu'un appareil ayant une adresse IP privée ne peut pas être directement atteint depuis l’extérieur. Pour communiquer avec Internet, il doit passer par un processus de NAT (Network Address Translation), qui traduit les adresses IP privées en une adresse IP publique unique assignée au réseau.

Économie d'Adresses Publiques : En regroupant les appareils sous une seule adresse IP publique grâce au NAT, on réduit la demande d’adresses IP uniques sur Internet.

Sécurité : Les adresses privées ne sont pas accessibles depuis l’extérieur, ce qui limite les risques d’intrusion directe.

Flexibilité : La segmentation des réseaux en sous-réseaux privés permet une gestion plus efficace du réseau interne, surtout dans les environnements de grande échelle.

Les adresses privées ne peuvent pas être utilisées pour des services accessibles depuis l’extérieur sans configuration supplémentaire (NAT, DMZ). Elles sont également limitées en termes de portée et ne permettent pas d’accéder directement à Internet, car elles ne sont pas routées en dehors du réseau local. Exemple Pratique Dans un réseau domestique, le routeur de la maison a généralement une adresse IP publique côté Internet (fournie par le FAI) et utilise une adresse IP privée (comme 192.168.1.1) pour le réseau interne. Tous les appareils connectés au réseau domestique (ordinateurs, smartphones, tablettes, etc.) obtiennent une adresse privée dans la plage 192.168.1.x. Lorsqu’un de ces appareils souhaite accéder à Internet, le routeur effectue la traduction NAT et transmet la requête en utilisant l’adresse IP publique.

Les adresses APIPA (Automatic Private IP Addressing) sont des adresses IP automatiquement attribuées par un appareil dans un réseau local lorsqu'il ne parvient pas à obtenir d’adresse IP d’un serveur DHCP. APIPA, standardisé par Microsoft et repris dans la norme RFC 3927, permet aux appareils de continuer à communiquer localement même en l'absence de configuration d'adresse IP via DHCP ou d'administrateur réseau. Principe de Fonctionnement d’APIPA Lorsqu'un appareil est configuré pour obtenir automatiquement une adresse IP, mais ne reçoit pas de réponse d’un serveur DHCP, il utilise alors le mécanisme APIPA pour s’auto-attribuer une adresse IP. APIPA choisit l’adresse parmi la plage réservée pour ce type d’adressage :

Plage APIPA : 169.254.0.0 à 169.254.255.255 Masque de sous-réseau : 255.255.0.0 L’appareil sélectionne une adresse dans cette plage et vérifie que celle-ci n’est pas déjà utilisée sur le réseau en envoyant une requête ARP (Address Resolution Protocol). Si aucune réponse n'est reçue, l’adresse est attribuée à l’appareil. Sinon, l’appareil choisit une autre adresse et recommence la vérification.

Continuité du Réseau Local : APIPA permet aux appareils de continuer à communiquer entre eux dans le même réseau local, même en l’absence de serveur DHCP.

Configuration Automatique : Cette fonctionnalité est automatique et ne nécessite aucune configuration manuelle, ce qui est utile dans les petits réseaux ou pour des utilisateurs non-experts.

Pas d’Accès Internet : Les adresses APIPA ne sont pas routables, ce qui signifie que les appareils avec ces adresses ne peuvent pas communiquer au-delà du réseau local, donc sans accès à Internet ou à d’autres réseaux externes.

Utilisation en Réseaux Restreints : APIPA est surtout utile pour les réseaux de petite taille où la communication locale est suffisante.

Exemple Pratique Dans un bureau où les ordinateurs sont configurés pour recevoir une adresse IP via DHCP, un problème avec le serveur DHCP peut empêcher l'attribution d'adresses. Chaque ordinateur activera alors l’APIPA et s’auto-attribuera une adresse dans la plage 169.254.x.x. Les ordinateurs pourront ainsi continuer de communiquer localement pour partager des fichiers ou des imprimantes, mais n'auront pas d’accès Internet.

Les sous-réseaux (ou subnetting) sont une méthode permettant de diviser un réseau IP en plusieurs réseaux plus petits, appelés sous-réseaux. Le sous-réseautage est essentiel dans l’adressage IPv4 pour organiser, segmenter et optimiser la gestion des adresses IP au sein d'un réseau. Cela permet de mieux utiliser les adresses disponibles, de faciliter la gestion du trafic et d’améliorer la sécurité du réseau.

Objectifs du Sous-réseautage Optimisation de l’espace d’adressage : En divisant un grand réseau en sous-réseaux plus petits, on peut réduire le gaspillage d’adresses IP, surtout dans les réseaux ayant moins de périphériques. Amélioration des performances : Le sous-réseautage réduit la taille des domaines de diffusion (broadcast domains), ce qui diminue le nombre de paquets de diffusion et améliore les performances du réseau. Sécurité : En segmentant un réseau en sous-réseaux, on peut limiter l’accès entre les différents segments et mieux contrôler le flux de données. Structure d’une adresse IP et du masque de sous-réseau

#### Une adresse IPv4 est composée de 32 bits divisés en deux parties 

Partie Réseau : Identifie le réseau principal. Partie Hôte : Identifie les périphériques (hôtes) au sein de ce réseau. Le masque de sous-réseau est utilisé pour spécifier quelles parties de l’adresse IP représentent le réseau et lesquelles représentent les hôtes. En créant des sous-réseaux, on modifie ce masque pour "emprunter" certains bits de la partie hôte afin de les utiliser pour identifier des sous-réseaux.

Exemple de sous-réseautage avec une adresse IPv4

#### Imaginons une adresse IP de réseau 192.168.1.0/24 

Le masque /24 correspond à un masque de sous-réseau 255.255.255.0, où les 24 premiers bits sont réservés pour le réseau, et les 8 bits restants pour les hôtes. Ce réseau peut théoriquement contenir jusqu'à 254 hôtes (soit

−

28−2, en excluant l’adresse réseau et l’adresse de diffusion). Si l’on souhaite créer deux sous-réseaux, on peut utiliser un masque de sous-réseau /25 (ou 255.255.255.128), divisant ainsi le réseau initial en deux sous-réseaux distincts :

Sous-réseau 1 : 192.168.1.0/25 (adresses de 192.168.1.0 à 192.168.1.127) Sous-réseau 2 : 192.168.1.128/25 (adresses de 192.168.1.128 à 192.168.1.255) Calcul du Nombre de Sous-Réseaux et d’Hôtes Pour déterminer le nombre de sous-réseaux et d’hôtes disponibles, il faut connaître le nombre de bits "empruntés" dans le masque :

#### Nombre de Sous-Réseaux 

n où n est le nombre de bits empruntés pour la partie réseau.

#### Nombre d’Hôtes par Sous-Réseau 

h −

, où h est le nombre de bits restants pour les hôtes (on soustrait 2 pour l’adresse réseau et l’adresse de broadcast). Exemple : Réseau 192.168.1.0 avec Masque /26 Si on utilise un masque /26 (255.255.255.192), cela donne quatre sous-réseaux avec 62 hôtes chacun :

Sous-réseau 1 : 192.168.1.0 à 192.168.1.63 Sous-réseau 2 : 192.168.1.64 à 192.168.1.127 Sous-réseau 3 : 192.168.1.128 à 192.168.1.191 Sous-réseau 4 : 192.168.1.192 à 192.168.1.255 Efficacité : Meilleure gestion de l’espace d’adressage, ce qui est important dans les grands réseaux.

Contrôle et Sécurité : Possibilité de restreindre l’accès entre les sous-réseaux.

Réduction de la Diffusion : En réduisant la taille des domaines de diffusion, le sous-réseautage améliore la performance globale du réseau.

Le domaine de diffusion La communication entre deux PC La communication entre deux nœuds La communication entre deux nœuds - suite Le routage Le sur-réseau Démonstration - La communication réseau Enoncé du TP - Communication dans un réseau Enoncé du TP - Communication inter-réseau

Dans le cadre des réseaux informatiques, un domaine de diffusion (ou broadcast domain) est une portion logique du réseau dans laquelle une trame de diffusion (broadcast) est transmise à tous les appareils connectés. Cela permet à une machine d’envoyer un message destiné à tous les autres équipements présents dans le même domaine.

1. Définition de la Diffusion (Broadcast) La diffusion est un mécanisme dans lequel une trame ou un paquet est envoyé avec une adresse de destination spéciale appelée adresse de broadcast. En IPv4, cette adresse est constituée de tous les bits à 1 dans la partie hôte, par exemple 192.168.1.255 dans un réseau avec un masque 255.255.255.0.

Tous les appareils du domaine de diffusion reçoivent ce message, même si ce n’est pas explicitement destiné à eux. Les messages de broadcast sont souvent utilisés pour des tâches comme :

La découverte de machines (exemple : DHCP). La résolution d’adresses (exemple : ARP). 2. Composants du Domaine de Diffusion

#### Un domaine de diffusion est limité par les équipements réseau suivants 

Switchs (commutateurs) : Ils transmettent les diffusions à tous les ports d’un même VLAN. Routeurs : Ils délimitent les domaines de diffusion. Un routeur ne transmet pas les trames de diffusion d’un réseau à un autre, créant ainsi des frontières entre domaines. VLAN (Virtual LAN) : Chaque VLAN constitue un domaine de diffusion distinct, même s’ils sont configurés sur le même switch physique. 3. Importance du Domaine de Diffusion Un domaine de diffusion trop grand peut entraîner des problèmes de performances, car chaque appareil du domaine doit traiter les diffusions, même si elles ne lui sont pas destinées. Cela peut surcharger le réseau et les ressources des machines.

C’est pourquoi les réseaux modernes sont souvent segmentés en plusieurs domaines de diffusion pour :

Réduire le trafic inutile. Améliorer les performances globales. Sécuriser la communication entre différentes parties du réseau. 4. Exemple Pratique Dans un réseau local avec un switch, si 10 ordinateurs sont connectés au même VLAN, ils appartiennent tous au même domaine de diffusion. Si un ordinateur envoie une requête de type ARP (Who has 192.168.1.10?), cette requête est envoyée à tous les autres appareils. En revanche, si ce réseau est segmenté avec un routeur ou des VLANs, la diffusion sera limitée au sous-réseau correspondant.

5. Lien avec le Modèle OSI Le domaine de diffusion opère principalement à la couche 2 (Liaison de données) du modèle OSI. Les diffusions sont transmises à tous les appareils d’un même domaine via l’adresse MAC de destination FF:FF:FF:FF:FF:FF. À la couche 3 (Réseau), les diffusions utilisent des adresses IP spéciales comme 192.168.1.255.

6. Segmenter les Domaines de Diffusion Pour limiter les problèmes liés aux domaines de diffusion trop étendus, on peut utiliser :

Des routeurs : Ils créent des segments de réseau distincts. Des VLANs : Ils divisent logiquement un réseau en plusieurs sous-réseaux indépendants. Le domaine de diffusion est une notion clé pour comprendre comment le trafic de diffusion circule dans un réseau. Bien qu’il facilite certaines communications, il peut rapidement devenir une source de congestion si le réseau n’est pas correctement segmenté. L’utilisation de VLANs et de routeurs permet d’organiser et d’optimiser le trafic dans un réseau informatique.

Le Routage Le routage est un processus fondamental en réseau informatique qui consiste à déterminer le chemin que doivent emprunter les données (paquets) pour atteindre leur destination. Ce mécanisme se déroule principalement à la couche 3 (Réseau) du modèle OSI, où les routeurs et les équipements connectés décident de la meilleure route pour acheminer les paquets à travers un ou plusieurs réseaux.

1. Rôle du Routage

Le routage intervient lorsque des données doivent traverser plusieurs réseaux pour atteindre leur destination. Contrairement à la communication au sein d’un même réseau local (LAN), qui repose sur des commutateurs (switches), le routage est nécessaire pour connecter différents sous-réseaux ou réseaux distants via des équipements appelés routeurs.

#### Le rôle principal du routage est de 

Acheminer les paquets IP vers leur destination. Trouver le chemin optimal pour minimiser le temps de transit et éviter les congestions. Séparer les domaines de diffusion, limitant ainsi le trafic inutile. 2. Les Routeurs

#### Un routeur est un équipement qui 

Lit l’adresse IP de destination dans chaque paquet. Consulte sa table de routage, une base de données interne contenant les routes disponibles. Décide du meilleur chemin pour transmettre les données, en fonction de critères tels que la distance (nombre de sauts) ou la priorité d’une route. 3. Table de Routage La table de routage est au cœur du fonctionnement des routeurs. Elle contient des informations sur :

Les réseaux connus : Les sous-réseaux que le routeur peut atteindre. Les passerelles : Les routeurs voisins qui peuvent relayer les paquets. Les métriques : Des valeurs utilisées pour évaluer la "coût" ou l’efficacité de chaque route (distance, bande passante, etc.).

#### Exemple d’entrée dans une table de routage 

Réseau Destination Masque Passerelle Interface Sortante 192.168.1.0 255.255.255.0 192.168.0.1 Ethernet 0 10.0.0.0 255.0.0.0 192.168.0.2 Ethernet 1 4. Types de Routage

#### Il existe deux types principaux de routage 

a) Routage statique Les routes sont configurées manuellement par un administrateur réseau. Idéal pour les petits réseaux ou des routes fixes. Avantages : Simplicité, contrôle précis. Inconvénients : Manque de flexibilité en cas de panne ou de changement. b) Routage dynamique Les routes sont déterminées automatiquement à l’aide de protocoles de routage. Les protocoles de routage comme RIP, OSPF, ou BGP permettent aux routeurs d’échanger des informations et d’ajuster les routes en fonction des changements dans le réseau. Avantages : Adaptabilité, gestion automatique des pannes. Inconvénients : Configuration plus complexe et consommation de ressources. 5. Processus de Routage

#### Lorsqu’un paquet arrive sur un routeur 

Le routeur lit l’adresse IP de destination dans l’en-tête du paquet. Il consulte sa table de routage pour déterminer où envoyer le paquet. Si aucune route n’est trouvée, il transmet généralement le paquet à une passerelle par défaut. Le paquet est ensuite envoyé vers le prochain routeur ou la destination finale. 6. Exemple : Routage d’un Paquet Un ordinateur avec l’adresse IP 192.168.1.100 (masque 255.255.255.0) envoie des données à une machine distante 10.0.0.1 :

L’ordinateur identifie que la destination 10.0.0.1 n’est pas sur le même réseau local (192.168.1.0/24). Le paquet est envoyé au routeur configuré comme passerelle par défaut (par exemple 192.168.1.1). Le routeur consulte sa table de routage et trouve une route vers le réseau 10.0.0.0/8. Il transmet le paquet au routeur suivant, ou directement à la destination si elle est atteignable. 7. Avantages du Routage Permet la communication entre différents réseaux. Optimise le trafic réseau en choisissant les meilleurs chemins. Assure la scalabilité en supportant des réseaux complexes et vastes (exemple : Internet).

Le sur-réseau, ou supernetting, est une technique utilisée en réseau pour regrouper plusieurs sous-réseaux en un seul réseau plus grand. C’est l’opération inverse du sous-réseau (subnetting). Le sur-réseau est souvent utilisé pour réduire la taille des tables de routage et simplifier la gestion des adresses IP dans des réseaux de grande envergure, comme l’Internet. 1. Principe du Sur-Réseau Dans un réseau, le sur-réseau consiste à fusionner plusieurs plages d’adresses IP contiguës pour en former une plus grande, en utilisant un masque de réseau moins restrictif (moins de bits à 1 dans le masque). Cela permet de représenter plusieurs sous-réseaux avec une seule entrée dans une table de routage.

#### Exemple sans sur-réseau 

Les réseaux 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 et 192.168.3.0/24 sont représentés comme quatre routes distinctes dans une table de routage.

#### Exemple avec sur-réseau 

Ces mêmes réseaux peuvent être regroupés en un seul sur-réseau : 192.168.0.0/22.

2. Avantages du Sur-Réseau Réduction de la taille des tables de routage : En combinant plusieurs réseaux, on simplifie les tables de routage, ce qui améliore la performance des routeurs. Meilleure gestion des ressources : Utile dans les grandes infrastructures où les adresses doivent être regroupées pour une administration simplifiée. Efficacité sur Internet : Le sur-réseau est utilisé dans le cadre du routage interdomaines (CIDR) pour regrouper des adresses IP en blocs. 3. Sur-Réseau et CIDR Le sur-réseau utilise la notation CIDR (Classless Inter-Domain Routing), qui est une méthode flexible pour attribuer des plages d’adresses IP.

Dans l’exemple 192.168.0.0/22, le préfixe /22 indique que les 22 premiers bits sont réservés pour l’identification du réseau. Cela laisse 10 bits pour les adresses d’hôtes, permettant de regrouper 4 sous-réseaux de 256 adresses (soit 1024 adresses). 4. Étapes pour Créer un Sur-Réseau

#### a) Identifier les sous-réseaux à regrouper 

Les plages doivent être contiguës et alignées sur des limites binaires compatibles. Exemple : 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24, 192.168.3.0/24.

#### b) Trouver le nouveau préfixe 

Convertissez les adresses réseau des sous-réseaux en binaire.

#### Exemple pour les réseaux ci-dessus 

192.168.0.0 = 11000000.10101000.00000000.00000000 192.168.1.0 = 11000000.10101000.00000001.00000000 192.168.2.0 = 11000000.10101000.00000010.00000000 192.168.3.0 = 11000000.10101000.00000011.00000000 Identifiez les bits communs partagés entre ces adresses.

#### Ici, les 22 premiers bits sont identiques 

11000000.10101000.000000** Le masque est donc /22.

#### c) Regrouper les réseaux 

Le sur-réseau correspondant est 192.168.0.0/22, couvrant les plages d’adresses 192.168.0.0 à 192.168.3.255. 5. Limites du Sur-Réseau Perte de granularité : Le regroupement des réseaux peut réduire la précision pour identifier ou isoler des plages spécifiques. Alignement des plages requis : Les sous-réseaux doivent être contigus et alignés sur des limites binaires, ce qui limite parfois son application. Risque de conflits : En superposant des plages d’adresses mal planifiées, des conflits d’adresses IP peuvent survenir. 6. Exemple Pratique Imaginons un fournisseur d’accès à Internet (FAI) qui attribue plusieurs sous-réseaux à ses clients :

192.168.0.0/24 pour Client 1 192.168.1.0/24 pour Client 2 192.168.2.0/24 pour Client 3 192.168.3.0/24 pour Client 4 Au lieu d’annoncer quatre routes distinctes sur Internet, le FAI peut utiliser un sur-réseau 192.168.0.0/22, simplifiant ainsi le routage.

Le sur-réseau est une technique de regroupement d’adresses IP qui permet de simplifier les tables de routage et d’améliorer l’efficacité du réseau, en particulier à grande échelle. Bien qu’il nécessite une planification attentive pour garantir l’alignement des plages d’adresses, il reste un outil puissant pour optimiser l’infrastructure des réseaux modernes.

Oui — et cette fois je vais le faire proprement **en me basant sur le fichier du module 3 et 4**, pas en improvisant.

### Ce que j’ai identifié dans ton cours des modules 3 et 4

#### Les thèmes visibles dans le fichier sont notamment 

- Adressage IPv4**

- structure d’une IPv4 sur 32 bits

- ID réseau / ID hôte

- classes IPv4

- adresses spéciales

- adresses privées

- APIPA

- Calcul réseau**

- adresse réseau

- broadcast

- plage d’hôtes

- calcul avec masque

- CIDR**

- conversion **CIDR → masque**

- conversion **masque → CIDR**

- nombre d’hôtes selon le préfixe

- Sous-réseaux**

- calculs de sous-réseaux

- Domaine de diffusion**

- rôle

- segmentation via routeurs / VLAN

- Routage**

- rôle du routeur

- table de routage

- routage statique vs dynamique

- passerelle par défaut

- protocoles RIP / OSPF / BGP

- Sur-réseau (supernetting)**

- principe

- regroupement de réseaux contigus

- exemple **192.168.0.0/24 à 192.168.3.0/24 → 192.168.0.0/22**

### Donc oui : je peux te faire exactement la même chose que pour les modules 1 et 2

Je te propose de te produire un **quiz Kahoot complet modules 3 et 4** avec la **même logique** :

### Structure

- Niveau facile** : définitions, classes, adresses privées, CIDR de base

- Niveau moyen** : réseau / broadcast / plage d’hôtes / rôle du routage

- Niveau difficile** : calculs de sous-réseaux, conversion masque↔CIDR, nombre d’hôtes, supernetting

- Questions pièges** : vrai/faux sur APIPA, broadcast, passerelle, routeur, etc.

### Format

#### Pour **chaque question**, je te donnerai 

1. **la question Kahoot** 2. **4 réponses** 3. **la bonne réponse** 4. **une explication claire** 5. **un exemple concret**, comme je l’ai fait pour modules 1 et 2

---

### Ce que je te propose maintenant

#### Je peux te générer **tout de suite** un pack complet du style 

### Quiz Kahoot — Modules 3 et 4

- 35 questions**

- difficulté progressive

- 100 % basé sur ton cours**

- avec explication + exemple pour **chaque question**

### Exemple du rendu que je vais te faire :

- Question 1** — Que signifie le préfixe /24 ?

- Question 2** — Quelle est la plage privée de classe B ?

- Question 3** — Convertir 255.255.255.192 en CIDR

- Question 4** — Trouver l’adresse réseau de 192.168.10.100/24

- Question 5** — Trouver le broadcast de 172.25.192.0 avec 255.255.240.0

- Question 6** — Combien d’hôtes utilisables dans un /26 ?

- Question 7** — Quel est le rôle d’une passerelle par défaut ?

- Question 8** — Quelle différence entre routage statique et dynamique ?

- Question 9** — Quel sur-réseau regroupe 192.168.0.0/24 à 192.168.3.0/24 ?

- etc.

---

### Ma recommandation

Vu ce que tu veux, le plus efficace est que je te livre directement **la version finale complète**, comme pour les modules 1 et 2, en un seul bloc.

👉 **Si tu veux, réponds juste :** **“fais-moi le quiz complet modules 3 et 4”**

#### et je te génère **tout le quiz complet maintenant** 

- 35 questions

- réponses

- correction

- explication

- exemple pour chaque question

- sans hors sujet, uniquement à partir du cours.

Oui — je te fais le **quiz complet modules 3 et 4**, en restant **strictement collé à ton cours** : IPv4, classes, adresses privées, APIPA, calcul réseau/broadcast/hôtes, CIDR, sous-réseautage, domaine de diffusion, routage et sur-réseau. Je me base sur les éléments explicitement présents dans ton fichier.

#### Je vais te donner le **même format que pour modules 1 et 2** 

- question Kahoot**

- 4 réponses**

- bonne réponse**

- explication**

- exemple concret**

---

### Quiz Kahoot — Modules 3 et 4

---

### Niveau Facile (1 à 12)

### 1. Combien de bits contient une adresse IPv4 ?

- A. 16

- B. 32 ✅

- C. 48

- D. 64

**Pourquoi ?** Une adresse IPv4 est composée de **4 octets**, donc **4 × 8 = 32 bits**.

**Exemple :** 192.168.1.10 = 4 nombres séparés par des points → chaque nombre = 1 octet.

---

### 2. Dans une adresse IPv4, à quoi sert le masque de sous-réseau ?

- A. À chiffrer l’adresse IP

- B. À séparer la partie réseau et la partie hôte ✅

- C. À convertir l’adresse en MAC

- D. À calculer la passerelle

**Pourquoi ?** Le masque sert à savoir **quels bits appartiennent au réseau** et **quels bits appartiennent à l’hôte**.

**Exemple :** Avec **192.168.1.10/24**, les **24 premiers bits** sont le réseau, les **8 derniers** sont la partie hôte.

---

### 3. Quelle classe IPv4 correspond aux petits réseaux dans le cours ?

- A. Classe A

- B. Classe B

- C. Classe C ✅

- D. Classe D

**Pourquoi ?** Dans ton cours, la **classe C** est utilisée pour les **petits réseaux** et couvre **192.0.0.0 à 223.255.255.255**.

**Exemple :** 192.168.1.0/24 est un cas typique de réseau de type classe C.

---

### 4. Quelle classe IPv4 couvre les adresses de 128.0.0.0 à 191.255.255.255 ?

- A. Classe A

- B. Classe B ✅

- C. Classe C

- D. Classe D

**Pourquoi ?** Le cours indique que la **classe B** correspond à cette plage.

**Exemple :** 172.25.192.0 appartient à cette plage.

---

### 5. Quelle adresse est l’adresse de boucle locale (localhost) ?

- A. 192.168.1.1

- B. 10.0.0.1

- C. 127.0.0.1 ✅

- D. 255.255.255.255

**Pourquoi ?** 127.0.0.1 est l’adresse utilisée pour tester la machine elle-même.

**Exemple :** Quand tu fais un test local sur ton PC, tu peux viser **127.0.0.1**.

---

### 6. Quelle adresse permet d’envoyer un message à tous les hôtes d’un réseau ?

- A. Adresse MAC

- B. Adresse de broadcast ✅

- C. Adresse APIPA

- D. Adresse loopback

**Pourquoi ?** L’adresse de **broadcast** a tous les bits de la partie hôte à 1.

**Exemple :** Dans **192.168.1.0/24**, le broadcast est **192.168.1.255**.

---

### 7. Quelle plage correspond aux adresses privées de classe A ?

- A. 172.16.0.0 à 172.31.255.255

- B. 192.168.0.0 à 192.168.255.255

- C. 10.0.0.0 à 10.255.255.255 ✅

- D. 127.0.0.0 à 127.255.255.255

**Pourquoi ?** C’est l’une des trois plages privées RFC 1918 mentionnées dans ton cours.

**Exemple :** Un grand réseau d’entreprise peut utiliser des adresses comme **10.1.20.5**.

---

### 8. Quelle plage correspond aux adresses privées de classe B ?

- A. 10.0.0.0 à 10.255.255.255

- B. 172.16.0.0 à 172.31.255.255 ✅

- C. 192.168.0.0 à 192.168.255.255

- D. 224.0.0.0 à 239.255.255.255

**Pourquoi ?** Ton cours donne explicitement cette plage privée.

**Exemple :** **172.25.192.0** fait partie de cette plage.

---

### 9. Quelle plage correspond aux adresses privées de classe C ?

- A. 192.168.0.0 à 192.168.255.255 ✅

- B. 172.16.0.0 à 172.31.255.255

- C. 10.0.0.0 à 10.255.255.255

- D. 224.0.0.0 à 239.255.255.255

**Pourquoi ?** C’est la plage privée la plus courante dans les petits réseaux.

**Exemple :** Ta box à la maison utilise souvent **192.168.1.x**.

---

### 10. Quelle plage est utilisée par APIPA ?

- A. 10.x.x.x

- B. 172.16.x.x

- C. 169.254.x.x ✅

- D. 192.168.x.x

**Pourquoi ?** APIPA attribue automatiquement une adresse **169.254.x.x** quand aucun serveur DHCP ne répond.

**Exemple :** Si ton PC n’obtient pas d’adresse du DHCP, il peut s’auto-attribuer **169.254.12.8**.

---

### 11. APIPA permet surtout :

- A. d’accéder à Internet plus vite

- B. de communiquer localement sans DHCP ✅

- C. de chiffrer les paquets

- D. de remplacer le routage

**Pourquoi ?** APIPA permet de **continuer à communiquer sur le réseau local**, mais **pas sur Internet**.

**Exemple :** Deux PC en panne de DHCP peuvent encore échanger des fichiers localement via des adresses 169.254.x.x.

---

### 12. Que signifie la notation /24 dans une adresse IPv4 ?

- A. 24 bits pour les hôtes

- B. 24 bits pour la partie réseau ✅

- C. 24 octets dans le masque

- D. 24 adresses utilisables

**Pourquoi ?** Le **/24** indique que **24 bits** sont réservés au réseau.

**Exemple :** **192.168.1.0/24** → masque **255.255.255.0**.

---

### Niveau Moyen (13 à 24)

### 13. Quel masque correspond au préfixe CIDR /24 ?

- A. 255.255.0.0

- B. 255.255.255.0 ✅

- C. 255.255.255.128

- D. 255.255.255.192

**Pourquoi ?** /24 = **24 bits à 1**, puis 8 bits à 0 → **255.255.255.0**.

**Exemple :** 11111111.11111111.11111111.00000000 = 255.255.255.0

---

### 14. Quel masque correspond au préfixe CIDR /26 ?

- A. 255.255.255.0

- B. 255.255.255.128

- C. 255.255.255.192 ✅

- D. 255.255.255.240

**Pourquoi ?** /26 = 26 bits à 1 → le dernier octet vaut **11000000**, soit **192**.

**Exemple :** /26 = **255.255.255.192**

---

### 15. Quel masque correspond au préfixe /20 ?

- A. 255.255.255.0

- B. 255.255.240.0 ✅

- C. 255.255.224.0

- D. 255.255.255.240

**Pourquoi ?** /20 = 20 bits à 1 → **11111111.11111111.11110000.00000000**.

**Exemple :** Le cours utilise **172.25.192.0 / 255.255.240.0**, soit **/20**.

---

### 16. Quel préfixe CIDR correspond au masque 255.255.255.192 ?

- A. /24

- B. /25

- C. /26 ✅

- D. /28

**Pourquoi ?** 255.255.255.192 = **11111111.11111111.11111111.11000000** → **26 bits à 1**.

**Exemple :** Ce masque laisse **6 bits pour les hôtes**.

---

### 17. Quel préfixe CIDR correspond au masque 255.255.255.240 ?

- A. /26

- B. /27

- C. /28 ✅

- D. /29

**Pourquoi ?** 255.255.255.240 = **11110000** dans le dernier octet → **28 bits à 1** au total.

**Exemple :** Un /28 offre 16 adresses au total, dont 14 hôtes utilisables.

---

### 18. Quel est l’ID réseau de 192.168.1.10/24 ?

- A. 192.168.1.1

- B. 192.168.1.10

- C. 192.168.1.0 ✅

- D. 192.168.1.255

**Pourquoi ?** Avec un /24, le dernier octet est la partie hôte. On le met à 0 pour obtenir l’ID réseau.

**Exemple :** 192.168.1.10 AND 255.255.255.0 = **192.168.1.0**

---

### 19. Quel est le broadcast du réseau 192.168.10.0/24 ?

- A. 192.168.10.0

- B. 192.168.10.1

- C. 192.168.10.254

- D. 192.168.10.255 ✅

**Pourquoi ?** Le broadcast met **tous les bits hôte à 1**.

**Exemple :** Pour un /24, les hôtes vont de **1 à 254**, donc le broadcast est **255**.

---

### 20. Quelle est la plage d’hôtes utilisables du réseau 192.168.10.0/24 ?

- A. 192.168.10.0 à 192.168.10.255

- B. 192.168.10.1 à 192.168.10.254 ✅

- C. 192.168.10.1 à 192.168.10.255

- D. 192.168.10.0 à 192.168.10.254

**Pourquoi ?**

#### On retire 

- l’adresse réseau → **192.168.10.0**

- l’adresse de broadcast → **192.168.10.255**

**Exemple :** Les hôtes utilisables sont donc **192.168.10.1 à 192.168.10.254**.

---

### 21. Quel est le broadcast de 172.25.192.0 avec le masque 255.255.240.0 ?

- A. 172.25.192.255

- B. 172.25.200.255

- C. 172.25.207.255 ✅

- D. 172.25.255.255

**Pourquoi ?** Le cours donne cet exemple complet : **172.25.192.0 /20** a pour broadcast **172.25.207.255**.

**Exemple :** La plage d’hôtes va de **172.25.192.1 à 172.25.207.254**.

---

### 22. Quelle est la plage d’hôtes du réseau 172.25.192.0/20 ?

- A. 172.25.192.0 à 172.25.207.255

- B. 172.25.192.1 à 172.25.207.254 ✅

- C. 172.25.192.1 à 172.25.255.254

- D. 172.25.193.1 à 172.25.207.254

**Pourquoi ?** On retire l’ID réseau et le broadcast.

**Exemple :**

- Réseau : **172.25.192.0**

- Broadcast : **172.25.207.255**

- Hôtes : **172.25.192.1 → 172.25.207.254**

---

### 23. Combien d’hôtes utilisables y a-t-il dans un /26 ?

- A. 30

- B. 62 ✅

- C. 64

- D. 126

**Pourquoi ?** Un /26 laisse **6 bits hôte**. Donc : **2⁶ = 64 adresses**, mais on retire **réseau + broadcast** → **62 hôtes**.

**Exemple :** 192.168.10.0/26 → 62 hôtes utilisables.

---

### 24. Combien d’hôtes utilisables y a-t-il dans un /28 ?

- A. 14 ✅

- B. 16

- C. 30

- D. 62

**Pourquoi ?** Un /28 laisse **4 bits hôte**. Donc : **2⁴ = 16 adresses**, moins 2 = **14 hôtes utilisables**.

**Exemple :** Un petit sous-réseau de 14 machines maximum.

---

### Niveau Difficile (25 à 35)

### 25. Si un réseau 192.168.1.0/24 est découpé en deux sous-réseaux /25, combien obtient-on de sous-réseaux ?

- A. 2 ✅

- B. 4

- C. 8

- D. 16

**Pourquoi ?** On passe de /24 à /25 : on **emprunte 1 bit** pour le sous-réseau. Nombre de sous-réseaux = **2¹ = 2**.

**Exemple :**

- 192.168.1.0/25

- 192.168.1.128/25

---

### 26. Si un réseau /24 devient /25, combien d’hôtes utilisables possède chaque sous-réseau ?

- A. 62

- B. 126 ✅

- C. 128

- D. 254

**Pourquoi ?**

#### Un /25 laisse **7 bits hôte** 

**2⁷ = 128**, donc **126 hôtes utilisables**.

**Exemple :**

- Sous-réseau 1 : 192.168.1.0 à 192.168.1.127

- Sous-réseau 2 : 192.168.1.128 à 192.168.1.255

---

### 27. Quel est le premier sous-réseau obtenu dans l’exemple de découpage de 192.168.1.0/24 en /25 ?

- A. 192.168.1.0/25 ✅

- B. 192.168.1.64/25

- C. 192.168.1.128/25

- D. 192.168.1.255/25

**Pourquoi ?**

#### Le cours donne cet exemple explicitement 

- 192.168.1.0/25**

- 192.168.1.128/25**

**Exemple :** Le premier couvre **192.168.1.0 à 192.168.1.127**.

---

### 28. Quel est le second sous-réseau obtenu dans ce même découpage ?

- A. 192.168.1.64/25

- B. 192.168.1.127/25

- C. 192.168.1.128/25 ✅

- D. 192.168.1.255/25

**Pourquoi ?** Le second bloc commence à **128**, car un /25 coupe le /24 en deux blocs de 128 adresses.

**Exemple :** 192.168.1.128/25 couvre **192.168.1.128 à 192.168.1.255**.

---

### 29. Quelle opération logique permet d’obtenir l’ID réseau à partir d’une IP et de son masque ?

- A. OR

- B. XOR

- C. AND ✅

- D. NOT

**Pourquoi ?** Le cours précise que l’ID réseau est obtenu en faisant **IP AND masque**.

**Exemple :** 192.168.1.10 AND 255.255.255.0 = 192.168.1.0

---

### 30. Quel équipement délimite les domaines de diffusion ?

- A. Hub

- B. Switch

- C. Routeur ✅

- D. Répéteur

**Pourquoi ?** Un routeur **ne transmet pas les diffusions** d’un réseau à un autre. Il sépare donc les broadcast domains.

**Exemple :** Deux sous-réseaux reliés par un routeur ne partagent pas le même broadcast.

---

### 31. Quel équipement transmet les diffusions à tous les ports d’un même VLAN ?

- A. Routeur

- B. Switch ✅

- C. Modem

- D. Pare-feu

**Pourquoi ?** Dans un même VLAN, le switch propage les trames de diffusion à tous les ports concernés.

**Exemple :** Une requête ARP est diffusée à toutes les machines du VLAN.

---

### 32. Quel est le rôle principal d’un routeur selon le cours ?

- A. Convertir les adresses MAC en IP

- B. Acheminer les paquets IP entre réseaux ✅

- C. Chiffrer les communications

- D. Attribuer automatiquement les adresses IP

**Pourquoi ?** Le routage sert à faire passer des paquets **d’un réseau à un autre**.

**Exemple :** Un PC du réseau **192.168.1.0/24** veut joindre **10.0.0.1** → il envoie le paquet à sa passerelle.

---

### 33. Que contient une table de routage ?

- A. Seulement les adresses MAC

- B. Les réseaux connus, les passerelles et les métriques ✅

- C. Les mots de passe Wi-Fi

- D. Les ports TCP ouverts

**Pourquoi ?**

#### Le cours liste 

- réseaux connus

- passerelles

- métriques

- interface sortante

**Exemple :**

#### Une entrée peut dire 

“Pour atteindre **10.0.0.0/8**, passe par **192.168.0.2**”.

---

### 34. Quelle différence caractérise le routage statique ?

- A. Les routes sont apprises automatiquement

- B. Les routes sont configurées manuellement ✅

- C. Il utilise forcément OSPF

- D. Il ne fonctionne qu’en IPv6

**Pourquoi ?** Le routage statique est **saisi par l’administrateur**.

**Exemple :** Sur un petit réseau, on ajoute à la main une route vers **10.0.0.0/8**.

---

### 35. Quel sur-réseau regroupe 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 et 192.168.3.0/24 ?

- A. 192.168.0.0/24

- B. 192.168.0.0/23

- C. 192.168.0.0/22 ✅

- D. 192.168.0.0/20

**Pourquoi ?**

#### Ton cours donne précisément cet exemple de **supernetting** 

4 réseaux /24 contigus peuvent être regroupés en **192.168.0.0/22**.

**Exemple :**

- 192.168.0.0/24

- 192.168.1.0/24

- 192.168.2.0/24

- 192.168.3.0/24

→ regroupés dans **192.168.0.0/22**

---

### Questions pièges / Vrai-Faux (36 à 42)

### 36. Vrai ou Faux

Une adresse APIPA permet normalement d’accéder à Internet.

❌ **Faux**

**Pourquoi ?** Le cours précise que les adresses APIPA **ne sont pas routables** hors du réseau local.

**Exemple :** Deux PC peuvent se parler en 169.254.x.x, mais pas aller sur Internet via cette adresse seule.

---

### 37. Vrai ou Faux

Dans un réseau /24, l’adresse se terminant par .255 peut être l’adresse de broadcast.

✅ **Vrai**

**Exemple :** Dans **192.168.1.0/24**, le broadcast est **192.168.1.255**.

---

### 38. Vrai ou Faux

Le sous-réseautage permet de réduire la taille des domaines de diffusion.

✅ **Vrai**

**Pourquoi ?** C’est un des objectifs du subnetting dans ton cours : **réduire le broadcast** et améliorer les performances.

---

### 39. Vrai ou Faux

Un routeur transmet automatiquement toutes les diffusions d’un réseau à l’autre.

❌ **Faux**

**Pourquoi ?** Au contraire, il **délimite** les domaines de diffusion.

---

### 40. Vrai ou Faux

OSPF, RIP et BGP sont cités comme protocoles de routage dynamique.

✅ **Vrai**

**Pourquoi ?** Le cours les cite explicitement dans la partie routage dynamique.

---

### 41. Vrai ou Faux

Le masque 255.255.255.0 correspond à /24.

✅ **Vrai**

**Exemple :** 11111111.11111111.11111111.00000000 → 24 bits à 1.

---

### 42. Vrai ou Faux

Le sur-réseau est l’opération inverse du sous-réseautage.

✅ **Vrai**

**Pourquoi ?** Le cours dit explicitement que le **sur-réseau (supernetting)** est l’inverse du **subnetting**.

---

### Ce que je te conseille pour ton Kahoot

Si tu veux un Kahoot **efficace et pas trop long**, je te recommande de garder **25 à 30 questions** sur les 42 ci-dessus, par exemple :

### À garder absolument

- 1, 2, 5

- 7, 8, 9, 10

- 12, 13, 14, 15, 16

- 18, 19, 20, 21, 22

- 23, 24

- 29, 30, 32, 33, 34, 35

- 36, 38, 39, 40

#### Comme ça tu couvres 

- IPv4

- classes

- privées / APIPA

- CIDR

- calcul réseau/broadcast/hôtes

- subnetting

- broadcast domain

- routage

- supernetting

---

### Ce que je peux faire maintenant

Je peux enchaîner directement avec **l’étape suivante** et te préparer **la version prête à copier dans Kahoot**, c’est-à-dire un tableau propre comme ça :

| Question | Réponse 1 | Réponse 2 | Réponse 3 | Réponse 4 | Bonne réponse | | -------- | --------: | --------: | --------: | --------: | ------------: |

Donc **sans les explications**, juste le format **copier-coller Kahoot**.

#### Si tu veux, réponds juste 

**“fais-moi la version Kahoot prête à copier”**

et je te la prépare pour **les modules 3 et 4**.

## cours kahoot module 5 et 6

### Module 5 - Les premières commandes

Objectifs Commande ARP Commandes IPCONFIG et IP Commande PING Commande NETSTAT Commandes TRACERT et TRACEROUTE Démonstration - Les commandes Fichiers pré-requis du TP TP du Module 05 - Utilisation des commandes

La commande ARP (Address Resolution Protocol) est un outil réseau essentiel utilisé pour gérer et diagnostiquer les associations entre les adresses IP (niveau réseau) et les adresses MAC (niveau liaison) au sein d'un réseau local (LAN).

1. Qu'est-ce que l'ARP ? L’Address Resolution Protocol est un protocole de la couche Liaison (couche 2) du modèle OSI, utilisé pour convertir une adresse IP en une adresse MAC.

#### Chaque machine dans un réseau local possède 

Une adresse IP, qui identifie logiquement l’appareil sur un réseau. Une adresse MAC, qui est une identification physique unique associée à la carte réseau. L'ARP permet de faire correspondre une adresse IP à une adresse MAC pour que les données puissent être acheminées correctement au sein du réseau local.

2. Rôle de la commande ARP

#### La commande ARP permet 

De consulter la table ARP locale (cache ARP). De forcer la mise à jour de cette table. D’ajouter ou de supprimer manuellement des entrées dans cette table. Chaque machine garde une table ARP en cache contenant les associations IP/MAC pour éviter de résoudre à chaque fois l’adresse MAC correspondante à une adresse IP.

3. Syntaxe Générale de la Commande ARP Sous Windows ou Linux, la commande arp s'utilise généralement comme suit :

a) Afficher la table ARP

`arp -a`

Cette commande liste toutes les associations IP/MAC actuellement connues par le système.

Interface: 192.168.1.1 --- 0x3 Adresse Internet Adresse physique Type 192.168.1.100 00-14-22-01-23-45 Dynamique 192.168.1.101 00-15-5d-8b-12-34 Dynamique Adresse Internet : L’adresse IP de l’hôte. Adresse physique : L’adresse MAC correspondante. Type : Indique si l’entrée a été obtenue dynamiquement (via ARP) ou ajoutée statiquement. b) Ajouter une entrée dans la table ARP

`arp -s &lt;adresse_IP&gt; &lt;adresse_MAC&gt;`

#### Exemple 

`arp -s 192.168.1.200 00-14-22-01-23-45`

Cela crée une entrée statique liant l’adresse IP 192.168.1.200 à l’adresse MAC 00-14-22-01-23-45.

c) Supprimer une entrée de la table ARP Sous Windows, on ne peut pas supprimer une entrée spécifique, mais il est possible de vider tout le cache ARP avec :

`arp -d *`

#### Sous Linux, la commande est légèrement différente et utilise ip 

sudo ip neigh flush all 4. Fonctionnement d'ARP Lorsqu'une machine veut communiquer avec une autre dans un réseau local, elle suit ces étapes :

Elle vérifie si l'adresse IP cible est déjà associée à une adresse MAC dans sa table ARP. Si ce n'est pas le cas, elle envoie une requête ARP broadcast à tous les appareils du réseau local.

#### Exemple de requête ARP 

« Qui a l’adresse IP 192.168.1.100 ? Répondez à 192.168.1.1. » L’appareil correspondant à l’adresse IP cible répond avec son adresse MAC. La machine d'origine met à jour sa table ARP avec cette association pour de futures communications. 5. Problèmes Fréquents Liés à ARP Entrées erronées dans la table ARP : Une table ARP incorrecte peut empêcher la communication avec certains appareils. Attaques ARP (ARP Spoofing) : Un attaquant peut envoyer des réponses ARP falsifiées pour intercepter ou rediriger le trafic réseau. Cache ARP obsolète : Parfois, des entrées ARP expirées ou invalides empêchent la communication. 6. Cas d'Usage Courants a) Diagnostic réseau Si un appareil ne répond pas, vérifier la table ARP avec arp -a peut montrer si l’adresse MAC est connue et si la résolution ARP est correcte.

b) Détection d’attaques Une réponse ARP anormale (par exemple, deux IP associées à la même adresse MAC) peut indiquer une attaque ARP spoofing.

c) Configuration manuelle Dans des environnements critiques où ARP dynamique peut causer des problèmes, il est possible de configurer manuellement les associations IP/MAC.

7. Limites d'ARP

`ARP fonctionne uniquement sur les réseaux de type Ethernet et dans les réseaux locaux (LAN).`

Il n’est pas utilisé pour la communication inter-réseaux ; le routage intervient dans ce cas. Dans IPv6, ARP est remplacé par le protocole NDP (Neighbor Discovery Protocol).

La commande ipconfig La commande ipconfig est un outil en ligne de commande sous Windows qui permet d’afficher et de gérer les configurations réseau des interfaces d’un ordinateur. Elle est particulièrement utile pour diagnostiquer et résoudre les problèmes de connexion réseau.

1. Rôle de la commande ipconfig

#### La commande ipconfig fournit des informations détaillées sur 

Les adresses IP attribuées à chaque interface réseau. Le masque de sous-réseau. La passerelle par défaut. Les informations DNS et DHCP.

#### Elle peut aussi être utilisée pour effectuer certaines actions comme 

Libérer ou renouveler une adresse IP attribuée par un serveur DHCP. Vider ou actualiser le cache DNS. 2. Syntaxe Générale La commande ipconfig est utilisée directement dans une console Windows (CMD ou PowerShell). La syntaxe générale est la suivante :

`ipconfig [options]`

3. Options les Plus Courantes a) Afficher les informations réseau

`ipconfig`

Cette commande affiche un résumé des configurations réseau de toutes les interfaces actives.

#### Exemple de sortie 

#### Carte Ethernet Ethernet 

Suffixe DNS propre à la connexion. . . . : exemple.local Adresse IPv4 . . . . . . . . . . . . . . : 192.168.1.100 Masque de sous-réseau . . . . . . . . . : 255.255.255.0 Passerelle par défaut . . . . . . . . . : 192.168.1.1 b) Afficher des informations détaillées

`ipconfig /all`

Cette option fournit une vue exhaustive des paramètres réseau, y compris :

Adresses MAC. Serveurs DNS. Adresse IP attribuée manuellement ou par DHCP. Bail DHCP (heure de début et expiration).

#### Exemple de sortie pour /all 

#### Carte Ethernet Ethernet 

Suffixe DNS propre à la connexion. . . . : exemple.local Description . . . . . . . . . . . . . . : Realtek PCIe GBE Family Controller Adresse physique . . . . . . . . . . . : 00-1B-44-11-3A-B7 DHCP activé. . . . . . . . . . . . . . : Oui Adresse IPv4 . . . . . . . . . . . . . : 192.168.1.100 Masque de sous-réseau . . . . . . . . . : 255.255.255.0 Passerelle par défaut . . . . . . . . . : 192.168.1.1 Serveurs DNS . . . . . . . . . . . . . : 8.8.8.8 : 8.8.4.4 c) Libérer une adresse IP

`ipconfig /release`

Cette commande libère l’adresse IP attribuée par DHCP, mettant l’interface en état de recherche d’une nouvelle adresse.

d) Renouveler une adresse IP

`ipconfig /renew`

Cette commande demande une nouvelle adresse IP au serveur DHCP.

#### Utilisation combinée 

#### Libérer une adresse 

`ipconfig /release`

#### Puis demander une nouvelle 

`ipconfig /renew`

e) Vider le cache DNS

`ipconfig /flushdns`

Cette commande efface les entrées obsolètes ou corrompues du cache DNS. Cela peut résoudre des problèmes liés à la résolution de noms de domaine.

f) Afficher le cache DNS

`ipconfig /displaydns`

Cette commande affiche les noms de domaine résolus et stockés en cache par le système.

g) Renouveler les paramètres DNS

`ipconfig /registerdns`

Elle force le renouvellement des enregistrements DNS dynamiques de la machine auprès du serveur DNS.

4. Cas d’Utilisation Pratique 1. Diagnostiquer une connexion réseau Utilisez ipconfig pour vérifier l’adresse IP actuelle de votre machine, la passerelle par défaut, et les serveurs DNS. Si vous n’avez pas d’adresse IP ou si elle commence par 169.254.x.x (APIPA), cela indique un problème avec le serveur DHCP.

2. Résoudre des problèmes DNS Si un site web ne se charge pas ou si vous suspectez un problème de résolution DNS, utilisez :

`ipconfig /flushdns`

Cela efface le cache DNS local et force le système à récupérer des informations DNS actualisées.

3. Changer d’adresse IP Si vous êtes sur un réseau où l’adresse IP est assignée dynamiquement et que vous suspectez un conflit d’adresse, libérez et renouvelez votre adresse IP :

`ipconfig /release`

`ipconfig /renew`

4. Confirmer une configuration réseau Avec ipconfig /all, vous pouvez vérifier si une interface est configurée en DHCP ou en IP statique, ainsi que les serveurs DNS configurés.

Elle est limitée aux systèmes Windows. Sous Linux, on utilise ifconfig (déprécié) ou ip.

Elle ne permet pas de configurer directement les interfaces réseau (contrairement à netsh ou ip sur Linux).

Elle ne donne pas d’informations sur le trafic réseau (utilisez netstat ou un outil comme Wireshark pour cela).

La commande ip est un outil en ligne de commande polyvalent utilisé sous Linux pour gérer et afficher les configurations réseau. Elle remplace progressivement l'ancienne commande ifconfig et offre une plus grande richesse de fonctionnalités. La commande ip fait partie de la suite d’outils iproute2, largement utilisée pour configurer les interfaces réseau, les routes, et analyser les connexions réseau. 1. Rôle de la commande ip

#### Avec la commande ip, vous pouvez 

Afficher et configurer les interfaces réseau. Gérer les adresses IP. Ajouter, supprimer ou consulter les routes réseau. Configurer les tunnels réseau. Diagnostiquer les problèmes de connectivité. 2. Syntaxe Générale

`ip [options] [objet] [action]`

#### Options principales 

-s : Afficher des statistiques. -4 : Afficher uniquement les informations IPv4. -6 : Afficher uniquement les informations IPv6.

#### Objets principaux 

link : Gestion des interfaces réseau. addr : Gestion des adresses IP. route : Gestion des tables de routage. neigh : Gestion des tables ARP/voisinage. 3. Commandes Courantes a) Gestion des interfaces réseau

#### Afficher les interfaces réseau actives 

`ip link`

Cela liste les interfaces réseau disponibles avec leurs statuts.

#### Exemple de sortie 

1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00 2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc fq_codel state UP mode DEFAULT group default link/ether 12:34:56:78:9a:bc brd ff:ff:ff:ff:ff:ff

#### Activer une interface réseau 

`ip link set dev eth0 up`

#### Désactiver une interface réseau 

`ip link set dev eth0 down`

b) Gestion des adresses IP

#### Afficher les adresses IP des interfaces réseau 

`ip addr`

#### Ou uniquement IPv4 

`ip -4 addr`

#### Ajouter une adresse IP à une interface 

`ip addr add 192.168.1.200/24 dev eth0`

#### Supprimer une adresse IP 

`ip addr del 192.168.1.200/24 dev eth0`

c) Gestion des routes

#### Afficher la table de routage 

`ip route`

#### Exemple de sortie 

default via 192.168.1.1 dev eth0 192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.100

#### Ajouter une route 

`ip route add 192.168.2.0/24 via 192.168.1.1 dev eth0`

#### Supprimer une route 

`ip route del 192.168.2.0/24`

d) Gestion des voisins ARP

#### Afficher les entrées ARP (voisins) 

`ip neigh`

#### Exemple de sortie 

192.168.1.1 dev eth0 lladdr 12:34:56:78:9a:bc REACHABLE

#### Ajouter une entrée ARP statique 

`ip neigh add 192.168.1.200 lladdr 12:34:56:78:9a:bc dev eth0`

#### Supprimer une entrée ARP 

`ip neigh del 192.168.1.200 dev eth0`

La commande ping est un outil de diagnostic réseau indispensable. Son rôle est de tester la connectivité entre un ordinateur local et un autre appareil sur un réseau (local ou distant) en utilisant le protocole ICMP (Internet Control Message Protocol). Elle mesure également la latence, c'est-à-dire le temps nécessaire pour qu’un paquet atteigne la destination et que la réponse revienne. 1. Rôle de la commande ping

#### La commande ping permet 

De vérifier si une machine (ou une adresse IP) est accessible sur le réseau. D’évaluer la qualité de la connexion (latence, pertes de paquets). D’identifier les problèmes de connectivité (pannes réseau, routeurs non fonctionnels, etc.). 2. Fonctionnement de la commande ping

#### Envoi d’une requête ICMP Echo Request 

L'ordinateur envoie un paquet ICMP Echo Request à la machine cible (par son adresse IP ou son nom de domaine).

#### Réception d’une réponse ICMP Echo Reply 

Si la machine cible est joignable, elle renvoie un paquet ICMP Echo Reply. Sinon, des messages d’erreur ou des délais expirés sont retournés.

#### Analyse des résultats 

Les informations sur le délai (RTT : Round-Trip Time) et les éventuelles pertes de paquets sont affichées.

3. Syntaxe de la commande ping

`ping [options] destination`

destination : Adresse IP ou nom de domaine de la machine cible (par exemple : 8.8.8.8 ou www.google.com). 4. Exemple d’utilisation

`ping www.google.com`

#### Exemple de sortie 

`PING www.google.com (142.250.74.68): 56 data bytes 64 bytes from 142.250.74.68: icmp_seq=0 ttl=115 time=18.3 ms 64 bytes from 142.250.74.68: icmp_seq=1 ttl=115 time=17.5 ms 64 bytes from 142.250.74.68: icmp_seq=2 ttl=115 time=17.8 ms --- www.google.com ping statistics --- 3 packets transmitted, 3 packets received, 0% packet loss round-trip min/avg/max/stddev = 17.5/17.8/18.3/0.3 ms`

#### Explications 

icmp_seq= : Numéro de la requête ICMP. ttl= : "Time To Live", le nombre maximum de sauts que le paquet peut effectuer avant d'être abandonné. time= : Temps aller-retour du paquet en millisecondes. statistiques : Nombre de paquets envoyés/reçus, pourcentage de pertes, et temps moyen. 5. Options courantes Nombre de requêtes : Envoyer un nombre spécifique de requêtes (par exemple, 4) :

`ping -c 4 www.google.com`

#### Taille du paquet : Spécifier la taille des paquets ICMP 

`ping -s 1000 www.google.com`

Intervalle entre les pings : Modifier l’intervalle (par défaut : 1 seconde) :

`ping -i 0.5 www.google.com`

`Ping continu (par défaut sous Linux) : La commande continue jusqu’à interruption manuelle (Ctrl+C) :`

`ping 8.8.8.8`

Afficher uniquement les résultats utiles : Ne pas afficher chaque réponse, seulement les statistiques :

`ping -q www.google.com`

6. Problèmes détectés par ping

#### 1. Aucune réponse 

Request timeout for icmp_seq X

#### Cela peut indiquer 

La machine cible est hors ligne. Un pare-feu bloque les paquets ICMP. Une erreur de configuration réseau.

#### 2. Latence élevée 

#### Si le temps de réponse (time=) est élevé, cela peut indiquer 

Une surcharge du réseau. Une distance importante entre les deux machines. Des problèmes de performances sur la machine ou le routeur.

#### 3. Pertes de paquets 

#### Si des paquets sont perdus, cela peut indiquer 

Un problème de connectivité réseau. Une mauvaise qualité de la liaison. Une saturation du réseau. 7. Cas pratiques

#### 1. Tester la connectivité vers une machine spécifique 

`ping 192.168.1.1`

Utilisé pour vérifier si un routeur ou une machine locale est accessible.

#### 2. Vérifier l’accès à Internet 

`ping 8.8.8.8`

Cette commande teste la connexion vers les serveurs DNS publics de Google.

#### 3. Diagnostiquer un problème de nom de domaine 

Si le nom de domaine ne résout pas, utilisez l’adresse IP directement pour vérifier si le problème vient du DNS.

8. Limitations de la commande ping Blocage des paquets ICMP : Certains serveurs ou réseaux bloquent les requêtes ICMP pour des raisons de sécurité, ce qui rend ping inefficace dans ces cas. ICMP non fiable pour mesurer la latence réelle : ICMP est traité avec une priorité inférieure par certains routeurs, ce qui peut donner des résultats biaisés.

`Ping ne teste pas la bande passante : Il mesure uniquement la latence et la perte de paquets.`

La commande netstat (abréviation de "network statistics") est un outil réseau puissant utilisé pour afficher des informations sur les connexions réseau actives, les ports d'écoute, et diverses statistiques relatives au réseau. Elle est essentielle pour diagnostiquer les problèmes réseau et analyser les connexions entrantes ou sortantes sur un système. 1. Rôle de la commande netstat

`Netstat fournit des informations détaillées sur :`

Les connexions réseau actives (TCP/UDP). Les ports d'écoute ouverts sur le système. Les adresses IP et les ports distants. Les protocoles utilisés (TCP, UDP). Les statistiques d'interface réseau (nombre de paquets envoyés/reçus, erreurs, etc.). 2. Syntaxe générale

`netstat [options]`

3. Options courantes

`netstat -a : Affiche toutes les connexions actives (TCP et UDP) et les ports d'écoute.`

`netstat -n : Affiche les adresses et ports en format numérique (sans résolution de nom).`

`netstat -t : Affiche uniquement les connexions TCP actives.`

`netstat -u : Affiche uniquement les connexions UDP actives.`

`netstat -l : Liste uniquement les ports en écoute (listening).`

`netstat -p : Affiche les processus associés aux connexions (nécessite les droits d'administration sous Linux).`

`netstat -r : Montre la table de routage du système.`

`netstat -e : Affiche les statistiques détaillées des interfaces réseau (paquets, erreurs, etc.).`

4. Interpréter les connexions réseau

#### Les informations affichées par netstat incluent 

Protocole : TCP ou UDP. Adresse locale : Adresse IP et port local. Adresse distante : Adresse IP et port du destinataire.

#### État de la connexion (TCP uniquement) 

LISTEN : Le port attend des connexions entrantes. ESTABLISHED : Connexion active et opérationnelle. CLOSE_WAIT : Connexion fermée par l'autre partie, en attente de fermeture locale. TIME_WAIT : Connexion fermée, mais en attente pour éviter des collisions. SYN_SENT : Une requête de connexion a été envoyée, mais pas encore établie. 5. Pourquoi utiliser netstat ? Diagnostic réseau : Identifier les connexions non autorisées ou suspectes. Analyse de performance : Repérer les ports saturés ou les erreurs d'interface. Sécurité : Vérifier les services en écoute pour identifier les failles potentielles. Dépannage des applications : Comprendre les dépendances réseau des processus. Depuis plusieurs années, la commande netstat est progressivement remplacée par d'autres outils comme ss (sous Linux) ou Get-NetTCPConnection (sous PowerShell pour Windows). Ces outils sont plus performants et offrent des fonctionnalités modernes adaptées aux réseaux actuels. 6. Exemple d'utilisation concrète 1. Identifier les connexions suspectes Si un serveur montre des signes de lenteur ou de compromission, utilisez :

`netstat -an`

Analysez les connexions établies avec des adresses IP ou ports inhabituels.

2. Vérifier si un service est en écoute Pour vérifier si un service (par exemple, un serveur web sur le port 80) fonctionne correctement :

`netstat -an | grep :80`

3. Analyser les processus réseau Pour comprendre quel processus utilise un port spécifique (par exemple, le port 22 pour SSH) :

`netstat -p | grep :22`

La commande tracert (abréviation de "trace route") est un outil réseau utilisé pour déterminer le chemin emprunté par des paquets pour atteindre une destination donnée. Elle identifie tous les routeurs intermédiaires (ou "hops") que les paquets traversent entre le point de départ (votre machine) et l'adresse cible.

Sous Linux, l’équivalent de tracert est la commande traceroute.

Rôle de la commande tracert Analyse du chemin réseau : Elle montre les différentes étapes (routeurs) entre votre ordinateur et une destination spécifique. Diagnostic réseau : Identifie où un problème de connectivité peut survenir, comme un délai ou une rupture dans le chemin. Performance : Fournit les temps de réponse (latences) pour chaque routeur traversé. Syntaxe générale

`tracert [options] &lt;adresse-cible&gt;`

Fonctionnement La commande tracert utilise le protocole ICMP (Internet Control Message Protocol) pour envoyer des paquets à la destination. Elle fonctionne en augmentant progressivement la valeur du TTL (Time To Live) des paquets : TTL = 1 : Le premier routeur reçoit le paquet, le décrémente à 0, puis renvoie un message d'erreur ICMP (TTL exceeded). TTL = 2 : Le second routeur reçoit le paquet, et ainsi de suite. Chaque réponse ICMP permet à tracert d’identifier les routeurs intermédiaires. Exemple d'utilisation

`tracert www.google.com`

#### Exemple de sortie 

1 &lt;1 ms &lt;1 ms &lt;1 ms 192.168.1.1 2 12 ms 10 ms 11 ms 10.0.0.1 3 25 ms 23 ms 22 ms 203.0.113.1 4 50 ms 48 ms 49 ms 8.8.8.8 Chaque ligne représente un routeur traversé. Les colonnes montrent les temps de réponse pour 3 essais successifs. Si une ligne contient des astérisques (* * *), cela indique que le routeur intermédiaire n’a pas répondu (peut être dû à un filtrage ICMP). Options courantes /d N'affiche pas les noms DNS des routeurs, uniquement leurs adresses IP (plus rapide). /h &lt;nombre&gt; Définit un nombre maximum de sauts (TTL). Par défaut, 30 sauts sont autorisés. /w &lt;millisecondes&gt; Définit le temps d’attente avant de déclarer un routeur injoignable. Par défaut, 4000 ms (4 secondes). /4 Force l’utilisation d’IPv4. /6 Force l’utilisation d’IPv6.

#### Exemple avec des options 

`tracert /d /h 15 /w 1000 www.google.com`

/d : Pas de résolution DNS. /h 15 : Limite à 15 sauts. /w 1000 : Temps d’attente réduit à 1 seconde. Cas d’utilisation 1. Identifier un problème de connectivité Si vous ne pouvez pas atteindre un site ou une ressource réseau, tracert peut révéler où le trafic est bloqué ou ralentit.

#### Exemple 

Si les premiers sauts répondent mais que certains sauts plus loin ne répondent pas, le problème est probablement externe (chez un FAI ou au-delà). Si le premier saut ne répond pas, le problème est sur votre réseau local. 2. Tester la latence

`Tracert peut montrer où la latence augmente significativement, indiquant des points de congestion dans le chemin.`

3. Comprendre les routes réseau

`Traceroute montre le chemin pris par les paquets, utile pour vérifier si le trafic suit une route attendue (utile dans les configurations multi-sites ou avec VPN).`

Filtrage ICMP : Certains routeurs ou pare-feu peuvent bloquer les messages ICMP, entraînant des lignes avec des astérisques dans les résultats. Routes dynamiques : Le chemin affiché par tracert peut changer rapidement si le routage dynamique est utilisé (BGP, OSPF, etc.). Temps d'attente limité : Un routeur lent ou surchargé peut ne pas répondre dans le délai imparti.

`Traceroute sous Linux`

Sous Linux, on utilise généralement traceroute au lieu de tracert.

sudo apt install traceroute # Ubuntu/Debian sudo yum install traceroute # CentOS/Red Hat

#### Exemple d'utilisation 

`traceroute www.google.com`

### Module 6 - L'adressage IPv6

Objectifs La structure d'une adresse IPv6 (RFC 2800) Les différents types d'adresses IPv6 Adresse de monodiffusion de Lien-Local Adresses de monodiffusion globale unique Adresses de multidiffusion Adresses IPv6 d'un hôte Démonstration - Les adresses IPv6 Enoncé du TP - L'adressage IPv6 TP - Adressage IPv6

L'adresse IPv6 (Internet Protocol version 6) est la version la plus récente du protocole Internet, conçue pour résoudre les limitations de l'IPv4, notamment la pénurie d'adresses disponibles. Avec un espace d'adressage beaucoup plus grand et des fonctionnalités avancées, l'IPv6 est essentiel pour répondre aux besoins de l'Internet moderne. Structure d'une adresse IPv6 Une adresse IPv6 est composée de 128 bits, soit quatre fois la taille d'une adresse IPv4 (32 bits). Elle est représentée sous forme de huit groupes de quatre chiffres hexadécimaux, séparés par des deux-points (:) :

2001:0db8:85a3:0000:0000:8a2e:0370:7334 Chaque groupe (appelé quartet) représente 16 bits, soit deux octets.

#### Exemple d'adresse IPv6 décomposée 

2001 : 0db8 : 85a3 : 0000 : 0000 : 8a2e : 0370 : 7334 2001:0db8 : Identifiant du réseau. 8a2e:0370:7334 : Identifiant de l'hôte. Format Comprimé des Adresses IPv6 Les adresses IPv6 peuvent être simplifiées pour une lecture et une écriture plus aisées.

#### Règles de simplification 

Supprimez les zéros initiaux dans chaque quartet. Exemple : 2001:0db8:0000:0000:8a2e:0370:7334 devient 2001:db8:0:0:8a2e:370:7334.

Remplacez les séries continues de 0 par :: une seule fois dans l’adresse. Exemple : 2001:0db8:0000:0000:0000:ff00:0042:8329 devient 2001:db8::ff00:42:8329.

Plages Spéciales d'Adresses IPv6

#### Adresses locales de lien 

Plage : FE80::/10 Utilisées pour la communication entre appareils sur un réseau local sans configuration particulière.

#### Adresses globales 

Plage : 2000::/3 Correspondent aux adresses routables sur Internet.

#### Adresses multicast 

Plage : FF00::/8 Utilisées pour envoyer des paquets à plusieurs destinataires.

#### Adresse de loopback (boucle locale) 

Adresse : ::1 Équivalent à 127.0.0.1 en IPv4, utilisée pour tester la connectivité locale.

Avantages de l'IPv6 Espace d'Adressage Étendu IPv6 permet de générer 3,4 × 10^38 adresses (contre 4,3 milliards pour IPv4). Cela garantit des adresses suffisantes pour les décennies à venir, y compris avec l'expansion de l'IoT. Suppression du NAT (Network Address Translation)

Chaque appareil peut avoir une adresse unique, éliminant le besoin de traductions d'adresses. Meilleure Gestion des Flux

L'IPv6 inclut une prise en charge native de la QoS (Qualité de Service). Simplification de la Configuration

Grâce à l'auto-configuration stateless, les appareils peuvent générer automatiquement leurs adresses à partir du préfixe réseau. Sécurité Intégrée

L'IPv6 inclut IPsec (sécurité IP) pour chiffrer et authentifier les données. Compatibilité IPv6 et IPv4 IPv6 et IPv4 ne sont pas directement compatibles, car leurs structures diffèrent. Cependant, plusieurs techniques permettent leur coexistence :

Double Stack : Les appareils utilisent les deux protocoles simultanément. Tunneling : Les paquets IPv6 sont encapsulés dans des paquets IPv4. Traduction d'adresses (NAT64) : Permet aux appareils IPv6 de communiquer avec des appareils IPv4.

Types d'Adresses IPv6

#### Les adresses IPv6 sont classées en trois catégories principales 

a) Adresses Unicast Utilisées pour identifier un unique appareil sur un réseau. Exemple : Adresse d'une machine spécifique. b) Adresses Multicast Permettent d'envoyer des paquets à plusieurs appareils en une seule transmission. Remplacent en grande partie les diffusions (broadcast) de l'IPv4. c) Adresses Anycast Permettent d'envoyer des paquets au nœud le plus proche parmi un groupe partageant la même adresse. Adresses spécifiques : : /0 Représente tous les réseaux Utilisé comme route par défaut ≈ 0.0.0.0/0 pour IPv4 : : /128 Adresse non spécifiée Utilisée par un hôte avant d’obtenir une adresse lien-local (link-local) : : 1 /128 Adresse de boucle locale ≈ 127.0.0.1 FE80 : : /10 Adresses monodiffusions d’auto-configuration de lien-local ≈ @APIPA IPv4 FF00 : : /8 Adresses multidiffusions FC00 : : /8 Adresses multidiffusions Le 8ième bit = 1 : FD00 : : /8 ≈ @IPv4 privées Non routable sur internet 2000 : : /3 Adresses locales uniques (Unique-Local) Routable sur Internet

Les adresses de monodiffusion globale unique (ou Global Unicast Addresses, GUA) en IPv6 sont des adresses routables sur Internet. Elles identifient de manière unique un appareil ou une interface sur un réseau mondial, similaire aux adresses publiques IPv4.

Elles sont utilisées pour la communication point-à-point entre des appareils sur Internet ou sur des réseaux privés. Chaque appareil avec une adresse GUA peut être directement atteint depuis n'importe quel autre appareil à travers le monde, à condition que les règles de routage et de pare-feu le permettent.

Structure des Adresses GUA Une adresse IPv6 GUA est une adresse de 128 bits divisée en plusieurs parties :

| Préfixe global | Sous-réseau | Identifiant d’interface | | 48 bits | 16 bits | 64 bits |

#### Détails 

Préfixe global (48 bits)

Identifie un réseau spécifique au niveau mondial. Assigné par les registres Internet régionaux (RIR, comme RIPE ou ARIN). Identifiant de sous-réseau (16 bits)

Permet de diviser le réseau global en sous-réseaux plus petits au sein d'une organisation. Identifiant d’interface (64 bits)

Identifie une interface unique sur le réseau. Généralement dérivé de l'adresse MAC grâce à le format EUI-64 ou configuré manuellement.

Les Adresses de Multidiffusion en IPv6 Les adresses de multidiffusion (ou multicast addresses) en IPv6 permettent de transmettre des paquets à un groupe spécifique de nœuds plutôt qu’à un seul destinataire (comme en monodiffusion) ou à tous les nœuds d’un réseau (comme en diffusion). Cela est utile pour optimiser l’utilisation de la bande passante dans des cas où plusieurs destinataires doivent recevoir le même flux de données.

1. Définition d'une Adresse de Multidiffusion Une adresse de multidiffusion IPv6 est utilisée pour identifier un groupe de nœuds. Un paquet envoyé à une adresse de multidiffusion est livré à tous les nœuds faisant partie du groupe associé à cette adresse.

2. Format d’une Adresse de Multidiffusion IPv6 Les adresses de multidiffusion IPv6 appartiennent à la plage FF00::/8. Cela signifie que toutes les adresses de multidiffusion commencent par FF dans leurs 8 premiers bits. Elles sont composées de plusieurs champs définissant leur portée et leur type.

#### Structure générale 

| 8 bits (préfixe) | 4 bits (flags) | 4 bits (scope) | 112 bits (identifiant de groupe) | Préfixe : Toujours FF, indiquant une adresse de multidiffusion. Flags : Indiquent des propriétés spécifiques de l’adresse. Scope : Définit l’étendue ou la portée de la diffusion (locale, globale, etc.). Identifiant de groupe : Identifie le groupe de nœuds destinataires. Exemples d’Adresses de Multidiffusion FF02::1

Scope : Lien local. Description : Groupe contenant tous les nœuds d’un réseau local. FF02::2

Scope : Lien local. Description : Groupe contenant tous les routeurs d’un réseau local. FF02::1:2

Scope : Lien local. Tous les serveurs et agents relais DHCP du lien local FF02::fb

Scope : Lien local. Multidiffusion DNS FF05::1

Scope : Site local. Description : Tous les nœuds au sein d’un site spécifique. FF0E::101

Scope : Global. Description : Une multidiffusion spécifique au niveau mondial. Utilisations des Adresses de Multidiffusion Les adresses de multidiffusion sont largement utilisées dans des applications nécessitant une diffusion simultanée vers plusieurs destinataires, notamment :

Diffusion Vidéo et Audio (Streaming) : Envoyer un flux multimédia à plusieurs utilisateurs sans répéter l'envoi à chaque destinataire. Routage Multicast : Protocoles comme PIM (Protocol Independent Multicast) utilisent des adresses de multidiffusion pour gérer les groupes. Découverte de Services : Protocoles comme mDNS (Multicast DNS) ou SSDP (Simple Service Discovery Protocol) utilisent des adresses multicast pour découvrir des périphériques ou services sur un réseau local. Protocoles Réseaux Internes : OSPF (Open Shortest Path First) utilise des adresses multicast pour échanger des informations entre routeurs.

Oui — voici le **quiz complet modules 5 et 6**, dans le **même style** que pour les modules précédents :

- QCM**

- vrai/faux**

- difficulté progressive**

- explication + exemple pour chaque question**

---

### Quiz Kahoot — Modules 5 et 6

---

### Niveau Facile (1 à 12)

### 1. Que signifie ARP ?

- A. Address Routing Protocol

- B. Address Resolution Protocol ✅

- C. Automatic Relay Process

- D. Address Register Protocol

**Pourquoi ?**

`ARP signifie **Address Resolution Protocol**. Il sert à faire le lien entre une **adresse IP** et une **adresse MAC** sur un réseau local.`

**Exemple :** Un PC veut joindre **192.168.1.100** mais ne connaît pas sa MAC → il utilise ARP.

---

### 2. À quoi sert principalement ARP ?

- A. À convertir une adresse MAC en nom DNS

- B. À convertir une adresse IP en adresse MAC ✅

- C. À attribuer une adresse IP automatiquement

- D. À chiffrer les trames Ethernet

**Pourquoi ?**

`ARP sert à trouver l’adresse **MAC** correspondant à une adresse **IP** locale.`

**Exemple :** “Qui a **192.168.1.100** ?” → la machine répond avec sa MAC.

---

### 3. Quelle commande permet d’afficher la table ARP ?

- A. arp -s

- B. arp -a ✅

- C. arp -d

- D. ipconfig /all

**Pourquoi ?** `arp -a` affiche les associations **IP ↔ MAC** connues par la machine.

**Exemple :**

```bash

`arp -a`

```

---

### 4. Que contient principalement une table ARP ?

- A. Des noms de domaine

- B. Des associations IP / MAC ✅

- C. Des routes statiques

- D. Des mots de passe réseau

**Pourquoi ?** La table ARP contient le **cache des correspondances entre IP et MAC**.

**Exemple :**

- 192.168.1.100 → 00-14-22-01-23-45

---

### 5. Quelle commande permet d’ajouter une entrée ARP statique sous Windows ?

- A. arp -a

- B. arp -s &lt;IP&gt; &lt;MAC&gt; ✅

- C. arp -d *

- D. ip neigh show

**Pourquoi ?** `arp -s` crée une association IP/MAC **manuelle**.

**Exemple :**

```bash

`arp -s 192.168.1.200 00-14-22-01-23-45`

```

---

### 6. Quelle commande permet de vider le cache ARP sous Windows ?

- A. arp -flush

- B. arp -clear

- C. arp -d * ✅

- D. ipconfig /flusharp

**Pourquoi ?** Le cours indique que sous Windows, on vide le cache ARP avec **arp -d ***.

**Exemple :**

```bash

`arp -d *`

```

---

### 7. Sous Windows, quelle commande affiche un résumé des informations réseau ?

- A. ip addr

- B. ipconfig ✅

- C. netstat

- D. ping

**Pourquoi ?** `ipconfig` affiche un résumé des interfaces actives : IP, masque, passerelle.

**Exemple :**

```bash

`ipconfig`

```

---

### 8. Quelle commande Windows affiche des informations réseau détaillées, y compris DHCP et DNS ?

- A. ipconfig /all ✅

- B. ipconfig /displaydns

- C. ipconfig /renew

- D. ip link

**Pourquoi ?** `ipconfig /all` affiche la version détaillée : **MAC, DNS, DHCP, bail, passerelle…**

**Exemple :**

```bash

`ipconfig /all`

```

---

### 9. Quelle commande Windows libère l’adresse IP obtenue par DHCP ?

- A. ipconfig /renew

- B. ipconfig /release ✅

- C. ipconfig /flushdns

- D. ipconfig /displaydns

**Pourquoi ?** `/release` abandonne l’adresse IP actuelle fournie par DHCP.

**Exemple :**

```bash

`ipconfig /release`

```

---

### 10. Quelle commande Windows demande une nouvelle adresse IP au serveur DHCP ?

- A. ipconfig /release

- B. ipconfig /renew ✅

- C. ipconfig /all

- D. arp -a

**Pourquoi ?** `/renew` force la machine à demander une **nouvelle adresse IP**.

**Exemple :**

```bash

`ipconfig /renew`

```

---

### 11. Quelle commande vide le cache DNS sous Windows ?

- A. ipconfig /registerdns

- B. ipconfig /displaydns

- C. ipconfig /flushdns ✅

- D. netstat -r

**Pourquoi ?** `ipconfig /flushdns` efface les entrées DNS locales obsolètes ou corrompues.

**Exemple :**

```bash

`ipconfig /flushdns`

```

---

### 12. Quelle commande affiche le cache DNS sous Windows ?

- A. ipconfig /displaydns ✅

- B. ipconfig /flushdns

- C. ipconfig /all

- D. arp -a

**Pourquoi ?** `ipconfig /displaydns` montre les noms de domaine déjà résolus et mis en cache.

**Exemple :**

```bash

`ipconfig /displaydns`

```

---

### Niveau Moyen (13 à 24)

### 13. Sous Linux, quelle commande moderne remplace progressivement ifconfig ?

- A. ip ✅

- B. route

- C. ping

- D. arp

**Pourquoi ?** Le cours indique que la commande **ip** remplace progressivement **ifconfig**.

**Exemple :**

```bash

`ip addr`

```

---

### 14. Quel objet de la commande `ip` sert à gérer les adresses IP ?

- A. link

- B. addr ✅

- C. route

- D. neigh

**Pourquoi ?** `ip addr` sert à **afficher et gérer les adresses IP**.

**Exemple :**

```bash

`ip addr show`

```

---

### 15. Quelle commande Linux affiche uniquement les adresses IPv4 ?

- A. ip -6 addr

- B. ip -4 addr ✅

- C. ip route

- D. ip link

**Pourquoi ?** L’option `-4` filtre les informations **IPv4**.

**Exemple :**

```bash

`ip -4 addr`

```

---

### 16. Quel objet de la commande `ip` sert à gérer les interfaces réseau ?

- A. addr

- B. route

- C. link ✅

- D. neigh

**Pourquoi ?** `ip link` concerne les **interfaces réseau** (état, activation, désactivation…).

**Exemple :**

```bash

`ip link show`

```

---

### 17. Quel objet de la commande `ip` sert à afficher les routes réseau ?

- A. link

- B. addr

- C. route ✅

- D. neigh

**Pourquoi ?** `ip route` affiche ou modifie la **table de routage**.

**Exemple :**

```bash

`ip route show`

```

---

### 18. Quel objet de la commande `ip` permet de gérer la table de voisinage / ARP ?

- A. addr

- B. neigh ✅

- C. route

- D. link

**Pourquoi ?** `ip neigh` gère les voisins, donc l’équivalent moderne de certaines fonctions ARP.

**Exemple :**

```bash

`ip neigh show`

```

---

### 19. Quel protocole utilise la commande ping ?

- A. TCP

- B. UDP

- C. ICMP ✅

- D. ARP

**Pourquoi ?**

`Ping utilise des **ICMP Echo Request / Echo Reply**.`

**Exemple :**

```bash

`ping 8.8.8.8`

```

---

### 20. Quel est le rôle principal de ping ?

- A. Chiffrer le trafic

- B. Tester la connectivité réseau et mesurer la latence ✅

- C. Modifier la table de routage

- D. Attribuer une adresse IP

**Pourquoi ?**

`Ping permet de savoir si une machine répond, et d’observer le **temps de réponse** et les **pertes de paquets**.`

**Exemple :** Tester si la passerelle **192.168.1.1** est joignable.

---

### 21. Dans la sortie de ping, que représente `time=` ?

- A. La taille du paquet

- B. Le temps aller-retour du paquet ✅

- C. Le nombre de routeurs

- D. Le TTL maximum théorique

**Pourquoi ?** `time=` correspond au **RTT** (Round Trip Time), donc le temps aller-retour.

**Exemple :**

```text time=18.3 ms ```

---

### 22. Dans la sortie de ping, que signifie `ttl=` ?

- A. Le nombre de paquets perdus

- B. Le numéro de séquence ICMP

- C. Le nombre maximum de sauts restants pour le paquet ✅

- D. Le temps d’attente avant renouvellement DHCP

**Pourquoi ?** TTL = **Time To Live** : chaque routeur le décrémente, et s’il atteint 0, le paquet est abandonné.

**Exemple :**

```text ttl=115 ```

---

### 23. Quelle option de ping permet d’envoyer un nombre précis de requêtes sous Linux ?

- A. -n

- B. -q

- C. -c ✅

- D. -r

**Pourquoi ?** `ping -c 4` envoie **4 requêtes ICMP**, puis s’arrête.

**Exemple :**

```bash

`ping -c 4 www.google.com`

```

---

### 24. Quelle option de ping permet d’afficher seulement les statistiques finales ?

- A. -i

- B. -s

- C. -q ✅

- D. -t

**Pourquoi ?** `-q` = **quiet**, donc moins de détails, surtout les statistiques.

**Exemple :**

```bash

`ping -q www.google.com`

```

---

### Niveau Difficile (25 à 38)

### 25. Quelle commande netstat affiche toutes les connexions actives et les ports en écoute ?

- A. netstat -r

- B. netstat -a ✅

- C. netstat -e

- D. netstat -u

**Pourquoi ?** `netstat -a` montre **toutes les connexions TCP/UDP** et les ports d’écoute.

**Exemple :**

```bash

`netstat -a`

```

---

### 26. Quelle option netstat affiche les adresses et ports en format numérique sans résolution de noms ?

- A. -l

- B. -n ✅

- C. -t

- D. -p

**Pourquoi ?** `-n` évite la résolution DNS et affiche les adresses **brutes**.

**Exemple :**

```bash

`netstat -an`

```

---

### 27. Quelle option netstat affiche uniquement les connexions TCP ?

- A. -u

- B. -r

- C. -t ✅

- D. -e

**Pourquoi ?** `netstat -t` filtre sur le protocole **TCP**.

---

### 28. Quelle option netstat affiche uniquement les connexions UDP ?

- A. -u ✅

- B. -t

- C. -n

- D. -l

**Pourquoi ?** `netstat -u` filtre sur **UDP**.

---

### 29. Que signifie l’état `LISTEN` dans netstat ?

- A. La connexion est fermée

- B. Le port attend des connexions entrantes ✅

- C. La connexion a expiré

- D. Le paquet a été perdu

**Pourquoi ?** `LISTEN` indique qu’un service est **en attente** sur un port.

**Exemple :** Un serveur web peut écouter sur le port **80**.

---

### 30. Que signifie l’état `ESTABLISHED` dans netstat ?

- A. La connexion est active et établie ✅

- B. Le port est fermé

- C. La route est invalide

- D. L’interface est désactivée

**Pourquoi ?** `ESTABLISHED` = une connexion TCP est en cours de fonctionnement.

**Exemple :** Ton navigateur a une connexion établie vers un site web.

---

### 31. Quelle option netstat affiche les processus associés aux connexions ?

- A. -e

- B. -p ✅

- C. -r

- D. -u

**Pourquoi ?** `netstat -p` permet de voir **quel processus utilise quel port**.

**Exemple :**

```bash

`netstat -p`

```

---

### 32. Quelle commande réseau sert à afficher le chemin emprunté par les paquets jusqu’à une destination ?

- A. ping

- B. arp

- C. tracert / traceroute ✅

- D. ipconfig

**Pourquoi ?** `tracert` (Windows) / `traceroute` (Linux) montre les **routeurs intermédiaires**.

**Exemple :**

```bash

`tracert www.google.com`

```

---

### 33. Sur quel principe fonctionne tracert ?

- A. Il modifie le masque de sous-réseau

- B. Il augmente progressivement le TTL des paquets ✅

- C. Il lit la table ARP distante

- D. Il ouvre une connexion TCP sur chaque routeur

**Pourquoi ?**

`Tracert envoie des paquets avec **TTL = 1, puis 2, puis 3…** pour découvrir chaque saut.`

**Exemple :**

- TTL 1 → premier routeur

- TTL 2 → second routeur

---

### 34. Sous Linux, quelle commande est l’équivalent de tracert ?

- A. route

- B. traceroute ✅

- C. traceip

- D. netpath

**Pourquoi ?**

#### Le cours indique clairement 

- Windows → `tracert`

- Linux → `traceroute`

---

### 35. Combien de bits contient une adresse IPv6 ?

- A. 32

- B. 64

- C. 128 ✅

- D. 256

**Pourquoi ?** IPv6 utilise **128 bits**, soit 4 fois la taille d’une IPv4.

**Exemple :**

```text 2001:0db8:85a3:0000:0000:8a2e:0370:7334 ```

---

### 36. Une adresse IPv6 est généralement écrite sous quelle forme ?

- A. 4 groupes décimaux

- B. 8 groupes hexadécimaux séparés par des deux-points ✅

- C. 6 groupes binaires

- D. 2 groupes de 64 bits visibles

**Pourquoi ?** Une IPv6 est représentée par **8 groupes de 4 chiffres hexadécimaux**.

**Exemple :**

```text 2001:0db8:85a3:0000:0000:8a2e:0370:7334 ```

---

### 37. Quelle adresse IPv6 est l’adresse de boucle locale (loopback) ?

- A. ::

- B. ::1 ✅

- C. FE80::1

- D. FF02::1

**Pourquoi ?** `::1` est l’équivalent IPv6 de **127.0.0.1** en IPv4.

**Exemple :** Tester la pile IPv6 locale sur sa propre machine.

---

### 38. Quelle plage correspond aux adresses IPv6 de lien-local ?

- A. 2000::/3

- B. FC00::/8

- C. FE80::/10 ✅

- D. FF00::/8

**Pourquoi ?** Les adresses **FE80::/10** sont utilisées pour la communication locale sur le lien.

**Exemple :** Une interface réseau peut s’auto-attribuer une adresse **FE80::...**

---

### Niveau Avancé / Pièges (39 à 50)

### 39. Quelle plage correspond aux adresses IPv6 multicast ?

- A. FE80::/10

- B. 2000::/3

- C. FF00::/8 ✅

- D. ::1/128

**Pourquoi ?** Toutes les adresses multicast IPv6 commencent dans la plage **FF00::/8**.

**Exemple :** `FF02::1`

---

### 40. Quelle plage correspond aux adresses IPv6 globales routables sur Internet ?

- A. FF00::/8

- B. FE80::/10

- C. 2000::/3 ✅

- D. ::/128

**Pourquoi ?** Les adresses globales IPv6 (GUA) appartiennent à **2000::/3**.

**Exemple :**

```text 2001:db8::... ```

---

### 41. Dans la structure d’une adresse IPv6 GUA, quelle partie identifie généralement l’interface ?

- A. Le préfixe global

- B. Le sous-réseau

- C. L’identifiant d’interface de 64 bits ✅

- D. Le TTL

**Pourquoi ?**

#### Le cours donne 

- 48 bits** préfixe global

- 16 bits** sous-réseau

- 64 bits** identifiant d’interface

---

### 42. Quelle adresse multicast IPv6 désigne tous les nœuds du lien local ?

- A. FF02::2

- B. FF02::1 ✅

- C. FF05::1

- D. FF02::fb

**Pourquoi ?** `FF02::1` = **tous les nœuds** du réseau local.

---

### 43. Quelle adresse multicast IPv6 désigne tous les routeurs du lien local ?

- A. FF02::1

- B. FF02::2 ✅

- C. FF02::fb

- D. FF0E::101

**Pourquoi ?** `FF02::2` correspond au groupe **all-routers** sur le lien local.

---

### 44. Quelle adresse multicast IPv6 est associée au Multicast DNS (mDNS) dans ton cours ?

- A. FF02::1:2

- B. FF02::2

- C. FF02::fb ✅

- D. FF05::1

**Pourquoi ?** Le cours donne explicitement **FF02::fb** pour la multidiffusion DNS.

---

### 45. Quelle adresse multicast IPv6 est associée aux serveurs et relais DHCP du lien local ?

- A. FF02::1

- B. FF02::1:2 ✅

- C. FF02::2

- D. FF0E::101

**Pourquoi ?** Le cours cite **FF02::1:2** pour DHCPv6 sur le lien local.

---

### 46. Quelle commande Windows peut aider à confirmer qu’une machine a reçu une adresse APIPA ?

- A. ping

- B. ipconfig /all ✅

- C. arp -a

- D. tracert

**Pourquoi ?** `ipconfig /all` permet de voir si l’interface a reçu une adresse **169.254.x.x**.

**Exemple :** Si tu vois **169.254.12.8**, ça signale souvent un problème DHCP.

---

### 47. Quel protocole remplace ARP en IPv6 ?

- A. ICMPv6 NDP ✅

- B. OSPFv3

- C. DHCPv6

- D. BGP

**Pourquoi ?** Le cours indique qu’en IPv6, **ARP est remplacé par NDP (Neighbor Discovery Protocol)**.

---

### 48. Quelle commande netstat affiche la table de routage du système ?

- A. netstat -a

- B. netstat -n

- C. netstat -r ✅

- D. netstat -u

**Pourquoi ?** `netstat -r` affiche la **routing table**.

---

### 49. Vrai ou Faux

`ARP fonctionne pour la communication entre réseaux différents via Internet.`

❌ **Faux**

**Pourquoi ?**

`ARP ne fonctionne que **dans un réseau local**. Pour aller vers un autre réseau, on passe par le **routage**.`

---

### 50. Vrai ou Faux

Une adresse IPv6 peut être compressée en remplaçant une suite continue de zéros par `::`, mais une seule fois dans l’adresse.

✅ **Vrai**

**Pourquoi ?** Le cours précise que la compression par `::` ne peut être utilisée **qu’une seule fois** dans une adresse IPv6.

**Exemple :**

```text 2001:db8::ff00:42:8329 ```

---

### Bilan rapide sur ce quiz

#### Ce quiz couvre bien 

- ARP**

- ipconfig**

- commande ip**

- ping**

- netstat**

- tracert / traceroute**

- IPv6**

- multicast**

- plages spéciales**

- compression d’adresses**

- NDP vs ARP**

---

### Point critique important

Je vais quand même te signaler un problème dans **ton cours**, pas dans le quiz : il y a un passage sur les plages IPv6 où **la description semble incohérente** entre **FC00::/8 / FD00::/8 / 2000::/3** (les libellés ont l’air mélangés à un endroit du texte). Donc pour le Kahoot, je me suis basé sur **ce qui est cohérent dans l’ensemble du module** :

- FE80::/10** → lien-local

- FF00::/8** → multicast

- 2000::/3** → global unicast routable

- ::1** → loopback

et j’ai évité de bâtir des questions piégeuses sur la partie du cours qui semble mal rédigée.

---

### Ce que je peux faire maintenant

Je peux te faire **immédiatement la version “Kahoot prête à copier”** pour les modules 5 et 6, comme je l’ai fait pour les modules 3 et 4 :

- juste les questions**

- 4 réponses**

- bonne réponse marquée**

- sans explications**

- format propre à coller dans Kahoot**

#### Si tu veux, réponds juste 

**“fais-moi la version Kahoot prête à copier pour modules 5 et 6”**
