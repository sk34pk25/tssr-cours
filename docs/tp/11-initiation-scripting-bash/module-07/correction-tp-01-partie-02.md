# Correction — TP 01, partie 2 — Années bissextiles

Le script fourni reçoit deux années et examine chaque mois de février avec `cal`, jusqu’à la borne finale incluse. Il compte les années où il trouve le 29. Le document affiche un nom de fichier de module différent dans le message d’usage. La version pédagogique indique le nom utilisé lors du lancement et valide la plage avant le parcours.

## Variante pédagogique de script_M7TP1.sh

La règle grégorienne est la divisibilité par 4, sauf un multiple de 100 qui doit aussi être divisible par 400. Cette version conserve `until` et le compteur, puis applique la règle directement. Le test de l’original permet en parallèle d’étudier le format de `cal` demandé par l’énoncé.

```bash
#!/bin/bash
if [[ $# -ne 2 || $1 != [1-9][0-9][0-9][0-9] || $2 != [1-9][0-9][0-9][0-9] ]]; then
    printf 'Usage : %s annee_debut annee_fin\n' "$0" >&2
    exit 3
fi
anneecourante=$1
anneefin=$2
if (( anneecourante > anneefin )); then
    printf '%s\n' "La borne finale précède la borne initiale." >&2
    exit 3
fi

nbannees=0
annees=()
until (( anneecourante > anneefin )); do
    if (( anneecourante % 4 == 0 &&
          (anneecourante % 100 != 0 || anneecourante % 400 == 0) )); then
        annees+=("$anneecourante")
        nbannees=$((nbannees + 1))
    fi
    anneecourante=$((anneecourante + 1))
done

printf 'Années bissextiles : %s\n' "$nbannees"
if (( nbannees > 0 )); then
    printf 'Année(s) : %s\n' "${annees[*]}"
fi
```

| Plage | Résultat prévu |
| --- | --- |
| `2026 2029` | 2028 |
| `1900 1900` | Aucune |
| `2000 2000` | 2000 |
| `2029 2026` | Erreur de plage |

[Revenir aux TP du module](index.md)
