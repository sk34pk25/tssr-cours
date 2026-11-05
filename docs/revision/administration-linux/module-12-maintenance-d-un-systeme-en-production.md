# Fiche de révision — Module 12 — Maintenance d’un système en production

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

## Journal systemd

## Tableau de mémorisation

| Besoin | Commande du parcours |
|---|---|
| Lire le journal accessible | `journalctl` |
| Suivre les nouvelles entrées | `journalctl -f` |
| Filtrer un service | `journalctl -u cron.service` |
| Filtrer un PID | `journalctl _PID=1` |
| Filtrer un programme | `journalctl /usr/sbin/sshd` |
| Erreurs et niveaux plus graves | `journalctl -p err` |
| Messages du noyau | `journalctl -k` |

## Se tester sans regarder


1. Une crontab utilisateur contient-elle un champ utilisateur ?
2. Comment vérifier que cron a émis un événement et qu’une règle l’a bien écrit ?
3. Pourquoi la colonne free n’est-elle pas seule suffisante ?
4. PuTTY tourne-t-il sur le serveur Debian de ce scénario ?

??? success "Réponses"
    1. Non ; le champ supplémentaire concerne les tables système.
    2. Générer un message identifié avec logger puis examiner les destinations attendues.
    3. Des caches sont récupérables ; available apporte une estimation différente.
    4. Non ; le serveur voit notamment sshd et le shell distant.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md) · [TP du parcours](../../tp/administration-linux/index.md).
