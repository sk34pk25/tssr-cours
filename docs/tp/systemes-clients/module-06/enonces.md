# Énoncé — Module 06 — La sécurité NTFS et les ACL

## Contexte et environnement

Le TP demande de manipuler les autorisations d’accès de dossiers disponibles sur le système. Réalisez les activités dans une VM `Win10-XX`, puis utilisez la VM Discovery pour les questions PowerShell.

**Durée estimée :** 1 heure.

!!! warning "Ressources du scénario"
    Les VM et volumes utilisés dans le TP sont des ressources de laboratoire. Ils ne sont pas fournis dans le dossier Drive M06 live ; utilisez les ressources données par le formateur.

## 1. Préparer les groupes du scénario

Les activités emploient les groupes `L_Collegues` et `L_Informatiques`. Conservez ces noms tels qu’ils sont présentés dans le scénario et vérifiez les appartenances nécessaires avant les tests d’accès.

## 2. Configurer DATA et Echange

Sur le volume **DATA** :

1. créez le répertoire `Echange` ;
2. relevez les autorisations positionnées par défaut ;
3. ajoutez des fichiers et des dossiers, puis vérifiez s’ils héritent des autorisations du dossier parent ;
4. configurez les accès afin que les collègues puissent modifier tous les objets et sous-objets de `Echange` ;
5. donnez aux administrateurs le contrôle total ;
6. donnez aux utilisateurs du poste les droits de lecture sur le répertoire ;
7. testez le bon fonctionnement des autorisations.

## 3. Configurer TOOLS

Sur le volume **TOOLS** :

1. créez les répertoires `logiciels` et `manuels d’utilisation` ;
2. prévoyez que Yann et François puissent les modifier ;
3. conservez un accès en lecture pour les utilisateurs standard et le contrôle total pour les administrateurs ;
4. testez le bon fonctionnement des autorisations.

## 4. Contrôler les accès

Pour chaque répertoire concerné, vérifiez le résultat avec les utilisateurs ou groupes du scénario. Distinguez l’observation des droits hérités, les droits configurés et l’accès réellement obtenu.

## 5. Questions PowerShell dans la VM Discovery

1. Affichez la liste des droits d’accès du dossier `2022` du lecteur `M:`.
2. Identifiez la cmdlet qui permet de modifier les ACL d’un dossier.

## Livrables et vérifications

Conservez les relevés d’autorisations, les résultats des tests d’accès et les réponses aux deux questions PowerShell. Vérifiez que chaque résultat correspond à la consigne avant de consulter la [correction](corrections.md).

La [correction commentée](corrections.md) est séparée de cet énoncé : elle ne doit être utilisée qu’après la tentative.
