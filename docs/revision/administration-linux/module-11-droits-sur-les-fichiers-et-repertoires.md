# Fiche de révision — Module 11 — Droits sur les fichiers et répertoires

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

| Droit | Valeur | Sur un fichier | Sur un répertoire |
|---|---|---|---|
| `r` | 4 | Lire son contenu | Lister les noms des entrées |
| `w` | 2 | Modifier son contenu | Modifier des entrées, avec les droits de parcours nécessaires |
| `x` | 1 | Autoriser l’exécution selon le type de fichier | Traverser le répertoire et accéder à un nom connu |

## Tableau de mémorisation

| Droit | Valeur | Sur un fichier | Sur un répertoire |
|---|---|---|---|
| `r` | 4 | Lire son contenu | Lister les noms des entrées |
| `w` | 2 | Modifier son contenu | Modifier des entrées, avec les droits de parcours nécessaires |
| `x` | 1 | Autoriser l’exécution selon le type de fichier | Traverser le répertoire et accéder à un nom connu |

## Se tester sans regarder


1. Que produit umask 0007 pour un fichier demandé en 0666 ?
2. SetGID donne-t-il à lui seul le droit d’écriture au groupe sur un nouveau fichier ?
3. Qui peut supprimer un nom dans un répertoire sticky, sous réserve des autres droits ?

??? success "Réponses"
    1. 0660.
    2. Non ; il règle le groupe hérité, pas tous les bits d’accès.
    3. Le propriétaire du fichier, le propriétaire du répertoire ou un utilisateur privilégié.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md) · [TP du parcours](../../tp/administration-linux/index.md).
