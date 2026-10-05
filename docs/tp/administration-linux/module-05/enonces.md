# Énoncé — Module 05 — Gestion du réseau

!!! warning "Paramètres propres au laboratoire"
    Les plans d'adressage, serveurs DNS et noms ENI de la source sont liés à la salle de formation. Les relever dans l'environnement fourni ; ne pas les réutiliser tels quels sur un autre réseau.

**Sources originales (A) :** `M05TP01 - Énoncé - Gestion de la configuration réseau d'un poste` et support M05 TSSR.
**Énoncé du portail (B) :** reformulation structurée des tâches source.

**Durée indicative de la source :** 45 minutes à 1 heure.

## Serveur sans interface graphique

1. Relever sur le poste hôte les paramètres de salle nécessaires au plan d'adressage de laboratoire.
2. Configurer la première interface détectée avec l'adresse, le préfixe et la passerelle définis par le TP.
3. Vérifier et adapter la résolution de noms avec les serveurs et domaines fournis pour la salle.
4. Tester séparément l'adressage et la résolution des hôtes indiqués dans le TP.
5. Modifier le nom de la machine dans les deux fichiers signalés par la source, puis vérifier la prise en compte dans une nouvelle session.
6. Ajouter une seconde carte host-only, lui attribuer l'adresse de laboratoire prévue sans passerelle par défaut et contrôler son état.

## Poste avec environnement graphique

1. Configurer une adresse statique compatible avec la première interface du serveur.
2. Réactiver l'interface si nécessaire pour prendre en compte la modification.
3. Vérifier la connectivité vers l'autre VM puis vers les cibles de la salle, en distinguant un échec IP d'un échec de résolution.

## Voir aussi

- [Présentation du TP](index.md)
- [Correction du TP](corrections.md)
- [Cours — Gestion du réseau](../../../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau.md)
