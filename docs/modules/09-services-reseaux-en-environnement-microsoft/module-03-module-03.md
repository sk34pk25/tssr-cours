# Module 03 — Stratégies de groupe

Les GPO appliquent des paramètres aux utilisateurs et ordinateurs du domaine. Elles réduisent les interventions poste par poste et permettent de définir des règles cohérentes. Le choix de la portée dépend du type de paramètre, du conteneur de l’objet et de l’ordre de traitement.

## De la stratégie locale au domaine

La stratégie locale est utilisable avec ou sans domaine. Les stratégies de domaine sont créées dans GPMC et liées à un site, un domaine ou une UO. Les extensions clientes récupèrent la stratégie, puis appliquent ses réglages. Les paramètres ordinateur se traitent notamment au démarrage et les paramètres utilisateur à l’ouverture de session. Le support mentionne un rafraîchissement ordinaire de 90 minutes avec variation et un intervalle de 5 minutes pour les contrôleurs.

Le modèle standard de traitement suit **Local → Site → Domaine → UO**, du parent vers l’enfant. Les paramètres distincts se cumulent. Les valeurs concurrentes sont départagées par leur priorité. Dans une même UO, le lien d’ordre 1 a la priorité normale. Un lien forcé traverse le blocage de l’héritage. Le filtrage de sécurité contrôle la lecture et l’application, tandis qu’un filtre WMI vérifie une condition sur la machine. [Traitement des GPO dans Windows](https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing).

Le domaine fournit une Default Domain Policy liée à sa racine et une Default Domain Controllers Policy liée à l’UO Domain Controllers. GPMC distingue le conteneur des objets GPO et les liens qui les appliquent. Créer un objet sans lien permet de le préparer. Pour prévoir sa portée, suivre le lien, l’UO effective, les permissions de filtrage et l’état des sections utilisateur et ordinateur.

## Choisir le bon réglage

Les paramètres couvrent scripts, déploiement d’applications, sécurité, système et composants. Les modèles d’administration décrivent les réglages, leur prise en charge et leur effet. Le support présente la redirection des dossiers utilisateur sur un serveur de fichiers. En mode de base, les utilisateurs suivent une même configuration. Le mode avancé choisit des emplacements par groupe. Prévoir les droits de partage et NTFS avant de faire pointer Documents vers ce serveur.

Dans le Gestionnaire d’impression, une file peut être déployée avec une GPO existante ou nouvelle, sur les ordinateurs ou sur les utilisateurs. Lier la règle à l’UO où sont les objets qui reçoivent le réglage. Un déploiement applicatif utilise un paquet accessible depuis un chemin UNC au contexte qui l’installe.

| Besoin du TP | Cible à contrôler |
|---|---|
| EFS et pare-feu | Paramètres ordinateur. Les valeurs demandées sont celles d’un laboratoire isolé. |
| Proxy historique `172.28.10.248:8080` | Paramètres de l’utilisateur et version du navigateur étudié |
| Politique de mot de passe du domaine | Paramètres de sécurité à la portée domaine |
| Lecteur Prospects | Membres du service Commercial et accès au partage |
| Imprimante de Production | File effectivement publiée au module 02 et ciblage approprié |
| Fond d’écran commun | Secrétaires, chemin d’image lisible dans leur contexte |
| Bonus MSI, Documents et horaires | Périmètre précis des secrétaires, de l’exception Informatique et des intérimaires |

Le TP demande 5 caractères, une rotation de 5 jours et une complexité désactivée. Ces valeurs servent à observer les réglages du laboratoire. Le nom du modèle d’imprimante diffère entre les TP des modules 02 et 03. Vérifier la file existante avant de la déployer. Limiter les ouvertures de session à 9 h–18 h ne suffit pas à constater une fermeture automatique d’une session interactive à 18 h. Vérifier séparément les deux effets exigés pour les intérimaires.

## Tester et diagnostiquer

```cmd
gpupdate /force
gpresult /r
gpresult /h rapport-gpo.html
```

Le support écrit `gpdupate`. La commande utilisable est `gpupdate`. Certains réglages prennent effet après fermeture de session ou redémarrage. Tester une cible et un compte exclu, puis comparer la configuration réellement appliquée et les stratégies filtrées. Pour un lecteur ou une imprimante absents, vérifier aussi la ressource et les droits réseau indépendamment de la GPO.

### Mini-quiz

1. Une GPO existe dans le conteneur des stratégies. Quand commence-t-elle à cibler des objets ?
2. Quel élément traverse un blocage de l’héritage ?
3. Quel outil montre les GPO effectivement prises en compte ?

??? success "Réponses"
    1. Après la création d’un lien actif vers un conteneur pertinent et sous réserve des filtres.
    2. Un lien forcé.
    3. `gpresult`, depuis le contexte du poste et de l’utilisateur testés.


## Appliquer le cours

- [Travaux pratiques et démonstrations](../../tp/services-reseaux-microsoft/module-03/index.md)
- [Fiche de révision](../../revision/services-reseaux-microsoft/module-03-module-03.md)
