# Correction · TP 01 · Utilisateurs et groupes

## Document original

[M2 - Solution du TP 1 - Utilisateurs et groupes](../../../assets/course-sources/5aa0bc1641f5fddd/transcription-1pRrCblXivh0TaW_p6JN-OSvGiDZn8zdu.html) · 4 pages.

Les mots de passe, codes de validation et coordonnées nominatives sont neutralisés. Les noms de domaine d’accès des exemples utilisent des domaines réservés à la documentation.

## Aide pédagogique · version optimisée

### Contrôler les scénarios et les écarts

L’énoncé répète GO_Commercial et utilise GO_Adminstratifs, tandis que l’annexe indique GO_Administratifs. Conservez un groupe par besoin et indiquez le libellé choisi. Le compte Sacha est créé avec un UPN construit sur SachaTouille dans l’exemple de commande et les commandes suivantes emploient Sacha. Relevez l’UPN effectivement créé avant de l’utiliser.

Le corrigé associe « Administrateur de licence » au rôle historique Billing Administrator. Les rôles Administrateur de licences et Administrateur de facturation couvrent des tâches distinctes. Contrôlez la définition du rôle demandé et son résultat sous le compte Oussama. Vérifiez le résultat du test de réinitialisation avec Vishnou sur un compte de test non privilégié. [Référence des rôles Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference).

Le corrigé illustre MSOnline et des plans historiques. Dans un environnement actuel, listez les abonnements et leurs plans présents dans le tenant, puis comparez les plans désactivés avant et après. La connexion à l’identité et l’accès à un service licencié se testent séparément. [Migration MSOnline vers Microsoft Graph PowerShell](https://learn.microsoft.com/en-us/powershell/microsoftgraph/migration-steps).

## Texte du corrigé fourni

### Page 1

[Page de la transcription](../../../assets/course-sources/5aa0bc1641f5fddd/transcription-1pRrCblXivh0TaW_p6JN-OSvGiDZn8zdu.html#page-1)

#### Utilisateurs et groupes

TP 01 du Module 02 – Administration Microsoft 365

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 et 2 et d’avoir réalisé les TP proposés.

#### Solution

#### Objectifs

Créer des utilisateurs et des groupes dans Microsoft 365 suivant l’annexe 1 Prérequis

- Avoir une connexion internet Principales tâches à réaliser

Créez des utilisateurs Microsoft 365 sans affecter de licence.

- Créez un utilisateur Zachary Ramablag avec comme nom de connexion Zachary et comme pays le Canada, fonction Formateur, service Pédagogie.

Notez son mot de passe temporaire.

- Créez un utilisateur Vishnou Lapaix avec comme nom de connexion Vishnou et comme pays les USA, fonction Formateur, service Pédagogie.

Notez son mot de passe temporaire.

- Créez un utilisateur Oussama Lairbon avec comme nom de connexion Oussama et comme pays la France, fonction Cuisinier, service Restauration.

Notez son mot de passe temporaire.

- Créez un utilisateur en PowerShell Sacha Touille avec comme nom de connexion Sacha et comme pays le Japon, fonction Cuisinier, service restauration, comme mot de passe fourni par le formateur et il doit changer son mot de passe à la prochaine connexion.

~~~text
New-MsolUser -UserPrincipalName SachaTouille@domaine-labo-5.example -DisplayName SachaTouille -FirstName Sacha -LastName Touille –department restauration –title cuisinier -Password 'fourni par le formateur' -ForceChangePassword $true -UsageLocation jp
~~~

- Connectez-vous avec cet utilisateur.

Que constatez-vous ? Impossible de se connecter sans licence.

Comment pourriez-vous régler ce problème ? Faites-le.

Il faut lui assigner une licence, soit au travers de la console graphique, soit avec PowerShell.

### Page 2

[Page de la transcription](../../../assets/course-sources/5aa0bc1641f5fddd/transcription-1pRrCblXivh0TaW_p6JN-OSvGiDZn8zdu.html#page-2)

Pour avoir l'info :

~~~text
Get-MsolAccountSku
~~~

~~~text
Get-MsolUser -all -Department restauration -UsageLocation jp -UnlicensedUsersOnly | ForEach-Object {Set-MsolUserLicense -UserPrincipalName $_.userprincipalname -AddLicenses "locataire-labo:ENTERPRISEPREMIUM"}
~~~

- Connectez-vous avec cet utilisateur.

Notez son nouveau mot de passe.

- Créez un utilisateur en PowerShell Lab Eni avec comme nom de connexion labeni et comme pays la France, fonction Administrateur, service Informatique, comme mot de passe fourni par le formateur, lui ajouter le rôle administrateur global.

~~~text
New-MsolUser -UserPrincipalName labeni@domaine-labo-5.example -DisplayName labeni -FirstName lab -LastName eni –department Informatique –title Administrateur -Password 'fourni par le formateur' -UsageLocation fr
~~~

~~~text
Add-MsolRoleMember -RoleName "Company Administrator" -RoleMemberEmailAddress "labeni@domaine-labo-7.example"
~~~

- Changez la fonction de Oussama Lairbon en chef cuisinier

~~~text
Set-MsolUser -UserPrincipalName Oussama@domaine-labo-6.example -title "Chef Cuisinier"
~~~

- Supprimer Vishnou Lapaix.
- Vérifiez qu’il est bien dans les utilisateurs supprimés puis restaurez-le.
- Supprimez Sacha Touille en PowerShell puis restaurez-le en PowerShell.

~~~text
Remove-MsolUser –UserPrincipalName "Sacha@domaine-labo-5.example"
~~~

~~~text
Restore-MsolUser –UserPrincipalName "Sacha@domaine-labo-5.example"
~~~

- Assignez une licence complète à Oussama Lairbon.
- Assignez une licence complète en PowerShell à Zachary Ramablag

~~~text
Set-MsolUserLicense –UserPrincipalName "Zachary@domaine-labo-5.example" –AddLicenses "locataire-labo:ENTERPRISEPREMIUM"
~~~

- En PowerShell assignez une licence à Sacha sans Sway, Power BI, Azure Rights Management.

~~~text
(Get-MsolUser -UserPrincipalName Sacha@domaine-labo-6.example).Licenses.ServiceStatus
~~~

~~~text
SWAY = SWAY, Power BI = BI_AZURE_P2, Azure Managment Right = RMS_S_ENTREPRISE
~~~

~~~text
$LOW = New-MsolLicenseOptions -AccountSkuId "locataire-labo:ENTERPRISEPREMIUM" -disabledplans "SWAY", "BI_AZURE_P2", "RMS_S_ENTERPRISE"
~~~

~~~text
Set-MsolUserlicense -UserPrincipalName Sacha@domaine-labo-6.example -LicenseOptions $LOW
~~~

### Page 3

[Page de la transcription](../../../assets/course-sources/5aa0bc1641f5fddd/transcription-1pRrCblXivh0TaW_p6JN-OSvGiDZn8zdu.html#page-3)

- Assignez une licence à Vishnou Lapaix sans Office Online.
- Vérifiez en vous connectant à son compte.
- Réactivez Office Online pour Vishnou Lapaix.
- Créez les groupes Microsoft 365 GO_Restauration, GO_Commercial, GO_Infirmerie, GO_Informatique, GO_RH, GO_CE, GO_Pedagogie, GO_Moyens_Generaux, GO_Comptabilite, GO_Commercial, GO_Communication, GO_Secretaire, GO_Service_Achats, GO_Adminstratifs et GO_Direction avec une description pour chaque groupe.
- Mettez chaque utilisateur dans son groupe de service et votre compte de tenant dans le service et le groupe informatique et administrateur comme fonction.
- Mettez Vishnou Lapaix membre de Pédagogie, Deration Mo dans le groupe CE , Yves Remord dans le groupe commercial.
- Créez un groupe de sécurité nommé jedemolet avec comme membres : Zachary Ramablag, Vishnou Lapaix, Oussama Lairbon, Sacha Touille.
- Ajoutez le rôle « administrateur de mot de passe » à Vishnou Lapaix.
- Connectez-vous en tant que Vishnou Lapaix et envoyez un mail au groupe Pédagogie.

Vérifiez que vous le recevez bien.

- Restez connecté en tant que Vishnou Lapaix et réinitialisez le mot de passe de Zachary Ramablag.
- Réinitialisez le mot de passe de Oussama Lairbon en PowerShell.

~~~text
Set-MsolUserPassword -UserPrincipalName "oussama@domaine-labo-8.example" -NewPassword 'fourni par le formateur'
~~~

- Ajoutez le rôle « Administrateur de licence » à Oussama Lairbon en PowerShell.

~~~text
Add-MsolRoleMember -RoleName "Billing Administrator" -RoleMemberEmailAddress "oussama@domaine-labo-5.example"
~~~

### Page 4

[Page de la transcription](../../../assets/course-sources/5aa0bc1641f5fddd/transcription-1pRrCblXivh0TaW_p6JN-OSvGiDZn8zdu.html#page-4)

#### Annexe 1

<table><thead><tr><th scope="col">nom</th><th scope="col">Prénom</th><th scope="col">GROUPES</th><th scope="col">login</th><th scope="col">service</th><th scope="col">fonction</th><th scope="col">pays</th></tr></thead><tbody><tr><td>Durand</td><td>Micheline</td><td>GO_Informatique</td><td></td><td>Informatique</td><td>Administrateur</td><td></td></tr><tr><td>Ramablag</td><td>Zachary</td><td>GO_Pédagogie, GDS_Jedemolet</td><td>Zachary</td><td>Pédagogie</td><td>Formateur</td><td>Canada</td></tr><tr><td>Lapaix</td><td>Vishnou</td><td>GO_Pédagogie, GDS_Jedemolet</td><td>Vishnou</td><td>Pédagogie</td><td>Formateur</td><td>USA</td></tr><tr><td>Lairbon</td><td>Oussama</td><td>GO_Restauration, GDS_Jedemolet</td><td>Oussama</td><td>Restauration</td><td>Cuisinier</td><td>France</td></tr><tr><td>Touille</td><td>Sacha</td><td>GO_Restauration, GDS_Jedemolet</td><td>Sacha</td><td>Restauration</td><td>Cuisinier</td><td>Japon</td></tr><tr><td>Eni</td><td>Lab</td><td>GO_Informatique</td><td>labeni</td><td>Informatique</td><td>Administrateur</td><td>France</td></tr><tr><td>Terieur</td><td>Alain</td><td>GO_Moyens_Généraux</td><td>aTerieur</td><td>Moyens Generaux</td><td>Architecte</td><td>France</td></tr><tr><td>Diot</td><td>Kailee</td><td>GO_Commercial</td><td>kDiot</td><td>Commercial</td><td>Commercial</td><td>Japon</td></tr><tr><td>Commandement</td><td>Lydie</td><td>GO_Service_Achats, GO_Direction</td><td>lCommandement</td><td>Achats</td><td>Directrice</td><td>France</td></tr><tr><td>Fonfec</td><td>Sophie</td><td>GO_Direction, GO_Restauration</td><td>sFonfec</td><td>Restauration</td><td>Directrice</td><td>France</td></tr><tr><td>Entrengare</td><td>Micheline</td><td>GO_Pédagogie</td><td>mEntrengare</td><td>Pedagogie</td><td>Formateur</td><td>France</td></tr><tr><td>Femal</td><td>Aicha</td><td>GO_Infirmerie</td><td>aFemal</td><td>Infirmerie</td><td>Infirmiere</td><td>France</td></tr><tr><td>Dorsa</td><td>Elsa</td><td>GO_Administratifs</td><td>eDorsa</td><td>Administratif</td><td>Receptionniste</td><td>France</td></tr><tr><td>Femal</td><td>Usama</td><td>GO_Infirmerie</td><td>uFemal</td><td>Infirmerie</td><td>Responsable</td><td>France</td></tr><tr><td>Vadeboncoeur</td><td>Elie</td><td>GO_RH, GO_secretaire</td><td>eVadeboncoeur</td><td>RH</td><td>Secretaire</td><td>France</td></tr><tr><td>Ateur</td><td>Nordine</td><td>GO_Informatique</td><td>nAteur</td><td>Informatique</td><td>Technicien</td><td>France</td></tr><tr><td>Deration</td><td>Mo</td><td>GO_Communication, GO_CE</td><td>mderation</td><td>Communication</td><td>Community Manager</td><td>France</td></tr><tr><td>Hawk</td><td>Thomas</td><td>GO_Comptabilite, GO_secretaire</td><td>thawk</td><td>Comptabilite</td><td>secretaire</td><td>France</td></tr></tbody></table>

[Revenir à l’énoncé](tp-01.md) · [Tous les ateliers](index.md)
