# Commandes réseau

**Source : Bases des réseaux, Module 5 « Les premières commandes » (notes de cours du Drive).** Commandes et libellés repris tels quels. Pour la démarche de diagnostic, voir le [tutoriel](../tutoriels/diagnostic-reseau.md).

## ARP

| Commande | Effet (texte du cours) |
|---|---|
| `arp -a` | Cette commande liste toutes les associations IP/MAC actuellement connues par le système. |
| `arp -s <adresse_IP> <adresse_MAC>` | Ajouter une entrée dans la table ARP. |
| `arp -d *` | Sous Windows, on ne peut pas supprimer une entrée spécifique, mais il est possible de vider tout le cache ARP. |
| `sudo ip neigh flush all` | Sous Linux, la commande est légèrement différente et utilise ip. |

## ipconfig (Windows)

| Commande | Effet (texte du cours) |
|---|---|
| `ipconfig` | Cette commande affiche un résumé des configurations réseau de toutes les interfaces actives. |
| `ipconfig /all` | Vérifier si une interface est configurée en DHCP ou en IP statique, ainsi que les serveurs DNS configurés. |
| `ipconfig /release` | Cette commande libère l’adresse IP attribuée par DHCP, mettant l’interface en état de recherche d’une nouvelle adresse. |
| `ipconfig /renew` | Cette commande demande une nouvelle adresse IP au serveur DHCP. |
| `ipconfig /flushdns` | Cette commande efface les entrées obsolètes ou corrompues du cache DNS. |
| `ipconfig /displaydns` | Cette commande affiche les noms de domaine résolus et stockés en cache par le système. |
| `ipconfig /registerdns` | Elle force le renouvellement des enregistrements DNS dynamiques de la machine auprès du serveur DNS. |

## ip (Linux)

Syntaxe : `ip [options] [objet] [action]` — options `-s`, `-4`, `-6` ; objets `link`, `addr`, `route`, `neigh`.

```text
ip link
ip link set dev eth0 up
ip link set dev eth0 down
ip addr
ip -4 addr
ip addr add 192.168.1.200/24 dev eth0
ip addr del 192.168.1.200/24 dev eth0
ip route
ip route add 192.168.2.0/24 via 192.168.1.1 dev eth0
ip route del 192.168.2.0/24
ip neigh
ip neigh add 192.168.1.200 lladdr 12:34:56:78:9a:bc dev eth0
ip neigh del 192.168.1.200 dev eth0
```

## ping

```text
ping www.google.com
ping -c 4 www.google.com
ping -s 1000 www.google.com
ping -i 0.5 www.google.com
ping -q www.google.com
```

## netstat

| Option | Effet (texte du cours) |
|---|---|
| `netstat -a` | Affiche toutes les connexions actives (TCP et UDP) et les ports d'écoute. |
| `netstat -n` | Affiche les adresses et ports en format numérique (sans résolution de nom). |
| `netstat -t` | Affiche uniquement les connexions TCP actives. |
| `netstat -u` | Affiche uniquement les connexions UDP actives. |
| `netstat -l` | Liste uniquement les ports en écoute (listening). |
| `netstat -p` | Affiche les processus associés aux connexions (nécessite les droits d'administration sous Linux). |
| `netstat -r` | Montre la table de routage du système. |
| `netstat -e` | Affiche les statistiques détaillées des interfaces réseau (paquets, erreurs, etc.). |

## tracert / traceroute

| Option `tracert` | Effet (texte du cours) |
|---|---|
| `/d` | N'affiche pas les noms DNS des routeurs, uniquement leurs adresses IP (plus rapide). |
| `/h <nombre>` | Définit un nombre maximum de sauts (TTL). Par défaut, 30 sauts sont autorisés. |
| `/w <millisecondes>` | Définit le temps d’attente avant de déclarer un routeur injoignable. Par défaut, 4000 ms (4 secondes). |
| `/4` | Force l’utilisation d’IPv4. |
| `/6` | Force l’utilisation d’IPv6. |

```text
tracert www.google.com
tracert /d /h 15 /w 1000 www.google.com
sudo apt install traceroute   # Ubuntu/Debian
traceroute www.google.com
```

## Résolution de noms (Systèmes clients Microsoft, Module 7)

- `nslookup` : diagnostic de la résolution de noms d’hôte

[Cours — Les premières commandes réseau](../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau.md)
