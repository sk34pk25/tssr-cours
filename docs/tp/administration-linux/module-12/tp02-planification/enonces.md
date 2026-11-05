# Énoncés — tp02-planification

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M12TP02 - Enoncé - Gestion de la planification des tâches

### Gestion de la planification des tâches

Durée estimée

30 à 45 minutes

### Énoncé : Planification de taches sur le serveur sans environnement graphique

### I. Crontab utilisateur

- Créer une tâche crontab utilisateur pour l'utilisateur "François"
- Périodicité : tous les jours ouvrables de la semaine à 9h15
- Commande : mise à jour de l’archive de son répertoire personnel dans l’arborescence depot de l’atelier 10 avec le nom francois.tar
- Créer une tâche crontab utilisateur pour l’utilisateur "François"
- Périodicité : tous les samedis à 10h
- Commande : compression de l’archive francois.tar en francois.tar.bz2, puis création d’une nouvelle archive francois.tar

### II. Crontab système

- Créer une tâche de surveillance des processus système :
- Périodicité : toutes les 30 minutes le mardi
- Commande : lister l'ensemble des processus de manière détaillée avec notamment les pourcentages d'utilisation mémoire et processeur.
- Enregistrer ces informations de façon durable dans le fichier /var/log/procstatus.log

## Clarifications et contrôles — complément pédagogique

Le journal systemd peut être persistant ; vérifier sa configuration et les services installés. Une crontab système ajoute un champ utilisateur. Les captures emploient parfois `warning.log` au singulier alors que l’énoncé demande `warnings.log` : choisir ce dernier de façon cohérente. La légende « 1ère minute » de la correction de planification contredit 10 h : la ligne attendue commence par `0 10`. Le serveur voit sshd et les shells distants, pas nécessairement un processus nommé PuTTY.

Pour les justifications et références officielles, lire le [cours optimisé](../../../../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
