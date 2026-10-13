# Énoncés — Module 03 — Interagir avec Windows 10

Les consignes ci-dessous reprennent les cinq PDF source. Utilisez exclusivement les environnements et les identifiants transmis par le formateur. Aucune donnée d’accès n’est publiée dans cette documentation.

## TP 1 — Prise en main de l’interface graphique

**Durée source : 30 minutes.**

Sur la VM Windows du laboratoire :

1. supprimer les raccourcis Windows Store et Courrier de la barre des tâches, puis y ajouter Windows PowerShell ;
2. interrompre temporairement les mises à jour selon la durée indiquée par le scénario ;
3. relever le nom du PC, puis le renommer avec le nom prévu pour la VM ;
4. créer une console MMC personnalisée regroupant la gestion des disques, les utilisateurs et groupes locaux et les dossiers partagés ; l’enregistrer sur le bureau ;
5. personnaliser le papier peint ;
6. désactiver la mise en veille ;
7. créer le snapshot demandé par le scénario.

Sur la VM Discovery :

1. utiliser les identifiants fournis par le formateur ;
2. relever les composants logiciels enfichables présents dans la console `admConsole` ;
3. renommer le système avec le nom prévu par le scénario, redémarrer si nécessaire et vérifier la prise en compte ;
4. appliquer l’interruption temporaire des mises à jour demandée.

## TP 2 — Prise en main de la CMD

**Durée source : 1 heure.**

Sur la VM Windows du laboratoire :

1. personnaliser l’affichage de `cmd` : police Consolas, taille 24, couleurs de la police et de l’arrière-plan ;
2. afficher les commandes internes ;
3. afficher l’aide de `cd` et expliquer son utilité ;
4. se placer à la racine du lecteur `C:` ;
5. créer `C:\CommandList` ;
6. créer `C:\CommandList\InternalCommands.txt` contenant la liste des commandes internes ;
7. afficher ce fichier pour vérification ;
8. copier ce fichier sur le bureau de l’utilisateur prévu par le scénario ;
9. afficher les fichiers et sous-répertoires du bureau, triés par taille croissante ;
10. créer le snapshot demandé.

## TP 3 — Premiers pas avec PowerShell

**Durée source : 30 minutes.**

Sur la VM Windows du laboratoire :

1. personnaliser la fenêtre PowerShell : police, taille et dimensions ;
2. relever la version de PowerShell ;
3. afficher le contenu du répertoire courant, puis de `C:\Users` ;
4. lister les alias PowerShell et identifier ceux de `Get-ChildItem` ;
5. créer le snapshot demandé.

Sur la VM Discovery :

1. utiliser les identifiants fournis par le formateur ;
2. afficher le contenu de `C:\PowerShell\Intro.txt` ;
3. identifier le répertoire courant, puis se déplacer à la racine de `C:`.

## TP 4 — Manipuler l’aide de PowerShell

**Durée source : 1 heure.**

1. Sur Discovery, afficher l’aide complète de `Get-Alias` et identifier la cmdlet utilisée.
2. Sur la VM Windows du laboratoire, afficher la même aide, puis comparer les résultats obtenus.
3. Mettre à jour l’aide PowerShell en suivant les conditions réseau et de mise à jour du scénario ; une fois l’opération terminée, restaurer la configuration réseau demandée par le laboratoire.
4. Relever la cmdlet qui affiche les exemples de `Get-Help`.
5. Utiliser ces exemples pour rechercher la cmdlet qui liste les concepts PowerShell disponibles.
6. Consulter l’aide sur les alias dans une fenêtre séparée.
7. Déterminer la persistance des alias et la rubrique d’aide à consulter pour les sauvegarder.
8. Rechercher la variable qui fixe le nombre de commandes conservées dans l’historique, relever sa valeur par défaut et déterminer si elle est modifiable.

## TP 5 — Devenir autonome avec PowerShell

**Durée source : 1 heure 30 minutes.**

Sur la VM Windows du laboratoire :

1. afficher les commandes disponibles ;
2. n’afficher que les cmdlets, puis celles dont le verbe est `Get` ;
3. identifier la cmdlet qui liste les groupes locaux, les propriétés visibles par défaut et les autres propriétés disponibles ;
4. afficher le SID et la source principale du groupe Utilisateurs du Bureau à distance.

Sur Discovery :

1. rechercher la commande qui liste les disques et relever leur nombre ;
2. afficher le numéro et le modèle des disques ;
3. pour le disque numéro 2, n’afficher que le nom, le type de bus et le fabricant ;
4. afficher le nom, le statut et la description du pilote de l’adaptateur réseau ;
5. afficher les membres du groupe local Administrateurs ;
6. rediriger cette liste vers `C:\Users\AdminMembers.txt`, puis vérifier la présence et le contenu du fichier.

Pour construire les réponses, le support recommande de rechercher la commande avec `Get-Command`, de consulter son aide et ses exemples, de la tester simplement, puis d’afficher les propriétés demandées.

Une fois le travail terminé : [consulter les corrections](corrections.md).
