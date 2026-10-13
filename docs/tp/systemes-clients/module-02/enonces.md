# Énoncé — Module 02 — Installation de Windows 10

**Durée indiquée par la source :** 1 heure

**Environnement :** VMware Workstation

## Objectif

Créer une machine virtuelle Windows 10, installer et configurer le système, documenter l’installation avec l’Enregistreur d’actions utilisateur, puis importer la machine virtuelle Discovery.

## Ressources attendues

Le scénario source demande les ressources suivantes :

- une image ISO Windows 10 ;
- l’archive `Discovery.ova` ;
- VMware Workstation ;
- des répertoires de travail sur un volume de données.

!!! warning "Ressources non disponibles dans le Drive M02"
    L’ISO Windows 10, `Discovery.ova`, l’archive `.zip.001` mentionnée par `Lisez-moi.txt` et le script associé au laboratoire ne sont pas présents dans le Drive M02 actuel. Ne les remplacez pas par des fichiers supposés équivalents.

## 1. Préparer l’environnement

Sur le volume de données, créez les dossiers :

- `ISO` ;
- `Procédures` ;
- `Vms-WorkStation`.

Copiez l’image ISO Windows 10 fournie par les ressources du laboratoire dans le dossier `ISO`.

## 2. Créer la machine virtuelle

Créez une machine virtuelle de type **Typical** avec les paramètres suivants :

| Paramètre | Valeur demandée |
|---|---|
| Système invité | Windows 10 x64 |
| Nom | `Win10-XX`, où `XX` correspond à vos initiales |
| Emplacement | sous-dossier `Win10-XX` de `Vms-WorkStation` |
| Disque | 32 Go, stocké dans un fichier unique |
| Mémoire | 4 Go |
| Processeur | 1 processeur, 1 cœur |
| Réseau | Host-Only |

## 3. Installer Windows 10 Professionnel

1. Insérez l’ISO Windows 10 dans le lecteur DVD virtuel de `Win10-XX`.
2. Lancez l’Enregistreur d’actions utilisateur avec `psr` et configurez le fichier de sortie : `Procédures\\psr-install-Win10.zip`.
3. Activez la capture d’écran et conservez le nombre maximal de captures récentes.
4. Démarrez la VM puis installez Windows 10 Professionnel en français.
5. N’utilisez pas de clé de produit dans ce scénario de laboratoire ; le support indique l’utilisation du délai de grâce pendant le TP.
6. Choisissez l’installation personnalisée sur la totalité des 32 Go non alloués.
7. À l’issue de l’installation, arrêtez l’enregistrement et utilisez l’archive obtenue pour rédiger votre propre procédure dans `Procédures\\install-Win10.docx`.

## 4. Réaliser la première configuration

Appliquez les choix indiqués dans l’énoncé :

- région France ;
- clavier français, sans disposition supplémentaire ;
- absence de connexion Internet et installation limitée ;
- absence d’historique des activités et d’assistante numérique ;
- désactivation des options de reconnaissance vocale en ligne, d’emplacement, de localisation de l’appareil, de personnalisation, d’amélioration de l’écriture et d’identifiant publicitaire ;
- niveau de données de diagnostic basique.

## 5. Finaliser la machine virtuelle

1. Installez VMware Tools avec l’installation typique.
2. Éjectez le DVD.
3. Éteignez la VM.
4. Créez un instantané nommé `TP1 terminé`.

## 6. Importer Discovery

1. Créez le dossier `Vms-WorkStation\\Discovery`.
2. Importez la VM Discovery depuis l’archive OVA fournie par les ressources du laboratoire.
3. Relevez dans le tableau de contrôle : le nom, l’emplacement, le nombre de disques, la mémoire, les processeurs et la carte réseau.
4. Effectuez seulement les opérations possibles avec les éléments réellement fournis dans votre environnement de laboratoire. Les informations d’accès ou scripts éventuellement contenus dans la source ne sont pas reproduits dans cette page.

## Livrables et vérifications

Vous devez pouvoir présenter :

- la procédure documentée dans `Procédures\\install-Win10.docx` ;
- l’archive PSR correspondante ;
- la VM `Win10-XX` installée ;
- l’instantané `TP1 terminé` ;
- le tableau de contrôle de Discovery, lorsque l’archive OVA est effectivement disponible.

Après une tentative complète, consultez la [correction](corrections.md).
