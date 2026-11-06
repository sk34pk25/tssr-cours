# Fiche de révision — Module 04 — Fichiers, dossiers et métacaractères

Se repérer dans une arborescence et lire les attributs du fichier créé et du répertoire `/tmp`.

## Gestes à retenir

| Besoin | Repère |
|---|---|
| Répertoire courant | pwd |
| Noms présents, y compris cachés | ls -A |
| Créer un nouveau fichier | touch MonPremierFichier |
| Attributs du fichier | ls -l MonPremierFichier |
| Noms terminés en .conf | `ls -d -- /etc/*.conf` |
| Attributs du répertoire | ls -ld /tmp |

## Contrôles à savoir réaliser

| Point de contrôle | Vérification |
| --- | --- |
| Chemins et contenu | Partir de `pwd`, puis comparer `ls -A` et `ls -ld /tmp`. Le premier énumère les entrées du répertoire courant, le second décrit `/tmp`. |
| Attributs du fichier | Repérer le type, les droits et le propriétaire de `MonPremierFichier`. Pour une création neuve, le fichier est vide. Un fichier déjà présent peut conserver son contenu. |
| Observation du sticky bit | Vérifier la présence de `t` ou `T` dans la dernière position des droits de `/tmp`. Consigner le résultat observé dans le laboratoire. |

## Pièges du support

- Les permissions, propriétaires et dates de la capture illustrent le serveur source : relever ceux du laboratoire courant.
- Le titre du module inclut les métacaractères, mais son TP propre concerne fichiers et dossiers ; le second TP est rattaché au module 06 d’après le titre écrit dans son document.

## Retenir puis vérifier

**Le shell développe un motif de noms avant de lancer la commande. Avec `ls -d`, chaque nom correspondant est affiché comme une entrée.**

**1. Pourquoi vérifier `pwd` avant `touch` ?**

??? success "Réponse expliquée"
    Le nom `MonPremierFichier` est relatif. Sa destination dépend du répertoire courant.

**2. Que risque `ls /etc/*.conf` si un nom correspondant est un répertoire ?**

??? success "Réponse expliquée"
    La commande peut lister son contenu. `ls -d -- /etc/*.conf` affiche les entrées correspondant au motif sans entrer dans ces répertoires.

**3. Comment repérer le sticky bit de `/tmp` ?**

??? success "Réponse expliquée"
    Lire la dernière position des permissions avec `ls -ld /tmp`. Elle montre `t` ou `T` quand le sticky bit est présent.

## Pour pratiquer

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-04/index.md)
- [Kahoot existant du module](../../kahoot/04-utilisation-gnu-linux-module-04-fichiers-dossiers-et-metacaracteres.md)
- [Mémo des permissions Linux](../../memo/permissions-linux.md)
- [Commandes GNU/Linux](../../commandes/linux.md)
