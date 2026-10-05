# Correction — Module 10 — Gérer les groupes et utilisateurs

**Sources originales (A) :** solution M10TP01 et support M10 Drive. **Correction (B) :** synthèse sans identifiants secrets.

La solution crée d’abord les groupes puis utilise `useradd` avec `-m` pour le répertoire personnel, `-s` pour le shell, `-g` pour le groupe principal et `-G` pour les groupes secondaires. `id` contrôle les groupes du compte créé. La gestion du mot de passe se fait avec `passwd`; l’option correspondante force son changement à la première connexion pour le deuxième compte.

Pour le troisième compte, la solution utilise `usermod -L` afin de verrouiller le mot de passe et une date d’expiration pour désactiver le compte. Vérifier le résultat avec les commandes prévues et ne pas modifier directement les fichiers d’identités Unix.

Les exemples de mots de passe du document source ne sont volontairement ni reproduits ni utilisés.
