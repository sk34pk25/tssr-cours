# Module 05 — Réalisation d’un script

## Objectifs

À l’issue du module, vous devez pouvoir préparer un script PowerShell, le tester progressivement, le commenter et organiser les commandes nécessaires à un scénario de laboratoire. Le module présente aussi les IDE, la gestion des erreurs, les fonctions et l’exécution de commandes à distance.

## Préparer un script

Avant d’écrire un script, les sources demandent de déterminer son utilité, de décrire le comportement attendu et de formaliser un algorithme. La mise au point se fait étape par étape : tester les lignes, vérifier le résultat, puis améliorer l’algorithme. Les commentaires servent à expliciter la mission d’un ensemble de commandes et les résultats attendus.

## Écrire dans un IDE

PowerShell ISE est présenté comme un environnement dédié au script PowerShell : zone de script, sortie de console et fenêtre de commandes. Les sources y associent personnalisation, complétion, coloration syntaxique et détection d’erreurs.

Visual Studio Code est présenté comme un environnement multiplateforme, extensible, avec console, thèmes, coloration et complétion. Les versions citées par les documents sont historiques : elles ne constituent pas une recommandation actuelle.

## Commenter et enchaîner

Les formes de commentaire attestées sont :

```powershell
# commentaire
commande # commentaire éventuel
<#
commentaire multiligne
#>
```

Le point-virgule permet d’enchaîner des commandes sur une ligne sans rendre la suivante dépendante du résultat de la précédente. Le caractère backtick permet de répartir une commande ou ses paramètres sur plusieurs lignes.

## Gérer les erreurs

Les erreurs du shell courant sont conservées dans `$Error` ; `$Error[0]` correspond à la dernière erreur indiquée par les sources. Pour une commande ciblée, `-ErrorVariable` permet de désigner une autre variable de consignation. Le comportement est géré par `-ErrorAction` pour une commande ou par `$ErrorActionPreference` pour l’environnement courant.

Les valeurs documentées sont `Continue`, `Ignore`, `Inquire`, `SilentlyContinue`, `Stop` et `Suspend`. `Suspend` est conservé comme valeur historique attestée par les sources, sans être présenté comme une recommandation universelle.

## Try, Catch et Finally

La structure documentée exécute un traitement, gère un échec et exécute une étape finale :

```powershell
Try {
    # traitement source
}
Catch {
    # traitement en cas d’erreur
}
Finally {
    # traitement final
}
```

Les documents montrent l’emploi de `-ErrorAction Stop` pour rendre le traitement `Catch` applicable, ainsi que des exemples de tests dans `ForEach`. Le module ne développe pas une hiérarchie générale d’exceptions.

## Réutiliser avec des fonctions

Une fonction évite de répéter des lignes de commandes et doit être déclarée avant son appel. Les sources montrent une déclaration `Function`, des paramètres avec `Param(...)`, un paramètre obligatoire `[Parameter(Mandatory=$True)]`, le type `[String]` et le retour d’une valeur dans un scénario donné.

```powershell
Function <nom> {
    # commandes du scénario
}
```

## Exécuter à distance dans le scénario de laboratoire

Le remoting PowerShell s’appuie sur WS-Man et WinRM. Les sources attestent `Enable-PSRemoting`, `New-PSSession`, `Enter-PSSession`, `Exit-PSSession`, `Disconnect-PSSession`, `Connect-PSSession`, `Get-PSSession` et `Remove-PSSession`, ainsi que l’import de commandes depuis une session distante.

`Invoke-Command`, `-ComputerName`, `-ScriptBlock` et `$Using:Variable` sont utilisés pour demander l’exécution distante sans session interactive préalable, notamment sur plusieurs machines dans un contexte de laboratoire.

> **Précaution.** L’activation du remoting, l’exécution distante et le scénario d’action sur des postes ont un impact sur un environnement. Ils sont décrits ici uniquement comme manipulations de laboratoire source-faithful : ne les exécutez pas sur une machine réelle sans autorisation, contrôle et valeurs de laboratoire appropriées.

## Vérifier et retenir

- Décrire le comportement attendu avant d’écrire le script.
- Tester progressivement et commenter les intentions du script.
- Choisir le comportement d’erreur documenté pour le scénario.
- Déclarer une fonction avant de l’appeler et expliciter ses paramètres.
- Distinguer session distante, gestion de session et commande distante.

## Ressources du module

Le module comporte un TP unique, **Outils pour le scripting**, ainsi que sa correction et une fiche de révision. Ces ressources font l’objet d’une proposition gouvernée distincte et ne sont pas encore disponibles comme liens sur la base de cette page.

## Provenance

Sources A — TSSR Drive live : support `Module 05 - Support de cours.pdf` (Drive `1I7waDlSR3_PhRJI-V3XHSUwiioEUt0XU`, SHA-256 `031f076741f7955e0b02614e11a47071711545143d74805418b7e0fed1095814`) ; énoncé et solution du TP, ainsi que neuf démonstrations M05 sur les IDE, les commentaires, l’enchaînement, la gestion des erreurs, Try/Catch/Finally, les fonctions, le remoting et Invoke-Command. Les noms Drive présentant un encodage dégradé sont conservés dans la provenance de campagne ; les titres internes des PDF ont été vérifiés.
