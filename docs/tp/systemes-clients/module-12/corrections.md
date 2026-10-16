# Corrections — Module 12 — Introduction à la capture et au déploiement d’image

Les résultats ci-dessous sont ceux du laboratoire source. Ils servent à comparer le master et le clone ; ils ne décrivent pas un comportement universel.

## État initial et préparation

Ouvrir une session avec un compte membre du groupe Administrateurs. Dans **Utilisateurs et groupes locaux**, activer le compte Administrateur puis définir le mot de passe fourni par le formateur. Ouvrir ensuite une session locale avec cet utilisateur afin de créer son profil.

Pour les profils, la correction utilise `sysdm.cpl`, les paramètres système avancés et les paramètres des profils utilisateur afin de ne conserver que le profil Administrateur et le profil par défaut. Les comptes utilisateurs du scénario antérieur sont ensuite supprimés depuis Utilisateurs et groupes locaux.

## Sysprep

Dans `C:\Windows\System32\Sysprep`, lancer `sysprep.exe`, choisir OOBE, cocher Généraliser et demander l’arrêt automatique. En cas d’échec, consulter les journaux Panther. La mention source d’une recherche Internet n’est pas reprise comme méthode pédagogique ou ressource validée.

## Clonage et premier démarrage

Créer `Win10-XX-Clone`, réaliser un Full Clone VMware de l’état demandé, appliquer le snapshot du master et démarrer le clone pour sa configuration initiale.

## Comparaison et interprétation

| Observation source | Master | Clone |
| --- | --- | --- |
| Disques durs | 3 | 3 |
| Volumes, lecteur DVD inclus | 6 | 6 |
| Réseau bridgé | oui | oui |
| Mémoire | 4 Go | 4 Go |
| Nom du système | `Win10-XX` | `DESKTOP-<chaîneDeCaractèreAléatoire>` |
| Adresse IP | fixe du scénario | DHCP |
| Points de restauration | ceux du scénario | aucun, protection désactivée |
| Compte Administrateur | selon le snapshot | non |
| Pilote HP LaserJet | oui | non |
| Règle entrante ICMP | oui | oui |

Les comptes SAM, dates du journal système et snapshots doivent être observés dans le laboratoire selon la correction source. Leur valeur dépend du déroulement réel des ateliers précédents.

## Provenance

- **A — Source TSSR :** correction M12.
- **B — Structuration pédagogique :** organisation par préparation, Sysprep, clonage et interprétation ; aucun credential n’est publié.
