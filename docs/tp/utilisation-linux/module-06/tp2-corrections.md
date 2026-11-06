# Correction expliquée — TP02 — Métacaractères

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Ouvrir un Bash de laboratoire et réserver l’arborescence `$HOME/Tp` à l’exercice. Identifier précisément `Sources` et `Divers` avant les opérations de suppression.

## Activité 1 — Afficher les noms de fichiers et répertoires commençant par a, b, c ou d directement dans /etc, sans lister leur contenu.

```bash
ls -d /etc/[a-d]*
```
-d conserve l’affichage des noms des répertoires eux-mêmes.

## Activité 2 — Créer en une seule commande l’arborescence bin et Tp sous $HOME, puis Bourne, KornShell, Divers et ses trois sous-répertoires.

Se placer dans le répertoire personnel, puis lancer la commande unique de création :

```bash
cd "$HOME"
mkdir -p bin Tp/{Bourne,KornShell,Divers/{Sources,lib,Executables}}
```

```text
$HOME
├── bin
└── Tp
    ├── Bourne
    ├── KornShell
    └── Divers
        ├── Sources
        ├── lib
        └── Executables
```

## Activité 3 — Se positionner dans Sources et créer un fichier dont le nom comporte un astérisque.

```bash
cd "$HOME/Tp/Divers/Sources"
touch 'fic*ier'
ls
```
Le nom attendu est littéralement fic*ier ; les guillemets ne font pas partie du nom.

## Activité 4 — Sans changer de répertoire, essayer de supprimer Sources avec rmdir et expliquer le résultat.

```bash
rmdir "$HOME/Tp/Divers/Sources"
```
Sources contient le fichier créé : rmdir ne supprime que les répertoires vides. La correction illustre ensuite rm -r, une action différente qui supprime son contenu.

## Activité 5 — Supprimer Divers avec rm.

Après l’observation précédente, revenir dans le répertoire personnel puis supprimer uniquement l’arborescence d’exercice :

```bash
cd "$HOME"
rm -r "$HOME/Tp/Divers"
```
La correction emploie un chemin relatif ../../Divers depuis son contexte de départ ; le chemin explicite évite la dépendance à un répertoire courant supprimé.

## Activité 6 — Depuis le répertoire personnel, lister en détail les fichiers directement dans /etc : extension .conf, six lettres, initiale consonne et lettre avant l’extension entre f et s.

Le document propose :

```bash
ls -ld /etc/[!aeiouyAEIOUY][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][f-s].conf
```

Pour imposer une consonne ASCII au premier caractère, au lieu de tout caractère non voyelle :

```bash
ls -ld /etc/[b-df-hj-np-tv-xzB-DF-HJ-NP-TV-XZ][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][f-s].conf
```
Le premier ensemble fournit une lettre, les quatre suivants quatre lettres, puis [f-s] la sixième ; .conf suit ces six caractères.

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Arborescence | Vérifier les répertoires créés et la présence de l’astérisque littéral dans le nom demandé. |
| Suppression | Expliquer le résultat de `rmdir`, puis vérifier la disparition de `Divers` dans l’arborescence d’exercice. |
| Sélection | Contrôler l’extension et les contraintes sur les six lettres de chaque nom retenu. |

## Points de lecture du support

!!! note "Lecture de la source"
    Le motif source `[!aeiouyAEIOUY]` exclut les voyelles, mais il n’impose pas que le premier caractère soit une lettre. Une variante stricte de consonnes est fournie pour respecter entièrement la consigne.

!!! note "Lecture de la source"
    La correction supprime Sources alors que le terminal y est positionné. Le chemin courant peut alors ne plus exister. Revenir dans $HOME avant la suppression finale de Divers rend la suite du TP lisible.

## Liens

- [Énoncé](tp2-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-06-recherches-et-expressions-regulieres.md)
- [Tous les ateliers du module](index.md)
