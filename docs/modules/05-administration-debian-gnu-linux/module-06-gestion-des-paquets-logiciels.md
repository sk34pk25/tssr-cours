# Module 06 — Gestion des paquets logiciels

**Sources originales (A) :** support et TP TSSR « Gestion des paquets logiciels ».
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Comprendre le rôle des dépôts et des fichiers de configuration associés.
- Mettre à jour l’index de paquets puis installer ou mettre à jour un paquet.
- Vérifier la provenance et le résultat d’une opération.

## Dépôts et paquets

Les dépôts définissent les logiciels disponibles. Leur choix dépend de la branche Debian utilisée ; une configuration incohérente mélangeant des branches peut provoquer des dépendances incompatibles. Lire les sources de paquets avant de modifier le système.

```bash
apt update
apt search nom
apt install nom-paquet
apt show nom-paquet
```

`apt update` actualise l’index local ; il ne met pas à jour les paquets installés. Distinguer l’actualisation de l’index, l’installation et la mise à niveau évite une attente erronée.

## Points d’attention

- Lire les paquets qui seront ajoutés ou supprimés avant de confirmer.
- Documenter un dépôt ajouté dans un contexte d’administration.
- Tester les mises à niveau sensibles dans un environnement adapté.

## À retenir

La gestion des paquets est une gestion de sources, de versions et de dépendances. Une action est terminée après contrôle de son résultat, pas après la seule saisie de la commande.

## Vérification des acquis

1. Que fait `apt update` ?
2. Pourquoi éviter de mélanger les branches sans analyse ?

??? success "Réponses"
    1. Il actualise l’index local des paquets disponibles.
    2. Cela peut créer des dépendances ou des versions incompatibles.
