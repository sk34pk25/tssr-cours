# Correction — TP1 : Utilisation des systèmes

```text
mkdir $HOME/process
ps -e | grep d$ > $HOME/process/daemons.txt
cat process/daemons.txt
mkdir $HOME/resultats
find / -mount -type f -name "*.conf" 2>/dev/null | tee resultats/fichiers.conf
time find / -mount -type f -name "*.conf" 2>/dev/null | tee resultats/fichiers.conf
find / -mount -type f -name "*.conf" 2>/dev/null | wc -l > resultats/compteur.txt
```

Les résultats et la durée sont des observations de laboratoire.
