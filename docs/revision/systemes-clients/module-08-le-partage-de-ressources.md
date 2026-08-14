# Fiche de révision — Module 08 — Le partage de ressources

## À connaître absolument

- Créer un partage SMB et combiner permissions de partage et NTFS.
- Gérer les sessions et fichiers ouverts.
- Monter un partage et tester l’accès avec différents comptes.
- Configurer et sécuriser le Bureau à distance.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Commandes à reconnaître

```text
New-SmbMapping -LocalPath 'R:' -RemotePath '\\SRV-FIC\Compta'
```

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Créer un partage SMB et combiner permissions de partage et NTFS.
- [ ] Gérer les sessions et fichiers ouverts.
- [ ] Monter un partage et tester l’accès avec différents comptes.
- [ ] Configurer et sécuriser le Bureau à distance.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « Le partage de ressources » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources.md).
