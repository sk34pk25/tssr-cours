# Module 07 — Gestion des espaces de stockage

**Sources originales (A) :** support TSSR « Gestion des espaces de stockage ».
**Contenu du portail (B) :** reformulation structurée de la source TSSR.

## Objectifs

- Distinguer le partitionnement MBR et les systèmes de fichiers.
- Lire la table de partitions avant une opération.
- Préparer un espace de stockage dans un environnement de laboratoire.

## Partitionner avec méthode

La source décrit le MBR : zone de démarrage et table permettant jusqu’à quatre partitions primaires ; une partition étendue peut contenir des partitions logiques. Un partitionnement modifie une structure de stockage : identifier le disque et conserver une sauvegarde avant toute écriture.

```bash
lsblk
fdisk -l
```

Ces commandes servent d’abord à observer. Lister le disque, sa taille, ses partitions et leurs systèmes de fichiers avant de créer ou supprimer quoi que ce soit.

## À retenir

Le stockage se prépare en identifiant le support, la table de partitions et l’usage attendu. Le contrôle précède toute modification irréversible.

## Vérification des acquis

1. Quelle commande liste les périphériques en blocs ?
2. Combien de partitions primaires le modèle MBR décrit-il ?

??? success "Réponses"
    1. `lsblk`.
    2. Quatre.
