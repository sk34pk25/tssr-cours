# Corrections — Module 03 — Interagir avec Windows 10

Ces corrections reprennent les méthodes et réponses des cinq PDF source. Les valeurs observées, noms de VM, chemins et configurations restent ceux du laboratoire. Les données d’accès ne sont pas reproduites.

## TP 1 — Prise en main de l’interface graphique

### Méthode

- Retirer les raccourcis demandés de la barre des tâches, puis épingler PowerShell.
- Accéder aux paramètres Windows Update et appliquer l’interruption temporaire prévue par le scénario.
- Rechercher le nom du PC, utiliser l’action de renommage, redémarrer lorsque Windows le demande, puis vérifier le nouveau nom.
- Lancer `mmc`, ajouter les composants Gestion des disques, Utilisateurs et groupes locaux et Dossiers partagés, puis enregistrer `MaConsole.msc` sur le bureau.
- Personnaliser le bureau et les paramètres de veille selon les étapes source.

### Contrôles

- La console enregistrée contient les composants demandés.
- Le nouveau nom du PC est visible après redémarrage.
- Sur Discovery, `admConsole` permet d’observer les composants Gestion de l’ordinateur, Gestionnaire de périphériques et Services.

## TP 2 — Prise en main de la CMD

### Méthode et réponses

- Les commandes internes sont affichées avec `help`.
- L’aide de `cd` peut être consultée avec `help cd` ou `cd /?`. Son synopsis indique qu’elle affiche le nom ou change le répertoire courant.
- Pour rejoindre la racine : `cd c:\`.
- Pour créer le dossier : `md CommandList` ou `mkdir CommandList`.
- Pour enregistrer les commandes internes : `help > c:\CommandList\InternalCommands.txt`.
- Pour vérifier le fichier : `type c:\CommandList\InternalCommands.txt`.
- La correction source donne ensuite une copie de `InternalList.txt` vers le bureau, alors que l’énoncé demande `InternalCommands.txt`. Cette divergence est conservée : utilisez le nom explicitement fixé par l’énoncé pour le livrable et signalez l’écart au formateur.
- La correction source propose `copy`, ainsi que `xcopy` ou `robocopy`, pour la copie.
- Le listage du bureau trié par taille croissante est donné sous la forme `dir /A /OS` suivi du chemin du bureau de l’utilisateur du laboratoire.

## TP 3 — Premiers pas avec PowerShell

### Méthode et réponses

- La version peut être obtenue avec `$PSVersionTable` ou `Get-Host`.
- Le contenu du répertoire courant se consulte avec `Get-ChildItem`.
- Pour `C:\Users`, la correction donne `Get-ChildItem -Path C:\Users`.
- Les alias se listent avec `Get-Alias` ; ceux indiqués pour `Get-ChildItem` sont `dir`, `gci` et `ls`.
- Le contenu de `C:\PowerShell\Intro.txt` peut être affiché avec `Get-Content` ou les alias `gc`, `type` et `cat`.
- Pour se placer à la racine de `C:`, la correction donne `Set-Location c:\` et rappelle que `cd` est un alias de `Set-Location`.

### Contrôles

- Vérifier que le chemin courant correspond au lecteur demandé.
- Vérifier le contenu du fichier affiché, sans substituer une valeur issue d’un autre environnement.

## TP 4 — Manipuler l’aide de PowerShell

### Méthode et réponses

- L’aide complète de `Get-Alias` est obtenue avec `Get-Help -Full Get-Alias` ; `Get-Help Get-Alias -ShowWindow` est également proposé.
- La différence observée entre les deux VM est expliquée dans la correction par une aide moins complète, sans exemples, sur l’une d’elles.
- Après la procédure de mise à jour du scénario, `Update-Help` est la commande proposée ; `Get-Help -Full Get-Alias` sert de contrôle.
- Les exemples de `Get-Help` se consultent avec `Get-Help Get-Help -Example`.
- Les rubriques de concepts sont recherchées avec `Get-Help about_*`.
- L’aide sur les alias est affichée avec `Get-Help about_Aliases -ShowWindow`.
- Les alias créés ne sont conservés que pour la session courante ; la correction renvoie aux rubriques de sauvegarde des alias et à `Get-Help about_Profiles`.
- L’historique est documenté avec `Get-Help about_History`. La correction source indique une valeur par défaut de `4096` pour `$MaximumHistoryCount` et montre qu’elle peut être modifiée.

### Contrôles

- Vérifier que l’aide complète affiche les sections et exemples attendus dans la VM concernée.
- Après mise à jour de l’aide, remettre la configuration réseau exigée par le laboratoire.

## TP 5 — Devenir autonome avec PowerShell

### Méthode et réponses

- `Get-Command` affiche les commandes disponibles.
- `Get-Command -CommandType Cmdlet` limite aux cmdlets ; la correction propose aussi `Get-Command -Type Cmdlet Get-*` pour les cmdlets dont le verbe est `Get`.
- `Get-LocalGroup` affiche les groupes locaux. Les propriétés visibles par défaut indiquées sont `Name` et `Description` ; `Get-LocalGroup | Select *` permet d’examiner les autres, dont `SID`, `PrincipalSource` et `ObjectClass`.
- Pour le groupe Utilisateurs du Bureau à distance, la correction propose `Get-LocalGroup -Name "Utilisateurs du Bureau*" | Select SID,PrincipalSource`.
- `Get-Disk` liste les disques ; dans la VM Discovery de la correction source, quatre disques sont observés.
- `Get-Disk | Select Number,Model` affiche le numéro et le modèle. La correction recommande d’examiner les propriétés avec `Get-Disk | Select *` avant une sélection ciblée.
- Pour le disque numéro 2, la correction source propose `Get-Disk -Number 2 | Select FriendlyName,BusType,ManuFacturer`.
- `Get-NetAdapter | Select Name,Status,DriverDescription` répond à la question sur le pilote réseau.
- `Get-LocalGroupMember -Name "Administrateurs"` affiche les membres du groupe local Administrateurs.
- La redirection vers `C:\Users\AdminMembers.txt` est suivie d’un contrôle avec `Get-ChildItem C:\Users` puis `Get-Content C:\Users\AdminMembers.txt`.

### Contrôles

- Sélectionner seulement les propriétés demandées.
- Vérifier le fichier redirigé et son contenu après la commande.
- Ne pas généraliser les valeurs de disques ou de groupes observées dans Discovery à une autre machine.
