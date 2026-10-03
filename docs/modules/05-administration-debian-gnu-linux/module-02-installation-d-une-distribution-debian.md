# Module 02 — Installation d’une distribution Debian

**Sources originales (A) :** TP TSSR d’installation Debian avec et sans interface graphique, énoncés et corrections.
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Préparer une machine virtuelle d’installation.
- Distinguer les choix d’installation avec et sans interface graphique.
- Vérifier le système après le premier démarrage.

## Préparer l’installation

Le TP source commence par la récupération de l’image d’installation fournie dans le cadre de la formation, puis la création d’une machine virtuelle. Avant le démarrage, documenter les ressources attribuées, l’image sélectionnée et le type d’installation attendu. Cette préparation permet de reproduire ou de dépanner l’installation.

## Installer et vérifier

Pendant l’installation, les choix de langue, réseau, comptes, disques et paquets déterminent l’état final. Une installation n’est pas validée au dernier écran : démarrer la machine installée, s’authentifier et contrôler le système réellement obtenu.

```bash
hostnamectl
ip a
df -h
```

Ces contrôles montrent respectivement l’identité de l’hôte, les interfaces réseau et l’occupation des systèmes de fichiers.

## Points d’attention

- Travailler sur une machine de laboratoire, pas sur un poste de production.
- Vérifier le disque cible avant tout partitionnement.
- Conserver la distinction pédagogique entre installation graphique et installation sans interface graphique.

## À retenir

L’installation est une procédure préparée, contrôlée au démarrage, puis documentée. Les choix effectués ont des conséquences sur l’administration ultérieure.

## Vérification des acquis

1. Pourquoi contrôler la machine après le premier démarrage ?
2. Quelle commande affiche les systèmes de fichiers montés et leur occupation ?

??? success "Réponses"
    1. Pour confirmer que le système installé correspond réellement aux choix effectués.
    2. `df -h`.
