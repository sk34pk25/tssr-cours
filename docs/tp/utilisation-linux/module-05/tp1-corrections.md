# Correction expliquée — TP01 — Lire des fichiers

Les graphies exactes du document sont conservées dans l’onglet Original. Les exemples suivants harmonisent les noms et expliquent les écarts pour pouvoir réaliser le scénario.

## Activité 1 — Créer MonDeuxiemeFichier avec cat et le contenu exact de trois lignes demandé.

Lancer :

```bash
cat > MonDeuxiemeFichier
```

Saisir, puis terminer avec Ctrl + D :

```text
Conseil :
pour bien utiliser la ligne de commande
faire des étirements de doigts avant chaque repas.
```

## Activité 2 — Créer MonTroisiemeFichier avec cat et les deux lignes demandées.

```bash
cat > MonTroisiemeFichier
```

Saisir, puis terminer avec Ctrl + D :

```text
Ne pas oublier de lire au moins 4 pages de man
avant d'aller se coucher
```

## Activité 3 — Créer fichier2+3 par concaténation des deux fichiers.

```bash
cat MonDeuxiemeFichier MonTroisiemeFichier > fichier2+3
cat fichier2+3
```
Vérifier que les trois lignes du premier fichier précèdent les deux du second.

## Activité 4 — Compter les lignes de /etc/passwd, une ligne correspondant à une entrée de compte.

```bash
wc -l /etc/passwd
```
Relever le résultat du système, pas le nombre de la capture.

## Activité 5 — Afficher uniquement les deux premières lignes de /etc/hosts.

```bash
head -n 2 /etc/hosts
```

## Points de lecture du support

!!! note "Lecture de la source"
    La correction écrit `Cat` dans la concaténation : utiliser `cat` en minuscules.

!!! note "Lecture de la source"
    L’énoncé du troisième fichier commence la seconde ligne par « avant » ; la correction la reproduit une fois avec « Avant ». L’exercice ci-dessous conserve le texte de l’énoncé.

!!! note "Lecture de la source"
    Le relevé des inodes avec ls -li est une aide de vérification ajoutée ; le document demande initialement les caractéristiques avec ls -l.

- [Énoncé](tp1-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Tous les ateliers du module](index.md)
