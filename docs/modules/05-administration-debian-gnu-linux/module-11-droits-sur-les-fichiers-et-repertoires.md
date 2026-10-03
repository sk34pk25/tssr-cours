# Module 11 — Droits sur les fichiers et répertoires

**Sources originales (A) :** support et TP TSSR « Gestion des permissions ».
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Lire les droits Unix pour le propriétaire, le groupe et les autres.
- Modifier des permissions et une propriété dans un environnement de test.
- Appliquer le principe du moindre privilège.

## Lire les permissions

Les droits sont stockés avec l’inode et sont présentés en trois colonnes : utilisateur propriétaire, groupe propriétaire et autres utilisateurs. Pour un fichier, lecture, écriture et exécution n’ont pas les mêmes effets que pour un répertoire ; sur un répertoire, l’exécution conditionne notamment la traversée.

```bash
ls -l fichier
chmod u=rw,g=r,o= fichier
chown utilisateur:groupe fichier
```

## Points d’attention

- Ne pas donner des droits plus larges « pour que cela marche » : déterminer précisément l’accès requis.
- `chown` modifie la propriété ; `chmod` modifie les permissions, ce sont deux opérations distinctes.
- Contrôler la sortie de `ls -l` après toute modification.

## À retenir

Les droits servent à accorder l’accès nécessaire, ni plus ni moins. Le propriétaire, le groupe et les permissions doivent être lus ensemble.

## Vérification des acquis

1. Quelles sont les trois catégories de droits affichées par `ls -l` ?
2. Quelle commande modifie les permissions ?

??? success "Réponses"
    1. Propriétaire, groupe et autres.
    2. `chmod`.
