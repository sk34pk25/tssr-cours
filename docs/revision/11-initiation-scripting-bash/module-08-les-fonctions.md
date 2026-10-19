# Révision — Module 08 — Les fonctions

## Déclarer et appeler

```bash
nomfonction() {
    ACTIONS
}

nomfonction
```

Une déclaration précède l'appel.

## Paramètres et variable

Le support illustre les paramètres positionnels `$1` et `$2`, ainsi qu'une variable `nbr` modifiée dans `func_majnbr`.

## Charger un fichier de fonctions

```bash
source ~/mesfonctions
. ./fonctions.fct
```

## Logique du TP

Le scénario M08 associe trois fonctions : `sauvegarde`, `suppression` et `listing`. Le menu répété propose `S`, `D`, `L` et `Q`.

Les fichiers `fonctions.fct` et `script_M8TP1.sh` sont décrits dans les PDF mais absents comme fichiers Drive séparés.

- [Cours M08](../../modules/11-initiation-scripting-bash/module-08-les-fonctions.md)
- [TP M08](../../tp/11-initiation-scripting-bash/module-08/index.md)
