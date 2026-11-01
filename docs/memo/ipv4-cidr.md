# Mémo — IPv4 et CIDR

| Préfixe | Masque | Adresses | Hôtes usuels |
|---:|---|---:|---:|
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 6 |
| /30 | 255.255.255.252 | 4 | 2 |

## Méthode du pas étudiée

`Pas = 256 - valeur de l’octet significatif du masque`.

Pour un `/26`, le masque vaut `255.255.255.192`, donc le pas vaut `64`. Les réseaux du dernier octet commencent à 0, 64, 128 et 192.

## Contrôle

L’adresse réseau possède tous les bits hôte à 0 ; la diffusion possède tous les bits hôte à 1.

Dans le TP du module 03, plusieurs masques imprimés offrent moins d’hôtes que le scénario. La correction est conservée telle qu’elle est écrite. Le détail est dans le [cours IPv4](../modules/01-bases-reseaux/module-03-l-adressage-ipv4.md).
