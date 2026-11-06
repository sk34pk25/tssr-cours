# Énoncé — Manipuler des objets

Le document fourni décrit le travail demandé et les résultats à relever dans la maquette. Les valeurs d’accès du laboratoire sont indiquées comme « fourni par le formateur ». Les adresses de messagerie personnelles utilisent example.com.

## Initiation à PowerShell Manipuler des objets

TP du Module 03

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 3 de ce cours.

Durée estimée

1 heure 30

## Préparer le travail et le compte rendu

Vérifier l’OU autorisée, l’accès au partage et le dossier d’export. Conserver la liste structurée avant de formater l’affichage. Pour les opérations AD, préparer une simulation ou une preuve en lecture avant tout changement.

| Étape | Preuve à relever |
| --- | --- |
| Annuaire | Attributs obtenus, ordre de tri et nombres avant et après filtrage. |
| Partage | Minimum, maximum, moyenne et unités des tailles. |
| Export et import | Colonnes des fichiers, copie d’essai pour l’ajout des ordinateurs et diagnostic du doublon ciblé. |

## Énoncé

Objectifs :

Manipuler les objets leurs propriétés et leurs méthodes

Utilisation de la commande Select-Object, Sort-Object et Where-Object.

Consignes :

Depuis la machine CLI01

Affichez la liste des utilisateurs ActiveDirectory avec la propriété GivenName, Name, Enabled Department City.

Quelle commande avez-vous utilisée ?

Consultez l’aide de la commande Get-AdUser pour trouver la solution aux valeurs vides des propriétés Department et City ?

Indiquez la commande complète permettant l’affichage des valeurs de toutes les propriétés.

Affichez les cinq premiers utilisateurs Active Directory

Quelle commande avez-vous utilisée ?

Sélectionnez les utilisateurs Active Directory par leurs propriétés City puis par leur propriété Department

Indiquez les commandes utilisées.

Affichez les utilisateurs Active Directory avec les propriétés Name, Enabled, Department, City puis triez par la propriété City.

Quelle commande avez-vous utilisée ?

Reprenez la commande précédente puis appliquez le tri sur la propriété Department dans l’ordre descendant.

Quelle commande avez-vous utilisée ?

Effectuer le tri sur les deux propriétés City et Department.

Reprenez la commande précédente puis ajoutez une condition sur le nom qui doit comporter un r.

Quelle commande avez-vous utilisée ?

Bonus

Désactiver les utilisateurs dont le nom commence par un D.

Utiliser la commande Disable-AdAccount

Depuis la machine CLI01

Affichez la liste des utilisateurs Active Directory dont le compte est actif.

Quelle commande avez-vous utilisée ?

Conditionnez le résultat pour ceux qui ont un nom qui débute par un A ou un F. Quelle commande avez-vous utilisée ?

Reprenez la commande précédente et ajouter la condition sur le compte actif. Quelle commande avez-vous utilisée ?

En reprenant la commande précédente, comptez le nombre d’utilisateurs actifs et le nombre d’utilisateurs inactifs.

Indiquez les commandes utilisées.

Affichez tous les fichiers du répertoire \\CD01\Partage.

Quelle commande avez-vous utilisée ?

Reprenez la commande précédente puis affichez la taille moyenne des fichiers.

Quelle commande avez-vous utilisée ?

Affichez la valeur la plus faible et la plus élevée de taille de fichiers.

BONUS

Reprenez les commandes précédentes et indiquez les fichiers dont la taille est supérieure à 10 Mo et inférieure à 100 Mo.

Quelle commande avez-vous utilisée ?

Affichez le résultat avec les propriétés Name, Length et mode et effectuez un tri descendant sur le nom.

Depuis la machine CLI01

Affichez la liste des utilisateurs Active Directory sur cinq colonnes.

Quelle commande avez-vous utilisée ?

Affichez la liste des utilisateurs Active Directory qui sont actifs, en format tableau, avec les propriétés : Name, Enabled, Department, City

Quelle commande avez-vous utilisée ?

Affichez la liste des groupes Active Directory sous forme de tableau avec leurs noms, leurs descriptions ainsi que la date de création. Puis regroupez-les par type de groupe.

Quelle commande avez-vous utilisée ?

Affichez la liste des ordinateurs du domaine sous forme de liste avec les propriétés : Nom, NomdDns, Distinguishedname, AdresseipV4 puis regroupez-les par système d’exploitation.

Indiquez les commandes utilisées.

Affichez tous les événements du journal system avec les propriétés : Time, Index, Message.

Faites en sorte que le contenu du message soit affiché en totalité sur la console. Quelle commande avez-vous utilisée ?

Depuis la machine CLI01

Exportez les utilisateurs Active Directory dans un fichier CSV \\CD01\Partage\Exports\ Csv.

Quelle commande avez-vous utilisée ?

Répétez la commande précédente mais dans le format HTML puis dans le dossier \\ CD01\Partage\Exports\CSV\.

Quelle commande avez-vous utilisée ?

Ajoutez à la suite du fichier CSV les Ordinateurs Active Directory

Quelle commande avez-vous utilisée ?

Modifiez le nom de la colonne Name de votre fichier CSV exporté précédemment.

Faite l’importation des utilisateurs Active Directory à partir du fichier CSV modifié.

Si vous obtenez le message d’erreur Already exist, utilisez la commande suivante :

!!! warning "Commande de suppression du document historique"
    Le bloc ci-dessous est à analyser dans le cadre du TP. Utiliser la recherche ciblée du doublon et le contrôle de l’OU décrits dans le cours.

```text
Get-Aduser -filter * | Remove-aduser -confirm : $False
```

Que remarquez-vous ?

Sans modifier le fichier CSV, trouvez une solution pour ne plus avoir de message d’erreur sur la propriété Name.

Quelle commande avez-vous utilisée ?

Affichez la liste des fichiers du partage de CD01 ; pour chaque propriété vous allez traduire le nom de la propriété. Chaque valeur sera exprimée en GB :

Indiquez votre commande.

## Solution

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

## Suite du TP

- [Corrigé](correction-tp-01.md)
- [Cours du module](../../../modules/12-initiation-powershell/module-03.md)
