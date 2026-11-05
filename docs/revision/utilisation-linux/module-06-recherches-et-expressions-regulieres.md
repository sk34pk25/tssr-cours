# Révision — M06 : Recherches et expressions régulières

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

## Se contrôler

- Que sélectionne grep -v ^$ ? **Les lignes qui ne sont pas totalement vides ; protéger le motif par des guillemets.**
- Pourquoi citer ho* dans find ? **Pour que find reçoive le motif sans expansion préalable du shell.**
- Pourquoi rmdir échoue-t-il sur Sources ? **Un fichier a été créé à l’intérieur.**
- Quelle différence entre non-voyelle et consonne ? **Une non-voyelle peut aussi être un chiffre ou un symbole.**

## Pièges du support

- Le motif source `[!aeiouyAEIOUY]` exclut les voyelles, mais il n’impose pas que le premier caractère soit une lettre. Une variante stricte de consonnes est fournie pour respecter entièrement la consigne.
- La correction supprime Sources alors que le terminal y est positionné. Le chemin courant peut alors ne plus exister. Revenir dans $HOME avant la suppression finale de Divers rend la suite du TP lisible.
- L’énoncé demande des fichiers directement dans /etc : les exemples de glob et grep ne sont pas récursifs ; find est employé pour les consignes qui demandent un parcours.

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-06/index.md)
