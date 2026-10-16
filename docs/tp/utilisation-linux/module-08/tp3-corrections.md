# Correction — TP3 : Redirections et Alias

```text
mkdir -p $HOME/process
mkdir -p $HOME/resultats
alias lister_daemons='ps -e | grep d$ > $HOME/process/daemons.txt'
alias rechercher_conf='find / -mount -type f -name "*.conf" 2>/dev/null | tee $HOME/resultats/fichiers.conf'
alias compter_fichiers='find / -mount -type f -name "*.conf" 2>/dev/null | wc -l > $HOME/resultats/compteur.txt'
lister_daemons
rechercher_conf
time rechercher_conf
compter_fichiers
cat $HOME/resultats/fichiers.conf | wc -l > $HOME/resultats/compteur.txt
grep -c f$ $HOME/resultats/fichiers.conf > $HOME/resultats/compteur.txt
```

Les alias sont valables uniquement pour la session courante.

!!! warning "NEEDS_REVIEW"

    Le tiret rendu dans `ps –e` est ambigu dans le PDF solution : aucune
    normalisation silencieuse n'est appliquée.
