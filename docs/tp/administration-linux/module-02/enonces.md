# Énoncés — Module 02 — Installation d’une distribution Debian

!!! danger "Avant une manipulation de stockage"
    Réaliser ces travaux pratiques dans l’environnement de laboratoire. Vérifier le disque sélectionné avant toute écriture et prévoir un retour arrière adapté à la solution de virtualisation utilisée.

**Sources originales (A) :** `M02TP01 - Énoncé - Installation de Debian AVEC interface graphique` et `M02TP02 - Énoncé - Installation de Debian SANS interface graphique`.
**Énoncés du portail (B) :** synthèse structurée des tâches et paramètres explicitement indiqués dans les sources TSSR.

## TP01 — Installation avec interface graphique

**Durée indicative de la source :** 30 à 45 minutes.

1. Récupérer l’image d’installation Debian fournie par le laboratoire et créer une machine virtuelle avec une interface réseau permettant l’accès Internet, un disque dynamique de 40 Go et 4096 Mo de mémoire vive.
2. Démarrer l’installation graphique, définir les paramètres régionaux et créer le compte administrateur ainsi qu’un compte utilisateur de laboratoire.
3. Choisir le partitionnement manuel avec LVM sur le disque détecté. La source demande les volumes suivants :

   | Volume | Système de fichiers | Point de montage |
   | --- | --- | --- |
   | 2048 Mo | swap | — |
   | 20 Go | ext4 | `/` |
   | 5 Go | FAT32 | `/windows` |
   | espace restant | ext4 | `/home` |

4. Configurer le gestionnaire de paquets conformément au laboratoire, installer l’environnement de bureau Debian et les utilitaires usuels du système, puis installer GRUB sur le disque cible indiqué.
5. Terminer l’installation et redémarrer la machine virtuelle.

## TP02 — Installation sans interface graphique

**Durée indicative de la source :** 45 minutes à 1 heure.

1. Récupérer l’image d’installation Debian sans interface graphique fournie par le laboratoire et créer une machine virtuelle avec réseau de laboratoire, disque dynamique de 10 Go et 2048 Mo de mémoire vive.
2. Choisir le mode d’installation non graphique, définir les paramètres régionaux et créer les comptes demandés par le laboratoire.
3. Utiliser le partitionnement assisté avec LVM sur le disque SCSI sélectionné. La source demande des partitions séparées pour `/home`, `/var` et `/tmp`.
4. Ne pas analyser de support additionnel ni utiliser de miroir, installer le serveur SSH et les utilitaires usuels, puis installer GRUB sur le disque cible indiqué.
5. Terminer l’installation et redémarrer la machine virtuelle.

## À rendre et vérifier

- Documenter les paramètres effectivement appliqués dans le laboratoire.
- Vérifier le démarrage depuis le disque installé, l’authentification et la présence des points de montage attendus.
- Ne consulter la correction qu’après la tentative : voir les corrections.

## Voir aussi

- [Présentation du TP](index.md)
- [Cours — Installation d’une distribution Debian](../../../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian.md)
- Corrections du TP
- [Fiche de révision — Module 02](../../../revision/administration-linux/module-02-installation-d-une-distribution-debian.md)
