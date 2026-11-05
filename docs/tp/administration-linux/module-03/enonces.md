# Énoncés — Module 03 — Démarrage d’une distribution Debian

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M03TP01 - Enoncé - Démarrer et arrêter Debian

Administration Debian GNU/Linux

### Démarrer et arrêter Debian

Durée estimée

15 à 30 minutes

### Énoncé : Identification & modification de la cible par défaut sur la station avec environnement graphique

- Démarrer le système, ouvrez une session avec votre utilisateur
- Quelle est la cible systemd qui sera atteinte par défaut au démarrage de la machine ?
- Dans le manuel de la commande systemd, rechercher le nom de la cible identifiée au point précédent. Lire le paragraphe correspondant et en déduire le nom de la cible permettant un démarrage normal SANS ENVIRONNEMENT GRAPHIQUE
- Définir comme cible par défaut la cible trouvée au point précédent.
- Redémarrer le poste avec environnement graphique. A l’issue du redémarrage, l’environnement graphique a-t-il été chargé ? Est-ce normal ?
- Exécuter la commande systemctl appropriée afin de charger l’environnement graphique.

## M03TP02 - Enoncé - Gérer les services

Administration Debian GNU/Linux

### Gérer les services

Durée estimée

25 à 45 minutes

### Enoncé : Gestion des services : sur le serveur sans environnement graphique

### I. Gestion du service SSHD (connexions SSH)

Trouver les fichiers relatifs au fonctionnement du service (nom et emplacement) :

- Fichier de configuration systemd du service
- Démon ou fichier binaire du serveur ssh
- Fichier de configuration du serveur sshd

### II. Gestion du service CRON (planification de tâches)

- Le service sera-t-il lancé automatiquement au démarrage de la machine ?
- Arrêter le service cron
- Redémarrer le serveur. Le service cron est-il actif après redémarrage
- Arrêter à nouveau le service manuellement
- Désactiver totalement le démarrage automatique du démon cron au démarrage du système.

Restaurer les paramètres par défaut de démarrage du démon cron

## Clarifications et contrôles — complément pédagogique

Comparer état actif et activation au démarrage. `stop` ne remplace pas `disable`, et `set-default` ne remplace pas `isolate`. Restaurer la cible et le service cron à l’état demandé après l’exercice.

Pour les justifications et références officielles, lire le [cours optimisé](../../../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
