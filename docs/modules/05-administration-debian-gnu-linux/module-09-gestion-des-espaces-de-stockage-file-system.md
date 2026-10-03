# Module 09 — Gestion des espaces de stockage — File System

**Sources originales (A) :** support et TP TSSR « Préparation des systèmes de fichiers ».
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Identifier le rôle d’un système de fichiers et d’un point de montage.
- Vérifier les systèmes de fichiers et leur occupation.
- Distinguer formatage, montage et persistance du montage.

## Du bloc aux données

Un système de fichiers organise les données sur un espace de stockage. Le formatage prépare une partition ; le montage rend ce système de fichiers accessible dans l’arborescence. Ces étapes sont différentes et doivent être vérifiées séparément.

```bash
lsblk -f
df -h
mount | column -t
```

## Points d’attention

- Formater détruit la structure de données de la cible : confirmer le périphérique avant la commande.
- Un montage manuel peut disparaître après redémarrage si sa configuration persistante n’est pas prévue.
- Utiliser des identifiants stables et vérifier le résultat après redémarrage dans le laboratoire.

## À retenir

Un espace de stockage est utilisable lorsqu’il est correctement préparé, monté à l’emplacement attendu et contrôlé dans le temps.

## Vérification des acquis

1. Quelle commande affiche les systèmes de fichiers et leurs UUID ?
2. Pourquoi distinguer formatage et montage ?

??? success "Réponses"
    1. `lsblk -f`.
    2. Le formatage crée une structure ; le montage la rend accessible dans l’arborescence.
