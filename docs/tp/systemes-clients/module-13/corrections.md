# Correction — Les stratégies de groupe local

## État initial

Travaillez sur le poste du scénario avec les comptes de laboratoire. Utilisez les identifiants fournis par le formateur lorsque l'ouverture de session le demande.

## 1. Stratégie de mot de passe

| Étape | Méthode et contrôle |
|---|---|
| Console | Ouvrir `secpol.msc`, puis **Stratégies de comptes** et **Stratégie de mot de passe**. |
| Valeurs | Définir une longueur minimale de 7 caractères, un historique de 3 mots de passe et la complexité activée. |
| Test réel | Ouvrir une session avec un utilisateur standard, puis utiliser `Ctrl` + `Alt` + `Suppr` pour essayer de modifier le mot de passe selon le scénario. |

## 2. LGPO pour les non-administrateurs

1. Ouvrir MMC et ajouter le composant logiciel enfichable **Éditeur d'objets de stratégie de groupe**.
2. Dans **Parcourir**, sélectionner l'onglet **Utilisateurs**, puis **Non-administrateurs**.
3. Dans la configuration utilisateur et les modèles d'administration, activer l'interdiction du Panneau de configuration et des Paramètres.
4. Dans les paramètres du menu Démarrer et de la barre des tâches, activer le verrouillage de la barre des tâches.
5. Configurer le fond d'écran uniquement avec un chemin local ou partagé accessible en lecture. La source mentionne un fichier BMP ou JPG, sans fournir de fichier ni de partage précis.
6. Ouvrir une session avec un utilisateur non administrateur pour contrôler le résultat.

## 3. LGPO ciblant romain

1. Dans MMC, ajoutez l'Éditeur d'objets de stratégie de groupe.
2. Utilisez **Parcourir**, puis l'onglet **Utilisateurs**, pour choisir `romain` comme dans la correction source.
3. Dans la configuration utilisateur de cette stratégie, désactivez l'interdiction du Panneau de configuration et des Paramètres.
4. Activez le paramètre qui retire le Gestionnaire des tâches.
5. Ouvrez une session avec `romain` et vérifiez les deux résultats.

> **Point à vérifier.** L'énoncé écrit `Romain` tandis que la correction écrit `romain`. Cette variation documentaire est conservée ; vérifiez le nom réel du compte dans votre laboratoire avant le test.

## Résultat attendu

Les stratégies doivent produire un comportement différent selon le compte ou le groupe ciblé. Les résultats se contrôlent par une session de test, et non uniquement par l'état affiché dans l'éditeur.
