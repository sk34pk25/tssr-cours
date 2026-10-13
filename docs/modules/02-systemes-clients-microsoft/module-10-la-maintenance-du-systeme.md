# Module 10 — La maintenance du système

**Séquence :** Systèmes clients Microsoft  
**Objectif :** observer l'état d'un système Windows, interpréter les indices proposés par les outils du module et restaurer un état système dans le périmètre du laboratoire.

## Objectifs pédagogiques

À l'issue de ce module, vous devez pouvoir :

- utiliser les outils de diagnostic système présentés dans le support ;
- distinguer l'analyse en temps réel, l'analyse historique et le diagnostic automatique ;
- activer et gérer un point de restauration système ;
- utiliser WinRE pour récupérer un système défaillant dans le scénario étudié.

## Diagnostiquer performances et fiabilité

Le support relie la maintenance à deux questions complémentaires :

- **performances** : le système peut-il réaliser les tâches demandées ?
- **fiabilité** : le système se comporte-t-il comme attendu au démarrage, lors du lancement des services ou des applications ?

Les quatre ressources observées en priorité sont le **processeur**, la **mémoire**, le **disque** et le **réseau**. Les valeurs relevées varient avec le matériel et la charge du laboratoire : elles sont des observations, non des résultats permanents à reproduire.

### Trois approches présentées

| Approche | Finalité et outils cités dans le support |
| --- | --- |
| Analyse en temps réel | Observer ce qui se produit maintenant avec le Gestionnaire des tâches, l'Observateur d'évènements, le Moniteur de ressources et l'Analyseur de performances. |
| Analyse historique | Comprendre ce qui s'est produit avec l'Historique de fiabilité, les journaux de l'Observateur d'évènements et des compteurs planifiés dans l'Analyseur de performances. |
| Diagnostic automatique | Lancer les diagnostics proposés par Windows, tels que le diagnostic de mémoire ou les packs de résolution de problèmes. Le support précise que ces outils ne détaillent pas nécessairement la solution appliquée. |

### Outils à reconnaître

- **Gestionnaire des tâches** : processus, services, performances du processeur et de la mémoire.
- **Observateur d'évènements** : évènements mémorisés par le système, utilisables en temps réel ou dans les journaux historiques.
- **Moniteur de ressources** : vue détaillée des quatre composants principaux.
- **Analyseur de performances** : compteurs de performance et planification de collectes pour une analyse a posteriori.
- **Historique de fiabilité** : vue synthétique de l'état de santé du système dans le temps.

Dans le TP, l'Historique de fiabilité sert à repérer un évènement critique récent ; le Gestionnaire des tâches et le Moniteur de ressources servent à observer une charge créée dans le laboratoire. Les mesures dépendent des tâches lancées et de la machine réellement utilisée.

## Points de restauration système

Un point de restauration enregistre des modifications du système afin de proposer un retour à un état antérieur. Le support indique qu'il protège notamment le registre, certains fichiers système et les programmes ; il **ne sauvegarde pas les données utilisateur**.

La protection système est activée par volume. Le support la présente comme désactivée par défaut, avec un espace protégé consacré au stockage des points selon une méthode FIFO. Des points peuvent être créés automatiquement lors d'évènements importants, chaque jour ou manuellement.

### Rôle de `sysdm.cpl`

Dans la correction du TP, `sysdm.cpl` ouvre les propriétés système permettant d'accéder à l'onglet **Protection du système**, de sélectionner le volume système, d'activer la protection et de créer un point manuel. Les pourcentages, noms de points et chemins utilisés dans le laboratoire restent propres au scénario source.

## Récupérer avec WinRE

**WinRE** est l'environnement léger de récupération associé au système principal lorsque celui-ci ne démarre plus correctement. Le support lui attribue des outils de diagnostic et de réparation, une possibilité de réinitialisation et des options avancées.

### Accéder à WinRE

Le support présente plusieurs accès :

- depuis le menu Démarrer avec **Maj + Redémarrer** ;
- en ligne de commande avec `shutdown /r /o` ;
- depuis les paramètres de récupération ;
- depuis le support d'installation, par l'option de réparation ;
- automatiquement après les échecs de démarrage et arrêts imprévus décrits dans le support.

### Options avancées et démarrage

Les options avancées citées comprennent la restauration du système par point de restauration, la récupération d'une image système lorsqu'une image valide et son média existent, ainsi qu'une invite de commandes exécutée avec les privilèges adaptés. Le support mentionne aussi les options de démarrage, dont le mode sans échec, la vidéo basse résolution et la désactivation temporaire du contrôle obligatoire des signatures de pilotes.

Au niveau présenté dans le cours, l'outil de redémarrage système peut reconstruire ou réparer un MBR manquant ou corrompu et le magasin BCD. Ces mécanismes sont cités comme fonctions de récupération ; cette page ne fournit pas de procédure de réparation détaillée.

## Comprendre le résultat d'une restauration

Dans le scénario source, les fonctionnalités Windows retirées ou désactivées après la création du point réapparaissent après la restauration. Les fichiers créés dans le dossier Documents après la création du point restent présents : cela illustre la limite du point de restauration concernant les données utilisateur.

Cette interprétation doit être vérifiée dans le laboratoire : elle ne transforme pas le point de restauration en sauvegarde de données personnelles.

## Contrôles issus du TP

1. Relever l'état synthétique et un évènement critique dans l'Historique de fiabilité.
2. Lancer les tâches prévues par le scénario, puis observer processeur, mémoire, réseau et disque avec les outils adaptés.
3. Vérifier l'état de la protection système et la présence d'un point de restauration avant toute restauration.
4. Après le passage par WinRE, démarrer Windows normalement et contrôler les éléments demandés par le scénario : fonctionnalités modifiées et données du dossier Documents.

L'arrêt brutal **PowerOFF** n'est mentionné dans l'énoncé que comme manipulation de scénario lorsqu'aucun évènement critique n'est disponible. Ce n'est pas une procédure générale de maintenance.

## Synthèse

- La maintenance repose sur des indices observés en temps réel et dans l'historique, pas sur une valeur de performance universelle.
- Un point de restauration protège un état du système, mais pas les données utilisateur.
- WinRE fournit un environnement distinct pour diagnostiquer, restaurer ou sélectionner des options de démarrage lorsque le système principal est défaillant.

## Pour pratiquer et réviser

- [Présentation du TP](../../tp/systemes-clients/module-10/index.md)
- [Énoncé du TP](../../tp/systemes-clients/module-10/enonces.md)
- [Correction du TP](../../tp/systemes-clients/module-10/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-10-la-maintenance-du-systeme.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-10-la-maintenance-du-systeme.md)
- [Présentation de la formation](index.md)

## Provenance pédagogique

- **A — Sources TSSR :** support du module 10, énoncé et solution du TP « Maintenance du système » consultés en lecture seule dans Drive.
- **B — Structuration pédagogique :** réorganisation web des notions et contrôles explicitement présents dans les sources A, sans ajout de procédure externe.
