# Mémo — Ports essentiels

| Service | Port | Transport | Rôle |
|---|---:|---|---|
| SSH | 22 | TCP | Administration distante sécurisée |
| DNS | 53 | UDP et TCP | Résolution de noms et transferts |
| DHCP serveur/client | 67/68 | UDP | Configuration IPv4 dynamique |
| HTTP | 80 | TCP | Web non chiffré |
| HTTPS | 443 | TCP | Web chiffré |
| SMB | 445 | TCP | Partages Windows |
| LDAP | 389 | TCP/UDP selon usage | Annuaire non chiffré ou StartTLS |
| LDAPS | 636 | TCP | LDAP sur TLS |
| RDP | 3389 | TCP/UDP | Bureau à distance |
| SNMP | 161/162 | UDP | Requêtes et notifications |
| MySQL/MariaDB | 3306 | TCP | Base de données |

!!! warning
    Un port ouvert ne prouve pas que l’application est saine. Vérifier aussi l’adresse d’écoute, le pare-feu, TLS, l’authentification et les journaux.
