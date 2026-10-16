# Fiche de révision — Module 03 — Premières commandes

**Sources A :** TP01 « Premières commandes », énoncé et solution TSSR.
**Structuration B :** regroupement des contrôles demandés, sans apport de commandes supplémentaires.

## Changement de mot de passe

```bash
passwd
```

La vérification demandée est de fermer la session puis de se reconnecter après le changement.

## Session, utilisateurs et identifiants

| Besoin demandé dans le TP | Commande de la solution |
|---|---|
| Depuis quand êtes-vous connecté ? | `who am i` |
| Utilisateurs travaillant sur le serveur | `who` |
| Temps d’inactivité des utilisateurs connectés | `w -u` |
| Numéro de processus de la session | `who am I --all --heading` |
| UID, GID et groupes d’appartenance | `id` |

## Heure, date et calendrier

```bash
date +%X
date "+%A %d %B %Y"
cal 1 1900
cal 9 1752
```

- L’énoncé demande aussi le calendrier de janvier de l’année courante.
- La solution propose `cal 1 2020` pour cette question : ne pas remplacer silencieusement l’une des deux formulations.
- Pour septembre 1752, conserver l’observation historique rapportée dans la solution comme une information de source.

## Contrôles à effectuer

- [ ] Après `passwd`, je ferme puis rouvre la session pour vérifier le changement.
- [ ] Je relève la réponse affichée pour chaque question de session et d’identifiants.
- [ ] Je vérifie séparément l’affichage de l’heure, de la date et des calendriers demandés.

## Liens

[Cours du module](../../modules/04-utilisation-gnu-linux/module-03-premieres-commandes.md) · [TP01 — Énoncé](../../tp/utilisation-linux/module-03/enonces.md) · [TP01 — Correction](../../tp/utilisation-linux/module-03/corrections.md) · [Kahoot](../../kahoot/04-utilisation-gnu-linux-module-03-premieres-commandes.md)
