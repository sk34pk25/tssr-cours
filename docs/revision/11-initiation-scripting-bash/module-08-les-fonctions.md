# Fiche de révision — Module 08 — Les fonctions

Déclarez la fonction avant l’appel. Ses paramètres positionnels reprennent ses propres arguments durant l’appel. Une affectation peut être visible dans le shell courant. `local` limite la portée de la variable à la fonction et à ses appels.

```bash
accueil() {
    [[ $# -eq 1 ]] || return 2
    local nom=$1
    printf 'Bonjour %s
' "$nom"
}

accueil "Sofia"
```

| Besoin | Forme |
| --- | --- |
| Transmettre une valeur textuelle | Écrire sur la sortie standard, par exemple avec `printf` |
| Terminer la fonction avec un statut | `return 2` |
| Charger un fichier de définitions | `source chemin` ou `. ./fonctions.fct` |
| Protéger un fichier au nom composé | Développer le chemin entre guillemets |

**TP 01.** Le menu boucle sur S pour sauvegarder, D pour supprimer les sauvegardes, L pour lister et Q pour quitter. Le fichier de fonctions contient les trois traitements. Le script principal charge ce fichier, affiche les choix et traite le retour des fonctions.

## Questions flash

1. Quelle différence entre `return` et `exit` dans une fonction ?
2. Quelle séquence valide sauvegarde et suppression ?

??? success "Réponses commentées"
    1. `return` revient à l’appelant avec un statut. `exit` termine le script ou le shell qui exécute la fonction.
    2. Lister, sauvegarder, relister, supprimer et relister. Les fichiers de départ restent présents après suppression des copies.

- [Cours](../../modules/11-initiation-scripting-bash/module-08-les-fonctions.md)
- [TP et correction](../../tp/11-initiation-scripting-bash/module-08/index.md)
