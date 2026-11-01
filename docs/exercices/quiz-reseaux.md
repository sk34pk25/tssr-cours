# Quiz — Bases des réseaux

Questions tirées des notes de quiz et des TP du dossier. Le PDF « modules 1 et 2 » est un doublon des notes texte : même cours, autre mise en page. Il n’est pas repris ici.

Les quiz jouables sont dans les pages Kahoot du cours.

## Module 01

1. Combien de couches le modèle OSI compte-t-il dans les notes ?
2. Quelle unité est associée à la couche liaison ?
3. Que devient le PDU de la couche supérieure pour la couche qui le reçoit ?
4. Quel câble relie deux ordinateurs dans les notes, avant Auto MDI-X ?

??? note "Réponses"
    1. Sept.
    2. La trame.
    3. Il devient le SDU. La couche ajoute ensuite son PCI.
    4. Un câble croisé.

[Cours](../modules/01-bases-reseaux/module-01-le-modele-osi.md) · [Kahoot](../kahoot/bases-reseaux-m01-modele-osi.md)

## Module 02

1. Quelle est l’écriture binaire de 25 dans les notes ?
2. Un chiffre hexadécimal représente combien de bits ?
3. Que vaut 2AF en décimal dans l’exemple des notes ?

??? note "Réponses"
    1. 11001.
    2. Quatre bits.
    3. 687.

[Cours](../modules/01-bases-reseaux/module-02-les-unites-informatiques.md) · [Kahoot](../kahoot/01-bases-reseaux-02-les-unites-informatiques.md)

## Module 03

1. Quelle plage APIPA les notes donnent-elles ?
2. Pourquoi 210.71.10.128/28 n’est-elle pas une adresse d’hôte dans la correction ?
3. Que répond la correction pour 214.12.33.0 lorsqu’on demande 10 sous-réseaux d’au moins 17 hôtes ?

??? note "Réponses"
    1. 169.254.0.0 à 169.254.255.255, masque 255.255.0.0.
    2. C’est l’adresse réseau du /28.
    3. X. La demande ne tient pas dans le réseau de classe C.

[Cours](../modules/01-bases-reseaux/module-03-l-adressage-ipv4.md) · [Kahoot](../kahoot/bases-reseaux-m03-adressage-ipv4.md)

## Module 04

1. Que signifie P dans le tableau du TP ?
2. Quelle adresse suivent les routes imprimées, 13.107 ou 131.107 ?
3. Quel résumé est imprimé pour tous les réseaux de classe A ?

??? note "Réponses"
    1. La communication passe par le routeur.
    2. 13.107, celle du schéma et de la correction. L’introduction écrit 131.107.
    3. 0.0.0.0/1.

[Cours](../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau.md) · [Kahoot](../kahoot/bases-reseaux-m04-communication-reseau.md)

## Module 05

1. Quelle commande affiche le cache ARP ?
2. Quelle commande Windows vide le cache DNS ?
3. Que signifie l’état LISTEN ?

??? note "Réponses"
    1. `arp -a`.
    2. `ipconfig /flushdns`.
    3. Le port attend une connexion.

[Cours](../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau.md) · [Kahoot](../kahoot/01-bases-reseaux-05-les-premieres-commandes-reseau.md)

## Module 06

1. Quelle plage est limitée au lien local ?
2. Quelle adresse multicast désigne tous les nœuds du lien ?
3. Pourquoi 2000::/3 est-elle traitée comme globale dans la fiche ?

??? note "Réponses"
    1. FE80::/10.
    2. FF02::1.
    3. C’est le passage des notes aligné sur le tableau des plages. Un autre passage inverse l’intitulé.

[Cours](../modules/01-bases-reseaux/module-06-l-adressage-ipv6.md) · [Kahoot](../kahoot/01-bases-reseaux-06-l-adressage-ipv6.md)
