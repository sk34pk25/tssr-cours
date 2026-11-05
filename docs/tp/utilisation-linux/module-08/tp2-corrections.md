# Correction expliquée — TP02 — Archivage et compression

Les graphies exactes du document sont conservées dans l’onglet Original. Les exemples suivants harmonisent les noms et expliquent les écarts pour pouvoir réaliser le scénario.

## Activité 1 — Archiver son répertoire personnel dans /tmp sous son login et noter la taille.

```bash
tar -cvf "/tmp/$LOGNAME.tar" "$HOME"
ls -lh "/tmp/$LOGNAME.tar"
```
Le chemin de sortie est hors du répertoire archivé.

## Activité 2 — Créer l’archive compressée avec gzip en une seule instruction.

```bash
tar -czvf "/tmp/$LOGNAME.tar.gz" "$HOME"
ls -lh "/tmp/$LOGNAME.tar.gz"
```

## Activité 3 — Répéter avec bzip2.

```bash
tar -cjvf "/tmp/$LOGNAME.tar.bz2" "$HOME"
ls -lh "/tmp/$LOGNAME.tar.bz2"
```

## Activité 4 — Comparer les trois tailles et identifier la plus petite de son essai.

```bash
ls -l /tmp/"$LOGNAME".tar*
```
Relever les octets ou les unités cohérentes avant de conclure.

## Activité 5 — Créer Restaurations dans son répertoire personnel et y restaurer en une instruction d’extraction.

```bash
mkdir -p "$HOME/Restaurations"
tar -xzvf "/tmp/$LOGNAME.tar.gz" -C "$HOME/Restaurations"
```
Inspecter les chemins extraits : l’archive de $HOME peut contenir le préfixe home/login sous Restaurations.

## Activité 6 — Créer une nouvelle sauvegarde non compressée en excluant Restaurations.

```bash
tar -cvf "/tmp/$LOGNAME-v2.tar" --exclude=Restaurations "$HOME"
tar -tf "/tmp/$LOGNAME-v2.tar"
```
La seconde commande vérifie l’absence du répertoire exclu.

## Activité 7 — Créer un fichier vide puis mettre à jour l’archive et vérifier sa présence.

```bash
touch "$HOME/new_fichier.txt"
tar -uvf "/tmp/$LOGNAME-v2.tar" "$HOME/new_fichier.txt"
tar -tf "/tmp/$LOGNAME-v2.tar"
```
L’opération de mise à jour concerne l’archive non compressée v2, comme dans le document.

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

- [Énoncé](tp2-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Tous les ateliers du module](index.md)
