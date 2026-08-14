# Module 10 — La maintenance du système

**Séquence :** Systèmes clients Microsoft  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Le support enseigne Windows 10. Windows 10 a atteint sa fin de support général le 14 octobre 2025 ; les manipulations restent utiles pour le laboratoire et les environnements hérités, mais un déploiement neuf doit viser une édition Windows encore prise en charge. Référence : [Cycle de vie Windows 10](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

## Objectifs et compétences

- Utiliser les journaux, le moniteur et les outils de diagnostic.
- Créer et exploiter un point de restauration.
- Choisir une méthode de récupération adaptée au niveau de panne.
- Valider l’état du système après correction.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « La maintenance du système » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Module 10 - Support de cours

### Systèmes clients Microsoft

#### Module 10 — La maintenance du système

#### Objectifs • Découvrir des outils de diagnostics système

- Activer et gérer les points de restauration
- Récupérer un système défaillant

### Maintenance du système

- Les outils de diagnostic
- Points de restauration
- Récupération du système

#### Maintenance du système

#### Les problématiques

- Performances : est-ce que le système est en mesure de réaliser les tâches ?

 4 composants surveillés en priorité : processeur, mémoire, disque, réseau

- Fiabilité : est-ce que le système a le comportement attendu ?

 Au démarrage, au lancement des services, au lancement des applications…

#### Les méthodes disponibles

- Analyse en temps réel : ce qu’il se passe en ce moment
- Analyse sur un historique : ce qu’il s’est passé dernièrement (ou il y a longtemps)
- Diagnostic automatique : proposé par Windows

####  Certains outils proposent de résoudre automatiquement les problèmes

#### (mais sans préciser la solution qui va être appliquée !)

#### Analyse en temps réel

- Gestionnaire de tâches : processus, services, les performances processeur et mémoire
- Observateur d’évènements : contient tous les évènements enregistrés par le système
- Moniteur de ressources : affichage détaillé pour les 4 composants principaux
- Analyseur de performances : affichage des performances à partir de compteurs

#### Analyse sur un historique

- Historique de fiabilité : vue synthétique de l’état de santé du système dans le temps
- Observateur d’évènements : les évènements sont mémorisés dans des journaux

#### (fichiers de 20 Mo par défaut)

- Analyseur de performances : permet de planifier des compteurs dans des plages

#### horaires pour une analyse a posteriori

#### Maintenance du système

#### Diagnostic automatique

- Diagnostic de mémoire Windows : redémarre automatiquement le système et lance une

#### série de tests sur la mémoire physique

- Composant Résolution de problème : série de packs de résolution de problèmes intégrés

à Windows.

- Ils sont orientés utilisateur, il n’est pas possible de choisir ou consulter la solution trouvée

#### Dans quel but ?

- Trouver des indices pour comprendre les problèmes et faire des recherches
- Ressources : aide Windows, Technet, blogs spécialisés, moteur de recherche...

### Démonstration

#### Les points de restauration système

#### Tel un journal, enregistrement des modifications du système

- Propose de les restaurer à un état antérieur
- Plus rapide qu'une restauration complète
- Sauvegarde le registre, certains fichiers système et les programmes
- Ne sauvegarde pas les données
- Désactivé par défaut
- S'active sur un lecteur

### Les points de restauration système

- Création des points de restauration
- Chaque jour
- À chaque évènement important survenant sur

#### le système

- Installation d'un pilote
- Désinstallation d'un logiciel
- …
- Manuellement
- Outil disponible via sysdm.cpl
- Espace protégé alloué au stockage des points

#### de restauration (méthode FIFO)

- Restauration possible via WinRE

#### Récupération du système

#### WinRE

- Environnement de récupération du système d'exploitation principal de la machine
- Système d'exploitation, léger, de réparation du système, lorsque le principal ne peut plus

#### démarrer

- Embarque des outils de diagnostics
- Embarque des outils de réparation
- Possibilité de réinitialiser le PC
- Réinstallation du système, "retour à la configuration d'usine"

### Récupération du système

- Comment lancer WinRE ?
- Depuis le menu démarrer : MAJ + redémarrer
- En ligne de commande shutdown /r /o
- Menu Paramètres &gt; Mise à jour et sécurité &gt; Récupération &gt; Redémarrer maintenant
- Depuis le support d'installation, menu Réparer l'ordinateur
- Chargement automatique de WinRE
- Après 2 échecs consécutifs du démarrage du système d'exploitation
- Après 2 arrêts imprévus survenus moins de 2 minutes après le démarrage

#### Récupération du système

#### Options avancées

- Restauration du système
- Utilisation d'un point de restauration système
- Privilège d'administration requis
- Récupération de l'image système
- Utilisation d'une sauvegarde de l'image système valide "si elle existe"
- Média source requis (DVD, disque dur, etc.)
- Invite de commandes
- Pour utiliser des outils de diagnostic ou de réparation
- cmd executée en tant qu'administrateur
- Rétrograder vers la version précédente
- Si Windows 10 est une MAN, possibilité de retrouver Windows 7 ou Windows 8.1 source
- Impossibilité de rétrograder vers la build Windows 10 précédente

#### Récupération du système

- Paramètres
- Redémarrage du poste et choix de démarrage spécifique
- Mode sans échec
- Activer le mode vidéo basse résolution
- Désactiver le contrôle obligatoire des signatures de pilotes
- …
- Outil de redémarrage système
- Reconstruit/répare le MBR éventuellement manquant ou corrompu
- Reconstruit/répare le magasin BCD

### Démonstration

#### TP

### Conclusion

- Le technicien doit être en mesure de s’informer

#### sur l’état du système

- En temps réel
- Sur une période passée
- En cas de dysfonctionnement, le technicien doit

#### pouvoir

- Investiguer, enquêter
- Réparer et/ou restaurer le système

## Mise en pratique

- [Travaux pratiques du module](../../tp/systemes-clients/module-10/index.md)
- [Fiche de révision du module](../../revision/systemes-clients/module-10-la-maintenance-du-systeme.md)

## Questions flash

1. Comment expliquer simplement « La maintenance du système » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Utiliser les journaux, le moniteur et les outils de diagnostic.
    - Créer et exploiter un point de restauration.
    - Choisir une méthode de récupération adaptée au niveau de panne.
    - Valider l’état du système après correction.

## Voir aussi

- [Présentation de la séquence](index.md)
