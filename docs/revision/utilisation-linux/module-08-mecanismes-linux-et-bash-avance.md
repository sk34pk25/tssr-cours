# Fiche de révision — Module 08

```text
ps -e | grep d$ > $HOME/process/daemons.txt
find / -mount -type f -name "*.conf" 2>/dev/null | tee resultats/fichiers.conf
tar -czvf /tmp/$LOGNAME.tar.gz $HOME
tar -xzvf /tmp/$LOGNAME.tar.gz -C Restaurations
alias lister_daemons='ps -e | grep d$ > $HOME/process/daemons.txt'
ls $HOME
echo $PATH
PATH=$PATH:/$HOME/scripts
echo PATH=$PATH:/$HOME/scripts >> ~/.bashrc
monom="$LOGNAME"
export monnom
```

`monnom` / `monom` et `PATH=$PATH:/$HOME/scripts` restent **NEEDS_REVIEW**.
