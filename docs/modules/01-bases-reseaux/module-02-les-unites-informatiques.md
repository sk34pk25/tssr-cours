# Module 02 — Les unités informatiques

**Séquence :** Bases des réseaux  
**Rôle dans le parcours :** lire et convertir les bases utilisées ensuite pour les adresses et les masques.

L’onglet Cours Original indique **Inexistant**. Le dossier ne contient aucun document propre à ce module. La fiche suit la partie « unités » des notes de quiz des modules 1 et 2.

## Objectifs

À l’issue du module, vous devez pouvoir :

- distinguer bit et octet ;
- convertir les exemples des notes entre décimal, binaire, octal et hexadécimal ;
- regrouper les bits par 3 pour l’octal et par 4 pour l’hexadécimal ;
- reconnaître une adresse MAC et le rôle de l’hexadécimal dans une adresse IPv6.

## 1. Bit et octet

Un **bit** est un chiffre binaire, 0 ou 1. Les notes le relient aux deux états d’un circuit. Un **octet** groupe 8 bits. Les notes s’en servent pour découper une adresse IPv4 en quatre octets, chacun de 0 à 255.

| Base | Symboles dans les notes | Regroupement |
|---|---|---|
| 2, binaire | 0, 1 | un bit, puissance de 2 |
| 8, octal | 0 à 7 | un chiffre = 3 bits |
| 10, décimal | 0 à 9 | puissance de 10 |
| 16, hexadécimal | 0 à 9 puis A à F (A = 10 … F = 15) | un chiffre = 4 bits |

## 2. Décimal et binaire

Les notes convertissent par divisions successives. On divise par la base, on note le reste, on recommence avec le quotient, puis on lit les restes du dernier au premier.

Décimal **25** vers le binaire :

| Division | Quotient | Reste |
|---|---:|---:|
| 25 ÷ 2 | 12 | 1 |
| 12 ÷ 2 | 6 | 0 |
| 6 ÷ 2 | 3 | 0 |
| 3 ÷ 2 | 1 | 1 |
| 1 ÷ 2 | 0 | 1 |

Lecture des restes de bas en haut : **11001**.

Binaire **10110** vers le décimal, puissances de 2 de droite à gauche :

| Bit | 1 | 0 | 1 | 1 | 0 |
|---|---:|---:|---:|---:|---:|
| Poids | 16 | 8 | 4 | 2 | 1 |
| Produit | 16 | 0 | 4 | 2 | 0 |

Total : **22**.

Les notes donnent aussi **1011** : 8 + 0 + 2 + 1 = **11**.

## 3. Octal

Même méthode, en divisant par 8. Les notes convertissent **156** :

| Division | Quotient | Reste |
|---|---:|---:|
| 156 ÷ 8 | 19 | 4 |
| 19 ÷ 8 | 2 | 3 |
| 2 ÷ 8 | 0 | 2 |

Lecture : **234** en octal. Le retour au décimal est 2×64 + 3×8 + 4 = **156**.

Pour passer du binaire à l’octal, les notes groupent les bits par trois depuis la droite. **110110** devient 110 110, soit 6 et 6 : **66** en octal.

## 4. Hexadécimal

Les notes décomposent **2AF** : 2×256 + 10×16 + 15 = **687**.

Du binaire vers l’hexadécimal, on groupe par quatre depuis la droite. **10101111** devient 1010 1111, soit A et F : **AF**.

| Usage cité | Exemple des notes |
|---|---|
| Adresse MAC | `00:1A:2B:3C:4D:5E` |
| Adresse IPv6 | huit groupes hexadécimaux, détaillés au module 06 |
| Couleur d’écran | `#FF5733`, rouge FF, vert 57, bleu 33 |

!!! info "Complément externe au cours"
    Les notes ne distinguent pas les préfixes décimaux (1 000) des préfixes binaires (1 024). Cette fiche ne leur attribue pas de règle supplémentaire.

## Résumé

1. Le bit vaut 0 ou 1. L’octet en contient huit.
2. On convertit un décimal par des divisions, et on lit les restes à l’envers.
3. Un chiffre octal compacte 3 bits. Un chiffre hexadécimal compacte 4 bits.
4. Les exemples à retenir sont 25 = 11001, 10110 = 22, 156 = 234 en octal, 2AF = 687, 10101111 = AF.

## Mini-quiz

1. Que vaut le binaire 11001 en décimal, d’après la méthode des notes ?
2. Pourquoi groupe-t-on par quatre bits pour écrire un hexadécimal ?
3. Quelle est l’écriture octale de 156 dans les notes ?
4. À quoi les notes utilisent-elles l’hexadécimal sur une carte réseau ?

??? note "Réponses du mini-quiz"
    1. 25. C’est l’exemple de divisions successives par 2.
    2. Un chiffre hexadécimal représente exactement quatre bits, de 0 à F.
    3. 234.
    4. Pour écrire l’adresse MAC, par exemple `00:1A:2B:3C:4D:5E`.
