# Module 06 — La sécurité NTFS et les ACL

[Travaux pratiques](../../tp/systemes-clients/module-06/index.md)

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 06 - Support de cours · 7 pages transcrites
2. Systèmes clients Microsoft
3. Objectifs
4. NTFS et les ACL
5. NTFS et les ACL
6. NTFS et les ACL
7. NTFS et les ACL
8. NTFS et les ACL
9. NTFS et les ACL
10. NTFS et les ACL
11. NTFS et les ACL
12. Démonstration
13. TP
14. Conclusion
15. Systèmes Clients Microsoft Les ACL
16. Énoncé
17. Solution
18. Notes du Drive · Module 6.txt · document texte
19. Quiz Kahoot – Module 6 : La sécurité NTFS et les ACL
20. Niveau Facile (1 à 7)
21. Niveau Moyen (8 à 14)
22. Niveau Difficile (15 à 16)
23. Vrai / Faux
24. Notes du Drive · module 5 et 6.txt · document texte
25. Inexistant
26. Les ACL
27. Proposition de solution

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 06 - Support de cours · 7 pages transcrites"]
    N2["Systèmes clients Microsoft"]
    N3["Objectifs"]
    N4["NTFS et les ACL"]
    N5["NTFS et les ACL"]
    N6["NTFS et les ACL"]
    N7["NTFS et les ACL"]
    N8["NTFS et les ACL"]
    N9["NTFS et les ACL"]
    N10["NTFS et les ACL"]
    N11["NTFS et les ACL"]
    N12["Démonstration"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
    N8 --> N9
    N9 --> N10
    N10 --> N11
    N11 --> N12
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 06 - Support de cours · 7 pages transcrites

## Systèmes clients Microsoft

Module 06 – La sécurité NTFS et les ACL

## Objectifs

!!! note "À retenir"
    Définir et découvrir les ACL Connaître le fonctionnement et les bonnes pratiques Configurer les accès Vérifier leur bon fonctionnement

**Visuel externe**

```mermaid
flowchart LR
    N1["Définir et découvrir les ACL"]
    N2["Connaître le fonctionnement et les bonnes pratiques"]
    N3["Configurer les accès"]
    N4["Vérifier leur bon fonctionnement"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Définir et découvrir les ACL
- Connaître le fonctionnement et les bonnes pratiques
- Configurer les accès
- Vérifier leur bon fonctionnement

## NTFS et les ACL

**Visuel externe**

```mermaid
flowchart LR
    N1["Tous les répertoires et tous les fichiers sont soumis à la sécurité NTFS"]
    N2["Des autorisations définissent des privilèges d'accès"]
    N3["L'utilisateur présente son jeton d'accès, qui est filtré par la ressource"]
    N4["Les autorisations sont stockées dans l'index du système de fichier NTFS"]
    N5["Consultable, modifiable dans l'onglet sécurité de chaque objet"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

Sur un volume formaté en NTFS

- Tous les répertoires et tous les fichiers sont soumis à la sécurité NTFS
- Des autorisations définissent des privilèges d'accès
- L'utilisateur présente son jeton d'accès, qui est filtré par la ressource
- Les autorisations sont stockées dans l'index du système de fichier NTFS
- Consultable, modifiable dans l'onglet sécurité de chaque objet

## NTFS et les ACL

**Visuel externe**

```mermaid
flowchart LR
    N1["Accessible via les propriétés d'un objet"]
    N2["Les DACL filtrent"]
    N3["Les groupes locaux"]
    N4["Les groupes prédéfinis"]
    N5["Les entités de sécurité"]
    N6["Les utilisateurs"]
    N7["ACE : (Access Control Entry) privilèges d'accès du groupe en question"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
```

L'onglet sécurité

- Accessible via les propriétés d'un objet
- DACL : (Liste de contrôle d'accès discrétionnaire) contient les utilisateurs et groupes
- Les DACL filtrent
- Les groupes locaux
- Les groupes prédéfinis
- Les entités de sécurité
- Les utilisateurs
- ACE : (Access Control Entry) privilèges d'accès du groupe en question

![Illustration isolée du support — Module 06 - Support de cours](../../assets/course-sources/isolated/b0954b2cfcc92d40/g2-p2-1.webp)

Illustration isolée du support — Module 06 - Support de cours

## NTFS et les ACL

**Visuel externe**

```mermaid
flowchart LR
    N1["Pour les besoins courants, les ACE de base sont utilisées et cumulatives"]
    N2["Configurable depuis le menu Modifier"]
    N3["LECTURE"]
    N4["Affichage du contenu du dossier"]
    N5["Lecture"]
    N6["Lecture et exécution"]
    N7["MODIFICATION"]
    N8["Écriture"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

- Pour les besoins courants, les ACE de base sont utilisées et cumulatives
- Configurable depuis le menu Modifier
- LECTURE
- Affichage du contenu du dossier
- Lecture
- Lecture et exécution
- MODIFICATION
- Écriture
- Modification
- CONTRÔLE TOTAL
- Pour des besoins spécifiques, des autorisations spéciales peuvent être configurées
- Accessibles depuis le menu Avancé
- Affinent les privilèges (création de fichiers, suppression de sous-dossiers et fichiers, etc.)

## NTFS et les ACL

- Permissions basées sur des règles explicites
- Un groupe absent de la DACL se verra l'accès refusé (refus implicite)
- Chaque règle peut accorder des privilèges (autoriser) ou les ôter (refuser)
- Plusieurs règles d’accès peuvent s’appliquer à un même utilisateur
- La règle la plus permissive l'emporte
- Le refus explicite l'emporte sur l'autorisation

![Illustration isolée du support — Module 06 - Support de cours](../../assets/course-sources/isolated/b0954b2cfcc92d40/g2-p3-1.webp)

Illustration isolée du support — Module 06 - Support de cours

## NTFS et les ACL

- Les mécanismes d'héritage
- Par défaut, un répertoire propage ses autorisations à ses objets enfants
- Les autorisations héritées apparaissent grisées et ne sont pas modifiables
- Une autorisation d'accès l'emporte sur un refus explicite hérité
- Pour les modifier, il faut :
- Modifier les autorisations sur le dossier parent (voire parfois celles du volume racine)
- "Casser" l'héritage (à effectuer avec précaution)
- Gestion de l'héritage depuis le menu Avancé

## NTFS et les ACL

### Copie et déplacement

| Opération | Même partition / volume | Entre deux partitions / volumes |
| --- | --- | --- |
| Déplacement | Conservation | Héritage |
| Copie | Héritage | Héritage |

## NTFS et les ACL

!!! note "À retenir"
    Une fois les ACL configurées, que faire ?

Une fois les ACL configurées, que faire ?

- Testez les accès avec les utilisateurs !
- Ou/et vérifiez les accès depuis l'onglet Accès effectif du menu Avancé

## NTFS et les ACL

- À manipuler avec précaution !
- Bonnes pratiques pour éviter les effets de bord et les mauvaises surprises
- Privilégier au maximum les groupes dans les DACL
- Utiliser au maximum ACE de base
- Garder en tête les mécanismes d'héritage (attention aux copies, aux déplacements)
- Privilégier l'héritage
- Privilégier le refus implicite
- Toujours tester/vérifier les accès aux ressources
- Attention au double jeton d'accès des administrateurs !

## Démonstration

TP

## Conclusion

!!! note "À retenir"
    La gestion des ACL est indispensable ACL = DACL + ACE Liste de contrôle d’accès Liste de contrôle d’accès discrétionnaire Entrées de contrôle d’accès Tester les accès Respecter les bonnes pratiques Microsoft Référence du document : 1Qu0t6HJiZ5JIZtGpNhZVpWGcxs8ldDzs · SHA-256 b0954b2cfcc92d40…

- La gestion des ACL est indispensable
- ACL = DACL + ACE
- Liste de contrôle d’accès
- Liste de contrôle d’accès discrétionnaire
- Entrées de contrôle d’accès
- Tester les accès
- Respecter les bonnes pratiques Microsoft

Référence du document : 1Qu0t6HJiZ5JIZtGpNhZVpWGcxs8ldDzs · SHA-256 b0954b2cfcc92d40…

## Notes du Drive · Module 6.txt · document texte

Notes textuelles présentes dans le Drive. Aucun support de cours illustré distinct n’est fourni pour ce document ; aucune illustration n’a été inventée ou attribuée au support.

## Quiz Kahoot – Module 6 : La sécurité NTFS et les ACL

## Niveau Facile (1 à 7)

### 1. Sur quel système de fichiers les ACL sont-elles disponibles ?

A. FAT32 B. NTFS ✅ C. exFAT D. FAT16

### 2. Que signifie ACL ?

A. Access Computer List B. Access Control List ✅ C. Active Control Link D. Access Configuration Level

### 3. Que signifie DACL ?

A. Dynamic Access Control List B. Discretionary Access Control List ✅ C. Direct Access Control List D. Data Access Control List

### 4. Que représente une ACE ?

A. Une partition B. Une entrée de contrôle d’accès ✅ C. Un groupe d’utilisateurs D. Un système de fichiers

### 5. Quel niveau d’autorisation permet toutes les actions sur un fichier ou un dossier ?

A. Lecture B. Modification C. Contrôle total ✅ D. Exécution

### 6. Où configure-t-on les autorisations NTFS de base ?

A. Onglet Général B. Bouton Modifier ✅ C. Invite de commandes D. Gestionnaire de périphériques

### 7. Où trouve-t-on les autorisations spéciales ?

A. Modifier B. Avancé ✅ C. Partage D. Général

## Niveau Moyen (8 à 14)

### 8. Si un utilisateur n’est pas présent dans la DACL, que se passe-t-il ?

A. Il obtient Lecture B. Il obtient Modification C. Son accès est refusé implicitement ✅ D. Il obtient Contrôle total

### 9. Une ACE peut :

A. Seulement autoriser B. Seulement refuser C. Autoriser ou refuser ✅ D. Seulement modifier

### 10. Si plusieurs autorisations “Autoriser” s’appliquent à un utilisateur, laquelle est retenue ?

A. La plus restrictive B. La première C. La plus permissive ✅ D. Aucune

### 11. Quelle règle est prioritaire ?

A. L’autorisation explicite B. Le refus explicite ✅ C. Le refus implicite D. L’autorisation héritée

### 12. Par défaut, un dossier transmet ses autorisations à :

A. Son propriétaire uniquement B. Ses fichiers et sous-dossiers ✅ C. Son disque uniquement D. Aucun élément

### 13. Lors d’un déplacement dans le même volume, les autorisations NTFS sont :

A. Supprimées B. Conservées ✅ C. Réinitialisées D. Converties

### 14. Lors d’une copie vers un autre volume, les autorisations :

A. Sont conservées B. Héritent du dossier de destination ✅ C. Deviennent publiques D. Sont supprimées

## Niveau Difficile (15 à 16)

### 15. Quelle cmdlet PowerShell permet d’afficher les ACL d’un dossier ?

A. Get-Permission B. Get-Acl ✅ C. Show-Acl D. Read-Acl

### 16. Quelle cmdlet PowerShell permet de modifier les ACL ?

A. Update-Acl B. Set-Acl ✅ C. Edit-Acl D. New-Acl

## Vrai / Faux

### 17. Vrai ou Faux

Microsoft recommande de privilégier les groupes plutôt que les utilisateurs dans les DACL.

✅ Vrai

### 18. Vrai ou Faux

Les autorisations héritées peuvent être modifiées directement sans action particulière.

❌ Faux

### 19. Vrai ou Faux

Après avoir configuré les ACL, il est recommandé de tester les accès ou de consulter l’onglet Accès effectif.

✅ Vrai

### 20. Vrai ou Faux

Le double jeton d’accès des administrateurs (UAC) peut influencer les autorisations effectives.

✅ Vrai

Référence du document : 1SRkAloeUhQqznCjEZYEO2JNPNsJkBR59 · SHA-256 4856c60a24c0f3ef…

## Notes du Drive · module 5 et 6.txt · document texte

Inexistant — fichier de notes vide dans le Drive.

Référence du document : 1Oi75J3l2QDn53DJw1GUoxHxkXTShq3T7 · SHA-256 e3b0c44298fc1c14…

| Objectifs | Définir et découvrir les ACL Connaître le fonctionnement et les bonnes pratiques Configurer les accès Vérifier leur bon fonctionnement |
| NTFS et les ACL | Sur un volume formaté en NTFS Tous les répertoires et tous les fichiers sont soumis à la sécurité NTFS Des autorisations définissent des privilèges d'accès L'utilisateur présent… |
| NTFS et les ACL | L'onglet sécurité Accessible via les propriétés d'un objet DACL : (Liste de contrôle d'accès discrétionnaire) contient les utilisateurs et groupes Les DACL filtrent Les groupes… |
| NTFS et les ACL | Pour les besoins courants, les ACE de base sont utilisées et cumulatives Configurable depuis le menu Modifier LECTURE Affichage du contenu du dossier Lecture Lecture et exécutio… |
| NTFS et les ACL | Permissions basées sur des règles explicites Un groupe absent de la DACL se verra l'accès refusé (refus implicite) Chaque règle peut accorder des privilèges (autoriser) ou les ô… |
| NTFS et les ACL | Les mécanismes d'héritage Par défaut, un répertoire propage ses autorisations à ses objets enfants Les autorisations héritées apparaissent grisées et ne sont pas modifiables Une… |
| NTFS et les ACL | Une fois les ACL configurées, que faire ? |
| NTFS et les ACL | Bonnes pratiques pour éviter les effets de bord et les mauvaises surprises Privilégier au maximum les groupes dans les DACL Utiliser au maximum ACE de base Garder en tête les mé… |
| Conclusion | La gestion des ACL est indispensable ACL = DACL + ACE Liste de contrôle d’accès Liste de contrôle d’accès discrétionnaire Entrées de contrôle d’accès Tester les accès Respecter… |
| Énoncé | Lisez l'ensemble de ce TP avant de vous lancer dans la pratique |
| Solution | Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger. |
| Notes du Drive · Module 6.txt · document texte | Notes textuelles présentes dans le Drive. |
| Notes du Drive · module 5 et 6.txt · document texte | Inexistant — fichier de notes vide dans le Drive. |
| Proposition de solution | Sur votre VM Win10-XX, configurez les autorisations d'accès sur les répertoires suivants : Sur le volume DATA, créer le répertoire Echange Quelles sont les autorisations positio… |
