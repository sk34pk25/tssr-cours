# Module 07 — Utilisation de Vi

**Séquence :** Utilisation d’une distribution GNU/Linux  
**Sources originales (A) :** TP TSSR « Utilisation de Vi », énoncé et correction.
**Contenu pédagogique du portail (B) :** reformulation et structuration des sources TSSR.

## Objectifs

- Ouvrir un fichier texte avec `vi`.
- Différencier mode commande et mode insertion.
- Rechercher, modifier, enregistrer et quitter de façon contrôlée.

## Un éditeur modal

`vi` démarre en mode commande : les touches sont alors des commandes de navigation ou de modification. La touche `i` passe en insertion ; `Échap` revient au mode commande. Cette distinction explique la plupart des difficultés de prise en main : si une touche produit un résultat inattendu, vérifier le mode avant de recommencer.

```bash
vi Edition
```

## Commandes de base

| Action | Commande en mode commande |
|---|---|
| Passer en insertion | `i` |
| Revenir en commande | `Échap` |
| Rechercher | `/texte` puis Entrée |
| Aller à l’occurrence suivante | `n` |
| Enregistrer | `:w` |
| Quitter | `:q` |
| Enregistrer et quitter | `:wq` |
| Quitter sans enregistrer | `:q!` |

Le TP illustre la recherche d’une occurrence avec `/Dupont Jean`, puis la correction du texte. Effectuez la recherche, vérifiez la bonne occurrence et modifiez seulement la portion concernée.

## Méthode de modification

1. Ouvrir le fichier avec `vi nom-fichier`.
2. Rechercher la chaîne cible avec `/`.
3. Contrôler le contexte de la ligne trouvée.
4. Passer en insertion avec `i`, effectuer la correction, puis appuyer sur `Échap`.
5. Enregistrer avec `:w`, relire la zone modifiée et quitter avec `:q`.

## Points d’attention

- `:q!` abandonne les changements : ne l’utilisez que si l’abandon est volontaire.
- Une recherche ne modifie rien ; elle permet précisément de confirmer l’emplacement avant l’édition.
- Sur un fichier important, créer une copie avant une modification de TP.

## À retenir

Dans `vi`, la précision vient de la séparation des modes : chercher en mode commande, modifier en mode insertion, revenir en commande et enregistrer après contrôle.

## Vérification des acquis

1. Quelle touche permet de revenir au mode commande ?
2. Quelle commande recherche `Dupont Jean` ?
3. Quelle commande enregistre et quitte ?

??? success "Éléments de réponse"
    1. `Échap`.
    2. `/Dupont Jean` puis Entrée.
    3. `:wq`.

## Voir aussi

- [Présentation de la séquence](index.md)
- [Fiche de révision du module](../../revision/utilisation-linux/module-07-utilisation-de-vi.md)
