# Module 05 — Les premières commandes réseau

**Séquence :** Bases des réseaux

**Pré-requis :** notions d’adressage IPv4 et de communication réseau.

## Objectifs

- Afficher les paramètres d’une interface sous Windows et Linux.
- Lire les associations IP/MAC apprises localement.
- Tester une connectivité, un chemin réseau et des connexions actives.
- Choisir une commande de diagnostic avant d’entreprendre une modification.

## Démarrer par une question de diagnostic

Les commandes ne répondent pas toutes au même problème. Le support les organise autour de l’ARP, de `ipconfig` et `ip`, de `ping`, de `netstat`, puis de `tracert` et `traceroute`.

```mermaid
flowchart LR
    A[Configuration locale] --> B[Voisinage IP et MAC]
    B --> C[Joignabilité]
    C --> D[Chemin réseau]
    D --> E[Connexions et ports]
```

<p class="tssr-caption">Progression B à partir des familles de commandes du support : relever d’abord l’état, puis isoler l’étape de communication qui doit être vérifiée.</p>

## 1. Relever la configuration de l’interface

Sous Windows, `ipconfig` affiche un résumé des interfaces ; `ipconfig /all` ajoute notamment les adresses MAC, les informations DNS et DHCP ainsi que le bail DHCP. Le support utilise ces informations pour contrôler l’adresse IPv4, le masque, la passerelle et les serveurs DNS.

Sous Linux, la commande `ip` remplace progressivement `ifconfig`. Les sous-commandes du support sont :

| Information recherchée | Commande source |
|---|---|
| Interfaces | `ip link` |
| Adresses | `ip addr` ou `ip -4 addr` |
| Routes | `ip route` |
| Voisins | `ip neigh` |

!!! warning "Commandes de modification"
    Le support décrit aussi des commandes qui ajoutent ou suppriment des adresses, routes ou voisins. N’exécutez pas ces variantes dans un environnement de travail sans identifier l’interface et sans prévoir le retour à l’état attendu.

## 2. Observer le voisinage : ARP et `ip neigh`

ARP associe une adresse IP à une adresse MAC dans un réseau local. La commande `arp -a` affiche les associations connues par la machine. Sous Linux, `ip neigh` présente les voisins. Le support rappelle qu’ARP fonctionne sur un réseau local ; le routage intervient pour communiquer entre réseaux.

Lorsqu’un poste ne joint pas un voisin local, relevez d’abord l’adresse et le masque, puis observez la table de voisinage. Une absence ou une incohérence d’association IP/MAC est un élément de diagnostic ; elle ne justifie pas à elle seule une modification de table.

## 3. Tester la connectivité avec `ping`

`ping` envoie des requêtes ICMP et affiche les réponses, les délais et les pertes. Le support l’emploie pour tester une machine, une passerelle ou une destination par adresse IP. Une absence de réponse peut également provenir d’un filtrage ICMP : elle doit être interprétée avec les autres contrôles, pas comme la preuve unique d’une panne.

Exemples de lecture fournis :

- `ping 192.168.1.1` pour tester une machine ou un routeur local ;
- `ping -c 4` pour limiter le nombre de requêtes dans l’exemple Linux ;
- pertes, délais et valeurs `ttl` pour lire le résultat retourné.

## 4. Suivre le chemin : `tracert` et `traceroute`

Sous Windows, `tracert` ; sous Linux, `traceroute`. Ces commandes affichent les routeurs intermédiaires et aident à localiser un délai ou une rupture de chemin. Le support explique que les sauts sont révélés progressivement par le TTL et qu’un astérisque peut aussi correspondre à un filtrage ICMP.

Utilisez le résultat pour formuler une hypothèse : premier saut inaccessible, saut lointain non répondant, ou chemin variable. Il ne faut pas conclure sur la seule base d’un saut absent.

## 5. Lire les connexions et ports avec `netstat`

`netstat` affiche les connexions TCP/UDP, les ports en écoute et diverses statistiques. Le support cite notamment :

| Besoin | Exemple du support |
|---|---|
| Connexions et ports | `netstat -a` |
| Affichage numérique | `netstat -n` |
| Ports en écoute | `netstat -l` |
| Processus associé | `netstat -p` — droits d’administration possibles sous Linux |
| Table de routage | `netstat -r` |

Les états TCP comme `LISTEN`, `ESTABLISHED`, `CLOSE_WAIT`, `TIME_WAIT` et `SYN_SENT` sont des informations d’observation. Ils permettent de choisir la suite du diagnostic ; ils ne constituent pas seuls un diagnostic applicatif complet.

## Mise en pratique

La ressource `M05_TP01 - Ressource - Les commandes avec Packet Tracer.pka` est attestée pour M05. Son contenu est binaire et n’est pas interprété ici : ouvrez-la dans Cisco Packet Tracer pour suivre l’activité.

!!! note "Objets non créés"
    Le corpus disponible atteste une ressource Packet Tracer, mais pas d’énoncé ni de correction M05 lisibles. Aucun TP textuel ni correction ne sont donc créés artificiellement.

## À retenir

- Relever l’état de l’interface avant toute commande de modification.
- Distinguer configuration IP, voisinage ARP, connectivité, chemin et ports.
- Croiser les résultats : un `ping` ou un `tracert` isolé ne suffit pas toujours à conclure.
- Préserver les ressources Packet Tracer binaires et les ouvrir dans l’outil prévu.

## Pour réviser

- [Fiche de révision M05](../../revision/reseaux/module-05-les-premieres-commandes-reseau.md)
- [Ressource Packet Tracer M05](../../tp/reseaux/module-05/index.md#ressources)
- [Kahoot M05](../../kahoot/01-bases-reseaux-05-les-premieres-commandes-reseau.md)

## Sources et provenance

- **A — source TSSR :** `cours kahoot module 5 et 6.txt` ; ressource binaire M05 Packet Tracer attestée dans l’inventaire source.
- **B — structuration pédagogique :** progression de diagnostic, tableau de lecture et encadrés fondés exclusivement sur la source A.
