# Module 08 — Mécanismes Linux et Bash avancé

**Séquence :** Utilisation d’une distribution GNU/Linux  
**Sources originales (A) :** TP TSSR sur l’utilisation du système, l’archivage et la compression, les alias/redirections et les variables.
**Contenu pédagogique du portail (B) :** reformulation et structuration des sources TSSR.

## Objectifs

- Employer les variables d’environnement utiles à une session shell.
- Distinguer redirection de sortie et redirection d’erreur.
- Comprendre le rôle d’un alias, d’une archive et d’une compression.

## Variables d’environnement

Une variable associe un nom à une valeur dans la session. Le TP utilise notamment `$HOME`, qui désigne le répertoire personnel, et `$PATH`, qui contient les chemins recherchés pour les exécutables.

```bash
echo "$HOME"
echo "$PATH"
ls "$HOME"
```

Les guillemets autour d’une variable protègent sa valeur si elle contient des espaces. Une variable définie dans un shell n’est pas automatiquement disponible dans toutes les nouvelles sessions : distinguer variable de session et configuration persistante.

## Redirections et alias

Le shell peut rediriger les flux standards. `>` écrit la sortie standard dans un fichier en le remplaçant ; `>>` ajoute à la fin ; `2>` redirige les messages d’erreur. Un alias donne un nom court à une commande ou à une combinaison d’options, mais doit rester lisible pour ne pas cacher une action sensible.

```bash
commande > resultat.txt
commande 2> erreurs.txt
alias ll='ls -la'
```

## Archivage et compression

Une archive rassemble plusieurs objets, tandis qu’une compression réduit la taille des données. Ces deux opérations sont souvent associées mais sont conceptuellement distinctes. Avant une extraction, inspecter l’archive et extraire dans un répertoire choisi plutôt que dans un emplacement non contrôlé.

## Méthode de travail

1. Afficher la valeur de la variable avant de l’employer.
2. Tester une redirection sur un fichier de laboratoire.
3. Donner à l’archive un nom explicite et contrôler les fichiers qu’elle contient.
4. Vérifier la destination après extraction.
5. Documenter temporairement les alias utilisés pendant le TP.

## Points d’attention

- `>` peut remplacer un fichier existant ; le vérifier avant l’exécution.
- `$PATH` influence la commande réellement lancée : ne pas modifier cette variable sans savoir quelles valeurs sont attendues.
- L’extraction d’une archive doit tenir compte de ses chemins internes.

## À retenir

Les mécanismes du shell automatisent beaucoup d’actions, mais ils rendent le contrôle du contexte encore plus important : valeurs de variables, fichiers de sortie et contenu des archives doivent être vérifiés.

## Vérification des acquis

1. Quelle variable représente le répertoire personnel ?
2. Quelle redirection ajoute à un fichier sans le remplacer ?
3. Quelle différence faut-il faire entre archive et compression ?

??? success "Éléments de réponse"
    1. `$HOME`.
    2. `>>`.
    3. L’archive regroupe des objets ; la compression réduit la taille des données.

## Voir aussi

- [Présentation de la séquence](index.md)
- [Fiche de révision du module](../../revision/utilisation-linux/module-08-mecanismes-linux-et-bash-avance.md)
