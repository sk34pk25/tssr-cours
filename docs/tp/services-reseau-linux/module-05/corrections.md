# Corrigés commentés — Module 05 — DNS résolveur

La démarche suit les objectifs des énoncés. Les écarts du corrigé source et les adaptations sont signalés au moment de la manipulation. Les transcriptions complètes restent dans l’onglet Original.

## TP 1 — Résolveur BIND sur DEB-S2

Installer BIND sur DEB-S2 et vérifier son unité. Définir l’ACL des LAN Clients et Serveurs avec le même `X` que les ateliers précédents. Dans `named.conf.options`, appliquer `allow-query` et `allow-recursion` au bloc `options`. La solution source cite `named.conf.local` pour ces options. Le cours présente leur emplacement adapté et distingue la désactivation historique de DNSSEC de la validation conservée sur une version actuelle.

```bash
named-checkconf
rndc reload
```

Renseigner `192.168.X.12` comme DNS sur le client et sur les serveurs. Appliquer le réglage via NetworkManager sur le client et via le mécanisme réellement utilisé sur les serveurs. Comparer une requête explicite `dig @192.168.10.12 www.isc.org A` avec `dig www.isc.org A` dans le cas `X=10`. Refaire pour `www.yahoo.fr` et noter serveur, statut, réponse et TTL.

Dans la première configuration, observer le chemin itératif ou les paramètres par défaut du résolveur. Ajouter ensuite le redirecteur prévu par le laboratoire dans le bloc `options`, valider et recharger. Pour l’exercice de comparaison, `rndc flush` efface le cache du serveur. Comparer les traces et les réponses avant et après. Une IP de résultat identique peut être obtenue par les deux méthodes. Le compte rendu indique la politique `forward first` ou `forward only` choisie et les observations qui permettent de distinguer le chemin.

[Reprendre les énoncés](enonces.md) · [Exemples détaillés et références du cours](../../../modules/15-services-reseau-en-environnement-linux/module-05-dns-resolveur.md).
