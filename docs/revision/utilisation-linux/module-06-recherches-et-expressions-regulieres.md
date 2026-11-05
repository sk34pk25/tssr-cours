# Fiche de révision — Module 06 — Recherches et expressions régulières

Choisir une recherche sur le contenu, un motif de noms ou un parcours d’arborescence.

## Gestes à retenir

| Besoin | Repère |
|---|---|
| Recherche sensible / insensible | grep Dupont Edition ; grep -i dupont Edition |
| Exclure les lignes vides | grep -v '^$' Edition |
| Noms de fichiers contenant un texte | grep -sl localhost /etc/* |
| Fichiers standards et noms | find /etc -type f -name 'ho*' |
| Copies .save | find "$HOME" -type f -name '*txt' -exec cp {} {}.save \; |
| Nom avec astérisque | touch 'fic*ier' |
| Répertoire vide / arborescence | rmdir ne retire qu’un répertoire vide ; rm -r retire le contenu |

## Contrôles à savoir réaliser

| Point de contrôle | Vérification |
| --- | --- |
| Recherche de lignes | Tester une recherche sensible puis insensible à la casse dans `Edition`. `^$` désigne une ligne de longueur nulle. Une ligne qui ne contient que des espaces peut rester dans le résultat. |
| Motifs de noms | Comparer le glob développé par Bash aux motifs remis à `find`. Protéger le motif de `-name` et citer l’astérisque quand il fait partie du nom créé. |
| Copie et suppression | Vérifier les originaux et les copies `.save`. Contrôler le chemin de `Sources` et de `Divers` avant toute suppression dans l’arborescence de laboratoire. |

## Pièges du support

- Le motif source `[!aeiouyAEIOUY]` exclut les voyelles, mais il n’impose pas que le premier caractère soit une lettre. Une variante stricte de consonnes est fournie pour respecter entièrement la consigne.
- La correction supprime Sources alors que le terminal y est positionné. Le chemin courant peut alors ne plus exister. Revenir dans $HOME avant la suppression finale de Divers rend la suite du TP lisible.
- L’énoncé demande des fichiers directement dans /etc : les exemples de glob et grep ne sont pas récursifs ; find est employé pour les consignes qui demandent un parcours.

## Retenir puis vérifier

**Le motif de Bash sélectionne des noms, l’expression de `grep` sélectionne du contenu et `find` parcourt des entrées selon des critères.**

**1. Pourquoi citer `'ho*'` avec `find -name` ?**

??? success "Réponse expliquée"
    Pour confier le motif à `find`. Sans protection, Bash pourrait le développer à partir des noms du répertoire courant.

**2. Pourquoi `rmdir Sources` échoue-t-il après la création du fichier ?**

??? success "Réponse expliquée"
    Le répertoire contient une entrée. L’échec attendu aide à distinguer la suppression d’un répertoire vide de la suppression récursive.

**3. Pourquoi un motif non-voyelle peut-il sélectionner un chiffre ?**

??? success "Réponse expliquée"
    Exclure les voyelles conserve aussi les chiffres et la ponctuation. Une consigne qui exige une consonne doit limiter le premier caractère aux lettres voulues.

**4. Comment distinguer un astérisque littéral du glob ?**

??? success "Réponse expliquée"
    Dans `touch 'fic*ier'`, les apostrophes transmettent l’astérisque comme caractère du nom.

## Pour pratiquer

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-06/index.md)
- [Kahoot existant du module](../../kahoot/04-utilisation-gnu-linux-module-06-recherches-et-expressions-regulieres.md)
- [Commandes GNU/Linux](../../commandes/linux.md)
