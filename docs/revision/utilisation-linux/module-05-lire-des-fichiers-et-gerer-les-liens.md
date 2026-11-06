# Fiche de révision — Module 05 — Lire des fichiers et gérer les liens

Saisir et examiner du texte, puis suivre les chemins et les inodes pendant le TP sur les liens.

## Gestes à retenir

| Besoin | Repère |
|---|---|
| Saisie puis fin d’entrée | cat > fichier ; Ctrl + D |
| Concaténer | cat fichier1 fichier2 > resultat |
| Compter les lignes | wc -l /etc/passwd |
| Limiter la lecture | head -n 2 /etc/hosts |
| Lien physique / symbolique | ln source lien ; ln -s cible lien |
| Comparer les inodes | `ls -li` complète le relevé source `ls -l` |

## Contrôles à savoir réaliser

| Point de contrôle | Vérification |
| --- | --- |
| Entrée et sortie | Saisir les trois lignes puis les deux lignes demandées dans des fichiers distincts. Comparer la concaténation aux originaux dans l’ordre. Une redirection `>` remplace le contenu du fichier de sortie. |
| Lecture partielle | Contrôler les lignes de la base locale des comptes avec `wc -l`, puis limiter l’affichage de `/etc/hosts` avec `head -n 2`. Les valeurs observées dépendent de la machine. |
| Liens et suppression | Avant la suppression, comparer les inodes et le chemin de la cible. Après la suppression de `edition1.txt`, comparer la lecture du lien symbolique avec celle de `edition3.txt`. |

## Pièges du support

- La correction écrit `Cat` dans la concaténation : utiliser `cat` en minuscules.
- L’énoncé du troisième fichier commence la seconde ligne par « avant » ; la correction la reproduit une fois avec « Avant ». L’exercice ci-dessous conserve le texte de l’énoncé.
- Le relevé des inodes avec ls -li est une aide de vérification ajoutée ; le document demande initialement les caractéristiques avec ls -l.

## Retenir puis vérifier

**Plusieurs liens physiques peuvent nommer le même inode. Un lien symbolique contient le chemin vers lequel il doit pointer.**

**1. Comment quitter la saisie de `cat` proprement ?**

??? success "Réponse expliquée"
    Terminer la dernière ligne, puis presser Ctrl+D sur la ligne suivante pour signaler la fin de l’entrée.

**2. Quel contrôle distingue les deux types de lien ?**

??? success "Réponse expliquée"
    `ls -li` permet de comparer les inodes. `ls -l` montre la flèche et le chemin ciblé pour un lien symbolique.

**3. Pourquoi `edition3.txt` reste-t-il lisible ?**

??? success "Réponse expliquée"
    Il nomme toujours l’inode d’origine. Le lien symbolique qui contient le chemin de `edition1.txt` devient cassé lorsque ce chemin disparaît.

## Pour pratiquer

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-05/index.md)
- [Kahoot existant du module](../../kahoot/04-utilisation-gnu-linux-module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Commandes GNU/Linux](../../commandes/linux.md)
