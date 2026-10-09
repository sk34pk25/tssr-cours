# Module 01 — Le modèle OSI

**Séquence :** Bases des réseaux

## Objectifs

À l’issue du module, vous devez pouvoir :

- nommer les sept couches du modèle OSI et situer leur responsabilité ;
- distinguer données, segment, paquet, trame et bits ;
- expliquer l’encapsulation et la désencapsulation ;
- associer adresse MAC, adresse IP, port et équipement réseau au bon niveau ;
- utiliser Packet Tracer pour observer un échange dans un environnement de laboratoire.

## 1. Pourquoi découper une communication en couches ?

Le modèle **OSI** (*Open Systems Interconnection*) décrit une communication réseau comme une succession de sept responsabilités. Cette séparation permet de décrire un échange de façon ordonnée et d’isoler le niveau auquel rechercher un problème : support physique, liaison locale, routage, transport ou service applicatif.

À l’émission, les données passent des couches hautes vers les couches basses. Chaque couche utilise le résultat de la couche supérieure puis ajoute les informations dont elle a besoin. À la réception, le chemin est inverse : les informations sont interprétées et retirées au niveau correspondant.

## 2. Les sept couches et leurs repères

| Couche | Responsabilité principale | Unité ou repère cité dans les sources |
|---|---|---|
| 7 — Application | Fournir les services réseau aux applications. | Données ; HTTP/HTTPS, FTP, SMTP, DNS. |
| 6 — Présentation | Adapter la représentation des données ; chiffrement ou compression lorsque le service le prévoit. | Données ; TLS, formats multimédias. |
| 5 — Session | Établir, gérer et terminer le dialogue entre applications. | Données ; RPC, NetBIOS. |
| 4 — Transport | Segmenter, réassembler, gérer les flux et distinguer les communications avec des ports. | Segment ; TCP, UDP, ports. |
| 3 — Réseau | Identifier les réseaux et acheminer les paquets entre eux. | Paquet ; IPv4/IPv6, ICMP ; routeur. |
| 2 — Liaison de données | Transmettre les trames sur le lien local et utiliser les adresses MAC. | Trame ; Ethernet, Wi-Fi ; commutateur. |
| 1 — Physique | Transmettre les bits sous forme de signaux sur le support. | Bits ; câble, fibre, radio. |

!!! note "Repère de diagnostic"
    Une adresse MAC répond à une question de communication sur le lien local ; une adresse IP sert à identifier l’hôte et son réseau ; un port distingue un service ou un flux au niveau transport. Ne pas confondre ces trois repères.

## 3. PDU, SDU et encapsulation

Une **PDU** (*Protocol Data Unit*) est l’unité traitée ou échangée à une couche donnée. Lorsqu’une couche reçoit le résultat de la couche supérieure, elle le considère comme une **SDU** (*Service Data Unit*) et lui ajoute ses propres informations de contrôle, appelées **PCI** (*Protocol Control Information*). Le résultat devient alors sa PDU.

Cette logique explique l’encapsulation :

1. les données applicatives sont préparées pour le transport ;
2. la couche transport produit un segment et y associe notamment les ports ;
3. la couche réseau ajoute les adresses IP pour former un paquet ;
4. la couche liaison place le paquet dans une trame adaptée au lien local, avec les informations MAC ;
5. la couche physique transmet les bits sur le support.

La **désencapsulation** suit l’ordre inverse chez le destinataire. Le message n’est remis à l’application qu’après le traitement des informations de chaque couche traversée.

## 4. Équipements et cheminement

Un **commutateur** intervient principalement à la couche 2 : il relaie une trame dans le réseau local à partir des informations de liaison. Un **routeur** intervient à la couche 3 : il examine l’adressage IP, choisit le réseau suivant puis transmet le paquet dans une nouvelle trame adaptée au lien suivant.

Cette distinction aide à formuler un diagnostic : un problème de câble ou de signal relève d’abord de la couche physique ; une difficulté de communication locale invite à vérifier la liaison ; une destination située sur un autre réseau exige une décision de routage.

## 5. Transport : TCP, UDP et ports

La couche transport fournit une communication de bout en bout entre hôtes. Les sources présentent :

- **TCP**, orienté connexion, qui assure l’ordre, le contrôle d’erreur et le contrôle de flux ;
- **UDP**, plus léger, sans mécanisme équivalent de garantie de livraison ;
- les **ports**, qui permettent à plusieurs communications de coexister sur un même hôte.

Les exemples du support associent notamment SSH au port 22, DNS au port 53, HTTP au port 80 et HTTPS au port 443. Ces numéros sont des repères de service : ils ne remplacent ni l’adresse MAC ni l’adresse IP.

## 6. Observer un échange dans Packet Tracer

Les ressources M01 fournissent des activités Packet Tracer. Leur contenu interne est binaire et n’est donc pas reconstitué dans cette page. Elles servent à observer une topologie et, en mode Simulation, le passage d’un paquet à travers les couches et les équipements.

Méthode de travail :

1. ouvrir l’activité dans Cisco Packet Tracer ;
2. identifier l’émetteur, le destinataire et les équipements intermédiaires ;
3. passer en mode Simulation lorsque l’activité le demande ;
4. relever les unités de données et les informations visibles à chaque étape ;
5. relier chaque observation à la couche OSI concernée avant de conclure.

## Mise en pratique et révision

- [TP — ressources Packet Tracer du module](../../tp/reseaux/module-01/index.md)
- [Fiche de révision](../../revision/reseaux/module-01-le-modele-osi.md)
- [Kahoot du module](../../kahoot/bases-reseaux-m01-modele-osi.md)

## Source et provenance

- **Sources A — TSSR Drive live :** `Synthèse Module 1 - OS, Windows 10 & Modèle OSI V2`, Drive `1DHJRR2xe-qeYGsgp5Souf9BrNhz5-3dHTVm7EBYDRFE`, export SHA-256 `c41debdb15fb90cc5a95f3e5853875701b1d2bf8ab51def1dcf789447b9bf993` ; `cours kahoot module 1 et 2.txt`, Drive `1lboUfARfL1q4Oemnr9M-_vi0XpnzuRmn`, SHA-256 `a962747a178b82dd0924fa20e257b41501547d8ca087cb8c8724ac44807cd243` ; activités binaires `M01-01-TP-Packet-Tracer_Modele_OSI (1).pka`, Drive `1T7LqAvI8FqYMGu1HEKPkA7YclqvYvWkU`, SHA-256 `6a570f99b3dc223f913446c9bb1af6df1d96271bc7f3b28b82ff00d34c2bd0ef`, et `M01-02-TP-Packet-Tracer_Modele_OSI.pka`, Drive `1R6BIULkUss54s4ZrArsaaeGsVDMy4WsS`, SHA-256 `bdb9ac9fce4725b3a4dc35ec6fe6718eb81367444ea7ca6ad148825e7b805980`.
- **Structuration B :** hiérarchisation, tableaux, méthode d’observation et formulation pédagogique fondés uniquement sur ces sources A. Les fichiers Packet Tracer restent référencés sans inférence sur leur contenu binaire.
