# Tutoriel — Installer Debian

**Démarche pédagogique reliée au module 2 et aux deux TP d’installation.** Les scénarios sources ciblent Debian 11 ; les références actuelles restent dans le cours optimisé. Les choix de firmware, réseau et comptes doivent correspondre au laboratoire.

## Préparer la fiche de machine

| Élément | Station du TP | Serveur du TP |
|---|---|---|
| Disque dynamique | 40 Go | 10 Go |
| RAM | 4 096 Mo | 2 048 Mo |
| Média | Netinstall | DVD |
| Réseau source | Bridged vers le laboratoire / Internet | Bridged vers le laboratoire |
| Logiciels | Bureau et utilitaires usuels | SSH et utilitaires usuels |

Identifier l’ISO, sa provenance officielle et son empreinte ; choisir BIOS ou UEFI et vérifier le disque cible. La liste « Debian 10.x » d’un hyperviseur ne démontre pas quelle version sera installée depuis l’ISO.

## Installer

1. Connecter le média à la VM puis démarrer dessus.
2. Choisir l’installeur graphique ou texte : cela ne décide pas de la présence finale d’un bureau.
3. Choisir langue, pays et clavier ; définir nom d’hôte et éventuel domaine DNS.
4. Configurer root et l’utilisateur ordinaire selon la politique retenue. Dans les TP sources, un mot de passe root est demandé.
5. Relire le partitionnement avant validation. Le TP graphique utilise LVM : 2 048 MB swap, 20 GB ext4 pour `/`, 5 GB FAT32 pour `/windows`, reste ext4 pour `/home`.
6. Pour le serveur, sélectionner le mode assisté avec LVM et `/home`, `/var`, `/tmp` séparés.
7. Choisir miroir/proxy selon le scénario ; le TP serveur désactive les miroirs pendant l’installation.
8. Sélectionner les tâches logicielles prévues, puis installer le chargeur adapté au mode de démarrage.
9. Redémarrer sur le disque et ouvrir une session ordinaire.

## Contrôler le résultat

```bash
cat /etc/os-release
uname -r
lsblk -f
findmnt
ip address
ip route
systemctl get-default
systemctl --failed
```

Ces contrôles complémentaires distinguent distribution et noyau, périphériques et montages, interface et routage, cible et services en échec. Examiner le résultat plutôt que chercher une sortie identique aux captures.

Vérifier le mécanisme d’élévation prévu avant de lancer une mise à jour. Un compte créé par le parcours avec mot de passe root n’a pas nécessairement sudo. Examiner ensuite les dépôts correspondant à la version installée, rafraîchir leurs index et lire les mises à jour proposées. Ne pas remplacer le nom de code pour obtenir arbitrairement des paquets plus récents.

## Compte rendu

Noter version, firmware, disposition de volumes, comptes d’administration, logiciels sélectionnés et résultats réseau. En cas d’écart, revenir au choix qui l’explique : sélection des tâches pour le bureau, miroir pour les paquets, partitionnement pour les montages.

[Cours d’installation](../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian.md) · [Énoncés et solutions](../tp/administration-linux/module-02/index.md) · [Guide officiel Debian](https://www.debian.org/releases/stable/installmanual).
