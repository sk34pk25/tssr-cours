# Révision — Module 02, pare-feu pfSense

Semaine 1/2. Support de cours : **Inexistant**.

## SRV-CD

VMnet 11. Rôles AD DS et DNS. Domaine votredomaine.eni. Scripts, dans l’ordre de la correction : Install-DNS-ADDS.ps1, DNS-Zone-Inversées.ps1, OU.ps1, puis Users.ps1, Groups.ps1 et AdduseronGroups.ps1 après adaptation des CSV. Redirecteur vers le DNS de la salle.

## SRV-MBR et clients

SRV-MBR sur VMnet 11, joint au domaine, rôle DHCP, étendue du LAN client. Windows : 3 Go, 2 CPU, VMnet10. Debian 12 : 2 Go, 1 CPU, VMnet10. Réservation DHCP, pare-feu Windows désactivé.

## pfSense

Aligner IP, VMnet, domaine, DNS et relais DHCP. Appliquer d’abord les règles du TP1 sur LANCLIENT et LANSERVER.

[Cours](../../modules/17-reseau-et-securite/module-02-configuration-du-pare-feu-pfsense.md)
