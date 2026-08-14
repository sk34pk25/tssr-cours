# Quiz — Systèmes clients Microsoft

Questions et réponses issues des fichiers Kahoot fournis. Les formulations conversationnelles ou métadonnées de génération ont été retirées.

## Module 6

### Quiz Kahoot — Module 6 : La sécurité NTFS et les ACL

Niveau Facile (1 à 7)

1. Sur quel système de fichiers les ACL sont-elles disponibles ?

A. FAT32 B. NTFS ✅ C. exFAT D. FAT16

---

2. Que signifie ACL ?

A. Access Computer List B. Access Control List ✅ C. Active Control Link D. Access Configuration Level

---

3. Que signifie DACL ?

A. Dynamic Access Control List B. Discretionary Access Control List ✅ C. Direct Access Control List D. Data Access Control List

---

4. Que représente une ACE ?

A. Une partition B. Une entrée de contrôle d’accès ✅ C. Un groupe d’utilisateurs D. Un système de fichiers

---

5. Quel niveau d’autorisation permet toutes les actions sur un fichier ou un dossier ?

A. Lecture B. Modification C. Contrôle total ✅ D. Exécution

---

6. Où configure-t-on les autorisations NTFS de base ?

A. Onglet Général B. Bouton Modifier ✅ C. Invite de commandes D. Gestionnaire de périphériques

---

7. Où trouve-t-on les autorisations spéciales ?

A. Modifier B. Avancé ✅ C. Partage D. Général

---

Niveau Moyen (8 à 14)

8. Si un utilisateur n’est pas présent dans la DACL, que se passe-t-il ?

A. Il obtient Lecture B. Il obtient Modification C. Son accès est refusé implicitement ✅ D. Il obtient Contrôle total

---

#### 9. Une ACE peut

A. Seulement autoriser B. Seulement refuser C. Autoriser ou refuser ✅ D. Seulement modifier

---

10. Si plusieurs autorisations “Autoriser” s’appliquent à un utilisateur, laquelle est retenue ?

A. La plus restrictive B. La première C. La plus permissive ✅ D. Aucune

---

11. Quelle règle est prioritaire ?

A. L’autorisation explicite B. Le refus explicite ✅ C. Le refus implicite D. L’autorisation héritée

---

#### 12. Par défaut, un dossier transmet ses autorisations à

A. Son propriétaire uniquement B. Ses fichiers et sous-dossiers ✅ C. Son disque uniquement D. Aucun élément

---

13. Lors d’un déplacement dans le même volume, les autorisations NTFS sont :

A. Supprimées B. Conservées ✅ C. Réinitialisées D. Converties

---

#### 14. Lors d’une copie vers un autre volume, les autorisations

A. Sont conservées B. Héritent du dossier de destination ✅ C. Deviennent publiques D. Sont supprimées

---

Niveau Difficile (15 à 16)

15. Quelle cmdlet PowerShell permet d’afficher les ACL d’un dossier ?

A. Get-Permission B. Get-Acl ✅ C. Show-Acl D. Read-Acl

---

16. Quelle cmdlet PowerShell permet de modifier les ACL ?

A. Update-Acl B. Set-Acl ✅ C. Edit-Acl D. New-Acl

---

Vrai / Faux

17. Vrai ou Faux

Microsoft recommande de privilégier les groupes plutôt que les utilisateurs dans les DACL.

✅ Vrai

---

18. Vrai ou Faux

Les autorisations héritées peuvent être modifiées directement sans action particulière.

❌ Faux

---

19. Vrai ou Faux

Après avoir configuré les ACL, il est recommandé de tester les accès ou de consulter l’onglet Accès effectif.

✅ Vrai

---

20. Vrai ou Faux

Le double jeton d’accès des administrateurs (UAC) peut influencer les autorisations effectives.

✅ Vrai

---

#### ✅ Ce quiz couvre les points essentiels du module 6

- ACL
- DACL
- ACE
- Autorisations de base (Lecture, Modification, Contrôle total)
- Autorisations spéciales
- Refus implicite et explicite
- Héritage
- Copie / Déplacement
- Accès effectif
- Bonnes pratiques Microsoft
- Get-Acl
- Set-Acl
- Double jeton d’accès (UAC)

Il est suffisamment complet pour un Kahoot de révision tout en restant fidèle au contenu du module.

## module 1 et 2 et extra

### Module 1 - Les systèmes d'exploitation et Microsoft Windows 10

Objectifs du module Les OS : définition et fonctions principales Les OS : leur composition et leur place aujourd'hui Les OS Windows Windows as a Service Windows 10 et ses différentes éditions et licences Conclusion

Dans ce module, nous allons explorer la notion de systèmes d'exploitation, ou OS, en répondant à des questions essentielles : Comment définir un système d'exploitation ? Quelles sont ses fonctions principales ? De quoi est-il composé ? Où peut-on les trouver ? Définir un système d'exploitation Un système d'exploitation, ou OS en anglais, est un logiciel qui est édité et proposé par des communautés, ou bien édité et commercialisé par des groupes privés et des fabricants de matériel. Il pilote les dispositifs matériels, lui donne des ordres en somme. Ces ordres sont donnés par l'utilisateur, ainsi que par des applications mises à disposition de l'utilisateur. Sans l'utilisateur, le système ne peut pas faire grand-chose. Le résultat du travail effectué par le matériel est rendu, par défaut, à l'écran, ou bien vers d'autres périphériques, comme une imprimante, par exemple. Fonctions principales des systèmes d'exploitation Quelles sont les fonctions principales d'un système d'exploitation ? Le système d'exploitation gère le matériel. C'est lui qui envoie des ordres au processeur, ordres préalablement donnés au système d'exploitation, directement par un logiciel ou directement par l'utilisateur lui-même. Il gère aussi la mémoire vive. Il va chercher, en RAM, les résultats des calculs effectués par le processeur, pour les retranscrire à l'utilisateur. Le système d'exploitation optimise l'exécution des applications en leur attribuant les ressources nécessaires. Il partage l'ensemble des ressources matérielles aux différentes applications, qui sont simultanément en cours d'exécution. Il priorise les accès concurrentiels lorsqu'un conflit d'accès apparaît. Informations et communication Il fournit des informations sur le bon fonctionnement de l'ordinateur à travers des tableaux de bord, affichant les informations en temps réel, ou à travers des journaux, des logs, archivés sur plusieurs semaines. Il utilise les périphériques dans les meilleures conditions, en s'assurant qu'il y ait une bonne communication sur les bus entre la carte-mère et le périphérique en question. Gestion des pilotes et des accès Il assure également le bon fonctionnement des périphériques à l'aide des pilotes, ou drivers. Les pilotes, c'est-à-dire les pilotes de l'ordinateur, sont un peu comme les manuels d'utilisation du périphérique. Ces manuels sont destinés à l'OS, pour qu'il en maîtrise chaque fonctionnalité et chaque spécificité. Le système d'exploitation protège l'accès aux ressources. Chaque système s'appuie sur un principe de privilège d'accès. Les actions et accès d'un simple utilisateur seront réduits par rapport à ceux d'un administrateur de la machine. Granulairement, le système d'exploitation veillera à permettre l'accès à des informations ou ressources aux seules personnes concernées. Une personne non autorisée recevra une notification du système. En conclusion, nous avons défini le système d'exploitation et ses principales fonctions. Ce logiciel essentiel joue un rôle clé dans la gestion du matériel, l'optimisation des ressources et la sécurité des accès. Comprendre ces concepts est fondamental pour tout technicien supérieur en systèmes et réseaux.

Dans ce module, nous allons explorer les systèmes d'exploitation (OS), leur composition et leur rôle essentiel dans nos vies quotidiennes. Tout d'abord, un système d'exploitation se compose principalement de plusieurs éléments clés. Au cœur de chaque OS se trouve un noyau, ou kernel. Ce noyau est le lien direct entre le matériel de l'ordinateur et le reste du système d'exploitation. Il est capable d'évoluer et d'être mis à jour, permettant également l'ajout de modules complémentaires.

Le rôle du shell et de l'interface graphique Au-dessus du noyau, nous trouvons un interpréteur de commandes, souvent désigné sous le terme CLI (Command Line Interface) ou shell. Ce shell sert d'interface pour l'utilisateur, qui lui envoie des commandes en ligne. En fonction du noyau, les shells peuvent varier, offrant différentes fonctionnalités et usabilités.

Dans la plupart des systèmes d'exploitation, mais de manière facultative, une interface graphique (GUI pour Graphical User Interface) est proposée. Celle-ci facilite l'interaction avec le système pour les utilisateurs non initiés, rendant l'expérience utilisateur plus intuitive. Les éditeurs d'interfaces graphiques s'efforcent toujours de garantir une grande simplicité d'utilisation.

Certaines distributions d'OS sont livrées avec leurs propres interfaces graphiques, comme c'est le cas de Microsoft avec Windows. D'autres, en revanche, laissent le choix aux utilisateurs d'installer la GUI de leur préférence ou même de se passer complètement de celle-ci.

Le stockage des données À côté des fichiers systèmes indispensables, il est crucial pour l'utilisateur de garder ses données accessibles et sécurisées. C'est là qu'interviennent les systèmes de fichiers, qui organisent et sécurisent l'accès aux données sur des supports de stockage, comme le disque dur ou une clé USB.

Les systèmes d'exploitation autour de nous Il existe une multitude de systèmes d'exploitation, tels que Windows, Android, iOS et Mac OS X, mais aussi des distributions GNU-Linux comme Ubuntu ou Debian. Aujourd'hui, nous retrouvons des OS dans de nombreux appareils. Évidemment, on pense à nos ordinateurs personnels, mais aussi aux serveurs d'entreprise.

Les smartphones et tablettes fonctionnent avec des systèmes d'exploitation comme Android ou iOS. Les montres connectées utilisent également des OS spécifiques, tout comme le matériel réseau, les télévisions ou même les véhicules modernes qui intègrent des ordinateurs de bord.

Avec l'évolution des technologies, notre dépendance aux outils connectés s'accroît, et cela illustre l'importance grandissante des systèmes d'exploitation dans notre vie quotidienne.

En conclusion, nous avons exploré comment les systèmes d'exploitation, à travers leur composition et leur omniprésence, façonnent notre interaction avec la technologie moderne. Ils sont devenus des composants essentiels, non seulement dans nos ordinateurs, mais également dans tous les appareils connectés que nous utilisons quotidiennement.

Dans ce module, nous allons examiner plus en détail les systèmes d'exploitation Microsoft Windows, en commençant par leurs origines et leur évolution. Les débuts avec MS-DOS Nous partons de l'histoire de Microsoft qui a commencé avec le système d'exploitation MS-DOS, né en août 1981. MS-DOS, acronyme de Microsoft Disk Operating System, était un système d'exploitation sans interface graphique, permettant à un seul utilisateur de lancer une seule instruction à la fois. Ce mode de fonctionnement a posé les bases des systèmes d'exploitation qui ont suivi.

Transition vers l'interface graphique Avec l'avènement de Windows 1.0 en 1985, nous avons découvert une interface graphique qui a révolutionné l'utilisation des ordinateurs, notamment grâce à l'introduction de la souris comme périphérique d'entrée. Ce fut un tournant dans l'expérience utilisateur et dans l'approche des systèmes d'exploitation.

Windows NT et l'entrée sur le marché serveur En juillet 1993, Microsoft a lancé Windows NT, qui a marqué son entrée sur le marché des systèmes d'exploitation serveurs. Ce système est multi-utilisateur, multi-tâche et fonctionne sur un plus large éventail de systèmes matériels, ouvrant ainsi de nouvelles possibilités pour les entreprises.

L'essor de l'informatique domestique À la fin des années 1990, des systèmes comme Windows 95 et Windows 98 ont permis à l'informatique de s'imposer dans les foyers. Ensuite, Windows 2000 a été un catalyseur pour l'adoption en entreprise avec sa cohabitation avec Windows 2000 Server, apportant ainsi des fonctionnalités qui sont encore largement utilisées aujourd'hui.

Windows XP et sa popularité Windows XP est sans conteste le système d'exploitation le plus populaire à son époque, jouant un rôle fondamental dans l'essor de l'informatique tant dans les secteurs professionnels que personnels. Il a également accompagné l'explosion d'Internet, devenant un pilier essentiel des environnements informatiques.

Evolutions récentes des systèmes Windows Nous avons ensuite vu l'apparition de Windows Vista et Windows 8, qui n'ont pas rencontré le succès souhaité. Cependant, Windows 7 s'est rapidement imposé comme le véritable successeur de Windows XP. Aujourd'hui, Windows 10 est le système d'exploitation le plus utilisé dans le monde, avec un poste de travail sur deux fonctionnant sous cette version.

Cycler la vie d’un OS Windows Il est crucial de comprendre qu'un système d'exploitation naît, évolue et finit par disparaître. Cela nécessite des équipes chez Microsoft pour suivre ces changements, corriger les bogues et mettre à jour les fonctionnalités. Quatre étapes majeures définissent le cycle de vie d'un OS Windows : la date de sortie, la date de fin des ventes, la date de fin du support standard et la date de fin du support étendu.

Illustration avec Windows 7 Pour illustrer ces étapes, prenons Windows 7, lancé en octobre 2009 alors que Windows XP et Windows Vista étaient encore largement utilisés. Windows 7 a dû progressivement remplacer ces versions, un processus que l'on appelle migration.

Importance des mises à jour À l'avenir, nous devons aussi rappeler que Windows 7 a bénéficié de milliers de mises à jour, appelées KB (Knowledge Base), qui amélioraient les fonctionnalités ou corrigeaient des erreurs. Pour éviter d'attendre des heures lors de l'installation de ces mises à jour, Microsoft a mis à disposition des service packs.

Fin de support et migration En octobre 2013, il a été décidé de ne plus vendre Windows 7, avec l'arrivée de Windows 8. Néanmoins, le support standard a perduré jusqu'à la fin de la phase de support étendu, qui dure généralement cinq ans, afin de donner aux entreprises le temps nécessaire pour migrer vers des systèmes plus récents.

En janvier 2020, le support pour Windows 7 a effectivement pris fin, ce qui signifie qu'aucune mise à jour de sécurité n'est plus fournie, mettant en danger la sécurité des entreprises encore sur cette version.

Dans ce module, nous allons examiner la notion de Windows as a Service, qui est essentielle pour comprendre le développement continu de Windows 10. Jusqu'à nouvel ordre, Microsoft a décidé que Windows 10 serait son dernier système d'exploitation client. Windows 10 a donc pour vocation de vivre longtemps et de connaître des phases d'évolution spécifiques. Windows as a Service est le nouveau nom donné à ce modèle de mise à jour.

Les Windows Insiders Les Windows Insiders sont les bêta-testeurs de Windows 10. Leur rôle est crucial car le support de Microsoft se base sur leurs retours d'expérience pour améliorer et planifier la sortie d'une nouvelle version de Windows 10. Vous pouvez vous-même vous inscrire gratuitement au programme des Windows Insiders.

Les builds et mises à jour En effet, Windows 10 évoluera grâce à plusieurs versions que l'on appelle des Builds. Chaque Build est identifiée par un numéro, avec lequel nous pouvons facilement retrouver sa date de sortie. Une Build propose son lot de nouvelles fonctionnalités. Le support d'une Build est fixé pour 18 mois.

Une mise à jour de fonctionnalités, qu'on appelle une Feature Update, est la mise à disposition officielle d'une Build aux entreprises et au grand public. Il y a deux Feature Updates par an. En revanche, les mises à jour de qualité, ou Quality Updates, sont différentes. Proposées à un rythme plus soutenu, elles offrent des mises à jour de sécurité et des correctifs. Elles sont cumulatives et sont traditionnellement mises à disposition tous les deuxièmes mardis du mois, lors du Patch Tuesday.

Collaboration avec les insiders Durant six mois, nous travaillons main dans la main avec la communauté des Windows Insiders et Microsoft. Pendant cette période, Microsoft récupère massivement et très régulièrement des rapports d'utilisation, de télémétrie et d'incidents de la part des Windows Insiders. Microsoft exploite toutes ces données pour créer et déployer des correctifs, des mises à jour de sécurité et des nouvelles fonctionnalités.

Il n'y a pas vraiment de règle ici, un Insider peut récupérer une mise à jour à n'importe quel moment. Au bout des six mois, Microsoft décide d'envoyer une nouvelle mise à jour, qui est alors considérée comme prête à être mise en production.

Exemple de déploiement de builds Par exemple, la build 1903 a été déployée massivement à partir de mars 2019. Il est possible de télécharger cette version complète de Windows 10 sur Internet. Avec le temps, une build connaîtra des Quality Updates pour se renforcer et se fiabiliser, mais ne connaîtra pas de nouvelles fonctionnalités. Pendant ce temps, les Insiders et Microsoft travaillent déjà sur la prochaine build.

Ainsi, six mois après, grâce à une Feature Update, une nouvelle build devient disponible avec son lot de nouvelles fonctionnalités. L'utilisateur a le choix de mettre à jour son système d'exploitation ou de continuer avec la build qu'il possède. Les mois passent, et chaque nouvelle build prend son tour de mise en production. Il est impératif pour l'utilisateur de migrer vers une version de Windows 10 encore en phase de support, sous peine de perdre l'accès aux mises à jour et à la sécurité.

En conclusion, Windows as a Service représente un modèle dynamique et adaptatif qui garantit la sécurité et la fonctionnalité des systèmes d'exploitation à travers des mises à jour régulières.

Dans cet article, nous allons explorer Windows 10 et ses différentes éditions ainsi que les licences qui lui sont associées. Les différentes éditions de Windows 10 Windows 10 se décline en plusieurs éditions, dont les trois principales sont l'édition Famille, l'édition Professionnelle et l'édition Entreprise. L'édition Famille est destinée à un usage domestique. C'est l'édition de base, qui contient les fonctionnalités natives, telles que le moteur de reconnaissance vocale Cortana, des fonctionnalités de bureau supplémentaires, la timeline, OneDrive, ainsi que d'autres fonctionnalités selon la build que nous utilisons.

Ensuite, nous avons l'édition Professionnelle, qui est construite sur la base de l'édition Famille. Elle inclut donc les mêmes fonctionnalités, mais nous avons également accès à des outils spécifiques du monde de l'entreprise, tels que le chiffrement BitLocker et EFS (Encrypted File System), ainsi que la possibilité de joindre notre ordinateur à l'annuaire Active Directory de l'entreprise.

L'édition Entreprise, quant à elle, est une surcouche de l'édition Professionnelle qui embarque des outils supplémentaires dédiés aux grands groupes, comme la fonctionnalité Direct Access, permettant la connexion distante et automatique d'un utilisateur au réseau de son entreprise de façon transparente.

Ces trois éditions ne sont pas les seules. Il existe d'autres éditions de Windows 10, plus spécifiques et ciblées, telles que l'édition Professionnelle pour station de travail, l'édition Éducation ou l'édition Entreprise LTSC (Long Term Servicing Channel), qui bénéficie d'un support assuré pendant 10 ans.

Les licences d'utilisation de Windows 10 Pour pouvoir utiliser Windows 10 et bénéficier de ses mises à jour, il est nécessaire de posséder une licence d'utilisation. Les règles d'utilisation de Windows sont consignées dans le CLUF, Contrat de licence d'utilisateur final, ou en anglais EULA (End User License Agreement). Il existe plusieurs possibilités pour obtenir une licence d'utilisation Windows 10.

Tout d'abord, la licence OEM est probablement la plus populaire. Elle est préinstallée sur les ordinateurs grand public que nous achetons dans les enseignes de grande distribution, par exemple, et elle est liée au BIOS de la machine. Cela signifie que nous ne pouvons pas utiliser cette licence ou l'activer sur une autre machine.

Ensuite, nous avons la licence Retail, qui s'achète de manière unitaire. Lorsque nous acquérons une licence Retail, celle-ci est liée à l'acheteur. Nous pouvons l'installer sur un ordinateur que nous avons assemblé nous-mêmes, par exemple, et la réinstaller sur un futur ordinateur.

Pour les petites entreprises, nous pouvons nous procurer une licence Volume Activation Key (KMS). Cette licence dispose d'un nombre prédéterminé d'activations autorisées, permettant une licence pour plusieurs ordinateurs. Pour les entreprises de taille moyenne et plus, il existe également le principe de licence VLK, adapté pour des environnements de plus de 25 postes, nécessitant l'installation du service KMS dans notre réseau d'entreprise pour centraliser l'activation.

Délai de grâce et licences d'accès client Chaque type de licence possède un délai de grâce, une période courte durant laquelle Windows bénéficie de toutes ses fonctionnalités et de son support. Ce délai permet généralement à nos équipes de tester et de maqueter Windows avant de valider son utilisation en masse.

Un dernier type de licence, moins connue mais importante dans un environnement professionnel, est la licence d'accès client. Elle a pour but de permettre les communications client-serveur, permettant à un système d'exploitation client ou à un utilisateur connecté d'utiliser les services d'un serveur d'entreprise. Bien que nécessaire, il n'est pas bloquant de ne pas en posséder une pour des cas plus généraux. Cependant, il est indispensable que l'entreprise s'en procure pour rester à jour en cas de contrôle.

En conclusion, nous avons vu que Windows 10 offre plusieurs éditions et licences. Comprendre ces notions est essentiel pour une utilisation optimale dans un environnement professionnel.

Dans ce module, nous avons exploré en profondeur les systèmes d'exploitation et leur importance dans le monde actuel. Nous avons constaté que les systèmes d'exploitation sont partout autour de nous, et Windows 10 est aujourd'hui prédominant dans les entreprises en tant que système d'exploitation client. Nous avons appris que comprendre le fonctionnement de Windows 10 est essentiel pour devenir un bon technicien.

Importance de la maîtrise de Windows 10 Dans le cadre de notre formation de Technicien Supérieur Systèmes et Réseaux, il est impératif que nous maîtrisions Windows 10. Ce système d'exploitation offre une interface conviviale ainsi que des fonctionnalités robustes qui facilitent la gestion des systèmes informatiques. Être compétent dans son utilisation nous permettra de résoudre efficacement les problèmes techniques qui peuvent survenir dans un environnement professionnel.

Pour devenir un technicien compétent, nous devons développer certaines compétences clés liées à Windows 10. Cela inclut la capacité à installer et configurer le système, comprendre la gestion des mises à jour, ainsi que la connaissance des paramètres de sécurité.

### Module 2 - Installation de Windows 10

Objectifs du module Les prérequis L'installation La migration Démonstration - L'installation TP - Installation de Windows Conclusion

Dans ce module, nous allons explorer les différentes étapes nécessaires à l'installation de Windows 10 sur un système donné. Les objectifs du module sont les suivants : nous allons tout d'abord prendre en compte les prérequis pour l'installation. Cela inclut la vérification des configurations matérielles et logicielles nécessaires pour assurer un bon fonctionnement du système.

Installation de Windows 10 Ensuite, nous allons procéder à l'installation de Windows 10. Cette étape nécessite une attention particulière pour éviter les erreurs et garantir que le système est installé correctement. Nous allons nous familiariser avec les différentes options d'installation, telles que l'installation propre et l'installation de mise à niveau.

Configuration initiale du système Enfin, après l'installation, nous allons effectuer la première configuration du système. Cela comprend le paramétrage des comptes utilisateurs, la configuration des paramètres de sécurité, ainsi que l'activation des fonctionnalités clés du système d'exploitation.

En conclusion, ce module nous permettra de maîtriser l'installation et la configuration initiale de Windows 10, ce qui est essentiel pour nos futures activités professionnelles dans le domaine des systèmes et réseaux.

Dans ce module, nous allons aborder les prérequis matériels nécessaires à l'installation de Windows 10, afin d'assurer un fonctionnement minimal mais performant du système. Pour installer Windows 10, nous devons prendre en compte certains prérequis matériels de base. Tout d'abord, un processeur capable de fournir une puissance de calcul d'1 GHz est indispensable. Concernant la mémoire vive, il nous faut 1 Go pour les systèmes 32 bits et 2 Go pour les systèmes 64 bits. Cependant, avec l'évolution de l'OS et l'utilisation de logiciels supplémentaires, il est préférable de prévoir plus de mémoire vive.

Les exigences de stockage L'espace de stockage est également un critère essentiel. Nous avons besoin de 16 Go d'espace pour un système 32 bits et de 32 Go pour un système 64 bits. Ce stockage est nécessaire pour le système d'exploitation lui-même ainsi que pour les mises à jour qui peuvent survenir. Évidemment, nous devons prévoir davantage d'espace pour le stockage de nos données personnelles.

Comprendre les architectures 32 bits et 64 bits Il est important de comprendre pourquoi il existe une différence de spécification entre les systèmes 32 bits et 64 bits. L'architecture 64 bits représente une avancée matérielle. À mesure que le temps passe, le matériel devient à la fois plus compact et plus puissant. Les composants d'un ordinateur échangent des informations dans un cadre de fiabilité et de rapidité supérieures, ce qui nécessite que le système d'exploitation s'adapte à cette architecture 64 bits, afin d'exploiter le matériel de manière optimale.

Performances et sécurité avec le 64 bits Les systèmes d'exploitation 64 bits sont de plus en plus répandus et apportent de nombreux avantages. En effet, un système Windows 10 64 bits peut gérer de manière native plus de 4 Go de mémoire vive. De plus, il offre une meilleure protection du système, en intégrant le démarrage sécurisé grâce au firmware UEFI. Nous bénéficions également de meilleures garanties de fiabilité, car un tel système ne prend en charge que les périphériques dont le pilote a été signé et approuvé par Microsoft, réduisant ainsi le risque d'erreurs critiques telles que le « blue screen of death ».

Les fichiers nécessaires pour l'installation Pour installer Windows sur un ordinateur, nous avons besoin d'un ensemble de fichiers appelés fichiers système. Ces fichiers doivent être déployés sur le support de stockage de l'ordinateur, qui est généralement le disque dur. Cet ensemble de fichiers est contenu dans une archive appelée « image », connue sous le nom de « install.vim ». L'extension vim signifie Windows Imaging.

Où trouver l'image windows Nous pouvons trouver cette image sur différents médias bootables, tels qu'un DVD — ce qui est la méthode historique — ou des clés USB bootables. Les images ISO, qui représentent le DVD virtuel, sont également une option viable. Il existe aussi des partages réseau contenant plusieurs images vim pour intégrer différentes instances de Windows.

Déploiement de l'image Une fois l'image vim en notre possession, le déploiement de son contenu sur le disque dur requiert un outil spécifique, soit un mini système d'exploitation. Ce dernier est très léger et doit également être disponible sur le support d'installation, en utilisant le fichier boot.vim. Ce fichier est celui qui apparaîtra à l'écran lors du démarrage de l'ordinateur, avant même qu'il n'héberge Windows.

En résumé, les prérequis pour installer Windows 10 doivent être scrupuleusement respectés pour garantir la performance et la sécurité de notre système d'exploitation.

Dans ce module, nous allons aborder les différentes méthodes d'installation de Windows 10. Nous avons deux possibilités pour installer Windows 10. Nous pouvons procéder à une nouvelle installation sur du nouveau matériel, sur un disque tout neuf, ou bien sur un ordinateur qui avait préalablement un système d'exploitation installé. Dans ce dernier cas, le contenu du disque sera au préalable effacé.

Mise à niveau vers Windows 10 Nous avons également la possibilité de réaliser ce qu'on appelle une mise à niveau vers Windows 10. Cela consiste à installer Windows 10 par-dessus un Windows existant. Toutefois, ce type d'installation est plutôt rare et n'est pas la plus appréciée des techniciens et des administrateurs, car il réduit la fiabilité du système. Installer Windows 10 au-dessus d'un Windows 7 qui n'est peut-être pas très fiable est à éviter, selon nous.

D'autres contraintes existent également. Par exemple, il ne sera pas possible de faire une mise à niveau vers Windows 10 depuis un ordinateur possédant Windows XP ou Windows Vista. Pour toutes ces raisons, la mise à niveau est donc à proscrire, même si elle peut être utilisée dans des cas spécifiques, comme pour conserver des données difficiles à exporter ou pour continuer à utiliser des logiciels sans accès à leurs sources d'installation.

Processus d'installation Que se passe-t-il lors de l'installation de Windows ? Après avoir booté sur le support d'installation, un mini système d'exploitation issu du boot.vim se lance, et nous arrivons dans un environnement d'installation. Nous choisissons ensuite l'édition de Windows 10 lorsque l'assistant nous le demande, bien que cette étape soit facultative. L'assistant nous demande alors où déployer les fichiers système.

volume_choisi = volumes_disponibles.find { |v| v.formaté_en == 'NTFS' } Nous avons la possibilité d'utiliser un volume existant sur le disque dur qui sera formaté en NTFS, ou bien de créer un nouveau volume pour accueillir le système d'exploitation. Une fois le volume choisi, l'installation commence : c'est-à-dire la copie des fichiers système en première étape, suivie des configurations de bas niveau du système. Un redémarrage survient à l'issue de l'installation, ce qui est normal. Nous pouvons alors retirer le support d'installation, car nous n'en aurons plus besoin, tout étant maintenant présent sur le disque dur de l'ordinateur.

L'ordinateur démarre maintenant grâce aux fichiers système présents sur le disque dur, et nous procédons au premier démarrage. Ce premier démarrage après l'installation est important, car il nous permet de personnaliser notre système.

Nous devons retenir que le choix entre une installation neuve et une mise à niveau doit être fait judicieusement, en tenant compte de la fiabilité du système et des données à sauvegarder.

Dans l'environnement professionnel actuel, lorsque nous installons Windows 10, il est courant que nous travaillions sur un nouvel ordinateur suite à un renouvellement de parc. Cela signifie que nous devons recréer un environnement de travail similaire à celui que nous avions auparavant. Les éléments à migrer Nous devons réfléchir à ce que notre équipe technique doit transférer de l'ancien poste vers le nouveau. Cela inclut :

Les comptes et profils des utilisateurs. Les configurations particulières des logiciels installés localement. Des outils bureautiques. Les paramètres systèmes tels que les pilotes, la messagerie et les polices d'écriture. Les fichiers et dossiers. Les solutions de sauvegarde Pour les fichiers et dossiers, nous pourrons nous appuyer sur notre solution centralisée de sauvegarde. Si celle-ci n'existe pas, Windows propose un outil natif de sauvegarde de données : l'outil de sauvegarde et restauration Windows 7, qui a été conservé tel quel dans Windows 10. Cet outil n'a subi aucun changement depuis sa création.

La migration des paramètres et des configurations Pour migrer les comptes, les profils et autres configurations et logiciels, notre équipe se basera sur des scripts USMT, pour User State Migration Tools.

Scripts USMT Des procédures d'utilisation d'USMT sont disponibles sur le site de Microsoft. Voici un exemple de script que nous pourrions utiliser :

USMT /capture /i:migration.xml /l:logfile.log En conclusion, le processus de migration est essentiel pour garantir que nous ne perdions pas en productivité lors du passage à un nouvel ordinateur. Grâce à des outils efficaces et des scripts appropriés, nous pouvons assurer une transition fluide vers notre nouvel environnement de travail.

Dans cette section, nous allons procéder à une simple installation de Windows 10, ici la build 1909. Pour l'installation, nous nous appuyons sur une VM Workstation qui répond aux prérequis d'installation. Le média d'installation est une image ISO que nous allons aller chercher dans notre dossier ISO. Nous pouvons même la monter dans notre système d'exploitation principal, comme si nous naviguions à l'intérieur d'un DVD.

Vérification des fichiers d'installation Allons vérifier que les images install.vim et boot.vim sont présentes sur ce support d'installation. Nous faisons une petite recherche avec *vim, et nous nous retrouvons avec un résultat. Deux fichiers apparaissent : install.vim, qui fait 4,29 Go, et boot.vim, qui est beaucoup plus petit. Le fichier install.vim contient tous les fichiers système qui seront ensuite présents sur le disque dur de notre VM, tandis que boot.vim est un mini système d'exploitation permettant d'installer Windows.

Montage de l'image ISO Nous allons introduire ce DVD virtuel dans le lecteur DVD virtuel de notre VM. Pour cela, nous allons dans les paramètres du lecteur DVD de la VM et montons l'ISO présente sur notre disque dur externe. L'image ISO est donc présente dans le lecteur DVD.

Configuration de la machine virtuelle Avant de démarrer notre VM, il est important de noter que pour l'instant, c'est une VM vide, sans système d'exploitation installé. Lorsque nous allons la démarrer, le firmware de cette VM va aller à la recherche d'un système d'exploitation. Il parcourra cet ordre et détectera le DVD, en lançant le contenu de boot.vim pour pouvoir installer Windows.

Démarrage de l'installation La VM démarre et affiche « Press any key to boot from CD or DVD ». Cela nous prouve que l'image ISO a bien été prise en compte par notre VM et que l'assistant d'installation Windows se lance. Nous configurons l'environnement en français, en choisissant d'installer Windows, et non de le réparer.

Activation et choix de l'édition L'installateur nous propose d'activer Windows. Nous n'avons pas de clé d'activation pour le moment, mais nous pourrons l'activer plus tard. Nous pouvons bénéficier d'un délai de grâce de 30 jours, avec toutes les fonctionnalités disponibles. Ensuite, nous choisissons l'édition. Dans notre cas, nous sélectionnons « Windows 10 Professionnel », bien que deux éditions soient proposées, dont l'édition N qui a été dépouillée de certaines fonctionnalités multimédia.

CLUF et type d'installation Nous acceptons le contrat de licence utilisateur final (CLUF) pour pouvoir continuer l'installation. Ensuite, l'installateur nous demande notre type d'installation. Nous n'ayant pas de système d'exploitation dans notre VM, nous choisissons une installation personnalisée. Il nous demande où installer Windows, et nous optons pour le disque dur tout neuf de 60 Go.

Copie des fichiers et préparation de Windows 10 La copie des fichiers est en cours. Le contenu de l'image système se déploie sur le volume, et nous devons patienter quelques minutes pour la préparation de Windows 10. Le firmware détecte le système d'exploitation sur le disque dur maintenant qu'il est déployé et gère le premier démarrage.

Configuration initiale de Windows Après un redémarrage automatique, Windows démarre sa configuration de base. L'assistant OOBE (Out-of-Box Experience) s'affiche. Nous choisissons la région « France » et la disposition de clavier appropriée. Étant donné que notre VM n'est pas connectée à Internet, nous sélectionnons « Je n'ai pas Internet » et continuons avec une installation limitée.

Personnalisation du premier utilisateur Nous créons notre premier utilisateur, « Demo User ». Nous définissons un mot de passe pour sécuriser l'accès et choisissons trois questions de sécurité. Cet utilisateur pourra personnaliser le système par la suite.

Finalisation de l'installation Nous finalisons les premières configurations, puis nous arrivons sur le bureau de l'utilisateur « Demo User ». Windows a terminé son installation et ses configurations initiales, et nous sommes maintenant prêts à l'utiliser.

Pour résumer, nous avons monté une image ISO, démarré la VM, et configuré Windows 10 dans un environnement virtuel adapté.

Dans ce TP, nous allons être amenés à créer une VM avec Workstation. Pour cela, nous vous invitons à consulter la vidéo d'introduction à Workstation disponible sur le site du campus en ligne.

Création de la VM Une fois notre VM créée, nous procéderons à l'installation de Windows 10. Cela nécessitera que nous suivions plusieurs étapes pour s'assurer que tout soit correctement configuré.

Configuration initiale de Windows 10 Après l'installation, nous allons devoir réaliser la configuration initiale de Windows 10. Cela inclut des réglages importants pour assurer le bon fonctionnement de notre environnement de travail.

Importation d'une VM existante Nous aurons également l'occasion d'importer une VM Windows 10 existante. Cette étape nous permettra de nous familiariser avec les fonctionnalités d'importation et d'exportation de Workstation.

À vous de jouer ! Nous espérons que ces étapes vous aideront à maîtriser l'installation et la configuration de Windows 10 dans un environnement virtuel.

Dans ce module, nous avons compris qu'il existe différents supports d'installation du système d'exploitation Windows 10. Nous savons que tout support doit posséder au minimum une image VIM d'installation. Ils nous permettent de mener à bien le processus d'installation en toute simplicité.

Méthodes d'installation Nous avons également exploré les différentes méthodes d'installation. Que ce soit par le biais d'une nouvelle installation ou d'une mise à niveau, chacune des options propose ses avantages.

Paramétrage de Windows 10 Enfin, une fois que nous avons installé le système d'exploitation, il est essentiel de procéder à son paramétrage de base. Cela inclut la configuration des paramètres de réseau, des paramètres de sécurité, ainsi que le choix des mises à jour.

En résumé, nous avons acquis une compréhension essentielle des supports d'installation, des méthodes disponibles et des étapes de paramétrage nécessaires pour Windows 10. Grâce à ces connaissances, nous sommes désormais bien préparés pour appliquer nos compétences lors des installations réelles.

Module additionnel - VMware Workstation

Objectifs du module La virtualisation des systèmes VMware Workstation et les ressources VMware Workstation et le réseau VMware Workstation et ses spécificités Démonstration - Création d'une VM Import et export de VM Démonstration - Import et export de VM Conclusion

Dans ce module, nous allons découvrir différents aspects du logiciel VMware Workstation dans le but de pouvoir créer une machine virtuelle. Objectifs du module Nous allons explorer les notions essentielles de la virtualisation des systèmes, ce qui nous permettra de comprendre comment fonctionne VMware Workstation. Nous apprendrons également à gérer les ressources de Workstation, afin de maximiser l'efficacité de nos machines virtuelles.

Virtualisation des systèmes Nous allons aborder le concept de virtualisation, en détaillant ses avantages et ses inconvénients. Cela inclut la compréhension de l'environnement virtuel et comment il interagit avec le matériel physique.

Workstation et ses ressources Nous allons examiner les différentes ressources que nous pouvons attribuer à nos machines virtuelles. Cela inclut la gestion de la mémoire, du processeur et du stockage alloué à chaque machine virtuelle.

Workstation et le réseau Dans cette partie, nous allons voir comment configurer le réseau pour nos machines virtuelles. Nous allons apprendre à établir une communication entre les machines virtuelles et le réseau physique.

Spécificités de Workstation Nous allons également étudier les spécificités de VMware Workstation, telle que la prise en charge de différents systèmes d'exploitation et la gestion des snapshots pour sauvegarder nos configurations.

Import et export de machines virtuelles Enfin, nous allons apprendre à importer et exporter des machines virtuelles, ce qui nous permettra de partager des environnements virtuels et de les transférer entre différents systèmes.

Ce module nous offre une compréhension approfondie de VMware Workstation, que nous allons mettre en pratique à travers des exercices et des études de cas concrets.

Dans ce texte, nous allons explorer la virtualisation des systèmes, qui est une notion fondamentale avant de plonger dans l'utilisation de VMware Workstation. Qu'est-ce que la virtualisation des systèmes ? La virtualisation des systèmes nous permet de faire cohabiter plusieurs systèmes d'exploitation sur une seule machine physique. En règle générale, un ordinateur, ou une machine physique, est piloté par un unique système d'exploitation. Ce dernier est le seul à pouvoir utiliser les ressources physiques de l'ordinateur. L'idée principale de la virtualisation est donc de permettre à différents systèmes d'exploitation dits "invités" d'exploiter les ressources de la machine hôte.

Le rôle de l'hôte et des machines virtuelles Dans le contexte de la virtualisation, la machine physique est appelée l'hôte. L'hôte possède un certain nombre de ressources matérielles qui seront partagées entre les différents systèmes d'exploitation qu'il héberge. Les systèmes d'exploitation invités fonctionnent dans un ordinateur virtuel, souvent désigné sous l'appellation de "virtual machine" ou "VM". Chaque VM possède son propre système d'exploitation, qui est à la fois indépendant et isolé des autres, tout en cohabitant sur la même machine hôte.

Le fonctionnement des machines virtuelles Les VM utilisent les ressources de l'hôte, qui sont définies au préalable par le technicien. Une machine virtuelle est définie par un ensemble de fichiers stockés dans un répertoire, et ces fichiers seront gérés par un hyperviseur. L'hyperviseur est l'élément central de la virtualisation, car il fait le lien entre les VM et l'hôte, permettant ainsi la coexistence des différents systèmes d'exploitation. Sans hyperviseur, la virtualisation ne serait pas possible.

Les types d'hyperviseurs L'hyperviseur existe sous deux formes. Il peut être un logiciel, comme VMware Workstation, ou un système d'exploitation, comme ESXI, également proposé par VMware. L'hyperviseur a une vision globale sur l'ensemble des ressources de l'hôte et gère l'accès à ces ressources pour les différentes VM.

Les besoins des machines virtuelles Pour fonctionner correctement, une VM, comme toute machine physique, nécessite plusieurs éléments essentiels : des ressources processeur, de la mémoire vive, du stockage et une carte réseau. En plus de ces ressources, une VM peut également nécessiter des composants supplémentaires tels qu'un BIOS ou EFI, une carte graphique, voire un lecteur DVD.

Visualisation de la virtualisation Pour mieux comprendre le processus, imaginons un schéma : un hôte équipé de nombreux ressources peut héberger un hyperviseur, que ce soit sous forme de logiciel comme Workstation ou sous forme de système d'exploitation comme ESXI. L'hyperviseur nous permet de manipuler plusieurs VM, qu'elles exécutent un système d'exploitation Linux ou Microsoft Windows. Grâce à cet hyperviseur, nous pouvons gérer efficacement les ressources CPU, RAM, stockage et les connexions réseau nécessaires aux différentes VM.

Compréhension globale de la virtualisation Il est important de réaliser que bien que les systèmes d'exploitation invités aient l'impression d'avoir un accès direct aux ressources matérielles, c’est en fait l'hyperviseur qui intercepte leurs demandes. Il priorise, gère et partage ces ressources entre toutes les VM. Cela nous montre comment la virtualisation permet d'optimiser l'utilisation des ressources informatiques tout en garantissant l'isolation de chaque environnement invité.

En conclusion, la virtualisation des systèmes est un concept clé qui nous permet de maximiser l'utilisation des ressources matérielles d'une machine tout en offrant un environnement isolé pour chaque système d'exploitation invité.

Dans VMware Workstation, nous avons la possibilité de créer des machines virtuelles (VM) configurées selon nos besoins. Nous avons la possibilité de configurer les ressources CPU lors de la création d'une VM. En fonction des ressources totales de notre hôte, nous attribuons des processeurs et des cœurs de processeur. Il est important de ne pas créer de VM trop gourmandes. En effet, plus nous attribuons de ressources CPU de l'hôte, plus il y a de chances que les instructions de notre VM soient mises en file d'attente, car d'autres VM ou même l'OS de l'hôte peuvent être prioritaires. Cela peut donc avoir un impact néfaste sur les performances.

Recommandations et ajustements Les recommandations de VMware sont disponibles en cliquant sur le bouton Help. Nous pouvons toujours ajuster cette attribution une fois la VM créée, mais seulement si celle-ci est éteinte. En fonction du système d'exploitation qui est ou sera installé sur notre VM, Workstation connaît les préconisations des éditeurs et nous propose donc des choix de quantité de RAM à allouer à notre VM.

Gestion de la mémoire vive La mémoire vive attribuée à notre VM lui est techniquement attribuée dès son démarrage. Si nous configurons une VM avec 4 Go de mémoire vive et que nous la démarrons, notre hôte va immédiatement lui dédier 4 Go. Nous devons donc faire attention au dimensionnement de notre VM. Autrement dit, nous devons nous assurer d'avoir suffisamment de mémoire vive disponible sur notre hôte pour que notre VM démarre et fonctionne de manière optimale. Si nous éteignons notre VM, les 4 Go sont libérés et l'hôte pourra s'en servir pour d'autres tâches. Si nous mettons notre VM en pause, le contenu de la mémoire vive est transféré dans un fichier qui se trouve dans le répertoire d'accueil de la VM. Ce contenu retourne en RAM lorsque nous sortons la VM de son état de pause.

Disque dur d'une VM Le disque dur d'une VM est en fait un fichier, ce qui nous donne beaucoup d'avantages. Puisque c'est un fichier, nous pouvons le manipuler comme un fichier. C'est-à-dire que nous pouvons en créer facilement des dizaines. Nous pouvons les déplacer, les copier, les compresser, ou les supprimer. Bref, c'est l'un des gros points forts de la virtualisation, et cela ouvre le champ à beaucoup de possibilités. De plus, par défaut, la taille du disque dur d'une VM est dynamique. Plus nous remplissons le disque dur virtuel de notre VM, plus le fichier grandit. Cela nous permet de moins nous soucier du dimensionnement de l'espace disque de notre hôte. Par exemple, si nous dédions 60 Go maximum à une VM fraîchement installée avec un OS, le fichier ne fera en réalité que quelques Go et grandira au fur et à mesure de la vie de notre VM. Mieux encore, nous pouvons faire du surdimensionnement : nous pouvons allouer plus d'espace que nous n'en avons sur notre hôte tant que tout cet espace n'est pas réellement utilisé.

Précautions à prendre Cependant, une VM possédant un disque d'une taille maximum de 20 Go ne pourra pas dépasser ce quota. De même, si notre hôte n'a plus d'espace, car tout est utilisé pour des VM ou d'autres tâches, nous nous dirigeons vers des effets de bord assez désagréables.

Pour conclure, il est crucial de bien gérer nos ressources CPU et RAM lors de la création de VM sur VMware Workstation afin d'assurer des performances optimales et de prévenir les problèmes potentiels dus à un dimensionnement inapproprié.

Dans ce module, nous allons explorer la notion de VMware Workstation et son rôle essentiel dans la gestion des réseaux virtuels. Les fondamentaux de la communication dans vmware workstation Nous comprenons que, tout comme une machine physique, une machine virtuelle doit respecter les règles de communication de base des réseaux pour interagir. Pour ce faire, elle doit être connectée à un switch. Cette connexion nécessite une carte réseau virtuelle. Les types de connexions disponibles Nous avons plusieurs options grâce aux switches virtuels proposés par VMware Workstation. Connexion Hostonly La connexion Hostonly nous permet de faire communiquer notre VM avec d'autres VM hébergées sur l'hôte, à condition qu'elles soient toutes connectées au même réseau virtuel Hostonly. Il est également possible de communiquer avec l'hôte. Bien sûr, toutes ces machines doivent être dans le même réseau IP, ce qui nécessite une bonne configuration de nos adresses IP. Configuration de l'adressage IP Pour configurer l'adressage de l'hôte, nous devrons ajuster l'adresse IP sur la carte VMware Network Admin. Cette carte est accessible via la commande ncpa.cpl. Le réseau VMnet Le réseau VMnet fonctionne comme les réseaux Hostonly, mais avec l'avantage de pouvoir les personnaliser et les multiplier. Ces réseaux sont numérotés de 0 à 19, avec la particularité que le VMnet1 est réservé comme réseau Hostonly par défaut, tandis que le VMnet8 est dédié au réseau NAT. En activant une carte réseau depuis le menu Virtual Network Editor de Workstation, nous pouvons également communiquer avec notre hôte. Les segments LAN Les LAN segments nous permettent de créer de petits réseaux virtuels pour nos VM. Ces segments peuvent être nommés, ce qui facilite leur gestion. Par exemple, lors de la maquette d'un petit réseau d'entreprise, nous pourrions créer des réseaux tels que "usine", "administratif", "serveur", "imprimante", etc. Si nous souhaitons faire communiquer ces différents réseaux, nous pouvons les relier à l'aide d'un routeur virtuel, bien que la communication directe avec l'hôte ne soit pas possible dans ce cas. Le réseau bridge Le réseau bridge offre la possibilité de connecter notre VM au réseau physique, c'est-à-dire au switch physique auquel notre hôte est connecté. Les communications passent alors par le câble qui relie notre hôte au réseau, ce qui nous permet de bénéficier des services réseau tels que DNS ou DHCP, et d'accéder au reste du monde comme n'importe quelle machine physique. Le réseau NAT Le réseau NAT présente une particularité intéressante. Tout comme le réseau Hostonly, notre VM est connectée au réseau NAT et peut communiquer avec d'autres VM ainsi qu'avec l'hôte à travers la carte virtuelle VMware Network Adapter VMNet8. Grâce à ce réseau, notre VM aura également la possibilité de communiquer avec le réseau physique en empruntant l'adresse IP de la carte Ethernet de l'hôte, process connu sous le nom de translation d'adresse. Nous avons ainsi exploré les différents types de connexions possibles avec VMware Workstation et leur fonction dans la communication réseau des machines virtuelles. Comprendre ces concepts est essentiel pour configurer efficacement nos réseaux virtuels.

Dans cet article, nous allons explorer la solution VMware Workstation et ses spécificités. Avantages de VMware Workstation Nous constatons que VMware Workstation possède plusieurs avantages. Déjà, son interface est épurée et simple à utiliser. Sa prise en main est généralement rapide. Grâce aux VMware Tools qui peuvent être installés dans la VM, nous pouvons améliorer l'utilisation des VM, comme par exemple en réalisant des glissés-déposés de fichiers de l'hôte vers la VM. Nous avons également la possibilité de mettre facilement en pause une VM pour libérer temporairement les ressources de l'hôte.

À notre sens, la virtualisation, de par certaines fonctionnalités, a révolutionné l'administration système, a transformé nos métiers. En quelques clics, nous avons la possibilité, via un snapshot, d'enregistrer la configuration d'une VM à un instant T, avant de procéder éventuellement à une action critique sur la VM, comme la mise à jour d'une application ou l'installation d'un nouveau pilote tiers. Si cette action critique s'avère être un échec et que cela provoque un crash, nous pourrons revenir au snapshot, rappeler notre snapshot, revenir à la dernière configuration enregistrée, ce qu'on appelle dans notre métier procéder à un rollback, afin de retrouver à nouveau une situation stable et fonctionnelle, puis d'investiguer sur l'échec pour ne pas le reproduire.

Clonage et maquettes virtuelles Le clonage aussi est révolutionnaire. En quelques clics et en quelques minutes, nous pouvons nous retrouver avec une maquette composée de plusieurs VM, en clonant une VM modèle en plusieurs clones. En somme, en quelques minutes, nous pouvons nous retrouver avec les bases d'une maquette d'une petite infrastructure d'entreprise.

Inconvénients de VMware Workstation Cependant, il existe des inconvénients à Workstation. Ce logiciel est prévu pour faire des petites maquettes et des tests. Pour virtualiser des machines de production, des serveurs ou des services importants, nous devons utiliser une autre solution de virtualisation plus poussée, prévue pour les entreprises. De plus, Workstation est un logiciel propriétaire, soumis à licence, et qui possède un certain coût. Nous n'aurons pas accès aux sources de Workstation pour éventuellement les modifier ou les personnaliser. Enfin, la virtualisation s'appuie sur des concepts qui ne sont pas simples à comprendre au départ et qu'il faut maîtriser.

Démarrer avec VMware Workstation Quelques trucs sont à connaître pour démarrer avec Workstation. Une VM possède un firmware, un BIOS, un UEFI, que nous pouvons configurer, comme par exemple adapter sa séquence de démarrage. Nous pouvons brancher une clé USB sur le port USB de l'hôte, et elle peut être automatiquement reconnue par notre VM. Lorsque nous travaillons dans une VM, celle-ci capture les entrées clavier et souris. Si nous voulons reprendre la main sur notre hôte, il suffit de taper CTRL et ALT en même temps. Des boutons sont prévus dans la barre de navigation de Workstation pour envoyer un CTRL ALT SUPPR dans la VM, ou pour faire des snapshots, ou pour adapter l'affichage de la VM. Bref, avec le temps, en pratiquant quotidiennement, nous maîtriserons tous ces concepts.

En conclusion, VMware Workstation est un logiciel très utile pour des tests et maquettes virtuelles, mais il convient d'être conscient de ses limitations et de ses coûts pour une réalisation à grande échelle.

Dans cette section, nous allons démontrer comment créer une machine virtuelle (VM) à l'aide de VMware Workstation. Après avoir lancé Workstation, nous accédons à la page principale. Dans la fenêtre centrale, nous avons accès à des actions rapides comme créer une nouvelle VM ou rattacher une VM existante. À gauche, nous disposons de la librairie des VM que nous pouvons utiliser. Comme nous sommes sur une instance de Workstation fraîchement installée, aucune VM n'est disponible.

Création d'une nouvelle VM En haut, se trouve la barre de navigation pour administrer Workstation et ses VM. Commençons par la création d'une nouvelle VM. Nous allons partir ici sur la création d'une VM typique. Trois choix se présentent concernant le système d'exploitation qui sera installé dans cette future VM.

Nous pouvons utiliser le lecteur DVD de l'hôte. Workstation parcourt le contenu du DVD pour en déduire le futur système d'exploitation. Nous pouvons aussi spécifier une image ISO qui contient le système d'exploitation. Ces deux options permettent de gagner du temps, mais Workstation prendra quelques décisions seules concernant la configuration de la VM, ce qui n'est pas toujours ce que nous souhaitons. Nous conseillons donc fortement de choisir l'option « I will install the operating system later ».

Choix et configuration de la VM En gros, nous créons d'abord la VM, puis nous installons ensuite l'OS. Ici, nous choisissons le système d'exploitation qui sera hébergé par la suite dans la VM. Le choix est important, car Workstation va adapter le matériel en fonction du futur système et va nous proposer des recommandations de configuration. Dans notre cas, nous choisissons Windows 10 64 bits.

Nous allons lui donner un nom, un nom de référence pour Workstation, et une localisation sur le disque dur de l'hôte, puisque la VM est définie par un ensemble de fichiers. Dans notre démonstration, nous hébergeons les fichiers de notre VM dans le répertoire suivant : dossier VM et sous-dossier Workstation.

Nous allons créer un nouveau sous-dossier dans Workstation et nous allons lui donner le nom de notre future VM. Dans les bonnes pratiques, il est intéressant d'héberger votre VM sur un volume à part et sur un disque rapide, de préférence un disque dur SSD.

Finalisation de la création de la VM La taille maximale de notre disque dur virtuel en Go nous est présentée. Workstation nous propose 64 Go, car c'est la taille recommandée pour une VM qui hébergera un système d'exploitation Windows 10. Le disque dur de la VM est un fichier avec une extension VMDK pour Virtual Machine Disk. Nous avons la possibilité d'utiliser notre disque via un fichier simple ou bien de le découper en plusieurs petits morceaux. Nous choisissons « Store virtual disk as a single file » pour une meilleure lecture visuelle du contenu de notre répertoire.

Récapitulatif et démarrage de la VM Un récapitulatif de la création de notre VM nous est présenté. Nous constatons que la VM possède déjà une configuration CPU, RAM, et une carte réseau. Nous avons la possibilité de modifier cette configuration en cliquant sur « Customize hardware ». Nous pouvons également changer la quantité de mémoire vive allouée et le nombre de processeurs utilisés. Pour cette démonstration, nous choisirons un cœur de notre processeur.

Nous connectons notre VM au réseau. Nous l'ajoutons au réseau « Hostonly ». Ensuite, nous cliquons sur Finish. Notre VM apparaît dans notre librairie. Nous pouvons voir la configuration établie précédemment et l'éditer de nouveau si nécessaire. Finalement, nous pouvons allumer notre VM et elle démarre. Évidemment, elle bloque au démarrage car, pour le moment, aucun système d'exploitation n'est installé.

Vérification des fichiers de la VM Nous arrêtons la VM en effectuant un clic droit puis en choisissant « Power » &gt; « Shutdown Guest ». Nous allons faire un tour dans le dossier d'accueil de la VM. La VM est hébergée dans le répertoire « VM », « Workstation » et « Demos ». Nous retrouvons ici les fichiers qui définissent cette VM démo.

Le fichier « vmx » récapitule sa configuration dans un fichier texte que nous pouvons éditer avec un bloc-notes, par exemple. Le fichier « vmdk » correspond au disque dur de la VM. À ce stade, sa taille est de quelques mégas et non pas 60 Go. Sa taille grandira au fur et à mesure de la vie de la VM, mais ne pourra cependant pas dépasser 60 Go.

Nous avons vu comment créer une VM à l'aide de VMware Workstation. Cette opération requiert une bonne compréhension des étapes et des choix à faire pour assurer un bon fonctionnement de la VM par la suite.

Dans cette section, nous allons explorer les notions d'importation et d'exportation de machines virtuelles (VM) dans VMware Workstation. Nous savons qu'une VM est définie par un ensemble de fichiers, et cela constitue un avantage important. Puisque ce sont des fichiers, nous avons donc la possibilité de les déplacer, de les copier, et de les manipuler.

Importation de machines virtuelles Nous pouvons importer des VM déjà existantes dans notre librairie. Si le dossier d'accueil est disponible, nous pouvons ouvrir la VM depuis Workstation ou bien nous pouvons double-cliquer sur le fichier VMX pour que la VM se charge dans la librairie de notre hyperviseur.

Une autre possibilité est d'importer une VM depuis une archive. Nous pouvons utiliser des formats tels que OVA (Open Virtual Appliance) ou OVF (Open Virtualization Format).

Exportation de machines virtuelles A l'inverse, nous avons la capacité d'exporter des VM, que ce soit pour les sauvegarder, les déplacer ou les réutiliser par la suite. Nous pouvons tout simplement le faire en copiant le dossier d'accueil de la VM vers sa destination de sauvegarde.

Une autre méthode consiste à créer une archive OVA ou OVF, ce qui nous permet de conserver une version compacte de notre machine virtuelle qui peut être facilement transférée ou stockée.

Commandes pour l'exportation Voici un exemple de commande que nous pourrions utiliser pour exporter une VM en utilisant le format OVA :

vmware-vdiskmanager -r &lt;nom_VM&gt;.vmdk -t 1 &lt;nom_VM_export.ova&gt; En conclusion, nous avons vu que l'importation et l'exportation de machines virtuelles dans VMware Workstation est un processus simple et efficace, permettant de gérer nos VM de manière flexible.

Dans ce module, nous allons explorer la notion d'import et d'export de machines virtuelles (VM) en utilisant VMware Workstation. Importation d'une machine virtuelle Pour commencer, nous allons voir comment importer une VM dans notre environnement de virtualisation. Je vais pouvoir aller chercher le dossier qui héberge déjà une VM. Sur mon disque externe, je possède une VM d'Ebian 9. Je vais l'importer dans ma librairie. Il suffit de sélectionner, de double-cliquer sur le fichier VMX. Puisque cette VM existait déjà, elle possède déjà une configuration. On peut le voir, 512 MB de mémoire vive, un processeur, un disque dur de 20 GB. Bref, sa configuration est disponible. Nous allons pouvoir démarrer la machine virtuelle.

Workstation me pose une question. Il me demande si j'ai déplacé cette VM. Dans ce cas, il conservera la configuration source, comme par exemple son adresse MAC. Ou bien si j'ai copié cette VM. Dans ce cas, Workstation générera une nouvelle adresse MAC. Dans mon cas, je l'ai copiée. La VM démarre.

Utilisation d'archives OVA et OVF De la même manière, nous pouvons nous baser sur une archive OVA ou OVF pour importer une machine virtuelle dans la librairie. Je vais pouvoir ouvrir une nouvelle machine virtuelle et aller sélectionner une archive OVA, par exemple. Ici, une archive PFSense.

Il vous demande de donner un nom pour cette VM dans votre librairie. Puis, dans quel répertoire vous souhaitez décompacter votre archive. Je vais l'appeler PFSense et je vais la décompacter dans un sous-dossier VM qui portera son nom. Et j'importe la VM. L'importation peut prendre quelques secondes à quelques minutes. La VM est maintenant importée dans notre librairie. C'est une archive, elle existait déjà, cette VM. Elle possède donc aussi déjà une configuration. Un giga de mémoire vive, un processeur, un disque dur de 20 gigas, etc. Et nous allons pouvoir démarrer cette machine virtuelle.

Exportation d'une machine virtuelle Passons maintenant à l'exportation d'une VM. Admettons que nous souhaitions conserver une copie de notre VM démo. Dans un premier temps, on peut tout simplement copier-coller le dossier d'un volume vers un autre. Ce qui est peut-être la solution la plus simple. Cependant, nous pouvons aussi créer une archive OVA ou OVF de notre VM.

#### Allons-y. On sélectionne la VM. Voici les étapes à suivre

File, Export to OVF On sélectionne une destination pour l'export. Et on choisit le format OVF par défaut. Sinon, on peut changer l'extension en OVA. Enregistré. L'exportation de la VM est en cours. L'export se termine.

Nous allons pouvoir aller vérifier maintenant si l'exportation s'est bien déroulée, si l'archive OVA est bien disponible dans le dossier destination. Nous allons pouvoir aller vérifier dans mon dossier OVA. Et j'ai bien une archive démo qui est présente. Vous remarquerez qu'elle est très légère. Ce qui n'est pas étonnant puisque cette VM ne possède pas du tout de système d'exploitation. L'avantage avec l'OVA, c'est que votre VM est archivée dans un seul fichier.

En conclusion, l'importation et l'exportation des VMs dans VMware Workstation sont des procédés simples mais cruciaux pour la gestion de nos environnements virtuels. Grâce à ces techniques, nous pouvons facilement sauvegarder et transférer nos machines virtuelles selon nos besoins.

Dans cette formation, nous avons découvert que Workstation est un logiciel essentiel pour maqueter des environnements, que ce soit pour l'apprentissage ou pour effectuer des tests avant une mise en production. Nous avons vu que Workstation nous permet de virtualiser l'utilisation des ressources telles que le CPU, la RAM, le stockage et l'accès au réseau. Cela constitue un atout majeur dans notre parcours de formation en tant que Technicien Supérieur Systèmes et Réseaux.

Grâce à cet outil, nous serons en mesure de créer des environnements flexibles et adaptés à nos besoins, facilitant ainsi l'expérimentation et l'apprentissage pratique.

En conclusion, VMware Workstation est un outil incontournable qui nous accompagnera tout au long de notre formation, et nous avons hâte de découvrir davantage grâce à nos futures expériences.

### Quiz complet — Systèmes clients Microsoft

### Modules 1 + 2 + Extra

---

### Niveau Facile (1 à 15)

### 1. Qu’est-ce qu’un système d’exploitation ?

A. Un logiciel de montage vidéo B. Un programme qui gère le matériel et les logiciels d’un ordinateur ✅ C. Un antivirus D. Un navigateur web

**Pourquoi ?** Le système d’exploitation (OS) est le logiciel de base qui permet à l’ordinateur de fonctionner. Il sert d’intermédiaire entre le matériel, les applications et l’utilisateur.

**Exemple :** Sans Windows, tu ne pourrais pas lancer l’explorateur de fichiers, ouvrir un navigateur ou gérer tes périphériques.

---

### 2. Quel composant d’un système d’exploitation gère directement les ressources matérielles ?

A. Le navigateur B. Le noyau ✅ C. Le bureau D. Le BIOS

**Pourquoi ?** Le **noyau** (kernel) est le cœur du système d’exploitation. Il gère la mémoire, le processeur, les périphériques et les accès système.

**Exemple :** Quand plusieurs programmes tournent en même temps, c’est le noyau qui répartit le temps CPU entre eux.

---

### 3. Que signifie GUI ?

A. Global User Interface B. Graphic Utility Interface C. Graphical User Interface ✅ D. General User Internet

**Pourquoi ?** GUI signifie **Graphical User Interface**, c’est-à-dire l’interface graphique avec fenêtres, icônes, menus, etc.

**Exemple :** Le bureau Windows avec la barre des tâches et le menu Démarrer fait partie de la GUI.

---

### 4. Quelle interface permet d’interagir avec le système via des commandes textuelles ?

A. GUI B. CLI ✅ C. BIOS D. UEFI

**Pourquoi ?** CLI signifie **Command Line Interface**. C’est une interface où l’on tape des commandes au clavier.

**Exemple :** L’invite de commandes `cmd` ou PowerShell sous Windows sont des interfaces CLI.

---

### 5. Quel est le rôle principal d’un système d’exploitation ?

A. Uniquement afficher des images B. Gérer le matériel, les fichiers et exécuter les programmes ✅ C. Se connecter à Internet automatiquement D. Remplacer la carte mère

**Pourquoi ?** Le système d’exploitation ne sert pas qu’à afficher un bureau : il gère les programmes, la mémoire, les disques, les utilisateurs, les périphériques, etc.

**Exemple :** Quand tu branches une clé USB et qu’elle apparaît dans l’explorateur, c’est l’OS qui gère ça.

---

### 6. Lequel de ces systèmes est un système d’exploitation Microsoft ?

A. Ubuntu B. Windows 10 ✅ C. Android D. macOS

**Pourquoi ?** Windows 10 fait partie de la famille des systèmes d’exploitation développés par Microsoft.

**Exemple :** Windows 7, Windows 10 et Windows 11 sont tous des OS Microsoft.

---

### 7. Quel ancêtre de Windows était principalement en ligne de commande ?

A. MS-DOS ✅ B. Windows 10 C. Windows XP D. Windows 8

**Pourquoi ?** Avant les versions graphiques de Windows, Microsoft proposait **MS-DOS**, un système basé sur des commandes texte.

**Exemple :** Pour lancer un programme sous MS-DOS, il fallait taper son nom dans la console.

---

### 8. Que signifie “Windows as a Service” (WaaS) ?

A. Windows est vendu uniquement sur Internet B. Windows évolue par mises à jour continues plutôt que par nouvelles versions totalement séparées ✅ C. Windows fonctionne sans disque dur D. Windows est gratuit pour tout le monde

**Pourquoi ?** WaaS signifie que Windows reçoit régulièrement des **mises à jour fonctionnelles et de sécurité**, au lieu d’attendre de longues années entre deux versions majeures.

**Exemple :** Windows 10 a reçu plusieurs mises à jour de fonctionnalités au fil du temps, sans changer totalement de nom.

---

### 9. Quel type de mise à jour Windows apporte surtout des corrections de bugs et de sécurité ?

A. Feature Update B. Quality Update ✅ C. BIOS Update D. Driver Rollback

**Pourquoi ?** Les **Quality Updates** corrigent les bugs, améliorent la stabilité et comblent des failles de sécurité.

**Exemple :** Les mises à jour mensuelles de sécurité distribuées via Windows Update en font partie.

---

### 10. Quel type de mise à jour Windows apporte de nouvelles fonctionnalités importantes ?

A. Quality Update B. Feature Update ✅ C. Ping Update D. Patch matérielle

**Pourquoi ?** Une **Feature Update** modifie davantage le système : nouvelles fonctions, nouvelles interfaces, changements plus visibles.

**Exemple :** Une grande mise à jour de Windows 10 ajoutant de nouveaux outils ou modifiant le menu Démarrer.

---

### 11. Quel jour mensuel est souvent associé aux mises à jour de sécurité Microsoft ?

A. Monday Fix B. Patch Tuesday ✅ C. Security Friday D. Update Sunday

**Pourquoi ?** Microsoft publie traditionnellement une grande partie de ses correctifs de sécurité lors du **Patch Tuesday**.

**Exemple :** En entreprise, les admins surveillent souvent ce jour pour déployer les correctifs.

---

### 12. Quelle édition de Windows 10 est destinée à un usage domestique classique ?

A. Entreprise B. Professionnelle C. Famille ✅ D. Datacenter

**Pourquoi ?** L’édition **Famille (Home)** vise surtout le grand public.

**Exemple :** Un PC acheté en magasin pour un usage personnel est souvent livré avec Windows 10 Famille.

---

### 13. Quelle édition de Windows 10 ajoute des fonctions plus avancées pour le travail et l’administration ?

A. Famille B. Professionnelle ✅ C. Starter D. Embedded

**Pourquoi ?** La version **Professionnelle** ajoute des fonctions comme la gestion avancée, certaines stratégies, le domaine, etc.

**Exemple :** Un PC utilisé en entreprise a plus souvent Windows 10 Pro que Windows 10 Home.

---

### 14. Une licence OEM est généralement :

A. transférable librement sur plusieurs machines B. liée à la machine vendue avec le système ✅ C. réservée uniquement aux serveurs D. utilisée uniquement en machine virtuelle

**Pourquoi ?** Une licence **OEM** est généralement fournie avec un ordinateur et liée à cette machine.

**Exemple :** Un PC portable acheté avec Windows préinstallé utilise souvent une licence OEM.

---

### 15. Quel outil Windows permet de tester des versions en avance pour les utilisateurs volontaires ?

A. Windows Legacy B. Windows Insider ✅ C. Microsoft DOS Lab D. Task Scheduler

**Pourquoi ?** Le programme **Windows Insider** permet d’essayer des builds de test avant leur diffusion générale.

**Exemple :** Un utilisateur Insider peut recevoir des versions préliminaires de nouvelles fonctionnalités Windows.

---

### Niveau Moyen (16 à 30)

### 16. Quelle architecture permet en général d’utiliser plus de mémoire vive et d’exécuter des applications 64 bits ?

A. 16 bits B. 32 bits C. 64 bits ✅ D. 8 bits

**Pourquoi ?** Un système **64 bits** peut gérer davantage de mémoire et exécuter des logiciels conçus pour cette architecture.

**Exemple :** Windows 10 64 bits peut utiliser bien plus de RAM qu’un système 32 bits classique.

---

### 17. Quel type d’installation conserve généralement l’ancien système et les données utilisateur lorsqu’elle est possible ?

A. Nouvelle installation B. Mise à niveau ✅ C. Formatage complet D. Suppression du boot

**Pourquoi ?** Une **mise à niveau** vise à conserver autant que possible les applications, paramètres et données existants.

**Exemple :** Passer d’une version de Windows à une autre sans repartir de zéro.

---

### 18. Quel type d’installation repart de zéro et remplace l’environnement existant ?

A. Mise à niveau B. Nouvelle installation ✅ C. Migration DNS D. Snapshot

**Pourquoi ?** Une **nouvelle installation** installe Windows sur une base propre, souvent après partitionnement/formatage.

**Exemple :** Installer Windows 10 sur un SSD vierge ou après avoir supprimé les partitions existantes.

---

### 19. Quel fichier contient principalement l’image du système Windows à déployer ?

A. boot.ini B. install.wim ✅ C. pagefile.sys D. desktop.ini

**Pourquoi ?** Le fichier **install.wim** contient l’image de Windows à installer.

**Exemple :** Lorsqu’on prépare un support d’installation, c’est ce fichier qui contient les données du système à déployer.

---

### 20. Quel fichier est utilisé pour l’environnement de démarrage/installation de Windows ?

A. install.wim B. boot.wim ✅ C. autorun.inf D. kernel32.dll

**Pourquoi ?** **boot.wim** sert à démarrer l’environnement d’installation de Windows.

**Exemple :** Quand tu démarres sur une clé USB Windows, l’environnement de setup vient notamment de `boot.wim`.

---

### 21. Quel support peut être utilisé pour installer Windows 10 ?

A. Une clé USB bootable ✅ B. Un câble RJ45 uniquement C. Un fichier .txt D. Un navigateur web

**Pourquoi ?** Windows peut être installé depuis un **DVD**, une **clé USB bootable**, voire une image préparée.

**Exemple :** Créer une clé USB d’installation de Windows 10 avec l’outil Microsoft.

---

### 22. Lors d’une installation de Windows, à quoi sert le partitionnement ?

A. À chiffrer Internet B. À découper le disque en espaces logiques pour installer et organiser les données ✅ C. À augmenter la fréquence CPU D. À activer le Wi-Fi

**Pourquoi ?** Le partitionnement permet de structurer le disque : partition système, données, récupération, etc.

**Exemple :** Tu peux avoir une partition pour Windows et une autre pour tes fichiers personnels.

---

### 23. Que fait le formatage d’une partition avant l’installation ?

A. Il augmente la RAM B. Il prépare le système de fichiers sur la partition ✅ C. Il active le BIOS D. Il installe les pilotes réseau

**Pourquoi ?** Le formatage prépare la partition pour y stocker des fichiers selon un système de fichiers compatible.

**Exemple :** Formater une partition en NTFS avant d’y installer Windows.

---

### 24. Quel outil est cité pour aider à migrer les données utilisateur lors d’un changement de poste ou de système ?

A. USMT ✅ B. ARP C. netstat D. ping

**Pourquoi ?** **USMT** (User State Migration Tool) sert à migrer profils et données utilisateurs dans des scénarios de déploiement.

**Exemple :** Transférer les paramètres d’un utilisateur d’un ancien PC vers un nouveau poste Windows.

---

### 25. À quoi sert principalement une sauvegarde avant une réinstallation ?

A. À accélérer le processeur B. À protéger les données en cas de perte ou de suppression pendant l’installation ✅ C. À créer un nouveau noyau D. À changer la licence OEM en Retail

**Pourquoi ?** Réinstaller un système peut effacer des données. Une sauvegarde réduit ce risque.

**Exemple :** Copier Documents, Bureau et paramètres importants sur un disque externe avant une nouvelle installation.

---

### 26. Quelle édition de Windows 10 est la plus orientée grandes organisations avec fonctions avancées de gestion ?

A. Famille B. Entreprise ✅ C. Student D. Basic

**Pourquoi ?** L’édition **Entreprise** cible les structures qui ont besoin de fonctions avancées de sécurité, de déploiement et d’administration.

**Exemple :** Un parc de plusieurs centaines de PC en entreprise utilisera plus volontiers Windows Enterprise.

---

### 27. Une licence Retail a généralement quel avantage par rapport à une OEM ?

A. Elle est plus liée au matériel et moins déplaçable B. Elle peut en général être transférée plus facilement vers une autre machine ✅ C. Elle ne fonctionne pas avec Windows D. Elle ne permet pas l’activation

**Pourquoi ?** La licence **Retail** est généralement plus souple que l’OEM sur le transfert, même s’il faut respecter les conditions de licence.

**Exemple :** Si tu changes de PC, une licence Retail est souvent plus simple à réutiliser qu’une OEM.

---

### 28. Dans le contexte des licences, MAK signifie :

A. Multi Activation Key ✅ B. Manual Access Kernel C. Microsoft Admin Kit D. Main Authentication Key

**Pourquoi ?** **MAK** = **Multiple Activation Key**, un mode d’activation utilisé dans certains environnements Microsoft.

**Exemple :** Une entreprise peut activer plusieurs postes avec une clé de type MAK.

---

### 29. Dans un déploiement Windows, que signifie “support du système” ou “cycle de vie” ?

A. Le poids du disque dur B. La période pendant laquelle Microsoft fournit mises à jour et assistance pour une version donnée ✅ C. Le temps de démarrage du BIOS D. Le nombre de partitions recommandées

**Pourquoi ?** Une version Windows n’est pas maintenue indéfiniment : il existe une période de support.

**Exemple :** Une version en fin de support ne reçoit plus de correctifs de sécurité réguliers.

---

### 30. Pourquoi une version Windows non supportée pose problème ?

A. Elle empêche d’utiliser le clavier B. Elle ne reçoit plus correctement les correctifs et devient plus risquée à utiliser ✅ C. Elle ne peut plus afficher le bureau D. Elle change automatiquement la carte réseau

**Pourquoi ?** Sans support, le système devient plus vulnérable car les failles ne sont plus corrigées.

**Exemple :** Garder un poste sensible sur une version obsolète est un mauvais choix en entreprise.

---

### Niveau Difficile (31 à 45)

### 31. Quelle est la différence principale entre `boot.wim` et `install.wim` ?

A. `boot.wim` contient l’environnement de démarrage, `install.wim` contient l’image du système à installer ✅ B. `boot.wim` contient les licences, `install.wim` les pilotes réseau C. `boot.wim` remplace le BIOS, `install.wim` remplace l’UEFI D. Il n’y a aucune différence

**Pourquoi ?** Tu dois distinguer **l’environnement de setup** et **l’image système à déployer**. Les confondre serait une erreur classique.

**Exemple :** Le PC démarre sur l’environnement d’installation via `boot.wim`, puis applique l’image contenue dans `install.wim`.

---

### 32. Quel est l’intérêt d’une machine virtuelle dans le cadre de ton module extra ?

A. Remplacer définitivement le système hôte B. Tester, installer ou manipuler un OS dans un environnement isolé sans toucher directement à la machine physique ✅ C. Doubler la RAM physique D. Désactiver Windows Update

**Pourquoi ?** La virtualisation permet de travailler sur un système invité sans casser le système principal.

**Exemple :** Installer Windows 10 dans VMware pour s’entraîner à l’installation sans risquer son PC réel.

---

### 33. Quel logiciel de virtualisation apparaît dans ton support extra ?

A. VirtualBox B. VMware Workstation ✅ C. Hyper-V uniquement D. QEMU exclusivement

**Pourquoi ?** La partie extra porte sur **VMware Workstation**.

**Exemple :** Créer une VM Windows 10 dans VMware Workstation avec un ISO.

---

### 34. Dans une machine virtuelle, le système installé à l’intérieur de la VM est appelé :

A. système hôte B. système invité ✅ C. système racine D. système passif

**Pourquoi ?** Le **système hôte** est la machine réelle, le **système invité** est l’OS qui tourne dans la VM.

**Exemple :** Ton Windows réel peut être l’hôte, et un Windows 10 de test dans VMware l’invité.

---

### 35. Quel est l’intérêt d’un snapshot dans une machine virtuelle ?

A. Augmenter la bande passante B. Sauvegarder un état de la VM pour pouvoir revenir en arrière plus tard ✅ C. Changer le type de licence Windows D. Convertir un système 32 bits en 64 bits

**Pourquoi ?** Un **snapshot** capture l’état de la VM à un instant donné.

**Exemple :** Tu prends un snapshot avant de modifier le registre ou d’installer un logiciel risqué, puis tu reviens en arrière si besoin.

---

### 36. Pourquoi faut-il être prudent dans l’allocation des ressources d’une VM (RAM, CPU, disque) ?

A. Parce que la VM ne consomme jamais rien B. Parce qu’une mauvaise allocation peut dégrader les performances de la VM ou de la machine hôte ✅ C. Parce que cela désactive Windows D. Parce que cela remplace automatiquement la carte graphique

**Pourquoi ?** Si tu donnes trop peu de ressources à la VM, elle sera lente ; trop de ressources, et c’est l’hôte qui souffre.

**Exemple :** Donner 14 Go de RAM à une VM sur un PC qui n’en a que 16 peut rendre l’hôte instable ou très lent.

---

### 37. Lors de l’installation de Windows 10 dans une VM, à quoi sert l’OOBE ?

A. À défragmenter le disque B. À réaliser la configuration initiale après l’installation (compte, région, options, etc.) ✅ C. À flasher le BIOS D. À lancer la console Linux

**Pourquoi ?** L’**OOBE** correspond à la phase de première configuration de Windows après la copie des fichiers.

**Exemple :** Choix de la langue, du clavier, création du compte, réglages de confidentialité.

---

### 38. Quel avantage pédagogique a une VM pour un module d’installation Windows ?

A. Elle remplace la théorie B. Elle permet de refaire plusieurs installations, tests et erreurs sans risquer le poste réel ✅ C. Elle empêche les bugs D. Elle supprime la nécessité de connaître les licences

**Pourquoi ?** Pour apprendre, une VM est idéale : tu peux recommencer, casser, restaurer, comparer.

**Exemple :** Tu peux tester une installation propre, puis une autre en changeant les partitions ou les options réseau.

---

### 39. Une mise à niveau est-elle toujours préférable à une nouvelle installation ?

A. Oui, dans tous les cas B. Non, cela dépend du contexte, de l’état du système et de l’objectif recherché ✅ C. Oui, car elle efface tout D. Non, car elle ne conserve jamais les données

**Pourquoi ?** Une mise à niveau n’est pas automatiquement le meilleur choix. Si le système est corrompu ou si tu veux repartir proprement, une nouvelle installation peut être meilleure.

**Exemple :** Un vieux Windows lent, instable et pollué de logiciels peut justifier une installation propre.

---

### 40. Quel risque existe si on lance une nouvelle installation sans avoir vérifié les sauvegardes ?

A. Le PC devient 64 bits B. Perdre des données utilisateur importantes ✅ C. Le noyau se désinstalle automatiquement D. Le BIOS est effacé

**Pourquoi ?** C’est l’un des risques majeurs d’une réinstallation : la perte de données si les partitions sont supprimées ou formatées.

**Exemple :** Supprimer la mauvaise partition pendant l’installation peut effacer les documents de l’utilisateur.

---

### 41. Quel intérêt a Windows Insider pour Microsoft et les testeurs ?

A. Fournir des correctifs BIOS B. Tester en avance des fonctionnalités et remonter des retours avant diffusion large ✅ C. Remplacer les licences OEM D. Empêcher les mises à jour de sécurité

**Pourquoi ?** Le programme Insider sert à valider les évolutions de Windows avant leur sortie générale.

**Exemple :** Un testeur peut signaler un bug sur une nouvelle interface avant qu’elle n’arrive chez tout le monde.

---

### 42. Pourquoi faut-il distinguer licence OEM, Retail et licences de volume dans un quiz Microsoft ?

A. Parce que c’est purement décoratif B. Parce que cela change les usages, les conditions d’activation et parfois la transférabilité des licences ✅ C. Parce que cela détermine le navigateur par défaut D. Parce que cela change la taille du noyau Windows

**Pourquoi ?** Le type de licence a un impact réel en entreprise et dans les déploiements.

**Exemple :** Une licence de volume ne se gère pas comme une licence OEM d’un PC acheté en magasin.

---

### 43. Quel est l’objectif d’un outil comme USMT dans un contexte professionnel ?

A. Changer la résolution d’écran B. Faciliter la migration des profils et données utilisateurs lors d’un changement de poste ou d’OS ✅ C. Mettre à jour le firmware SSD D. Réparer automatiquement les partitions système

**Pourquoi ?** USMT est un outil de migration, pas un outil de réparation ou de partitionnement.

**Exemple :** Un service informatique renouvelle 40 PC et veut récupérer les profils utilisateurs de l’ancien parc.

---

### 44. Dans un environnement de virtualisation, importer une VM signifie généralement :

A. Formater le disque hôte B. récupérer une machine virtuelle existante dans le logiciel de virtualisation pour l’utiliser ou la restaurer ✅ C. convertir une licence OEM en Retail D. activer le Secure Boot du BIOS physique

**Pourquoi ?** L’import/export permet de déplacer ou réutiliser une VM déjà créée.

**Exemple :** Un professeur fournit une VM préconfigurée que les étudiants importent dans VMware.

---

### 45. Si ton objectif est de t’entraîner à installer Windows 10 plusieurs fois, avec possibilité de revenir à un état propre en 10 secondes, quelle combinaison est la plus logique ?

A. Installer directement sur ton PC principal sans sauvegarde B. Utiliser une VM + créer un snapshot juste après l’installation propre ✅ C. Désactiver Windows Update et supprimer la partition système D. Utiliser uniquement l’invite de commandes

**Pourquoi ?** C’est la méthode la plus rationnelle : tu gardes un point de retour immédiat sans toucher à la machine réelle.

**Exemple :** Tu installes Windows 10 dans VMware, fais un snapshot après l’OOBE, puis tu testes différentes manipulations en revenant ensuite à l’état propre.

---

### Questions Vrai / Faux (46 à 55)

### 46. Vrai ou Faux

Le noyau est une partie centrale du système d’exploitation.

✅ **Vrai**

**Pourquoi ?** Le noyau gère les ressources essentielles du système.

---

### 47. Vrai ou Faux

Une GUI est une interface textuelle basée uniquement sur des commandes.

❌ **Faux**

**Pourquoi ?** Ça, c’est une CLI. Une GUI est graphique.

---

### 48. Vrai ou Faux

Une Feature Update ajoute généralement plus de nouveautés qu’une Quality Update.

✅ **Vrai**

**Pourquoi ?** Feature = nouvelles fonctions importantes ; Quality = correctifs et stabilité.

---

### 49. Vrai ou Faux

Une nouvelle installation conserve toujours automatiquement tous les logiciels et paramètres de l’ancien Windows.

❌ **Faux**

**Pourquoi ?** Une nouvelle installation repart en général sur une base propre.

---

### 50. Vrai ou Faux

`install.wim` contient l’image du système à installer.

✅ **Vrai**

**Pourquoi ?** C’est l’un des points clés du module 2.

---

### 51. Vrai ou Faux

Une licence OEM est généralement plus librement transférable qu’une Retail.

❌ **Faux**

**Pourquoi ?** C’est plutôt l’inverse en pratique.

---

### 52. Vrai ou Faux

USMT sert à migrer des données et profils utilisateurs.

✅ **Vrai**

**Pourquoi ?** C’est précisément son usage dans les déploiements.

---

### 53. Vrai ou Faux

Une machine virtuelle permet de tester un système d’exploitation dans un environnement isolé.

✅ **Vrai**

**Pourquoi ?** C’est l’un des gros intérêts de la virtualisation.

---

### 54. Vrai ou Faux

Un snapshot VMware permet de revenir à un état antérieur de la machine virtuelle.

✅ **Vrai**

**Pourquoi ?** C’est exactement sa fonction.

---

### 55. Vrai ou Faux

Une version Windows en fin de support continue à recevoir normalement les mêmes correctifs de sécurité qu’une version supportée.

❌ **Faux**

**Pourquoi ?** Une version hors support n’est justement plus maintenue normalement.

---

## module 3 et 4 system clients microsoft

### Module 3 - Interagir avec Windows 10

Objectifs du module Tour d'horizon de l'interface graphique Démonstration - L'interface graphique Enoncé du TP - Prise en main de l'interface graphique Tour d'horizon la CLI La syntaxe de l'aide Démonstration - La ligne de commande cmd Enoncé du TP - Prise en main de la cmd Présentation de PowerShell Principe d'utilisation de la ligne de commande PowerShell Démonstration - Découvrir PowerShell Enoncé du TP - Premiers pas avec PowerShell L'aide de PowerShell Démonstration - Découvrir l'aide de PowerShell Enoncé du TP - Manipuler l'aide de PowerShell Cmdlets de base et objets Interagir avec un objet PowerShell Démonstration - Cmdlets de base Enoncé du TP - Devenir autonome avec PowerShell Conclusion

Dans le cadre de notre module sur Interagir avec Windows 10, nous allons explorer l'interface graphique du système d'exploitation Windows 10, qui est un système d'exploitation multi-utilisateur. Chaque utilisateur possède un profil dans lequel son bureau est personnalisable ainsi que son menu démarré. Nous avons la possibilité d'ajouter des bureaux supplémentaires pour agrandir notre espace de travail. De plus, nous bénéficions de la fonctionnalité Timeline, qui existe depuis la build 18.03, nous proposant un historique de nos tâches.

Fonctionnalités multi-tâches Windows 10 est également un système d'exploitation multi-tâches, ce qui signifie que nous pouvons utiliser plusieurs applications en même temps. Nous pouvons facilement basculer de l'une à l'autre depuis la barre des tâches ou à l'aide de la combinaison de touches Windows + Tabulation. Pour afficher le détail du bon fonctionnement des applications, nous utilisons le gestionnaire des tâches.

Zone de notification La zone de notification nous apporte des informations en temps réel et des raccourcis vers certains programmes qui tournent en arrière-plan. Un élément intéressant de cette zone est d'observer, d'un simple coup d'œil, l'état de la connexion réseau ainsi qu'un raccourci pour la configurer, ce qui est pratique pour la mobilité. Les notifications du système apparaissent dans cette zone.

Zone de recherche Nous avons aussi accès à une zone de recherche très pratique. Il est conseillé de prendre le réflexe de l'utiliser pour accéder à n'importe quel emplacement du système. Étant indexée, elle propose des suggestions automatiques, ce qui nous permet de gagner du temps. Par exemple, en tapant "panneau", le système nous propose rapidement d'accéder au panneau de configuration.

Gestion des paramètres du système Le célèbre panneau de configuration, que nous ne présentons plus, nous permet de lancer divers éléments grâce au fichier avec l'extension .cpl disponible dans le dossier Windows System32. Nous utilisons également les consoles MMC pour Microsoft Management Console. Ces derniers sont des outils essentiels pour les techniciens, même s'ils sont peut-être moins connus.

Il est important de prendre l'habitude d'utiliser ces consoles. Nous avons à notre disposition des consoles préconfigurées, disponibles en faisant un clic droit sur le menu démarrer, ou grâce au fichier .msc disponible dans le dossier Windows System32. De plus, nous pouvons lancer une console vierge et la personnaliser en y ajoutant nos propres composants logiciels enfichables.

En conclusion, nous avons exploré les différentes fonctionnalités et interfaces graphiques de Windows 10, ce qui nous permet de mieux interagir avec le système d'exploitation dans notre rôle de techniciens.

Dans cet extrait, nous étudions l'interface graphique de Windows 10. L'interface graphique de Windows 10 Nous commençons par observer le bureau, qui est la première chose que nous voyons après la connexion. En bas à gauche, nous avons le menu démarré, où l'on trouve les célèbres tuiles qui nous permettent d'accéder rapidement aux applications. En bas à droite, se trouve la zone de notification, essentielle pour recevoir des alertes et des informations sur notre système.

Les fonctionnalités du système Nous avons la possibilité d'activer diverses fonctionnalités de notre système. En consultant 'Tous les paramètres', nous accédons à une console qui nous permet de modifier plusieurs aspects du système. Cette interface tend à remplacer le panneau de configuration traditionnel, offrant une approche plus moderne et intuitive.

À travers la zone de recherche indexée, nous sommes en mesure de rechercher des éléments spécifiques de manière efficace. Par exemple, en tapant 'panneau', nous pouvons accéder directement au panneau de configuration. Ce dernier nous permet d'explorer différentes catégories pour effectuer des réglages sur notre système.

Explorer la timeline Nous avons également accès à la timeline, qui nous donne un historique des actions effectuées sur notre système. Bien qu'elle soit moins utilisée, elle peut s'avérer utile pour retrouver des opérations passées. De plus, la timeline nous permet de créer de nouveaux bureaux, élargissant ainsi notre environnement de travail.

Accéder aux consoles de gestion En cliquant droit sur le menu démarré, nous pouvons accéder à des consoles de gestion préconfigurées telles que la gestion des disques ou le gestionnaire de périphériques. Prenons un instant pour lancer la console de gestion de l'ordinateur, qui est assez complète et regroupe plusieurs outils essentiels, tels que l'observateur d'événements et les utilisateurs et groupes locaux.

Créer notre propre console personnalisée Ce qui est captivant, c'est que nous avons la possibilité de créer nos propres consoles. Pour ce faire, nous pouvons taper 'MMC' dans la zone de recherche indexée. Cela nous permettra de créer une console sur mesure, où nous pourrons ajouter les composants logiciels enfichables selon nos besoins. Nous avons la possibilité d'ajouter ou de supprimer des composants.

Nous allons ajouter des éléments comme la gestion des disques de cet ordinateur, le pare-feu local, et les utilisateurs et groupes. Tous les éléments que nous avons sélectionnés apparaîtront dans notre console personnalisée. Nous pouvons ainsi configurer notre système à notre manière. En fin de processus, nous avons la possibilité de sauvegarder notre console. En sélectionnant 'Fichier', puis 'Enregistrer sous', nous pourrons la positionner sur notre bureau. Pour notre exemple, nous l'appellerons 'ma console'. Une fois enregistrée, elle sera présente sur notre bureau.

Nous avons exploré les fonctionnalités principales de l'interface graphique de Windows 10 et la création de consoles personnalisées pour gérer efficacement notre système.

Dans cet atelier, nous allons être amenés à interagir avec l'interface graphique pour commencer à personnaliser le système d'exploitation. Nous allons découvrir les différentes options et paramètres qui nous permettront de configurer notre environnement de travail afin de l'adapter à nos besoins spécifiques. Cette étape est cruciale pour le bon fonctionnement de notre système.

Objectifs de l'atelier Au cours de cet atelier, nous allons également nous familiariser avec les consoles MMC (Microsoft Management Console). Ces consoles sont des outils puissants qui nous permettront de gérer plusieurs aspects de Windows 10.

Utilisation de la console MMC Pour commencer à utiliser la console MMC, nous allons suivre les étapes suivantes :

mmc.exe Cette commande va lancer la console MMC, qui nous donnera accès à une interface où nous pourrons ajouter des outils et configurer différentes options.

Personnalisation de l'interface En utilisant la console MMC, nous aurons la possibilité de personnaliser notre interface en fonction de notre utilisation quotidienne. Nous pourrons ajouter des modules spécifiques qui nous faciliteront la gestion de notre système.

À l'issue de cet atelier, nous aurons acquis des compétences essentielles pour interagir avec l'interface graphique de Windows 10 et personnaliser notre environnement de travail. Cela est fondamental pour nous, en tant que futurs techniciens, afin de nous préparer à des missions concrètes en entreprise.

Dans cet article, nous allons explorer la ligne de commande (CLI) pour interagir avec Windows 10. Nous utilisons habituellement l'interface graphique, mais la CLI est aussi un outil puissant.'; Pourquoi utiliser la CLI ? Nous avons souvent recours à l'interface graphique pour administrer Windows, mais il existe des situations où l'interface graphique peut nous limiter. Parfois, nous devons passer par la ligne de commande pour effectuer des tâches spécifiques que la GUI ne permet pas.

Les shells disponibles dans Windows 10 Dans Windows 10, nous avons principalement deux shells à notre disposition : cmd.exe et powershell. Le premier, cmd.exe, est un shell historique et l'évolution de ceux présents avec MS-DOS.

Commandes internes et externes Nous allons découvrir que cmd.exe possède des commandes internes spécifiques ainsi que la possibilité d'exécuter des commandes externes qui sont des programmes Windows. Nous pouvons également créer des scripts en enregistrant des commandes dans un fichier texte que le système peut lire et exécuter.

Utilisation de la ligne de commande Avec la ligne de commande, nous avons d'abord le prompt, qui nous indique notre position dans l'arborescence du système. Nous pouvons taper des commandes après le prompt, telles que help, et ces commandes peuvent être suivies de paramètres ou d'options.

Les règles de base de la CLI Il est crucial de se rappeler que le premier mot ici est toujours une commande. Si nous ne respectons pas cette structure, le système renvoie une erreur. Les éléments de commande et leurs paramètres doivent toujours être séparés par des espaces, car l'espace est un caractère spécial utilisé pour délimiter les différentes parties de la commande.

Canaliser les résultats des commandes Une commande a pour but de donner un ordre au système d'exploitation, qui utilise alors les ressources matérielles pour répondre à cet ordre. Par défaut, le résultat de la commande s'affiche sur l'écran, mais nous avons aussi la possibilité de diriger ce résultat vers un fichier à l'aide du chevron.

Exemples de commandes echo Hello World Dans cet exemple, nous utilisons la commande echo pour afficher "Hello World" à l'écran.

En conclusion, la CLI est un outil incontournable pour les techniciens qui doivent parfois aller au-delà des limites de l'interface graphique. Apprenez à maîtriser ces commandes, car elles renferment une puissance et une flexibilité incomparables lors de l'administration de systèmes Windows 10.

Dans ce module, nous allons explorer la notion cruciale de la syntaxe de la commande dans Windows 10. Nous allons comprendre comment chaque commande donnée au système nécessite une syntaxe précise pour être exécutée correctement. Si cette syntaxe est incorrecte, le système ne parvient pas à interpréter notre ordre et nous retourne une erreur. Cela souligne l'importance de bien lire l'aide disponible pour chaque commande.

Utilisation des commandes Nous devons connaître les codes de syntaxe qui se trouvent dans l'aide pour bien utiliser les commandes. En général, tout texte qui n'est pas entre crochets ou accolades est obligatoire. En revanche, ce qui se trouve entre crochets ou accolades est facultatif.

Comprendre les éléments de syntaxe La barre verticale, ou pipe, joue un rôle clé en permettant de séparer des éléments dans la syntaxe. Les points de suspension indiquent que nous pouvons répéter un élément N fois.

Exemple de la commande COPY COPY source destination [/options] En étudiant la syntaxe de la commande COPY, nous constatons que le mot COPY ainsi que la "source" et la "destination" sont des paramètres obligatoires. Si nous ne les incluons pas, la commande échouera.

Options disponibles Nous apercevons également que des options peuvent être ajoutées à cette commande. Ces options sont indiquées par un slash et sont optionnelles, car elles sont entourées de crochets. Par exemple, nous pouvons utiliser des options comme /A ou /B, mais attention, il ne sera pas possible de les cumuler en même temps.

En somme, la commande COPY nous permet de copier des fichiers d'une source vers une destination. Pour son bon fonctionnement, il est impératif de toujours spécifier au moins une source, et nous avons la possibilité d'ajouter plusieurs sources, comme indiqué par les points de suspension dans la syntaxe.

Dans ce module, nous explorons comment interagir avec Windows 10 à travers la ligne de commande, cmd.exe. Introduction à cmd.exe Nous avons plusieurs solutions pour lancer la ligne de commande cmd.exe. La méthode la plus rapide consiste à taper "cmd" dans la barre de recherche. Cela fait apparaître un écran de commande que nous pouvons lancer. À ce stade, nous découvrons une boîte noire dans laquelle nous avons la possibilité de taper des commandes. Lorsqu'on accède à ce shell, nous avons la possibilité de personnaliser notre console en modifiant les propriétés, notamment les options de police, la taille et la couleur. Nous pouvons choisir d'opter pour un texte noir sur un arrière-plan clair, ce qui nous aide à mieux visualiser les informations. Les commandes de base Pour commencer avec les commandes, nous pouvons taper la commande `cls` pour effacer tout ce qui est affiché à l'écran. De plus, en maintenant la touche "Contrôle" tout en scrollant avec notre souris, nous avons la possibilité d'augmenter un peu la taille de la fenêtre, ce qui peut nous être pratique. Nous pouvons également lancer des applications externes grâce à cette ligne de commandes. Par exemple, nous pouvons taper la commande suivante pour ouvrir le Bloc-notes : notepad De plus, nous avons la possibilité de lancer un élément du panneau de configuration en utilisant la commande suivante : timedate.cpl Cela nous permet d'accéder à la gestion de l'heure et de la date de notre système. Commandes internes et aide Nous pouvons aussi exécuter des commandes internes de cmd.exe. Une des commandes les plus utiles, que nous devons connaître, est la commande `help`. En l'exécutant, nous envoyons cet ordre au noyau, qui nous affiche le résultat à l'écran. La commande `help` dresse la liste de toutes les commandes disponibles dans le shell. Nous pouvons faire défiler l'affichage pour voir chaque commande ainsi qu'une brève description. Si nous souhaitons obtenir de l'aide supplémentaire concernant une commande spécifique, nous avons la possibilité de taper `help`, suivie d'un espace et du nom de la commande. Par exemple, pour la commande `copy` : help copy Nous découvrons alors un résumé du rôle de la commande, sa syntaxe et un descriptif des paramètres et des options. Privilèges d'administration Cependant, si nous souhaitons modifier la configuration du système, il est nécessaire de posséder des privilèges d'administration. Un simple utilisateur ne peut pas apporter de modifications pour des raisons de sécurité et de fiabilité. Par conséquent, nous devons lancer le shell cmd en tant qu'administrateur. Pour ce faire, nous fermons nos fenêtres et relançons le shell cmd.exe avec les droits administratifs. Lorsque nous l'exécutons, nous voyons l'invite de commande, et nous devons répondre à une demande de confirmation : "Voulez-vous autoriser cette application à apporter des modifications à votre appareil ?". En somme, cmd.exe est un puissant outil qui nous permet d'interagir directement avec les ressources de notre ordinateur et de réaliser diverses tâches via la ligne de commande. Nous avons également appris que pour effectuer des actions modifiant le système, une élévation de privilèges est indispensable.

Dans cet atelier, nous allons nous familiariser avec la ligne de commande CMD. Le but de cet atelier est d'utiliser l'aide disponible dans CMD. Il suffit de lire cette aide pour s'en sortir et comprendre comment utiliser efficacement les commandes. Nous allons également faire des tests avant d'être sûrs d'avoir la commande finale. Il est tout à fait normal de faire des erreurs durant cet atelier, car cela fait partie de notre apprentissage. À ce stade du cours, nous découvrons la ligne de commande, et il est essentiel de comprendre que la pratique est la clé de notre maîtrise.

Utilisation de l’aide Nous allons apprendre à utiliser la commande cmd pour accéder à l’aide de n’importe quelle commande. En utilisant l’option /?, nous pourrons obtenir des informations détaillées sur chaque commande. Voici un exemple de comment utiliser l'aide :

command /? Pratique et tests Durant cet atelier, nous effectuerons divers tests pour appliquer ce que nous avons appris. La répétition des essais et des erreurs nous aidera à progresser. Nous nous aiderons également les uns les autres pour résoudre les difficultés rencontrées. N’hésitez pas à poser des questions si quelque chose n’est pas clair.

En conclusion, la ligne de commande est un outil puissant que nous allons utiliser dans d'autres modules. Au fur et à mesure que nous découvrirons davantage de fonctionnalités, notre confiance et notre compétence dans l'utilisation de CMD vont augmenter. Nous serons alors mieux préparés pour nos futurs défis dans la gestion des systèmes et réseaux.

Dans ce module, nous nous intéressons à PowerShell, le dernier shell développé par Microsoft. PowerShell est un interpréteur de commandes qui permet de créer et de lancer des scripts. Particularités de PowerShell Nous constatons que PowerShell est orienté objet, comme certains langages de développement. Il s'appuie sur des bibliothèques .NET Framework, qui permettent de créer des scripts plus ou moins élaborés en fonction de nos besoins, tout en offrant des fenêtres graphiques.

Historique de PowerShell Nous savons que la première version de PowerShell était présente nativement sur les systèmes Windows Server 2008 à partir de fin 2006. Cependant, il était également possible de l'installer sur Windows XP, Vista et 2003 Server, à condition de respecter certains prérequis.

Évolution des versions PowerShell a beaucoup évolué au fil du temps avec plusieurs versions qui ont apporté leur lot de commandes, d'améliorations, de nouvelles fonctionnalités et de sécurité d'utilisation. À l'heure actuelle, nous en sommes à la version 5.1, qui est stabilisée depuis plusieurs années et qui est très appréciée des techniciens et administrateurs Windows.

Accès à PowerShell Nous pouvons accéder à Shell PowerShell par plusieurs moyens. Nous pouvons utiliser la commande via la console PowerShell, qui est présente nativement dans le système, ou bien passer par la console graphique ISE (Integrated Scripting Environment), qui est plus orientée vers le scripting.

Outils complémentaires De plus, nous avons la possibilité d'utiliser des outils tiers pour manipuler PowerShell, tels que le Windows Terminal, disponible sur le Windows Store ou sur Git. Nous pouvons également utiliser Visual Studio Code, qui est une alternative à l'ISE.

Lancement des outils Dans tous les cas, nous pouvons retrouver ces outils en utilisant la zone de recherche de Windows et avons la possibilité de les lancer en tant qu'administrateur si nous avons besoin de modifier le système.

En résumé, PowerShell est un outil puissant pour les administrateurs système, avec de nombreuses fonctionnalités qui facilitent la gestion des systèmes Windows.

Dans ce module, nous allons apprendre à utiliser la ligne de commande PowerShell, un outil puissant pour interagir avec Windows 10. Vérification de la version de PowerShell Nous devons d'abord vérifier la version actuelle de PowerShell qui est prise en charge sur notre poste. Pour cela, nous faisons appel à la variable $PSVersionTable. Cette variable contient plusieurs informations, dont la version de PowerShell. Il est crucial de connaître cette version, surtout dans un contexte professionnel où nous devons gérer des parcs de machines hétérogènes, incluant des clients Windows 10, Windows 7 et des serveurs tels que 2012 R2, 2016, 2019. Nous allons exécuter la commande suivante pour afficher ces informations : $PSVersionTable Importance de la rétrocompatibilité Il est aussi important de prendre en compte la rétrocompatibilité lorsque nous écrivons des scripts. Par exemple, un script élaboré sur Windows 10 utilisant PowerShell version 5.1 pourrait ne pas fonctionner sur des systèmes d'exploitation plus anciens. La variable $PSVersionTable nous fournit également des informations sur la compatibilité, en particulier la valeur PSCompatibleVersion. Cette valeur indique quelle version de PowerShell fonctionne dans notre console, ce qui est essentiel pour éviter les erreurs lors de l'exécution de scripts sur différentes versions du système d'exploitation. Commandlets : structure et utilisation Nous allons également explorer les commandlets, qui sont les commandes que nous utilisons dans PowerShell. Ces commandlets ont une structure intuitive, composée d'un verbe et d'un nom, séparés par un tiret. Les verbes courants incluent GET, SET, REMOVE, ADD et NEW. Par exemple, si nous souhaitons afficher la liste des alias PowerShell, nous pouvons utiliser la commande suivante : GET ALIAS

#### De même, pour découvrir les verbes utilisables, nous tapons

GET VERB Chaque commandlet est conçu pour exécuter une tâche spécifique et il est important de noter qu'elles ne sont pas sensibles à la casse. Utilisation des paramètres avec les commandlets Les commandlets peuvent également posséder des paramètres, qui sont représentés par un tiret suivi d'un mot. Par exemple, la commandlet GET CHILD ITEM possède un paramètre nommé -Path. Certains de ces paramètres fonctionnent seuls, tandis que d'autres nécessitent des arguments. Dans ce cas, -Path nécessite un argument, comme suit : GET CHILD ITEM -Path C://users En résumé, nous avons exploré les concepts fondamentaux de PowerShell, de la vérification de la version avec $PSVersionTable à la structure des commandlets et leur utilisation avec des paramètres. Ces connaissances seront essentielles pour interagir efficacement avec Windows 10 et d'autres systèmes dans un environnement professionnel.

Dans ce module, nous allons découvrir PowerShell, un outil puissant pour interagir avec notre système Windows 10. Présentation de PowerShell PowerShell est un interpréteur de commandes et un langage de script développé par Microsoft. Lorsqu'on tape "PowerShell" dans la barre de recherche, nous avons plusieurs résultats : PowerShell et PowerShell ISE (Integrated Scripting Environment), tant en version 64 bits qu'en version 32 bits, le x86 nous l'indiquant. Lancer PowerShell Nous pouvons lancer PowerShell avec un simple niveau de privilège ou bien en tant qu'administrateur. Lançons la console PowerShell et modifions la taille de la fenêtre ainsi que la taille de la police en maintenant la touche contrôle et en scrollant avec notre souris. Affichons ensuite la version de PowerShell disponible sur notre système avec le contenu de la variable `$PSVersion`. $PSVersion En utilisant la touche tabulation, nous pouvons compléter notre commande rapidement tout en évitant les fautes de frappe. En appuyant sur "Entrée", nous constatons que notre système dispose de la version 5.1 de PowerShell. Lancer PowerShell ISE Lançons maintenant la console ISE. L'application se lance et au centre, nous voyons la console PowerShell. À droite, la liste des commandes cmdlets s'affiche. Nous pouvons afficher le volet script ainsi qu'une ligne de commande. Cette fenêtre de script nous permet de rédiger notre script et de le tester dans la console en dessous en pressant la touche F5. $PSVersionTable En appuyant sur F5, nous avons le résultat et vérifions que nous avons bien la même version de PowerShell disponible sur notre système. Pour ma part, pour une meilleure vision et utilisation, je vais m'en tenir à la console simple PowerShell. Utilisation des cmdlets Affichons à l'écran la liste des verbes que nous pouvons utiliser dans nos cmdlets. Pour cela, nous pouvons taper la commande suivante :

`get-verb`

Ceci nous donne une liste de tous les verbes disponibles. Si nous souhaitons lister toutes les commandes disponibles, nous devons taper :

`get-command`

Nous découvrons alors qu'il y a beaucoup de commandes. Trois familles de commandes sont regroupées dans le système : les cmdlets, des fonctions et des aliases, et ces familles sont classées dans la colonne "Commande Type". Filtrer les commandes

#### Si nous ne souhaitons afficher que les cmdlets, nous devons taper

`get-command -commandtype cmdlet`

Nous pouvons également utiliser la tabulation pour les options lors de cette action. Cela nous permet de sélectionner facilement un argument cmdlet, et seules les cmdlets s'afficheront à l'écran. Pour résumer, nous avons découvert PowerShell, comment l'utiliser et comment explorer ses cmdlets. Cet outil nous offre une manière efficace d'interagir avec notre système Windows 10.

Dans cet atelier, nous allons découvrir les bases de l'utilisation de PowerShell. Nous allons pouvoir interagir de manière simple avec le système. Ce premier atelier PowerShell est assez court, car encore une fois, nous ne pouvons pas pratiquer longtemps sans l'aide. Nous allons aborder ici les commandes fondamentales qui nous seront utiles dans notre travail quotidien.

Les bases de powerShell Nous allons commencer par ouvrir PowerShell. Pour cela, nous pouvons rechercher "PowerShell" dans le menu démarrer et cliquer sur l'application. Une fois ouvert, nous serons accueillis par une interface semblable à celle de l'invite de commandes.

Exécution de commandes simples Nous allons tester quelques commandes de base pour nous familiariser avec cet outil. Par exemple, utilisons la commande Get-Help pour obtenir de l'aide sur une commande spécifique.

`Get-Help Get-Process`

Ensuite, nous pourrons afficher les processus en cours d'exécution sur notre machine avec la commande suivante :

`Get-Process`

Application pratique À présent, nous avons la possibilité d'expérimenter avec des commandes plus complexes. En jouant avec les paramètres, nous serons en mesure de filtrer les résultats ou d'afficher des informations spécifiques. Par exemple, pour trouver un processus par son nom, nous pourrions utiliser :

`Get-Process -Name "notepad"`

Cette commande nous aidera à mieux comprendre comment les processus sont gérés sous Windows et à quel point il est facile d'interagir avec le système à l'aide de PowerShell.

En conclusion, nous avons fait nos premiers pas dans PowerShell. Grâce à cet atelier, nous avons acquis des connaissances fondamentales qui nous permettront d’explorer les fonctionnalités avancées lors de nos prochaines sessions. A nous de jouer !

Dans ce module, nous allons explorer l'aide de PowerShell. L'aide de PowerShell : aperçu général Comme la plupart des shell existants, PowerShell propose de l'aide pour l'utilisation et la compréhension de ce langage. L'aide de PowerShell ne se limite pas simplement à l'usage des commandes, mais elle inclut également des concepts fondamentaux afin de mieux appréhender son fonctionnement. On peut percevoir PowerShell comme un manuel d'utilisation qui est structuré en plusieurs chapitres que nous pouvons appeler et consulter lorsque nous en avons besoin.

Évolution de l'aide à partir de PowerShell version 3 Avec la version 1 et la version 2 de PowerShell, l'aide était intégrée nativement. Cependant, avec la version 3 et les versions ultérieures, Microsoft a changé son approche. Désormais, l'aide n'est plus native et il est nécessaire de télécharger les sections d'aide pour bénéficier des informations actualisées. Il est important de noter que seules les sections d'aide en anglais sont maintenues à jour.

Importance de mettre à jour l'aide Il est donc primordial de mettre à jour l'aide dès que nous commençons à utiliser PowerShell. La mise à jour de l'aide nécessite des privilèges d'administration, car cela modifie le système. La commande pour télécharger l'aide est très simple et intuitive :

Update-Help Cette commande permet de télécharger les sections d'aide depuis Internet, plus précisément depuis les dépôts officiels de Microsoft. Nous avons également la possibilité de télécharger l'aide depuis un dépôt privé ou local préinstallé, par exemple, sur un serveur dans notre entreprise.

Utiliser l'aide de PowerShell Une fois que l'aide a été mise à jour, comment pouvons-nous l'utiliser ? Nous pouvons utiliser la commande suivante pour avoir un affichage complet :

`Get-Help`

#### Ou, pour un affichage page par page, nous utilisons simplement

Help Il est également possible d'utiliser l'alias de la commande Unix, man, pour afficher l'aide :

man Si nous souhaitons obtenir des informations sur une commande spécifique, comme Disable-LocalUser, nous tapons :

`Get-Help Disable-LocalUser`

Si nous ne savons pas ce qu'est une variable, nous pouvons demander plus d'informations avec :

man about_Variable Toutes les sections d'aide qui commencent par about_ offrent des explications sur diverses notions de PowerShell.

Astuces pour bien utiliser l'aide Pour optimiser notre expérience avec l'aide, il existe quelques astuces utiles. Par exemple, si nous connaissons déjà une commande mais que nous avons un doute sur son utilisation, l'option -Example de Get-Help nous permettra d'afficher des exemples pertinents. De plus, l'option -ShowWindow est très pratique, car elle affiche l'aide complète dans une fenêtre séparée avec une barre de recherche pour explorer des options spécifiques.

Enfin, nous pouvons consulter une section d'aide en ligne en utilisant l'option -Online, ce qui nous assure que nous avons accès à la version la plus à jour de l'aide.

En résumé, PowerShell nous offre une aide detaille et accessible pour l'apprentissage et la maîtrise de cet outil puissant, surtout si nous veillons à maintenir cette aide à jour.

Dans cette section, nous allons découvrir comment utiliser la commande update-help dans PowerShell. Tout d'abord, essayons de nous renseigner sur la commande update-help pour savoir comment l'utiliser. Nous allons lancer une console PowerShell, régler la taille de la fenêtre, et nous pourrons ensuite taper la commande get-help de la commande update-help. Voici l'aide de la commande update-help.

Dans la remarque, nous trouvons la phrase suivante : « get-help ne parvient pas à trouver les fichiers d'aide de cette applet de commandes sur cet ordinateur ». C'est tout à fait normal, car nous sommes avec la version 5.1 de PowerShell. Il faut mettre à jour l'aide de PowerShell.

Mise à jour de l'aide de PowerShell Nous avons donc deux possibilités pour mettre à jour l'aide de PowerShell, soit depuis les dépôts Microsoft officiels via Internet, soit depuis un dépôt local. Dans notre cas, nous allons passer par l'aide depuis les serveurs de Microsoft.

Pour cela, nous aurons besoin de deux choses. Premièrement, comme nous allons mettre à jour l'aide sur un poste, nous devons ouvrir une console en tant qu'administrateur. Deuxièmement, notre VM doit avoir accès à Internet. Actuellement, elle est branchée sur le switch Hostonly, ce qui ne lui permet pas d'atteindre Internet. Nous allons donc la brancher sur le switch Bridge afin qu'elle puisse détecter le réseau physique.

Configuration de la machine virtuelle Première chose, lançons une commande PowerShell en tant qu'administrateur. Oui, nous allons modifier le système grâce à cette console. Deuxièmement, branchons notre VM sur le réseau physique. Nous éditons la configuration de notre VM au niveau de la carte réseau et nous la connectons au switch virtuel Bridge.

Une fois cette procédure faite, le système découvre un nouveau réseau. Nous acceptons que notre VM soit visible sur ce réseau, ce qui nous permet de terminer la configuration de l'environnement utilisateur demo user, puisqu'elle a détecté Internet. Une page va se lancer pour continuer cette configuration ; nous choisissons de demander à être rappelé plus tard pour le moment.

Exécution de la commande pour mettre à jour l'aide Nous allons maintenant pouvoir mettre à jour notre système, et notamment les sections d'aide de PowerShell. La commande est la suivante :

Update-Help Un bandeau s'affiche et nous indique que la mise à jour est en cours. Cela peut prendre plusieurs minutes en fonction de notre système et de la bande passante de notre réseau.

Gestion des messages d'erreur Dans certains cas, nous pouvons avoir des messages d'erreur suite à la mise à jour. Il est important de les prendre comme des avertissements. Certains modules ne sont pas présents sur notre Windows 10, ce qui fait que la mise à jour n'a pas pu être effectuée.

Maintenant que l'aide est à jour, retentons d'afficher l'aide de la commande update-help. La section d'aide est désormais beaucoup plus fournie et disponible en anglais.

Consultation des exemples de la commande

#### Pour consulter les exemples, nous pouvons utiliser la commande suivante

`Get-Help Update-Help -Examples`

Voici quelques exemples disponibles pour cette commande : Exemple 1, mettre à jour tous les modules avec Update-Help. Exemple 2, mettre à jour la section d'aide d'un module spécifique. Exemple 3, aller chercher des sections d'aide dans d'autres langues.

Affichage de l'aide dans une fenêtre séparée Nous avons également la possibilité d'afficher la section d'aide dans une fenêtre séparée. La commande à utiliser est la suivante :

Update-Help -ShowWindow La page entière d'aide s'affiche dans une fenêtre séparée. Nous pouvons redimensionner cette fenêtre et faire défiler les options. Nous avons aussi la possibilité d'utiliser un champ de recherche pour trouver plus rapidement du texte à l'intérieur de cette fenêtre.

En résumé, nous avons vu comment utiliser update-help pour mettre à jour l'aide dans PowerShell, comment gérer les erreurs potentielles et comment consulter les exemples et l'aide dans une fenêtre séparée.

Dans cet atelier, nous serons amenés à utiliser et naviguer dans l'aide pour retrouver des informations. Bien évidemment, nous commencerons par mettre à jour cette aide, puis nous découvrirons comment nous l'utilisons et naviguons à l'intérieur. N'oublions pas qu'il existe de l'aide pour deux domaines. L'aide pour utiliser les commandes LED en général, et l'aide pour découvrir des concepts de PowerShell.

Mettre à jour l'aide de PowerShell Pour débuter, nous devons mettre à jour l'aide de PowerShell pour bénéficier des dernières fonctionnalités. Nous utiliserons la commande suivante :

Update-Help Naviguer dans l'aide de PowerShell Une fois que nous avons mis à jour l'aide, nous pouvons naviguer dans différents modules et cmdlets pour trouver les informations dont nous avons besoin. La commande suivante nous permet d'accéder aux différents modules disponibles :

`Get-Module -ListAvailable`

#### Puis, pour voir l'aide d'une cmdlet spécifique, nous pouvons utiliser

`Get-Help &lt;NomDeLaCmdlet&gt;`

En remplacant par le nom de la commande dont nous voulons voir l'aide.

Pour résumer, il est essentiel de se familiariser avec l'aide intégrée de PowerShell afin de l'utiliser efficacement. Nous avons appris à mettre à jour cette aide, à naviguer parmi les modules et à obtenir des informations spécifiques sur les cmdlets.

Dans PowerShell, nous devons comprendre que c'est un langage d'administration orienté objet. Cela signifie que nous interagissons avec des éléments du système appelés objets. Tout d'abord, il est important de savoir que la notion d'objet n'est pas nouvelle en informatique et provient de certains langages de programmation comme le PHP ou le C#. Un objet PowerShell est un élément du système que nous pouvons manipuler, configurer, comme par exemple un utilisateur, un fichier ou une carte réseau.

Propriétés et méthodes des objets Chacun de ces objets possède des propriétés, que nous pouvons plus simplement appeler des caractéristiques, et des méthodes ou des actions que nous pouvons mener sur ces objets. Pour mieux comprendre cette notion d'objet, nous pouvons comparer un objet PowerShell à un objet du monde de tous les jours, l'objet « mon ballon ».

Un ballon est un objet qui possède des caractéristiques. Par exemple, il possède une forme ovale pour un ballon de rugby ou sphérique pour un ballon de basket, des dimensions, une masse, bref, tout un tas de caractéristiques que nous appelons « propriétés » pour un objet PowerShell.

Nous pouvons également mener des actions sur « mon ballon », comme par exemple le lancer ou le gonfler. Ces actions sont ce que nous appelons des méthodes pour un objet PowerShell.

Exemples de cmdlets Pour illustrer nos propos, nous allons voir quelques cmdlets de base. Voici un exemple simple qui nous montre comment obtenir la liste des processus en cours d'exécution :

`Get-Process`

Nous pouvons également obtenir des informations sur un objet spécifique. Par exemple, pour obtenir des détails sur le processus "notepad", nous utiliserons la commande suivante :

`Get-Process -Name notepad`

En conclusion, nous voyons que PowerShell nous permet de travailler avec des objets grâce à des cmdlets qui nous donnent la possibilité d'interagir facilement avec ces objets en utilisant leurs propriétés et méthodes.

Dans cette section, nous allons explorer comment interagir avec un objet PowerShell à travers le système d'exploitation Windows 10. Comprendre les objets dans PowerShell Nous avons la capacité de manipuler des objets au sein de PowerShell, comme un ballon dans notre exemple. En effet, nous pouvons avoir plusieurs objets, tels que des utilisateurs, des fichiers ou des imprimantes. Ainsi, pour afficher les caractéristiques de l'objet « mon ballon », nous pouvons utiliser la commande suivante : let get-monballon

Cette commande affichera les propriétés majeures de l'objet sans montrer toutes les propriétés existantes. Afficher toutes les propriétés Si nous souhaitons obtenir une vue complète des propriétés de l’objet, nous avons la possibilité d'utiliser la commande suivante : let get-monballon | select étoile

L'étoile représente toutes les propriétés. Par ailleurs, nous pouvons filtrer les propriétés que nous voulons voir. Par exemple, pour afficher uniquement le diamètre, la forme et la couleur de notre ballon, nous pouvons utiliser : let get-monballon | select diamètre, forme, couleur

Interagir avec des objets en utilisant les commandes let Pour interagir avec les objets dans PowerShell, il existe plusieurs commandes let que nous devons connaître. La commande clé pour cela est : let get-commande

Cette commande nous fournira une liste exhaustive des commandes disponibles dans PowerShell. Filtrer les commandes Pour simplifier nos recherches, nous pouvons filtrer les commandes. Par exemple, la commande : let get-commande get-étoile

affichera toutes les commandes qui commencent par « get- ». En ce qui concerne les objets spécifiques, nous pourrions rechercher les commandes liées aux imprimantes : let get-commande étoile printer étoile

#### Et pour créer des utilisateurs, il serait judicieux d'utiliser

let get-commande new-étoile user étoile

Modifier un objet avec les commandes let Pour modifier un objet, il est essentiel de comprendre la structure des commandes let. Par exemple, pour corriger la description d'un ballon de basket, nous pourrions utiliser : let set-mon-ballon -name "basket" -description "ballon de basket"

#### Pour ajouter un nouveau ballon à notre collection

let new-mon-ballon -name "rugby" -forme "ovale" -couleur "blanc" -description "ballon de rugby"

Enfin, pour retirer un ballon de notre collection, la commande appropriée serait : let remove-mon-ballon -name "football"

En conclusion, interagir avec des objets PowerShell nécessite de suivre une méthode: identifier la commande appropriée grâce à get-commande, explorer les propriétés, modifier si nécessaire, et toujours consulter l'aide pour nous guider.

Dans cette démonstration, nous allons nous baser sur deux cas pratiques. Nous allons utiliser, gérer, travailler avec deux objets du système : un service et un utilisateur local. Vérification de la géolocalisation Tout d'abord, je souhaite m'assurer que la géolocalisation ne soit pas activée sur mon poste. La seule chose connue de mon côté, c'est que la géolocalisation est gérée par un service Windows. Je souhaite donc vérifier que ce service est bien arrêté.

Utilisation de la console PowerShell Pour cela, je vais lancer une console PowerShell. Je vais l'adapter à l'écran pour que ce soit plus lisible. Et je vais, par déduction, vérifier s'il existe une cmdlet qui possède éventuellement le nom « service », dans le but d'obtenir des informations sur le service géolocalisation de mon système.

`get-command *service*`

J'en ai plusieurs. Parfait. Je souhaite vérifier l'état actuel de ce service. Il faut donc que j'affiche l'état du service à l'écran. En règle générale, pour afficher des résultats à l'écran, on va utiliser le verbe « get ». Je vais donc chercher encore plus finement la commande correspondante.

`get-service`

La cmdlet « get-service » semble correspondre à mes besoins. J'en suis sûr en affichant l'aide de la commande.

help get-service Le résumé de la commande m'indique « affiche les services de l'ordinateur local ou distant ». Je peux scroller pour aller chercher des exemples de la commande. Exemple 1 est « get all services on the computer ».

Filtrage de la cmdlet J'arrive à la section exemple 1. Je vais déjà essayer cette cmdlet seule. Sans argument ni option.

`get-service`

OK. On a beaucoup de services qui s'affichent à l'écran. Mon résultat du service de la géolocalisation est noyé dans l'information. Dans tous les cas, j'ai trois propriétés qui s'affichent à l'écran : « status », « name » et « display name ».

Je vais tenter de me baser sur l'exemple pour chercher le service qui possèderait la chaîne de caractère « géolocalisation » dans son « display name ».

`get-service | where-object { $_.displayname -like "*géolocalisation*" }`

Arrêt du service de géolocalisation Je vois maintenant des informations sur le service de géolocalisation, et je vais donc l'arrêter. Je vais vérifier s'il existe une cmdlet qui me permet de gérer l'objet « service ».

`get-command *service*`

Je retrouve mon « get-service » que je viens d'utiliser. Je peux en créer de nouveaux, je peux en redémarrer et je vois que je peux en arrêter. Je vais maintenant regarder l'aide de la cmdlet « stop-service ».

help stop-service Le résumé m'indique « stops one or more running services ». Je vais essayer d'arrêter mon service « géolocalisation ».

stop-service -displayname "géolocalisation" Pas d'erreur, donc le service est bien arrêté. C'était le premier exemple de manipulation de mon objet service.

Affichage des informations de l'utilisateur Dans un second exemple, je souhaite voir affiché à l'écran le nom et le SID de l'utilisateur « demo-user ». Je vais chercher une cmdlet qui me permettrait d'afficher cela.

`get-command *user*`

Je trouve « get-localuser ». J'ai à disposition toutes les propriétés de mon utilisateur. Par défaut, je ne peux pas obtenir le SID de l'utilisateur. Je vais filtrer tout ça.

`get-localuser demo-user | select name, SID`

Parfait. J'ai à l'écran le nom et le SID de cet utilisateur. Maintenant, je souhaite conserver ces informations dans un fichier.

`get-localuser demo-user | select name, SID | out-file "C:\users\demo-user\identity.txt"`

En suivant ces étapes, nous avons appris à interagir avec des services et des utilisateurs locaux sur Windows 10. Nous avons utilisé des cmdlets essentielles qui nous permettent d'obtenir et de gérer des informations systèmes avec PowerShell.

Dans cet atelier, nous allons continuer à pratiquer avec la ligne de commande PowerShell, dans le but de nous familiariser avec cette notion d'objet. Le but de cet atelier va être de chercher les bonnes commandlets, grâce à Get-Command, et à apprendre à les manipuler grâce à Get-Help. De ce fait, nous arriverons à afficher précisément ce qui est demandé dans les consignes.

Importance de l'aide de PowerShell Surtout, n'oublions pas l'aide de PowerShell. Lisez l'aide. Elle nous fera gagner un temps précieux.

Exemples de commandes

#### Voici quelques exemples de commandes que nous pouvons utiliser

`Get-Command`

`Get-Help`

À vous de jouer !

Dans ce module, nous avons exploré différentes approches pour interagir avec Windows 10. Nous avons vu qu’il existe plusieurs façons de piloter un système d'exploitation. Avec l'interface graphique, d'abord, nous avons appris à naviguer de manière intuitive et naturelle. Ensuite, grâce à la ligne de commande, nous avons approfondi notre interaction avec le système, permettant ainsi d’accéder à des fonctionnalités avancées. Nous avons également découvert PowerShell, le shell de chez Microsoft, qui s'impose de plus en plus et qui semble tendre à faire disparaître la console cmd.exe.

Ressources et utilisation de l'aide Nous avons également pris conscience que pour un technicien, l'aide est omniprésente. Nous devons développer le réflexe d'utiliser l'aide pour construire nos commandes. En agissant de la sorte, nous ferons en sorte que le système utilise les ressources de manière optimisée. Cela nous permettra également de modifier le système, à condition de posséder les privilèges d'administration.

En somme, ce module nous a permis de comprendre les différents outils et moyens d'interagir efficacement avec Windows 10. L'utilisation de l'interface graphique, de la ligne de commande, et de PowerShell, ainsi que le recours à l'aide, sont des atouts essentiels pour un technicien compétent.

### Module 4 - La gestion du stockage

Objectifs du module Présentation du stockage Le partitionnement Les systèmes de fichiers Les disques durs virtuels Des outils pour gérer le stockage Démonstration - Le stockage local GUI Démonstration - Le stockage local Diskpart Enoncé du TP - Gestion du stockage Conclusion
