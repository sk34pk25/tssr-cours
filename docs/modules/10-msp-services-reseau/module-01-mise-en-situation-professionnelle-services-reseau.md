# Mise en situation professionnelle : services réseau

**Unité :** atelier fil rouge — services réseau

**Source A :** `Module-1.pdf` (Drive TSSR, source unique)

## Contexte et objectif

L’atelier place l’équipe fictive **Support-Terre / TSSRC-Série-EU** dans une mise en situation professionnelle de services réseau. Il réunit des tâches d’infrastructure, de services réseau, d’annuaire et d’administration, selon une progression imposée par l’énoncé.

Les données suivantes restent des variables de laboratoire : `D`, `XY`, `prénomD`, les noms des machines, les adresses WAN, le DNS de l’établissement et le proxy ENI. Elles ne sont pas remplacées ici par des valeurs permanentes.

## 1. Préparer l’infrastructure

L’infrastructure comprend les réseaux **LAN Clients**, **LAN Serveurs** et **WAN**. L’adressage demandé suit la formule `192.168.4×D.0/22`, puis un découpage en quatre sous-réseaux `/24` : le premier est affecté au LAN Clients et le dernier au LAN Serveurs.

Le scénario prévoit un pare-feu pfSense à trois interfaces, avec l’adresse hôte utilisable la plus haute sur les LAN. Il demande trois serveurs (Windows Server 1, Windows Server 2 et Debian sans interface graphique) ainsi que deux clients (Windows 10 et Debian avec interface graphique). Les contrôles portent sur le routage, le filtrage pfSense, le NAT, la connectivité, une résolution DNS provisoire et les dépôts Debian attendus par le scénario.

> La règle pfSense `any` citée par la source relève du contexte de laboratoire ; elle n’est pas une recommandation générale.

## 2. Mettre en place DHCP

Le serveur DHCP est choisi selon la parité de `D`. La distribution concerne uniquement le LAN Clients : la moitié de la plage `/24` est allouable, la passerelle par défaut est transmise, et pfSense sert de relais DHCP si nécessaire.

## 3. Mettre en place le DNS interne

Le serveur DNS dépend lui aussi de la parité de `D`. Il utilise un redirecteur inconditionnel vers le DNS de l’établissement, une zone directe `prénomD.infra.tld` et les enregistrements des trois serveurs. Les zones inverses des LAN Clients et LAN Serveurs sont demandées.

Les vérifications prévues sont la résolution directe, la résolution inverse et le contrôle du SOA.

## 4. Créer le domaine Active Directory

La source demande une nouvelle forêt avec le domaine `prénomD.domaine.tssr`, au niveau fonctionnel annoncé Windows Server 2016. Le DNS est installé sur le contrôleur de domaine et un redirecteur conditionnel est prévu vers le DNS interne. Les clients Windows et le second serveur Windows sont intégrés, puis les UO, utilisateurs et groupes sont créés pour réaliser des tests de connexion par service.

## 5. Donner accès aux ressources du domaine

Le scénario prévoit trois disques de 1 Go, un volume `F:` tolérant à la panne, puis l’arborescence `DATA`, `SERVICES` et `PUBLIC`. Il demande des partages par service, des règles d’accès par service, le contrôle total pour le groupe Informatique et un partage caché `Outils`.

La documentation attendue porte notamment sur le volume et sur les autorisations du service Comptabilité. Les ACL non précisées par la source ne sont pas complétées ici.

## 6. Appliquer les GPO demandées

Les objectifs attestés sont : un fond d’écran commun, l’accès au Panneau de configuration / Paramètres réservé aux administrateurs du domaine, la politique de mot de passe demandée, le mappage de `SERVICES` pour les secrétaires, ainsi que les paramètres relatifs aux pilotes, au redémarrage automatique, à la recherche Internet et à la remontée d’erreurs.

## 7. Prévoir la redondance

La phase de redondance comprend un second DHCP avec des plages complémentaires et un test d’arrêt successif. Elle prévoit aussi un second DNS, ses redirecteurs, une zone secondaire `prénomD.infra.tld` sans résolution inverse sur le second DNS, l’adaptation du DNS des clients, un second contrôleur de domaine et les vérifications de réplication et de connexion.

## 8. Administrer à distance

Le scénario demande SSH sur le serveur Debian, le Bureau à distance sur les serveurs Windows, les fonctionnalités facultatives, RSAT, le Gestionnaire de serveur et les consoles AD/DNS depuis un client Windows. Windows Admin Center est une activité de documentation et de test demandée par la source ; aucune documentation externe n’est ajoutée.

La seule commande textuelle explicitement prescrite est `psr`, lancée avec **Windows+R**, puis `psr`. Une commande PowerShell est demandée pour identifier le DNS du poste de salle, sans que le PDF n’en fournisse la syntaxe : elle n’est donc pas inventée ici.

## Vérifications et livrables

Les contrôles annoncés par l’atelier concernent notamment la connectivité, les services DHCP et DNS, les résolutions directe et inverse, le SOA, les connexions par service, les accès aux partages, les stratégies, les essais de redondance, la réplication et l’administration distante. La documentation attendue fait partie des livrables de la MSP.

## À retenir

Cette unité articule huit phases : infrastructure, DHCP, DNS interne, Active Directory, ressources du domaine, GPO, redondance et administration distante. Les choix conditionnels et les valeurs de laboratoire restent ceux du scénario source.

## Aller plus loin dans l’atelier

- [Index de l’atelier](../../tp/10-msp-services-reseau/module-01/index.md)
- [Énoncé restructuré](../../tp/10-msp-services-reseau/module-01/enonces.md)
- [Fiche de révision](../../revision/10-msp-services-reseau/module-01-mise-en-situation-professionnelle-services-reseau.md)

> Aucun Kahoot canonique ni correction séparée n’est attesté pour cette unité.
