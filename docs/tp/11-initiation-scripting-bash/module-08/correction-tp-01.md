# Correction — TP 01 — Fonctions

Le PDF décrit un script principal et un fichier de fonctions. Les variantes ci-dessous reprennent les quatre actions du menu et protègent les noms contenant des espaces. Préparez deux fichiers texte de test terminés par `.sh` dans un répertoire de laboratoire, puis placez-y les deux fichiers à créer. L’action D supprime les sauvegardes `.save` dans ce répertoire.

## Fichier fonctions.fct

```bash
sauvegarde() {
    local fichier statut=0
    for fichier in ./*.sh; do
        [[ -f $fichier ]] || continue
        if cp -p -- "$fichier" "$fichier.save"; then
            printf 'Sauvegardé : %s\n' "$fichier"
        else
            statut=1
        fi
    done
    return "$statut"
}

suppression() {
    local fichier statut=0
    for fichier in ./*.save; do
        [[ -f $fichier ]] || continue
        if rm -- "$fichier"; then
            printf 'Supprimé : %s\n' "$fichier"
        else
            statut=1
        fi
    done
    return "$statut"
}

listing() {
    local fichier
    for fichier in ./*.sh; do
        [[ -f $fichier ]] || continue
        if [[ -f $fichier.save ]]; then
            printf '\033[32m%s — sauvegardé\033[0m\n' "$fichier"
        else
            printf '\033[31m%s — sans sauvegarde\033[0m\n' "$fichier"
        fi
    done
}
```

## Fichier script_M8TP1.sh

Le script principal charge les fonctions depuis le répertoire du TP. `nullglob` évite qu’un motif sans correspondance devienne un nom de fichier littéral.

```bash
#!/bin/bash
if [[ ! -r ./fonctions.fct ]]; then
    printf '%s\n' "fonctions.fct doit être lisible dans le dossier courant." >&2
    exit 1
fi
. ./fonctions.fct || exit 1
shopt -s nullglob

while true; do
    printf '%s\n' 'S - Sauvegarder' 'D - Supprimer les sauvegardes' \
        'L - Lister les fichiers' 'Q - Quitter'
    read -r -p "Choisissez une action : " choix || exit 1
    case "$choix" in
        S|s) sauvegarde || printf '%s\n' "Une copie a échoué." >&2 ;;
        D|d) suppression || printf '%s\n' "Une suppression a échoué." >&2 ;;
        L|l) listing ;;
        Q|q) exit 0 ;;
        *) printf '%s\n' "Choix invalide." >&2 ;;
    esac
done
```

| Étape dans le laboratoire | Résultat prévu |
| --- | --- |
| L avant sauvegarde | Les scripts sont indiqués sans sauvegarde |
| S, puis L | Une copie `.sh.save` par script et état sauvegardé |
| D, puis L | Les copies disparaissent et les scripts restent |
| Q | Retour au shell avec le statut zéro |

Le document source utilise `for i in $(ls *.sh)` et `rm -f *.save`. Cette variante itère sur les résultats du motif Bash et sépare le message d’erreur des données affichées.

[Revenir au TP 01](index.md)
