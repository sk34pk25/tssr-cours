# Correction — TP 01 — Enchaînements conditionnels

Le document source demande de créer un dossier, de créer `fic_M5TP1.txt`, d’écrire le texte puis d’afficher son contenu. Les messages relatifs au dossier et au fichier ont des couleurs différentes.

## Variante pédagogique de script_M5TP1.sh

L’exemple est à recopier dans un espace de travail réservé au TP. La redirection `>` remplace le contenu du fichier ciblé. `mkdir -p` accepte un dossier déjà présent, d’où le message « Dossier prêt ».

```bash
#!/bin/bash
fic=fic_M5TP1.txt
bleu=$'\033[34m'
vert=$'\033[32m'
noir=$'\033[0m'

printf '%s' "Veuillez saisir un nom de dossier à créer : "
IFS= read -r dossier || exit 1
if [[ -z $dossier ]]; then
    printf '%s\n' "Le nom du dossier est vide." >&2
    exit 1
fi

mkdir -p -- "$dossier" &&
    printf '%sDossier prêt : %s%s\n' "$bleu" "$dossier" "$noir" || exit 2

chemin="$dossier/$fic"
touch -- "$chemin" &&
    printf '%sFichier prêt : %s%s\n' "$vert" "$chemin" "$noir" || exit 3

printf '%s\n' "Introduction du fichier fic_M5TP1.txt" > "$chemin" &&
    cat -- "$chemin" || exit 4
```

Le support emploie `echo -e` et certains guillemets typographiques. Ici, les délimiteurs Bash sont ASCII et les valeurs saisies sont protégées. Contrôlez un nom simple, un nom avec des espaces, une saisie vide et un dossier déjà présent. Vérifiez que le texte affiché correspond au contenu écrit.

[Revenir au TP 01](index.md)
