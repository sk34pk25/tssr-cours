# Module 03 — Premières commandes

**Sources originales (A) :** TP TSSR `M03TP01 - Énoncé - Premières Commandes` et `M03TP01 - Solution - Premières Commandes`.
**Contenu pédagogique du portail (B) :** organisation concise des commandes et contrôles explicitement présents dans ces deux documents.

!!! note "Périmètre de cette page"
    Aucun support de cours distinct n’a été identifié pour ce module dans les sources disponibles. Cette page se limite donc au TP01 et à sa solution : elle n’ajoute pas de théorie générale sur le shell ou les commandes GNU/Linux.

## Objectifs du TP

Le TP demande de changer un mot de passe et de vérifier ce changement après une nouvelle connexion, puis de répondre à des questions sur la session, les utilisateurs connectés, les identifiants et l’affichage de l’heure, de la date ou de calendriers.

**Durée source :** 45 à 60 minutes.

## Changer le mot de passe et vérifier la session

La solution associe la première question à `passwd`, avec le respect de la complexité demandée, puis à une fermeture et une nouvelle ouverture de session. Le contrôle demandé n’est pas seulement l’exécution de la commande : il consiste à se reconnecter pour vérifier que le changement est effectif.

```bash
passwd
```

## Identifier la session et les utilisateurs connectés

Les commandes suivantes correspondent directement aux questions du TP et à la solution fournie.

| Question du TP | Commande indiquée par la solution | Vérification demandée |
|---|---|---|
| Depuis quand êtes-vous connecté ? | `who am i` | relever les informations de la session courante |
| Quels utilisateurs travaillent sur le serveur ? | `who` | relever les utilisateurs connectés |
| Quel est leur temps d’inactivité ? | `w -u` | relever l’information d’inactivité affichée |
| Quel est le numéro de processus de votre session ? | `who am I --all --heading` | relever le numéro de processus de la session |
| Quels sont vos UID, GID et groupes ? | `id` | relever les identifiants et les noms de groupes |

## Afficher l’heure et la date

Le TP distingue l’affichage de l’heure seule et celui d’une date conforme à l’exemple fourni.

```bash
date +%X
date "+%A %d %B %Y"
```

Vérifiez que la première commande n’affiche que l’heure et que la seconde produit une date de la forme demandée par le TP, par exemple « lundi 24 septembre 2009 ».

## Utiliser `cal`

Le TP demande trois observations distinctes : janvier 1900, janvier de l’année courante et septembre 1752.

```bash
cal 1 1900
cal 9 1752
```

Pour janvier de l’année courante, l’énoncé conserve explicitement cette formulation. La solution propose toutefois `cal 1 2020` : cette différence documentaire est conservée pour relecture, sans la remplacer par une valeur différente.

Pour septembre 1752, la solution demande de consulter la mention « 1752 » dans le manuel et décrit une particularité liée au passage au calendrier grégorien. Cette observation est rapportée comme contenu de la source, sans ajout historique externe.

## Synthèse des vérifications

- Après `passwd`, fermer la session puis se reconnecter.
- Pour chaque question de session, relever l’information effectivement affichée par la commande correspondante.
- Vérifier séparément l’heure, la date et les calendriers demandés.
- Conserver l’écart entre « année courante » dans l’énoncé et `2020` dans la solution pour une validation documentaire.

## Voir aussi

- [TP01 — Présentation](../../tp/utilisation-linux/module-03/index.md)
- [TP01 — Énoncé](../../tp/utilisation-linux/module-03/enonces.md)
- [TP01 — Correction](../../tp/utilisation-linux/module-03/corrections.md)
- [Fiche de révision du module](../../revision/utilisation-linux/module-03-premieres-commandes.md)
- [Kahoot du module](../../kahoot/04-utilisation-gnu-linux-module-03-premieres-commandes.md)
