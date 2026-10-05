# Fiche de révision — Module 08 — Gestion des espaces de stockage avancée — LVM

**Sources originales (A) :** support et TP M08 Drive. **Fiche (B) :** synthèse reformulée.

## Chaîne LVM

`PV` (volume physique) → `VG` (groupe de volumes) → `LV` (volume logique) → système de fichiers. Les commandes suivent ce vocabulaire : `pvcreate`, `vgcreate`/`vgextend`, `lvcreate`, `lvextend`, puis `pvs`, `vgs`, `lvs` pour contrôler.

- Une partition destinée à LVM reçoit le type Linux LVM (`8e`) dans le scénario source.
- `lvcreate -n nom -L taille VG` crée un LV ; `lvextend -l 100%FREE /dev/VG/LV` affecte l’espace libre restant du groupe.
- Toujours identifier le disque, le VG et le LV existants avant une commande d’écriture.

## À connaître absolument

- Comprendre PV, VG et LV.
- Repérer le disque ajouté avant de le partitionner.
- Transformer la partition en PV, l’ajouter au VG, puis créer ou étendre le LV attendu.
- Contrôler avec `pvs`, `vgs` et `lvs` avant et après l’opération.

## Séquence du TP M08

1. Ajouter le disque de laboratoire et le détecter dans la VM.
2. Créer la partition et lui attribuer le type Linux LVM (`8e`) du scénario.
3. Créer le PV, étendre le VG, créer `lvvar` de 20 Go et étendre `lvhome` avec l’espace libre restant.
4. Vérifier l’état des PV, VG et LV ; ne pas déduire leurs noms à l’avance.

## Checklist de maîtrise

- [ ] Comprendre PV, VG et LV.
- [ ] Identifier un disque de laboratoire sans supposer son nom.
- [ ] Interpréter les sorties de `pvs`, `vgs` et `lvs`.
- [ ] Expliquer l’effet de `pvcreate`, `vgextend`, `lvcreate` et `lvextend`.

Pour approfondir : [cours complet](../../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md) · [TP](../../tp/administration-linux/module-08/index.md) · [mémo LVM](../../memo/lvm-debian.md).
