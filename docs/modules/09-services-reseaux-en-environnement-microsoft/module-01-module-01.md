# Module 01 — Administration Windows

Dans le laboratoire, Windows Server fournit les rôles de l’infrastructure et Windows 10 sert de poste client. Les deux TP construisent d’abord trois machines réutilisables, puis vérifient comment les volumes réagissent à la perte d’un disque.

## Versions, éditions et modes d’installation

Le support situe Windows Server 2008/R2, 2012/R2, 2016, 2019, 2022 et 2025 face aux générations clientes Windows 7, 8/8.1, 10 et 11. Le TP installe Windows Server 2019 Standard et Windows 10. Standard, Datacenter et Essentials répondent à des besoins distincts de virtualisation, capacité et licence. Le tableau du support conserve ses valeurs historiques. Pour dimensionner un autre serveur, vérifier les prérequis correspondant à sa version. [Configuration matérielle Windows Server](https://learn.microsoft.com/windows-server/get-started/hardware-requirements).

Une licence du système permet son installation. Les licences d’accès client concernent l’accès aux services du serveur, avec des besoins supplémentaires possibles pour RDS. Pour le TP, la distinction opérationnelle est entre Server Core, administrable par commandes et outils distants, et l’Expérience de bureau, qui fournit l’environnement graphique utilisé par les démonstrations.

| Composant | Rôle dans l’infrastructure |
|---|---|
| AD DS | Domaine, comptes, machines et authentification |
| DNS | Résolution de noms et localisation des services |
| DHCP | Attribution automatique des paramètres IP |
| Hyper-V | Création et gestion de machines virtuelles |
| WDS, WSUS | Déploiement de systèmes et gestion des mises à jour |
| Impression | Centralisation des ports, pilotes, files et partages |
| AD FS, AD RMS, AD CS | Fédération d’identité, protection de ressources et certificats. Le support les cite comme extensions du parcours. |

Un **rôle** correspond généralement au service fourni aux clients. Une **fonctionnalité** apporte un composant ou un outil au serveur. Le Gestionnaire de serveur installe et supervise ces composants. Les consoles de rôle, les outils distants, PowerShell et CMD servent aux tâches ciblées.

## Préparer et contrôler l’installation

Les modèles `VM_Modele_2019` et `VM_Modele_W10` disposent chacun de 32 Go de disque, 2 Go de mémoire et d’une carte en bridge dans le scénario. Installer le système, les VMware Tools, exécuter Sysprep avec les options du TP, arrêter puis conserver les modèles dans leur dossier dédié. Les clones servent aux manipulations. Les machines du TP sont `W19-CD1` à `172.28.10.1`, `W19-SRV1` à `172.28.10.2` et `W10-CLI1` à `172.28.10.11`.

Avec le masque `/16`, le préfixe réseau canonique est `172.28.0.0/16`. Le support note `172.28.10.0/16` pour désigner la plage de salle. Les trois adresses d’hôte restent celles du scénario. Après renommage et configuration IP, vérifier l’accès à `http://localhost` sur IIS, puis ouvrir une session Bureau à distance depuis le client vers le serveur désigné. L’assistant d’ajout de rôles permet d’installer IIS et la Sauvegarde Windows Server.

```cmd
ipconfig /all
ping 172.28.10.2
mstsc /?
```

## Partitionner puis formater

La table de partition décrit nombre, position et taille des partitions. MBR propose au plus quatre entrées principales, ou trois principales plus une partition étendue contenant des lecteurs logiques. Sa limite usuelle est proche de 2 Tio avec secteurs de 512 octets. GPT conserve une copie de ses métadonnées en fin de disque et Windows prend en charge jusqu’à 128 partitions. Le démarrage de Windows sur GPT implique un démarrage UEFI. Un disque GPT de données ne dépend pas de ce mode d’amorçage.

Le disque de base stocke les données dans les partitions d’un disque. Le disque dynamique du TP permet les volumes sur plusieurs disques. Le support indique une conversion de base vers dynamique sans supprimer les données et un retour qui demande la suppression préalable des volumes. Avant une conversion, identifier le disque et contrôler la possibilité de restaurer ses données.

| Volume | Répartition | Capacité utile pour des portions de même taille |
|---|---|---|
| Simple | Un disque | Portion allouée |
| Fractionné | Plusieurs espaces combinés | Somme des portions. La perte d’un disque compromet le volume. |
| RAID 0 | Bandes réparties sur les disques | Somme des portions. Aucune tolérance de panne. |
| RAID 1 | Copie identique sur deux disques | Une portion. Tolère la perte d’un des deux disques. |
| RAID 5 | Bandes et parité distribuée sur au moins trois disques | Total moins l’équivalent d’une portion. Tolère la perte d’un disque. |

Deux portions de 100 Go donnent 200 Go en RAID 0 ou 100 Go en miroir. Trois portions de 100 Go donnent 200 Go utiles en RAID 5. Le schéma RAID 5 du support contient le libellé « volume en miroir » à côté de la capacité logique. Le mécanisme décrit est bien la parité distribuée. Une redondance maintient certains accès pendant une panne, tandis qu’une sauvegarde permet de restaurer une autre copie des données.

Après la création du volume, choisir le système de fichiers. Le support cite FAT32/exFAT, NTFS et ReFS. Les outils de l’exercice sont Gestion des disques (`diskmgmt.msc`), `diskpart` et les commandes PowerShell de stockage.

## Valider le TP de stockage

Déplacer la lettre du CD vers `L:` et ajouter trois disques SCSI de 10 Go à `W19-SRV1`. Créer `D:\` Données, RAID 5 d’environ 6 Go utiles, le miroir de 4 Go monté sur `C:\INFO-TOOLS` avec les disques 1 et 3, puis `E:\` Database en bandes pour 8 Go utiles. Déposer des fichiers témoins avant de retirer le disque 3 dans la VM. Contrôler l’état des volumes et leurs fichiers, puis reconstruire la redondance sur un disque de remplacement. La lisibilité d’un volume en état dégradé prouve seulement qu’il supporte encore la panne simulée.

### Mini-quiz

1. Que distingue un rôle d’une fonctionnalité ?
2. Quelle capacité utile donnent trois portions de 3 Go en RAID 5 ?
3. Pourquoi garder les modèles Sysprep arrêtés ?

??? success "Réponses"
    1. Le rôle fournit généralement un service, tandis que la fonctionnalité ajoute un composant ou un outil.
    2. 6 Go. La parité utilise l’équivalent d’une portion.
    3. Les clones consomment leur propre configuration initiale. Le modèle reste disponible pour les prochains déploiements.


## Appliquer le cours

- [Travaux pratiques et démonstrations](../../tp/services-reseaux-microsoft/module-01/index.md)
- [Fiche de révision](../../revision/services-reseaux-microsoft/module-01-module-01.md)
