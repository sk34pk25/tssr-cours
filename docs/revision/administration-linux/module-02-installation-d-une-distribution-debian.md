# Fiche de révision — Module 02 — Installation d’une distribution Debian

**Sources originales (A) :** supports et TP TSSR M02 d’installation Debian avec et sans interface graphique.
**Fiche de révision (B) :** synthèse et reformulation pédagogique des sources originales.

## À connaître absolument

- Préparer une machine et son support d’installation.
- Installer Debian avec ou sans interface graphique.
- Configurer comptes, stockage, réseau et sélection de logiciels.
- Mettre le système à jour et vérifier le démarrage.

## Méthode express

1. Préparer l’image, la machine virtuelle et le retour arrière du laboratoire.
2. Choisir explicitement le parcours graphique ou sans interface graphique.
3. Vérifier le disque cible avant le partitionnement et appliquer le schéma demandé.
4. Démarrer sur le système installé puis contrôler l’identité, le réseau et les montages.
5. Documenter les paramètres effectivement utilisés et les écarts éventuels.

## Pièges fréquents

- Confondre les deux parcours : graphique et sans interface graphique n’ont pas le même objectif ni le même schéma de stockage.
- Partitioner le mauvais disque ou valider sans relever le résultat réel de `lsblk -f` et `findmnt`.
- Réutiliser aveuglément des valeurs de laboratoire dans un environnement différent.
- Valider uniquement à l’écran sans démarrer ni ouvrir de session sur le système installé.

## Checklist de maîtrise

- [ ] Préparer une machine et son support d’installation.
- [ ] Installer Debian avec ou sans interface graphique.
- [ ] Configurer comptes, stockage, réseau et sélection de logiciels.
- [ ] Mettre le système à jour et vérifier le démarrage.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quelles différences essentielles séparent les parcours graphique et sans interface graphique ?
2. Quelles commandes permettent de vérifier les systèmes de fichiers et points de montage réellement actifs ?
3. Pourquoi faut-il identifier le disque cible avant le partitionnement ?

## Voir aussi

- [Cours complet — Module 02](../../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian.md)
- [TP — Installation avec et sans interface graphique](../../tp/administration-linux/module-02/index.md)
- [Énoncés](../../tp/administration-linux/module-02/enonces.md)
- [Corrections](../../tp/administration-linux/module-02/corrections.md)
- [Kahoot — Module 02](../../kahoot/05-administration-debian-gnu-linux-module-02-installation-d-une-distribution-debian.md)
