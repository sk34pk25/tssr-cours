# Correction · TP 02 · Création d’un tenant Microsoft 365

## Document original

[M1 - Solution du TP 2 - Création d'un tenant](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html) · 17 pages.

Les mots de passe, codes de validation et coordonnées nominatives sont neutralisés. Les noms de domaine d’accès des exemples utilisent des domaines réservés à la documentation.

## Aide pédagogique · version optimisée

### Vérifier le résultat

1. Notez le domaine initial, le domaine ajouté et l’état de la vérification TXT.
2. Vérifiez les entrées avec la zone faisant autorité et depuis un résolveur indépendant du DNS local.
3. Comparez MX, CNAME et SPF aux valeurs de l’assistant. Conservez les entrées nécessaires aux autres services.
4. Connectez le compte de test après modification de son UPN, puis vérifiez un envoi et une réception.
5. Si la bascule échoue, comparez le relevé précédent et les réponses DNS et rétablissez uniquement les entrées modifiées selon le plan de retour.

Le nettoyage proposé dans la source porte sur une zone de laboratoire nouvellement créée. Une zone utilisée contient potentiellement des entrées de validation, de messagerie, de web ou de sécurité à conserver. [Valeurs DNS Microsoft 365](https://learn.microsoft.com/microsoft-365/admin/get-help-with-domains/information-for-dns-records).

## Texte du corrigé fourni

### Page 1

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-1)

#### Création d’un tenant Microsoft 365

TP 02 du Module 01 – Les composantes du Cloud et de Microsoft 365

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1 et d’avoir réalisé les TP proposés.

#### Solution

#### Ouverture de votre nom de domaine

- Connectez-vous sur https://www.ovh.com/auth

Si vous possédez déjà un compte OVH, connectez-vous. Dans le cas contraire, créez votre compte et renseignez les informations demandées.

- Dans le bandeau supérieur, cliquez sur Web Cloud.

### Page 2

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-2)

- Cliquez sur Commander, puis sur Noms de domaine
- Recherchez le nom de domaine de votre choix. Attention, certaines extensions comme .fr ou .bzh peuvent être plus onéreuses.

### Page 3

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-3)

Vous pouvez ensuite continuer votre commande. Dans le cadre de ce cours, aucun service complémentaire n’est nécessaire, vous pouvez passer les différentes propositions commerciales et passer à l’étape de paiement.

- Choisissez un mode de paiement et cochez les deux cases afin d’accepter les CGV.

Vous pouvez ensuite retourner sur votre compte ; votre nom de domaine apparaîtra après quelques minutes dans Web Cloud / Noms de domaine maintenant dans la liste. Gardez cet onglet ouvert, nous reviendrons dans la configuration de la zone plus tard.

### Page 4

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-4)

Ouverture de votre tenant Microsoft 365

- Afin d’ouvrir votre tenant, tapez microsoft 365 trial tenant dans votre moteur de recherche et cliquez sur Office 365 Trial Tenant.
- Entrez votre adresse mail. Si besoin, cliquez ensuite sur Configurer le compte.
- Renseignez les informations demandées. Indiquez un numéro de téléphone valide, il

### Page 5

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-5)

sera utilisé dans l’étape de vérification. Vous recevrez un code de validation qu’il faudra entrer en cliquant sur Vérifier.

- Choisissez ensuite le nom de domaine pour votre tenant, il peut être différent du nom de domaine OVH souscrit.

Vous serez ensuite invité à entrer le nom de votre premier compte pour vous connecter à votre tenant, vous pouvez définir admin ou le nom de votre choix et cliquez sur S’inscrire.

- Dans l’écran suivant, nous n’avons pas besoin d’installer Office pour le moment, cliquez sur Continuer.

### Page 6

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-6)

##### Écrans du parcours d’inscription

- « Créez votre identité d’entreprise » propose de créer l’identifiant utilisateur et le mot de passe. L’identifiant de la démonstration est admin. Le mot de passe est fourni par le formateur.
- Les cases proposent de recevoir des informations et de partager les informations avec des partenaires sélectionnés.
- Valider avec « S’inscrire ». Sur « Vous êtes prêt », les choix affichés sont « Installer Office » et « Continuer ».

### Page 7

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-7)

- Ajoutez maintenant le nom de domaine souscrit préalablement chez OVH.
- Nous allons maintenant ajouter les enregistrements TXT afin de confirmer auprès de Microsoft que nous possédons bien ce nom de domaine.
- Basculez maintenant vers votre compte OVH. Vous pouvez tout de suite annuler le renouvellement automatique de votre nom de domaine, vous évitant une mauvaise surprise de facturation à échéance de celui-ci.
- Allez dans Tableau de bord, utilisez les … puis cliquez sur Configurer le renouvellement.

### Page 8

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-8)

- Basculez en Renouvellement manuel, validez et confirmez cette action. Retournez sur le tableau de bord et vérifiez que le renouvellement est bien passé en manuel.
- Accédez maintenant à votre zone DNS publique.
- Afin de clarifier la gestion, nous allons supprimer l’ensemble des enregistrements inutiles proposés par défaut et modifier les enregistrements qui nous intéressent. Nous ne conserverons qu’un enregistrement MX et un enregistrement TXT pour le moment.
- Sur chaque entrée inutile, cliquez sur … puis, Supprimer l’entrée.

### Page 9

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-9)

Voici le résultat attendu :

- Sur l’écran de vérification Microsoft 365, copiez/collez la valeur TXT « MS=.. » proposée par Microsoft.
- Dans votre zone DNS, retournez modifier l’entrée TXT restante :
- Modifiez le TTL à 3600 et collez la valeur « MS=… ».

### Page 10

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-10)

- De retour sur l’ouverture de Tenant, cliquez sur Vérifier. Dans l’écran d’ajout d’utilisateurs, cliquez sur Effectuer plus tard.
- Cliquez sur Continuer.

### Page 11

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-11)

- Développez les différents enregistrements proposés par Microsoft et reportez ces différentes valeurs dans les enregistrements de votre zone DNS.

### Page 12

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-12)

- Renseignez les enregistrements MX, CNAME et SPF laissés précédemment dans la zone DNS OVH comme suit :

### Page 13

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-13)

##### Enregistrements affichés dans la zone DNS

<table><thead><tr><th scope="col">Type</th><th scope="col">Hôte</th><th scope="col">TTL</th><th scope="col">Priorité</th><th scope="col">Cible</th></tr></thead><tbody><tr><td>MX</td><td>Racine du domaine</td><td>3600</td><td>0</td><td>domaine-labo.mail.protection.outlook.com.</td></tr><tr><td>CNAME</td><td>autodiscover</td><td>3600</td><td></td><td>autodiscover.outlook.com.</td></tr></tbody></table>

L’écran avertit que l’édition manuelle des champs MX peut entraîner une perte d’e-mails.

### Page 14

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-14)

- De retour sur l’assistant de création de votre Tenant, cliquez sur Continuer, puis sur Accéder au centre d’administration.

Votre tenant est maintenant créé.

Vous pourrez valider la bonne configuration de votre zone DNS en allant dans Paramètres / Domaines / … Vérifier l’état d’intégrité.

### Page 15

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-15)

Votre tenant est maintenant bien créé :

Vous pouvez décider de conserver votre nom de tenant en tant que nom de domaine ou bien modifier celui-ci avec votre propre nom de domaine.

Cliquez sur Utilisateurs / Utilisateurs actifs / … / Gérer le nom d’utilisateur et le courrier.

### Page 16

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-16)

- Cliquez sur le crayon et modifiez le nom d’utilisateurs. Vous pourrez ensuite cliquer sur Terminer.

Suite à cette modification, vous serez déconnecté de votre tenant, il faudra vous reconnecter avec ce nouvel identifiant.

- Reconnectez-vous avec votre nouvelle adresse et accédez ensuite à l’application

### Page 17

[Page de la transcription](../../../assets/course-sources/2cb2d8eafc303135/transcription-1EdB6rg9Dog8Kp6dAibrm5m2IztOAIZUk.html#page-17)

Outlook et tentez de vous envoyer un email sur une de vos adresses personnelles.

[Revenir à l’énoncé](tp-02.md) · [Tous les ateliers](index.md)
