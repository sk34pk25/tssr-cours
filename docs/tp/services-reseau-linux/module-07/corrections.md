# Corrigés commentés — Module 07 — DNS autoritaire sur zone

La démarche suit les objectifs des énoncés. Les écarts du corrigé source et les adaptations sont signalés au moment de la manipulation. Les transcriptions complètes restent dans l’onglet Original.

## TP 1 — Zone directe et zones inverses

Sur DEB-S2, déclarer `tssr.example` dans `named.conf.local` et utiliser un fichier de zone dont le chemin correspond à la déclaration. Choisir le même `X` partout. Le cours fournit une configuration complète pour `X=30`. Renseigner le SOA, le NS, les deux serveurs, les deux adresses LAN de RouTux, le LAN de pfSense, `ns1` et `test`. L’énoncé place `ns1` sur DEB-S2 à `.12`. La valeur `.11` imprimée dans la solution désigne DEB-S1. Le nom canonique de l’alias est `ns1.tssr.example.`.

Exécuter `named-checkzone` et `named-checkconf -z`, puis `rndc reload`. Interroger directement DEB-S2 pour SOA, NS, A et CNAME. Pour l’accès par nom court, distribuer le suffixe avec DHCP et vérifier la prise en compte après renouvellement du bail. Le point final des noms absolus évite d’ajouter une deuxième fois le suffixe de zone.

Créer les deux déclarations inverses, par exemple `30.18.172.in-addr.arpa` et `30.168.192.in-addr.arpa`. Utiliser un fichier distinct pour chaque zone, avec SOA et NS. Ajouter le PTR `254` de RouTux dans le LAN Clients, et les PTR `11`, `12` et `254` dans le LAN Serveurs. Relire la concordance des adresses et tester avec `dig -x`. Le corrigé alterne les préfixes avec `10` et `30`. Les tests doivent suivre la valeur de `X` retenue pour la maquette.

## TP 2 — Copie secondaire et redondance DNS

Tester le transfert avec `dig @192.168.30.12 tssr.example AXFR` depuis le client, puis depuis DEB-S1. Dans la zone primaire, `allow-transfer { 192.168.30.11; };` autorise la source DEB-S1 de cet exemple. Relire le résultat depuis les deux machines. La configuration et la version de BIND déterminent le comportement initial.

Ajouter le NS de DEB-S1 à la zone directe primaire et incrémenter le serial. Sur DEB-S1, déclarer la copie secondaire du primaire `192.168.30.12` dans un chemin que BIND peut écrire. Le cours donne la syntaxe `masters`. Le corrigé emploie `master` et écrit `192.169.X.12` à cet emplacement. Valider avec `named-checkconf -z` et contrôler les journaux après rechargement.

```bash
dig @192.168.30.11 tssr.example SOA +norecurse
dig @192.168.30.11 tssr.example NS +norecurse
dig @192.168.30.11 deb-s2.tssr.example A +norecurse
```

Vérifier `aa` et la concordance du serial. Arrêter BIND sur DEB-S2 et répéter les recherches vers DEB-S1. Le profil client doit connaître les deux résolveurs pour tester sa continuité de service habituelle. Relancer le primaire, activer temporairement le journal de requêtes dans le scénario, ajouter un enregistrement et augmenter le serial. Observer le transfert effectivement effectué. IXFR transporte des différences disponibles. AXFR transfère la zone entière.

Le dernier test porte sur les recherches externes pendant l’arrêt du primaire. Appliquer à DEB-S1 la politique de résolution et de redirection du module 5. Vérifier séparément zone directe, zones inverses et requêtes publiques. Les zones inverses doivent avoir leur propre copie secondaire si l’objectif inclut leur continuité. Réactiver le primaire et terminer le suivi temporaire des requêtes. [Référence BIND 9](https://bind9.readthedocs.io/en/latest/reference.html).

[Reprendre les énoncés](enonces.md) · [Exemples détaillés et références du cours](../../../modules/15-services-reseau-en-environnement-linux/module-07-dns-autoritaire-sur-zone.md).
