# Correction expliquée — TP — Utilisation de Vi

Les graphies exactes du document sont conservées dans l’onglet Original. Les exemples suivants harmonisent les noms et expliquent les écarts pour pouvoir réaliser le scénario.

## Activité 1 — Ouvrir Edition depuis son répertoire personnel.

```bash
vi "$HOME/Edition"
```

## Activité 2 — Rechercher la première occurrence de Dupont Jean.

En mode normal, revenir au début avec gg, puis rechercher :

```text
/Dupont Jean
```
Valider par Entrée.

## Activité 3 — Se placer sur le n de Jean et insérer -Jacques après lui.

La correction utilise 2e depuis le début du nom, puis a. Saisir -Jacques et revenir au mode normal avec Échap :

```text
2e
a
-Jacques
```
Le résultat attendu est Jean-Jacques.

## Activité 4 — Rechercher Dupont Pierre puis insérer Jean- avant le P de Pierre.

```text
/Dupont Pierre
w
i
Jean-
```
Valider la recherche, saisir le préfixe en insertion puis Échap. Le prénom devient Jean-Pierre.

## Activité 5 — Revenir au début du fichier.

Appuyer sur Échap puis :

```text
gg
```

## Activité 6 — Retrouver le premier Dupont et insérer son propre nom et prénom sur la ligne précédente.

```text
/Dupont
O
```
Saisir le nom et le prénom demandés par le TP, puis Échap. O majuscule ouvre une ligne avant.

## Activité 7 — Ajouter le nom et le prénom du voisin après la ligne du dernier Dupont et parcourir les occurrences avec n et N.

```text
G
?Dupont
o
```
G va en fin de fichier, ? recherche en arrière et o minuscule ouvre une ligne après. Saisir les informations de l’exercice, puis Échap. n répète la recherche dans son sens, N dans le sens opposé.

## Activité 8 — Enregistrer les modifications et quitter.

```text
:wq
```

## Activité 9 — Remplacer Dupont par Merlin-Duval pour le Jean visé par la consigne.

Rouvrir Edition, rechercher Dupont Jean et utiliser n pour sélectionner la bonne occurrence. Sur le mot Dupont :

```text
cwMerlin-Duval
```
Terminer avec Échap. Vérifier que les autres Dupont n’ont pas été modifiés.

## Activité 10 — Retrouver Couteau Jean et supprimer sa ligne.

```text
/Couteau Jean
dd
```

## Activité 11 — Changer tous les Dupont en Durand.

```text
:%s/Dupont/Durand/g
```
La correction utilise une commande globale : :g/Dupont/s//Durand/g. La forme ci-dessus explicite toutes les lignes et toutes les occurrences.

## Activité 12 — Déplacer toutes les lignes contenant Durand à la fin du fichier.

```text
:g/Durand/m$
```
g sélectionne les lignes correspondantes et m$ les déplace vers la fin.

## Activité 13 — Dupliquer la ligne Ben Raf.

```text
/Ben Raf
yy
p
```
yy copie la ligne et p la colle après.

## Activité 14 — Afficher la date et l’heure sans quitter Vi.

```text
:!date
```
Lire la sortie de la commande externe, puis revenir à l’éditeur.

## Activité 15 — Créer $HOME/.vimrc : numéros de ligne, tabulations de cinq caractères et mode non compatible.

Dans le fichier **.vimrc**, saisir :

```vim
set number
set tabstop=5
set nocompatible
```
Le nom .virmc imprimé dans la correction est une coquille. Revenir à Edition pour les remplacements suivants.

## Activité 16 — Rechercher et remplacer tous les Durand en Dupont.

```text
:%s/Durand/Dupont/g
```

## Activité 17 — Substituer Jean en Jean-Paul, en respectant l’espace après Jean indiqué par la correction.

```text
:%s/\<Jean\> /Jean-Paul /g
```
L’espace après le prénom fait partie du motif : il évite de transformer automatiquement les composés Jean-Jacques ou Jean-Pierre. La correction montre g/Jean /s/Jean/&-Paul ; l’aide rend la portée explicite.

## Activité 18 — Substituer Jean en JEAN sans écrire JEAN dans l’expression.

```text
:%s/\(Jean\)/\U\1/g
```
Le groupe capturé est repris par \1 et converti en majuscules par \U, dans Vim utilisé par le laboratoire.

## Activité 19 — Substituer JEAN en Jean en changeant le séparateur de la substitution.

```text
:%s#JEAN#Jean#g
```
Le séparateur # remplace /. La correction imprimée conserve / ; cette forme répond à la demande de l’énoncé.

## Activité 20 — Substituer Jean en Jean-Jean sur tout le texte.

```text
:%s/Jean/Jean-Jean/g
```
% vise toutes les lignes et g toutes les occurrences d’une ligne. Le document omet g dans sa forme imprimée.

## Activité 21 — Ajouter (033) avant chaque numéro situé en fin de ligne et commençant par 1, 2 ou 3.

```text
:%s/\<[123][0-9]*$/(033)&/
```
Le début de mot, les chiffres et la fin de ligne limitent le changement au numéro demandé. & reprend tout le numéro. La correction utilise seulement \<[1-3], sans ancrage de fin.

## Activité 22 — Ajouter zéro à la fin de toutes les lignes qui commencent par F.

```text
:g/^F/s/$/0/
```
^F sélectionne les lignes ; $ positionne l’ajout à leur fin. Enregistrer et contrôler les dernières modifications.

## Points de lecture du support

!!! note "Lecture de la source"
    Le document écrit .virmc alors que l’énoncé demande .vimrc : la forme de travail est .vimrc.

!!! note "Lecture de la source"
    Quelques lignes omettent le deux-points d’entrée en commande Ex. Il est ajouté dans les exemples utilisables.

!!! note "Lecture de la source"
    La question19 demande un autre séparateur ; la correction ne le change pas. La forme avec # répond à cette partie de la consigne.

!!! note "Lecture de la source"
    Les formes source des questions20 et21 ont une portée plus étroite que leur formulation ; les ancrages et le drapeau g sont expliqués, sans modifier le texte de la source.

- [Énoncé](enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-07-utilisation-de-vi.md)
- [Tous les ateliers du module](index.md)
