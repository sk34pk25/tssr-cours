# Énoncé — Module 08 — Le partage de ressources

## Contexte

Vous partagez des dossiers depuis votre VM Windows 10, puis vous testez les accès depuis une seconde VM. Vous vérifiez ensuite la configuration de Discovery et l’ouverture d’une session distante. Avant toute manipulation, assurez-vous que les deux VM communiquent.

**Durée estimée :** 1 heure.

## Environnement de laboratoire

Le scénario utilise **Win10-XX** et **Discovery**. Les VM, dossiers, volumes et adresses nécessaires ne sont pas fournis dans le dossier Drive M08 live. Utilisez uniquement l’environnement et les identifiants fournis par le formateur.

## 1. Partage du dossier `Echange`

Sur Win10-XX :

1. partagez le dossier `Echange` disponible sur le lecteur `D:` ;
2. nommez le partage `CoWorkerShare` ;
3. appliquez les bonnes pratiques Microsoft demandées par le scénario ;
4. permettez aux collègues de modifier le contenu depuis leurs VM ;
5. testez le bon fonctionnement.

## 2. Partage « manuels d’utilisation »

L’équipe informatique veut partager le dossier `manuels d’utilisation` afin que les utilisateurs y déposent des documents texte et des images pour enrichir une future FAQ.

1. créez le partage ;
2. testez les accès avec un compte membre du groupe `L_Collegues` ;
3. vérifiez que l’utilisateur peut déposer le contenu prévu par le scénario.

## 3. Observation des partages sur Discovery

À l’aide de PowerShell :

1. listez les partages disponibles sur Discovery ;
2. identifiez le dossier de l’arborescence système partagé sous le nom `ADMIN$` ;
3. identifiez qui peut accéder au partage `N$`.

## 4. Bureau à distance

1. vérifiez l’état d’activation de Bureau à distance sur Discovery ;
2. déterminez s’il est actif ;
3. autorisez les utilisateurs Géraldine et Laurent à ouvrir une session Bureau à distance sur Discovery ;
4. testez ces accès depuis Win10-XX ;
5. examinez les questions du scénario sur le changement de mot de passe de Laurent et les droits du compte Adm ; justifiez les réponses.

Les noms, adresses et observations appartiennent au laboratoire. Ne les transformez pas en recommandations générales.

Lorsque le travail est terminé, [consultez la correction](corrections.md).
