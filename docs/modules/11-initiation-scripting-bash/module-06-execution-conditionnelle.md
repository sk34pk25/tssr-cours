# Module 06 — Exécution conditionnelle

## Objectifs

M06 traite les tests et les structures conditionnelles, séparément des enchaînements, regroupements et couleurs de M05.

## Tester

Les formes attestées sont `test condition`, `[ condition ]`, `[[ condition ]]` et `(( condition ))`.

Les opérateurs cités couvrent les entiers (`-eq`, `-ne`, `-gt`, `-ge`, `-lt`, `-le`), les chaînes (`=`, `!=`, `-n`, `-z`) et les fichiers (`-d`, `-f`, `-w`, `-r`, `-x`, `-s`), avec `&&`, `||`, `!` et `( )`.

## Structures conditionnelles

```bash
if condition ; then
    action
elif autre_condition ; then
    autre_action
else
    action_finale
fi
```

La sélection attestée est `case $nomvar in ... ;; ... esac`.

## Motifs et exemples source

Le support cite `*`, `?`, `[…]`, `[^…]`, `[!...]`, `?(…)`, `*(…)`, `+(…)`, `@(…)`, `!(…)`, l’alternative `|` et `?([+-])+([0-9])`, ainsi que `shopt -s extglob`.

Les exemples présentés sont `if [[ "$LOGNAME" = root ]] ; then`, `if ls /tmp ; then`, `if [[ -f fic1 && ( -d rep1 || -d rep2 ) ]] ; then`, `mkdir /data/perso`, `cp -a /home/penthium/documents/* /data/perso`, `touch $file`, `exit 1` et `exit 5`.

## Deux TP séparés

TP1 traite les arguments, la saisie, le refus de `root` et les codes de sortie. TP2 traite le menu distinct de création, modification du mot de passe, suppression, vérification et sortie d’un compte utilisateur.

## Liens

- [TP M06](../../tp/11-initiation-scripting-bash/module-06/index.md)
- [Révision M06](../../revision/11-initiation-scripting-bash/module-06-execution-conditionnelle.md)
