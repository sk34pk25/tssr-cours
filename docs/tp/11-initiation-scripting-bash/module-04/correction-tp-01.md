# Correction — TP 01 — Les variables d’environnement

Les commandes de la correction sont conservées telles qu’elles apparaissent dans la source :

```bash
set | grep history | grep /
set | grep HIST | grep /
set | grep /bin
rep=$(pwd)
extension="txt"
ls -l *.$extension
nblign=$(cat $fic | wc -l )
debut=$(cat $fic | head -n 2)
fin=$(cat $fic | tail -n 2)
chmod u+x script_M4TP1.sh
```

La correction utilise également `read -p`, `echo -e` et l’exécution locale du script. Les tirets typographiques présents dans certaines syntaxes extraites, l’emploi de `Read`, `$ prenom`, la protection absente autour de `$fic` et le traitement textuel de fichiers `.odt` ou `.docx` restent des points de revue documentaire ; ils ne sont pas corrigés silencieusement.
