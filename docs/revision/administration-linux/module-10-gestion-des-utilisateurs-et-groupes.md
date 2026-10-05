# Fiche de révision — Module 10 — Gestion des utilisateurs et groupes

**Sources originales (A) :** support, énoncé et solution M10TP01 Drive. **Fiche (B) :** synthèse reformulée sans identifiants de démonstration.

## À connaître absolument

- UID identifie l’utilisateur ; GID identifie son groupe principal ; des groupes secondaires peuvent compléter ses appartenances.
- `/etc/passwd`, `/etc/shadow`, `/etc/group` et `/etc/gshadow` sont des sources d’information : les changements passent par les commandes dédiées.
- `useradd -m`, `-s`, `-g` et `-G` créent un compte avec son répertoire, shell et groupes ; `id` contrôle le résultat.
- `groupadd`, `groupmod`, `groupdel` et `gpasswd` administrent les groupes ; `usermod`, `userdel` et `passwd` gèrent le cycle de vie des comptes.

## Privilèges

La source conseille de limiter l’usage direct de `root`. `su -` effectue un changement complet d’identité ; `sudo` délègue des tâches définies dans `/etc/sudoers` et emploie le mot de passe de l’utilisateur appelant.

## Contrôles du TP M10

1. Créer les groupes avant les comptes qui les utilisent.
2. Relever les groupes et le shell avec `id` et les fichiers de configuration, sans les éditer directement.
3. Forcer le changement de mot de passe ou verrouiller/désactiver le compte selon le scénario, puis vérifier le comportement.

## Checklist de maîtrise

- [ ] Distinguer groupe principal et groupes secondaires.
- [ ] Créer un compte avec son répertoire et son shell.
- [ ] Vérifier une appartenance avec `id`.
- [ ] Expliquer le verrouillage de mot de passe et la désactivation d’un compte.

Pour approfondir : [cours complet](../../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md) · [TP](../../tp/administration-linux/module-10/index.md) · [mémo](../../memo/comptes-groupes-debian.md).
