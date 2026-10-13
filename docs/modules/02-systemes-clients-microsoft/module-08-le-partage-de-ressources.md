# Module 08 — Le partage de ressources

**Séquence :** Systèmes clients Microsoft  
**Sources TSSR :** support du module, énoncé et correction du TP « Partages et sessions distantes ».

## Objectifs

À l’issue du module, vous devez pouvoir accéder à une ressource de l’entreprise via un partage réseau, créer et contrôler un partage de dossiers, distinguer les autorisations de partage des droits NTFS et préparer une session Bureau à distance dans le périmètre du laboratoire.

## Partager une ressource sur le réseau

Un partage rend une ressource hébergée par un système accessible depuis un client par le réseau. Le support cite les dossiers, les arborescences, les volumes et les imprimantes. Un serveur, un poste client, un copieur, une tablette ou un smartphone connecté au réseau de l’entreprise peut être concerné selon le scénario.

Créer un partage modifie le système : des droits administratifs sont requis. L’accès demande une authentification avec un compte local ou de domaine.

## Autorisations : deux contrôles successifs

Le support distingue deux vérifications : les autorisations du partage puis les droits NTFS de la ressource. Les niveaux présentés pour un partage sont **Lecture**, **Modifier** et **Contrôle total**. Les autorisations de partage sont restrictives : testez donc avec le compte réellement visé.

Dans le TP, la correction utilise `Utilisateurs authentifiés` pour le partage et vérifie séparément que `L_Collegues` dispose de la modification au niveau NTFS. C’est une configuration de laboratoire, non une valeur à reprendre sans contrôle de la cible.

## Accéder à un partage

| Besoin | Moyen présenté dans le support |
|---|---|
| Accès ponctuel | Chemin UNC, par exemple `\\serveur\partage`, depuis l’Explorateur |
| Accès durable | **Connecter un lecteur réseau** ; le lecteur est mémorisé dans le profil utilisateur |
| Invite de commandes | `net use` pour connecter un lecteur ; `net view` pour lister les partages |
| PowerShell | `New-SmbMapping` pour créer un mappage |

Les chemins, noms et lettres du TP appartiennent au laboratoire.

## Créer et observer un partage

Le support présente l’Explorateur Windows, le partage avancé, **Dossiers partagés** (`fsmgmt.msc`), `net share` et `New-SmbShare`. `fsmgmt.msc` permet notamment de voir les partages actifs, les sessions, les fichiers ouverts et les partages administratifs générés par le système.

Le partage simplifié est décrit comme orienté utilisateur et à éviter. Pour l’exemple étudié, le support recommande de préférer **Utilisateurs authentifiés** à **Tout le monde**.

Le TP observe aussi les partages de Discovery avec `Get-SmbShare`, `Get-SmbShare ADMIN$` et `Get-SmbShareAccess N$`. `ADMIN$` et `N$` sont des observations du scénario : vérifiez leur chemin et leurs accès sur la machine réellement observée.

## Sessions à distance

Le Bureau à distance donne accès à un poste avec un compte local ou de domaine valide et des privilèges adaptés. Le support présente **Connexion Bureau à distance**, `mstsc`, l’authentification standard et NLA. RDP utilise le port 3389 dans le support ; l’emplacement réseau doit être pris en compte.

Le TP demande de vérifier la fonctionnalité sur Discovery, d’autoriser les utilisateurs du scénario, puis de tester depuis Win10-XX. Les comptes, adresses et résultats sont propres au laboratoire. Lorsqu’une authentification est nécessaire, utilisez les identifiants fournis par le formateur ; ne les inscrivez pas dans un document de cours.

## Méthode de vérification issue du TP

1. Vérifier la communication entre les deux machines du scénario.
2. Vérifier les autorisations de partage puis NTFS séparément.
3. Tester l’accès avec le compte concerné et l’action attendue.
4. Fermer puis rouvrir la session lorsque le scénario demande de régénérer le jeton d’accès.
5. Vérifier la configuration du Bureau à distance, les utilisateurs autorisés et l’ouverture effective de la session.

## Synthèse

Un partage relie une ressource, une authentification et deux niveaux de contrôle d’accès. Les outils d’administration permettent de créer, lister et observer les partages ; le TP relie ces contrôles à un accès effectif et à une session distante.

## Pour pratiquer et réviser

- [Présentation du TP](../../tp/systemes-clients/module-08/index.md)
- [Énoncé du TP](../../tp/systemes-clients/module-08/enonces.md)
- [Correction du TP](../../tp/systemes-clients/module-08/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-08-le-partage-de-ressources.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-08-le-partage-de-ressources.md)
- [Présentation de la formation](index.md)

## Provenance

- **A — sources originales :** support M08, énoncé et correction TSSR consultés en lecture seule dans Drive.
- **B — structuration pédagogique :** organisation, tableau et formulation explicative de cette page.
