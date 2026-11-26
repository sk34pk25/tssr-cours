# Module 01 — MSP Systèmes clients

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Correction · MSP_Systemes_clients_solution_172.16.0.128-26 · 27 pages transcrites
2. Support · NP_MDP_NoteTech · 11 pages transcrites
3. Énoncé · Enoncé MSP - Systèmes clients · 14 pages transcrites
4. Correction · Modèle_Solution_MSP · 143 pages transcrites
5. Énoncé · Résultats_séminaire.xlsx · document texte
6. Correction · création_groupes.txt · document texte
7. Correction · création_utilisateur.txt · document texte
8. Correction · groupes.csv · document texte
9. Correction · Résultats_séminaire_corrigé.xlsx · document texte
10. Correction · script_groupes.ps1 · document texte
11. Correction · script_utilisateurs.ps1 · document texte
12. Correction · Tableau_récap.xlsx · document texte
13. Correction · utilisateurs.csv · document texte
14. Correction · MSP_Systemes_clients_solution_172.16.0.128-26.docx · document texte
15. Correction · README.txt · document texte
16. Correction · Resultats_seminaire_solution_complete.xlsx · document texte
17. Correction · 01_utilisateurs_groupes.sh · document texte
18. Correction · 02_sauvegarde_quotidienne.sh · document texte
19. Correction · 03_lvm_opt.sh · document texte
20. Correction · 01_direction_comptabilite.cmd · document texte
21. Correction · 02_informatique_logistique.ps1 · document texte
22. Correction · 03_preparer_profils.ps1 · document texte
23. Correction · 04_partage_support_info.ps1 · document texte
24. Correction · 05_deplacer_spool.ps1 · document texte

**Visuel externe**

```mermaid
flowchart TD
    N1["Correction · MSP_Systemes_clients_solution_172.16.0.128-26 · 27 pages transcrites"]
    N2["Support · NP_MDP_NoteTech · 11 pages transcrites"]
    N3["Énoncé · Enoncé MSP - Systèmes clients · 14 pages transcrites"]
    N4["Correction · Modèle_Solution_MSP · 143 pages transcrites"]
    N5["Énoncé · Résultats_séminaire.xlsx · document texte"]
    N6["Correction · création_groupes.txt · document texte"]
    N7["Correction · création_utilisateur.txt · document texte"]
    N8["Correction · groupes.csv · document texte"]
    N9["Correction · Résultats_séminaire_corrigé.xlsx · document texte"]
    N10["Correction · script_groupes.ps1 · document texte"]
    N11["Correction · script_utilisateurs.ps1 · document texte"]
    N12["Correction · Tableau_récap.xlsx · document texte"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
    N8 --> N9
    N9 --> N10
    N10 --> N11
    N11 --> N12
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Correction · MSP_Systemes_clients_solution_172.16.0.128-26 · 27 pages transcrites

!!! note "À retenir"
    Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ».

Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

### MSP SYSTÈMES CLIENTS

### Solution complète, expliquée et adaptée

### Réseau choisi : 172.16.0.128/26

!!! note "À retenir"
    Basé sur l’énoncé actuel, la note technique ANSSI, les ressources, les scripts et le corrigé modèle fournis.

Basé sur l’énoncé actuel, la note technique ANSSI, les ressources, les scripts et le corrigé modèle fournis.

#### Les noms et logins personnels restent à remplacer avant exécution.

#### Schéma réseau du document

| Machine | Adresse IPv4 |
| --- | --- |
| W10-VosInitiales | 172.16.0.189 |
| DEB10-VosInitiales | 172.16.0.188 |
| W10-Binôme | 172.16.0.187 |
| DEB10-Binôme | 172.16.0.186 |
| Réseau et masque | 172.16.0.128/26 — 255.255.255.192 |
| Passerelle retenue dans cette solution | 172.16.0.190 |

### Sommaire

!!! note "À retenir"
    Sommaire automatique : mettre à jour le champ dans Word si nécessaire.

**Visuel externe**

```mermaid
flowchart LR
    N1["Analyse du dossier et règles de priorité"]
    N2["Paramètres à personnaliser et plan d’adressage"]
    N3["Partie 1 - Installation des systèmes"]
    N4["Partie 2 - Utilisateurs et environnement"]
    N5["Partie 3 - Stockage, partages et imprimantes"]
    N6["Partie 4 - Configuration avancée"]
    N7["Partie 5 - Installation des applications"]
    N8["Partie 6 - Sauvegarde et restauration"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

Sommaire automatique : mettre à jour le champ dans Word si nécessaire.

1. Analyse du dossier et règles de priorité

1. Paramètres à personnaliser et plan d’adressage

1. Partie 1 - Installation des systèmes

1. Partie 2 - Utilisateurs et environnement

1. Partie 3 - Stockage, partages et imprimantes

1. Partie 4 - Configuration avancée

1. Partie 5 - Installation des applications

1. Partie 6 - Sauvegarde et restauration

1. Partie 7 - LVM, montages avancés et tableur

1. Matrice de validation et livrables fournis

### 1. Analyse complète du dossier

!!! note "À retenir"
    Tous les fichiers accessibles de l’archive ont été inventoriés et exploités.

Tous les fichiers accessibles de l’archive ont été inventoriés et exploités. Les exécutables ont été identifiés et leurs métadonnées/version ont été contrôlées, mais ils n’ont pas été lancés dans cet environnement Linux.

| Catégorie | Fichier | Analyse / utilisation |
| --- | --- | --- |
| Sujet | Enoncé MSP - Systèmes clients.pdf | 14 pages. Référence prioritaire pour toutes les tâches et contraintes. |
| Documentation | NP_MDP_NoteTech.pdf | 11 pages. Recommandations ANSSI : mots de passe distincts, non liés à l’identité, robustes, temporaires à changer, stockage prudent. |
| Ressource | 7zip.exe | Installateur 7-Zip 19.00 x64 ; installation silencieuse avec /S. |
| Ressource | Pilote_HP_LaserJet_M9050_MFP.exe | Pilote HP pour l’imprimante fictive. Installation via port TCP/IP standard. |
| Ressource | Pilote_Xerox_Office_Color_C60C70.exe | Archive auto-extractible Xerox C60/C70 ; utilisée pour le pool et les files prioritaires. |
| Tableur | Résultats_séminaire.xlsx | Classeur à compléter avec SOMME, MOYENNE, MAX, MIN, NBVAL et SI/ET. |
| Corrigé | Modèle_Solution_MSP.pdf | 143 pages. Référence de méthode et de chemins graphiques, adaptée au sujet actuel. |
| Scripts / CSV | création_groupes, création_utilisateur, groupes.csv, utilisateurs.csv | Méthode d’import et de création en masse. Plusieurs erreurs de guillemets, d’encodage et de syntaxe ont été corrigées dans les scripts fournis avec cette solution. |
| Tableurs corrigés | Résultats_séminaire_corrigé.xlsx, Tableau_récap.xlsx | Valeurs et formules utilisées pour contrôler les résultats et la convention de nommage. |

#### 1.1 Règle de priorité appliquée

#### Priorité documentaire

!!! note "À retenir"
    2) Méthodes du cours et du corrigé modèle.

1. Énoncé actuel. 2) Méthodes du cours et du corrigé modèle. 3) Amélioration technique uniquement lorsque la méthode fournie est erronée, dangereuse ou ne satisfait pas le sujet actuel.

#### 1.2 Incohérences détectées et décision retenue

| Point | Contradiction | Décision appliquée |
| --- | --- | --- |
| Réseau VMware | Le sujet actuel demande Bridged ; le corrigé modèle et le tableau récap utilisent Host-only. | Utiliser Bridged, car le sujet actuel est prioritaire. |
| Mémoire Debian | Le sujet actuel impose 2048 Mo ; le corrigé modèle montre 512 Mo. | Utiliser 2048 Mo. |
| Nombre de comptes | Le texte annonce 9 employés, mais le tableau contient 10 personnes. | Créer les 10 comptes du tableau. |

| Point | Contradiction | Décision appliquée |
| --- | --- | --- |
| Expiration des mots de passe | « N’expirent jamais » puis politique Windows avec changement tous les 25 jours. | Sous Windows, appliquer 25 jours car cette contrainte est plus précise et vérifiable. Sous Debian, conserver sans expiration sauf changement initial du prestataire. |
| Adresses imprimantes | Le corrigé modèle emploie des IP proches des postes ; le sujet actuel impose des troisièmes octets binaires 10101000 et 10101001. | Appliquer exactement le sujet actuel : 168 et 169 en décimal. |
| deb-src | Le corrigé écrit parfois « décommenter » alors que le sujet demande de commenter. | Commenter les lignes deb-src et la source DVD. |
| Sauvegarde Debian | Le sujet demande tous les jours ; le corrigé planifie seulement du lundi au vendredi. | Cron quotidien : 30 12 * * *. |
| SMB | Le corrigé évoque l’activation d’un ancien support SMB. | Utiliser SMB 3.0 avec cifs-utils ; ne pas activer SMB1. |
| Groupe documentation | Le sujet le demande sans le définir dans la liste des services. | Créer un groupe supplémentaire documentation et appliquer le bit setgid à /services. |

### 2. Paramètres à personnaliser et plan IP

#### 2.1 Remplacements obligatoires

| Variable | À remplacer par | Exemple |
| --- | --- | --- |
| <INITIALES> | Vos initiales | AB |
| <VOTRE_LOGIN> | Première lettre du prénom + nom | jdupont |
| <VOTRE_PRENOM_NOM> | Votre identité | Jean Dupont |
| <LOGIN_BINOME> | Login de votre binôme | mmartin |
| <PRENOM_NOM_BINOME> | Identité du binôme | Marie Martin |

#### Avant toute exécution

!!! note "À retenir"
    Remplacer les valeurs entre chevrons dans les scripts.

!!! warning "Attention"
    Ne jamais exécuter une commande de disque avant d’avoir contrôlé le numéro du disque avec list disk, detail disk, lsblk et fdisk -l.

Remplacer les valeurs entre chevrons dans les scripts. Ne jamais exécuter une commande de disque avant d’avoir contrôlé le numéro du disque avec list disk, detail disk, lsblk et fdisk -l.

#### 2.2 Calcul du sous-réseau 172.16.0.128/26

!!! note "À retenir"
    Un préfixe /26 laisse 6 bits pour les hôtes : 2^6 = 64 adresses.

Un préfixe /26 laisse 6 bits pour les hôtes : 2^6 = 64 adresses. Le bloc commence à .128 et se termine à .191. La première adresse est le réseau et la dernière est le broadcast, donc 62 adresses sont utilisables.

| Élément | Valeur | Pourquoi |
| --- | --- | --- |
| Adresse réseau | 172.16.0.128 | Identifie le sous-réseau ; ne jamais attribuer à une machine. |
| Masque | 255.255.255.192 | Équivalent décimal du /26. |
| Première IP utilisable | 172.16.0.129 | Premier hôte possible. |
| Dernière IP utilisable / passerelle retenue | 172.16.0.190 | Le corrigé modèle place la passerelle sur la dernière IP utilisable. |
| Broadcast | 172.16.0.191 | Adresse de diffusion ; ne jamais attribuer. |

#### Hypothèse de passerelle

La passerelle 172.16.0.190 reprend la méthode du corrigé modèle. Si le formateur ou le DHCP fournit une autre passerelle/DNS, conserver les IP des postes mais remplacer la passerelle et le DNS par les valeurs réellement fournies.

### Schéma et adresses retenues

| Machine | Adresse IPv4 |
| --- | --- |
| W10-VosInitiales | 172.16.0.189 |
| DEB10-VosInitiales | 172.16.0.188 |
| W10-Binôme | 172.16.0.187 |
| DEB10-Binôme | 172.16.0.186 |
| Réseau et masque | 172.16.0.128/26 — 255.255.255.192 |
| Passerelle retenue dans cette solution | 172.16.0.190 |

#### 2.3 Adresses retenues

| Équipement | Adresse | Masque | Passerelle | DNS conseillé |
| --- | --- | --- | --- | --- |
| W10-<INITIALES> | 172.16.0.189 | 255.255.255.192 | 172.16.0.190 | 172.16.0.190 ou DNS fourni |
| DEB10-<INITIALES> | 172.16.0.188 | 255.255.255.192 | 172.16.0.190 | 172.16.0.190 ou DNS fourni |
| W10 du binôme | 172.16.0.187 | 255.255.255.192 | 172.16.0.190 | idem |
| Debian du binôme | 172.16.0.186 | 255.255.255.192 | 172.16.0.190 | idem |

Les adresses hautes sont retenues pour reproduire la logique du corrigé modèle et limiter le risque d’utiliser les premières adresses souvent réservées. Il faut néanmoins vérifier la plage DHCP avant de les fixer.

#### 2.4 Adresses fictives des imprimantes

101010002 = 168 et 101010012 = 169. Le sujet impose de conserver le dernier octet du poste concerné.

| Périphérique | Calcul | Adresse |
| --- | --- | --- |
| HP LaserJet M9050 MFP | 172.16 + 168 + dernier octet W10 (.189) | 172.16.168.189 |
| Xerox physique 1 | 172.16 + 168 + dernier octet Debian (.188) | 172.16.168.188 |
| Xerox physique 2 | 172.16 + 169 + dernier octet Debian (.188) | 172.16.169.188 |

#### Pourquoi ces IP sont hors du /26 ?

Elles sont explicitement annoncées comme fictives. Elles servent à créer les ports TCP/IP et à démontrer la configuration d’impression ; elles ne sont pas destinées à répondre au ping sur votre sous-réseau.

#### 2.5 Tableau des machines virtuelles

| Machine | CPU | Mémoire | Disques | Réseau | Système |
| --- | --- | --- | --- | --- | --- |
| W10-<INITIALES> | 2 vCPU | 4 Go conseillés (2 Go minimum) | 32 Go système + 40 Go données + 60 Go sauvegarde si nécessaire | Bridged | Windows 10 Professionnel 64 bits |
| DEB10-<INITIALES> | 1 vCPU | 2048 Mo | 20 Go système + 40 Go données + 2 x 20 Go pour LVM | Bridged | Debian 10 avec environnement graphique |

### 3. Partie 1 - Installation des systèmes

#### 3.1 Préparation VMware

1. Créer W10-<INITIALES> et DEB10-<INITIALES> dans des dossiers distincts.
2. Ajouter immédiatement les deux disques demandés, mais installer chaque système uniquement sur le premier disque.

1. Configurer l’interface réseau en Bridged. Ne pas utiliser Host-only malgré le corrigé modèle.
2. Monter l’ISO Windows 10 Professionnel la plus récente et l’ISO DVD Debian 10.x.
3. Créer un snapshot machine éteinte après chaque grande étape : installation, utilisateurs, stockage, imprimantes.

#### Pourquoi les snapshots machine éteinte ?

Ils permettent un retour fiable avant une opération risquée sur les partitions, /home, /var/log, le swap ou le spool d’impression.

#### 3.2 Installation de Windows 10 Professionnel

1. Démarrer sur l’ISO et sélectionner Windows 10 Professionnel.
2. Choisir l’installation personnalisée et sélectionner uniquement le disque de 32 Go.
3. Créer le compte administrateur initial, appliquer les mises à jour de pilotes nécessaires, puis renommer le poste W10-<INITIALES>.

1. Configurer IPv4 statiquement avec 172.16.0.189/26, passerelle 172.16.0.190 et le DNS retenu.
2. Arrêter Windows Update selon la méthode du cours, puis appliquer la stratégie locale qui interdit la connexion aux emplacements Windows Update sur Internet.

#### Chemins de configuration

```
services.msc
Service : Windows Update (wuauserv)
Type de démarrage : Manuel
État : Arrêté
```

```
gpedit.msc
Configuration ordinateur > Modèles d’administration > Composants Windows > Windows Update
Activer : Ne pas se connecter aux emplacements Internet Windows Update
```

#### Vérification

```
hostname
ipconfig /all
sc query wuauserv
```

#### Pourquoi arrêter le service et ajouter une stratégie ?

Le service arrêté satisfait la méthode du corrigé. La stratégie évite qu’un utilisateur ou une tâche ne relance ensuite une connexion aux serveurs Microsoft.

#### 3.3 Installation de Debian 10

1. Démarrer l’installation graphique depuis l’ISO DVD.
2. Nommer la machine DEB10-<INITIALES> et configurer l’adresse 172.16.0.188/26.

1. Choisir le partitionnement manuel et placer les partitions dans l’ordre indiqué ci-dessous afin que le swap soit suivi par l’espace libre.

1. Conserver les systèmes de fichiers proposés par l’installateur pour chaque point de montage.
2. Laisser les paquets par défaut, conserver l’environnement graphique et choisir ftp.fr.debian.org comme miroir français.

| Partition | Taille | Point de montage / type | Remarque |
| --- | --- | --- | --- |
| /dev/sda1 | 512 Mo | /boot | Système de fichiers par défaut de l’installateur. |
| /dev/sda2 | 17 Go | / | Racine du système. |
| /dev/sda3 | 1 Go | /home | Sera remplacée plus tard par PROFILS. |
| /dev/sda4 | 256 Mo | swap | À agrandir à 1 Go avec l’espace libre contigu. |
| Espace non alloué | environ 1 Go ou plus | aucun | Conservé pour agrandir le swap. |

#### Point important

Le numéro réel des partitions peut varier. Dans toutes les commandes ultérieures, utiliser lsblk -f et swapon -- show plutôt que de recopier aveuglément /dev/sda4.

#### 3.4 Configuration réseau et tests

Sous Windows, utiliser les propriétés IPv4 de la carte réseau. Sous Debian graphique, utiliser NetworkManager. La carte doit être désactivée/réactivée après modification si l’adresse ne se met pas à jour.

```
# Windows
ipconfig /all
ping 172.16.0.188
ping 172.16.0.187
ping 172.16.0.186
```

```
# Debian
ip -br a
ip route
cat /etc/resolv.conf
ping -c 4 172.16.0.189
ping -c 4 172.16.0.187
ping -c 4 172.16.0.186
```

Si le ping vers Windows échoue, autoriser la règle prédéfinie « Partage de fichiers et d’imprimantes (Demande d’écho - Trafic entrant ICMPv4) » dans le pare-feu, plutôt que d’ouvrir tous les protocoles.

#### Contrôle à conserver dans la procédure

Capturer les quatre adresses, le masque /26, la passerelle, puis un ping réussi entre vos deux machines et vers les deux machines du binôme.

#### Commandes de vérification

```
ipconfig /all
ip -br a
ping ...
```

### 4. Partie 2 - Utilisateurs et environnement

#### 4.1 Convention de nommage et comptes

Convention commune aux deux systèmes : groupes locaux en minuscules sans accent, préfixés par l_. Les groupes de service sont l_direction, l_commercial, l_comptabilite, l_informatique et l_logistique. Le groupe documentation est ajouté pour satisfaire la consigne de /services.

| Service | Nom | Login |
| --- | --- | --- |
| Direction | Rick Grimes | rgrimes |
| Commercial | Daryl Dixon | ddixon |
| Commercial | Gabriel Stokes | gstokes |
| Commercial | Maggie Greene | mgreene |
| Comptabilité | Eugene Porter | eporter |
| Comptabilité | Carol Peletier | cpeletier |
| Informatique | Vous-même | <VOTRE_LOGIN> |
| Informatique | Votre binôme / prestataire | <LOGIN_BINOME> |
| Logistique | Rosita Espinosa | respinosa |
| Logistique | Morgan Jones | mjones |

#### Mots de passe

Utiliser un mot de passe temporaire unique d’au moins 12 caractères, sans nom/prénom, mélangeant plusieurs types de caractères. Le fournir de manière sûre et le changer à la première connexion lorsque demandé. Ne pas réutiliser le même mot de passe entre Windows et Debian.

#### 4.2 Création sous Windows selon les trois méthodes imposées

#### Direction et comptabilité - Invite de commandes

```
net localgroup l_direction /add /comment:"Groupe local du service Direction"
net localgroup l_comptabilite /add /comment:"Groupe local du service Comptabilite"
net user rgrimes * /add /fullname:"Rick Grimes" /comment:"Direction" /expires:never
net localgroup l_direction rgrimes /add
net user eporter * /add /fullname:"Eugene Porter" /comment:"Comptabilite" /expires:never
net localgroup l_comptabilite eporter /add
net user cpeletier * /add /fullname:"Carol Peletier" /comment:"Comptabilite - interimaire" 
/expires:never
net localgroup l_comptabilite cpeletier /add
net user cpeletier /times:L-V,09:00-12:00
```

Le caractère * demande le mot de passe sans l’écrire dans le script. Le fichier 01_direction_comptabilite.cmd fourni reprend ces commandes.

#### Informatique et logistique - PowerShell

```
$pwd = Read-Host 'Mot de passe temporaire' -AsSecureString
New-LocalGroup -Name 'l_informatique' -Description 'Service Informatique'
New-LocalUser -Name '<VOTRE_LOGIN>' -FullName '<VOTRE_PRENOM_NOM>' -Description 'Informatique - 
administrateur' -Password $pwd
```

```
Add-LocalGroupMember -Group 'l_informatique' -Member '<VOTRE_LOGIN>'
Add-LocalGroupMember -Group 'Administrateurs' -Member '<VOTRE_LOGIN>'
```

Utiliser le script 02_informatique_logistique.ps1 pour les quatre comptes. Il demande les mots de passe de manière sécurisée et ajoute les deux membres informatiques au groupe Administrateurs.

#### Commercial - Interface graphique

**Visuel externe**

```mermaid
flowchart LR
    N1["Exécuter lusrmgr.msc."]
    N2["Créer le groupe l_commercial avec une description explicite."]
    N3["Ajouter les trois comptes au groupe l_commercial."]
    N4["Vérifier les membres depuis les propriétés du groupe."]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

1. Exécuter lusrmgr.msc.
2. Créer le groupe l_commercial avec une description explicite.
3. Dans Utilisateurs, créer ddixon, gstokes et mgreene avec leur nom complet et la description Commercial.
4. Ajouter les trois comptes au groupe l_commercial.
5. Vérifier les membres depuis les propriétés du groupe.

#### 4.3 Dossier Procédures sur le Bureau

1. Créer C:\Users\Default\Desktop\Procédures.
2. Créer le fichier Règlement intérieur.txt dans ce dossier.
3. Le profil Default sert de modèle aux futurs profils. Pour les profils déjà ouverts, recopier le dossier manuellement ou exécuter 03_preparer_profils.ps1.

#### Pourquoi Default ?

Un simple dossier créé dans le Bureau de l’administrateur ne sera visible que pour ce compte. Le profil Default garantit sa présence pour tout nouvel utilisateur.

#### 4.4 Horaires de Carol Peletier

```
net user cpeletier /times:L-V,09:00-12:00
net user cpeletier
```

Sur certains systèmes, les noms de jours sont localisés différemment. Utiliser net help user si la syntaxe L-V est refusée. Le contrôle doit afficher les heures autorisées du lundi au vendredi.

#### 4.5 Stratégie de mots de passe et administrateurs

**Visuel externe**

```mermaid
flowchart LR
    N1["Ouvrir secpol.msc  Stratégies de comptes  Stratégie de mot de passe."]
    N2["Créer le compte adminsecours en CMD et l’ajouter au groupe Administrateurs."]
    N3["Ajouter VOTRE_LOGIN et LOGIN_BINOME au groupe Administrateurs."]
    N4["Forcer le changement du mot de passe du binôme à la première connexion."]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

1. Ouvrir secpol.msc > Stratégies de comptes > Stratégie de mot de passe.
2. Définir longueur minimale = 12, durée de vie maximale = 25 jours et exigences de complexité = Activées.
3. Créer le compte adminsecours en CMD et l’ajouter au groupe Administrateurs.
4. Ajouter <VOTRE_LOGIN> et <LOGIN_BINOME> au groupe Administrateurs.
5. Forcer le changement du mot de passe du binôme à la première connexion.

```
net accounts /minpwlen:12 /maxpwage:25
net user adminsecours * /add /fullname:"Administrateur de secours"
net localgroup Administrateurs adminsecours /add
net localgroup Administrateurs <VOTRE_LOGIN> /add
net localgroup Administrateurs <LOGIN_BINOME> /add
net user <LOGIN_BINOME> /logonpasswordchg:yes
net accounts
```

#### Contradiction assumée

La politique globale de 25 jours rend impossible « mot de passe n’expire jamais » pour tous les comptes. La solution retient la contrainte spécifique de 25 jours, plus tardive et contrôlable dans secpol.msc.

#### 4.6 Comptes et groupes sous Debian

Exécuter le script 01_utilisateurs_groupes.sh après avoir remplacé les variables. Il installe KSH, crée les six groupes, les dix comptes et force le changement initial du binôme.

```
chmod +x 01_utilisateurs_groupes.sh
sudo ./01_utilisateurs_groupes.sh
```

```
# Contrôles
getent passwd rgrimes ddixon gstokes mgreene eporter cpeletier <VOTRE_LOGIN> <LOGIN_BINOME> respinosa 
mjones
getent group l_direction l_commercial l_comptabilite l_informatique l_logistique documentation
chage -l <LOGIN_BINOME>
```

#### Correction du corrigé modèle

useradd -p n’accepte pas un mot de passe en clair : il attend un hash. Le script utilise passwd, ce qui est sûr et fonctionnel. Le fichier correct est /etc/group, pas /etc/groups.

#### 4.7 Stratégies locales pour les non-administrateurs Windows

1. Exécuter mmc, ajouter le composant Éditeur d’objet de stratégie de groupe, cliquer Parcourir > Utilisateurs > Non- administrateurs.

1. Configuration utilisateur > Modèles d’administration > Système > Accès au stockage amovible : activer CD et DVD -

Refuser l’accès en lecture et en écriture.

1. Configuration utilisateur > Modèles d’administration > Composants Windows > Explorateur de fichiers : supprimer les fonctions de gravure de CD.

1. Configuration utilisateur > Modèles d’administration > Système : activer Empêcher l’accès aux outils de modification du Registre.

1. Configuration utilisateur > Modèles d’administration > Bureau > Bureau : activer Papier peint du Bureau et indiquer un chemin local lisible par tous.

1. Dans la stratégie ordinateur, ouvrir les propriétés du Pare-feu Windows Defender et activer les profils Domaine,

Privé et Public.

1. Exécuter gpupdate /force et contrôler avec gpresult /r.

```
gpupdate /force
gpresult /r
netsh advfirewall show allprofiles
```

#### 4.8 Sources APT et confort Vim

**Visuel externe**

```mermaid
flowchart LR
    N1["Ouvrir /etc/apt/sources.list avec Vim."]
    N2["Commenter en une seule commande toutes les lignes deb-src non commentées."]
    N3["Commenter la ligne du DVD."]
    N4["Mettre à jour la base de paquets et installer vim."]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

1. Ouvrir /etc/apt/sources.list avec Vim.
2. Commenter en une seule commande toutes les lignes deb-src non commentées.
3. Commenter la ligne du DVD.
4. Mettre à jour la base de paquets et installer vim.
5. Activer la coloration, la numérotation et le mode non compatible dans /etc/vim/vimrc.local.

```
sudo vim /etc/apt/sources.list
:g/^\s*deb-src/s/^/#/
:g/^\s*deb cdrom:/s/^/#/
:wq
```

```
sudo apt update
```

```
sudo apt install -y vim
sudo tee /etc/vim/vimrc.local >/dev/null <<'EOF'
set nocompatible
syntax on
set number
EOF
```

Dans Vim, :g applique la substitution à toutes les lignes correspondantes. Le motif ne cible que les lignes actives, donc il évite de doubler les #.

#### Contrôle à conserver dans la procédure

Capturer le fichier sources.list avec les lignes commentées et un fichier ouvert dans Vim montrant les numéros de lignes et la coloration.

#### Commandes de vérification

```
grep -nE '^(deb-src|deb cdrom:)' /etc/apt/sources.list || echo 'Toutes les lignes demandées sont 
commentées'
vim --version | head
```

### 5. Partie 3 - Stockage, partages et imprimantes

#### 5.1 Partition DATA de 15 Go sous Windows avec DISKPART

#### Risque de destruction

La commande clean n’est pas nécessaire ici et n’est volontairement pas utilisée. Vérifier que le disque sélectionné est bien le second disque de 40 Go.

```
diskpart
list disk
select disk 1
detail disk
offline disk
online disk
convert mbr
create partition primary size=15360
format fs=ntfs quick label=DATA
assign letter=D
list volume
exit
```

15360 Mo correspond à 15 Gio. Si le formateur attend la convention du corrigé modèle, size=15000 donne environ 15 Go décimaux.

#### 5.2 Partitions PROFILS, DATA et LOGS sous Debian

1. Identifier le disque de 40 Go avec lsblk -o NAME,SIZE,MODEL,TYPE,MOUNTPOINTS.
2. Lancer fdisk /dev/sdb et créer trois partitions primaires : +15G, +15G, puis tout le reste.
3. Écrire avec w, installer xfsprogs puis formater avec les labels demandés.

```
sudo fdisk /dev/sdb
# n, p, 1, Entrée, +15G
# n, p, 2, Entrée, +15G
# n, p, 3, Entrée, Entrée
# w
sudo partprobe /dev/sdb
sudo apt install -y xfsprogs
sudo mkfs.ext4 -L PROFILS /dev/sdb1
sudo mkfs.ext4 -L DATA /dev/sdb2
sudo mkfs.xfs -f -L LOGS /dev/sdb3
lsblk -f
```

#### 5.3 Remplacement définitif de /home par PROFILS

1. Éteindre la VM et créer un snapshot.
2. Démarrer en mode secours afin qu’aucun utilisateur n’écrive dans /home.
3. Monter PROFILS temporairement et copier toutes les données avec les droits.
4. Commenter l’ancienne ligne /home dans /etc/fstab et ajouter LABEL=PROFILS.
5. Redémarrer et vérifier que les comptes retrouvent leurs fichiers.

```
sudo systemctl isolate rescue.target
sudo mkdir -p /mnt/profils
sudo mount LABEL=PROFILS /mnt/profils
sudo cp -a /home/. /mnt/profils/
sudo vim /etc/fstab
# Commenter l'ancienne ligne /home
# Ajouter :
```

```
LABEL=PROFILS  /home  ext4  defaults  0  2
sudo reboot
```

#### Contrôle à conserver dans la procédure

Le point /home doit provenir de LABEL=PROFILS et un utilisateur doit pouvoir créer un fichier dans son profil.

#### Commandes de vérification

```
findmnt /home
df -hT /home
su - ddixon -c 'touch ~/test-profils && ls -l ~/test-profils'
```

#### 5.4 Montage de DATA dans /services et confidentialité

```
sudo mkdir -p /services
sudo sh -c 'echo "LABEL=DATA /services ext4 defaults 0 2" >> /etc/fstab'
sudo mount -a
sudo mkdir -p /services/{commercial,comptabilite,direction,informatique,logistique}
```

```
sudo chown root:documentation /services
sudo chmod 2770 /services
sudo chown root:l_commercial /services/commercial
sudo chown root:l_comptabilite /services/comptabilite
sudo chown root:l_direction /services/direction
sudo chown root:l_informatique /services/informatique
sudo chown root:l_logistique /services/logistique
sudo chmod 2770 /services/{commercial,comptabilite,direction,informatique,logistique}
```

Le bit 2 (setgid) force les nouveaux fichiers à hériter du groupe du dossier. À la racine, ils appartiennent à documentation ; dans chaque dossier de service, ils héritent du groupe du service, ce qui permet la confidentialité.

#### Contrôle à conserver dans la procédure

La première commande doit réussir et la seconde doit renvoyer Permission non accordée.

#### Commandes de vérification

```
su - ddixon -c 'touch /services/commercial/test-ok'
su - ddixon -c 'touch /services/comptabilite/test-interdit'
```

#### 5.5 Dossiers NTFS Commerciaux et Support_Info

1. Créer D:\donnees\Commerciaux et D:\Support_Info.
2. Dans Sécurité > Avancé, désactiver l’héritage et supprimer les autorisations héritées.
3. Conserver SYSTEM et Administrateurs en contrôle total.
4. Accorder Modifier au groupe l_commercial sur Commerciaux et au groupe l_informatique sur Support_Info.
5. Utiliser l’onglet Accès effectif pour tester un membre autorisé et un utilisateur étranger au service.

```
mkdir D:\donnees\Commerciaux
mkdir D:\Support_Info
icacls D:\donnees\Commerciaux /inheritance:r
icacls D:\donnees\Commerciaux /grant:r "SYSTEM:(OI)(CI)F" "Administrateurs:(OI)(CI)F" "l_commercial:(OI)
(CI)M"
icacls D:\Support_Info /inheritance:r
icacls D:\Support_Info /grant:r "SYSTEM:(OI)(CI)F" "Administrateurs:(OI)(CI)F" "l_informatique:(OI)(CI)M
```

#### Règle NTFS + partage

Lors d’un accès réseau, le droit effectif est l’intersection des permissions de partage et NTFS. Il faut donc contrôler les deux niveaux.

#### 5.6 Partage caché Support_Info$ et lecteur U:

Exécuter le script 04_partage_support_info.ps1. Le signe $ rend le partage non visible lors de l’exploration, mais il reste accessible avec son chemin exact.

```
New-SmbShare -Name 'Support_Info$' -Path 'D:\Support_Info' -ChangeAccess 'l_informatique' -FullAccess 
'Administrateurs'
Get-SmbShare
net share
```

#### Méthode 1 - CMD persistante sur le poste du binôme

```
net use U: \\172.16.0.189\Support_Info$ /persistent:yes
U:
echo Test d'écriture > test-binome.txt
```

#### Méthode 2 - PowerShell ou interface graphique

```
New-PSDrive -Name U -PSProvider FileSystem -Root '\\172.16.0.189\Support_Info$' -Persist
```

Méthode graphique équivalente : Explorateur > Ce PC > Connecter un lecteur réseau > U: > chemin UNC > Reconnexion à l’ouverture de session.

#### 5.7 Imprimante HP LaserJet M9050 MFP

1. Extraire ou installer le pilote HP fourni.
2. Ouvrir printmanagement.msc, ajouter un port TCP/IP standard avec 172.16.168.189. Si la détection échoue, choisir

Carte réseau générique et désactiver la requête SNMP.

1. Ajouter l’imprimante avec le pilote HP, la nommer HP LaserJet M9050 MFP et la partager sous HP-M9050.
2. Dans Sécurité : Tout le monde = Imprimer ; l_comptabilite = Imprimer + Gérer les documents ; l_informatique =

Imprimer + Gérer cette imprimante + Gérer les documents.

1. Depuis le W10 du binôme, ouvrir \\172.16.0.189, connecter l’imprimante et la définir par défaut.

#### Pourquoi « Gérer les documents » pour la comptabilité ?

Ce droit permet de supprimer une impression bloquée sans permettre de modifier toute la configuration de l’imprimante.

#### 5.8 Pool Xerox, horaires et priorités

1. Installer le pilote Xerox C60/C70 fourni.
2. Créer les ports TCP/IP 172.16.168.188 et 172.16.169.188.
3. Créer une imprimante Xerox-Comptabilite, ouvrir Ports, activer le pool et sélectionner les deux ports.
4. Sécurité : supprimer Tout le monde, autoriser l_comptabilite à imprimer et l_informatique en contrôle total.
5. Avancé : définir Disponible de 19:00 à 03:00.
6. Créer une deuxième file Xerox-Direction utilisant le même pilote et les mêmes ports ; priorité 99 contre priorité 1 pour la file normale.

1. Limiter Xerox-Direction au groupe l_direction et conserver l_informatique en contrôle total.

#### Pourquoi deux files ?

Deux files logiques peuvent envoyer vers les mêmes ports physiques. Windows traite d’abord la file ayant la priorité la plus haute, ce qui donne la priorité aux directeurs.

#### 5.9 Déplacement du spool vers D:

1. Créer D:\Spool avec les droits SYSTEM et Administrateurs.
2. Arrêter le service Spouleur d’impression.
3. Dans les propriétés avancées du serveur d’impression, remplacer le dossier de spool par D:\Spool, ou exécuter

05_deplacer_spool.ps1.

1. Redémarrer le service et envoyer une page de test.

```
Stop-Service Spooler -Force
New-Item D:\Spool -ItemType Directory -Force
Set-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name DefaultSpoolDirectory 
-Value 'D:\Spool'
Start-Service Spooler
```

### 6. Partie 4 - Configuration avancée

#### 6.1 GRUB à 2 secondes

```
sudo vim /etc/default/grub
# Modifier : GRUB_TIMEOUT=2
sudo update-grub
grep '^GRUB_TIMEOUT=' /etc/default/grub
```

update-grub régénère le fichier réellement lu au démarrage ; modifier uniquement /etc/default/grub sans cette commande ne suffit pas.

#### 6.2 Agrandissement définitif du swap à 1 Go

#### Snapshot obligatoire

Cette opération modifie la table du premier disque. Relever avec précision le numéro de la partition swap et l’espace libre avant de continuer.

```
swapon --show
lsblk -f
sudo swapoff -a
sudo fdisk /dev/sda
# p : relever la partition swap et l'espace libre
# d : supprimer uniquement l'ancienne partition swap
# n : recréer la partition swap à 1G dans l'espace disponible
# t : type Linux swap (82 sur MBR)
# w
sudo partprobe /dev/sda
sudo mkswap -L SWAP /dev/sda4
sudo vim /etc/fstab
# Remplacer l'ancienne ligne par :
LABEL=SWAP none swap sw 0 0
sudo swapon -a
swapon --show
free -h
```

Le swap ne contient pas de données à conserver : il peut être désactivé, recréé plus grand, puis réactivé. Adapter /dev/sda4 au numéro réellement observé.

#### 6.3 Mise à jour Debian

```
sudo apt update
sudo apt full-upgrade -y
sudo apt autoremove --purge -y
```

#### 6.4 Bureau à distance Windows avec NLA

1. Panneau de configuration > Système > Paramètres d’utilisation à distance.
2. Autoriser les connexions distantes et conserver l’authentification au niveau du réseau (NLA).
3. Ajouter <LOGIN_BINOME> ou le groupe l_informatique aux Utilisateurs du Bureau à distance.
4. Vérifier l’écoute sur le port 3389 puis demander au binôme de se connecter.

```
Add-LocalGroupMember -Group 'Utilisateurs du Bureau à distance' -Member '<LOGIN_BINOME>'
netstat -ano | findstr :3389
Get-NetTCPConnection -LocalPort 3389 -State Listen
```

#### Contrôle à conserver dans la procédure

Capturer la ligne LISTENING sur 0.0.0.0:3389 ou [::]:3389 et une session RDP réussie depuis le poste du binôme.

#### Commandes de vérification

```
netstat -ano | findstr :3389
```

### 7. Partie 5 - Installation des applications

#### 7.1 Installation silencieuse de 7-Zip sous Windows

La ressource fournie est l’installateur 7-Zip 19.00 x64. L’option /S lance le mode silencieux et /D définit le dossier, à placer en dernier.

```
cd <DOSSIER_RESSOURCES>
7zip.exe /S
"C:\Program Files\7-Zip\7z.exe" i
```

Aucune boîte de dialogue ne doit apparaître, hors éventuelle demande UAC. La seconde commande prouve que le programme est installé.

#### 7.2 Client RDP graphique sous Debian : Remmina

```
sudo apt update
sudo apt install -y remmina
remmina
```

1. Créer un profil RDP vers 172.16.0.189.
2. Renseigner le login Windows autorisé et son mot de passe.
3. Conserver la négociation de sécurité automatique/NLA.
4. Se connecter et capturer le Bureau Windows affiché dans Remmina.

#### 7.3 Installation de Webmin

La méthode du corrigé installe un paquet .deb, laisse dpkg signaler les dépendances, puis les répare avec apt. Utiliser le paquet officiel téléchargé pour Debian.

```
sudo apt update
sudo apt install -y perl openssl libauthen-pam-perl libio-pty-perl apt-show-versions
sudo dpkg -i webmin_*.deb
sudo apt --fix-broken install -y
sudo systemctl enable --now webmin
sudo ss -lntp | grep 10000
```

Accéder depuis le navigateur à https://172.16.0.188:10000/. Le certificat auto-signé provoque un avertissement normal dans ce laboratoire. S’authentifier avec root ou un compte autorisé.

### 8. Partie 6 - Sauvegarde et restauration

#### 8.1 Sauvegarde quotidienne Debian à 12 h 30

Le script 02_sauvegarde_quotidienne.sh crée deux archives tar datées : une pour /home et une pour /services. Il les copie ensuite vers le Debian du binôme par SCP.

1. Sur le Debian du binôme, installer openssh-server et créer /srv/sauvegardes/DEB10-<INITIALES> avec les droits du compte distant.

1. Sur votre Debian, installer openssh-client, générer une clé SSH pour root et copier la clé publique avec ssh-copy-id.
2. Adapter REMOTE_USER, REMOTE_HOST et REMOTE_DIR dans le script.
3. Tester le script manuellement avant de le planifier.
4. Ajouter une tâche cron quotidienne à 12 h 30.

```
sudo apt install -y openssh-client
sudo ssh-keygen -t ed25519 -f /root/.ssh/id_ed25519
sudo ssh-copy-id -i /root/.ssh/id_ed25519.pub <LOGIN_BINOME>@172.16.0.186
sudo install -m 700 02_sauvegarde_quotidienne.sh /usr/local/sbin/sauvegarde-msp
sudo /usr/local/sbin/sauvegarde-msp
sudo crontab -e
30 12 * * * /usr/local/sbin/sauvegarde-msp >> /var/log/sauvegarde-msp.log 2>&1
```

#### Pourquoi une clé SSH ?

Cron ne peut pas répondre à une demande de mot de passe interactive. La clé permet une copie automatique ; elle doit être protégée par des permissions strictes.

#### Contrôle à conserver dans la procédure

Les deux archives doivent exister localement et sur la machine distante.

#### Commandes de vérification

```
sudo crontab -l
ls -lh /var/backups/msp
ssh <LOGIN_BINOME>@172.16.0.186 ls -lh /srv/sauvegardes/DEB10-<INITIALES>
```

#### 8.2 Image système Windows

1. Ajouter le disque de 60 Go dans VMware, l’initialiser et le formater en NTFS avec une lettre libre, par exemple E:.
2. Ouvrir Panneau de configuration > Sauvegarder et restaurer (Windows 7) > Créer une image système.
3. Choisir le disque de 60 Go comme destination et inclure les volumes critiques proposés.
4. Lancer la sauvegarde et vérifier la présence du dossier WindowsImageBackup.

#### Alternative en ligne de commande

```
wbadmin start backup -backupTarget:E: -include:C: -allCritical -quiet
wbadmin get versions
```

#### 8.3 Sauvegarde du dossier Support_Info vers le W10 du binôme à 12 h 45

1. Sur le W10 du binôme, créer dans son partage Support_Info$ un dossier Sauvegarde_W10_<INITIALES>.
2. Ouvrir Sauvegarder et restaurer > Configurer la sauvegarde > Enregistrer sur un réseau.
3. Saisir \\172.16.0.187\Support_Info$\Sauvegarde_W10_<INITIALES> et un compte autorisé.
4. Choisir Me laisser choisir, sélectionner D:\Support_Info et décocher l’image système.

1. Créer la planification quotidienne. Si l’interface ne propose pas 12 h 45, modifier la tâche AutomaticBackup dans le

Planificateur de tâches.

#### Pourquoi un sous-dossier dédié ?

Il évite de mélanger les sauvegardes de plusieurs postes et simplifie la restauration et la preuve de fonctionnement.

#### 8.4 Points de restauration : 8 % sur C:

1. Ouvrir Protection du système.
2. Sélectionner C: > Configurer > Activer la protection du système.
3. Placer l’utilisation maximale à 8 %.
4. Créer un point nommé Avant_MSP_Final et vérifier qu’il apparaît.

```
Enable-ComputerRestore -Drive 'C:\'
vssadmin resize shadowstorage /For=C: /On=C: /MaxSize=8%
Checkpoint-Computer -Description 'Avant_MSP_Final' -RestorePointType 'MODIFY_SETTINGS'
```

### 9. Partie 7 - Pour aller plus loin

#### 9.1 Montage permanent de LOGS dans /var/log sans perte

1. Créer un snapshot machine éteinte.
2. Passer en mode secours pour réduire les écritures dans /var/log.
3. Monter la partition LOGS dans un emplacement temporaire et copier les journaux en préservant les attributs.
4. Ajouter LABEL=LOGS dans /etc/fstab puis monter la nouvelle partition sur /var/log.

100.Redémarrer et vérifier que de nouvelles lignes sont écrites.

```
sudo systemctl isolate rescue.target
sudo mkdir -p /mnt/logs
sudo mount LABEL=LOGS /mnt/logs
sudo cp -a /var/log/. /mnt/logs/
sudo sh -c 'echo "LABEL=LOGS /var/log xfs defaults 0 0" >> /etc/fstab'
sudo mount -a
sudo reboot
findmnt /var/log
sudo tail -n 30 /var/log/syslog
```

#### Pourquoi cp -a ?

cp -a conserve propriétaires, groupes, permissions, dates et liens. Une copie simple risquerait d’empêcher certains services d’écrire leurs journaux.

#### 9.2 Montage du partage Windows depuis Debian avec SMB 3

101.Installer cifs-utils. 102.Créer /mnt/support_info et un fichier d’identifiants root-only. 103.Ajouter le partage caché du W10 du binôme dans /etc/fstab avec vers=3.0 et _netdev. 104.Monter et tester la création d’un fichier.

```
sudo apt install -y cifs-utils
sudo mkdir -p /mnt/support_info
sudo tee /root/.smb-support >/dev/null <<'EOF'
username=<LOGIN_BINOME>
password=<MOT_DE_PASSE_WINDOWS>
EOF
sudo chmod 600 /root/.smb-support
sudo sh -c 'echo "//172.16.0.187/Support_Info$ /mnt/support_info cifs credentials=/root/.smb-
support,vers=3.0,iocharset=utf8,uid=<VOTRE_LOGIN>,gid=l_informatique,file_mode=0660,dir_mode=0770,_netde
v,nofail 0 0" >> /etc/fstab'
sudo mount -a
findmnt /mnt/support_info
touch /mnt/support_info/test-debian.txt
```

#### Ne pas activer SMB1

Windows 10 et cifs-utils savent utiliser SMB2/SMB3. SMB1 est obsolète et inutile pour cette tâche.

#### 9.3 Déplacement du fichier de pagination Windows vers D:

105.Système > Paramètres système avancés > Performances > Paramètres > Avancé > Mémoire virtuelle > Modifier. 106.Décocher la gestion automatique.

107.Sélectionner C: > Aucun fichier d’échange > Définir. 108.Sélectionner D: > Taille gérée par le système > Définir. 109.Valider et redémarrer. Vérifier la présence de D:\pagefile.sys.

#### 9.4 Volume LVM de 32 Go monté sur /opt

110.Ajouter deux disques SCSI de 20 Go et vérifier qu’ils sont /dev/sdc et /dev/sdd. 111.Installer lvm2, créer les volumes physiques, le groupe vg_applications et le volume logique lv_opt de 32 Go. 112.Formater en ext4, copier le contenu actuel de /opt puis ajouter le montage permanent. 113.Le script 03_lvm_opt.sh automatise ces opérations après une confirmation explicite.

```
sudo pvcreate /dev/sdc /dev/sdd
sudo vgcreate vg_applications /dev/sdc /dev/sdd
sudo lvcreate -L 32G -n lv_opt vg_applications
sudo mkfs.ext4 -L OPT /dev/vg_applications/lv_opt
sudo mkdir -p /mnt/nouveau_opt
sudo mount /dev/vg_applications/lv_opt /mnt/nouveau_opt
sudo cp -a /opt/. /mnt/nouveau_opt/
# Ajouter l'UUID dans /etc/fstab puis :
sudo mount -a
pvs
vgs
lvs
findmnt /opt
```

#### Pourquoi copier /opt avant le montage ?

Monter un nouveau volume sur /opt masque les fichiers déjà présents. La copie évite de perdre l’accès aux applications existantes.

#### 9.5 Formules du classeur Résultats_séminaire.xlsx

| Zone | Formule française à saisir puis recopier |
| --- | --- |
| F5 - Total par élève | =SOMME(B5:E5) |
| G5 - Moyenne par élève | =MOYENNE(B5:E5) |
| I5 - Appréciation | =SI(ET(G5>10;H5>10);"Bien";SI(ET(G5<=10;H5>=10);"En progrès";SI(ET(G5>=10;H5<10);"Trop d'absences";"En danger!"))) |
| B15 - Total par matière | =SOMME(B5:B12) |
| B16 - Moyenne par matière | =MOYENNE(B5:B12) |
| B17 - Note maximum | =MAX(B5:B12) |
| B18 - Note minimum | =MIN(B5:B12) |
| B19 - Nombre d’élèves | =NBVAL(A5:A12) |

Recopier F5:G5 et I5 jusqu’à la ligne 12. Recopier B15:B18 vers les colonnes C à E. Le classeur Resultats_seminaire_solution_complete.xlsx fourni contient toutes les formules, y compris celles manquantes dans certaines lignes du corrigé distribué.

#### Cas limite de la consigne

La règle ne définit pas explicitement le cas moyenne > 10 et assiduité = 10. La formule du corrigé utilise En danger! comme cas par défaut. Les données fournies ne contiennent pas cette combinaison, donc les résultats attendus restent identiques.

### 10. Matrice de validation finale

| Bloc | Preuve minimale à insérer dans votre procédure |
| --- | --- |
| VM et réseau | Paramètres VMware, noms des VM, ipconfig /all, ip -br a, pings croisés. |
| Utilisateurs Windows | net user, listes de membres des groupes, compte Carol et heures, secpol.msc, Administrateurs. |
| Utilisateurs Debian | getent passwd, getent group, shell KSH du binôme, chage -l. |
| GPO / Vim | gpresult /r, pare-feu actif, refus regedit sur un non-admin, sources.list et Vim numéroté. |
| Disques | DISKPART list volume, lsblk -f, findmnt /home, findmnt /services. |
| Permissions | Accès effectif Windows ; test autorisé/interdit sous Debian. |
| Partage | Get-SmbShare, net share, lecteur U: persistant et fichier créé depuis le binôme. |
| Imprimantes | Ports TCP/IP, permissions, pool, deux files/priorités, dossier D: \Spool. |
| Avancé | GRUB_TIMEOUT=2, swap 1 Go, paquets mis à jour, RDP 3389 et connexion réussie. |
| Applications | 7-Zip installé sans assistant, Remmina connecté, Webmin sur le port 10000. |
| Sauvegardes | Archives tar locales et distantes, cron, image système, sauvegarde Windows à 12 h 45, point de restauration. |
| LVM et tableur | pvs/vgs/lvs, findmnt /opt, formules et résultats du classeur. |

#### 10.1 Fichiers fournis avec ce document

| Fichier | Rôle |
| --- | --- |
| scripts/windows/01_direction_comptabilite.cmd | Création CMD des groupes/comptes Direction et Comptabilité, horaires de Carol, admin de secours. |
| scripts/windows/02_informatique_logistique.ps1 | Création PowerShell des comptes Informatique et Logistique et droits administrateurs. |
| scripts/windows/03_preparer_profils.ps1 | Création du dossier Procédures dans Default et les profils existants. |
| scripts/windows/04_partage_support_info.ps1 | Permissions NTFS et partage caché Support_Info$. |
| scripts/windows/05_deplacer_spool.ps1 | Déplacement du spool vers D:\Spool. |
| scripts/debian/01_utilisateurs_groupes.sh | Création des groupes et dix comptes Debian, KSH et changement initial. |
| scripts/debian/02_sauvegarde_quotidienne.sh | Archives tar, copie SCP et rétention locale. |

| Fichier | Rôle |
| --- | --- |
| scripts/debian/03_lvm_opt.sh | Création LVM de 32 Go et montage sécurisé de /opt. |
| tableur/Resultats_seminaire_solution_complete.xlsx | Classeur complété avec toutes les formules. |

Référence du document : 1_JPJfmmHFM8G1DMi4S2wR1lFDzt0DV_c · SHA-256 7857985d194bb795…

## Support · NP_MDP_NoteTech · 11 pages transcrites

Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Note historique du 5 juin 2012 ; ses recommandations ne sont pas présentées comme une politique de sécurité actuelle.

### Recommandations de sécurité relatives aux mots de passe

Note technique DAT-NT-001/ANSSI/SDE/NP, version 1.1 du 5 juin 2012. Le document annonce 10 pages hors couverture. Cette transcription conserve les recommandations historiques du document fourni.

### Informations

Personnes ayant contribué à la rédaction de ce document :

| Contributeurs | Rédigé par | Approuvé par | Date |
| --- | --- | --- | --- |
| Division assistance technique, CERT Fr | DAT | SDE | 5 juin 2012 |

Évolutions du document :

| Version | Date | Nature des modifications |
| --- | --- | --- |
| 1.0 | 23 mai 2012 | Version initiale |
| 1.1 | 5 juin 2012 | Corrections de forme |

Pour toute remarque :

| Contact | Adresse | @mél | Téléphone |
| --- | --- | --- | --- |
| Bureau Communication de l’ANSSI | 51 bd de La Tour-Maubourg 75700 Paris Cedex 07 SP | communication@ssi.gouv.fr | 01 71 75 84 04 |

#### Préambule

Malgré le développement de mécanismes d’authentification intrinsèquement plus robustes, l’usage des mots de passe est encore relativement répandu, notamment pour l’authentification sur Internet.

L’ANSSI recommande très fortement, dans tous les cas où cela est possible, l’utilisation de technologies d’authentification forte (utilisation de certificats d’authentification sur carte à puce, utilisation de schéma d’authentification à plusieurs facteurs etc.). Cependant, l’utilisateur n’est pas toujours maître des choix qui s’offrent à lui en matière d’authentification. L’objet de ce document est donc de guider l’utilisateur dans le choix de mots de passe adéquats.

#### De quoi dépend la robustesse d’un mot de passe ?

Les préconisations que l’on peut retrouver dans les guides de bonne pratique en matière de robustesse de mots de passe sont parfois contradictoires. Certaines recommandations préconisent le choix de mots de passe de 12 caractères alphanumériques, d’autres de 16 lettres, etc.

En réalité, il n’existe pas de règle universelle. La robustesse d’un mot de passe dépend en pratique :

- de la force intrinsèque du mot de passe, c’est à dire sa complexité intrinsèque 1 ;
- du mécanisme mis en oeuvre pour vérifier le mot de passe et de ses caractéristiques techniques

(temps de vérification, mécanisme cryptographique sous-jacent notamment) ;

- du modèle d’attaquant considéré. La résistance contre tous les types d’attaquants imaginables est intrinsèquement plus difficile à atteindre que la simple résistance aux attaques opportunistes par lesquelles l’attaquant va essayer les mots de passe les plus triviaux les uns après les autres sans connaissance a priori du système cible ;

- éventuellement, en fonction des mécanismes techniques mis en oeuvre et du modèle d’attaquant, du nombre d’authentification ratées autorisées avant blocage d’un compte protégé par le mot de passe ;

- des mécanismes d’alerte éventuels. Certains systèmes permettent à l’utilisateur de prendre connais- sance de manière sûre du nombre d’échecs d’authentification infructueux. D’autres léveront une alerte à destination d’un administrateur ou bloqueront le compte de l’utilisateur concerné.

Compte-tenu de ce qui précède, il n’existe pas de recette miracle pour déterminer à coup sûr ce qu’est un bon mot de passe. Prenons quelques exemples plus concrets :

Exemple 1 : Certains systèmes d’authentification historiques découpaient systématiquement tous les mots de passe de moins de 14 caractères en deux blocs de 7 caractères, sur lesquels étaient appliqués un mécanisme de vérification similaire. Sans rentrer dans les détails techniques, le choix d’un tel mécanisme avait pour conséquence le fait que tous les mots de passe de moins de 14 caractères étaient à peu de chose près équivalents en termes de robustesse. Choisir un mot de passe de 14 caractères n’était pas réellement plus sûr que de prendre un mot de passe de 8 caractères (cf. Annexe).

Exemple 2 : Certains systèmes d’authentification disposent d’un mécanisme doublant le temps de vérification du mot de passe après chaque échec d’authentification. Ainsi, le temps de vérification du mot de passe devient rédhibitoire pour un attaquant après seulement quelques essais infructueux. Cette mesure est efficace, mais uniquement contre un attaquant de niveau basique essayant tous les mots de passe les plus probables les uns après les autres. Il n’est pas rare que l’observation des échanges

1. Voir sur le site www.securite-informatique.gouv.fr les fiches techniques "Mot de passe" et "Calculer la force d’un mot de passe".

entre l’utilisateur et la machine sur laquelle il cherche à s’authentifier fournisse suffisamment d’information à l’attaquant pour rechercher le bon mot de passe a posteriori (on parle de recherche hors-ligne).

Exemple 3 : Certains systèmes d’information imposent à l’utilisateur de prendre un mot de passe extrêmement compliqué mais le transmettent ensuite en clair sur le réseau. La complexité du mot de passe choisi sur l’utilisateur n’a donc qu’un impact limité sur la sécurité du système dans son ensemble, dès lors que l’attaquant a la possibilité d’écouter le échanges sur le réseau.

Au final, la définition d’une politique de mot de passe est une opération complexe. Cette politique doit être ajustée le plus précisément possible afin de garantir le respect des objectifs de sécurité sans imposer des contraintes irréalistes pour les utilisateurs.

#### Les recommandations minimales à respecter !

A minima, l’ANSSI estime que les 8 recommandations suivantes doivent s’appliquer indépendamment de tout contexte. Lorsque les systèmes d’information utilisés le permettent, certaines doivent être imposées techniquement.

#### Pour en savoir plus

Pour approfondir les méthodes d’attaque sur mots de passe et disposer ainsi de plus d’éléments justifiant ces recommandations, le lecteur est invité à lire l’annexe de ce document qui est une mise à jour d’une note d’information publiée en 2005 par le CERTA 2.

| Référence | Recommandation du document de 2012 |
| --- | --- |
| R1 | Utilisez des mots de passe différents pour vous authentifier auprès de systèmes distincts. En particulier, l’utilisation d’un même mot de passe pour sa messagerie professionnelle et pour sa messagerie personnelle est à proscrire impérativement. |
| R2 | Choisissez un mot de passe qui n’est pas lié à votre identité (mot de passe composé d’un nom de société, d’une date de naissance, etc.). |
| R3 | Ne demandez jamais à un tiers de créer pour vous un mot de passe. |
| R4 | Modifiez systématiquement et au plus tôt les mots de passe par défaut lorsque les systèmes en contiennent. |
| R5 | Renouvelez vos mots de passe avec une fréquence raisonnable. Tous les 90 jours est un bon compromis pour les systèmes contenant des données sensibles. |
| R6 | Ne stockez pas les mots de passe dans un fichier sur un poste informatique particulièrement exposé au risque (exemple : en ligne sur internet), encore moins sur un papier facilement accessible. |
| R7 | Ne vous envoyez pas vos propres mots de passe sur votre messagerie personnelle. |
| R8 | Configurez les logiciels, y compris votre navigateur web, pour qu’ils ne se "souviennent" pas des mots de passe choisis. |

1. CERTA-2005-INF-001.

### Annexe à la note DAT-NT-001/ANSSI/SDE du 5 juin 2012

- 1 Introduction
- 2 Les différentes attaques sur les mots de passe
- 2.1 Attaques par force brute
- 2.2 Attaques par dictionnaires
- 2.3 Attaques par compromis temps/mémoire
- 2.4 Attaques indirectes
- 3 Comment créer un bon mot de passe ?
- 3.1 Méthode phonétique
- 3.2 Méthode des premières lettres
- 4 Pourquoi et comment bien gérer les mots de passe ?
- 4.1 Politique de gestion des mots de passe
- 4.1.1 Sensibilisation à l’utilisation de mots de passe forts
- 4.1.2 Mot de passe initial
- 4.1.3 Renouvellement des mots de passe
- 4.1.4 Les critères prédéfinis pour les mots de passe
- 4.1.5 Confidentialité du mot de passe
- 4.1.6 Configuration des logiciels
- 4.2 Utilisation de mots de passe différents
- 4.3 Utilisation de mots de passe non rejouables (One Time Password)
- 4.4 Mettre en place un contrôle systématique des mots de passe
- 5 Lorsque possible, préférer l’usage de certificats d’authentification sur carte à puce !

#### 1 Introduction

L’utilisation de mots de passe forts est l’une des briques de base dans la sécurisation d’un système d’information. Malheureusement cette première étape est souvent absente dans la politique de sécurité. Il est par conséquent assez fréquent de trouver des comptes avec des mots de passe triviaux, sans mot de passe ou avec des mots de passe par défaut.

Cette note a pour but :

- de sensibiliser les utilisateurs de système d’information sur l’intérêt d’avoir des mots de passe forts ;

- de sensibiliser les administrateurs sur l’intérêt de mettre en place un contrôle systématique de la qualité des mots de passe ;

- de sensibiliser les concepteurs d’application sur l’importance d’une politique complète et cohé- rente concernant l’utilisation et la gestion des mots de passe ;

- de préciser les limites de la sécurité apportée par les mots de passe.

#### 2 Les différentes attaques sur les mots de passe

Afin d’éviter qu’un mot de passe ne soit facilement retrouvé par un outil conçu à cet effet, il peut être intéressant de connaître les différentes méthodes utilisées par les outils automatisés pour découvrir les mots de passe. Dans la plupart des cas, ce sont les empreintes (valeur de sortie d’une fonction de hachage) des mots de passe qui sont stockées sur le système. Les attaques sur les mots de passe consistent donc à calculer des empreintes et à les comparer à celles contenues dans les fichiers de mots de passe.

En outre, toute faiblesse dans les schémas de mot de passe peut faciliter ces attaques. Il convient donc d’en tenir compte pour choisir le bon mot de passe. Par exemple, pour les systèmes Microsoft, lorsque le Hash LM est utilisé, si un attaquant a récupéré le hash du mot de passe, il pourra récupérer le mot de passe originel en un temps très raisonnable à l’aide, par exemple, des Rainbow Tables. En effet, dans ce mode, il n’y a pas de différences entre les minuscules et les majuscules et la complexité ne peut pas dépasser 7 caractères par construction. Aussi, dans les paramètres de sécurité locaux Windows, il convient d’empêcher le stockage Hash LM après changement de mot de passe. Le schéma qui suit illustre le principe de fonctionnement du Hash LM :

Figure 1 – Description du Hash LM

![Principe du hachage LM](../../assets/course-sources/isolated/fc957c480ed04687/msp-p6-1.webp)

Principe du hachage LM

1. La casse du mot de passe n’est pas gérée. Il peut donc être considéré que tout est en majuscules.
2. Le mot de passe est séparé en 2 mots de 7 caractères.
3. Lorsque le mote de passe a une longueur inférieure à 14 caractères, il est complété par des caractères null.
4. Une fonction de hashage est appliquée à chaque mot.
5. Les deux hashs concaténés constituent le Hash LM.

2.1 Attaques par force brute

Cette attaque consiste à tester toutes les combinaisons possibles d’un mot de passe. Plus il existe de combinaisons possibles pour former un mot de passe, plus le temps moyen nécessaire pour retrouver ce mot de passe sera long.

Un mot de passe, d’une longueur minimale de douze caractères et constitué d’au moins trois des quatre groupes de caractères enoncés ci-dessus (minuscules, majuscules, caractères spéciaux et chiffres), ne pourra pas en général être découvert par cette attaque dans un temps raisonnable 3.

2.2 Attaques par dictionnaires

Cette attaque consiste à tester une série de mots issus d’un dictionnaire. Il existe toutes sortes de dictionnaires disponibles sur l’Internet pouvant être utilisés pour cette attaque (dictionnaire des prénoms, dictionnaire des noms d’auteurs, dictionnaire des marques commerciales...). En utilisant un mot de passe n’ayant aucune signification cette attaque ne donnera aucun résultat.

Cependant, plusieurs règles de transformation des mots du dictionnaire sont utilisées par les outils automatisés pour augmenter le nombre de combinaisons possibles. Citons par exemple :

- le remplacement d’un ou de plusieurs caractères du mot du dictionnaire par une majuscule

(bUreAU) ;

- le remplacement de certains caractères par des chiffres comme par exemple le S en 5 (mai5on) ;
- l’ajout d’un chiffre au début ou à la fin d’un mot (arbre9) ;
- l’ajout des mots de passe déjà découverts.

Il est possible d’utiliser des dictionnaires contenant une liste de mots de passe et leur empreinte associée établie selon ces règles. Même si cette possibilité accélère le temps nécessaire pour retrouver un mot de passe, elle nécessite plus de moyens comme une place plus importante en mémoire.

La solution idéale pour un individu malintentionné qui souhaiterait retrouver des mots de passe le plus rapidement possible serait d’avoir une liste exhaustive de tous les mots de passe possibles et de leur empreinte associée. Un tel dictionnaire n’est pas enviseageable car il nécessiterait une place en mémoire bien trop importante. Cependant sur les algorithmes de chiffrement faibles (cf. exemple précédent du Hash LM sur les systèmes Microsoft Windows), il est possible d’utiliser les attaques par compromis temps/mémoire.

2.3 Attaques par compromis temps/mémoire

Les attaques par compromis temps/mémoire sont des solutions intermédiaires permettant de retrouver un mot de passe plus rapidement qu’avec une attaque par force brute et avec moins de mémoire

1. Compte tenu des moyens à la disposition de tout à chacun au moment de la rédaction de ce document.

qu’en utilisant une attaque par dictionnaire. Ces compromis sont réalisés à partir de chaînes construites à l’aide de fonctions de hachage et de fonctions de réduction. Pour retrouver un mot de passe, il faudra d’abord retrouver à quelle chaîne appartient l’empreinte recherchée. Une fois que la chaîne aura été retrouvée il sera alors facile de retrouver le mot de passe, à partir du début de cette chaîne.

Par ailleurs, des méthodes efficaces s’appuyant sur les statistiques comme le calcul de la probabilité d’apparition d’une lettre dans un mot de passe selon celle qui la précède 4 permettent de fixer certains paramètres pour optimiser les attaques.

2.4 Attaques indirectes

D’autres attaques assez connues car très pratiquées (en particulier le filoutage et les logiciels de captures des frappes au clavier) consistent non pas à déterminer le mot de passe par une recherche technique mais à le capturer au moment où il est saisi, ou encore à se le faire communiquer en usant de supercherie.

Face à ces attaques, la qualité (ou « force ») du mot de passe doit être complétée par des mesures organisationnelles essentielles :

- procédures robustes de création de compte (initialisation et première fourniture du mot de passe) ;
- sensibilisation et bonne information des utilisateurs afin qu’ils détectent les tentatives pour leur soutirer leur mot de passe ;

- procédures robustes de réinitialisation en cas d’oubli ou perte du mot de passe par un utilisateur ;
- ne pas réutiliser des mots de passe identiques sur des systèmes différents. En particulier, ne pas mettre le même mot de passe sur une application peu protégée et sur une application sensible.

#### 3 Comment créer un bon mot de passe ?

Un bon mot de passe est avant tout un mot de passe fort, c’est à dire difficile à retouver même à l’aide d’outils automatisés. La force d’un mot de passe dépend de sa longueur et du nombre de possibilités existantes pour chaque caractère le composant. En effet, un mot de passe constitué de minuscules, de majuscules, de caractères spéciaux et de chiffres est techniquement plus difficile à découvrir qu’un mot de passe constitué uniquement de minuscules.

Néanmoins, un bon mot de passe doit être facile à retenir pour rester fort. En effet, si un mot de passe est trop compliqué à retenir, l’utilisateur trouvera différentes astuces comme, par exemple, l’inscription du mot de passe sur un papier collé sur l’écran ou sous le clavier lui permettant de s’authentifier. Pour ne pas mettre bêtement en danger la sécurité du SI, il existe différents moyens mnémotechniques pour fabriquer et retenir des mots de passe forts.

3.1 Méthode phonétique

Cette méthode consiste à utiliser les sons de chaque syllabe pour fabriquer une phrase facile à retenir. Par exemple la phrase « J’ai acheté huit cd pour cent euros cet après midi » deviendra ght8CD%E7am.

3.2 Méthode des premières lettres

Cette méthode consiste à garder les premières lettres d’une phrase (citation, paroles de chanson...) en veillant à ne pas utiliser que des minuscules. Par exemple, la citation « un tiens vaut mieux que deux tu l’auras » donnera 1tvmQ2tl’A.

1. Utilisation des chaînes de Markov.

#### 4 Pourquoi et comment bien gérer les mots de passe ?

4.1 Politique de gestion des mots de passe

Les mots de passe sont souvent la seule protection d’une station de travail. Il est donc indispensable de mettre en œuvre une politique de gestion des mots de passe intégrée à la politique de sécurité du système d’information.

Cette politique de gestion de mots de passe devra être à la fois technique et organisationelle. Les éléments suivants pourront, entre autres, y être inscrits.

4.1.1 Sensibilisation à l’utilisation de mots de passe forts

Les utilisateurs d’un système d’information doivent être sensibilisés à l’utilisation de mots de passe forts afin de comprendre pourquoi le risque d’utiliser des mots de passe faibles peut entraîner une vulnérabilité sur le système d’information dans son ensemble et non pas sur leur poste uniquement.

4.1.2 Mot de passe initial

Le mot de passe initial doit être de préférence fourni sur un canal sûr. Lorsque ce mot de passe initial est fourni par l’administrateur du système ou lorsqu’il est communiqué sur un canal non confidentiel, il doit être changé dès la première connexion de l’utilisateur.

L’administrateur qui a fourni un mot de passe sur un canal non sûr doit avoir une vigilance plus soutenue afin de s’assurer que le mot de passe n’est pas utilisé par un tiers.

4.1.3 Renouvellement des mots de passe

Les mots de passe doivent avoir une date de validité maximale. A partir de cette date l’utilisateur ne doit plus pouvoir s’authentifier sur le système si le mot de passe n’a pas été changé. Ceci permet de s’assurer qu’un mot de passe découvert par un utilisateur mal intentionné, ne sera pas utilisable indéfiniment dans le temps.

4.1.4 Les critères prédéfinis pour les mots de passe

Plusieurs critères peuvent être définis et mis en œuvre dans de nombreux systèmes pour s’assurer de la qualité des mots de passe. Ces critères sont, par exemple :

- une longueur minimale obligatoire prédéfinie ;
- l’impossibilité de réutiliser les n derniers mots de passe ;
- le nombre de tentatives possibles avant verrouillage de compte ;
- la manière de déverrouiller un compte qui a été bloqué. Pour éviter les dénis de service liés au blocage de tous les comptes sur un système d’information, il peut être intéressant que le déblocage des comptes se fasse de manière automatique après un certain délai ;

- la mise en place d’une veille automatique avec un déblocage par saisie du mot de passe.

4.1.5 Confidentialité du mot de passe

Un mot de passe sert à s’authentifier sur un système. Dans ce but, il est important de veiller à ne pas divulguer son mot de passe. Un mot de passe ne doit jamais être partagé ni stocké dans un fichier ni sur papier sans protection adaptée. Ainsi, il est possible que la politique de sécurité demande

aux utilisateurs d’un système d’information de stocker les mots de passe sur papier dans un lieu sûr (enveloppe cachetée dans un coffre ignifugé) pour le cas ou un problème surviendrait.

4.1.6 Configuration des logiciels

Une large majorité de logiciels comme par exemple les logiciels de navigation Internet proposent d’enregistrer les mots de passe, par le biais d’une petite case à cocher «retenir le mot de passe», pour éviter à l’utilisateur la peine d’avoir à les ressaisir. Ceci pose plusieurs problèmes de sécurité notamment lorsqu’une personne mal intentionnée prend le contrôle de l’ordinateur d’un utilisateur, il lui suffit de récupérer le fichier contenant la liste des mots de passe enregistrés pour pouvoir se connecter sur des sites à accès protégé.

4.2 Utilisation de mots de passe différents

Il est important de garder à l’esprit qu’un mot de passe n’est pas inviolable dans le temps. C’est pour cette raison qu’il est nécessaire de changer régulièrement son mot de passe et qu’il est important de ne pas utiliser le même mot de passe pour tous les services vers lesquels on se connecte.

En effet, si le poste de travail est compromis et qu’un renifleur de clavier est installé, un utilisateur mal intentionné peut récupérer tous les mots de passe entrés au clavier durant la période pendant laquelle le renifleur de clavier était installé (même si ces mots de passe sont forts) et accéder à l’ensemble des services nécessitant ces mots de passe. Tant que les mots de passe capturés n’ont pas été changés, des accès malveillants sont possibles, l’impact de l’attaque est durable.

C’est pourquoi changer régulièrement de mots de passe, à partir de machines saines, permet de diminuer la durée de l’impact de l’attaque.

4.3 Utilisation de mots de passe non rejouables (One Time Password)

Il est possible d’utiliser des solutions permettant de s’authentifier à un système par le biais d’un mot de passe ne pouvant être utilisé qu’une seule fois. Cette solution présente l’avantage que lorsqu’un mot de passe est découvert, il ne peut pas être réutilisé. Cette technique reste toutefois vulnérable aux attaques de l’intercepteur (man in the middle).

4.4 Mettre en place un contrôle systématique des mots de passe

Pour s’assurer de l’absence de mots de passe faibles, il peut être intéressant pour un administrateur, s’il y est autorisé, de réaliser des tests sur la robustesse des mots de passe utilisés sur son système d’information. Des outils commerciaux ou gratuits sont disponibles sur l’Internet. Le choix de l’outil le plus adapté dépend du type de mots de passe que l’on désire analyser. Une telle démarche peut être très utile à des fins de sensibilisation des utilisateurs.

#### 5 Lorsque possible, préférer l’usage de certificats d’authentification sur carte à puce !

L’utilisation de certificats de clés publiques sur les postes clients et serveurs permet de détecter l’intercepteur (man in the middle), mais reste vulnérable au vol sur le poste de travail du code porteur ou de la clé privée si elle n’est pas protégée dans un matériel adéquat (par exemple une carte à puce).

Si le client peut disposer d’un certificat d’authentification et d’une clef privée stockée sur une carte à puce qualifiée par l’ANSSI, alors il est préférable d’utiliser ce dispositif plutôt qu’un mot de passe pour l’authentification. À titre d’exemple, le schéma infra illustre un cas d’usage associant une clé privée stockée sur carte à puce et un protocole d’authentification robuste : Kerberos.

Figure 2 – Authentification Kerberos sur un réseau Microsoft

1. L’utilisateur saisit un code PIN après avoir introduit sa carte à puce.
2. Une demande de ticket signée avec sa clé privée stockée sur la carte à puce est émise vers le KDC 5. Le certificat de l’utilisateur est aussi envoyé.
3. Le KDC s’assure que l’utilisateur existe dans le domaine Active Directory.
4. Le TGT 6 et la clé de session sont chiffrés par le KDC avec la clé publique de l’utilisateur.
5. Le tout est adressé au client Windows qui peut alors le déchiffrer avec la clé privée de l’utilisateur.

Il est important de rappeler que, dans le cadre des échanges entre autorités administratives et entre une autorité administrative et les citoyens, l’annexe B3 du référentiel général de sécurité fixe l’ensemble des règles techniques à respecter en matière d’authentification dont celles liées à l’emploi de certificats.

1. Key Distribution Center.
2. Ticket Granting Ticket.

![Échange d’authentification Kerberos](../../assets/course-sources/isolated/fc957c480ed04687/msp-p11-2.webp)

Échange d’authentification Kerberos

Référence du document : 1qk3cQ-TONKzFhhwdss6BMmBO0Wf2rCVE · SHA-256 fc957c480ed04687…

## Énoncé · Enoncé MSP - Systèmes clients · 14 pages transcrites

Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### Mise en situation professionnelle : systèmes clients

Avant de démarrer ce TP, il convient d’avoir suivi les cours « Office 365 – Outils », « Bases des réseaux », « Systèmes clients Microsoft », « Utilisation d'une distribution GNU/Linux » et « Administration d'une distribution GNU/Linux ».

#### Durée estimée

4 jours et 3.5 heures

### Sommaire

- Partie 1 – Installation des systèmes
- 1.1 Présentation
- 1.2 Caractéristiques matérielles des machines virtuelles
- 1.3 Tâches à réaliser
- Partie 2 – Configuration des utilisateurs et de l’environnement
- 2.1 Création d’utilisateurs et de groupes
- 2.2 Configuration de l’environnement de travail
- Partie 3 – Configuration du stockage et des ressources
- 3.1 Partitionnement de disques
- 3.2 Occupation des espaces disques
- 3.3 Création de partages réseau
- 3.4 Gestion d’imprimantes
- Partie 4 – Configuration avancée des systèmes
- 4.1 Configuration avancée système Debian
- 4.2 Configuration avancée système Windows 10
- Partie 5 – Installation d’applications
- 5.1 Installation d’application sur le Windows 10
- 5.2 Installation d’application sur le poste Debian 10
- Partie 6 – Sauvegarde et restauration
- 6.1 Sauvegarde sur le poste Debian 10

### Sommaire (suite)

- 6.2 Sauvegarde sur les postes Windows 10
- Partie 7 – Pour aller plus loin – Partitionnement LVM
- 7.1 Configuration du stockage et des ressources
- 7.2 Configuration avancée des systèmes

### Énoncé

### Partie 1 – Installation des systèmes

#### 1.1 Présentation

L’objectif de cette mise en situation professionnelle est d’installer et configurer progressivement deux systèmes d’exploitation : Microsoft Windows 10 et Debian 10.

#### DHCP

- Vous installerez 2 systèmes clients à l’aide de l’outil de virtualisation VMware Workstation en respectant les caractéristiques spécifiques qui vous seront fournies plus tard.
- Certaines tâches demandées nécessiteront de travailler avec 4 machines virtuelles fournies (les vôtres et celle de votre binôme)

![Topologie du laboratoire](../../assets/course-sources/isolated/c9ad26c2b4912579/msp-p2-1.webp)

Topologie du laboratoire

Vous prendrez soin de créer des procédures relatant toutes vos actions. Ces procédures sont d'abord pour vous ! Insérez donc le niveau de détail qui vous parait adéquat !

(une procédure non détaillée pour la création de la VM avec WorkStation car je sais parfaitement m'y prendre maintenant ... ou bien une procédure détaillée, pas à pas, avec screenshots, pour l'installation de Debian, histoire d'en garder une belle trace pour les prochains cours, parce que Linux, ça n'est pas encore bien maitrisé).

Elles sont indispensables pour un futur technicien supérieur en système et réseau ! En effet, vous pourrez réutiliser ces procédures pour :

- Vos révisions
- Vos prochains ateliers, MSP
- Vos tâches en stage, en entreprise
- Le support aux utilisateurs
- L'échange avec vos collègues de bureau
- ...

Pour cela, créez un document (avec des styles, des titres, un sommaire surtout ...) que vous stockerez dans les fichiers partagés avec votre coach (au travers de votre conversation privée TEAMS par exemple). Votre coach pourra vous guider sur cette procédure et suivre votre progression pour mieux vous aider, vous dépanner et vous permettre de comprendre et d'avancer.

#### Vous pouvez éventuellement vous aider de l'outil natif psr pour enrichir votre document procédure avec des screenshots

#### Créez votre procédure automatique Lancer l'outil PSR (step recorder) avec la touche Windows+R. Puis dans la zone exécuter tapez psr

1. Créer un dossier consacré à toutes vos captures
2. Choisissez le nombre de captures d'écran à conserver (par exemple 200)
3. Cliquez sur démarrer l’enregistrement.

Il est possible d'insérer des commentaires lors de votre manipulation

1. Cliquez sur stop record une fois votre manipulation terminée
2. Vous n'avez plus qu'à ouvrir, décompresser, vérifier et stocker votre capture. Un copier-coller d'un screenshot dans votre procédure et le tour est joué

Grâce aux outils PSR et Capture écran, vous pourrez rapidement réaliser des procédures.

Paramétrer le nombre de captures à 200 minimum pour avoir suffisamment de ressources.

![Réglages de l’outil de capture](../../assets/course-sources/isolated/c9ad26c2b4912579/msp-p4-2.webp)

Réglages de l’outil de capture

![Réglages de l’outil de capture](../../assets/course-sources/isolated/c9ad26c2b4912579/msp-p4-3.webp)

Réglages de l’outil de capture

![Réglages de l’outil de capture](../../assets/course-sources/isolated/c9ad26c2b4912579/msp-p4-4.webp)

Réglages de l’outil de capture

### 1.2 Caractéristiques matérielles des machines virtuelles

#### Poste Client Windows

Nom : W10-VosInitiales. Système d’exploitation : Windows 10 Professionnel.

| Prérequis matériels | Valeur |
| --- | --- |
| CPU et mémoire | Allouer les ressources en suivant les recommandations Microsoft |
| Disque dur | 1 disque dur de 32 Go ; 1 disque dur additionnel de 40 Go |
| Réseau | 1 interface réseau en « Bridged » |

#### Poste Client Linux

Nom : DEB10-VosInitiales. Système : Debian 10.

| Prérequis matériels | Valeur |
| --- | --- |
| CPU | 1 vCPU |
| Mémoire | 2048 Mo |
| Disque dur | 1 disque dur de 20 Go ; 1 disque dur additionnel de 40 Go |
| Réseau | 1 interface réseau en « Bridged » |

#### 1.3 Tâches à réaliser

#### ✓ Schéma et tableau récapitulatif

- Votre première tâche sera, en utilisant l’illustration précédemment indiquée, de reproduire le schéma et d’y faire figurer toutes les informations liées à l’adressage IP. Vous vous servirez pour cela de tout moyen à votre convenance (www.draw.io, MS Visio, Word ou Paint...).

#### • Vous produirez également un tableau récapitulant l’ensemble des informations relatives aux configurations des systèmes (login/mots de passe, noms, adresses IP, processeurs, mémoire...).

### ✓ Installation des systèmes

- Sur le poste Microsoft sera déployé le système d’exploitation Windows 10 Edition Professionnelle sur le 1er disque dur. Vous configurerez le système en respectant les critères précédemment évoqués (nommage, adressage IP...). Vous empêcherez en outre, le service Windows Update, de se connecter aux serveurs Microsoft. Vous trouverez l’iso d’installation disponible ici (récupérez la plus récente) :

\\10.0.0.6\Distrib\iso\os\windows\10

- Quant au Client Debian, en plus des informations déjà mentionnées, vous installerez le système depuis l’image ISO « DVD » de la distribution Debian en version 10.x avec un environnement graphique. Vous trouverez l’iso d’installation ici : \\10.0.0.6\Distrib\iso\os\unix-linux\linux\Debian\debian10Buster
- Vous partitionnerez le disque manuellement selon le schéma suivant en prenant garde de pouvoir exploiter ultérieurement l’espace non alloué et vous conserverez le système de fichiers par défaut des différents points de montage :

| Point de montage | Taille |
| --- | --- |
| / | 17 Go |
| /boot | 512 Mo |
| swap | 256 Mo |
| /home | 1 Go |

- Vous laisserez cocher les paquets par défaut et sélectionnerez comme source d’installation le serveur de dépôt français de la liste (ftp.fr.debian.org)

### ✓ Tester la connectivité réseau

- Assurez-vous de la connectivité :
- Entre vos systèmes
- Avec les machines de votre binôme

#### Partie 2 – Configuration des utilisateurs et de l’environnement

### 2.1 Création d’utilisateurs et de groupes

### ✓ Liste des membres du personnel

#### • La société comporte 9 employés répartis en 5 services comme indiqué ci-dessous :

| Services | Membres |
| --- | --- |
| Direction | Rick Grimes |
| Commercial | Daryl Dixon Gabriel Stokes Maggie Greene |
| Comptabilité | Eugene Porter Carol Peletier (intérimaire) |
| Informatique | Vous-même (Administrateur) Votre binôme (Administrateur) |
| Logistique | Rosita Espinosa Morgan Jones |

- Chaque compte utilisateur sera identifié par la première lettre de son prénom, suivi de son nom de famille entier. Les mots de passe seront affectés à votre libre convenance, tout en respectant les recommandations de l’ANSSI. (https://www.ssi.gouv.fr/guide/mot-depasse/). Les mots de passe n’expirent jamais.

#### • Vous adopterez une convention de nommage pour les groupes, que vous conserverez, quel que soit le système d’exploitation.

#### ✓ Sur le poste Windows 10

- Le système Windows 10 sera utilisé par tous les utilisateurs. Vous créerez donc les groupes et comptes nécessaires en précisant dans le champ description leur service d’appartenance. Vous créerez une partie via la commande (la direction, comptabilité), une partie en PowerShell (les groupes informatiques, logistiques), une partie en graphique (les commerciaux).
- Ces utilisateurs posséderont tous dans le dossier « Bureau » de leur profil un dossier nommé Procédures qui contiendra, en outre, un fichier Règlement intérieur.

- Le poste d’intérimaire comptable est un emploi à mi-temps. La société a décidé de contraindre les heures d’ouverture de session disponibles de ce compte de 9h00 jusque 12h00 tous les jours ouvrés (lundi au vendredi).

### ✓ Sur le poste Debian 10

- Tous les utilisateurs de la société sont susceptibles d’utiliser ce poste localement ou en connexion à distance. Par conséquent, sa base de comptes contiendra tous les utilisateurs et groupes. Tous les utilisateurs auront un /bin/bash sauf votre le prestataire en KSH.

Contraintes supplémentaires :

#### ✓ Sur le poste Windows 10

- La stratégie globale de sécurité de mots de passe comportera ces contraintes :
- 12 caractères au minimum
- Changement obligatoire tous les 25 jours
- Exigences de complexité activées
- Pour plus de sûreté, vous ajouterez un autre compte d’administrateur du système en ligne de commande « cmd » et lui indiquerez un mot de passe.

- Les membres du service informatique doivent à l’aide de leur compte pouvoir

#### se connecter sur le système et bénéficier des privilèges d’administrateurs.

#### ✓ Sur les postes Windows 10 & Debian 10

- Le changement de mot de passe du compte utilisateur de votre prestataire devra être forcé à sa première connexion.

### 2.2 Configuration de l’environnement de travail

### ✓ Sur le poste Windows 10

- Les restrictions suivantes seront à paramétrer pour tous les utilisateurs non administrateurs du système :
- Supprimer les fonctions de gravure CD et empêcher tout accès au lecteur CD et DVD
- Empêcher le lancement des outils de modification du registre (comme regedit...)
- Forcer l’utilisation d’une image de votre choix en tant que fond d’écran
- En outre, le pare-feu devra être obligatoirement actif sur le poste Windows, quel que soit l’utilisateur connecté.

### ✓ Sur le poste Debian 10

- Avec l’éditeur de texte Vim, en une seule ligne avec :g/ (remplacer), commentez les sources deb-src dans /etc/apt/sources.list.
- N’oubliez pas de commenter la ligne indiquant le DVD.
- Pour améliorer le confort sous Vim, vous mettrez à jour l’application via le package simplement nommé « vim » et activerez automatiquement la coloration syntaxique et la numérotation des lignes.

#### Partie 3 – Configuration du stockage et des ressources

#### 3.1 Partitionnement de disques

### ✓ Sur le poste Windows 10

- Via l’outil en ligne de commande DISKPART, sur le deuxième disque dur, vous utiliserez le format de table de partition MBR. Vous créerez sur celui-ci une partition nommée DATA, accessible par la lettre D: d’une taille de 15 Go.

### ✓ Sur le poste Debian 10

- Trois partitions principales seront créées sur le deuxième disque dur :
- La 1re, en ext4, occupera un espace de 15 Go et se nommera PROFILS
- La 2e, formatée en ext4, fera 15 Go et s’appellera DATA
- La 3e, formatée en xfs (le système de fichiers n’est pas installé par défaut),

#### occupera tout l’espace restant et se nommera LOGS

#### 3.2 Occupation des espaces disques

#### ✓ Sur le poste Debian 10

#### N.B : il est fortement conseillé de réaliser un snapshot machine éteinte machine éteinte.

- Répertoires d’accueil

Finalement, l’espace alloué au dossier contenant les profils utilisateurs « /home » a été sous- estimé. En conséquence, il vous est demandé de remplacer définitivement ce volume par celui nommé PROFILS, créé précédemment. Une fois les actions terminées, vous testerez que les utilisateurs ont bien accès à leurs données personnelles.

- Dossiers de service

Les données mises en commun entre membres de chaque service seront stockées au sein du volume appelé DATA. Ce dernier sera monté automatiquement dans le dossier /services et hébergera l’arborescence ci-dessous. Faites en sorte que tout nouveau fichier créé dans ce répertoire appartienne au groupe documentation.

- Pour éviter tout problème de confidentialité, chaque dossier ne sera accessible en lecture et écriture qu’aux seuls membres de chaque groupe.

#### Par exemple, les commerciaux seront les seuls à pouvoir accéder en lecture et modification au dossier commercial.

### ✓ Sur le poste Windows 10

- À l’emplacement D:\données, vous créerez un dossier Commerciaux, dont l’accès sera interdit à toute personne étrangère au service.
- De plus, les informaticiens bénéficieront pour leur propre besoin, d’un dossier D:\Support_Info leur permettant d’y déposer des fichiers et dossiers. Son accès sera bien évidemment restrictif.

#### N.B : il est fortement conseillé de réaliser un snapshot machine éteinte.

### 3.3 Création de partages réseau

- En suivant les bonnes pratiques, vous partagerez le dossier Support_Info. Il sera invisible aux yeux de tous pour plus de sécurité. En cas de nécessité de déployer un partage similaire sur un autre poste, vous chercherez la commande PowerShell équivalente à vos actions, que vous conserverez dans un fichier PowerShell .ps1. Vous afficherez avec la commande cmd la liste des partages disponible.
- Afin d’en tester l’accès, depuis sa machine W10, votre binôme doit créer un lecteur réseau U: qui pointera vers votre dossier partagé. Ce lecteur devra apparaître automatiquement à l’ouverture de session. À cette fin, deux méthodes opérationnelles différentes devront être trouvées.
- Enfin, après cela, vous validerez l’accès en écriture en y créant un fichier (toujours depuis la machine Windows 10 de votre binôme).

### 3.4 Gestion d’imprimantes

- Une imprimante HP LaserJet M9050 MFP est à installer sur le système Windows. Elle doit être partagée sur le réseau afin de la rendre disponible pour d’autres postes. Vous utiliserez les pilotes fournis ici : \\10.0.0.6\Distrib\Drivers\Imprimante\upd-pcl6-x64- 7.0.0.24832.exe
- Son adresse IP fictive sera constituée de la manière suivante :

#### o Les deux premiers octets seront les mêmes que ceux de W10-VosInitiales

#### o Le troisième octet sera 10101000

#### o Le dernier octet sera le même que celui de W10-VosInitiales

- Les permissions d’utilisation de cette dernière sont les suivantes :
- Tous les utilisateurs peuvent imprimer
- Le service Comptabilité peut supprimer des impressions bloquées en cas de problèmes

- Le service informatique possède le contrôle total
- Après l'avoir connectée, votre binôme la déclare comme imprimante par défaut sur son poste Windows 10.
- Pour l’édition de documents comptables volumineux (bilan de fin d’exercice, état des provisions...), un pool d’imprimantes devra être mis en œuvre, autorisant l’impression sur 2 périphériques d’impression physiques Xerox Office Color \\10.0.0.6\Distrib\Drivers\Imprimante\XCC70_5.523.0.0_PrintSetup.exe ):
- Les adresses IP fictives seront constituées de la manière suivante :

#### o Les deux premiers octets seront les mêmes que ceux de DEB10-VosInitiales

#### o Les troisièmes octets seront 10101000 et 10101001

#### o Les derniers octets seront les mêmes que celui de DEB10-VosInitiales

- Vous tiendrez compte des caractéristiques suivantes :
- Seul le service Comptabilité est habilité à utiliser ces périphériques et uniquement entre 19h00 et 3h00

### o Les administrateurs (service informatique) possèdent le contrôle total.

- Créer 2 files d’attente pour la Xerox Office Color. Les directeurs auront la priorité sur les autres groupes.

#### • Déplacer le spool d’impression sur D : (au lieu de C:\windows).

#### Partie 4 – Configuration avancée des systèmes

#### 4.1 Configuration avancée système Debian

### N.B : il est fortement conseillé de réaliser un snapshot machine éteinte.

- Afin d’accélérer quelque peu le démarrage du système, l’affichage du menu du chargeur d’amorçage grub ne durera que 2 secondes.
- Finalement, l’espace réservé à la pagination n’est pas suffisant. Il faudrait ainsi utiliser, et ce de façon définitive un swap de 1 Go, pour cela vous vous servirez de l’espace restant sur le premier disque.

#### • Vous mettrez à jour l’intégralité des paquets de votre système Debian.

### 4.2 Configuration avancée système Windows 10

- Pour permettre la reconfiguration du système Windows 10 depuis un système distant, vous activerez la fonctionnalité du bureau à distance avec authentification au niveau du réseau (NLA) et donnerez les autorisations adéquates pour le compte de votre binôme.
- Vérifiez le numéro de port de RDP avec la commande netstat -an.

### • Demandez à votre binôme de se connecter à distance sur votre poste Windows 10 afin de tester le bon fonctionnement du service RDP.

#### Partie 5 – Installation d’applications

### 5.1 Installation d’application sur le Windows 10

- Vous chercherez et validerez la possibilité d’installer de façon silencieuse le logiciel 7zip. C’est-à-dire, qu’aucune boîte de dialogue ou assistant graphique ne doit s’afficher à l’écran au déclenchement de l’installation, hormis bien sûr l’alerte UAC (regarder dans l’aide et la FAQ du site officiel de 7zip). Vous trouverez le logiciel ici : \\10.0.0.6\Distrib\logiciels\applications\7zip

#### 5.2 Installation d’application sur le poste Debian 10

- Sans toucher aux paramétrages actuels du poste Windows, vous vous connecterez à ce dernier à l’aide du protocole RDP. Pour cela, vous rechercherez et installerez une application cliente disponible sur les dépôts officiels sous forme graphique capable entre autres de gérer ce protocole, sachant que Vinagre et freerdp ne permettent pas facilement de gérer l’authentification NLA.
- Installez Webmin afin que l’administrateur puis effectuer une partie de son travail via une interface web graphique.

#### Partie 6 – Sauvegarde et restauration

#### 6.1 Sauvegarde sur le poste Debian 10

- Afin d’éviter toute perte de données importantes, vous planifierez la sauvegarde quotidienne à 12h30 sous forme de fichiers « tar » :
- Des données personnelles des utilisateurs
- Des fichiers de données présents dans les dossiers de service
- Pour vous prémunir d’un arrêt brutal du système, vous configurerez une duplication des fichiers à l’aide de la commande scp en direction d’un dossier qui sera mis à disposition à distance sur le poste Debian de votre binôme.

#### N.B : il se peut que la commande scp ne soit pas présente sur votre système. Vous installerez le cas échéant les paquets nécessaires.

#### 6.2 Sauvegarde sur les postes Windows 10

- Vous ajouterez tout d’abord un nouveau disque dur de 60 Go dans le cas où vous manqueriez d’espace de stockage.
- Vous réaliserez une image système permettant en cas de panne importante de restaurer le système d’exploitation en intégralité.
- Ensuite, vous planifierez une sauvegarde journalière des données du service informatique (dossier support informatique) à 12h45. Les fichiers résultants seront placés sur un partage Support_Info de votre binôme (machine W10) dans un dossier qui sera créé à cette fin.

### • Enfin, vous paramétrerez les points de restauration sur le volume C: et réserverez à cet usage 8% de la capacité du lecteur.

#### Partie 7 – Pour aller plus loin – Partitionnement LVM

#### 7.1 Configuration du stockage et des ressources

- Sur le poste Debian, la partition nommée LOGS sera montée de façon permanente dans le dossier /var/log afin de soulager la partition utilisée jusque-là. De nombreux fichiers y sont positionnés et utilisés notamment par le système en quasi-permanence. Vous veillerez donc à ne perdre aucune information vitale. Vous vérifierez après coup que l’inscription des évènements fonctionne correctement.
- Depuis le système Debian, vous devez monter le partage Support_Info hébergé sur le poste Windows, à l’aide du compte utilisateur adéquat. Attention à la problématique de version de protocole SMB supportée par Windows 10.

#### 7.2 Configuration avancée des systèmes

- Sur le poste Windows : pour économiser l’espace de la partition système, vous déplacerez le fichier de pagination (swap) à la racine du lecteur D: en laissant le système gérer la taille du fichier.
- Sur le poste Debian : plusieurs applications installées depuis les sources vont être installées dans /opt. Pour plus de flexibilité, l’espace disque accessible à cet emplacement sera géré au moyen de LVM.
- Vous ajouterez 2 nouveaux disques SCSI de 20Go ; vérifier leur bonne prise en compte par le système.

#### Configuration LVM :

- Au moyen des commandes appropriées, vous créerez un volume logique LVM de 32Go

#### Montage de /opt depuis le volume logique créé précédemment :

- Le volume logique créé précédemment est à formater en ext4. Il doit être

#### accessible depuis /opt et ce de façon permanente.

- Vous trouverez un fichier Excel (Résultats_séminaire.xlsx) comprenant les notes des employés aux derniers séminaires. Veuillez l’ouvrir et compléter :

- La colonne à l’aide d’une formule “Total par élève”
- La colonne à l’aide d’une formule “Moyenne par élève”
- La colonne “APPRECIATION” à l’aide d’une condition
- La ligne “Total par matière” est une somme des notes des employés dans une matière

- La ligne “Moyenne par matière” est une moyenne des notes des employés dans une matière

- La ligne “note maximum” indique la meilleure note des employés dans une matière

- La ligne “note minimum” indique la note la plus faible des employés dans une matière

### o La ligne “nombre d’élèves” indique le nombre d’élèves

- Pour calculer l'appréciation selon la condition suivante :
- Si la moyenne et l'assiduité >10 afficher Bien
- Si la moyenne <=10 et l'assiduité >=10 afficher En Progrès
- Si la moyenne >=10 et l'assiduité <10 afficher Trop d'absences
- Si la moyenne et l'assiduité <10 afficher En danger !

Référence du document : 1bxwStCXRceI7RosQCpD9hbMHyCRvkYD1 · SHA-256 c9ad26c2b4912579…

## Correction · Modèle_Solution_MSP · 143 pages transcrites

Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Modèle ancien de 143 pages : ses adresses, choix techniques et erreurs sont conservés comme source historique. La solution adaptée de 27 pages est prioritaire pour l’aide pédagogique.

Correction originale : à consulter après avoir tenté l’exercice.

#### Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des cours Outils collaboratifs offices 365, Base des réseaux, Windows client, Linux client.

#### Durée estimée

4 jours et 2 heures

### Énoncé

#### 1. Partie 1 – Installation des systèmes

#### 1.1 Présentation

#### L’objectif de cette mise en situation professionnelle est d’installer et configurer progressivement deux systèmes d’exploitation : Microsoft Windows 10 et Debian 10.

#### DHCP

1.1.1 Vous installerez 2 systèmes clients à l’aide de l’outil de virtualisation VMware Workstation en respectant les caractéristiques spécifiques qui vous seront fournies plus tard.

1.1.2 Certaines tâches demandées nécessiteront de travailler en binôme.

![Présentation et caractéristiques de la maquette](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p1-1.webp)

Présentation et caractéristiques de la maquette

Vous prendrez soin de créer des procédures relatant toutes vos actions. Ces procédures doivent être partagées avec votre coach à des fins d'aide et de vérification. Grace à l’outil PSR et capture écran. Nous pourrons faire rapidement des procédures.

Nous paramétrons le nombre de capture à 200 minimum pour avoir suffisamment de ressources.

![Présentation et caractéristiques de la maquette](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p2-2.webp)

Présentation et caractéristiques de la maquette

![Présentation et caractéristiques de la maquette](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p2-3.webp)

Présentation et caractéristiques de la maquette

![Présentation et caractéristiques de la maquette](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p2-4.webp)

Présentation et caractéristiques de la maquette

### 1.2 Caractéristiques matérielles des machines virtuelles

#### Poste Client Windows

Nom : W10-VosInitiales. Système d’exploitation : Windows 10 Professionnel.

| Prérequis matériels | Valeur |
| --- | --- |
| CPU et mémoire | Allouer les ressources en suivant les recommandations Microsoft |
| Disque dur | 1 disque dur de 32 Go ; 1 disque dur additionnel de 40 Go |
| Réseau | 1 interface réseau en « Bridged » |

#### Poste Client Linux

Nom : DEB10-VosInitiales. Système : Debian 10.

| Prérequis matériels | Valeur |
| --- | --- |
| CPU | 1 vCPU |
| Mémoire | 2048 MB |
| Disque dur | 1 disque dur de 20 Go ; 1 disque dur additionnel de 40 Go |
| Réseau | 1 interface réseau en « Bridged » |

#### Création des machines virtuelles

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p4-5.webp)

Création des machines virtuelles

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p4-6.webp)

Création des machines virtuelles

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p5-7.webp)

Création des machines virtuelles

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p5-8.webp)

Création des machines virtuelles

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p6-9.webp)

Création des machines virtuelles

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p6-10.webp)

Création des machines virtuelles

Spécifié un emplacement pour le disque (le mieux et de mettre le disque virtuelle sur un disque physique different du système d’exploitation).

Choississez la carte reseau virtuelle “host-only”:

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p7-11.webp)

Création des machines virtuelles

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p7-12.webp)

Création des machines virtuelles

Nous insérons dans le lecteur virtuel de la VM l’iso demander :

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p8-13.webp)

Création des machines virtuelles

Ajout d’un disque :

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p9-14.webp)

Création des machines virtuelles

![Création des machines virtuelles](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p9-15.webp)

Création des machines virtuelles

#### 1.3 Tâches à réaliser

#### ✓ Schéma et tableau récapitulatif

1.3.1 Votre première tâche sera, en utilisant l’illustration précédemment indiquée, de reproduire le schéma et d’y faire figurer toutes les informations liées à l’adressage IP. Vous vous servirez pour cela de tout moyen à votre convenance (www.draw.io, MS Visio, Word ou Paint...). Voici le schéma demandé (les adresses IP sont ici à titre d'exemple et ne seront certainement pas les vôtres):

#### 1.3.2 Vous produirez également un tableau récapitulant l’ensemble des informations relatives aux configurations des systèmes (login/mots de passe, noms, adresses IP, processeurs, mémoire...).

![Installation et service Windows Update](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p10-16.webp)

Installation et service Windows Update

- Installation des systèmes 1.3.3 Sur le poste Microsoft sera déployé le système d’exploitation Windows 10 édition professionnelle, sur le 1er disque dur qui ne comportera qu’une seule partition utilisant l’intégralité de l’espace. Vous configurerez le système en respectant les critères précédemment évoqués (nommage, adressage IP...). Vous empêcherez en outre, le service Windows Update, de se connecter aux serveurs Microsoft. Vous trouverez l’iso d’installation ici : \\Distrib\iso\os\windows\10\ Lors de l’installation du système d’exploitation windows 10 selectionner « windows 10 professionnel » :

![Installation et service Windows Update](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p11-17.webp)

Installation et service Windows Update

Dans services.msc nous pouvons voir le service windows update. Il nous suffit de le mettre en démarrage manuel (au lancement du système d’exploitation) et de l’arrêter.

![Installation et service Windows Update](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p12-18.webp)

Installation et service Windows Update

1.3.4 Quant au Client Debian, en plus des informations déjà mentionnées, vous installerez le système depuis l’image ISO « DVD » de la distribution Debian en version 10.x avec un environnement graphique. Vous trouverez l’iso d’installation ici : \\10.0.0.6\Distrib\iso\os\unix-linux\linux\Debian\debian 10 Buster\debian-10.2.0amd64-DVD-1.iso

Vous partitionnerez le disque manuellement selon le schéma suivant en prenant garde de pouvoir exploiter ultérieurement l’espace non alloué et Vous conserverez le système de fichiers

#### par défaut des différents points de montage.

/ 17 Go

/boot 512 Mo

swap 256 Mo

/home 1 Go

Pour la racine nous sélectionnerons le disque à partitionner :

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p13-19.webp)

Installation et partitionnement de Debian

Une nouvelle partition apparait alors, il nous suffit maintenant de la modeler comme nous le désirons :

Puis nous utiliserons le « gestionnaire de partition logique » :

Puis nous ferons un groupe de volume :

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p14-20.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p14-21.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p14-22.webp)

Installation et partitionnement de Debian

Ensuite nous ferons nos 3 volumes :

On le nomme :

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p15-23.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p15-24.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p15-25.webp)

Installation et partitionnement de Debian

On le taille :

Puis les 2 autres (boot et swap) et on termine :

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p16-26.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p16-27.webp)

Installation et partitionnement de Debian

Ce qui nous donne :

Nous sélections le bon volume :

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p17-28.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p17-29.webp)

Installation et partitionnement de Debian

Pour sélectionner le bon montage :

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p18-30.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p18-31.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p18-32.webp)

Installation et partitionnement de Debian

Pour obtenir les points de montage par défaut nous entrerons dans « point de montage » :

Une fois satisfait de notre partition nous cliquerons sur :

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p19-33.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p19-34.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p19-35.webp)

Installation et partitionnement de Debian

Afin de pouvoir continuer, pour les autres volumes de la manière. Pour le swap nous devrons cliquer sur « utiliser comme » une fois la partition définit :

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p20-36.webp)

Installation et partitionnement de Debian

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p20-37.webp)

Installation et partitionnement de Debian

Voici le résultat attendu :

1.3.5 Vous laisserez cochés les paquets par défaut et sélectionnerez comme source d’installation le premier serveur de dépôt miroir français de la liste.

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p21-38.webp)

Installation et partitionnement de Debian

#### Tester la connectivité réseau

1.3.6 Assurez-vous de la connectivité :

#### o Entre vos systèmes

#### o Avec les machines de votre binôme

![Installation et partitionnement de Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p22-39.webp)

Installation et partitionnement de Debian

Tout d’abord nous devrons vérifier les cartes réseaux de nos machines : Sur la machine Windows Ouvrir le panneau de configuration :

Cliquer sur "Réseau et Internet"

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p23-40.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p23-41.webp)

Configuration et vérification réseau

Aller dans le "Centre Réseau et partage"

Accéder aux propriétés de la carte réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p24-42.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p24-43.webp)

Configuration et vérification réseau

Cliquer sur "Propriétés"

Double-clic sur "Protocole Internet version 4"

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p25-44.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p25-45.webp)

Configuration et vérification réseau

Valider en cliquant sur "OK"

#### Vérifiez vos adresse et autres informations IP (passerelle, DNS...) à l'aide de la commande ipconfig /all

Pour que le test de ping que nous allons faire puisse fonctionner nous devons l’autoriser avec l’aide d’une règle dans le pare-feu. (Par défaut le ping ICMPv4 echo 8 est bloqué). Allons dans le pare-feu:

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p26-46.webp)

Configuration et vérification réseau

Créons une nouvelle règle :

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p27-47.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p27-48.webp)

Configuration et vérification réseau

Nous créerons une règle personnalisée :

Autorisant tous les programmes:

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p28-49.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p28-50.webp)

Configuration et vérification réseau

Tous les ports:

Sur tout l’IPV4:

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p29-51.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p29-52.webp)

Configuration et vérification réseau

Sur tous les profils:

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p30-53.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p30-54.webp)

Configuration et vérification réseau

Puis nous la nommerons:

Nous faisons par la suite un ping vers notre machine Debian (elle doit être configurée) afin de vérifier la connexion :

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p31-55.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p31-56.webp)

Configuration et vérification réseau

Sur la machine Linux:

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p32-57.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p32-58.webp)

Configuration et vérification réseau

#### Désactiver puis réactiver la carte réseau afin que les changement soient bien pris en compte.

Pour finir nous ferons la commande ip a afin de vérifier l'adresse IP de la machine Debian puis nous ferons un test de ping vers la machine windows afin de vérifier la connexion:

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p33-59.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p33-60.webp)

Configuration et vérification réseau

![Configuration et vérification réseau](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p33-61.webp)

Configuration et vérification réseau

#### 2 Partie 2 – Configuration des utilisateurs et de l’environnement

#### 2.1 Création d’utilisateurs et de groupes

#### ✓ Liste des membres du personnel 2.1.1 La société comporte 9 employés répartis en 5 services comme indiqué cidessous :

| Services | Membres |
| --- | --- |
| Direction | Rick Grimes |
| Commercial | Daryl Dixon Gabriel Stokes Maggie Greene |
| Comptabilité | Eugene Porter Carol Peletier (intérimaire) |
| Informatique | Vous-même (Administrateur) Votre binôme (prestataire) |
| Logistique | Rosita Espinosa Morgan Jones |

2.1.2 Chaque compte utilisateur sera identifié par la première lettre de son prénom, suivi de son nom. Les mots de passe seront affectés à votre libre convenance, tout en respectant les recommandations de l’ANSSI. ( https://www.ssi.gouv.fr/guide/mot-de-passe/ )

#### Voici les recommandations de l’ANSSI pour la création de mot de passe :

#### Choisissez des mots de passe d’au moins 12 caractères de types différents (majuscules, minuscules, chiffres, caractères spéciaux). https://www.ssi.gouv.fr/guide/mot-de-passe/

#### Pour aller plus vite nous utiliserons Excel :

#### Pour le mdp nous utiliserons la première lettre du nom (en majuscule) et la première lettre du prénom (en majuscule) + fourni par le formateur

```
=MAJUSCULE(STXT([@Prénom];1;1))&MAJUSCULE(STXT([@Nom];1;1))&"fourni par le formateur"
```

#### Pour le login :

```
=MINUSCULE(STXT([@Prénom];1;1)&MINUSCULE([@Nom]))
```

#### Pour le mail (qui servira d’UPN plus tard sur un serveur) : =MINUSCULE([@Prénom])&MINUSCULE([@Nom])&"@example.com"

### Table des utilisateurs illustrée dans le modèle

Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

| Prénom | Nom | login | mail | password | description |
| --- | --- | --- | --- | --- | --- |
| Rick | Grimes | rgrimes | rickgrimes@example.com | fourni par le formateur | directeur |
| Daryl | Dixon | ddixon | daryldixon@example.com | fourni par le formateur | commercial |
| Gabriel | Stokes | gstokes | gabrielstokes@example.com | fourni par le formateur | vendeur |
| Maggie | Greene | mgreene | maggiegreene@example.com | fourni par le formateur | commercial |
| Eugene | Porter | eporter | eugeneporter@example.com | fourni par le formateur | comptable |
| Carol | Peletier | cpeletier | carolpeletier @example.com | fourni par le formateur | intérimaire |
| Tracer | Lexton | tlexton | tracerlexton @example.com | fourni par le formateur | administratrice |
| Jesse | MacCree | jmaccree | jessemaccree @example.com | fourni par le formateur | prestataire |
| Rosita | Espinosa | respinosa | rositaespinosa@example.com | fourni par le formateur | logistique |
| Morgan | Jones | mjones | morgan jones @example.com | fourni par le formateur | porteur |

#### Fonction STXT

La fonction STXT prend trois paramètres : le texte à traiter (les cellules de la colonne B), l’endroit où commencer (1, la première lettre), puis le nombre de caractères à prendre (1). Pour ajouter une formule, utiliser & ; les fonctions MINUSCULE et MAJUSCULE portent bien leur nom. Pour ajouter du texte, utiliser "LeTexte".

#### Ensuite nous utiliserons une commande powershell afin de créer nos utilisateurs :

#### Attention de bien lancer votre PowerShell en administrateur.

#### Voici la commande utiliser pour la création d’un utilisateur avec un mot de passe :

```
New-LocalUser -FullName "Lena Oxton" -Description "Adminstratrice trop rapide" -Name 
"loxton" -Password (ConvertTo-SecureString -AsPlainText " fourni par le formateur" -Force) -
PasswordNeverExpires
```

Pour plus de facilité encore nous pouvons faire de notre excel un .csv puis, nous écrirons un script qui créera les utilisateurs pour nous :

```
############################################################### 
# Script de création des utilisateurs dans windows 10 client  # 
# Tracer Lexton                                               # 
# créé le 20 octobre 2020                                     # 
# Mis à jour le 20 octobre 2020                               # 
# Mis à jour par Jesse MacCree                                # 
# le 20 octobre 2020                                          # 
# Fonctionnel sous Windows 10 entreprise build 2004           # 
###############################################################  
 
# Indiquer l'adresse complète du fichier utilisateurs .csv 
# Indiquer le délimiteur pour le fichier .csv 
# Indiquer les noms d'en-têtes 
 
 
$datasource=Import-CSV -Path "C:\Users\fx\Desktop\utilisateurs.csv" -Delimiter ";" -
Header Prénom,Nom,login,mail,password,description 
 
#Boucle d'alimentation  
 
Foreach($data in $datasource) {  
# Nom et prénom de famille 
$FullName=$data.Nom + " " + $datasource.Prénom 
 
# Nom de famille 
$login=$data.Nom 
 
#le mot de passe 
$password=$data.password 
 
#la description 
$description=$data.description 
 
#creation utilisateur avec les toutes les données renseignées 
New-LocalUser -FullName "$FullName" -Description "$description" -Name "$login" -
Password (ConvertTo-SecureString -AsPlainText "$password" -Force) 
 
# Fait une liste 
    $nomliste=$affich 
 
    $liste = $liste + $nomliste + "," 
} 
 
# Affiche le résultat des imports 
write-host "Les utilisateurs : " -ForegroundColor Black 
write-host "$liste" -foregroundcolor red 
write-host "ont été créés" -ForegroundColor Black
```

2.1.3 Vous adopterez une convention de nommage pour les groupes, que vous conserverez, quel que soit le système d’exploitation. Nous pouvons proposer comme convention de nommage : L_ Le nom du groupe_Le droit accorder au groupe L indiquant que le groupe est local R indiquant le droit de lecture W indiquant le droit de modification X indiquant le droit d’exécution CT indiquant le droit de contrôle total Exemple : L_Comptabilité le groupe contenant tous les comptables L_Commercial_W le groupe pour les commerciaux avec les droits en modification L_Informatique_CT les groupes pour les informaticiens avec le droit en contrôle total

- Sur le poste Windows 10 2.1.4 Le système Windows 10 sera utilisé par tous les membres. Vous créerez donc les groupes et comptes nécessaires en précisant dans le champ description leur service d’appartenance. Vous créerez une partie via la commande (la direction, comptabilité), une partie en PowerShell (les groupes informatiques, logistiques), une partie en graphique (les commerciaux). Nous utiliserons comme pour les utilisateurs une commande PowerShell : New-LocalGroup -Name ”L_informatique” -Description “groupe informatiques” Pour les groupes nous pouvons procéder comme pour les utilisateurs : ############################################################### # Script de création des groupes dans windows 10 client # # Tracer Lexton # # créé le 20 octobre 2020 # # Mis à jour le 20 octobre 2020 # # Mis à jour par Jesse MacCree # # le 20 octobre 2020 # # Fonctionnel sous Windows 10 entreprise build 2004 # ############################################################### # Indiquer l'adresse complète du fichier utilisateurs .csv # Indiquer le délimiteur pour le fichier .csv # Indiquer les noms d'en-têtes $datasource=Import-CSV -Path "C:\Users\fx\Desktop\groupes.csv" -Delimiter ";" -Header Groupes,description #Boucle d'alimentation Foreach($data in $datasource) \{ # Nom des groupes $groupes=$data.Groupes # description des groupes $description=$data.description #creation du groupe avec les données renseignées dnas le tableau csv New-LocalGroup -Name ”$groupes” -Description “$description” # Fait une liste $nomliste=$affich $liste = $liste + $nomliste + "," \} # Affiche le résultat des imports write-host "Les groupes : " -ForegroundColor Black write-host "$liste" -foregroundcolor red write-host "ont été créés" -ForegroundColor Black Avec la commande : Net localgroup direction /add Net localgroup direction /comment:”le groupe de la direction” Net localgroup comptabilite /add Net localgroup comptabilite /comment:”le groupe de ceux qui compte”

Avec l’interface graphique : Ouvrir la console "lusrmgr.msc"

Sous "Groupes" : clic-droit -> Nouveau Groupe..."

![Comptes et groupes du laboratoire](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p38-62.webp)

Comptes et groupes du laboratoire

![Comptes et groupes du laboratoire](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p38-63.webp)

Comptes et groupes du laboratoire

Puis cliquer sur créer :

Pour ajouter un utilisateur dans un groupe : Add-LocalGroupMember -Group "L_comptabilite" -Member "eporter" Add-LocalGroupMember -Group "L_comptabilite" -Member "cpeletier" Add-LocalGroupMember -Group "L_commercial" -Member "ddixon" Add-LocalGroupMember -Group "L_commercial" -Member "gstokes” Add-LocalGroupMember -Group "L_commercial" -Member "mgreene"

![Comptes et groupes du laboratoire](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p39-64.webp)

Comptes et groupes du laboratoire

2.1.5 Ces utilisateurs possèderont tous dans le dossier « Bureau » de leur profil un dossier nommé « Procédures » qui contiendra, en outre, un fichier « Règlement intérieur ».

Dans le dossier 'C:\Users\Default\Desktop', ajouter le dossier 'Procédures' qui contiendra le fichier 'Règlement intérieur'

2.1.6 Le poste d’intérimaire comptable est un emploi à mi-temps. La société a décidé de contraindre les heures d’ouverture de session disponibles de ce compte de 9h00 jusque 12h00 tous les jours ouvrés (lundi au vendredi). Nous utiliserons une commande pour cela : net user cpeletier /times:lundi-vendredi,9:00-12:00

- Sur le poste Debian 10 2.1.7 Tous les utilisateurs de la société sont susceptibles d’utiliser ce poste localement ou en connexion à distance. Par conséquent, sa base de comptes contiendra tous les utilisateurs et groupes. Tous les utilisateurs auront un /bin/bash sauf votre le prestataire en KSH Commencer par ajouter les groupes avec la commande 'addgroup' :

```
# addgroup direction commercial comptabilite informatique logistique
```

#### Pour chaque utilisateurs:

Ajouter l'utilisateur en lui attribuant un commentaire, un login, un répertoire home, un groupe, un shell et un mot de passe:

```
# useradd -c "Rick Grimes" rgrimes -m -g direction --shell /bin/bash -p fourni par le formateur
```

Pour le shell KSH de notre prestataire : # useradd -c "365 magnum et presta bien faite" jmaccree -m -g informatique --shell /bin/ksh - p fourni par le formateur Pour vérifier nous pouvons regarder les utilisateurs : #cat /etc/shadow Regarder les groupes : #cat /etc/groups Et nous connecter avec les utilisateurs : #su loxton

#### Contraintes supplémentaires

- Sur le poste Windows 10 2.1.8 La stratégie globale de sécurité de mots de passe comportera les contraintes suivantes : 2.1.9 12 caractères au minimum 2.1.10 Changement obligatoire tous les 25 jours 2.1.11 Exigences de complexité actives Pour cela nous devons ouvrir avec “executer” secpol.msc :

Modifier :

- Durée de vie maximale du mot de passe : 25 jours
- Le mot de passe doit respecter des exigences de complexité : Activer
- Longueur minimale du mot de passe : 12 caractères

Pour plus de sureté, vous ajouterez un autre compte d’administrateur du système en ligne de commande « cmd » et lui indiquerez un mot de passe. Pour ajouter un utilisateur en administrateur (attention il faut que l’invite de commande soit exécutée en administrateur): net user admin "fourni par le formateur" /add Pour changer son mot de passe : net user rgrimes *

#### 2.1.12 Les membres du service informatique doivent à l’aide de leur compte pouvoir se connecter sur le système et bénéficier des privilèges d’administrateurs.

```
Add-LocalGroupMember -Group "Administrateurs" -Member "loxton"  
Add-LocalGroupMember -Group "Administrateurs" -Member "jmaccree"
```

![Comptes et groupes du laboratoire](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p42-65.webp)

Comptes et groupes du laboratoire

- Sur les postes Windows 10 & Debian 10 2.1.13 Le changement de mot de passe du compte utilisateur de votre binôme devra être forcé à sa première connexion.

Sur le poste Debian pour forcer le changement de mot de passe de notre prestataire informatique Jesse Mac Cree : # chage jmaccree -d 0

![Comptes et groupes du laboratoire](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p43-66.webp)

Comptes et groupes du laboratoire

#### 2.2 Configuration de l’environnement de travail

- Sur le poste Windows 10 2.2.1 Les restrictions suivantes seront à paramétrer pour tous les utilisateurs nonadministrateurs du système : 2.2.2 Supprimer les fonctions de gravure CD et empêcher tout accès au lecteur CD et DVD 2.2.3 Empêcher le lancement des outils de modification du registre (comme regedit...) 2.2.4 Forcer l’utilisation d’une image de votre choix en tant que fond d’écran 2.2.5 En outre, le pare-feu devra être obligatoirement actif sur le poste Windows, quel que soit l’utilisateur connecté. Pour cela nous allons utiliser des GPO local : Nous allons donc ouvrir un console : mmc

Ajouter le composant enfichable "Editeur d'objets de stratégie",

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p44-67.webp)

Stratégies locales et pare-feu

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p44-68.webp)

Stratégies locales et pare-feu

Dans l'assistant cliquer sur Parcourir,

Aller sur l'onglet Utilisateurs et choisir "Non-administrateurs"

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p45-69.webp)

Stratégies locales et pare-feu

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p45-70.webp)

Stratégies locales et pare-feu

Sous "Configuration utilisateur" - "Modèles d'administration" - "Accès au stockage amovible » : Activer "CD et DVD : refuser l'accès en lecture/écriture"

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p46-71.webp)

Stratégies locales et pare-feu

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p46-72.webp)

Stratégies locales et pare-feu

Sous "Composant Windows" - "Windows Store", désactiver l'application Store

Sous "Modèles d'administration" - "Système", activer "Empêche l'accès aux outils de modifications du Registre"

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p47-73.webp)

Stratégies locales et pare-feu

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p47-74.webp)

Stratégies locales et pare-feu

Sous "Modèle d'administration" - "Bureau" -"Bureau", configurer "Papier peint du Bureau

Activer et ajouter le chemin de l'image de fond d'écran

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p48-75.webp)

Stratégies locales et pare-feu

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p48-76.webp)

Stratégies locales et pare-feu

Sous "Configuration ordinateur" - "Paramètres de sécurité" - "Pare-feu Windows Defender"

"Propriétés du Pare-feu Windows"

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p49-77.webp)

Stratégies locales et pare-feu

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p49-78.webp)

Stratégies locales et pare-feu

Il faudra l’activer sur tous les profils :

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p50-79.webp)

Stratégies locales et pare-feu

Pour finir nous faisons un gpudate pour appliquer les GPO et un gpresult /R pour voir si nos GPO s’applique sans problèmes :

#### Commandes et résultats de la capture

```
gpupdate
gpresult /R
```

La capture indique que les stratégies ordinateur et utilisateur ont été mises à jour sans erreur. Le résultat RSOP concerne une station de travail autonome ; la stratégie de groupe locale est appliquée.

![Stratégies locales et pare-feu](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p51-80.webp)

Stratégies locales et pare-feu

#### ✓ Sur le poste Debian 10

2.2.6 Avec l’editeur de texte VIM; En une seule ligne avec l’option “g” (remplacer) décommenter les sources deb-src dans /etc/apt/sources.list. 2.2.7 N’oublier pas de commenter la ligne indiquant le DVD. Nous rentrerons avec vim dans l’édition du fichier /etc/apt/sources.list: #vim /etc/pat/sources.list Puis nous utiliserons l’option g ent tapant sur”: :g:/^deb-src/s/^/#/gc

![Sources APT et réglages Vim](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p52-81.webp)

Sources APT et réglages Vim

Le /gc à la fin déclenchera une demande sur les chagement a valider ou non :

![Sources APT et réglages Vim](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p53-82.webp)

Sources APT et réglages Vim

![Sources APT et réglages Vim](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p53-83.webp)

Sources APT et réglages Vim

2.2.8 Pour améliorer le confort sous Vim, vous mettrez à jour l’application via le package simplement nommé « vim» et activerez automatiquement la coloration syntaxique et la numérotation des lignes. Nous allons d’abord mettre à jour la base de données des paquets : # aptitude update Puis lancer l’installation : # apt install vim Ensuite, modifier le fichier /etc/vim/vimrc comme suit : Décommenter la ligne syntax on, chercher les lignes commençant par « set » et modifier la ligne set compatible en set nocompatible. Si elle n’existe pas, ajoutez totalement la directive. Enfin, ajouter la ligne set number. syntax on : Active le surlignage syntaxique de vim.

Tout les modifications effectuées dans /etc/vim/vimrc s’appliquent sur tous les utilisateurs. Afin de personnaliser le vim pour chaque utilisateur il faut faire des modification dans /home/User/.vimrc et ensuite ajouter les lignes : Set number : numérote les lignes du fichier. set nocompatible : Cette option empêche vim d'avoir une compatibilité vi trop affirmée. Elle doit être au début de chaque fichier vimrc car elle affecte beaucoup d'autres options que vous pourriez vouloir modifier.

![Sources APT et réglages Vim](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p54-84.webp)

Sources APT et réglages Vim

#### 3 Partie 3 – Configuration du stockage et des ressources

#### 3.1 Partitionnement de disques

- Sur le poste Windows 10 3.1.1 Via l’outil en ligne de commande DISKPART sur le deuxième disque dur vous utiliserez le format de table de partition « MBR ». Vous créerez sur celui-ci une partition nommée « DATA », accessible par la lettre « D: » d’une taille de 15 Go. DISKPART> list disk N° disque Statut Taille Libre Dyn GPT --------- ------------- ------- ------- --- --- Disque 0 En ligne 32 G octets 0 octets * Disque 1 En ligne 40 G octets 39 G octets DISKPART> select disk 1 Le disque 1 est maintenant le disque sélectionné. DISKPART> list disk N° disque Statut Taille Libre Dyn GPT --------- ------------- ------- ------- --- --- Disque 0 En ligne 32 G octets 0 octets * * Disque 1 En ligne 40 G octets 39 G octets DISKPART> offline disk DiskPart a réussi la mise hors connexion du disque sélectionné. DISKPART> online disk DiskPart a amené le disque sélectionné en ligne. DISKPART> convert MBR DiskPart a correctement converti le disque sélectionné au format MBR. DISKPART> create partition primary size=15000 DiskPart a réussi à créer la partition spécifiée. DISKPART> format fs=ntfs label="DATA" 100 pour cent effectués DiskPart a formaté le volume. DISKPART> assign letter=D DiskPart a correctement assigné la lettre de lecteur ou le point de montage.

Vérifions le résultat, nous pouvons voir avec l’image ci-dessous (grâce à la commande detail disk) la partition de 14G en NTFS et la lettre D assignée Nous pouvons voir (grâce à list disk) que le disque 1 de 40GO n’est pas en GPT, donc en MBR.

#### ✓ Sur le poste Debian 10 3.1.2 Trois partitions principales seront créées sur le deuxième disque dur :

3.1.2.1 La 1re, formatée en ext4, occupera un espace de 15 Go et se nommera « PROFILS »

3.1.2.2 La 2e, formatée en ext4, fera 15 Go et s’appellera « DATA »

3.1.2.3 La 3e, formatée en xfs (le système de fichiers n’est pas installé par défaut), occupera tout l’espace restant et se nommera « LOGS »

En tant que super-utilisateur, Lister les disques pour connaitre le nom du disque à partitionner : # fdisk -l Disque /dev/sda : 21.5 Go, 21474836480 octets 255 têtes, 63 secteurs/piste, 2610 cylindres, total 41943040 secteurs Unités = secteurs de 1 * 512 = 512 octets Taille de secteur (logique / physique) : 512 octets / 512 octets taille d'E/S (minimale / optimale) : 512 octets / 512 octets Identifiant de disque : 0x000db18b Périphérique Amorce Début Fin Blocs Id Système /dev/sda1 * 2048 999423 498688 83 Linux /dev/sda2 41443328 41940991 248832 82 partition d'échange Linux / Solaris /dev/sda3 999424 34201599 16601088 83 Linux /dev/sda4 34201600 36155391 976896 83 Linux

![Disques, montages et permissions Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p56-85.webp)

Disques, montages et permissions Debian

Les entrées de la table de partitions ne sont pas dans l'ordre du disque Disque /dev/sdb : 42.9 Go, 42949672960 octets 255 têtes, 63 secteurs/piste, 5221 cylindres, total 83886080 secteurs Unités = secteurs de 1 * 512 = 512 octets Taille de secteur (logique / physique) : 512 octets / 512 octets taille d'E/S (minimale / optimale) : 512 octets / 512 octets Identifiant de disque : 0x00000000 Le disque /dev/sdb ne contient pas une table de partitions valable Utiliser le disque /dev/sdb avec l'outil fdisk : # fdisk /dev/sdb Utiliser les commandes suivantes afin de créer les trois partitions : 1ère partition : · n : créer une nouvelle partition · p : type de partition primaire · Laisser le numéro de partition par défaut · Laisser le premier secteur par défaut · +15G pour ajouter 15Go 2ème partition: · n : créer une nouvelle partition · p : type de partition primaire · Laisser le numéro de partition par défaut · Laisser le premier secteur par défaut · +15G pour ajouter 15Go 3ème partition: · n : créer une nouvelle partition · p : type de partition primaire · Laisser le numéro de partition par défaut · Laisser le premier secteur par défaut · Laisser le dernier secteur par défaut pour occuper tout l'espace restant Quitter fdisk en utilisant la commande 'w' afin d'écrire les modifications. Installer le paquet 'xfsprogs' pour utiliser le système de fichier xfs: # apt install xfsprogs Formater les partitions : # mkfs.ext4 -L PROFILS /dev/sdb1 # mkfs.ext4 -L DATA /dev/sdb2 # mkfs.xfs -L LOGS /dev/sdb3

#### 3.2 Occupation des espaces disques

#### ✓ Sur le poste Debian 10

N.B : il est fortement conseillé de réaliser un snapshot machine éteinte 3.2.1 Répertoires d’accueil Finalement, l’espace alloué au dossier contenant les profils utilisateurs « /home » a été sous-estimé. En conséquence, il vous est demandé de remplacer définitivement ce volume par celui nommé « PROFILS », crée précédemment. Une fois les actions terminées, vous testerez que les utilisateurs ont bien accès à leurs données personnelles. Répertoire d'accueil Faire une copie temporaire du répertoire /home en préservant les droits : # cp -rp /home /tmp/home-backup Modifier le fichier /etc/fstab: # vim /etc/fstab Commenter la ligne contenant home, en ajoutant un "#" devant : #UUID=4b59933b-136a-4287-8658-c97b2ec93603 /home ext4 defaults 0 2 Ajouter la ligne permettant de monter la partition « PROFILS » dans /home en fin de fichier : LABEL=PROFILS /home ext4 defaults 0 2 Enregistrer les modifications et monter les partitions : # mount -a Copier les données de /tmp/home-backup dans /home : # cp -rp /tmp/home-backup/* /home/

3.2.2 Dossiers de service Les données mises en commun entre membres de chaque service seront stockées au sein du volume appelé « DATA ». Ce dernier sera monté automatiquement dans le dossier « /services » et hébergera l’arborescence ci-dessous :

#### Créer l'arborescence : # mkdir -p /services/ Puis le faire pour chaque dossier

\{commercial,comptabilite,direction,informatique,logistique\} 3.2.3 Pour éviter tout problème de confidentialité, chaque dossier ne sera accessible en lecture et écriture qu’aux seuls membres de chaque groupe. Par exemple, les commerciaux seront les seuls à pouvoir accéder en lecture et modification au dossier « commercial ».

Changer les groupes propriétaires de chaque dossier : # cd /services/ # chown :commercial commercial # chown :comptabilite comptabilite # chown :direction direction # chown :informatique informatique # chown :logistique logistique Changer les droits de tous les répertoires : # chmod 770 * Ou # chmod g+x *

- Sur le poste Windows 10 3.2.4 À l’emplacement « D:\données\ », vous créerez un dossier « Commerciaux », dont l’accès sera interdit à toute personne étrangère au service. Sous D:\données\ créer le dossier 'Commerciaux'

Clic-Droit sur le dossier -> "Propriétés" sur le dossier

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p60-86.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p60-87.webp)

Autorisations NTFS et accès effectif

Sous l'onglet Sécurité cliquer sur "Avancé"

Désactiver l'héritage

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p61-88.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p61-89.webp)

Autorisations NTFS et accès effectif

Supprimer toutes les autorisations héritées de cet objet.

Valider

"Cliquer sur "Ajouter..." puis sur Sélectionnez un principal

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p62-90.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p62-91.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p62-92.webp)

Autorisations NTFS et accès effectif

Sélectionnez “modification” et “Appliquer ces autorisations...” puis cliquer sur ok

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p63-93.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p63-94.webp)

Autorisations NTFS et accès effectif

Ensuite supprimer les autres membres autorisés d’accès de sorte qu’il ne reste plus que le groupe L_commercial_W et le système (l’accès ne sera autorisés exclusivement qu’au groupe L_commercial_W) :

Afin de tester rapidement nos modifications nous pouvons utiliser le l’accès effectifs (onglet « Accès effectif ») et voir le résultat :

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p64-95.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p65-96.webp)

Autorisations NTFS et accès effectif

Si nous changeons le propriétaire du fichier (car ici notre administrateur l’est) nous n’aurons plus aucun n’accès :

3.2.5 De plus, les informaticiens bénéficieront pour leur propre besoin, d’un dossier « D:\Support_Info » leur permettant d’y déposer des fichiers et dossiers. Son accès sera bien évidemment restrictif. Sous DATA (D:), créer le dossier "Support_Info"

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p66-97.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p66-98.webp)

Autorisations NTFS et accès effectif

Clic-Droit sur le dossier -> Propriétés

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p67-99.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p67-100.webp)

Autorisations NTFS et accès effectif

"Désactiver l'héritage"

Valider en cliquant sur "OK"

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p68-101.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p68-102.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p68-103.webp)

Autorisations NTFS et accès effectif

Puis nous procéderons de la même manière :

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p69-104.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p69-105.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p70-106.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p70-107.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p71-108.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p71-109.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p72-110.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p72-111.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p73-112.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p73-113.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p74-114.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p74-115.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p75-116.webp)

Autorisations NTFS et accès effectif

![Autorisations NTFS et accès effectif](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p75-117.webp)

Autorisations NTFS et accès effectif

3.3 Creation de partages reseau N.B : il est fortement conseillé de réaliser un snapshot machine éteinte 3.3.1 En suivant les bonnes pratiques, vous partagerez le dossier « Support_Info ». Il sera invisible aux yeux de tous pour plus de sécurité. En cas de nécessité de déployer un partage similaire sur un autre poste, vous chercherez la commande PowerShell équivalente à vos actions, que vous conserverez dans un fichier PowerShell « .ps1 ». Vous afficherez avec la commande cmd la liste des partages disponible Pour cacher le partage il faut mettre un « $ » à la fin du nom du partage, comme ceci : Clic avec le bouton gauche sur « Propriétés »

![Partage réseau et lecteur persistant](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p76-118.webp)

Partage réseau et lecteur persistant

Clic avec le bouton gauche sur « Partage »

Clic sur « Partage avancé »

![Partage réseau et lecteur persistant](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p77-119.webp)

Partage réseau et lecteur persistant

![Partage réseau et lecteur persistant](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p77-120.webp)

Partage réseau et lecteur persistant

Clic sur « Nom du partage »

Clic « Autorisations »

![Partage réseau et lecteur persistant](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p78-121.webp)

Partage réseau et lecteur persistant

![Partage réseau et lecteur persistant](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p78-122.webp)

Partage réseau et lecteur persistant

Clic OK

Ou en ligne de commande : Créons le partage : New-smbshare support_info$ -path d:\support_info -changeaccess “utilisateurs authentifiés” Changeons les permissions : $acl prend le resultat des acl du fichier : $acl = get-acl D:\support_info $ace definit la nouvelle règle des ACE (Acces Control Entry) (droit en modification pour le groupe informatique) : $ace = New-Object security.accesscontrol.filesystemaccessrule("L_informatique_RW", "Modify", "Allow")

![Partage réseau et lecteur persistant](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p79-123.webp)

Partage réseau et lecteur persistant

#### Appliquons les règles : $acl.addaccessrule($ace) set-acl D:\support_info $acl Pour voir les partage en ligne de commande tapez “net share”:

3.3.2 Afin d’en tester l’accès, votre binôme génèrera un lecteur réseau « U: » qui pointera vers le dossier partagé. Ce lecteur devra apparaître automatiquement à l’ouverture de session. À cette fin, deux méthodes opérationnelles différentes devront être trouvées.

#### Utilisons la commande : net use U: \\10.10.255.253\Support_info$ /persistent:yes

3.3.3 Enfin, votre binôme en validera l’accès en écriture en y créant un fichier.

![Partage réseau et lecteur persistant](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p80-124.webp)

Partage réseau et lecteur persistant

3.4 Gestion d’imprimantes 3.4.1 Une imprimante HP LaserJet M9050 MFP est à installer sur le système Windows. Elle possède l’adresse IP (fictive) 172.16.63.251 et doit être partagée sur le réseau afin de la rendre disponible pour d’autres postes. Nous utilisons les pilotes fournis :

Nous les dézippons :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p81-125.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p81-126.webp)

Installation, pool et permissions des imprimantes

Choisissez l’ajout d’une imprimante via son port TCP/IP

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p82-127.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p82-128.webp)

Installation, pool et permissions des imprimantes

#### Ecrivez l’@ip demandée :

Nous patientons un peu:

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p83-129.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p83-130.webp)

Installation, pool et permissions des imprimantes

Nous choisirons un pilote HP :

Cliquez sur suivant :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p84-131.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p84-132.webp)

Installation, pool et permissions des imprimantes

#### Nous choisirons un pilote à déployer :

#### Renseignez les informations sur l’imprimante :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p85-133.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p85-134.webp)

Installation, pool et permissions des imprimantes

#### Nous renseignerons le nom demander : « HP LaserJet M9050 MFP »

#### Nous cliquons sur terminer :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p86-135.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p86-136.webp)

Installation, pool et permissions des imprimantes

Pour vérifier nous pouvons aller voir dans la « gestion de l’impression » :

Nous pouvons voir que l’imprimante installée est bien présente :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p87-137.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p87-138.webp)

Installation, pool et permissions des imprimantes

3.4.2 Les permissions d’utilisation de cette dernière sont les suivantes :

3.4.2.1 Tous les utilisateurs peuvent imprimer

3.4.2.2 Le service Comptabilité peut supprimer des impressions bloquées en cas de problèmes

3.4.2.3 Le service informatique possède le contrôle total Pour cela faites un clic droit sur l’imprimante :

Puis sur l’onglet sécurité :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p88-139.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p88-140.webp)

Installation, pool et permissions des imprimantes

#### Supprimer les utilisateurs non concernés puis ajouter les groupes L_comptabilite_W et L_informatique_W :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p89-141.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p89-142.webp)

Installation, pool et permissions des imprimantes

#### Ensuite indique les droits demandés :

#### Le groupe L_Comptabilité_W aura « imprimer » et « gestion des documents »

#### Le groupe L_Informatique_CT aura tous les droits.

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p90-143.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p90-144.webp)

Installation, pool et permissions des imprimantes

#### 3.4.3 Votre binôme s’y connectera et la déclarera comme imprimante par défaut.

Afin de se connecter à l'imprimante réseau de notre binôme, entrer le chemin UNC de son poste Windows : \\@ipdubinome

Puis faire un Clic-Droit sur l'imprimante et "Connecter"

Faire un Clic-Droit sur l'imprimante "HP LaserJet M9050 MFP " et sélectionner "Définir comme imprimante par défaut"

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p91-145.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p91-146.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p91-147.webp)

Installation, pool et permissions des imprimantes

3.4.4 Pour l’édition de documents comptables volumineux (bilan de fin d’exercice, état des provisions...), un pool d’imprimantes devra être mis en œuvre, autorisant l’impression sur 2 périphériques d’impression physiques Xerox Office Color possédant les adresses IP suivantes : les pilotes sont ici :

#### ✓ 172.16.63.250

#### ✓ 172.16.63.249

#### Nous déployons les pilotes demandés :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p92-148.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p92-149.webp)

Installation, pool et permissions des imprimantes

Cliquons sur j’accepte:

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p93-150.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p93-151.webp)

Installation, pool et permissions des imprimantes

Ici nous choisirons une imprimante reconnu sur les réseau:

Nous indiquons l’@ ip de l’imprimante :

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p94-152.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p94-153.webp)

Installation, pool et permissions des imprimantes

Nous choisissons le pilote demandé:

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p95-154.webp)

Installation, pool et permissions des imprimantes

Nous indiquons le nom de l’imprimante, puis nous cliquons sur installer:

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p96-155.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p96-156.webp)

Installation, pool et permissions des imprimantes

Retournons dans le gestionnaire d’imprimante pour voir notre nouvelle imprimante:

Sous l'onglet "Ports", cocher "Activer le pool d'imprimante"

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p97-157.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p97-158.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p97-159.webp)

Installation, pool et permissions des imprimantes

Cliquons sur ajouter un port :

Sélectionner "Standard TCP/IP Port" puis valider avec "Ajouter un port..."

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p98-160.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p98-161.webp)

Installation, pool et permissions des imprimantes

Ajouter l'adresse IP souhaitée (ici 172.16.63.249) et valider par "Suivant"

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p99-162.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p99-163.webp)

Installation, pool et permissions des imprimantes

Laissons les pilotes “Generic Network Card” :

Valider en cliquant sur "Terminer"

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p100-164.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p100-165.webp)

Installation, pool et permissions des imprimantes

Voici notre second port ip ajouter à notre imprimante qui fait notre pool d’impression:

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p101-166.webp)

Installation, pool et permissions des imprimantes

3.4.5 Vous tiendrez compte des caractéristiques suivantes :

3.4.5.1 Seul le service Comptabilité est habilité à utiliser ces périphériques et uniquement entre 19h00 et 3h00

#### 3.4.5.2 Les administrateurs (service informatique) possèdent le contrôle total.

Se rendre sous l'onglet "Sécurité", supprimer le groupe "Tout le monde" de la liste des groupes autorisés puis cliquer sur "Ajouter..."

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p102-167.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p102-168.webp)

Installation, pool et permissions des imprimantes

Accorder toutes les autorisations au groupe "informatique"

Sous l’onglet avancé, cocher l’option « disponible de » puis compléter la tranche horaire de 19:00 à 03:00)

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p103-169.webp)

Installation, pool et permissions des imprimantes

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p103-170.webp)

Installation, pool et permissions des imprimantes

Valider les modifications avec "OK"

3.4.6 Crée 2 files d’attente pour la Xerox Office Color. Les directeurs auront la priorité sur les autres groupes. 3.4.7 Déplacer le spool d’impression sur D : (au lieu de C:\windows).

![Installation, pool et permissions des imprimantes](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p104-171.webp)

Installation, pool et permissions des imprimantes

#### 4 Partie 4 – Configuration avancée des systems

#### 4.1 Configuration avancée système Debian

N.B : il est fortement conseillé de réaliser un snapshot machine éteinte. 4.1.1 Afin d’accélérer quelque peu le démarrage du système, l’affichage du menu du chargeur d’amorçage grub ne durera que 2 secondes. Éditer le fichier /etc/default/grub et modifier l’entrée GRUB_TIMEOUT avec valeur « 2 » : # vim /etc/default/grub

#### Ensuite, mettre à jour le Grub : #update-grub ou grub2-mkconfig -o /boot/grub/grub.cfg

![Configuration avancée et bureau à distance](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p105-172.webp)

Configuration avancée et bureau à distance

![Configuration avancée et bureau à distance](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p105-173.webp)

Configuration avancée et bureau à distance

4.1.2 Finalement, l’espace réservé à la pagination n’est pas suffisant. Il faudrait ainsi utiliser, et ce de façon définitive un swap de 1 Go, pour cela vous vous servirez de l’espace restant sur le premier disque. Afin de redimensionner le swap, désactiver le swap : # swapoff /dev/sda2

#### Puis modifier le partitionnement : # fdisk /dev/sda

Préparer la partition à recevoir le swap : # mkswap /dev/sda2 Puis éditer le fichier /etc/fstab et copier la ligne de swap existante (en la commentant) pour la modifier comme suit : /dev/sda2 swap swap defaults 0 0 activer le swap: # swapon –a /dev/sda2

#### 4.1.3 Vous mettrez à jour l’intégralité des paquets de votre système Debian. Grâce à la commande : # apt upgrade

4.2 Configuration avancée système Windows 10 4.2.1 Pour permettre la reconfiguration du système Windows 10 depuis un système distant, vous activerez la fonctionnalité du bureau à distance avec authentification au niveau du réseau (NLA) et donnerez les autorisations adéquates pour le compte utilisateur de votre binôme. Autoriser les connexions à distance ce situe dans le Panneau de configuration > système et sécurité > autoriser l’accès à distance :

![Configuration avancée et bureau à distance](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p107-174.webp)

Configuration avancée et bureau à distance

Ensuite nous pouvons ajouter le groupe des informaticiens dans le groupe des utilisateurs de bureau à distance :

Nous le ferons via l’invite de commande powershell (avec les droits administrateur), sinon le système ne l’acceptera pas : net localgroup « utilisateurs du bureau à distance » L_informatique /add

Pour vérifier le résultat :

![Configuration avancée et bureau à distance](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p108-175.webp)

Configuration avancée et bureau à distance

![Configuration avancée et bureau à distance](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p108-176.webp)

Configuration avancée et bureau à distance

![Configuration avancée et bureau à distance](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p108-177.webp)

Configuration avancée et bureau à distance

4.2.2 Vérifiez le numéro de port de RDP avec la commande netstat -an.

Depuis le pc Debian 10 avec remmina :

Nous pouvons voir sur l’image ci-dessus, la connexion locale est bien sur le port 3389 avec l’@ip 172.16.63.253. 4.2.3 Vous demanderez à votre binôme de se connecter sur votre poste Windows 10 afin de tester le bon fonctionnement.

![Configuration avancée et bureau à distance](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p109-178.webp)

Configuration avancée et bureau à distance

![Configuration avancée et bureau à distance](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p109-179.webp)

Configuration avancée et bureau à distance

#### 5 Partie 5 – Installation d’applications

5.1 Installation d’application sur le Windows 10 5.1.1 Vous chercherez et validerez la possibilité d’installer de façon silencieuse le logiciel 7zip. C’est-à-dire, qu’aucune boite de dialogue ou assistant graphique ne doit s’afficher à l’écran au déclenchement de l’installation, hormis bien sûr l’alerte UAC.(Regarder dans l’aide et la FAQ du site officiel de 7zip) Nous pouvons accèder à l’aide de 7zip via l’URL suivante : https://www.7-zip.org/faq.html À partir d’un fichier batch ou directement depuis la ligne de commande, lancer l’exécutable : 7zipXXXX-x64.exe /S /D="c:\program files\7zip"

5.2 Installation d’application sur le poste Debian 10 5.2.1 Sans toucher aux paramétrages actuels du poste Windows, vous vous connecterez à ce dernier à l’aide du protocole RDP. Pour cela, vous rechercherez et installerez une application cliente disponible sur les dépôts officiels sous forme graphique capable entre autres de gérer ce protocole, sachant que Vinagre et freerdp ne permettent pas facilement de gérer l’authentification NLA. Après une recherche avec : #apt search rdp #apt search bureau a distance (ou apt seach remote desktop)

#### Nous pouvons installer remmina : #apt install remmina Dans l'interface graphique, lancer Remmina :

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p110-180.webp)

Applications, Remmina et Webmin

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p110-181.webp)

Applications, Remmina et Webmin

Créer une nouvelle connexion :

Compléter le nom et le mot de passe puis cliquons sur « connexion » :

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p111-182.webp)

Applications, Remmina et Webmin

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p111-183.webp)

Applications, Remmina et Webmin

Nous pouvons voir sur l’image ci-dessous que nous sommes connecté sur le windows 10 :

5.2.2 Installez Webmin afin que l’administrateur puis effectuer une partie de son travail via une interface web graphique. Avec l’installation en ligne : https://www.webmin.com/deb.html

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p112-184.webp)

Applications, Remmina et Webmin

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p112-185.webp)

Applications, Remmina et Webmin

Comme indiquer il manque des dépendances :

Appliquons les dépendances :

Webmin est cassé réparons le :

#### Commandes visibles dans les captures

```
dpkg --install webmin_1.960_all.deb
apt-get install perl libnet-ssleay-perl openssl libauthen-pam-perl libpam-runtime libio-pty-perl apt-show-versions python
apt --fix-broken install
```

La première installation reste non configurée car libauthen-pam-perl et libio-pty-perl sont absents. La réparation proposée installe ces deux dépendances puis configure Webmin 1.960. Ces versions et dépendances sont celles du modèle historique.

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p113-186.webp)

Applications, Remmina et Webmin

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p113-187.webp)

Applications, Remmina et Webmin

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p113-188.webp)

Applications, Remmina et Webmin

Nous allons maintenant sur notre navigateur :

Acceptons les risques :

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p114-189.webp)

Applications, Remmina et Webmin

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p114-190.webp)

Applications, Remmina et Webmin

Authentifions-nous en super-admin root :

Ça marche :

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p115-191.webp)

Applications, Remmina et Webmin

![Applications, Remmina et Webmin](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p115-192.webp)

Applications, Remmina et Webmin

#### 6 Partie 6 – Sauvegarde et restauration

6.1 Sauvegarde sur le poste Debian 10 6.1.1 Afin d’éviter toute perte de données importantes, vous planifierez la sauvegarde quotidienne à 12h30 sous forme de fichiers « tar » :

6.1.1.1 Des données personnelles des utilisateurs

6.1.1.2 Des fichiers de données présents dans les dossiers de service Pour cela nous pouvons créer un script : #vim /root/script.sh Contenu du script : #!/bin/bash tar cf /root/HomeBack.tar /home tar cf /root/ServicesBack.tar /services Modification des permissions du script afin qu’il puisse être utilisé : #chmod u+x /root/script.sh Puis planification à l’aide d’une crontab : #crontab -e Puis inscription dans le fichier : 30 12 * * 1-5 /root/script.sh

![Sauvegardes Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p116-193.webp)

Sauvegardes Debian

6.1.2 Pour vous prémunir d’un arrêt brutal du système, vous configurerez une duplication des fichiers à l’aide de la commande scp en direction d’un dossier qui sera mis à disposition à distance sur le poste Debian de votre binôme.

N.B : il se peut que la commande scp ne soit pas présente sur votre système. Vous installerez le cas échéant les paquets nécessaires. Pour cela regardons si nous avons déjà des paquets concernant SCP : #apt-cache search scp Puis dans notre crontab ajoutons : scp /root/*.tar loxton@ipdubinôme:/dossier

![Sauvegardes Debian](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p117-194.webp)

Sauvegardes Debian

6.2 Sauvegarde sur les postes Windows 10 6.2.1 Vous ajouterez tout d’abord un nouveau disque dur de 60 Go dans le cas où vous manqueriez d’espace de stockage. Veuillez répéter la procédure d’ajout de disque sous Vmware workstation écrite au début de la correction de cette MSP

#### 6.2.2 Vous réaliserez une image système permettant en cas de panne importante de restaurer le système d’exploitation en intégralité.

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p118-195.webp)

Sauvegardes et restauration Windows

Sous "Stockage" - "Gestion des disques", repérer le disque de 60Go puis ajouter un nouveau volume simple (Clic-droit sur l'espace "non alloué" puis "Nouveau volume simple")

#### Laisser la taille maximale et cliquer sur "Suivant"

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p119-196.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p119-197.webp)

Sauvegardes et restauration Windows

Attribuer une lettre :

Formater le volume en formatage rapide et lui attribuer un nom :

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p120-198.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p120-199.webp)

Sauvegardes et restauration Windows

Ouvrir le panneau de configuration -> système et sécurité -> sauvegarder et restaurer > Créer une image système

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p121-200.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p121-201.webp)

Sauvegardes et restauration Windows

Choisir le bon disque cliquer sur suivant puis enregistrer la sauvegarde.

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p122-202.webp)

Sauvegardes et restauration Windows

6.2.3 Ensuite, vous planifierez une sauvegarde journalière des données du service informatique (dossier « support informatique ») à 12h45. Les fichiers résultants seront placés sur le partage « Support_Info » de votre binôme dans un dossier qui sera créé à cette fin. Ouvrir les paramètres de sauvegarde.

Accéder à l'outil Sauvegarder et restaurer

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p123-203.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p123-204.webp)

Sauvegardes et restauration Windows

Cliquer sur "Configurer la sauvegarde"

Cliquer sur "Enregistrer sur un réseau..."

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p124-205.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p124-206.webp)

Sauvegardes et restauration Windows

Indiquer l'emplacement réseau de sauvegarde (\\@ipdubinôme\Support_Info), entrer les informations d'identification (Nom d'utilisateur et mot de passe d'un compte ayant accès à l'emplacement réseau) puis valider.

Cliquer sur suivant.

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p125-207.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p125-208.webp)

Sauvegardes et restauration Windows

Sélectionner "Me laisser choisir" puis cliquer sur "Suivant"

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p126-209.webp)

Sauvegardes et restauration Windows

Sélectionner le dossier à sauvegarder (Support_Info) et décocher "Inclure une image système de lecteurs" puis cliquer sur "Suivant"

Cliquer ensuite sur "Modifier la planification"

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p127-210.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p127-211.webp)

Sauvegardes et restauration Windows

Exécuter la sauvegarde tous les jours à l'heure voulu (ici 13:00) puis valider.

Enfin, enregistrer les paramètres et exécuter la sauvegarde, une première sauvegarde est alors effectuée et devrait apparaitre dans l'emplacement réseau sélectionné plus haut.

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p128-212.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p128-213.webp)

Sauvegardes et restauration Windows

Afin de modifier plus précisément l'heure de la sauvegarde, accéder au "Planificateur des tâches"

Dans les Tâches actives, double-clic sur la tâche "AutomaticBackup"

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p129-214.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p129-215.webp)

Sauvegardes et restauration Windows

Clic-Droit sur la tâche puis "Propriétés"

Sous l'onglet "Déclencheurs", modifier le déclenchement

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p130-216.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p130-217.webp)

Sauvegardes et restauration Windows

Modifier l'heure à la valeur souhaitée (12:45) et valider

6.2.4 Enfin, vous paramétrerez les points de restauration sur le volume « C: » et réserverez à cet usage 8% de la capacité du lecteur.

Accéder à la gestion des points de restauration système

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p131-218.webp)

Sauvegardes et restauration Windows

Sélectionner le lecteur C: et cliquer sur "Configurer"

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p132-219.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p132-220.webp)

Sauvegardes et restauration Windows

Créer un point de restauration système

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p133-221.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p133-222.webp)

Sauvegardes et restauration Windows

![Sauvegardes et restauration Windows](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p133-223.webp)

Sauvegardes et restauration Windows

#### 7 Pour aller plus loin – Partitionnement LVM

7.1 Configuration du stockage et des ressources 7.1.1 Sur le poste Debian : La partition nommée « LOGS » sera montée de façon permanente dans le dossier « /var/log » afin de soulager la partition utilisée jusque-là. De nombreux fichiers y sont positionnés et utilisés notamment par le système en quasi-permanence, vous veillerez donc à ne perdre aucune information vitale. Vous vérifierez après coup que l’inscription des évènements fonctionne correctement. Afin de pouvoir copier l'intégralité du dossier "/var/log" qui est en quasi-permanence utilisé par le système, nous devons dans un premier temps redémarrer en mode maintenance : # init 1 Une fois en mode maintenance, nous pouvons copier le contenu de "/var/log" dans un dossier temporaire, en conservant les permissions : # mkdir /tmp/logs # cp -rp /var/log /tmp/logs Nous pouvons alors modifier le fichier "/etc/fstab" puis vérifier que le montage se déroule correctement : # echo "LABEL=LOGS /var/log xfs defaults 0 0" >> /etc/fstab # mount -a Nous pouvons maintenant recopier les données de log dans la nouvelle partition : # cp -rp /tmp/logs/* /var/log/ Jettons un œil dans le contenu de /var/log et dans tmp/logs : #ls -al /var /log #ls -al /tmp/logs Maintenant redémarrons la machine : # reboot Nous pouvons vérifier que de nouvelles données ont étés inscrites dans les journaux (log) pendant ou après le redémarrage du système : # tail /var/log/syslog

7.1.2 Depuis le système Debian : vous devez monter le partage « Support_Info » hébergé sur le poste Windows de votre binôme, à l’aide du compte utilisateur adéquat. Attention à la problématique de version de protocole SMB supportée par Windows 10. Sur le windows 10 installer le support protocolaire SMB/CIFS :

Sur le Debian: Installez le paquets cifs-utils : #apt install cifs-utils Créer le repertoire de montage : #mkdir /home/loxton/support_info Vérifions les droits sur le repertoire : #chown loxton:informatique /home/loxton/support_info #chmod 770 /home/loxton/support_info Dans fstab ajoutons la ligne : //172.16.63.253/support_info /home/loxton/support_info cifs username=loxton,password=fourni par le formateur,file_mode=0777,dir_mode=0777 0 0 Puis monter le partage : #mount -a Attention n’oublier pas que le partage ne doit pas être caché sur windows (supprimer le $ à la fin du partage)

![Montages avancés et pagination](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p135-224.webp)

Montages avancés et pagination

7.2 Configuration avancée des systèmes 7.2.1 Sur le poste Windows : Pour économiser l’espace de la partition système, vous déplacerez le fichier de pagination (swap) à la racine du lecteur « D: » en laissant le système gérer la taille du fichier.

Accéder au panneau de configuration système

![Montages avancés et pagination](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p136-225.webp)

Montages avancés et pagination

Entrer dans les “Paramètres systèmes avancés”

![Montages avancés et pagination](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p137-226.webp)

Montages avancés et pagination

Cliquer sur “Paramètres”

#### Sous l’onglet “Avancé”, cliquer sur “Modifier”

![Montages avancés et pagination](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p138-227.webp)

Montages avancés et pagination

![Montages avancés et pagination](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p138-228.webp)

Montages avancés et pagination

Décocher la case “Gestion automatique du fichier d’échange pour les lecteurs” Sélectionner le lecteur D: Cocher “Taille gérée par le système” Valider en cliquant sur “OK”

#### Après avoir validé, redémarrer l’ordinateur pour que les modifications soient prises en comptes.

![Montages avancés et pagination](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p139-229.webp)

Montages avancés et pagination

![Montages avancés et pagination](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p139-230.webp)

Montages avancés et pagination

7.2.2 Sur le poste Debian : Plusieurs applications installées depuis les sources vont être installées dans /opt. Pour plus de flexibilité, l’espace disque accessible à cet emplacement sera géré au moyen de LVM.

7.2.2.1 Vous ajouterez 2 nouveaux disques SCSI de 20Go ; vérifier leur bonne prise en compte par le système.

7.2.2.2 Au moyen des commandes appropriées, vous créerez un volume logique LMV de 32Go

7.2.2.3 Le volume logique créé précédemment est à formater en ext4. Il doit être accessible depuis /opt et ce de façon permanente. Pour cela, nous devons utiliser la méthode LVM pour créer un volume logique s'étendant sur les deux disques physiques. Une fois les disques ajouter à la VM nous la redémarrerons. Nous aurons besoin dans un premier temps de trouver le gestionnaire lvm : #apt search lvm Installons-le : #apt install lvm2 Nous allons d'abord préparer nos deux disques durs à recevoir des volumes logiques. Nous allons donc créer un volume physique pour les deux disques durs, nous pourrons voir le résultat grâce à la commande pvdisplay : # pvcreate /dev/sdc /dev/sdd

```
# pvdisplay
```

Nous pouvons maintenant créer un groupe de volume englobant les deux disques dur, ils seront alors ensemble considérés comme un seul disque dur logique (nous l'appellerons applications):

```
# vgcreate applications /dev/sdc /dev/sdd
```

#### Enfin, nous pouvons créer un volume logique nommé opt, d'une taille de 32Go dans le groupe de volumes applications :

```
# lvcreate -n opt -L 32G applications  
# lvdisplay
```

![LVM et tableur](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p141-231.webp)

LVM et tableur

![LVM et tableur](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p141-232.webp)

LVM et tableur

Nous pouvons maintenant formater ce nouveau volume en ext4 :

```
# mkfs.ext4 /dev/applications/opt
```

Enfin nous pouvons le monter de manière permanente dans le dossier /opt en ajoutant une ligne au fichier /etc/fstab puis en relançant le montage des disques : # echo "/dev/mapper/applications-opt /opt ext4 defaults 0 0" >> /etc/fstab # mount -a

![LVM et tableur](../../assets/course-sources/isolated/1316bbc9d075426a/msp-p142-233.webp)

LVM et tableur

7.2.3 Vous trouverez un fichier Excel (Résultats_séminaire.xlsx) comprenant les notes des employer aux derniers séminaires. Veuillez l’ouvrir et compléter :

#### 7.2.3.1 La colonne à l’aide d’une formule “Total par élève” =SOMME(B5:E5)

#### 7.2.3.2 La colonne à l’aide d’une formule “Moyenne par élève” =MOYENNE(B5:E5)

#### 7.2.3.3 La ligne “Total par matière” est une somme des notes des employés dans une matière =SOMME(B5:B12)

#### 7.2.3.4 La ligne “Moyenne par matière” est une moyenne des notes des employés dans une matière =MOYENNE(B5:B12)

#### 7.2.3.5 La ligne “note maximum” indique la meilleure note des employés dans une matière =MAX(B5:B12)

#### 7.2.3.6 La ligne “note minimum” indique la note la plus faible des employés dans un matière =MIN(B5:B12)

#### 7.2.3.7 La ligne “nombre d’élèves” indique le nombre d’élèves =NBVAL(A5:A12)

#### Pour compléter la colonne appréciation vous devrez créer la condition suivante

#### :

7.2.3.8 Si la moyenne et l'assiduité >10 afficher Bien

7.2.3.9 Si la moyenne <=10 et l'assiduité >=10 afficher En Progrès

7.2.3.10 Si la moyenne >=10 et l'assiduité <10 afficher Trop d'absences

#### 7.2.3.11 Si la moyenne et l'assiduité <10 afficher En danger ! =SI(ET(G5>10;H5>10);"Bien";SI(ET(G5<=10;H5>=10);"En progrès";SI(ET(G5>=10;H5<10);"Trop d'absences";"En danger!")))

Référence du document : 11FMGV91iFpk7B4zi-mYfv1LrVd3T2vYf · SHA-256 1316bbc9d075426a…

## Énoncé · Résultats_séminaire.xlsx · document texte

Classeur du Drive retranscrit en tableaux HTML et formules littérales. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Classeur du Drive retranscrit en tableaux HTML et formules littérales. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### Feuil1

| MSP Client OS TSSR 07 1ER TRIMESTRE |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Colonne1 | Colonne2 | Colonne3 | Colonne4 | Colonne5 | Colonne6 | Colonne7 | Colonne8 | Colonne9 |
|  | Conduite de véhicule | EPS | Exercice de tir | Physique Chimie | Total par élève | Moyenne par élève | ASSIDUITE | APPRECIATION |
| Rick Grimes | 11 | 20 | 6 | 9.5 |  |  | 9 |  |
| Daryl Dixon | 11 | 9 | 15 | 17 |  |  | 8 |  |
| Gabriel Stokes | 10 | 8 | 11 | 5 |  |  | 12 |  |
| Maggie Greene | 18 | 14 | 16 | 13 |  |  | 12 |  |
| Eugene Porter | 15 | 15 | 11 | 15 |  |  | 15 |  |
| Carol Peletier | 9 | 9 | 9 | 9 |  |  | 9 |  |
| Rosita Espinosa | 12 | 13 | 17 | 6 |  |  | 15 |  |
| Morgan Jones | 11 | 16 | 12 | 11 |  |  | 15 |  |
| Colonne1 | Colonne2 | Colonne3 | Colonne4 | Colonne5 |  |  |  |  |
| Total par matière |  |  |  |  | Pour calculer l'appréciation selon la condition suivante : |  |  |  |
| Moyenne par matière |  |  |  |  | Si la moyenne et l'assiduité >10 afficher Bien |  |  |  |
| Note maximum |  |  |  |  | Si la moyenne <=10 et l'assiduité >=10 afficher En Progrès |  |  |  |
| Note minimum |  |  |  |  | Si la moyenne >=10 et l'assiduité <10 afficher Trop d'absences |  |  |  |
| Nombre d'élèves |  |  |  |  | Si la moyenne et l'assiduité <10 afficher En danger! |  |  |  |

Aucune formule renseignée dans cette feuille du fichier source.

Référence du document : 1jQleQ7GMcH1NA9v_geZQivHKUYhUgBWH · SHA-256 36bc40afe68e6bc5…

## Correction · création_groupes.txt · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Variante du script fourni, conservée séparément.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Variante du script fourni, conservée séparément.

Variante du script fourni, conservée séparément : [script_groupes.ps1](../../assets/course-sources/f8cc710418febcb9/transcription-1AAIw46CCHRp0vQ1Q0lqKVd5sitRGd083.html).

### création_groupes.txt

```
###############################################################

# Script de création des groupes dans windows 10 client       #

# Tracer Lexton                                               #

# créé le 20 octobre 2020                                     #

# Mis à jour le 20 octobre 2020                               #

# Mis à jour par Jesse MacCree                                #

# le 20 octobre 2020                                          #

# Fonctionnel sous Windows 10 entreprise build 2004           #

###############################################################

# Indiquer l'adresse complète du fichier utilisateurs .csv

# Indiquer le délimiteur pour le fichier .csv

# Indiquer les noms d'en-têtes

$datasource=Import-CSV -Path "C:\Users\fx\Desktop\groupes.csv" -Delimiter ";" -Header Groupes,description

#Boucle d'alimentation 

Foreach($data in $datasource) { 

# Nom des groupes

$groupes=$data.Groupes

# description des groupes

$description=$data.description

#creation du groupe avec les données renseignées dnas le tableau csv

New-LocalGroup -Name ”$groupes” -Description “$description”

# Fait une liste

    $nomliste=$affich

    $liste = $liste + $nomliste + ","

}

# Affiche le résultat des imports

write-host "Les groupes : " -ForegroundColor Black

write-host "$liste" -foregroundcolor red

write-host "ont été créés" -ForegroundColor Black
```

Référence du document : 1Qdof_W0D8at36EjxjuED_GHUtwvN8tQJ · SHA-256 3fedf75b44295417…

## Correction · création_utilisateur.txt · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Doublon de contenu à l’encodage et aux espaces près.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Doublon de contenu à l’encodage et aux espaces près.

Doublon de contenu à l’encodage et aux espaces près : [script_utilisateurs.ps1](../../assets/course-sources/504935a93fd62fba/transcription-1VBMwt4JIs29xN_aOzcDVUUt73XDBtxer.html).

### création_utilisateur.txt

```
###############################################################

# Script de création des utilisateurs dans windows 10 client  #

# Tracer Lexton                                               #

# créé le 20 octobre 2020                                     #

# Mis à jour le 20 octobre 2020                               #

# Mis à jour par Jesse MacCree                                #

# le 20 octobre 2020                                          #

# Fonctionnel sous Windows 10 entreprise build 2004           #

###############################################################

# Indiquer l'adresse complète du fichier utilisateurs .csv

# Indiquer le délimiteur pour le fichier .csv

# Indiquer les noms d'en-têtes

$datasource=Import-CSV -Path "C:\Users\fx\Desktop\utilisateurs.csv" -Delimiter ";" -Header Prénom,Nom,login,mail,password,description

#Boucle d'alimentation 

Foreach($data in $datasource) { 

# Nom et prénom de famille

$Nom=$data.Nom 

$prenom=$data.Prénom

$FullName=$nom + " " + $prenom

# Affichage de l'utilisateur

$affich=$FullName

# Nom de famille

$login=$data.login

#le mot de passe

$password=$data.password

#la description

$description=$data.description

#creation utilisateur avec les toutes les données renseignées

New-LocalUser -FullName "$FullName" -Description "$description" -Name "$login" -Password (ConvertTo-SecureString -AsPlainText "$password" -Force)

# Fait une liste

    $nomliste=$affich

    $liste = $liste + $nomliste + ","

}

# Affiche le résultat des imports

write-host "Les utilisateurs : " -ForegroundColor Black

write-host "$liste" -foregroundcolor red

write-host "ont été créés" -ForegroundColor Black
```

Référence du document : 1UUK-587hgViAQPniG-sVpIZoPSGFPE18 · SHA-256 053622e8258b3fd0…

## Correction · groupes.csv · document texte

Données CSV du Drive retranscrites en tableau ; le séparateur et les noms de colonnes restent ceux du document. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Données CSV du Drive retranscrites en tableau ; le séparateur et les noms de colonnes restent ceux du document. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### groupes.csv

| Groupes | description |
| --- | --- |
| Commercial | groupe de Commercial |
| Comptabilite | groupe de Comptabilit‚ |
| Informatique | groupe de Informatique |
| L_Commercial | groupe de L_Commercial |
| L_Comptabilite | groupe de L_Comptabilite |
| L_Informatique | groupe de L_Informatique |
| L_Commercial_R | groupe de L_Commercial_R |
| L_Comptabilite_R | groupe de L_Comptabilite_R |
| L_Informatique_R | groupe de L_Informatique_R |
| L_Commercial_W | groupe de L_Commercial_W |
| L_Comptabilite_W | groupe de L_Comptabilite_W |
| L_Informatique_W | groupe de L_Informatique_W |
| L_Commercial_X | groupe de L_Commercial_X |
| L_Comptabilite_X | groupe de L_Comptabilite_X |
| L_Informatique_X | groupe de L_Informatique_X |
| L_Commercial_CT | groupe de L_Commercial_CT |
| L_Comptabilite_CT | groupe de L_Comptabilite_CT |
| L_Informatique_CT | groupe de L_Informatique_CT |

Référence du document : 10YXGG54mGlhfPHPWtttMO9NH9Tg06glG · SHA-256 d09b319cad085496…

## Correction · Résultats_séminaire_corrigé.xlsx · document texte

Classeur du Drive retranscrit en tableaux HTML et formules littérales. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Classeur du Drive retranscrit en tableaux HTML et formules littérales. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### Feuil1

| MSP Client OS TSSR 07 1ER TRIMESTRE |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Colonne1 | Colonne2 | Colonne3 | Colonne4 | Colonne5 | Colonne6 | Colonne7 | Colonne8 | Colonne9 |
|  | Conduite de véhicule | EPS | Exercice de tir | Physique Chimie | Total par élève | Moyenne par élève | ASSIDUITE | APPRECIATION |
| Rick Grimes | 11 | 20 | 6 | 9.5 | 46.5 | 11.625 | 9 | Trop d'absences |
| Daryl Dixon | 11 | 9 | 15 | 17 | 52 | 13 | 8 | Trop d'absences |
| Gabriel Stokes | 10 | 8 | 11 | 5 | 34 | 8.5 | 12 | En progrès |
| Maggie Greene | 18 | 14 | 16 | 13 | 61 | 15.25 | 12 | Bien |
| Eugene Porter | 15 | 15 | 11 | 15 | 56 | 14 | 15 | Bien |
| Carol Peletier | 9 | 9 | 9 | 9 | 36 | 9 | 9 | En danger! |
| Rosita Espinosa | 12 | 13 | 17 | 6 | 48 | 12 | 15 | Bien |
| Morgan Jones | 11 | 16 | 12 | 11 | 50 | 12.5 | 15 | Bien |
| Colonne1 | Colonne2 | Colonne3 | Colonne4 | Colonne5 |  |  |  |  |
| Total par matière | 97 | 104 | 97 | 85.5 | Pour calculer l'appréciation selon la condition suivante : |  |  |  |
| Moyenne par matière | 12.125 | 13 | 12.125 | 10.6875 | Si la moyenne et l'assiduité >10 afficher Bien |  |  |  |
| Note maximum | 18 | 20 | 17 | 17 | Si la moyenne <=10 et l'assiduité >=10 afficher En Progrès |  |  |  |
| Note minimum | 9 | 8 | 6 | 5 | Si la moyenne >=10 et l'assiduité <10 afficher Trop d'absences |  |  |  |
| Nombre d'élèves | 8 |  |  |  | Si la moyenne et l'assiduité <10 afficher En danger! |  |  |  |

#### Formules du classeur source

| Cellule | Formule |
| --- | --- |
| F5 | =SUM(B5:E5) |
| G5 | =AVERAGE(B5:E5) |
| I5 | =IF(AND(G5>10,H5>10),"Bien",IF(AND(G5<=10,H5>=10),"En progrès",IF(AND(G5>=10,H5<10),"Trop d'absences","En danger!"))) |
| F6 | =SUM(B6:E6) |
| G6 | =AVERAGE(B6:E6) |
| I6 | =IF(AND(G6>10,H6>10),"Bien",IF(AND(G6<=10,H6>=10),"En progrès",IF(AND(G6>=10,H6<10),"Trop d'absences","En danger!"))) |
| F7 | =SUM(B7:E7) |
| G7 | =AVERAGE(B7:E7) |
| F8 | =SUM(B8:E8) |
| G8 | =AVERAGE(B8:E8) |
| F9 | =SUM(B9:E9) |
| G9 | =AVERAGE(B9:E9) |
| F10 | =SUM(B10:E10) |
| G10 | =AVERAGE(B10:E10) |
| B15 | =SUM(B5:B12) |
| C15 | =SUM(C5:C12) |
| D15 | =SUM(D5:D12) |
| E15 | =SUM(E5:E12) |
| B16 | =AVERAGE(B5:B12) |
| C16 | =AVERAGE(C5:C12) |
| D16 | =AVERAGE(D5:D12) |
| E16 | =AVERAGE(E5:E12) |
| B17 | =MAX(B5:B12) |
| C17 | =MAX(C5:C12) |
| D17 | =MAX(D5:D12) |
| E17 | =MAX(E5:E12) |
| B18 | =MIN(B5:B12) |
| C18 | =MIN(C5:C12) |
| D18 | =MIN(D5:D12) |
| E18 | =MIN(E5:E12) |
| B19 | =COUNTA(A5:A12) |

Référence du document : 18wu3Ld2mPz591OYAg_y6hrB0Sv_uCyMf · SHA-256 d070c92cc4329715…

## Correction · script_groupes.ps1 · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Variante du script fourni, conservée séparément.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Variante du script fourni, conservée séparément.

Variante du script fourni, conservée séparément : [création_groupes.txt](../../assets/course-sources/3fedf75b44295417/transcription-1Qdof_W0D8at36EjxjuED_GHUtwvN8tQJ.html).

### script_groupes.ps1

```
###############################################################

# Script de création des utilisateurs dans windows 10 client  #

# Tracer Lexton                                               #

# créé le 20 octobre 2020                                     #

# Mis à jour le 20 octobre 2020                               #

# Mis à jour par Jesse MacCree                                #

# le 20 octobre 2020                                          #

# Fonctionnel sous Windows 10 entreprise build 2004           #

###############################################################

# Indiquer l'adresse complète du fichier utilisateurs .csv

# Indiquer le délimiteur pour le fichier .csv

# Indiquer les noms d'en-têtes

$datasource=Import-CSV -Path "C:\Users\fx\Desktop\groupes.csv" -Delimiter ";" -Header Groupes,description

#Boucle d'alimentation 

Foreach($data in $datasource) { 

# Nom des groupes

$groupes=$data.Groupes

# description des groupes

$description=$data.description

#creation du groupe avec les données renseignées dnas le tableau csv

New-LocalGroup -Name ”$groupes” -Description “$description”

# Fait une liste

    $nomliste=$affich

    $liste = $liste + $nomliste + ","

}

# Affiche le résultat des imports

write-host "Les groupes : " -ForegroundColor Black

write-host "$liste" -foregroundcolor red

write-host "ont été créés" -ForegroundColor Black
```

Référence du document : 1AAIw46CCHRp0vQ1Q0lqKVd5sitRGd083 · SHA-256 f8cc710418febcb9…

## Correction · script_utilisateurs.ps1 · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Doublon de contenu à l’encodage et aux espaces près.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié. Doublon de contenu à l’encodage et aux espaces près.

Doublon de contenu à l’encodage et aux espaces près : [création_utilisateur.txt](../../assets/course-sources/053622e8258b3fd0/transcription-1UUK-587hgViAQPniG-sVpIZoPSGFPE18.html).

### script_utilisateurs.ps1

```
###############################################################

# Script de création des utilisateurs dans windows 10 client  #

# Tracer Lexton                                               #

# créé le 20 octobre 2020                                     #

# Mis à jour le 20 octobre 2020                               #

# Mis à jour par Jesse MacCree                                #

# le 20 octobre 2020                                          #

# Fonctionnel sous Windows 10 entreprise build 2004           #

###############################################################

# Indiquer l'adresse complète du fichier utilisateurs .csv

# Indiquer le délimiteur pour le fichier .csv

# Indiquer les noms d'en-têtes

$datasource=Import-CSV -Path "C:\Users\fx\Desktop\utilisateurs.csv" -Delimiter ";" -Header Prénom,Nom,login,mail,password,description

#Boucle d'alimentation 

Foreach($data in $datasource) { 

# Nom et prénom de famille

$Nom=$data.Nom 

$prenom=$data.Prénom

$FullName=$nom + " " + $prenom

# Affichage de l'utilisateur

$affich=$FullName

# Nom de famille

$login=$data.login

#le mot de passe

$password=$data.password

#la description

$description=$data.description

#creation utilisateur avec les toutes les données renseignées

New-LocalUser -FullName "$FullName" -Description "$description" -Name "$login" -Password (ConvertTo-SecureString -AsPlainText "$password" -Force)

# Fait une liste

    $nomliste=$affich

    $liste = $liste + $nomliste + ","

}

# Affiche le résultat des imports

write-host "Les utilisateurs : " -ForegroundColor Black

write-host "$liste" -foregroundcolor red

write-host "ont été créés" -ForegroundColor Black
```

Référence du document : 1VBMwt4JIs29xN_aOzcDVUUt73XDBtxer · SHA-256 504935a93fd62fba…

## Correction · Tableau_récap.xlsx · document texte

Classeur du Drive retranscrit en tableaux HTML et formules littérales. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Classeur du Drive retranscrit en tableaux HTML et formules littérales. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### Recap

|  | W10-10 | DEB10-10 |  |  |
| --- | --- | --- | --- | --- |
| Processeur | 1 | 1 |  |  |
| Mémoire | 2 GB | 512 MB |  |  |
| Disque dur | 30GO 40GO 60GO | 20GO 40GO |  |  |
| Réseau | interface réseau host-only | interface réseau host-only |  |  |
| adresse IP | 172,16,63,253/26 | 172,16,63,252/26 |  |  |
| identifiant / mot de passe |  |  |  |  |
| Services | Membres | login | password | description |
| Direction | Rick Grimes | rgrimes | fourni par le formateur | directeur |
| Commercial | Daryl Dixon | ddixon | fourni par le formateur | commercial |
|  | Gabriel Stokes | gstokes | fourni par le formateur | vendeur de rêve |
|  | Maggie Greene | mgreene | fourni par le formateur | commercial |
| Comptabilité | Eugene Porter | eporter | fourni par le formateur | comptable |
|  | Carol Peletier (intérimaire) | cpeletier | fourni par le formateur | (intérimaire) |
| Informatique | Vous-même (Administrateur) | tlexton | fourni par le formateur | administratrice |
|  | Votre binôme (prestataire) | jmaccree | fourni par le formateur | prestataire |
| Logistique | Rosita Espinosa | respinosa | fourni par le formateur | logistique |
|  | Morgan Jones | mjones | fourni par le formateur | porteur |

Aucune formule renseignée dans cette feuille du fichier source.

### Utilisateurs

| Prénom | Nom | login | mail | password | description | Colonne6 | Colonne7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rick | Grimes | rgrimes | rickgrimes@example.com | fourni par le formateur | directeur |  |  |
| Daryl | Dixon | ddixon | daryldixon@example.com | fourni par le formateur | commercial |  |  |
| Gabriel | Stokes | gstokes | gabrielstokes@example.com | fourni par le formateur | vendeur de rêve |  |  |
| Maggie | Greene | mgreene | maggiegreene@example.com | fourni par le formateur | commercial |  |  |
| Eugene | Porter | eporter | eugeneporter@example.com | fourni par le formateur | comptable |  |  |
| Carol | Peletier | cpeletier | carolpeletier @example.com | fourni par le formateur | (intérimaire) |  |  |
| Tracer | Lexton | tlexton | tracerlexton @example.com | fourni par le formateur | administratrice |  |  |
| Jesse | MacCree | jmaccree | jessemaccree @example.com | fourni par le formateur | prestataire |  |  |
| Rosita | Espinosa | respinosa | rositaespinosa@example.com | fourni par le formateur | logistique |  |  |
| Morgan | Jones | mjones | morgan jones @example.com | fourni par le formateur | porteur |  |  |
| Carol Peletier (intérimaire) |  |  | MINUSCULE(STXT([@Prénom];1;1))&MINUSCULE(STXT([@Nom];1;1))&"fourni par le formateur" |  |  |  |  |
| Tracer Lexton (Administrateur) |  |  |  |  |  |  |  |
| Jesse MacCree (prestataire) |  |  |  |  |  |  |  |
| La fonction STXT prend donc trois paramètres : |  |  |  |  |  |  |  |
| 1. Le texte qui va être traité : dans notre cas les cellules de la colonne B. |  |  |  |  |  |  |  |
| 2. L’endroit à partir duquel le texte sera traité : dans notre cas, dès la première lettre, donc 1. |  |  |  |  |  |  |  |
| 3. Le nombre de caractère à prendre : dans notre cas on ne veut que la première lettre, donc 1. |  |  |  |  |  |  |  |
|  |  |  | pour ajouter une formule tapez & |  |  |  |  |
| la fonction MINUSCLE et MAJUSCLE portent bien leur nom |  |  | pour ajouter du texte tapez "LeTexte" |  |  |  |  |

#### Formules du classeur source

| Cellule | Formule |
| --- | --- |
| C2 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D2 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E2 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C3 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D3 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E3 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C4 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D4 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E4 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C5 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D5 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E5 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C6 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D6 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E6 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C7 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D7 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E7 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C8 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D8 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E8 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C9 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D9 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E9 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C10 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D10 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E10 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |
| C11 | =LOWER(MID(Tableau1[[#This Row],[Prénom]],1,1)&LOWER(Tableau1[[#This Row],[Nom]])) |
| D11 | =LOWER(Tableau1[[#This Row],[Prénom]])&LOWER(Tableau1[[#This Row],[Nom]])&"@example.com" |
| E11 | =UPPER(MID(Tableau1[[#This Row],[Prénom]],1,1))&UPPER(MID(Tableau1[[#This Row],[Nom]],1,1))&"fourni par le formateur" |

### Groupes

| Group | description | Groupes | droit_R | droit_W | droit_X | droit_CT |
| --- | --- | --- | --- | --- | --- | --- |
| Commercial | groupe de Commercial | L_Commercial | L_Commercial_R | L_Commercial_W | L_Commercial_X | L_Commercial_CT |
| Comptabilité | groupe de Comptabilité | L_Comptabilité | L_Comptabilité_R | L_Comptabilité_W | L_Comptabilité_X | L_Comptabilité_CT |
| Informatique | groupe de Informatique | L_Informatique | L_Informatique_R | L_Informatique_W | L_Informatique_X | L_Informatique_CT |
| L_Commercial | groupe de L_Commercial |  |  |  |  |  |
| L_Comptabilité | groupe de L_Comptabilité |  |  |  |  |  |
| L_Informatique | groupe de L_Informatique |  |  |  |  |  |
| L_Commercial_R | groupe de L_Commercial_R |  |  |  |  |  |
| L_Comptabilité_R | groupe de L_Comptabilité_R |  |  |  |  |  |
| L_Informatique_R | groupe de L_Informatique_R |  |  |  |  |  |
| L_Commercial_W | groupe de L_Commercial_W |  |  |  |  |  |
| L_Comptabilité_W | groupe de L_Comptabilité_W |  |  |  |  |  |
| L_Informatique_W | groupe de L_Informatique_W |  |  |  |  |  |
| L_Commercial_X | groupe de L_Commercial_X |  |  |  |  |  |
| L_Comptabilité_X | groupe de L_Comptabilité_X |  |  |  |  |  |
| L_Informatique_X | groupe de L_Informatique_X |  |  |  |  |  |
| L_Commercial_CT | groupe de L_Commercial_CT |  |  |  |  |  |
| L_Comptabilité_CT | groupe de L_Comptabilité_CT |  |  |  |  |  |
| L_Informatique_CT | groupe de L_Informatique_CT |  |  |  |  |  |

#### Formules du classeur source

| Cellule | Formule |
| --- | --- |
| B2 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| C2 | ="L_"&Tableau3[[#This Row],[Group]] |
| D2 | =C2&"_R" |
| E2 | =C2&"_W" |
| F2 | =C2&"_X" |
| G2 | =C2&"_CT" |
| B3 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| C3 | ="L_"&Tableau3[[#This Row],[Group]] |
| D3 | =C3&"_R" |
| B4 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| C4 | ="L_"&Tableau3[[#This Row],[Group]] |
| D4 | =C4&"_R" |
| B5 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B6 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B7 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B8 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B9 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B10 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B11 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B12 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B13 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B14 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B15 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B16 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B17 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B18 | ="groupe de "&Tableau3[[#This Row],[Group]] |
| B19 | ="groupe de "&Tableau3[[#This Row],[Group]] |

Référence du document : 1cJVKyWfU8hSHjZmxE7rgXEz--hkQxYUp · SHA-256 9edc777849ead242…

## Correction · utilisateurs.csv · document texte

Données CSV du Drive retranscrites en tableau ; le séparateur et les noms de colonnes restent ceux du document. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Données CSV du Drive retranscrites en tableau ; le séparateur et les noms de colonnes restent ceux du document. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### utilisateurs.csv

| Prénom | Nom | login | mail | password | description |
| --- | --- | --- | --- | --- | --- |
| Rick | Grimes | rgrimes | rickgrimes@example.com | fourni par le formateur | directeur |
| Daryl | Dixon | ddixon | daryldixon@example.com | fourni par le formateur | commercial |
| Gabriel | Stokes | gstokes | gabrielstokes@example.com | fourni par le formateur | vendeur |
| Maggie | Greene | mgreene | maggiegreene@example.com | fourni par le formateur | commercial |
| Eugene | Porter | eporter | eugeneporter@example.com | fourni par le formateur | comptable |
| Carol | Peletier | cpeletier | carolpeletier @example.com | fourni par le formateur | intérimaire |
| Tracer | Lexton | tlexton | tracerlexton @example.com | fourni par le formateur | administratrice |
| Jesse | MacCree | jmaccree | jessemaccree @example.com | fourni par le formateur | prestataire |
| Rosita | Espinosa | respinosa | rositaespinosa@example.com | fourni par le formateur | logistique |
| Morgan | Jones | mjones | morgan jones @example.com | fourni par le formateur | porteur |

Référence du document : 1Uc5gfaJuGnFvWXc40s7jrd2NR4ymx6me · SHA-256 0c4fd99fdc459847…

## Correction · MSP_Systemes_clients_solution_172.16.0.128-26.docx · document texte

Version Word de la solution adaptée, retranscrite intégralement depuis son texte et ses tableaux. La pagination de Word varie avec le logiciel et n’est pas inventée. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Version Word de la solution adaptée, retranscrite intégralement depuis son texte et ses tableaux. La pagination de Word varie avec le logiciel et n’est pas inventée. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### Version Word de la solution adaptée

Cette version est conservée séparément. La [transcription de sa version PDF](../../assets/course-sources/7857985d194bb795/transcription-1_JPJfmmHFM8G1DMi4S2wR1lFDzt0DV_c.html) permet de retrouver la pagination et le schéma du document fourni.

MSP SYSTÈMES CLIENTS

Solution complète, expliquée et adaptée

Réseau choisi : 172.16.0.128/26

Basé sur l’énoncé actuel, la note technique ANSSI, les ressources, les scripts et le corrigé modèle fournis.

Les noms et logins personnels restent à remplacer avant exécution.

### Sommaire

Sommaire automatique : mettre à jour le champ dans Word si nécessaire.

1. Analyse du dossier et règles de priorité

2. Paramètres à personnaliser et plan d’adressage

3. Partie 1 - Installation des systèmes

4. Partie 2 - Utilisateurs et environnement

5. Partie 3 - Stockage, partages et imprimantes

6. Partie 4 - Configuration avancée

7. Partie 5 - Installation des applications

8. Partie 6 - Sauvegarde et restauration

9. Partie 7 - LVM, montages avancés et tableur

10. Matrice de validation et livrables fournis

### 1. Analyse complète du dossier

Tous les fichiers accessibles de l’archive ont été inventoriés et exploités. Les exécutables ont été identifiés et leurs métadonnées/version ont été contrôlées, mais ils n’ont pas été lancés dans cet environnement Linux.

| Catégorie | Fichier | Analyse / utilisation |
| --- | --- | --- |
| Sujet | Enoncé MSP - Systèmes clients.pdf | 14 pages. Référence prioritaire pour toutes les tâches et contraintes. |
| Documentation | NP_MDP_NoteTech.pdf | 11 pages. Recommandations ANSSI : mots de passe distincts, non liés à l’identité, robustes, temporaires à changer, stockage prudent. |
| Ressource | 7zip.exe | Installateur 7-Zip 19.00 x64 ; installation silencieuse avec /S. |
| Ressource | Pilote_HP_LaserJet_M9050_MFP.exe | Pilote HP pour l’imprimante fictive. Installation via port TCP/IP standard. |
| Ressource | Pilote_Xerox_Office_Color_C60C70.exe | Archive auto-extractible Xerox C60/C70 ; utilisée pour le pool et les files prioritaires. |
| Tableur | Résultats_séminaire.xlsx | Classeur à compléter avec SOMME, MOYENNE, MAX, MIN, NBVAL et SI/ET. |
| Corrigé | Modèle_Solution_MSP.pdf | 143 pages. Référence de méthode et de chemins graphiques, adaptée au sujet actuel. |
| Scripts / CSV | création_groupes, création_utilisateur, groupes.csv, utilisateurs.csv | Méthode d’import et de création en masse. Plusieurs erreurs de guillemets, d’encodage et de syntaxe ont été corrigées dans les scripts fournis avec cette solution. |
| Tableurs corrigés | Résultats_séminaire_corrigé.xlsx, Tableau_récap.xlsx | Valeurs et formules utilisées pour contrôler les résultats et la convention de nommage. |

#### 1.1 Règle de priorité appliquée

| Priorité documentaire 1) Énoncé actuel. 2) Méthodes du cours et du corrigé modèle. 3) Amélioration technique uniquement lorsque la méthode fournie est erronée, dangereuse ou ne satisfait pas le sujet actuel. |
| --- |

#### 1.2 Incohérences détectées et décision retenue

| Point | Contradiction | Décision appliquée |
| --- | --- | --- |
| Réseau VMware | Le sujet actuel demande Bridged ; le corrigé modèle et le tableau récap utilisent Host-only. | Utiliser Bridged, car le sujet actuel est prioritaire. |
| Mémoire Debian | Le sujet actuel impose 2048 Mo ; le corrigé modèle montre 512 Mo. | Utiliser 2048 Mo. |
| Nombre de comptes | Le texte annonce 9 employés, mais le tableau contient 10 personnes. | Créer les 10 comptes du tableau. |
| Expiration des mots de passe | « N’expirent jamais » puis politique Windows avec changement tous les 25 jours. | Sous Windows, appliquer 25 jours car cette contrainte est plus précise et vérifiable. Sous Debian, conserver sans expiration sauf changement initial du prestataire. |
| Adresses imprimantes | Le corrigé modèle emploie des IP proches des postes ; le sujet actuel impose des troisièmes octets binaires 10101000 et 10101001. | Appliquer exactement le sujet actuel : 168 et 169 en décimal. |
| deb-src | Le corrigé écrit parfois « décommenter » alors que le sujet demande de commenter. | Commenter les lignes deb-src et la source DVD. |
| Sauvegarde Debian | Le sujet demande tous les jours ; le corrigé planifie seulement du lundi au vendredi. | Cron quotidien : 30 12 * * *. |
| SMB | Le corrigé évoque l’activation d’un ancien support SMB. | Utiliser SMB 3.0 avec cifs-utils ; ne pas activer SMB1. |
| Groupe documentation | Le sujet le demande sans le définir dans la liste des services. | Créer un groupe supplémentaire documentation et appliquer le bit setgid à /services. |

### 2. Paramètres à personnaliser et plan IP

#### 2.1 Remplacements obligatoires

| Variable | À remplacer par | Exemple |
| --- | --- | --- |
| <INITIALES> | Vos initiales | AB |
| <VOTRE_LOGIN> | Première lettre du prénom + nom | jdupont |
| <VOTRE_PRENOM_NOM> | Votre identité | Jean Dupont |
| <LOGIN_BINOME> | Login de votre binôme | mmartin |
| <PRENOM_NOM_BINOME> | Identité du binôme | Marie Martin |

| Avant toute exécution Remplacer les valeurs entre chevrons dans les scripts. Ne jamais exécuter une commande de disque avant d’avoir contrôlé le numéro du disque avec list disk, detail disk, lsblk et fdisk -l. |
| --- |

#### 2.2 Calcul du sous-réseau 172.16.0.128/26

Un préfixe /26 laisse 6 bits pour les hôtes : 2^6 = 64 adresses. Le bloc commence à .128 et se termine à .191. La première adresse est le réseau et la dernière est le broadcast, donc 62 adresses sont utilisables.

| Élément | Valeur | Pourquoi |
| --- | --- | --- |
| Adresse réseau | 172.16.0.128 | Identifie le sous-réseau ; ne jamais attribuer à une machine. |
| Masque | 255.255.255.192 | Équivalent décimal du /26. |
| Première IP utilisable | 172.16.0.129 | Premier hôte possible. |
| Dernière IP utilisable / passerelle retenue | 172.16.0.190 | Le corrigé modèle place la passerelle sur la dernière IP utilisable. |
| Broadcast | 172.16.0.191 | Adresse de diffusion ; ne jamais attribuer. |

| Hypothèse de passerelle La passerelle 172.16.0.190 reprend la méthode du corrigé modèle. Si le formateur ou le DHCP fournit une autre passerelle/DNS, conserver les IP des postes mais remplacer la passerelle et le DNS par les valeurs réellement fournies. |
| --- |

#### 2.3 Adresses retenues

| Équipement | Adresse | Masque | Passerelle | DNS conseillé |
| --- | --- | --- | --- | --- |
| W10-<INITIALES> | 172.16.0.189 | 255.255.255.192 | 172.16.0.190 | 172.16.0.190 ou DNS fourni |
| DEB10-<INITIALES> | 172.16.0.188 | 255.255.255.192 | 172.16.0.190 | 172.16.0.190 ou DNS fourni |
| W10 du binôme | 172.16.0.187 | 255.255.255.192 | 172.16.0.190 | idem |
| Debian du binôme | 172.16.0.186 | 255.255.255.192 | 172.16.0.190 | idem |

Les adresses hautes sont retenues pour reproduire la logique du corrigé modèle et limiter le risque d’utiliser les premières adresses souvent réservées. Il faut néanmoins vérifier la plage DHCP avant de les fixer.

#### 2.4 Adresses fictives des imprimantes

10101000₂ = 168 et 10101001₂ = 169. Le sujet impose de conserver le dernier octet du poste concerné.

| Périphérique | Calcul | Adresse |
| --- | --- | --- |
| HP LaserJet M9050 MFP | 172.16 + 168 + dernier octet W10 (.189) | 172.16.168.189 |
| Xerox physique 1 | 172.16 + 168 + dernier octet Debian (.188) | 172.16.168.188 |
| Xerox physique 2 | 172.16 + 169 + dernier octet Debian (.188) | 172.16.169.188 |

| Pourquoi ces IP sont hors du /26 ? Elles sont explicitement annoncées comme fictives. Elles servent à créer les ports TCP/IP et à démontrer la configuration d’impression ; elles ne sont pas destinées à répondre au ping sur votre sous-réseau. |
| --- |

#### 2.5 Tableau des machines virtuelles

| Machine | CPU | Mémoire | Disques | Réseau | Système |
| --- | --- | --- | --- | --- | --- |
| W10-<INITIALES> | 2 vCPU | 4 Go conseillés (2 Go minimum) | 32 Go système + 40 Go données + 60 Go sauvegarde si nécessaire | Bridged | Windows 10 Professionnel 64 bits |
| DEB10-<INITIALES> | 1 vCPU | 2048 Mo | 20 Go système + 40 Go données + 2 x 20 Go pour LVM | Bridged | Debian 10 avec environnement graphique |

### 3. Partie 1 - Installation des systèmes

#### 3.1 Préparation VMware

Créer W10-<INITIALES> et DEB10-<INITIALES> dans des dossiers distincts.

Ajouter immédiatement les deux disques demandés, mais installer chaque système uniquement sur le premier disque.

Configurer l’interface réseau en Bridged. Ne pas utiliser Host-only malgré le corrigé modèle.

Monter l’ISO Windows 10 Professionnel la plus récente et l’ISO DVD Debian 10.x.

Créer un snapshot machine éteinte après chaque grande étape : installation, utilisateurs, stockage, imprimantes.

| Pourquoi les snapshots machine éteinte ? Ils permettent un retour fiable avant une opération risquée sur les partitions, /home, /var/log, le swap ou le spool d’impression. |
| --- |

#### 3.2 Installation de Windows 10 Professionnel

Démarrer sur l’ISO et sélectionner Windows 10 Professionnel.

Choisir l’installation personnalisée et sélectionner uniquement le disque de 32 Go.

Créer le compte administrateur initial, appliquer les mises à jour de pilotes nécessaires, puis renommer le poste W10-<INITIALES>.

Configurer IPv4 statiquement avec 172.16.0.189/26, passerelle 172.16.0.190 et le DNS retenu.

Arrêter Windows Update selon la méthode du cours, puis appliquer la stratégie locale qui interdit la connexion aux emplacements Windows Update sur Internet.

Chemins de configuration

```
services.msc
Service : Windows Update (wuauserv)
Type de démarrage : Manuel
État : Arrêté

gpedit.msc
Configuration ordinateur > Modèles d’administration > Composants Windows > Windows Update
Activer : Ne pas se connecter aux emplacements Internet Windows Update
```

Vérification

```
hostname
ipconfig /all
sc query wuauserv
```

| Pourquoi arrêter le service et ajouter une stratégie ? Le service arrêté satisfait la méthode du corrigé. La stratégie évite qu’un utilisateur ou une tâche ne relance ensuite une connexion aux serveurs Microsoft. |
| --- |

#### 3.3 Installation de Debian 10

Démarrer l’installation graphique depuis l’ISO DVD.

Nommer la machine DEB10-<INITIALES> et configurer l’adresse 172.16.0.188/26.

Choisir le partitionnement manuel et placer les partitions dans l’ordre indiqué ci-dessous afin que le swap soit suivi par l’espace libre.

Conserver les systèmes de fichiers proposés par l’installateur pour chaque point de montage.

Laisser les paquets par défaut, conserver l’environnement graphique et choisir ftp.fr.debian.org comme miroir français.

| Partition | Taille | Point de montage / type | Remarque |
| --- | --- | --- | --- |
| /dev/sda1 | 512 Mo | /boot | Système de fichiers par défaut de l’installateur. |
| /dev/sda2 | 17 Go | / | Racine du système. |
| /dev/sda3 | 1 Go | /home | Sera remplacée plus tard par PROFILS. |
| /dev/sda4 | 256 Mo | swap | À agrandir à 1 Go avec l’espace libre contigu. |
| Espace non alloué | environ 1 Go ou plus | aucun | Conservé pour agrandir le swap. |

| Point important Le numéro réel des partitions peut varier. Dans toutes les commandes ultérieures, utiliser lsblk -f et swapon --show plutôt que de recopier aveuglément /dev/sda4. |
| --- |

#### 3.4 Configuration réseau et tests

Sous Windows, utiliser les propriétés IPv4 de la carte réseau. Sous Debian graphique, utiliser NetworkManager. La carte doit être désactivée/réactivée après modification si l’adresse ne se met pas à jour.

```
# Windows
ipconfig /all
ping 172.16.0.188
ping 172.16.0.187
ping 172.16.0.186

# Debian
ip -br a
ip route
cat /etc/resolv.conf
ping -c 4 172.16.0.189
ping -c 4 172.16.0.187
ping -c 4 172.16.0.186
```

Si le ping vers Windows échoue, autoriser la règle prédéfinie « Partage de fichiers et d’imprimantes (Demande d’écho - Trafic entrant ICMPv4) » dans le pare-feu, plutôt que d’ouvrir tous les protocoles.

| Contrôle à conserver dans la procédure Capturer les quatre adresses, le masque /26, la passerelle, puis un ping réussi entre vos deux machines et vers les deux machines du binôme. |
| --- |

Commandes de vérification

```
ipconfig /all
ip -br a
ping ...
```

### 4. Partie 2 - Utilisateurs et environnement

#### 4.1 Convention de nommage et comptes

Convention commune aux deux systèmes : groupes locaux en minuscules sans accent, préfixés par l_. Les groupes de service sont l_direction, l_commercial, l_comptabilite, l_informatique et l_logistique. Le groupe documentation est ajouté pour satisfaire la consigne de /services.

| Service | Nom | Login |
| --- | --- | --- |
| Direction | Rick Grimes | rgrimes |
| Commercial | Daryl Dixon | ddixon |
| Commercial | Gabriel Stokes | gstokes |
| Commercial | Maggie Greene | mgreene |
| Comptabilité | Eugene Porter | eporter |
| Comptabilité | Carol Peletier | cpeletier |
| Informatique | Vous-même | <VOTRE_LOGIN> |
| Informatique | Votre binôme / prestataire | <LOGIN_BINOME> |
| Logistique | Rosita Espinosa | respinosa |
| Logistique | Morgan Jones | mjones |

| Mots de passe Utiliser un mot de passe temporaire unique d’au moins 12 caractères, sans nom/prénom, mélangeant plusieurs types de caractères. Le fournir de manière sûre et le changer à la première connexion lorsque demandé. Ne pas réutiliser le même mot de passe entre Windows et Debian. |
| --- |

#### 4.2 Création sous Windows selon les trois méthodes imposées

#### Direction et comptabilité - Invite de commandes

```
net localgroup l_direction /add /comment:"Groupe local du service Direction"
net localgroup l_comptabilite /add /comment:"Groupe local du service Comptabilite"
net user rgrimes * /add /fullname:"Rick Grimes" /comment:"Direction" /expires:never
net localgroup l_direction rgrimes /add
net user eporter * /add /fullname:"Eugene Porter" /comment:"Comptabilite" /expires:never
net localgroup l_comptabilite eporter /add
net user cpeletier * /add /fullname:"Carol Peletier" /comment:"Comptabilite - interimaire" /expires:never
net localgroup l_comptabilite cpeletier /add
net user cpeletier /times:L-V,09:00-12:00
```

Le caractère * demande le mot de passe sans l’écrire dans le script. Le fichier 01_direction_comptabilite.cmd fourni reprend ces commandes.

#### Informatique et logistique - PowerShell

```
$pwd = Read-Host 'Mot de passe temporaire' -AsSecureString
New-LocalGroup -Name 'l_informatique' -Description 'Service Informatique'
New-LocalUser -Name '<VOTRE_LOGIN>' -FullName '<VOTRE_PRENOM_NOM>' -Description 'Informatique - administrateur' -Password $pwd
Add-LocalGroupMember -Group 'l_informatique' -Member '<VOTRE_LOGIN>'
Add-LocalGroupMember -Group 'Administrateurs' -Member '<VOTRE_LOGIN>'
```

Utiliser le script 02_informatique_logistique.ps1 pour les quatre comptes. Il demande les mots de passe de manière sécurisée et ajoute les deux membres informatiques au groupe Administrateurs.

#### Commercial - Interface graphique

Exécuter lusrmgr.msc.

Créer le groupe l_commercial avec une description explicite.

Dans Utilisateurs, créer ddixon, gstokes et mgreene avec leur nom complet et la description Commercial.

Ajouter les trois comptes au groupe l_commercial.

Vérifier les membres depuis les propriétés du groupe.

#### 4.3 Dossier Procédures sur le Bureau

Créer C:\Users\Default\Desktop\Procédures.

Créer le fichier Règlement intérieur.txt dans ce dossier.

Le profil Default sert de modèle aux futurs profils. Pour les profils déjà ouverts, recopier le dossier manuellement ou exécuter 03_preparer_profils.ps1.

| Pourquoi Default ? Un simple dossier créé dans le Bureau de l’administrateur ne sera visible que pour ce compte. Le profil Default garantit sa présence pour tout nouvel utilisateur. |
| --- |

#### 4.4 Horaires de Carol Peletier

```
net user cpeletier /times:L-V,09:00-12:00
net user cpeletier
```

Sur certains systèmes, les noms de jours sont localisés différemment. Utiliser net help user si la syntaxe L-V est refusée. Le contrôle doit afficher les heures autorisées du lundi au vendredi.

#### 4.5 Stratégie de mots de passe et administrateurs

Ouvrir secpol.msc > Stratégies de comptes > Stratégie de mot de passe.

Définir longueur minimale = 12, durée de vie maximale = 25 jours et exigences de complexité = Activées.

Créer le compte adminsecours en CMD et l’ajouter au groupe Administrateurs.

Ajouter <VOTRE_LOGIN> et <LOGIN_BINOME> au groupe Administrateurs.

Forcer le changement du mot de passe du binôme à la première connexion.

```
net accounts /minpwlen:12 /maxpwage:25
net user adminsecours * /add /fullname:"Administrateur de secours"
net localgroup Administrateurs adminsecours /add
net localgroup Administrateurs <VOTRE_LOGIN> /add
net localgroup Administrateurs <LOGIN_BINOME> /add
net user <LOGIN_BINOME> /logonpasswordchg:yes
net accounts
```

| Contradiction assumée La politique globale de 25 jours rend impossible « mot de passe n’expire jamais » pour tous les comptes. La solution retient la contrainte spécifique de 25 jours, plus tardive et contrôlable dans secpol.msc. |
| --- |

#### 4.6 Comptes et groupes sous Debian

Exécuter le script 01_utilisateurs_groupes.sh après avoir remplacé les variables. Il installe KSH, crée les six groupes, les dix comptes et force le changement initial du binôme.

```
chmod +x 01_utilisateurs_groupes.sh
sudo ./01_utilisateurs_groupes.sh

# Contrôles
getent passwd rgrimes ddixon gstokes mgreene eporter cpeletier <VOTRE_LOGIN> <LOGIN_BINOME> respinosa mjones
getent group l_direction l_commercial l_comptabilite l_informatique l_logistique documentation
chage -l <LOGIN_BINOME>
```

| Correction du corrigé modèle useradd -p n’accepte pas un mot de passe en clair : il attend un hash. Le script utilise passwd, ce qui est sûr et fonctionnel. Le fichier correct est /etc/group, pas /etc/groups. |
| --- |

#### 4.7 Stratégies locales pour les non-administrateurs Windows

Exécuter mmc, ajouter le composant Éditeur d’objet de stratégie de groupe, cliquer Parcourir > Utilisateurs > Non-administrateurs.

Configuration utilisateur > Modèles d’administration > Système > Accès au stockage amovible : activer CD et DVD - Refuser l’accès en lecture et en écriture.

Configuration utilisateur > Modèles d’administration > Composants Windows > Explorateur de fichiers : supprimer les fonctions de gravure de CD.

Configuration utilisateur > Modèles d’administration > Système : activer Empêcher l’accès aux outils de modification du Registre.

Configuration utilisateur > Modèles d’administration > Bureau > Bureau : activer Papier peint du Bureau et indiquer un chemin local lisible par tous.

Dans la stratégie ordinateur, ouvrir les propriétés du Pare-feu Windows Defender et activer les profils Domaine, Privé et Public.

Exécuter gpupdate /force et contrôler avec gpresult /r.

```
gpupdate /force
gpresult /r
netsh advfirewall show allprofiles
```

#### 4.8 Sources APT et confort Vim

Ouvrir /etc/apt/sources.list avec Vim.

Commenter en une seule commande toutes les lignes deb-src non commentées.

Commenter la ligne du DVD.

Mettre à jour la base de paquets et installer vim.

Activer la coloration, la numérotation et le mode non compatible dans /etc/vim/vimrc.local.

```
sudo vim /etc/apt/sources.list
:g/^\s*deb-src/s/^/#/
:g/^\s*deb cdrom:/s/^/#/
:wq

sudo apt update
sudo apt install -y vim
sudo tee /etc/vim/vimrc.local >/dev/null <<'EOF'
set nocompatible
syntax on
set number
EOF
```

Dans Vim, :g applique la substitution à toutes les lignes correspondantes. Le motif ne cible que les lignes actives, donc il évite de doubler les #.

| Contrôle à conserver dans la procédure Capturer le fichier sources.list avec les lignes commentées et un fichier ouvert dans Vim montrant les numéros de lignes et la coloration. |
| --- |

Commandes de vérification

```
grep -nE '^(deb-src|deb cdrom:)' /etc/apt/sources.list || echo 'Toutes les lignes demandées sont commentées'
vim --version | head
```

### 5. Partie 3 - Stockage, partages et imprimantes

#### 5.1 Partition DATA de 15 Go sous Windows avec DISKPART

| Risque de destruction La commande clean n’est pas nécessaire ici et n’est volontairement pas utilisée. Vérifier que le disque sélectionné est bien le second disque de 40 Go. |
| --- |

```
diskpart
list disk
select disk 1
detail disk
offline disk
online disk
convert mbr
create partition primary size=15360
format fs=ntfs quick label=DATA
assign letter=D
list volume
exit
```

15360 Mo correspond à 15 Gio. Si le formateur attend la convention du corrigé modèle, size=15000 donne environ 15 Go décimaux.

#### 5.2 Partitions PROFILS, DATA et LOGS sous Debian

Identifier le disque de 40 Go avec lsblk -o NAME,SIZE,MODEL,TYPE,MOUNTPOINTS.

Lancer fdisk /dev/sdb et créer trois partitions primaires : +15G, +15G, puis tout le reste.

Écrire avec w, installer xfsprogs puis formater avec les labels demandés.

```
sudo fdisk /dev/sdb
# n, p, 1, Entrée, +15G
# n, p, 2, Entrée, +15G
# n, p, 3, Entrée, Entrée
# w
sudo partprobe /dev/sdb
sudo apt install -y xfsprogs
sudo mkfs.ext4 -L PROFILS /dev/sdb1
sudo mkfs.ext4 -L DATA /dev/sdb2
sudo mkfs.xfs -f -L LOGS /dev/sdb3
lsblk -f
```

#### 5.3 Remplacement définitif de /home par PROFILS

Éteindre la VM et créer un snapshot.

Démarrer en mode secours afin qu’aucun utilisateur n’écrive dans /home.

Monter PROFILS temporairement et copier toutes les données avec les droits.

Commenter l’ancienne ligne /home dans /etc/fstab et ajouter LABEL=PROFILS.

Redémarrer et vérifier que les comptes retrouvent leurs fichiers.

```
sudo systemctl isolate rescue.target
sudo mkdir -p /mnt/profils
sudo mount LABEL=PROFILS /mnt/profils
sudo cp -a /home/. /mnt/profils/
sudo vim /etc/fstab
# Commenter l'ancienne ligne /home
# Ajouter :
LABEL=PROFILS  /home  ext4  defaults  0  2
sudo reboot
```

| Contrôle à conserver dans la procédure Le point /home doit provenir de LABEL=PROFILS et un utilisateur doit pouvoir créer un fichier dans son profil. |
| --- |

Commandes de vérification

```
findmnt /home
df -hT /home
su - ddixon -c 'touch ~/test-profils && ls -l ~/test-profils'
```

#### 5.4 Montage de DATA dans /services et confidentialité

```
sudo mkdir -p /services
sudo sh -c 'echo "LABEL=DATA /services ext4 defaults 0 2" >> /etc/fstab'
sudo mount -a
sudo mkdir -p /services/{commercial,comptabilite,direction,informatique,logistique}

sudo chown root:documentation /services
sudo chmod 2770 /services
sudo chown root:l_commercial /services/commercial
sudo chown root:l_comptabilite /services/comptabilite
sudo chown root:l_direction /services/direction
sudo chown root:l_informatique /services/informatique
sudo chown root:l_logistique /services/logistique
sudo chmod 2770 /services/{commercial,comptabilite,direction,informatique,logistique}
```

Le bit 2 (setgid) force les nouveaux fichiers à hériter du groupe du dossier. À la racine, ils appartiennent à documentation ; dans chaque dossier de service, ils héritent du groupe du service, ce qui permet la confidentialité.

| Contrôle à conserver dans la procédure La première commande doit réussir et la seconde doit renvoyer Permission non accordée. |
| --- |

Commandes de vérification

```
su - ddixon -c 'touch /services/commercial/test-ok'
su - ddixon -c 'touch /services/comptabilite/test-interdit'
```

#### 5.5 Dossiers NTFS Commerciaux et Support_Info

Créer D:\donnees\Commerciaux et D:\Support_Info.

Dans Sécurité > Avancé, désactiver l’héritage et supprimer les autorisations héritées.

Conserver SYSTEM et Administrateurs en contrôle total.

Accorder Modifier au groupe l_commercial sur Commerciaux et au groupe l_informatique sur Support_Info.

Utiliser l’onglet Accès effectif pour tester un membre autorisé et un utilisateur étranger au service.

```
mkdir D:\donnees\Commerciaux
mkdir D:\Support_Info
icacls D:\donnees\Commerciaux /inheritance:r
icacls D:\donnees\Commerciaux /grant:r "SYSTEM:(OI)(CI)F" "Administrateurs:(OI)(CI)F" "l_commercial:(OI)(CI)M"
icacls D:\Support_Info /inheritance:r
icacls D:\Support_Info /grant:r "SYSTEM:(OI)(CI)F" "Administrateurs:(OI)(CI)F" "l_informatique:(OI)(CI)M
```

| Règle NTFS + partage Lors d’un accès réseau, le droit effectif est l’intersection des permissions de partage et NTFS. Il faut donc contrôler les deux niveaux. |
| --- |

#### 5.6 Partage caché Support_Info$ et lecteur U:

Exécuter le script 04_partage_support_info.ps1. Le signe $ rend le partage non visible lors de l’exploration, mais il reste accessible avec son chemin exact.

```
New-SmbShare -Name 'Support_Info$' -Path 'D:\Support_Info' -ChangeAccess 'l_informatique' -FullAccess 'Administrateurs'
Get-SmbShare
net share
```

#### Méthode 1 - CMD persistante sur le poste du binôme

```
net use U: \\172.16.0.189\Support_Info$ /persistent:yes
U:
echo Test d'écriture > test-binome.txt
```

#### Méthode 2 - PowerShell ou interface graphique

```
New-PSDrive -Name U -PSProvider FileSystem -Root '\\172.16.0.189\Support_Info$' -Persist
```

Méthode graphique équivalente : Explorateur > Ce PC > Connecter un lecteur réseau > U: > chemin UNC > Reconnexion à l’ouverture de session.

#### 5.7 Imprimante HP LaserJet M9050 MFP

Extraire ou installer le pilote HP fourni.

Ouvrir printmanagement.msc, ajouter un port TCP/IP standard avec 172.16.168.189. Si la détection échoue, choisir Carte réseau générique et désactiver la requête SNMP.

Ajouter l’imprimante avec le pilote HP, la nommer HP LaserJet M9050 MFP et la partager sous HP-M9050.

Dans Sécurité : Tout le monde = Imprimer ; l_comptabilite = Imprimer + Gérer les documents ; l_informatique = Imprimer + Gérer cette imprimante + Gérer les documents.

Depuis le W10 du binôme, ouvrir \\172.16.0.189, connecter l’imprimante et la définir par défaut.

| Pourquoi « Gérer les documents » pour la comptabilité ? Ce droit permet de supprimer une impression bloquée sans permettre de modifier toute la configuration de l’imprimante. |
| --- |

#### 5.8 Pool Xerox, horaires et priorités

Installer le pilote Xerox C60/C70 fourni.

Créer les ports TCP/IP 172.16.168.188 et 172.16.169.188.

Créer une imprimante Xerox-Comptabilite, ouvrir Ports, activer le pool et sélectionner les deux ports.

Sécurité : supprimer Tout le monde, autoriser l_comptabilite à imprimer et l_informatique en contrôle total.

Avancé : définir Disponible de 19:00 à 03:00.

Créer une deuxième file Xerox-Direction utilisant le même pilote et les mêmes ports ; priorité 99 contre priorité 1 pour la file normale.

Limiter Xerox-Direction au groupe l_direction et conserver l_informatique en contrôle total.

| Pourquoi deux files ? Deux files logiques peuvent envoyer vers les mêmes ports physiques. Windows traite d’abord la file ayant la priorité la plus haute, ce qui donne la priorité aux directeurs. |
| --- |

#### 5.9 Déplacement du spool vers D:

Créer D:\Spool avec les droits SYSTEM et Administrateurs.

Arrêter le service Spouleur d’impression.

Dans les propriétés avancées du serveur d’impression, remplacer le dossier de spool par D:\Spool, ou exécuter 05_deplacer_spool.ps1.

Redémarrer le service et envoyer une page de test.

```
Stop-Service Spooler -Force
New-Item D:\Spool -ItemType Directory -Force
Set-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name DefaultSpoolDirectory -Value 'D:\Spool'
Start-Service Spooler
```

### 6. Partie 4 - Configuration avancée

#### 6.1 GRUB à 2 secondes

```
sudo vim /etc/default/grub
# Modifier : GRUB_TIMEOUT=2
sudo update-grub
grep '^GRUB_TIMEOUT=' /etc/default/grub
```

update-grub régénère le fichier réellement lu au démarrage ; modifier uniquement /etc/default/grub sans cette commande ne suffit pas.

#### 6.2 Agrandissement définitif du swap à 1 Go

| Snapshot obligatoire Cette opération modifie la table du premier disque. Relever avec précision le numéro de la partition swap et l’espace libre avant de continuer. |
| --- |

```
swapon --show
lsblk -f
sudo swapoff -a
sudo fdisk /dev/sda
# p : relever la partition swap et l'espace libre
# d : supprimer uniquement l'ancienne partition swap
# n : recréer la partition swap à 1G dans l'espace disponible
# t : type Linux swap (82 sur MBR)
# w
sudo partprobe /dev/sda
sudo mkswap -L SWAP /dev/sda4
sudo vim /etc/fstab
# Remplacer l'ancienne ligne par :
LABEL=SWAP none swap sw 0 0
sudo swapon -a
swapon --show
free -h
```

Le swap ne contient pas de données à conserver : il peut être désactivé, recréé plus grand, puis réactivé. Adapter /dev/sda4 au numéro réellement observé.

#### 6.3 Mise à jour Debian

```
sudo apt update
sudo apt full-upgrade -y
sudo apt autoremove --purge -y
```

#### 6.4 Bureau à distance Windows avec NLA

Panneau de configuration > Système > Paramètres d’utilisation à distance.

Autoriser les connexions distantes et conserver l’authentification au niveau du réseau (NLA).

Ajouter <LOGIN_BINOME> ou le groupe l_informatique aux Utilisateurs du Bureau à distance.

Vérifier l’écoute sur le port 3389 puis demander au binôme de se connecter.

```
Add-LocalGroupMember -Group 'Utilisateurs du Bureau à distance' -Member '<LOGIN_BINOME>'
netstat -ano | findstr :3389
Get-NetTCPConnection -LocalPort 3389 -State Listen
```

| Contrôle à conserver dans la procédure Capturer la ligne LISTENING sur 0.0.0.0:3389 ou [::]:3389 et une session RDP réussie depuis le poste du binôme. |
| --- |

Commandes de vérification

```
netstat -ano | findstr :3389
```

### 7. Partie 5 - Installation des applications

#### 7.1 Installation silencieuse de 7-Zip sous Windows

La ressource fournie est l’installateur 7-Zip 19.00 x64. L’option /S lance le mode silencieux et /D définit le dossier, à placer en dernier.

```
cd <DOSSIER_RESSOURCES>
7zip.exe /S
"C:\Program Files\7-Zip\7z.exe" i
```

Aucune boîte de dialogue ne doit apparaître, hors éventuelle demande UAC. La seconde commande prouve que le programme est installé.

#### 7.2 Client RDP graphique sous Debian : Remmina

```
sudo apt update
sudo apt install -y remmina
remmina
```

Créer un profil RDP vers 172.16.0.189.

Renseigner le login Windows autorisé et son mot de passe.

Conserver la négociation de sécurité automatique/NLA.

Se connecter et capturer le Bureau Windows affiché dans Remmina.

#### 7.3 Installation de Webmin

La méthode du corrigé installe un paquet .deb, laisse dpkg signaler les dépendances, puis les répare avec apt. Utiliser le paquet officiel téléchargé pour Debian.

```
sudo apt update
sudo apt install -y perl openssl libauthen-pam-perl libio-pty-perl apt-show-versions
sudo dpkg -i webmin_*.deb
sudo apt --fix-broken install -y
sudo systemctl enable --now webmin
sudo ss -lntp | grep 10000
```

Accéder depuis le navigateur à https://172.16.0.188:10000/. Le certificat auto-signé provoque un avertissement normal dans ce laboratoire. S’authentifier avec root ou un compte autorisé.

### 8. Partie 6 - Sauvegarde et restauration

#### 8.1 Sauvegarde quotidienne Debian à 12 h 30

Le script 02_sauvegarde_quotidienne.sh crée deux archives tar datées : une pour /home et une pour /services. Il les copie ensuite vers le Debian du binôme par SCP.

Sur le Debian du binôme, installer openssh-server et créer /srv/sauvegardes/DEB10-<INITIALES> avec les droits du compte distant.

Sur votre Debian, installer openssh-client, générer une clé SSH pour root et copier la clé publique avec ssh-copy-id.

Adapter REMOTE_USER, REMOTE_HOST et REMOTE_DIR dans le script.

Tester le script manuellement avant de le planifier.

Ajouter une tâche cron quotidienne à 12 h 30.

```
sudo apt install -y openssh-client
sudo ssh-keygen -t ed25519 -f /root/.ssh/id_ed25519
sudo ssh-copy-id -i /root/.ssh/id_ed25519.pub <LOGIN_BINOME>@172.16.0.186
sudo install -m 700 02_sauvegarde_quotidienne.sh /usr/local/sbin/sauvegarde-msp
sudo /usr/local/sbin/sauvegarde-msp
sudo crontab -e
30 12 * * * /usr/local/sbin/sauvegarde-msp >> /var/log/sauvegarde-msp.log 2>&1
```

| Pourquoi une clé SSH ? Cron ne peut pas répondre à une demande de mot de passe interactive. La clé permet une copie automatique ; elle doit être protégée par des permissions strictes. |
| --- |

| Contrôle à conserver dans la procédure Les deux archives doivent exister localement et sur la machine distante. |
| --- |

Commandes de vérification

```
sudo crontab -l
ls -lh /var/backups/msp
ssh <LOGIN_BINOME>@172.16.0.186 ls -lh /srv/sauvegardes/DEB10-<INITIALES>
```

#### 8.2 Image système Windows

Ajouter le disque de 60 Go dans VMware, l’initialiser et le formater en NTFS avec une lettre libre, par exemple E:.

Ouvrir Panneau de configuration > Sauvegarder et restaurer (Windows 7) > Créer une image système.

Choisir le disque de 60 Go comme destination et inclure les volumes critiques proposés.

Lancer la sauvegarde et vérifier la présence du dossier WindowsImageBackup.

Alternative en ligne de commande

```
wbadmin start backup -backupTarget:E: -include:C: -allCritical -quiet
wbadmin get versions
```

#### 8.3 Sauvegarde du dossier Support_Info vers le W10 du binôme à 12 h 45

Sur le W10 du binôme, créer dans son partage Support_Info$ un dossier Sauvegarde_W10_<INITIALES>.

Ouvrir Sauvegarder et restaurer > Configurer la sauvegarde > Enregistrer sur un réseau.

Saisir \\172.16.0.187\Support_Info$\Sauvegarde_W10_<INITIALES> et un compte autorisé.

Choisir Me laisser choisir, sélectionner D:\Support_Info et décocher l’image système.

Créer la planification quotidienne. Si l’interface ne propose pas 12 h 45, modifier la tâche AutomaticBackup dans le Planificateur de tâches.

| Pourquoi un sous-dossier dédié ? Il évite de mélanger les sauvegardes de plusieurs postes et simplifie la restauration et la preuve de fonctionnement. |
| --- |

#### 8.4 Points de restauration : 8 % sur C:

Ouvrir Protection du système.

Sélectionner C: > Configurer > Activer la protection du système.

Placer l’utilisation maximale à 8 %.

Créer un point nommé Avant_MSP_Final et vérifier qu’il apparaît.

```
Enable-ComputerRestore -Drive 'C:\'
vssadmin resize shadowstorage /For=C: /On=C: /MaxSize=8%
Checkpoint-Computer -Description 'Avant_MSP_Final' -RestorePointType 'MODIFY_SETTINGS'
```

### 9. Partie 7 - Pour aller plus loin

#### 9.1 Montage permanent de LOGS dans /var/log sans perte

Créer un snapshot machine éteinte.

Passer en mode secours pour réduire les écritures dans /var/log.

Monter la partition LOGS dans un emplacement temporaire et copier les journaux en préservant les attributs.

Ajouter LABEL=LOGS dans /etc/fstab puis monter la nouvelle partition sur /var/log.

Redémarrer et vérifier que de nouvelles lignes sont écrites.

```
sudo systemctl isolate rescue.target
sudo mkdir -p /mnt/logs
sudo mount LABEL=LOGS /mnt/logs
sudo cp -a /var/log/. /mnt/logs/
sudo sh -c 'echo "LABEL=LOGS /var/log xfs defaults 0 0" >> /etc/fstab'
sudo mount -a
sudo reboot
findmnt /var/log
sudo tail -n 30 /var/log/syslog
```

| Pourquoi cp -a ? cp -a conserve propriétaires, groupes, permissions, dates et liens. Une copie simple risquerait d’empêcher certains services d’écrire leurs journaux. |
| --- |

#### 9.2 Montage du partage Windows depuis Debian avec SMB 3

Installer cifs-utils.

Créer /mnt/support_info et un fichier d’identifiants root-only.

Ajouter le partage caché du W10 du binôme dans /etc/fstab avec vers=3.0 et _netdev.

Monter et tester la création d’un fichier.

```
sudo apt install -y cifs-utils
sudo mkdir -p /mnt/support_info
sudo tee /root/.smb-support >/dev/null <<'EOF'
username=<LOGIN_BINOME>
password=<MOT_DE_PASSE_WINDOWS>
EOF
sudo chmod 600 /root/.smb-support
sudo sh -c 'echo "//172.16.0.187/Support_Info$ /mnt/support_info cifs credentials=/root/.smb-support,vers=3.0,iocharset=utf8,uid=<VOTRE_LOGIN>,gid=l_informatique,file_mode=0660,dir_mode=0770,_netdev,nofail 0 0" >> /etc/fstab'
sudo mount -a
findmnt /mnt/support_info
touch /mnt/support_info/test-debian.txt
```

| Ne pas activer SMB1 Windows 10 et cifs-utils savent utiliser SMB2/SMB3. SMB1 est obsolète et inutile pour cette tâche. |
| --- |

#### 9.3 Déplacement du fichier de pagination Windows vers D:

Système > Paramètres système avancés > Performances > Paramètres > Avancé > Mémoire virtuelle > Modifier.

Décocher la gestion automatique.

Sélectionner C: > Aucun fichier d’échange > Définir.

Sélectionner D: > Taille gérée par le système > Définir.

Valider et redémarrer. Vérifier la présence de D:\pagefile.sys.

#### 9.4 Volume LVM de 32 Go monté sur /opt

Ajouter deux disques SCSI de 20 Go et vérifier qu’ils sont /dev/sdc et /dev/sdd.

Installer lvm2, créer les volumes physiques, le groupe vg_applications et le volume logique lv_opt de 32 Go.

Formater en ext4, copier le contenu actuel de /opt puis ajouter le montage permanent.

Le script 03_lvm_opt.sh automatise ces opérations après une confirmation explicite.

```
sudo pvcreate /dev/sdc /dev/sdd
sudo vgcreate vg_applications /dev/sdc /dev/sdd
sudo lvcreate -L 32G -n lv_opt vg_applications
sudo mkfs.ext4 -L OPT /dev/vg_applications/lv_opt
sudo mkdir -p /mnt/nouveau_opt
sudo mount /dev/vg_applications/lv_opt /mnt/nouveau_opt
sudo cp -a /opt/. /mnt/nouveau_opt/
# Ajouter l'UUID dans /etc/fstab puis :
sudo mount -a
pvs
vgs
lvs
findmnt /opt
```

| Pourquoi copier /opt avant le montage ? Monter un nouveau volume sur /opt masque les fichiers déjà présents. La copie évite de perdre l’accès aux applications existantes. |
| --- |

#### 9.5 Formules du classeur Résultats_séminaire.xlsx

| Zone | Formule française à saisir puis recopier |
| --- | --- |
| F5 - Total par élève | =SOMME(B5:E5) |
| G5 - Moyenne par élève | =MOYENNE(B5:E5) |
| I5 - Appréciation | =SI(ET(G5>10;H5>10);"Bien";SI(ET(G5<=10;H5>=10);"En progrès";SI(ET(G5>=10;H5<10);"Trop d'absences";"En danger!"))) |
| B15 - Total par matière | =SOMME(B5:B12) |
| B16 - Moyenne par matière | =MOYENNE(B5:B12) |
| B17 - Note maximum | =MAX(B5:B12) |
| B18 - Note minimum | =MIN(B5:B12) |
| B19 - Nombre d’élèves | =NBVAL(A5:A12) |

Recopier F5:G5 et I5 jusqu’à la ligne 12. Recopier B15:B18 vers les colonnes C à E. Le classeur Resultats_seminaire_solution_complete.xlsx fourni contient toutes les formules, y compris celles manquantes dans certaines lignes du corrigé distribué.

| Cas limite de la consigne La règle ne définit pas explicitement le cas moyenne > 10 et assiduité = 10. La formule du corrigé utilise En danger! comme cas par défaut. Les données fournies ne contiennent pas cette combinaison, donc les résultats attendus restent identiques. |
| --- |

### 10. Matrice de validation finale

| Bloc | Preuve minimale à insérer dans votre procédure |
| --- | --- |
| VM et réseau | Paramètres VMware, noms des VM, ipconfig /all, ip -br a, pings croisés. |
| Utilisateurs Windows | net user, listes de membres des groupes, compte Carol et heures, secpol.msc, Administrateurs. |
| Utilisateurs Debian | getent passwd, getent group, shell KSH du binôme, chage -l. |
| GPO / Vim | gpresult /r, pare-feu actif, refus regedit sur un non-admin, sources.list et Vim numéroté. |
| Disques | DISKPART list volume, lsblk -f, findmnt /home, findmnt /services. |
| Permissions | Accès effectif Windows ; test autorisé/interdit sous Debian. |
| Partage | Get-SmbShare, net share, lecteur U: persistant et fichier créé depuis le binôme. |
| Imprimantes | Ports TCP/IP, permissions, pool, deux files/priorités, dossier D:\Spool. |
| Avancé | GRUB_TIMEOUT=2, swap 1 Go, paquets mis à jour, RDP 3389 et connexion réussie. |
| Applications | 7-Zip installé sans assistant, Remmina connecté, Webmin sur le port 10000. |
| Sauvegardes | Archives tar locales et distantes, cron, image système, sauvegarde Windows à 12 h 45, point de restauration. |
| LVM et tableur | pvs/vgs/lvs, findmnt /opt, formules et résultats du classeur. |

#### 10.1 Fichiers fournis avec ce document

| Fichier | Rôle |
| --- | --- |
| scripts/windows/01_direction_comptabilite.cmd | Création CMD des groupes/comptes Direction et Comptabilité, horaires de Carol, admin de secours. |
| scripts/windows/02_informatique_logistique.ps1 | Création PowerShell des comptes Informatique et Logistique et droits administrateurs. |
| scripts/windows/03_preparer_profils.ps1 | Création du dossier Procédures dans Default et les profils existants. |
| scripts/windows/04_partage_support_info.ps1 | Permissions NTFS et partage caché Support_Info$. |
| scripts/windows/05_deplacer_spool.ps1 | Déplacement du spool vers D:\Spool. |
| scripts/debian/01_utilisateurs_groupes.sh | Création des groupes et dix comptes Debian, KSH et changement initial. |
| scripts/debian/02_sauvegarde_quotidienne.sh | Archives tar, copie SCP et rétention locale. |
| scripts/debian/03_lvm_opt.sh | Création LVM de 32 Go et montage sécurisé de /opt. |
| tableur/Resultats_seminaire_solution_complete.xlsx | Classeur complété avec toutes les formules. |

Référence du document : 1VjldO4eIANRMrEXjm_PVkQPyzH-t0X5d · SHA-256 57c97cef9e70b352…

## Correction · README.txt · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### README.txt

```
PACK SOLUTION MSP - SYSTÈMES CLIENTS
Réseau adapté : 172.16.0.128/26

PLAN D'ADRESSAGE RETENU
- Réseau : 172.16.0.128/26
- Masque : 255.255.255.192
- Première adresse utilisable : 172.16.0.129
- Dernière adresse utilisable : 172.16.0.190
- Broadcast : 172.16.0.191
- Passerelle retenue par hypothèse : 172.16.0.190
- Votre Windows 10 : 172.16.0.189
- Votre Debian 10 : 172.16.0.188
- Windows 10 du binôme : 172.16.0.187
- Debian 10 du binôme : 172.16.0.186

La passerelle .190 reprend la méthode du corrigé modèle (dernière adresse utilisable). Si le formateur ou le DHCP du réseau Bridged fournit une autre passerelle ou d'autres DNS, ces valeurs réelles sont prioritaires.

REMPLACEMENTS OBLIGATOIRES AVANT EXÉCUTION
- <INITIALES>
- <VOTRE_LOGIN>
- <VOTRE_PRENOM_NOM>
- <LOGIN_BINOME>
- <PRENOM_NOM_BINOME>

SÉCURITÉ
- Ne jamais lancer un script de disque ou de partitionnement avant d'avoir vérifié le numéro du disque avec list disk ou lsblk.
- Les scripts complètent la procédure PDF ; ils ne remplacent pas les contrôles, tests et captures demandés.
- Les actions dans VMware, Windows 10 et Debian 10 restent à exécuter dans vos machines virtuelles.
```

Référence du document : 10a050MbNzFfXwhwypYTxliOPZ_FRsvuH · SHA-256 fdab278886adfa17…

## Correction · Resultats_seminaire_solution_complete.xlsx · document texte

Classeur du Drive retranscrit en tableaux HTML et formules littérales. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Classeur du Drive retranscrit en tableaux HTML et formules littérales. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### Feuil1

| MSP Client OS TSSR 07 1ER TRIMESTRE |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Colonne1 | Colonne2 | Colonne3 | Colonne4 | Colonne5 | Colonne6 | Colonne7 | Colonne8 | Colonne9 |
|  | Conduite de véhicule | EPS | Exercice de tir | Physique Chimie | Total par élève | Moyenne par élève | ASSIDUITE | APPRECIATION |
| Rick Grimes | 11 | 20 | 6 | 9.5 | 46.5 | 11.625 | 9 | Trop d'absences |
| Daryl Dixon | 11 | 9 | 15 | 17 | 52 | 13 | 8 | Trop d'absences |
| Gabriel Stokes | 10 | 8 | 11 | 5 | 34 | 8.5 | 12 | En progrès |
| Maggie Greene | 18 | 14 | 16 | 13 | 61 | 15.25 | 12 | Bien |
| Eugene Porter | 15 | 15 | 11 | 15 | 56 | 14 | 15 | Bien |
| Carol Peletier | 9 | 9 | 9 | 9 | 36 | 9 | 9 | En danger! |
| Rosita Espinosa | 12 | 13 | 17 | 6 | 48 | 12 | 15 | Bien |
| Morgan Jones | 11 | 16 | 12 | 11 | 50 | 12.5 | 15 | Bien |
| Colonne1 | Colonne2 | Colonne3 | Colonne4 | Colonne5 |  |  |  |  |
| Total par matière | 97 | 104 | 97 | 85.5 | Pour calculer l'appréciation selon la condition suivante : |  |  |  |
| Moyenne par matière | 12.125 | 13 | 12.125 | 10.6875 | Si la moyenne et l'assiduité >10 afficher Bien |  |  |  |
| Note maximum | 18 | 20 | 17 | 17 | Si la moyenne <=10 et l'assiduité >=10 afficher En Progrès |  |  |  |
| Note minimum | 9 | 8 | 6 | 5 | Si la moyenne >=10 et l'assiduité <10 afficher Trop d'absences |  |  |  |
| Nombre d'élèves | 8 |  |  |  | Si la moyenne et l'assiduité <10 afficher En danger! |  |  |  |

#### Formules du classeur source

| Cellule | Formule |
| --- | --- |
| F5 | =SUM(B5:E5) |
| G5 | =AVERAGE(B5:E5) |
| I5 | =IF(AND(G5>10,H5>10),"Bien",IF(AND(G5<=10,H5>=10),"En progrès",IF(AND(G5>=10,H5<10),"Trop d'absences","En danger!"))) |
| F6 | =SUM(B6:E6) |
| G6 | =AVERAGE(B6:E6) |
| I6 | =IF(AND(G6>10,H6>10),"Bien",IF(AND(G6<=10,H6>=10),"En progrès",IF(AND(G6>=10,H6<10),"Trop d'absences","En danger!"))) |
| F7 | =SUM(B7:E7) |
| G7 | =AVERAGE(B7:E7) |
| I7 | =IF(AND(G7>10,H7>10),"Bien",IF(AND(G7<=10,H7>=10),"En progrès",IF(AND(G7>=10,H7<10),"Trop d'absences","En danger!"))) |
| F8 | =SUM(B8:E8) |
| G8 | =AVERAGE(B8:E8) |
| I8 | =IF(AND(G8>10,H8>10),"Bien",IF(AND(G8<=10,H8>=10),"En progrès",IF(AND(G8>=10,H8<10),"Trop d'absences","En danger!"))) |
| F9 | =SUM(B9:E9) |
| G9 | =AVERAGE(B9:E9) |
| I9 | =IF(AND(G9>10,H9>10),"Bien",IF(AND(G9<=10,H9>=10),"En progrès",IF(AND(G9>=10,H9<10),"Trop d'absences","En danger!"))) |
| F10 | =SUM(B10:E10) |
| G10 | =AVERAGE(B10:E10) |
| I10 | =IF(AND(G10>10,H10>10),"Bien",IF(AND(G10<=10,H10>=10),"En progrès",IF(AND(G10>=10,H10<10),"Trop d'absences","En danger!"))) |
| F11 | =SUM(B11:E11) |
| G11 | =AVERAGE(B11:E11) |
| I11 | =IF(AND(G11>10,H11>10),"Bien",IF(AND(G11<=10,H11>=10),"En progrès",IF(AND(G11>=10,H11<10),"Trop d'absences","En danger!"))) |
| F12 | =SUM(B12:E12) |
| G12 | =AVERAGE(B12:E12) |
| I12 | =IF(AND(G12>10,H12>10),"Bien",IF(AND(G12<=10,H12>=10),"En progrès",IF(AND(G12>=10,H12<10),"Trop d'absences","En danger!"))) |
| B15 | =SUM(B5:B12) |
| C15 | =SUM(C5:C12) |
| D15 | =SUM(D5:D12) |
| E15 | =SUM(E5:E12) |
| B16 | =AVERAGE(B5:B12) |
| C16 | =AVERAGE(C5:C12) |
| D16 | =AVERAGE(D5:D12) |
| E16 | =AVERAGE(E5:E12) |
| B17 | =MAX(B5:B12) |
| C17 | =MAX(C5:C12) |
| D17 | =MAX(D5:D12) |
| E17 | =MAX(E5:E12) |
| B18 | =MIN(B5:B12) |
| C18 | =MIN(C5:C12) |
| D18 | =MIN(D5:D12) |
| E18 | =MIN(E5:E12) |
| B19 | =COUNTA(A5:A12) |

Référence du document : 1vehLeqVM2NKiKlBIUNtx7UEZALtmrDYQ · SHA-256 95311463f0a2e483…

## Correction · 01_utilisateurs_groupes.sh · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### 01_utilisateurs_groupes.sh

```
#!/bin/bash
set -euo pipefail
# Exécuter en root. Remplacer les quatre variables avant exécution.
VOTRE_LOGIN='<VOTRE_LOGIN>'
VOTRE_NOM='<VOTRE_PRENOM_NOM>'
LOGIN_BINOME='<LOGIN_BINOME>'
NOM_BINOME='<PRENOM_NOM_BINOME>'

apt update
apt install -y ksh

for g in l_direction l_commercial l_comptabilite l_informatique l_logistique documentation; do
  getent group "$g" >/dev/null || groupadd "$g"
done

create_user() {
  local login="$1" fullname="$2" group="$3" shell="$4"
  if ! id "$login" >/dev/null 2>&1; then
    useradd -m -c "$fullname" -g "$group" -G documentation -s "$shell" "$login"
  fi
  echo "Définir le mot de passe temporaire de $login :"
  passwd "$login"
  chage -M -1 "$login"
}

create_user rgrimes 'Rick Grimes' l_direction /bin/bash
create_user ddixon 'Daryl Dixon' l_commercial /bin/bash
create_user gstokes 'Gabriel Stokes' l_commercial /bin/bash
create_user mgreene 'Maggie Greene' l_commercial /bin/bash
create_user eporter 'Eugene Porter' l_comptabilite /bin/bash
create_user cpeletier 'Carol Peletier - interimaire' l_comptabilite /bin/bash
create_user "$VOTRE_LOGIN" "$VOTRE_NOM" l_informatique /bin/bash
create_user "$LOGIN_BINOME" "$NOM_BINOME" l_informatique /bin/ksh
create_user respinosa 'Rosita Espinosa' l_logistique /bin/bash
create_user mjones 'Morgan Jones' l_logistique /bin/bash

# Le prestataire/binôme doit changer son mot de passe à la première connexion.
chage -d 0 "$LOGIN_BINOME"

getent passwd rgrimes ddixon gstokes mgreene eporter cpeletier "$VOTRE_LOGIN" "$LOGIN_BINOME" respinosa mjones
getent group l_direction l_commercial l_comptabilite l_informatique l_logistique documentation
```

Référence du document : 1xmB8OzPNYinOokHh7kiLMg2rQ5vcHQHi · SHA-256 9aacef888f1878a7…

## Correction · 02_sauvegarde_quotidienne.sh · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### 02_sauvegarde_quotidienne.sh

```
#!/bin/bash
set -euo pipefail
# À adapter avant utilisation.
REMOTE_USER='<LOGIN_BINOME>'
REMOTE_HOST='172.16.0.186'
REMOTE_DIR='/srv/sauvegardes/DEB10-XX'
BACKUP_DIR='/var/backups/msp'
DATE="$(date +%F)"

mkdir -p "$BACKUP_DIR"
tar -cpf "$BACKUP_DIR/home-$DATE.tar" /home
tar -cpf "$BACKUP_DIR/services-$DATE.tar" /services

scp -i /root/.ssh/id_ed25519 "$BACKUP_DIR/home-$DATE.tar" "$BACKUP_DIR/services-$DATE.tar" \
  "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/"

# Conservation locale de 7 jours.
find "$BACKUP_DIR" -type f -name '*.tar' -mtime +7 -delete
```

Référence du document : 1ucXlqPHixIAVjeLg8A3APcUeqwd43CMX · SHA-256 6afa8d557e7d1173…

## Correction · 03_lvm_opt.sh · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### 03_lvm_opt.sh

```
#!/bin/bash
set -euo pipefail
# Exécuter en root après avoir vérifié que /dev/sdc et /dev/sdd sont bien les deux nouveaux disques de 20 Go.
apt update
apt install -y lvm2
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS
read -r -p 'Confirmer la création LVM sur /dev/sdc et /dev/sdd (taper OUI) : ' confirm
[[ "$confirm" == 'OUI' ]] || exit 1

pvcreate /dev/sdc /dev/sdd
vgcreate vg_applications /dev/sdc /dev/sdd
lvcreate -L 32G -n lv_opt vg_applications
mkfs.ext4 -L OPT /dev/vg_applications/lv_opt

mkdir -p /mnt/nouveau_opt
mount /dev/vg_applications/lv_opt /mnt/nouveau_opt
cp -a /opt/. /mnt/nouveau_opt/
umount /mnt/nouveau_opt

UUID=$(blkid -s UUID -o value /dev/vg_applications/lv_opt)
echo "UUID=$UUID /opt ext4 defaults 0 2" >> /etc/fstab
mount -a
findmnt /opt
pvs; vgs; lvs
```

Référence du document : 179eW8m365Foy47qKHCDe4cNpH4CJr9Ot · SHA-256 239cf62e68adcfc0…

## Correction · 01_direction_comptabilite.cmd · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### 01_direction_comptabilite.cmd

```
@echo off
chcp 65001 >nul
REM Exécuter dans une invite CMD lancée en administrateur.
REM Les mots de passe sont demandés de manière interactive et ne sont pas écrits dans le script.

net localgroup l_direction /add /comment:"Groupe local du service Direction"
net localgroup l_comptabilite /add /comment:"Groupe local du service Comptabilite"

net user rgrimes * /add /fullname:"Rick Grimes" /comment:"Direction" /expires:never
net localgroup l_direction rgrimes /add

net user eporter * /add /fullname:"Eugene Porter" /comment:"Comptabilite" /expires:never
net localgroup l_comptabilite eporter /add

net user cpeletier * /add /fullname:"Carol Peletier" /comment:"Comptabilite - interimaire" /expires:never
net localgroup l_comptabilite cpeletier /add
REM Sur Windows français. En cas d'erreur, vérifier la syntaxe avec: net help user
net user cpeletier /times:L-V,09:00-12:00

net user adminsecours * /add /fullname:"Administrateur de secours" /comment:"Compte local de secours" /expires:never
net localgroup Administrateurs adminsecours /add

net user
net localgroup l_direction
net localgroup l_comptabilite
pause
```

Référence du document : 1_jg8xV9Sv_x2Zv_NEbRZrcdrd73P4-2y · SHA-256 a6bab08a461f3df4…

## Correction · 02_informatique_logistique.ps1 · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### 02_informatique_logistique.ps1

```
# Exécuter PowerShell en tant qu'administrateur.
# Remplacer les quatre valeurs entre chevrons avant exécution.
$VotreLogin = '<VOTRE_LOGIN>'
$VotreNomComplet = '<VOTRE_PRENOM_NOM>'
$LoginBinome = '<LOGIN_BINOME>'
$NomBinome = '<PRENOM_NOM_BINOME>'

$groups = @(
    @{Name='l_informatique'; Description='Groupe local du service Informatique'},
    @{Name='l_logistique'; Description='Groupe local du service Logistique'}
)
foreach ($g in $groups) {
    if (-not (Get-LocalGroup -Name $g.Name -ErrorAction SilentlyContinue)) {
        New-LocalGroup -Name $g.Name -Description $g.Description
    }
}

$users = @(
    @{Name=$VotreLogin; FullName=$VotreNomComplet; Description='Informatique - administrateur'; Group='l_informatique'; Admin=$true},
    @{Name=$LoginBinome; FullName=$NomBinome; Description='Informatique - binome / prestataire'; Group='l_informatique'; Admin=$true},
    @{Name='respinosa'; FullName='Rosita Espinosa'; Description='Logistique'; Group='l_logistique'; Admin=$false},
    @{Name='mjones'; FullName='Morgan Jones'; Description='Logistique'; Group='l_logistique'; Admin=$false}
)

foreach ($u in $users) {
    if (-not (Get-LocalUser -Name $u.Name -ErrorAction SilentlyContinue)) {
        $pwd = Read-Host "Mot de passe temporaire pour $($u.Name)" -AsSecureString
        New-LocalUser -Name $u.Name -FullName $u.FullName -Description $u.Description -Password $pwd
    }
    Add-LocalGroupMember -Group $u.Group -Member $u.Name -ErrorAction SilentlyContinue
    if ($u.Admin) {
        Add-LocalGroupMember -Group 'Administrateurs' -Member $u.Name -ErrorAction SilentlyContinue
    }
}

# Force le binôme à changer son mot de passe à sa première ouverture de session.
cmd /c "net user $LoginBinome /logonpasswordchg:yes"

Get-LocalGroupMember l_informatique
Get-LocalGroupMember l_logistique
Get-LocalGroupMember Administrateurs
```

Référence du document : 1DQmDdZ6fbFh2K48CmmVutqz2xcGlSc0I · SHA-256 57d57de50d4a4999…

## Correction · 03_preparer_profils.ps1 · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### 03_preparer_profils.ps1

```
# Exécuter en administrateur avant la première connexion des utilisateurs.
$defaultDesktop = 'C:\Users\Default\Desktop\Procédures'
New-Item -ItemType Directory -Path $defaultDesktop -Force | Out-Null
@'
Règlement intérieur
- Respecter la politique de sécurité.
- Ne jamais communiquer son mot de passe.
- Stocker les documents professionnels dans les emplacements autorisés.
'@ | Set-Content -Path (Join-Path $defaultDesktop 'Règlement intérieur.txt') -Encoding UTF8

# Met aussi à jour les profils déjà créés.
Get-ChildItem 'C:\Users' -Directory | Where-Object {
    $_.Name -notin @('Default','Default User','Public','All Users')
} | ForEach-Object {
    $dest = Join-Path $_.FullName 'Desktop\Procédures'
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
    Copy-Item (Join-Path $defaultDesktop 'Règlement intérieur.txt') $dest -Force
}
```

Référence du document : 1BVQt-uZBsOa3bViMtk-RUhClFIdVRXu4 · SHA-256 1774d88bee02b34b…

## Correction · 04_partage_support_info.ps1 · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### 04_partage_support_info.ps1

```
# Exécuter en administrateur sur votre W10 (172.16.0.189).
$Path = 'D:\Support_Info'
$ShareName = 'Support_Info$'
$ItGroup = 'l_informatique'

New-Item -ItemType Directory -Path $Path -Force | Out-Null

# Permissions NTFS : héritage supprimé, système/administrateurs en contrôle total,
# service informatique en modification.
icacls $Path /inheritance:r | Out-Null
icacls $Path /grant:r '*S-1-5-18:(OI)(CI)F' '*S-1-5-32-544:(OI)(CI)F' "${ItGroup}:(OI)(CI)M" | Out-Null

if (Get-SmbShare -Name $ShareName -ErrorAction SilentlyContinue) {
    Remove-SmbShare -Name $ShareName -Force
}
New-SmbShare -Name $ShareName -Path $Path -ChangeAccess $ItGroup -FullAccess 'Administrateurs'

Get-SmbShare -Name $ShareName
cmd /c 'net share'
```

Référence du document : 10gxFdpKTfN_n2Ktbiq7gjw4new-6mc2b · SHA-256 fd16c2d91f9c69bc…

## Correction · 05_deplacer_spool.ps1 · document texte

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

Correction originale : à consulter après avoir tenté l’exercice.

Document texte ou script fourni dans le Drive, retranscrit sans exécution. Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». Les adresses personnelles utilisent le domaine example.com. Le rôle des champs et la structure des exemples sont conservés ; aucun fichier source du Drive n’a été modifié.

### 05_deplacer_spool.ps1

```
# Déplace le dossier de spool vers D:\Spool. Exécuter en administrateur.
$Spool = 'D:\Spool'
Stop-Service Spooler -Force
New-Item -ItemType Directory -Path $Spool -Force | Out-Null
icacls $Spool /inheritance:r | Out-Null
icacls $Spool /grant:r '*S-1-5-18:(OI)(CI)F' '*S-1-5-32-544:(OI)(CI)F' | Out-Null
Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name 'DefaultSpoolDirectory' -Value $Spool
Start-Service Spooler
Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name 'DefaultSpoolDirectory'
```

Référence du document : 1IKzpUfbF3WZHAYfa2pgK3Zrb3P-VbnN5 · SHA-256 a3665ef4fda1f366…

## Fiche de synthèse

Les lignes reprennent les titres du cours et la première phrase de chaque partie.

| Partie | Repère du cours |
| --- | --- |
| Correction · MSP_Systemes_clients_solution_172.16.0.128-26 · 27 pages transcrites | Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». |
| Support · NP_MDP_NoteTech · 11 pages transcrites | Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». |
| Énoncé · Enoncé MSP - Systèmes clients · 14 pages transcrites | Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». |
| Correction · Modèle_Solution_MSP · 143 pages transcrites | Les valeurs d’accès présentes dans les documents sont neutralisées par « fourni par le formateur ». |
| Énoncé · Résultats_séminaire.xlsx · document texte | Classeur du Drive retranscrit en tableaux HTML et formules littérales. |
| Correction · création_groupes.txt · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · création_utilisateur.txt · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · groupes.csv · document texte | Données CSV du Drive retranscrites en tableau ; le séparateur et les noms de colonnes restent ceux du document. |
| Correction · Résultats_séminaire_corrigé.xlsx · document texte | Classeur du Drive retranscrit en tableaux HTML et formules littérales. |
| Correction · script_groupes.ps1 · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · script_utilisateurs.ps1 · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · Tableau_récap.xlsx · document texte | Classeur du Drive retranscrit en tableaux HTML et formules littérales. |
| Correction · utilisateurs.csv · document texte | Données CSV du Drive retranscrites en tableau ; le séparateur et les noms de colonnes restent ceux du document. |
| Correction · MSP_Systemes_clients_solution_172.16.0.128-26.docx · document texte | Version Word de la solution adaptée, retranscrite intégralement depuis son texte et ses tableaux. |
| Correction · README.txt · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · Resultats_seminaire_solution_complete.xlsx · document texte | Classeur du Drive retranscrit en tableaux HTML et formules littérales. |
| Correction · 01_utilisateurs_groupes.sh · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · 02_sauvegarde_quotidienne.sh · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · 03_lvm_opt.sh · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · 01_direction_comptabilite.cmd · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · 02_informatique_logistique.ps1 · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · 03_preparer_profils.ps1 · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · 04_partage_support_info.ps1 · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |
| Correction · 05_deplacer_spool.ps1 · document texte | Document texte ou script fourni dans le Drive, retranscrit sans exécution. |

## Classeur Résultats séminaire

Les trois classeurs ne sont pas publiés. Les noms sont ceux du scénario. Le classeur brut laisse vides le total, la moyenne et l’appréciation. Les deux classeurs solution utilisent les mêmes formules : total `=SUM` des quatre notes, moyenne `=AVERAGE` des quatre notes, appréciation selon moyenne et assiduité (toutes deux supérieures à 10 : Bien ; moyenne au plus 10 et assiduité au moins 10 : En Progrès ; moyenne au moins 10 et assiduité inférieure à 10 : Trop d'absences ; toutes deux inférieures à 10 : En danger!).

| Élève | Conduite | EPS | Tir | Physique Chimie | Assiduité |
| --- | ---: | ---: | ---: | ---: | ---: |
| Rick Grimes | 11 | 20 | 6 | 9,5 | 9 |
| Daryl Dixon | 11 | 9 | 15 | 17 | 8 |
| Gabriel Stokes | 10 | 8 | 11 | 5 | 12 |
| Maggie Greene | 18 | 14 | 16 | 13 | 12 |
| Eugene Porter | 15 | 15 | 11 | 15 | 15 |
| Carol Peletier | 9 | 9 | 9 | 9 | 9 |
| Rosita Espinosa | 12 | 13 | 17 | 6 | 15 |
| Morgan Jones | 11 | 16 | 12 | 11 | 15 |
