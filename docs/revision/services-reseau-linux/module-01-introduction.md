# Fiche de révision — Module 01 — Introduction

## À savoir refaire

- Relier besoin utilisateur, configuration IP, route et service demandé.
- Associer VMNet4 aux Clients, VMNet6 aux Serveurs et VMNet2 à l’interconnexion.
- Rappeler les rôles de RouTux, pfSense, DEB-S1 et DEB-S2.
- Garder le même numéro `X` dans toutes les adresses et zones.

## Se tester

1. Quel segment relie RouTux à l’interface LAN de pfSense ?
2. Sur quelle VM le cours place-t-il le DNS résolveur ?
3. Quelle variable doit rester cohérente dans toute la maquette ?

??? success "Réponses"
    1. VMNet2 et `172.30.X.0/24`.
    2. DEB-S2.
    3. `X`, le numéro de stagiaire choisi.

[Cours optimisé et références](../../modules/15-services-reseau-en-environnement-linux/module-01-introduction.md) · [Travaux pratiques](../../tp/services-reseau-linux/index.md).
