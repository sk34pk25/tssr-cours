# Correction expliquée — TP01 — Recherches et regex

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Utiliser le fichier `Edition` du laboratoire et effectuer les copies dans le répertoire personnel du compte d’exercice.

## Activité 1 — Rechercher les lignes contenant Dupont dans Edition.

```bash
grep Dupont Edition
```

## Activité 2 — Rechercher dupont quelle que soit la casse.

```bash
grep -i dupont Edition
```

## Activité 3 — Afficher toutes les lignes non vides.

```bash
grep -v '^$' Edition
```

## Activité 4 — Lister les fichiers contenant localhost directement dans /etc, sans sous-répertoires.

```bash
grep -sl localhost /etc/*
```
Les noms du résultat dépendent des fichiers lisibles du système.

## Activité 5 — Rechercher les fichiers standards commençant par ho à partir de /etc.

```bash
find /etc -type f -name 'ho*'
```

## Activité 6 — Rechercher tous les répertoires depuis le répertoire personnel.

```bash
find "$HOME" -type d
```

## Activité 7 — Trouver les fichiers standards de son répertoire personnel terminés par txt et en faire une copie .save.

```bash
find "$HOME" -type f -name '*txt' -exec cp {} {}.save \;
```
Vérifier la présence des copies et le maintien des originaux. Une copie nom.txt.save ne se termine plus par txt.

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Texte | Comparer les résultats des recherches avec et sans distinction de casse, puis observer l’effet du filtre sur les lignes vides. |
| Parcours | Distinguer les résultats directs sous `/etc` du parcours récursif. Vérifier les répertoires affichés depuis `$HOME`. |
| Copies | Associer chaque copie `.save` à un fichier source qui existe toujours. |

## Points de lecture du support

!!! note "Lecture de la source"
    L’énoncé demande des fichiers directement dans /etc : les exemples de glob et grep ne sont pas récursifs ; find est employé pour les consignes qui demandent un parcours.

## Liens

- [Énoncé](tp1-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-06-recherches-et-expressions-regulieres.md)
- [Tous les ateliers du module](index.md)
