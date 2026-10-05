# Énoncés — Module 03 — Démarrage d’une distribution Debian

!!! warning "Environnement de laboratoire"
    Les cibles systemd et services sont modifiés dans une machine de laboratoire. Relever la cible et l’état initiaux avant toute action afin de pouvoir restaurer le comportement demandé par le TP.

**Sources originales (A) :** `M03TP01 - Énoncé - Démarrer et arrêter Debian` et `M03TP02 - Énoncé - Gérer les services`.
**Énoncés du portail (B) :** reformulation structurée des tâches indiquées dans les sources TSSR.

## TP01 — Démarrer et arrêter Debian

**Durée indicative de la source :** 15 à 30 minutes.

1. Démarrer la machine avec environnement graphique et ouvrir une session de laboratoire.
2. Identifier la cible systemd atteinte par défaut au démarrage.
3. Consulter la documentation de `systemd`, identifier la cible correspondant à un démarrage normal sans environnement graphique et la définir comme cible par défaut.
4. Redémarrer, constater si l’environnement graphique est chargé et expliquer le résultat observé.
5. Charger l’environnement graphique avec la commande systemd adaptée, puis relever l’état final.

## TP02 — Gérer les services

**Durée indicative de la source :** 25 à 45 minutes.

### Service SSH

- Identifier le fichier de configuration systemd du service, le démon/fichier binaire du serveur SSH et la configuration du serveur SSH.

### Service cron

1. Vérifier si le service est lancé automatiquement au démarrage.
2. Arrêter le service cron, redémarrer le serveur et contrôler son état après redémarrage.
3. Arrêter à nouveau le service, désactiver son démarrage automatique, puis vérifier la différence entre l’état courant et l’activation au démarrage.
4. Restaurer les paramètres de démarrage par défaut du démon cron demandés par le TP.

## Voir aussi

- [Présentation du TP](index.md)
- [Corrections du TP](corrections.md)
- [Cours — Démarrage d’une distribution Debian](../../../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md)
- [Dépannage — Service Linux en échec](../../../troubleshooting/service-linux-echec.md)
