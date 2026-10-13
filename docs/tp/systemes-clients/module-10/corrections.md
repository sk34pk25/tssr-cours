# Correction — Module 10 — La maintenance du système

Cette correction organise le scénario de laboratoire des sources. Les mesures de performances, les évènements et les ressources disponibles dépendent de la VM et de la charge réellement utilisée.

## 1. Historique de fiabilité

**Outil :** recherchez **Afficher l'historique de fiabilité**.

**Observation :** la correction source montre un indice qui chute lors d'échecs, signalés par une croix blanche dans un cercle rouge, puis remonte progressivement les jours suivants.

**Contrôle :** ouvrez par double-clic l'évènement critique afin d'en consulter le détail.

Le recours à PowerOFF n'est prévu que par l'énoncé lorsqu'aucun évènement critique n'est disponible ; il reste une manipulation de laboratoire.

## 2. Analyse en temps réel

**Outils :** Gestionnaire des tâches et Moniteur de ressources.

Lancez les tâches prévues, dont la copie du fichier au chemin manquant **`[CHEMIN A INDIQUER]`**, puis lisez et triez les informations sur les quatre ressources : processeur, mémoire, réseau et disque dur.

**Résultat et interprétation :** il n'existe pas de correction chiffrée type ; les valeurs varient selon les ressources matérielles et la bande passante du laboratoire. Le tableau doit donc rendre compte de vos propres observations.

## 3. Protection du système et point de restauration

**Outil :** recherchez `sysdm.cpl`, puis ouvrez l'onglet **Protection du système**.

La correction source indique qu'aucun volume n'a la protection activée par défaut dans son scénario. Sélectionnez le volume système, ouvrez **Configurer**, activez la protection, puis créez un point de restauration. Les réglages d'espace et le nom de point montrés dans la correction appartiennent au laboratoire ; ne les généralisez pas.

Après la création du point, créez les fichiers et dossiers demandés dans Documents, puis désactivez ou désinstallez les fonctionnalités Windows prévues par l'énoncé. La correction cite les chemins d'interface pour IE11 et le Lecteur Windows Media ; conservez-les comme méthode du scénario.

## 4. Restauration via WinRE

**Méthode :** dans le scénario, maintenez Maj lors du redémarrage depuis le menu Démarrer pour accéder à WinRE, puis utilisez **Dépannage → Options avancées → Restauration du système**.

Si une authentification est demandée, utilisez les identifiants fournis par le formateur. Sélectionnez le point de restauration du scénario, lancez la restauration puis redémarrez après le message de réussite.

## 5. Contrôle et interprétation

| Élément contrôlé | Résultat observé dans la correction | Interprétation source |
| --- | --- | --- |
| Fonctionnalités Windows modifiées après le point | IE11 et le Lecteur Windows Media sont de nouveau disponibles. | La restauration revient sur des modifications système réalisées après le point. |
| Fichiers créés dans Documents après le point | Ils restent présents. | Le point de restauration n'affecte pas les données utilisateur. |

Les références à Windows 7/8.1 figurant dans le support sont des références historiques des sources TSSR ; elles ne sont pas actualisées ni étendues ici.
