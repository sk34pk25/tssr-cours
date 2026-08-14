# Corrections — Module 09 — Assistance avec GLPI

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## M09 - S01 TP-Corrigé_L_exploitation des services

### Sensibilisation à ITIL

#### ITIL - L'exploitation des services

#### TP du Module 09 — Assistance avec GLPI

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 9 et d’avoir réalisé les TP proposés.

#### Durée estimée

#### 3 heures

#### Etape 1 - Création du ticket par le responsable du service

#### Vous ouvrez une session sur GLPI en tant que directeur commercial :

- Login : balon.grejoy
- Mot de passe : password

#### Création du ticket

- Cliquer sur créer un ticket
- Type : demande
- Catégorie : Nouveau Poste Complet
- Lieu : Service Commercial
- Titre : rempli automatiquement (ne pas changer)
- Description : Compléter les informations concernant les salariés

#### Les informations du salarié

- Nom : Targaryan
- Prénom : Deanerys
- Fonction : Commercial Itinérant
- Service : Commercial

#### Vous fermez la session

Pour vérifier, vous pouvez vous connecter avec l’utilisateur « balon.grejoy » pour suivre l’évolution du ticket.

- Une fois que la session est ouverte
- Cliquer sur « Tickets »
- Sélectionner le ticket
- Dans le menu de gauche, sélectionner « Traitement du ticket »
- Vous avez un aperçu de l’évolution du traitement du ticket

#### Vous fermez la session

#### Etape 2 - Traitement du ticket par le support N1

Vous ouvrez une session sur GLPI en tant que technicien de support de niveau 1

- Login : hoster.tully
- Mot de passe : password

Vous ouvrez le ticket et vous l’escaladez vers le groupe des techniciens parc :

- Cliquer sur « Assistance », puis « tickets »
- Dans la liste des tickets, cliquer sur le titre du ticket.

  - « Nouveau poste pour un nouveau salarié »

#### Dans le menu de gauche, sélectionner « Ticket »

- Dans le corps du ticket,
- Dans la zone « Acteur »
- Dans la colonne « Attribué à »
- Supprimer le groupe « GLPI-GRP-Support » en cliquant sur
- Cliquer sur « + » à côté de « Attribué à »

  - Sélectionner « Groupe »
  - Sélectionner « GLPI-GRP-PARC », escalade fonctionnelle

- Sauvegarder le ticket
- Cliquer sur « + » à côté de « Attribué à »

  - Sélectionner « utilisateur »
  - Sélectionner « Tyrion Lannister »

- Sauvegarder le ticket

#### Dans le menu de gauche, sélectionner « Traitement du ticket »

- Cliquer sur « Suivi »
- Dans « nouvel élément — suivi »

  - Saisir « Escalade vers le groupe techniciens parc et envoi à l’administrateur

#### AD pour la création des différents comptes »

  - Cliquer sur « Ajouter »

Fermer la session du technicien de support.

- Pour fermer la session, il faut cliquer sur

Etape 3 - Vérification et sortie du matériel du stock. Vous ouvrez une session sur GLPI en tant que technicien de support Parc.

- Login : jorah.mormont
- Mot de passe : password

#### Vous allez maintenant cliquer sur « Parc »

- Vous effectuez une recherche pour retrouver les éléments suivants :

#### Matériel Nom N° Inventaire Nouveau nom

#### Ordinateurs Dell XPS 15 LAPTOP-0013 ITI-XPS15-006

#### Périphériques

#### (dock) WD19DCS Dock-00006 ITI-WD19DCS-006

#### Moniteurs Dell 24 SE2416H Dell 24 SE2416H-00027 ITI-Dell24-006

#### Téléphones Tel Cisco 7811 TEL-0030 ITI-Cisco7811-006

#### Téléphones IPhoneX MOB-0006 ITI-IphoneX-006

- Pour chaque élément trouvé :

  - Vous le renommez avec le nouveau nom présent dans le tableau.
  - Exemple pour renommer l’ordinateur à suivre.

#### Pour effectuer la rechercher de l’ordinateur :

- Vous cliquez sur « Parc » puis « Ordinateurs »
- Dans la zone de recherche, vous indiquez les éléments suivants :
- Vous récupérez tous les ordinateurs en stock

  - Vous cliquez sur le nom de l’ordinateur « Dell XPS 15 » portant le numéro

#### d’inventaire « Laptop-0013 »

  - La fiche de l’ordinateur s’ouvre.
  - Vous renommez l’ordinateur avec son nouveau nom.

- Vous sauvegardez.

Vous procédez de la même façon avec les différents éléments.

Maintenant que tous les éléments ont été renommés, vous allez les lier pour pouvoir effectuer les déplacements de façon global.

#### Vous allez ouvrir la fiche de l’ordinateur :

- Vous cliquez sur « Parc » puis « Ordinateurs »
- Dans la zone de recherche, vous indiquez les éléments suivants :
- Vous récupérez tous les ordinateurs en stock
- Vous cliquez sur le nom de l’ordinateur « ITI-XPS15-006 » portant le numéro d’inventaire

#### « Laptop-0013 »

- La fiche de l’ordinateur s’ouvre.
- Dans le menu de gauche, vous cliquez sur « Connexions ».

  - Sous « Connecter un élément »
  - Sélectionnez « Moniteur », puis dans le menu qui vient d’appara ître vous

cliquez sur la flèche à l’extrémité droite pour faire apparaître la liste des moniteurs disponible.

  - Vous sélectionnez le moniteur se nommant « ITI-Dell24-006 » puis vous cliquez

sur « connecter ».

  - Vous avez la possibilité d’effectuer des recherches dans le menu déroulant

#### pour filtrer les éléments qui apparaissent dans la liste :

- Procéder de la même façon pour les autres matériels.
- Vous devez obtenir :

Vous déplacez l’ensemble du matériel pour qu’ils soient préparés.

- Dans le menu de gauche, sélectionnez l’onglet « Ordinateur »

  - Vous changez la rubrique statut de « En stock » par « A préparer »
  - Vous changez le lieu :

- De « …&gt;Service Informatique&gt;Stock »
- Par « …&gt;Service Informatique&gt;Stock&gt;Matériels à préparer&gt;A

#### préparer1 »

- Sauvegarder

Vous vérifiez que tous les matériels sont dans le même lieu que l’ordinateur et vous allez

#### changer leur statut

- A partir de la fiche de l’ordinateur, dans le menu de gauche, vous cliquez sur

« Connexions », vous cliquez le nom du moniteur « ITI-Dell24-006 ».

- La fiche de moniteur s’ouvre :

  - Dans le menu de gauche, cliquez sur « Moniteur ».
  - Le lieu doit contenir « …&gt;Service Informatique&gt;Stock&gt;Matériels à préparer&gt;A

préparer 1 ».

  - Modifier le statut en « A préparer ».

- Sauvegarder
- Dans le menu de gauche, cliquez sur « Connexions »

  - Cliquer sur le nom de l’ordinateur « ITI-XPS-006 » pour retourner sur la fiche de

l’ordinateur.

- Vous procédez de la même façon avec les autres matériels.

  - Ils doivent être tous dans le même lieu
  - Ils doivent tous avoir le statut « A préparer »

Vous allez modifier le ticket pour indiquer ce que vous avez fait. Vous ouvrez le ticke t et vous allez sortir le matériel du stock.

- Cliquer sur « Assistance », puis « tickets »
- Dans la liste des tickets, cliquer sur le titre du ticket.

  - « Nouveau poste pour un nouveau salarié »

#### Dans le menu de gauche, sélectionner « Ticket »

- Dans le corps du ticket,

  - Dans la zone « Description »
  - Vous remplissez les champs suivants :

- Matériel disponible : OK

  - Dans la zone « Acteur »
  - Vérifier qu’il y a le groupe « GLPI-GRP-PARC » et l’utilisateur « Tyrion Lannister »

de présent.

- Sauvegarder

#### Vous allez rajouter le matériel au ticket

- Dans le menu de gauche, sélectionner « Eléments »
- A partir de la « recherche complète », vous allez rajouter les éléments au ticket.
- Vous devez obtenir :

#### Dans le menu de gauche, sélectionner « Traitement du ticket »

- Cliquer sur « Suivi »
- Dans « nouvel élément — suivi »

  - Saisir « Sortie du matériel du stock, prêt à être installé »
  - Cliquer sur « Ajouter »

Fermer la session du technicien de parc.

Etape 4 - Création des comptes par l’administrateur Active Directory.

- Vous ouvrez une session sur GLPI en tant que technicien de support de niveau 1.
- Login : tyrion.lannister
- Mot de passe : password

Vous ouvrez le ticket pour gérer l’installation du système d’exploitation et des logiciels.

- Cliquer sur « Assistance », puis « tickets »
- Dans la liste des tickets, cliquer sur le titre du ticket.

  - « Nouveau poste pour un nouveau salarié »

Dans le menu de gauche, sélectionner « Ticket ».

- Dans le corps du ticket,

  - Dans la zone « Description »
  - Vous remplissez les champs suivants :

- Compte GLPI créé : OK
- Compte Active Directory créé : OK
- Compte Office 365 créé : OK
- Badge créé : OK

  - Dans la zone « Acteur »

- Supprimer l’utilisateur « Tyrion Lannister » pour qu’il ne reste que le

groupe « GLPI-GRP-PARC ».

- Sauvegarder

Vous modifiez le suivi du ticket.

- Dans le menu de gauche, sélectionner « Traitement du ticket »
- Cliquer sur « Suivi »
- Dans « nouvel élément — suivi »

  - Saisir « Création des différents comptes effectués »
  - Cliquer sur « Ajouter »

Fermer la session de l’administrateur Active Directory.

#### Etape 5 - Préparation du matériel

Vous considérez que le matériel a été testé et que le système d’exploitation ainsi que les logiciels ont été installés. Vous allez gérer que les informations côté ticket et apporter des modifications à l’ordinateur. Vous ouvrez une session sur GLPI en tant que technicien de support Parc.

- Login : barristan.selmy
- Mot de passe : password

Vous ouvrez le ticket pour gérer l’installation du système d’exploitation et des logiciels.

- Cliquer sur « Assistance », puis « tickets »
- Dans la liste des tickets, cliquer sur le titre du ticket.

  - « Nouveau poste pour un nouveau salarié »

#### Dans le menu de gauche, sélectionner « Eléments »

- Vous accédez à la liste des objets liés au ticket
- Cliquer sur le nom de l’ordinateur « ITI-XPS15-006 » pour accéder à la fiche.

#### Dans le menu de gauche, sélectionner « Systèmes d’exploitation »

- Vous remplissez les différents champs et vous sauvegardez pour obtenir :
- Vous venez de renseigner le système d’exploitation qui a été installé.

#### Dans le menu de gauche, sélectionner « Logiciels »

- Vous allez ajouter les logiciels installés sur l’ordinateur.
- Pour installer « 7Zip » :

  - En haut de la fenêtre, dans "Logiciels", sélectionner « 7Zip 64bits »
  - Dans le menu qui est apparu, sélectionner « 7Zip 21.06 — En stock »
  - Cliquer sur « Installer », vous venez de lier un logiciel à l’ordinateur.
  - Vous installez ensuite la licence.
  - En bas de la fenêtre, dans "Licences", sélectionner « 7Zip64 bits »
  - Dans le menu qui est apparu, sélectionner « 7Zip 21.06 »
  - Cliquer sur « Ajouter »

Vous procédez de la même façon pour installer les autres logiciels.

- Liste des logiciels à installer

#### Logiciels Licences

#### 7Zip 64bits 7Zip 21.06 — En utilisation 7Zip 64bits 7Zip 21.06

#### Acrobat Reader DC Acrobat DC 2021.007 —

#### En utilisation Acrobat Reader DC Acrobat DC 2021.007

#### Chrome 64bits Chrome 96.0.4664.110 —

#### En utilisation Chrome 64bits Chrome 96.0.4664.110

#### Java 64bits Java 8 Update 311 —

#### En utilisation Java 64bits Java 8 Update 311

#### OpenVPN OpenVPN 2.5.5-

#### En utilisation OpenVPN OpenVPN 2.5.5

#### Pack Office 2016 Standard —

#### En utilisation Pack Office 2016 Standard

#### Dans le menu de gauche, sélectionner « Ordinateur »

- Vous modifiez le statut de l’ordinateur

  - Vous remplacez « En stock &gt; A préparer » par « En stock &gt; A livrer »

- Vous modifiez le lieu

  - Vous remplacez « &gt;Matériels à préparer &gt; A préparer 1 » par « &gt;Matériels à

#### livrer &gt; A livrer 1 »

- Vous sauvegardez

Vous faites les mêmes changements sur les autres éléments.

- Pour retrouver les éléments plus rapidement, passer par le ticket.
- Comme les éléments sont liés, le changement a dû être pris en compte

  - Vérifier le lieu

- Modifier le statut
- Sauvegarder les modifications avant de changer de matériel.

Vous modifiez le suivi du ticket.

- Cliquer sur « Assistance », puis « tickets »
- Dans la liste des tickets, cliquer sur le titre du ticket.

  - « Nouveau poste pour un nouveau salarié »

#### Dans le menu de gauche, sélectionner « Ticket »

- Dans le corps du ticket,
- Dans la zone « Description »

  - Vous remplissez les champs suivants :

- Prises électriques installées et créées : OK
- Prises réseaux installées et testées : OK
- Mobilier installé : OK
- Matériel installé : OK

  - Dans la zone « Acteur »

- Vérifier qu’il y a le groupe « GLPI-GRP-PARC ».
- Sauvegarder

#### Dans le menu de gauche, sélectionner « Traitement du ticket »

- Cliquer sur « Suivi »
- Dans « nouvel élément — suivi »

  - Saisir « Matériel vérifié et configuré, prêt à être livré »

- Cliquer sur « Ajouter »

#### Etape 6 - Livraison et installation du matériel

Vous ouvrez une session sur GLPI en tant que technicien de support Parc.

- Login : jorah.mormont
- Mot de passe : password

Vous ouvrez le ticket pour gérer la livraison du matériel.

- Le matériel a été livré, installé et configuré, le technicien parc effectue les modifications

nécessaires dans GLPI.

- Cliquer sur « Assistance », puis « tickets »
- Dans la liste des tickets, cliquer sur le titre du ticket.

  - « Nouveau poste pour un nouveau salarié »

#### Dans le menu de gauche, sélectionner « Eléments »

- Vous accédez à la liste des objets liés au ticket
- Cliquer sur le nom de l’ordinateur « ITI-XPS15-006 » pour accéder à la fiche.

#### Dans le menu de gauche, sélectionner « Ordinateur »

- Modifier le statut de l’ordinateur

  - Remplacer « En stock &gt; A livrer » par « En utilisation »

- Modifier le lieu

  - Remplacer « &gt;Matériels à livrer &gt; A livrer 1 » par « Service Commercial »

- Modifier l’utilisateur

  - Sélectionner l’utilisatrice « Deanerys Targaryan »

- Sauvegarder
- Tout le matériel est déplacé dans le nouveau lieu et l’utilisatrice est mise à jour sur toutes

les fiches des matériels. Dans le menu de gauche, sélectionner « Connexions ».

- Cliquer sur « ITI-Cisco-7811-006 », vous ouvrez la fiche du téléphone IP.
- Modifier le statut

  - Remplacer « En stock &gt; A livrer » par « En utilisation »
  - Sauvegarder

Dans le menu de gauche, sélectionner « Ports réseau ».

- Cliquez sur le « 1 » en début de ligne.

  - Dans la liste déroulante « Prise réseau », vous sélectionnez « S231-161 »
  - Dans la liste déroulante « Connecté à », vous sélectionnez :

- « Matériel réseau »
- « Switch-Rezo-C2960L-Utilisateurs »
- « Switch-Rezo-C2960L-Utilisateurs - Le port eth26 »

  - Vous sauvegardez

En faisant cette manipulation, vous venez d’indiquer sur quelle prise murale est branché le téléphone IP et vous avez indiqué sur quel port de quel switch est connectée la prise murale. Pour revenir sur la fiche du téléphone.

- Cliquer sur le nom du téléphone en haut de la fiche.

Pour revenir sur la fiche de l’ordinateur.

- Dans le menu de gauche, sélectionner « Connexions ».
- Cliquer sur le nom de l’ordinateur « ITI-XPS15-006 ».

Sur la fiche de l’ordinateur.

- Dans le menu de gauche, sélectionner « Connexions » pour faire appara ître la liste du

matériel.

- Cliquer sur le nom du moniteur « ITI-Dell24-006 » pour accéder à la fiche du moniteur.

#### Sur la fiche du moniteur

- Modifier le statut

  - Remplacer « En stock &gt; A livrer » par « En utilisation »
  - Sauvegarder

Pour revenir sur la fiche de l’ordinateur.

- Dans le menu de gauche, sélectionner « Connexions ».
- Cliquer sur le nom de l’ordinateur « ITI-XPS15-006 ».

Sur la fiche de l’ordinateur.

- Dans le menu de gauche, sélectionner « Connexions » pour faire appara ître la liste du

matériel.

- Cliquer sur le nom du périphérique « ITI-WDS19DCS-006 » pour accéder à la f iche du

dock. Sur la fiche du dock.

- Dans le menu de gauche, sélectionner « Périphérique ».
- Modifier le statut

  - Remplacer « En stock &gt; A livrer » par « En utilisation »
  - Sauvegarder

Dans le menu de gauche, sélectionner « Ports réseau ».

- Cliquez sur le « 1 » en début de ligne.

  - Dans la liste déroulante « Connecté à », vous sélectionnez :

- « Téléphone »
- « ITI-Cisco7811-006 »
- « ITI-Cisco7811-006 — Le port eth02 — Prise réseau S331-031 »»

  - Sauvegarder

Pour revenir sur la fiche du dock.

- Cliquer sur le nom du dock en haut de la fiche.

En faisant cette manipulation, vous venez d’indiquer que le câble Ethernet du dock est connecté au micro switch du téléphone pour accéder au réseau de l’entreprise. Pour revenir sur la fiche de l’ordinateur.

- Dans le menu de gauche, sélectionner « Connexions ».
- Cliquer sur le nom de l’ordinateur « ITI-XPS15-006 ».

Sur la fiche de l’ordinateur.

- Dans le menu de gauche, sélectionner « Connexions » pour faire appara ître la liste du

matériel.

- Cliquer sur le nom du téléphone « ITI-IphoneX-006 » pour accéder à la fiche du

téléphone. Sur la fiche du téléphone.

- Dans le menu de gauche, sélectionner « Téléphone ».
- Modifier le statut

  - Remplacer « En stock &gt; A livrer » par « En utilisation »
  - Sauvegarder

Pour revenir sur la fiche de l’ordinateur.

- Dans le menu de gauche, sélectionner « Connexions ».
- Cliquer sur le nom de l’ordinateur « ITI-XPS15-006 ».

Sur la fiche de l’ordinateur.

- Dans le menu de gauche, vous cliquez sur « Connexions ».

  - Sous « Connecter un élément »
  - Sélectionner « Imprimantes »
  - Sélectionner l’imprimante nommée « Com-Lex-MS310DN-001 — IMP-0005 »
  - Cliquer sur « Connecter »

En faisant cette manipulation, vous venez d’indiquer quelle imprimante peut utiliser l’utilisateur de l’ordinateur. Vous obtenez ceci.

Vous modifiez le suivi du ticket.

- Cliquer sur « Assistance », puis « tickets »
- Dans la liste des tickets, cliquer sur le titre du ticket.

  - « Nouveau poste pour un nouveau salarié »

#### Dans le menu de gauche, sélectionner « Ticket »

- Dans le corps du ticket,
- Dans la zone « Description »

  - Vous remplissez les champs suivants :

- Matériel livré : OK

  - Sauvegarder

#### Dans le menu de gauche, sélectionner « Traitement du ticket »

- Cliquer sur « Suivi »
- Dans « nouvel élément — suivi »

  - Saisir « Matériel livré et installé »
  - Cliquer sur « Ajouter »

Dans le menu « Ajouter : », cliquer sur « Solution ».

- Gabarit de solution : Livraison de matériels
- Type de solution : Livraison
- Enregistrer et ajouter à la base de connaissances : NON
- Description : prérempli
- Ajouter
- Le statut du ticket passe à « Résolu »

Fermer la session.

Etape 7 - Clôture du ticket par le responsable du service.

#### Vous ouvrez une session sur GLPI en tant que directeur commercial :

- Login : balon.grejoy
- Mot de passe : password

#### Clôturer le ticket

- Cliquer sur « Tickets »
- Sélectionner le ticket
- Dans le menu de gauche, sélectionner « Traitement du ticket »

  - Vous avez un aperçu de l’évolution du traitement du ticket.
  - Cliquer sur « Approuver la solution » pour clôturer le ticket.

- Dans le menu de gauche, sélectionner « Ticket »

  - Le statut de ticket est passé à « Clos ».

Fermer la session.
