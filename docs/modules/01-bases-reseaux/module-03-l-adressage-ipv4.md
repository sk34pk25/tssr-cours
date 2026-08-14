# Module 03 — L’adressage IPv4

**Séquence :** Bases des réseaux  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Les six modules sont explicitement nommés dans les dossiers et supports Réseaux. Les activités Packet Tracer sont conservées comme ressources binaires à ouvrir avec Cisco Packet Tracer.

## Objectifs et compétences

- Décomposer une adresse IPv4 en identifiants réseau et hôte.
- Calculer l’adresse réseau et la diffusion à partir du masque.
- Interpréter la notation CIDR et réaliser un sous-réseautage.
- Reconnaître les plages privées, la boucle locale et l’APIPA.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « L’adressage IPv4 » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Repères visuels

Une adresse IPv4 comporte **32 bits**, présentés en quatre octets décimaux. Le masque — ou préfixe CIDR — sépare les bits qui identifient le réseau de ceux qui identifient l’hôte.

<figure class="tssr-figure">
  <div class="tssr-figure__canvas">
    <div class="tssr-ipv4-address" role="img" aria-label="Décomposition de l’adresse IPv4 192.168.10.77 en quatre octets">
      <div class="tssr-octet"><b>192</b><code>11000000</code></div>
      <div class="tssr-octet"><b>168</b><code>10101000</code></div>
      <div class="tssr-octet"><b>10</b><code>00001010</code></div>
      <div class="tssr-octet"><b>77</b><code>01001101</code></div>
    </div>
  </div>
  <figcaption><code>192.168.10.77</code> : quatre octets, donc 4 × 8 = 32 bits.</figcaption>
</figure>

<figure class="tssr-figure">
  <div class="tssr-figure__canvas">
    <div class="tssr-prefix-bar" style="--network:75%" role="img" aria-label="Préfixe IPv4 slash 24 avec 24 bits réseau et 8 bits hôte">
      <span class="tssr-prefix-bar__network">24 bits réseau<br/>192.168.10</span>
      <span class="tssr-prefix-bar__host">8 bits hôte<br/>0 à 255</span>
    </div>
  </div>
  <figcaption>Avec <code>192.168.10.77/24</code> : réseau <code>192.168.10.0</code>, hôtes utilisables <code>.1</code> à <code>.254</code>, diffusion <code>.255</code>.</figcaption>
</figure>

### Sous-réseautage à taille fixe : exemple en /27

<figure class="tssr-figure">
  <div class="tssr-figure__canvas">
    <div class="tssr-subnet-map" role="img" aria-label="Découpage du réseau 192.168.10.0 slash 24 en sous-réseaux slash 27 par pas de 32">
      <div class="tssr-subnet"><b>192.168.10.0/27</b><span>Hôtes .1–.30<br/>Diffusion .31</span></div>
      <div class="tssr-subnet"><b>192.168.10.32/27</b><span>Hôtes .33–.62<br/>Diffusion .63</span></div>
      <div class="tssr-subnet"><b>192.168.10.64/27</b><span>Hôtes .65–.94<br/>Diffusion .95</span></div>
      <div class="tssr-subnet"><b>192.168.10.96/27 …</b><span>Hôtes .97–.126<br/>Puis pas de 32</span></div>
    </div>
  </div>
  <figcaption>Un /27 laisse 5 bits hôte : 2⁵ = 32 adresses par bloc, soit 30 hôtes utilisables. Le pas vaut donc 32.</figcaption>
</figure>

### VLSM : adapter chaque sous-réseau au besoin

<figure class="tssr-figure">
  <div class="tssr-figure__canvas">
    <div class="tssr-vlsm" role="img" aria-label="Allocation VLSM d’un réseau slash 24 en blocs slash 25, slash 26 et deux slash 27">
      <div style="background:#3978c5">Service A · /25<br/>126 hôtes utilisables</div>
      <div style="background:#159574">Service B · /26<br/>62 hôtes</div>
      <div style="background:#c47a18">C · /27<br/>30 hôtes</div>
      <div style="background:#7c5bc4">Réserve · /27<br/>30 hôtes</div>
    </div>
  </div>
  <figcaption>Méthode VLSM : classer les besoins du plus grand au plus petit, attribuer le préfixe minimal suffisant, puis poursuivre à la prochaine adresse réseau valide.</figcaption>
</figure>

## Cours consolidé

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

Le domaine de diffusion

## Mise en pratique

- [Travaux pratiques du module](../../tp/reseaux/module-03/index.md)
- [Fiche de révision du module](../../revision/reseaux/module-03-l-adressage-ipv4.md)

## Questions flash

1. Comment expliquer simplement « L’adressage IPv4 » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Décomposer une adresse IPv4 en identifiants réseau et hôte.
    - Calculer l’adresse réseau et la diffusion à partir du masque.
    - Interpréter la notation CIDR et réaliser un sous-réseautage.
    - Reconnaître les plages privées, la boucle locale et l’APIPA.

## Voir aussi

- [Présentation de la séquence](index.md)
