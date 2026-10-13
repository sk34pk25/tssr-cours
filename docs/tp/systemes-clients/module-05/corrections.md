# Correction — Module 05 — Les utilisateurs et les groupes

Cette correction reprend les méthodes des sources de laboratoire. Les noms François / `francois` sont conservés selon leur occurrence documentaire ; ils ne sont pas normalisés.

## 1. Comptes et groupes dans la console graphique

### Méthode

Dans `MaConsole.msc`, utilisez le composant logiciel enfichable **Utilisateurs et groupes locaux**. Créez d’abord les utilisateurs puis les groupes requis.

### Étapes et contrôles

- Créez François ou `francois` ; désactivez l’obligation de changer le mot de passe à la prochaine ouverture si le scénario le demande, puis activez l’option indiquant que le mot de passe n’expire jamais.
- Créez `L_Informatiques` et `L_Responsables`, puis ajoutez François / `francois` à ces groupes.
- Créez Yann et, dans ses propriétés, ajoutez-le aux mêmes groupes.
- Créez les deux comptes complémentaires, puis le groupe `L_Collegues` et ajoutez-y les comptes définis par le scénario.

**Résultat attendu :** les objets apparaissent dans les listes de la console et leurs propriétés indiquent les appartenances demandées.

## 2. Privilèges et propriétés

| Demande du scénario | Groupe ou contrôle indiqué par la correction |
| --- | --- |
| François administre les ressources du poste | Groupe prédéfini Administrateurs |
| Yann consulte les journaux et configure le réseau | Lecteurs des journaux d’évènements ; Opérateurs de configuration réseau |
| Les collègues peuvent sauvegarder | Opérateurs de sauvegarde |
| Un collègue ne peut plus ouvrir de session | Retrait du groupe prédéfini Utilisateurs |

La correction relève aussi, dans les propriétés d’un utilisateur, le nom complet, la description, les options de mot de passe, l’état du compte, les appartenances et les informations de profil. Pour un groupe, elle demande de contrôler la description et ses membres.

## 3. Contrôles CMD

| Objectif | Commande indiquée |
| --- | --- |
| Informations du compte François | `net user francois` |
| Membres du groupe Administrateurs | `net localgroup administrateurs` |
| Créer Romain avec saisie de mot de passe masquée | `net user Romain * /add` |
| Ajouter Romain à `L_Responsables` | `net localgroup L_Responsables Romain /add` |
| Afficher le SID de l’utilisateur et ses groupes | `whoami /user` puis `whoami /groups` |

Pour créer un utilisateur dans la base SAM, la correction demande une invite de commandes exécutée avec les privilèges nécessaires. La saisie de mot de passe marquée par `*` ne doit pas être reproduite dans les livrables.

## 4. Session et profils

Après la première ouverture de session de François, un profil est créé dans `C:\Users` avec un sous-dossier portant le nom de son identifiant. Pour afficher les profils, la correction indique `sysdm.cpl`, puis les paramètres système avancés et les paramètres de profils utilisateur.

**Contrôle :** seuls les utilisateurs ayant déjà ouvert une session possèdent un profil créé sur le poste. Les comptes existants dans la SAM ne possèdent pas nécessairement de profil tant qu’ils ne se sont pas connectés.

## 5. Contrôles PowerShell dans la VM Discovery

| Objectif | Commande indiquée par la correction |
| --- | --- |
| Nom, SID et description des utilisateurs | `Get-LocalUser \| select Name,SID,Description` |
| Propriétés de `james` | `Get-LocalUser -Name james \| Select FullName,description,ObjectClass,LastLogon` |
| Description de `adm` | `Set-LocalUser -Name adm -description "Compte générique administrateur de secours"` |
| Membres de `L_SupportInfo` | `Get-LocalGroupMember -Name L_SupportInfo \| Select Name,SID` |

**Résultat attendu :** les sorties affichent les propriétés ou membres demandés dans l’activité concernée.

## Ressources de laboratoire

La correction mentionne `MaConsole.msc` et la VM Discovery. Ces ressources ne figurent pas dans le dossier Drive M05 live ; aucun substitut n’est fourni ici.
