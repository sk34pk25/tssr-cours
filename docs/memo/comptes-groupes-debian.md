# Mémo — Comptes et groupes Debian

**Sources originales (A) :** support et solution M10TP01 Drive. **Mémo (B) :** sélection structurée des commandes et contrôles présents dans les sources.

## Lire sans modifier directement

```bash
id <utilisateur>
getent passwd <utilisateur>
getent group <groupe>
```

`/etc/passwd`, `/etc/shadow`, `/etc/group` et `/etc/gshadow` décrivent les identités et groupes. Les sources interdisent leur modification directe : employer les commandes prévues.

## Créer et modifier

```bash
groupadd <groupe>
useradd -m -s /bin/bash -g <groupe-principal> -G <groupe1,groupe2> <utilisateur>
passwd <utilisateur>
usermod -L <utilisateur>
```

`-m` crée le répertoire personnel, `-s` fixe le shell, `-g` le groupe principal et `-G` les groupes secondaires. Lors de l’ajout de groupes secondaires à un compte existant, la source rappelle l’usage de `-a` avec `-G` pour préserver les appartenances déjà présentes.

## Élévation de privilèges

```bash
su -
sudo <commande>
```

Éviter une session `root` durable. `su -` charge l’environnement de l’identité cible ; `sudo` délègue uniquement les commandes autorisées par `/etc/sudoers`.

Voir le TP M10 et le [cours](../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md).
