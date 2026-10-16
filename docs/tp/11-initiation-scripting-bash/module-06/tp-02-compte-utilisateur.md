# TP 02 — Compte utilisateur

Le menu source sépare création, modification du mot de passe, suppression, vérification et quitter. La donnée est le nom d’utilisateur et le fichier consulté est `/etc/passwd`.

Les commandes attestées sont `useradd -m -s /bin/bash $nom`, `passwd $nom`, `userdel $nom` et `grep $nom "/etc/passwd"`. Le scénario utilise aussi `case`, les variantes minuscules et majuscules, `read -p`, `echo`, les tests de chaîne vide, `exit 0` et `exit 1`.

Les privilèges nécessaires à ces commandes sont signalés comme contexte d’exécution source, sans ajout de procédure `sudo`.
