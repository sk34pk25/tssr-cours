# Correction expliquée — TP02 — Les liens

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Se placer dans le répertoire de laboratoire où se trouve `Edition`. Le fichier et les nouveaux liens physiques doivent appartenir au même système de fichiers.

## Activité 1 — Créer un lien physique depuis Edition vers edition1.txt et vérifier la lecture.

```bash
ln Edition edition1.txt
cat edition1.txt
```

## Activité 2 — Créer un lien symbolique depuis edition1.txt vers /tmp/stagxx/edition2.txt, puis vérifier.

Depuis le répertoire personnel :

```bash
mkdir -p /tmp/stagxx
ln -s "$HOME/edition1.txt" /tmp/stagxx/edition2.txt
cat /tmp/stagxx/edition2.txt
```
Le chemin absolu de la cible évite qu’elle soit interprétée relativement au dossier /tmp/stagxx.

## Activité 3 — Créer un lien physique depuis edition1.txt vers edition3.txt.

```bash
ln edition1.txt edition3.txt
cat edition3.txt
```

## Activité 4 — Afficher les caractéristiques des quatre noms et mettre les différences en évidence.

```bash
ls -l Edition edition1.txt edition3.txt /tmp/stagxx/edition2.txt
ls -li Edition edition1.txt edition3.txt /tmp/stagxx/edition2.txt
```
La seconde ligne est un contrôle pédagogique des inodes ; les trois liens physiques partagent le même numéro.

## Activité 5 — Supprimer edition1.txt, puis tester les lectures via edition2.txt et edition3.txt.

```bash
rm edition1.txt
cat /tmp/stagxx/edition2.txt
cat edition3.txt
```
Le lien symbolique devient cassé et la lecture par edition3.txt reste possible, comme dans la correction.

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Avant suppression | Comparer les caractéristiques et le contenu des noms demandés. Noter le chemin porté par le lien symbolique. |
| Après suppression | Comparer les lectures de `edition2.txt` et `edition3.txt`. Expliquer le résultat avec le chemin et l’inode. |

## Points de lecture du support

!!! note "Lecture de la source"
    Le relevé des inodes avec ls -li est une aide de vérification ajoutée ; le document demande initialement les caractéristiques avec ls -l.

## Liens

- [Énoncé](tp2-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Tous les ateliers du module](index.md)
