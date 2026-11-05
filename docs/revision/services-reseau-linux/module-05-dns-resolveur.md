# Fiche de révision — Module 05 — DNS résolveur

## À savoir refaire

- Lire les labels du nom d’hôte DNS depuis la racine.
- Distinguer résolveur, autorité et redirecteur.
- Restreindre la récursion avec une ACL.
- Interroger le serveur voulu avec `dig @adresse` et relever TTL et statut.

## Se tester

1. À quoi sert le point final d’un FQDN ?
2. Quelle règle limite les clients autorisés à demander la récursion ?
3. Quel mécanisme de sortie utilise `forward only` ?

??? success "Réponses"
    1. Il représente la racine et marque le nom absolu.
    2. `allow-recursion` avec l’ACL voulue.
    3. Les redirecteurs configurés pour les recherches transférées.

[Cours optimisé et références](../../modules/15-services-reseau-en-environnement-linux/module-05-dns-resolveur.md) · [Travaux pratiques](../../tp/services-reseau-linux/module-05/index.md).
