# Dépannage — Service Linux en échec

```mermaid
flowchart LR
    S["status<br/>état et code de sortie"] --> J["journalctl<br/>première erreur utile"] --> C["configuration<br/>syntaxe · droits · dépendances"] --> R["restart<br/>une fois la cause corrigée"] --> P["preuve fonctionnelle<br/>port puis requête"]
```

<p class="tssr-caption">Un état <code>active</code> ne prouve pas à lui seul que le service répond correctement : terminer par un test fonctionnel.</p>

```bash
systemctl status nom.service
journalctl -u nom.service -b --no-pager
systemctl cat nom.service
ss -tulpn
```

1. Lire la première erreur utile, pas seulement la dernière ligne.
2. Vérifier syntaxe, fichiers, permissions, dépendances et port occupé.
3. Tester la configuration avec l’outil du service lorsqu’il existe.
4. Redémarrer une seule fois après correction.
5. Confirmer l’état, le port et un test fonctionnel.
