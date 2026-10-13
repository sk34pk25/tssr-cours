# Fiche de révision — Module 08 — Le partage de ressources

## À retenir

- Un partage donne accès à une ressource hébergée sur le réseau.
- Les ressources citées par le support sont notamment les dossiers, arborescences, volumes et imprimantes.
- Créer un partage demande des droits administratifs ; y accéder demande une authentification.
- L’accès est contrôlé au niveau du partage puis au niveau NTFS.
- Les niveaux de partage présentés sont Lecture, Modifier et Contrôle total.

## Accéder et administrer

| Action | Outils du support |
|---|---|
| Accès ponctuel | Explorateur et chemin UNC `\\serveur\partage` |
| Lecteur durable | Connecter un lecteur réseau |
| Ligne de commande | `net use`, `net view`, `net share` |
| PowerShell | `New-SmbMapping`, `New-SmbShare`, `Get-SmbShare`, `Get-SmbShareAccess` |
| Observer les sessions | `fsmgmt.msc` |

## Bureau à distance

- Le Bureau à distance permet une session sur un poste cible avec un compte valide et des privilèges adaptés.
- Le support présente l’outil **Connexion Bureau à distance**, `mstsc`, l’authentification standard et NLA.
- RDP utilise le port 3389 dans le support.
- Sur le poste cible, vérifiez l’état de la fonctionnalité, les utilisateurs autorisés et le résultat d’une connexion de test.

## Contrôles issus du TP

1. Vérifier la communication entre les deux VM du laboratoire.
2. Vérifier séparément les autorisations du partage et les droits NTFS.
3. Tester l’accès avec le compte concerné et l’action demandée.
4. Si le scénario le demande, fermer puis rouvrir la session pour régénérer le jeton d’accès.
5. Pour la session distante, contrôler la configuration, les utilisateurs autorisés et l’ouverture réelle de la session.

Les chemins, comptes, adresses et résultats du TP sont des valeurs de laboratoire. Utilisez les identifiants fournis par le formateur et ne les recopiez pas.

Pour approfondir : [cours](../../modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources.md) · [TP](../../tp/systemes-clients/module-08/index.md) · [Kahoot](../../kahoot/02-systemes-clients-microsoft-08-le-partage-de-ressources.md).

## Provenance

- **A — sources originales :** support, énoncé et correction M08 TSSR.
- **B — structuration pédagogique :** organisation et formulation de cette fiche.
