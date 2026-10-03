# Module 04 — Le routage

**Séquence :** Services réseaux en environnement Microsoft
**Sources originales (A) :** support, fiches, énoncés et corrections TSSR du module 04.
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Expliquer pourquoi le routage est nécessaire entre réseaux logiques.
- Identifier les éléments d’une route.
- Distinguer routage statique et dynamique.

## Le mécanisme de routage

Le routage permet la communication entre réseaux logiques distincts. La source décrit une route par son réseau de destination, son masque de sous-réseau et son adresse de passerelle. Une communication à l’intérieur d’un même réseau logique n’utilise pas le même mécanisme qu’une communication vers un réseau distant.

## Méthode de contrôle

1. Relever l’adresse, le masque et la passerelle de chaque interface.
2. Vérifier les réseaux directement connectés.
3. Ajouter ou analyser la route demandée dans le laboratoire.
4. Contrôler la table de routage puis tester le chemin vers une cible.

## À retenir

Une route décrit comment atteindre un réseau, pas seulement une machine. Toute configuration doit être lue dans le contexte du masque et de la passerelle.

## Vérification des acquis

1. Quels éléments composent une route dans la source ?
2. Quel est le rôle du routage ?

??? success "Réponses"
    1. Réseau de destination, masque et passerelle.
    2. Permettre la communication entre réseaux logiques différents.
