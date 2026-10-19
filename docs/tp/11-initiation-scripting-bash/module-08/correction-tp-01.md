# Correction — TP 01 — Fonctions

> Correction fournie dans la source PDF. Les fichiers `script_M8TP1.sh` et `fonctions.fct` ne sont pas fournis séparément dans Drive ; les extraits ci-dessous documentent le code visible dans la correction, sans créer de script autonome.

## Script principal décrit dans la source

La correction charge le fichier de fonctions, affiche le menu dans une boucle puis traite les choix `S`, `D`, `L` et `Q` :

```bash
. ./fonctions.fct

while true
do
    read -p "Choisissez une action [S/D/L ou Q] : " rep
    case $rep in
        S) sauvegarde ;;
        D) suppression ;;
        L) listing ;;
        Q) echo "Vous avez demandé à sortir" && exit 0 ;;
        *) echo -e "\033[31mErreur de saisie ! \033[0m" ;;
    esac
done
```

## Fonctions décrites dans `fonctions.fct`

```bash
sauvegarde() {
    for i in $(ls *.sh)
    do
        cp -p $i $i.save
    done
}

suppression() {
    rm -f *.save
}

listing() {
    for i in $(ls *.sh)
    do
        if [[ -f $i.save ]]; then
            echo -e "\033[1;32m$i\033[0m"
        else
            echo -e "\033[1;31m$i\033[0m"
        fi
    done
}
```

## Contrôles et limites documentaires

- Le menu de la correction ne traite que les lettres majuscules.
- Les boucles `for i in $(ls *.sh)` et les variables de chemins sont conservées telles que documentées ; aucune robustification n'est apportée.
- `rm -f *.save` vise tous les fichiers correspondant à ce motif dans le répertoire courant.
- Les deux fichiers de scénario restent `NOT_PRESENT_AS_SEPARATE_FILE` : leur code est présent dans le PDF, mais aucun objet Drive autonome ne les fournit.
