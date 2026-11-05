# Révision — Module 06 — Le service DNS

## Identifier l’autorité DNS

Distinguer cache client, cache serveur, résolution récursive, zones, transfert, délégation et redirection conditionnelle.

## Exercice de rappel

Le primaire a un numéro de série 123 et le secondaire 120. Que doit faire le secondaire ?

??? success "Réponse"
    Vérifier le SOA du primaire et demander un transfert autorisé, incrémental ou complet.

## Vérifier en laboratoire

Comparer résolution publique et interne avant et après les redirecteurs. Examiner et vider le cache serveur au moment prévu, puis vérifier l’option DNS reçue par le client.

- [Cours](../../modules/09-services-reseaux-en-environnement-microsoft/module-06-module-06.md)
- [Activités du module](../../tp/services-reseaux-microsoft/module-06/index.md)
