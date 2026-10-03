# Module 06 — Le service DNS

**Séquence :** Services réseaux en environnement Microsoft
**Sources originales (A) :** support, fiches, énoncés et corrections TSSR du module 06.
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Expliquer la résolution de noms d’hôtes.
- Distinguer cache, résolveur et serveur DNS hébergeur.
- Vérifier une résolution et les enregistrements attendus.

## De nom à adresse

Les utilisateurs demandent habituellement une ressource par son nom ; le réseau a besoin d’une adresse. DNS assure cette résolution en s’appuyant notamment sur un cache et sur des serveurs capables de répondre pour une zone. La source traite aussi les mises à jour, sous-domaines, délégations et redirections.

## Méthode de diagnostic

1. Identifier le nom demandé et l’adresse attendue.
2. Vérifier le serveur DNS configuré sur le client.
3. Interroger le nom et distinguer un résultat de cache d’une réponse de zone.
4. Contrôler les enregistrements et la délégation concernés.
5. Documenter les résultats avant toute modification de zone.

## À retenir

DNS est un service de résolution distribué. Un diagnostic fiable distingue la connectivité IP, le serveur interrogé, le cache et les enregistrements de la zone.

## Vérification des acquis

1. Pourquoi DNS est-il nécessaire pour l’utilisateur ?
2. Quels éléments faut-il distinguer lors d’un diagnostic DNS ?

??? success "Réponses"
    1. Il associe les noms compréhensibles aux adresses utilisées par le réseau.
    2. Connectivité, serveur interrogé, cache et enregistrements de zone.
