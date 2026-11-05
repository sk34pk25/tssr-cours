# Révision — M08 : Mécanismes Linux et Bash avancé

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

## Se contrôler

- Pourquoi tee répond-il à l’affichage et à l’enregistrement simultanés ? **Il écrit son entrée à l’écran et dans le fichier demandé.**
- Quelle variante respecte le comptage sans relire fichiers.conf ? **Le pipeline find ... | wc -l dirigé vers compteur.txt.**
- Quelle différence entre -z et -j dans tar ? **gzip et bzip2.**
- Pourquoi monnom est-il vide dans le premier sous-shell ? **La variable est locale avant son export ; les futurs enfants ne l’héritent qu’après export.**

## Pièges du support

- Le document Alias écrit parfois `find / mount`, sans le tiret de -mount, et un tiret typographique dans ps –e : les exemples utilisables rétablissent les options ASCII.
- Deux variantes de comptage de la correction relisent fichiers.conf, contrairement à la consigne. Seule la variante find | wc -l respecte la demande « sans utiliser ce fichier ».
- Les sources alternent monnom et monom. La pratique emploie monnom de façon cohérente dans l’affectation, l’export et les vérifications.
- La source ajoute /$HOME/scripts au PATH et utilise echo avec expansion immédiate pour .bashrc. L’aide utilise $HOME/scripts et une ligne de configuration dont les variables restent littérales.
- Les en-têtes « Archivage et compression » du TP Variables et « Titre exact du cours complet » du TP Alias sont des résidus de gabarit, pas de nouvelles matières.

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-08/index.md)
