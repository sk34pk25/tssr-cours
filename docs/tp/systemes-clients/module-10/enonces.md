# Énoncé — Module 10 — La maintenance du système

## Contexte

Vous découvrez les tableaux de bord de diagnostic en temps réel et sur historique. Vous observez une VM en fonctionnement, créez un point de restauration puis examinez les conséquences d'une restauration via WinRE.

**Durée estimée : 1 heure 30 minutes.** Lisez l'ensemble du TP avant de commencer.

## Environnement

- VM `Win10-XX` ;
- VM Workstation ;
- gros fichier de charge mentionné dans les ressources de laboratoire.

Le chemin de cette ressource est absent de la source : **`[CHEMIN A INDIQUER]`**. Ne le remplacez pas par un partage, une URL ou un fichier inventé. Si WinRE demande une authentification, utilisez les identifiants fournis par le formateur.

## 1. Historique de fiabilité

Affichez et analysez les problèmes majeurs survenus sur votre système :

- depuis le démarrage de la VM, de manière synthétique ;
- de manière détaillée sur le dernier évènement critique.

Si aucun évènement critique n'est survenu depuis le début du module, l'énoncé prévoit un arrêt brutal **PowerOFF** de la VM Workstation pour créer l'observation. Cette action appartient exclusivement au scénario pédagogique et ne constitue pas une procédure générale de maintenance.

## 2. Génération de charge et observation en temps réel

Lancez les tâches prévues : copie du gros fichier disponible à l'emplacement **`[CHEMIN A INDIQUER]`**, console PowerShell, Gestionnaire des tâches, Edge et autres activités demandées.

Avec les outils adaptés, recherchez les processus qui consomment le plus de ressources et complétez vos observations :

| Ressource | Observation dans votre laboratoire |
| --- | --- |
| Processeur | |
| Mémoire | |
| Réseau | |
| Disque dur | |

## 3. Protection et point de restauration

1. Vérifiez la configuration de la Protection du système.
2. Vérifiez les points de restauration disponibles.
3. Créez, si nécessaire, un point de restauration manuel.
4. Créez des fichiers dans le dossier `Documents` de l'utilisateur en cours.
5. Désactivez ou désinstallez les fonctionnalités Windows indiquées : Lecteur Windows Media et IE11.

## 4. WinRE et restauration

À l'aide de WinRE, restaurez l'état du système avec le dernier point de restauration disponible, puis démarrez Windows normalement.

Vérifiez les éléments demandés par le scénario :

- les fichiers du dossier `Documents` du dernier utilisateur ;
- le lancement d'IE11 ;
- le lancement du Lecteur Windows Media.

Expliquez l'observation à partir du rôle d'un point de restauration.

Une fois votre tentative terminée, consultez la [correction](corrections.md).
