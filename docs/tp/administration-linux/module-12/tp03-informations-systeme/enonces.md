# Énoncés — tp03-informations-systeme

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M12TP03 - Enoncé - Informations sur le système

### Informations sur le système

Durée estimée

20 à 45 minutes

### I. Relevé d’informations : sur le serveur sans environnement graphique

- Afficher les informations sur la mémoire
- Combien de mémoire RAM est utilisée ?
- Combien de mémoire SWAP est utilisée ?
- Combien de mémoire RAM est réellement libre ?
- Afficher les informations détaillées sur le processeur et la mémoire
- Quel type de processeur a été détecté ?
- Afficher tous les processus relatifs à des démons (dont le nom finit par un "d")
- Afficher leur nombre

### II. Intervention sur les processus

- Ouvrez une session SSH avec le login utilisateur (pas le compte root)
- Lister tous les processus relatifs à votre login de façon détaillée
- Lister dans un fichier tous les processus correspondant aux connexions Putty
- Arrêter un processus lancé
- Lancer une seconde session Putty et ouvrir une session avec votre login utilisateur
- Repérer le n° de processus (PID) relatif au shell de cette seconde session Putty
- Depuis votre 1ere session, tenter d'arrêter votre second shell (avec le signal par défaut)
- Depuis votre 1ere session, arrêter définitivement votre second shell (avec le signal adapté)

## Clarifications et contrôles — complément pédagogique

Le journal systemd peut être persistant ; vérifier sa configuration et les services installés. Une crontab système ajoute un champ utilisateur. Les captures emploient parfois `warning.log` au singulier alors que l’énoncé demande `warnings.log` : choisir ce dernier de façon cohérente. La légende « 1ère minute » de la correction de planification contredit 10 h : la ligne attendue commence par `0 10`. Le serveur voit sshd et les shells distants, pas nécessairement un processus nommé PuTTY.

Pour les justifications et références officielles, lire le [cours optimisé](../../../../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
