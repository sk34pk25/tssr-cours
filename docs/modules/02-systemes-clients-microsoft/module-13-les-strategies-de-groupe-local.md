# Module 13 — Les stratégies de groupe local

## Objectifs

À l'issue du module, vous devez pouvoir décrire le rôle du Registre Windows, repérer les éléments d'une stratégie de groupe local (LGPO) et vérifier l'effet d'un paramètre sur le compte concerné.

## Le Registre Windows

Le Registre est une base de données hiérarchique centrale. Windows y consulte des informations de configuration relatives aux utilisateurs, aux programmes et au matériel.

Une ruche contient des clés, qui peuvent elles-mêmes contenir d'autres clés. Les clés portent des valeurs, par exemple sous forme de chaînes ou de données binaires. Une valeur correspond à un réglage du système.

| Ruche | Rôle présenté dans le support |
|---|---|
| `HKEY_CLASSES_ROOT` | Informations sur les applications, OLE et les extensions de fichiers. |
| `HKEY_CURRENT_USER` | Configuration de l'utilisateur courant ; elle correspond à `HKEY_USERS\\SID`. |
| `HKEY_LOCAL_MACHINE` | Configuration de l'ordinateur, quel que soit l'utilisateur connecté. |
| `HKEY_USERS` | Profils des utilisateurs chargés sur le système. |
| `HKEY_CURRENT_CONFIG` | Profil matériel actuellement utilisé. |

`regedit` permet de consulter et de modifier le Registre. Ces modifications demandent une grande prudence : la page ne remplace pas les consignes ni les vérifications prévues par le scénario de travaux pratiques.

## Les stratégies de groupe local

Les LGPO permettent d'administrer des comportements de l'utilisateur et du poste de travail sans manipuler directement les clés du Registre. Elles peuvent notamment servir à définir une stratégie de mot de passe, personnaliser le bureau et la barre des tâches, ou restreindre certains éléments de l'interface.

Les consoles citées dans le support sont :

- la console MMC ;
- l'Éditeur d'objets de stratégie de groupe ;
- `secpol.msc` pour les paramètres de sécurité locaux.

Un paramètre peut être **Activé**, **Désactivé** ou **Non configuré**. Les paramètres peuvent relever de l'utilisateur, de l'ordinateur ou de la sécurité. L'éditeur permet aussi d'ajouter un commentaire et, selon le paramètre, de définir des options ou des conditions.

## Exemples du scénario de TP

Le TP applique des paramètres locaux à des comptes et à des groupes précis :

- une stratégie de mot de passe avec une longueur minimale de 7 caractères, un historique de 3 mots de passe et la complexité activée ;
- une LGPO destinée aux non-administrateurs pour limiter l'accès au Panneau de configuration et aux Paramètres, verrouiller la barre des tâches et définir un fond d'écran ;
- une LGPO ciblant l'utilisateur `Romain`, afin d'autoriser les paramètres du Panneau de configuration tout en retirant le Gestionnaire des tâches.

Ces exemples sont propres au laboratoire. Ils ne constituent pas une politique de domaine ni une règle générale de durcissement.

## Vérifier par des tests réels

Après avoir configuré un paramètre, ouvrez une session avec le compte ou le groupe visé et vérifiez le comportement attendu : modification de mot de passe, visibilité des Paramètres, état de la barre des tâches, fond d'écran ou accès au Gestionnaire des tâches. Un test doit toujours être interprété au regard du compte ciblé par la stratégie.

## Synthèse

Le Registre stocke des réglages hiérarchisés. Les LGPO fournissent une interface d'administration pour appliquer certains de ces réglages à un ordinateur ou à des utilisateurs locaux. Les trois états d'un paramètre et les tests avec le bon compte permettent de contrôler l'effet réel de la stratégie.

## Pour aller plus loin dans le parcours

- [Présentation de la formation](index.md)
- [Travaux pratiques du module](../../tp/systemes-clients/module-13/index.md)
- [Énoncé du TP](../../tp/systemes-clients/module-13/enonces.md)
- [Correction du TP](../../tp/systemes-clients/module-13/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-13-les-strategies-de-groupe-local.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-13-les-strategies-de-groupe-local.md)

## Provenance

Contenu A : support, énoncé et solution du TP « Les LGPO » fournis dans le dossier Drive TSSR du module 13. Contenu B : reformulation et structuration pédagogique sans ajout de règle de stratégie de groupe externe.
