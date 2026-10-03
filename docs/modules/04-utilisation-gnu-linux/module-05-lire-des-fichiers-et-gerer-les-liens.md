# Module 05 — Lire des fichiers et gérer les liens

**Séquence :** Utilisation d’une distribution GNU/Linux  
**Sources originales (A) :** TP TSSR « Lire des fichiers » et « Les liens », énoncés et corrections.
**Contenu pédagogique du portail (B) :** reformulation et structuration des sources TSSR.

## Objectifs

- Créer puis consulter un fichier texte depuis le terminal.
- Distinguer lien physique et lien symbolique.
- Vérifier la cible et les effets d’une manipulation de lien.

## Lire et produire un fichier texte

Le TP utilise `cat` pour créer un fichier à partir de l’entrée standard puis pour relire son contenu. La redirection `>` envoie la sortie de `cat` vers un fichier ; l’utilisateur termine la saisie avec `Ctrl+D`.

```bash
cat > MonDeuxiemeFichier
# saisir le texte, puis Ctrl+D
cat MonDeuxiemeFichier
```

Pour un fichier long, privilégiez une lecture paginée avec `less`. Pour ajouter plutôt que remplacer, utilisez `>>` seulement après avoir vérifié que cet ajout est voulu.

## Liens : une autre façon de désigner un objet

Un lien physique est une autre entrée de répertoire vers le même inode ; il n’est pas utilisé pour les répertoires ordinaires et ne traverse pas les systèmes de fichiers. Un lien symbolique est un fichier spécial contenant un chemin vers une cible. Il peut viser un répertoire et devenir cassé si la cible est déplacée ou supprimée.

```bash
ln MonDeuxiemeFichier copie-physique
ln -s MonDeuxiemeFichier raccourci-symbolique
ls -li MonDeuxiemeFichier copie-physique raccourci-symbolique
```

Dans la sortie détaillée, un lien symbolique est indiqué par `l` et affiche `->` vers sa cible. Les deux liens physiques partagent le même numéro d’inode ; le lien symbolique possède son propre inode.

## Méthode de contrôle

1. Créer ou identifier le fichier cible.
2. Créer le lien demandé avec `ln` ou `ln -s`.
3. Lire les informations avec `ls -li`.
4. Ouvrir le lien symbolique pour vérifier qu’il désigne la bonne cible.
5. Noter l’effet d’un déplacement de la cible sur le lien symbolique.

## Points d’attention

- `>` remplace le contenu d’un fichier existant ; ne l’utilisez pas sans contrôle.
- Un lien symbolique relatif dépend de son emplacement : un chemin relatif juste au moment de la création peut devenir trompeur après un déplacement.
- Le compteur de liens des liens physiques est affiché par `ls -l` et évolue avec leur création ou suppression.

## À retenir

La lecture de fichiers, les redirections et les liens sont liés par la même discipline : nommer clairement l’objet, contrôler le résultat, puis seulement modifier ou supprimer.

## Vérification des acquis

1. Quelle redirection crée ou remplace un fichier à partir de `cat` ?
2. Quelle option de `ln` crée un lien symbolique ?
3. Quel indice de `ls -li` montre que deux liens physiques visent le même inode ?

??? success "Éléments de réponse"
    1. `>`.
    2. `-s`.
    3. Le même numéro d’inode.

## Voir aussi

- [Présentation de la séquence](index.md)
- [Fiche de révision du module](../../revision/utilisation-linux/module-05-lire-des-fichiers-et-gerer-les-liens.md)
