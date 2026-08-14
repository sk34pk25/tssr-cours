# Fiche de révision — Module 03 — Interagir avec Windows 10

## À connaître absolument

- Administrer par interface graphique, CMD et PowerShell.
- Découvrir l’aide, les commandes et les cmdlets.
- Manipuler fichiers, processus et services.
- Choisir l’interface adaptée à une tâche ponctuelle ou automatisée.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Commandes à reconnaître

```text
Get-Command
Get-Help Get-Process -Detailed
Get-Process | Where-Object {$_.CPU -gt 10}
Get-Service | Where-Object {$_.Status -eq "Running"}
Get-ChildItem —path c:\users
```

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Administrer par interface graphique, CMD et PowerShell.
- [ ] Découvrir l’aide, les commandes et les cmdlets.
- [ ] Manipuler fichiers, processus et services.
- [ ] Choisir l’interface adaptée à une tâche ponctuelle ou automatisée.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « Interagir avec Windows 10 » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10.md).
