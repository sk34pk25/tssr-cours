# Mémo — IPv4 et CIDR

**Source : Bases des réseaux, notes des modules 3-4 « L’adressage IPv4 ».** Tableaux et phrases repris tels quels.

## Notation CIDR

| CIDR | Masque Décimal | Bits de Réseau | Bits d’Hôtes | Nombre d'Hôtes |
|---|---|---:|---:|---:|
| /24 | 255.255.255.0 | 24 | 8 | 254 |
| /26 | 255.255.255.192 | 26 | 6 | 62 |
| /28 | 255.255.255.240 | 28 | 4 | 14 |

Exemple d'Utilisation : 192.168.10.0/26. Les 26 premiers bits (soit 255.255.255.192) sont réservés pour l'identifiant réseau. Les 6 bits restants permettent de créer 64 adresses, mais seulement 62 hôtes utilisables (les adresses de réseau et de broadcast ne sont pas attribuables aux hôtes).

## Du masque au préfixe

Pour convertir un masque de sous-réseau en préfixe CIDR, il suffit de compter le nombre de bits à 1 dans la représentation binaire du masque. Ce nombre correspond à la valeur du préfixe CIDR.

| Masque Décimal | Masque en Binaire | Préfixe CIDR |
|---|---|---|
| 255.0.0.0 | 11111111.00000000.00000000.00000000 | /8 |
| 255.255.0.0 | 11111111.11111111.00000000.00000000 | /16 |
| 255.255.255.0 | 11111111.11111111.11111111.00000000 | /24 |
| 255.255.255.128 | 11111111.11111111.11111111.10000000 | /25 |
| 255.255.255.192 | 11111111.11111111.11111111.11000000 | /26 |
| 255.255.255.240 | 11111111.11111111.11111111.11110000 | /28 |

## Table de Référence Rapide

| CIDR | Masque Décimal |
|---|---|
| /8 | 255.0.0.0 |
| /16 | 255.255.0.0 |
| /24 | 255.255.255.0 |
| /26 | 255.255.255.192 |
| /28 | 255.255.255.240 |
| /30 | 255.255.255.252 |

## Adresse de diffusion

L’adresse de broadcast est obtenue en mettant tous les bits de la partie hôte à 1.

Le détail est dans le [cours IPv4](../modules/01-bases-reseaux/module-03-l-adressage-ipv4.md).
