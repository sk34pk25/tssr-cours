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

#### produits vendus »

#### ❑ « Nom et Prénom » en ligne

❑ « Montant TTC » en valeurs sur lesquelles est effectuée une somme.

#### ✓ Feuille « Total des ventes par clients »

❑ Créer un graphique à partir du tableau créé précédemment.

#### ❑ Graphique croisé dynamique histogramme groupé 3D

#### ✓ Feuille « Liste des clients »

❑ Créer la formule pour le montant des achats de chaque client dans la colonne « Total Achats ».

#### ❑ Les « Total Achats » sont récupérés à partir :

❑ Des valeurs calculées dans le tableau croisé dynamique. ❑ Des colonnes « Nom » et « Prénom » du tableau « Clients » de la feuille « Liste

#### des clients »

❑ En cas d’erreur retournée par la formule, la cellule ne devra rien contenir.

#### ❑ Fonction utilisée

#### ❑ recherchev()

#### ❑ sierreur()

Une fois le travail terminé : [consulter les corrections](corrections.md).
