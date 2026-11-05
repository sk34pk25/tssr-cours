# Correction expliquée — TP01 — Fichiers et dossiers

Les graphies exactes du document sont conservées dans l’onglet Original. Les exemples suivants harmonisent les noms et expliquent les écarts pour pouvoir réaliser le scénario.

## Activité 1 — Indiquer sa position dans l’arborescence.

```bash
pwd
```

## Activité 2 — Observer la présence de fichiers et de répertoires.

```bash
ls -A
```

## Activité 3 — Créer un fichier vide appelé MonPremierFichier.

```bash
touch MonPremierFichier
```

## Activité 4 — Afficher les permissions et le propriétaire de MonPremierFichier.

```bash
ls -l MonPremierFichier
```
Identifier les champs, sans recopier les valeurs de la capture comme des valeurs attendues.

## Activité 5 — Afficher les noms terminés par .conf dans /etc.

```bash
ls /etc/*.conf
```

## Activité 6 — Afficher les caractéristiques de /tmp lui-même, puis relever sa particularité.

```bash
ls -ld /tmp
```
L’option -d évite de lister son contenu. Observer notamment le t des permissions dans l’environnement présenté.

## Points de lecture du support

!!! note "Lecture de la source"
    Les permissions, propriétaires et dates de la capture illustrent le serveur source : relever ceux du laboratoire courant.

!!! note "Lecture de la source"
    Le titre du module inclut les métacaractères, mais son TP propre concerne fichiers et dossiers ; le second TP est rattaché au module06 d’après le titre écrit dans son document.

- [Énoncé](enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres.md)
- [Tous les ateliers du module](index.md)
