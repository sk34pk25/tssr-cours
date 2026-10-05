# Fiche de révision — Module 12 — Maintenance d’un système en production

**Sources originales (A) :** support et TP M12 Drive. **Fiche (B) :** synthèse reformulée.

## Observer avant d’agir

`systemctl status`, `journalctl`, `journalctl -u <service>`, `journalctl -p <priorité>` et `journalctl -f` servent à analyser le comportement des services. Les priorités vont de `emerg` à `debug`; `rsyslog` applique des règles par facility et priorité pour écrire ou transférer les journaux.

## Planifier sans perdre la trace

Les crontabs utilisateur et système sont distinctes. Une tâche de maintenance doit préciser sa périodicité, sa commande, son destinataire et une preuve durable de son exécution. Le TP M12 utilise notamment une sortie de processus horodatée dans `/var/log/procstatus.log`.

## Processus et sécurité

Relever PID, utilisateur et terminal avant un signal. `SIGTERM` est la première demande d’arrêt ; `SIGKILL` est un dernier recours. Éviter les processus système et tout shell non explicitement concerné par une intervention de laboratoire.

Pour approfondir : [cours complet](../../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md) · [TP01](../../tp/administration-linux/module-12/tp01-journalisation/index.md) · [TP02](../../tp/administration-linux/module-12/tp02-planification/index.md) · [TP03](../../tp/administration-linux/module-12/tp03-informations-systeme/index.md).

## À connaître absolument

- Interroger les journaux avec journalctl.
- Planifier des tâches avec cron et les timers adaptés.
- Collecter les informations système utiles au diagnostic.
- Documenter une intervention puis vérifier le retour au service.

## Méthode express

1. Identifier le besoin ou le symptôme.
2. Relever l’état actuel sans le modifier.
3. Appliquer une seule action contrôlée.
4. Mesurer le résultat.
5. Documenter et, si nécessaire, revenir en arrière.

## Pièges fréquents

- Confondre l’objectif attendu avec l’action réalisée.
- Modifier plusieurs paramètres avant d’effectuer un test.
- Oublier les différences de version ou de droits.
- Valider uniquement à l’écran sans test fonctionnel.

## Checklist de maîtrise

- [ ] Interroger les journaux avec journalctl.
- [ ] Planifier des tâches avec cron et les timers adaptés.
- [ ] Collecter les informations système utiles au diagnostic.
- [ ] Documenter une intervention puis vérifier le retour au service.
- [ ] Je sais expliquer la vérification et le retour arrière.

## Questions flash

1. Quels sont les concepts indispensables de « Maintenance d’un système en production » ?
2. Quelle preuve technique montre que le résultat est conforme ?
3. Quelle action serait risquée sans sauvegarde ou instantané ?

Pour approfondir : [cours complet](../../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md).
