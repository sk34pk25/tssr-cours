# Module 08 — Les fonctions

## Objectifs

Ce module présente le regroupement d'actions réutilisables dans des fonctions, leur déclaration, leur appel et leur externalisation dans un fichier séparé.

## Déclarer puis appeler une fonction

Une fonction regroupe plusieurs commandes. Sa déclaration doit précéder son appel.

```bash
nomfonction() {
    ACTIONS
}
```

Le support illustre une fonction puis son appel :

```bash
func_infos() {
    echo "Informations sur la distribution utilisée"
    lsb_release -dric
}

func_infos
```

## Variable utilisée par une fonction

L'exemple du support montre une variable modifiée par une fonction :

```bash
nbr=50

func_majnbr () {
    nbr=100
}
```

## Passer des paramètres

Les paramètres reçus par une fonction sont illustrés avec `$1` et `$2` :

```bash
func_accueil () {
    echo "Message d’accueil :"
    echo "Bonjour $1 $2"
    echo "Bienvenue sur la machine $HOSTNAME"
}

read -p "Entrez votre prénom nom (ex Marc Dubois) : " prenom nom
func_accueil "$prenom" "$nom"
```

## Charger des fonctions depuis un fichier

Le support présente un fichier de fonctions distinct, chargé dans l'environnement d'exécution courant avec `source` ou `.`. Le fichier cité n'a pas besoin d'être exécutable : des droits de lecture suffisent.

```bash
source ~/mesfonctions
```

La correction du TP utilise cette autre forme :

```bash
. ./fonctions.fct
```

## Mise en pratique

Le TP propose un menu répété qui appelle trois fonctions : sauvegarder les fichiers `.sh`, supprimer les fichiers `.save` et lister les scripts selon l'existence d'une sauvegarde. Les fichiers `fonctions.fct` et `script_M8TP1.sh` sont décrits dans les PDF, mais ne sont pas fournis comme fichiers Drive autonomes.

## Liens

- [TP M08](../../tp/11-initiation-scripting-bash/module-08/index.md)
- [Révision M08](../../revision/11-initiation-scripting-bash/module-08-les-fonctions.md)
