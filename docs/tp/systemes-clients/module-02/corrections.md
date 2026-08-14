# Corrections — Module 02 — Installation du système d’exploitation Windows 10

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## Solution du TP - Installation de Windows

### Systèmes Clients Microsoft

#### Installation de Windows 10

#### TP du Module 02 — Installation du système de Windows 10

#### Préparer l’environnement

- Créer un dossier ISO, un dossier Procédures et un dossier Vms-WorkStation sur le lecteur

C: de votre ordinateur (ou autre volume éventuellement présent et dédié à la data).

- Copiez le fichier ISO , depuis les ressources à t élécharger, qui correspond au système

d’exploitation Windows 10 , dans le dossier ISO que vous venez tout juste de créer ci - dessus.

#### Démarrer WorkStation et procéder à la création de votre première VM

- Lancez VMware Workstation (icône disponible sur le bureau).
- Créez votre 1re VM
- Cliquez sur Create a New Virtual Machine pour entrer dans l’assistant de création de

#### votre VM

  - 1 - Typical
  - 2 - Guest operating system : Windows 10 x64
  - 3 - Virtual Machine Name : Win10-XX (XX étant vos initiales)

#### Location : C:\Vms-WorkStation\Win10-XX

#### (Volume C: ou autre volume de données)

#### Disk Capacity : 32 (GB) (Store as an single file)

#### Customize Hardware

  - Memory : 4 GB
  - Processors : 1 processeur / 1 cœur de processeur
  - Network Adapter : Host-Only
  - Finish

- À l’issue de la création de votre VM, Win10-XX doit apparaître dans le champ Library à

gauche de l’écran WorkStation et la configuration de la VM doit ressembler à l’écran

#### suivant :

#### Installation du système d’exploitation

- Insérer l’ISO d’installation de Windows 10 dans le lecteur DVD virtuel de la VM . L’ISO se

trouve dans le dossier ISO de votre lecteur de données . Cliquez sur Browse… pour parcourir votre lecteur et sélectionnez l’ISO Windows 10 .

Dans la barre de recherche Windows 10, tapez psr puis lancer l’application Enregistreur d’actions utilisateur. Éditez les paramètres du logiciel en cliquant sur la flèche à gauche du bouton d’aide et appliquez la configuration comme ci -dessous puis lancez l’enregistrement. Lorsque l’enregistrement est lancé, pour une meilleure lisibilité, vous réduisez la fenêtre psr dans votre barre des tâches.

- Démarrez votre VM Power on this virtual machine
- Faites le focus dans votre VM (cliquez à l’intérieur).
- Pour lancer la procédure d’installation depuis le DVD virtuel, appuyer sur une touche

#### lorsque vous est demandé : Press any key to boot from CD or DVD……

  - Langue à installer : Français (France)
  - Installer Maintenant
  - Activer Windows : Je n’ai pas de clé de produit
  - Sélectionner le système d’exploit ation à installer : Windows 10

#### Professionnel

  - Avis et conditions du contrat de licence applicables : J’accepte les

#### termes du contrat de licence

  - Quel type d’installation voulez -vous effectuer ? Personnalisé :

#### Installer iniquement Windows (avancé)

  - Où souhaitez-vous installer Windows ? Laissez par défaut, le système

#### occupera les 32 Go du disque dur de votre VM pour son bon

fonctionnement.

#### Installation en cours, patientez quelques minutes

Deux redémarrages surviennent jusqu’à l’apparition de la page de configuration de base de Windows 10. Le système est installé et est chargé pour la première fois depuis le disque dur de votre VM. Vous pouvez arrêter l’enregistrement psr en cliquant sur le bouton Arrêter l’enregistrement Vérifiez que le document est bien présent dans le zip du dossier Procédures Servez-vous des captures d’écran que vous considérez importantes pour ensuite construire votre propre procédure à l’aide d’un traitement de texte.

#### Informations concernant la configuration de base suite à l'installation

Pas à pas, suivez les instructions du tableau ci-dessous pour personnaliser le système :

#### Région : France

#### Disposition du clavier : Français

#### Pas de disposition de clavier supplémentaire nécessaire

#### Pas de connexion Internet disponible pour le moment

#### Continuer avec l'installation limitée

#### un mot de passe et répondez aux questions de récupération

#### Pas d'historique des activités

#### Pas d'assistante numérique "Cortana"

#### Ne pas utiliser la reconnaissance vocale en ligne

Ne pas autoriser Microsoft et les applications à utiliser votre emplacement

#### Ne pas localiser l'appareil

#### Envoi basique des données de diagnostic à Microsoft

#### Ne pas améliorer l'écriture manuscrite et la saisie

Ne pas obtenir d'expériences personnalisées avec des données de diagnostic

#### Ne pas autoriser les applications à utiliser l'identifiant de publicité

À la fin de la personnalisation du système, le bureau Windows 10 apparaît.

#### Finalisation de la configuration de base

- Installation des VMware Tools :

  - Dans WorkStation faites un clic droit sur l’onglet correspondant à votre VM et

#### cliquez sur Install VMware Tools … Cette action permet d’insérer

#### automatiquement une image ISO comprenant des éléments nécessaire s à

l’amélioration de fonctionnement de votre VM.

  - Dans votre VM, ouvrez votre Explorateur de fichiers &gt; Ce PC &gt; Double-clic sur

votre lecteur de DVD (D:) VMware Tools.

  - Exécutez setup64
  - Choisissez les propositions par défaut lorsque l’assistant d’installation vous le

#### demande

  - Un redémarrage de votre VM est nécessaire à l ’issue de l’installation des

VMware Tools.

- Depuis votre VM redémarrée , éjectez le DVD des VMware Tools en faisant un clic

droit sur le Lecteur de DVD (D:) &gt; Éjecter.

- Faites un Snapshot de l’état de votre VM ( éteinte = Snapshot à froi d ou allumée =

SnapShot à chaud ). Pour cela , f aites un clic droit sur l’onglet de votre VM dans

#### WorkStation et cliquez sur Snapshot &gt; Take a Snapshot …

#### Name : TP1 terminé

#### Ce Snapshot vous permettra de revenir à l’état de votre VM quand vous

voulez.

#### Importer une seconde VM

- Importez la VM Discovery au format OVA dans un sous -dossier créé par vos soin s en

amont nommé Discovery dans le dossier VMs-WorkStation. L'archive OVA se trouve dans les ressources à télécharger.

  - Sur le lecteur de données de votre espace de travail, créer un sous-

#### dossier Discovery dans le dossier VMs-WorkStation

  - Depuis les ressources à télécharger, copiez le fichier Discovery.ova

#### dans le dossier VMs-WorkStation\Discovery créé précédemment

  - Avec WorkStation, onglet Home &gt; Open a Virtuel Machine
  - Naviguez dans votre volume de données puis sélectionnez le fichier

#### VMs-WorkStation\Discovery\Discovery.ova

  - Importez la VM Discovery dans le dossier VMs-

#### WorkStation\Discovery puis patientez quelques minutes

#### Complétez le tableau suivant :

#### Paramètres de la VM Discovery

#### Nom de la VM Discovery

#### Emplacement Sous-dossier Discovery du dossier VMs-WorkStation

#### Nb Disque(s) dur(s) 4

#### Mémoire 4 GB

#### Processeurs 1

#### Carte réseau Host-Only

- Démarrez Discovery et ouvrez une session avec l'utilisateur adm (Pa$$w0rd)
- Complétez le tableau suivant

#### Caractéristiques de Discovery

#### VMware Tools présent ?

#### Oui

#### (panneau de configuration &gt; Ajout suppression de

#### programmes : VMware Tools présent)
