# Correction — TP03 — Informations sur le système

**Sources originales (A) :** solution M12TP03 et support M12 Drive. **Correction (B) :** synthèse contrôlable.

La solution utilise les outils de mémoire et `lscpu`, puis `ps` pour les processus. Pour éviter les faux positifs, elle propose notamment `ps -eo comm --no-headers | grep -E 'd$' | wc -l` ou une expression `awk` équivalente.

Pour l’intervention, relever le PID et le terminal avant tout signal. Essayer d’abord `SIGTERM` avec `kill`, vérifier si le processus disparaît, puis n’utiliser `SIGKILL` qu’en dernier recours. Ne pas viser un processus système ou un shell non prévu par le TP.
