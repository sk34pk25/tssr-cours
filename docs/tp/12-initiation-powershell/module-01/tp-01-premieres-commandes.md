# TP 01 — Premières commandes

## Objectifs

- Lancer les commandes PowerShell demandées.
- Analyser les différences de résultats entre différents environnements du
  scénario.

## Préparation du scénario

Suivre les vidéos du module 1, récupérer la maquette fournie par le formateur,
préparer l'environnement de virtualisation demandé et utiliser les identifiants
fournis dans l'environnement de laboratoire. Les ressources correspondantes ne
sont pas disponibles comme fichiers lisibles dans Drive M01.

## 1. Découvrir les deux consoles du scénario

Depuis la machine indiquée dans le TP, ouvrir successivement la console
PowerShell et la console PowerShell Core en mode administrateur. Dans chaque
console, exécuter :

```powershell
Get-Command | Measure
```

Noter le nombre de commandes retournées par la propriété `Count`. Cette valeur
est une observation de laboratoire.

Afficher également les verbes disponibles, puis rechercher les commandes
employant le verbe `New` et les commandes dont le nom contient `User` :

```powershell
Get-Verb
Get-Command -Verb New
Get-Command -Noun *User*
Get-command -Noun *localuser*
```

## 2. Utilisateurs locaux

Lister les cinq premiers utilisateurs locaux de chacune des machines du
scénario :

```powershell
Get-LocalUser | select -first 5
```

Le bonus demande de modifier puis de vérifier la description d'un utilisateur
local dans le laboratoire. Utiliser exclusivement les valeurs fournies par le
formateur ; ne pas recopier de donnée d'accès dans vos livrables.

## 3. Consulter l'aide

Pour la commande qui liste les services, afficher l'aide, l'aide dans une
nouvelle fenêtre et l'aide complète :

```powershell
Get-Help Get-Service
Get-Help Get-Service -showwindow
Get-Help Get-Service -full
```

Le TP demande aussi l'aide en ligne pour la commande relative aux membres d'un
groupe local. Relever la commande utilisée et les avantages observés de l'aide
en ligne. La divergence documentaire avec la correction est conservée dans la
page de correction.

## 4. Mettre à jour les fichiers d'aide

Mettre à jour l'aide depuis la ressource de laboratoire indiquée par le
formateur, puis effectuer la même opération avec la culture `fr-FR`. Relever les
remarques demandées par l'énoncé. Les partages et fichiers d'aide nécessaires ne
sont pas fournis dans Drive M01.

## 5. Modules

- afficher les modules actuellement chargés ;
- relever le nombre de modules demandé ;
- identifier le module dont provient `Get-LocalUser` ;
- rechercher les emplacements possibles pour les fichiers de module ;
- suivre le scénario d'import du module AWS fourni dans l'environnement de
  laboratoire ;
- relever trois commandes proposées par ce module dans le scénario.

## 6. Profil et bonus de prompt

Créer un profil personnel dans chaque console PowerShell, puis afficher l'aide
de `Get-Help` à l'ouverture de la console comme le demande le TP. Identifier le
fichier édité. Le bonus de prompt s'appuie sur un script de laboratoire absent
de Drive M01 : ne pas inventer ce script ni son contenu.

## Livrables et vérifications

Conserver les commandes utilisées, les réponses demandées et les observations
propres au laboratoire. Distinguer explicitement les résultats dynamiques du
scénario des règles présentées par le cours.

→ [Voir la correction du TP](correction-tp-01.md)
