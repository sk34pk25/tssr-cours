# Module 04 — Fichiers, dossiers et métacaractères

**Séquence :** Utilisation d’une distribution GNU/Linux  
**Sources originales (A) :** TP TSSR « Fichiers et dossiers » et « Métacaractères », énoncés et corrections.
**Contenu pédagogique du portail (B) :** reformulation et structuration des sources TSSR.

## Objectifs

- Créer, nommer, copier, déplacer et supprimer des fichiers ou répertoires.
- Lire les droits et le type d’un objet dans une liste détaillée.
- Employer les métacaractères pour sélectionner plusieurs noms sans les confondre avec des fichiers réels.

## Notions essentielles

Sous Linux, répertoires et fichiers sont des objets de l’arborescence. `pwd` donne le point de départ ; `ls -l` affiche notamment le type, les permissions, le propriétaire et le groupe. Avant une action de modification, lister le contenu avec `ls -la` et employer des chemins explicites.

```bash
touch MonPremierFichier
mkdir essais
cp MonPremierFichier essais/
mv essais/MonPremierFichier essais/fichier-renomme
```

`touch` crée un fichier vide s’il n’existe pas. `mkdir` crée un répertoire. `cp` copie ; `mv` déplace ou renomme selon ses arguments.

## Métacaractères : sélectionner sans réécrire

Les métacaractères sont interprétés par le shell avant le lancement de la commande. Ils servent à développer une sélection de noms.

| Expression | Sens | Exemple |
|---|---|---|
| `*` | toute suite de caractères | `ls *.txt` |
| `?` | un seul caractère | `ls note?.txt` |
| `[abc]` | un caractère parmi une liste | `ls rapport[12].pdf` |
| `[a-z]` | un caractère dans un intervalle | `ls fichier[1-9]` |

Vérifiez d’abord la sélection avec `ls` avant de l’utiliser avec `rm`, `mv` ou `cp`. Un motif qui ne correspond à rien peut être transmis tel quel selon la configuration du shell : lire le résultat et ne pas supposer qu’une sélection a eu lieu.

## Procédure sûre de rangement

1. Afficher le répertoire courant avec `pwd`.
2. Lister précisément les objets avec `ls -la`.
3. Créer le répertoire de destination avec `mkdir` si nécessaire.
4. Tester le motif avec `ls motif`.
5. Copier ou déplacer avec des chemins explicites.
6. Relister la destination pour contrôler le résultat.

## Points d’attention

- `rm` ne place pas un fichier dans une corbeille : une suppression mérite une vérification préalable.
- Un espace dans un nom impose des guillemets ou un échappement ; les guillemets empêchent aussi l’expansion des métacaractères.
- Ne confondez pas les permissions affichées par `ls -l` avec la propriété : ce sont deux informations distinctes.

## À retenir

Les commandes de gestion de fichiers deviennent fiables lorsqu’elles sont précédées d’un contrôle du contexte et d’un test de sélection. Les métacaractères font gagner du temps, mais élargissent rapidement une action.

## Vérification des acquis

1. Quelle commande crée un fichier vide ?
2. Que représente `?` dans un motif de shell ?
3. Quelle vérification réaliser avant d’utiliser un motif avec `rm` ?

??? success "Éléments de réponse"
    1. `touch`.
    2. Un unique caractère.
    3. Tester le motif avec une commande non destructive, par exemple `ls`.

## Voir aussi

- [Présentation de la séquence](index.md)
- [Fiche de révision du module](../../revision/utilisation-linux/module-04-fichiers-dossiers-et-metacaracteres.md)
