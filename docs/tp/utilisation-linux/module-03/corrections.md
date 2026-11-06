# Correction expliquée — TP01 — Premières commandes

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Utiliser le compte de laboratoire attribué et un terminal où il est possible de fermer puis de rouvrir la session.

## Activité 1 — Changer le mot de passe, fermer la session puis se reconnecter pour vérifier le changement.

```bash
passwd
```
Suivre les demandes interactives puis réussir une nouvelle connexion.

## Activité 2 — Depuis quand la session courante est-elle connectée ?

```bash
who am i
```
Relever la date et l’heure de connexion de sa propre ligne.

## Activité 3 — Quels utilisateurs travaillent sur le serveur ?

```bash
who
```
Observer les sessions connectées ; plusieurs lignes peuvent concerner un même compte.

## Activité 4 — Quel est le temps d’inactivité des utilisateurs connectés ?

```bash
w -u
```
Lire la colonne d’inactivité de chaque session.

## Activité 5 — Quel est le numéro de processus de la session présenté par l’outil de connexion ?

```bash
who am i --all --heading
```
Lire la colonne PID du résultat, comme dans le document.

## Activité 6 — Afficher UID, GID et noms des groupes d’appartenance.

```bash
id
```
Relever l’utilisateur, le groupe principal et les groupes supplémentaires.

## Activité 7 — Afficher uniquement l’heure.

```bash
date +%X
```

## Activité 8 — Afficher uniquement la date selon le modèle jour, numéro, mois, année.

```bash
date "+%A %d %B %Y"
```
Le résultat doit être la date courante dans la forme demandée ; la langue dépend du système.

## Activité 9 — Afficher janvier 1900, toute l’année 1900, janvier de l’année courante, puis septembre 1752 et sa particularité.

```bash
cal 1 1900
cal 1900
cal 1 "$(date +%Y)"
cal 9 1752
man cal
```
Comparer les quatre sorties. Rechercher 1752 dans le manuel pour expliquer le saut observé dans le scénario.

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Authentification | La nouvelle connexion réussit après le changement. Consigner le succès sans noter le mot de passe. |
| Session | Relever la connexion courante, les utilisateurs présents, l’inactivité et le PID demandé. Identifier séparément UID, GID et groupes. |
| Temps | Présenter les formats demandés et les quatre affichages de calendrier. Décrire la particularité visible en septembre 1752. |

## Points de lecture du support

!!! note "Lecture de la source"
    La correction imprime `Date +%X` avec une majuscule : l’aide pédagogique emploie `date`, conformément à la commande Linux.

!!! note "Lecture de la source"
    L’option de who est imprimée avec un tiret typographique et un I majuscule. La forme utilisable est `who am i --all --heading`.

!!! note "Lecture de la source"
    La date « lundi 24 septembre 2009 » est un modèle de présentation dans l’énoncé, pas une date à rendre fixe ni une validation du jour de semaine.

!!! note "Lecture de la source"
    La correction ne développe pas le calendrier annuel ; `cal 1900` répond à la seconde partie de la consigne.

## Liens

- [Énoncé](enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-03-premieres-commandes.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-03-premieres-commandes.md)
- [Tous les ateliers du module](index.md)
