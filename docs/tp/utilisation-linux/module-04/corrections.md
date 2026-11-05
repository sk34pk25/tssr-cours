# Correction expliquée — TP01 — Fichiers et dossiers

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Se placer dans le répertoire de travail de son compte de laboratoire. Repérer le chemin avant de créer le fichier.

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
ls -d -- /etc/*.conf
```

Avec `-d`, la commande affiche chaque nom qui correspond au motif, même si ce nom désigne un répertoire.

## Activité 6 — Afficher les caractéristiques de /tmp lui-même, puis relever sa particularité.

```bash
ls -ld /tmp
```
L’option -d évite de lister son contenu. Observer notamment le t des permissions dans l’environnement présenté.

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Création | Indiquer le chemin courant, puis relever les attributs et le propriétaire de `MonPremierFichier`. |
| Motif et répertoire | Présenter les noms terminés en `.conf` et les attributs de `/tmp`. Relever la particularité des permissions réellement observées. |

## Points de lecture du support

!!! note "Lecture de la source"
    Les permissions, propriétaires et dates de la capture illustrent le serveur source : relever ceux du laboratoire courant.

!!! note "Lecture de la source"
    Le titre du module inclut les métacaractères, mais son TP propre concerne fichiers et dossiers ; le second TP est rattaché au module 06 d’après le titre écrit dans son document.

## Liens

- [Énoncé](enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-04-fichiers-dossiers-et-metacaracteres.md)
- [Tous les ateliers du module](index.md)
