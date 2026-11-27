# Mémo — Réseau et Sécurité

Les valeurs viennent des énoncés et des corrections. Quand elles divergent, les deux sont notées.

## Découpage

| Semaine | Travaux |
|---|---|
| 1/2, 2 au 6 novembre 2026 | TP1 à TP5 |
| 2/2, 9 au 13 novembre 2026, CHAUSSIER Alexandre | TP6 à TP9 |

Support de cours : **Inexistant**.

## Exemple d’adressage de la correction du TP1

Plan d’adressage : voir [Lire le schéma Réseau et Sécurité](../tutoriels/reseau-et-securite.md).

Routeur formateur du schéma : `192.168.150.100/24`. L’énoncé du NAT écrit aussi `192.168.150.1`.

## Ports et services cités

| Usage | Valeur écrite |
|---|---|
| HTTP et HTTPS de l’exemple WAN | 80 et 443 |
| Squid | 3128 |
| Redirection HTTP de l’énoncé TP5 | `127.0.0.1` port 3128 |
| RDP | redirection NAT vers SRV-MBR ou son alias |
| VMnet | 10 clients, 11 serveurs, 12 DMZ |

## Noms DNS écrits

`extra.votrenom.lab`, `votredomaine.lab`, et les préfixes `www`, `intranet`, `intra`, `internet`, `extranet`, `routeur`.

[Cours](../modules/17-reseau-et-securite/index.md)
