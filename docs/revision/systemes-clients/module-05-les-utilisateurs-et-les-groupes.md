# Fiche de révision — Module 05 — Les utilisateurs et les groupes

## À connaître absolument

- Comprendre compte, SID, profil et groupe local.
- Créer et administrer utilisateurs et groupes.
- Appliquer les droits par groupes plutôt qu’individuellement.
- Expliquer l’élévation de privilèges et l’UAC.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Commandes à reconnaître

```text
net user
net user pdupond Pa$$w0rd /add
net localgroup Administrateurs pdupond /add
whoami /all
Get-LocalUser
New-LocalUser -Name "pdupond" -AccountNeverExpires
Add-LocalGroupMember -Group "Administrateurs" -Member "pdupond"
```

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Comprendre compte, SID, profil et groupe local.
- [ ] Créer et administrer utilisateurs et groupes.
- [ ] Appliquer les droits par groupes plutôt qu’individuellement.
- [ ] Expliquer l’élévation de privilèges et l’UAC.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « Les utilisateurs et les groupes » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes.md).
