# Correction expliquée — TP04 — Manipuler des variables

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Utiliser le Bash du compte de laboratoire et repérer le fichier de configuration chargé dans une nouvelle session interactive. Conserver sa version initiale avant de l’éditer.

## Activité 1 — Afficher le répertoire personnel avec une variable adéquate.

Pour afficher le chemin :

```bash
printf '%s\n' "$HOME"
```
La correction utilise ls $HOME ou ls ~ : ces commandes affichent son contenu. Pour reproduire cette interprétation :

```bash
ls "$HOME"
```

## Activité 2 — Afficher les chemins des binaires usuels.

```bash
printf '%s\n' "$PATH"
```
Le document utilise echo $PATH ; chaque répertoire est séparé par un deux-points.

## Activité 3 — Créer scripts sous $HOME, l’ajouter au PATH et rendre l’ajout pérenne.

```bash
mkdir -p "$HOME/scripts"
export PATH="$PATH:$HOME/scripts"
```

Ajouter une seule fois dans **$HOME/.bashrc** la ligne suivante, telle quelle :

```bash
export PATH="$PATH:$HOME/scripts"
```

Vérifier le PATH d’un nouveau shell interactif. Le slash ajouté avant $HOME dans la correction n’est pas nécessaire.

## Activité 4 — Créer la variable monnom avec le login de l’utilisateur.

```bash
monnom="$LOGNAME"
```
La variante monnom=$(logname) reprend l’autre méthode de la source lorsque logname fonctionne dans la session. Conserver un seul nom de variable pour tout l’exercice.

## Activité 5 — Afficher les variables de l’utilisateur et distinguer locales et environnement.

```bash
set
env
```
env, employé par la correction, ne présente que l’environnement exporté ; set permet de retrouver aussi monnom local dans le shell courant.

## Activité 6 — Ouvrir un sous-shell, vérifier que monnom n’est pas hérité puis le fermer.

```bash
bash
printf '%s\n' "$monnom"
exit
```
Avant export, le nouveau shell ne reçoit pas la variable locale ; revenir au parent pour la suite.

## Activité 7 — Transformer la variable locale en variable d’environnement.

```bash
export monnom
```

## Activité 8 — Ouvrir un nouveau sous-shell et vérifier la valeur héritée.

```bash
bash
printf '%s\n' "$monnom"
exit
```
Cette fois le login doit être visible. Quitter le sous-shell ramène au parent ; l’enfant ne modifie pas automatiquement les variables de son parent.

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Configuration | Vérifier le chemin du répertoire personnel et la présence de `$HOME/scripts` dans le `PATH` d’un nouveau Bash interactif. |
| Environnement | Comparer la valeur de `monnom` dans un sous-shell avant et après export. Revenir au parent entre les deux observations. |

## Points de lecture du support

!!! note "Lecture de la source"
    Les sources alternent monnom et monom. La pratique emploie monnom de façon cohérente dans l’affectation, l’export et les vérifications.

!!! note "Lecture de la source"
    La source ajoute /$HOME/scripts au PATH et utilise echo avec expansion immédiate pour .bashrc. L’aide utilise $HOME/scripts et une ligne de configuration dont les variables restent littérales.

## Liens

- [Énoncé](tp4-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-08-mecanismes-linux-et-bash-avance.md)
- [Tous les ateliers du module](index.md)
