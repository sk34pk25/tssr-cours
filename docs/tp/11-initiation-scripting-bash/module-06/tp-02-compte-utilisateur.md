# TP 02 — Compte utilisateur

Le menu source sépare création, modification du mot de passe, suppression, vérification et quitter. La donnée est le nom d’utilisateur et le fichier consulté est `/etc/passwd`.

Les commandes attestées sont `useradd -m -s /bin/bash $nom`, `passwd $nom`, `userdel $nom` et `grep $nom "/etc/passwd"`. Le scénario utilise aussi `case`, les variantes minuscules et majuscules, `read -p`, `echo`, les tests de chaîne vide, `exit 0` et `exit 1`.

Les privilèges nécessaires à ces commandes sont signalés comme contexte d’exécution source, sans ajout de procédure `sudo`.

## Preuves à relever

Dans la machine virtuelle dédiée, préparez un identifiant de test `tp_` et relevez son état avant et après chaque action. Essayez d’abord la vérification de présence et la sortie, puis contrôlez les opérations de création, modification et suppression. Un identifiant hors du périmètre d’exercice doit être refusé pour toute opération de modification dans la variante. Ne consignez aucune valeur d’accès dans la preuve.

[Correction du TP](correction-tp-02.md)
