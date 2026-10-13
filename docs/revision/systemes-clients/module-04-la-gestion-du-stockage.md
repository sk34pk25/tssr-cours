# Fiche de révision — Module 04 — La gestion du stockage

## Les repères à distinguer

| Notion | À retenir dans ce module |
|---|---|
| Disque | Support à initialiser et à structurer. |
| Partition / lecteur logique | Portion logique créée sur un disque. |
| Volume | Partition ou lecteur logique formaté ; le support emploie aussi ce terme pour les disques dynamiques. |
| Système de fichiers | Organisation des données installée par le formatage. |

## MBR et GPT

- **MBR** : format historique lu par le BIOS ; le support présente quatre partitions au maximum, ou une partition étendue avec des lecteurs logiques pour dépasser cette organisation.
- **GPT** : format GUID lu par l’UEFI ; le support indique jusqu’à 128 partitions et une duplication des informations de table.

Dans le TP, la correction montre un chemin GPT et décrit séparément l’alternative MBR. Identifier le chemin suivi : ne pas les mélanger.

## Systèmes de fichiers du module

- **NTFS** est utilisé pour les volumes DATA, TOOLS et COMMUN dans le scénario.
- **FAT32** est utilisé pour ARCHIVE dans le scénario.
- Le support cite aussi ReFS, ext4, VMFS et UDF comme repères, sans en faire des étapes du TP.

## Outils et contrôles

| Outil | Contrôle attendu |
|---|---|
| Gestion des disques | Vérifier l’initialisation, l’espace, la taille, la lettre et le système de fichiers du volume ciblé. |
| `diskpart` | Lister les disques et volumes avant de sélectionner celui qui correspond à la consigne, puis relister après formatage. |
| PowerShell | Relever la table de partitionnement avec `Get-Disk` et les informations de volume avec `Get-Volume`. |

Les numéros, lettres et noms vus dans la correction appartiennent au laboratoire. Ils sont à contrôler dans la machine réellement manipulée.

## Précautions source-faithful

Avant une opération de formatage, suppression ou extension :

1. identifier le disque et le volume à partir des informations visibles ;
2. comparer taille, libellé, lettre et table de partitionnement avec la consigne ;
3. exécuter une seule opération ;
4. relister ou rouvrir l’outil pour vérifier le résultat.

## Questions flash

1. Quelle différence le module fait-il entre une partition, un volume et un système de fichiers ?
2. Quel chemin la correction montre-t-elle pour GPT, et quelle alternative décrit-elle pour MBR ?
3. Quelles informations devez-vous vérifier avant de formater ou supprimer un volume ?
4. Quel résultat `Get-Disk` et `Get-Volume` permettent-ils de contrôler dans le TP ?

Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage.md) · [Kahoot](../../kahoot/02-systemes-clients-microsoft-04-la-gestion-du-stockage.md).
