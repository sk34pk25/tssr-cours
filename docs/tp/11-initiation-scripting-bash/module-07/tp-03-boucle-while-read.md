# Énoncé — TP 03 — Boucle `while read`

La source mentionne les vidéos M01 à M07, non fournies dans Drive M07.

Créer `script_M7TP3.sh` afin d'afficher, pour chaque utilisateur de `/etc/passwd`, le nom et l'UID. Le traitement demandé est ligne par ligne avec `while read`.

La source propose `tr -s ":" " "` pour remplacer les séparateurs. Son exemple affiche notamment `root` avec l'UID `0`, puis `daemon` avec l'UID `1`.

## Preuves à relever

1. Repérez les sept champs séparés par deux-points. Le nom est le premier et l’UID le troisième.
2. Vérifiez le couple `root` et `0` dans le scénario. Contrôlez aussi une ligne avec un commentaire contenant des espaces.
3. Comparez la ligne d’entrée et le couple affiché pour vérifier qu’aucun champ n’a été décalé.

[Correction du TP](correction-tp-03.md)
