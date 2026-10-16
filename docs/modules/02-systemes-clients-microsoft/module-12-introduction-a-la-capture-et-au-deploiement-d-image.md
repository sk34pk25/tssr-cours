# Module 12 — Introduction à la capture et au déploiement d’image

## Objectifs

Comprendre pourquoi une organisation prépare des systèmes de référence, généraliser un master avec Sysprep, distinguer les méthodes de capture et de déploiement citées dans le support, et interpréter le TP de clonage VMware.

## Industrialiser l’installation

Le support associe les images de référence à la productivité, à l’homogénéité du parc et à la disponibilité de systèmes prêts pour un nouveau collaborateur ou le remplacement d’un poste défaillant.

## Préparer le master

Le poste de référence est installé, configuré et complété par les applications validées par la DSI. Il est ensuite préparé au clonage. Le support indique qu’une version est préparée par génération de systèmes.

## Généraliser avec Sysprep

Sysprep remet à zéro les paramètres personnalisés du master pour rendre les postes uniques dans l’entreprise. Le support présente les options suivantes :

- **OOBE** : interaction utilisateur au redémarrage ;
- **Généraliser** : remise à zéro des paramètres personnalisés ;
- **Arrêter** : arrêt du master avant la capture.

```cmd
C:\Windows\System32\sysprep\sysprep.exe /oobe /generalize /shutdown
```

Les journaux Sysprep sont consultables après redémarrage dans les répertoires Panther, sous `C:\Windows\System32\Sysprep`, notamment au format TXT et EVT.

### Limites attestées

Le support signale des incompatibilités possibles avec certaines configurations, rôles serveur, jonctions ou applications Microsoft Store. Les pilotes installés manuellement sont supprimés par défaut, sauf usage du paramètre `/PersistAllDeviceInstalls` mentionné dans le support. Sysprep ne supprime pas les comptes utilisateurs.

## Capturer une image

Une fois le système de référence arrêté, le support demande de ne pas le redémarrer avant la capture. Deux méthodes sont présentées :

| Méthode | Éléments attestés |
| --- | --- |
| Automatisée | serveur de déploiement, amorçage PXE, images d’amorçage disponibles sur le serveur |
| Manuelle | support WinPE amorçable et `dism` |

WinPE est présenté comme un environnement léger contenant des outils dédiés à la capture et au déploiement. Le support cite `diskpart`, `mount`, `drvload`, `net use` et PowerShell, sans détailler ici leurs procédures.

## Exploiter et déployer

Le format WIM peut être mis à jour hors ligne avec `dism`, présent dans WinPE et Windows. Le déploiement peut être réalisé en masse par serveur — le support cite WDS et PXE — ou au cas par cas depuis WinPE avec `dism`. La préparation du stockage cible est citée comme une étape du déploiement manuel.

## Mise en pratique M12 : le clone VMware

Le TP ne réalise pas une capture WIM ni un déploiement WDS réel. Il prépare `Win10-XX`, exécute Sysprep, puis crée un **Full Clone** VMware. Le clone est configuré au premier démarrage et comparé au master sur des observations de laboratoire : volumes, comptes, IP, snapshots, points de restauration, pilote d’imprimante et règle ICMP.

Ces noms et résultats appartiennent au scénario ; ils ne constituent pas des valeurs universelles.

## Synthèse

Un master homogène peut être généralisé avant capture. Le support distingue l’automatisation par serveur/PXE de la méthode manuelle WinPE/DISM. Le TP applique cette logique par un clonage VMware afin d’observer les conséquences de Sysprep dans le laboratoire.

## Pour pratiquer

- [TP du module](../../tp/systemes-clients/module-12/index.md)
- [Énoncé](../../tp/systemes-clients/module-12/enonces.md)
- [Correction](../../tp/systemes-clients/module-12/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-12-introduction-a-la-capture-et-au-deploiement-d-image.md)
- [Kahoot M12](../../kahoot/02-systemes-clients-microsoft-12-introduction-a-la-capture-et-au-deploiement-d-image.md)

## Provenance pédagogique

- **A — Sources TSSR :** support, énoncé et correction M12 consultés dans Drive en lecture seule.
- **B — Structuration pédagogique :** réorganisation web des notions attestées, sans procédure de déploiement externe.
