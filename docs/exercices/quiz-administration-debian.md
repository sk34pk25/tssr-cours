# Quiz — Administration Debian GNU/Linux

**Exercice pédagogique interne**, fondé sur les douze modules et leurs clarifications. Ce quiz est distinct des activités Kahoot du parcours. Répondre avant d’ouvrir le corrigé.

1. Quelle différence existe entre un nom de code Debian et l’alias stable ?
2. L’installeur graphique impose-t-il le bureau GNOME ?
3. Pourquoi cron peut-il redevenir actif après `systemctl stop cron` puis un reboot ?
4. Pourquoi un `/home` vide dans le shell initial ne prouve-t-il pas la perte des données ?
5. Quel est le réseau de `10.49.222.1/16` ?
6. Pourquoi `dpkg -l '*ftp*'` ne remplace-t-il pas une recherche APT ?
7. Que font `w` et `q` dans fdisk ?
8. Quelle différence existe entre espace libre d’un VG et espace libre d’un système de fichiers ?
9. Monter un LV sur `/var` migre-t-il les données qui s’y trouvaient ?
10. Quelle différence existe entre `usermod -G` et `usermod -aG` ?
11. Quel mode donne umask 0007 à un fichier demandé en 0666 ?
12. Où place-t-on le champ utilisateur d’une tâche cron et comment vérifier son exécution ?

??? success "Corrigé expliqué"
    1. Le nom de code identifie une version ; stable change de cible lors des publications.
    2. Non. Le bureau dépend de la sélection des logiciels, pas de l’interface de l’installeur.
    3. Le service a été arrêté, mais son activation au démarrage est restée configurée.
    4. Un volume séparé peut ne pas être monté ; relever les montages avant de conclure.
    5. `10.49.0.0/16`.
    6. dpkg interroge la base locale, APT dispose des index des dépôts configurés.
    7. `w` écrit les modifications ; `q` quitte sans enregistrer les modifications en attente.
    8. Le VG a des extents non alloués ; le système de fichiers a des blocs disponibles dans son propre espace.
    9. Non. Le montage masque l’ancien contenu ; une migration exige copie et validation.
    10. `-G` remplace la liste supplémentaire ; `-aG` ajoute à cette liste.
    11. `0660` dans le cas classique sans ACL par défaut.
    12. Après les cinq champs temporels dans une table système ; une crontab utilisateur n’a pas ce champ. Contrôler les événements de cron et surtout le résultat attendu de la commande.

[Revoir les douze modules](../modules/05-administration-debian-gnu-linux/index.md) · [Fiches](../revision/administration-linux/index.md) · [TP](../tp/administration-linux/index.md).
