# Correction expliquée — TP03 — Redirections et Alias

Les graphies exactes du document sont conservées dans l’onglet Original. Les exemples suivants harmonisent les noms et expliquent les écarts pour pouvoir réaliser le scénario.

## Activité 1 — Reproduire les quatre actions processus/recherche/durée/comptage avec leurs livrables, puis créer des alias correspondants.

Les quatre premières demandes sont identiques à celles du TP01 : conserver les chemins daemons.txt, fichiers.conf et compteur.txt, la limite -mount, le double affichage tee et le comptage sans relire le fichier.

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
Les alias sont à définir puis à appeler dans le shell interactif, avec des validations distinctes. Vérifier le contenu des trois fichiers produits. Les variantes cat fichiers.conf | wc -l et grep -c f$ sont montrées dans la correction mais ne satisfont pas l’interdiction de relire ce fichier.

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

- [Énoncé](tp3-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Tous les ateliers du module](index.md)
