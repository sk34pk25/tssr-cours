# Module 03 — Connaissances des notions de base d’Excel

**Séquence :** Microsoft 365 — Outils collaboratifs  
**Rôle dans le parcours :** organiser des données dans un classeur, construire des formules contrôlables et produire une synthèse exploitable.

## Objectifs

À l’issue du module, vous devez pouvoir :

- créer, ouvrir et structurer un classeur Excel ;
- identifier une cellule et utiliser ses références ou un nom défini ;
- saisir des calculs simples en respectant l’ordre de calcul ;
- mobiliser les fonctions de texte, de recherche et de logique rencontrées dans le TP ;
- exploiter un tableau croisé dynamique et son graphique pour synthétiser des ventes.

## 1. Le classeur et les cellules

Le support présente un classeur comme un ensemble de feuilles. Il peut être créé vide, depuis un modèle ou ouvert depuis les classeurs récents, l’ordinateur ou le réseau. Une cellule est identifiée par les lettres de sa colonne et le numéro de sa ligne, par exemple `A1`.

Une référence peut aussi recevoir un nom via le gestionnaire de noms. Dans le TP, les tableaux nommés `Clients`, `Ouvrage`, `Commande`, `Montant` et `produits` rendent les formules plus lisibles et permettent de relier les feuilles.

!!! tip "Contrôle de la cible"
    Avant d’écrire une formule, identifiez la feuille, la cellule de résultat et les données sources. Une formule juste dans la mauvaise colonne produit un résultat inutilisable.

## 2. Calculer sans perdre la logique

Excel utilise les opérateurs `+`, `-`, `*` et `/`. Le support rappelle l’ordre de calcul : pourcentage, exposant, multiplication et division, puis soustraction et addition. Les parenthèses permettent de rendre une priorité explicite.

Les références et les fonctions doivent être vérifiées sur une ligne avant d’être recopiées. La poignée de recopie permet de recopier contenu, formule et mise en forme ; selon les valeurs, elle peut aussi incrémenter une série. Le TP demande de vérifier les résultats avant d’étirer les formules sur toutes les lignes.

## 3. Fonctions à savoir choisir

Le support classe les fonctions par familles. Les activités M03 mobilisent particulièrement :

| Besoin | Fonctions citées dans les sources |
|---|---|
| Construire un code texte | `MAJUSCULE`, `GAUCHE`, `DROITE`, `CONCAT` ou `&` |
| Reconstituer une date ou tester un cas | `ANNEE`, `MOIS`, `JOUR`, `SI`, `OU` |
| Rechercher une information | `RECHERCHEV` |
| Éviter l’affichage d’une erreur | `SIERREUR` |
| Additionner ou compter selon des critères | `SOMME.SI.ENS`, `NB.SI.ENS` |
| Calculer une proportion | `SOMME` et une division |

Les fonctions `ARRONDI`, `ENT`, `PRODUIT`, `QUOTIENT` et `MOD` sont aussi présentées dans le support pour les calculs mathématiques. L’enjeu n’est pas de mémoriser une formule isolée, mais d’identifier les données d’entrée, le résultat attendu et la condition qui doit empêcher une valeur incorrecte.

!!! warning "Cas vide et résultat d’erreur"
    Dans le TP, un numéro de commande ne doit pas s’afficher si les cellules indispensables sont vides. De même, la recherche d’un montant ou d’un total doit traiter un échec de recherche sans laisser une erreur non contrôlée dans le tableau. Utilisez une condition ou `SIERREUR` lorsque la source le prévoit.

## 4. Méthode du TP : relier les feuilles

Le TP part de listes de clients, d’ouvrages et de produits vendus. Il demande d’abord de créer des identifiants : code client, code ouvrage et numéro de commande. Les formules utilisent des extraits de texte, des dates et des concaténations.

Les résultats sont ensuite reliés par recherche : le code produit permet de récupérer un titre, un tome ou un montant ; le code client permet de récupérer un nom et un prénom. Les tableaux nommés servent de références de recherche. Une formule doit donc être lue comme une méthode : quelle clé est recherchée, dans quel tableau, pour quel résultat ?

## 5. Synthétiser et vérifier

Le support et l’énoncé demandent un tableau croisé dynamique des ventes par client, puis un graphique croisé dynamique en histogramme groupé 3D. Le tableau de synthèse sert ensuite à reporter le total d’achats sur la liste des clients.

Avant de finaliser, contrôlez :

1. les références, noms de tableaux et plages utilisés ;
2. une ligne de chaque formule avant la recopie ;
3. le traitement des cellules vides et des erreurs ;
4. la cohérence entre le tableau de détail, le tableau croisé dynamique et le total reporté ;
5. le résultat visuel avec le document fini fourni pour le TP.

## Mise en pratique et consolidation

- [TP — présentation](../../tp/microsoft-365/module-03/index.md)
- [TP — énoncé](../../tp/microsoft-365/module-03/enonces.md)
- [TP — correction](../../tp/microsoft-365/module-03/corrections.md)
- [Fiche de révision](../../revision/microsoft-365/module-03-connaissances-des-notions-de-base-d-excel.md)
- [Kahoot du module](../../kahoot/03-microsoft-365-outils-collaboratifs-03-connaissances-des-notions-de-base-d-excel.md)
- [Présentation de la séquence](index.md)

## Source et provenance

- **Sources A — TSSR live :** `Module 03 - Support de cours.pdf`, Drive `1iMM4_v_Oj8W9fCRz_eZZfRFRLbyfCWKk`, SHA-256 `454b907751a8980aa3560a8af585e67e572aff0ba80dc51587332bb9c7873f22` ; `M3 - Enoncé du TP - Utilisation d'Excel.pdf`, Drive `1LBnGQASfwJWAa-v07lZ8Hig74kYlcqCq`, SHA-256 `632e56cdcd27bb7885adb0ef9b0ae09a514512f8718f9d944b39ce1d217bd4f3` ; `M3 - Solution du TP - Utilisation d'Excel.pdf`, Drive `1p8MSdBOHgRnxz8hqdreos-Lzm6ZZSilu`, SHA-256 `ac619d926498a7c21967526161e23ec8bc19a963e1397a174a53cb5bb7d372cb`.
- **Ressources A du TP :** `Clients - Document Brut.xlsx`, Drive `1kUV2BU4r5DII42OHnfBNTXtDtQ1ncUd8`, SHA-256 `0b099405b78b9582a54dc1c12e8ad5a370c14ddc6fc3d31378e793149d8bb881` ; `Clients - Document Fini.xlsx`, Drive `1vMr21WSPgRNkTZNto1S6-D5BSzRqrmWA`, SHA-256 `8991e74764c65ab349bae4517c9bed89785ebb370cc517b4ef7d77dabd9987ae` ; `Clients - Document Fini.pdf`, Drive `12QGYWriIVavMocVlQ6I_tEbRz288mcjC`, SHA-256 `9a86ba62d2ce7f29f81a036649af26542b912d4ec2425f0c1e4c5a42b1a22c55`.
- **Structuration B :** les explications, tableaux, contrôles et exemples pédagogiques organisent les notions explicitement présentes dans ces sources, sans apport externe.
