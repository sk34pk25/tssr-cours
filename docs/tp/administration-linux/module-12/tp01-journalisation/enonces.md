# Énoncés — tp01-journalisation

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M12TP01 - Enoncé - Gestion de la journalisation

### Gestion de la journalisation

Durée estimée

30 à 45 minutes

### I. Recherche d’informations : sur le serveur sans environnement graphique

- Trouver dans les journaux les différentes ouvertures de sessions
- Les reporter dans un fichier /adm/sessions.txt
- Rechercher dans les journaux des informations sur le disque sda, (dont le nombre de secteurs et la taille du disque)

### II. Configuration de rsyslog

- Activer la journalisation pour le service cron
- Stocker les informations relatives au démon cron dans le fichier /adm/logs/cron.log
- Définir comme fichier contenant tous les évènements d'avertissement /adm/logs/warnings.log

### III. Générer des messages de type avertissement

- A l’aide de logger, créer des messages de niveau avertissement.
- Vérifier le bon fonctionnement des étapes précédentes.

## Clarifications et contrôles — complément pédagogique

Le journal systemd peut être persistant ; vérifier sa configuration et les services installés. Une crontab système ajoute un champ utilisateur. Les captures emploient parfois `warning.log` au singulier alors que l’énoncé demande `warnings.log` : choisir ce dernier de façon cohérente. La légende « 1ère minute » de la correction de planification contredit 10 h : la ligne attendue commence par `0 10`. Le serveur voit sshd et les shells distants, pas nécessairement un processus nommé PuTTY.

Pour les justifications et références officielles, lire le [cours optimisé](../../../../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
