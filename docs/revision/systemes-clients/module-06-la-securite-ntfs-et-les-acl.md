# Fiche de révision — Module 06 — La sécurité NTFS et les ACL

## ACL, DACL et ACE

- Une **ACL** est une liste de contrôle d’accès appliquée à une ressource.
- Dans le module, la **DACL** rassemble les utilisateurs, groupes et entités de sécurité concernés par les accès à l’objet.
- Une **ACE** définit les privilèges accordés ou refusés à une entité.
- Le support recommande de privilégier les groupes dans les DACL.

## Autorisations à reconnaître

| Autorisation de base | Repères du support |
| --- | --- |
| Lecture | Afficher le contenu, lire, lire et exécuter. |
| Modification | Écrire et modifier. |
| Contrôle total | Niveau le plus étendu présenté pour les besoins courants. |

Les autorisations spéciales se configurent depuis **Avancé** pour affiner certains privilèges.

## Règles d’accès

- Sans ACE applicable qui autorise les droits demandés, l’accès est refusé implicitement. Vérifier aussi les SID des groupes présents dans le jeton.
- Une règle peut autoriser ou refuser un privilège.
- Plusieurs règles peuvent s’appliquer au même utilisateur.
- La règle la plus permissive l’emporte parmi les autorisations.
- L’évaluation suit l’ordre des ACE. Dans une DACL canonique, les entrées explicites précèdent les entrées héritées ; à niveau comparable, les refus précèdent les autorisations.

## Héritage, copie et déplacement

- Un dossier propage par défaut ses autorisations aux objets enfants.
- Les autorisations héritées apparaissent grisées et ne sont pas modifiables directement.
- La gestion de l’héritage se fait depuis le dossier parent ou le menu **Avancé**, avec précaution.

| Opération | Même partition ou volume | Entre deux partitions ou volumes |
| --- | --- | --- |
| Déplacement | Conservation | Héritage |
| Copie | Héritage | Héritage |

## Contrôles à savoir réaliser

1. Lire les autorisations d’un dossier depuis l’onglet **Sécurité**.
2. Tester l’accès avec un utilisateur réellement concerné.
3. Utiliser **Accès effectif** pour comparer les droits d’un membre des groupes Utilisateurs, `L_Collegues` ou Administrateurs selon le scénario.
4. Distinguer une entrée héritée d’une entrée ajoutée sur le dossier.
5. Tenir compte du double jeton d’accès des administrateurs cité par le support.

## PowerShell du module

```powershell
Get-Acl m:\2022
Set-Acl
```

`Get-Acl` est utilisé dans le TP pour afficher les droits du dossier indiqué. `Set-Acl` est la cmdlet identifiée par le scénario pour modifier les ACL d’un dossier.

## Ressources de laboratoire

Le scénario mentionne une VM `Win10-XX`, une VM Discovery et les volumes `DATA` / `TOOLS`. Ces ressources ne sont pas présentes parmi les fichiers du module.

Pour aller plus loin : [cours du module](../../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl.md) · [Kahoot M06](../../kahoot/02-systemes-clients-microsoft-06-la-securite-ntfs-et-les-acl.md).

!!! note "Précision externe — évaluation des accès"
    Le nom du compte peut être absent de la DACL tout en recevant des droits par un groupe. Le raccourci « le refus gagne toujours » ne couvre pas l’ordre explicite/hérité. [Référence Microsoft : contrôle des DACL](https://learn.microsoft.com/en-us/windows/win32/secauthz/how-dacls-control-access-to-an-object).

## Retenir puis vérifier

**L’accès dépend des SID du jeton, des ACE applicables, de leur ordre et des droits demandés.**

1. **Un nom absent de la DACL signifie-t-il forcément un refus ?**

??? success "Réponse expliquée"
    Non. Une ACE visant un groupe de son jeton peut lui accorder les droits. Sans autorisation applicable pour un droit demandé, ce droit est refusé implicitement.

2. **Copie et déplacement conservent-ils toujours les ACL ?**

??? success "Réponse expliquée"
    Non. Dans les opérations ordinaires étudiées, seul le déplacement sur le même volume conserve les ACL ; les autres cas héritent du dossier cible.

3. **Comment vérifier un résultat ?**

??? success "Réponse expliquée"
    Avec Accès effectif puis un test avec le compte concerné, en tenant compte de l’UAC.

[Relire le cours complet](../../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl.md) · [Mettre en pratique](../../tp/systemes-clients/module-06/index.md)
