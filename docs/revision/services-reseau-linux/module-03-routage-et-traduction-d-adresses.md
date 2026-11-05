# Fiche de révision — Module 03 — Routage et traduction d’adresses

## À savoir refaire

- Distinguer route d’hôte, route de réseau et route par défaut.
- Vérifier `net.ipv4.ip_forward` et les chemins aller et retour.
- Associer chaque LAN à la bonne interface de RouTux.
- Vérifier séparément routage, filtrage et SNAT dans pfSense.

## Se tester

1. Quelle valeur permet la transmission IPv4 sur RouTux ?
2. Quelle adresse pfSense utilise-t-il pour joindre les deux LAN derrière RouTux ?
3. Quel champ est modifié par SNAT ?

??? success "Réponses"
    1. `net.ipv4.ip_forward=1`.
    2. `172.30.X.254` sur VMNet2.
    3. L’adresse source du paquet, avec éventuellement une translation de port selon la règle.

[Cours optimisé et références](../../modules/15-services-reseau-en-environnement-linux/module-03-routage-et-traduction-d-adresses.md) · [Travaux pratiques](../../tp/services-reseau-linux/module-03/index.md).
