# Module 02 — Administration Microsoft 365

## Cours optimisé · aide pédagogique

Les explications, schémas de synthèse et contrôles de cette partie accompagnent le support. [Consulter la transcription originale et ses visuels](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html).

## Identité, licence et autorisations

Créez l’identité, renseignez le lieu d’usage, attribuez les services requis et testez sous le compte de l’utilisateur. Un compte sans licence peut exister et s’authentifier. L’accès à un service soumis à licence dépend du plan assigné. Lorsque vous diagnostiquez le TP, séparez erreur d’authentification, absence de licence, service désactivé et blocage d’accès.

| Besoin | Objet à examiner | Contrôle |
| --- | --- | --- |
| Collaborer dans une équipe | Groupe Microsoft 365 | Membres, propriétaires, ressources partagées |
| Distribuer un message | Groupe de distribution | Destinataires, expéditeurs autorisés, modération |
| Donner accès à une ressource | Groupe de sécurité | Membres et autorisation effective |
| Recevoir et répondre depuis une adresse commune | Boîte partagée | Délégations de lecture et d’envoi |

Un groupe de sécurité à extension messagerie combine autorisation et réception de courrier. Identifiez la finalité de l’objet avant de le créer. [Types de groupes dans Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/admin/create-groups/compare-groups?view=o365-worldwide).

## Boîtes, délégations et transport Exchange

**Accès total** ouvre et gère la boîte. **Envoyer en tant que** présente la boîte comme expéditeur. **Envoyer de la part de** présente le délégué et la boîte représentée. Contrôlez séparément l’ouverture et l’envoi avec un compte non administrateur. [Délégations Exchange Online](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-permissions-for-recipients).

Pour une anomalie de flux, identifiez l’adresse, le domaine accepté, la règle appliquée, le connecteur et le résultat de la remise. Une règle de transport assemble des conditions, des actions et des exceptions, et sa position influe sur le traitement. Autodiscover aide le client à découvrir les paramètres. SMTP transporte ou soumet, tandis que POP et IMAP servent à relever la messagerie. Le support traite aussi Outlook, les accès mobiles et les modèles BYOD, CYOD et COPE.

Les commandes MSOnline et la connexion distante Exchange des captures sont historiques. Les opérations d’identité et de licence se transposent dans Microsoft Graph, et l’administration Exchange utilise le module ExchangeOnlineManagement et ses rôles. [Migration vers Microsoft Graph PowerShell](https://learn.microsoft.com/en-us/powershell/microsoftgraph/migration-steps) · [Connexion Exchange Online PowerShell](https://learn.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

## Synchroniser un annuaire local

Préparez les suffixes UPN, les attributs utiles et les unités d’organisation de laboratoire. L’outil appelé Azure AD Connect dans le support correspond aujourd’hui à Microsoft Entra Connect Sync. Le filtrage détermine quels objets locaux entrent dans le périmètre. Pour un changement de filtre, vérifiez les objets qui entrent et sortent avant de valider une exportation. La synchronisation de hachage du mot de passe transmet un hachage dérivé. Le retour de mot de passe vers AD DS fait l’objet d’une fonction et de prérequis distincts. [Filtrage Entra Connect](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering) · [Synchronisation des hachages](https://learn.microsoft.com/en-us/entra/identity/hybrid/how-to-connect-password-hash-synchronization).

### Schéma externe au support

~~~mermaid
flowchart LR
    A["AD DS · UPN et attributs"] --> O["OU incluses"]
    O --> C["Entra Connect Sync"]
    C --> E["Microsoft Entra ID"]
    E --> X["Licences, groupes et services Microsoft 365"]
~~~

Dans le TP, relevez le cycle et son intervalle avec le planificateur. Une synchronisation Delta prend en compte les modifications ordinaires. L’éditeur d’attributs AD permet de vérifier proxyAddresses. Identifiez l’adresse principale grâce à SMTP en majuscules et les alias avec smtp en minuscules, puis contrôlez la réception sur l’alias après le cycle.

## Mini-quiz

1. Quelle délégation permet d’envoyer sous l’identité de la boîte ?
2. Quel attribut faut-il lire pour vérifier un alias de messagerie sur un utilisateur local synchronisé ?
3. L’utilisateur est visible dans Entra ID mais il ne peut pas utiliser Exchange. Que vérifier ?

<details><summary>Réponses</summary>
<ol><li>Envoyer en tant que.</li><li>proxyAddresses, avec le préfixe smtp de l’alias.</li><li>La licence, le plan Exchange, l’état de la boîte et la politique d’accès.</li></ol>
</details>


## Repères dans le support

| Pages | Sujet |
| --- | --- |
| [1–7](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-1) | Utilisateurs et groupes |
| [8–10](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-8) | Licences |
| [11–18](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-11) | Destinataires et délégations Exchange |
| [19–24](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-19) | Groupes, transport et administration Exchange |
| [25–28](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-25) | Connectivité et fichiers Outlook |
| [29–33](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-29) | Mobiles et gestion des appareils |
| [34–45](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-34) | Azure AD Connect, synchronisation et rôles |

## Contenu du support par page

Les titres, exemples et libellés ci-dessous reprennent la transcription. Les figures isolées sont consultables dans la page correspondante.

### Page 1

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-1)

#### Module 02 – Administration Microsoft 365

#### Objectifs

- Créer et gérer des objets dans la console Microsoft 365
- Gérer des licences Microsoft 365
- Comprendre les connexions clientes
- Synchroniser un annuaire local vers le Cloud

### Page 2

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-2)

#### Groupes et utilisateurs

#### Microsoft 365

#### Groupes et utilisateurs Microsoft 365

#### La console web Microsoft 365

#### L’écran d’accueil

### Page 3

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-3)

#### Groupes et utilisateurs Microsoft 365

#### L’Admin Center

#### Dashboard

#### Groupes et utilisateurs Microsoft 365

#### Les différents types de comptes

- Utilisateur Microsoft 365
- L’utilisateur n’existe que dans Microsoft 365

#### Galettes.lcl

- Un utilisateur synchronisé
- Créé dans un AD DS local
- Géré par un AD DS local
- Mot de passe peut être synchronisé

#### Serveur AD Serveur DNS

#### Azure AD

<table><thead><tr><th scope="col"></th><th scope="col"></th><th scope="col"></th><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

### Page 4

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-4)

#### Groupes et utilisateurs Microsoft 365

#### Les différents types de comptes

Méthode de création • Un par un dans l'Admin Center • Plusieurs utilisateurs avec un fichier .csv • En PowerShell • Synchronisé via Azure AD Connect

#### Groupes et utilisateurs Microsoft 365

#### Création d’un utilisateur O365

Bonne idée de s'envoyer le nouveau compte avec le nouveau mot de passe !

- Choisissez un domaine pour l'adresse mail
- Sélectionnez un emplacement
- Plus vous renseignerez d'informations sur le contact et plus votre gestion sera granulaire
- Vous pouvez :
- Soit laisser O365 générer un mot de passe
- Soit créer votre propre mot de passe

### Page 5

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-5)

#### Groupes et utilisateurs Microsoft 365

#### Création d’un utilisateur O365

- Différents rôles peuvent être attribués à un nouvel utilisateur
- Utilisateur simple
- Administrateur général
- Administrateur personnalisé
- Délégation via les RBAC (Role Based Access Control)

#### Groupes et utilisateurs Microsoft 365

#### Création d’un utilisateur O365

#### Administrateur personnalisé

Une stratégie de délégation doit être bien pensée.

### Page 6

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-6)

#### Groupes et utilisateurs Microsoft 365

#### Se connecter en PowerShell

#### 1. Installer le module nécessaire MSOnline

#### 2. Vérifier que le module est bien installé

#### Groupes et utilisateurs Microsoft 365

#### Se connecter en PowerShell

$acctName="&lt;UPN of the account, such as belindan@domaine-labo-9.example&gt;" $orgName="&lt;for example, litwareinc for locataire-labo.onmicrosoft.example&gt;" #Azure Active Directory Connect-MsolService #SharePoint Online Connect-SPOService -Url https://$locataire-labo.sharepoint.com #Skype for Business Online Import-Module MicrosoftTeams Connect-MicrosoftTeams #Exchange Online Import-Module ExchangeOnlineManagement Connect-ExchangeOnline -UserPrincipalName $acctName -ShowProgress $true #Security &amp; Compliance Center Connect-IPPSSession -UserPrincipalName $acctName #Teams Import-Module MicrosoftTeams Connect-MicrosoftTeams

##### Commandes de connexion affichées

~~~text
Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force
Connect-MsolService
Connect-SPOService -Url "https://locataire-labo.sharepoint.com"
Import-Module MicrosoftTeams
Connect-MicrosoftTeams
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName $acctName -ShowProgress $true
Connect-IPPSSession -UserPrincipalName $acctName
~~~

### Page 7

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-7)

#### Groupes et utilisateurs Microsoft 365

#### Se connecter en PowerShell

#### 3. Se connecter à Microsoft 365

Cette fenêtre s'ouvre. Renseigner nom d'utilisateur : votreprénom@locataire-labo.onmicrosoft.example

#### 4. Vérifier si vous êtes connecté

#### Groupes et utilisateurs Microsoft 365

#### Création d’un utilisateur O365

- Créer un nouvel utilisateur

New-MsolUser -UserPrincipalName jpetit@domaine-labo-4.example -DisplayName Jean Petit -FirstName Jean - LastName Petit -Password fourni par le formateur -ForceChangePassword $true -UsageLocation fr

- Supprimer un utilisateur, il sera gardé dans la corbeille Azure AD pendant 30 jours

Remove-MsolUser –UserPrincipalName "jpetit@domaine-labo-4.example"

- Restaurer un utilisateur de la corbeille

Restore-MsolUser –UserPrincipalName "jpetit@domaine-labo-4.example"

##### Création, suppression et restauration dans la capture

~~~text
New-MsolUser -UserPrincipalName jpetit@example.com -DisplayName "Jean Petit" -FirstName Jean -LastName Petit
Remove-MsolUser -UserPrincipalName "jpetit@example.com"
Restore-MsolUser -UserPrincipalName "jpetit@example.com"
~~~

### Page 8

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-8)

#### Gestion des licences

#### Les fonctionnalités Exchange Online

- Boîtes aux lettres et archivage
- Calendrier
- Visualisation et modification de pièces jointes online
- Dossiers publics
- Stratégie de message et de conformité
- Antivirus et antispam
- Configuration du flux de messagerie
- Gestion d'appareils mobile
- Déploiement hybride
- Outils de migration

### Page 9

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-9)

#### Gestion des licences Les plans Exchange Online

#### M365 Business

#### Fonctionnalité Exchange Online

#### Exchange Online Plan 1

#### Exchange Online Plan 2

#### Basic

#### Standard

#### Premium M365 E3 M365 E5

#### Boîte aux lettres

#### 100 Go + Archivage

#### 50 Go + 50 Go d’archivage

#### 100 Go + Archivage illimité

#### 50 Go + 50 Go d’archivage

#### illimité

#### Idem Business

#### Pack Office Idem Business

#### Premium

#### Moins de sécurité que

#### Ensemble des fonctionnalités

#### Services supplémentaires

#### M365 + VOIP

#### Business Premium

#### inclus

Coût 3,40 € /m 6,70 € /m 4,20 € /m 10,50 € /m 16,90 € /m 31,50 € /m 53,70 € /m

#### Gestion des licences

- Vous pouvez :
- Ajouter une licence
- Remplacer une licence
- Nombre de licences restantes :
- Nombre de licences utilisées
- Nombre d'utilisateurs sans licence

#### Vous devez sélectionner obligatoirement un emplacement !

<table><thead><tr><th scope="col">Fonctionnalité Exchange Online</th><th scope="col">Exchange Online Plan 1</th><th scope="col">Exchange Online Plan 2</th><th scope="col">M365 Business Basic</th><th scope="col">M365 Business Standard</th><th scope="col">M365 Business Premium</th><th scope="col">M365 E3</th><th scope="col">M365 E5</th></tr></thead><tbody><tr><td>Boîteaux lettres</td><td>50 Go + 50 Go d’archivage</td><td>100 Go + Archivage illimité</td><td>50 Go + 50 Go d’archivage</td><td>50 Go + 50 Go d’archivage</td><td>50 Go + 50 Go d’archivage</td><td>100 Go + Archivage illimité</td><td>100 Go + Archivage illimité</td></tr><tr><td>Pack Office</td><td></td><td></td><td></td><td></td><td></td><td>Idem Business Premium</td><td>Idem Business Premium</td></tr><tr><td>Services supplémentaires</td><td></td><td></td><td></td><td></td><td></td><td>Moins de sécurité que Business Premium</td><td>Ensemble des fonctionnalités M365 + VOIP inclus</td></tr><tr><td>Coût</td><td>3,40 € /m</td><td>6,70 € /m</td><td>4,20 € /m</td><td>10,50 € /m</td><td>16,90 € /m</td><td>31,50 € /m</td><td>53,70 € /m</td></tr></tbody></table>

### Page 10

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-10)

#### Gestion des licences

#### La gestion Exchange Online

- Vous pouvez gérer Exchange Online
- Dans le menu Centres d'administration / Exchange Online
- En PowerShell
- Pour vous connecter en PowerShell à Exchange Online

Find-module ExchangeOnlineManagement | install-module Connect-ExchangeOnline

#### Gestion des licences

- Vérifier son nombre de licences totales et consommées

L’accountSkuId est nécessaire pour toutes les manipulations de licences.

- Assigner une licence à un utilisateur

Set-MsolUserLicense –UserPrincipalName "jpetit@domaine-labo-4.example" –AddLicenses "locataire-labo:ENTERPRISEPREMIUM"

- Enlever une licence à un utilisateur

Set-MsolUserLicense –UserPrincipalName "jpetit@domaine-labo-4.example" –RemoveLicenses "locataire-labo:ENTERPRISEPREMIUM"

- Assigner une licence à tous les comptables suisses

Get-MsolUser -all -Department Account -UsageLocation CH -UnlicensedUsersOnly | ForEach- Object {Set-MsolUserLicense -UserPrincipalName $PSITEM.UserPrincipalName -AddLicenses " locataire-labo:ENTERPRISEPREMIUM "}

##### Commandes de gestion des licences dans les captures

~~~text
Find-Module ExchangeOnlineManagement | Install-Module
Connect-ExchangeOnline
Get-MsolAccountSku
Set-MsolUserLicense -UserPrincipalName "jpetit@example.com" -AddLicenses "locataire-labo:ENTERPRISEPREMIUM"
Set-MsolUserLicense -UserPrincipalName "jpetit@example.com" -RemoveLicenses "locataire-labo:ENTERPRISEPREMIUM"
Get-MsolUser -All -Department Account -UsageLocation CH -UnlicensedUsersOnly | ForEach-Object { Set-MsolUserLicense -UserPrincipalName $PSItem.UserPrincipalName -AddLicenses "locataire-labo:ENTERPRISEPREMIUM" }
~~~

### Page 11

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-11)

#### Destinataires et permissions

#### Exchange Online

Destinataires et permissions Exchange Online La console Exchange Online ECP (Exchange Control Panel)

### Page 12

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-12)

#### Destinataires et permissions Exchange Online

#### Les différents types de destinataires

#### lucie@domaine-labo-4.example

Boîtes aux lettres Utilisateur • Envoi / Réception de mails • Attribution de stratégies • Gestion des restrictions • Gestion des redirections • Délégations

#### Destinataires et permissions Exchange Online

#### Les fonctionnalités d’une boîte aux lettres

Options de remise • Ces options sont applicables à tous les types de destinataires

### Page 13

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-13)

#### Destinataires et permissions Exchange Online

#### Les fonctionnalités d’une boîte aux lettres

Restriction de taille des messages et de remise de message.

#### Destinataires et permissions Exchange Online

#### Les fonctionnalités d’une boîte aux lettres

#### Les adresses de courrier

- Éviter de les modifier ici

Les Infos courrier apparaissent lors de la création d'un nouveau message

### Page 14

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-14)

#### Destinataires et permissions Exchange Online

#### Les fonctionnalités d’une boîte aux lettres

Gestion IMAP4 et POP3 • Cela veut dire que vous autorisez ou non l'accès à vos utilisateurs par n'importe quel programme prend en charge les protocoles POP et IMAP • Type : Outlook, Outlook Express, Thunderbird, Eudora • Si vous utilisez ces protocoles, vous ne pourrez plus accéder à : • Vos calendriers • La gestion des contacts • … • Dans le cadre de messagerie M365 ou Exchange, peu d’intérêt d’utiliser ces protocoles

#### Destinataires et permissions Exchange Online

#### Les fonctionnalités d’une boîte aux lettres

Quota • Contrairement à un Exchange sur site, la gestion des quotas se fait uniquement en PowerShell

#### Get-Mailbox jpetit@domaine-labo-4.example | fl *quota*

- Paramétrer un avertissement à 49 Gb, un arrêt des envois de courriel à 49,5 Gb et un arrêt des envois/réceptions à 50 Gb

Set-Mailbox –Identity "Jean Petit" –IssueWarningQuota 49gb –ProhibitSendQuota 49.5gb –ProhibitSendReceiveQuota 50gb –UseDatabaseQuotaDefaults $false

##### Lecture et paramétrage des quotas dans la capture

~~~text
Get-Mailbox jpetit@example.com | fl *quota*
Set-Mailbox -Identity "Jean Petit" -IssueWarningQuota 49gb -ProhibitSendQuota 49.5gb -ProhibitSendReceiveQuota 50gb -UseDatabaseQuotaDefaults $false
~~~

### Page 15

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-15)

#### Destinataires et permissions Exchange Online

#### Les fonctionnalités d’une boîte aux lettres

- Durée de rétention des éléments supprimés pour une boîte aux lettres

#### Get-Mailbox jpetit@domaine-labo-4.example | fl *retain*

- Paramétrer la durée de rétention des éléments supprimés pour 30 jours

#### Set-Mailbox –Identity "Jean Petit" –RetainDeletedItemsFor 30

- Lister les boîtes aux lettres supprimées présentes dans la corbeille

#### Get-Mailbox -SoftDeletedMailbox

#### Destinataires et permissions Exchange Online

#### Les différents types de destinataires

- Boîte aux lettres de ressources
- Boîte aux lettres de salle
- Permet de gérer les demandes de réservation d'un emplacement physique

New-Mailbox –Name "votre nom de salle" –DiplayName "votre nom de salle" -Room

- Boîte aux lettres d'équipement
- Permet de gérer les demandes de réservation d'un matériel physique

New-Mailbox –Name "vidéoproj_1" –DiplayName "vidéoproj_1" -equipment

##### Rétention et boîtes de ressources dans les captures

~~~text
Set-Mailbox -Identity "Jean Petit" -RetainDeletedItemsFor 30
Get-Mailbox -SoftDeletedMailbox
New-Mailbox -Name "votre nom de salle" -DisplayName "votre nom de salle" -Room
New-Mailbox -Name "vidéoproj_1" -DisplayName "vidéoproj_1" -Equipment
~~~

### Page 16

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-16)

#### Destinataires et permissions Exchange Online

#### Les différents types de destinataires

#### Boîte aux lettres

#### de ressource Option d'invitation

- Demande de réunion

#### Boîte aux lettres de salle

#### Destinataires et permissions Exchange Online

#### Les différents types de destinataires

- Boîte aux lettres partagées
- Plusieurs utilisateurs peuvent accéder à une Boîte aux lettres partagée
- Gain de licence (attention à bien respecter les CGU…)
- Possibilité de fixer un mot de passe (accès smartphone)
- Attention aux délégations
- « Accès total » permet aux utilisateurs de voir les messages
- « Envoyer en tant que » permet d'envoyer des messages en tant que cette boîte aux lettres
- Attention à la gestion des mails (éléments envoyés)

New-Mailbox –Shared –Name "support" –DiplayName "support" –Alias "support" | Set-Mailbox –GrantSendOnBehalfTo jpetit@domaine-labo-4.example | Add-MailboxPermission –User "Jean Petit" –AccesRights FullAccess –InheritanceType All

##### Exemples de boîte partagée et de délégation dans la capture

~~~text
New-Mailbox -Shared -Name "support" -DisplayName "support" -Alias "support"
Set-Mailbox -GrantSendOnBehalfTo jpetit@example.com
Add-MailboxPermission -User "Jean Petit" -AccessRights FullAccess -InheritanceType All
~~~

Les deux fragments de délégation affichés dans la capture omettent l’identité de la boîte cible.

### Page 17

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-17)

#### Destinataires et permissions Exchange Online

#### Les différents types de destinataires

- Les contacts
- C'est un type de boîte aux lettres avec une adresse de messagerie externe
- Cela permet d'enregistrer, des fournisseurs par exemple, dans les carnets d'adresses
- Les utilisateurs de messagerie
- Tout comme les contacts, ils ont une adresse de messagerie externe
- Contrairement aux contacts, ils peuvent s'authentifier sur une session (par exemple, une société de service)

#### Destinataires et permissions Exchange Online

#### Les fonctionnalités d’une boîte aux lettres

- Conservation pour litige
- Désactivé par défaut
- Liée à un aspect juridique, elle permet de conserver les éléments d'une boîte aux lettres et enregistre les modifications apportées à ces éléments
- Archivage
- Permet d'activer une boîte aux lettres d'archive

### Page 18

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-18)

Destinataires et permissions Exchange Online Résumé : les différents types de destinataires

#### Boîte aux lettres d’utilisateur Fonction

Boîte aux lettres Exchange Online Boîte aux lettres créée avec tout compte Microsoft 365 ayant une licence.

Boîte aux lettres de ressource Boîte aux lettres de salle ou d’équipement qui permet de gérer un calendrier.

Boîte aux lettres partagées Plusieurs utilisateurs peuvent accéder à une Boîte aux lettres (une seule copie du mail).

Boîte aux lettres de contact C'est un type de boîte aux lettres avec une adresse de messagerie externe (ex : pour un fournisseur).

#### Boîte aux lettres d’utilisateurs de messagerie

C'est un type de boîte aux lettres avec une adresse de messagerie externe mais contrairement aux contacts, ils peuvent s'authentifier sur une session (par exemple, une société de service).

#### Boîte aux lettres de groupe Fonction

Liste de distribution ou groupe Outlook Permet d'envoyer des messages à un groupe de destinataires (plusieurs copies du mails).

Liste de distribution dynamique Comme la liste de distribution, permet d'envoyer des messages à un groupe de destinataires (plusieurs copies du mails) mais ce groupe est créé suivant une requête LDAP.

Groupe de sécurité à extension de courrier Il permet d'accorder des accès à des ressources tout en ayant une adresse de messagerie.

#### Les groupes

<table><thead><tr><th scope="col">Boîte aux lettres d’utilisateur</th><th scope="col">Fonction</th></tr></thead><tbody><tr><td>Boîte aux lettres Exchange Online</td><td>Boîte aux lettres créée avec tout compte Microsoft 365 ayant une licence.</td></tr><tr><td>Boîte aux lettres de ressource</td><td>Boîte aux lettres de salle ou d’équipement qui permet de gérer un calendrier.</td></tr><tr><td>Boîte aux lettres partagées</td><td>Plusieurs utilisateurs peuvent accéder à une Boîte aux lettres (une seule copie du mail).</td></tr><tr><td>Boîte aux lettres de contact</td><td>C'est un type de boîte aux lettres avec une adresse de messagerie externe (ex : pour un fournisseur).</td></tr><tr><td>Boîte aux lettres d’utilisateurs de messagerie</td><td>C'est un type de boîte aux lettres avec une adresse de messagerie externe mais contrairement aux contacts, ils peuvent s'authentifier sur une session (par exemple, une société de service).</td></tr></tbody></table>

<table><thead><tr><th scope="col">Boîte aux lettres de groupe</th><th scope="col">Fonction</th></tr></thead><tbody><tr><td>Liste de distribution ou groupe Outlook</td><td>Permet d'envoyer des messages à un groupe de destinataires (plusieurs copies du mails).</td></tr><tr><td>Liste de distribution dynamique</td><td>Comme la liste de distribution, permet d'envoyer des messages à un groupe de destinataires (plusieurs copies du mails) mais ce groupe est créé suivant une requête LDAP.</td></tr><tr><td>Groupe de sécurité à extension de courrier</td><td>Il permet d'accorder des accès à des ressources tout en ayant une adresse de messagerie.</td></tr></tbody></table>

### Page 19

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-19)

#### Gestion des licences

#### Les différents groupes dans Microsoft 365

- Groupe Microsoft 365
- Collaboration entre utilisateurs
- Gestion dynamique possible par une règle LDAP Azure AD
- Boîte de réception Outlook partagée
- Un calendrier partagé
- Une bibliothèque de documents SharePoint
- Un planificateur
- Un bloc-notes OneNote
- Groupe de distribution
- Envoi de mail à un groupe de personnes
- Groupe de sécurité
- Gestion de droit sur des ressources SharePoint

#### Les groupes Les différents types de groupes

#### La création d’un groupe Microsoft 365 créé un site SharePoint

### Page 20

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-20)

#### Les groupes

#### Les différents types de groupes

- Groupe Microsoft 365

#### Les groupes

#### Les différents types de groupes

- Liste de distribution

### Page 21

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-21)

#### Les groupes

#### Les différents types de groupes

- Liste de distribution dynamique

#### Administrer Exchange Online

### Page 22

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-22)

#### Administrer Exchange Online

#### Les domaines acceptés

- Il s'agit d'un domaine dans le sens DNS.
- Il permet aux utilisateurs de ce domaine d'envoyer et recevoir des messages pour ce domaine DNS.
- Il en existe 2 types :
- Faisant autorité : c'est un domaine géré par votre office 365.
- Relais interne : le courrier peut être relayé par vos serveurs, mais vous aurez alors besoin des connecteurs de réception et d'envoi.

#### Administrer Exchange Online

#### Le suivi des messages

- En tant qu'administrateur, il peut vous être demandé d'effectuer un suivi des messages

### Page 23

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-23)

#### Administrer Exchange Online

#### Les règles de transport

- Vous pouvez implémenter des stratégies et de la conformité de messagerie en appliquant des règles de transport aux messages
- Les règles de transport :
- Limitent les flux de messages
- Modifient le contenu des messages en transit
- Empêchent les utilisateurs spécifiés d'échanger des courriers électroniques avec d'autres utilisateurs définis
- Bloquent tout contenu inapproprié entrant ou sortant
- Peuvent contourner les règles de filtrage antispam
- Permettent de suivre ou journaliser les messages échangés avec certaines personnes
- Redirigent les messages entrants ou sortants pour les examiner avant leur remise

#### Administrer Exchange Online

#### Les règles de transport

- Leurs caractéristiques :
- Appliquées par les serveurs de boîte aux lettres
- Appliquer les exigences de conformité
- Leurs configurations :
- Conditions (les attributs, en-têtes, destinataires, expéditeurs ou autres parties du message électronique)
- Actions
- Exceptions

### Page 24

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-24)

#### Administrer Exchange Online

#### Les règles de transport

- Les conditions et exceptions peuvent se chevaucher et ainsi créer des règles que vous ne souhaitez pas (modifier ou supprimer des messages)
- La priorité et l’ordre des règles sont capitaux à la bonne application de vos contraintes de conformité
- La règle en haut de liste est traitée en premier (priorité 0)
- Utiliser les expressions régulières pour vérifier le contenu des messages
- Recherche d’un numéro de téléphone du type « \d\d\d(-|.)\d\d\d\d »

#### Administrer Exchange Online

#### Les connecteurs

- Par défaut, aucun connecteur ne sera à créer, votre messagerie est fonctionnelle.
- Les connecteurs auront de multiples fonctions :
- Faire le lien avec un serveur Exchange On Premise
- Autoriser des sites web, copieurs, logiciels à envoyer de mails à partir de votre entreprise
- D’appliquer un comportement différent en fonction du ou des domaines cibles (application de chiffrement par exemple)
- Accepter du courrier entrant d’une organisation partenaire

### Page 25

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-25)

#### Administrer Exchange Online

#### Les connecteurs

- L’une des utilisations les plus communes est d’utiliser un relais SMTP en interne :

#### Réseau de votre organisation

#### Vos boîtes aux lettres Office 365

Imprimante multifonction ou périphérique (par exemple, numérisation vers la messagerie)

#### Internet

Service Web hébergé localement (par exemple, un service de paie)

Authentification à l’aide des informations d’identification De boîte aux lettres Office 365

Site Web hébergé localement (par exemple, un site intranet des RH)

#### Message envoyé à

#### Smtp.office365.com

#### des destinataires

#### sur le port 587

#### externes

#### Destinataires extérieurs à votre

- Simplifier la configuration des équipements (authentification non obligatoire en interne)
- Limiter le nombre de machines pouvant exploiter le protocole SMTP et ainsi limiter la surface d’attaque
- Établir une configuration sécurisée entre votre relais SMTP interne et Microsoft 365 (pas toujours possible sur les équipements)
- Limiter le nombre d’entrées dans le SPF

#### société

#### Connectivité des clients

#### de messagerie

### Page 26

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-26)

#### Connectivité des clients de messagerie

#### Prérequis pour l’infrastructure réseau

- Ports et protocoles
- Assurez-vous que tous les ports sont bien ouverts

Le port 25 (SMTP) est très souvent bloqué par les FAI (Fournisseur d’Accès Internet).

Protocole Port non sécurisé Port TLS/SSL HTTP 80 443 POP3 110 995 IMAP4 143 993 MAPI / HTTPS 443 ActiveSync / HTTPS 443 SMTP 25 Soumission client SMTP 2525 587 / 465

#### Connectivité des clients de messagerie

#### Quelles connexions choisir ?

- Les connexions IMAP et POP sont de plus en plus rarement utilisées avec Microsoft 365 mais restent possibles.
- Les clients Outlook utiliseront MAPI/HTTPS.
- Les clients mobiles utiliseront ActiveSync.

<table><thead><tr><th scope="col">Protocole</th><th scope="col">Port non sécurisé</th><th scope="col">Port TLS/SSL</th></tr></thead><tbody><tr><td>HTTP</td><td>80</td><td>443</td></tr><tr><td>POP3</td><td>110</td><td>995</td></tr><tr><td>IMAP4</td><td>143</td><td>993</td></tr><tr><td>MAPI / HTTPS</td><td></td><td>443</td></tr><tr><td>ActiveSync / HTTPS</td><td></td><td>443</td></tr><tr><td>SMTP</td><td>25</td><td></td></tr><tr><td>Soumission client SMTP</td><td>2525</td><td>587 / 465</td></tr></tbody></table>

### Page 27

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-27)

#### Connectivité des clients de messagerie

#### Autodiscover

- Découverte automatique du serveur de messagerie
- « Tester la configuration automatique de la messagerie » permet de valider vos paramètres Autodiscover pour la configuration automatique des profils.
- Vous pouvez aussi utiliser le Remote Connectivity Analyser Tool.
- Il doit exister des enregistrements dans votre zone DNS publique pour les clients externes.

#### Pour Outlook

#### Enregistrement DNS Valeur

#### CNAME Alias : Autodiscover Cible : autodiscover.outlook.com

#### En cas d'utilisation de AD

#### Alias : Autodiscover.service.domaine-labo-4.example

#### FS (optionnel)

#### Cible : autodiscover.outlook.com

#### CNAME

#### Connectivité des clients de messagerie

#### Rappel Autodiscover

- Processus de la découverte automatique
- L'utilisateur entre son adresse mail à l'ouverture d'Outlook
- Outlook cherche puis se connecte au serveur de messagerie de l’utilisateur
- Le client envoie son adresse SMTP pour avoir les options de configuration de cette adresse
- Un fichier .xml est téléchargé par le client avec les paramètres du serveur
- Outlook se connecte au serveur Exchange Online dans Office 365 et peut recevoir ses mails

#### SMTP

#### Internet

#### web.xml

#### Micheline@domaine-labo-1.example MAPI/HTTPS

#### Serveur de messagerie de Micheline

<table><thead><tr><th scope="col">Enregistrement DNS</th><th scope="col">Valeur</th></tr></thead><tbody><tr><td>CNAME</td><td>Alias : Autodiscover Cible : autodiscover.outlook.com</td></tr><tr><td>En cas d'utilisation de AD FS (optionnel) CNAME</td><td>Alias : Autodiscover.service.domaine-labo-4.example Cible : autodiscover.outlook.com</td></tr></tbody></table>

<table><thead><tr><th scope="col">Micheline@domaine-labo-1.example</th><th scope="col"></th></tr></thead><tbody><tr><td></td><td>Micheline@domaine-labo-1.example</td></tr></tbody></table>

### Page 28

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-28)

#### Connectivité des clients de messagerie

#### Les fichiers Outlook .pst, .ost et spscoll.dat

- .pst « Personal Storage Table » : fichier contenant les informations pour un compte POP3 par exemple.
- .ost « Offline Storage Table » : fichier contenant vos données lorsque vous êtes hors connexion pour les comptes IMAP4 et Exchange.
- .nst est l’extension des fichiers GST « Group Storage Table » : fichier contenant les conversations de groupe.
- spscoll.dat « Outlook Social Connector » : fichier qui contient les adresses mail suggérées lors de l’écriture d’une adresse (ouverture possible avec notepad).

#### Connectivité des clients de messagerie

#### Réparer les fichiers .pst, .nst et .ost

- Utilisation de l’outil natif au système pour les .pst : scanpst.exe
- Supprimer le .ost afin qu’il soit régénéré
- Utilisation d’outil tiers comme :

### Page 29

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-29)

#### Gestion des mobiles

#### EMM (Enterprise Managing Mobile)

- Gestion des appareils mobiles de l’entreprise
- Représente une suite de service qui permet de gérer les appareils mobiles et la sécurité des données
- Différents acteurs du marché :

### Page 30

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-30)

#### Gestion des mobiles

#### Managing Mobile Devices

- MDM
- Ce service représente 16,29 milliards de dollars de CA en 2020.
- Module de gestion des appareils mobiles.
- Mobile
- Tablette
- Smartphone
- Permet de gérer :
- Les applications
- Le réseau
- Les données
- La sécurité

#### Gestion des mobiles

#### BYOD, CYOD et COPE

- BYOD (Bring Your Own Device)
- Les utilisateurs peuvent utiliser les matériels personnels pour le travail.
- Permet une meilleure productivité puisqu’ils connaissent déjà le fonctionnement.
- Diminution des coûts pour l’entreprise (possibilité de prise en charge de tout ou partie des coûts d’achat et de maintenance).
- CYOD (Choose Your Own Device)
- Les utilisateurs peuvent choisir un modèle parmi une liste préétablie par l’entreprise.
- Permet d’éviter un parc de matériels trop hétérogène.
- COPE (Corporate Owned Personally Enabled)
- Les utilisateurs utilisent le matériel choisi par l’entreprise, mais ils peuvent l’utiliser à des fins personnelles.
- Ils peuvent installer les applications qu’ils veulent, mais la gestion reste à l’entreprise.

### Page 31

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-31)

#### Gestion des mobiles

#### Managing Mobile Devices dans Microsoft 365

- MDM pour Microsoft 365 permet de gérer des appareils mobiles.
- Windows phone
- Android
- iPhone et iPad
- Pour une gestion avancée des appareils mobiles pour un domaine personnalisé, des enregistrements DNS sont nécessaires.

#### Enregistrement DNS Valeur

CNAME Hôte : EnterpriseEnrollment Adresse : EnterpriseEnrollment.manage.microsoft.com

CNAME Hôte : EnterpriseRegistration Adresse : EnterpriseRegistration.windows.net

#### Gestion des mobiles

#### Managing Mobile Devices dans Microsoft 365

- Activer la gestion mobile

https://admin.microsoft.com/EAdmin/Device/IntuneInventory.aspx

<table><thead><tr><th scope="col">Enregistrement DNS</th><th scope="col">Valeur</th></tr></thead><tbody><tr><td>CNAME</td><td>Hôte : EnterpriseEnrollment Adresse : EnterpriseEnrollment.manage.microsoft.com</td></tr><tr><td>CNAME</td><td>Hôte : EnterpriseRegistration Adresse : EnterpriseRegistration.windows.net</td></tr></tbody></table>

### Page 32

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-32)

#### Gestion des mobiles

#### Managing Mobile Devices

- Une fois activé, vous pouvez créer une stratégie

#### Gestion des mobiles

#### Managing Mobile Devices

- Options de stratégie
- Empêcher les mots de passe simples
- Longueur minimale de mot de passe
- Nombre d'échecs avant effacement de l'appareil
- Temps d'inactivité avant verrouillage
- Expiration du mot de passe et historique
- Exiger le chiffrement de l'appareil
- Bloquer ou autoriser l'accès à un appareil

### Page 33

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-33)

#### Gestion des mobiles

#### Managing Mobile Devices

- Options de stratégie
- Bloquer la synchronisation de photos
- Bloquer la capture d'écran
- Bloquer ou gérer l'accès au magasin d'application
- Bloquer la connexion au stockage amovible

#### Gestion des mobiles

#### Managing Mobile Devices

- Appliquez la stratégie au groupe de sécurité

### Page 34

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-34)

#### Azure AD

#### Présentation

- C'est un service cloud de gestion des identités et des annuaires
- Il est utilisé par Microsoft 365 pour identifier les utilisateurs
- Vous pourrez :
- Gérer des utilisateurs
- Gérer des appareils
- Vous connecter à un domaine Active Directory local

### Page 35

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-35)

#### Azure AD

#### Authentification

- Indépendant de votre Active Directory local
- Nécessite 2 mots de passe gérés dans 2 annuaires différents :
- 1 compte Active directory local
- 1 compte Azure AD dans Office 365

#### Galettes.lcl

#### Serveur AD Serveur DNS

#### Azure AD

#### Azure AD Connect

- Azure AD Connect va permettre de faire une synchronisation entre Microsoft 365 et votre AD DS On-Premise
- Tous les attributs utilisateurs, groupes ou contacts modifiés, désactivés ou supprimés dans votre AD sur site seront modifiés dans Microsoft 365
- Vous pouvez filtrer sur votre forêt, un domaine, une OU, un attribut…

<table><thead><tr><th scope="col"></th><th scope="col"></th><th scope="col"></th><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

### Page 36

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-36)

#### Azure AD Azure AD Connect

Après avoir installé Azure AD Connect, les utilisateurs de votre AD local

sont synchronisés avec Azure AD dans le cloud.

#### Serveur AD Serveur DNS

#### Azure AD

#### Connect

#### Azure AD

#### Galettes.lcl

#### Azure AD Authentification Cloud avec mot de passe hashé

Azure AD Connect récupère les mots de passe hashés puis les envoie dans Azure AD en SHA256 afin de les synchroniser. Un utilisateur peut ainsi s’identifier dans le cloud avec son mot de passe AD local

Avec la méthode d’authentification Cloud, la synchronisation ne se fait que de l’AD local vers Azure AD Office 365.

#### Serveur AD Serveur DNS

#### Azure AD

#### Connect

#### Mot de passe hashé en SHA256

#### Azure AD

#### Galettes.lcl

<table><thead><tr><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody></table>

<table><thead><tr><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody></table>

### Page 37

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-37)

#### Azure AD Azure AD Writeback (réécriture du mot de passe)

Avec Azure Ad Writeback, la synchronisation se fait dans les deux sens.

Nécessite Azure AD premium P1 ou Business Premium.

#### Serveur AD Serveur DNS

#### Azure AD

#### Connect

#### Mot de passe hashé en SHA256

#### Azure AD

#### Galettes.lcl

#### Azure AD

#### Azure AD Connect

- La synchronisation entre votre Office 365 et votre AD DS se fait toutes les 30 minutes par défaut

<table><thead><tr><th scope="col"></th><th scope="col"></th><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table>

##### Planificateur affiché dans PowerShell

~~~text
Import-Module ADSync
Get-ADSyncScheduler

AllowedSyncCycleInterval          : 00:30:00
CurrentlyEffectiveSyncCycleInterval : 00:30:00
NextSyncCyclePolicyType           : Delta
~~~

### Page 38

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-38)

#### Azure AD

#### Azure AD Connect

#### 1. Créez un nouveau suffixe UPN dans votre Active Directory

2. Puis remplacez le suffixe UPN pour chaque utilisateur dans votre AD DS

#### Azure AD

#### Azure AD Connect

3. Créez un compte de service pour la synchronisation • Il est indispensable de dédier un compte à la synchronisation AD, comme pour tout service. • L’utilisation de comptes génériques ou des comptes administrateur est à bannir des pratiques

- Limite la possibilité de réinitialisation de mots de passe (impacts larges et souvent mal maîtrisés qui entraîneront des interruptions de service)
- Permet d’avoir un mot de passe dédié par service et donc de renforcer la sécurité : un compte compromis ne donnera pas accès à l’ensemble des services de l’entreprise
- Pour une délégation fine, référez-vous à cet article :

https://docs.microsoft.com/fr-fr/azure/active-directory/hybrid/reference-connect-accounts-permissions

### Page 39

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-39)

#### Azure AD

#### Azure AD Connect

#### 4. Utilisez l’assistant d’installation

#### 5. Utilisez l'utilisateur créé avec votre tenant

6. Utilisez un compte de service administrateur de l’entreprise

#### Azure AD Azure AD Connect

#### Début de la synchronisation

#### Azure AD vérifie si votre domaine est routable sur internet

### Page 40

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-40)

#### Azure AD

#### Azure AD Connect

- Vérifiez dans votre Admin Center que vos utilisateurs sont bien synchronisés
- Attention, vos utilisateurs n'ont pas encore de licences assignées

#### Azure AD

#### Azure AD Connect

- Des outils de gestion sont mis à votre disposition dans les applications du serveur sur lequel vous avez installé AzureADConnect.msi
- Azure AD Connect
- Relancer la configuration
- Synchronization Rules Editor
- Gérer les règles de synchronisation
- Synchronization Service
- Vérifier l'état de votre synchronisation
- Synchronization Service Web
- Lancer la console Web Service Configuration Tool

### Page 41

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-41)

#### Azure AD

#### Synchronization Service Manager

- Opérations
- Vous pouvez voir le statut de vos dernières synchronisations

#### Azure AD

#### Synchronization Rules Editor

- Cette console permet de créer des règles de synchronisation spécifiques
- Vous pouvez modifier ou créer de nouvelles règles
- Attention lorsque vous modifiez les règles par défaut

### Page 42

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-42)

#### Azure AD

#### Forcer une synchronisation AD Connect

- Lancer la réplication initiale

#### Start-ADSyncSyncCycle -PolicyType Initial

- Lancer une réplication différentielle

#### Start-ADSyncSyncCycle -PolicyType Delta

#### RBAC

##### Commandes de synchronisation affichées

~~~text
Start-ADSyncSyncCycle -PolicyType Initial
Start-ADSyncSyncCycle -PolicyType Delta
~~~

### Page 43

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-43)

#### RBAC

#### Délégation de privilèges

- Pour une gestion fine de l’attribution de droits d’administration Exchange, il existe une console nommée RBAC (Role Based Access Control)
- Basé sur des rôles prédéfinis, vous pourrez attribuer à des utilisateurs ou techniciens des privilèges pour administrer la partie Exchange Online de Microsoft 365
- L’affectation de permissions devra se faire au travers de comptes administrateurs spécifiques et avec le principe du privilège minimum

Gestion des licences Les différents rôles administrateur Microsoft 365

#### Nom dans l'admin center de Office365

#### Nom Dans PowerShell Rôle

#### Administrateur général Company administrator

Il a accès à toutes les fonctionnalités. Celui qui a acheté Microsoft 365 a ce rôle par défaut. Ne donnez pas ce rôle à tout le monde.

#### Administrateur de

#### facturation

#### Billing administrator

Il effectue les achats, gère les abonnements et les tickets support. Il surveille l'état des services.

#### Administrateur de mot

#### de passe

#### Helpdesk administrator

Il réinitialise les mots de passe. Il gère les tickets support et surveille l'état des services.

#### Administrateur de

#### Service support

Il gère les tickets support et surveille l'état des services.

#### service

#### administrator

#### Administrateur de gestion des utilisateurs

#### User account administrator

Il créé et supprime des utilisateurs et des groupes, réinitialise les mots de passe, gère les tickets support et surveille l'état des services.

<table><thead><tr><th scope="col">Nom dans l'admin center de Office365</th><th scope="col">Nom Dans PowerShell</th><th scope="col">Rôle</th></tr></thead><tbody><tr><td>Administrateur général</td><td>Company administrator</td><td>Il a accès à toutes les fonctionnalités. Celui qui a achetéMicrosoft 365 a ce rôle par défaut. Ne donnez pas ce rôle à tout le monde.</td></tr><tr><td>Administrateur de facturation</td><td>Billing administrator</td><td>Il effectue les achats, gère les abonnements et les tickets support. Il surveille l'état des services.</td></tr><tr><td>Administrateur de mot de passe</td><td>Helpdesk administrator</td><td>Il réinitialise les mots de passe. Il gère les ticketssupport et surveille l'état des services.</td></tr><tr><td>Administrateur de service</td><td>Service support administrator</td><td>Il gère les ticketssupport et surveille l'état des services.</td></tr><tr><td>Administrateur de gestion des utilisateurs</td><td>User account administrator</td><td>Il créé et supprime des utilisateurset des groupes, réinitialise les mots de passe, gère les ticketssupport et surveille l'état des services.</td></tr></tbody></table>

### Page 44

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-44)

#### Gestion des licences

#### Les différents rôles administrateur Microsoft 365

#### Quelques commandes PowerShell

#### Quels sont les rôles

#### Get-MsolRole

#### Quels sont les rôles assignés à un utilisateur

#### Get-MsolUserRole

#### Add-MsolRoleMember

#### Ajouter des membres à un rôle

#### remove- MsolRoleMember

#### Supprimer des membres à un rôle

#### RBAC

#### Délégation de privilèges

- Chaque rôle possède une liste d’actions

### Page 45

[Page de la transcription](../../assets/course-sources/2d6cbe49ac253b8c/transcription-1D_WQ8CSn6GRFx1z-cJiwJT2TLAV6_Y4y.html#page-45)

#### RBAC

#### Rôles personnalisés

#### 2

- Créez vos propres rôles

#### 1

#### 3

#### 4

#### 5

## Travaux pratiques et révisions

- [Ateliers et corrections](../../tp/14-messagerie-cloud/module-02/index.md)
- [Fiche de révision](../../revision/14-messagerie-cloud/module-02.md)
- [Kahoot du module](../../kahoot/14-messagerie-cloud-module-02.md)
- [Tous les modules](index.md)
