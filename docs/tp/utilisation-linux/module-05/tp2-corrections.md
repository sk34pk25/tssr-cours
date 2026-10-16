# Correction — TP2 : Les liens

La solution utilise les valeurs de laboratoire suivantes : `user30`, `srv-formateur`, `/home/user30/edition1.txt` et `/tmp/stag30/edition2.txt`. Elles sont rapportées comme observations de scénario.

```bash
ln Edition edition1.txt
cat edition1.txt
mkdir /tmp/stag30
ln -s /home/user30/edition1.txt /tmp/stag30/edition2.txt
cat /tmp/stag30/edition2.txt
ln edition1.txt edition3.txt
ls -l edition* Edition /tmp/stag30/edition2.txt
rm edition1.txt
cat /tmp/stag30/edition2.txt
cat edition3.txt
```

Après `rm edition1.txt`, la solution observe que la lecture de `/tmp/stag30/edition2.txt` retourne une absence de fichier, tandis que `edition3.txt` reste lisible. La suppression est une étape expérimentale de ce TP, et non une procédure générique.

## NEEDS_REVIEW — divergence de chemin

L’énoncé demande `/tmp/stagxx/edition2.txt`, alors que la solution emploie `/tmp/stag30/edition2.txt` et `/home/user30/edition1.txt`. Ces formes sont conservées sans réconciliation.

## Provenance

- **A — source TSSR :** solution TP2 *Les liens*.
- **B — structuration pédagogique :** présentation séparée des commandes, observations et divergence documentaire.
