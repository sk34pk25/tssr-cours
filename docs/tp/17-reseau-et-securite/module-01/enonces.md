# Énoncé — TP1 — Étudier les besoins de l'entreprise en termes de flux de sorties vers internet


Étudier les besoins de
l'entreprise en termes de
flux de sorties vers internet
TP1

 Avant de démarrer ce TP, il convient d’avoir récupéré le fichiers « Règles de pare-feu.xlsx »
 et d’avoir choisi une plage d’adressage dans le fichier « List-IP-Stagiaires.xlsx » déposé
 dans Teams.

            Durée estimée

                 2h

Énoncé

Objectifs :

Cet exercice vise à définir des règles des flux réseaux dans une infrastructure, en séparant
les réseaux internes et en contrôlant les flux vers Internet.
Si possible, vous travaillerez en binômes pour analyser le schéma réseau ci-dessous et
déterminerez les règles de pare-feu appropriées. Elles seront à reporter dans le fichier
Excel fourni par votre formatrice ou formateur.

![TP1, énoncé, page 2](../../../assets/images/reseau-et-securite/tp1/enonce-p02-02.png)

![TP1, énoncé, page 2](../../../assets/images/reseau-et-securite/tp1/enonce-p02-03.png)

Valeurs de la capture :

- Routeur formateur : 192.168.150.100/24
- VMnet10, VMnet11 et VMnet12
- SRV-CD : Active Directory, DNS
- SRV-MBR : DHCP
- SRV-WEB


Dans le fichier List-IP-Stagiaires.xlsx

Attribuez-vous une colonne des adressages réseaux

En partant de la plage « Lan Global /24 » calculer :

                           Lan SRV /26                   Lan Client /25   Lan DMZ /26

 Plage d’adresses
 disponibles

 IP routeur sera
 l’avant dernière de
 sa plage

 IP du SRV-CD sera la
 21ième adresse
 disponible de son
 réseau

 IP du SRV-MBR sera
 la 23ième adresse
 disponible de son
 réseau

 IP du SRV-WEB sera
 la 8ième adresse
 disponible de son
 réseau

 IP du CLT-WIN sera
 la 10ième adresse
 disponible de son
 réseau

 IP du CLT-DEB sera
 la 12ième adresse
 disponible de son
 réseau

![TP1, énoncé, page 3](../../../assets/images/reseau-et-securite/tp1/enonce-p03-05.png)


Mettre à jour le schéma en y ajoutant vos adresses, le fichier « SchémaRéseauTP1.drawio »
vous est mis disposition pour le modifier.

Identifier les différents segments du réseau et leurs besoins en termes de communication.

Déterminer les flux de données nécessaires entre les différents segments et vers l'extérieur
en n'ouvrant que les ports strictement nécessaires pour des services ou applications
spécifiques tout en bloquant le trafic non autorisé.

Justifier chaque règle proposée en expliquant son rôle dans la sécurité globale du réseau.

Remplissez le fichier « Règles de pare-feu.xlsx » qui vous sera remis par votre formateur.

Les colonnes en vert pour les actions “permit” et en rouges pour les actions “deny”.

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté (voir la page [Correction](corrections.md)).

## Grille à remplir — Règles de pare-feu

La feuille WAN contient deux lignes d’exemple. Les feuilles LANCLT, LANSRV et LAVDMZ n’ont que les en-têtes. « LAVDMZ » est la graphie du classeur.

### WAN

| Numéro de la règle WAN | Action | Protocole | IP sources/masque | Port origine | IP destination/masque | Port destination | Justification |
|---|---|---|---|---|---|---|---|
| Exemple: 1 | Pass | TCP | Any | | Wan IP | 80, 443 | |
| Exemple: 2 | Block | Any | Any | | Wan IP | | |

### LANCLT

| Numéro de la règle | Action | Protocole | IP sources/masque | Port origine | IP destination/masque | Port destination | Justification |
|---|---|---|---|---|---|---|---|

### LANSRV

| Numéro de la règle | Action | Protocole | IP sources/masque | Port origine | IP destination/masque | Port destination | Justification |
|---|---|---|---|---|---|---|---|

### LAVDMZ

| Numéro de la règle | Action | Protocole | IP sources/masque | Port origine | IP destination/masque | Port destination | Justification |
|---|---|---|---|---|---|---|---|

## Plan d’adressage

Les noms de personnes sont remplacés par Stagiaire N.

| Nom du stagiaire | Wan /24 | PC TP3 /24 | Tunnel Wireguad/24 | Lan global/24 | Lan Serveur /26 | Lan Client /25 | Lan DMZ /26 |
|---|---|---|---|---|---|---|---|
| Stagiaire 1 | 192.168.150.2 | 192.168.150.102 | 172.30.2.0 | 172.20.2.0 | 172.20.2 | 172.20.2 | 172.20.2 |
| Stagiaire 2 | 192.168.150.3 | 192.168.150.103 | 172.30.3.0 | 172.20.3.0 | 172.20.3 | 172.20.3 | 172.20.3 |
| Stagiaire 3 | 192.168.150.4 | 192.168.150.104 | 172.30.4.0 | 172.20.4.0 | 172.20.4 | 172.20.4 | 172.20.4 |
| Stagiaire 4 | 192.168.150.5 | 192.168.150.105 | 172.30.5.0 | 172.20.5.0 | 172.20.5 | 172.20.5 | 172.20.5 |
| Stagiaire 5 | 192.168.150.6 | 192.168.150.106 | 172.30.6.0 | 172.20.6.0 | 172.20.6 | 172.20.6 | 172.20.6 |
| Stagiaire 6 | 192.168.150.7 | 192.168.150.107 | 172.30.7.0 | 172.20.7.0 | 172.20.7 | 172.20.7 | 172.20.7 |
| Stagiaire 7 | 192.168.150.8 | 192.168.150.108 | 172.30.8.0 | 172.20.8.0 | 172.20.8 | 172.20.8 | 172.20.8 |
| Stagiaire 8 | 192.168.150.9 | 192.168.150.109 | 172.30.9.0 | 172.20.9.0 | 172.20.9 | 172.20.9 | 172.20.9 |
| Stagiaire 9 | 192.168.150.10 | 192.168.150.110 | 172.30.10.0 | 172.20.10.0 | 172.20.10 | 172.20.10 | 172.20.10 |
| Stagiaire 10 | 192.168.150.11 | 192.168.150.111 | 172.30.11.0 | 172.20.11.0 | 172.20.11 | 172.20.11 | 172.20.11 |
| Stagiaire 11 | 192.168.150.12 | 192.168.150.112 | 172.30.12.0 | 172.20.12.0 | 172.20.12 | 172.20.12 | 172.20.12 |
| Stagiaire 12 | 192.168.150.13 | 192.168.150.113 | 172.30.13.0 | 172.20.13.0 | 172.20.13 | 172.20.13 | 172.20.13 |
| Stagiaire 13 | 192.168.150.14 | 192.168.150.114 | 172.30.14.0 | 172.20.14.0 | 172.20.14 | 172.20.14 | 172.20.14 |
| Stagiaire 14 | 192.168.150.15 | 192.168.150.115 | 172.30.15.0 | 172.20.15.0 | 172.20.15 | 172.20.15 | 172.20.15 |
| Stagiaire 15 | 192.168.150.16 | 192.168.150.116 | 172.30.16.0 | 172.20.16.0 | 172.20.16 | 172.20.16 | 172.20.16 |
| Stagiaire 16 | 192.168.150.17 | 192.168.150.117 | 172.30.17.0 | 172.20.17.0 | 172.20.17 | 172.20.17 | 172.20.17 |
| Stagiaire 17 | 192.168.150.18 | 192.168.150.118 | 172.30.18.0 | 172.20.18.0 | 172.20.18 | 172.20.18 | 172.20.18 |
| Stagiaire 18 | 192.168.150.19 | 192.168.150.119 | 172.30.19.0 | 172.20.19.0 | 172.20.19 | 172.20.19 | 172.20.19 |
| Stagiaire 19 | 192.168.150.20 | 192.168.150.120 | 172.30.20.0 | 172.20.20.0 | 172.20.20 | 172.20.20 | 172.20.20 |
| Stagiaire 20 | 192.168.150.21 | 192.168.150.121 | 172.30.21.0 | 172.20.21.0 | 172.20.21 | 172.20.21 | 172.20.21 |
| Stagiaire 21 | 192.168.150.22 | 192.168.150.122 | 172.30.22.0 | 172.20.22.0 | 172.20.22 | 172.20.22 | 172.20.22 |
| Stagiaire 22 | 192.168.150.23 | 192.168.150.123 | 172.30.23.0 | 172.20.23.0 | 172.20.23 | 172.20.23 | 172.20.23 |
| Stagiaire 23 | 192.168.150.24 | 192.168.150.124 | 172.30.24.0 | 172.20.24.0 | 172.20.24 | 172.20.24 | 172.20.24 |
| Stagiaire 24 | 192.168.150.25 | 192.168.150.125 | 172.30.25.0 | 172.20.25.0 | 172.20.25 | 172.20.25 | 172.20.25 |
| Stagiaire 25 | 192.168.150.26 | 192.168.150.126 | 172.30.26.0 | 172.20.26.0 | 172.20.26 | 172.20.26 | 172.20.26 |
| Stagiaire 26 | 192.168.150.27 | 192.168.150.127 | 172.30.27.0 | 172.20.27.0 | 172.20.27 | 172.20.27 | 172.20.27 |
| Stagiaire 27 | 192.168.150.28 | 192.168.150.128 | 172.30.28.0 | 172.20.28.0 | 172.20.28 | 172.20.28 | 172.20.28 |
| Stagiaire 28 | 192.168.150.29 | 192.168.150.129 | 172.30.29.0 | 172.20.29.0 | 172.20.29 | 172.20.29 | 172.20.29 |
| Stagiaire 29 | 192.168.150.30 | 192.168.150.130 | 172.30.30.0 | 172.20.30.0 | 172.20.30 | 172.20.30 | 172.20.30 |
| Stagiaire 30 | 192.168.150.31 | 192.168.150.131 | 172.30.31.0 | 172.20.31.0 | 172.20.31 | 172.20.31 | 172.20.31 |
| Stagiaire 31 | 192.168.150.32 | 192.168.150.132 | 172.30.32.0 | 172.20.32.0 | 172.20.32 | 172.20.32 | 172.20.32 |
| Stagiaire 32 | 192.168.150.33 | 192.168.150.133 | 172.30.33.0 | 172.20.33.0 | 172.20.33 | 172.20.33 | 172.20.33 |
| Stagiaire 33 | 192.168.150.34 | 192.168.150.134 | 172.30.34.0 | 172.20.34.0 | 172.20.34 | 172.20.34 | 172.20.34 |
| Stagiaire 34 | 192.168.150.35 | 192.168.150.135 | 172.30.35.0 | 172.20.35.0 | 172.20.35 | 172.20.35 | 172.20.35 |
| Stagiaire 35 | 192.168.150.36 | 192.168.150.136 | 172.30.36.0 | 172.20.36.0 | 172.20.36 | 172.20.36 | 172.20.36 |
| Stagiaire 36 | 192.168.150.37 | 192.168.150.137 | 172.30.37.0 | 172.20.37.0 | 172.20.37 | 172.20.37 | 172.20.37 |
| Stagiaire 37 | 192.168.150.38 | 192.168.150.138 | 172.30.38.0 | 172.20.38.0 | 172.20.38 | 172.20.38 | 172.20.38 |
| Stagiaire 38 | 192.168.150.39 | 192.168.150.139 | 172.30.39.0 | 172.20.39.0 | 172.20.39 | 172.20.39 | 172.20.39 |
| Stagiaire 39 | 192.168.150.40 | 192.168.150.140 | 172.30.40.0 | 172.20.40.0 | 172.20.40 | 172.20.40 | 172.20.40 |

## Schéma dérivé du schéma source

```mermaid
flowchart TB
  R["Routeur formateur 192.168.150.100/24"]
  R --> CLT["LANCLT · VMnet10 · 172.20.X.Y/?"]
  R --> SRV["LANSRV · VMnet11 · 172.20.X.Y/?"]
  R --> DMZ["LANDMZ · VMnet12 · 172.20.X.Y/?"]
  SRV --> CD["SRV-cd Active Directory DNS"]
  SRV --> MBR["SRV-MBR DHCP"]
  DMZ --> WEB["SRV-WEB"]
```

Schéma dérivé du schéma source.
