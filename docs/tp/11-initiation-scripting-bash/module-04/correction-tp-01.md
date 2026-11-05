# Correction — TP 01 — Les variables d’environnement

`HISTFILE` désigne le fichier d’historique et `PATH` contient les répertoires de recherche des commandes. Le document source les repère avec des filtres sur `set`. Pour confirmer une variable précise, affichez sa valeur directement.

```bash
printf 'HISTFILE=%s\nPATH=%s\n' "$HISTFILE" "$PATH"
```

## Variante pédagogique de script_M4TP1.sh

Cette correction conserve la liste par extension et les trois résultats attendus. Utilisez des fichiers texte du laboratoire pour le comptage et les extraits. Les fichiers `.odt` ou `.docx` sont des conteneurs dont la lecture brute n’affiche pas leurs paragraphes.

```bash
#!/bin/bash
rep=$PWD
extension=txt
shopt -s nullglob
fichiers=(./*."$extension")
printf 'Fichiers .%s dans %s\n' "$extension" "$rep"
if (( ${#fichiers[@]} == 0 )); then
    printf '%s\n' "Aucune correspondance."
else
    ls -ld -- "${fichiers[@]}"
fi

printf '%s' "Fichier texte à examiner : "
IFS= read -r fic || exit 1
if [[ ! -f $fic || ! -r $fic ]]; then
    printf 'Fichier ordinaire illisible ou absent : %s\n' "$fic" >&2
    exit 2
fi

nblign=$(wc -l < "$fic") || exit 3
printf 'Nombre de fins de ligne : %s\n' "$nblign"
printf '%s\n' 'Deux premières lignes'
head -n 2 -- "$fic" || exit 3
printf '%s\n' 'Deux dernières lignes'
tail -n 2 -- "$fic" || exit 3
```

Dans l’original, `cat $fic | wc -l`, `head` et `tail` apparaissent dans des pipelines analogues. Les chemins cités et la redirection directe prennent en charge les noms comportant des espaces. Vérifiez un fichier vide, un fichier avec moins de deux lignes et un chemin inexistant.

[Revenir au TP 01](index.md)
