# Énoncés — Module 06 — Le service DNS

## Enoncé du TP 1 - DNS résolveur

### Services réseau en environnement Microsoft DNS résolveur

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 6.

1 à 2 heures

Prérequis :

Avoir réalisé le TP précédent du Module 05.

Création de la machine virtuelle : Installer une nouvelle machine virtuelle sous Windows Server 2019 Standard.

- Cette dernière sera nommée W19-DNS.

Cette machine devra communiquer avec l’ensemble de votre infrastructure.

### Installation du service DNS : Installer le service DNS sur W19-DNS

Configurer W19-DNS afin qu’elle fasse appel à son propre service DNS.

Tester la résolution depuis W19-DNS.

- Pouvez-vous résoudre les noms DNS publics ?

### Oui Non

- Pouvez-vous résoudre les noms DNS de centre de formation ? (ad.campus-formation.test)

### Oui Non

Est-ce normal ?

### Afficher les informations contenues dans le cache du service DNS

Vider le cache DNS du serveur.

Configurer les redirecteurs vers les serveurs DNS de du centre de formation, dont est cliente votre machine physique.

- Pouvez-vous résoudre les noms DNS publics ?

### Oui Non

- Pouvez-vous résoudre les noms DNS de centre de formation ?

### Oui Non

Afficher les informations contenues dans le cache du service DNS.

- Que pouvez-vous en déduire ?

### Paramétrages clients

Configurer le serveur DHCP afin qu’il fasse appel au serveur DNS de votre infrastructure.

Configurer automatiquement les clients afin qu’ils fassent appel au serveur DNS de votre infrastructure.

- Pouvez-vous résoudre les noms DNS publics ?

### Oui Non

- Pouvez-vous résoudre les noms DNS de centre de formation ?

### Oui Non

### Preuves attendues

Comparer résolution publique et interne avant et après les redirecteurs. Examiner et vider le cache serveur au moment prévu, puis vérifier l’option DNS reçue par le client.

## Enoncé du TP 2 - DNS hébergeur

### Services réseau en environnement Microsoft DNS hébergeur

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 6 et d’avoir réalisé le précédent TP.

1 à 2 heures

Prérequis :

Avoir réalisé le TP précédent du Module 05.

Mettre en place la VM SRV-2K19-DNS-TP14.ova mise à disposition.

### Identifiant : Administrator - Mot de passe : [valeur fournie par le formateur]

### Configuration du serveur DNS hébergeur

Installez le service DNS sur la machine virtuelle ou le service DHCP est hébergé.

Sur ce serveur, créez les zones pour les besoins suivants :

- Résolution directe pour un domaine infraXX.net (ou XX = vos initiales).

- Résolution inverse pour votre réseau VmNet10.

- Création de l’ensemble des enregistrements permettant la résolution des noms et adresses IP de vos serveurs.

Testez et validez le bon fonctionnement depuis votre serveur :

- nslookup -q=soa &lt;votre domaine&gt;

- nslookup -q=ns &lt;votre domaine&gt;

### Paramétrage du client

Revoir la configuration automatique des paramètres DNS sur les clients :

- Configurez le 2e serveur DNS comme serveur DNS préféré. o Configurez le suffixe DNS relatif à votre domaine.

Testez et validez le bon fonctionnement de la résolution de vos domaines depuis le poste client.

- En utilisant le FQDN o En utilisant le nom d’hôte uniquement

Chaîne de résolution :

Configurez le 2e serveur DNS pour faire appel uniquement à votre 1er serveur DNS pour la résolution des noms DNS extérieurs.

Configurez votre 2e serveur DNS pour permettre la résolution du domaine DNS mis à disposition «infraXX.net » .

Testez et validez le bon fonctionnement de la résolution depuis le client.

- Vers vos domaines DNS ?

### Oui Non

- Vers les domaines DNS fournis ?

### Oui Non

- Vers les domaines DNS publics ?

### Oui Non

### Preuves attendues

Contrôler zone directe, inverse, SOA, NS, FQDN et nom court. Tester noms du laboratoire, domaines fournis et noms publics depuis le client.

## Enoncé du TP 3 - DNS hébergeur et redondance

### Services réseau en environnement Microsoft DNS hébergeur et redondance

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 6 et réalisé le précédent TP.

1 à 2 heures

Prérequis :

Avoir réalisé le TP précédent du Module 05.

Un serveur DNS sera à mettre en place dans le réseau 192.168.0.0/24 ainsi que dans le réseau 192.168.1.0/24.

Le routage entre les deux réseaux doit être fonctionnel.

Enregistrements dynamiques : Sur le serveur DNS hébergeur, configurez les zones principales pour permettre l’enregistrement dynamique des clients.

Sur les postes clients, configurez le suffixe DNS principal.

Vérifiez la présence des nouveaux enregistrements DNS :

- avec la console DNS sur le serveur DNS hébergeur

- avec la commande nslookup

- quels types d’enregistrements sont créés ?

Mise en œuvre de la redondance DNS : Vérifiez au préalable que le routage est opérationnel entre les deux réseaux. Vous réaliserez un schéma des infrastructures.

Sur le serveur DNS hébergeur du réseau 192.168.0.0/24 :

- Configurez les zones principales, et le transfert de zone pour permettre le transfert à partir du serveur DNS hébergeur du réseau 192.168.1.0/24.

Sur le serveur DNS du réseau 192.168.1.0/24 :

- Configurez les zones secondaires et le transfert de zone pour permettre le transfert à partir du serveur DNS du réseau 192.168.0.0/24.

Vérifiez que le transfert est fonctionnel en créant un nouvel enregistrement dans la zone principale :

- Le nouvel enregistrement est-il créé ?

### Oui Non

- Sinon, consultez le journal d’évènements DNS, vérifiez les connexions…

### Validation de la redondance DNS

Paramétrez les clients de chacune des infrastructures :

- Pour les clients du réseau 192.168.0.0/24 :

DNS préféré = Serveur DNS hébergeur du réseau d’appartenance. DNS auxiliaire = Serveur DNS hébergeur du second réseau.

- Pouvez-vous configurer les suffixes DNS de deux domaines sur tous les clients ?

### Oui Non

- Comment procéder ?

Arrêtez le service DNS hébergeur du 1er réseau et testez la résolution depuis l’infrastructure du 2e réseau.

- Peut-on résoudre les noms du 1er Réseau ?

### Oui Non

- Peut-on résoudre les noms du 2e réseau ?

### Oui Non

- Peut-on résoudre les noms DNS publics ?

### Oui Non

Redémarrez le service DNS hébergeur du 1er réseau.

- Peut-on résoudre les noms du 1er Réseau ?

### Oui Non

- Peut-on résoudre les noms du 2e réseau ?

### Oui Non

- Peut-on résoudre les noms DNS publics ?

### Oui Non

Vous réaliserez un schéma montrant les chaînes de résolutions DNS.

### Preuves attendues

Créer un enregistrement après la mise en place du transfert. Vérifier sa présence sur le secondaire, puis tester la redondance avec le primaire arrêté et relancé.

## Enoncé du TP 4 - DNS délégations et redirections

### DNS délégations et redirections

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 6 et réalisé le précédent TP.

2 à 3 heures

Prérequis :

- Avoir réalisé le TP précédent du Module 05.

L’objectif est de mettre en place une hiérarchie DNS :

- Un domaine de 2e niveau : formation.test
- Un domaine de 3e niveau : nantes.formation.test OU rennes.formation.test OU niort.formation.test
- Neuf domaines de 4e niveau : res.nantes.formation.test OU res.rennes.formation.test … Gestion des domaines :

- Chacun des serveurs DNS prend en charge un des domaines de la hiérarchie.
- Le domaine est géré sur le 1er serveur DNS et la redondance est assurée.

- Vous reportez les informations relatives au domaine (nom du domaine,

gestionnaire du domaine, adresses IP des serveurs DNS).

- Validez le bon fonctionnement de la résolution et de la redondance sur le domaine pris en charge avant de passer à l’étape suivante.

### Résolution des domaines de l’ensemble de la hiérarchie

- Paramétrez chacun des serveurs pour permettre la résolution de l’ensemble des domaines de la hiérarchie (domaine parent, enfant...)

- Vérifiez le bon fonctionnement de la résolution sur l’ensemble de la hiérarchie.

- Vous réaliserez un schéma montrant les chaînes de résolutions DNS.

### Preuves attendues

Dessiner les zones par niveau, les NS, les adresses des serveurs, les délégations et les redirections. Tester des noms du parent, des enfants et des branches voisines.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-06-module-06.md)
