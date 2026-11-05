# Corrigés commentés — Module 02 — Adressage réseau

La démarche suit les objectifs des énoncés. Les écarts du corrigé source et les adaptations sont signalés au moment de la manipulation. Les transcriptions complètes restent dans l’onglet Original.

## TP 1 — Configuration réseau de la maquette

Relever les noms, rôles et adresses MAC des machines. Le client graphique se raccorde à VMNet4. Les deux serveurs en console se raccordent à VMNet6. RouTux est préparé sans carte pour l’atelier suivant. Chaque VM du tableau source reçoit 1024 MB. Si un clone sert de base, contrôler son nom et la MAC de chaque carte avant de démarrer les VM ensemble.

| Machine | Segment | IPv4 du scénario |
|---|---|---|
| Cli-db-10 | VMNet4 | `172.18.X.10/24` |
| DEB-S1 | VMNet6 | `192.168.X.11/24` |
| DEB-S2 | VMNet6 | `192.168.X.12/24` |
| RouTux | À préparer au module 3 | Aucune à ce stade |

Sur le client, relever le profil avec `nmcli connection show`, puis lui affecter l’adresse, le préfixe et la méthode `manual`. Réactiver le profil et contrôler `ip a`. Sur DEB-S1 et DEB-S2, choisir l’interface reconnue par Debian et appliquer temporairement l’adresse de la table. Exemple sur S1 pour `X=10`.

```bash
ip link set ens33 up
ip address add 192.168.10.11/24 dev ens33
ping -c 2 192.168.10.12
```

Reproduire l’opération sur S2 avec `.12` et vérifier la réponse dans l’autre sens. La correction imprimée omet le préfixe dans ses commandes `ip a add`. Ici `/24` établit la route connectée du LAN Serveurs. Depuis la console de chaque VM, retirer l’adresse temporaire avec `ip -4 address flush dev ens33` et écrire la configuration durable dans `/etc/network/interfaces` au pluriel. Garder la boucle locale et choisir `iface ens33 inet static` avec l’adresse de la machine et son préfixe.

Relancer `networking.service` sur les serveurs et répéter les contrôles d’adresse et de communication. Vérifier `/etc/hostname` et l’entrée correspondante dans `/etc/hosts`. La commande `hostname -F /etc/hostname` du corrigé emploie un tiret ASCII. Rendre un relevé de l’état temporaire, de la configuration persistante et du test qui prouve la connectivité sur VMNet6.

[Reprendre les énoncés](enonces.md) · [Exemples détaillés et références du cours](../../../modules/15-services-reseau-en-environnement-linux/module-02-adressage-reseau.md).
