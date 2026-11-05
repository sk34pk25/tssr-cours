# Révision — MSP Services réseau

| Avant de passer à l’étape suivante | Contrôle |
|---|---|
| Adressage | `/22` correctement aligné, premier et dernier `/24`, passerelles en `.254` dans les LAN. |
| DHCP | D pair : Windows 2 ; D impair : Debian. Options et relais cohérents, plages secondaires sans recouvrement. |
| DNS | DNS initial opposé au DHCP initial ; distinguer `infra.tld`, zones inverses et domaine AD. |
| Domaine | Tester les SRV, le rattachement des postes, les groupes, les ouvertures de session et la réplication. |
| Stockage | Trois disques, volume F: tolérant à la perte d’un disque ; accès SMB et NTFS vérifiés. |
| GPO | Tester chaque effet dans une session du bon périmètre. |
| Continuité | Tester séparément la perte d’un DHCP, du DNS initial et de chaque contrôleur. |
| Administration | SSH, RDP, RSAT et WAC : vérifier l’authentification et les droits, pas seulement l’ouverture du port. |

- [Cours et Original](../../modules/10-msp-services-reseau/module-01-mise-en-situation-professionnelle-services-reseau.md)
- [Proposition de correction](../../tp/10-msp-services-reseau/module-01/corrections.md)
