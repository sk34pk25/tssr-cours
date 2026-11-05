# Correction expliquée — TP02 — Archivage et compression

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Utiliser le répertoire personnel du compte de laboratoire. Vérifier l’espace disponible dans `/tmp` et préparer `Restaurations` dans le cadre du TP.

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

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Archives | Comparer les tailles mesurées des trois formats, puis vérifier les chemins effectivement restaurés. |
| Exclusion et mise à jour | Contrôler les membres de la seconde archive non compressée. Elle doit exclure `Restaurations` et inclure le nouveau fichier après mise à jour. |

## Points de lecture du support

!!! note "Lecture de l’archive"
    Vérifier les membres avec `tar -tf` avant et après restauration. Les tailles dépendent du contenu du compte de laboratoire.

## Liens

- [Énoncé](tp2-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Tous les ateliers du module](index.md)
