# Correction — Outils pour le scripting

La solution fournie est reprise dans son ordre. Les valeurs observées concernent la maquette du document. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

## Outils pour le scripting

TP du Module 05

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 5 de ce cours.

Durée estimée

1 heure

## Énoncé

Objectifs :

- Comprendre les fonctions, modules et la gestion des erreurs

Consignes :

Les manipulations sont à réaliser sur la machine CLI01

- Pour réaliser le TP, utilisez un IDE comme ISE ou Visual Studio Code.

Réalisez un script permettant de tester la présence d’un service. Le nom du service sera variable. Dans le cas où le service n’est pas existant, aucun message ne sera affiché mais il sera consigné dans une variable. Un message sera affiché lorsque tous les services seront testés.

Indiquez les lignes de commandes de votre script.

### Script de la capture

```text
$service = read-host "Indiquez le service tester"
try {
    get-service -name $service -erroraction stop -errorvariable erreur
}
catch {
    write-host "Ce service n'existe pas"
}
finally{
$erreur
}
```

- Transformez ce script en fonction ; le nom du service sera un paramètre.
- Ouvrez une session depuis votre machine client vers votre serveur CD01.

Stocker votre session dans une variable

- Créer un script permettant de trouver les ordinateurs stockés dans l’AD, puis à condition que la machine ne soit pas un contrôleur de domaine, le script lancera l’extinction de la machine.

Indiquez les commandes utilisées.

### Script de la capture

```text
function service {
param ($service)
try {
    get-service -name $service -erroraction stop -errorvariable erreur
}
catch {
    write-host "Ce service n'existe pas"
}
finally{
}
}
service wsearch

Enter-PSSession -ComputerName CD01
$session = new-pssession -computername CD01
$session

$computers = get-adcomputer -filter * -properties *
foreach ($i in $computers) {
if ($i.distinguishedname -notlike "*domain controllers*"){
    invoke-command -computer $i.dnshostname `
    -scriptblock{stop-computer -force}
}
}
```

- Transformez le script en fonction ; le nom de domaine sera indiqué en paramètre.

Indiquez les commandes utilisées.

- Modifiez durablement le comportement de votre Ise pour que les erreurs des commandes soient stockées dans une variable. Puis modifiez le comportement de la console pour que les messages d’erreur ne soient pas affichés.

### Script de la capture

```text
function stop{
param($domain)
$computers = get-adcomputer -filter * -properties * `
-searchbase "cn=computers,dc=$domain,dc=lcl"
foreach ($i in $computers) {
if ($i.distinguishedname -notlike "*domain controllers*"){
    invoke-command -computer $i.dnshostname `
    -scriptblock{stop-computer -force}
}
}
}
stop ad01

$ErrorActionPreference = "SilentlyContinue"
$ErrorActionPreference
```
## Contrôler le service, les cibles et la portée des erreurs

Tester la fonction avec un service présent et un nom absent. `-ErrorVariable erreur` renseigne `$erreur`. `-ErrorAction Stop` rend l’erreur interceptable dans `catch`. Le bloc `finally` du premier exemple affiche le contenu d’erreur. Le second exemple le laisse vide.

Dans la capture, l’invite passe à `[CD01]` après `Enter-PSSession` et `$session` affiche l’état `Opened`. Ces observations sont propres à la maquette. Le test pédagogique consiste à lire le nom de la machine distante et à fermer les sessions créées une fois le travail terminé.

La correction d’arrêt filtre les noms distinctifs contenant `domain controllers`. Le nom de l’OU peut varier. Pour vérifier la sélection, comparer la liste d’ordinateurs à celle obtenue avec `Get-ADDomainController` et contrôler séparément les machines autorisées avant l’action. Le code Original montre l’arrêt forcé demandé par l’exercice.

L’affectation de `$ErrorActionPreference` s’applique à sa portée. Le profil de l’hôte permet de retrouver un réglage au prochain démarrage si cet effet persistant est demandé. Vérifier avec une nouvelle console et une commande de test. [Gestion des erreurs PowerShell](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_error_handling).


- [Retour à l’énoncé](tp-01-outils-pour-le-scripting.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-05.md)
