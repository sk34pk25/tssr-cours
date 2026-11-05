# Fiche de révision — Module 06 — Exécution conditionnelle

| Besoin | Repère |
| --- | --- |
| Tester un statut | `if commande; then …; fi` |
| Comparer des entiers | `-eq`, `-ne`, `-gt`, `-ge`, `-lt`, `-le` |
| Tester une chaîne | `-n` non vide, `-z` vide, `=` ou `!=` pour comparer |
| Tester un chemin | `-d` répertoire, `-f` fichier ordinaire, `-r` lisible, `-w` modifiable, `-x` exécutable, `-s` taille positive |
| Combiner dans `[[ ]]` | `&&`, `!`, `( )` et le ou logique |
| Sélectionner un motif | `case … in`, `;;`, `esac` |

Bash intègre `test` et `[`. Dans `[[ ]]`, un membre droit non cité de `=` peut être un motif. `*` représente zéro ou plusieurs caractères, `?` un caractère et `[abc]` un caractère choisi. Placez le motif général `*` en dernier dans un `case`.

**TP.** Le premier distingue les statuts 1 et 2 pour les arguments et le refus de `root`. Le second organise un menu de comptes locaux. Pour vérifier un compte dans `/etc/passwd`, comparez le premier champ exactement.

- [Cours](../../modules/11-initiation-scripting-bash/module-06-execution-conditionnelle.md)
- [TP et corrections](../../tp/11-initiation-scripting-bash/module-06/index.md)
