# Fiche de révision — Module 08 — Mécanismes Linux et Bash avancé

Vérifier les fichiers produits par un pipeline, une restauration et une configuration de session.

## Gestes à retenir

| Besoin | Repère |
|---|---|
| Afficher et enregistrer | tee |
| Recherche sur le même système de fichiers | find / -mount -type f -name '*.conf' |
| Compter sans relire | find ... \| wc -l > compteur.txt |
| Chronométrer | time pendant l’exécution |
| Archives | tar -c / -x / -t / -u ; -z gzip ; -j bzip2 |
| Variables | monnom="$LOGNAME" ; export monnom |
| Local / environnement | set / env |
| PATH pérenne | export PATH="$PATH:$HOME/scripts" dans .bashrc |

## Contrôles à savoir réaliser

| Point de contrôle | Vérification |
| --- | --- |
| Recherche, chronométrage et comptage | Limiter `find` au système de fichiers demandé. Comparer le résultat visible et le fichier écrit par `tee`. Produire le compteur à partir du flux de la recherche. |
| Archivage | Contrôler les membres avec `tar -tf` et vérifier l’extraction dans `Restaurations`. Comparer les tailles observées avant de conclure sur la compression. |
| Alias et environnement | Vérifier chaque alias avec `type` puis le lancer en Bash interactif. Tester la variable `monnom` dans un sous-shell avant et après export, puis le `PATH` dans une nouvelle session Bash interactive. |

## Pièges du support

- Le document Alias écrit parfois `find / mount`, sans le tiret de -mount, et un tiret typographique dans ps –e : les exemples utilisables rétablissent les options ASCII.
- Deux variantes de comptage de la correction relisent fichiers.conf, contrairement à la consigne. Seule la variante find | wc -l respecte la demande « sans utiliser ce fichier ».
- Les sources alternent monnom et monom. La pratique emploie monnom de façon cohérente dans l’affectation, l’export et les vérifications.
- La source ajoute /$HOME/scripts au PATH et utilise echo avec expansion immédiate pour .bashrc. L’aide utilise $HOME/scripts et une ligne de configuration dont les variables restent littérales.
- Les en-têtes « Archivage et compression » du TP Variables et « Titre exact du cours complet » du TP Alias sont des résidus de gabarit, pas de nouvelles matières.

## Retenir puis vérifier

**Chaque action laisse une preuve distincte. Un affichage, un fichier, une archive vérifiable et une valeur héritée répondent à des contrôles différents.**

**1. Pourquoi utiliser `tee` pour le fichier de résultats ?**

??? success "Réponse expliquée"
    Il écrit le flux dans le fichier et l’envoie aussi sur sa sortie standard.

**2. Quelle archive peut être mise à jour avec `tar -u` dans ce TP ?**

??? success "Réponse expliquée"
    L’archive v2 non compressée. Vérifier l’entrée ajoutée avec `tar -tf`.

**3. Quand le sous-shell reçoit-il `monnom` ?**

??? success "Réponse expliquée"
    Une fois la variable exportée dans le shell parent. Fermer le premier sous-shell et en ouvrir un nouveau pour comparer.

**4. Comment prouver que le changement de `PATH` est pérenne ?**

??? success "Réponse expliquée"
    Ouvrir un nouveau Bash interactif qui charge la configuration attendue, puis vérifier le chemin et la résolution d’une commande du dossier `scripts`.

## Pour pratiquer

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-08/index.md)
- [Kahoot existant du module](../../kahoot/04-utilisation-gnu-linux-module-08-mecanismes-linux-et-bash-avance.md)
- [Commandes GNU/Linux](../../commandes/linux.md)
- [Dépanner un service Linux](../../troubleshooting/service-linux-echec.md)
