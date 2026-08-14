# Corrections — Module 08 — Le partage de ressources

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - Partages et sessions distantes

### Systèmes Clients Microsoft

#### Partages et sessions

#### distantes

#### TP du Module 08 — Le partage de ressources

#### Sur votre VM Win10-XX, partagez les ressources suivantes :

- Partagez le dossier Echange disponible sur le lecteur D:

- Vous utilisez les bonnes pratiques Microsoft

- Le partage se nommera CoWorkerShare

- Permettez à vos collègues la possibilité de modifier le contenu du dossier depuis leurs

#### VM

- Vous testerez le bon fonctionnement

#### Clic droit sur le dossier Echange disponible sur le lecteur D:

#### Propriétés

#### Onglet Partage

#### Partage avancé

#### Cochez Partager ce dossier

#### Nom du partage : CoWorkerShare

#### Mises en place des bonnes pratiques Microsoft

#### Autorisations

#### Supprimer Tout le monde

#### Ajouter Utilisateurs authentifiés en Contrôle total

#### Appliquer &gt; OK

Le dossier est maintenant partagé, accessible via le réseau. Pour permettre à nos collègues d'accéder au contenu du dossier via le partage, il faut

#### consulter/modifier les autorisations d'accès NTFS

#### Onglet Sécurité du dossier Echange

S'assurer que le groupe L_Collegues possède les autorisations d'accès en Modification Dans le cas contraire, ajouter le groupe L_Collegues dans la DACL et attribuer les

#### autorisations d'accès en Modification

#### Pour tester le bon fonctionnement

#### Ouvrez une session sur la VM Discovery

#### Ouvrez l'explorateur Windows

Dans la barre de navigation, entrez le chemin UNC correspondant à votre partage

#### \\@ipWin10-XX\CoWorkerShare

Après quelques secondes, vous êtes challengé. Seuls les utilisateurs authentifiés connus de la base SAM de Win10-XX peuvent accéder au

#### contenu du partage

Entrer le nom d'utilisateur d'un de vos utilisateurs membre du groupe L_Collegues ainsi que son mot de passe pour avoir accès au con tenu du dossier partagé CoWorkerShare en Modification. Créer un dossier TestPartage pour vérifier le niveau d'accès en Modification. Fermer la session actuellement ouverte sur Discovery pour regénérer le jeton d'accès.

- Pour faciliter l'usage des logicie ls de l'entreprise, l'équipe informatique décide de

partager le dossier "manuels d'utilisation". Les utilisateurs auront la possibilité d'y déposer des documents texte et des images (comme des captures d'écran) dans le but

d'enrichir une future FAQ. Vous êtes en charge de créer le partage. Vous testerez les accès avec un compte

#### d’utilisateur membre du groupe L_Collegues

Les utilisateurs auront la possibilité d'y déposer des documents texte et des images (comme

#### des captures d'écran) dans le but d'enrichir une future FAQ

Les utilisateurs doivent donc avoir un accès en Modification sur le dossier manuels

#### d'utilisation

Clic droit sur le dossier Manuels d'utilisation disponible sur le volume TOOLS

#### Propriétés

#### Onglet Sécurité

#### Modifier

#### Sélectionner Utilisateurs

#### Cochez Modification

#### Appliquer &gt; OK

#### Ouverture du partage en respectant les bonnes pratiques Microsoft

#### Onglet Partage

#### Partage avancé

#### Cochez Partager ce dossier

#### Nom du partage : manuels d'utilisation

#### Autorisations

#### Supprimer Tout le monde

#### Ajouter Utilisateurs authentifiés en Contrôle total

#### Appliquer &gt; OK

#### Fermer

Le dossier est maintenant partagé, accessible via le réseau.

#### Pour tester le bon fonctionnement

#### Ouvrez une session sur la VM Discovery

#### Ouvrez l'explorateur Windows

Dans la barre de navigation, entrez le chemin UNC correspondant à votre partage

#### \\@ipWin10-XX\Manuels d'utilisation

Après quelques secondes, vous êtes challengé. Seuls les utilisateurs authentifiés connus de la base SAM de Win10-XX peuvent accéder au

#### contenu du partage

Entrer le nom d'utilisateur d'un de vos utilisateurs membre du groupe L_Collegues ainsi que son mot de passe pour avoir accès au contenu du dossier partagé manuels d'utilisation en Modification. Créer un dossier TestManuelsUtil pour vérifier le niveau d'accès en Modification. Fermer la session actuellement ouverte sur Discovery pour regénérer le jeton d'accès.

#### Sur Discovery

- À l'aide de PowerShell et des bonnes cmdlets, lister les partages disponibles sur la VM.

`Get-SMBShare`

#### Ou

`Get-FileShare mais peut-être un peu moins parlant comme cmdlet.`

- Toujours à l'aide de PowerShell, quel dossier de l'arborescence du système est partagé

#### par le nom ADMIN$ ? Qui peut accéder au partage N$ ?

`Get-SMBShare ADMIN$`

Le partage ADMIN$ permet d'accéder au contenu du dossier C:\Windows de Discovery

#### (valeur de la propriété Path). C'est un partage administratif natif

`Get-SMBShareAccess N$`

Les membres du groupe Administrateurs, Opérateurs de sauvegarde et l'entité de sécurité

#### INTERACTIF ont un accès en Contrôle total

#### Bureau à distance

- Vérifiez l'état d'activation de la fonctionnalité Bureau à distance disponible sur votre VM

#### Discovery

- Est-elle active ?

#### Rechercher &gt; sysdm.cpl

#### Onglet Utilisation à distance

Par défaut, la fonctionnalité Bureau à distance n'est pas active.

- Faites en sorte de permettre aux utilisateurs Géraldine et Laurent d'ouvrir une session

#### Bureau à distance sur la VM Discovery

- Testez ces accès via votre VM Win10-XX

#### Sélectionner des utilisateurs…

#### Ajouter…

#### Giannis;Lebron

#### OK

#### Cocher Autoriser les connexions à distance à cet ordinateur

#### Appliquer &gt; OK

#### Sur Win10-XX

#### Rechercher &gt; Connexion Bureau à distance

#### Ordinateur : @ip de Discovery

Lorsque vous êtes challengé, indiquer les login/mot de passe de Géraldine

#### Login : giannis

#### Mot de passe : Pa$$w0rd

#### OK

Lors de la première connexion, un échange de certificat est effectué.

#### Cliquez sur Oui

Le bureau à distance s'ouvre, vous avez accès à la VM Discovery. Pour accéder au bureau, fermez éventuellement la session en cours sur Discovery.

- Une fois connectée, Géraldine peut-elle changer le mot de passe de Laurent ? Adm

peut-il ouvrir une session bureau à distance sur Discovery ? Peut-il changer le mot de

#### passe de Laurent ? Pourquoi ?

#### Rechercher &gt; lusrmgr.msc

#### Nœud Utilisateurs

#### Clic droit sur Lebron

#### Définir le mot de passe…

#### Continuer

#### Insérer puis confirmer un nouveau mot de passe pour Laurent EBRON

#### OK

Géraldine ne peut pas changer le mot de passe de Laurent car seul s les membres du groupe Administrateurs peuvent faire cette action. Fermer la session de Géraldine et ouvrir une nouvelle session à distance avec le compte adm. adm peut ouvrir une session à distance car par défaut, tout utilisateur membre du groupe prédéfini Administrateurs peut ouvrir une session à distance.

#### Tenter de changer le mot de passe de Laurent

C'est possible car l'utilisateur adm fait partie du groupe prédéfini Administrateurs Fermez la session à distance (clic droit sur le menu Démarrer &gt; Arrêter ou se déconnecter &gt;

#### Se déconnecter)
