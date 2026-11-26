# Démonstrations — Module 03

[Retour au TP](index.md)

## Démonstration · Fiche démo 1 - Le pipeline · 2 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Le pipeline

Démonstration 01 du module 3

L’objectif de cette démonstration est de présenter le pipeline.

### Déroulement

Lors de la manipulation d’un objet, il arrive que le nombre d’objets soit important, ou que l’on souhaite appliquer un traitement sur l’objet ou une propriété avant de l’afficher.

Pour cela, on utilise le pipe qui permet d’appliquer une commande sur le résultat d’une autre commande.

- Le pipe est réalisé avec la combinaison de touches Alt Gr et 6

```
o Le pipe sert à mettre en forme un résultat de sortie ou générer un tri de valeurs.
o Nous l’avons déjà utilisé avec la commande Get-Member.
```

Dans ce cas, la commande Get-Member est appliquée sur la commande précédant le pipe.

Nous l’avons également utilisé pour mettre en forme les résultats de sortie de commande qui disposent de nombreux résultats.

![Capture du support « Fiche démo 1 - Le pipeline »](../../../assets/course-sources/isolated/1430d01933d23f6d/ps-p1-i2-1.webp)

Capture du support « Fiche démo 1 - Le pipeline »

```
Il permet d’indiquer à la commande Format-Wide le nombre de colonnes dans lesquelles les
verbes seront classés. Ici la commande Format-Wide est raccourcie en Fw.
```

Le pipe dispose également d’un système d’exploration des propriétés de l’objet $PSItem.

Nous reviendrons sur les variables plus tard, mais nous pouvons voir un cas simple de l’utilisation de cette variable réservée.

```
Ici la variable $PSItem permet de tester la valeur de la propriété Id de chaque objet Process et
de n’afficher que ceux dans la valeur est supérieure à 1500.
```

Le pipe est utilisable à plusieurs reprises tant que l’objet dispose de suffisamment de propriétés.

![Capture du support « Fiche démo 1 - Le pipeline »](../../../assets/course-sources/isolated/1430d01933d23f6d/ps-p2-i2-1.webp)

Capture du support « Fiche démo 1 - Le pipeline »

![Capture du support « Fiche démo 1 - Le pipeline »](../../../assets/course-sources/isolated/1430d01933d23f6d/ps-p2-i3-1.webp)

Capture du support « Fiche démo 1 - Le pipeline »

![Capture du support « Fiche démo 1 - Le pipeline »](../../../assets/course-sources/isolated/1430d01933d23f6d/ps-p2-i4-1.webp)

Capture du support « Fiche démo 1 - Le pipeline »

Référence du document : 1hPZ8GBo1zPcMJPAwhx8y8uEkdmXrR3Am · SHA-256 1430d01933d23f6d…

## Démonstration · Fiche démo 10 - ConvertTo · 2 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### ConvertTo

Démonstration 11 du module 3

L’objectif de cette démonstration est de vous présenter la commande ConvertTo.

### Déroulement

Comme nous venons de le voir pour les formats pris en charge, l’export se fait directement depuis la console. Pour les autres formats, il est nécessaire de passer par une étape de conversion des données.

- Pour les formats HTML et JSON on doit :

```
o Convertir dans un premier temps les données au format souhaité
o Exporter les données converties dans un fichier.
```

Les données sont converties en balises HTML compatibles avec un navigateur web.

![Capture du support « Fiche démo 10 - ConvertTo » (partie 1/2)](../../../assets/course-sources/isolated/a15e93e3b6bee417/ps-p1-i2-1.webp)

Capture du support « Fiche démo 10 - ConvertTo » (partie 1/2)

![Capture du support « Fiche démo 10 - ConvertTo » (partie 2/2)](../../../assets/course-sources/isolated/a15e93e3b6bee417/ps-p1-i2-2.webp)

Capture du support « Fiche démo 10 - ConvertTo » (partie 2/2)

Pour le format JSON, la procédure est identique mais la lecture se fera indirectement par une application prenant en charge le fichier JSON.

Pour éviter l’écrasement des données, on ajoute le paramètre Append à la commande Out-File.

![Capture du support « Fiche démo 10 - ConvertTo » (partie 1/2)](../../../assets/course-sources/isolated/a15e93e3b6bee417/ps-p2-i2-1.webp)

Capture du support « Fiche démo 10 - ConvertTo » (partie 1/2)

![Capture du support « Fiche démo 10 - ConvertTo » (partie 2/2)](../../../assets/course-sources/isolated/a15e93e3b6bee417/ps-p2-i2-2.webp)

Capture du support « Fiche démo 10 - ConvertTo » (partie 2/2)

Référence du document : 1wE9qF_IeceXC9qtml-dDiFcqX8I3QToG · SHA-256 a15e93e3b6bee417…

## Démonstration · Fiche démo 11 - Get-Content · 1 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Get-Content

Démonstration 12 du module 3

L’objectif de cette démonstration est de vous présenter la commande Get-Content

### Déroulement

Il est possible d’afficher le contenu d’un fichier dans la console PowerShell.

Toutefois, ce n’est possible que sur un fichier au format lisible par la console.

- Prenons l’exemple d’un fichier CSV :

```
o On utilise la commande Get-Content suivie du chemin du fichier.
```

Les données apparaissent ligne par ligne.

Pour sélectionner certaines lignes, on utilise le paramètre tail puis une valeur pour indiquer le nombre de lignes sélectionnées en fin de fichier.

#### Commandes visibles dans les captures

```
Get-Content C:\FIC2.csv
Get-Content C:\FIC2.csv -Tail 5
```

![Capture du support « Fiche démo 11 - Get-Content »](../../../assets/course-sources/isolated/b834dad0e1d8c38c/ps-p1-i2-1.webp)

Capture du support « Fiche démo 11 - Get-Content »

![Capture du support « Fiche démo 11 - Get-Content »](../../../assets/course-sources/isolated/b834dad0e1d8c38c/ps-p1-i3-1.webp)

Capture du support « Fiche démo 11 - Get-Content »

Référence du document : 123mTRkoU8p08hLgEFA7PpadhfsFFKVSN · SHA-256 b834dad0e1d8c38c…

## Démonstration · Fiche démo 12 - Import des objets · 2 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Import des objets

Démonstration 12 du module 3

Nous venons de voir la transformation et l’exportation des objets en fichiers utilisables sur des systèmes externes. L’objectif de cette démonstration est de voir comment il est possible de renverser le processus en se servant de fichiers contenant des données et de les transformer en objets utilisables dans notre système.

### Déroulement

- La commande Import-Csv :

```
o Dans un fichier CSV, la première ligne contient les en-têtes de colonnes.
```

Comparés à un objet PowerShell, ces en-têtes deviennent le nom des propriétés des objets.

```
o Chaque ligne du fichier CSV contient donc les valeurs des propriétés des
```

objets.

```
o Ce qui sépare les valeurs est le délimiteur.
```

A partir des données du fichier CSV, on recrée des objets. Il ne faut surtout pas oublier d’indiquer le délimiteur sans cela l’importation ne sera pas fonctionnelle.

On peut profiter de cette commande d’importation pour exécuter une commande de création

![Capture du support « Fiche démo 12 - Import des objets »](../../../assets/course-sources/isolated/69cc31a1a2fca91c/ps-p1-i2-1.webp)

Capture du support « Fiche démo 12 - Import des objets »

d’utilisateurs Active Directory.

Chaque objet du fichier CSV va se transformer en objet AdUser.

Notre annuaire va être peuplé par les objets du fichier CSV.

Que faire dans le cas où les en-têtes de colonnes du fichier CSV ne correspondent pas au nom des propriétés des objets ?

S’il n’est pas possible de modifier les valeurs des en-têtes, alors on peut utiliser une action vue précédemment.

Cette action provient du pipe, c’est la variable $PSItem.

En effet cette variable contient les valeurs récupérées dans la première commande, il suffit de faire correspondre ses valeurs avec les propriétés attendues dans les objets.

Cette commande ne fonctionne pas. La cause est une particularité du fonctionnement du pipe qui ne parvient pas à faire la correspondance entre les données du fichier CSV et la demande de la variable $PSItem.

Dans tous les cas, il faut un fichier CSV respectant à la lettre les propriétés de l’objet.

![Capture du support « Fiche démo 12 - Import des objets »](../../../assets/course-sources/isolated/69cc31a1a2fca91c/ps-p2-i2-1.webp)

Capture du support « Fiche démo 12 - Import des objets »

![Capture du support « Fiche démo 12 - Import des objets »](../../../assets/course-sources/isolated/69cc31a1a2fca91c/ps-p2-i3-1.webp)

Capture du support « Fiche démo 12 - Import des objets »

Référence du document : 1HKcnE-tbSeypD8UeCEoGoIsknm6pM8k8 · SHA-256 69cc31a1a2fca91c…

## Démonstration · Fiche démo 13 - Les propriétés calculées · 2 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Les propriétés calculées

Démonstration 13 du module 3

L’objectif de cette démonstration est de découvrir les propriétés calculées.

### Déroulement

La modification d’une propriété peut être effectuée de plusieurs manières : soit par l’utilisation d’une commande Set, soit par l’utilisation d’une variable intermédiaire. Dans certains cas, il va être nécessaire de créer une propriété pour la durée d’une commande.

Comme la traduction du nom de la propriété ou la gestion des décimales, après l’exécution de la commande la propriété ne sera plus accessible.

- Les propriétés dites calculées servent très souvent pour traduire les noms des propriétés.
- Dans un premier temps, on va créer une propriété, puis on va lui assigner les valeurs de la propriété d’origine que l’on souhaite traduire.

On récupère les valeurs de la propriété Name pour les intégrer dans une nouvelle propriété dont le

```
label est Nom.
```

Cela va permettre de créer de nouvelles propriétés qui vont parfaitement correspondre aux propriétés des objets à importer.

Si notre fichier CSV contient une propriété dont le nom ne correspond pas à une propriété de l’objet, alors on doit passer par la propriété calculée pour faire correspondre les valeurs de la propriété du fichier CSV avec la propriété de l’objet.

![Capture du support « Fiche démo 13 - Les propriétés calculées »](../../../assets/course-sources/isolated/531d46bbcfcfb759/ps-p1-i2-1.webp)

Capture du support « Fiche démo 13 - Les propriétés calculées »

![Capture du support « Fiche démo 13 - Les propriétés calculées »](../../../assets/course-sources/isolated/531d46bbcfcfb759/ps-p1-i3-1.webp)

Capture du support « Fiche démo 13 - Les propriétés calculées »

Pour réaliser ces lignes de commandes plus longues, nous utilisons le logiciel Visual Studio Code

dans sa version 1.49.1 avec le complément PowerShell

La commande Select-Object permet de créer la propriété Name avec les valeurs du fichier CSV Nom puis de les envoyer dans la propriété Name de l’objet ADUser.

Une deuxième utilité des propriétés calculées est de permettre de modifier les valeurs de la propriété.

On modifie le nombre de décimales, puis on divise la valeur de la propriété Length pour obtenir un résultat lisible.

Les propriétés calculées sont disponibles à plusieurs reprises dans une ligne de commande.

Nous avons traduit toutes les propriétés et transformé leurs valeurs dans un format plus lisible et exportable.

![Capture du support « Fiche démo 13 - Les propriétés calculées »](../../../assets/course-sources/isolated/531d46bbcfcfb759/ps-p2-i2-1.webp)

Capture du support « Fiche démo 13 - Les propriétés calculées »

![Capture du support « Fiche démo 13 - Les propriétés calculées »](../../../assets/course-sources/isolated/531d46bbcfcfb759/ps-p2-i3-1.webp)

Capture du support « Fiche démo 13 - Les propriétés calculées »

![Capture du support « Fiche démo 13 - Les propriétés calculées »](../../../assets/course-sources/isolated/531d46bbcfcfb759/ps-p2-i4-1.webp)

Capture du support « Fiche démo 13 - Les propriétés calculées »

![Capture du support « Fiche démo 13 - Les propriétés calculées »](../../../assets/course-sources/isolated/531d46bbcfcfb759/ps-p2-i5-1.webp)

Capture du support « Fiche démo 13 - Les propriétés calculées »

Référence du document : 1-dGKNfkxuPAohf4cUVqwe0jRnWDFfMsM · SHA-256 531d46bbcfcfb759…

## Démonstration · Fiche démo 2 - Select-Object · 3 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Select-Object

Démonstration 02 du module 3

L’objectif de cette démonstration est de présenter la commande Select-Object.

### Déroulement

La commande Select-Object permet de sélectionner des propriétés d’un ou de tous les objets renvoyés par la commande initiale. De cette façon, l’affichage du résultat sera constitué des propriétés sélectionnées. Si une commande est indiquée à la suite du Select-Object elle pourra travailler uniquement sur les propriétés sélectionnées précédemment.

- À la suite d’une commande renvoyant un ou des objets

```
o Le Select va disposer les propriétés dans l’ordre souhaité par l’utilisateur.
o Il va également proposer de n’afficher qu’un certain nombre d’objets en fonction de
```

leur classement.

On indique avec la commande Select-Object suivie du paramètre Property les propriétés que l’on afficha dans le résultat. Lorsque l’on souhaite indiquer plusieurs propriétés, le séparateur est la virgule.

```
L’ordre d’affichage est fonction de l’ordre des propriétés indiqué dans la commande Select-
Object.
```

La commande permet également de préciser un nombre d’objets.

#### Commandes visibles dans les captures

```
Get-Service | Select-Object -Property Name,Status
```

![Capture du support « Fiche démo 2 - Select-Object »](../../../assets/course-sources/isolated/88661c6ea7711b5b/ps-p1-i2-1.webp)

Capture du support « Fiche démo 2 - Select-Object »

Le paramètre Last permet d’indiquer le nombre d’objets présent dans le résultat en commençant par la fin. L’ordre de classement est alphabétique sur la première propriété indiquée.

Le paramètre Unique regroupe les objets qui partagent une valeur de propriété identique.

Dans l’exemple d’un process, la propriété ID a une valeur commune pour plusieurs process.

```
Sans le paramètre Unique on obtient 91 objets dont certains ont une valeur de propriété identique.
```

Avec le paramètre Unique, les objets ont tous des valeurs de propriétés uniques.

Le paramètre ExpandProperty permet de ne garder que la valeur sans le nom de la propriété,

![Capture du support « Fiche démo 2 - Select-Object »](../../../assets/course-sources/isolated/88661c6ea7711b5b/ps-p2-i2-1.webp)

Capture du support « Fiche démo 2 - Select-Object »

![Capture du support « Fiche démo 2 - Select-Object »](../../../assets/course-sources/isolated/88661c6ea7711b5b/ps-p2-i3-1.webp)

Capture du support « Fiche démo 2 - Select-Object »

A l’affichage du résultat, l’en-tête de propriété n’apparaît plus dans le résultat.

#### Commandes visibles dans les captures

```
Get-Service | Select-Object -ExpandProperty Name
```

![Capture du support « Fiche démo 2 - Select-Object »](../../../assets/course-sources/isolated/88661c6ea7711b5b/ps-p3-i2-1.webp)

Capture du support « Fiche démo 2 - Select-Object »

Référence du document : 17PeQA7NPkv5tN6N6ilTPSlmlbMlts7Ga · SHA-256 88661c6ea7711b5b…

## Démonstration · Fiche démo 3 - Measure-Object · 2 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Measure-Object

Démonstration 03 du module 3

```
L’objectif de cette démonstration est de vous présenter la commande Measure-Object.
```

### Déroulement

Comptabiliser le nombre d’objets est important pour identifier des défaillances, des besoins d’intervention ou pour vérifier la bonne prise en compte de certaines commandes.

- La commande Measure-Object permet :

```
o De comptabiliser le nombre d’objets renvoyés par une commande
```

Dans ce cas et sans précision, c’est le paramètre Count qui est pris à défaut.

Il est également possible de déterminer la moyenne des valeurs renvoyées par une commande.

#### Commandes visibles dans les captures

```
Get-Process | Select-Object | Measure-Object
Get-Process | Select-Object -Unique | Measure-Object
```

![Capture du support « Fiche démo 3 - Measure-Object »](../../../assets/course-sources/isolated/658af100882af469/ps-p1-i2-1.webp)

Capture du support « Fiche démo 3 - Measure-Object »

```
Nous indiquons à Measure-Object la propriété Id qui est de type Int et il est renvoyé la moyenne
des valeurs.
Attention, les calculs ne se font que sur les propriétés dont le type est Int.
Nous avons toutes les possibilités de la commande Measure-Object.
```

C’est une commande particulièrement importante pour évaluer les tailles de fichier.

La propriété Length indique la taille des dossiers présents dans le répertoire Windows.

```
Measure-Object indique la taille la plus faible, la plus élevée, la taille moyenne, le nombre d’objets
et nous rappelle la propriété testée.
```

La taille est en octets à défaut.

![Capture du support « Fiche démo 3 - Measure-Object »](../../../assets/course-sources/isolated/658af100882af469/ps-p2-i2-1.webp)

Capture du support « Fiche démo 3 - Measure-Object »

![Capture du support « Fiche démo 3 - Measure-Object »](../../../assets/course-sources/isolated/658af100882af469/ps-p2-i3-1.webp)

Capture du support « Fiche démo 3 - Measure-Object »

![Capture du support « Fiche démo 3 - Measure-Object »](../../../assets/course-sources/isolated/658af100882af469/ps-p2-i4-1.webp)

Capture du support « Fiche démo 3 - Measure-Object »

Référence du document : 1tiw_26jEXuOwOrFcerBrLa1u82jAoldx · SHA-256 658af100882af469…

## Démonstration · Fiche démo 4 - Sort-Object · 2 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Sort-Object

Démonstration 04 du module 3

L’objectif de cette démonstration est de vous présenter la commande Sort-Object.

### Déroulement

L’ordre d’affichage des objets dans le résultat de commande est déterminé selon le type de valeur.

Pour une valeur de type String c’est un ordre alphabétique, pour une valeur de type Int c’est un ordre croissant. La commande Sort-Object permet de modifier ses ordres.

La commande Sort-Object s’utilise en fin de linge de commande de manière à mettre en forme le résultat final.

- A la suite d’une commande Select-Object

```
o Les objets sont affichés par état de leur statut, les statuts Stopped puis les statuts
Running.
o La
valeur
de
propriété
Status
étant
de
type
System.ServiceProcess.serviceControllerStatus, l’ordre de tri se fait
en premier sur les statuts arrêtés.
```

La commande permet aussi d’inverser l’ordre de tri standard.

![Capture du support « Fiche démo 4 - Sort-Object »](../../../assets/course-sources/isolated/2fa6bdd22bb4647d/ps-p1-i2-1.webp)

Capture du support « Fiche démo 4 - Sort-Object »

Le paramètre Descending inverse l’ordre de tri, quel que soit le type de valeurs de propriété.

```
Comme on le voit dans l’exemple précédent, seule la propriété Status subit un tri ; la propriété
Name est non triée.
```

La commande Sort-Object accepte plusieurs propriétés pour effectuer un tri.

Les services sont triés par leurs statuts et ensuite l’ensemble des services Stopped subissent un tri au niveau de leur nom.

![Capture du support « Fiche démo 4 - Sort-Object »](../../../assets/course-sources/isolated/2fa6bdd22bb4647d/ps-p2-i2-1.webp)

Capture du support « Fiche démo 4 - Sort-Object »

![Capture du support « Fiche démo 4 - Sort-Object »](../../../assets/course-sources/isolated/2fa6bdd22bb4647d/ps-p2-i3-1.webp)

Capture du support « Fiche démo 4 - Sort-Object »

Référence du document : 1J0sVqx5QD-73uZSlj2eOKbtKcbx3K02o · SHA-256 2fa6bdd22bb4647d…

## Démonstration · Fiche démo 5 - Where-Object · 4 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Where-Object

Démonstration 05 du module 3

L’objectif de cette démonstration est de présenter la commande Where-Object.

### Déroulement

Une des commandes les plus utilisées permet d’appliquer une ou plusieurs conditions sur une ou plusieurs propriétés d’un objet.

Le conditionnement permet de définir des listes d’objets précises et de pouvoir obtenir un résultat correspondant au besoin exprimé.

- La commande Where-Object s’utilise en complément de la commande Select-Object
- Dans un premier temps, nous allons voir une condition simple.

La commande utilisée permet de chercher un ou plusieurs utilisateurs dans la base de données Active Directory.

La condition Where-Object permet de trouver le ou les objets utilisateurs pour laquelle la propriété Name est égale à Oneal.

La condition Where-Object utilise les opérateurs de comparaison ici le -eq indique l’égalité.

Nous allons voir qu’il est possible de tester une propriété sans connaître le contenu exact.

![Capture du support « Fiche démo 5 - Where-Object »](../../../assets/course-sources/isolated/95b4aeb84563e269/ps-p1-i2-1.webp)

Capture du support « Fiche démo 5 - Where-Object »

Pour cela, on utilise l’opérateur de comparaison Like avec le caractère * , ce qui nous permet d’obtenir tous les utilisateurs dont le nom débute par Ro.

```
o Pour rappel, les opérateurs de comparaison par défaut sont insensibles à la
```

casse.

```
o Pour les rendre sensibles à la casse, il faut les préfixer par un c.
```

La commande Where-Object est également utilisable sur des propriétés de type booléen.

Dans ce cas, la propriété est comparée à la variable $True ou $False selon si l’on souhaite tester la validation ou non.

Dans le cas de notre commande, on affiche uniquement les comptes Active Directory actifs.

```
Where-Object permet également d’utiliser les opérateurs logiques and et or.
```

Dans ce cas, il faut vérifier plusieurs propriétés. On se sert de la variable réservée $PSItem vu précédemment.

![Capture du support « Fiche démo 5 - Where-Object »](../../../assets/course-sources/isolated/95b4aeb84563e269/ps-p2-i2-1.webp)

Capture du support « Fiche démo 5 - Where-Object »

![Capture du support « Fiche démo 5 - Where-Object »](../../../assets/course-sources/isolated/95b4aeb84563e269/ps-p2-i3-1.webp)

Capture du support « Fiche démo 5 - Where-Object »

On utilise le paramètre FisterScript indiqué par l’utilisation des accolades de la commande

```
Where-Object puis, on utilise la variable réservée $PSItem suivie d’un point puis le nom de la
propriété à tester.
```

Le test est ensuite répété sur la seconde propriété ; entre les deux on place l’opérateur logique.

Dans le cas d’un And, les deux propriétés doivent répondre « vrai » à la condition pour que l’objet soit affiché dans le résultat.

Dans notre test, il faut que l’utilisateur « Active Directory » soit actif et que son nom commence par un R.

```
Voyons maintenant le cas d’un Or.
```

![Capture du support « Fiche démo 5 - Where-Object »](../../../assets/course-sources/isolated/95b4aeb84563e269/ps-p3-i2-1.webp)

Capture du support « Fiche démo 5 - Where-Object »

![Capture du support « Fiche démo 5 - Where-Object »](../../../assets/course-sources/isolated/95b4aeb84563e269/ps-p3-i3-1.webp)

Capture du support « Fiche démo 5 - Where-Object »

Avec l’opérateur Or, il faut que l’une ou l’autre des propriétés testées répondre « vrai » pour que l’objet soit sélectionné.

```
Ici on obtient les utilisateurs dont le nom commence par un R ou par un  S
```

Il est également possible de faire cohabiter les deux opérateurs de comparaison.

![Capture du support « Fiche démo 5 - Where-Object »](../../../assets/course-sources/isolated/95b4aeb84563e269/ps-p4-i2-1.webp)

Capture du support « Fiche démo 5 - Where-Object »

![Capture du support « Fiche démo 5 - Where-Object »](../../../assets/course-sources/isolated/95b4aeb84563e269/ps-p4-i3-1.webp)

Capture du support « Fiche démo 5 - Where-Object »

Référence du document : 1L51B4JI2gf8z_fvz0zHlUqbJmGnlHOkQ · SHA-256 95b4aeb84563e269…

## Démonstration · Fiche démo 6 - Format-Table · 3 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Format-Table

Démonstration 06 du module 3

L’objectif de cette démonstration est de vous présenter la commande Format-Table.

### Déroulement

Lorsque les objets sont correctement sélectionnés, triés et conditionnés, il est utile de les exporter dans un format adapté à un tableur par exemple.

Pour cela, il va falloir mettre sous forme de tableaux les objets obtenus ainsi que leurs propriétés.

La commande Format-Table permet d’organiser les colonnes et les valeurs de nos objets.

- Placé en fin de ligne de commande, le Format-Table travaille à partir des propriétés.
- Il s’accompagne pratiquement tout le temps d’un Select-Object

La commande place les en-têtes de colonne dans l’ordre indiqué au paramètre Property.

Le paramètre HidetableHeaders masque les en-têtes de colonnes pour ne laisser que les valeurs.

![Capture du support « Fiche démo 6 - Format-Table »](../../../assets/course-sources/isolated/e753036abe86b7c8/ps-p1-i2-1.webp)

Capture du support « Fiche démo 6 - Format-Table »

Le paramètre Groupby permet de regrouper des objets selon la valeur d’une propriété.

On retrouve les utilisateurs actifs et les inactifs.

Le paramètre Wrap va forcer le retour à la ligne dans le cas où la valeur d’une propriété serait trop longue pour l’affichage.

![Capture du support « Fiche démo 6 - Format-Table »](../../../assets/course-sources/isolated/e753036abe86b7c8/ps-p2-i2-1.webp)

Capture du support « Fiche démo 6 - Format-Table »

![Capture du support « Fiche démo 6 - Format-Table »](../../../assets/course-sources/isolated/e753036abe86b7c8/ps-p2-i3-1.webp)

Capture du support « Fiche démo 6 - Format-Table »

![Capture du support « Fiche démo 6 - Format-Table »](../../../assets/course-sources/isolated/e753036abe86b7c8/ps-p3-i2-1.webp)

Capture du support « Fiche démo 6 - Format-Table »

Référence du document : 1RZTyNl8v0lgrVPdenc9H6fYOSFEOGrtL · SHA-256 e753036abe86b7c8…

## Démonstration · Fiche démo 8 - Format-List · 2 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Format-List

Démonstration 08 du module 3

L’objectif de cette démonstration est de vous présenter la commande Format-List

### Déroulement

La commande Format-List a un rôle de mise en forme des propriétés d’un objet sous forme de liste. De la même manière que la commande Format-Table, elle reprend les mêmes principes.

- Dans un premier temps, toutes les propriétés sont mises sous forme de liste.

On peut constater que la mise en forme de type liste est la mise en forme par défaut de la commande Get-AdUser. Les objets sont présentés à l’horizontale, leurs propriétés sont les unes sur les autres. Chaque objet est déroulé par ordre de tri.

La commande Format-List permet de sélectionner les propriétés présentes dans la liste.

![Capture du support « Fiche démo 8 - Format-List »](../../../assets/course-sources/isolated/01643372ae792724/ps-p1-i2-1.webp)

Capture du support « Fiche démo 8 - Format-List »

![Capture du support « Fiche démo 8 - Format-List »](../../../assets/course-sources/isolated/01643372ae792724/ps-p2-i2-1.webp)

Capture du support « Fiche démo 8 - Format-List »

Référence du document : 1seN7AcUmhXSPdYkI4pyvdgfKAUr__9BU · SHA-256 01643372ae792724…

## Démonstration · Fiche démo 9 - Export-Object · 3 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Export-Object

Démonstration 10 du module 3

L’objectif de cette démonstration est de présenter la commande Export-Object

### Déroulement

Une fois la mise en forme terminée, il faut exporter les résultats de commandes vers un logiciel ou une application. Selon le format choisi, il va falloir exporter ces données vers un fichier.

- Il existe différents types de fichiers dont le format est pris en charge nativement par la console PowerShell :

```
o Le format CSV qui comporte un délimiteur. La plupart du temps, ce délimiteur
```

est le point-virgule.

```
o Certains logiciels peuvent demander la présence d’un autre délimiteur
```

comme la virgule.

![Capture du support « Fiche démo 9 - Export-Object » (partie 1/2)](../../../assets/course-sources/isolated/24441a6b66fd2cf7/ps-p1-i2-1.webp)

Capture du support « Fiche démo 9 - Export-Object » (partie 1/2)

![Capture du support « Fiche démo 9 - Export-Object » (partie 2/2)](../../../assets/course-sources/isolated/24441a6b66fd2cf7/ps-p1-i2-2.webp)

Capture du support « Fiche démo 9 - Export-Object » (partie 2/2)

On peut constater que la première ligne du fichier CSV contient le TypeName de l’objet.

Afin de ne pas avoir le type d’objet dans le fichier CSV on ajoute le paramètre NoTypeInformation.

Si on exécute une commande d’export sur un fichier existant, la commande va automatiquement supprimer les données présentes dans le fichier.

Pour éviter l’écrasement des données, on ajoute le paramètre Append.

![Capture du support « Fiche démo 9 - Export-Object »](../../../assets/course-sources/isolated/24441a6b66fd2cf7/ps-p2-i2-1.webp)

Capture du support « Fiche démo 9 - Export-Object »

![Capture du support « Fiche démo 9 - Export-Object »](../../../assets/course-sources/isolated/24441a6b66fd2cf7/ps-p2-i3-1.webp)

Capture du support « Fiche démo 9 - Export-Object »

On se retrouve avec les comptes d’utilisateur à nouveau à la suite de la première exportation.

Le second format pris en charge nativement est le CliXml. Il permet l’export de données vers des applications web.

Les règles d’exportation sont identiques au CSV ; on élimine le délimiteur inutile dans le format CSV.

D’autres formats peuvent être ajoutés par l’intermédiaire de l’installation de module.

Il est intéressant de pouvoir exporter des données sous forme de fichiers de base de données, de code PHP ou de fichier XLSX.

![Capture du support « Fiche démo 9 - Export-Object » (partie 1/2)](../../../assets/course-sources/isolated/24441a6b66fd2cf7/ps-p3-i2-1.webp)

Capture du support « Fiche démo 9 - Export-Object » (partie 1/2)

![Capture du support « Fiche démo 9 - Export-Object » (partie 2/2)](../../../assets/course-sources/isolated/24441a6b66fd2cf7/ps-p3-i2-2.webp)

Capture du support « Fiche démo 9 - Export-Object » (partie 2/2)

Référence du document : 10nnSDbh474FxYYmhhOzJyzOW1eQz-tJm · SHA-256 24441a6b66fd2cf7…

## Démonstration · Fiche démo 7 - Format-Wide · 2 pages transcrites

Transcription du support du Drive. Les formulations historiques et les exemples du document sont conservés. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

### Format-Wide

Démonstration 07 du module 3

L’objectif de cette démonstration est de vous présenter la commande Format-Wide

### Déroulement

```
Lorsque les objets sont très nombreux, la commande Format-Wide permet de les répartir sur toute
```

la largeur de l’écran.

La première possibilité est de laisser la commande répartir les objets de façon automatique

Le paramètre Autosize va répartir les résultats sur un nombre de colonnes idéal.

```
Il est possible de forcer le nombre de colonnes avec le paramètre Column puis d’indiquer la valeur
en int pour le nombre de colonnes.
Autre paramètre plus classique Property qui va répartir le nom d’une seule propriété à la place
de l’objet.
```

![Capture du support « Fiche démo 7 - Format-Wide »](../../../assets/course-sources/isolated/8e4ab4aa3f7b9d45/ps-p1-i2-1.webp)

Capture du support « Fiche démo 7 - Format-Wide »

![Capture du support « Fiche démo 7 - Format-Wide »](../../../assets/course-sources/isolated/8e4ab4aa3f7b9d45/ps-p1-i3-1.webp)

Capture du support « Fiche démo 7 - Format-Wide »

```
Il n’est pas possible de spécifier au paramètre property plusieurs propriétés, la commande
Format-Wide ne le prend pas en charge.
```

![Capture du support « Fiche démo 7 - Format-Wide »](../../../assets/course-sources/isolated/8e4ab4aa3f7b9d45/ps-p2-i2-1.webp)

Capture du support « Fiche démo 7 - Format-Wide »

Référence du document : 1hQEtBdFpF1oVt3rPMdBVHEW3kR2VqhIA · SHA-256 8e4ab4aa3f7b9d45…
