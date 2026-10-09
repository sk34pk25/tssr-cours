# Module 06 — L’adressage IPv6

**Formation :** Bases des réseaux

**Pré-requis :** connaître le rôle d’une adresse IP et la représentation binaire et hexadécimale.
**Source pédagogique :** support TSSR « cours kahoot module 5 et 6 » — partie *Module 6 — L’adressage IPv6*.

## Objectifs

À l’issue du module, vous devez pouvoir :

- décrire l’écriture d’une adresse IPv6 ;
- réduire puis développer une écriture IPv6 sans en changer la valeur ;
- distinguer les adresses unicast, multicast et anycast ;
- repérer les adresses et préfixes étudiés dans le support ;
- situer les mécanismes de coexistence IPv4/IPv6 présentés dans le cours.

## 1. Lire une adresse IPv6

Le support présente IPv6 comme un protocole utilisant des **adresses de 128 bits**, soit quatre fois la taille d’une adresse IPv4. Une adresse est écrite sous la forme de **huit groupes de quatre chiffres hexadécimaux**, séparés par des deux-points. Chaque groupe, ou *quartet*, représente 16 bits.

```text
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

| Élément | Lecture attendue |
| --- | --- |
| Nombre de groupes | 8 quartets |
| Taille d’un quartet | 16 bits, soit 2 octets |
| Taille totale | 128 bits |
| Base d’écriture | hexadécimale |

Dans l’exemple du support, `2001:0db8` identifie le réseau et `8a2e:0370:7334` l’hôte. Cette décomposition sert de repère de lecture ; elle ne dispense pas de vérifier le préfixe utilisé dans une configuration réelle.

## 2. Réduire une écriture IPv6 sans la modifier

Deux règles de simplification sont utilisées dans le support.

1. Supprimer les zéros placés au début de chaque quartet.
2. Remplacer **une seule fois** une suite continue de quartets nuls par `::`.

| Étape | Exemple source |
| --- | --- |
| Écriture développée | `2001:0db8:0000:0000:8a2e:0370:7334` |
| Zéros initiaux supprimés | `2001:db8:0:0:8a2e:370:7334` |
| Suite de zéros compressée | `2001:db8::8a2e:370:7334` |

Autre exemple du support :

```text
2001:0db8:0000:0000:0000:ff00:0042:8329
2001:db8::ff00:42:8329
```

### Vérifier sa lecture

Avant d’utiliser une adresse dans un exercice ou une configuration, développez mentalement les groupes absents et comptez les huit quartets. Cette vérification évite de confondre une écriture abrégée avec une adresse plus courte.

## 3. Types d’adresses étudiés

Le support distingue trois catégories principales.

| Type | Rôle présenté dans le support |
| --- | --- |
| **Unicast** | identifie un appareil unique sur le réseau ; |
| **Multicast** | permet d’envoyer un paquet à plusieurs appareils d’un groupe ; |
| **Anycast** | permet d’atteindre le nœud le plus proche parmi un groupe partageant la même adresse. |

Le multicast remplace en grande partie les diffusions (*broadcast*) IPv4 dans les exemples du support.

## 4. Repères d’adressage du support

Les préfixes suivants sont explicitement utilisés dans le cours.

| Repère | Usage présenté |
| --- | --- |
| `FE80::/10` | communication de lien local et autoconfiguration de lien-local ; |
| `2000::/3` | adresses globales routables sur Internet ; |
| `FF00::/8` | adresses de multidiffusion ; |
| `::1` | boucle locale, utilisée pour tester la connectivité locale ; |
| `::/0` | tous les réseaux, utilisé comme route par défaut ; |
| `::/128` | adresse non spécifiée avant l’obtention d’une adresse lien-local. |

!!! note "Lecture prudente du support"
    Les fragments du support consacrés aux adresses locales uniques présentent des libellés contradictoires. Cette page ne déduit donc pas de règle supplémentaire de ces fragments : utilisez les repères non ambigus ci-dessus et signalez ce point à l’encadrant si l’exercice exige ce détail.

## 5. Adresse globale unicast : découpage présenté

Pour une adresse globale unicast, le support propose le découpage suivant :

| Préfixe global | Sous-réseau | Identifiant d’interface |
| --- | --- | --- |
| 48 bits | 16 bits | 64 bits |

Le préfixe global identifie le réseau, l’identifiant de sous-réseau permet son découpage interne et l’identifiant d’interface identifie une interface. Le support évoque notamment une dérivation EUI-64 ou une configuration manuelle pour ce dernier champ.

## 6. Multicast IPv6

Les adresses multicast étudiées commencent par `FF` et appartiennent à `FF00::/8`. Le support décrit leur format ainsi :

| Préfixe | Flags | Scope | Identifiant de groupe |
| --- | --- | --- | --- |
| 8 bits | 4 bits | 4 bits | 112 bits |

Exemples fournis :

- `FF02::1` : tous les nœuds du réseau local ;
- `FF02::2` : tous les routeurs du réseau local ;
- `FF02::1:2` : serveurs et relais DHCP du lien local ;
- `FF02::fb` : multidiffusion DNS ;
- `FF05::1` : tous les nœuds d’un site ;
- `FF0E::101` : exemple de multidiffusion globale spécifique.

## 7. Faire coexister IPv4 et IPv6

Les deux protocoles ne sont pas directement compatibles. Le support cite trois techniques de coexistence :

- **double stack** : les deux protocoles sont utilisés simultanément ;
- **tunneling** : des paquets IPv6 sont encapsulés dans des paquets IPv4 ;
- **NAT64** : permet la communication entre appareils IPv6 et IPv4.

## Pour réviser et s’entraîner

- Consultez la [fiche de révision IPv6](../../revision/reseaux/module-06-l-adressage-ipv6.md).
- Testez vos connaissances avec le [Kahoot du module 06](../../kahoot/01-bases-reseaux-06-l-adressage-ipv6.md).
- Retournez à la [présentation de la formation Bases des réseaux](index.md).

## Provenance pédagogique

- **A — source originale :** support TSSR « cours kahoot module 5 et 6 », partie Module 6.
- **B — structuration pédagogique :** organisation web, tableaux de lecture, vérifications et liens de navigation construits à partir de cette source, sans apport externe.
