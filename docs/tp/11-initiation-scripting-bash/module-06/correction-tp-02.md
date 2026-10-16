# Correction TP 02 — Compte utilisateur

La correction organise avec `case` les actions de création, mot de passe, suppression, vérification et sortie. Elle conserve `useradd -m -s /bin/bash $nom`, `passwd $nom`, `userdel $nom`, `grep $nom "/etc/passwd"`, les tests de chaîne vide, `read -p`, `echo`, `exit 0` et `exit 1`.

`grep $nom` ne garantit pas une égalité exacte avec le premier champ de `/etc/passwd`. Les variables ne sont pas systématiquement protégées et certaines vérifications sont proposées sans être implémentées. Ces éléments ne sont pas robustifiés.
