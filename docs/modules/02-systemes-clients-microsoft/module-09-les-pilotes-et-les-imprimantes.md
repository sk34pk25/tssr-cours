# Module 09 — Les pilotes et les imprimantes

**Séquence :** Systèmes clients Microsoft  
**Objectif :** identifier le rôle d'un pilote, utiliser les outils de diagnostic prévus par le module et comprendre les principaux modes de mise à disposition d'une imprimante.

## Objectifs pédagogiques

À l'issue du module, vous devez pouvoir :

- définir le rôle d'un pilote et situer la prise en charge du matériel dans Windows ;
- consulter les informations matérielles et les pilotes avec les outils indiqués dans le support ;
- distinguer périphérique d'impression, imprimante logicielle, file d'attente et spouleur ;
- configurer et vérifier une imprimante locale, partagée ou réseau dans le scénario de TP ;
- relever des informations sur une imprimante avec PowerShell lorsque le TP le demande.

## Pilotes : assurer la prise en charge du matériel

Un pilote permet au système de prendre en charge un composant matériel. Le support présente deux modes de détection : la prise en charge **Plug and Play**, y compris « à chaud », et les matériels non Plug and Play, plus rares, qui peuvent nécessiter un redémarrage.

L'installation peut être automatique ou manuelle. Après son installation, Windows conserve le pilote afin de pouvoir le réinstaller automatiquement lorsque le matériel est de nouveau détecté.

### Gestionnaire de périphériques

La console `devmgmt.msc` permet d'afficher les composants pris en charge ou non et d'accéder, selon le périphérique, à la mise à jour, la désactivation, la désinstallation, la restauration du pilote, aux informations détaillées et aux paramètres.

Dans le TP, cette console sert à observer le pilote graphique de la machine de laboratoire. Les noms du matériel, les identifiants compatibles et les valeurs relevées sont des **observations du scénario de laboratoire** : ils ne décrivent pas tous les postes Windows.

### Architecture, signature et fichiers

Le support rappelle qu'un pilote est propre à une architecture 32 ou 64 bits. Il indique que les pilotes signés sont privilégiés pour la stabilité et requis par les éditions 64 bits présentées dans le cours.

| Élément | Rôle indiqué dans le support |
| --- | --- |
| `.inf` | Définition textuelle du pilote et point de départ de sa prise en charge. |
| `.sys` | Fichier du pilote lui-même. |
| `.cat` | Certificat fourni par Microsoft ou par un tiers de confiance. |
| `.exe`, `.dll`, `.xml` | Fichiers complémentaires éventuels. |

Le support cite l'installation depuis un fichier INF, par l'option d'installation du fichier ou par un assistant tel que `setup.exe`. Il mentionne également les emplacements `C:\\Windows\\inf`, `C:\\Windows\\System32`, `C:\\Windows\\SysWOW64` et les fichiers `oemXX.inf` associés à une installation manuelle.

### Magasin de pilotes et outils prévus

Le **Driver Store** est présenté comme le magasin utilisé pour permettre une prise en charge immédiate du matériel. Son chemin indiqué est `C:\\Windows\\System32\\DriverStore`.

| Outil | Usage attesté par le support |
| --- | --- |
| `msinfo32` | Consulter le détail du matériel. |
| `driverquery` | Lister les pilotes installés. |
| `driverquery /SI` | Lister les pilotes signés. |
| `pnputil` | Gérer le magasin de pilotes : information, ajout ou suppression. |
| `pnputil /enum-drivers` | Lister les pilotes tiers, notamment les `oemXX.inf`. |
| `pnputil /add-driver pilote.inf` | Ajouter un pilote au magasin. |

Dans le TP, les commandes `driverquery` produisent des fichiers CSV afin de consulter les informations détaillées et la signature des pilotes. Respectez le nom de fichier demandé par l'énoncé ; la correction emploie une variante de nom qui est signalée comme divergence documentaire, sans normalisation automatique.

## Comprendre les imprimantes

Le support distingue le matériel du service logiciel qui lui envoie un travail d'impression.

| Terme | Définition au niveau du support |
| --- | --- |
| Périphérique d'impression | Matériel qui produit la feuille imprimée. |
| Imprimante | Partie logicielle qui envoie l'ordre d'impression : pilote, configuration, file et port. |
| File d'attente | Ensemble des travaux en attente. |
| Spouleur | Service qui convertit le document dans un langage interprétable par le périphérique et envoie le travail vers le port. |

### Locale, partagée ou réseau

Une imprimante **locale** est reliée directement à l'ordinateur. Elle peut utiliser un pilote générique du magasin de pilotes ou un pilote signé du constructeur. Le panneau de configuration donne accès à sa file d'attente et à ses propriétés, notamment les options avancées citées dans le support.

Une imprimante **partagée** est une imprimante locale mise à disposition par le système de l'ordinateur hôte. Le support la présente via un chemin UNC de la forme `\\\\serveur\\imprimante` et rappelle qu'elle est disponible lorsque l'hôte est allumé.

Une imprimante **réseau** possède sa propre interface réseau et son propre service de configuration. Dans le contexte d'entreprise présenté, un serveur d'impression peut centraliser le partage de plusieurs imprimantes. Depuis un client, l'accès se fait alors par le chemin UNC indiqué par le scénario.

Le support décrit aussi un **pool d'impression** : une imprimante logique reliée à plusieurs périphériques afin de distribuer les travaux vers le périphérique disponible.

## Méthode de vérification du TP

Le TP fournit une démarche de contrôle concrète :

1. produire et ouvrir les CSV demandés pour vérifier les informations sur les pilotes ;
2. consulter le pilote graphique dans le Gestionnaire de périphériques et relever les informations demandées dans le laboratoire ;
3. comparer les imprimantes observées dans les interfaces prévues par l'énoncé ;
4. définir Microsoft Print to PDF comme imprimante par défaut, régler l'orientation demandée et vérifier le document PDF produit ;
5. connecter l'imprimante partagée du scénario, puis contrôler sa présence dans les interfaces Windows ;
6. sur la machine indiquée, interroger l'imprimante avec `Get-Printer` pour relever les propriétés demandées.

Les noms de machines, d'imprimantes, de partages, les identifiants matériels et les résultats d'observation utilisés dans ces étapes appartiennent au laboratoire. Ils ne doivent pas être repris comme des valeurs universelles.

## Synthèse

- Le pilote relie Windows au matériel ; le Gestionnaire de périphériques et les outils du support permettent de l'observer et de le gérer.
- Les fichiers `.inf`, `.sys` et `.cat` jouent des rôles distincts dans cette prise en charge.
- Une imprimante est une configuration logicielle associée à un périphérique, une file, un port et un pilote ; le spouleur traite les travaux d'impression.
- Le type d'imprimante et le mode de partage déterminent où elle est disponible et comment le client y accède.

## Aller plus loin dans le module

- [TP : pilotes et imprimantes](../../tp/systemes-clients/module-09/index.md)
- [Énoncé du TP](../../tp/systemes-clients/module-09/enonces.md)
- [Correction du TP](../../tp/systemes-clients/module-09/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-09-les-pilotes-et-les-imprimantes.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-09-les-pilotes-et-les-imprimantes.md)
- [Présentation de la formation](index.md)

## Provenance pédagogique

- **A — Sources TSSR :** support du module 09, énoncé et solution du TP « Les pilotes et les imprimantes ».
- **B — Structuration pédagogique :** réorganisation web des notions et des contrôles explicitement présents dans les sources A, sans ajout de procédure externe.
