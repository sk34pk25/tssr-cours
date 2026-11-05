# Module 05 — Les bases de MySQL et MariaDB

Un SGBD stocke, administre et permet d’interroger les données. Un SGBD relationnel organise celles-ci en tables reliées par des clés : MySQL, MariaDB, PostgreSQL, Oracle, SQLServer et DB2 sont les exemples du support. L’application GLPI l’utilise comme un logiciel de comptabilité ou un serveur de messagerie utilise sa propre base.

Le rappel historique du support situe MySQL en1994 avec Michael Widenius, son nom venant de sa fille My et de SQL, puis MariaDB en2009, nommé d’après Maria. Le schéma de la base doit être réfléchi avant de remplir ses tables : le cours l’associe au MCD, modèle conceptuel de données. SQL décrit le résultat recherché ; le SGBD détermine comment le produire.

## Entrer dans le client SQL

```bash
mysql -u root -p
```

```sql
SHOW DATABASES;
CONNECT glpidata;
SHOW TABLES;
DESCRIBE glpi_users;
```

`mysql` est ici le client du SGBD, `-u` choisit le compte et `-p` demande son secret. Ne pas inclure celui-ci dans la ligne. `CONNECT` apparaît dans le support ; `USE glpidata;` exprime aussi le choix de la base. Ne pas recopier le prompt `mysql>` dans une requête.

`DROP DATABASE` supprime une base : l’exemple source sert à comprendre la syntaxe et ne fait pas partie des requêtes d’extraction du TP. `INSERT` ajoute des lignes ; `UPDATE` modifie les lignes existantes, contrairement au regroupement approximatif des deux commandes dans le diaporama. Ces modifications ne sont pas étudiées ici.

## Tables, lignes et colonnes

La table exemple contient quatre clients. Les colonnes sont les attributs ; les lignes sont les enregistrements. L’âge de Yann n’est pas renseigné.

| ID | Prénom | Nom | Ville | Age |
|---:|---|---|---|---:|
| 1 | Fred | Enlefrigau | Stockholm | 45 |
| 2 | François | Belététoi | Pyongyang | 26 |
| 3 | Gilles | Edenotre | Rennes | 32 |
| 4 | Yann | Apourtous | Caen | NULL |

Le support alterne `Edenotre` et `Etdenotre`, ainsi que `client` et `clients`. Les exemples ci-dessous utilisent `clients` pour les sélections simples ; le nom réel de la table doit rester cohérent dans une réalisation.

```sql
SELECT * FROM clients;
SELECT Nom, Ville FROM clients;
SELECT Prénom, Nom FROM clients WHERE Ville = 'Caen';
SELECT Prénom, Nom FROM clients WHERE ID > 3;
```

La projection choisit les colonnes ; `WHERE` choisit les lignes. Les comparateurs sont `=`, `<`, `<=`, `>`, `>=`, `<>` ou`!=`. `<=>` compare aussi les valeursNULL. Écrire les chaînes entre apostrophes droites, les nombres sans guillemets typographiques.

## Combiner, trier et limiter

`AND` exige les deux critères ; `OR` en accepte au moins un ; `XOR` en accepte exactement un ; `NOT` inverse un prédicat. Les parenthèses rendent les regroupements explicites.

```sql
SELECT Prénom, Nom FROM clients
WHERE ID >= 2 AND Ville = 'Caen';

SELECT Prénom, Nom FROM clients
WHERE (ID >= 2 AND Ville = 'Caen')
   OR (ID > 2 AND Ville = 'Rennes');

SELECT Prénom FROM clients ORDER BY Age, Nom;
SELECT Prénom FROM clients ORDER BY Age DESC;
SELECT Prénom FROM clients ORDER BY Age, ID LIMIT 2 OFFSET 1;
```

L’ordre ascendant est utilisé si `ASC` ou`DESC` n’est pas précisé. `OFFSET1` ignore la première ligne ; `LIMIT2` conserve les deux suivantes. Dans les données du cours, le tri ascendant par âge placeYann(NULL), François(26), Gilles(32), puis Fred(45) : la limite retourne François et Gilles. Ajouter une clé de tri départage les égalités.

## Traiter NULL et les agrégats correctement

`NULL` représente une absence de valeur. Le support montre `Age = NULL` comme s’il sélectionnaitYann ; cette comparaison ne teste pas l’absence. Employer `IS NULL` ou`IS NOT NULL`. [Référence MariaDB sur NULL](https://mariadb.com/docs/server/reference/data-types/null-values).

```sql
SELECT Prénom, Nom FROM clients WHERE Age IS NULL;
SELECT Prénom, Nom FROM clients WHERE Age IS NOT NULL;
SELECT COUNT(*) AS nombre_clients, COUNT(Age) AS ages_renseignes FROM clients;
SELECT MIN(Age), MAX(Age), SUM(Age), AVG(Age) FROM clients;
SELECT Prénom AS Firstname FROM clients ORDER BY Age;
```

`COUNT(*)` compte les quatre lignes ; `COUNT(Age)` compte les trois âges renseignés. Les agrégats sur Age ignorentNULL : minimum26, maximum45, somme103 et moyenne103/3, soit environ34,33. Le support affiche34 et décrit par erreurMIN comme le maximum : [MIN renvoie le minimum](https://mariadb.com/docs/server/reference/sql-functions/aggregate-functions/min). L’alias change le libellé de sortie, pas le nom stocké de la colonne.

## Relier les tables

Une clé primaire identifie une ligne de façon unique et ne peut pas êtreNULL. Une clé étrangère relie une colonne à une clé de la table référencée et impose l’intégrité du lien. L’exemple relie `achat.ID_client` à `client.ID` : un achat ne doit pas référencer un client inexistant. Le support présente la référence à une clé primaire ; l’essentiel à retenir ici est l’identifiant stable et la contrainte de relation.

| Achat de l’exemple | ID_client | Prix | Plateforme |
|---|---:|---:|---|
| Overwatch | 4 | 14,99 | XBOX ONE |
| Call of Duty | 2 | 69,99 | PS4 |
| Minecraft | 1 | 23,95 | SWITCH |
| League of Legends | 4 | 0 | PC |
| Mario Kart8DELUXE | 4 | 43,99 | SWITCH |
| CivilizationVI | 3 | 29,99 | PC |

Une jointure interne conserve les correspondances entre les tables. Pour retrouver les jeux de Yann dans l’exemple à table `client` :

```sql
SELECT achat.Nom
FROM achat
INNER JOIN client ON client.ID = achat.ID_client
WHERE client.Prénom = 'Yann';
```

La sortie attendue est Overwatch, LeagueofLegends et MarioKart8DELUXE. La condition `ON` réalise la relation ; `WHERE` restreint au client recherché.

## Extraire des données GLPI

Le TP interroge calendriers, utilisateurs, langue `en_GB`, catégories enfants, commutateurs24 ports non gabarits, nombre deSLM et nom de switch maximal. Les bonus relient catégories et gabarits de demande, puis comptent les catégories par gabarit. Les identifiants de modèle2 et de gabarit3 sont ceux du support : les vérifier dans sa propre base.

Le corrigé contient `glpi_itilcatégories` avec accent, `from_glpinetworkequipments` collé, des apostrophes courbes et un agrégat sans regroupement. La [correction expliquée](../../tp/glpi/module-05/corrections.md) fournit les requêtes lisibles, distinctes de ces erreurs de source.

Le support annonce une sauvegarde de la base dans ses objectifs sans fournir de procédure détaillée. Exemple pédagogique complémentaire, à adapter au compte autorisé et au nom choisi :

```bash
mysqldump -u root -p --single-transaction glpidata > glpidata.sql
test -s glpidata.sql
```

Le fichier doit être contrôlé et une restauration testée dans une autre base de laboratoire. La présence d’un fichier ne prouve pas, à elle seule, la possibilité de restaurer.

### Mini-quiz

1. Comment sélectionner les clients sans âge ?
2. Quelle différence entre `COUNT(*)` et `COUNT(Age)` ?
3. À quoi sert `ON` dans une jointure ?

??? success "Réponses"
    1. `WHERE Age IS NULL`.
    2. L’un compte les lignes ; l’autre compte les valeurs nonNULL de la colonne.
    3. À exprimer la correspondance entre les deux tables.


## Appliquer ce module

- [Énoncé du TP](../../tp/glpi/module-05/enonces.md)
- [Correction expliquée](../../tp/glpi/module-05/corrections.md)
- [Fiche de révision](../../revision/glpi/module-05-les-bases-de-mysql-et-mariadb.md)
