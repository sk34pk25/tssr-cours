# Révision — M05 : Lire des fichiers et gérer les liens

## Gestes à retenir

| Besoin | Repère |
|---|---|
| Saisie puis fin d’entrée | cat > fichier ; Ctrl + D |
| Concaténer | cat fichier1 fichier2 > resultat |
| Compter les lignes | wc -l /etc/passwd |
| Limiter la lecture | head -n 2 /etc/hosts |
| Lien physique / symbolique | ln source lien ; ln -s cible lien |
| Comparer les inodes | ls -li ; une aide ajoutée au relevé source ls -l |

## Se contrôler

- Comment terminer la saisie de cat ? **Ctrl + D sur une nouvelle ligne.**
- Que compte wc -l /etc/passwd ? **Les lignes de la base locale de comptes.**
- Pourquoi edition3.txt reste-t-il lisible après suppression de edition1.txt ? **Il conserve un nom physique vers le même inode ; le lien symbolique vise un chemin supprimé.**

## Pièges du support

- La correction écrit `Cat` dans la concaténation : utiliser `cat` en minuscules.
- L’énoncé du troisième fichier commence la seconde ligne par « avant » ; la correction la reproduit une fois avec « Avant ». L’exercice ci-dessous conserve le texte de l’énoncé.
- Le relevé des inodes avec ls -li est une aide de vérification ajoutée ; le document demande initialement les caractéristiques avec ls -l.

- [Cours complet](../../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
- [Travaux pratiques](../../tp/utilisation-linux/module-05/index.md)
