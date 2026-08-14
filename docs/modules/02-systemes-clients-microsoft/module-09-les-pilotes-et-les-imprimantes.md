# Module 09 — Les pilotes et les imprimantes

**Séquence :** Systèmes clients Microsoft  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Le support enseigne Windows 10. Windows 10 a atteint sa fin de support général le 14 octobre 2025 ; les manipulations restent utiles pour le laboratoire et les environnements hérités, mais un déploiement neuf doit viser une édition Windows encore prise en charge. Référence : [Cycle de vie Windows 10](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

## Objectifs et compétences

- Définir le rôle d’un pilote et contrôler sa provenance.
- Installer, mettre à jour ou restaurer un pilote.
- Configurer, partager et dépanner une imprimante.
- Vérifier la file d’attente et le service Spouleur d’impression.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Les pilotes et les imprimantes » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Commandes repérées dans les supports

```text
Get-Printer -name "HP LaserJet"
Get-Printer -Name "HP LaserJet" | select Name,Shared,ShareName,PortName,Location,
```

!!! warning
    Une commande extraite d’un support n’est pas à exécuter aveuglément. Vérifier la version, les droits, la cible et l’existence d’une sauvegarde avant toute action destructive.

## Module 09 - Support de cours

### Systèmes clients Microsoft

#### Module 09 — Les pilotes et les imprimantes

#### Objectifs • Définir un pilote

- Windows et les pilotes

- Windows et les imprimantes

- Utiliser, configurer une imprimante

- Partager une ressource « imprimante »

### Pilotes

- Prise en charge du matériel

- Plug and Play : prise en charge « à chaud »

- Non Plug and Play : nécessite un redémarrage (plus rare)

- Plusieurs modes de prise en charge

- Détection et installation automatique

- Détection et installation manuelle

- Affichage et paramétrage

- Outil Gestionnaire de périphériques

- Devmgmt.msc

#### Gestionnaires de périphériques

- Affichage des composants pris

#### en charge et non pris en charge

- Mettre à jour, désactiver,

#### désinstaller

- Fonctionnalités avancées :

Restaurer le pilote, informations détaillées,

#### paramètres

- Pour la gestion des composants matériel et logiciel

- Spécifiques à chaque architecture : 32 bits ou 64 bits

- Les pilotes signés sont privilégiés par Microsoft

- Les certificats sont délivrés par Microsoft ou générés en suivant les procédures

#### fournies par Microsoft

- Ils permettent de garantir la stabilité des systèmes

- Ils sont obligatoires pour les éditions 64 bits

- Les principaux fichiers

- *.inf : définition du pilote au format texte

- *.sys : pilote lui-même

- *.cat : certificat fourni par Microsoft ou un tiers de confiance

- *.exe, *.dll, *.xml… : fichiers complémentaires selon les besoins

#### Pilotes

- La prise en charge se fait à partir du fichier INF

- Directement depuis le fichier (clic droit Installer)

- À partir d’un assistant d’installation (setup.exe) ou de mise à jour

- Une fois installé, le pilote est mémorisé par le système

- Permet sa réinstallation automatique

- Fichiers INF dans C:\Windows\inf

- Chaque pilote installé manuellement génère un fichier oemXX.inf

- Autres fichiers dans C:\Windows\system32 et C:\Windows\sysWOW64

- Le magasin de pilotes Windows

- Pour une prise en charge immédiate du matériel (installation du système)

- Emplacement : C:\Windows\System32\DriverStore

- Gestion du magasin en ligne de commande avec pnputil

#### En complément

- msinfo32 pour le détail du matériel

- driverquery : outil CMD pour lister les pilotes installés

- driverquery /SI pour lister les pilotes signés

- pnputil : gestion du magasin de pilotes (ajout, suppression, information)

- pnputil /enum-drivers pour lister les pilotes tiers (oemXX.inf)

- pnputil /add-driver pilote.inf pour ajouter un pilote au magasin

#### Démonstration

### Imprimantes

#### Vocabulaire

#### Périphérique

d'impression Le matériel : moteur permettant de sortir la feuille imprimée Imprimante Le logiciel : envoie l'ordre d'impression au périphérique d'impression​

#### (pilote, configuration, file d'attente d'impression, port d'impression)​

#### File d'attente

#### d'impression

#### Service spouleur : conversion numérique du document dans un langage

interprétable par le périphérique d'impression. Envoi du job vers le port

#### d'impression​

Imprimante locale Périphérique d'impression directement relié à l'ordinateur (via un port local)​ Imprimante partagée Imprimante locale partagée sur le réseau grâce à l'OS de l'ordinateur .

#### Disponible si et seulement si l'ordinateur est allumé.​

Imprimante réseau Imprimante indépendante. Possède son propre OS, une interface réseau, un

#### service web pour la configuration​

#### Imprimantes

#### Imprimante locale

- Directement reconnue par le système

- Utilisation d'un pilote générique du magasin de pilote

- Possibilité d'installer le pilote signé du constructeur pour plus de fonctionnalités

- Sécurité NTFS de l'imprimante

#### (Propriétés de l'imprimante onglet Sécurité)

#### Imprimante locale

- Disponible via le composant du

#### Panneau de configuration

- Visualiser la file d'attente et autres

#### options

- Éditer les propriétés de l'imprimante

- Informations générales

- Options avancées (horaire de

#### production, priorité…)

#### Imprimantes

#### Imprimante locale

- Disponible via le composant du Panneau de

#### configuration

- Visualiser la file d'attente et autres options

- Éditer les propriétés de l'imprimante

- Informations générales

- Options avancées (horaire de production, priorité…)

- Partager l'imprimante locale sur le réseau

- Disponible et utilisable via le réseau de l'entreprise

- Accessible depuis le chemin UNC : \\serveur\imprimante

- Disponible si l'ordinateur hôte est allumé

- Les droits NTFS s'appliquent

#### Imprimante réseau

- Les imprimantes sont généralement raccordées au réseau de l’entreprise

- Le service de rôle Serveur d’impression pour

- Partager plusieurs imprimantes

- Centraliser la gestion des imprimantes

- Simplifier l'accès et la gestion des imprimantes

#### Depuis le client

- Accès au serveur d'impression depuis le chemin UNC

- …puis connecter…

#### Réseau

#### Imprimantes

#### Le spouleur d'impression

- Programme qui gère la file d'attente

- Envoie les travaux d'impression au périphérique d'impression

- Peut être déplacé via une clé de la base de registre

#### Créer un pool d'impression

- Imprimante connectée à plusieurs périphériques d'impression

- Distribuer automatiquement les travaux d'impression à la

#### prochaine imprimante disponible

- Réduit les délais d'attente des documents pour les

utilisateurs.

### Démonstration

#### TP

### Conclusion • Les périphériques ont besoin

- D’une liaison à un ordinateur

- Liaison locale

- Liaison réseau

- Les ordinateurs ont besoin

- D’un « mode d’emploi » du périphérique

- Les imprimantes sont des ressources à part

#### entière

## Mise en pratique

- [Travaux pratiques du module](../../tp/systemes-clients/module-09/index.md)
- [Fiche de révision du module](../../revision/systemes-clients/module-09-les-pilotes-et-les-imprimantes.md)

## Questions flash

1. Comment expliquer simplement « Les pilotes et les imprimantes » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Définir le rôle d’un pilote et contrôler sa provenance.
    - Installer, mettre à jour ou restaurer un pilote.
    - Configurer, partager et dépanner une imprimante.
    - Vérifier la file d’attente et le service Spouleur d’impression.

## Voir aussi

- [Présentation de la séquence](index.md)
