# Correction · TP 02 · Synchronisation avec Azure AD Connect

## Document original

[M2 - Solution du TP 2 - Azure AD Connect](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html) · 19 pages.

Les mots de passe, codes de validation et coordonnées nominatives sont neutralisés. Les noms de domaine d’accès des exemples utilisent des domaines réservés à la documentation.

## Aide pédagogique · version optimisée

### Suivre le périmètre et diagnostiquer

L’énoncé demande d’abord l’installation express. La solution utilise Personnaliser pour sélectionner les OU et les choix de compte. Conservez ces deux parcours dans votre relevé. Vérifiez les prérequis, les rôles de configuration et les droits du connecteur avant le test. Les écrans historiques montrent un compte Administrateur général dans le cloud et un compte Administrateur de l’entreprise dans AD. Les rôles actuels dépendent du mode choisi, notamment Administrateur d’identité hybride pour Entra et un compte de connecteur AD DS aux droits adaptés. [Comptes et permissions d’Entra Connect](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/reference-connect-accounts-permissions).

Sur le serveur de synchronisation du labo, les commandes suivantes permettent de relever l’état puis de demander un cycle Delta dans le scénario.

~~~powershell
Import-Module ADSync
Get-ADSyncScheduler
Start-ADSyncSyncCycle -PolicyType Delta
~~~

Comparez le statut de l’import et de l’export avec le résultat côté tenant. Vérifiez le groupe GG_ServiceIT puis l’ajout de user1. Pour l’alias, contrôlez la valeur locale avant et après, la remontée côté cloud et un message adressé à l’alias. Une modification du filtrage peut sortir du périmètre des objets existants. Vérifiez les objets concernés avant l’export. [Filtrage des objets synchronisés](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-sync-configure-filtering).

## Texte du corrigé fourni

### Page 1

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-1)

#### Azure AD

TP 02 du Module 02 – Administration Microsoft 365

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 et 2 et d’avoir réalisé les TP proposés.

#### Solution

Il faut maintenant préparer l’Active Directory ; une liste d’étapes sera à effectuer :

1. Ajouter un suffixe DNS.
2. Remapper le suffixe DNS des utilisateurs existants (attention aux impacts sur les logins utilisateurs selon le mode de connexion).
3. Renseigner l’adresse mail dans les comptes utilisateurs.
4. Créer une OU spécifique pour le compte de service et créer un compte de service administrateur de l’entreprise pour la synchronisation AD.
5. Créer un compte Microsoft 365 administrateur général.

### Page 2

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-2)

- Ouvrez la console Domaines et approbations Active Directory
- Sur Domaines et approbations, effectuez un clic droit / Propriétés et ajoutez le nom de domaine public utilisé dans votre tenant Microsoft 365 et cliquez sur Ajouter puis OK.
- Ouvrez la console Utilisateurs et ordinateurs Active Directory.
- Sélectionnez les utilisateurs qui seront à synchroniser et effectuez un clic droit / Propriétés. Dans l’onglet compte, cochez la case Suffixe UPN et sélectionnez le suffixe UPN que vous venez d’ajouter. Cliquez sur OK.

NB : cette opération peut avoir de forts impacts sur la production si les utilisateurs se connectent avec le format UPN. Assurez-vous de la méthode de connexion avant de réaliser cette action.

### Page 3

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-3)

- Modifiez l’adresse mail des deux comptes :
- Créez une nouvelle OU Comptes de services et créez le compte qui sera utilisé pour la synchronisation AD.

### Page 4

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-4)

- Allez dans les propriétés du compte Active Directory et dans l’onglet Membre de, ajoutez le groupe Administrateurs de l’entreprise.

### Page 5

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-5)

#### Création d’un compte administrateur général dans la console Microsoft 365

- Ajoutez un nouvel utilisateur.
- Renseignez les champs nécessaires et n’affectez pas de licence.

### Page 6

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-6)

- Ajoutez le rôle administrateur général.

##### Écrans du nouvel utilisateur

- Configurer les éléments de base affiche les champs Prénom, Nom complet, Nom d’utilisateur, Domaines et Mot de passe.
- La démonstration crée un utilisateur sans licence de produit, puis lui affecte le rôle Administrateur général.

### Page 7

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-7)

#### Installation d’Azure AD Connect

- Dans votre console Microsoft 365, allez dans Paramètres / Paramètres de l’organisation et cherchez Synchronisation d’annuaires.

### Page 8

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-8)

- Téléchargez ensuite l’outil Azure AD Connect.
- Exécutez le fichier MSI téléchargé précédemment.

### Page 9

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-9)

- Cliquez sur Personnaliser.
- Cochez Utiliser un compte de service existant et entrez le compte administrateur de l’entreprise créé précédemment (AD). Cliquez sur Installer.

### Page 10

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-10)

- Cochez Synchronisation de hachage du mot de passe et cliquez sur Suivant.
- Entrez le compte administrateur général créé précédemment (Compte Azure).

### Page 11

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-11)

- Cliquez sur Ajout d’un domaine.
- Laissez Créer un compte AD coché et entrez les identifiants du compte de service et

### Page 12

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-12)

entrez à nouveau les identifiants du compte administrateur de l’entreprise créé précédemment (AD).

- Cliquez sur Suivant.

### Page 13

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-13)

- Laissez l’UPN comme attribut à utiliser comme nom d’utilisateur AD, cochez Continuer sans faire correspondre tous les suffixes UPN à des domaines vérifiés et cliquez sur Suivant.
- Filtrez les Unités d’organisation en cochant Synchroniser les domaines et les unités

### Page 14

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-14)

d’organisation sélectionnés, cochez uniquement les utilisateurs et les groupes. Ces OU nous seront nécessaires pour la suite de ce cours.

- Cliquez sur Suivant.

##### Choix affichés pour les unités d’organisation

- « Synchroniser les domaines et les unités d’organisation sélectionnés » et les conteneurs Utilisateurs et Groupes.
- L’assistant poursuit avec l’identification unique des utilisateurs et l’attribut source utilisé pour les rapprocher.

### Page 15

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-15)

- Cliquez sur Suivant.
- Cliquez sur Suivant puis Installer.

### Page 16

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-16)

- Dans un contexte de production, pensez à activer la corbeille Active Directory.
- Dans la console Microsoft 365, notez l’apparition des deux utilisateurs créés précédemment et affectez-leur une licence.

### Page 17

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-17)

- Tentez ensuite de vous connecter avec user1 et user2 et vérifiez qu’ils accèdent bien aux services Microsoft 365.
- Forcer la synchronisation AD Connect.

Import-module "C:\Program Files\Microsoft Azure AD Sync\Bin\ADSync\ADSync"

- Installer le module PowerShell AzureAD

Install-Module AzureAD

- Ajoutez des groupes de sécurité dans l’unité d’organisation créée précédemment
- Créez un groupe de sécurité que vous nommerez GG_ServiceIT

### Page 18

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-18)

- Lancez la commande

Start-ADSyncSyncCycle Delta

### Page 19

[Page de la transcription](../../../assets/course-sources/b0ef5fef8cee558e/transcription-1LpKVUBTMLiB-W1wEAUDHgEs_-hjOvStg.html#page-19)

- Patientez quelques secondes, le groupe de sécurité va remonter dans la liste des groupes de la console Microsoft 365.
- Ajoutez par la suite user1 dans le groupe GG_ServiceIT et relancez une synchronisation.
- Ajoutez un alias à la boîte mail.
- Faites un clic droit / Propriétés sur l’utilisateur 1, allez dans l’éditeur d’attributs puis allez à la valeur proxyAddresses.
- Entrez l’adresse principale avec SMTP : et les secondaires avec smtp :
- Forcez une synchronisation et vérifiez le bon fonctionnement.

[Revenir à l’énoncé](tp-02.md) · [Tous les ateliers](index.md)
