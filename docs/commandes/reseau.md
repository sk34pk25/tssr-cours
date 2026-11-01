# Commandes réseau

| Besoin | Windows | GNU/Linux |
|---|---|---|
| Configuration | `ipconfig /all` | `ip addr` |
| Routes | `route print` | `ip route` |
| Voisins | `arp -a` | `ip neigh` |
| Connectivité | `ping hôte` | `ping -c 4 hôte` |
| Chemin | `tracert -d hôte` | `traceroute -n hôte` |
| Connexions | `netstat -ano` | `ss -tulpn` |
| DNS | `nslookup nom` / `Resolve-DnsName nom` | `getent hosts nom` |
| Bail DHCP | `ipconfig /release` puis `ipconfig /renew` | |
| Cache DNS Windows | `ipconfig /displaydns` et `ipconfig /flushdns` | |
| Cache ARP Windows | `arp -d *` | `ip neigh flush all` |

`ifconfig`, `route` et `arp` existent encore dans certains environnements, mais la documentation Linux moderne privilégie la suite `iproute2` (`ip`, `ss`).
