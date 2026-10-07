# Module 02 — Les unités informatiques

**Séquence :** Bases des réseaux

## Objectifs

- distinguer bit, octet et leurs multiples ;
- reconnaître les bases binaire, octale, décimale et hexadécimale ;
- convertir une valeur dans les exemples explicitement traités par les sources ;
- relier la représentation binaire aux usages réseau cités : IPv6 et adresses MAC.

## 1. Bit et octet

Un **bit** est un chiffre binaire. Les sources rappellent qu’un octet contient **8 bits**. Cette unité donne un premier repère avant de changer de base : en binaire, chaque position porte une puissance de deux.

## 2. Bases de numération

Un système de numération représente une valeur avec un ensemble de symboles et des puissances de sa base. Les sources M01/M02 présentent quatre bases :

| Base | Symboles | Repère de conversion cité |
|---|---|---|
| Binaire (2) | `0`, `1` | chaque position vaut une puissance de deux ; un bit vaut `0` ou `1`. |
| Octale (8) | `0` à `7` | un chiffre octal représente trois bits. |
| Décimale (10) | `0` à `9` | chaque position vaut une puissance de dix. |
| Hexadécimale (16) | `0` à `9`, `A` à `F` | un chiffre hexadécimal représente quatre bits. |

La notation binaire correspond aux deux états utilisés par les circuits. L’hexadécimal rend une suite binaire longue plus lisible en la regroupant par blocs de quatre bits.

## 3. Méthodes et exemples de conversion attestés

### Exemple 1 — Décimal vers binaire

La source décrit la méthode des divisions successives par deux : diviser, conserver le reste, recommencer avec le quotient puis lire les restes de bas en haut.

| Division | Quotient | Reste |
|---|---:|---:|
| `25 ÷ 2` | `12` | `1` |
| `12 ÷ 2` | `6` | `0` |
| `6 ÷ 2` | `3` | `0` |
| `3 ÷ 2` | `1` | `1` |
| `1 ÷ 2` | `0` | `1` |

Lu de bas en haut, le résultat source est : `25` → `11001`.

### Exemple 2 — Binaire vers décimal

Additionner les puissances de deux correspondant aux positions contenant `1`. Exemples cités :

- `11000000` = `128 + 64` = `192` ;
- `1011` = `8 + 2 + 1` = `11`.

### Exemples 3 et 4 — Binaire, octal et hexadécimal

Pour passer du binaire à l’octal, former des groupes de trois bits à partir de la droite. L’exemple `110110` devient `66` en octal. Pour l’hexadécimal, former des groupes de quatre bits : `1010 1111` devient `AF`.

!!! warning "Rester dans le périmètre des sources"
    Les sources exploitables présentent des exemples de bases et de conversions. Elles ne permettent pas de déduire ici une formule générale de capacité ou de débit : cette partie n’est donc pas enseignée dans cette page.

## 4. Usages réseau cités

L’hexadécimal est utilisé dans les exemples d’adresses IPv6 et d’adresses MAC parce qu’il condense les bits en groupes de quatre.

L’exemple d’adresse MAC `00:1A:2B:3C:4D:5E` illustre cette écriture hexadécimale. L’exemple IPv6 présenté par les sources utilise des groupes hexadécimaux. Ces représentations seront approfondies dans les modules consacrés à l’adressage ; ici, elles servent à reconnaître l’intérêt de la base 16.

## 5. Vérifier et retenir

1. identifier la base de départ et la base d’arrivée ;
2. appliquer uniquement une méthode étudiée ;
3. écrire les groupes de bits dans le bon sens ;
4. refaire le calcul inverse lorsque l’exemple le permet ;
5. s’arrêter lorsqu’une règle nécessaire n’est pas enseignée par les sources disponibles.

## Mise en pratique et révision

- Aucun TP, énoncé ou correction M02 lisible n’est attesté dans Drive live.
- [Présentation de la formation](index.md)
- [Fiche de révision](../../revision/reseaux/module-02-les-unites-informatiques.md)
- [Kahoot du module](../../kahoot/01-bases-reseaux-02-les-unites-informatiques.md)

## Source et provenance

- **Sources A — TSSR Drive live :** `cours kahoot module 1 et 2.txt`, Drive `1lboUfARfL1q4Oemnr9M-_vi0XpnzuRmn`, SHA-256 `a962747a178b82dd0924fa20e257b41501547d8ca087cb8c8724ac44807cd243` ; `Cours_Reseaux_Modules1_2_Quiz_Kahoot.pdf`, Drive `1yZg-sL1N1_IEhwcIlVPg2aBJ-PkjBrIX`, SHA-256 `1b365671ffb9859790c7a270061aa415ada9ccf7853b4973ee7b5010664e6724`.
- **Structuration B :** organisation des exemples et méthode de vérification, sans apport externe.
