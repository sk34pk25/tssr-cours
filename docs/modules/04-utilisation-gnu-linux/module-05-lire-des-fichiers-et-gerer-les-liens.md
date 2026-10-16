# Module 05 — Lire des fichiers et gérer les liens

> Cette page est une synthèse limitée aux deux TP et à leurs solutions disponibles pour le module 05. Aucun support de cours distinct n’a été identifié dans Drive.

## TP1 — Lire des fichiers

Le TP demande de créer deux fichiers avec `cat >`, puis de saisir les textes indiqués dans sa consigne :

```bash
cat > MonDeuxiemeFichier
cat > MonTroisiemeFichier
```

Il demande ensuite de réunir les deux fichiers dans `fichier2+3`, de compter les lignes de `/etc/passwd` et d’afficher les deux premières lignes de `/etc/hosts` :

```bash
cat MonDeuxiemeFichier MonTroisiemeFichier > fichier2+3
wc -l /etc/passwd
head -n 2 /etc/hosts
```

Les résultats affichés dépendent de la machine du TP.

## TP2 — Les liens

Le scénario distingue un lien physique et un lien symbolique au moyen de commandes `ln` et `ln -s`. Il demande de relire le contenu du fichier associé, puis d’observer les caractéristiques demandées avec `ls -l`.

```bash
ln Edition edition1.txt
cat edition1.txt
ln -s /home/user30/edition1.txt /tmp/stag30/edition2.txt
ln edition1.txt edition3.txt
ls -l edition* Edition /tmp/stag30/edition2.txt
```

Les chemins et noms de session ci-dessus sont des valeurs du laboratoire de la solution, non des valeurs universelles.

## Observation après la suppression de scénario

Le TP prévoit ensuite l’étape expérimentale suivante :

```bash
rm edition1.txt
```

Dans l’observation donnée par la solution, le lien symbolique vers `edition2.txt` ne peut plus être lu, tandis que `edition3.txt` reste lisible. Cette page rapporte cette observation sans étendre le comportement à des cas non présents dans les sources.

## Synthèse

Les TP font pratiquer la création de fichiers, leur concaténation, le comptage de lignes, l’affichage partiel, puis deux formes de liens et leurs observations dans un scénario donné.

## Pour poursuivre

- [TP M05 — index](../../tp/utilisation-linux/module-05/index.md)
- [TP1 — énoncé](../../tp/utilisation-linux/module-05/tp1-enonces.md) · [correction](../../tp/utilisation-linux/module-05/tp1-corrections.md)
- [TP2 — énoncé](../../tp/utilisation-linux/module-05/tp2-enonces.md) · [correction](../../tp/utilisation-linux/module-05/tp2-corrections.md)
- [Fiche de révision M05](../../revision/utilisation-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Kahoot M05](../../kahoot/04-utilisation-gnu-linux-module-05-lire-des-fichiers-et-gerer-les-liens.md)

## Provenance

- **A — source TSSR :** énoncés et solutions TP1 *Lire des fichiers* et TP2 *Les liens*.
- **B — structuration pédagogique :** synthèse web des commandes, étapes et observations attestées, sans apport externe.
