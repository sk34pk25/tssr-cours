# Correction — TP2 : Spécificités du shell Bash / métacaractères

```bash
ls -d /etc/[a-d]*
mkdir -p bin Tp/{Bourne,KornShell,Divers/{Sources,lib,Executables}}
cd Tp/Divers/Sources/
touch fic*ier
```

La commande `touch fic*ier` est conservée sous sa forme source. Son résultat dépend du
contenu du répertoire au moment de l'expansion.

## Rmdir puis suppression récursive

L'énoncé demande d'essayer `rmdir` sur le répertoire `Sources`. La correction indique que
`rmdir` ne supprime que des répertoires vides. Elle utilise ensuite :

```bash
rm -r $HOME/Tp/Divers/Sources/
rm -r ../../Divers/
```

La suppression récursive est donc une étape distincte de la tentative avec `rmdir`.

## Sélection finale demandée

```bash
ls -ld /etc/[!aeiouyAEIOUY][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][f-s].conf
```

## NEEDS_REVIEW — anomalies documentaires conservées

- Le TP est stocké sous *Module 4 / TP2* et préfixé `M04TP02`, alors que son titre interne
  et ses prérequis indiquent le module 06.
- La progression source est conservée : tentative avec `rmdir`, constat sur le répertoire
  non vide, puis recours à `rm -r`.

## Provenance

- **A — source TSSR :** solution TP2 *Les métacaractères*, titrée en interne « TP du Module 06 ».
- **B — structuration pédagogique :** présentation des commandes, constats et anomalies sans
  modifier le document source.
