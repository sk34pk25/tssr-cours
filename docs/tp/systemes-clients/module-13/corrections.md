# Corrections — Module 13 — Les stratégies de groupe local

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - Les LGPO

### Systèmes Clients Microsoft

#### Les LGPO

#### TP du Module 13 — Les stratégies de groupe local

#### Durée estimée

#### 1 heure

- Sur Win10-XX, à l'aide des consoles appropriées appliquez les consignes suivantes :

  - Pour augmenter le niveau de sécurité d'accès aux ressources de votre VM,

tous les utilisateurs devront utiliser un mot de passe avec les caractéristiques

#### suivantes

  - Longueur minimale : 7 caractères
  - 3 mots de passe seront conservés dans l'historique
  - Il devra respecter les exigences de complexité

#### Rechercher &gt; secpol.msc

#### Nœud Stratégies de comptes

#### Nœud Stratégie de mot de passe

#### Double clic sur Longueur minimale du mot de passe : 7 caractères &gt; OK

Double clic sur Conserver l'historique des mots de passe : 3 mots de passe mémorisés &gt; OK Double clic sur Le mot de passe doit respecter les exigences de complexité : Activé

#### →Pour comprendre les exigences de complexité &gt; onglet Expliquer

Fermez la session actuelle puis faites des tests "grandeurs rée lles" avec des utilisateurs standard. Tentez de changer le mot de passe d'un utilisateur standard (CTRL+ALT+SUPPR &gt; Modifier un mot de passe) et vérifiez si les contraintes de sécurité qu e vous avez configurées ci-dessus fonctionnent.

- Créez une GPO non-administrateurs

#### Rechercher &gt; mmc

Ajouter le composant logiciel enfichable éditeur d'objet de stratégie de groupe

#### Parcourir

#### Onglet Utilisateurs

#### Double clic sur Non-administrateurs

#### Terminer &gt; OK

  - Interdire l'accès au panneau configuration et l'application Paramètres du PC

Dans la console de gestion de stratégie de groupe des Non-administrateurs :

#### Configuration utilisateur

#### Modèle d'administration

#### Clic sur Panneau de configuration

Double clic sur Interdire l'accès au Panneau de configuration et à l'application Paramètres

#### du PC

#### Activé

#### Appliquer &gt; OK

  - Verrouiller la barre des tâches

Dans la console de gestion de stratégie de groupe des Non-administrateurs

#### Configuration utilisateur

#### Modèle d'administration

#### Clic sur Menu démarrer et barre des tâches

#### Double clic sur Verrouiller la Barre des tâches

#### Activé

#### Appliquer &gt; OK

  - Mettez en place un papier peint de votre choix sur le bureau

Dans la console de gestion de stratégie de groupe des Non-administrateurs

#### Configuration utilisateur

#### Modèle d'administration

#### Bureau

#### Clic sur Bureau

#### Double clic sur Papier peint du bureau

#### Activé

Indiquez le chemin d'une image ou d'un partag e dans lequel les utilisateurs ont au moins

#### les autorisations d'accès en Lecture

#### Faites attention au fait que votre image soit au format BMP ou JPG

#### Appliquer &gt; OK

Ouvrez une session avec un utilisateur standard (Non-administrateurs) pour tester toutes ces contraintes.

- Créez une GPO pour l'utilisateur Romain

  - Romain aura accès au panneau de configuration et à l'application

#### Paramètres du PC

#### Dans la même console MMC

Ajouter le composant logiciel enfichable Editeur d'objet de stratégie de groupe

#### Parcourir

#### Onglet Utilisateurs

#### Double clic sur romain

#### Terminer &gt; OK

#### Nœud Stratégie ordinateur local\romain

#### Configuration utilisateur

#### Modèle d'administration

#### Clic sur Panneau de configuration

Double clic sur Interdire l'accès au Panneau de configuration et à l'application Paramètres

#### du PC

#### Désactivé

#### Appliquer &gt; OK

  - Supprimer l'accès au Gestionnaire des tâches

#### Nœud Stratégie ordinateur local\romain

#### Configuration utilisateur

#### Modèle d'administration

#### Système

#### Options Ctrl+Alt+Suppr

#### Double clic sur Supprimer le gestionnaire des tâches

#### Activé

#### Appliquer &gt; OK

Ouvrez une session avec le compte d'utilisateur romain puis testez ces contraintes.
