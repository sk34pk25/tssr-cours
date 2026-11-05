# Démonstrations — Module 05 — Le service DHCP

## Fiche démo 1 - La configuration du serveur DHCP

### La configuration du serveur DHCP

### Démonstration 01 du module 05

Cette démonstration décrit les différentes étapes relatives à l’installation du service DHCP sur une machine virtuelle Windows.

### Déroulement

- Prérequis

Avoir installé et configuré une VM Windows Server.

- Accès à la console d’installation.

Lors de l’accès à la session du serveur, le Gestionnaire de Serveur ou Serveur Manager se lance automatiquement.

Pour lancer la console permettant l’ajout d’un rôle, cliquer sur Manage ou Gérer (1) puis sur Add Roles and Features ou Ajout de Rôles et Fonctionnalités (2).

- Choix du rôle à installer.

Cliquer sur le bouton Next (1), puis encore une fois sur le bouton Next (2). Sur l’écran Select destination server cliquer sur le bouton Next (3). Sur l’écran Select server roles, cocher la case DHCP Server (4). Sur la fenêtre contextuelle qui vient d’apparaître, cliquer sur le bouton Add Features (5), puis sur le bouton Next (6). Sur l’écran Select Features, cliquer sur le bouton Next (7). Sur l’écran DHCP Server, cliquer sur le bouton Next (8). Continuer jusqu’à la finalisation du rôle.

- Finalisation configuration DHCP

Dès lors que l’installation est terminée, un « flag » jaune apparaît sur le dashboard du serveur (1). Cliquer sur le « flag » puis sur le lien Complete DHCP configuration (2). Sur l’écran Description, cliquer sur le bouton Commit (3). Enfin, cliquer sur le bouton Close (4).

- Ajout du raccourci dans la barre des tâches

Ouvrir Administrative Tools, puis créer le raccourci DHCP (1) dans la barre des tâches (2).

- Création d’une étendue

Cliquer sur le raccourci précédemment créé afin d’ouvrir la console DHCP. Faire un clic droit sur le nœud IPv4 puis sur le menu New Scope (1). Cliquer sur le bouton Next (2). Indiquer dans les input box Name et Description (3) un nom et une description pour l’étendue, puis cliquer sur le bouton Next (4).

Indiquer une adresse de début pour l’étendue ainsi qu’une adresse de fin (5), vérifier que le masque indiquer est le bon (6) et cliquer sur le bouton Next (7). S’il est requis d’avoir une plage d’adresses exclues, indiquer une adresse de début et de fin (8), puis cliquer sur le bouton Add (9) et cliquer sur le bouton Next (10). Si besoin, la durée du bail peut être modifiée (11), ensuite cliquer sur le bouton Next (12). Cliquer sur le bon Next (13). Indiquer si besoin l’adresse de la passerelle par défaut que les clients obtiendront via leur bail (14) puis cliquer sur le bouton Add (15) et cliquer sur le bouton Next (16). Cliquer sur le bouton Next (17). Cliquer sur le bouton Next (18). Cliquer sur le bouton Next (19). Enfin, cliquer sur le bouton Finish (20).

### Étapes illustrées dans le support

1. Dans New Scope Wizard, renseigner Étendue_LAN et la description Étendue pour le réseau LAN.
2. Renseigner la plage 192.168.1.20–192.168.1.30 avec le masque 255.255.255.0 (longueur 24).
3. Ajouter la plage d’exclusion présentée par l’assistant, puis choisir la durée du bail.
4. Sélectionner Yes, I want to configure these options now. Saisir le routeur 192.168.1.254 et l’ajouter.

## Fiche démo 2 - La configuration des options et le comportement du client

### La configuration des options et le comportement du client

### Démonstration 02 du module 05

Cette démonstration décrit les différentes étapes relatives à la configuration des options ainsi que de l’obtention du bail par un client.

### Déroulement

- Prérequis

Avoir installé et configuré une machine virtuelle sous Windows 10, sans IP fixe.

- Ajout d’une option dans l’étendue

Cliquer sur le raccourci précédemment créé afin d’ouvrir la console DHCP. Dérouler le nœud de l’étendue (1) précédemment créée, faire un clic droit sur la ligne Scope Options (2) puis sur le menu Configure Options (3). Se positionner sur l’option 006 (4). Indiquer l’adresse IP d’un serveur DNS de votre infrastructure (5) puis cliquer sur le bouton Add (6). L’adresse IP qui est en haut de la liste sera le DNS préféré des machines clientes du service DHCP (7). Une fois l’ajout de l’adresse IP terminée, cliquer sur le bouton OK (8).

- Test de récupération adresse IP sur le client

```text
Se connecter sur la machine virtuelle Windows 10. Lancer une invite de commande, puis indiquer 
la commande ipconfig /renew (1) afin d’interroger le serveur DHCP. Une fois le processus DORA 
terminé, le client se voit attribuer une configuration IP via le DHCP (2). Indiquer la commande 
ipconfig /all afin de vérifier que le serveur DNS est bien celui ou ceux configurés précédemment 
(3).
```

- Vérification sur l’étendue du serveur

Se connecter sur la machine virtuelle hébergeant le serveur DHCP. Vérifier dans les baux d’adresses IP (1) que le client est bien présent (2).

## Fiche démo 3 - Le fractionnement d'étendue

### Le fractionnement d’étendue

### Démonstration 03 du module 05

Cette démonstration décrit les différentes étapes relatives au fractionnement d’une étendue.

### Déroulement

- Prérequis

Avoir installé un second serveur hébergeant le service DHCP.

- Création du fractionnement

Cliquer sur le raccourci précédemment créé afin d’ouvrir la console DHCP. Faire un clic droit sur l’étendue (1) précédemment créée, cliquer sur le menu Advanced (2) puis sur le menu Split-Scope (3). Sur la fenêtre, cliquer sur le bouton Next (4). Indiquer le nom du second serveur DHCP (5) et cliquer sur le bouton Add Server (6). Enfin, cliquer sur le bouton Next (7).

- Ajustement du fractionnement

Lorsque le nouveau serveur est ajouté, la fenêtre qui permet la customisation de l’étendue apparaît. Ajuster en conséquence, puis cliquer sur le bouton Next (1). Cliquer sur le bouton Next (2). Enfin, cliquer sur le bouton Finish (3), puis sur le bouton Close (4).

- Vérification sur le second serveur DHCP

Ouvrir la console DHCP. L’étendue doit apparaître (1), si ce n’est pas le cas, il faut actualiser la console MMC avec la touche [F5]. Faire un clic droit sur l’étendue, puis sur le menu Activate (2). Le fractionnement est opérationnel.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-05-module-05.md)
