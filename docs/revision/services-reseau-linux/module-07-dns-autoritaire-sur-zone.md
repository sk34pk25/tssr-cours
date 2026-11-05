# Fiche de révision — Module 07 — DNS autoritaire sur zone

## À savoir refaire

- Relier SOA, NS, A, AAAA, CNAME, MX, SRV et PTR à leur rôle.
- Former le nom de zone inverse d’un `/24`.
- Vérifier serial, autorité et restriction de transfert par serveur.
- Tester séparément continuité de la zone directe, des zones inverses et de la récursion.

## Se tester

1. Quel enregistrement permet au secondaire de comparer les versions de zone ?
2. Quel nom de zone inverse convient à `192.168.30.0/24` ?
3. Une copie de la zone directe apporte-t-elle aussi les zones inverses ?
4. Quel test montre que le secondaire répond avec autorité ?

??? success "Réponses"
    1. Le SOA et son numéro de série.
    2. `30.168.192.in-addr.arpa.`.
    3. Chaque zone inverse possède sa propre déclaration et son propre transfert.
    4. Interroger directement le secondaire avec `dig @adresse`, vérifier la réponse et le drapeau `aa`.

[Cours optimisé et références](../../modules/15-services-reseau-en-environnement-linux/module-07-dns-autoritaire-sur-zone.md) · [Travaux pratiques](../../tp/services-reseau-linux/module-07/index.md).
