# Correction expliquée — TP01 — Utilisation des systèmes

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Ouvrir Bash sur le système de laboratoire et préparer les répertoires d’exercice sous `$HOME`. Les permissions du compte peuvent limiter les résultats observés.

## Activité 1 — Lister tous les processus dont l’affichage se termine par d et enregistrer dans $HOME/process/daemons.txt.

```bash
mkdir -p "$HOME/process"
ps -e | grep 'd$' > "$HOME/process/daemons.txt"
cat "$HOME/process/daemons.txt"
```
Le motif filtre ici la fin des lignes de l’affichage ps du scénario.

## Activité 2 — Rechercher depuis / les fichiers .conf, sans quitter son système de fichiers, et afficher/enregistrer simultanément les chemins.

```bash
mkdir -p "$HOME/resultats"
find / -mount -type f -name '*.conf' 2>/dev/null |
    tee "$HOME/resultats/fichiers.conf"
```
Comparer les chemins affichés et ceux enregistrés.

## Activité 3 — Mesurer le temps exact de cette exécution.

Relancer la recherche en l’encadrant par time :

```bash
time find / -mount -type f -name '*.conf' 2>/dev/null |
    tee "$HOME/resultats/fichiers.conf"
```
Observer les informations de temps ; une exécution non mesurée ne peut pas être chronométrée rétroactivement avec cette seule commande.

## Activité 4 — En une commande, enregistrer uniquement le nombre de fichiers trouvés sans relire fichiers.conf.

```bash
find / -mount -type f -name '*.conf' 2>/dev/null |
    wc -l > "$HOME/resultats/compteur.txt"
cat "$HOME/resultats/compteur.txt"
```
La commande principale effectue la recherche et le comptage ; cat est le contrôle séparé du livrable.

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Sorties | Vérifier `daemons.txt` et la correspondance entre l’affichage de la recherche et `fichiers.conf`. |
| Chronométrage | Relever le temps mesuré pendant la commande demandée. |
| Compteur | Vérifier que `compteur.txt` ne contient que le nombre produit par la recherche, sans relecture de `fichiers.conf`. |

## Liens

- [Énoncé](tp1-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Tous les ateliers du module](index.md)
