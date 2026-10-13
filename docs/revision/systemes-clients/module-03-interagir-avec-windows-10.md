# Fiche de révision — Module 03 — Interagir avec Windows 10

## Les trois interfaces du module

| Interface | À retenir |
|---|---|
| GUI | Utiliser l’interface graphique pour les paramètres et les éléments visibles demandés dans le scénario. |
| `cmd` | Lire l’aide, naviguer, créer, afficher, copier et lister des fichiers et dossiers. |
| PowerShell | Découvrir les cmdlets, consulter l’aide, afficher des objets et choisir leurs propriétés. |

## `cmd` : une méthode courte

1. Lire l’aide de la commande avant de retenir une syntaxe.
2. Se placer dans le répertoire demandé.
3. Réaliser l’opération sur le fichier ou dossier prévu.
4. Vérifier le résultat en affichant le contenu ou en relistant l’emplacement.

Les TP M03 utilisent notamment l’aide de `cd`, la création d’un répertoire, la génération d’un fichier de commandes internes et son contrôle.

## PowerShell : vocabulaire et démarche

- **Cmdlet** : commande PowerShell.
- **Paramètre** : précision ajoutée à la cmdlet.
- **Argument** : valeur fournie à la commande ou à un paramètre.
- **Objet** : résultat structuré dont les propriétés peuvent être sélectionnées.
- **Alias** : autre nom utilisable pour une commande.

Pour trouver une réponse :

1. partir de `Get-Command` ;
2. ouvrir `Get-Help` et ses exemples ;
3. tester la cmdlet simplement ;
4. consulter les propriétés disponibles ;
5. n’afficher que celles exigées par la consigne.

Les TP abordent aussi les rubriques `about_*`, l’aide complète, les exemples, les alias et l’historique des commandes. Les valeurs et résultats observés restent propres aux environnements du laboratoire.

## Contrôles simples

- un fichier créé doit être relu ou listé à son emplacement attendu ;
- une réponse PowerShell doit montrer les propriétés demandées ;
- une modification graphique doit être visible dans le paramètre ou la console concernée ;
- une différence entre deux VM doit être relevée et expliquée à partir de leur aide, sans supposer qu’elle est universelle.

## Questions flash

1. Dans quelle situation le scénario demande-t-il l’interface graphique plutôt que `cmd` ou PowerShell ?
2. Quelle différence faites-vous entre une cmdlet, un paramètre et un argument ?
3. Comment trouvez-vous une cmdlet lorsque vous connaissez l’objectif mais pas son nom ?
4. Quelle vérification confirme qu’un fichier ou une propriété est bien celui attendu ?

Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10.md) · [Kahoot](../../kahoot/02-systemes-clients-microsoft-03-interagir-avec-windows-10.md).
