# TP 05 — Énoncé — Les bases de MySQL et MariaDB

## Préparer l’atelier

Le sujet réutilise les calendriers, utilisateurs, catégories, commutateurs et niveaux de service des TP précédents. Se connecter avec le compte autorisé et vérifier le nom de la base avant d’interroger les tables.

Réaliser les consignes avant de consulter la correction. Conserver une preuve pour chaque résultat, puis comparer avec les critères de validation du module.

## Requêtes SQL

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 5 et d’avoir réalisé les TP proposés.

### Objectifs

- Comprendre le fonctionnement des requêtes MySQL.

### Prérequis

- Avoir fini les TP des modules précédents.

### Contexte

Vous gérez GLPI dans le domaine de la société Olympus. Votre DSI vous demande d’extraire des informations directement depuis la base de données du laboratoire.

### Connexion à la base de données en ligne de commande de votre serveur GLPI

- Connectez-vous en ligne de commande à la base de données GLPI avec le compte d’administration configuré lors de `mysql_secure_installation`.

- Affichez toutes les bases de données présentes dans votre serveur MariaDB.

- Connectez-vous à la base de données glpidata puis affichez toutes les tables présentes.

- Affichez tous les attributs de la table des calendriers.

- Affichez les noms et prénoms des utilisateurs de GLPI.

- Affichez le nom des utilisateurs qui ont la langue en anglais (en_GB).

- Affichez le nom et le nom complet des catégories de ticket qui ont une catégorie parente. La formulation d’origine s’arrête à « enfants de » ; la correction explique le filtre.

- Indice : utiliser un comparateur.

- Affichez le nom des switchs réseau qui ne sont pas des gabarits et qui sont liés au modèle GAB-JL356A-ARUBA-2540-24P.

- Indices :

- Utiliser les sélections complexes.

- Is_template à 1 est un gabarit.

- GAB-JL356A-ARUBA-2540-24P est networkequipmentmodels_id à 2.

- Comptez le nombre de SLMs et affichez en en-tête de colonne nb_de_SLMs.

- Indice : utiliser un alias.

- Affichez le nom du switch avec le chiffre le plus haut qui utilise le modèle 24 Ports.

- Indice : utiliser une fonction d’agrégation.

### BONUS

- Affichez le(s) nom(s) de la catégorie de ticket et le nom du gabarit de ticket qui est utilisé pour une demande dans les catégories de ticket.

- Indice : utiliser une jointure interne.

### BONUS

- Comptez-les en affichant le nom du gabarit utilisé et le nombre avec comme en-tête « nombre de catégories qui utilise un gabarit de demande ».


## Vérifier le résultat

Expliquer chaque filtre, comparer le nombre de lignes et vérifier les champs retournés avant de conclure.

## Livrables

| Contrôle | Preuve à relever |
| --- | --- |
| Contexte | Vérifier la base active, les tables et les colonnes avant de sélectionner les données. |
| Filtrage | Distinguer NULL, égalité d’une chaîne et condition sur la catégorie. Identifier le modèle de switch dans les données de son laboratoire. |
| Comptage et tri | Distinguer les lignes et les valeurs renseignées, puis rendre la sélection reproductible avec un tri lorsque l’ordre importe. |

- [Correction expliquée](corrections.md)
- [Cours du module](../../../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb.md)

- [Fiche de révision](../../../revision/glpi/module-05-les-bases-de-mysql-et-mariadb.md)
