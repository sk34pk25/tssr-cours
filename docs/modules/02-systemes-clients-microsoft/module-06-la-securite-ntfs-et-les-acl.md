# Module 06 — La sécurité NTFS et les ACL

**Séquence :** Systèmes clients Microsoft

## Objectifs

À l’issue du module, vous devez pouvoir :

- définir les ACL et repérer leur rôle sur un volume formaté en NTFS ;
- lire les éléments principaux d’une DACL et les autorisations associées ;
- configurer puis vérifier des accès dans un scénario de laboratoire ;
- tenir compte des groupes, de l’héritage, des copies et des déplacements.

## 1. NTFS et les ACL

Sur un volume formaté en **NTFS**, les répertoires et les fichiers sont soumis à la sécurité NTFS. Des autorisations définissent les privilèges d’accès. Lorsqu’un utilisateur tente d’accéder à une ressource, son **jeton d’accès** est pris en compte par cette ressource.

Les autorisations sont consultables et modifiables depuis l’onglet **Sécurité** des propriétés d’un objet. Le support présente cet onglet comme le point d’entrée pour lire la liste des groupes, utilisateurs et entités de sécurité auxquels des autorisations sont appliquées.

## 2. ACL, DACL et ACE

Une **ACL** est une liste de contrôle d’accès. Dans le contexte du module, la **DACL** (*Discretionary Access Control List*) rassemble les utilisateurs, groupes et entités de sécurité concernés par l’accès à l’objet.

Chaque **ACE** (*Access Control Entry*) correspond aux privilèges accordés ou refusés à l’entité visée. Le support recommande de privilégier les groupes dans les DACL plutôt que de multiplier les utilisateurs individuels.

## 3. Lire les autorisations

Les autorisations de base citées sont cumulatives :

| Niveau | Repères donnés par le support |
| --- | --- |
| Lecture | Affichage du contenu du dossier, lecture, lecture et exécution. |
| Modification | Écriture et modification. |
| Contrôle total | Niveau le plus étendu présenté pour les besoins courants. |

Pour des besoins spécifiques, le menu **Avancé** permet d’accéder à des autorisations spéciales, par exemple la création de fichiers ou la suppression de sous-dossiers et de fichiers.

## 4. Appliquer les règles d’accès

Le support distingue les règles explicites et les mécanismes suivants :

- une entité absente de la DACL reçoit un **refus implicite** ;
- une règle peut autoriser un privilège ou le refuser ;
- plusieurs règles peuvent s’appliquer à un même utilisateur ;
- parmi les autorisations, la règle la plus permissive l’emporte ;
- un **refus explicite** l’emporte sur une autorisation.

Ces règles doivent être lues avec les appartenances aux groupes du compte testé. Dans le TP, les groupes `L_Collegues` et `L_Informatiques` servent précisément à attribuer les accès demandés sans placer directement les utilisateurs nommés dans la DACL.

## 5. Comprendre l’héritage

Par défaut, un répertoire propage ses autorisations à ses objets enfants. Dans l’interface, les autorisations héritées apparaissent grisées et ne sont pas modifiables directement.

Pour modifier ce comportement, le support indique deux possibilités : agir sur le dossier parent — parfois sur le volume racine — ou rompre l’héritage depuis le menu **Avancé**, avec précaution. Il indique également qu’une autorisation d’accès l’emporte sur un refus explicite hérité.

## 6. Copier ou déplacer

Le comportement présenté dans le support dépend de l’opération et de l’emplacement :

| Opération | Dans la même partition ou le même volume | Entre deux partitions ou volumes |
| --- | --- | --- |
| Déplacement | Conservation | Héritage |
| Copie | Héritage | Héritage |

Avant de conclure sur un résultat, vérifiez donc la ressource d’origine, la destination et les autorisations héritées par l’objet après l’opération.

## 7. Vérifier un accès

Le module demande de ne pas se limiter à la configuration affichée. Deux vérifications sont présentées :

1. tester l’accès avec les utilisateurs concernés ;
2. consulter l’onglet **Accès effectif** du menu **Avancé**.

La correction illustre ces contrôles avec un membre du groupe prédéfini Utilisateurs, un membre de `L_Collegues` et un membre du groupe prédéfini Administrateurs. Les résultats attendus sont liés aux droits Lecture, Modification et Contrôle total réellement appliqués dans le scénario.

!!! warning "Précautions liées aux ACL"
    Le support demande de manipuler les ACL avec précaution : tenez compte de l’héritage, des copies et déplacements, privilégiez les groupes et le refus implicite, puis testez systématiquement l’accès. Il attire aussi l’attention sur le double jeton d’accès des administrateurs.

## 8. Mise en pratique : DATA et TOOLS

Le TP utilise deux volumes de laboratoire :

- sur **DATA**, création du répertoire `Echange`, observation des droits par défaut et de l’héritage, puis attribution des accès demandés aux collègues, administrateurs et utilisateurs du poste ;
- sur **TOOLS**, création des répertoires `logiciels` et `manuels d’utilisation`, puis application des droits prévus pour les utilisateurs, administrateurs et le groupe qui rassemble Yann et François.

Les volumes et machines cités appartiennent au scénario. Ils ne sont pas fournis comme ressources téléchargeables dans le dossier Drive M06 live.

## 9. PowerShell attesté par le TP

Sur la VM Discovery du scénario, le TP demande d’afficher les droits du dossier `2022` du lecteur `M:` :

```powershell
Get-Acl m:\2022
```

La cmdlet identifiée pour modifier les ACL d’un dossier est :

```powershell
Set-Acl
```

Le module se limite à ces deux repères PowerShell ; les procédures complètes restent dans la correction du TP.

## Synthèse

La sécurité NTFS s’appuie sur des ACL constituées de DACL et d’ACE. La lecture des groupes, autorisations, refus et héritages permet d’expliquer un accès. La configuration doit être vérifiée avec le compte concerné ou avec Accès effectif, en tenant compte du comportement des copies et déplacements.

## Mise en pratique

- [TP — présentation](../../tp/systemes-clients/module-06/index.md)
- [Énoncé du TP](../../tp/systemes-clients/module-06/enonces.md)
- [Correction du TP](../../tp/systemes-clients/module-06/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-06-la-securite-ntfs-et-les-acl.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-06-la-securite-ntfs-et-les-acl.md)
- [Présentation de la formation](index.md)

## Source et provenance

- **Sources A — TSSR Drive live :** support `Module 06 - Support de cours.pdf`, énoncé `Enoncé du TP - Les ACL.pdf` et correction `Solution du TP - Les ACL.pdf`.
- **Structuration B :** organisation web, tableaux et articulation pédagogique entre le support, l’énoncé et la correction, sans ajout de source externe.
