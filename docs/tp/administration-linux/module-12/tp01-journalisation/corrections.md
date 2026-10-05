# Correction — TP01 — Gestion de la journalisation

**Sources originales (A) :** solution M12TP01 et support M12 Drive. **Correction (B) :** synthèse contrôlable.

La solution consulte `/var/log/auth.log`, filtre les ouvertures de session et exclut les événements `CRON` avant la redirection. `journalctl`, éventuellement avec `--dmesg`, fournit les informations sur `sda`.

Dans `/etc/rsyslog.conf`, activer la facility `cron`, définir le fichier de destination, créer les répertoires nécessaires puis redémarrer le service. Une règle de priorité `warn` alimente le journal des avertissements. Les messages `logger` de test valident les règles : un avertissement `cron` doit apparaître dans les deux journaux, un message `info` seulement dans celui de cron.
