# Fiche de révision — Module 06 — L’adressage IPv6

## Objectif de la fiche

Retenir la représentation IPv6, les règles d’écriture et les repères d’adresses explicitement étudiés dans le support TSSR.

## Structure d’une adresse

| Repère | À retenir |
| --- | --- |
| Taille | 128 bits |
| Écriture | 8 groupes hexadécimaux séparés par `:` |
| Un groupe | 4 chiffres hexadécimaux = 16 bits = 2 octets |
| Exemple | `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |

## Compresser et développer

1. Supprimer les zéros initiaux de chaque quartet.
2. Remplacer une seule suite continue de quartets nuls par `::`.
3. Pour contrôler une écriture abrégée, retrouver huit quartets au total.

```text
2001:0db8:0000:0000:0000:ff00:0042:8329
2001:db8::ff00:42:8329
```

## Types d’adresses

| Type | Rôle |
| --- | --- |
| Unicast | un appareil unique |
| Multicast | un groupe de destinataires |
| Anycast | le nœud le plus proche d’un groupe partageant l’adresse |

## Repères à reconnaître

| Écriture | Sens étudié |
| --- | --- |
| `FE80::/10` | lien local |
| `2000::/3` | globale routable sur Internet |
| `FF00::/8` | multidiffusion |
| `::1` | boucle locale |
| `::/0` | route par défaut |
| `::/128` | adresse non spécifiée |

## Multicast : exemples du support

- `FF02::1` : tous les nœuds du lien local ;
- `FF02::2` : tous les routeurs du lien local ;
- `FF02::fb` : multidiffusion DNS.

## Coexistence IPv4 / IPv6

- **Double stack** : IPv4 et IPv6 simultanément.
- **Tunneling** : IPv6 encapsulé dans IPv4.
- **NAT64** : communication entre un appareil IPv6 et un appareil IPv4.

## Auto-évaluation

- [ ] Je sais expliquer pourquoi une adresse IPv6 comporte 128 bits.
- [ ] Je sais réduire puis développer une adresse sans modifier sa valeur.
- [ ] Je reconnais unicast, multicast et anycast.
- [ ] Je reconnais `FE80::/10`, `2000::/3`, `FF00::/8` et `::1`.
- [ ] Je peux citer une technique de coexistence IPv4/IPv6 présentée dans le cours.

Pour approfondir : [cours complet](../../modules/01-bases-reseaux/module-06-l-adressage-ipv6.md) · [Kahoot du module](../../kahoot/01-bases-reseaux-06-l-adressage-ipv6.md).

## Provenance pédagogique

- **A — source originale :** support TSSR « cours kahoot module 5 et 6 », partie Module 6.
- **B — structuration pédagogique :** synthèse, tableau de révision et auto-évaluation élaborés à partir de la source A.
