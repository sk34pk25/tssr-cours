# Mémo — APT et paquets Debian

**Repères issus du module 6 et de ses TP ; les corrections du support sont expliquées dans le cours optimisé.**

| Besoin | Commande | Ce que cela établit |
|---|---|---|
| Rafraîchir les index | `apt update` | Métadonnées disponibles, sans installation |
| Rechercher | `apt search motif` ou `apt-cache search motif` | Paquets proposés par les index configurés |
| Décrire | `apt show paquet` | Version et dépendances proposées |
| Installer | `apt install paquet` | Lire le projet avant confirmation |
| Mettre à jour | `apt upgrade` | Pas de retrait de paquet existant |
| Mise à jour pouvant retirer | `apt full-upgrade` | Examiner précisément les suppressions |
| Retirer / purger | `apt remove paquet` / `apt purge paquet` | Différence sur les configurations gérées |
| Cache | `apt clean` | Archives téléchargées supprimées du cache |
| État local | `dpkg -l 'motif*'` | Base dpkg, pas tout le dépôt distant |
| Fichiers d’un paquet | `dpkg -L paquet` | Chemins enregistrés localement |
| Propriétaire d’un chemin | `dpkg -S /usr/bin/scp` | Paquet enregistré pour ce chemin |

Les dépôts sont dans `sources.list` ou `sources.list.d` ; `deb` concerne les binaires et `deb-src` les sources. Les formats et composants dépendent de la version. Le TP mélange Bullseye et Bookworm : confirmer l’OS cible avant toute édition. Changer le nom de code peut engager une migration majeure.

L’historique se lit dans `/var/log/apt/history.log` et `/var/log/dpkg.log`, y compris leurs rotations. `apt-get search` est une erreur de la source ; utiliser les commandes de recherche du tableau. `apt upgrade` et `apt-get upgrade` n’ont pas exactement la même politique d’ajout de dépendances.

[Cours et justifications](../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels.md) · [TP](../tp/administration-linux/module-06/index.md).
