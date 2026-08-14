# Corrections — Module 04 — Exploiter Outlook et savoir le dépanner

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## M4 - Solution du TP 1 - Utilisation d_Outlook

### Microsoft 365 - Outils

#### Utilisation d’Outlook

#### TP du Module 04 — Exploiter Outlook et savoir le dépanner

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 4 et d’avoir réalisé les TP proposés.

En fonction des informations qui vous ont été fournies, connectez-vous à la machine de l’ENI.

- Ouvrez Outlook et connectez -vous avec votre adresse campus-eni.fr :

micheline.d@10durand2020.onmicrosoft.com afin d’utiliser l’autodiscover. Lancez Outlook dans vos applications. Cette fenêtre s’ouvre ; renseignez votre adresse puis cliquez sur connexion. Un code vérification vous est envoyé par SMS. Vérifiez puis cliquez sur terminer. Une fenêtre de connexion permettant d’activer Office doit s’ouvrir ; il suffit de renseigner vos identifiants.

- Connectez-vous à Microsoft 365 avec votre navigateur puis notez le nom de l’appareil

sur lequel est installé votre Office et comparer avec le nom de la machine ENI. Connectez-vous à http:// portal.office.com puis dans Mon compte → Appareil, relevez le nom de l’appareil. Ouvrez une console cmd puis tapez hostname.

- Relevez le lieu de votre dernière connexion et relevez l’adresse IP.

Dans la partie connexion de “Mon compte”, relevez le lieu et l’adresse IP.

- Avec Outlook, testez l’autodiscover par le menu de la zone de notification et notez les

protocoles utilisés et le code HTTP reçu. Application Outlook ouverte, faites CTRL + clic droit sur l’icône Outlook puis teste z la configuration automatique. Renseignez l’adresse mail si ce n’est déjà fait, décochez Utiliser Gessmart et Authentification Guessmart sécurisée puis cliquez sur Tester. Protocoles MAPI HTTP et HTTP.

Le premier est en 401 car l’autodiscover teste plusieurs URL . Le premier code est donc normal. Le deuxième code est 200 ce qui indique un succès.

- Affichez votre « Outlook aujourd’hui ».

Cliquez sur votre boîte mail.

- Ajoutez « Répondre à tous », « Transférer », « Eliminer les éléments supprimés » et

« Nouvelle tâche » à votre ruban. Cliquez sur la flèche vers le bas du ruban et cochez les options demandées puis sur Autres commandes pour ajouter « Nouvelle tâche ».

- Créez une règle de réponse automatique pour les messages en dehors de votre

organisation avec comme te xte : « Je suis actuellement en congés. Je serais de nouveau disponible à partir du (2 jours plus tard) dès 8h00. Testez en envoyant un mail depuis votre mail compus-eni.fr vers votre compte de tenant. Cliquez sur Fichier puis « Réponses automatiques ».

- Créez une règle qui répond à ces critères :

  - À partir du message de retour de la réponse automatique.

  - Contenant des mots spécifiques dans le corps du message « réponse

#### automatique »

  - Le déplacer dans le dossier « réponse congés »

  - L’assigner à la catégorie verte nommée « réponse auto »

  - Nommez votre règle « mon mail perso »

  - Exécuter cette règle sur les messages déjà présents dans Boite de réception

Afin de tester votre règle, vérifiez que le mail reçu de réponse automatique a bien vu cette règle s’appliquer et envoyez -vous un mail avec réponse automatique dans le corps de votre message. Créez un dossier dans votre boîte de réception nommé « réponse congés », renommez la catégorie verte « réponse auto ». Faites un clic droit sur le message reçu de la réponse automatique puis Règle → Créer une règle.

- Ajoutez le complément web Emojis à votre Outlook.

Cliquez sur Fichier puis sur Gérer les compléments. Une fenêtre avec Outlook Online s’ouvre et affiche les compléments disponibles. Installez Emojis, redémarrez Outlook et vérifiez dans un nouveau message.

- Créez une signature pour vos mails (nouveaux messages et réponses) avec :

  - Cordialement,

  - Une ligne vide de séparation

  - Votre nom et votre prénom

  - Votre adresse

Faites de même dans Outlook sur le web. Cliquez sur Fichier → Options → Courrier puis Signatures. Dans Outlook sur le web, cliquez sur Paramètres → Afficher tous les paramètres d’Outlook

- Afficher les 3 volets Calendrier, Contacts et Tâches à droite de la page Outlook.

Dans le menu Affichage → Barre des tâches, cochez les 3 options.

- Afficher les messages en mode conversation pour toute votre boîte aux lettres.

Sélectionnez Boîte de réception puis dans le menu Affichage cliquez sur Afficher en tant que conversation à appliquer à toutes les boîtes aux lettres.

- Créez une réunion Teams avec votre compte campus-eni.fr et une autre adresse mail.

#### Pouvez-vous y accéder avec votre adresse mail ?

Dans le menu calendrier, cliquez sur Nouvelle réunion Teams. Votre compte campus-eni.fr doit pouvoir y accéder.

- Envoyez un courriel vers une autre adresse mail et rappelez-le.

Ouvrez le message dans les éléments envoyés puis Action et enfin Rappeler ce message.

- Affichez le calendrier des jours fériés puis fusionnez-le avec votre calendrier.

Dans le menu Calendrier, affichez les jours fériés puis cliquez sur la flèche afin de fusionner les deux calendriers.

- Créez une tâche qui a commencé lundi et qui finit vendredi que vous appellerez “cours

Office 365”. Mettez-la en priorité haute avec le statut “en cours de réalisation” et à 70% de pourcentage d’achèvement. Dans le menu des tâches, créez une nouvelle tâche avec les indications ci-dessus.

#### Magnifique ?

- Envoyez un message de votre compte campus-eni.fr vers votre tenant et transformez-le

en rendez-vous. Glissez le message vers le menu calendrier.

#### BONUS

- Envoyez-vous un sondage avec Forms :

  - Question : le lever de soleil est-il ?

  - Réponse 1 : beau ?

  - Réponse 2 : de droite ?

Créez un message puis dans Options → Utiliser les boutons de votes → Sondage

D’autres solutions sont possibles pour ce TP. Il n’existe pas une seule façon de faire.

## M4 - Solution du TP 2 - Dépanner Outlook

### Microsoft 365 - Outils

#### Dépanner Outlook

#### TP du Module 04 — Exploiter Outlook et savoir le dépanner

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 4 et d’avoir réalisé les TP proposés.

#### Durée estimée

#### 60 minutes

En fonction des informations qui vous ont été fournies, connectez-vous à la machine de l’ENI.

- Allez à cette URL : https://testconnectivity.microsoft.com afin de tester les accès à votre

Outlook. Ouvrez un navigateur et accédez à l’URL. Sélectionnez Office 365 dans le volet gauche puis Connectivité Outlook.

Le test doit être réussi.

- Activez la journalisation Outlook.

#### Allez dans Fichier → Options → Options avancées

#### Redémarrez Outlook puis allez d ans le répertoire :

C:\utilisateurs\votrenom\AppData\Local\Temp\Journalisation d’Outlook. Ouvrez le fichier avec un NotePad.

- Ouvrez Outlook en mode sans échec. Avez-vous toujours accès aux émojis lors d’envoi

#### de mail ?

Faites un clic droit sur le bouton Windows puis Exécuter : « outlook.exe /safe » Choisissez le profil demandé. Faites un nouveau message et constatez que vous n’avez plus les émojis.

- Faites un test de l’état de la connexion et notez votre MailboxId.

Faites un Ctrl + clic droit sur l’icône Outlook dans la barre de notification.

Dans « Nom du serveur », vous devriez lire votre MailboxId.

- Refaites votre profil Outlook, retrouvez-vous tous vos mails, votre calendrier, vos tâches

#### et les emojis à la création d’un mail ?

Outlook éteint, allez dans le panneau de configuration puis choisissez Mail ( Microsoft Outlook 2016). Cliquez sur Afficher les profils. Supprimez le profil puis appliquez.

Relancez Outlook et nommez le nouveau profil avec votre prénom. L’autodiscover se lance et reconfigure votre Outlook. Tous vos mails, calendriers et tâches sont re-téléchargés. Le mode émojis est installé depuis Outlook sur le web et doit aussi être présent.

- Trouvez l’emplacement du fichier des données.

#### Allez sur Fichier → Informations → Paramètres du compte

- Utilisez l’outil scanpst.exe afin de vérifier l’intégrité de vos fichiers de données.

#### Allez dans le répertoire C:\Programmes\Microsoft Office\root\Office16

#### Lancez l’application SCANPST.EXE puis faites parcourir vers le fichier :

C:\Utilisateurs\votrenom\AppData\Local\Microsoft\Outlook\micheline@10durand2020. onmicrosoft.com — micheline.ost puis réparez.

- Relevez le nombre d’éléments de votre boîte de réception.

Faites un clic droit sur les Propriétés de la boîte de réception puis sur Taille du dossier.

D’autres solutions sont possibles pour ce TP. Il n’existe pas une seule façon de faire.
