# Fiche de révision — Module 05 — Les premières commandes réseau

## Les cinq questions à poser

1. Quelle adresse, quel masque, quelle passerelle et quels DNS sont configurés ?
2. Quelle association IP/MAC est connue sur le lien local ?
3. La cible répond-elle à un test de connectivité ?
4. Par quels sauts le trafic tente-t-il de passer ?
5. Quels ports et quelles connexions sont visibles localement ?

## Commandes à associer au besoin

| Besoin | Windows | Linux / commande source |
|---|---|---|
| Configuration détaillée | `ipconfig /all` | `ip addr`, `ip -4 addr` |
| Voisins IP/MAC | `arp -a` | `ip neigh` |
| Test de joignabilité | `ping` | `ping` |
| Chemin | `tracert` | `traceroute` |
| Connexions et ports | `netstat` | `netstat` |

## Lecture prudente des résultats

- Une adresse APIPA `169.254.x.x` est un indice cité par le support lors d’un contrôle de configuration DHCP.
- L’absence de réponse à `ping` peut aussi correspondre à un filtrage ICMP.
- Des astérisques dans `tracert` ou `traceroute` peuvent correspondre à un équipement qui ne répond pas aux messages attendus.
- `netstat` décrit un état de connexion ou d’écoute ; l’interprétation doit être rapprochée du service concerné.

## Commandes à manipuler avec précaution

Les sources décrivent des commandes qui modifient une adresse, une route ou un voisinage : `ip addr add`, `ip addr del`, `ip route add`, `ip route del`, `ip neigh add`, `ip neigh del`, ainsi que les variantes ARP. Relever l’état initial et identifier l’interface avant toute exécution.

## Checklist

- [ ] Je sais distinguer une commande de relevé d’une commande de modification.
- [ ] Je peux relier `arp -a` ou `ip neigh` à un problème de voisinage local.
- [ ] Je lis perte et délai de `ping` sans conclure trop vite.
- [ ] Je peux utiliser `tracert` ou `traceroute` pour formuler une hypothèse de chemin.
- [ ] Je sais où observer un port en écoute avec `netstat`.

## Ressource et liens

- [Cours M05](../../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau.md)
- [Ressource Packet Tracer M05](../../tp/reseaux/module-05/index.md#ressources)
- [Kahoot M05](../../kahoot/01-bases-reseaux-05-les-premieres-commandes-reseau.md)

## Sources et provenance

- **A — source TSSR :** `cours kahoot module 5 et 6.txt`.
- **B — structuration pédagogique :** tableau, questions et checklist construits à partir de cette source.
