# Fiche de révision — Module 11 — Droits sur les fichiers et répertoires

**Sources originales (A) :** support, énoncé et solution M11TP01 Drive. **Fiche (B) :** synthèse reformulée.

## Droits usuels

Les droits se répartissent entre utilisateur propriétaire, groupe propriétaire et autres. Lecture, écriture et exécution valent respectivement `4`, `2` et `1` en octal. Sur un répertoire, `r` liste, `w` permet notamment de créer ou supprimer, et `x` permet la traversée.

`chmod` exprime une modification symbolique ou octale ; `chown` change propriétaire et/ou groupe. Vérifier avec `ls -ld` et n’utiliser `-R` qu’après avoir borné l’arborescence.

## Bits spéciaux

- SetGID sur un répertoire : les nouveaux fichiers héritent de son groupe.
- Sticky bit sur un répertoire : seul le propriétaire d’un fichier ou `root` peut le supprimer.
- L’umask est soustrait aux droits de création ; le support indique `0022` par défaut sous Debian.

## TP M11

La structure source sous `/srv` couvre un espace public, un dépôt sticky, un espace du groupe `admin` et une documentation SetGID. Tester l’accès depuis les rôles définis par l’énoncé avant de conclure.

Pour approfondir : [cours complet](../../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md) · [TP](../../tp/administration-linux/module-11/index.md) · [mémo](../../memo/permissions-linux.md).

## À connaître absolument

- Lire droits rwx, propriétaire et groupe.
- Calculer et appliquer les permissions symboliques ou octales.
- Comprendre les droits différents sur fichiers et répertoires.
- Utiliser setuid, setgid et sticky bit avec prudence.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Lire droits rwx, propriétaire et groupe.
- [ ] Calculer et appliquer les permissions symboliques ou octales.
- [ ] Comprendre les droits différents sur fichiers et répertoires.
- [ ] Utiliser setuid, setgid et sticky bit avec prudence.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « Droits sur les fichiers et répertoires » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md).
