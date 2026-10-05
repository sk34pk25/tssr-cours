# Fiche de révision — Module 06 — Gestion des paquets logiciels

**Sources originales (A) :** support et TP M06 TSSR. **Fiche (B) :** synthèse reformulée.

## Repères

- `deb` référence des binaires, `deb-src` des sources ; les dépôts sont déclarés dans `sources.list` ou `sources.list.d`.
- `apt update` télécharge les index ; `apt upgrade` met à niveau sans suppression ; `full-upgrade` peut adapter les dépendances.
- `dpkg` interroge les paquets locaux et ne résout pas seul les dépendances distantes.
- Vérifier la branche, la liste de changements et le résultat avant de considérer l'opération terminée.

## À connaître absolument

- Distinguer dpkg, apt et dépôts.
- Rechercher, installer, mettre à jour et supprimer un paquet.
- Lire les métadonnées et journaux de paquets.
- Éviter d’utiliser apt comme interface de script stable.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Distinguer dpkg, apt et dépôts.
- [ ] Rechercher, installer, mettre à jour et supprimer un paquet.
- [ ] Lire les métadonnées et journaux de paquets.
- [ ] Éviter d’utiliser apt comme interface de script stable.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « Gestion des paquets logiciels » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels.md).
