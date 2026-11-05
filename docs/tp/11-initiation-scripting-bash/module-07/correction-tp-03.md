# Correction — TP 03 — Boucle while read

L’exercice lit `/etc/passwd` et affiche le premier champ, le nom, ainsi que le troisième, l’UID. Le séparateur est le deux-points. L’original emploie `tr -s`, lit `login` mais affiche `$id`, omet un guillemet et espace incorrectement la substitution de processus. Avec trois variables, la troisième reçoit aussi le reste des champs.

## Variante pédagogique de script_M7TP3.sh

```bash
#!/bin/bash
source_passwd=/etc/passwd
if [[ ! -r $source_passwd ]]; then
    printf 'Fichier illisible : %s\n' "$source_passwd" >&2
    exit 1
fi
while IFS=: read -r login passe uid gid commentaire home shell; do
    printf '%s\n' '-------------------------'
    printf 'Identifiant : %s\nUID : %s\n' "$login" "$uid"
done < "$source_passwd"
```

Le champ `x` est un marqueur habituel pour des informations de mot de passe conservées ailleurs. Les espaces des commentaires et les champs vides ne décalent pas l’UID. Contrôlez que `root` a l’UID `0` dans le scénario et que chaque ligne produit un seul couple. La liste exacte dépend du système.

[Revenir aux TP du module](index.md)
