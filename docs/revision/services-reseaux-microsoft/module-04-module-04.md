# Révision — Module 04 — Le routage

## Suivre un paquet et sa réponse

Comparer les préfixes, résoudre la MAC du prochain saut, lire les routes, puis vérifier filtrage et retour. NAT peut modifier l’adresse et le port, selon la règle.

## Exercice de rappel

Le client 192.168.2.140/26 peut-il utiliser directement la passerelle 192.168.2.254 ?

??? success "Réponse"
    Non. Son sous-réseau est 192.168.2.128/26, avec les hôtes de .129 à .190.

## Vérifier en laboratoire

Joindre les passerelles, puis le routeur voisin et l’autre client. Dessiner interfaces, préfixes, prochains sauts et sens de retour.

- [Cours](../../modules/09-services-reseaux-en-environnement-microsoft/module-04-module-04.md)
- [Activités du module](../../tp/services-reseaux-microsoft/module-04/index.md)
