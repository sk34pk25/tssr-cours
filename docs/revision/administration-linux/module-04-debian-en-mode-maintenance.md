# Fiche de révision — Module 04 — Debian en mode maintenance

**Sources originales (A) :** support M04 et TP M04 TSSR.
**Fiche de révision (B) :** synthèse reformulée des sources.

## Deux voies de secours

| Voie | Ce que la source permet de vérifier | Point de vigilance |
|---|---|---|
| GRUB | Démarrer temporairement en maintenance depuis le noyau sélectionné | Vérifier la cible et la disposition de clavier avant toute modification |
| Média d'installation | Ouvrir le mode de secours et monter la racine du système installé | Choisir le bon volume logique et non un système de fichiers inconnu |

## À connaître

- Un système peut nécessiter une maintenance après un démarrage défaillant, la perte du mot de passe `root` ou pour une récupération de données.
- Un shell de secours peut disposer des privilèges administratifs sans l'authentification habituelle : il est réservé à un contexte autorisé.
- Après un démarrage de maintenance direct, la racine peut être en lecture seule ; l'écriture doit être explicitement limitée, vérifiée et synchronisée.
- Un `/home` non accessible peut être sur un volume logique distinct de la racine et ne pas être monté dans le shell de secours.
- Dans le mode de secours du média, `USER` ou le prompt permet d'identifier le shell `root`; `logname` peut être vide.

## Méthode de contrôle

1. Identifier le symptôme et confirmer que la machine est bien celle autorisée.
2. Choisir la voie documentée : GRUB ou média d'installation.
3. Identifier la racine et les volumes avant toute écriture.
4. Réaliser seulement le test ou la réparation explicitement demandée.
5. Synchroniser, restaurer l'état de laboratoire et vérifier le redémarrage normal.
6. Consigner l'action, le résultat et le retour à l'état attendu.

## Checklist de maîtrise

- [ ] Je distingue maintenance via GRUB et secours via le média d'installation.
- [ ] Je sais expliquer pourquoi la racine peut être en lecture seule.
- [ ] Je contrôle la cible de stockage avant une modification.
- [ ] Je limite les écritures à un laboratoire autorisé et les synchronise.
- [ ] Je sais expliquer pourquoi un shell de récupération ne doit pas devenir une voie d'accès permanente.

## Questions flash

1. Dans quel cas choisir le média d'installation plutôt que GRUB ?
2. Pourquoi un répertoire utilisateur peut-il sembler absent dans le shell de secours ?
3. Quel contrôle doit précéder une écriture sur le système récupéré ?

## Liens utiles

- [Cours complet](../../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance.md)
- [TP — Debian en mode maintenance](../../tp/administration-linux/module-04/index.md)
- [Kahoot du module](../../kahoot/05-administration-debian-gnu-linux-module-04-debian-en-mode-maintenance.md)
