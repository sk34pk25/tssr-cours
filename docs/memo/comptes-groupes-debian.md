# Mémo — Comptes et groupes Debian

**Synthèse des modules 10 et 11 ; commandes d’exemple à adapter au laboratoire.**

| Besoin | Commande ou fichier | Distinction utile |
|---|---|---|
| Compte et groupe principal | `/etc/passwd` | UID, GID, home, shell |
| Mot de passe et vieillissement | `/etc/shadow` | Expiration du secret et du compte distinctes |
| Groupe | `/etc/group` | Membres supplémentaires, pas toute appartenance principale |
| Groupe protégé | `/etc/gshadow` | Informations cachées sur les groupes |
| Groupes du compte | `id francois` | Confirmer dans une nouvelle session après modification |
| Ajouter un groupe | `groupadd documentation` | Créer avant de l’utiliser |
| Ajouter une appartenance | `usermod -aG documentation francois` | Support : `-G` liste des groupes secondaires, `-a` ajouter les groupes supplémentaires |
| Changer un secret | `passwd francois` | Saisie interactive |
| Verrouiller le mot de passe | `usermod -L fabrice` | Autres méthodes d’accès à considérer |
| Expirer le compte du TP | `usermod -e 1 fabrice` | L’option -e1 permet de forcer sa date d’expiration (correction du TP) |

Le TP interdit l’édition directe des quatre fichiers de comptes. Pour Frédéric, conserver `/home/frederic` demandé par l’énoncé, malgré le `/home/fred` d’un exemple de correction. Avec `userdel -r`, les fichiers présents dans le répertoire d’accueil de l’utilisateur seront également supprimés. Les fichiers de l’utilisateur présents dans d’autres répertoires ne seront pas supprimés.

[Module comptes](../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md) · [Module permissions](../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md) · [TP comptes](../tp/administration-linux/module-10/index.md).
