# Correction expliquée — TP01 — Recherches et regex

Les graphies exactes du document sont conservées dans l’onglet Original. Les exemples suivants harmonisent les noms et expliquent les écarts pour pouvoir réaliser le scénario.

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

## Points de lecture du support

!!! note "Lecture de la source"
    Le motif source `[!aeiouyAEIOUY]` exclut les voyelles, mais il n’impose pas que le premier caractère soit une lettre. Une variante stricte de consonnes est fournie pour respecter entièrement la consigne.

!!! note "Lecture de la source"
    La correction supprime Sources alors que le terminal y est positionné. Le chemin courant peut alors ne plus exister. Revenir dans $HOME avant la suppression finale de Divers rend la suite du TP lisible.

!!! note "Lecture de la source"
    L’énoncé demande des fichiers directement dans /etc : les exemples de glob et grep ne sont pas récursifs ; find est employé pour les consignes qui demandent un parcours.

- [Énoncé](tp1-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres.md)
- [Tous les ateliers du module](index.md)
