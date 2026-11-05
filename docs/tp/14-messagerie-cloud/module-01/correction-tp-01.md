# Correction · TP 01 · Adapter une réponse à des contraintes

## Document original

[M1 - Solution du TP 1 - Adapter une reponse à des contraintes](../../../assets/course-sources/38bb0de222264a0d/transcription-1CksxEZCgZClGQ3G9H-Tbrmd-ukungFQ9.html) · 3 pages.

Les mots de passe, codes de validation et coordonnées nominatives sont neutralisés. Les noms de domaine d’accès des exemples utilisent des domaines réservés à la documentation.

## Aide pédagogique · version optimisée

### Comparer les décisions

Pour chaque cas, indiquez quelle contrainte justifie votre choix, quelle autre solution reste possible et quel résultat ferait changer la décision. Pour le PRA, chiffrez un délai de reprise et une perte maximale de données acceptable. Pour la 3D, comparez une action représentative avec et sans liaison de secours. Pour les 5 To, relevez capacité, volume transféré par jour et temps de restauration.

## Texte du corrigé fourni

### Page 1

[Page de la transcription](../../../assets/course-sources/38bb0de222264a0d/transcription-1CksxEZCgZClGQ3G9H-Tbrmd-ukungFQ9.html#page-1)

#### Adapter une réponse à des contraintes

TP du Module 01 – Les composantes du Cloud et de Microsoft 365

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1 et d’avoir réalisé les TP proposés.

#### Solution

#### Objectifs

- Adapter une réponse à un besoin donné

En fonction des besoins exprimés, déterminez s’il est préférable de placer l’infrastructure dans un Cloud privé, un Cloud public ou du On-Premise. Contexte 1

- Vous êtes prestataire de service, vous avez un contrat d’infogérance avec une entreprise située à l’étranger.
- Cette entreprise vous montre des besoins de très haute disponibilité de l’infrastructure avec des délais courts d’intervention en cas de panne.
- Cette entreprise dispose d’une ligne Internet fiable et garantie.
- Cette entreprise a des besoins de confidentialité.

Une migration dans un Cloud privé peut être envisagée. La confidentialité des données pourra être assurée, la haute disponibilité pourra être envisagée (réplication sur un autre datacenter par exemple). Dans l’absolu, en tant que prestataire, ce datacenter doit être situé proche de vos locaux afin qu’en cas d’incident matériel, vous puissiez être en mesure d’intervenir rapidement.

La ligne étant garantie, une infrastructure On Premise peut éventuellement être envisagée, avec une hybridation de l’infrastructure pour la partie haute disponibilité (et PRA). Attention néanmoins à la partie matérielle, bien qu’assurée par les constructeurs dans le cadre des garanties sur les équipements (serveurs par exemple), l’hypothèse d’une intervention sur site n’est pas à écarter. Pour cela, il faudra anticiper un accord/contrat de service avec un partenaire de confiance proche du site client.

Dans le cas présent, ces divers scénarios doivent être présentés au client à qui reviendra le choix final.

### Page 2

[Page de la transcription](../../../assets/course-sources/38bb0de222264a0d/transcription-1CksxEZCgZClGQ3G9H-Tbrmd-ukungFQ9.html#page-2)

Contexte 2

- Vous êtes technicien dans une chaîne de magasins de meubles.
- Vous disposez d’une infrastructure éclatée sur 25 sites géographiques avec en moyenne 3 postes informatiques par magasin, la majorité d’entre eux étant au siège.
- Sur chaque site vous disposez d’une connexion Internet de type ADSL.
- Les salariés doivent être en mesure de fournir des simulations 3D aux clients.
- Vous avez principalement des besoins d’application métier et de bureautique.

Il est parfois complexe de trouver la bonne réponse technique dans ce type de contexte.

Les besoins sont importants :

- Besoin de centraliser la donnée métier.
- L’apport d’outils Cloud peut s’avérer être une « fausse bonne idée » en raison des liens Internet faibles.
- Fournir des rendus 3D peut être très consommateur en bande passante.

Plusieurs scénarios peuvent être envisagés :

- Infrastructure en Cloud public
- Problématiques à anticiper

~~~text
o Quid des applications métier ? Si elles fonctionnent en base de données,
~~~

l’apport de technologies comme RDS ou Citrix semble indispensable.

~~~text
o Microsoft 365 et éventuellement SharePoint peuvent être consommateurs en
~~~

bande passante lors des phases d’upload et de download. Il est fort probable que cela engendre des lenteurs/coupures réseau.

~~~text
o Les rendus 3D sont difficilement compatibles avec la situation actuelle,
~~~

plusieurs possibilités peuvent être à explorer :

▪ Utilisation d’un logiciel de simulation en SaaS.

▪ Utilisation de stations graphiques en local (attention aux sauvegardes des données, avec souvent une volumétrie importante qui risque d’être incompatible avec le faible débit).

▪ Mise en place d’une infrastructure VDI avec cartes graphiques pour une utilisation de stations graphiques à distance. Attention encore une fois à la stabilité du lien.

Globalement, l’utilisation de machines déportées type RDS/Citrix peut tout à fait convenir, la fiabilité des liens restant un problème qu’il faudra corriger, avec potentiellement la redondance de liens avec une éventuelle 4G, ou un autre lien ADSL/SDSL qui permettront de limiter l’impact d’une coupure. Contexte 3

- Vous disposez d’une infrastructure relativement modeste hébergée dans vos locaux (2 hyperviseurs et une baie de stockage / 40VM).
- Vous avez des serveurs de fichiers avec une volumétrie relativement importante (5To à

### Page 3

[Page de la transcription](../../../assets/course-sources/38bb0de222264a0d/transcription-1CksxEZCgZClGQ3G9H-Tbrmd-ukungFQ9.html#page-3)

ce jour).

- Vous avez des applications métier avec un fort besoin de performance.

Un hébergement des données en Cloud privé ou public peut être envisagé. Attention aux volumétries et aux besoins car les coûts monteront rapidement dans ce contexte. L’entreprise peut cependant tout à fait faire ce choix et assumer les contraintes financières grâce aux bénéfices du cloud (haute disponibilité électrique, réseau, climatisation, systèmes anti-incendie…). Il est également possible d’optimiser les coûts liés au volume de stockage en démarrant une campagne d’archivage suite à quoi, les données archivées pourraient être archivées localement et donc limiter l’espace occupé dans le Cloud et réaliser des économies non négligeables.

Il est également possible de choisir un renouvellement de l’infrastructure On-Premise, et rester à ISO périmètre, tout dépend de la stratégie de l’entreprise et des compétences de l’équipe IT sur place.

[Revenir à l’énoncé](tp-01.md) · [Tous les ateliers](index.md)
