# Module 04 — Services complémentaires

## Cours optimisé · aide pédagogique

Les explications, schémas de synthèse et contrôles de cette partie accompagnent le support. [Consulter la transcription originale et ses visuels](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html).

## Déployer Microsoft 365 Apps

Le TP part d’un poste Windows 10 joint au domaine. L’administrateur contrôle le téléchargement proposé à l’utilisateur puis prépare le déploiement administré. L’outil ODT lit une configuration XML. Cette configuration fixe notamment l’architecture, la langue, les produits, les applications exclues, le canal et les sources. La phase /download prépare les fichiers, puis /configure applique la configuration au poste. [Vue d’ensemble de l’Office Deployment Tool](https://learn.microsoft.com/en-us/deployoffice/overview-office-deployment-tool).

| Étape | Vérification |
| --- | --- |
| Préparer le XML | Architecture, langue, canal et produits compatibles avec les postes et licences du labo |
| Télécharger les sources | Vérifier le partage, le contenu et les droits de lecture |
| Lier la GPO | Placer le poste pilote dans l’OU ciblée, vérifier le lien et le filtrage |
| Redémarrer | Observer l’application de la GPO et l’apparition des applications attendues |
| Tester côté utilisateur | Vérifier l’ouverture d’une application, la connexion et l’activation |

Le script de démarrage s’exécute en contexte ordinateur. Donnez à la machine pilote l’accès de lecture au chemin UNC et conservez le contrôle d’écriture du partage côté administrateurs. Relevez le résultat de la stratégie et l’état du poste pour dissocier un problème GPO d’un problème ODT ou de licence.

## OneDrive, SharePoint et Teams

OneDrive sert au stockage de travail individuel et au partage contrôlé. SharePoint fournit des sites et bibliothèques d’équipe. Teams associe des conversations, réunions et fichiers aux espaces de collaboration. Pour une demande d’accès, identifiez d’abord le site ou la bibliothèque et l’objet qui porte les permissions, puis vérifiez le rôle effectif.

| Niveau | Exemple de question |
| --- | --- |
| Organisation | Le partage externe est-il autorisé et pour quels destinataires ? |
| Site | La politique du site permet-elle ce partage et quelle est la portée du lien ? |
| Bibliothèque ou élément | Les permissions sont-elles héritées ou uniques ? |
| Utilisateur | Quel groupe donne Lecture ou Collaboration et que peut faire le compte de test ? |

Le corrigé applique un modèle AGDLP local puis tente l’attribution dans SharePoint. Vérifiez la remontée des groupes et l’évaluation effective de l’imbrication dans l’environnement. Le site peut restreindre le partage défini au niveau organisation. Vérifiez les deux niveaux et testez un invité avant de conclure. [Vue d’ensemble du partage externe dans SharePoint et OneDrive](https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview).

### Schéma externe au support

~~~mermaid
flowchart LR
    A["Compte de test"] --> B["Groupe de service"]
    B --> C["Groupe affecté à la ressource"]
    C --> D["Site ou bibliothèque"]
    D --> E["Test Lecture / Collaboration"]
~~~

Le support présente les réglages de liens, le contrôle de synchronisation hors connexion et les demandes d’accès. Testez séparément la lecture web, l’édition, la disponibilité hors connexion et le partage à un destinataire externe. Dans Teams, relevez la stratégie appliquée aux utilisateurs ou groupes et vérifiez les droits des invités lors d’une réunion de test.

## Mini-quiz

1. Quelle étape ODT prépare les fichiers pour les postes ?
2. Pourquoi le script de démarrage peut-il échouer alors que le partage s’ouvre dans la session administrateur ?
3. Comment vérifier le rôle Lecture dans SharePoint ?

<details><summary>Réponses</summary>
<ol><li>/download.</li><li>Il s’exécute dans le contexte ordinateur. Vérifier les droits du compte ordinateur et l’accès UNC au démarrage.</li><li>Ouvrir la bibliothèque avec un membre du groupe Lecture, consulter un document et vérifier que l’édition est refusée.</li></ol>
</details>


## Repères dans le support

| Pages | Sujet |
| --- | --- |
| [1–4](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-1) | Objectifs, produits et options |
| [5–12](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-5) | Préparation et déploiement du pack Office |
| [13–15](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-13) | Administration OneDrive |
| [16–19](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-16) | Administration SharePoint |
| [20–24](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-20) | Administration Teams |

## Contenu du support par page

Les titres, exemples et libellés ci-dessous reprennent la transcription. Les figures isolées sont consultables dans la page correspondante.

### Page 1

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-1)

#### Module 04 – Services complémentaires

#### Objectifs

- Déployer le pack Office aux postes clients
- Maîtriser les enjeux de configuration sur OneDrive
- Mettre en place des sites SharePoint sécurisés
- Cadrer l’usage de Teams

### Page 2

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-2)

#### Déploiement du Pack Office

#### Office Online

- Microsoft Word Online
- Microsoft OneNote Online
- Microsoft PowerPoint Online
- Microsoft Excel Online

### Page 3

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-3)

#### Déploiement du Pack Office

#### Office 365 client inclus

- Microsoft Office 365 ProPlus
- Microsoft SharePoint Designer
- Microsoft Visio
- Microsoft Project Professionnel
- Microsoft Office Online
- Microsoft Office pour Mac
- Application Office pour iPad, iPhone et iPod touch
- Application Office pour Android

#### Déploiement du Pack Office

#### Les nouvelles fonctionnalités depuis Office 2016

- Le co-authoring
- L'intégration OneDrive
- L'intégration Teams
- Le support multiplateforme
- La priorisation des mails dans Outlook

### Page 4

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-4)

#### Déploiement du Pack Office

#### Office 365 ProPlus

- Gestion des mises à jour
- Mises à jour de sécurité
- Mises à jour des nouvelles fonctionnalités
- Trois options possibles
- Canal mensuel
- Mise à jour mensuelle
- Canal semi-annuel
- Tous les six mois (en janvier et juillet)
- Canal semi-annuel ciblé
- Tous les six mois (en mars et septembre) à des utilisateurs pilotes

#### Déploiement du Pack Office

#### Office 365 ProPlus

- Gestion des installations par l’utilisateur

### Page 5

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-5)

#### Déploiement du Pack Office

#### Office 365 ProPlus

- Gestion des installations par l’utilisateur

#### Dans les options de

#### chaque utilisateur

#### Dans Paramètres/services

#### et compléments

Déploiement du Pack Office Installation d’Office 365 ProPlus avec sources locales

#### Crêpes.local

#### 213.186.33.20

#### D:\data\O365

#### CDN Microsoft

#### Serveur AD Serveur DNS

https://config.office.com/

##### Exemple représenté

- Créer un partage sur un serveur membre, dans D:\data\O365, puis configurer le fichier XML pour paramétrer ce qui est téléchargé et installé.

### Page 6

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-6)

Déploiement du Pack Office Installation d’Office 365 ProPlus avec sources locales

PS D:\data\office_365&gt; .\setup.exe /download \\SM01\office_365\Configuration.xml

#### Crêpes.local

#### 213.186.33.20

#### D:\data\O365

#### D:\data\O365\ODT.exe

#### CDN Microsoft

#### Serveur AD Serveur DNS

Déploiement du Pack Office Installation d’Office 365 ProPlus avec sources locales

PS D:\data\office_365&gt; .\setup.exe /configure \\SM01\office_365\Configuration.xml

#### Crêpes.local

#### 213.186.33.20

#### D:\data\O365

#### CDN Microsoft

#### Serveur AD Serveur DNS

##### Exemple représenté

- Installer OfficeDeploymentTools sur le serveur membre puis télécharger les sources depuis les CDN Microsoft vers le partage.
- Exécuter l’installation en ligne de commande ou la lancer via une GPO.

### Page 7

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-7)

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

1. Créer un partage nommé : Office_365 sur votre contrôleur de domaine (pas à la racine de C:\). 2. Extraire officedeploymenttool.exe dans ce répertoire. Vous devez avoir ceci
3. Vous pouvez utiliser les modèles .xml ci-dessus ou utiliser le site :

https://config.office.com/

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 4. Choisir votre architecture

### Page 8

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-8)

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 5. Choisir les logiciels que vous voulez déployer

#### 6. Choisir le canal de mise à jour

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 7. Choisir les langues

#### 8. Choisir les options d’installation supplémentaire

### Page 9

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-9)

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 9. Choisir les options de mise à niveau

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 10. Gérer les licences

### Page 10

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-10)

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 11. Informations générales

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 12. Exporter

#### 13. Le .xml est généré

##### Configuration XML de la capture

~~~text
<Configuration>
  <Info Description="déploiement office 365 pour l’organisation de laboratoire" />
  <Add OfficeClientEdition="64" Channel="Monthly" AllowCdnFallback="TRUE" ForceUpgrade="TRUE">
    <Product ID="O365ProPlusRetail">
      <Language ID="fr-fr" />
      <ExcludeApp ID="Groove" />
      <ExcludeApp ID="OneNote" />
      <ExcludeApp ID="Publisher" />
    </Product>
  </Add>
  <Property Name="SharedComputerLicensing" Value="0" />
  <Property Name="PinIconsToTaskbar" Value="TRUE" />
  <Property Name="SCLCacheOverride" Value="0" />
  <Updates Enabled="TRUE" />
  <RemoveMSI All="TRUE" />
  <AppSettings>
    <Setup Name="Company" Value="Organisation de laboratoire" />
  </AppSettings>
</Configuration>
~~~

### Page 11

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-11)

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

14. Télécharger les fichiers d'installation d'office avec Office Deployment Tool

PS C:\users\administrator\office_365&gt; .\setup.exe /download \\cd01\office_365\Configuration.xml

15. Une fois le téléchargement effectué, créer une OU pour la ou les machines sur lesquelles vous voulez déployer Office365 ProPlus

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 16. Créer une GPO sur l'OU qui contient vos machines

### Page 12

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-12)

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

#### 17. Éditez la GPO, allez dans Scripts puis ShowFiles

#### Déploiement du Pack Office

#### Annexe 1 : Déploiement Office 365 ProPlus par GPO

18. Créez un fichier avec Notepad et changez l'extension en .cmd
19. Cliquez sur Add et sélectionnez votre script 20. Connectez-vous sur la machine cliente (l'utilisateur doit être administrateur local)

#### PS C:\users\administrator\office_365&gt; gpupdate /force

21. Redémarrez la machine et vérifiez que ce processus est en route

##### Commande du script de démarrage

~~~text
\\cd01\Office_365\setup.exe /configure \\cd01\Office_365\Configuration.xml
~~~

### Page 13

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-13)

#### Administrer OneDrive

#### L’administration OneDrive

- Le centre d'administration OneDrive permet de gérer les fonctionnalités :
- De partage
- De synchronisation
- De stockage

### Page 14

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-14)

#### Administrer OneDrive

#### L’administration des partages OneDrive

- Administrez le type de lien par défaut
- Vérifiez les droits applicables au lien

#### Administrer OneDrive

#### Les partages externes OneDrive

- Une sécurité plus importante peut être mise en place pour les partages externes

### Page 15

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-15)

#### Administrer OneDrive

#### La synchronisation OneDrive

- La synchronisation de vos clients OneDrive peut occasionner des latences sur votre réseau
- La première synchronisation de vos clients est consommatrice de bande passante
- Le client utilise ensuite la synchronisation différentielle afin de ne synchroniser que la partie modifiée d'un document

#### Administrer OneDrive

#### Gestion des appareils OneDrive

- Vous pouvez spécifier des plages d'adresse IP ou des appareils qui auront accès à OneDrive

### Page 16

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-16)

#### Administrer SharePoint

#### Administrer SharePoint OneDrive vs SharePoint

#### 1 To

### Page 17

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-17)

#### Administrer SharePoint

#### SharePoint

- L’utilisation de SharePoint Online entre désormais dans les standards des systèmes d’information
- Ses nombreux atouts comme la disponibilité, le multiplateforme, la coédition en font un outil à forte valeur ajoutée
- Inclus dans la majeure partie des abonnements
- Limite la gestion de serveurs et stockage en interne

#### Administrer SharePoint

#### SharePoint

- De multiples usages de SharePoint sont possibles :
- Création de bibliothèques de document
- Création de sites Web internes
- Créer des listes
- …
- SharePoint est le socle sur lequel repose Teams

### Page 18

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-18)

#### Administrer SharePoint

#### Les limites

Microsoft 365 Business Basic,

#### Microsoft 365 F1 ou

#### Fonctionnalité

#### Business Standard ou

#### Microsoft 365 E3 ou E5, Office 365 E1, E3 ou E5, ou

#### F3, Office 365 F3

#### Business Premium

#### SharePoint Plan 1 ou 2

#### Stockage total par

organisation 1 To plus 10 Go par licence achetée 3 1 To plus 10 Go par licence achetée 1 To

#### 4 25 To 25 To 25 To

#### Stockage maximum par site (collection de sites)

#### Sites (collections de sites)

#### par organisation 2 millions 2 millions 2 millions

#### Nombre d'utilisateurs Jusqu'à 300 1 - 500 000 1 - 500 000

Source : https://docs.microsoft.com/fr-fr/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits

#### Administrer SharePoint

#### Création d’un site

- Pour héberger vos applications ou documents, il faudra créer un site
- Ce site servira ensuite de conteneur pour l’ensemble de vos ressources

<table><thead><tr><th scope="col">Fonctionnalité</th><th scope="col">Microsoft365BusinessBasic , BusinessStandardou BusinessPremium</th><th scope="col">Microsoft365E3ouE5 , Office365E1 E3ouE5 ou , , SharePointPlan1ou2</th><th scope="col">Microsoft365F1ou F3 Office365F3 ,</th></tr></thead><tbody><tr><td>Stockagetotalpar organisation</td><td>1Toplus10Goparlicenceachetée3</td><td>1Toplus10Goparlicenceachetée</td><td>1To</td></tr><tr><td>Stockagemaximumpar site(collec tiondesit es)4</td><td>25To</td><td>25To</td><td>25To</td></tr><tr><td>Sites(collectionsdesites) parorganisation</td><td>2millions</td><td>2millions</td><td>2millions</td></tr><tr><td>Nombred'utilisateurs</td><td>Jusqu'à300</td><td>1 - 500 000</td><td>1 - 500 000</td></tr></tbody></table>

### Page 19

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-19)

#### Administrer SharePoint

#### Création de bibliothèques de documents

- L’un des usages les plus fréquents est la création de bibliothèques de documents
- Permet de partager des documents avec des utilisateurs internes ou externes
- L’accès aux documents peut être sécurisé (permissions d’accès)
- Utilisable sur smartphones et tablettes via une application
- Laisser le droit à l’ensemble des utilisateurs de créer des sites peut être synonyme de perte de maîtrise des données de l’entreprise

#### Administrer SharePoint

#### Points de vigilance

- La synchronisation hors connexion sur l’ensemble d’une bibliothèque peut créer de lourds dysfonctionnements et des pertes de données lorsqu’elle est mal utilisée
- La gestion des permissions peut devenir complexe, préférez la simplicité et la segmentation
- Attention aux données qui seront à héberger sur Sharepoint Online, les fichiers d’application métier (type Photoshop) pourront avoir un effet néfaste sur le confort de travail

### Page 20

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-20)

#### Administrer Teams

#### Un usage croissant

- Teams est devenu l’outil incontournable du travail collaboratif
- Microsoft a révélé avoir atteint 115 millions d’utilisateurs actifs quotidiens après une impressionnante croissance tout au long de l’année 2020
- Ce total a été porté en 2 mois en contexte de pandémie mondiale seulement
- Microsoft avait initialement envisagé cette croissance en deux ans
- Cette évolution massive a pu démontrer la puissance de l’éditeur et la robustesse de ses solutions, un atout supplémentaire

### Page 21

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-21)

#### Administrer Teams

#### Gestion

- Les fonctionnalités phares comme les équipes et la possibilité de créer des réunions en quelques clics en font un outil puissant mais également dangereux
- À l’image de la création de sites SharePoint, la multiplication d’équipes et une éventuelle ouverture publique de celles-ci peuvent engendrer des fuites de données
- Un panneau d’administration est disponible et va permettre de limiter ces usages

#### Administrer Teams

#### Limiter la création des équipes

- Conserver la maîtrise de l’environnement Microsoft 365 est essentiel pour une entreprise
- Bon nombre d’administrateurs se rendent compte trop tard que des débordements ont eu lieu et il est difficile de revenir en arrière
- Former un groupe restreint d’utilisateurs et les responsabiliser
- Il est possible de limiter la création de groupes M365 et donc d’équipes en 3 étapes :

1. Création d’un groupe qui sera autorisé à créer des groupes M365 2. Application d’un script fourni par Microsoft 3. Vérification

### Page 22

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-22)

#### Administrer Teams

#### Gestion des équipes

- Vous avez la main sur les différentes équipes créées au sein de votre tenant
- Paramétrez le niveau de confidentialité de l’équipe et les différents usages et fonctionnalités disponibles pour les membres

#### Administrer Teams

#### Gestion des équipes

- Ajoutez des canaux et maîtrisez les membres pour segmenter l’équipe et les accès aux différents canaux
- Paramétrez le niveau de confidentialité de l’équipe et les différents usages et fonctionnalités disponibles pour les membres

### Page 23

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-23)

#### Administrer Teams

#### Gestion des réunions

- Pour cadrer l’usage de la fonctionnalité dans les réunions Teams, il est possible et recommandé de définir des stratégies
- Elles seront ensuite affectées à un groupe d’utilisateurs

#### Administrer Teams

#### Gestion des réunions

- Gestion des paramètres audio/vidéo
- Partage de contenu
- Gestion des participants

### Page 24

[Page de la transcription](../../assets/course-sources/30380f017a48637a/transcription-1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_.html#page-24)

#### Administrer Teams

#### Paramétrage de l’organisation

- Les paramètres à l’échelle de l’organisation vous permettront de définir les fonctionnalités activées lors des appels, réunions ou utilisation de la messagerie pour les utilisateurs invités
- Vous pourrez également maîtriser l’utilisation d’applications tierces de partage de fichiers comme Dropbox ou Google Drive

## Travaux pratiques et révisions

- [Ateliers et corrections](../../tp/14-messagerie-cloud/module-04/index.md)
- [Fiche de révision](../../revision/14-messagerie-cloud/module-04.md)
- [Kahoot du module](../../kahoot/14-messagerie-cloud-module-04.md)
- [Tous les modules](index.md)
