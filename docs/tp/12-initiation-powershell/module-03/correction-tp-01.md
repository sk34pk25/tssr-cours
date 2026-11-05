# Correction — Manipuler des objets

La solution fournie est reprise dans son ordre. Les valeurs observées concernent la maquette du document. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

## Manipuler des objets

TP du Module 03

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 3 de ce cours.

Durée estimée

1 heure 30

## Énoncé

Objectifs :

- Manipuler les objets leurs propriétés et leurs méthodes
- Utilisation de la commande Select-Object, Sort-Object et Where-Object.

Consignes :

Depuis la machine CLI01

- Affichez la liste des utilisateurs ActiveDirectory avec la propriété GivenName, Name, Enabled Department City.

Quelle commande avez-vous utilisée ?

```text
Get-AdUser
-Filter
*
|
Select-Object
-Property
GivenName,Name,Enabled,Department,City
Consultez l’aide de la commande Get-AdUser pour trouver la solution aux valeurs vides
des propriétés Department et City ?
Get-Help Get-ADUser -ShowWindow
```

Indiquez la commande complète permettant l’affichage des valeurs de toutes les propriétés.

```text
Get-AdUser -Filter * -Properties *
get-ADuser -filter * -properties City, Department | select-object -Property
Givenname, Name , Enabled, Department, city
```

- Affichez les cinq premiers utilisateurs Active Directory

Quelle commande avez-vous utilisée ?

```text
Get-AdUser -Filter * | Select-Object -First 5
```

- Sélectionnez les utilisateurs Active Directory par leurs propriétés City puis par leur propriété Department

```text
Indiquez les commandes utilisées.
Get-AdUser -Filter * | Select-Object City
Get-AdUser -Filter * | Select-Object Department
get-ADuser -filter * -properties * | select-object department,city
```

- Affichez les utilisateurs Active Directory avec les propriétés Name, Enabled, Department, City puis triez par la propriété City.

Quelle commande avez-vous utilisée ?

```text
Get-ADUser -Filter * -Properties * | Select Name,Enabled,Department,City
| sort -property City
```

- Reprenez la commande précédente puis appliquez le tri sur la propriété Department dans l’ordre descendant.

Quelle commande avez-vous utilisée ?

```text
Get-ADUser -Filter * -Properties * | Select Name,Enabled,Department,City
| sort -property Department -Descending
Effectuer le tri sur les deux propriétés City et Department.
Get-ADUser -Filter * -Properties * | Select Name,Enabled,Department,City
| sort -property City,Department
```

- Reprenez la commande précédente puis ajoutez une condition sur le nom qui doit comporter un r.

Quelle commande avez-vous utilisée ?

```text
Get-ADUser -Filter * -Properties * | Select Name,Enabled,Department,City
| Where -Property Name -like "R"
get-ADuser
-filter
*
-properties
*
|
select-object
Name,Enabled,city,department | where-object name -like "*r*" |sort-object
-Property department, City
```

Bonus

- Désactiver les utilisateurs dont le nom commence par un D.

```text
Utiliser la commande Disable-AdAccount
Get-ADUser -Filter * -Properties * | Select Name,Enabled,Department,City
| Where -Property Name -like "R" | Disabled-ADAccount
get-ADuser -filter 'name -like "d*"' | Disable-ADAccount
```

Depuis la machine CLI01

- Affichez la liste des utilisateurs Active Directory dont le compte est actif.

Quelle commande avez-vous utilisée ?

```text
Get-ADUser -Filter * | Where enabled -eq $True
```

Conditionnez le résultat pour ceux qui ont un nom qui débute par un A ou un F. Quelle commande avez-vous utilisée ?

```text
Get-ADUser -Filter * | Where-object -filterscript { $PSItem.enabled -eq
$True -And ($PSItem.Name -like "a*" -or $PSItem.name "F*"}
#en regex
get-ADuser -filter * -properties * | where-object -filterscript {
$PSITEM.enabled -like "$true" -AND $PSITEM.name -match "^[AF]" } | select-
object name,Enabled
```

- En reprenant la commande précédente, comptez le nombre d’utilisateurs actifs et le nombre d’utilisateurs inactifs.

Indiquez les commandes utilisées.

```text
Get-ADUser -Filter * | Where-Object Enabled -like $True | measure
Get-ADUser -Filter * | Where-Object Enabled -like $False | measure
```

- Affichez tous les fichiers du répertoire \\CD01\Partage.

```text
Quelle commande avez-vous utilisée ?
Get-ChildItem \\CD01\Partage\ -File -Recurse
```

- Reprenez la commande précédente puis affichez la taille moyenne des fichiers.

Quelle commande avez-vous utilisée ?

```text
Get-ChildItem \\CD01\Partage\ -File -Recurse | Measure -Property length -
average
```

Affichez la valeur la plus faible et la plus élevée de taille de fichiers.

```text
Get-ChildItem \\CD01\Partage\ -File -Recurse | Measure -Property length -
min -max
BONUS
```

- Reprenez les commandes précédentes et indiquez les fichiers dont la taille est supérieure à 10 Mo et inférieure à 100 Mo.

Quelle commande avez-vous utilisée ?

```text
Get-ChildItem \\CD01\Partage\ -File -Recurse | Where -FilterScript
{$PSItem.length -gt 10000 -and $PSItem.length -lt 100000 }
Get-ChildItem \\CD01\Partage\ -File -Recurse | Where -FilterScript
{$PSItem.length -gt 10000 -and $PSItem.length -lt 100000 }
```

```text
Get-ChildItem -path \\CD01\Partage -File -recurse | where -filterscript {
$PSItem.length -gt 10MB -and $PSItem.length -lt 100MB }
Affichez le résultat avec les propriétés Name, Length et mode et effectuez un tri descendant
sur le nom.
```

Depuis la machine CLI01

- Affichez la liste des utilisateurs Active Directory sur cinq colonnes.

Quelle commande avez-vous utilisée ?

```text
Get-ADUser -Filter * | Format-Wide -Column 5
```

- Affichez la liste des utilisateurs Active Directory qui sont actifs, en format tableau, avec les propriétés : Name, Enabled, Department, City

Quelle commande avez-vous utilisée ?

```text
Get-ADUser -Filter * -Properties * | Where enabled -eq $True | Format-
Table name,enabled,Department,City
```

- Affichez la liste des groupes Active Directory sous forme de tableau avec leurs noms, leurs descriptions ainsi que la date de création. Puis regroupez-les par type de groupe.

```text
Quelle commande avez-vous utilisée ?
Get-ADGroup -Filter * -Properties * | Format-Table -Property
name,description,created -GroupBy GroupScope
```

- Affichez la liste des ordinateurs du domaine sous forme de liste avec les propriétés : Nom, NomdDns, Distinguishedname, AdresseipV4 puis regroupez-les par système d’exploitation.

Indiquez les commandes utilisées.

```text
Get-ADComputer
-Filter
*
-Properties
*
|
Format-List
name,dnshostname,distinguishedname,ipv4address -GroupBy operatingsytem
```

- Affichez tous les événements du journal system avec les propriétés : Time, Index, Message.

```text
Get-EventLog system | select-object time,index,message
```

Faites en sorte que le contenu du message soit affiché en totalité sur la console. Quelle commande avez-vous utilisée ?

```text
Get-EventLog system | fl -property timewritten,index,message
```

Depuis la machine CLI01

- Exportez les utilisateurs Active Directory dans un fichier CSV \\CD01\Partage\Exports\Csv.

Quelle commande avez-vous utilisée ?

```text
Get-ADUser
-Filter
*
|
Export-CSV
-Path
\\CD01\Partage\PowerShell\Exports\CSV\Users.csv -delimiter "."
```

- Répétez la commande précédente mais dans le format HTML puis dans le dossier \\CD01\Partage\Exports\CSV\.

Quelle commande avez-vous utilisée ?

```text
Get-ADUser
-Filter
*
-properties
*
|
Export-CSV
-Path
\\CD01\Partage\Exports\CSV\Users_prop.csv -delimiter "."
```

- Ajoutez à la suite du fichier CSV les Ordinateurs Active Directory

Quelle commande avez-vous utilisée ?

```text
Get-ADComputer
-Filter
*
|
Export-CSV
-Path
\\CD01\Partage\PowerShell\Exports\CSV\Users.CSV -delimiter ";" -Append -
Force
```

- Modifiez le nom de la colonne Name de votre fichier CSV exporté précédemment.

Faite l’importation des utilisateurs Active Directory à partir du fichier CSV modifié.

```text
Import-CSV -Path \\CD01\Partage\Exports\CSV\Users.CSV -delimiter ";" |
Select @{n="Name";e={$PSItem.Nom}} | New-ADUser
```

Si vous obtenez le message d’erreur Already exist, utilisez la commande suivante :

```text
Get-Aduser -filter * | Remove-aduser -confirm : $False
```

Que remarquez-vous ?

Les utilisateurs Administrator et guest ont été conservés.

- Sans modifier le fichier CSV, trouvez une solution pour ne plus avoir de message d’erreur sur la propriété Name.

Quelle commande avez-vous utilisée ?

```text
Import-CSV
-Path
\\CD01\Partage\PowerShell\Exports\CSV\Users.CSV
-
delimiter ";" | Select @{n="Name";e={$PSItem.Nom}} | New-ADUser
```

- Affichez la liste des fichiers du partage de CD01 ; pour chaque propriété vous allez traduire le nom de la propriété. Chaque valeur sera exprimée en GB :

Indiquez votre commande.

```text
Get-ChildItem
-path
\\CD01\Partage\
-file
-recurse
|
Select
@{n="nom";e={$PSItem.name}},@{n="taille";e={'{0:N2}
KB'
-f
($PSItem.length /1KB) }} | Format-List
```
## Contrôler la forme des objets et les effets du TP

Le filtrage précède la projection si une propriété comme `City`, `Department` ou `Enabled` reste nécessaire. Trier les données avant `Format-Table -GroupBy`. Pour exporter, reprendre les objets obtenus avant les commandes `Format-*`.

Dans l’exercice d’import, comparer les noms des colonnes à ceux que `New-ADUser` attend. Un nouvel en-tête d’affichage ne modifie pas les données d’origine. Le corrigé montre une commande de suppression étendue pour mettre en évidence le conflit « user already exists ». Pour analyser le cas, relever l’identité du doublon et sa présence dans l’OU du TP. Une suppression globale a une portée différente du traitement de ce seul doublon.

Les sorties du journal et les tailles des fichiers dépendent de la maquette. Vérifier les octets, les unités choisies, les colonnes demandées et le nombre d’objets. Dans le contexte Windows PowerShell du document, `Get-EventLog` fournit les champs `TimeGenerated`, `Index` et `Message` illustrés.


- [Retour à l’énoncé](tp-01-manipuler-des-objets.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-03.md)
