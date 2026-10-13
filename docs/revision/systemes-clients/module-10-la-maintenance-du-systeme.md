# Fiche de révision — Module 10 — La maintenance du système

## Trois approches de diagnostic

| Approche | À retenir |
| --- | --- |
| Temps réel | Observer ce qui se passe maintenant. |
| Historique | Comprendre ce qui s'est produit sur une période passée. |
| Diagnostic automatique | Utiliser les outils intégrés de Windows, sans supposer qu'ils détaillent leur correction. |

## Outils du module

- **Gestionnaire des tâches** : processus, services, processeur et mémoire.
- **Observateur d'évènements** : évènements enregistrés par le système.
- **Moniteur de ressources** : processeur, mémoire, réseau et disque.
- **Analyseur de performances** : compteurs et collectes planifiées.
- **Historique de fiabilité** : état de santé synthétique dans le temps.

Les valeurs de ressources relevées dans un TP dépendent de la machine et de la charge observée.

## Points de restauration

- Ils enregistrent des modifications système, dont le registre, certains fichiers système et les programmes.
- Ils ne sauvegardent pas les données utilisateur.
- La protection s'active par volume ; le support décrit un stockage FIFO.
- `sysdm.cpl` sert, dans le scénario, à accéder à la Protection du système et à créer un point manuel.

## WinRE et récupération

- WinRE est un environnement léger de récupération distinct du système principal.
- Le support cite notamment **Maj + Redémarrer**, `shutdown /r /o`, les paramètres de récupération et le support d'installation pour y accéder.
- Les options avancées incluent la restauration du système, l'image système si elle existe, l'invite de commandes et les options de démarrage.
- Le support mentionne le mode sans échec ainsi que la réparation du MBR et du magasin BCD, sans détailler de procédure de réparation.

## Contrôles à savoir expliquer

1. Relever un évènement dans l'Historique de fiabilité.
2. Observer les quatre ressources pendant une charge de laboratoire.
3. Vérifier la protection et le point de restauration avant le passage par WinRE.
4. Après restauration, distinguer les composants système restaurés des données utilisateur conservées.

## Liens

- [Cours du module](../../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme.md)
- [TP et correction](../../tp/systemes-clients/module-10/index.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-10-la-maintenance-du-systeme.md)

## Provenance

- **A — Sources TSSR :** support, énoncé et correction M10 lus dans Drive en lecture seule.
- **B — Structuration pédagogique :** organisation de la fiche à partir des notions et contrôles source-faithful.
