# Site de cours TSSR

Site de cours à consulter dans un navigateur : modules, parcours TSSR, travaux pratiques, exercices, révisions, mémos, commandes, dépannage, glossaire et ressources. Les onglets de chaque cours, les liens Kahoot et les illustrations sont inclus.

## Mettre le site sur votre compte GitHub

1. Ouvrir la page de ce dépôt sur GitHub.
2. Cliquer sur « Fork ».
3. Décocher « Copy the main branch only » s’il est coché, pour copier aussi la branche `version-statique`.
4. Cliquer sur « Create fork ».
5. Dans votre copie, cliquer sur « Settings ».
6. À la ligne « Default branch », cliquer sur l’icône des deux flèches.
7. Choisir `version-statique`.
8. Cliquer sur « Update ».
9. Cliquer sur « I understand, update the default branch. »
10. Dans le menu de gauche, cliquer sur « Pages ».
11. Sous « Build and deployment », ouvrir la liste « Source ».
12. Choisir « GitHub Actions ».
13. Si GitHub affiche des modèles de workflow, n’en choisir aucun : le fichier est déjà dans la branche.
14. Cliquer sur l’onglet « Actions ».
15. Si la page affiche « Workflows aren’t being run on this forked repository », cliquer sur « I understand my workflows, go ahead and enable them ».
16. Dans la colonne de gauche, cliquer sur « Publier le site ».
17. Cliquer sur « Run workflow ».
18. Laisser la branche proposée : c’est déjà `version-statique`, la branche par défaut.
19. Cliquer sur le bouton vert « Run workflow ».
20. Attendre la coche verte du run.
21. Cliquer sur ce run terminé.
22. Repérer le lien à côté de « github-pages » : c’est l’adresse du site.

La même adresse figure dans « Settings », page « Pages », sur la ligne « Your site is live at ». Elle a la forme `https://<votre-nom>.github.io/<nom-du-depot>/`.

Ensuite, chaque envoi de commits publie le site, sur `version-statique` comme sur toute autre branche. Vous n’avez pas à choisir une branche dans le workflow.

## Si l’onglet Actions ne lance rien

1. Cliquer sur « Settings ».
2. Cliquer sur « Actions ».
3. Cliquer sur « General ».
4. Cocher « Allow all actions and reusable workflows ».
5. Cliquer sur « Save ».
6. Revenir sur l’onglet « Actions ».
7. Cliquer sur « I understand my workflows, go ahead and enable them » s’il est encore affiché.
8. Dans la colonne de gauche, cliquer sur « Publier le site ».
9. Si le bouton « Enable workflow » est visible, cliquer dessus.
10. Cliquer sur « Run workflow ».
11. Cliquer sur le bouton vert « Run workflow ».

## Voir le site sur votre ordinateur

Python 3.11 ou une version plus récente.

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
.venv/bin/mkdocs serve
```

Ouvrir `http://127.0.0.1:8000/`.

L’adresse publique est calculée au moment de la publication à partir du dépôt GitHub (`GITHUB_REPOSITORY`). Pour une construction locale avec une autre adresse :

```bash
export SITE_URL="https://<votre-nom>.github.io/<nom-du-depot>/"
export REPO_URL="https://github.com/<votre-nom>/<nom-du-depot>"
.venv/bin/mkdocs build --strict
```

Sans `SITE_URL`, la construction locale utilise `http://127.0.0.1:8000/`.
