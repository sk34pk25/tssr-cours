# Commandes et gestes — Services transverses Microsoft (RDS/WDS)

Gestes écrits dans le support ou l’énoncé. Rien n’est ajouté.

## Active Directory

```powershell
New-ADOrganizationalUnit _Entreprise
$base = Get-ADOrganizationalUnit -Filter { name -like "_Ent*" }
New-ADOrganizationalUnit Groupes -Path $base
New-ADOrganizationalUnit Utilisateurs -Path $base
New-ADOrganizationalUnit Ordinateurs -Path $base
Get-ADOrganizationalUnit -filter * -SearchBase $base | ft name,DistinguishedName -AutoSize
```

## RDS

- Type de déploiement : Standard.
- Scénario : bureaux basés sur une session.
- Collection sans disques de profil utilisateur.
- Gestion : déconnexion, message, cliché instantané, fermeture de session.

## WDS

- Rôle Services de déploiement Windows sur DEPLOY.
- Dossier de travail `D:\WDS`.
- Réponse à tous les clients.
- Images `boot.wim` puis `install.wim` (Windows 10 Pro).

## MDT

- Console Deployment Workbench, New Deployment Share vers `D:\MDT`.
- Mettre à jour le partage après un changement de Bootstrap.
- Remplacer l’image de démarrage WDS par celle de MDT.
- `SkipAdminPassword` vaut YES dans l’exemple. `AdminPassword`, `UserPassword`, `DomainAdminPassword` et `ProductKey` sont `[masqué]`.

[Cours](../modules/18-services-transverses-microsoft/index.md)
