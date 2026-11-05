# Correction expliquée — TP03 — Redirections et Alias

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Ouvrir un Bash interactif de laboratoire. Savoir reproduire les quatre opérations du TP Utilisation des systèmes avant de définir les alias.

## Activités 1 à 4 — Refaire les opérations

Reprendre les quatre contrôles du [TP Utilisation des systèmes](tp1-corrections.md). Vérifier `daemons.txt` pour les processus, `fichiers.conf` et l’affichage pour la recherche, la mesure obtenue avec `time`, puis la valeur de `compteur.txt`.

## Activité 5 — Définir et vérifier les alias

```bash
mkdir -p "$HOME/process" "$HOME/resultats"
alias lister_daemons='ps -e | grep "d$" > "$HOME/process/daemons.txt"'
alias rechercher_conf='find / -mount -type f -name "*.conf" 2>/dev/null | tee "$HOME/resultats/fichiers.conf"'
alias compter_fichiers='find / -mount -type f -name "*.conf" 2>/dev/null | wc -l > "$HOME/resultats/compteur.txt"'

lister_daemons
rechercher_conf
time rechercher_conf
compter_fichiers
```
Les alias sont à définir puis à appeler dans le shell interactif, avec des validations distinctes. Vérifier le contenu des trois fichiers produits. Utiliser `type lister_daemons rechercher_conf compter_fichiers` pour vérifier les définitions avant de relancer chaque alias.

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Alias | Vérifier que les trois noms d’alias sont reconnus dans la session et qu’ils reproduisent les mêmes opérations. |
| Preuves | Relever les fichiers créés et la durée obtenue. Le compteur doit être produit par le flux de recherche. |

## Points de lecture du support

!!! note "Lecture de la source"
    Le document Alias écrit parfois `find / mount`, sans le tiret de -mount, et un tiret typographique dans ps –e : les exemples utilisables rétablissent les options ASCII.

!!! note "Lecture de la source"
    Deux variantes de comptage de la correction relisent fichiers.conf, contrairement à la consigne. Seule la variante find | wc -l respecte la demande « sans utiliser ce fichier ».

## Liens

- [Énoncé](tp3-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Tous les ateliers du module](index.md)
