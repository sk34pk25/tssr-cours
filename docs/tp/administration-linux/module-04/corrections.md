# Correction — Module 04 — Debian en mode maintenance

!!! warning "Procédure de secours"
    Le démarrage de maintenance accorde des privilèges élevés. Il sert à réparer une machine de laboratoire ou un système dont l'accès est explicitement autorisé ; il ne remplace ni une gestion normale des comptes ni une procédure de changement en production.

**Sources originales (A) :** `M04TP01 - Solution - Debian en mode maintenance` et le support M04 TSSR.
**Correction du portail (B) :** critères de contrôle et étapes reformulées à partir des solutions commentées TSSR.

## Maintenance depuis GRUB

La source présente deux comportements de maintenance depuis GRUB : une voie demandant le mot de passe `root`, et une voie de laboratoire ouvrant directement un shell de secours. Dans cette seconde situation, le système de fichiers racine est initialement en lecture seule. La correction attend que l'apprenant :

1. vérifie qu'il travaille sur la machine virtuelle cible et relève la disposition de clavier signalée par la source ;
2. constate l'état du système de fichiers racine avant toute écriture ;
3. remonte uniquement la racine en lecture-écriture dans le laboratoire ;
4. vérifie qu'un fichier de test peut être créé dans `/root` ;
5. explique qu'un répertoire `/home` absent ou vide peut provenir d'un volume logique distinct qui n'a pas été monté ;
6. synchronise les écritures avant l'arrêt imposé par le contexte de laboratoire.

La commande de contrôle mentionnée dans la solution est :

```bash
mount -o remount,rw /
sync
```

Ne pas reproduire ces actions sur une machine de production sans sauvegarde, autorisation et procédure approuvée.

## Mode de secours depuis le média d'installation

Après le démarrage du média d'installation, la solution demande de sélectionner le volume logique qui contient réellement le système de fichiers racine. Le shell ouvert est un shell `root` de récupération ; le prompt ou la variable `USER` permet de le constater. La commande `logname` peut ne rien renvoyer dans ce contexte particulier.

Le contrôle attendu dans `/etc/passwd` est volontairement réversible : ajouter uniquement un texte de test dans le laboratoire, constater que l'écriture est possible, supprimer seulement cette ligne, puis enregistrer et quitter. Aucun changement d'identité, de mot de passe ou de configuration persistante ne doit être conservé.

## Critères de réussite

- La voie de démarrage utilisée est correctement identifiée (GRUB ou média d'installation).
- Le système de fichiers monté correspond au système Debian installé, pas à une cible inconnue.
- Les actions d'écriture sont limitées au test demandé et restaurées.
- Le rôle administratif du shell et l'absence de demande de mot de passe dans le scénario de secours sont expliqués.
- Le résultat et les précautions prises sont consignés.

## Voir aussi

- [Présentation du TP](index.md)
- [Énoncé du TP](enonces.md)
- [Cours — Debian en mode maintenance](../../../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance.md)
- [Fiche de révision — Module 04](../../../revision/administration-linux/module-04-debian-en-mode-maintenance.md)
