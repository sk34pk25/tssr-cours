# Révision — Module 05 — Réalisation d’un script

## Préparer et commenter

- Déterminer l’utilité et le comportement attendu du script.
- Formaliser un algorithme, avancer par tests et commenter les intentions.
- Formes attestées : `# commentaire`, commentaire en fin de commande, `<# ... #>`.

## IDE et enchaînement

- ISE : zone de script, sortie, commandes, personnalisation, complétion, coloration et détection d’erreurs.
- Visual Studio Code : environnement multiplateforme, extensions, console, thèmes, coloration et complétion.
- `;` : commandes successives sans dépendance de résultat.
- backtick : répartition d’une commande ou de paramètres sur plusieurs lignes.

## Erreurs

- `$Error` et `$Error[0]` ;
- `-ErrorVariable` ;
- `-ErrorAction` et `$ErrorActionPreference` ;
- valeurs source : `Continue`, `Ignore`, `Inquire`, `SilentlyContinue`, `Stop`, `Suspend`.

`Try` / `Catch` / `Finally` est associé dans les sources à `-ErrorAction Stop` et à des tests dans `ForEach`.

## Fonctions

- `Function <nom> { ... }` ;
- `Param(...)` ;
- `[Parameter(Mandatory=$True)]` et `[String]` lorsqu’ils sont nécessaires au scénario ;
- une fonction est déclarée avant son appel et peut renvoyer une valeur source.

## Remoting et commande distante

- WS-Man, WinRM, session distante et persistance de session ;
- `Enable-PSRemoting`, `New-PSSession`, `Enter-PSSession`, `Exit-PSSession`, `Disconnect-PSSession`, `Connect-PSSession`, `Get-PSSession`, `Remove-PSSession` ;
- `Invoke-Command`, `-ComputerName`, `-ScriptBlock`, `$Using:Variable` ;
- l’ouverture d’une session distante ne permet pas le rebond décrit par les sources.

## Contrôles

- Vérifier progressivement un script et ses commentaires.
- Vérifier le comportement d’une erreur selon la valeur choisie.
- Vérifier le paramètre d’une fonction et le résultat du scénario.
- Identifier la session distante avant toute commande de laboratoire.

> Les opérations de remoting et le scénario à impact sont réservés à l’environnement autorisé. Les versions d’IDE, valeurs de laboratoire et résultats de captures sont historiques ou contextuels.
