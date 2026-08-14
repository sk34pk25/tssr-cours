# Énoncés — Module 02 — Installation du système d’exploitation Windows 10

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enoncé du TP - Installation de Windows

### Systèmes Clients Microsoft

#### Installation de Windows 10

#### TP du Module 02 — Installation de Windows 10

Durant ce TP, vous allez être amené à créer une machine virtuelle avec VMware WorkStation. Vous serez ensuite amené à installer Windows 10 et à procéder à sa configuration initiale. Vous serez également amené à importer une VM Windows 10 existante.

#### Durée estimée

#### 1 heure

#### Énoncé

Lisez l'ensemble de cet atelier avant de vous lancer dans la pratique.

#### Préparer l'environnement

Créer les dossiers ISO et Procédures sur votre volume de données. Copier l'image ISO de Windows 10 disponible depuis les ressources à télécharger vers votre dossier ISO. Créer un dossier Vms-WorkStation sur votre volume de données. Il accueillera les fichiers qui définissent vos futures VM.

#### Création de la machine virtuelle

#### Informations concernant la VM Windows 10

#### Paramètres WorkStation

#### Configuration de la VM Typique

#### Système d'exploitation invité Windows 10 x64

#### Nom de la VM Win10-XX (XX étant vos initiales)

#### Emplacement Sous-dossier Win10-XX du dossier VMs-WorkStation

#### Disque dur 32 GB (Store Virtual disk as a single file)

#### Mémoire 4 GB

#### Processeurs 1 processeur — 1 coeur

#### Réseau Host-Only

À l'issue de la création de la VM, sa configuration doit être la suivante :

#### Installation du système d'exploitation Windows 10 Professionnel

Insérer l'image ISO du support d'installation de Windows 10 dans le lecteur de DVD virtuel de la VM Win10-XX. Cette image ISO est disponible dans le dossier ISO de votre lecteur de données.

#### Vous créez une procédure de l'installation du système d'exploitation

Windows 10 Professionnel. Pour cela, vous avez la possibilité d'utiliser l'outil natif psr (Step Recorder ou Enregistreur d'actions utilisateur). Cet outil permet de conserver les étapes de vos actions, dans le but de les mettre en forme par la suite dans une procédure personnalisée.

#### Clic droit sur le menu Démarrer &gt; Exécuter &gt; psr

#### Fichier de sortie : Procédures\psr-install-Win10.zip

#### Activer la capture d'écran : Oui

#### Nombre de captures d'écran récentes à stocker : valeur max

#### Cliquez sur Commencer l'enregistrement

Démarrer la VM et procéder à l'installation en français de Windows 10 Professionnel.

#### Informations concernant l'installation du système

Vous n'avez pas de clé produit à renseigner, nous utiliserons le délai de grâce durant les TP. Le système d'exploitation Windows 10 Professionnel sera à installer sur la totalité de l'espace non alloué du disque dur de 32 Go (installation personnalisée).

#### À la fin de l'installation, lorsque la VM redémarre, cliquez sur Arrêter

l'enregistrement. Utilisez ensuite les données présentes dans le fichier de sortie install-Win10.zip

#### pour vous créer votre propre procédure personnalisée (avec l'aide d'un

#### logiciel de traitement de texte par exemple, et en y insérant les images

#### capturées, vos propres commentaires…)

Sauvegardez votre procédure dans le dossier Procédures\install-Win10.docx

#### Informations concernant la configuration de base suite à l'installation

#### Région : France

#### Disposition du clavier : Français

#### Pas de disposition de clavier supplémentaire nécessaire

#### Pas de connexion Internet disponible pour le moment

#### Continuer avec l'installation limitée

#### Pas d'historique des activités

#### Pas d'assistante numérique "Cortana"

#### Ne pas utiliser la reconnaissance vocale en ligne

Ne pas autoriser Microsoft et les applications à utiliser votre emplacement

#### Ne pas localiser l'appareil

#### Envoi basique des données de diagnostic à Microsoft

#### Ne pas améliorer l'écriture manuscrite et la saisie

Ne pas obtenir d'expériences personnalisées avec des données de diagnostic

#### Ne pas autoriser les applications à utiliser l'identifiant de publicité

#### Finalisation de la configuration de base

#### Installez les VMware Tools (installation typique)

#### Éjectez le DVD puis éteignez votre VM

#### Faites un snapshot TP1 terminé

#### Importer une seconde VM

Importez la VM Discovery au format OVA dans un sous-dossier créé par vos soins en amont nommé Discovery dans le dossier VMs-WorkStation. L'archive OVA se trouve dans les ressources à télécharger.

#### Complétez le tableau suivant :

#### Paramètres de la VM Discovery

#### Nom de la VM Discovery

#### Emplacement Sous-dossier Discovery du dossier VMs-WorkStation

#### Nb Disque(s) dur(s)

#### Mémoire

#### Processeurs

#### Carte réseau

Démarrez Discovery et ouvrez une session avec l'utilisateur adm (Pa$$w0rd). Sur le bureau, faites un clic droit sur le fichier reinit.bat puis Exécuter en tant qu’administrateur. Redémarrez ensuite la VM Discovery. Complétez le tableau suivant.

#### Caractéristiques de Discovery

#### VMware Tools présents ?

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
