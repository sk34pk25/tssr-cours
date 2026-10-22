# Correction documentaire — Atelier n°3

Cette restitution suit la solution M05 de 15 pages. Elle décrit ce que le document
montre ou demande ; elle ne certifie pas une exécution dans le laboratoire actuel.
Les données internes et captures privées ne sont pas republiées.

## Création des hyperviseurs

Les pages 2 à 6 montrent la création de la première VM ESXi 7 sous Workstation,
le choix de l’ISO et d’un emplacement dédié, le disque principal de 40 Go, puis
l’ajustement de la RAM à 6 Go et l’ajout du disque SCSI de 200 Go. La solution
demande de ne pas lancer automatiquement la VM à la fin du premier assistant,
afin de terminer ces réglages.

Les pages 6 à 8 présentent l’installation sur le disque de 40 Go, le choix français
et la définition du secret d’administration. La confirmation F11 lance
l’installation : vérifier le disque ciblé avant cette étape. Le document relève
l’adresse attribuée et laisse la console locale en l’état.

Le second hyperviseur est créé selon les mêmes étapes, avec un nom, un emplacement
et une adresse propres. Aucune configuration d’adresse statique ou de DNS
supplémentaire n’est documentée ici.

## Accès web et banque de données

Les pages 8 et 9 montrent l’accès au premier hôte depuis le navigateur Windows.
La solution historique propose d’accepter un avertissement de sécurité ; cette
mention est conservée comme observation, sans en faire une autorisation générale
de contourner la vérification du certificat. L’identité de l’hôte et le certificat
doivent être examinés dans le contexte du laboratoire. La solution décoche aussi
la participation au programme d’amélioration affiché dans son interface.

Les pages 10 et 11 montrent la création d’une banque VMFS sur le disque de 200 Go,
avec tout l’espace disponible, puis le chargement de l’ISO Windows Server 2019
par le navigateur de banque de données. Le nom est neutralisé ici en
`<stockage-de-laboratoire>`. Identifier le disque avant son initialisation.

## Machine Windows Server

Les pages 12 à 14 présentent une VM Windows Server 2019, avec un CPU d’un cœur,
2 Go de RAM, un disque de 32 Go et le lecteur CD/DVD associé à l’ISO de la banque.
La capture sélectionne bien Windows Server **2019** (64 bits) et une compatibilité
ESXi 7.0. Le texte demande le démarrage, l’installation du système puis celle des
VMware Tools. La présence du menu d’installation des Tools ne prouve pas à elle
seule que leur installation est achevée.

## Limites à conserver

- **NEEDS_REVIEW : RAM.** Texte et capture de préparation : 6 Go par hyperviseur ;
  schéma final : 8 Go. Le schéma de l’énoncé présente le même écart.
- Le schéma récapitulatif mentionne HTTP ; il ne suffit pas à déterminer la
  configuration de protocole et de certificat à employer dans un autre laboratoire.
- Les ISO, secrets, adresses et chemins effectifs doivent être fournis séparément.
- Aucun résultat d’exécution actuel ni validation des deux hôtes n’est fabriqué
  à partir des captures du document historique.

[Énoncé](tp-01.md) · [Retour à l’atelier](index.md)

Provenance A : solution M05 et comparaison avec l’énoncé ; B : restitution web
fidèle, données de laboratoire neutralisées, sans procédure externe ajoutée.
