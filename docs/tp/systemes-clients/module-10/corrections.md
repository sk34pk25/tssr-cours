# Corrections — Module 10 — La maintenance du système

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - Maintenance du syst確e

### Systèmes Clients Microsoft

#### Maintenance du système

#### TP du Module 10 — La maintenance du système

#### Sur Win10-XX

- Affichez et analysez les problèmes majeurs survenus sur votre système :

  - Depuis le démarrage de votre VM et de manière synthétique

  - De manière détaillée sur le dernier évènement critique (au cas où aucun

évènement critique n'est survenu depuis le début du module, procédez à un

#### arrêt brutal de votre VM WorkStation : PowerOFF)

#### Rechercher &gt; Afficher l'historique de fiabilité

L'indice de fiabilité a chuté le jour où des échecs divers sont survenus (symbolisé par la croix blanche dans le cercle rouge) puis est remonté petit à petit les jours suivants.

#### Double clic sur l'évènement critique

#### Analyse en temps réel

- Lancez plusieurs tâches : copiez un gros fichier disponible sur le partage [CHEMIN A

INDIQUER], démarrez les applications console PowerShell, Gestionnaire des tâches,

#### Edge…

- Avec les outils adaptés et en temps réel, recherchez les processus qui consomment

le plus de performances sur les 4 composants principaux.

- Remplissez le tableau suivant, indiquez les ressources utilisées lors du traitement des

#### différentes tâches en cours

A l'aide du Gestionnaire de tâches et du moniteur de ressources, vous pouvez lire, trier les informations puis les indiquer dans le tableau ci-dessous. Il n'existe pas de correction typique ici puisque les informations varient en fonctions des ressources matérielles et de l'utilisation de la bande passante.

#### Ressources

#### Processeurs

#### Mémoire

#### Réseau

#### Disque dur

#### Sauvegarde de l'état du système et des données

- Préparation :

  - Vérifiez la configuration de la Protection du système

  - Vérifiez les points de restauration disponibles

  - Créez si nécessaire un point de restauration manuel

  - Créez des fichiers dans le répertoire "Documents" de l'utilisateur en cours

#### d'utilisation

  - Désactivez ou désinstallez des fonctionnalités Windows de votre système

#### (Lecteur Windows Media, IE11)

#### Rechercher &gt; sysdm.cpl

#### Onglet Protection du système

Par défaut, la protection du système n'est activée sur aucun volume . Il n'y a donc aucun point de restauration disponible.

#### Pour créer un point de restauration manuel :

#### Sélectionnez Disque local (C:) (Système)

#### Configurer…

#### Cocher Activer la protection du système

Déplacer le curseur vers la gauche d'obtenir environ 5% d'espace disque dédié au stockage des points de restaurations système.

#### Appliquer &gt; OK

La protection du système est maintenant activée sur le volume qui héberge le système.

#### Créer…

#### Donner un nom au point de restauration : Atelier13

Dans le dossier Document de l'utilisateur en cours, créer quelques fichiers, dossiers, documents facilement identifiables (par exemple Rep-Atelier13, FicAtelier13.txt…) Le lecteur Windows Media et Internet Explorer 11 sont des fonctionnalités Windows. Pour les

#### désinstaller :

#### Paramètres Windows &gt; Gérer les fonctionnalités facultatives

#### Cliquer sur Internet Explorer 11 puis désinstaller

#### Cliquer sur Lecteur Windows Media puis désinstaller

Il est ensuite possible de les réinstaller en cliquant sur Ajouter une fonctionnalité Pour simplement désactiver ces fonctionnalités, il faut passer par le panneau de configuration &gt; Programmes &gt; Activer ou désactiver des fonctionnalités Windows

- À l'aide de WinRE, vous restaurez l'état du système grâce au dernier point de

#### restauration disponible puis démarrez Windows normalement

- Retrouvez-vous les fichiers dans le dossier Documents du dernier utilisateur ? Pouvez-

#### vous lancer IE11 ? Le lecteur Windows Media ? Pourquoi ?

Clic droit sur le menu Démarrer &gt; Arrêter ou se déconnecter &gt; Maintenir le bouton SHIFT puis

#### cliquer sur Redémarrer

Des informations apparaissent à l'écran et concernent la désinstallation ou la désactivation des fonctionnalités Windows IE11 et le lecteur Windows Media. Le système d'exploitation de secours WinRE démarre ( il est indépendant du système

#### Windows)

#### Dépannage

#### Options avancées

#### Restauration du système

Choisissez un compte administrateur pour continuer puis indiquez son mot de passe. L'assistant Restauration du système se lance.

#### Suivant

Sélectionnez votre point de restauration.

#### Terminer

#### Oui

#### Attendez quelques secondes puis cliquez sur Redémarrer

Un message d 'information indique que la restauration du système s'est correctement exécutée. →Nous retrouvons nos fonctionnalités Windows IE11 et le lecteur Windows Media ; cela est logique puisque nous les avions désinstallé es ou désactivées après avoir créé le point de restauration. →Nous retrouvons nos fichiers dans le dossier Documents de l'utilisateur alors que nous avons effectué le point de restauration avant la création de ceux-ci. Cela prouve que le point de restauration n'affecte pas les données utilisateurs.
