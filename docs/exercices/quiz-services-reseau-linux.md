# Quiz de synthèse — Services réseau en environnement Linux

Sept questions à traiter après les ateliers.

1. Quel VMNet relie RouTux à pfSense ?
2. Quelle opération applique une modification de profil NetworkManager à la connexion du laboratoire ?
3. Quelles routes de retour pfSense doit-il connaître ?
4. Quelle partie d’une paire SSH peut être distribuée aux serveurs ?
5. Quelle directive BIND contrôle les clients autorisés à demander la récursion ?
6. Quelle adresse reçoit les requêtes DHCP relayées dans l’exemple `X=30` ?
7. Quel nom de zone inverse convient à `192.168.30.0/24` ?

??? success "Corrigé"
    1. VMNet2, l’interconnexion `172.30.X.0/24`.
    2. Réactiver le profil modifié, puis contrôler les paramètres effectivement appliqués.
    3. `172.18.X.0/24` et `192.168.X.0/24` via RouTux `172.30.X.254`.
    4. La clé publique du compte voulu. Le fichier privé reste sur le poste administrateur.
    5. `allow-recursion` avec l’ACL des réseaux admis.
    6. DEB-S1 à `192.168.30.11`.
    7. `30.168.192.in-addr.arpa.`.

[Sommaire du cours](../modules/15-services-reseau-en-environnement-linux/index.md) · [Fiches de révision](../revision/services-reseau-linux/index.md) · [Travaux pratiques](../tp/services-reseau-linux/index.md).
