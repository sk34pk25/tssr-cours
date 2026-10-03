# Module 03 — Premières commandes

**Séquence :** Utilisation d’une distribution GNU/Linux  
**Sources originales (A) :** TP TSSR « Premières commandes », énoncé et correction.
**Contenu pédagogique du portail (B) :** reformulation et structuration des sources TSSR.

## Objectifs

- Lire une invite de commandes et identifier le contexte de travail.
- Changer un mot de passe puis vérifier la nouvelle session.
- Se repérer dans l’arborescence et obtenir de l’aide sur une commande.
- Identifier l’utilisateur, ses groupes et les droits associés.

## Prérequis

Disposer d’une machine GNU/Linux de laboratoire et d’un compte de test. Les commandes de ce module s’exécutent dans un terminal ; ne pas les essayer avec un compte de production lorsque l’exercice demande une modification de mot de passe.

## Lire l’invite de commandes

Une invite telle que `user30@deb:~$` donne déjà des informations utiles : le premier élément est l’utilisateur connecté, le second est le nom de la machine, `~` représente le répertoire personnel et `$` indique un utilisateur standard. Avant toute action, vérifier le contexte plutôt que de supposer le compte ou le répertoire courant.

```bash
whoami       # utilisateur courant
id           # UID, GID et groupes
pwd          # répertoire courant
ls -la       # objets présents, y compris les fichiers cachés
```

## Changer un mot de passe de manière contrôlée

La commande `passwd` demande l’ancien puis le nouveau mot de passe. La modification ne doit pas être considérée comme terminée avant une fermeture de session suivie d’une nouvelle connexion : c’est cette vérification qui confirme que la nouvelle valeur est utilisable.

```bash
passwd
exit
```

Reconnectez-vous ensuite avec le nouveau mot de passe. Ne notez pas un mot de passe dans l’historique du terminal ni dans un fichier de TP.

## Se déplacer et demander de l’aide

Les premières commandes permettent de construire une méthode reproductible : observer, se déplacer, agir, puis contrôler le résultat.

| Besoin | Commande | Contrôle attendu |
|---|---|---|
| Savoir où l’on est | `pwd` | chemin absolu affiché |
| Lister le contenu | `ls -la` | fichiers, répertoires et droits visibles |
| Changer de répertoire | `cd /chemin` | `pwd` confirme le nouvel emplacement |
| Lire le manuel | `man commande` | syntaxe et options documentées |
| Obtenir une aide concise | `commande --help` | options principales affichées |

L’espace sépare la commande, ses options et ses arguments. Une commande inconnue ne doit pas être lancée avec des options devinées : consulter d’abord `man` ou `--help`.

## Mise en pratique guidée

Le TP source demande notamment de changer le mot de passe, de se déconnecter et de se reconnecter, puis d’utiliser l’invite et les commandes de repérage. Pour chaque étape, notez la commande, le résultat observé et le contrôle qui permet de conclure.

## Points d’attention

- `root` et un utilisateur standard n’ont pas les mêmes droits : lire le prompt avant une commande d’administration.
- `~` correspond au répertoire personnel du compte courant, pas forcément à `/home/user` si le compte est particulier.
- Un changement de mot de passe n’est validé qu’après une nouvelle authentification.

## À retenir

Une session shell se pilote en vérifiant systématiquement l’identité, le répertoire et les objets visés. `whoami`, `id`, `pwd` et `ls -la` sont des contrôles simples qui évitent les erreurs de contexte.

## Vérification des acquis

1. Que signifie le symbole `$` dans une invite classique ?
2. Quelle commande affiche l’UID, le GID et les groupes ?
3. Pourquoi faut-il se reconnecter après `passwd` ?

??? success "Éléments de réponse"
    1. Il indique habituellement une session utilisateur standard.
    2. `id`.
    3. Pour vérifier que le nouveau mot de passe permet bien une authentification.

## Voir aussi

- [Présentation de la séquence](index.md)
- [Fiche de révision du module](../../revision/utilisation-linux/module-03-premieres-commandes.md)
