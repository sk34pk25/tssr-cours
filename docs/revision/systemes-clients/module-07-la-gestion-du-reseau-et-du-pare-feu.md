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


Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu.md) et [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-07-la-gestion-du-reseau-et-du-pare-feu.md).

## Source et provenance

- **Sources A — supports TSSR :** support, énoncé et correction M07.
- **Structuration B :** synthèse pédagogique limitée aux notions et contrôles attestés par ces sources.

## Retenir puis vérifier

**Distinguer adressage, routage, résolution de noms et filtrage avant de modifier la configuration.**

1. **Que signifie une adresse 169.254.x.x dans le scénario ?**

??? success "Réponse expliquée"
    L’auto-configuration APIPA ; vérifier la disponibilité de DHCP et la connexion de la carte.

2. **Un ping sans réponse prouve-t-il que le poste est arrêté ?**

??? success "Réponse expliquée"
    Non. ICMP peut être filtré ; vérifier le profil et les règles du pare-feu ainsi que la connectivité.

3. **IP distante joignable mais nom impossible à résoudre : quelle piste ?**

??? success "Réponse expliquée"
    La résolution DNS ; consulter les serveurs configurés et tester avec nslookup.

[Relire le cours complet](../../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu.md) · [Mettre en pratique](../../tp/systemes-clients/module-07/index.md)
