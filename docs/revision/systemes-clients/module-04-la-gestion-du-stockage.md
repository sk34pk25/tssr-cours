# Fiche de révision — Module 04 — La gestion du stockage

## À connaître absolument

- Distinguer MBR, GPT, partitions, volumes et systèmes de fichiers.
- Initialiser, partitionner et formater un disque.
- Utiliser Gestion des disques, DiskPart et PowerShell.
- Contrôler l’état et les lettres de lecteur avant toute opération destructive.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Commandes à reconnaître

```text
diskpart
select disk 1
create partition primary
Get-Disk
Initialize-Disk -Number 1 -PartitionStyle GPT
New-Partition -DiskNumber 1 -UseMaximumSize -AssignDriveLetter
Format-Volume -DriveLetter E -FileSystem NTFS -NewFileSystemLabel "Donnees"
```

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Distinguer MBR, GPT, partitions, volumes et systèmes de fichiers.
- [ ] Initialiser, partitionner et formater un disque.
- [ ] Utiliser Gestion des disques, DiskPart et PowerShell.
- [ ] Contrôler l’état et les lettres de lecteur avant toute opération destructive.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « La gestion du stockage » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage.md).
