# Correction — TP01 — Premières commandes

**Source originale (A) :** `M03TP01 - Solution - Premières Commandes` TSSR.
**Présentation du portail (B) :** séparation des réponses et des contrôles, sans modification des commandes ou des observations de source.

## 1. Changement de mot de passe

```bash
passwd
```

La solution précise de respecter la complexité requise, puis de quitter et de se reconnecter pour vérifier le changement.

## 2 à 6. Session, utilisateurs et identifiants

| Question | Commande proposée par la solution |
|---|---|
| Depuis quand êtes-vous connecté ? | `who am i` |
| Utilisateurs travaillant sur le serveur | `who` |
| Temps d’inactivité des utilisateurs connectés | `w -u` |
| Numéro de processus de votre session | `who am I --all --heading` |
| UID, GID et groupes d’appartenance | `id` |

## 7 et 8. Heure et date

```bash
date +%X
date "+%A %d %B %Y"
```

## 9. Calendriers

```bash
cal 1 1900
cal 9 1752
```

Pour la demande « janvier de l’année courante », la solution source affiche `cal 1 2020`. Cet écart avec l’énoncé est conservé pour relecture ; il ne doit pas être résolu silencieusement.

Pour septembre 1752, la solution demande de rechercher « 1752 » dans le manuel et rapporte une particularité liée au passage au calendrier grégorien, avec onze jours indiqués comme sautés du 3 au 13. Cette observation reste celle de la source : aucune explication historique supplémentaire n’est ajoutée ici.

## Contrôles

- Fermer puis rouvrir la session après `passwd`.
- Relever les résultats affichés par les commandes de session et d’identifiants.
- Comparer l’affichage de l’heure, de la date et des calendriers aux demandes de l’énoncé.

## Voir aussi

- [Présentation du TP01](index.md)
- [Énoncé du TP01](enonces.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-03-premieres-commandes.md)
