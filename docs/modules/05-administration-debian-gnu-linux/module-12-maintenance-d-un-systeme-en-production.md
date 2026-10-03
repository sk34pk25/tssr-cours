# Module 12 — Maintenance d’un système en production

**Sources originales (A) :** support et TP TSSR de journalisation, planification et analyse système.
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Observer l’état d’un système et ses journaux.
- Distinguer analyse proactive et analyse réactive.
- Planifier une tâche et contrôler son exécution.

## Observer avant d’agir

La source distingue les outils d’analyse proactive et réactive. Les journaux servent à comprendre les événements du système ; ils sont une source de diagnostic avant une action corrective. Une maintenance de production demande aussi une traçabilité des opérations et de leurs résultats.

```bash
journalctl -b
systemctl --failed
df -h
```

## Journalisation et planification

La gestion des logs vise à conserver les informations utiles sans saturer le stockage. La planification exécute une action à une date ou selon une périodicité ; la commande, l’utilisateur d’exécution, la sortie et le contrôle doivent être connus avant l’automatisation.

## À retenir

La maintenance est un cycle : observer, diagnostiquer, agir de façon limitée, contrôler, puis documenter. Une automatisation sans contrôle ne remplace pas ce cycle.

## Vérification des acquis

1. Quelle commande affiche les journaux du démarrage courant ?
2. Pourquoi contrôler une tâche planifiée après sa création ?

??? success "Réponses"
    1. `journalctl -b`.
    2. Pour confirmer qu’elle s’exécute avec le bon contexte et le résultat attendu.
