# Révision — Module 07 — Les structures de boucle

## Calcul et boucles

`expr 2 + 7`, `expr 2 \* 7`, `while`, `until`, `for` et `while true` dans le scénario de menu du support.

## Séparation et lecture

`set | grep ^IFS`, `IFS=$' \t\n'`, `for var in $(cat fichier.txt)`, `while read nom prenom suite`, `done < fichier.txt`, `done < <(cat Edition)` et `cat Edition | while read nom prenom num`.

Lorsque la source le montre, un second `read` emploie `</dev/tty`.

## Scénarios TP

- TP1 : vendredi 13 et plage d'années bissextiles avec `until` ;
- TP2 : extensions lues depuis le fichier externe absent `ext.txt` ;
- TP3 : lecture de `/etc/passwd` avec `while read`.

La correction TP3 est une source **NEEDS_REVIEW — critique**, et non un exemple de code validé.

- [Cours M07](../../modules/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md)
- [TP M07](../../tp/11-initiation-scripting-bash/module-07/index.md)
