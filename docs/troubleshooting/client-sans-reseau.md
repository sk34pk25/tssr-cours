# Dépannage — Client sans réseau

**Sources : Bases des réseaux, notes des modules 3-4 (APIPA) et 5 (commandes) ; Systèmes clients Microsoft, Module 7, solution du TP « Gestion du réseau ».** Les phrases sont reprises telles quelles.

## Symptôme : adresse APIPA

Les adresses APIPA (Automatic Private IP Addressing) sont des adresses IP automatiquement attribuées par un appareil dans un réseau local lorsqu'il ne parvient pas à obtenir d’adresse IP d’un serveur DHCP.

- Plage APIPA : 169.254.0.0 à 169.254.255.255
- Masque de sous-réseau : 255.255.0.0

Pas d’Accès Internet : Les adresses APIPA ne sont pas routables, ce qui signifie que les appareils avec ces adresses ne peuvent pas communiquer au-delà du réseau local, donc sans accès à Internet ou à d’autres réseaux externes.

`ipconfig /all` permet de voir si l’interface a reçu une adresse **169.254.x.x**.

## Cas du TP Systèmes clients (Module 7)

```text
ipconfig
```

Si l'adresse IP de la VM Discovery est au format APIPA, c'est que la Discovery ne possède pas d'informations IP fournies par le service DHCP. Pour remédier à cela, il faut que la VM Discovery puisse d'abord communiquer avec le serveur DHCP. Pour cela, il faut donc la "brancher" sur le switch "Bridged".

À l'issue de la bascule sur le switch "Bridged", attendez quelques secondes, votre VM obtiendra les informations IP adéquates pour communiquer sur le réseau.

## Étapes suivantes

Pour la suite du diagnostic (DNS, ping, ARP, tracert, netstat), suivre le [tutoriel Diagnostiquer une connexion réseau](../tutoriels/diagnostic-reseau.md).

- [Cours — L’adressage IPv4](../modules/01-bases-reseaux/module-03-l-adressage-ipv4.md)
- [Cours — La gestion du réseau et du pare-feu](../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu.md)
- [TP Systèmes clients — Module 7](../tp/systemes-clients/module-07/index.md)
