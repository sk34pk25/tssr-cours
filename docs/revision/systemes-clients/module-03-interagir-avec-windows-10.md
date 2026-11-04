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


Pour approfondir : [cours complet](../../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10.md) · [Kahoot](../../kahoot/02-systemes-clients-microsoft-03-interagir-avec-windows-10.md).

## Retenir puis vérifier

**Trouver l’outil adapté, lire son aide, exécuter une action puis vérifier un résultat observable.**

1. **Get-Command et Get-Help ont-ils le même rôle ?**

??? success "Réponse expliquée"
    Get-Command trouve une commande ; Get-Help en explique la syntaxe, les paramètres et les exemples.

2. **Comment découvrir les propriétés d’un objet ?**

??? success "Réponse expliquée"
    Avec Get-Member, puis Select-Object pour afficher celles demandées.

3. **Une redirection prouve-t-elle que le résultat est correct ?**

??? success "Réponse expliquée"
    Non. Il faut relire le fichier et contrôler son contenu, son nom et son emplacement.

[Relire le cours complet](../../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10.md) · [Mettre en pratique](../../tp/systemes-clients/module-03/index.md)
