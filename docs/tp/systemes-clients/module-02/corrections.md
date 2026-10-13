# Correction — Module 02 — Installation de Windows 10

Cette correction reprend le scénario du laboratoire source. Elle ne rend pas disponibles les fichiers qui sont absents du Drive M02.

## 1. Préparer l’environnement

La correction source crée les répertoires `ISO`, `Procédures` et `Vms-WorkStation` sur le volume de données. L’image ISO Windows 10 est ensuite placée dans le dossier `ISO`.

## 2. Contrôler la machine virtuelle

La VM attendue est configurée comme suit :

| Élément | Valeur de la correction |
|---|---|
| Mode de création | Typical |
| Système invité | Windows 10 x64 |
| Nom | `Win10-XX` |
| Emplacement | `Vms-WorkStation\\Win10-XX` |
| Disque | 32 Go, fichier unique |
| Mémoire | 4 Go |
| Processeur | 1 processeur, 1 cœur |
| Réseau | Host-Only |

La VM doit apparaître dans la bibliothèque VMware Workstation avec cette configuration.

## 3. Contrôler l’installation

La correction décrit les étapes suivantes :

1. monter l’ISO Windows 10 dans le lecteur DVD virtuel ;
2. préparer l’Enregistreur d’actions utilisateur ;
3. démarrer la VM et démarrer sur le DVD virtuel ;
4. choisir le français, démarrer l’installation, ne pas renseigner de clé de produit et sélectionner Windows 10 Professionnel ;
5. accepter les termes de licence ;
6. choisir l’installation personnalisée ;
7. laisser l’installation utiliser le disque virtuel de 32 Go ;
8. conserver les captures PSR afin de constituer la procédure.

La correction décrit deux redémarrages jusqu’à l’écran de configuration de base. Cette indication reste rattachée au scénario de correction ; le support de cours décrit séparément son propre déroulé général.

## 4. Contrôler la première configuration

Les contrôles attendus sont :

- région France et clavier français ;
- absence de disposition de clavier supplémentaire ;
- absence de connexion Internet et installation limitée ;
- choix de confidentialité décrits dans le scénario source ;
- arrivée sur le bureau à la fin de la personnalisation.

## 5. Contrôler VMware Tools et l’instantané

La correction attend :

1. l’installation de VMware Tools depuis le DVD inséré par Workstation ;
2. l’exécution de l’installateur 64 bits avec les choix par défaut ;
3. le redémarrage de la VM ;
4. l’éjection du DVD VMware Tools ;
5. la création d’un instantané nommé `TP1 terminé`.

## 6. Contrôler l’import de Discovery

Lorsque `Discovery.ova` est fourni dans l’environnement de laboratoire, l’import attendu est réalisé dans `Vms-WorkStation\\Discovery`.

| Paramètre de Discovery | Valeur indiquée par la correction |
|---|---|
| Disques durs | 4 |
| Mémoire | 4 Go |
| Processeur | 1 |
| Réseau | Host-Only |
| VMware Tools | présents |

!!! warning "Dépendances absentes du Drive M02"
    `Discovery.ova`, l’ISO Windows 10, l’archive `.zip.001` indiquée par le fichier historique `Lisez-moi.txt` et le script de laboratoire ne sont pas présents dans le Drive M02 actuel. Cette correction ne permet pas de les reconstituer.

## Résultat attendu

Le résultat du TP est une VM Windows 10 installée et configurée, accompagnée de la procédure enregistrée, d’un instantané `TP1 terminé` et, lorsque la ressource correspondante est disponible, d’une VM Discovery importée et contrôlée.
