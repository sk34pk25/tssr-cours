# Module 06 — Recherches et expressions régulières

**Séquence :** Utilisation d’une distribution GNU/Linux  
**Sources originales (A) :** TP TSSR « Recherches et regex », énoncé et correction.
**Contenu pédagogique du portail (B) :** reformulation et structuration des sources TSSR.

## Objectifs

- Rechercher du texte avec `grep`.
- Distinguer une recherche sensible à la casse d’une recherche insensible à la casse.
- Utiliser des expressions régulières simples et vérifier les lignes trouvées.

## Rechercher avec `grep`

`grep` affiche les lignes contenant un motif. Dans le TP, `grep Dupont Edition` retrouve les lignes qui contiennent exactement cette chaîne ; `grep -i dupont Edition` ignore la différence entre majuscules et minuscules.

```bash
grep Dupont Edition
grep -i dupont Edition
grep -n Dupont Edition
```

L’option `-n` ajoute le numéro de ligne, utile pour contrôler un résultat ou revenir dans un éditeur. Une absence de sortie ne prouve pas qu’un fichier est vide : elle peut simplement signifier qu’aucune ligne ne correspond au motif.

## Expressions régulières : décrire un motif

Une expression régulière décrit un ensemble de chaînes. Commencez par un motif simple, puis rendez-le plus précis progressivement.

| Motif | Intention |
|---|---|
| `^Dupont` | ligne commençant par `Dupont` |
| `Dupont$` | ligne se terminant par `Dupont` |
| `Du.ont` | un caractère quelconque entre `Du` et `ont` |
| `[0-9]` | un chiffre |
| `^$` | ligne vide |

Les caractères spéciaux peuvent nécessiter un échappement ou des guillemets selon le shell. Employer des guillemets simples autour du motif évite que le shell interprète certains caractères avant `grep`.

## Procédure de recherche fiable

1. Identifier le fichier cible avec un chemin clair.
2. Exécuter une recherche littérale courte.
3. Ajouter `-n` pour situer les résultats.
4. Introduire une expression régulière, une contrainte à la fois.
5. Lire les lignes retournées avant de décider d’une modification.

## Points d’attention

- Une expression trop large peut donner des faux positifs ; une expression trop stricte peut masquer un résultat attendu.
- `grep -i` est adapté si la casse n’a pas de sens dans le besoin ; ne l’ajoutez pas automatiquement.
- Les motifs transmis entre guillemets simples sont plus prévisibles pour les caractères `*`, `?`, `$` et `[]`.

## À retenir

La recherche est un contrôle, pas seulement une commande. Un bon motif exprime exactement ce que l’on cherche et le résultat est relu avant toute action suivante.

## Vérification des acquis

1. Quelle option de `grep` ignore la casse ?
2. Que signifie `^` au début d’une expression régulière ?
3. Pourquoi ajouter `-n` lors d’une recherche ?

??? success "Éléments de réponse"
    1. `-i`.
    2. Le début de ligne.
    3. Pour connaître la position des lignes trouvées.

## Voir aussi

- [Présentation de la séquence](index.md)
- [Fiche de révision du module](../../revision/utilisation-linux/module-06-recherches-et-expressions-regulieres.md)
