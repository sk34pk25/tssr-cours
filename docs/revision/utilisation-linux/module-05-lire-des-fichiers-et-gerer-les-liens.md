# Révision — Module 05 : lire des fichiers et gérer les liens

## TP1 — Lire des fichiers

| Besoin attesté | Commande source |
|---|---|
| Créer `MonDeuxiemeFichier` | `cat > MonDeuxiemeFichier` |
| Créer `MonTroisiemeFichier` | `cat > MonTroisiemeFichier` |
| Concaténer les deux fichiers | `cat MonDeuxiemeFichier MonTroisiemeFichier > fichier2+3` |
| Compter les lignes de `/etc/passwd` | `wc -l /etc/passwd` |
| Afficher deux lignes de `/etc/hosts` | `head -n 2 /etc/hosts` |

## TP2 — Les liens

| Observation ou action du scénario | Commande source |
|---|---|
| Lien physique vers `edition1.txt` | `ln Edition edition1.txt` |
| Lire le contenu | `cat edition1.txt` |
| Lien symbolique du laboratoire | `ln -s /home/user30/edition1.txt /tmp/stag30/edition2.txt` |
| Deuxième lien physique | `ln edition1.txt edition3.txt` |
| Observer les caractéristiques | `ls -l edition* Edition /tmp/stag30/edition2.txt` |
| Étape expérimentale de suppression | `rm edition1.txt` |

Après cette étape, la solution observe que `edition2.txt` n’est plus lisible, alors que `edition3.txt` l’est encore. Les chemins de laboratoire restent des valeurs de scénario.

## À retenir

Les quatre documents font pratiquer `cat >`, la concaténation, `wc -l`, `head -n 2`, `ln`, `ln -s`, `cat` et `ls -l`. Ils ne fournissent pas une théorie générale des redirections ou des liens.

## Liens utiles

- [Cours M05](../../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [TP M05](../../tp/utilisation-linux/module-05/index.md)
- [Kahoot M05](../../kahoot/04-utilisation-gnu-linux-module-05-lire-des-fichiers-et-gerer-les-liens.md)

## Provenance

- **A — source TSSR :** énoncés et solutions des TP1 et TP2.
- **B — structuration pédagogique :** fiche limitée aux commandes et observations attestées.
