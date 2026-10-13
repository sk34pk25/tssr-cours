# Fiche de révision — Module 07 — La gestion du réseau et du pare-feu

## Repères essentiels

- Une carte réseau utilise une adresse IP, un masque, une passerelle par défaut et des serveurs DNS.
- L’emplacement réseau Windows — privé, public ou domaine — influence le comportement du pare-feu.
- Une configuration peut être statique, fournie par DHCP ou, dans le cas présenté par le support, relever d’APIPA lorsque DHCP n’est pas joignable.
- La passerelle permet de joindre les autres réseaux ; la table de routage choisit le saut suivant ; le cache ARP associe une IP à une adresse MAC sur le réseau local.

## Configuration IPv4

| Élément | À vérifier |
| --- | --- |
| Adresse IP | Elle correspond au réseau et à la partie hôte demandés par le scénario. |
| Masque | Il permet d’identifier la partie réseau de l’adresse. |
| Passerelle | Elle est nécessaire pour les destinations hors réseau local. |
| DNS | Il est utilisé pour la résolution des noms d’hôtes. |

## DHCP et APIPA

- **DHCP** fournit dynamiquement les paramètres réseau du poste.
- Dans le support, **APIPA** correspond au réseau `169.254.0.0/16` lorsqu’aucun serveur DHCP n’est joignable.
- APIPA permet une communication temporaire locale, mais invite à vérifier l’accès au service DHCP dans le scénario de laboratoire.

## Commandes à reconnaître

| Commande | Utilisation dans le module |
| --- | --- |
| `ipconfig` | Afficher la configuration de l’interface. |
| `ipconfig /all` | Relever la configuration détaillée, dont passerelle et DNS. |
| `ping` | Tester la connectivité ; le pare-feu peut bloquer ICMP. |
| `tracert` | Observer le chemin suivi jusqu’à une destination. |
| `nslookup` | Interroger la résolution DNS d’un nom. |

Les adresses, noms et résultats observés dans le TP sont propres à son environnement. Ne les traitez pas comme des valeurs universelles.

## Pare-feu Windows

- Vérifier l’état du pare-feu pour chaque profil réseau.
- Autoriser une application seulement pour le profil demandé par le scénario.
- Utiliser la console avancée pour consulter et activer la règle entrante ICMPv4 prévue.
- Tester ensuite la communication entre les postes indiqués par le TP.

## Contrôles de maîtrise

- [ ] Je peux expliquer quand une destination est transmise à la passerelle.
- [ ] Je sais relever les paramètres d’une interface avec `ipconfig /all`.
- [ ] Je distingue un test de connectivité, un chemin réseau et une résolution DNS.
- [ ] Je sais relier le profil réseau aux règles du pare-feu Windows.
- [ ] Je contrôle une règle ICMPv4 par un test effectué dans le laboratoire prévu.

Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu.md) et [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-07-la-gestion-du-reseau-et-du-pare-feu.md).

## Source et provenance

- **Sources A — TSSR Drive live :** support, énoncé et correction M07.
- **Structuration B :** synthèse pédagogique limitée aux notions et contrôles attestés par ces sources.
