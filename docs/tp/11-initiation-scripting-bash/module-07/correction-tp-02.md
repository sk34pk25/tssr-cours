# Correction — TP 02 — Boucle for

La correction source lit `ext.txt` et compte les mots ou les lignes de sorties de `ls`. Les espaces des noms et les répertoires faussent ce comptage. L’énoncé donne une extension par ligne. Pour l’essai, créez localement `ext.txt`, par exemple avec `sh`, `txt` et `docx` sur trois lignes. Ce fichier d’essai est un complément pédagogique.

## Variante pédagogique de script_M7TP2.sh

Le script visite les fichiers ordinaires visibles du premier niveau, comme dans le périmètre implicite de la solution source. Il garde une boucle `for` sur les chemins. Il affiche le total de fichiers, puis les compteurs des seules extensions demandées. L’exemple accepte les extensions avec ou sans un point initial, dont la comparaison est sensible à la casse.

```bash
#!/bin/bash
if [[ $# -ne 1 || ! -d $1 || ! -r $1 || ! -x $1 ]]; then
    printf 'Usage : %s repertoire_lisible\n' "$0" >&2
    exit 1
fi
chemin=$1
extfile=./ext.txt
if [[ ! -f $extfile || ! -r $extfile ]]; then
    printf '%s\n' "Préparez un fichier ext.txt lisible dans le dossier de lancement." >&2
    exit 2
fi

shopt -s nullglob
fichiers=()
for entree in "$chemin"/*; do
    [[ -f $entree ]] && fichiers+=("$entree")
done

printf 'Nombre total de fichiers dans %s : %s\n' "$chemin" "${#fichiers[@]}"
while IFS= read -r extension || [[ -n $extension ]]; do
    extension=${extension#.}
    [[ -n $extension ]] || continue
    compte=0
    for fichier in "${fichiers[@]}"; do
        nom=${fichier##*/}
        if [[ $nom == *."$extension" ]]; then
            compte=$((compte + 1))
        fi
    done
    printf '.%s — %s fichier(s)\n' "$extension" "$compte"
done < "$extfile"
```

Pour retrouver la présentation du support, vérifiez que les compteurs de `.sh` et `.txt` concernent uniquement les fichiers correspondants. Une extension présente dans le fichier de configuration et absente du dossier affiche zéro dans cette variante. Testez un nom avec des espaces, un répertoire avec un point dans son nom et une extension absente de la liste.

[Revenir aux TP du module](index.md)
