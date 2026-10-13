# Correction — Module 06 — La sécurité NTFS et les ACL

Cette correction reprend les méthodes et résultats du scénario de laboratoire. Les noms Yann, François / `francois`, Romain, Alix, `L_Collegues` et `L_Informatiques` sont conservés selon leurs occurrences documentaires ; ils ne sont pas normalisés.

## 1. DATA : état initial et héritage

### État initial

Dans l’Explorateur Windows, ouvrez `D:\DATA`, créez le dossier `Echange`, puis consultez **Propriétés → Sécurité**.

La correction indique les autorisations héritées suivantes sur `Echange` :

| Entité de sécurité | Autorisation indiquée |
| --- | --- |
| Utilisateurs authentifiés | Modification |
| Système | Contrôle total |
| Administrateurs | Contrôle total |
| Utilisateurs | Lecture |

Les coches grisées signalent que ces autorisations proviennent de l’héritage du volume `D:`.

### Vérifier l’héritage

Dans `Echange`, créez un document texte, ouvrez ses propriétés puis l’onglet **Sécurité**. La correction constate que le nouveau fichier hérite des autorisations de `Echange`, lui-même héritier des autorisations du lecteur `D:`. Le menu **Avancé** permet d’observer plus en détail les entrées héritées.

## 2. DATA : configurer Echange

La correction propose une méthode possible par modification des héritages :

1. sur le lecteur `D:`, ouvrez **Propriétés → Sécurité → Modifier** ;
2. sélectionnez **Utilisateurs authentifiés**, puis supprimez cette entrée ;
3. conservez **Système** et **Administrateurs** en Contrôle total ;
4. conservez **Utilisateurs** en Lecture, conformément à la consigne ;
5. sur `Echange`, ajoutez le groupe `L_Collegues` depuis l’onglet **Sécurité** ;
6. attribuez-lui **Modification** ; l’écriture est alors également cochée.

Cette séquence est la solution proposée par le document ; elle ne constitue pas l’unique façon de répondre au scénario.

## 3. DATA : tests réels et Accès effectif

### Tests avec les utilisateurs du scénario

| Utilisateur ou groupe | Contrôle décrit | Résultat attendu par la correction |
| --- | --- | --- |
| Romain, membre du groupe prédéfini Utilisateurs | Lire et tenter de créer un fichier dans `Echange` | Lecture possible ; création impossible. |
| Utilisateur supplémentaire membre de `L_Collegues` | Lire, créer puis tenter de modifier les ACL | Lecture et création possibles ; modification des ACL impossible sans Contrôle total. |
| `francois`, membre du groupe prédéfini Administrateurs | Lire, créer puis tenter de modifier les ACL | Accès et création possibles ; modification des ACL possible avec Contrôle total. |

### Vérifier avec Accès effectif

Ouvrez les propriétés de `Echange`, puis **Sécurité → Avancé → Accès effectif**. La correction demande de sélectionner un utilisateur et d’afficher son accès effectif :

- Romain n’a que la lecture ; création, écriture et suppression ne sont pas possibles ;
- Alix a un niveau plus élevé que Romain parce que `L_Collegues` possède Modification ;
- `francois` possède le niveau Contrôle total par son appartenance aux Administrateurs.

## 4. TOOLS : logiciels et manuels d’utilisation

Sur le lecteur `E:`, la correction propose de supprimer **Utilisateurs authentifiés** depuis l’onglet **Sécurité**, tout en conservant :

- **Système** et **Administrateurs** en Contrôle total ;
- **Utilisateurs** en Lecture, comme demandé dans la consigne.

Créez ensuite `logiciels` et `manuels d’utilisation` dans le volume **TOOLS**. Par héritage, Système et Administrateurs disposent du Contrôle total et les membres du groupe Utilisateurs conservent la Lecture.

Yann et François sont documentés comme membres de `L_Informatiques`. Ajoutez donc `L_Informatiques` à la DACL des deux dossiers et attribuez-lui **Modification**. La correction recommande ensuite un test grandeur réelle ou un contrôle par **Accès effectif**.

## 5. Questions PowerShell

Sur la VM Discovery, la correction donne les réponses suivantes :

```powershell
Get-Acl m:\2022
```

Cette commande affiche la liste des droits d’accès demandée. La cmdlet identifiée pour modifier les ACL d’un dossier est :

```powershell
Set-Acl
```

## Résultat attendu

Les accès observés correspondent aux groupes et droits configurés dans le scénario. Les contrôles sont réalisés avec les comptes concernés ou avec Accès effectif, sans confondre les autorisations héritées, les entrées ajoutées et les droits réellement obtenus.
