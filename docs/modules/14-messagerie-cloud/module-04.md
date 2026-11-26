# Module 04 — Services complémentaires

[Travaux pratiques](../../tp/14-messagerie-cloud/module-04/index.md)

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 04 - Support de cours · 24 pages transcrites

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 04 - Support de cours · 24 pages transcrites"]
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 04 - Support de cours · 24 pages transcrites

!!! note "À retenir"
    Les parcours et libellés historiques sont conservés.

Transcription du document source. Les parcours et libellés historiques sont conservés. Les mots de passe, codes de validation et coordonnées nominatives sont neutralisés. Les noms de domaine d’accès des exemples utilisent des domaines réservés à la documentation.

### Module 04 – Services complémentaires

### Objectifs

!!! note "À retenir"
    Déployer le pack Office aux postes clients Maîtriser les enjeux de configuration sur OneDrive Mettre en place des sites SharePoint sécurisés Cadrer l’usage de Teams

**Visuel externe**

```mermaid
flowchart LR
    N1["Déployer le pack Office aux postes clients"]
    N2["Maîtriser les enjeux de configuration sur OneDrive"]
    N3["Mettre en place des sites SharePoint sécurisés"]
    N4["Cadrer l’usage de Teams"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Déployer le pack Office aux postes clients
- Maîtriser les enjeux de configuration sur OneDrive
- Mettre en place des sites SharePoint sécurisés
- Cadrer l’usage de Teams

### Déploiement du Pack Office

### Office Online

!!! note "À retenir"
    Microsoft Word Online Microsoft OneNote Online Microsoft PowerPoint Online Microsoft Excel Online

**Visuel externe**

```mermaid
flowchart LR
    N1["Microsoft Word Online"]
    N2["Microsoft OneNote Online"]
    N3["Microsoft PowerPoint Online"]
    N4["Microsoft Excel Online"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Microsoft Word Online
- Microsoft OneNote Online
- Microsoft PowerPoint Online
- Microsoft Excel Online

### Déploiement du Pack Office

### Office 365 client inclus

!!! note "À retenir"
    Microsoft Office 365 ProPlus Microsoft SharePoint Designer Microsoft Visio Microsoft Project Professionnel Microsoft Office Online Microsoft Office pour Mac Application Office pour iPad, iPhone et iPod touch Application Office pour Android

**Visuel externe**

```mermaid
flowchart LR
    N1["Microsoft Office 365 ProPlus"]
    N2["Microsoft SharePoint Designer"]
    N3["Microsoft Visio"]
    N4["Microsoft Project Professionnel"]
    N5["Microsoft Office Online"]
    N6["Microsoft Office pour Mac"]
    N7["Application Office pour iPad, iPhone et iPod touch"]
    N8["Application Office pour Android"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

- Microsoft Office 365 ProPlus
- Microsoft SharePoint Designer
- Microsoft Visio
- Microsoft Project Professionnel
- Microsoft Office Online
- Microsoft Office pour Mac
- Application Office pour iPad, iPhone et iPod touch
- Application Office pour Android

### Déploiement du Pack Office

### Les nouvelles fonctionnalités depuis Office 2016

!!! note "À retenir"
    Le co-authoring L'intégration OneDrive L'intégration Teams Le support multiplateforme La priorisation des mails dans Outlook

**Visuel externe**

```mermaid
flowchart LR
    N1["Le co-authoring"]
    N2["L'intégration OneDrive"]
    N3["L'intégration Teams"]
    N4["Le support multiplateforme"]
    N5["La priorisation des mails dans Outlook"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

- Le co-authoring
- L'intégration OneDrive
- L'intégration Teams
- Le support multiplateforme
- La priorisation des mails dans Outlook

### Déploiement du Pack Office

### Office 365 ProPlus

!!! note "À retenir"
    Gestion des mises à jour Mises à jour de sécurité Mises à jour des nouvelles fonctionnalités Trois options possibles Canal mensuel Mise à jour mensuelle Canal semi-annuel Tous les six mois (en janvier et juillet) Canal semi-annuel ciblé Tous les six mois (en mars et septembre) à des utilisateurs pilotes

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

### Déploiement du Pack Office

### Office 365 ProPlus

!!! note "À retenir"
    Gestion des installations par l’utilisateur

- Gestion des installations par l’utilisateur

### Déploiement du Pack Office

### Office 365 ProPlus

!!! note "À retenir"
    Gestion des installations par l’utilisateur

- Gestion des installations par l’utilisateur

Dans les options de

chaque utilisateur

### Dans Paramètres/services

et compléments

Déploiement du Pack Office Installation d’Office 365 ProPlus avec sources locales

### Crêpes.local

### 213.186.33.20

### D:\data\O365

### CDN Microsoft

### Serveur AD Serveur DNS

https://config.office.com/

#### Exemple représenté

- Créer un partage sur un serveur membre, dans D:\data\O365, puis configurer le fichier XML pour paramétrer ce qui est téléchargé et installé.

![Extrait du support du module 4, page 5](../../assets/course-sources/isolated/30380f017a48637a/cloud-p5-i3.webp)

Extrait du support du module 4, page 5

![Extrait du support du module 4, page 5](../../assets/course-sources/isolated/30380f017a48637a/cloud-p5-i7.webp)

Extrait du support du module 4, page 5

Déploiement du Pack Office Installation d’Office 365 ProPlus avec sources locales

PS D:\data\office_365> .\setup.exe /download \\SM01\office_365\Configuration.xml

### Crêpes.local

### 213.186.33.20

### D:\data\O365

### D:\data\O365\ODT.exe

### CDN Microsoft

### Serveur AD Serveur DNS

Déploiement du Pack Office Installation d’Office 365 ProPlus avec sources locales

PS D:\data\office_365> .\setup.exe /configure \\SM01\office_365\Configuration.xml

### Crêpes.local

### 213.186.33.20

### D:\data\O365

### CDN Microsoft

### Serveur AD Serveur DNS

#### Exemple représenté

- Installer OfficeDeploymentTools sur le serveur membre puis télécharger les sources depuis les CDN Microsoft vers le partage.
- Exécuter l’installation en ligne de commande ou la lancer via une GPO.

![Extrait du support du module 4, page 6](../../assets/course-sources/isolated/30380f017a48637a/cloud-p6-i3.webp)

Extrait du support du module 4, page 6

![Extrait du support du module 4, page 6](../../assets/course-sources/isolated/30380f017a48637a/cloud-p6-i7.webp)

Extrait du support du module 4, page 6

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

1. Créer un partage nommé : Office_365 sur votre contrôleur de domaine (pas à la racine de C:\). 2. Extraire officedeploymenttool.exe dans ce répertoire. Vous devez avoir ceci
2. Vous pouvez utiliser les modèles .xml ci-dessus ou utiliser le site :

https://config.office.com/

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 4. Choisir votre architecture

![Architecture du déploiement Office](../../assets/course-sources/isolated/30380f017a48637a/cloud-p7-i6.webp)

Architecture du déploiement Office

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 5. Choisir les logiciels que vous voulez déployer

### 6. Choisir le canal de mise à jour

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 7. Choisir les langues

### 8. Choisir les options d’installation supplémentaire

![Choix de la langue](../../assets/course-sources/isolated/30380f017a48637a/cloud-p8-i7.webp)

Choix de la langue

![Options d’installation](../../assets/course-sources/isolated/30380f017a48637a/cloud-p8-i8.webp)

Options d’installation

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 9. Choisir les options de mise à niveau

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 10. Gérer les licences

![Options de mise à jour](../../assets/course-sources/isolated/30380f017a48637a/cloud-p9-i3.webp)

Options de mise à jour

![Licences et activation](../../assets/course-sources/isolated/30380f017a48637a/cloud-p9-i6.webp)

Licences et activation

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 11. Informations générales

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 12. Exporter

### 13. Le .xml est généré

#### Configuration XML de la capture

```
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
```

![Export du fichier XML de configuration](../../assets/course-sources/isolated/30380f017a48637a/cloud-p10-i6.webp)

Export du fichier XML de configuration

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

1. Télécharger les fichiers d'installation d'office avec Office Deployment Tool

PS C:\users\administrator\office_365> .\setup.exe /download \\cd01\office_365\Configuration.xml

1. Une fois le téléchargement effectué, créer une OU pour la ou les machines sur lesquelles vous voulez déployer Office365 ProPlus

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 16. Créer une GPO sur l'OU qui contient vos machines

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

### 17. Éditez la GPO, allez dans Scripts puis ShowFiles

### Déploiement du Pack Office

### Annexe 1 : Déploiement Office 365 ProPlus par GPO

1. Créez un fichier avec Notepad et changez l'extension en .cmd
2. Cliquez sur Add et sélectionnez votre script 20. Connectez-vous sur la machine cliente (l'utilisateur doit être administrateur local)

### PS C:\users\administrator\office_365> gpupdate /force

1. Redémarrez la machine et vérifiez que ce processus est en route

#### Commande du script de démarrage

```
\\cd01\Office_365\setup.exe /configure \\cd01\Office_365\Configuration.xml
```

![Script de démarrage de la GPO](../../assets/course-sources/isolated/30380f017a48637a/cloud-p12-i3.webp)

Script de démarrage de la GPO

![Commande de déploiement dans un script de démarrage](../../assets/course-sources/isolated/30380f017a48637a/cloud-p12-i6.webp)

Commande de déploiement dans un script de démarrage

### Administrer OneDrive

### L’administration OneDrive

- Le centre d'administration OneDrive permet de gérer les fonctionnalités :
- De partage
- De synchronisation
- De stockage

### Administrer OneDrive

### L’administration des partages OneDrive

- Administrez le type de lien par défaut
- Vérifiez les droits applicables au lien

### Administrer OneDrive

### Les partages externes OneDrive

- Une sécurité plus importante peut être mise en place pour les partages externes

![Types de liens de partage](../../assets/course-sources/isolated/30380f017a48637a/cloud-p14-i3.webp)

Types de liens de partage

![Périmètres de partage SharePoint et OneDrive](../../assets/course-sources/isolated/30380f017a48637a/cloud-p14-i6.webp)

Périmètres de partage SharePoint et OneDrive

![Paramètres avancés de partage](../../assets/course-sources/isolated/30380f017a48637a/cloud-p14-i7.webp)

Paramètres avancés de partage

### Administrer OneDrive

### La synchronisation OneDrive

- La synchronisation de vos clients OneDrive peut occasionner des latences sur votre réseau
- La première synchronisation de vos clients est consommatrice de bande passante
- Le client utilise ensuite la synchronisation différentielle afin de ne synchroniser que la partie modifiée d'un document

### Administrer OneDrive

### Gestion des appareils OneDrive

- Vous pouvez spécifier des plages d'adresse IP ou des appareils qui auront accès à OneDrive

![Paramètres de synchronisation](../../assets/course-sources/isolated/30380f017a48637a/cloud-p15-i3.webp)

Paramètres de synchronisation

![Restrictions d’accès par appareil ou emplacement](../../assets/course-sources/isolated/30380f017a48637a/cloud-p15-i6.webp)

Restrictions d’accès par appareil ou emplacement

### Administrer SharePoint

### Administrer SharePoint OneDrive vs SharePoint

### 1 To

### Administrer SharePoint

### SharePoint

- L’utilisation de SharePoint Online entre désormais dans les standards des systèmes d’information
- Ses nombreux atouts comme la disponibilité, le multiplateforme, la coédition en font un outil à forte valeur ajoutée
- Inclus dans la majeure partie des abonnements
- Limite la gestion de serveurs et stockage en interne

### Administrer SharePoint

### SharePoint

- De multiples usages de SharePoint sont possibles :
- Création de bibliothèques de document
- Création de sites Web internes
- Créer des listes
- …
- SharePoint est le socle sur lequel repose Teams

### Administrer SharePoint

#### Les limites

| Fonctionnalité | Microsoft 365 Business Basic, Business Standard ou Business Premium | Microsoft 365 E3 ou E5, Office 365 E1, E3 ou E5, ou SharePoint Plan 1 ou 2 | Microsoft 365 F1 ou F3, Office 365 F3 |
| --- | --- | --- | --- |
| Stockage total par organisation | 1 To plus 10 Go par licence achetée<sup>3</sup> | 1 To plus 10 Go par licence achetée | 1 To |
| Stockage maximum par site (collection de sites)<sup>4</sup> | 25 To | 25 To | 25 To |
| Sites (collections de sites) par organisation | 2 millions | 2 millions | 2 millions |
| Nombre d’utilisateurs | Jusqu’à 300 | 1 - 500 000 | 1 - 500 000 |

Source : https://docs.microsoft.com/fr-fr/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits

### Administrer SharePoint

#### Création d’un site

- Pour héberger vos applications ou documents, il faudra créer un site
- Ce site servira ensuite de conteneur pour l’ensemble de vos ressources

### Administrer SharePoint

### Création de bibliothèques de documents

- L’un des usages les plus fréquents est la création de bibliothèques de documents
- Permet de partager des documents avec des utilisateurs internes ou externes
- L’accès aux documents peut être sécurisé (permissions d’accès)
- Utilisable sur smartphones et tablettes via une application
- Laisser le droit à l’ensemble des utilisateurs de créer des sites peut être synonyme de perte de maîtrise des données de l’entreprise

### Administrer SharePoint

### Points de vigilance

- La synchronisation hors connexion sur l’ensemble d’une bibliothèque peut créer de lourds dysfonctionnements et des pertes de données lorsqu’elle est mal utilisée
- La gestion des permissions peut devenir complexe, préférez la simplicité et la segmentation
- Attention aux données qui seront à héberger sur Sharepoint Online, les fichiers d’application métier (type Photoshop) pourront avoir un effet néfaste sur le confort de travail

### Administrer Teams

### Un usage croissant

- Teams est devenu l’outil incontournable du travail collaboratif
- Microsoft a révélé avoir atteint 115 millions d’utilisateurs actifs quotidiens après une impressionnante croissance tout au long de l’année 2020
- Ce total a été porté en 2 mois en contexte de pandémie mondiale seulement
- Microsoft avait initialement envisagé cette croissance en deux ans
- Cette évolution massive a pu démontrer la puissance de l’éditeur et la robustesse de ses solutions, un atout supplémentaire

### Administrer Teams

### Gestion

- Les fonctionnalités phares comme les équipes et la possibilité de créer des réunions en quelques clics en font un outil puissant mais également dangereux
- À l’image de la création de sites SharePoint, la multiplication d’équipes et une éventuelle ouverture publique de celles-ci peuvent engendrer des fuites de données
- Un panneau d’administration est disponible et va permettre de limiter ces usages

### Administrer Teams

### Limiter la création des équipes

- Conserver la maîtrise de l’environnement Microsoft 365 est essentiel pour une entreprise
- Bon nombre d’administrateurs se rendent compte trop tard que des débordements ont eu lieu et il est difficile de revenir en arrière
- Former un groupe restreint d’utilisateurs et les responsabiliser
- Il est possible de limiter la création de groupes M365 et donc d’équipes en 3 étapes :

1. Création d’un groupe qui sera autorisé à créer des groupes M365 2. Application d’un script fourni par Microsoft 3. Vérification

### Administrer Teams

### Gestion des équipes

- Vous avez la main sur les différentes équipes créées au sein de votre tenant
- Paramétrez le niveau de confidentialité de l’équipe et les différents usages et fonctionnalités disponibles pour les membres

### Administrer Teams

### Gestion des équipes

- Ajoutez des canaux et maîtrisez les membres pour segmenter l’équipe et les accès aux différents canaux
- Paramétrez le niveau de confidentialité de l’équipe et les différents usages et fonctionnalités disponibles pour les membres

![Gestion des canaux Teams](../../assets/course-sources/isolated/30380f017a48637a/cloud-p22-i7.webp)

Gestion des canaux Teams

### Administrer Teams

### Gestion des réunions

- Pour cadrer l’usage de la fonctionnalité dans les réunions Teams, il est possible et recommandé de définir des stratégies
- Elles seront ensuite affectées à un groupe d’utilisateurs

### Administrer Teams

### Gestion des réunions

- Gestion des paramètres audio/vidéo
- Partage de contenu
- Gestion des participants

![Stratégies de réunion Teams](../../assets/course-sources/isolated/30380f017a48637a/cloud-p23-i3.webp)

Stratégies de réunion Teams

![Paramètres participants et invités](../../assets/course-sources/isolated/30380f017a48637a/cloud-p23-i7.webp)

Paramètres participants et invités

### Administrer Teams

### Paramétrage de l’organisation

- Les paramètres à l’échelle de l’organisation vous permettront de définir les fonctionnalités activées lors des appels, réunions ou utilisation de la messagerie pour les utilisateurs invités
- Vous pourrez également maîtriser l’utilisation d’applications tierces de partage de fichiers comme Dropbox ou Google Drive

Référence du document : 1GLjA5f2bv_wItuCtVq5gmJ00cfvMr4k_ · SHA-256 30380f017a48637a…

| Support · Module 04 - Support de cours · 24 pages transcrites | Les parcours et libellés historiques sont conservés. |
