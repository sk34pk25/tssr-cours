# Énoncés — Module 05 — Les utilisateurs et les groupes

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enoncé du TP - Gestion des utilisateurs et des groupes

### Systèmes Clients Microsoft

#### Gestion des utilisateurs et

#### des groupes

#### TP du Module 05 — Les utilisateurs et les groupes

Au cours de ce TP, vous allez être amené à manipuler les utilisateurs et les groupes. Vous mettrez en place des privilèges d’administration et vous testerez leurs effets. Vous parcourrez les caractéristiques des utilisateurs et des groupes. Vous effectuerez toutes ses manipulations à l’aide de l’interface graphique, mais aussi par l’intermédiaire des shells Microsoft.

#### Durée estimée

#### 1 heure 30 minutes

#### Énoncé

#### Lisez l'ensemble de cet atelier avant de vous lancer dans la pratique

À l'aide de la console de gestion des utilisateurs de la VM Win10-XX,

#### créez les objets avec les paramètres suivants :

#### Créez une procédure relative aux deux points suivants :

  - François possédera un mot de passe qui n'aura pas de date d'expiration.
  - Il fera partie des groupes L_Informatiques et L_Responsables (vous créerez les

groupes en amont). Yann fera partie des mêmes groupes que François.

Créez deux comptes utilisateurs auxquels vous donnerez nom, prénom, login et mot de

#### passe de votre choix. Ils feront partie du groupe L_Collegues

#### Mise en place de privilèges d'administration

François aura la possibilité d'administrer l'ensemble des ressources du poste Win10-XX. Yann pourra consulter les journaux d'évènements et configurer la carte réseau. Vous accorderez à vos collègues la possibilité de sauvegarder votre poste Win10-XX.

Retirez l'un de vos collègues du groupe utilisateurs.

#### Informations concernant les utilisateurs et groupes

En naviguant dans la console graphique des utilisateurs et des groupes, listez les

#### Listez les propriétés d'un groupe

#### À l'aide de la ligne de commande cmd.exe

Afficher les informations du compte utilisateur François.

#### Affichez les membres du groupe administrateurs

Créez un utilisateur Romain, attribuez-lui un mot de passe. Attention, pour des questions de sécurité, le mot de passe que vous taperez ne devra pas être visible à l'écran !

#### Ajoutez Romain au groupe L_Responsables

#### Manipulations supplémentaires avec l'interface graphique de

#### Windows 10

Fermez la session de l'utilisateur en cours.

#### Quels utilisateurs peuvent ouvrir une session sur le poste ?

#### L'un de vos collègues ne peut pas ouvrir de session. Pourquoi ?

Ouvrez une session avec l'utilisateur François puis affichez les profils présents sur le

#### système. Que peut-on observer ?

À l'aide de la ligne de commande, affichez son SID, puis affichez les SID des groupes dont il est membre.

#### À l'aide de PowerShell et de la VM Discovery

Afficher la liste des utilisateurs sur le système. Vous afficherez le nom, le SID et la description de chacun d'eux. Afficher les informations suivantes concernant l'utilisateur james : Nom complet,

#### description, classe d'objets, date de dernière connexion

Ajouter la description Compte générique avec privilèges d'administration à l'utilisateur

#### adm

#### Afficher le nom et le SID des membres du groupe local L_SupportInfo

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
