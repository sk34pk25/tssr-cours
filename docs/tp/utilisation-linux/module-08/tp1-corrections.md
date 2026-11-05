# Correction expliquée — TP01 — Utilisation des systèmes

Les graphies exactes du document sont conservées dans l’onglet Original. Les exemples suivants harmonisent les noms et expliquent les écarts pour pouvoir réaliser le scénario.

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

## Points de lecture du support

!!! note "Lecture de la source"
    Le document Alias écrit parfois `find / mount`, sans le tiret de -mount, et un tiret typographique dans ps –e : les exemples utilisables rétablissent les options ASCII.

!!! note "Lecture de la source"
    Deux variantes de comptage de la correction relisent fichiers.conf, contrairement à la consigne. Seule la variante find | wc -l respecte la demande « sans utiliser ce fichier ».

!!! note "Lecture de la source"
    Les sources alternent monnom et monom. La pratique emploie monnom de façon cohérente dans l’affectation, l’export et les vérifications.

!!! note "Lecture de la source"
    La source ajoute /$HOME/scripts au PATH et utilise echo avec expansion immédiate pour .bashrc. L’aide utilise $HOME/scripts et une ligne de configuration dont les variables restent littérales.

!!! note "Lecture de la source"
    Les en-têtes « Archivage et compression » du TP Variables et « Titre exact du cours complet » du TP Alias sont des résidus de gabarit, pas de nouvelles matières.

- [Énoncé](tp1-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Tous les ateliers du module](index.md)
