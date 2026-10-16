# Énoncé — Mise en situation professionnelle : services réseau

## Contexte de l’atelier

Dans le scénario fictif **Support-Terre / TSSRC-Série-EU**, réaliser l’infrastructure et les services réseau demandés. Les valeurs `D`, `XY`, `prénomD`, les noms de machines, les adresses WAN, le DNS de l’établissement et le proxy ENI sont des données de laboratoire : les décisions qui en dépendent restent conditionnelles.

## 1. Préparation de l’infrastructure

- Utiliser les réseaux LAN Clients, LAN Serveurs et WAN.
- Partir de `192.168.4×D.0/22`, le découper en quatre `/24`, attribuer le premier au LAN Clients et le dernier au LAN Serveurs.
- Préparer pfSense avec trois interfaces et l’adresse hôte utilisable la plus haute sur les LAN.
- Préparer Windows Server 1, Windows Server 2, Debian sans interface graphique, Windows 10 et Debian avec interface graphique.
- Contrôler le routage, le filtrage pfSense, le NAT, la connectivité, la résolution DNS provisoire et les dépôts Debian demandés.

## 2. DHCP

- Choisir le serveur DHCP selon la parité de `D`.
- Distribuer uniquement sur le LAN Clients.
- Allouer la moitié de la plage `/24`, transmettre la passerelle par défaut et utiliser le relais DHCP pfSense si nécessaire.

## 3. DNS interne

- Choisir le serveur DNS selon la parité de `D`.
- Configurer le redirecteur inconditionnel vers le DNS de l’établissement.
- Créer la zone directe `prénomD.infra.tld`, y enregistrer les trois serveurs et créer les zones inverses des LAN Clients et LAN Serveurs.
- Vérifier les résolutions directe et inverse ainsi que le SOA.

## 4. Domaine Active Directory

- Créer une nouvelle forêt `prénomD.domaine.tssr` au niveau fonctionnel Windows Server 2016.
- Installer le DNS sur le contrôleur de domaine et prévoir le redirecteur conditionnel vers le DNS interne.
- Intégrer les clients Windows et le second serveur Windows.
- Mettre en place les UO, utilisateurs et groupes demandés, puis réaliser les tests de connexion par service.

## 5. Accès aux ressources du domaine

- Utiliser trois disques de 1 Go et créer le volume `F:` tolérant à la panne.
- Construire l’arborescence `DATA`, `SERVICES` et `PUBLIC`.
- Configurer les partages et règles d’accès par service, le contrôle total du groupe Informatique et le partage caché `Outils`.
- Documenter le volume et les autorisations du service Comptabilité demandés par le scénario.

## 6. GPO

- Appliquer le fond d’écran commun demandé.
- Réserver le Panneau de configuration / Paramètres aux administrateurs du domaine.
- Appliquer la politique de mot de passe et le mappage `SERVICES` pour les secrétaires.
- Traiter les paramètres demandés concernant pilotes, redémarrage automatique, recherche Internet et remontée d’erreurs.

## 7. Redondance

- Mettre en place le second DHCP et ses plages complémentaires, puis tester les arrêts successifs.
- Mettre en place le second DNS, ses redirecteurs et la zone secondaire `prénomD.infra.tld`, sans résolution inverse sur le second DNS.
- Adapter le DNS des clients, préparer le second contrôleur de domaine et contrôler réplication et connexion.

## 8. Administration distante

- Activer SSH sur le serveur Debian et le Bureau à distance sur les serveurs Windows.
- Utiliser les fonctionnalités facultatives, RSAT, le Gestionnaire de serveur et les consoles AD/DNS depuis le client Windows conformément au scénario.
- Réaliser l’activité de documentation/test Windows Admin Center demandée par le document source.
- Pour l’enregistrement des actions sous Windows : **Windows+R**, puis `psr`.

Le PDF demande aussi une commande PowerShell afin d’identifier le DNS du poste de salle, mais n’en donne pas la syntaxe.

## Livrables et vérifications

Conserver la documentation demandée par l’atelier et relever les résultats des contrôles : connectivité, DHCP, DNS, résolutions directe et inverse, SOA, accès aux ressources, stratégies, redondance, réplication et administration distante.

> Aucune correction séparée, mot de passe réel, script, configuration, VM, ISO ou autre ressource de laboratoire n’est fourni avec ce document Drive.
