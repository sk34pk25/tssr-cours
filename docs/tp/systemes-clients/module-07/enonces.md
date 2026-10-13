# Énoncé — Module 07 — Gestion du réseau

## Contexte

Ce TP demande de configurer la carte réseau d’une VM, de mettre en place un adressage IP fixe, de tester les communications et la résolution de noms, puis de parcourir et d’adapter la configuration du pare-feu.

**Durée estimée : 1 heure.** Lisez l’ensemble du TP avant de commencer.

## Environnement

Sur votre VM `Win10-XX` :

1. vérifiez d’abord le report de 35 jours de Windows Update ;
2. connectez la VM sur le switch **Bridged** ;
3. relevez l’adresse IP obtenue et l’adresse du réseau associé.

Les VM, le switch, les paramètres Campus et les informations de laboratoire cités par le scénario ne sont pas fournis dans le dossier Drive M07 live.

## Configuration IPv4 fixe

Configurez une adresse IPv4 fixe sur l’interface réseau de la VM.

- La partie réseau de l’adresse doit être la même que celle de l’ordinateur utilisé pour réaliser les TP.
- La partie hôte est composée du rang alphabétique de la première lettre du prénom puis de celui de la première lettre du nom de famille.

Exemple conservé du scénario : pour **Pierre-Louis Le Guervelec**, `P` est la 16e lettre de l’alphabet et `L` la 12e ; les troisième et quatrième octets sont donc respectivement `16` et `12`.

- Masque : `255.255.0.0`.
- Passerelle par défaut et serveur DNS préféré : mêmes valeurs que celles configurées sur la VM Campus en ligne.

Ces valeurs appartiennent au laboratoire source ; elles ne constituent pas une configuration générale à réutiliser hors de cet environnement.

## Tests de connectivité

Avec la commande `ping`, testez les hôtes suivants :

- l’adresse IP de la passerelle par défaut ;
- l’adresse IP de votre VM Discovery ;
- `www.facebook.com`.

Pour chaque test, indiquez si l’hôte est joignable et situez-le, lorsque le scénario le permet, sur le réseau local ou sur Internet. Si un hôte n’est pas joignable, vérifiez la configuration réseau.

Utilisez ensuite `tracert` pour les mêmes destinations. Notez ce que cette commande apprend sur le chemin suivi par les paquets.

## Résolution DNS

Utilisez `nslookup` avec les noms suivants :

- `www.hadopi.fr` ;
- `www.amendes.gouv.fr` ;
- `www.facebook.com`.

Indiquez si chaque requête reçoit une réponse et les adresses IPv4 retournées au moment du TP. Les réponses DNS sont des observations dépendantes de l’environnement et de la date du test.

## Pare-feu sur Win10-XX

1. Vérifiez l’état d’activation du pare-feu pour chaque profil réseau.
2. Dans les programmes autorisés, autorisez le **Bureau à distance** uniquement pour le profil privé.
3. Dans la console **Pare-feu Windows Defender avec fonctions avancées de sécurité**, utilisez la règle prédéfinie permettant d’autoriser le ping entre les postes clients.

## Livrables et vérifications

Conservez les réponses demandées : configuration relevée, adresse et réseau, résultats `ping`, observations `tracert`, réponses `nslookup`, profils de pare-feu et résultat du test ICMPv4.

Une fois le travail terminé, [consultez la correction](corrections.md) pour comparer les méthodes et contrôles.
