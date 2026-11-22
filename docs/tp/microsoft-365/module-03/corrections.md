# Corrections — Module 03 — Connaissances des notions de base d’Excel

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## M3 - Solution du TP - Utilisation d_Excel

### Microsoft 365 - Outils

#### Utilisation d’Excel

#### TP du Module 3 - Notions de base sur Excel

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module ..

#### Durée estimée

#### 60 à 90 minutes

#### Code clients

- L’ensemble du code client devant être en majuscules, on utilisera en premier lieu la

fonction MAJUSCULE().

- Il faut ensuite isoler les colonnes qui contiennent les informations à concaténer :
- La fonction GAUCHE() permet d’isoler les premiers caractères d’une cellul e en en

spécifiant le nombre après un « ; ». On peut maintenant commencer à dessiner le

#### squelette de notre formule :

#### =MAJUSCULE(GAUCHE(D6;3)&GAUCHE(E6;3)&GAUCHE(H6;3)&GAUCHE(I6;3))

- Il ne reste qu’à étirer la formule sur les cases en dessous.

#### Code ouvrage

- Même méthode que pour l’exercice précédent. L’ensemble des données doivent être

en majuscules en récupérant les 3 ou 4 premiers caractères. Dans le cas de la colonne Tome, il ne faudra récupérer que le dernier caractère.

#### =MAJUSCULE(GAUCHE(F7;3)&GAUCHE(G7;3)&GAUCHE(C7;4)&DROITE(E7;1))

- Il ne reste qu’à étirer la formule sur les cases en dessous.

#### Numéros de commande

On peut utiliser les fonctions ANNEE, MOIS et JOUR afin de pouvoir les reconstituer en date inversée.

#### On peut utiliser la formule simple :

#### =DROITE(ANNEE(C6);2)&MOIS(C6)&JOUR(C6)&D6

On s’aperçoit que le résultat n’est pas satisfaisant : les mois et jours inférieurs à 10 ne remontent qu’un seul chiffre. Il faudra donc utiliser des conditions pour tester la valeur et éventuellement ajouter un 0 pour les chiffres inférieurs ou égaux à 9. =DROITE(ANNEE(C6);2)&SI(MOIS(C6)&gt;9;MOIS(C6);"0"&MOIS(C6))&SI(JOUR(C6)&gt;9;JOUR(C6);"0"&JOUR(C6))&D6

- En cas de ca se vide, une erreur se produira. Il est possible de « fermer » la formule en

#### ajoutant un test de case vide :

=SI(OU(C8="";D8="");"";DROITE(ANNEE(C8);2)&SI(MOIS(C8)&gt;9;MOIS(C8);"0"&MOIS(C8))&SI(J

#### OUR(C8)&gt;9;JOUR(C8);"0"&JOUR(C8))&D8)

- Il ne reste qu’à étirer la formule sur les cases en dessous.

#### Noms et prénoms

- Sur la feuille Liste des clients, il faut identifier le tableau Clients en cliquant sur le menu

#### suivant :

- Nous pouvons maintenant faire référence à ce tableau dans la fonction recherchev()
- D6 symbolise la valeur de la recher che (code client), à comparer avec notre tableau

Clients en récupérant la 3ème colonne du tableau (nom) puis la 4ème (prénom).

- Il faudra ajouter un espace symbolisé par &" "& qui permettent de concaténer les

champs nom et prénom avec un espace entre eux.

#### =RECHERCHEV(D6;Clients;3;FAUX)&" "&RECHERCHEV(D6;Clients;4;FAUX)

#### Titre et Tome

- Même procédé que pour la question précédente :
- Dans la feuille Lis te des produits vendu s, on va rechercher dans la colonne F6 , à

comparer avec la 2e colonne du tableau Ouvrage, ajouter un espace, et englober dans la fonction DROITE(), qui ne récupérera que le dernier caractère, une recherche toujours basée sur le code produit mais cette fois sur la 4ème colonne du tableau Ouvrage.

#### =RECHERCHEV('Liste des produits vendus '!F6;Ouvrage;2;FAUX)&"

#### "&DROITE(RECHERCHEV('Liste des produits vendus '!F6;Ouvrage;4;FAUX);1)

#### Montant TTC

- Il faut effectuer une recherchev() basée sur le code produit au sein de la 7 ème colonne

du tableau Ouvrage.

#### =RECHERCHEV(F6;Ouvrage;7;FAUX)

On peut ajouter un SIERREUR() avec comme valeur "" afin d’éviter des erreurs de fonction.

#### =SIERREUR(RECHERCHEV(F6;Ouvrage;7;FAUX);"")

#### Total de la commande

- Il faut dans un premier temps vér ifier que la cellule supérieure est identique, ou si la

cellule montante est vide.

- Si ce test est validé, le contenu de la cellule Montant de la commande devrait être vide.
- On va ensuite additionner les montants en fonction du nombre d’occurrences trouvées

#### du numéro de commande grâce à la fonction SOMME.SI.ENS

#### =SI(OU(B7=B8;H7="");"";SOMME.SI.ENS(Montant;Commande;B7))

#### Nombre d’articles vendus

- En faisant référence à la feuille Liste de produits vendus, il faut compter le nombre

d’occurrences dans le tableau des différentes références produit.

- La fonction NB.SI.ENS permet d’effectuer ces actions et de les reporter en les comparant

au code produit de la colonne B.

#### =NB.SI.ENS(produits;B7)

#### Pourcentage des ventes

- Il suffit de diviser le nombre de ventes de chaque ouvrage par le total des ventes :

#### =I7/SOMME($I$7:$I$33)

#### Achats par client

- Sur la feuille Total des ventes par clients, créer un tableau croisé dynamique :

#### Indiquez Vendus

#### Cliquez sur Nombre de Montant puis modifiez les paramètres des champs

#### Graphique dynamique croisé

- Cliquez sur votre tableau croisé dynamique et allez dans Insertion - Graphique croisé

dynamique.

- Sélectionnez l’histogramme groupé 3D.

#### Total achats par client

- En basant la recherche sur la concaténation des Noms et prénoms de la feuille Liste des

Clients, il faut comparer cela aux résultats de notre tableau croisé dynamique pour reporter les valeurs dans la colonne J de la liste des clients. =SIERREUR((RECHERCHEV(D6&" "&E6;'Total des ventes par clients'!$B$3:$C$19;2;FAUX));"")

## Clients — Document Fini

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
|  | HOUSÉBMARFRA | Monsieur | HOUDAN | Sébastien | 125, avenue Marceau | 13210 | MARSEILLE | FRANCE |  |
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
B (16 cellules) : =UPPER(LEFT(D6,3)&LEFT(E6,3)&LEFT(H6,3)&LEFT(I6,3)) | =UPPER(LEFT(D7,3)&LEFT(E7,3)&LEFT(H7,3)&LEFT(I7,3)) | =UPPER(LEFT(D8,3)&LEFT(E8,3)&LEFT(H8,3)&LEFT(I8,3)) | =UPPER(LEFT(D9,3)&LEFT(E9,3)&LEFT(H9,3)&LEFT(I9,3)) | =UPPER(LEFT(D10,3)&LEFT(E10,3)&LEFT(H10,3)&LEFT(I10,3)) | =UPPER(LEFT(D11,3)&LEFT(E11,3)&LEFT(H11,3)&LEFT(I11,3)) | =UPPER(LEFT(D12,3)&LEFT(E12,3)&LEFT(H12,3)&LEFT(I12,3)) | =UPPER(LEFT(D13,3)&LEFT(E13,3)&LEFT(H13,3)&LEFT(I13,3))
J (17 cellules) : =IFERROR((VLOOKUP(D6&" "&E6,'Total des ventes par clients'!$B$3:$C$19,2,FALSE)),"") | =IFERROR((VLOOKUP(D7&" "&E7,'Total des ventes par clients'!$B$3:$C$19,2,FALSE)),"") | =IFERROR((VLOOKUP(D8&" "&E8,'Total des ventes par clients'!$B$3:$C$19,2,FALSE)),"") | =IFERROR((VLOOKUP(D9&" "&E9,'Total des ventes par clients'!$B$3:$C$19,2,FALSE)),"") | =IFERROR((VLOOKUP(D10&" "&E10,'Total des ventes par clients'!$B$3:$C$19,2,FALSE)),"") | =IFERROR((VLOOKUP(D11&" "&E11,'Total des ventes par clients'!$B$3:$C$19,2,FALSE)),"") | =IFERROR((VLOOKUP(D12&" "&E12,'Total des ventes par clients'!$B$3:$C$19,2,FALSE)),"") | =IFERROR((VLOOKUP(D13&" "&E13,'Total des ventes par clients'!$B$3:$C$19,2,FALSE)),"")
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
B (27 cellules) : =UPPER(LEFT(F7,3)&LEFT(G7,3)&LEFT(C7,4)&RIGHT(E7,1)) | =UPPER(LEFT(F8,3)&LEFT(G8,3)&LEFT(C8,4)&RIGHT(E8,1)) | =UPPER(LEFT(F9,3)&LEFT(G9,3)&LEFT(C9,4)&RIGHT(E9,1)) | =UPPER(LEFT(F10,3)&LEFT(G10,3)&LEFT(C10,4)&RIGHT(E10,1)) | =UPPER(LEFT(F11,3)&LEFT(G11,3)&LEFT(C11,4)&RIGHT(E11,1)) | =UPPER(LEFT(F12,3)&LEFT(G12,3)&LEFT(C12,4)&RIGHT(E12,1)) | =UPPER(LEFT(F13,3)&LEFT(G13,3)&LEFT(C13,4)&RIGHT(E13,1)) | =UPPER(LEFT(F14,3)&LEFT(G14,3)&LEFT(C14,4)&RIGHT(E14,1))
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
|  | 210107CAIMICRENFRA | 2021-01-07 00:00:00 | CAIMICRENFRA | CAINE Mickaël | ALDJUSMISÉ | Miséricorde  | 16.5 | 16.5 |  |  |  |  |  |  |
|  | 210107DESSOPRENFRA | 2021-01-07 00:00:00 | DESSOPRENFRA | DESVENTS Sophie | ALDJUSPROF | Profanation  | 17 |  |  |  |  |  |  |  |
|  | 210107DESSOPRENFRA | 2021-01-07 00:00:00 | DESSOPRENFRA | DESVENTS Sophie | ALDJUSDÉLI | Délivrance  | 17.5 | 34.5 |  |  |  |  |  |  |
|  | 210115IZGBERLONGRA | 2021-01-15 00:00:00 | IZGBERLONGRA | IZGOUD Bernadette | MARGEOGAME1 | Games of Throne 1 | 19 |  |  |  |  |  |  |  |
|  | 210115IZGBERLONGRA | 2021-01-15 00:00:00 | IZGBERLONGRA | IZGOUD Bernadette | MARGEOGAME2 | Games of Throne 2 | 19.5 | 38.5 |  |  |  |  |  |  |
|  | 210120WALEVANANFRA | 2021-01-20 00:00:00 | WALEVANANFRA | WALKEN Eva | GIEKERROUG1 | Rouge Rubis 1 | 13.5 |  |  |  |  |  |  |  |
|  | 210120WALEVANANFRA | 2021-01-20 00:00:00 | WALEVANANFRA | WALKEN Eva | GIEKERBLEU2 | Bleu Saphir  2 | 13 |  |  |  |  |  |  |  |
|  | 210120WALEVANANFRA | 2021-01-20 00:00:00 | WALEVANANFRA | WALKEN Eva | GIEKERVERT3 | Vert Emeraude  3 | 13 | 39.5 |  |  |  |  |  |  |
|  | 210122LAPMAXNANFRA | 2021-01-22 00:00:00 | LAPMAXNANFRA | LAPORTE Maxime | ALDJUSMISÉ | Miséricorde  | 16.5 |  |  |  |  |  |  |  |
|  | 210122LAPMAXNANFRA | 2021-01-22 00:00:00 | LAPMAXNANFRA | LAPORTE Maxime | ALDJUSPROF | Profanation  | 17 | 33.5 |  |  |  |  |  |  |
|  | 210125LEVMARANGFRA | 2021-01-25 00:00:00 | LEVMARANGFRA | LEVASSEUR Marthe | MARGEOGAME1 | Games of Throne 1 | 19 | 19 |  |  |  |  |  |  |
|  | 210125BINJULNICFRA | 2021-01-25 00:00:00 | BINJULNICFRA | BINOCHE Julien | MARGEOGAME2 | Games of Throne 2 | 19.5 |  |  |  |  |  |  |  |
|  | 210125BINJULNICFRA | 2021-01-25 00:00:00 | BINJULNICFRA | BINOCHE Julien | MARGEOGAME3 | Games of Throne 3 | 19.5 | 39 |  |  |  |  |  |  |
|  | 210130CURARTLYOFRA | 2021-01-30 00:00:00 | CURARTLYOFRA | CURT Arthur | PAOCHRERAG1 | Eragon 1 | 12 |  |  |  |  |  |  |  |
|  | 210130CURARTLYOFRA | 2021-01-30 00:00:00 | CURARTLYOFRA | CURT Arthur | PAOCHRERAG2 | Eragon 2 | 12.5 | 24.5 |  |  |  |  |  |  |
|  | 210201IRVAMYNANFRA | 2021-02-01 00:00:00 | IRVAMYNANFRA | IRVING Amy | COLSUZHUNG1 | Hunger Games 1 | 17 |  |  |  |  |  |  |  |
|  | 210201IRVAMYNANFRA | 2021-02-01 00:00:00 | IRVAMYNANFRA | IRVING Amy | COLSUZHUNG2 | Hunger Games 2 | 17 | 34 |  |  |  |  |  |  |
|  | 210206DUBJEANANFRA | 2021-02-06 00:00:00 | DUBJEANANFRA | DUBOIS Jean | COLSUZHUNG1 | Hunger Games 1 | 17 |  |  |  |  |  |  |  |
|  | 210206DUBJEANANFRA | 2021-02-06 00:00:00 | DUBJEANANFRA | DUBOIS Jean | DASJAMLABY1 | Labyrinthe 1 | 15.5 | 32.5 |  |  |  |  |  |  |
|  | 210206WALEVANANFRA | 2021-02-06 00:00:00 | WALEVANANFRA | WALKEN Eva | DASJAMLABY1 | Labyrinthe 1 | 15.5 | 15.5 |  |  |  |  |  |  |
|  | 210206BEUODEBRUBEL | 2021-02-06 00:00:00 | BEUODEBRUBEL | BEUKELAERE Odette | MARGEOGAME1 | Games of Throne 1 | 19 |  |  |  |  |  |  |  |
|  | 210206BEUODEBRUBEL | 2021-02-06 00:00:00 | BEUODEBRUBEL | BEUKELAERE Odette | PAOCHRERAG1 | Eragon 1 | 12 | 31 |  |  |  |  |  |  |
|  | 210208HOLSHENANFRA | 2021-02-08 00:00:00 | HOLSHENANFRA | HOLMES Sherlock | DASJAMLABY1 | Labyrinthe 1 | 15.5 |  |  |  |  |  |  |  |
|  | 210208HOLSHENANFRA | 2021-02-08 00:00:00 | HOLSHENANFRA | HOLMES Sherlock | GIEKERBLEU2 | Bleu Saphir  2 | 13 |  |  |  |  |  |  |  |
|  | 210208HOLSHENANFRA | 2021-02-08 00:00:00 | HOLSHENANFRA | HOLMES Sherlock | ROTVERDIVE1 | Divergente 1 | 14.5 | 43 |  |  |  |  |  |  |
|  | 210210HOLSHENANFRA | 2021-02-10 00:00:00 | HOLSHENANFRA | HOLMES Sherlock | ROTVERDIVE1 | Divergente 1 | 14.5 | 14.5 |  |  |  |  |  |  |
|  | 210210IRVAMYNANFRA | 2021-02-10 00:00:00 | IRVAMYNANFRA | IRVING Amy | ROTVERDIVE2 | Divergente 2 | 14.5 |  |  |  |  |  |  |  |
|  | 210210IRVAMYNANFRA | 2021-02-10 00:00:00 | IRVAMYNANFRA | IRVING Amy | ROTVERDIVE3 | Divergente 3 | 15 | 29.5 |  |  |  |  |  |  |
|  | 210215IZGBERLONGRA | 2021-02-15 00:00:00 | IZGBERLONGRA | IZGOUD Bernadette | MARGEOGAME3 | Games of Throne 3 | 19.5 |  |  |  |  |  |  |  |
|  | 210215IZGBERLONGRA | 2021-02-15 00:00:00 | IZGBERLONGRA | IZGOUD Bernadette | MARGEOGAME4 | Games of Throne 4 | 21 | 40.5 |  |  |  |  |  |  |
|  | 210215PREJEARENFRA | 2021-02-15 00:00:00 | PREJEARENFRA | PREFFER Jeanne | MARGEOGAME3 | Games of Throne 3 | 19.5 | 19.5 |  |  |  |  |  |  |
|  | 210215REGOTAGENSUI | 2021-02-15 00:00:00 | REGOTAGENSUI | REGION Otalie | MARGEOGAME4 | Games of Throne 4 | 21 |  |  |  |  |  |  |  |
|  | 210215REGOTAGENSUI | 2021-02-15 00:00:00 | REGOTAGENSUI | REGION Otalie | MARGEOGAME5 | Games of Throne 5 | 21 | 42 |  |  |  |  |  |  |
|  | 210220PORJULNANFRA | 2021-02-20 00:00:00 | PORJULNANFRA | PORTE Juliette | GIEKERBLEU2 | Bleu Saphir  2 | 13 |  |  |  |  |  |  |  |
|  | 210220PORJULNANFRA | 2021-02-20 00:00:00 | PORJULNANFRA | PORTE Juliette | GIEKERVERT3 | Vert Emeraude  3 | 13 | 26 |  |  |  |  |  |  |
|  |  |  |  |  |  |  | 573 | 573 |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Colonne nommée |  |  |  | Colonne nommée |  | Colonne nommée |  |  |  |  |  |  |  |
|  | Commande |  |  |  | Produits |  | Montant |  |  |  |  |  |  |  |

Formules par colonne :

```
B (35 cellules) : =IF(OR(C6="",D6=""),"",RIGHT(YEAR(C6),2)&IF(MONTH(C6)>9,MONTH(C6),"0"&MONTH(C6))&IF(DAY(C6)>9,DAY(C6),"0"&DAY(C6))&D6) | =IF(OR(C7="",D7=""),"",RIGHT(YEAR(C7),2)&IF(MONTH(C7)>9,MONTH(C7),"0"&MONTH(C7))&IF(DAY(C7)>9,DAY(C7),"0"&DAY(C7))&D7) | =IF(OR(C8="",D8=""),"",RIGHT(YEAR(C8),2)&IF(MONTH(C8)>9,MONTH(C8),"0"&MONTH(C8))&IF(DAY(C8)>9,DAY(C8),"0"&DAY(C8))&D8) | =IF(OR(C9="",D9=""),"",RIGHT(YEAR(C9),2)&IF(MONTH(C9)>9,MONTH(C9),"0"&MONTH(C9))&IF(DAY(C9)>9,DAY(C9),"0"&DAY(C9))&D9) | =IF(OR(C10="",D10=""),"",RIGHT(YEAR(C10),2)&IF(MONTH(C10)>9,MONTH(C10),"0"&MONTH(C10))&IF(DAY(C10)>9,DAY(C10),"0"&DAY(C10))&D10) | =IF(OR(C11="",D11=""),"",RIGHT(YEAR(C11),2)&IF(MONTH(C11)>9,MONTH(C11),"0"&MONTH(C11))&IF(DAY(C11)>9,DAY(C11),"0"&DAY(C11))&D11) | =IF(OR(C12="",D12=""),"",RIGHT(YEAR(C12),2)&IF(MONTH(C12)>9,MONTH(C12),"0"&MONTH(C12))&IF(DAY(C12)>9,DAY(C12),"0"&DAY(C12))&D12) | =IF(OR(C13="",D13=""),"",RIGHT(YEAR(C13),2)&IF(MONTH(C13)>9,MONTH(C13),"0"&MONTH(C13))&IF(DAY(C13)>9,DAY(C13),"0"&DAY(C13))&D13)
E (35 cellules) : =VLOOKUP(D6,Clients,3,FALSE)&" "&VLOOKUP(D6,Clients,4,FALSE) | =VLOOKUP(D7,Clients,3,FALSE)&" "&VLOOKUP(D7,Clients,4,FALSE) | =VLOOKUP(D8,Clients,3,FALSE)&" "&VLOOKUP(D8,Clients,4,FALSE) | =VLOOKUP(D9,Clients,3,FALSE)&" "&VLOOKUP(D9,Clients,4,FALSE) | =VLOOKUP(D10,Clients,3,FALSE)&" "&VLOOKUP(D10,Clients,4,FALSE) | =VLOOKUP(D11,Clients,3,FALSE)&" "&VLOOKUP(D11,Clients,4,FALSE) | =VLOOKUP(D12,Clients,3,FALSE)&" "&VLOOKUP(D12,Clients,4,FALSE) | =VLOOKUP(D13,Clients,3,FALSE)&" "&VLOOKUP(D13,Clients,4,FALSE)
G (35 cellules) : =VLOOKUP('Liste des produits vendus '!F6,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F6,Ouvrage,4,FALSE),1) | =VLOOKUP('Liste des produits vendus '!F7,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F7,Ouvrage,4,FALSE),1) | =VLOOKUP('Liste des produits vendus '!F8,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F8,Ouvrage,4,FALSE),1) | =VLOOKUP('Liste des produits vendus '!F9,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F9,Ouvrage,4,FALSE),1) | =VLOOKUP('Liste des produits vendus '!F10,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F10,Ouvrage,4,FALSE),1) | =VLOOKUP('Liste des produits vendus '!F11,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F11,Ouvrage,4,FALSE),1) | =VLOOKUP('Liste des produits vendus '!F12,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F12,Ouvrage,4,FALSE),1) | =VLOOKUP('Liste des produits vendus '!F13,Ouvrage,2,FALSE)&" "&RIGHT(VLOOKUP('Liste des produits vendus '!F13,Ouvrage,4,FALSE),1)
H (36 cellules) : =IFERROR(VLOOKUP(F6,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F7,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F8,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F9,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F10,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F11,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F12,Ouvrage,7,FALSE),"") | =IFERROR(VLOOKUP(F13,Ouvrage,7,FALSE),"")
I (36 cellules) : =IF(OR(B6=B7,H6=""),"",SUMIFS(Montant,Commande,B6)) | =IF(OR(B7=B8,H7=""),"",SUMIFS(Montant,Commande,B7)) | =IF(OR(B8=B9,H8=""),"",SUMIFS(Montant,Commande,B8)) | =IF(OR(B9=B10,H9=""),"",SUMIFS(Montant,Commande,B9)) | =IF(OR(B10=B11,H10=""),"",SUMIFS(Montant,Commande,B10)) | =IF(OR(B11=B12,H11=""),"",SUMIFS(Montant,Commande,B11)) | =IF(OR(B12=B13,H12=""),"",SUMIFS(Montant,Commande,B12)) | =IF(OR(B13=B14,H13=""),"",SUMIFS(Montant,Commande,B13))
```

### Total des ventes par clients

Valeurs enregistrées :

| Colonne 1 | Colonne 2 | Colonne 3 | Colonne 4 | Colonne 5 | Colonne 6 | Colonne 7 | Colonne 8 | Colonne 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Somme de Montant TTC |  |  |  |  |  |  |
|  | BEUKELAERE Odette | 31 |  |  |  |  |  |  |
|  | BINOCHE Julien | 39 |  |  |  |  |  |  |
|  | CURT Arthur | 24.5 |  |  |  |  |  |  |
|  | DESVENTS Sophie | 34.5 |  |  |  |  |  |  |
|  | DUBOIS Jean | 32.5 |  |  |  |  |  |  |
|  | HOLMES Sherlock | 57.5 |  |  |  |  |  |  |
|  | IRVING Amy | 63.5 |  |  |  |  |  |  |
|  | IZGOUD Bernadette | 79 |  |  |  |  |  |  |
|  | LAPORTE Maxime | 33.5 |  |  |  |  |  |  |
|  | PORTE Juliette | 26 |  |  |  |  |  |  |
|  | PREFFER Jeanne | 19.5 |  |  |  |  |  |  |
|  | REGION Otalie | 42 |  |  |  |  |  |  |
|  | WALKEN Eva | 55 |  |  |  |  |  |  |
|  | CAINE Mickaël | 16.5 |  |  |  |  |  |  |
|  | LEVASSEUR Marthe | 19 |  |  |  |  |  |  |
|  | Total général | 573 |  |  |  |  |  |  |

Aucune formule dans cette feuille.

### Tableau croisé et graphique

Champs lus dans le cache du tableau croisé : Tableau croisé dynamique5, Somme de Montant TTC, PivotStyleLight16

Graphique : non reproduit. Type lu dans le classeur : bar3DChart.
