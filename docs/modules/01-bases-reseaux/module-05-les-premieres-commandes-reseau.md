# Module 05 — Les premières commandes réseau

**Séquence :** Bases des réseaux  
**Rôle dans le parcours :** lire une configuration et tester un chemin avec les commandes des notes.

L’onglet Cours Original indique **Inexistant**. Le dossier du module ne contient pas d’énoncé PDF, seulement une activité Packet Tracer. Cette activité n’est pas publiée : son contenu n’est pas lisible hors du logiciel. La fiche suit les notes de quiz des modules 5 et 6.

## Objectifs

À l’issue du module, vous devez pouvoir :

- lire et modifier le cache ARP avec les commandes des notes ;
- afficher, libérer et renouveler une configuration IPv4 ;
- interpréter `time=` et `ttl=` dans une réponse ping ;
- reconnaître les états `LISTEN` et `ESTABLISHED` ;
- suivre un chemin avec `tracert` ou `traceroute`.

## 1. ARP

Les notes placent ARP en couche liaison : il associe une adresse IPv4 à une adresse MAC sur le réseau local. La machine cherche d’abord dans son cache. Sinon elle diffuse une question du type « qui a cette adresse IP ? » et mémorise la réponse.

| Besoin | Commande des notes |
|---|---|
| Afficher le cache | `arp -a` |
| Ajouter une entrée statique | `arp -s 192.168.1.200 00-14-22-01-23-45` |
| Vider le cache Windows | `arp -d *` |
| Vider le voisinage Linux | `sudo ip neigh flush all` |

La sortie citée sépare l’adresse Internet, l’adresse physique et le type dynamique ou statique. Une entrée fausse, périmée ou usurpée empêche ou détourne l’échange. Les notes nomment ce détournement ARP spoofing.

**Illustration IA / externe au cours — ordre décrit par les notes.**

```mermaid
flowchart LR
    A["Cache ARP"] -->|entrée absente| B["Requête diffusée sur le lien"]
    B --> C["Réponse : adresse MAC"]
    C --> D["Cache mis à jour"]
```

## 2. Configuration IP

| Besoin | Windows | Linux dans les notes |
|---|---|---|
| Résumé | `ipconfig` | `ip addr` |
| Détail, DHCP et DNS | `ipconfig /all` | `ip -4 addr` pour ne voir qu’IPv4 |
| Libérer le bail | `ipconfig /release` | |
| Nouveau bail | `ipconfig /renew` | |
| Vider le cache DNS | `ipconfig /flushdns` | |
| Afficher le cache DNS | `ipconfig /displaydns` | |
| Réenregistrer le nom DNS | `ipconfig /registerdns` | |
| Interfaces | | objet `link` de `ip` |
| Routes | | objet `route` de `ip` |
| Voisinage | `arp -a` | objet `neigh` de `ip` |

Les notes présentent `ip` comme la commande qui remplace progressivement `ifconfig`. Une adresse **169.254.0.0/16** est le signe APIPA revu au module 03 : le poste n’a pas obtenu de bail DHCP.

## 3. Ping

Ping utilise ICMP. Il vérifie qu’un hôte répond.

| Champ | Lecture des notes |
|---|---|
| `time=` | Durée de l’aller-retour |
| `ttl=` | Nombre de sauts encore possible |

Sous Linux, `-c` fixe le nombre de requêtes et `-q` ne garde que le bilan. Exemple des notes : `ping -c 4` vers l’hôte visé.

## 4. Netstat

| Option des notes | Effet |
|---|---|
| `-a` | Connexions actives et ports en écoute |
| `-n` | Adresses et ports numériques, sans résolution de noms |
| `-t` | TCP seulement |
| `-u` | UDP seulement |
| `-p` | Processus associé |
| `-l` | Ports en écoute seulement |
| `-e` | Statistiques d’interface : paquets et erreurs |

| État | Signification dans les notes |
|---|---|
| `LISTEN` | Le port attend une connexion |
| `ESTABLISHED` | La connexion est établie |

`netstat -r` affiche la table de routage. Les notes décrivent aussi l’adresse locale et l’adresse distante de chaque ligne.

## 5. Tracert

`tracert` sous Windows et `traceroute` sous Linux montrent le chemin. Les notes expliquent le principe par une durée de vie qui augmente : le premier routeur qui épuise le compteur répond, puis le suivant, jusqu’à la destination.

## Résumé

1. `arp -a` montre les couples IPv4 et MAC. `arp -s` en ajoute un. `arp -d *` vide le cache Windows.
2. `ipconfig /all` et `ip addr` montrent la configuration. `/release` puis `/renew` refont un bail.
3. Ping mesure l’aller-retour et le TTL. Netstat distingue écoute et connexion établie.
4. Tracert reconstitue le chemin saut par saut.
5. L’activité Packet Tracer du module n’est pas publiée.

## Mini-quiz

1. Quelle commande affiche le cache ARP ?
2. Que signifie une adresse 169.254.x.x au moment où l’on lance `ipconfig` ?
3. Que représentent `time=` et `ttl=` dans ping ?
4. Quel état netstat indique un port qui attend une connexion ?
5. Quelle commande Linux correspond à `tracert` ?

??? note "Réponses du mini-quiz"
    1. `arp -a`.
    2. Le poste est en APIPA : le DHCP n’a pas fourni de bail. La plage des notes est 169.254.0.0/16.
    3. La durée de l’aller-retour, et le nombre de sauts encore autorisés.
    4. `LISTEN`.
    5. `traceroute`.
