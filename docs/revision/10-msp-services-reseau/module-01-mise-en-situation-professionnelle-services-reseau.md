# Révision — MSP : services réseau

## Topologie et adressage du scénario

- Réseaux : LAN Clients, LAN Serveurs et WAN.
- Formule source : `192.168.4×D.0/22`.
- Découpage demandé : quatre `/24` ; premier pour le LAN Clients, dernier pour le LAN Serveurs.
- pfSense : trois interfaces ; routage, filtrage, NAT et connectivité à contrôler.

Les valeurs `D`, `XY`, `prénomD`, machines, WAN, DNS de l’établissement et proxy ENI restent variables de laboratoire.

## Services à mettre en œuvre

- **DHCP** : serveur choisi selon la parité de `D`, distribution sur le LAN Clients, moitié de la plage `/24`, passerelle par défaut et relais pfSense si nécessaire.
- **DNS interne** : redirecteur vers le DNS de l’établissement, zone `prénomD.infra.tld`, enregistrements serveurs, zones inverses, résolutions directe/inverse et SOA.
- **Active Directory** : nouvelle forêt `prénomD.domaine.tssr`, niveau Windows Server 2016, DNS sur le contrôleur de domaine, UO, utilisateurs, groupes et tests de connexion par service.

## Ressources, stratégies et redondance

- Ressources : trois disques de 1 Go, volume `F:` tolérant à la panne, `DATA`, `SERVICES`, `PUBLIC`, partages par service, groupe Informatique et partage caché `Outils`.
- GPO : fond d’écran, restriction Panneau de configuration / Paramètres, politique de mot de passe, mappage `SERVICES` et paramètres demandés par le scénario.
- Redondance : second DHCP, second DNS avec zone secondaire, adaptation du DNS clients, second contrôleur de domaine, tests d’arrêt, réplication et connexion.

## Administration et contrôles

- Administration distante : SSH sur Debian, Bureau à distance sur Windows, fonctionnalités facultatives, RSAT, Gestionnaire de serveur et consoles AD/DNS depuis le client Windows.
- Windows Admin Center est une activité demandée par la source ; aucune documentation externe n’est ajoutée.
- Commande explicitement donnée : **Windows+R**, puis `psr`.

Contrôler la connectivité, DHCP, DNS, résolutions, SOA, accès par service, GPO, redondance, réplication et administration distante. Conserver les livrables/documentations demandés par l’atelier.

- [Cours](../../modules/10-msp-services-reseau/module-01-mise-en-situation-professionnelle-services-reseau.md)
- [Énoncé](../../tp/10-msp-services-reseau/module-01/enonces.md)

> Aucun Kahoot canonique n’est attesté pour cette unité.
