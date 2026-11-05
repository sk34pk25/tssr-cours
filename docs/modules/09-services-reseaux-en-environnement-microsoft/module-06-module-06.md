# Module 06 — Le service DNS

DNS fournit des correspondances entre noms, adresses et services. Le parcours sépare quatre situations de laboratoire, le résolveur, l’hébergement de zones, la redondance et la délégation.

## Résoudre un nom depuis un poste

Le client Windows peut obtenir une réponse de son cache, d’une entrée `hosts` ou du serveur DNS configuré. Le cache peut retenir une réponse négative. Le fichier local est `C:\Windows\System32\drivers\etc\hosts`. Saisir une adresse puis un ou plusieurs noms séparés par des espaces. L’exemple avec une virgule dans le support doit être adapté à cette syntaxe.

Un nom pleinement qualifié associe l’hôte et le domaine. Le point final représente la racine. Pour `srvfic.masociete.lcl.`, l’hôte est `srvfic` et le domaine est `masociete.lcl.`. Un espace privé peut être résolu dans l’infrastructure de l’organisation sans être publié dans le DNS public. Le nom court dépend aussi de la liste de suffixes configurée sur le client.

```cmd
ipconfig /displaydns
ipconfig /flushdns
nslookup srvfic.masociete.lcl.
nslookup -type=soa masociete.lcl.
nslookup -type=ns masociete.lcl.
```

Le cache du client et celui du serveur sont distincts. Vider le premier ne vide pas le second. Comparer le nom court, le FQDN, le serveur interrogé et la réponse avant de modifier une zone.

## Résolveur et redirection

Un résolveur recherche la réponse pour le client, puis la met en cache jusqu’à expiration du TTL applicable. Une requête récursive demande une réponse finale. Une requête itérative peut recevoir un renvoi vers l’autorité suivante. La hiérarchie part de la racine, passe par les TLD comme `.fr` et atteint les zones déléguées. Les anciennes adresses publiques des schémas sont des exemples du support.

Un redirecteur général reçoit les requêtes que le serveur ne résout pas localement. Un redirecteur conditionnel ne concerne qu’un suffixe désigné, par exemple une zone privée d’un autre réseau. Le résolveur et l’hébergeur peuvent coexister sur le même serveur. Le TP 1 installe DNS sur `W19-DNS`, compare résolution publique et nom interne du laboratoire avant et après ajout des redirecteurs, examine le cache serveur et distribue le résolveur par DHCP.

## Héberger des zones

Une zone est le conteneur des données pour lesquelles le serveur fait autorité. Une zone directe répond notamment nom → adresse, tandis qu’une zone inverse répond adresse → nom. La zone principale modifiable et sa secondaire en lecture font toutes les deux autorité. Le support présente le stockage en fichier sous `%windir%\system32\dns`. Les zones intégrées à AD utilisent un autre mode de stockage et de réplication. [Gestion des zones DNS Windows Server](https://learn.microsoft.com/windows-server/networking/dns/manage-dns-zones).

| Type | Donnée représentée |
|---|---|
| SOA | Autorité de zone, numéro de série et paramètres de synchronisation |
| NS | Serveur faisant autorité |
| A et AAAA | Adresse IPv4 ou IPv6 |
| CNAME | Alias vers un nom canonique |
| MX | Serveur de messagerie |
| SRV | Localisation d’un service |
| PTR | Nom associé à une adresse dans une zone inverse |

Le TP 2 héberge `infraXX.net` avec vos initiales et la zone inverse de VMNet10. Il demande les enregistrements utiles, la vérification SOA/NS et la résolution par FQDN et nom court depuis le client. Le second DNS transmet les demandes extérieures au premier résolveur selon la chaîne demandée. Tester séparément noms internes, domaines fournis et noms publics.

## Mises à jour et redondance

La mise à jour dynamique enregistre les postes dans une zone principale configurée pour l’accepter. Vérifier quels A et PTR apparaissent, qui les crée et dans quelle zone. Le scénario fait intervenir le suffixe du client et, selon les réglages, les mises à jour effectuées par DHCP. Pour un transfert, le secondaire consulte le SOA, compare son numéro de série avec le primaire et demande IXFR ou AXFR. Une notification accélère le contrôle du secondaire. Le primaire doit autoriser le transfert vers le partenaire.

Le TP 3 place un DNS dans `192.168.0.0/24` et un dans `192.168.1.0/24`. Tester le routage, les mises à jour dynamiques, le transfert d’un nouvel enregistrement, puis l’arrêt et le redémarrage du service primaire. Vérifier les réponses internes de chaque réseau et publiques, ainsi que le DNS préféré et auxiliaire du client. Tester avec un nom récemment créé ou un contrôle du cache, afin que la réponse ne provienne pas seulement d’une ancienne résolution.

## Déléguer un sous-domaine

On peut conserver les noms d’un sous-domaine dans la zone parente ou déléguer leur gestion à un autre serveur. La délégation publie dans la zone parente les NS du sous-domaine et, selon la dépendance du nom du serveur, l’adresse nécessaire pour le trouver. Une redirection conditionnelle fixe le chemin qu’un résolveur emprunte pour un suffixe. Ces objets ont des fonctions différentes. [Architecture DNS Windows Server](https://learn.microsoft.com/windows-server/networking/dns/dns-architecture).

Le TP 4 répartit un domaine de deuxième niveau, des domaines Nantes/Rennes/Niort de troisième niveau et neuf espaces de quatrième niveau. Chaque groupe renseigne le domaine, son gestionnaire et ses serveurs DNS, vérifie la redondance locale et démontre la résolution de la hiérarchie complète. Les noms propres au centre sont neutralisés dans la transcription en conservant les niveaux et les relations.

### Mini-quiz

1. Où regarder si le FQDN fonctionne et le nom court échoue ?
2. Quel enregistrement permet de comparer les versions d’une zone ?
3. Que change une délégation ?

??? success "Réponses"
    1. Les suffixes DNS du poste et les options reçues par DHCP.
    2. Le SOA, qui contient le numéro de série.
    3. La zone parente indique quels serveurs font autorité pour le sous-domaine.


## Appliquer le cours

- [Travaux pratiques et démonstrations](../../tp/services-reseaux-microsoft/module-06/index.md)
- [Fiche de révision](../../revision/services-reseaux-microsoft/module-06-module-06.md)
