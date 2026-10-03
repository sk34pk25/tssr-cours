# Module 08 — Gestion des espaces de stockage avancée — LVM

**Sources originales (A) :** support et TP TSSR « Manipuler les disques et LVM ».
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Identifier volumes physiques, groupes de volumes et volumes logiques.
- Comprendre l’intérêt de la couche LVM.
- Contrôler une structure LVM avant sa modification.

## Le modèle LVM

LVM ajoute une couche logique entre les périphériques et les systèmes de fichiers. Les volumes physiques (PV) alimentent un groupe de volumes (VG), à partir duquel on crée des volumes logiques (LV). Cette souplesse n’annule pas les contraintes physiques : une opération doit être planifiée avec l’état réel des volumes et des sauvegardes.

```bash
pvs
vgs
lvs
```

## Méthode

1. Observer PV, VG et LV existants.
2. Vérifier l’espace libre du groupe de volumes.
3. Préparer la modification sur un volume de laboratoire.
4. Vérifier le système de fichiers et le montage après l’opération.

## À retenir

LVM rend l’allocation plus flexible, mais chaque niveau — PV, VG, LV et système de fichiers — doit être identifié séparément.

## Vérification des acquis

1. Quel objet regroupe les volumes physiques ?
2. Quelle commande liste les volumes logiques ?

??? success "Réponses"
    1. Le groupe de volumes (VG).
    2. `lvs`.
