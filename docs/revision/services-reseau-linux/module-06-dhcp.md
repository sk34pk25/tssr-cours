# Fiche de révision — Module 06 — Le DHCP

## À savoir refaire

- Réciter Discover, Offer, Request et Ack avec le sens de chaque message.
- Identifier DEB-S1 comme serveur DHCP, DEB-S2 comme DNS et RouTux comme relais.
- Calculer quatre jours en `345600` secondes et huit jours en `691200`.
- Vérifier le bail, la passerelle et le DNS sur le client.

## Se tester

1. Quelle VM reçoit les requêtes relayées du TP ?
2. Pourquoi le serveur possède-t-il une déclaration pour le LAN Clients ?
3. Quels paramètres vérifier sur le client après obtention du bail ?

??? success "Réponses"
    1. DEB-S1, adresse `192.168.X.11`.
    2. Le serveur doit choisir une étendue pour le réseau du client, identifié via le relais.
    3. Adresse, préfixe, passerelle, DNS et durée du bail.

[Cours optimisé et références](../../modules/15-services-reseau-en-environnement-linux/module-06-dhcp.md) · [Travaux pratiques](../../tp/services-reseau-linux/module-06/index.md).
