# Révision — Module 01, flux de sorties

Semaine 1/2. Support de cours : **Inexistant**.

## Calcul

À partir du Lan Global /24 :

| Réseau | Masque | Exemple de la correction pour 172.20.2.0/24 |
|---|---|---|
| Lan Client | /25 | 172.20.2.0 – 172.20.2.127 |
| Lan SRV | /26 | 172.20.2.128 – 172.20.2.191 |
| Lan DMZ | /26 | 172.20.2.192 – 172.20.2.255 |

Le routeur prend l’avant-dernière adresse (190, 126 et 254 dans l’exemple). SRV-CD est la 21e adresse (150). SRV-MBR est la 23e (152).

## Schéma

Routeur formateur 192.168.150.100/24. LANCLT sur VMnet10, LANSRV sur VMnet11 (SRV-CD : AD et DNS, SRV-MBR : DHCP), LANDMZ sur VMnet12 (SRV-WEB).

## Règles

N’ouvrir que les ports nécessaires. L’exemple WAN laisse passer TCP 80 et 443 vers Wan IP, puis bloque le reste. Chaque règle a une justification. Les actions permit sont en vert, deny en rouge.

[Cours](../../modules/17-reseau-et-securite/module-01-flux-de-sorties-vers-internet.md)
