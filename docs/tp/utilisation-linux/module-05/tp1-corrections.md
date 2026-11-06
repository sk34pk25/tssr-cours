# Correction expliquée — TP01 — Lire des fichiers

Comparer cette correction à sa propre tentative. Les commandes pédagogiques sont expliquées ici et la transcription du corrigé reste dans **Cours Original**.

## État initial

Préparer un dossier d’exercice accessible en écriture et conserver les deux textes donnés ci-dessous.

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

## Résultat attendu et contrôles

| Contrôle | Trace attendue |
| --- | --- |
| Textes produits | Les deux fichiers contiennent respectivement trois et deux lignes. Le fichier concaténé présente les textes dans l’ordre demandé. |
| Lectures | Relever le nombre de lignes de `/etc/passwd` et les deux premières lignes de `/etc/hosts` sur sa machine. |

## Points de lecture du support

!!! note "Lecture de la source"
    La correction écrit `Cat` dans la concaténation : utiliser `cat` en minuscules.

!!! note "Lecture de la source"
    L’énoncé du troisième fichier commence la seconde ligne par « avant » ; la correction la reproduit une fois avec « Avant ». L’exercice ci-dessous conserve le texte de l’énoncé.

## Liens

- [Énoncé](tp1-enonces.md)
- [Cours du module](../../../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Fiche de révision](../../../revision/utilisation-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Tous les ateliers du module](index.md)
