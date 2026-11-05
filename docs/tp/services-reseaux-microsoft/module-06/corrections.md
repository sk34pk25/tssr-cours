# Corrections expliquées — Module 06 — Le service DNS

## Solution du TP 1 - DNS résolveur

Le cache du client est distinct du cache de W19-DNS. Une zone privée est résolue si la chaîne rejoint un serveur qui la connaît. Vérifier l’adresse du serveur interrogé et l’option DHCP 006. Le nom du centre est remplacé par un domaine d’exemple dans l’Original.

### DNS résolveur

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 6.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 05.

Création de la machine virtuelle :

Installation du service DNS :

- Installer le service DNS sur W19-DNS

- Configurez W19-DNS afin qu’elle fasse appel à son propre service DNS.

- Tester la résolution depuis W19-DNS.

- Pouvez-vous résoudre les noms DNS publics ? □ Non

- Pouvez-vous résoudre les noms DNS de centre de formation ? (ad.campus-formation.test) □ Non

- Est-ce normal ? Oui, car il n’y a pas de redirecteur.

- Affichez les informations contenues dans le cache du service DNS

- Vider le cache DNS du serveur.

- Configurer les redirecteurs

- Vers les serveurs DNS de du centre de formation, dont est cliente votre machine physique. o Pouvez-vous résoudre les noms DNS publics ? □ Oui

- Pouvez-vous résoudre les noms DNS de centre de formation ? □ Oui

- Afficher les informations contenues dans le cache du service DNS.

- Que pouvez-vous en déduire ? Le serveur DNS résolveur renseigne le cache DNS au fur et à mesure des demandes de l’utilisateur. Paramétrages clients

- Configurer le serveur DHCP afin qu’il fasse appel au serveur DNS de votre infrastructure.

- Configurer automatiquement les clients afin qu’ils fassent appel au serveur DNS de votre infrastructure.

- Pouvez-vous résoudre les noms DNS publics ? □ Oui

- Pouvez-vous résoudre les noms DNS de centre de formation ? □ Oui

## Solution du TP 2 - DNS hébergeur

Un FQDN résolu avec un nom court en échec indique souvent un problème de suffixe. Vérifier l’option DHCP 015. Le DNS hébergeur répond pour sa zone et transmet la résolution externe au premier résolveur comme demandé.

### DNS hébergeur

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 6 et d’avoir réalisé le précédent TP.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 05.

- Mettre en place la VM SRV-2K19-DNS-TP14.ova mise à disposition.

- Identifiant : Administrator - Mot de passe : [valeur fournie par le formateur]

### Configuration du serveur DNS hébergeur

- Installez le service DNS sur la machine virtuelle ou est hébergé le service DHCP.

- Sur ce serveur, créez les zones pour les besoins suivants :

- Résolution directe pour un domaine infraXX.net (ou XX = vos initiales).

- Résolution inverse pour votre réseau VmNet10. o Création de l’ensemble des enregistrements permettant la résolution des

noms et adresses IP de vos serveurs.

- Testez et validez le bon fonctionnement depuis votre serveur :

- nslookup -q=soa &lt;votre domaine&gt; o nslookup -q=ns &lt;votre domaine&gt;

### Paramétrage du client

- Revoir la configuration automatique des paramètres DNS sur les clients :

- Configurez le 2e serveur DNS comme serveur DNS préféré.

- Configurer le suffixe DNS relatif à votre domaine.

- Testez et validez le bon fonctionnement de la résolution de vos domaines depuis le poste client.

- En utilisant le FQDN

- En utilisant le nom d’hôte uniquement

Chaîne de résolution :

- Configurez le 2e serveur DNS pour faire appel uniquement à votre 1er serveur DNS pour la résolution des noms DNS extérieurs.

- Configurez votre 2e serveur DNS pour permettre la résolution du domaine DNS mis à disposition «infraXX.net » .

- Testez et validez le bon fonctionnement de la résolution depuis le client.

- Vers vos domaines DNS ? □ Oui

- Vers les domaines DNS fournis ? □ Oui

- Vers les domaines DNS publics ? □ Oui

## Solution du TP 3 - DNS hébergeur et redondance

Comparer numéro de série SOA, sources autorisées pour le transfert et réponse directe de chaque DNS. Distinguer enregistrement dynamique, transfert secondaire et ancien résultat en cache. Contrôler la liste de suffixes sur le client.

### DNS hébergeur et redondance

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 6 et réalisé le précédent TP.

1 à 2 heures

Prérequis :

- Avoir réalisé le TP précédent du module 05.

- Un serveur DNS sera à mettre en place dans le réseau 192.168.0.0/24 ainsi que dans le réseau 192.168.1.0/24.

- Le routage entre les deux réseaux doit être fonctionnel.

Enregistrements dynamiques :

- Sur le serveur DNS hébergeur, configurez les zones principales pour permettre l’enregistrement dynamique des clients.

Il faut faire un clic droit sur la zone DNS, puis dans l’onglet Général, sélectionner Nonsecure and Secure dans le champ Dynamic Update.

- Sur les postes clients, configurez le suffixe DNS principal.

Il faut aller dans les propriétés de la carte réseau, puis cliquer sur Advanced, puis sur l’onglet DNS.

- Vérifiez la présence des nouveaux enregistrements DNS :

- avec la console DNS sur le serveur DNS hébergeur

Voici le détail des fichiers de zone mis à jour par le serveur DHCP et le détail de la configuration du serveur DHCP.

Il faut aller dans les propriétés du serveur DHCP en cliquant sur IPV4, puis sur l’onglet DNS et activer les cases suivantes.

- Avec la commande nslookup

### Avec la configuration du suffixe DNS configuré

Sans la configuration du suffixe, il faut ajouter le nom de domaine.

- Quels types d’enregistrements sont créés ? Des enregistrements de type A et TXT.

Mise en œuvre de la redondance DNS : Vérifiez au préalable que le routage est opérationnel entre les deux réseaux. Vous réaliserez un schéma des infrastructures.

- Sur le serveur DNS hébergeur du réseau 192.168.0.0/24 :

- Configurez les zones principales, et le transfert de zone pour permettre le

transfert à partir du serveur DNS hébergeur du réseau 192.168.1.0/24. Il faut faire un clic droit sur la zone DNS puis dans l’onglet Zone Transfers, il faut ajouter l’IP du serveur distant.

- Sur le serveur DNS du réseau 192.168.1.0/24 :

- Configurez les zones secondaires et le transfert de zone pour permettre le

transfert à partir du serveur DNS du réseau 192.168.0.0/24.

On crée une nouvelle zone sur le serveur DNS, en type secondary, puis on spécifie le nom de la zone

On indique ensuite l’IP du serveur DNS Maitre.

- Vérifiez que le transfert est fonctionnel en créant un nouvel enregistrement dans la zone principale :

Ici on crée l’enregistrement sur le serveur maître.

- Le nouvel enregistrement est-il créé ? □ Oui

- Sinon, consultez le journal d’évènements DNS, vérifiez les connexions…

### Validation de la redondance DNS

- Paramétrez les clients de chacune des infrastructures :

- Pour les clients du réseau 192.168.0.0/24 :

- DNS préféré = Serveur DNS hébergeur du réseau d’appartenance.
- DNS auxiliaire = Serveur DNS hébergeur du second réseau.

- Pouvez-vous configurer les suffixes DNS de deux domaines sur tous les

```text
clients ? 
  □ OUI
```

- Comment procéder ? Une option DHCP est disponible.

- Arrêtez le service DNS hébergeur du 1er réseau et testez la résolution depuis l’infrastructure du 2e réseau.

- Peut-on résoudre les noms du 1er Réseau ? □ Oui

- Peut-on résoudre les noms du 2e Réseau ?

```text
□ Oui
```

- Peut-on résoudre les noms DNS publics ? □ Oui, à condition d’indiquer l’IP du serveur DNS de du centre de formation comme redirecteur non conditionnel

- Redémarrez le service DNS hébergeur du 1er réseau.

- Peut-on résoudre les noms du 1er Réseau ? □ Oui

- Peut-on résoudre les noms du 2e réseau ? □ Oui

- Peut-on résoudre les noms DNS publics ? □ Oui, à condition d’indiquer l’IP du serveur DNS de du centre de formation comme redirecteur non conditionnel

- Vous réaliserez un schéma montrant les chaînes de résolutions DNS.

## Solution du TP 4 - DNS délégations et redirections

La délégation se configure chez le parent. Le redirecteur conditionnel oriente une requête selon son suffixe. Une zone secondaire doit disposer d’un transfert autorisé pour assurer sa redondance. Vérifier chaque chemin avec le serveur explicitement interrogé.

### DNS délégations et redirections

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 6 et réalisé le précédent TP.

2 à 3 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 05.

L’objectif est de mettre en place une hiérarchie DNS :

- Un domaine de 2e niveau : formation.test

### On crée une nouvelle zone principale pour le nom de domaine formation.test

- Un domaine de 3e niveau : nantes.formation.test OU rennes.formation.test OU niort.formation.test
- Neuf domaines de 4e niveau : res.nantes.formation.test OU res.rennes.formation.test …

Faites un clic droit sur la zone formation.test puis sur Nouvelle délégations.

### Sur le second serveur DNS, créer la zone formation.test puis ajouter le domaine NANTES

Créer des enregistrements de TEST. Tester la résolution de nom en envoyant la requête sur l’un ou l’autre des deux serveur DNS.

Gestion des domaines :

- Chacun des serveurs DNS prend en charge un des domaines de la hiérarchie.
- Le domaine est géré sur le 1er serveur DNS et la redondance est assurée.

- Vous reportez les informations relatives au domaine (nom du domaine,

gestionnaire du domaine, adresses IP des serveurs DNS).

- Validez le bon fonctionnement de la résolution et de la redondance sur le domaine pris en charge avant de passer à l’étape suivante.

### Résolution des domaines de l’ensemble de la hiérarchie

- Paramétrez chacun des serveurs pour permettre la résolution de l’ensemble des domaines de la hiérarchie (domaine parent, enfant...)

- Vérifiez le bon fonctionnement de la résolution sur l’ensemble de la hiérarchie.

- Vous réaliserez un schéma montrant les chaînes de résolutions DNS.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-06-module-06.md)
