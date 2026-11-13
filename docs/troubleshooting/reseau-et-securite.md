# Dépannage — Réseau et Sécurité

Pistes écrites dans les documents. Ce qui n’y figure pas est **Inexistant**.

| Symptôme cité | Contrôle écrit |
|---|---|
| Le client n’a pas l’adresse prévue | Vérifier le DHCP, puis la réservation à l’adresse du schéma |
| Pas d’Internet après le NAT | Routes ou réseaux privés sur le routeur formateur, puis test depuis les réseaux |
| Le RDP ne répond pas | Règles WAN du TP1, redirection vers l’IP ou l’alias de SRV-MBR, bureau à distance du groupe GG-IT |
| Le site de la DMZ ne s’ouvre pas | `/etc/hosts`, `/etc/resolv.conf`, enregistrement DNS, alias d’URL, règles de pare-feu. L’énoncé écrit « A voir si fessable » |
| Un site est bloqué par le proxy | Regarder Status > Proxy Filter. La correction demande aussi les règles de pare-feu |
| Le tunnel site à site | Vérifier l’état IPsec, la connectivité entre LAN, puis les logs |
| Le second script de la PKI | Son nom n’est pas écrit : **Inexistant** |
| Les paramètres IKE et ESP | Ils ne sont pas dans le texte : **Inexistant** |

[Cours](../modules/17-reseau-et-securite/index.md)
