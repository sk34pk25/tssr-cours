# Fiche de révision — Module 03 — Premières commandes

Ouvrir une session, identifier les connexions et formater les repères de temps.

## Gestes à retenir

| Besoin | Repère |
|---|---|
| Mot de passe | passwd, puis reconnexion |
| Session et connexions | who am i ; who ; w -u |
| Identité | id |
| Heure/date | date +%X ; date "+%A %d %B %Y" |
| Calendriers | cal 1 1900 ; cal 1900 ; cal 1 "$(date +%Y)" ; cal 9 1752 |

## Contrôles à savoir réaliser

| Point de contrôle | Vérification |
| --- | --- |
| Session et identifiants | Distinguer la session attachée au terminal, les connexions ouvertes et l’identité effective du processus. Comparer les colonnes de `who` et `w` avec la sortie de `id`. |
| Formats de date et calendrier | Vérifier séparément la forme demandée et la valeur retournée par la machine. Pour l’année courante, utiliser le résultat de `date +%Y`. |

## Pièges du support

- La correction imprime `Date +%X` avec une majuscule : l’aide pédagogique emploie `date`, conformément à la commande Linux.
- L’option de who est imprimée avec un tiret typographique et un I majuscule. La forme utilisable est `who am i --all --heading`.
- La date « lundi 24 septembre 2009 » est un modèle de présentation dans l’énoncé, pas une date à rendre fixe ni une validation du jour de semaine.
- La correction ne développe pas le calendrier annuel ; `cal 1900` répond à la seconde partie de la consigne.

## Retenir puis vérifier

**La reconnexion valide le mot de passe. Les commandes d’observation répondent ensuite à des questions différentes sur la session.**

**1. Pourquoi changer de session après `passwd` ?**

??? success "Réponse expliquée"
    Pour tester l’authentification avec le nouveau mot de passe du compte de laboratoire. Une session déjà ouverte ne prouve pas que la prochaine connexion fonctionnera.

**2. Quel outil relie un utilisateur à ses groupes ?**

??? success "Réponse expliquée"
    `id` affiche les identifiants du compte et ses groupes. Les connexions et le temps d’inactivité se lisent avec `who` et `w`.

**3. Quel contrôle permet de répondre à la question sur septembre 1752 ?**

??? success "Réponse expliquée"
    Afficher le mois avec le `cal` du laboratoire et relever la particularité réellement visible. Le format de date et les choix du calendrier peuvent varier selon l’implémentation.

## Pour pratiquer

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-03-premieres-commandes.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-03/index.md)
- [Kahoot existant du module](../../kahoot/04-utilisation-gnu-linux-module-03-premieres-commandes.md)
- [Commandes GNU/Linux](../../commandes/linux.md)
