# Fiche de révision — Module 09 — Les pilotes et les imprimantes

## Pilotes et matériel

- Un **pilote** permet la prise en charge d'un composant matériel par Windows.
- **Plug and Play** prend en charge les périphériques détectés, y compris à chaud selon le support ; les matériels non Plug and Play sont plus rares et peuvent nécessiter un redémarrage.
- `devmgmt.msc` permet d'observer les composants, leurs pilotes et leurs propriétés.
- Un pilote dépend de l'architecture 32 ou 64 bits ; le support présente la signature comme un élément de stabilité et de prise en charge des éditions 64 bits.

| Fichier | Repère |
| --- | --- |
| `.inf` | Définition textuelle du pilote. |
| `.sys` | Pilote. |
| `.cat` | Certificat. |

Le **Driver Store** est le magasin de pilotes présenté par le support. Les outils à reconnaître sont `msinfo32`, `driverquery` et `pnputil`.

## Impression : vocabulaire et types

- **Périphérique** : matériel d'impression.
- **Imprimante** : composant logiciel qui gère pilote, configuration, file et port.
- **File d'attente** : travaux en attente.
- **Spouleur** : service qui prépare et transmet le travail vers le port d'impression.
- **Locale** : reliée directement à l'ordinateur.
- **Partagée** : imprimante locale rendue disponible par l'hôte, par exemple via `\\serveur\imprimante`.
- **Réseau** : imprimante indépendante avec interface réseau et service de configuration.

Le support associe le serveur d'impression à la centralisation du partage de plusieurs imprimantes et le pool à la distribution des travaux entre plusieurs périphériques.

## Contrôles du TP

- Exporter les informations détaillées et de signature des pilotes avec `driverquery`.
- Observer le matériel demandé dans le Gestionnaire de périphériques sans généraliser les valeurs de la VM de laboratoire.
- Vérifier les imprimantes proposées par les interfaces Windows du scénario.
- Tester Microsoft Print to PDF avec l'orientation demandée et contrôler le PDF obtenu.
- Vérifier la présence de l'imprimante partagée après sa connexion.
- Utiliser `Get-Printer` uniquement pour relever les propriétés demandées de l'imprimante du TP.

## Points d'attention documentaires

- L'énoncé demande quatre imprimantes par défaut ; la correction source en liste trois. Conservez et signalez cette divergence.
- L'énoncé et la correction n'emploient pas exactement les mêmes noms de fichiers CSV : respectez la consigne du document utilisé.

## Liens

- [Cours du module](../../modules/02-systemes-clients-microsoft/module-09-les-pilotes-et-les-imprimantes.md)
- [TP et correction](../../tp/systemes-clients/module-09/index.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-09-les-pilotes-et-les-imprimantes.md)

## Provenance

- **A — Sources TSSR :** support, énoncé et correction du TP M09.
- **B — Structuration pédagogique :** fiche organisée à partir des notions et contrôles présents dans les sources A.
