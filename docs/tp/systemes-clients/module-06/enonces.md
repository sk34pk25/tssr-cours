# Énoncés — Module 06 — La sécurité NTFS et les ACL

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enoncé du TP - Les ACL

### Systèmes Clients Microsoft

#### Les ACL

#### TP du Module 06 — La sécurité NTFS et les ACL

Ce TP va vous permettre de manipuler les autorisations d’accès aux dossiers disponibles sur votre système.

#### Durée estimée

#### 1 heure

#### Énoncé

#### Lisez l'ensemble de ce TP avant de vous lancer dans la pratique

#### Sur votre VM Win10-XX, configurez les autorisations d'accès sur les

#### répertoires suivants :

#### Sur le volume DATA, créer le répertoire Echange

Quelles sont les autorisations positionnées par défaut sur le répertoire Echange ? Peuplez ce répertoire de fichiers, de dossiers. Héritent-ils des autorisations du dossier

#### parent ?

#### Configurez les autorisations d'accès au répertoire Echange :

  - Vos collègues pourront modifier tous les objets et sous-objets de ce

#### répertoire

  - Les administrateurs auront le contrôle total
  - Vous accorderez les droits en lecture sur le répertoire aux utilisateurs de votre

#### poste

  - Testez le bon fonctionnement des autorisations

Sur le volume TOOLS, créer les répertoires logiciels et manuels d'utilisation :

  - Yann et François accéderont en modifications à ces répertoires.
  - Les utilisateurs standard auront un accès en lecture et les administrateurs

#### posséderont un contrôle total

  - Testez le bon fonctionnement des autorisations

#### Sur la VM Discovery en PowerShell

#### Afficher la liste des droits d'accès au dossier 2022 du lecteur M:

#### Quelle cmdlet permet la modification des ACL sur un dossier ?

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
