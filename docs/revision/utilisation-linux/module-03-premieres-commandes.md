# Révision — M03 : Premières commandes

## Gestes à retenir

| Besoin | Repère |
|---|---|
| Mot de passe | passwd, puis reconnexion |
| Session et connexions | who am i ; who ; w -u |
| Identité | id |
| Heure/date | date +%X ; date "+%A %d %B %Y" |
| Calendriers | cal 1 1900 ; cal 1900 ; cal 1 "$(date +%Y)" ; cal 9 1752 |

## Se contrôler

- Pourquoi une nouvelle connexion est-elle demandée après passwd ? **Elle vérifie que le nouveau mot de passe permet effectivement l’authentification.**
- Que représentent UID et GID ? **L’identifiant utilisateur et l’identifiant du groupe principal.**
- Pourquoi ne pas remplacer « année courante » par 2020 ? **2020 est l’année de l’exemple de correction, pas une constante de la consigne.**

## Pièges du support

- La correction imprime `Date +%X` avec une majuscule : l’aide pédagogique emploie `date`, conformément à la commande Linux.
- L’option de who est imprimée avec un tiret typographique et un I majuscule. La forme utilisable est `who am i --all --heading`.
- La date « lundi 24 septembre 2009 » est un modèle de présentation dans l’énoncé, pas une date à rendre fixe ni une validation du jour de semaine.
- La correction ne développe pas le calendrier annuel ; `cal 1900` répond à la seconde partie de la consigne.

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-03-premieres-commandes.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-03/index.md)
