# Correction — TP4 : Manipuler des Variables

```text
ls $HOME
ls ~
echo $PATH
mkdir $HOME/scripts
PATH=$PATH:/$HOME/scripts
echo PATH=$PATH:/$HOME/scripts >> ~/.bashrc
monom="$LOGNAME"
monom=$(logname)
env
bash
echo $monnom
exit
export monnom
```

!!! warning "NEEDS_REVIEW"

    L'énoncé emploie `monnom`, tandis que la solution emploie `monom`. La forme
    `PATH=$PATH:/$HOME/scripts` et l'en-tête « Archivage et compression » de la
    solution sont conservés sans correction.
