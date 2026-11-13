# Correction — TP9 — Connecter les collaborateurs site à site


Connecter les
collaborateurs site à site
 TD9 du Module 2

 Avant de démarrer ce TP, il faut au moins 2 routeurs pfSense et 2 réseaux LAN derrière
 chaque routeur.

            Durée estimée

             2-3 heures

Énoncé

Objectifs:

La mise en place de cet exercice, vous permettra de mettre en pratique la configuration
d'un VPN site à site avec pfSense, en utilisant le protocole IPsec. Vous acquerrierez une
compréhension approfondie du fonctionnement d'un VPN et des compétences pratiques
en matière de configuration et de dépannage des connexions VPN sécurisées entre sites
distants.

![TP9, correction, page 1](../../../assets/images/reseau-et-securite/tp9/correction-p01-01.png)

![TP9, correction, page 1](../../../assets/images/reseau-et-securite/tp9/correction-p01-02.png)


En binôme sur vos routeurs pfSense:

   •   Configuration du tunnel IPsec

   •

   •
   •
       Création de la Phase 1 (IKE) sur les deux pfSense
       Configuration de la Phase 2 (ESP) sur les deux pfSense

![TP9, correction, page 2](../../../assets/images/reseau-et-securite/tp9/correction-p02-04.png)


![TP9, correction, page 2](../../../assets/images/reseau-et-securite/tp9/correction-p02-05.png)


Définition des réseaux locaux et distants
   •   Mise en place des règles de pare-feu pour le VPN

   •
   •

       Autorisation du trafic IPsec

![TP9, correction, page 3](../../../assets/images/reseau-et-securite/tp9/correction-p03-07.png)


![TP9, correction, page 3](../../../assets/images/reseau-et-securite/tp9/correction-p03-08.png)


![TP9, correction, page 3](../../../assets/images/reseau-et-securite/tp9/correction-p03-09.png)


![TP9, correction, page 3](../../../assets/images/reseau-et-securite/tp9/correction-p03-10.png)


Configuration des règles pour permettre le trafic entre les réseaux locaux

   •   Test et validation de la connexion VPN
   •
       Vérification de l'état du tunnel IPsec
       Test de connectivité entre les réseaux des deux sites

![TP9, correction, page 4](../../../assets/images/reseau-et-securite/tp9/correction-p04-12.png)


![TP9, correction, page 4](../../../assets/images/reseau-et-securite/tp9/correction-p04-13.png)


![TP9, correction, page 4](../../../assets/images/reseau-et-securite/tp9/correction-p04-14.png)


![TP9, correction, page 5](../../../assets/images/reseau-et-securite/tp9/correction-p05-16.png)


Analyse des logs pour confirmer le bon fonctionnement

Solution
Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger (correction reproduite ci-dessous).

![TP9, correction, page 6](../../../assets/images/reseau-et-securite/tp9/correction-p06-18.png)


