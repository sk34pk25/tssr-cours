# Démonstrations — Module 06 — Le service DNS

## Fiche démo 1 - La configuration du service DNS

### La configuration du service DNS

### Démonstration 01 du module 06

Cette démonstration décrit les différentes étapes relatives à l’installation du service DNS sur une machine virtuelle Windows.

### Déroulement

- Prérequis

Avoir installé et configuré une VM Windows Server.

- Accès à la console d’installation.

Lors de l’accès à la session du serveur, le Gestionnaire de Serveur ou Serveur Manager se lance automatiquement.

Pour lancer la console permettant l’ajout d’un rôle, cliquer sur Manage ou Gérer (1) puis sur Add Roles and Features ou Ajout de Rôles et Fonctionnalités (2).

- Choix du rôle à installer.

Cliquer sur le bouton Suivant (1), puis encore une fois sur le bouton Suivant (2). Sur l’écran, Sélectionner le serveur de destination, cliquer sur le bouton Suivant (3). Sur l’écran Sélectionner des rôles de serveurs, cocher la case Serveur DNS (4). Sur la fenêtre contextuelle qui vient d’apparaître, cliquer sur le bouton Ajouter des fonctionnalités (5), puis sur le bouton Suivant (7). Sur l’écran Sélectionner des fonctionnalités, cliquer sur le bouton Suivant (8). Sur l’écran Serveur DNS, cliquer sur le bouton Suivant (9). Continuer jusqu’à la finalisation du rôle.

- Ajout du raccourci dans la barre des tâches

Ouvrir Outils d’administration, puis création du raccourci DHCP (1) dans la barre des taches (2).

- Présentation de la console

Cliquer sur le raccourci précédemment créé afin d’ouvrir la console DNS.

Zone de recherche directe (1) : processus de recherche d'une adresse IP basée sur le nom d'hôte dans DNS.

Zone de recherche inversée (2) : processus de recherche de nom d’hôte basé sur l’adresse IP dans le système DNS.

Redirecteurs conditionnels (3) : le serveur DNS peut être configuré pour faire appel à des redirecteurs ciblés pour des espaces de noms identifiés. Résoudre des espaces de noms privés non référencés et non résolvables dans l’arborescence d’espaces de noms publics. D’optimiser la résolution d’espaces de noms qui sont souvent sollicités.

DNS (4) et Redirecteurs (5) : si le serveur est configuré de telle sorte à utiliser la redirection, il demandera à son serveur redirecteur de trouver les réponses aux requêtes de ses clients.

### Étapes illustrées dans le support

1. Dans Gestionnaire DNS, développer le nœud DNS puis le serveur.
2. Repérer Zones de recherche directes, Zones de recherche inverse, Points d’approbation et Redirecteurs conditionnels. La vue du serveur présente également les indications de racine et les redirecteurs.

## Fiche démo 2 - La configuration d’un serveur DNS hébergeur

### La configuration d’un serveur DNS hébergeur

### Démonstration 02 du module 06

Cette démonstration décrit les différentes étapes relatives à l’installation d’un serveur DNS hébergeur sur une machine virtuelle Windows.

### Déroulement

- Ouvrir la console MMC du service DNS.

Ouvrir la fenêtre Outils d’administration puis cliquer sur la ligne DNS (1).

- Création d’une zone directe

Faire un clic droit sur la ligne Zones de recherche directes (1) puis sur le menu Nouvelle zone… (2). Cocher le bouton radio Zone principale (3), puis cliquer sur le bouton Suivant (4). Spécifier le nom de la zone (5), puis cliquer sur le bouton Suivant (6). Cliquer de nouveau sur le bouton Suivant (7). Laisser cocher la case qui n’autorise pas les enregistrements dynamiques (cela sera abordé dans une prochaine démonstration), cliquer directement sur le bouton Suivant (8). La zone est créée et apparaît (9). Cette dernière dispose bien d’un SOA et d’un NS.

- Création d’une zone de recherche inversée

Cliquer droit sur la ligne Zones de recherche inversée (1) puis sur le menu Nouvelle zone (2). Cocher le bouton radio Zone principale (3), puis cliquer sur le bouton Suivant (4). Laisser cocher le bouton radio Zone de recherche inversée IPv4 (5), puis cliquer sur le bouton Suivant (6). Spécifier l’adresse réseau de la zone inverse (pour les besoins de la démonstration, le réseau est en 192.168.1.0/24) (7), puis cliquer sur le bouton Suivant (8). Tout comme l’étape d’avant, ne pas changer le nom du fichier de zone et ne pas autoriser les enregistrements dynamiques. La zone est désormais visible.

- Ajout d’enregistrement dans une zone

Se positionner dans la zone directe nouvellement créée. Dans le volet central, faire un clic droit, puis cliquer sur le menu Nouvel hôte (1). Indiquer le nom NetBIOS de l’hôte (2), le nom FQDN s’autocomplète (2), indiquer l’adresse IP associée à l’hôte (4) et si besoin laisser cocher la case Créer un pointeur d’enregistrement PTR associé, cela permettra d’avoir directement l’enregistrement de créé dans la zone inverse. Enfin, cliquer sur le bouton Ajouter un hôte (5).

- Vérification avec nslookup

```text
Pour vérifier les éléments précédemment configurés, ouvrir l’invite de commande puis indiquer 
nslookup suivi du nom de la zone directe.
```

```text
Enfin indiquer nslookup suivi du nom FQDN de l’hôte.
```

## Fiche démo 3 - Le DNS et les mises à jour

### Le DNS et les mises à jour

### Démonstration 03 du module 06

Cette démonstration décrit les différentes étapes relatives à la configuration des mises à jour sur un serveur DNS

### Déroulement

- Ouvrir la console MMC du service DNS.

Ouvrir la fenêtre Outils d’administration puis cliquer sur la ligne DNS (1).

- Mise en place de l’enregistrement automatique des hôtes

Lors de la configuration des zones dans la précédente démonstration, l’enregistrement automatique des hôtes n’a pas été activé.

Pour ce faire, faire droit sur la zone directe (2), puis cliquer sur le menu Propriétés (3). Sélectionner la ligne Non sécurisé et sécurisé (4). De base, dans le contexte de domaine Active Directory, les zones seront créées et les enregistrements d’hôtes seront automatiques.

- Une autre manière de forcer l’enregistrement d’un hôte.

Installer une VM cliente étant sur le même sous-réseau que le serveur DNS et avec comme serveur DNS préféré, le serveur DNS sur lequel vous travailler dans cette démonstration.

```text
Ouvrir une invite de commande en tant qu’administrateur sur le poste et client et indiquer la 
commande ipconfig /registerdns
```

- Activer le transfert de zone

Installer une VM serveur étant sur le même sous-réseau que le serveur DNS. Installer le service DNS.

Sur le premier serveur DNS, faire un clic droit sur la zone directe (1), puis sur le menu Propriétés (2). Cliquer sur l’onglet Transferts de zone (3). Dans cette démonstration, le second serveur DNS sera utilisé. Cocher le bouton radio Uniquement vers les serveurs suivants (4). Cliquer sur le bouton Modifier (5). Indiquer l’adresse du second serveur DNS (6), puis cliquer sur le bouton OK (7).

- Configuration du transfert de zone sur le second serveur

Faire un clic droit sur la ligne Zones de recherche directes (1) puis sur le menu Nouvelle zone… (2). Cocher le bouton radio Zone secondaire (3), puis cliquer sur le bouton Suivant (4). Indiquer le nom de la zone que vous souhaitez « copier » (5), puis cliquer sur le bouton Suivant (6). Indiquer l’adresse IP (7) du serveur maître (ici le premier serveur DNS), puis cliquer sur le bouton Suivant (8).

- Vérification du transfert de zone

Se positionner sur la nouvelle zone créée (1). L’ensemble des enregistrements doivent être présents (2). En cas d’ajout de nouveaux enregistrements, ces derniers seront automatiquement ajoutés sur cette zone secondaire.

Attention, il n’est pas possible d’ajouter des enregistrements sur cette zone secondaire (lecture uniquement).

## Fiche démo 4 - Le DNS les sous-domaines et les délégations

### Le DNS, les sous-domaines et les délégations

### Démonstration 04 du module 06

Cette démonstration décrit les différentes étapes relatives à la configuration d’un sous-domaine et la mise en place de délégation.

### Déroulement

- Ouvrir la console MMC du service DNS.

Ouvrir la fenêtre Outils d’administration puis cliquer sur la ligne DNS (1).

- Création d’une zone principale sur le deuxième serveur DNS

Sur le second serveur DNS, créer une zone principale (ici rennes.mazone.local) (1).

Y ajouter des enregistrements d’hôtes à l’intérieur (2).

- Création de la délégation

Sur le premier serveur DNS, faire droit sur la zone précédemment créée (ici mazone.local) (1), puis sur le menu Nouvelle délégation… (2). Indiquer le nom du domaine délégué (ici Rennes, qui correspond à la zone créée sur le second serveur DNS) (3), puis cliquer sur le bouton Suivant (4). Indiquer l’adresse IP du second serveur DNS (5), puis cliquer sur le bouton Suivant (6). Ne pas oublier de faire des redirecteurs conditionnels afin de pouvoir résoudre correctement vos zones.

- Vérification

Avant la mise en place du redirecteur, il n’était pas possible de résoudre le sous-domaine rennes.mazone.local, c’est désormais possible.

```text
Sur le premier serveur DNS, ouvrir une invite de commande et tester avec des commandes 
nslookup
```

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-06-module-06.md)
