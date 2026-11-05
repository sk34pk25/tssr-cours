# Mémo — Comptes et groupes Debian

**Synthèse des modules 10 et 11 ; commandes d’exemple à adapter au laboratoire.**

| Besoin | Commande ou fichier | Distinction utile |
|---|---|---|
| Compte et groupe principal | `/etc/passwd` | UID, GID, home, shell |
| Mot de passe et vieillissement | `/etc/shadow` | Expiration du secret et du compte distinctes |
| Groupe | `/etc/group` | Membres supplémentaires, pas toute appartenance principale |
| Groupe protégé | `/etc/gshadow` | Quatre champs ; le support montre à tort une structure shadow |
| Groupes du compte | `id francois` | Confirmer dans une nouvelle session après modification |
| Ajouter un groupe | `groupadd documentation` | Créer avant de l’utiliser |
| Ajouter une appartenance | `usermod -aG documentation francois` | `-G` seul remplace la liste supplémentaire |
| Changer un secret | `passwd francois` | Saisie interactive |
| Renouvellement imposé | `passwd -e frederic` | Secret expiré, pas suppression du compte |
| Verrouiller le mot de passe | `usermod -L fabrice` | Autres méthodes d’accès à considérer |
| Expirer le compte du TP | `usermod -e 1 fabrice` | À distinguer du seul verrouillage du mot de passe |

Le TP interdit l’édition directe des quatre fichiers de comptes. Pour Frédéric, conserver `/home/frederic` demandé par l’énoncé, malgré le `/home/fred` d’un exemple de correction. Les fichiers extérieurs au home ne sont pas tous supprimés par `userdel -r`.

## Partage de répertoires

Le groupe propriétaire et les triplets u/g/o contrôlent les permissions classiques. SetGID sur le répertoire fait hériter son groupe ; l’umask et le mode de création déterminent encore les droits du nouvel objet. Sticky restreint la suppression, avec les exceptions du propriétaire du répertoire et d’un utilisateur privilégié.

Tester lecture, création, écriture et suppression avec les comptes réellement attendus. Une connexion déjà ouverte peut conserver ses anciens groupes. Un succès sous root ne prouve pas que les permissions sont correctes pour les autres comptes.

[Module comptes](../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md) · [Module permissions](../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires.md) · [TP comptes](../tp/administration-linux/module-10/index.md).
