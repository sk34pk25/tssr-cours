# Module 06 — Microsoft Deployment Toolkit

Semaine du 16 au 20 novembre 2026. Les vidéos citées par les énoncés sont **Inexistant**.

[Travaux](../../tp/18-services-transverses-microsoft/module-06/index.md) · [Révision](../../revision/18-services-transverses-microsoft/module-06.md) · [Kahoot préparé](../../kahoot/18-services-transverses-microsoft-module-06.md)

Les exemples de fichiers de réponse contiennent des mots de passe et une clé de produit. Ils sont remplacés par `[masqué]`. Les noms de domaine de laboratoire (`deploy.eni`) sont conservés comme valeurs techniques.

=== "Cours Original"

    ## Objectifs

    Automatiser les tâches de déploiement avec les outils MDT.

    ## MDT – En appui aux services de déploiement

    MDT représente un ensemble d’outils permettant d’automatiser le processus de déploiement de postes. Il complète les services de déploiement WDS. MDT dispose de son arborescence de partage de ressources via les « Partages de déploiement » :

    - qui contiennent les images d’installation à déployer ;
    - qui sont accessibles via des images de démarrage (Lite Touch) générées par MDT ;
    - dans lequel sont stockés des séquences de tâches et des fichiers de paramètres à des fins d’automatisation.

    ## MDT - Présentation du fonctionnement

    Le schéma enchaîne trois étapes. Étape 1 : WDS, requête TFTP puis transfert du fichier LightTouchPE, image de démarrage. Étape 2 : WinPE joint le partage de déploiement MDT. Étape 3 : image WIM à déployer et séquence de tâches.

    ## MDT – Prérequis

    MDT nécessite des composants complémentaires : Windows ADK (Windows Assessment and Deployment Kit) et WinPE (Windows Preinstallation Environment).

    Procédure d’installation écrite :

    - télécharger les dernières versions sur le site de Microsoft ;
    - lancer l’installeur, qui nécessite une connexion Internet ; un mode hors ligne est proposé ;
    - sélectionner les composants souhaités pour ADK, au minimum les fonctionnalités cochées sur la diapositive.

    ## MDT – Le partage de déploiement

    Le partage de déploiement est la base de la configuration de MDT. À ce partage sont associés la création d’une image de démarrage, les systèmes d’exploitation à déployer et les séquences de tâches. En complément : des pilotes et des applications à déployer.

    ![Visuel externe : arborescence Deployment Workbench d’un partage MDT](../../assets/images/services-transverses-microsoft/m6s-p03-01.webp)

    Pour créer un partage de déploiement :

    - lancer la console de gestion de MDT « Deployment Workbench » ;
    - clic droit sur Deployment Share puis New Deployment Share ;
    - indiquer le chemin du dossier de déploiement, qui pourra être créé s’il est inexistant, le nom et la description du partage ;
    - prévoir un espace disque suffisant.

    ![Visuel externe : menu New Deployment Share](../../assets/images/services-transverses-microsoft/m6s-p04-02.webp)

    L’assistant propose ensuite de passer un ensemble d’étapes d’installation. Les choix sélectionnés sont traduits en paramètres de configuration dans le fichier CustomSettings.ini, abordé dans les diapositives suivantes.

    Les paramétrages sont disponibles dans les propriétés du partage de déploiement.

    | Onglet | Contenu écrit |
    |---|---|
    | General | Paramètres généraux et activation du multicast (via WDS). |
    | Rules | Configuration des fichiers Bootstrap.ini et CustomSettings.ini. |
    | Windows PE | Paramétrage des médias de démarrage (x86 et x64). |
    | Monitoring | Activation du suivi des déploiements dans la console de gestion. |

    ![Visuel externe : onglet General d’un partage MDT](../../assets/images/services-transverses-microsoft/m6s-p05-03.webp)

    ![Visuel externe : onglet Windows PE d’un partage MDT](../../assets/images/services-transverses-microsoft/m6s-p05-04.webp)

    ## MDT – Windows PE

    Média nécessaire à l’initialisation des séquences de tâches de MDT. Généré à partir du partage de déploiement. Formats WIM et ISO disponibles, pour les architectures 32 et 64 bits. Fichiers stockés dans le répertoire Boot de l’arborescence du partage de déploiement. Paramétrage dans les propriétés du partage, onglet Windows PE. Ajout de fonctionnalités et de pilotes complémentaires possible. Une mise à jour du partage de déploiement est nécessaire après toute modification.

    ## MDT – Systèmes d’exploitation

    Une image de système d’exploitation à déployer doit être associée au partage de déploiement. Pour en ajouter une, faire un clic droit sur le conteneur Operating Systems puis Importer. L’assistant propose d’indiquer un chemin de média d’installation, le chemin d’un fichier WIM ciblé, ou d’aller chercher dans les images intégrées au service WDS. Quand un fichier WIM contient plusieurs images, il est possible de supprimer les images de systèmes non souhaitées.

    ## Démonstration

    Installer MDT.

    ## MDT – Les fichiers CustomSettings et Bootstrap

    Les fichiers Bootstrap.ini et CustomSettings.ini contiennent un ensemble de règles s’appliquant pendant le processus de déploiement. Ces règles engendrent la réalisation d’actions et de paramétrages. Exemple de points de configuration d’un partage de déploiement :

    ```ini
    SkipComputerBackup=NO
    SkipProductKey=YES
    SkipAdminPassword vaut YES
    SkipCapture=NO
    SkipBitLocker=NO
    ```

    Ces fichiers sont dans le répertoire Control du partage de déploiement. Ils sont accessibles depuis ce répertoire ou peuvent être édités via la console MDT. Ils sont complémentaires. Bootstrap.ini est pris en compte lors du chargement du média WinPE. CustomSettings.ini est pris en compte lors de la phase de déploiement. Le schéma aligne 1 - UEFI, 2 - WinPE (Bootstrap.ini) et 3 - Déploiement (CustomSettings.ini).

    Depuis les propriétés du partage, onglet Rules, sont affichés les paramètres de CustomSettings.ini. Il est possible d’éditer Bootstrap.ini.

    ## MDT – Bootstrap.ini

    Ce fichier contient les informations nécessaires à l’environnement Windows PE, pour permettre l’accès au partage de déploiement et, optionnellement, pour paramétrer l’environnement WinPE. Pour la prise en compte des modifications, il est nécessaire, dans MDT, de mettre à jour le partage de déploiement, ce qui régénère l’image de boot MDT, puis, dans WDS, de remplacer l’image de démarrage correspondante.

    Exemple écrit. Le mot de passe est `[masqué]`.

    ```ini
    [Settings]
    Priority=Default
    [Default]
    DeployRoot=\\WDS\DeploymentShare$
    UserID=mdt
    UserDomain=deploy.eni
    UserPassword=[masqué]
    KeyboardLocale=fr-FR
    KeyboardLocalePE=040c:0000040c
    SkipBDDWelcome=YES
    ```

    ## MDT – CustomSettings.ini

    Un grand nombre de paramètres peut être renseigné dans ce fichier. L’exemple permet d’automatiser le processus de déploiement du système à déployer. La mise à jour de ce fichier ne requiert pas la mise à jour du partage de déploiement. Les paramètres présentés sont repris dans la diapositive suivante.

    | Famille | Paramètres écrits |
    |---|---|
    | Interactivité de l’installeur | `SkipTaskSequence` vaut YES, `TaskSequenceID=ENISALLE09`, `SkipUserData` vaut YES, `SkipApplications` vaut YES, `SkipAppsOnUpgrade` vaut YES, `SkipAdminPassword` vaut YES, `AdminPassword=[masqué]` |
    | Paramètres régionaux | `SkipLocaleSelection` vaut YES, `SkipTimeZone` vaut YES, `UserLocale=fr-FR`, `KeyboardLocale=040C:0000040C`, `TimeZoneName=Romance Standard Time` |
    | Autres sauts | `SkipCapture` vaut YES, `SkipBitlocker` vaut YES, `SkipSummary` vaut YES |
    | Nommage et domaine | `SkipComputerName` vaut YES, `OSDComputerName=ENI-DEMO`, `SkipDomainMembership` vaut YES, `JoinDomain=deploy.eni`, `DomainAdmin=mdt`, `DomainAdminDomain=deploy.eni`, `DomainAdminPassword=[masqué]` |
    | Activation | `SkipProductKey` vaut YES, commentaire « clé KMS pour W10 Pro N », `ProductKey=[masqué]` |

    ## Démonstration

    Bootstrap.ini et CustomSettings.ini.

    ## MDT – Restreindre l’accès au partage de déploiement

    L’accès aux ressources du partage de déploiement peut être restreint. Un compte de service peut être utilisé, au moyen d’entrées de contrôle d’accès configurées sur le partage ou via les autorisations NTFS.

    ```ini
    DeployRoot=\\WDS\DeploymentShare$
    UserID=mdt
    UserDomain=deploy.eni
    UserPassword=[masqué]
    ```

    Le support demande de veiller à la cohérence des informations d’authentification et des règles de restriction d’accès. Si un compte de domaine est utilisé, il pourra aussi servir à l’intégration au domaine du poste déployé.

    ## MDT – La séquence de tâches

    Durant le processus de déploiement, un ensemble d’actions est réalisé. La séquence de tâches permet d’automatiser la réalisation de ces actions. Elle est nécessaire au processus de déploiement. Elle est directement liée au choix du système d’exploitation à déployer. Pour la création, l’assistant utilise des modèles. La création génère des fichiers de réponse utilisés par l’installeur : Unattend.xml et ts.xml.

    Lors de la création, en fonction du modèle choisi, différentes questions sont posées : elles sont regroupées par catégories. À l’issue, la séquence peut être éditée, complétée, modifiée.

    ## Démonstration

    Accès au partage et séquence de tâches.

    ## MDT – Séquence de tâches et fichiers de réponses

    Tous les paramètres liés à la séquence de tâches ne sont pas affichés lors de l’édition, certains sont reportés dans les fichiers de réponses. L’édition du fichier Unattend.xml est proposée depuis l’onglet OS Info des propriétés de la séquence de tâches.

    Le contenu des fichiers de réponse peut être minimaliste, en réponse à des besoins de déploiement basiques. Il peut aussi être beaucoup plus complet pour répondre à des besoins pointus d’un service de déploiement. Dans ce cours, nous ne détaillerons pas les possibilités de personnalisation de ces fichiers.

    ## MDT – Monitoring

    Permet le suivi des déploiements depuis la console. Se configure dans les propriétés du partage, onglet Monitoring, désactivé par défaut. Ajoute une directive EventService dans CustomSettings.ini :

    `EventService=http://W19-MDT1:9800`

    Se visualise dans le nœud Monitoring du partage de déploiement, pour le suivi des postes déployés et de l’avancement des séquences de tâches.

    ## MDT – Bascule des MAJ MDT vers WDS

    Lorsque des modifications sont apportées dans MDT, il peut être nécessaire de mettre à jour le média d’installation LiteTouch.wim : clic droit sur le partage de déploiement et choisir Update Deployment Share. Les modifications apportées doivent ensuite être apportées à l’image de démarrage du service WDS. Le chemin du fichier est à renseigner.

    ## MDT – Problématiques et méthodes d’analyses

    Le processus d’installation est complet et complexe, nombreuses sont les problématiques qui peuvent affecter le bon fonctionnement du service. Les problématiques bloquantes peuvent survenir notamment lors de la mise en œuvre initiale. Ce support de cours n’a pas pour vocation de lister l’ensemble des problématiques qui peuvent être rencontrées et leurs solutions. Les éléments présentés sur les diapositives suivantes donnent des méthodes de base pour leur analyse.

    ## MDT – Journaux de déploiement

    L’exploitation des journaux permet d’analyser les problématiques rencontrées sur les services de déploiement. En cas d’erreurs en amont de l’application de l’image d’installation sur un poste, une invite de commande permet de lancer notepad.

    L’accès à une invite de commandes est aussi possible quand le déploiement se bloque sur erreur en cours de processus, avec « Shift » + « F10 ». Une fois l’image de déploiement appliquée, si le système n’est pas opérationnel, passer par le média d’installation, Dépannage, Invite de commande, pour ensuite lancer notepad.

    | Fichier | Rôle écrit |
    |---|---|
    | `X:\MININT\SMSOSD\OSDLOGS\BDD.log` | Journal d’activités et d’erreurs de MDT |
    | `C:\MININT\SMSOSD\OSDLOGS\BDD.log` | Journal d’activités et d’erreurs de MDT |
    | `C:\Windows\Panther\setuperr.log` | Journaux relatifs aux actions de paramétrage effectuées pendant l’installation |
    | `C:\Windows\Panther\setupact.log` | Journaux relatifs aux actions de paramétrage effectuées pendant l’installation |

    L’analyse permet d’identifier l’étape problématique.

    ## TP

    Mise en œuvre de MDT. Module 6 - Atelier 5.

    ## MDT – Pour aller plus loin

    Vous disposez maintenant d’un service de déploiement automatisé pour déployer vos postes. Ce service peut être complété afin de prendre en charge le déploiement d’applications et pilotes.

    ## Déploiement d’applications

    MDT prend en charge le déploiement d’applications après celui du système. Cette fonctionnalité peut aussi bien être utilisée pour déployer des pilotes que des applications. Elle se met en œuvre depuis le répertoire Applications du Deployment Shares. Au besoin, créer une structure afin d’organiser les applications, puis lancer l’assistant d’installation d’applications.

    Étape 1, Application Type : indiquer si l’on fournit l’installeur à l’assistant, qui se charge de l’importer dans la structure du partage de déploiement ; si l’application est à disposition sur un partage réseau ; ou s’il s’agit d’un groupe d’applications.

    Renseigner ensuite successivement les caractéristiques de l’application, le chemin de répertoire dans lequel se trouve l’installeur (créer un répertoire dédié), le nom du dossier qui sera créé dans l’arborescence du partage et contiendra l’installeur, et la commande permettant l’installation silencieuse et non interactive de l’application.

    Modification de CustomSettings.ini. Le support montre le rendu de la fenêtre de sélection, dans ce cas-ci `SkipApplications` vaut NO.

    ## MDT – Gestion des pilotes

    Les pilotes sont nécessaires lors de la phase de boot (contrôleur réseau et stockage ; généralement les pilotes natifs sont suffisants) et lors du déploiement de l’OS (contrôleur vidéo, son, etc.). Import dans « Out-of-Box Drivers », avec possibilité de classement par marque / modèle / OS. Intérêt de disposer d’un parc client le plus homogène.

    Pour la prise en compte lors de la phase de boot, par défaut tous les drivers liés au réseau sont embarqués dans le WinPE. On peut cibler les drivers à installer en utilisant des profils différents.

    ## Démonstration

    Monitoring et MAJ LiteTouchPe.wim. Le titre de la diapositive écrit LiteTouchPe.wim.

    ## TP

    Déploiement d’une application et driver. Module 6 - Atelier 6.

    ## Conclusion

    - Vous savez utiliser MDT et configurer des séquences de tâches pour automatiser le déploiement des systèmes Windows.
    - Vous savez également implémenter le déploiement d’une application et driver.

=== "Cours Optimisé IA"

    MDT automatise ce que le WDS minimaliste laisse interactif. Le schéma du support : WDS envoie LightTouchPE en TFTP, WinPE ouvre le partage, puis l’image WIM suit la séquence de tâches.

    Prérequis écrits : ADK et WinPE, téléchargés chez Microsoft, en ligne ou hors ligne. Les binaires du partage distrib sont **Inexistant**. Le partage reçoit l’image de démarrage, les systèmes, les séquences, puis pilotes et applications.

    ![Visuel externe : arborescence Deployment Workbench d’un partage MDT](../../assets/images/services-transverses-microsoft/m6s-p03-01.webp)

    Création : Deployment Workbench, Deployment Share, New Deployment Share, chemin, nom, description, disque suffisant. L’assistant écrit CustomSettings.ini.

    ![Visuel externe : menu New Deployment Share](../../assets/images/services-transverses-microsoft/m6s-p04-02.webp)

    | Onglet | À y régler |
    |---|---|
    | General | Général et multicast via WDS. |
    | Rules | Bootstrap.ini et CustomSettings.ini. |
    | Windows PE | Médias x86 et x64. |
    | Monitoring | Suivi dans la console. |

    ![Visuel externe : onglet General d’un partage MDT](../../assets/images/services-transverses-microsoft/m6s-p05-03.webp)

    ![Visuel externe : onglet Windows PE d’un partage MDT](../../assets/images/services-transverses-microsoft/m6s-p05-04.webp)

    WinPE sort en WIM et ISO, 32 et 64 bits, dans Boot. Toute modification de cet onglet impose une mise à jour du partage. Les systèmes s’importent depuis un média, un WIM ou les images déjà dans WDS. Les images en trop dans un WIM peuvent être supprimées.

    Bootstrap.ini est lu au chargement de WinPE. Le modifier impose Update Deployment Share, puis le remplacement de l’image de boot dans WDS. CustomSettings.ini est lu au déploiement et n’impose pas cette mise à jour. Les deux sont dans Control, ou dans l’onglet Rules.

    ```ini
    [Settings]
    Priority=Default
    [Default]
    DeployRoot=\\WDS\DeploymentShare$
    UserID=mdt
    UserDomain=deploy.eni
    UserPassword=[masqué]
    KeyboardLocale=fr-FR
    KeyboardLocalePE=040c:0000040c
    SkipBDDWelcome=YES
    ```

    L’exemple de règles du partage : `SkipComputerBackup=NO`, `SkipProductKey=YES`, `SkipAdminPassword` vaut YES, `SkipCapture=NO`, `SkipBitLocker=NO`.

    L’exemple détaillé reprend `TaskSequenceID=ENISALLE09`, `OSDComputerName=ENI-DEMO`, `JoinDomain=deploy.eni`, `DomainAdmin=mdt`, `DomainAdminDomain=deploy.eni`, les locales `fr-FR` et `040C:0000040C`, `Romance Standard Time`, et les sauts de l’installeur, de la capture, de BitLocker et du résumé. `AdminPassword`, `DomainAdminPassword` et `ProductKey` sont `[masqué]`. Le support commente la clé comme une clé KMS pour Windows 10 Pro N.

    Le même compte `mdt` / `deploy.eni` sert à restreindre le partage (partage ou NTFS) et peut joindre le poste au domaine. Le support demande que l’authentification et les ACL restent cohérentes.

    La séquence est liée au système choisi, créée depuis un modèle, et produit Unattend.xml et ts.xml. On l’édite ensuite. Une partie des paramètres n’apparaît que dans Unattend.xml, onglet OS Info. Le cours ne détaille pas ces fichiers.

    Le monitoring, désactivé par défaut, ajoute `EventService=http://W19-MDT1:9800` et se lit dans le nœud Monitoring.

    Après un changement de média, Update Deployment Share régénère LiteTouch.wim, à recopier comme image de démarrage WDS. La démonstration écrit LiteTouchPe.wim.

    Si l’installation bloque avant l’image, notepad s’ouvre depuis l’invite. En cours de déploiement, Shift+F10. Après l’image, si le système ne démarre pas : média, Dépannage, Invite de commande, notepad. Journaux : `BDD.log` sous `X:\MININT\SMSOSD\OSDLOGS` ou `C:\MININT\SMSOSD\OSDLOGS`, puis `C:\Windows\Panther\setuperr.log` et `setupact.log`.

    L’atelier 5 est la mise en œuvre de MDT. L’atelier 6 ajoute une application et un driver.

    Les applications se rangent dans Applications : installeur importé, partage réseau, ou groupe. On donne les caractéristiques, le dossier source, le nom du dossier dans le partage et la commande silencieuse. L’exemple de fenêtre de sélection a `SkipApplications` qui vaut NO.

    Les pilotes de boot (réseau, stockage) sont en général les pilotes natifs ; ceux de l’OS (vidéo, son) s’importent dans Out-of-Box Drivers, classables par marque, modèle et OS. Par défaut, tous les pilotes réseau entrent dans WinPE. Des profils permettent de cibler.
