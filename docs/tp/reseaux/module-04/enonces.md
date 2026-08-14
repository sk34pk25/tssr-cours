# Énoncés — Module 04 — La communication dans un réseau

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## M04-01-01-TP-La_communication

### La communication

#### TP du Module 04-01

Pour effectuer ce TP, il faut avoir suivi le module 4 sur la communication

####  En vidéo pour les stagiaires du campus en ligne

 Diaporama et explications pour les stagiaires en présence d’un formateur

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

#### L'hôte peut contacter l'hôte Explications

#### A

#### B

#### C

#### D

#### E

#### F

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

#### A V

#### B V

#### C V

#### D V

#### E V

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

#### A V

#### B V

#### C V

#### D V

#### E V

#### F V

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

R1 : ................................ ................................ ................................ ................................ ................... R2 : ................................ ................................ ................................ ................................ ................... R3 : ................................ ................................ ................................ ................................ ................... R4 : ................................ ................................ ................................ ................................ ................... R5 : ................................ ................................ ................................ ................................ ................... R6 : ................................ ................................ ................................ ................................ ................... R7 : ................................ ................................ ................................ ................................ ................... R8 : ................................ ................................ ................................ ................................ ...................

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

4. On désire agréger l'intégralité des réseaux de classe A : ................................ ...............
5. On désire agréger tous les réseaux de classe B : ................................ ...............
6. On désire agréger la totalité des réseaux de classe C : ................................ ...............

#### Inscrivez ici le résumé de

#### route en notation CIDR

#### 

#### Inscrivez ici le résumé de

#### route en notation CIDR

#### 

#### Inscrivez ici le résumé de

#### route en notation CIDR

#### 

## M04-01-02-TP-Packet_Tracer-La_communication

### La communication

#### TP du Module 04 — Communication avec Packet Tracer

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 4

#### Avoir réaliser les précédents TP Packet Tracer

#### Packet Tracer doit être installé

#### Durée estimée

#### 30 Mins

#### Énoncé

#### Pour découvrir le fonctionnement de Packet Tracer, vous devez :

- Copier le fichier « M04-01-02—TP-Packet_Tracer-La_communication.pka »
- L’ouvrir avec Packet Tracer
- Vous allez mettre en place la communication inter réseau.
- Suivre les directives

Une fois le travail terminé : [consulter les corrections](corrections.md).
