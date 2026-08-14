# Corrections — Module 03 — L’adressage IPv4

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## M03-04-TP-Sous-réseaux_Correction

### Calcul des sous-réseaux

#### TP du Module 03.04

Pour effectuer ce TP, il faut avoir suivi la partie sur le découpage en sous -réseau du

#### module 3 sur l’adressage IPv4

####  En vidéo pour les stagiaires du campus en ligne

#### Diaporama et explications pour les stagiaires en présence d’un formateur

#### Durée estimée

#### 3 heures

#### Énoncé

#### A. Validité des adresses en notation CIDR

Indiquez si les adresses sont valides pour des hôtes. Transformez la notation CIDR en notation standard.

#### Adresse Valide @Réseau / @Diffusion Standard

12.1.1.1 /8 OUI 12.0.0.0 12.255.255.255 12.1.1.1 255.0.0.0 209.207.177.100 /30 NON ..... 209.207.177.100 (réseau) ..... ............. 209.207.177.103 ............. ............ 209.207.177.100 ............. ............ 255.255.255.252 ............. 192.0.35.12 /26 OUI .................. 192.0.35.0.................. ................. 192.0.35.63................. ................ 192.0.35.12 ................. ............ 255.255.255.192 ............. 120.146.80.1 /20 OUI ................ 120.146.80.0................ .............. 120.146.95.255 .............. ............... 120.146.80.1 ................ .............. 255.255.240.0 ............... 120.80.1.0 /11 OUI .................. 120.64.0.0.................. .............. 120.95.255.255 .............. ................. 120.80.1.0 .................. ................ 255.224.0.0 ................. 211.104.16.17 /29 OUI ............... 211.104.16.16 ............... ............... 211.104.16.23 ............... .............. 211.104.16.17 ............... ............ 255.255.255.248 ............. 172.168.0.1 /24 OUI ................. 172.168.0.0................. ............... 172.168.0.255 ............... ................ 172.168.0.1 ................. .............. 255.255.255.0 ............... 109.168.248.32 /21 OUI ............... 109.168.248.0 ............... ............. 109.168.255.255 ............. ............. 109.168.248.32 .............. .............. 255.255.248.0 ...............

96.139.84.12 /21 OUI ................. 96.139.80.0................. ............... 96.139.87.255 ............... ............... 96.139.84.12 ................ .............. 255.255.248.0 ............... 172.16.32.0 /25 NON ......... 172.16.32.0 (Réseau) ........ ............... 172.16.32.127 ............... ................ 172.16.32.0 ................. ............ 255.255.255.128 ............. 172.16.0.127 /25 NON .................. 172.16.0.0.................. ..... 172.16.0.127 ( broadcast) .... ............... 172.16.0.127 ................ ............ 255.255.255.128 ............. 192.168.19.87 /29 NON ............... 192.168.19.80 ............... .... 192.168.19.87 (broadcast) .... .............. 192.168.19.87 ............... ............ 255.255.255.248 ............. 172.16.32.1 /18 OUI .................. 172.16.0.0.................. ............... 172.16.63.255 ............... ................ 172.16.32.1 ................. .............. 255.255.192.0 ............... 210.71.10.128 /28 NON ....... 210.71.10.128 (Réseau) ...... ............... 210.71.10.143 ............... .............. 210.71.10.128 ............... ............ 255.255.255.240 .............

### B. Calculs de masque

Calculez le masque approprié et complétez l'adresse en notation CIDR afin d'obtenir la quantité d'hôtes ou de sous-réseaux requis. Le masque de sous-réseau de départ est le masque par défaut associé à la classe.

#### PARAMETRES REQUIS Notation CIDR

Au moins 120 sous-réseaux : 172.16.0.0/ ... 23 ... 2 adresses par sous-réseau (liaisons pt à pt) 192.168.1.0/ ... 30 ... Au moins 31 sous-réseaux 185.221.0.0/ ... 21 ... Au moins 15 sous-réseaux 131.107.0.0/ ... 20 ... A peu près 500 sous-réseaux 140.10.0.0/ ... 25 ... Exactement 8 sous-réseaux 192.168.10.0/ ... 27 ... 10 sous-réseaux d'au moins 17 hôtes 214.12.33.0/ .... X .... Environ 2020 sous-réseaux 10.0.0.0/ ... 19 ... 127 sous-réseaux 188.23.0.0/ ... 23 ...

#### C. Calculs de masques, nombre de réseaux et hôtes

Calculez le masque adapté aux exigences du scénario. Indiquez le nombre de sous-réseaux créés. Indiquez le nombre d'hôtes par sous-réseau. LE RESEAU DE DEPART COMPORTE TOUJOURS UN MASQUE DE CLASSE A, B ou C standard

#### Scénario 1

#### Nombre de segments physiques requis : 5

#### Nombre maximum d'hôtes par segment : 25

#### Adresse de réseau : 192.177.4.0

#### Masque de sous-réseau proposé : 255.255.255.240

#### Nombre de sous-réseaux créés : 24 = 16

#### Nombre maximum d'adresses par segment : 24-2 = 14

#### Scénario 2

#### Nombre de segments physiques requis : 100

#### Nombre maximum d'hôtes par segment : 88.000

#### Adresse de réseau : 39.0.0.0

#### Masque de sous-réseau proposé : 255.255.0.0

#### Nombre de sous-réseaux créés : 28 = 256

#### Nombre maximum d'adresses par segment : 216-2 = 65534

#### 3 bits + 1

#### 5 bits - 1

#### 7 bits + 1

#### 17 bits - 1

### Scénario 3

#### Nombre de segments physiques requis : 100

#### Nombre maximum d'hôtes par segment : 350

#### Adresse de réseau : 171.133.0.0

#### Masque de sous-réseau proposé : 255.255.255.0

#### Nombre de sous-réseaux créés : 28 = 256

#### Nombre maximum d'adresses par segment : 28-2 = 254

#### Scénario 4

#### Nombre de segments physiques requis : 16

#### Nombre maximum d'hôtes par segment : 1 500

#### Adresse de réseau : 128.199.0.0

#### Masque de sous-réseau proposé : 255.255.252.0

#### Nombre de sous-réseaux créés : 26 = 64

#### Nombre maximum d'adresses par segment : 210-2 = 1022

#### Scénario 5

#### Nombre de segments physiques requis : 250

#### Nombre maximum d'hôtes par segment : 100

#### Adresse de réseau : 191.254.0.0

#### Masque de sous-réseau proposé : 255.255.255.192

#### Nombre de sous-réseaux créés : 210 = 1024

#### Nombre maximum d'adresses par segment : 26-2 = 62

#### Scénario 6

#### Nombre de segments physiques requis : 12

#### Nombre maximum d'hôtes par segment : 12

#### Adresse de réseau : 216.121.44.0

#### Masque de sous-réseau proposé : 255.255.255.248

#### Nombre de sous-réseaux créés : 25 = 32

#### Nombre maximum d'adresses par segment : 23-2= 6

#### Scénario 7

#### Nombre de segments physiques requis : 50

#### Nombre maximum d'hôtes par segment : 600

#### Adresse de réseau : 134.119.0.0

#### Masque de sous-réseau proposé : 255.255.254.0

#### Nombre de sous-réseaux créés : 27 = 128

#### Nombre maximum d'adresses par segment : 29-2= 510

#### 7 bits + 1

#### 9 bits - 1

#### 4 bits + 1 + 1

#### 11 bits - 1

#### 8 bits + 1 + 1

#### 7 bits - 1

#### 4 bits + 1

#### 4 bits - 1

#### 6 bits + 1

#### 10 bits - 1

### D. Découpage en sous-réseau

#### On découpe le bloc 199.210.15.0 /24 selon le schéma suivant :

#### Donnez les adresses des 7 segments définis (par ordre croissant) :

Segment 1 ............ 199.210.15.0 /25 ................................ ................................ ............................ Segment 2 .......... 199.210.15.128 /26 ................................ ................................ .......................... Segment 3 .......... 199.210.15.192 /27 ................................ ................................ .......................... Segment 4 .......... 199.210.15.224 /29 ................................ ................................ .......................... Segment 5 .......... 199.210.15.232 /29 ................................ ................................ .......................... Segment 6 .......... 199.210.15.240 /29 ................................ ................................ .......................... Segment 7 .......... 199.210.15.248 /29 ................................ ................................ ..........................

### E. Découpage en sous-réseau

- Vous êtes chargé planifier l'adressage de plusieurs réseaux.

- Vous subdivisez successivement les blocs d'adresses et vous conservez toujours les

blocs supérieurs et divisez le dernier bloc.

- Indiquez les numéros de réseau en notation CIDR

- Schématisez les divisions des blocs.

- Indiquez le nombre d'adresses valides par segment et le nombre d'adresses global.

1. Premier réseau à découper : 195.220.12.0 /24

- Segments à définir

  - 1 segment contenant 115 postes

  - 1 segment contenant 58 postes

  - 1 segment contenant 25 machines

  - 1 segment contenant d'une douzaine d'hôtes

  - 2 segments contenant 5 machines

- Listez les segments dans le tableau :

#### / 24 / 25 / 26 / 27 / 28 / 29

195.220.12.0 195.220.12.0 195.220.12.0 195.220.12.8 195.220.12.16 195.220.12.16 195.220.12.24 195.220.12.32 195.220.12.32 195.220.12.32 195.220.12.40 195.220.12.48 195.220.12.48 195.220.12.56 195.220.12.64 195.220.12.64 195.220.12.64 195.220.12.72 195.220.12.80 195.220.12.80 195.220.12.88 195.220.12.96 195.220.12.96 195.220.12.96 195.220.12.104 195.220.12.112 195.220.12.112 195.220.12.120 195.220.12.128 195.220.12.128 195.220.12.128 195.220.12.136 195.22.12.144 195.22.12.144 195.22.12.152 195.220.12.160 195.220.12.160 195.220.12.160 195.220.12.168 195.220.12.176 195.220.12.176 195.220.12.184 195.220.12.192 195.220.12.192 195.220.12.192 195.220.12.200 195.220.12.208 195.220.12.208 195.220.12.216 195.220.12.224 195.220.12.224 195.220.12.224 195.220.12.232 195.220.12.240 195.220.12.240 195.220.12.248

#### # adresses 126 62 30 14 6

### 2. Deuxième réseau à découper : 192.168.10.0 /24

- Segments à définir

  - 3 segments contenant d'une soixantaine d'hôtes

  - 1 segment contenant d'une trentaine de postes

  - 2 segments contenant d'au moins 11 machines

- Listez les segments dans le tableau :

#### / 24 / 26 / 27 / 28

192.168.10.0 192.168.10.0 192.168.10.0 192.168.10.16 192.168.10.32 192.168.10.32 192.168.10.48 192.168.10.64 192.168.10.64 192.168.10.64 192.168.10.80 192.168.10.96 192.168.10.96 192.168.10.112 192.168.10.128 192.168.10.128 192.168.10.128 192.168.10.144 192.168.10.160 192.168.10.160 192.168.10.176 192.168.10.192 192.168.10.192 192.168.10.192 192.168.10.208 192.168.10.224 192.168.10.224 192.168.10.240

#### # adresses 62 30 14

3. Troisième réseau à découper : 222.8.15.0 /24

- Segments à définir

  - 1 segments contenant d'une centaine d'hôtes

  - 4 segments contenant 28 hôtes environ

- Listez les segments dans le tableau :

#### / 24 / 25 / 27

222.8.15.0 222.8.15.32 222.8.15.64 222.8.15.96 222.8.15.128 222.8.15.160 222.8.15.192 222.8.15.224

#### # adresses 126 30

### F. Recherche de sous-réseaux inutilisés

- Vous auditez plusieurs réseaux.

- On vous demande de rechercher les segments inutilisés.

1. Premier réseau à étudier :

  - 112.19.0.0 /16

- Liste de réseaux actuellement utilisés :

  - 112.19.0.0 /18

  - 112.19.64.0 /18

  - 112.19.128.0 /19

  - 112.19.160.0 /20

  - 112.19.176.0 /20

  - 112.19.224.0 /20

  - 112.19.240.0 /20

#### Existe-t-il une ou plusieurs plages d'adresses inutilisées ?

#### Détaillez votre calcul :

#### En rouge les réseaux utilisés

#### En vert les réseaux disponibles

#### /16 /17 /18 /19 /20

112.19.0.0 112.19.0.0 112.19.0.0 112.19.16.0 112.19.32.0 112.19.32.0 112.19.48.0 112.19.64.0 112.19.64.0 112.19.64.0 112.19.80.0 112.19.96.0 112.19.96.0 112.19.112.0 112.19.128.0 112.19.128.0 112.19.128.0 112.19.144.0 112.19.160.0 112.19.160.0 112.19.176.0 112.19.192.0 112.19.192.0 112.19.192.0 112.19.208.0 112.19.224.0 112.19.224.0 112.19.240.0

### o 192.168.10.0 /24

2. Deuxième réseau à étudier :

- Liste de réseaux actuellement utilisés :

  - 192.168.10.0 /25

  - 192.168.10.128 /27

  - 192.168.10.160 /27

  - 192.168.10.224 /28

#### Indiquer les segments inutilisés :

#### En rouge les réseaux utilisés

#### En vert les réseaux disponibles

#### / 24 / 25 / 26 / 27 / 28

192.168.10.0 192.168.10.0 192.168.10.0 192.168.10.16 192.168.10.32 192.168.10.32 192.168.10.48 192.168.10.64 192.168.10.64 192.168.10.64 192.168.10.80 192.168.10.96 192.168.10.96 192.168.10.112 192.168.10.128 192.168.10.128 192.168.10.128 192.168.10.144 192.168.10.160 192.168.10.160 192.168.10.176 192.168.10.192 192.168.10.192 192.168.10.192 192.168.10.208 192.168.10.224 192.168.10.224 192.168.10.240

#### # adresses 126 62 30 14

### o 199.1.1.0 /24

3. Troisième réseau à étudier :

- Liste de réseaux actuellement utilisés :

  - 199.1.1.0 /26

  - 199.1.1.128 /27

  - 199.1.1.160 /27

  - 199.1.1.192 /28

  - 199.1.1.224 /28

  - 199.1.1.240 /28

#### Indiquer les segments inutilisés :

#### En rouge les réseaux utilisés

#### En vert les réseaux disponibles

#### / 24 / 26 / 27 / 28

199.1.1.0 199.1.1.0 199.1.1.0 199.1.1.16 199.1.1.32 199.1.1.32 199.1.1.48 199.1.1.64 199.1.1.64 199.1.1.64 199.1.1.80 199.1.1.96 199.1.1.96 199.1.1.112 199.1.1.128 199.1.1.128 199.1.1.128 199.1.1.144 199.1.1.160 199.1.1.160 199.1.1.176 199.1.1.192 199.1.1.192 199.1.1.192 199.1.1.208 199.1.1.224 199.1.1.224 199.1.1.240

#### # adresses 62 30 14

### o Réseau de classe C

4. Quatrième réseau à étudier :

- Liste de réseaux actuellement utilisés :

  - 1 segment de 62 postes

  - 3 segments de 30 postes

  - 4 segments de 14 postes

#### Indiquer les segments inutilisés :

#### En rouge les réseaux utilisés

#### En vert les réseaux disponibles

#### / 24 / 26 / 27 / 28

#### Réseau

#### Global

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### # adresses 62 30 14

5. Cinquième réseau à étudier :

- Liste de réseaux actuellement utilisés :

  - 3 segments de 30 postes

  - 3 segments de 14 postes

#### Indiquer les segments inutilisés :

#### En rouge les réseaux utilisés

#### En vert les réseaux disponibles

#### / 24 / 26 / 27 / 28

#### Réseau

#### Global

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### # adresses 62 30 14

6. Sixième réseau à étudier :

- Liste de réseaux actuellement utilisés :

  - 1 segment de 62 postes

  - 1 segment de 14 postes

#### Indiquer les segments inutilisés :

#### En rouge les réseaux utilisés

#### En vert les réseaux disponibles

#### / 24 / 26 / 27 / 28

#### Réseau

#### Global

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### SR SR

#### SR

#### # adresses 62 30 14
