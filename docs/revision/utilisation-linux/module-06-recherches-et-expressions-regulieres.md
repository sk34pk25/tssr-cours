# Fiche de révision — Module 06 — Recherches et expressions régulières

## TP1 — Recherches et regex

| Besoin attesté | Commande source |
|---|---|
| Rechercher `Dupont` dans `Edition` | `grep Dupont Edition` |
| Ignorer la casse pour `dupont` | `grep -i dupont Edition` |
| Afficher les lignes non vides | `grep -v '^$' Edition` |
| Trouver `localhost` directement dans `/etc` | `grep -sl localhost /etc/*` |
| Fichiers standards commençant par `ho` depuis `/etc` | `find /etc -type f -name "ho*"` |
| Répertoires du répertoire personnel | `find ~ -type d` |
| Fichiers terminant par `txt` et copie `.save` | `find ~ -type f -name "*txt" -exec cp {} {}.save \;` |

## TP2 — Spécificités Bash / métacaractères

| Besoin attesté | Commande ou observation source |
|---|---|
| Sélection de noms commençant par `a`, `b`, `c` ou `d` dans `/etc` | `ls -d /etc/[a-d]*` |
| Arborescence sous `$HOME` | `mkdir -p bin Tp/{Bourne,KornShell,Divers/{Sources,lib,Executables}}` |
| Fichier du scénario depuis `Tp/Divers/Sources/` | `touch fic*ier` |
| Tentative sur un répertoire non vide | `rmdir` échoue dans le scénario |
| Suppression demandée après le constat | `rm -r $HOME/Tp/Divers/Sources/` puis `rm -r ../../Divers/` |
| Sélection finale dans `/etc` | `ls -ld /etc/[!aeiouyAEIOUY][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][f-s].conf` |

`touch fic*ier` est maintenu sous sa forme source : son résultat dépend du contenu du
répertoire au moment de l'expansion. La suppression avec `rm -r` intervient après la
tentative `rmdir` et ne doit pas être confondue avec elle.

## Liens utiles

- [Cours M06](../../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres.md)
- [TP M06](../../tp/utilisation-linux/module-06/index.md)
- [Kahoot M06](../../kahoot/04-utilisation-gnu-linux-module-06-recherches-et-expressions-regulieres.md)

## Provenance

- **A — sources TSSR :** énoncés et solutions des TP1 et TP2 rattachés à M06.
- **B — structuration pédagogique :** fiche limitée aux commandes et observations attestées.
