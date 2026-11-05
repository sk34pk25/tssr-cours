# Fiche de révision — Module 02 — Adressage réseau

## À savoir refaire

- Identifier la carte réelle avec sa MAC.
- Distinguer configuration courante avec `ip` et configuration durable avec ifupdown ou NetworkManager.
- Renseigner explicitement le préfixe `/24` dans le TP.
- Relire adresse, route, nom d’hôte et DNS après application.

## Se tester

1. Quel réglage est relu au démarrage dans un serveur ifupdown ?
2. Comment relier une carte VMware à une interface Linux ?
3. Quel fichier décrit l’ordre des méthodes de résolution ?

??? success "Réponses"
    1. Les déclarations de `/etc/network/interfaces` et des fichiers qu’il inclut.
    2. Comparer leurs adresses MAC.
    3. `/etc/nsswitch.conf`.

[Cours optimisé et références](../../modules/15-services-reseau-en-environnement-linux/module-02-adressage-reseau.md) · [Travaux pratiques](../../tp/services-reseau-linux/module-02/index.md).
