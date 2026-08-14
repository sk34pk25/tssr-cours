# Dépannage — Windows instable

```mermaid
flowchart LR
    A["Symptôme horodaté"] --> B["Événements et fiabilité"] --> C["Changement récent<br/>pilote · mise à jour · logiciel"] --> D["Réparation ciblée"] --> E["Test et documentation"]
```

<p class="tssr-caption">Corréler le symptôme avec l’heure et le changement observé évite de lancer des réparations générales sans hypothèse.</p>

1. Noter l’heure et le symptôme précis.
2. Consulter Observateur d’événements et Moniteur de fiabilité.
3. Vérifier espace disque, mises à jour et pilotes récents.
4. Tester les fichiers système dans une console administrateur :

```cmd
DISM /Online /Cleanup-Image /RestoreHealth
sfc /scannow
```

5. Utiliser un point de restauration uniquement après avoir évalué les changements qui seront annulés.
6. Vérifier le retour à un état stable et documenter la cause.
