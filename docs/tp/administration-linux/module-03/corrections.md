# Corrections — Module 03 — Démarrage d’une distribution Debian

!!! warning
    Les actions sur les cibles et services modifient le comportement futur de la machine. Vérifier l’état avant et après chaque commande ; ne pas appliquer ces réglages à un serveur de production sans procédure de changement.

**Sources originales (A) :** `M03TP01 - Solution - Démarrer et arrêter Debian` et `M03TP02 - Solution - Gérer les services`.
**Correction du portail (B) :** critères de contrôle et procédures reformulées à partir des solutions commentées TSSR.

## Cible systemd par défaut

Les contrôles suivants séparent la cible configurée pour le prochain démarrage de la cible effectivement active :

```bash
systemctl get-default
systemctl list-units --type=target
systemctl isolate graphical.target
```

Le TP demande d’identifier la cible par défaut, de choisir la cible non graphique appropriée à partir de la documentation systemd, de redémarrer pour constater l’effet, puis de charger à nouveau l’environnement graphique. Le résultat attendu doit être observé, pas seulement déduit de la commande exécutée.

## Services SSH et cron

Pour chaque service, distinguer son état immédiat et son activation au démarrage :

```bash
systemctl status ssh
systemctl status cron
systemctl is-enabled cron
systemctl stop cron
systemctl disable cron
```

Après un redémarrage, contrôler que le résultat correspond bien à l’état d’activation choisi. La restauration demandée par le TP doit être vérifiée avec `systemctl is-enabled` et `systemctl status`, puis documentée.

## Contrôle de dépannage

En cas d’échec d’un service, consulter d’abord son état et son journal avant de relancer une action :

```bash
systemctl status nom.service
journalctl -u nom.service -b --no-pager
```

## Voir aussi

- [Présentation du TP](index.md)
- [Énoncés du TP](enonces.md)
- [Cours — Démarrage d’une distribution Debian](../../../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md)
- [Fiche de révision — Module 03](../../../revision/administration-linux/module-03-demarrage-d-une-distribution-debian.md)
- [Dépannage — Service Linux en échec](../../../troubleshooting/service-linux-echec.md)
