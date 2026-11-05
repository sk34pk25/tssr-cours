# Corrigés commentés — Module 06 — Le DHCP

La démarche suit les objectifs des énoncés. Les écarts du corrigé source et les adaptations sont signalés au moment de la manipulation. Les transcriptions complètes restent dans l’onglet Original.

## TP 1 — Serveur DHCP et relais

Dans le scénario historique, installer le paquet relais sur RouTux et le paquet serveur sur DEB-S1. Identifier les interfaces vers les deux LAN et tester RouTux vers DEB-S1. L’assistant à relancer sur RouTux est `dpkg-reconfigure isc-dhcp-relay`. Le corrigé cite le paquet serveur et donne parfois l’adresse de DEB-S2. Retenir la répartition suivante.

| Machine | Service | Valeur de référence |
|---|---|---|
| RouTux | Relais | `ens33` vers Clients, `ens36` vers Serveurs dans la correction |
| DEB-S1 | DHCP | `192.168.X.11` |
| DEB-S2 | DNS | `192.168.X.12` |
| Cli-db-10 | Client DHCP | Plage `172.18.X.100` à `172.18.X.200` |

Déclarer le sous-réseau d’écoute du serveur et l’étendue Clients. Les durées sont `345600` et `691200` secondes. La passerelle distribuée est `172.18.X.254`, avec DEB-S2 comme DNS. Renseigner `INTERFACESv4` avec la carte réelle de DEB-S1 et valider la syntaxe du fichier.

```bash
dhcpd -t -cf /etc/dhcp/dhcpd.conf
```

Arrêter le service du relais et le service DHCP sur leurs hôtes respectifs, puis lancer les binaires dans deux terminaux. Exemple de relais pour `X=30`.

```bash
dhcrelay -d -iu ens36 -id ens33 192.168.30.11
```

Sur DEB-S1, lancer `dhcpd -d`, puis basculer le profil du client en DHCP et réactiver la connexion. Relier Discover, Offer, Request et Ack au bail observé. Vérifier adresse, route et DNS du client, puis arrêter les binaires de test. Relancer `isc-dhcp-server` sur DEB-S1 et `isc-dhcp-relay` sur RouTux. Vérifier `is-active` et `is-enabled` sur chacun. Le nom de facility de journalisation illustré est `local7`. ISC publie le statut de maintenance de ces composants historiques. [ISC DHCP](https://www.isc.org/dhcp/).

[Reprendre les énoncés](enonces.md) · [Exemples détaillés et références du cours](../../../modules/15-services-reseau-en-environnement-linux/module-06-dhcp.md).
