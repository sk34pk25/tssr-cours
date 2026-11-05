# Énoncés — Module 10 — Gestion des utilisateurs et groupes

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M10TP01 - Enoncé - Gérer les groupes et utilisateurs

### Gérer les groupes et utilisateurs

Durée estimée

20 à 30 minutes

### I. Création d’utilisateurs et de groupes sur le serveur sans environnement graphique

Créer des comptes utilisateurs pour : François, Frédéric et Fabrice avec les caractéristiques précisées.

Attention il faudra au préalable créer les groupes nécessaires à la configuration des utilisateurs.

- Pour François :
- Shell à utiliser Le shell sh
- Répertoire personnel /home/francois
- Mot de passe password
- Groupe principal admin
- Groupes secondaires stagiaires, documentation
- Pour Frédéric :
- Shell à utiliser Le shell bash
- Répertoire personnel /home/frederic
- Mot de passe AchAngEr

Ce mot de passe sera à changer à la première ouverture de session

- Groupes secondaires stagiaires, documentation

- Pour Fabrice :
- Shell à utiliser Le shell bash
- Répertoire personnel /home/fabrice
- Mot de passe password

Son compte devra être désactivé

- Groupes secondaires vip

Indice pour le mot de passe de Frédéric : voir le man de la commande passwd

IL EST INTERDIT DE MODIFIER DIRECTEMENT LES FICHIERS : /etc/passwd/, /etc/group, /etc/shadow, /etc/gshadow

## Clarifications et contrôles — complément pédagogique

L’énoncé demande `/home/frederic`, tandis qu’un exemple du corrigé crée `/home/fred` : suivre l’énoncé. `usermod -L` verrouille le mot de passe ; l’expiration de compte répond à une question différente. Tester les groupes dans une nouvelle session. Les mots de passe faibles de la source sont des valeurs de laboratoire.

Pour les justifications et références officielles, lire le [cours optimisé](../../../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
