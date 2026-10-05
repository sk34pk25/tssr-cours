# Fiche de révision — Module 03 — Démarrage d’une distribution Debian

**Sources originales (A) :** support et TP TSSR M03 sur le démarrage Debian et la gestion des services.
**Fiche de révision (B) :** synthèse et reformulation pédagogique des sources originales.

## À connaître absolument

- Suivre la chaîne firmware, chargeur, noyau et systemd.
- Démarrer, arrêter et redémarrer proprement.
- Administrer les services avec systemctl.
- Lire l’état et les journaux d’une unité en échec.

## Méthode express

1. Identifier la cible systemd et l’état effectif du service avant toute modification.
2. Distinguer l’action immédiate (`start`, `stop`, `restart`) de l’activation au démarrage (`enable`, `disable`).
3. Appliquer une seule action contrôlée.
4. Relever l’état, l’activation et le journal si nécessaire.
5. Documenter et restaurer le comportement demandé par le laboratoire.

## Pièges fréquents

- Confondre la cible active avec la cible configurée par défaut pour le prochain démarrage.
- Croire qu’un `stop` désactive automatiquement le démarrage ultérieur du service.
- Modifier plusieurs services sans avoir relevé l’état initial.
- Valider sans relire `status`, `is-enabled` ou le journal de l’unité concernée.

## Checklist de maîtrise

- [ ] Suivre la chaîne firmware, chargeur, noyau et systemd.
- [ ] Démarrer, arrêter et redémarrer proprement.
- [ ] Administrer les services avec systemctl.
- [ ] Lire l’état et les journaux d’une unité en échec.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quelle différence y a-t-il entre la cible active et la cible systemd définie par défaut ?
2. Quelle différence y a-t-il entre arrêter un service et désactiver son démarrage automatique ?
3. Quelles informations permettent de diagnostiquer un service qui ne démarre pas ?

## Voir aussi

- [Cours complet — Module 03](../../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md)
- [TP — Démarrage et services](../../tp/administration-linux/module-03/index.md)
- [Énoncés](../../tp/administration-linux/module-03/enonces.md)
- [Corrections](../../tp/administration-linux/module-03/corrections.md)
- [Kahoot — Module 03](../../kahoot/05-administration-debian-gnu-linux-module-03-demarrage-d-une-distribution-debian.md)
