# Dépannage — Service Linux en échec

**Sources : Administration Debian GNU/Linux, Module 3 « Démarrage d’une distribution Debian » et Module 12 « Maintenance d’un système en production » (supports de cours).** Les commandes et les libellés sont repris tels quels.

## 1. Voir le statut d’un service

```text
systemctl status cron.service
```

## 2. Lire les journaux (journalctl)

| Besoin (libellé du support) | Commande |
|---|---|
| Regarder les logs complets de chaque service | `journalctl` |
| Visualiser les logs en temps réel | `journalctl -f` |
| Voir les logs d’un service donné : `journalctl -u [service]` | `journalctl -u cron` |
| Voir les logs d’un PID donné : `journalctl _PID=[n° pid]` | `journalctl _PID=1` |
| Voir les logs d’un programme | `journalctl /usr/sbin/sshd` |
| Voir les logs par niveau de priorité : `journalctl -p <level>` | `journalctl -p err` |
| Cumuler les options | `journalctl -f /usr/sbin/sshd -p info` |

Le fichier de configuration de journald est /etc/systemd/journald.conf.

## 3. Agir sur le service

| Action (libellé du support) | Commande |
|---|---|
| Démarrer un service | `systemctl start cron.service` |
| Arrêter un service | `systemctl stop cron.service` |
| Redémarrer | `systemctl restart cron.service` |
| Activer un service | `systemctl enable networking` |
| Désactiver | `systemctl disable networking` |
| Lister les unités | `systemctl list-units` puis `systemctl list-units --all` |

- [Cours — Démarrage d’une distribution Debian](../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md)
- [Cours — Maintenance d’un système en production](../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md)
- [TP Administration Debian — Module 12](../tp/administration-linux/module-12/index.md)
