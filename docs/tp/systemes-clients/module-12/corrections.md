# Corrections — Module 12 — Introduction à la capture et au déploiement d’image

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution Module-12-Atelier15-Capture&Deploy

### Systèmes Clients Microsoft

#### Cloner une VM Windows

#### dans les règles de l'art

#### TP du Module 12 — Introduction à la capture et au déploiement

#### d'image

#### Préparation du poste de référence Win10-XX

- Activez le compte utilisateur Administrateur et fixez-lui un mot de passe. Fermez votre

session actuelle et ouvrez une session avec le compte Administrateur. Assurez -vous d'avoir un snapshot récent disponible avant de faire les prochaines manipulations. Dans le doute, faites-en un. Ouvrez une session avec un compte d'utilisateur membre du groupe prédéfini Administrateurs.

#### Depuis le composant logiciel enfichable Utilisateurs et groupe locaux

#### Nœud Utilisateurs

#### Clic droit sur l'utilisateur Administrateur &gt; Propriétés

#### Décocher Le compte est désactivé

#### Appliquer &gt; OK

L'icône en lien avec l'utilisateur Administrateur a changé. La flèche noire dans un rond blanc a disparu. Cela veut dire que nous pouvons maintenant utiliser ce compte. Mais il faut

#### encore lui fixer un mot de passe pour ouvrir une session locale

Clic droit sur l'utilisateur Administrateur &gt; Définir le mot de passe…

#### Continuer

#### Fixer un mot de passe &gt; OK

#### Une fenêtre apparait : Le mot de passe a été défini &gt; OK

Fermez la session actuelle et ouvrez une nouvelle session sur la VM avec le compte d'utilisateur Administrateur qui est maintenant présent dans la liste des utilisateurs sur l'écran

#### d'accueil

Puisque c'est la première fois que cet utilisateur ouvre une session locale, un profil est créé et il faut terminer sa configuration.

- Supprimez les utilisateurs que vous avez créés lors de l'atelier 08 qui traitait des

utilisateurs et des groupes. Supprimez l'utilisateur que vous ave z créé lors de l'installation de cette VM. Supprimez aussi leurs profils.

#### Commençons par supprimer les profils des utilisateurs

#### Rechercher &gt; sysdm.cpl

#### Onglet Paramètres système avancés

#### Encadré Profil des utilisateurs &gt; bouton Paramètres…

Supprimez les profils pour ne laisser que celui de l'Administrateur et le Profil par défaut

#### Suppression des comptes utilisateurs

#### Composant logiciel enfichable Utilisateurs et groupes locaux

#### Nœud Utilisateur

Supprimer les comptes utilisateurs pnom ainsi que ceux créé lors de l'atelier 8

- Procédez à un sysprep généralisé en mode OOBE suivi d'une extinction de votre

#### machine Win10-XX

  - Si sysprep échoue, consulter les journaux sysprep disponibles dans le dossier

Panther et corriger l(es) erreur(s). Aidez-vous d’Internet le cas échéant

#### Lancez l'explorateur Windows

#### Naviguez jusqu'au répertoire C:\Windows\System32\Sysprep

#### Double clic sur sysprep.exe

#### Mode OOBE

#### Cochez Généraliser

#### Eteindre automatiquement le système à l'issue du Sysprep

En cas d'erreur du sysprep, vous trouverez un fichier de log dans le dossier Panther que vous pouvez ouvrir avec le bloc -note. "Epluchez-le" et aidez vous d'internet pour résoudre les

#### blocages. Plusieurs pistes sont possibles :

https://docs.microsoft.com/fr-fr/troubleshoot/windows-client/deployment/sysprep-fails-

`remove-or-update-store-apps`

#### Création d'un clone de la machine de référence

- Créez un dossier Win10 -XX-Clone dans votre dossier VMs -WorkStation. Utilisez la

#### fonctionnalité de clonage de WorkStation

  - Créez un "Full Clone" de Win10-XX depuis son état actuel

  - Cette nouvelle VM sera hébergée dans le dossier Win10 -XX-Clone créé

#### précédemment

#### Configuration / observation du clone

- Appliquez son dernier snapshot puis allumez la VM Win10-XX

- Allumez la VM Win10 -XX-Clone dès qu'elle est disponible et procédez à sa

#### configuration initiale

- Remplissez les deux tableaux ci-dessous

#### Conséquences du clonage WorkStation

#### Win10-XX Win10-XX-Clone

#### Nb de disques durs

#### Nb de volumes

#### 6 en comptant le lecteur

#### de DVD

#### 6 en comptant le lecteur

#### de DVD

#### Carte réseau « bridgée » ?

#### Oui

#### Nb de snapshots

#### Nombre de snapshot

#### depuis le début du module

#### Pas de snapshot présents

#### Qté RAM

#### 4Go

#### Les conséquences de sysprep

#### Win10-XX Win10-XX-Clone

#### Vmware tools présents ?

#### Oui

#### Nom de la machine

#### configuré dans l’OS

#### Win10-XX DESKTOP-

&lt;chaîneDeCaratèreAléatoire&gt;

#### Nb de users dans la base

#### SAM

#### Les comptes natifs, le

#### compte crée à

#### l'installation de la VM et

#### tous les comptes créés

#### lors de l'atelier 8

#### Les comptes natifs ainsi que le

#### compte créé au premier

#### démarrage de la VM

#### Adresse IP

#### Adresse IP fixe configurée

#### lors de l'atelier 10

#### En DHCP

#### Date et heure du premier

#### log dans le journal

#### système

#### Date de l'installation de la

#### VM lors de l'atelier 1

#### Date du démarrage du clone

#### après le Sysprep et le clonage

#### Nb de points de

#### restaurations

#### Celui de l'atelier 13 (et voir

#### d'autres si vous en avez

#### fait d'autres)

#### Aucun. La protection du

#### système est désactivée

#### Compte administrateur

#### activé ?

#### Oui (si vous avez réalisé le

#### dernier snapshot après

#### avoir activé le compte

#### administrateur)

#### non

#### Pilote de l’imprimante HP

#### LaserJet présents ?

#### oui non

#### Règle entrante ICMP ?

#### oui
