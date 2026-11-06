# Module 06 — Plug-ins et inventaire

Un plug-in étend GLPI sans changer son code principal. Le catalogue du support couvre rapports/graphiques, inventaire, réseau, gestion administrative, helpdesk et import. Une version de plug-in doit correspondre à une ou plusieurs versions de GLPI ; une mise à jour de GLPI peut donc obliger à adapter ses extensions.

Le laboratoire utilise FusionInventory 9.5.0+1.0 et l’agent2.6. Ces versions historiques restent celles de l’exercice. Pour une installation récente, suivre la documentation de la version choisie : GLPI dispose d’un inventaire natif et de GLPI Agent. [Inventaire natif GLPI](https://www.glpi-project.org/en/discover-native-glpi-inventory/), [documentation des équipements](https://glpi-user-documentation.readthedocs.io/fr/master/modules/assets/index.html).

## Objectifs

- Distinguer installation d’un plug-in, activation et communication de l’agent.
- Contrôler les données remontées par l’inventaire du laboratoire.
- Configurer puis vérifier un import DataInjection avec le vrai fichier fourni.

## Deux chemins d’installation

L’installation manuelle télécharge une archiveGzip/Bzip2, l’extrait sous `GlpiInstallationDir/plugins`, puis installe et active l’extension dans **Configuration → Plugins**. La configuration se trouve ensuite dans le menu défini par l’extension. Extraire des fichiers ne suffit pas : installation et activation sont deux étapes à contrôler dans l’interface.

Le Marketplace du support, introduit avecGLPI9.5, demande une inscription et une clé d’enregistrement à renseigner dans **Configuration → Générale**. Cette clé reste dans le laboratoire et ne doit pas être publiée dans les captures ou le cours. Le Marketplace permet ensuite de découvrir et installer les extensions compatibles.

## Comprendre FusionInventory

La partie serveur est un plug-in GLPI ; la partie cliente est un agent Windows, Linux, macOS ouAndroid. Le support lui attribue inventaire automatique, déploiement push/pull, collecte, inventaire distant SNMP, découverte réseau et Wake-on-LAN.

Le client communique périodiquement avec le serveur en HTTP et transmet des documents XML. Le serveur peut demander une communication anticipée. Cette relation explique pourquoi « agent installé » et « machine visible dans GLPI » sont deux états distincts.

```mermaid
flowchart LR
    A["Agent sur le poste"] -->|"Inventaire XML / HTTP"| S["Plug-in serveur"]
    S --> R["Règles d’import et de liaison"]
    R --> O["Ordinateur, composants, entité, lieu"]
```

Ce schéma de synthèse est ajouté au cours. Avant d’importer, préparer les lieux et entités, la relation utilisateur–ordinateur, la limitation des informations inutiles, les dictionnaires et les listes noires. Sans règles d’identification, plusieurs passages peuvent produire des doublons ou déplacer des objets dans la mauvaise entité.

| Règle ou liste du support | But |
|---|---|
| Informations d’ordinateur | Modifier des informations à chaque mise à jour à partir de la collecte |
| Lieu | Affecter ou modifier automatiquement le lieu |
| Entité ordinateur | Déterminer l’entité de rattachement |
| Import et liaison des matériels | Identifier précisément l’objet à mettre à jour ou créer, éviter les doublons |
| Matériels ignorés durant l’import | Examiner ce qui n’a pas été importé après découverte |

Les dictionnaires sont présentés sous **Administration → Dictionnaires**, les règlesFusion sous **Administration → Fusion → Règles**. Les libellés exacts peuvent varier avec la version du laboratoire.

## Déployer le laboratoire

Récupérer l’archive fournie sans l’exécuter comme un programme, puis l’extraire dans le dossier des plug-ins. Exemple correspondant à la structure du TP :

```bash
cp /chemin/fourni/fusioninventory-9.5.0+1.0.tar.bz2 /var/www/glpi/plugins/
cd /var/www/glpi/plugins
tar xvjf fusioninventory-9.5.0+1.0.tar.bz2
chown -R www-data /var/www/glpi/plugins/fusioninventory
```

La solution source insère un espace entre le dossier personnel et le nom d’archive dans `cp` ; il faut une seule cible source complète. Vérifier le nom réel du répertoire extrait avant de lui attribuer son propriétaire. La solution applique le changement à tous les plug-ins ; l’exemple ci-dessus cible l’extension concernée.

Installer et activer depuis GLPI, puis installer l’agent fourni sur le contrôleur de domaine Olympus.gr, comme demandé. Configurer l’URL du serveur du laboratoire, le mode d’exécution et les tâches nécessaires. Contrôler la communication, déclencher un inventaire avec le mécanisme de l’agent installé, puis comparer nom, OS, composants, entité et lieu. Rejouer un inventaire doit mettre à jour le même objet, sans doublon. Les PDF ne donnent pas une procédure complète de forçage : utiliser l’interface ou l’aide de la version installée plutôt qu’inventer un commutateur de commande.

## Importer avec DataInjection

DataInjection importe des CSV. Il faut d’abord décider si l’inventaire automatique fournit déjà les données : importer la même information par deux flux exige une règle de réconciliation claire. Les droits du compte d’import limitent la création des composants et autres objets.

Le support permet notamment ordinateurs, écrans, imprimantes, matériels réseau, téléphones, périphériques, composants, utilisateurs, groupes, entités, contrats, fournisseurs, contacts, informations financières, ports réseau, types de cartouche et de consommable et documents. Il exclut logiciels, versions, licences, données liées au helpdesk et base de connaissance dans le périmètre présenté.

Les quatre étapes sont : créer un modèle, charger un CSV avec ses en-têtes, faire correspondre les colonnes aux champs des tables, puis importer le fichier rempli et lire le rapport. Créer fabricants puis composants puis ordinateurs lorsque les dépendances le nécessitent.

Les deux CSV fournis utilisent le point-virgule et un encodage Windows lisible en Windows-1252. Choisir l’encodage effectif plutôt que supposer qu’un fichier venant d’un système utilise toujours un encodage donné. La diapositive indique UTF-8 pour Linux et ISO 8859-1 pour Windows ; les caractères accentués servent de contrôle avant import.

Le gabarit vide et celui rempli possèdent 33 colonnes : identité/type/lieu/statut/fabricant/modèle/inventaire ; OS/architecture/noyau/version/édition ; CPU ; mémoire ; disque ; carte et port réseau. Le fichier rempli décrit **GAB-Lattitude7520**, un portable Dell, Windows 10 Pro 20H2, i7-1185G7, 4 cœurs/8 threads, mémoire 16000, disque 512000 et port RJ45. Les noms et unités exacts sont conservés dans le [TP](../../tp/glpi/module-06/enonces.md).

Avant l’import réel : vérifier séparateur, accents, en-têtes et correspondances ; importer une ligne ; lire le rapport ; ouvrir la fiche créée ; contrôler incrémentation, lieu, composants et OS ; relancer un essai pour observer le traitement des doublons. « Importation réussie » ne garantit pas que tous les champs ont été associés au bon objet.

## TP — Vérifier l’inventaire puis l’import

1. Vérifier la compatibilité du plug-in avec GLPI 9.5 du scénario. Installer l’extension de l’archive au bon emplacement, contrôler son propriétaire, puis effectuer l’installation et l’activation dans l’interface.
2. Installer l’agent fourni sur le contrôleur de domaine de la maquette. Contrôler la cible configurée et déclencher l’inventaire par le mécanisme de la version installée. Vérifier qu’un second envoi complète la même fiche.
3. Dans DataInjection, préparer le modèle avec le gabarit vide. Vérifier les en-têtes et associer les colonnes au type d’objet attendu. Choisir le champ qui identifie l’ordinateur existant avant de permettre une mise à jour.
4. Charger le fichier rempli avec le séparateur et l’encodage relevés. Importer une ligne, lire le rapport et ouvrir la fiche obtenue. Vérifier les propriétés, puis décider si le modèle permet d’étendre l’import.

| Contrôle | Ce que la preuve doit montrer |
| --- | --- |
| Agent | Le nom, l’OS, les composants et l’entité de la machine attendue apparaissent dans GLPI. |
| Fichier | Le rapport reconnaît les colonnes et les libellés accentués sont lisibles. |
| Mappage | Le modèle, l’inventaire, le lieu, le processeur, la mémoire, le disque et le port apparaissent dans les champs prévus. |
| Réimport | L’identification du même objet est cohérente avec la stratégie de création ou mise à jour retenue. |

Si le rapport est positif mais un champ reste vide, revenir au mappage de cette colonne et vérifier les droits du compte. Si une seconde fiche apparaît, vérifier l’identifiant d’appariement et les règles avant de relancer.

## À retenir

L’agent et l’import peuvent produire des données semblables. Le modèle d’import doit identifier la cible et associer les colonnes. Vérifier la fiche créée et le comportement du réimport.

## Mini-quiz

1. Quelle différence entre installation et activation d’un plug-in ?
2. Pourquoi définir les règles avant l’inventaire ?
3. Pourquoi vérifier l’encodage avant l’import CSV ?
4. Quelle preuve permet de distinguer un rapport positif d’un mappage complet ?
5. Que revoir si le deuxième inventaire crée un doublon ?

??? success "Réponses commentées"
    1. L’installation prépare son fonctionnement ; l’activation le rend disponible dans GLPI.
    2. Pour classer et identifier les objets dès leur arrivée et éviter les doublons.
    3. Un mauvais encodage altère les libellés et peut empêcher la correspondance avec les intitulés.
    4. Ouvrir l’objet créé et vérifier les valeurs dans les champs de destination. Le rapport seul ne prouve pas que chaque champ est renseigné.
    5. Comparer l’identifiant transmis à la fiche existante et vérifier les règles de rapprochement avant de répéter l’inventaire.

## Appliquer ce module

- [Énoncé du TP](../../tp/glpi/module-06/enonces.md)
- [Correction expliquée](../../tp/glpi/module-06/corrections.md)
- [Fiche de révision](../../revision/glpi/module-06-plug-ins-et-inventaire.md)
