# Énoncé — TP01 — Gestion de la journalisation

**Source originale (A) :** énoncé M12TP01 Drive. **Énoncé (B) :** reformulation structurée.

Sur le serveur de laboratoire, relever les ouvertures de session dans les journaux et les reporter dans `/adm/sessions.txt`. Rechercher également les informations concernant le disque `sda`, notamment son nombre de secteurs et sa taille.

Configurer ensuite `rsyslog` pour journaliser `cron` dans `/adm/logs/cron.log` et tous les avertissements dans `/adm/logs/warnings.log`. Générer des messages de niveau avertissement avec `logger`, puis vérifier les fichiers attendus.
