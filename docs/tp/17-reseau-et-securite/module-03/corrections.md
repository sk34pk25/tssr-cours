# Correction — TP3 — Configuration du NAT Pfsense


Solution-Configuration du
NAT Pfsense
TD3 du Module 1

 Avant de démarrer ce TP, avoir réalisé les TP précédents.

            Durée estimée

              2 heures

Énoncé

Objectifs:

Ce cas pratique, vous donnera une compréhension approfondie de la gestion des accès
réseau et de l'importance de la redirection NAT dans les environnements professionnels.

![TP3, correction, page 1](../../../assets/images/reseau-et-securite/tp3/correction-p01-01.png)

![TP3, correction, page 1](../../../assets/images/reseau-et-securite/tp3/correction-p01-02.png)


Installation de l’infrastructure
Connection au Routeur Formateur
http://192.168.150.100
identifiant: stag
Mdp: stag

Ajouter les routes statiques de vos reseaux privés avec la gateway de votre @IP WAN

Puis tester la connexion internet depuis vos réseaux

Sur votre routeur Pfsense
Mettre les règles du par-feu du TP1 sur la carte WAN
Faire un alias du SRV-MBR

![TP3, correction, page 2](../../../assets/images/reseau-et-securite/tp3/correction-p02-04.png)


![TP3, correction, page 2](../../../assets/images/reseau-et-securite/tp3/correction-p02-05.png)


Ajouter une redirection NAT sur le protocole RDP sur l’Alias de votre serveur SRV-MBR

Sur votre SRV-MBR

Activer le bureau à distance avec le groupe GG-IT

![TP3, correction, page 3](../../../assets/images/reseau-et-securite/tp3/correction-p03-07.png)


![TP3, correction, page 3](../../../assets/images/reseau-et-securite/tp3/correction-p03-08.png)

Client Windows ou depuis la VM CLT-NAT

Récupérer la VM CLT-NAT.ovf puis changer l’@IP comme indiqué dans le fichier

ID :stag

Pwd : P@ssw0rd

![TP3, correction, page 4](../../../assets/images/reseau-et-securite/tp3/correction-p04-10.png)

Entre binôme ou depuis CLT-NAT tester l’accès au bureau à distance depuis le client
windows. Utilser des utilisateurs du groupe GG-IT pour les tests.

![TP3, correction, page 5](../../../assets/images/reseau-et-securite/tp3/correction-p05-12.png)

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté (correction reproduite ci-dessous).

![TP3, correction, page 6](../../../assets/images/reseau-et-securite/tp3/correction-p06-14.png)


![TP3, correction, page 6](../../../assets/images/reseau-et-securite/tp3/correction-p06-15.png)

Note : l’énoncé ouvre le routeur formateur sur http://192.168.150.1 avec le mot de passe P@ssw0rd et redirige le RDP vers l’IP de SRV-MBR. Cette correction ouvre http://192.168.150.100 avec le mot de passe stag et redirige vers un alias.
