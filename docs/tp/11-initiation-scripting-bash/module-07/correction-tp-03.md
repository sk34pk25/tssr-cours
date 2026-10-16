# Correction fournie dans la source — TP 03 — Boucle `while read`

> **NEEDS_REVIEW — critique.** La correction Drive est conservée comme document source. Ses incohérences documentaires empêchent de la présenter comme une solution techniquement validée. Aucun correctif silencieux n'est appliqué.

La source fournit `while read login c2 uid`, affiche `echo "Identifiant :  $id"`, puis contient la forme incomplète `echo "UID : $uid` et `done < < (cat /etc/passwd | tr -s ":" " ")`.

## Incohérences documentaires conservées

- la variable lue est `login`, mais la source affiche `$id` ;
- le guillemet fermant manque sur la ligne UID ;
- la source emploie `done < < (` avec cet espacement ;
- la lecture dans trois variables ne garantit pas l'extraction indépendante des seuls premier et troisième champs annoncés ;
- un second shebang apparaît dans le corps de la correction.

Le code source n'est pas exécuté, réécrit en `awk` ou `cut`, ni remplacé par une solution corrigée.
