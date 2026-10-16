# Correction — TP1 : Lire des fichiers

```bash
cat > MonDeuxiemeFichier
cat > MonTroisiemeFichier
```

Saisissez les contenus demandés dans l’énoncé source, puis utilisez :

```bash
cat MonDeuxiemeFichier MonTroisiemeFichier > fichier2+3
wc -l /etc/passwd
head -n 2 /etc/hosts
```

## NEEDS_REVIEW — forme de `cat`

La ligne imprimée de la solution écrit `Cat MonDeuxiemeFichier MonTroisiemeFichier > fichier2+3`, tandis que la capture terminal associée montre `cat` en minuscules. La divergence est conservée ; la commande ci-dessus restitue la forme présente dans la capture, sans modifier le document source.

## Provenance

- **A — source TSSR :** solution TP1 *Lire des fichiers*.
- **B — structuration pédagogique :** séparation des commandes et de l’anomalie documentaire sans théorie supplémentaire.
