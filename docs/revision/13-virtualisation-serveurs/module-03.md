# Révision — Module 03 · Virtualisation des serveurs

Relier hôte, hyperviseur, VM et outils de gestion à une infrastructure physique.


## Dimensionner un environnement virtualisé

Évaluer la densité en rack ou en châssis, les besoins CPU, mémoire, stockage et réseau, puis les possibilités de maintenance. Le nombre de serveurs qui tient dans un châssis dépend du modèle et de l’alimentation. La densité physique et la capacité de faire tourner les VM sont deux mesures à relever.

| Point à vérifier | Exemple |
| --- | --- |
| Extensions processeur exposées | VT-x pour Intel, AMD-V pour AMD. Le réglage du micrologiciel ou de l’hyperviseur extérieur peut conditionner leur disponibilité. |
| Traduction mémoire de second niveau | EPT chez Intel, NPT ou RVI chez AMD. |
| Gestion d’un hôte | Gestionnaire Hyper-V pour Hyper-V, interface web d’administration pour ESXi dans le contexte VMware. |
| Gestion regroupée | Outils Microsoft ou vCenter selon la plateforme. Un inventaire commun peut être organisé avant la mise en place du cluster. |

Le support emploie VMM comme terme générique pour la gestion des VM. Distinguer ce terme du nom de produits de gestion. Pour la disponibilité, identifier les mécanismes de reprise des VM, les réseaux et les banques accessibles aux hôtes ainsi que les points de panne communs.


## Question de révision

La console centrale voit deux hôtes. Que reste-t-il à vérifier avant d’annoncer une reprise automatique ?

??? success "Correction"

    La présence et le fonctionnement du mécanisme de disponibilité, la capacité restante et l’accès du second hôte aux fichiers et réseaux nécessaires à la VM.

[Revenir au cours](../../modules/13-virtualisation-serveurs/module-03.md)
