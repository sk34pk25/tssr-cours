# Énoncés — Module 07 — La gestion du réseau et du pare-feu

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enonc‚ du TP - Gestion du r‚seau

### Systèmes Clients Microsoft

#### Gestion du réseau

#### TP du Module 07 — La gestion du réseau et du pare-feu

Ce TP va vous permettre de configurer la carte réseau de votre VM. Vous mettrez en place un adressage IP fixe puis effectuerez des tests (tests de communications et de résolution de noms entre autres). Vous parcourrez et modifierez la configuration du pare-feu pour l’adapter aux consignes.

#### Durée estimée

#### 1 heure

#### Énoncé

#### Lisez l'ensemble de ce TP avant de vous lancer dans la pratique

#### Sur votre VM Win10-XX, configurez vos accès réseau :

Connectez votre VM sur le switch Bridged (vérifier d'abord le report de 35 jours de

#### Windows Update)

Possédez-vous une adresse IP ? Laquelle ? Quelle est l'adresse du réseau ?

#### Configurez une adresse IP fixe sur l'interface réseau de votre VM :

  - La partie réseau de votre adresse sera la même que celle qui est configurée

sur l’ordinateur à votre disposition pour réaliser les TP.

  - La partie hôte sera composée du rang alphabétique de la première lettre

#### de votre prénom puis du rang alphabétique de la première lettre de votre

#### nom de famille

#### Exemple : Pierre-Louis Le Guervelec

#### P = 16eme lettre de l’alphabet  l’octet n°3 de l’adresse IP

#### sera donc 16

#### L = 12eme lettre de l’alphabet  l’octet n°4 de l’adresse IP

#### sera donc 12

  - Le masque sera 255.255.0.0

  - La passerelle et le serveur DNS préféré seront les mêmes que ceux

#### configurés sur votre VM Campus en ligne

#### Connectivité

#### Utilisez la commande ping vers les hôtes suivants :

  - Adresse IP de la passerelle par défaut

  - Adresse IP de votre VM Discovery

  - www.facebook.com

Ces hôtes sont-ils joignables ? S’ils ne le sont pas, vérifier la configuration réseau.

#### À quel niveau du réseau sont-ils ? Réseau local ? Internet ?

#### Utilisez la commande tracert pour ces mêmes noms. Que nous apprend cette

#### commande ?

#### Résolution de noms

#### Utilisez la commande nslookup avec les noms suivants :

  - www.hadopi.fr

  - www.amendes.gouv.fr

  - www.facebook.com

Obtenez-vous des réponses pour chacune des requêtes  ? Quelles sont les adresses

#### IPv4 de ces hôtes ?

#### Pare-feu sur W10-XX

Vérifiez l'état d'activation de votre pare-feu pour chaque profil réseau.

#### Configurez le pare-feu pour les Programmes autorisés :

  - Autorisez le Bureau à distance uniquement pour le profil privé

Dans la console Pare-feu et fonctions avancées de sécurité, utilisez la règle prédéfinie vous permettant d’autoriser le ping entre vos postes client.

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
