# Énoncés — Module 08 — Le partage de ressources

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enonc‚ du TP - Partages et sessions distantes

### Systèmes Clients Microsoft

#### Partages et sessions

#### distantes

#### TP du Module 08 — Le partage de ressources

Lors de ce TP, vous serez amené à partager des dossiers de votre VM Windows 10. Vous tenterez d'y accéder via le réseau depuis votre seconde VM. Vous étudierez la configuration de votre seconde VM et vous ferez en sorte d'y ouvrir une session à distance depuis votre VM Windows 10. Mais avant tout, assurez-vous d'abord que ces deux VM communiquent bien entre elles.

#### Durée estimée

#### 1 heure

#### Énoncé

#### Lisez l'ensemble de ce TP avant de vous lancer dans la pratique

#### Sur votre VM Win10-XX, partagez les ressources suivantes :

#### Partagez le dossier Echange disponible sur le lecteur D:

#### Vous utilisez les bonnes pratiques Microsoft

#### Le partage se nommera CoWorkerShare

Permettez à vos collègues la possibilité de modifier le contenu du dossier depuis leurs

#### VM

#### Vous testerez le bon fonctionnement

Pour faciliter l'usage des logiciels de l'entreprise, l'équipe informatique décide de partager le dossier " manuels d'utilisation". Les utilisateurs auront la possibilité d'y déposer des documents texte et des images (comme des captures d'écran) dans le

but d'enrichir une future FAQ. Vous êtes en charge de créer le partage. Vous testerez les accès avec un compte d’utilisateur membre du groupe L_Collegues.

#### Sur Discovery

À l'aide de PowerShell et des bonnes cmdlets, lister les partages disponibles sur la VM. Toujours à l'aide de PowerShell, quel dossier de l'arborescence du système est partagé

#### par le nom ADMIN$ ? Qui peut accéder au partage N$ ?

#### Bureau à distance

Vérifiez l'état d'activation de la fonctionnalité Bureau à distance disponible sur votre

#### VM Discovery

#### Est-elle active ?

Faites en sorte de permettre aux utilisateurs Géraldine et Laurent d'ouvrir une session Bureau à distance sur la VM Discovery. Testez ces accès via votre VM Win10-XX. Une fois connectée, Géraldine peut-elle changer le mot de passe de Laurent ? Adm peut-il ouvrir une session bureau à distance sur Discovery ? Peut-il changer le mot de

#### passe de Laurent ? Pourquoi ?

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
