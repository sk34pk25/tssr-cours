# Énoncés — Module 03 — Connaissances des notions de base d’Excel

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## M3 - Enoncé du TP - Utilisation d_Excel

### Microsoft 365 - Outils

#### Utilisation d’Excel

#### TP du Module 3 - Notions de base sur Excel

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module ..

#### Durée estimée

#### 60 à 90 minutes

#### Énoncé

#### Connaître l’utilisation du tableur Excel (fonctions, graphique, tableau)

#### Prérequis :

- Récupérer deux documents :

  - « Clients — Document Brut.docx », document à mettre en forme
  - « Clients — Document Fini.pdf », document contenant le résultat attendu

#### Principales tâches à réaliser

#### ✓ Feuille « Liste des clients »

#### ❑ Créer la formule pour générer les « Codes clients »

#### ❑ Les « Codes clients » sont composés des colonnes :

#### ❑ Nom

#### ❑ Prénom

#### ❑ Ville

#### ❑ Pays

#### ❑ Fonctions utilisées

#### ❑ majuscule()

#### ❑ gauche()

#### ❑ concatener() ou &

#### ✓ Feuille « Catalogue des produits »

#### ❑ Créer la formule pour générer les « Code » de l’ouvrage

#### ❑ Les « Code » sont composés des colonnes :

#### ❑ Nom-Auteur

#### ❑ Prénom-Auteur

#### ❑ Collection

#### ❑ Tome

#### ❑ Fonctions utilisées

#### ❑ majuscule()

#### ❑ gauche()

#### ❑ droite()

#### ❑ concatener() ou &

#### ✓ Feuille « Liste des produits vendus »

#### ❑ Créer la formule pour générer les « Numéro de la commande »

#### ❑ Les « Numéro de la commande » sont composés des colonnes :

#### ❑ Date de la commande

#### ❑ Code clients

❑ S’il n’y a pas d’informations dans les colonnes date de commande ou de code clients, la colonne « Numéros de la commande » n’affiche rien.

#### ❑ Fonctions utilisées

#### ❑ droite()

#### ❑ annee()

#### ❑ mois()

#### ❑ jour()

#### ❑ si()

#### ❑ ou()

#### ❑ concatener() ou &

#### ✓ Feuille « Liste des produits vendus »

#### ❑ Créer la formule pour récupérer les « Nom et Prénom »

#### ❑ Les « Nom et Prénom » sont composés des colonnes :

#### ❑ « Nom » du tableau « Clients » de la feuille « Liste des clients »

#### ❑ « Prénom » du tableau « Clients » de la feuille « Liste des clients »

#### ❑ Fonctions utilisées

#### ❑ rechercherv()

#### ❑ concatener() ou &

#### ✓ Feuille « Liste des produits vendus »

#### ❑ Créer la formule pour récupérer les « Titre et Tome »

#### ❑ Les « Titre et Tome » sont composés des colonnes :

❑ « Collection » du tableau « Ouvrage » de la feuille « Catalogue des produits » ❑ « Tome » du tableau « Ouvrage » de la feuille « Catalogue des produits »

#### ❑ Fonctions utilisées

#### ❑ rechercherv()

#### ❑ concatener() ou &

#### ❑ droite()

#### ✓ Feuille « Liste des produits vendus »

#### ❑ Créer la formule pour récupérer les « Montant TTC »

#### ❑ Les « Montant TTC » sont composés des colonnes :

❑ « Prix » du tableau « Ouvrage » de la feuille « Catalogue des produits »

#### ❑ Fonction utilisée

#### ❑ rechercherv()

#### ✓ Feuille « Liste des produits vendus »

#### ❑ Créer la formule pour calculer les « Total de la commande »

❑ Les « Total de la commande » sont calculés à partir de la colonne « Montant TTC »: ❑ « Prix » du tableau « Ouvrage » de la feuille « Catalogue des produits » ❑ Dans la colonne « Total de la commande », si le « Code clients » est identique à celui de la ligne du dessous, la cellule est vide, sinon le résultat du calcul s’affiche.

#### ❑ Fonctions utilisées

#### ❑ si()

#### ❑ ou()

#### ❑ somme.si.ens()

#### ✓ Feuille « Catalogue des produits »

❑ Créer la f ormule dans la colonne « Ventes » pour compter le nombre d’article s vendus.

#### ❑ Le décompte s’effectue à partir des colonnes

❑ « Produits » du tableau « Achats » de la feuille « Liste des produits vendus » ❑ « Codes » du tableau « Ouvrage » de la feuille « Catalogue des produits »

#### ❑ Fonction utilisée

#### ❑ nb.si.ens()

#### ✓ Feuille « Catalogue des produits »

❑ Créer la formule dans la colonne « % des ventes » pour représenter le pourcentage des ventes d’un produit.

#### ❑ Le calcul s’effectue à partir de la colonne « Ventes »

#### ❑ Fonction utilisée

#### ❑ somme()

#### ✓ Feuille « Total des ventes par clients »

❑ Créer un tableau récapitulatif du montant des achats effectués par chaque client. ❑ Tableau croisé dynamique créé à partir du tableau de la feuille « Liste des

produits vendus »

#### ❑ « Nom et Prénom » en ligne

❑ « Montant TTC » en valeurs sur lesquelles est effectuée une somme.

#### ✓ Feuille « Total des ventes par clients »

❑ Créer un graphique à partir du tableau créé précédemment.

#### ❑ Graphique croisé dynamique histogramme groupé 3D

#### ✓ Feuille « Liste des clients »

❑ Créer la formule pour le montant des achats de chaque client dans la colonne « Total Achats ».

#### ❑ Les « Total Achats » sont récupérés à partir :

❑ Des valeurs calculées dans le tableau croisé dynamique. ❑ Des colonnes « Nom » et « Prénom » du tableau « Clients » de la feuille « Liste

des clients »

❑ En cas d’erreur retournée par la formule, la cellule ne devra rien contenir.

#### ❑ Fonction utilisée

#### ❑ recherchev()

#### ❑ sierreur()

Une fois le travail terminé : [consulter les corrections](corrections.md).

## Clients — Document Brut

### Liste des clients

Valeurs enregistrées :

| Colonne 1 | Colonne 2 | Colonne 3 | Colonne 4 | Colonne 5 | Colonne 6 | Colonne 7 | Colonne 8 | Colonne 9 | Colonne 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  | Le tableau est nommé |  |  |  |  |
|  |  |  |  |  | Clients |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  | Code clients | Titre | Nom | Prénom | Adresse1 | CP | Ville | Pays | Total Achats |
|  | BEUODEBRUBEL | Madame | BEUKELAERE | Odette | avenue de la Reine Astrid | 1000 | BRUXELLES | BELGIQUE | 31 |
|  | BINJULNICFRA | Monsieur | BINOCHE | Julien | 56, place de la Victoire | 06100 | NICE | FRANCE | 39 |
|  | CAIMICRENFRA | Monsieur | CAINE | Mickaël | 12, rue des Capucins | 35000 | RENNES | FRANCE | 16.5 |
|  | CURARTLYOFRA | Monsieur | CURT | Arthur | 12, rue du Commerce | 69100 | LYON | FRANCE | 24.5 |
|  | DESSOPRENFRA | Madame | DESVENTS | Sophie | 3, rue des Roches | 35000 | RENNES | FRANCE | 34.5 |
|  | DUBJEANANFRA | Monsieur | DUBOIS | Jean | 10, impasse des Marguerites | 44000 | NANTES | FRANCE | 32.5 |
|  | HOLSHENANFRA | Monsieur | HOLMES | Sherlock | 16, rue Mauduit | 44100 | NANTES | FRANCE | 57.5 |
|  | HOUSÉBMARFRA | Monsieur | HOUDAN | Sébastien | 125, avenue Marceau | 13210 | MARSEILLE | FRANCE | 0 |
|  | IRVAMYNANFRA | Madame | IRVING | Amy | 17, rue Avenue Shining | 44300 | NANTES | FRANCE | 63.5 |
|  | IZGBERLONGRA | Madame | IZGOUD | Bernadette | Spring Road | 675490 | LONDRES | GRANDE-BRETAGNE | 79 |
|  | LAPMAXNANFRA | Monsieur | LAPORTE | Maxime | 34, rue des Cèdres | 44000 | NANTES | FRANCE | 33.5 |
|  | LEVMARANGFRA | Madame | LEVASSEUR | Marthe | 15, rue de la Fauvette | 49000 | ANGERS | FRANCE | 19 |
|  | PORJULNANFRA | Madame | PORTE | Juliette | 10, rue des Peupliers | 44400 | NANTES | FRANCE | 26 |
|  | PREJEARENFRA | Madame | PREFFER | Jeanne | 24, rue de l'Evasion | 35000 | RENNES | FRANCE | 19.5 |
|  | REGOTAGENSUI | Madame | REGION | Otalie | 10, avenue Fragmeht | 1212 | GENEVE | SUISSE | 42 |
|  | WALEVANANFRA | Mademoiselle | WALKEN | Eva | 32, rue des Voyants | 44000 | NANTES | FRANCE | 55 |
|  |  |  |  |  |  |  |  |  | 573 |

Formules par colonne :

```
B (16 cellules) : =CONCATENATE(UPPER(LEFT(D6,3)),UPPER(LEFT(E6,3)),UPPER(LEFT(H6,3)),UPPER(LEFT(I6,3)),) | =CONCATENATE(UPPER(LEFT(D7,3)),UPPER(LEFT(E7,3)),UPPER(LEFT(H7,3)),UPPER(LEFT(I7,3)),) | =CONCATENATE(UPPER(LEFT(D8,3)),UPPER(LEFT(E8,3)),UPPER(LEFT(H8,3)),UPPER(LEFT(I8,3)),) | =CONCATENATE(UPPER(LEFT(D9,3)),UPPER(LEFT(E9,3)),UPPER(LEFT(H9,3)),UPPER(LEFT(I9,3)),) | =CONCATENATE(UPPER(LEFT(D10,3)),UPPER(LEFT(E10,3)),UPPER(LEFT(H10,3)),UPPER(LEFT(I10,3)),) | =CONCATENATE(UPPER(LEFT(D11,3)),UPPER(LEFT(E11,3)),UPPER(LEFT(H11,3)),UPPER(LEFT(I11,3)),) | =CONCATENATE(UPPER(LEFT(D12,3)),UPPER(LEFT(E12,3)),UPPER(LEFT(H12,3)),UPPER(LEFT(I12,3)),) | =CONCATENATE(UPPER(LEFT(D13,3)),UPPER(LEFT(E13,3)),UPPER(LEFT(H13,3)),UPPER(LEFT(I13,3)),)
J (17 cellules) : =IFERROR(VLOOKUP(D6 & " " & E6, 'Total des ventes par clients'!$A$2:$B$16, 2, 0),0) | =IFERROR(VLOOKUP(D7 & " " & E7, 'Total des ventes par clients'!$A$2:$B$16, 2, 0),0) | =IFERROR(VLOOKUP(D8 & " " & E8, 'Total des ventes par clients'!$A$2:$B$16, 2, 0),0) | =IFERROR(VLOOKUP(D9 & " " & E9, 'Total des ventes par clients'!$A$2:$B$16, 2, 0),0) | =IFERROR(VLOOKUP(D10 & " " & E10, 'Total des ventes par clients'!$A$2:$B$16, 2, 0),0) | =IFERROR(VLOOKUP(D11 & " " & E11, 'Total des ventes par clients'!$A$2:$B$16, 2, 0),0) | =IFERROR(VLOOKUP(D12 & " " & E12, 'Total des ventes par clients'!$A$2:$B$16, 2, 0),0) | =IFERROR(VLOOKUP(D13 & " " & E13, 'Total des ventes par clients'!$A$2:$B$16, 2, 0),0)
```

### Catalogue des produits

Valeurs enregistrées :

| Colonne 1 | Colonne 2 | Colonne 3 | Colonne 4 | Colonne 5 | Colonne 6 | Colonne 7 | Colonne 8 | Colonne 9 | Colonne 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | Le tableau est nommé |  |  |  |  |  |  |
|  |  |  | Ouvrage |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  | Code | Ouvrage |  |  | Auteur |  | Prix | Ventes | % des ventes |
|  |  | Collection | Nom | Tome | Nom | Prénom |  |  |  |
|  | COLSUZHUNG1 | Hunger Games |  | Tome 1 | Collins | Suzanne | 17 | 2 | 0.05714285714285714 |
|  | COLSUZHUNG2 | Hunger Games | L'embrasement | Tome 2 | Collins | Suzanne | 17 | 1 | 0.02857142857142857 |
|  | COLSUZHUNG3 | Hunger Games | La révolte | Tome 3 | Collins | Suzanne | 17.5 | 0 | 0 |
|  | DASJAMLABY1 | Labyrinthe | Le labyrinthe | Tome 1 | Dasher | James | 15.5 | 3 | 0.08571428571428572 |
|  | DASJAMLABY2 | Labyrinthe | La terre Brûlée | Tome 2 | Dasher | James | 16 | 0 | 0 |
|  | DASJAMLABY3 | Labyrinthe | Le remède mortel | Tome 3 | Dasher | James | 16.5 | 0 | 0 |
|  | GIEKERROUG1 | Rouge Rubis |  | Tome 1 | Gier | Kerstin | 13.5 | 1 | 0.02857142857142857 |
|  | GIEKERBLEU2 | Bleu Saphir  |  | Tome 2 | Gier | Kerstin | 13 | 3 | 0.08571428571428572 |
|  | GIEKERVERT3 | Vert Emeraude  |  | Tome 3 | Gier | Kerstin | 13 | 2 | 0.05714285714285714 |
|  | MARGEOGAME1 | Games of Throne | Intégrale 1 | Tome 1 | Martin | George R.R. | 19 | 3 | 0.08571428571428572 |
|  | MARGEOGAME2 | Games of Throne | Intégrale 2 | Tome 2 | Martin | George R.R. | 19.5 | 2 | 0.05714285714285714 |
|  | MARGEOGAME3 | Games of Throne | Intégrale 3 | Tome 3 | Martin | George R.R. | 19.5 | 3 | 0.08571428571428572 |
|  | MARGEOGAME4 | Games of Throne | Intégrale 4 | Tome 4 | Martin | George R.R. | 21 | 2 | 0.05714285714285714 |
|  | MARGEOGAME5 | Games of Throne | Intégrale 5 | Tome 5 | Martin | George R.R. | 21 | 1 | 0.02857142857142857 |
|  | PAOCHRERAG1 | Eragon |  | Tome 1 | Paolini | Christopher | 12 | 2 | 0.05714285714285714 |
|  | PAOCHRERAG2 | Eragon | L'aîné | Tome 2 | Paolini | Christopher | 12.5 | 1 | 0.02857142857142857 |
|  | PAOCHRERAG3 | Eragon | Brisingr | Tome 3 | Paolini | Christopher | 13 | 0 | 0 |
|  | PAOCHRERAG4 | Eragon | L'héritage | Tome 4 | Paolini | Christopher | 14 | 0 | 0 |
|  | ROTVERDIVE1 | Divergente |  | Tome 1 | Roth | Veronica | 14.5 | 2 | 0.05714285714285714 |
|  | ROTVERDIVE2 | Divergente |  | Tome 2 | Roth | Veronica | 14.5 | 1 | 0.02857142857142857 |
|  | ROTVERDIVE3 | Divergente |  | Tome 3 | Roth | Veronica | 15 | 1 | 0.02857142857142857 |
|  | ALDJUSMISÉ | Miséricorde |  |  | Alder-Olsen | Jussi | 16.5 | 2 | 0.05714285714285714 |
|  | ALDJUSPROF | Profanation |  |  | Alder-Olsen | Jussi | 17 | 2 | 0.05714285714285714 |
|  | ALDJUSDÉLI | Délivrance |  |  | Alder-Olsen | Jussi | 17.5 | 1 | 0.02857142857142857 |
|  | ALDJUSDOSS | Dossier 64 |  |  | Alder-Olsen | Jussi | 18 | 0 | 0 |
|  | ALDJUSL'EF | L'effet papillon |  |  | Alder-Olsen | Jussi | 19 | 0 | 0 |
|  | ALDJUSPROM | Promesse |  |  | Alder-Olsen | Jussi | 20 | 0 | 0 |

Formules par colonne :

```
B (27 cellules) : =CONCATENATE(UPPER(LEFT(F7,3)),UPPER(LEFT(G7,3)),UPPER(LEFT(C7,4)),UPPER(RIGHT(E7,1))) | =CONCATENATE(UPPER(LEFT(F8,3)),UPPER(LEFT(G8,3)),UPPER(LEFT(C8,4)),UPPER(RIGHT(E8,1))) | =CONCATENATE(UPPER(LEFT(F9,3)),UPPER(LEFT(G9,3)),UPPER(LEFT(C9,4)),UPPER(RIGHT(E9,1))) | =CONCATENATE(UPPER(LEFT(F10,3)),UPPER(LEFT(G10,3)),UPPER(LEFT(C10,4)),UPPER(RIGHT(E10,1))) | =CONCATENATE(UPPER(LEFT(F11,3)),UPPER(LEFT(G11,3)),UPPER(LEFT(C11,4)),UPPER(RIGHT(E11,1))) | =CONCATENATE(UPPER(LEFT(F12,3)),UPPER(LEFT(G12,3)),UPPER(LEFT(C12,4)),UPPER(RIGHT(E12,1))) | =CONCATENATE(UPPER(LEFT(F13,3)),UPPER(LEFT(G13,3)),UPPER(LEFT(C13,4)),UPPER(RIGHT(E13,1))) | =CONCATENATE(UPPER(LEFT(F14,3)),UPPER(LEFT(G14,3)),UPPER(LEFT(C14,4)),UPPER(RIGHT(E14,1)))
I (27 cellules) : =COUNTIFS(produits,B7) | =COUNTIFS(produits,B8) | =COUNTIFS(produits,B9) | =COUNTIFS(produits,B10) | =COUNTIFS(produits,B11) | =COUNTIFS(produits,B12) | =COUNTIFS(produits,B13) | =COUNTIFS(produits,B14)
J (27 cellules) : =I7/SUM($I$7:$I$33) | =I8/SUM($I$7:$I$33) | =I9/SUM($I$7:$I$33) | =I10/SUM($I$7:$I$33) | =I11/SUM($I$7:$I$33) | =I12/SUM($I$7:$I$33) | =I13/SUM($I$7:$I$33) | =I14/SUM($I$7:$I$33)
```

### Liste des produits vendus 

Valeurs enregistrées :

| Colonne 1 | Colonne 2 | Colonne 3 | Colonne 4 | Colonne 5 | Colonne 6 | Colonne 7 | Colonne 8 | Colonne 9 | Colonne 10 | Colonne 11 | Colonne 12 | Colonne 13 | Colonne 14 | Colonne 15 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | Le tableau est nommé |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  | Achats |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Numéro de la commande | Date de la commande | Code clients | Nom et Prénom | Produits | Titre et Tome | Montant TTC | Total de la commande |  |  |  |  |  |  |
|  | 20210107CAIMICRENFRA | 2021-01-07 00:00:00 | CAIMICRENFRA | CAINE Mickaël | ALDJUSMISÉ | Miséricorde  | 16.5 | 16.5 |  |  |  |  |  |  |
|  | 20210107DESSOPRENFRA | 2021-01-07 00:00:00 | DESSOPRENFRA | DESVENTS Sophie | ALDJUSPROF | Profanation  | 17 |  |  |  |  |  |  |  |
|  | 20210107DESSOPRENFRA | 2021-01-07 00:00:00 | DESSOPRENFRA | DESVENTS Sophie | ALDJUSDÉLI | Délivrance  | 17.5 | 34.5 |  |  |  |  |  |  |
|  | 20210115IZGBERLONGRA | 2021-01-15 00:00:00 | IZGBERLONGRA | IZGOUD Bernadette | MARGEOGAME1 | Games of Throne 1 | 19 |  |  |  |  |  |  |  |
|  | 20210115IZGBERLONGRA | 2021-01-15 00:00:00 | IZGBERLONGRA | IZGOUD Bernadette | MARGEOGAME2 | Games of Throne 2 | 19.5 | 38.5 |  |  |  |  |  |  |
|  | 20210120WALEVANANFRA | 2021-01-20 00:00:00 | WALEVANANFRA | WALKEN Eva | GIEKERROUG1 | Rouge Rubis 1 | 13.5 |  |  |  |  |  |  |  |
|  | 20210120WALEVANANFRA | 2021-01-20 00:00:00 | WALEVANANFRA | WALKEN Eva | GIEKERBLEU2 | Bleu Saphir  2 | 13 |  |  |  |  |  |  |  |
|  | 20210120WALEVANANFRA | 2021-01-20 00:00:00 | WALEVANANFRA | WALKEN Eva | GIEKERVERT3 | Vert Emeraude  3 | 13 | 39.5 |  |  |  |  |  |  |
|  | 20210122LAPMAXNANFRA | 2021-01-22 00:00:00 | LAPMAXNANFRA | LAPORTE Maxime | ALDJUSMISÉ | Miséricorde  | 16.5 |  |  |  |  |  |  |  |
|  | 20210122LAPMAXNANFRA | 2021-01-22 00:00:00 | LAPMAXNANFRA | LAPORTE Maxime | ALDJUSPROF | Profanation  | 17 | 33.5 |  |  |  |  |  |  |
|  | 20210125LEVMARANGFRA | 2021-01-25 00:00:00 | LEVMARANGFRA | LEVASSEUR Marthe | MARGEOGAME1 | Games of Throne 1 | 19 | 19 |  |  |  |  |  |  |
|  | 20210125BINJULNICFRA | 2021-01-25 00:00:00 | BINJULNICFRA | BINOCHE Julien | MARGEOGAME2 | Games of Throne 2 | 19.5 |  |  |  |  |  |  |  |
|  | 20210125BINJULNICFRA | 2021-01-25 00:00:00 | BINJULNICFRA | BINOCHE Julien | MARGEOGAME3 | Games of Throne 3 | 19.5 | 39 |  |  |  |  |  |  |
|  | 20210130CURARTLYOFRA | 2021-01-30 00:00:00 | CURARTLYOFRA | CURT Arthur | PAOCHRERAG1 | Eragon 1 | 12 |  |  |  |  |  |  |  |
|  | 20210130CURARTLYOFRA | 2021-01-30 00:00:00 | CURARTLYOFRA | CURT Arthur | PAOCHRERAG2 | Eragon 2 | 12.5 | 24.5 |  |  |  |  |  |  |
|  | 20210201IRVAMYNANFRA | 2021-02-01 00:00:00 | IRVAMYNANFRA | IRVING Amy | COLSUZHUNG1 | Hunger Games 1 | 17 |  |  |  |  |  |  |  |
|  | 20210201IRVAMYNANFRA | 2021-02-01 00:00:00 | IRVAMYNANFRA | IRVING Amy | COLSUZHUNG2 | Hunger Games 2 | 17 | 34 |  |  |  |  |  |  |
|  | 20210206DUBJEANANFRA | 2021-02-06 00:00:00 | DUBJEANANFRA | DUBOIS Jean | COLSUZHUNG1 | Hunger Games 1 | 17 |  |  |  |  |  |  |  |
|  | 20210206DUBJEANANFRA | 2021-02-06 00:00:00 | DUBJEANANFRA | DUBOIS Jean | DASJAMLABY1 | Labyrinthe 1 | 15.5 | 32.5 |  |  |  |  |  |  |
|  | 20210206WALEVANANFRA | 2021-02-06 00:00:00 | WALEVANANFRA | WALKEN Eva | DASJAMLABY1 | Labyrinthe 1 | 15.5 | 15.5 |  |  |  |  |  |  |
|  | 20210206BEUODEBRUBEL | 2021-02-06 00:00:00 | BEUODEBRUBEL | BEUKELAERE Odette | MARGEOGAME1 | Games of Throne 1 | 19 |  |  |  |  |  |  |  |
|  | 20210206BEUODEBRUBEL | 2021-02-06 00:00:00 | BEUODEBRUBEL | BEUKELAERE Odette | PAOCHRERAG1 | Eragon 1 | 12 | 31 |  |  |  |  |  |  |
|  | 20210208HOLSHENANFRA | 2021-02-08 00:00:00 | HOLSHENANFRA | HOLMES Sherlock | DASJAMLABY1 | Labyrinthe 1 | 15.5 |  |  |  |  |  |  |  |
|  | 20210208HOLSHENANFRA | 2021-02-08 00:00:00 | HOLSHENANFRA | HOLMES Sherlock | GIEKERBLEU2 | Bleu Saphir  2 | 13 |  |  |  |  |  |  |  |
|  | 20210208HOLSHENANFRA | 2021-02-08 00:00:00 | HOLSHENANFRA | HOLMES Sherlock | ROTVERDIVE1 | Divergente 1 | 14.5 | 43 |  |  |  |  |  |  |
|  | 20210210HOLSHENANFRA | 2021-02-10 00:00:00 | HOLSHENANFRA | HOLMES Sherlock | ROTVERDIVE1 | Divergente 1 | 14.5 | 14.5 |  |  |  |  |  |  |
|  | 20210210IRVAMYNANFRA | 2021-02-10 00:00:00 | IRVAMYNANFRA | IRVING Amy | ROTVERDIVE2 | Divergente 2 | 14.5 |  |  |  |  |  |  |  |
|  | 20210210IRVAMYNANFRA | 2021-02-10 00:00:00 | IRVAMYNANFRA | IRVING Amy | ROTVERDIVE3 | Divergente 3 | 15 | 29.5 |  |  |  |  |  |  |
|  | 20210215IZGBERLONGRA | 2021-02-15 00:00:00 | IZGBERLONGRA | IZGOUD Bernadette | MARGEOGAME3 | Games of Throne 3 | 19.5 |  |  |  |  |  |  |  |
|  | 20210215IZGBERLONGRA | 2021-02-15 00:00:00 | IZGBERLONGRA | IZGOUD Bernadette | MARGEOGAME4 | Games of Throne 4 | 21 | 40.5 |  |  |  |  |  |  |
|  | 20210215PREJEARENFRA | 2021-02-15 00:00:00 | PREJEARENFRA | PREFFER Jeanne | MARGEOGAME3 | Games of Throne 3 | 19.5 | 19.5 |  |  |  |  |  |  |
|  | 20210215REGOTAGENSUI | 2021-02-15 00:00:00 | REGOTAGENSUI | REGION Otalie | MARGEOGAME4 | Games of Throne 4 | 21 |  |  |  |  |  |  |  |
|  | 20210215REGOTAGENSUI | 2021-02-15 00:00:00 | REGOTAGENSUI | REGION Otalie | MARGEOGAME5 | Games of Throne 5 | 21 | 42 |  |  |  |  |  |  |
|  | 20210220PORJULNANFRA | 2021-02-20 00:00:00 | PORJULNANFRA | PORTE Juliette | GIEKERBLEU2 | Bleu Saphir  2 | 13 |  |  |  |  |  |  |  |
|  | 20210220PORJULNANFRA | 2021-02-20 00:00:00 | PORJULNANFRA | PORTE Juliette | GIEKERVERT3 | Vert Emeraude  3 | 13 | 26 |  |  |  |  |  |  |
|  |  |  |  |  |  |  | 573 | 573 |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Colonne nommée |  |  |  | Colonne nommée |  | Colonne nommée |  |  |  |  |  |  |  |
|  | Commande |  |  |  | Produits |  | Montant |  |  |  |  |  |  |  |

Formules par colonne :

```
B (35 cellules) : =IF(OR(C6="",D6=""),"",CONCATENATE(YEAR(C6), RIGHT("0"&MONTH(C6),2), RIGHT("0"&DAY(C6),2), D6)) | =IF(OR(C7="",D7=""),"",CONCATENATE(YEAR(C7), RIGHT("0"&MONTH(C7),2), RIGHT("0"&DAY(C7),2), D7)) | =IF(OR(C8="",D8=""),"",CONCATENATE(YEAR(C8), RIGHT("0"&MONTH(C8),2), RIGHT("0"&DAY(C8),2), D8)) | =IF(OR(C9="",D9=""),"",CONCATENATE(YEAR(C9), RIGHT("0"&MONTH(C9),2), RIGHT("0"&DAY(C9),2), D9)) | =IF(OR(C10="",D10=""),"",CONCATENATE(YEAR(C10), RIGHT("0"&MONTH(C10),2), RIGHT("0"&DAY(C10),2), D10)) | =IF(OR(C11="",D11=""),"",CONCATENATE(YEAR(C11), RIGHT("0"&MONTH(C11),2), RIGHT("0"&DAY(C11),2), D11)) | =IF(OR(C12="",D12=""),"",CONCATENATE(YEAR(C12), RIGHT("0"&MONTH(C12),2), RIGHT("0"&DAY(C12),2), D12)) | =IF(OR(C13="",D13=""),"",CONCATENATE(YEAR(C13), RIGHT("0"&MONTH(C13),2), RIGHT("0"&DAY(C13),2), D13))
E (35 cellules) : =CONCATENATE(VLOOKUP(D6,'Liste des clients'!$B$6:$E$21,3,0)," ",VLOOKUP(D6,'Liste des clients'!$B$6:$E$21,4,0)) | =CONCATENATE(VLOOKUP(D7,'Liste des clients'!$B$6:$E$21,3,0)," ",VLOOKUP(D7,'Liste des clients'!$B$6:$E$21,4,0)) | =CONCATENATE(VLOOKUP(D8,'Liste des clients'!$B$6:$E$21,3,0)," ",VLOOKUP(D8,'Liste des clients'!$B$6:$E$21,4,0)) | =CONCATENATE(VLOOKUP(D9,'Liste des clients'!$B$6:$E$21,3,0)," ",VLOOKUP(D9,'Liste des clients'!$B$6:$E$21,4,0)) | =CONCATENATE(VLOOKUP(D10,'Liste des clients'!$B$6:$E$21,3,0)," ",VLOOKUP(D10,'Liste des clients'!$B$6:$E$21,4,0)) | =CONCATENATE(VLOOKUP(D11,'Liste des clients'!$B$6:$E$21,3,0)," ",VLOOKUP(D11,'Liste des clients'!$B$6:$E$21,4,0)) | =CONCATENATE(VLOOKUP(D12,'Liste des clients'!$B$6:$E$21,3,0)," ",VLOOKUP(D12,'Liste des clients'!$B$6:$E$21,4,0)) | =CONCATENATE(VLOOKUP(D13,'Liste des clients'!$B$6:$E$21,3,0)," ",VLOOKUP(D13,'Liste des clients'!$B$6:$E$21,4,0))
G (35 cellules) : =IFERROR(VLOOKUP('Liste des produits vendus '!F6,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F6,Ouvrage,4,FALSE),1),"") | =IFERROR(VLOOKUP('Liste des produits vendus '!F7,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F7,Ouvrage,4,FALSE),1),"") | =IFERROR(VLOOKUP('Liste des produits vendus '!F8,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F8,Ouvrage,4,FALSE),1),"") | =IFERROR(VLOOKUP('Liste des produits vendus '!F9,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F9,Ouvrage,4,FALSE),1),"") | =IFERROR(VLOOKUP('Liste des produits vendus '!F10,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F10,Ouvrage,4,FALSE),1),"") | =IFERROR(VLOOKUP('Liste des produits vendus '!F11,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F11,Ouvrage,4,FALSE),1),"") | =IFERROR(VLOOKUP('Liste des produits vendus '!F12,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F12,Ouvrage,4,FALSE),1),"") | =IFERROR(VLOOKUP('Liste des produits vendus '!F13,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F13,Ouvrage,4,FALSE),1),"")
H (36 cellules) : =IFERROR(VLOOKUP(F6,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F7,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F8,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F9,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F10,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F11,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F12,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F13,Ouvrage,7,FALSE),"")
I (36 cellules) : =IF(OR(B6=B7,H6=""),"",SUMIFS(Montant,Commande,B6)) | =IF(OR(B7=B8,H7=""),"",SUMIFS(Montant,Commande,B7)) | =IF(OR(B8=B9,H8=""),"",SUMIFS(Montant,Commande,B8)) | =IF(OR(B9=B10,H9=""),"",SUMIFS(Montant,Commande,B9)) | =IF(OR(B10=B11,H10=""),"",SUMIFS(Montant,Commande,B10)) | =IF(OR(B11=B12,H11=""),"",SUMIFS(Montant,Commande,B11)) | =IF(OR(B12=B13,H12=""),"",SUMIFS(Montant,Commande,B12)) | =IF(OR(B13=B14,H13=""),"",SUMIFS(Montant,Commande,B13))
```

### Total des ventes par clients

Valeurs enregistrées :

| Étiquettes de lignes | Somme de Montant TTC | Colonne 3 | Étiquettes de lignes | Somme de Somme de Montant TTC | Colonne 6 |
| --- | --- | --- | --- | --- | --- |
| BEUKELAERE Odette | 31 |  | BEUKELAERE Odette | 31 |  |
| BINOCHE Julien | 39 |  | BINOCHE Julien | 39 |  |
| CAINE Mickaël | 16.5 |  | CAINE Mickaël | 16.5 |  |
| CURT Arthur | 24.5 |  | CURT Arthur | 24.5 |  |
| DESVENTS Sophie | 34.5 |  | DESVENTS Sophie | 34.5 |  |
| DUBOIS Jean | 32.5 |  | DUBOIS Jean | 32.5 |  |
| HOLMES Sherlock | 57.5 |  | HOLMES Sherlock | 57.5 |  |
| IRVING Amy | 63.5 |  | IRVING Amy | 63.5 |  |
| IZGOUD Bernadette | 79 |  | IZGOUD Bernadette | 79 |  |
| LAPORTE Maxime | 33.5 |  | LAPORTE Maxime | 33.5 |  |
| LEVASSEUR Marthe | 19 |  | LEVASSEUR Marthe | 19 |  |
| PORTE Juliette | 26 |  | PORTE Juliette | 26 |  |
| PREFFER Jeanne | 19.5 |  | PREFFER Jeanne | 19.5 |  |
| REGION Otalie | 42 |  | REGION Otalie | 42 |  |
| WALKEN Eva | 55 |  | WALKEN Eva | 55 |  |
| Total général | 573 |  | Total général | 573 |  |

Aucune formule dans cette feuille.

### Tableau croisé et graphique

Champs lus dans le cache du tableau croisé : 

Graphique : non reproduit. Type lu dans le classeur : barChart.
