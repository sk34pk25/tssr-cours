# Correction — Module 08 — Le partage de ressources

Cette correction décrit le laboratoire TSSR. Les noms de VM, chemins UNC, groupes et comptes sont propres au scénario. Utilisez les identifiants fournis par le formateur et ne les recopiez pas dans un livrable.

## 1. Partage `CoWorkerShare`

### Méthode

Sur le dossier `Echange` de `D:` :

1. ouvrez **Propriétés** puis l’onglet **Partage** ;
2. choisissez **Partage avancé**, activez le partage et donnez-lui le nom `CoWorkerShare` ;
3. dans les autorisations du partage, retirez `Tout le monde` puis ajoutez `Utilisateurs authentifiés` avec le niveau indiqué par la correction ;
4. dans l’onglet **Sécurité**, vérifiez que `L_Collegues` dispose de la modification ; ajoutez-le à la DACL si nécessaire.

### Contrôle

Depuis Discovery, ouvrez le chemin UNC correspondant au partage, avec un compte connu de la base SAM de Win10-XX et membre de `L_Collegues`. Créez le dossier `TestPartage` pour vérifier la modification. Fermez ensuite la session de Discovery lorsque le scénario demande de régénérer le jeton d’accès.

## 2. Partage « manuels d’utilisation »

### Méthode

Sur le dossier `Manuels d’utilisation` du volume `TOOLS` :

1. dans l’onglet **Sécurité**, donnez la modification aux utilisateurs selon le scénario ;
2. dans l’onglet **Partage**, utilisez le partage avancé ;
3. nommez le partage `manuels d’utilisation` ;
4. retirez `Tout le monde` et ajoutez `Utilisateurs authentifiés` avec le niveau précisé par la correction.

### Contrôle

Depuis Discovery, ouvrez le chemin UNC du partage avec le compte de laboratoire membre de `L_Collegues`. Créez `TestManuelsUtil` pour contrôler l’accès en modification, puis fermez la session lorsque le scénario le demande.

## 3. Partages administratifs de Discovery

| Question | Méthode indiquée dans la correction | Résultat de laboratoire |
|---|---|---|
| Lister les partages | `Get-SmbShare` | liste des partages de Discovery |
| Identifier `ADMIN$` | `Get-SmbShare ADMIN$` | propriété `Path` associée à `C:\Windows` dans le scénario |
| Vérifier `N$` | `Get-SmbShareAccess N$` | membres du groupe Administrateurs, Opérateurs de sauvegarde et entité `INTERACTIF` avec contrôle total dans le scénario |

Ces observations concernent Discovery et ne constituent pas une liste universelle d’accès.

## 4. Bureau à distance

### Activer et autoriser

1. recherchez `sysdm.cpl` puis ouvrez l’onglet **Utilisation à distance** ;
2. la correction indique que Bureau à distance n’est pas actif par défaut dans le laboratoire ;
3. utilisez **Sélectionner des utilisateurs** pour autoriser les personnes du scénario ;
4. activez l’autorisation des connexions à distance et appliquez la configuration ;
5. depuis Win10-XX, ouvrez **Connexion Bureau à distance**, indiquez la cible de laboratoire et utilisez les identifiants fournis par le formateur.

La première connexion du scénario peut demander de confirmer un échange de certificat. Il s’agit d’une observation du laboratoire.

### Contrôle des droits

La correction utilise `lusrmgr.msc` pour contrôler l’appartenance et illustre la différence entre un utilisateur standard et un membre du groupe Administrateurs : l’utilisateur standard cité ne peut pas changer le mot de passe de l’autre utilisateur, tandis que le compte administratif du scénario le peut. Cette conclusion dépend des groupes et droits configurés dans Discovery.

Fermez la session distante à la fin de l’exercice.
