# Énoncés — Module 03 — L’adressage IPv4

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## M03-04-TP-Sous-réseaux

### Calcul des sous-réseaux

#### TP du Module 03-04

Pour effectuer ce TP, il faut avoir suivi la partie sur le découpage en sous -réseau du

#### module 3 sur l’adressage IPv4

####  En vidéo pour les stagiaires du campus en ligne

 Diaporama et explications pour les stagiaires en présence d’un formateur

#### Durée estimée

#### 3 heures

#### Énoncé

#### A. Validité des adresses en notation CIDR

Indiquez si les adresses sont valides pour des hôtes. Transformez la notation CIDR en notation standard.

#### Adresse Valide @Réseau / @Diffusion Standard

12.1.1.1 /8 OUI 12.0.0.0 12.255.255.255 12.1.1.1 255.0.0.0 209.207.177.100 /30 ................................ ..................... ................................ ..................... ................................ .................... 192.0.35.12 /26 ................................ ..................... ................................ ..................... ................................ .................... 120.146.80.1 /20 ................................ ..................... ................................ ..................... ................................ .................... 120.80.1.0 /11 ................................ ..................... ................................ ..................... ................................ .................... 211.104.16.17 /29 ................................ ..................... ................................ ..................... ................................ .................... 172.168.0.1 /24 ................................ ..................... ................................ ..................... ................................ .................... 109.168.248.32 /21 ................................ ..................... ................................ ..................... ................................ ....................

96.139.84.12 /21 ................................ ..................... ................................ ..................... ................................ .................... 172.16.32.0 /25 ................................ ..................... ................................ ..................... ................................ .................... 172.16.0.127 /25 ................................ ..................... ................................ .................... 192.168.19.87 /29 ................................ ..................... ................................ ..................... ................................ .................... 172.16.32.1 /18 ................................ ..................... ................................ ..................... ................................ .................... 210.71.10.128 /28 ................................ ..................... ................................ ..................... ................................ ....................

### B. Calculs de masque

Calculez le masque approprié et complétez l'adresse en notation CIDR afin d'obtenir la quantité d'hôtes ou de sous-réseaux requis. Le masque de sous-réseau de départ est le masque par défaut associé à la classe.

#### PARAMETRES REQUIS Notation CIDR

Au moins 120 sous-réseaux : 172.16.0.0/ ........... 2 adresses par sous-réseau (liaisons pt à pt) 192.168.1.0/ ........... Au moins 31 sous-réseaux 185.221.0.0/ ........... Au moins 15 sous-réseaux 131.107.0.0/ ........... A peu près 500 sous-réseaux 140.10.0.0/ ........... Exactement 8 sous-réseaux 192.168.10.0/ ........... 10 sous-réseaux d'au moins 17 hôtes 214.12.33.0/ ........... Environ 2020 sous-réseaux 10.0.0.0/ ........... 127 sous-réseaux 188.23.0.0/ ...........

#### C. Calculs de masques, nombre de réseaux et hôtes

Calculez le masque adapté aux exigences du scénario. Indiquez le nombre de sous-réseaux créés. Indiquez le nombre d'hôtes par sous-réseau. LE RESEAU DE DEPART COMPORTE TOUJOURS UN MASQUE DE CLASSE A, B ou C standard

#### Scénario 1

#### Nombre de segments physiques requis : 5

#### Nombre maximum d'hôtes par segment : 25

#### Adresse de réseau : 192.177.4.0

#### Masque de sous-réseau proposé :

#### Nombre de sous-réseaux créés :

#### Nombre maximum d'adresses par segment :

#### Scénario 2

#### Nombre de segments physiques requis : 100

#### Nombre maximum d'hôtes par segment : 88.000

#### Adresse de réseau : 39.0.0.0

#### Masque de sous-réseau proposé :

#### Nombre de sous-réseaux créés :

#### Nombre maximum d'adresses par segment :

### Scénario 3

#### Nombre de segments physiques requis : 100

#### Nombre maximum d'hôtes par segment : 350

#### Adresse de réseau : 171.133.0.0

#### Masque de sous-réseau proposé :

#### Nombre de sous-réseaux créés :

#### Nombre maximum d'adresses par segment :

#### Scénario 4

#### Nombre de segments physiques requis : 16

#### Nombre maximum d'hôtes par segment : 1 500

#### Adresse de réseau : 128.199.0.0

#### Masque de sous-réseau proposé :

#### Nombre de sous-réseaux créés :

#### Nombre maximum d'adresses par segment :

#### Scénario 5

#### Nombre de segments physiques requis : 250

#### Nombre maximum d'hôtes par segment : 100

#### Adresse de réseau : 191.254.0.0

#### Masque de sous-réseau proposé :

#### Nombre de sous-réseaux créés :

#### Nombre maximum d'adresses par segment :

#### Scénario 6

#### Nombre de segments physiques requis : 12

#### Nombre maximum d'hôtes par segment : 12

#### Adresse de réseau : 216.121.44.0

#### Masque de sous-réseau proposé :

#### Nombre de sous-réseaux créés :

#### Nombre maximum d'adresses par segment :

#### Scénario 7

#### Nombre de segments physiques requis : 50

#### Nombre maximum d'hôtes par segment : 600

#### Adresse de réseau : 134.119.0.0

#### Masque de sous-réseau proposé :

#### Nombre de sous-réseaux créés :

#### Nombre maximum d'adresses par segment :

### D. Découpage en sous-réseau

#### On découpe le bloc 199.210.15.0 /24 selon le schéma suivant :

#### Donnez les adresses des 7 segments définis (par ordre croissant) :

Segment 1 ................................ ................................ ................................ ................................ ..... Segment 2 ................................ ................................ ................................ ................................ ..... Segment 3 ................................ ................................ ................................ ................................ ..... Segment 4 ................................ ................................ ................................ ................................ ..... Segment 5 ................................ ................................ ................................ ................................ ..... Segment 6 ................................ ................................ ................................ ................................ ..... Segment 7 ................................ ................................ ................................ ................................ .....

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

#### Classe C / 25 / 26 / 27 /28 /29

195.220.12.0

2. Deuxième réseau à découper : 192.168.10.0 /24

- Segments à définir

  - 3 segments contenant d'une soixantaine d'hôtes

  - 1 segment contenant d'une trentaine de postes

  - 2 segments contenant d'au moins 11 machines

- Listez les segments dans le tableau :

#### Classe C / 25 / 26 / 27 /28 /29

192.168.10.0

### 3. Troisième réseau à découper : 222.8.15.0 /24

- Segments à définir

  - 1 segments contenant d'une centaine d'hôtes

  - 4 segments contenant 28 hôtes environ

- Listez les segments dans le tableau :

#### Classe C / 25 / 26 / 27 /28 /29

222.8.15.0

#### F. Recherche de sous-réseaux inutilisés

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

### o 192.168.10.0 /24

2. Deuxième réseau à étudier :

- Liste de réseaux actuellement utilisés :

  - 192.168.10.0 /25

  - 192.168.10.128 /27

  - 192.168.10.160 /27

  - 192.168.10.224 /28

#### Indiquer les segments inutilisés :

................................ ................................ ................................ ................................ .........................

3. Troisième réseau à étudier :

  - 199.1.1.0 /24

- Liste de réseaux actuellement utilisés :

  - 199.1.1.0 /26

  - 199.1.1.128 /27

  - 199.1.1.160 /27

  - 199.1.1.192 /28

  - 199.1.1.224 /28

  - 199.1.1.240 /28

#### Indiquer les segments inutilisés :

................................ ................................ ................................ ................................ .........................

4. Quatrième réseau à étudier :

  - Réseau de classe C

- Liste de réseaux actuellement utilisés :

  - 1 segment de 62 postes

  - 3 segments de 30 postes

  - 4 segments de 14 postes

#### Indiquer les segments inutilisés :

................................ ................................ ................................ ................................ .........................

### o Réseau de classe C

5. Cinquième réseau à étudier :

- Liste de réseaux actuellement utilisés :

  - 3 segments de 30 postes

  - 3 segments de 14 postes

#### Indiquer les segments inutilisés :

................................ ................................ ................................ ................................ .........................

6. Sixième réseau à étudier :

  - Réseau de classe C

- Liste de réseaux actuellement utilisés :

  - 1 segment de 62 postes

  - 1 segment de 14 postes

#### Indiquer les segments inutilisés :

................................ ................................ ................................ ................................ .........................

Une fois le travail terminé : [consulter les corrections](corrections.md).
