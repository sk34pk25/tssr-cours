# Fiche de révision — Module 04 — Les variables dans les scripts

- affectation : `nom=valeur` ;
- réutilisation : `echo "$errormsg"` ;
- environnement : `HOME`, `LOGNAME`, `HISTFILE`, `PATH` ;
- export : `export NOMVAR` et `export NOMVAR=valeur` ;
- paramètres : `$$`, `$?`, `$!`, `$#`, `$0`, `$1` à `$9`, `$@`, `$*` ;
- saisie : `read` et `read -p` ;
- retrait : `unset tampon`.

Le TP utilise notamment `set | grep`, `rep=$(pwd)`, `extension="txt"`, `ls -l *.$extension`, `cat`, `wc -l`, `head -n 2`, `tail -n 2` et `chmod u+x script_M4TP1.sh`.

Pour le contexte : [cours du module](../../modules/11-initiation-scripting-bash/module-04-les-variables-dans-les-scripts.md).
