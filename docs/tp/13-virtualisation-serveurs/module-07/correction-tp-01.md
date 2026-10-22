# Correction documentaire — Atelier n°5

Cette restitution suit les 17 pages de la solution M07, comparées à l’énoncé de
quatre pages. Les valeurs internes et captures restent hors publication. Les
résultats illustrés appartiennent au document historique, pas au laboratoire actuel.

## Préparation et accès iSCSI

La page 2 restaure le snapshot de fin d’atelier 1 puis configure l’IPv4 statique
de la VM Windows Server 2019. La restauration affecte son état courant. La page 3
reprend les deux contrôles `ping` vers les VMkernel, active iSCSI logiciel et
montre la liaison au VMkernel de stockage/vMotion ainsi qu’une cible dynamique
correspondant au serveur Windows. La capture n’utilise ni CHAP ni CHAP mutuel ;
cette configuration est limitée au scénario présenté.

La page 4 ajoute un disque de 150 Go et le rôle Serveur cible iSCSI. Le document
renvoie à la solution de l’atelier 2 pour la préparation du volume : il ne détaille
pas à nouveau toutes les étapes de formatage. Le chemin réel du volume est
remplacé ici par `<chemin-de-laboratoire>`.

Les pages 5 à 7 distinguent la création du disque virtuel iSCSI de **80 Go** et
son association à une nouvelle cible. La capture de la page 6 sélectionne une
**expansion dynamique**. Les deux ESXi sont autorisés comme initiateurs par IP.
Le nom de cible n’est pas synonyme d’une capacité : celle-ci est celle du disque.

## Détection et banque partagée

Les pages 8 à 10 réanalysent les adaptateurs, montrent le périphérique MSFT iSCSI
et un état connecté côté Windows, puis créent une banque VMFS utilisant le LUN
de 80 Go. Cette création initialise l’espace choisi : identifier le LUN avant
validation. Les pages 11 et 12 configurent le second ESXi et montrent la même
banque accessible, sans demander un nouveau formatage de ce LUN partagé.

## Service NFS

Les pages 13 à 15 installent le rôle Serveur pour NFS et créent un partage du
sous-dossier NFS du volume de stockage. La capture sélectionne l’absence
d’authentification serveur **AUTH_SYS** et l’accès non mappé par UID/GID. Elle ne
sélectionne pas l’autre option d’accès anonyme illustrée dans le même écran.

La page 16 montre une autorisation par hôte, en lecture/écriture ; le texte demande
de couvrir les deux hyperviseurs. La case autorisant l’accès root n’est pas cochée
dans la capture. Ces choix sont ceux du laboratoire et restent à revoir avant
emploi dans un autre contexte ; aucune permission de production n’est déduite.

Les pages 16 et 17 créent une banque de type Montage NFS, avec le serveur et le
partage à fournir. **NFS 3 est sélectionné**, conformément à l’énoncé. L’inventaire
final montre banques locale, iSCSI et NFS, et une notification de montage NFS.
Cette illustration ne prouve pas une exécution actuelle sur les deux hôtes.

## Limites conservées

- Le bandeau de solution cite le module 6 ; l’énoncé cite le module 7.
- Les VM, snapshot et ressources binaires du laboratoire ne sont pas joints aux PDF.
- Le mot « Bonus » de la dernière page est isolé, sans consigne exploitable.
  Aucun exercice additionnel n’est reconstitué.
- Aucun test de charge, nouvelle commande, procédure de sauvegarde ou réglage
  d’authentification externe n’est ajouté.

[Énoncé](tp-01.md) · [Retour à l’atelier](index.md)

Provenance A : solution et énoncé M07 ; B : restitution fidèle et neutralisée.
