# Module 01 — Présentation de Debian GNU/Linux

**Séquence :** Administration Debian GNU/Linux  
**Sources originales (A) :** support TSSR « Administration Debian GNU/Linux — Module 01 ».
**Contenu du portail (B) :** reformulation structurée de la source TSSR.

## Objectifs

- Situer le projet Debian, son contrat social et ses principes de logiciel libre.
- Distinguer une version, un nom de code et une branche de distribution.
- Identifier les branches stable, testing et unstable.

## Repères essentiels

Le projet Debian a été créé en 1993. Sa communauté s’appuie sur un contrat social : le système Debian demeure libre, ses travaux sont rendus à la communauté et les problèmes ne sont pas dissimulés. Les logiciels non conformes aux principes du logiciel libre peuvent être proposés dans des sections séparées du système principal.

Une version Debian possède un numéro et un nom de code. La source présente trois branches principales : **stable**, version recommandée pour la production ; **testing**, future stable ; et **unstable**, en évolution continue, appelée Sid. Le choix d’une branche est un choix de niveau de stabilité, pas seulement de nouveauté.

## Méthode de lecture d’une commande

La syntaxe est représentée sous la forme `commande [options] <argument>`. L’espace sépare commande, options et arguments. Lire cette structure avant d’exécuter une commande évite de prendre un exemple pour une instruction à recopier sans adaptation.

## Points d’attention

- Les versions citées par un support constituent son contexte pédagogique ; vérifier la documentation interne avant de les utiliser dans un environnement réel.
- `unstable` ne signifie pas « branche de test sans règle » : c’est une branche de développement continu, non le choix attendu pour un serveur de production.

## À retenir

Debian associe une culture du logiciel libre à des branches destinées à des usages différents. Pour l’administration, la stabilité et la traçabilité du choix de version sont essentielles.

## Vérification des acquis

1. Quelle branche est recommandée en production ?
2. Comment se nomme la branche Debian en évolution continue ?

??? success "Réponses"
    1. `stable`.
    2. `unstable`, aussi appelée Sid.

## Voir aussi

- [Présentation de la séquence](index.md)
