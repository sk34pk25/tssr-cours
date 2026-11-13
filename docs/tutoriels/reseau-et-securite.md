# Tutoriel — Lire le schéma et calculer la plage

Ce tutoriel ne couvre que le TP1, le seul dont le schéma et le calcul d’adresses sont écrits. Les installations pfSense des TP suivants ne sont pas reconstituées au-delà de leur texte.

## Schéma

Le drawio porte ces libellés : routeur formateur `192.168.150.100/24`, LANCLT avec un client Linux et un client Windows, LANSRV avec SRV-CD (Active Directory et DNS) et SRV-MBR (DHCP), LANDMZ avec SRV-WEB. Les annotations de liens sont VMnet10, VMnet11 et VMnet12, chacune avec `172.20.X.Y/?`.

Ce n’est pas une copie du dessin. Les câbles qui ne sont pas nommés ne sont pas décrits.

## Calcul montré par la correction

Pour `172.20.2.0/24`, la correction écrit :

- client /25 : `172.20.2.0` à `172.20.2.127` ;
- serveurs /26 : `172.20.2.128` à `172.20.2.191` ;
- DMZ /26 : `172.20.2.192` à `172.20.2.255`.

Le routeur est l’avant-dernière adresse. L’énoncé et la correction ne numérotent pas de la même façon les hôtes SRV-WEB, CLT-WIN et CLT-DEB. Le tutoriel ne choisit pas un rang.

Le classeur d’attribution contient un nom de stagiaire. Il n’est pas repris. Les colonnes publiables sont seulement leurs titres : WAN /24, PC TP3 /24, tunnel, LAN global /24, LAN serveur /26, LAN client /25, LAN DMZ /26.

[Cours](../modules/17-reseau-et-securite/index.md) · [TP1](../tp/17-reseau-et-securite/module-01/index.md)
