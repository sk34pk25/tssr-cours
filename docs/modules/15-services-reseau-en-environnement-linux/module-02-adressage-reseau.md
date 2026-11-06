# Module 02 — Adressage réseau

## Objectifs

- Associer chaque carte VMware à son interface Linux.
- Distinguer l’état réseau courant et la configuration persistante.
- Configurer DEB-S1, DEB-S2 et Cli-db-10 avec le gestionnaire prévu.
- Vérifier les noms, adresses, routes et réponses avant et après rechargement.

## Identifier interfaces et profils

Le support présente les noms prévisibles issus de la détection du matériel, tels que `ens33` et `enp0s…`, et l’ancien schéma `eth0`, `eth1`. `lo` est l’interface de boucle locale. Dans la maquette, une adresse MAC permet de relier la carte affichée par VMware à l’interface reconnue par Debian. Relever cette correspondance avant de configurer plusieurs cartes.

```bash
ip link show
ip address show
ip route show
```

L’état de liaison, les adresses et la table de routage se lisent séparément. Les abréviations `ip l`, `ip a` et `ip r` apparaissent dans les exemples. Les manuels `man ip`, `man ip-address` et `man ip-route` expliquent les objets et leurs opérations.

## Configurer l’état courant avec ip

```bash
ip link set ens33 up
ip address add 192.168.10.11/24 dev ens33
ip address show dev ens33
ip address del 192.168.10.11/24 dev ens33
```

Ces commandes agissent immédiatement dans le noyau. La configuration persistante est lue au redémarrage par le gestionnaire retenu. Le TP demande une première configuration avec `ip`, un test entre DEB-S1 et DEB-S2, puis la suppression de cet état avant le paramétrage durable. Pour retirer seulement les adresses IPv4 de l’interface identifiée, utiliser `ip -4 address flush dev ens33` depuis la console du laboratoire.

## Écrire une configuration ifupdown

Le fichier `/etc/network/interfaces` conserve les paramètres des interfaces gérées par ifupdown. La déclaration de boucle locale reste en place. L’exemple suivant prend `X=10` pour DEB-S1. La route par défaut sera ajoutée au module suivant.

```text
auto lo
iface lo inet loopback

auto ens33
iface ens33 inet static
    address 192.168.10.11/24
```

Le support montre aussi l’écriture `address` accompagnée de `netmask`, ainsi que `iface ens37 inet dhcp` pour une autre carte. `systemctl restart networking` recharge le service dans ce scénario. Contrôler l’adresse, le préfixe et l’état de l’interface après l’action.

## Configurer un profil NetworkManager

Sur Cli-db-10, utiliser l’interface graphique, `nmtui` ou `nmcli`. Distinguer le nom du profil et celui de la carte. `nmcli connection show` affiche les profils. `nmcli device show ens33` lit l’état associé à cette carte. Le profil d’exemple ci-dessous doit correspondre au nom réellement relevé.

```bash
nmcli connection show
nmcli connection modify 'Wired connection 1' ipv4.method manual ipv4.addresses 172.18.10.10/24
nmcli connection up 'Wired connection 1'
```

Le préfixe `+` devant `ipv4.addresses` ajoute une valeur à la liste. La réactivation applique les paramètres du profil à la connexion. Les lignes ifupdown et le profil NetworkManager correspondent à deux modes de gestion. Identifier le propriétaire de l’interface avant de choisir où rendre le réglage permanent. [Manuel nmcli](https://networkmanager.dev/docs/api/latest/nmcli.html).

## Passerelle par défaut

La route par défaut sert lorsque la table ne possède pas de route plus spécifique. Dans les exemples du support, elle peut être ajoutée, changée ou supprimée via `ip route`. Une modification persistante se fait dans le profil NetworkManager avec `ipv4.gateway` ou dans la configuration ifupdown avec `gateway`. La passerelle doit être joignable sur le réseau de l’interface concernée. Vérifier `ip route` après le changement et examiner les métriques si plusieurs profils proposent une sortie.

## Nom d’hôte et résolution du poste

| Emplacement | Rôle |
|---|---|
| `/etc/hostname` | Nom configuré pour la machine |
| `/etc/hosts` | Associations locales entre adresses et noms |
| `/etc/nsswitch.conf` | Ordre des méthodes de résolution de la bibliothèque système |
| `/etc/resolv.conf` ou gestionnaire réseau | Serveurs et suffixes de recherche DNS |

Le support montre un nom court et un FQDN. `hostname` affiche le nom courant. `getent hosts` permet de vérifier une recherche suivant les méthodes du système. Une ligne `hosts: files dns` interroge d’abord les fichiers locaux. Dans le second exemple, `mdns4_minimal [NOTFOUND=return]` participe à la recherche des noms en `.local` et peut interrompre la chaîne sur un résultat donné. `myhostname` traite les noms locaux du poste.

`nameserver` identifie un serveur DNS. `search` fournit une liste de suffixes pour les noms relatifs. Les exemples historiques affichent aussi `domain`. En complément, retenir que `domain` est une forme à un seul suffixe et que les directives de recherche successives peuvent se remplacer. Si le fichier est généré, appliquer la modification dans le gestionnaire qui le produit. En DHCP, les options reçues alimentent la configuration selon le profil client. [resolv.conf(5)](https://manpages.debian.org/trixie/manpages/resolv.conf.5.en.html).

## TP guidé — Configurer la maquette {#atelier-dadressage}

1. Créer **Cli-db-10** avec bureau, **1 024 Mo** de mémoire et une carte sur VMNet4. Dans NetworkManager, configurer `172.18.X.10/24` et vérifier l’adresse active. Relever le nom d’hôte et le corriger si nécessaire.
2. Préparer **DEB-S1** et **DEB-S2**, chacun sans bureau, avec **1 024 Mo** et VMNet6. Vérifier leur interface par la MAC. Avec `ip`, les adresser respectivement en `192.168.X.11/24` et `192.168.X.12/24`.
3. Relever les deux adresses et tester le ping entre les serveurs. Retirer uniquement la configuration temporaire du TP, puis écrire les adresses dans la configuration persistante d’ifupdown.
4. Recharger le réseau depuis la console. Relire le nom, l’adresse et le préfixe de chaque serveur, puis répéter les pings. Les tests du module portent sur chaque segment avant le routage entre LAN.
5. Installer **RouTux** sans interface réseau à ce stade. Vérifier son nom d’hôte et conserver la VM pour le module 3.

La correction abrège les commandes dynamiques sans préciser `/24` et écrit une fois `interface` au singulier. L’adressage demandé nécessite le préfixe `/24`. Le fichier employé par ifupdown est `/etc/network/interfaces`.

## Schéma explicatif complémentaire

```mermaid
flowchart LR
 M["Carte VMware et MAC"] --> I["Interface Linux"]
 I --> K["État courant lu avec ip"]
 F["Fichier interfaces ou profil NM"] --> K
 K --> V["Contrôler adresse, route et résolution"]
```

## À retenir

La MAC relie la carte VMware à l’interface du système. Les commandes ip modifient l’état courant. Les réglages ifupdown ou NetworkManager permettent de retrouver l’état attendu après réactivation ou redémarrage.

## Mini-quiz — 5 questions {#autoevaluation}

1. Quel réglage est relu au démarrage dans un serveur ifupdown ?
2. Comment identifier la carte VMware correspondant à une interface Linux ?
3. Quel fichier décrit l’ordre des méthodes de résolution ?
4. Pourquoi tester la communication avant et après la configuration persistante ?
5. Quelle différence entre le nom du profil NetworkManager et celui de l’interface ?

??? success "Réponses commentées"

    1. Les déclarations de /etc/network/interfaces et des fichiers qu’il inclut.
    2. Comparer les adresses MAC dans VMware et dans la sortie de ip link.
    3. /etc/nsswitch.conf. La ligne hosts permet de lire les méthodes utilisées pour les noms.
    4. Le premier test valide l’adressage courant. Le second prouve que le réglage est relu et appliqué.
    5. Le profil contient la configuration. L’interface identifie le périphérique auquel ce profil est appliqué.

## Pour travailler ce module

- [Fiche de révision](../../revision/services-reseau-linux/module-02-adressage-reseau.md)
- [Travaux pratiques](../../tp/services-reseau-linux/module-02/index.md)
- [Énoncés](../../tp/services-reseau-linux/module-02/enonces.md) et [corrections](../../tp/services-reseau-linux/module-02/corrections.md)
- [Kahoot existant](../../kahoot/services-reseau-linux-module-02.md)
- [Sommaire du cours](index.md)
