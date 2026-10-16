# Correction TP 01 — Enchaînements conditionnels

## Variables et saisie

La correction utilise les variables `fic`, `bleu`, `vert`, `noir` et `dossier`, puis demande le dossier :

```bash
read -p "Veuillez saisir un nom de dossier à créer : " dossier
```

## Création du dossier et du fichier

Les commandes source sont conservées :

```bash
mkdir -p $dossier && echo -e ...
touch $dossier/$fic && echo -e ...
echo "Introduction du fichier fic_M5TP1.txt" > $dossier/$fic
cat $dossier/$fic
chmod u+x script_M5TP1.sh
```

La correction imprime `fic=’fic_M5TP1.txt’` avec des apostrophes typographiques. Cette forme est conservée comme observation documentaire et non normalisée en transcription ASCII.

## Contrôle et limites documentaires

Le scénario vérifie l’affichage du contenu créé et la différenciation colorée des messages. Les chemins construits depuis la saisie utilisateur ne sont pas protégés par des guillemets. De plus, `mkdir -p` peut réussir lorsque le dossier existe déjà : le message affiché ne démontre pas à lui seul une création nouvelle.

Les sorties du laboratoire présentes dans la source sont historiques et ne constituent pas des résultats permanents.
