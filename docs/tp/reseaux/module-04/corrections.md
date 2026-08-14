# Corrections — Module 04 — La communication dans un réseau

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## M04-01-01-TP-La_communication_Correction

### La communication

#### TP du Module 04.01

Pour effectuer ce TP, il faut avoir suivi le module 4 sur la communication

####  En vidéo pour les stagiaires du campus en ligne

#### Diaporama et explications pour les stagiaires en présence d’un formateur

#### Durée estimée

#### 2 heures

#### Énoncé

#### A. Communication dans un réseau

- Les machines A, B, C, D, E et F sont situées sur le même segment.
- Il n'y a pas de routeur.

#### Poste A

172.16.10.10 255.255.0.0

#### Poste C

172.16.100.30 255.255.0.0

#### Poste B

172.16.11.20 255.255.0.0

#### Poste D

172.16.11.100 255.255.255.0

#### Poste E

172.16.100.150 255.255.255.0

#### Poste F

172.16.10.200 255.255.255.0

- Remplissez le tableau ci-dessous en indiquant quels hôtes peuvent dialoguer
- Communication avec réponse et pourquoi ?

#### L'hôte

#### peut

#### contacter

#### l'hôte

#### Explications

#### A B / C / F

#### Lorsque A communique avec B, C, F, les postes appartiennent au réseau

logique 172.16.0.0 /16, B et C répondent à travers ce réseau logique.

#### Cependant, F répond à travers le réseau logique 172.16.10.0 /24

#### B A / C / D

#### Lorsque B communique avec A, C, D, les postes appartiennent au réseau

logique 172.16.0.0 /16, A et C répondent à travers ce réseau logique.

#### Cependant, D répond à travers le réseau logique 172.16.11.0 /24

### C A / B / E

#### Lorsque C communique avec A, B, E, les postes appartiennent au réseau

logique 172.16.0.0 /16, A et B répondent à travers ce réseau logique.

#### Cependant, E répond à travers le réseau logique 172.16.100.0 /24

#### D B D et B communiquent à travers le réseau 172.16.11.0 /24

#### E C E et C communiquent à travers le réseau 172.16.100.0 /24

#### F A F et A communiquent à travers le réseau 172.16.10.0 /24

### B. Communication dans un réseau

- Examinez le réseau et remplissez le tableau pour indiquer quel poste peut envoyer à

#### quel autre poste

- Vous remplissez le tableau pour consigner les résultats (pev = Peut Envoyer Vers) :

  - V pour Vrai (communication entre les deux postes)
  - F pour Faux (pas de communication entre les deux postes)
  - P pour Passerelle (communication entre les deux postes en passant par le

#### routeur)

  - Le tableau est déjà rempli avec certaines réponses,

- Le poste A peut envoyer au poste A ainsi pour les postes B, C, D, E.

#### X pev Y A B C D E

#### A V F V P F

#### B F V F F F

#### C P F V P F

#### D P F P V F

#### E P F P V V

#### Réseau 1

#### Poste A

#### Mac: PhyA

#### @IP: 10.11.2.1

#### Mask: 255.0.0.0

#### GW: 10.0.0.254

#### Poste B

#### Mac: PhyB

#### @IP: 192.168.1.35

#### Mask: 255.0.0.0

#### GW: 10.0.0.254

#### Poste C

#### Mac: PhyC

#### @IP: 10.0.2.4

#### Mask: 255.255.0.0

#### GW: 10.0.0.254

#### Routeur X

#### Mac: PhyX

#### @IP: 10.0.0.254

#### Mask:255.0.0.0

#### Routeur Y

#### Mac: PhyY

#### @IP: 192.168.1.254

#### Mask: 255.255.255.0

#### Réseau 2

#### Poste E

#### Mac: PhyE

#### @IP: 192.168.2.2

#### Mask: 255.255.0.0

#### GW: 192.168.1.254

#### Poste D

#### Mac: PhyD

#### @IP: 192.168.1.123

#### Mask: 255.255.255.0

#### GW: 192.168.1.254

### C. Communication dans un réseau

- Examinez le réseau et remplissez le tableau pour indiquer quel poste peut envoyer à

#### quel autre poste

#### Réseau 1

#### Poste A

#### Mac: PhyA

#### @IP: 192.167.5.1

#### Mask: 255.255.255.0

#### GW: 192.168.5.254

#### Poste B

#### Mac: PhyB

#### @IP: 192.168.5.35

#### Mask: 255.255.255.0

#### GW: 172.20.0.254

#### Poste C

#### Mac: PhyC

#### @IP: 172.20.1.4

#### Mask: 255.255.0.0

#### GW: 192.168.5.254

#### Routeur X

#### Mac: PhyX

#### @IP: 192.168.5.254

#### Mask:255.255.255.0

#### Routeur Y

#### Mac: PhyY

#### @IP: 172.19.0.254

#### Mask: 255.255.0.0

#### Réseau 3

#### Poste E

#### Mac: PhyE

#### @IP: 172.20.0.7

#### Mask: 255.255.0.0

#### GW: 172.20.0.254

#### Poste D

#### Mac: PhyD

#### @IP: 172.20.1.123

#### Mask: 255.255.255.0

#### GW: 172.20.1.254

#### Réseau 2

#### Poste F

#### Mac: PhyF

#### @IP: 172.19.2.2

#### Mask: 255.0.0.0

#### GW: 172.19.0.254

#### Routeur Z

#### Mac: PhyZ

#### @IP: 172.20.0.254

#### Mask: 255.255.0.0

- Vous remplissez le tableau pour consigner les résultats (pev = Peut Envoyer Vers) :

  - V pour Vrai (communication entre les deux postes)
  - F pour Faux (pas de communication entre les deux postes)
  - P pour Passerelle (communication entre les deux postes en passant par le

#### routeur)

  - Le tableau est déjà rempli avec certaines réponses,

- Le poste A peut envoyer au poste A ainsi pour les postes B, C, D, E, F.

#### X pev Y A B C D E F

#### A V F F F F F

#### B F V F F F F

#### C F F V F F F

#### D F F F V F F

#### E F P F V V P

#### F F P F F F V

### D. Remplissez les tables de routage des routeurs

- On a découpé le bloc 131.107.0.0 /16 en 9 segments
- Les réseaux utilisés sont les suivants et sont en gras :

#### /16 /17 /18 /19 /20

13.107.0.0 13.107.0.0 13.107.0.0 13.107.16.0 13.107.32.0 13.107.64.0 13.107.64.0 13.107.96.0 13.107.128.0 13.107.128.0 13.107.128.0 13.107.160.0 13.107.192.0 13.107.192.0 13.107.224.0

- Schéma du réseau

13.107.0.0 13.107.16.0 13.107.32.0 13.107.64.0

#### R1

#### R2

#### R3

13.107.96.0 13.107.128.0 13.107.160.0

#### R4

#### R5

#### R6

13.107.192.0 13.107.224.0

#### R7

#### R8

- Vous devez paramétrer chaque routeur en n'ajoutant qu'un minimum d'itinéraires

#### statique

- Ecrivez, en format abrégé les routes que vous ajoutez :

  - (@_rezo, masque, Routeur de destination)

R1 : 13.107.32.0/19 R2 - 13.107.64.0/18 R2 — 13.107.128.0/17 R2 ................................................... R2 : 13.107.0.0/20 R1 — 13.107.64.0/18 R3 — 13.107.128.0/17 R3 ..................................................... R3 : 13.107.0.0/19 R2 — 13.107.96.0/19 R4 — 13.107.128.0/17 R4 ..................................................... R4 : 13.107.0.0/18 R3 — 13.107.128.0/17 R5 ....................................................................................... R5 : 13.107.0.0/18 R4 — 13.107.64.0/19 R4 — 13.107.160.0/19 R6 — 13.107.192.0/18 R6 ................. R6 : 13.107.0.0/17 R5 — 13.107.192.0/18 R7 ....................................................................................... R7 : 13.107.0.0/17 R6 — 13.107.128.0/19 R6 — 13.107.224.0/19 R8 ................................................... R8 : 13.107.0.0/17 R7 — 13.107.128.0/18 R7 .......................................................................................

### E. Calculer les résumés de routes

1. On désire agréger les 4 réseaux suivants :

#### R1

#### R2

212.56.132.0/24 212.56.133.0/24 212.56.134.0/24 212.56.135.0/24

2. On désire agréger les 4 réseaux suivants :

#### R1

#### R2

212.56.146.0/24 212.56.147.0/24 212.56.148.0/24 212.56.149.0/24

3. On désire agréger les 64 réseaux suivants :

#### R1

#### R2

212.1.96.0/24 212.1.97.0/24 212.1.127.0/24 212.1.128.0/24 212.1.158.0/24 212.1.159.0/24

4. On désire agréger l'intégralité des réseaux de classe A : 0.0.0.0/1 ................................
5. On désire agréger tous les réseaux de classe B : 128.0.0.0/2 .............................
6. On désire agréger la totalité des réseaux de classe C : 192.0.0.0/3 .............................

#### Inscrivez ici le résumé de

#### route en notation CIDR

#### 

#### Inscrivez ici le résumé de

#### route en notation CIDR

#### 

#### Inscrivez ici le résumé de

#### route en notation CIDR

#### 

212.56.132.0/22 212.56.144.0/21 212.1.0.0/16
