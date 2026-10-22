# Correction documentaire — Atelier n°7 : datacenter

Restitution de la solution de 18 pages, comparée à l’énoncé de quatre pages.
Les captures, adresses, noms, comptes, chemins et exemples de secrets internes
ne sont pas republiés. Aucun résultat actuel n’est affirmé.

## DNS et préparation des hôtes

Les pages 2 et 3 ajoutent une carte bridgée au serveur Windows et configurent
l’IPv4 statique avec un préfixe /16 et le résolveur du laboratoire. Les pages 4 à 7
ajoutent le suffixe DNS principal au serveur, installent DNS, créent une zone
principale et les enregistrements A des deux ESXi et de vCenter. La source demande
de conserver les autres paramètres de l’assistant.

Les pages 7 et 8 configurent DNS et suffixe sur chaque ESXi depuis sa console
locale, puis confirment les modifications. Les notations d’adresses varient dans
les textes et les captures : **NEEDS_REVIEW**, sans reconstitution de paramètres
de salle ni publication de leurs valeurs.

## Déploiement et configuration de l’appliance

Les pages 8 à 10 ouvrent l’appliance OVA dans Workstation et choisissent le mode
**Tiny server with embedded PSC**. L’assistant reçoit IPv4, préfixe, passerelle,
DNS et FQDN du laboratoire. Le texte signale un clavier QWERTY pour le secret du
compte d’administration ; l’exemple de secret proposé n’est pas repris.

Les pages 10 à 12 utilisent le navigateur du serveur Windows, qui consulte le
DNS préparé, pour joindre VCSA en HTTPS sur **5480**. Elles suivent Configurer,
créent le domaine SSO du scénario et attendent la fin. Le conseil de rafraîchir
si l’assistant boucle est historique et sans diagnostic documenté ; aucune boucle
n’a été reproduite ici.

Les pages 12 à 14 ouvrent vSphere sur **443**, se connectent avec le compte SSO,
créent un datacenter et ajoutent les deux hôtes. L’ajout utilise les secrets des
ESXi, pas celui de vCenter. La solution montre l’acceptation d’une alerte de
certificat : c’est une observation du document à examiner, sans contournement
automatique proposé par l’adaptation.

## Calcul : parcours réellement illustré

Les pages 14 à 16 prennent la **seconde VM** démarrée sur le second ESXi. L’assistant
sélectionne **Modifier uniquement la ressource de calcul**, puis le premier ESXi
comme destination et le groupe de ports des VM. La capture indique un contrôle
de compatibilité réussi. Les autres choix restent ceux de l’assistant montré.

## Stockage : parcours réellement illustré

Les pages 16 à 18 prennent la **première VM** démarrée. L’assistant sélectionne
**Modifier uniquement le stockage**, puis la banque **NFS** comme destination de
ses fichiers, initialement sur le stockage local. Les images finales montrent
la banque NFS associée à la première VM et les ressources du premier ESXi utilisées
par la seconde. Le texte demande de vérifier l’effet sur les banques et le
fonctionnement des VM ; les captures ne sont pas une mesure continue de disponibilité.

## Divergences à arbitrer

- L’énoncé demande un stockage vers **iSCSI**, puis un déplacement d’hôte d’une
  VM dont la préparation n’est pas décrite. La solution utilise deux VM connues,
  avec **calcul d’abord**, puis stockage d’une autre VM vers **NFS**.
- L’énoncé et la solution n’emploient pas le même nom de datacenter ; les noms
  sont neutralisés sans imposer l’un des deux.
- La deuxième page de l’énoncé ne contient que son en-tête ; rien n’y est inventé.
- Le déploiement, les capacités et interfaces appartiennent aux versions historiques
  illustrées. Aucun paramètre de version actuelle n’est ajouté.

[Énoncé](tp-02.md) · [Retour aux ateliers](index.md)

Provenance A : solution datacenter M08 et comparaison à l’énoncé ;
B : restitution fidèle, données de laboratoire neutralisées.
