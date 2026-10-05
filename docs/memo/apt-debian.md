# Mémo — APT et paquets Debian

**Sources originales (A) :** support et TP M06 « Gestion des paquets logiciels » TSSR.
**Mémo (B) :** synthèse de révision reformulée.

| Besoin | Commande | Contrôle attendu |
|---|---|---|
| Actualiser les index | `apt update` | Les versions disponibles sont connues ; rien n'est encore installé |
| Rechercher ou décrire | `apt search`, `apt show` | Nom, version et dépendances compris avant installation |
| Installer | `apt install paquet` | Relire les paquets ajoutés et leurs dépendances |
| Mettre à niveau | `apt upgrade` / `apt full-upgrade` | Distinguer l'absence ou la présence de changements de dépendances |
| Retirer | `apt remove` / `apt purge` | Savoir si la configuration doit être conservée |
| Interroger localement | `dpkg -L`, `dpkg -l` | Fichiers et état du paquet vérifiés |

Les dépôts sont déclarés dans `/etc/apt/sources.list` ou dans `sources.list.d`. Une ligne `deb` décrit des paquets binaires ; `deb-src` rend les sources disponibles. Ne pas mélanger des branches Debian ni modifier des dépôts hors contexte de laboratoire ou de changement approuvé.

Voir aussi : [Commandes GNU/Linux](../commandes/linux.md) · [Module 06 — Gestion des paquets](../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels.md).
