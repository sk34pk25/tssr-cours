# Fiche de révision — Module 02 — Écriture des scripts

## Structure et exécution

- interpréteur : `#!/bin/bash` ;
- commentaire : `#` ;
- affichage : `echo` ;
- permission d’exécution : `chmod +x ./monscript.sh` ou `chmod ug+x ./monscript.sh` ;
- suivi : `bash -x monscript.sh`.

Le support mentionne aussi `read nom`, `read` comme pause, `$nom` et `$HOSTNAME`.

## Commandes du TP2

```bash
ls -l *.sh
ls -l *.bash
bash --version
whereis bash
apt list --upgradable | grep bash
```

Le TP disponible est TP2 : aucun TP1 M02 n’est attesté. La solution ne contient ni argument positionnel, ni condition, ni boucle, ni fonction.

Pour le contexte : [cours du module](../../modules/11-initiation-scripting-bash/module-02-ecriture-des-scripts.md).
