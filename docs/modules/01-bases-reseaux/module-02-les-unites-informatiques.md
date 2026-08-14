# Module 02 — Les unités informatiques

**Séquence :** Bases des réseaux  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 0 énoncé(s), 0 correction(s)

!!! warning "Périmètre et versions"
    Les six modules sont explicitement nommés dans les dossiers et supports Réseaux. Les activités Packet Tracer sont conservées comme ressources binaires à ouvrir avec Cisco Packet Tracer.

## Objectifs et compétences

- Distinguer bit, octet et leurs multiples.
- Manipuler les bases binaire, décimale et hexadécimale.
- Convertir une capacité ou un débit sans confondre octets et bits par seconde.
- Utiliser les puissances de deux utiles à l’adressage.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Les unités informatiques » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Repères visuels

Un octet contient **8 bits**. En binaire, chaque position vaut une puissance de deux ; additionner les poids associés aux bits à `1` donne la valeur décimale.

<figure class="tssr-figure">
  <div class="tssr-figure__canvas">
    <div class="tssr-bits" role="img" aria-label="Poids binaires d’un octet de 128 à 1">
      <div class="tssr-bit"><b>128</b><span>2⁷</span></div><div class="tssr-bit"><b>64</b><span>2⁶</span></div>
      <div class="tssr-bit"><b>32</b><span>2⁵</span></div><div class="tssr-bit"><b>16</b><span>2⁴</span></div>
      <div class="tssr-bit"><b>8</b><span>2³</span></div><div class="tssr-bit"><b>4</b><span>2²</span></div>
      <div class="tssr-bit"><b>2</b><span>2¹</span></div><div class="tssr-bit"><b>1</b><span>2⁰</span></div>
    </div>
  </div>
  <figcaption>Exemple : <code>11000000</code> vaut 128 + 64 = 192. C’est le premier octet de nombreuses adresses privées.</figcaption>
</figure>

<div class="tssr-service-grid" aria-label="Équivalences de bases">
  <div class="tssr-service-card" style="--card-color:#596675"><b>Binaire · base 2</b><span><code>1111</code></span></div>
  <div class="tssr-service-card" style="--card-color:#3978c5"><b>Décimal · base 10</b><span><code>15</code></span></div>
  <div class="tssr-service-card" style="--card-color:#7c5bc4"><b>Hexadécimal · base 16</b><span><code>F</code></span></div>
  <div class="tssr-service-card" style="--card-color:#159574"><b>Regroupement</b><span>1 chiffre hexadécimal = 4 bits</span></div>
</div>

## Cours consolidé

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

## Mise en pratique

- Aucun énoncé de TP distinct n’est fourni pour ce module.
- [Fiche de révision du module](../../revision/reseaux/module-02-les-unites-informatiques.md)

## Questions flash

1. Comment expliquer simplement « Les unités informatiques » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Distinguer bit, octet et leurs multiples.
    - Manipuler les bases binaire, décimale et hexadécimale.
    - Convertir une capacité ou un débit sans confondre octets et bits par seconde.
    - Utiliser les puissances de deux utiles à l’adressage.

## Voir aussi

- [Présentation de la séquence](index.md)
