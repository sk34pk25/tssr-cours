# Corrigés commentés — Module 03 — Routage et traduction d’adresses

La démarche suit les objectifs des énoncés. Les écarts du corrigé source et les adaptations sont signalés au moment de la manipulation. Les transcriptions complètes restent dans l’onglet Original.

## TP 1 — Routage des LAN

Relever la MAC de chaque adaptateur VMware puis la ligne `link/ether` affichée par `ip link`. La correction associe `ens33` à VMNet4, `ens36` à VMNet6 et `ens37` à VMNet2. Écrire les adresses `.254/24` sur les trois réseaux dans `/etc/network/interfaces` de RouTux. Tester d’abord chacune de ses interfaces depuis un poste du segment.

```bash
sysctl -w net.ipv4.ip_forward=1
sysctl net.ipv4.ip_forward
```

Pour persister, renseigner `net.ipv4.ip_forward=1` dans `/etc/sysctl.conf`, charger avec `sysctl -p` et vérifier la lecture après redémarrage. Les clients reçoivent la passerelle `172.18.X.254`. Les serveurs reçoivent `192.168.X.254`. La passerelle se configure dans le gestionnaire utilisé par chaque VM. Tester le chemin entre les deux LAN dans les deux sens et relever `ip route get` sur les postes.

## TP 2 — Intégration de pfSense et NAT

Ajouter au client une carte temporaire sur VMNet2 en `172.30.X.10/24`. L’appliance reçoit `172.30.X.1/24` sur LAN. Relier WAN au réseau amont prévu, avec DHCP ou adresse adaptée, et vérifier sa passerelle amont. Utiliser l’adresse LAN pour atteindre l’interface de gestion. La source montre un repli HTTP dans son environnement ancien. Pour la manipulation courante, vérifier l’adresse et le service HTTPS de l’appliance.

| Réglage | Valeur attendue |
|---|---|
| Passerelle LAN `GW_Interco` | `172.30.X.254` |
| Route vers les Clients | `172.18.X.0/24` via `GW_Interco` |
| Route vers les Serveurs | `192.168.X.0/24` via `GW_Interco` |
| Sortie par défaut de RouTux | `172.30.X.1` |
| Sortie par défaut de pfSense | Passerelle du WAN réel |

Examiner le filtre IPv4 de LAN et appliquer la règle demandée par le TP pour son segment isolé. Les réseaux derrière RouTux doivent correspondre aux sources autorisées. Examiner ensuite `Firewall → NAT → Outbound` et les règles automatiques. La traduction utilise l’adresse de l’interface WAN. Vérifier que les réseaux atteints par les routes statiques figurent dans les sources couvertes.

Tester depuis DEB-S1 et Cli-db-10 le LAN de pfSense, puis une adresse de test extérieure autorisée. Configurer le DNS du laboratoire et tester le nom demandé dans l’énoncé. Relever les adresses de départ et de retour et les règles qui ont permis le flux. Désactiver la carte VMNet2 temporaire du client et recommencer un test depuis son LAN habituel. [Routes statiques pfSense](https://docs.netgate.com/pfsense/en/latest/routing/static.html), [NAT sortant](https://docs.netgate.com/pfsense/en/latest/nat/outbound.html).

[Reprendre les énoncés](enonces.md) · [Exemples détaillés et références du cours](../../../modules/15-services-reseau-en-environnement-linux/module-03-routage-et-traduction-d-adresses.md).
