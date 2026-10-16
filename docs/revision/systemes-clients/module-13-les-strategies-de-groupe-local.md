# Révision — Module 13 : les stratégies de groupe local

## Registre Windows

- Le Registre est une base de données hiérarchique de configuration.
- Une ruche contient des clés ; une clé peut contenir des sous-clés et des valeurs.
- `regedit` permet de consulter ou modifier le Registre avec prudence.

| Ruche | Repère |
|---|---|
| `HKEY_CLASSES_ROOT` | Applications, OLE et extensions. |
| `HKEY_CURRENT_USER` | Configuration de l'utilisateur courant. |
| `HKEY_LOCAL_MACHINE` | Configuration de l'ordinateur. |
| `HKEY_USERS` | Profils des utilisateurs chargés. |
| `HKEY_CURRENT_CONFIG` | Profil matériel actif. |

## LGPO et consoles

- Une LGPO configure le comportement d'utilisateurs locaux ou du poste.
- MMC peut accueillir l'Éditeur d'objets de stratégie de groupe.
- `secpol.msc` est utilisé dans le TP pour la stratégie de mot de passe.
- Un paramètre peut être **Activé**, **Désactivé** ou **Non configuré**.
- Les paramètres peuvent viser l'utilisateur, l'ordinateur ou la sécurité.

## Points de contrôle du TP

- stratégie de mot de passe : 7 caractères minimum, historique de 3 mots de passe, complexité activée ;
- LGPO des non-administrateurs : Panneau de configuration et Paramètres, barre des tâches, fond d'écran lorsque la ressource est disponible ;
- LGPO de l'utilisateur ciblé : vérifier séparément l'accès aux paramètres et au Gestionnaire des tâches ;
- toujours tester avec le compte réellement visé par la stratégie.

> **À revoir dans le laboratoire.** L'énoncé mentionne `Romain` et la correction `romain`. Ne normalisez pas ce nom sans vérifier le compte fourni dans l'environnement de TP.

## Liens utiles

- [Cours du module](../../modules/02-systemes-clients-microsoft/module-13-les-strategies-de-groupe-local.md)
- [Kahoot du module](../../kahoot/02-systemes-clients-microsoft-13-les-strategies-de-groupe-local.md)
- [TP et correction](../../tp/systemes-clients/module-13/index.md)
