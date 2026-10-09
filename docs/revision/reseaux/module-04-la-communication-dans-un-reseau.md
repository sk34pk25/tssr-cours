# Fiche de révision — Module 04 — La communication dans un réseau

## Objectifs de maîtrise

- Décider si une communication reste dans le réseau logique ou doit passer par une passerelle.
- Lire un scénario associant IP, masque, passerelle, MAC et routeur.
- Expliquer l’effet d’un routeur sur la communication et le domaine de diffusion.
- Identifier ce que demandent les exercices de routes statiques et de résumés CIDR.

## La méthode à appliquer dans un scénario

1. Relever l’adresse IP et le masque de l’émetteur.
2. Relever l’adresse IP, le masque et la passerelle du destinataire.
3. Identifier le réseau logique vu par chaque machine.
4. Conclure : communication locale, communication par passerelle, ou communication impossible selon les paramètres fournis.
5. Relire la topologie et l’itinéraire avant de remplir le tableau `V`, `F` ou `P` demandé dans le TP.

!!! tip "Ne pas confondre les niveaux"
    Le calcul détaillé d’adresse, de masque et de sous-réseau est revu dans M03. M04 utilise ces résultats pour analyser une communication et un chemin de routage.

## Notions essentielles

| Notion | À retenir à partir des sources M04 |
|---|---|
| Passerelle | Dans les scénarios inter-réseaux, elle remet le trafic au routeur indiqué. |
| Routeur | Il relie des réseaux et consulte une table de routage pour acheminer un paquet. |
| Domaine de diffusion | Portion logique dans laquelle une diffusion est transmise aux équipements raccordés. |
| Segmentation | Les routeurs limitent les domaines de diffusion ; les VLAN peuvent aussi les séparer. |
| Route statique | Itinéraire configuré manuellement, exercé dans les tables de routage du TP. |
| Résumé de routes | Regroupement de réseaux contigus et alignés en notation CIDR. |

## Contrôles utiles

- La passerelle déclarée appartient-elle au réseau utilisé par le poste dans le scénario ?
- La destination est-elle décrite comme locale, inaccessible ou atteignable par routeur dans la correction ?
- Pour une route statique, le réseau, le masque et le routeur de destination sont-ils tous renseignés ?
- Avant d’agréger des routes, les réseaux à regrouper sont-ils contigus et alignés comme demandé ?

## Mise en pratique

Le TP M04 comporte :

- un exercice de 2 heures sur les communications entre hôtes, passerelles, tables de routage et résumés de routes ;
- une activité Packet Tracer de 30 minutes pour mettre en place une communication inter-réseau.

Les fichiers Packet Tracer sont des ressources binaires : ils doivent être ouverts dans Cisco Packet Tracer et ne sont pas interprétés dans cette fiche.

## Questions flash

1. Quelles informations du scénario dois-je lire avant de conclure sur une communication ?
2. Dans quel cas le tableau du TP utilise-t-il `P` ?
3. Quel équipement délimite les domaines de diffusion selon le support ?
4. Que contient une route statique demandée dans le TP ?
5. Pourquoi les valeurs d’un énoncé doivent-elles être comparées à la correction sans les normaliser silencieusement ?

## Liens utiles

- [Cours M04](../../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau.md)
- [Énoncés M04](../../tp/reseaux/module-04/enonces.md)
- [Corrections M04](../../tp/reseaux/module-04/corrections.md)
- [Kahoot M04](../../kahoot/bases-reseaux-m04-communication-reseau.md)

## Sources et provenance

- **A — sources TSSR :** support M03/M04, TP M04-01-01, correction M04-01-01 et activité Packet Tracer M04-01-02.
- **B — structuration pédagogique :** tableau de synthèse, méthode et questions de révision formulés à partir de ces sources.