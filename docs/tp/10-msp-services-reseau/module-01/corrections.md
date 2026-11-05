# Correction proposée — MSP Services réseau

**Correction fournie : Inexistant.** Cette proposition pédagogique externe applique le sujet à l’exemple `D=13`. Elle ne décrit pas une manipulation réellement exécutée sur votre laboratoire.

| Paramètre de l’exemple | Résultat attendu |
|---|---|
| Réseau alloué | `192.168.52.0/22` ; LAN Clients `192.168.52.0/24` ; LAN Serveurs `192.168.55.0/24` |
| Passerelles | `192.168.52.254`, `192.168.55.254` ; WAN exemple `10.3.42.13/16`, passerelle WAN fournie |
| Serveurs | Windows 1 `192.168.55.101`, Windows 2 `192.168.55.102`, Debian `192.168.55.111` |
| Clients statiques initiaux | Windows `192.168.52.10`, Debian `192.168.52.1` |
| DHCP initial, D impair | Debian ; exemple de 127 adresses utilisables `.20` à `.146` sur le LAN Clients |
| Second DHCP | Windows 2 ; exemple de plage `.147` à `.253`, sans recouvrement ni adresse statique |
| DNS initial, D impair | Windows 2 ; le secondaire est Debian, qui reçoit la zone directe `prénomD.infra.tld` |
| Domaine AD | Windows 1 porte `prénomD.domaine.tssr` ; Windows 2 est ensuite promu second contrôleur |

1. Documenter les réseaux et l’adressage, vérifier les liaisons locales puis la passerelle et le NAT. La liaison WAN utilise les paramètres attribués, pas une passerelle inventée.
2. Tester un bail dans la plage et la passerelle `.254` du LAN Clients. Après la mise en place du DNS, vérifier l’adresse DNS distribuée, puis les requêtes directe et inverse vers le serveur du TP.
3. Contrôler les enregistrements SRV du domaine depuis le DNS utilisé par les clients. Vérifier l’intégration des machines et les ouvertures de session ; si le DHCP est Windows, contrôler son autorisation dans AD.
4. Créer le volume **F:** tolérant à une panne, appliquer les groupes et les autorisations du [tableau du cours](../../../modules/10-msp-services-reseau/module-01-mise-en-situation-professionnelle-services-reseau.md#5-stockage-partages-et-acces). Pour l’incohérence F:/D:, retenir **F:** dans cet exemple. Vérifier l’accès `Outils$` avec les deux types de comptes et documenter Comptabilité.
5. Tester séparément les huit GPO. Relever résultat attendu, utilisateur ciblé, GPO effective et résultat observé.
6. Vérifier que les plages DHCP ne se recouvrent pas, puis tester un nouveau bail avec chaque serveur arrêté à tour de rôle. Pour le DNS, contrôler le transfert **direct** explicitement demandé ; les zones inverses ne sont pas répliquées dans cette proposition. Vérifier la réplication AD et tester un compte sans connexion déjà mise en cache.
7. Terminer avec les preuves d’accès SSH et RDP, de gestion par les consoles RSAT et de connexion dans Windows Admin Center. Préserver les autorisations du laboratoire et documenter les différences de version.

- [Retour à l’énoncé fourni](enonces.md)
- [Cours et précisions techniques](../../../modules/10-msp-services-reseau/module-01-mise-en-situation-professionnelle-services-reseau.md)
