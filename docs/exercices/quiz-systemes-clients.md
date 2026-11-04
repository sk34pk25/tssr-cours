# Exercices — Systèmes clients Microsoft

Vingt situations pour vérifier les notions des 13 modules et du module additionnel Workstation. Répondre avant de déplier chaque correction, puis reprendre le module ou le TP si la réponse reste incertaine.

Ces exercices sont des reformulations pédagogiques des supports et ateliers du cours. Les quiz Kahoot liés aux modules restent accessibles séparément et ne sont pas remplacés par cette page.

## 01. M01 — Du clic au matériel

Une application demande de lire un fichier : quel est le rôle de l’OS entre cette demande et le disque ?

??? success "Correction expliquée"
    L’OS coordonne l’accès à la ressource, applique les droits, s’appuie sur le système de fichiers et utilise le pilote du périphérique. Il arbitre aussi les accès des autres applications.

## 02. M01 — Édition et licence

Une jonction à un domaine est demandée. Une édition Famille répond-elle au besoin étudié ?

??? success "Correction expliquée"
    Non. Le support rattache la jonction au domaine à une édition professionnelle adaptée. L’édition définit les fonctionnalités ; le type de licence concerne les conditions d’acquisition et d’activation.

## 03. M02 — Images d’installation

Le poste doit démarrer sur l’installateur puis recevoir Windows. Associez boot.wim et install.wim à ces deux opérations.

??? success "Correction expliquée"
    `boot.wim` fournit l’environnement d’installation ; `install.wim` contient l’image Windows à appliquer. Après copie de l’image, la configuration initiale et ses contrôles restent à effectuer.

## 04. M02 — Valider une installation

La VM atteint le bureau. Quels éléments du scénario faut-il encore vérifier ?

??? success "Correction expliquée"
    Ressources de VM, édition et architecture, nom du poste, compte créé, paramètres réseau, captures et instantanés demandés. Le bureau seul ne prouve pas que toutes les consignes ont été respectées.

## 05. M03 — Trouver une commande

Vous connaissez le besoin mais pas la cmdlet. Quelle démarche suivre avant d’écrire une longue commande ?

??? success "Correction expliquée"
    Utiliser `Get-Command`, consulter `Get-Help` et ses exemples, tester la commande simple, examiner les propriétés avec `Get-Member`, puis filtrer et sélectionner ce que demande la consigne.

## 06. M03 — Prouver un export

Une commande redirige une liste de membres dans un fichier. Quelle vérification rend le résultat exploitable ?

??? success "Correction expliquée"
    Relire le fichier : chemin, nom, présence des membres et propriétés attendues. Une commande sans message d’erreur ne garantit ni le bon emplacement ni le bon contenu.

## 07. M04 — Choisir le bon niveau

Classez GPT, partition, volume et NTFS dans la chaîne de préparation d’un disque.

??? success "Correction expliquée"
    Le disque reçoit une table de partitions (GPT dans ce cas), des partitions ou volumes sont créés, puis formatés avec un système de fichiers tel que NTFS. Le TP distingue ce chemin de l’alternative MBR.

## 08. M04 — Avant de formater

Deux disques de même taille sont présents dans la VM. Peut-on reprendre le numéro vu dans une capture ?

??? success "Correction expliquée"
    Non. Relire la liste actuelle des disques et volumes et recouper numéro, taille, type, lettre et libellé. Les numéros d’une capture décrivent son environnement, pas nécessairement celui de la VM actuelle.

## 09. M05 — Compte, profil et SID

Le nom d’un compte change. Quel identifiant Windows sert de référence aux autorisations ?

??? success "Correction expliquée"
    Le SID. Le nom affiché est un libellé ; le profil conserve l’environnement utilisateur et constitue un autre objet. Vérifier les appartenances aux groupes et le jeton de la session testée.

## 10. M06 — Autorisation par groupe

Alix n’a pas d’entrée nominative dans la DACL, mais appartient au groupe autorisé à modifier. L’absence de son nom suffit-elle pour conclure au refus ?

??? success "Correction expliquée"
    Non. Les SID des groupes du jeton sont aussi évalués. Il faut examiner les ACE applicables et les droits demandés, puis vérifier avec Accès effectif et un test réel.

## 11. M06 — Copie ou déplacement

Comparez un déplacement dans le même volume et une copie vers un autre volume, dans les opérations ordinaires du module.

??? success "Correction expliquée"
    Le déplacement sur le même volume conserve les autorisations d’origine. La copie vers un autre volume hérite des autorisations du dossier de destination. Des outils de copie avec options explicites peuvent avoir un autre comportement.

## 12. M07 — Lire un symptôme

Une VM reçoit une adresse 169.254.x.x alors que le scénario attend un bail DHCP. Quel service et quelle liaison vérifier ?

??? success "Correction expliquée"
    La liaison de sa carte virtuelle au bon réseau, puis l’accessibilité du service DHCP. APIPA décrit une auto-configuration locale ; ce n’est pas la preuve d’un bail DHCP valide.

## 13. M07 — Connectivité ou DNS

Une adresse IP distante répond, mais le nom associé échoue. Quelle vérification vient avant une modification globale du pare-feu ?

??? success "Correction expliquée"
    Contrôler les serveurs DNS configurés et interroger le nom avec `nslookup`. Le test par adresse et le test de résolution de noms ne vérifient pas la même chose.

## 14. M08 — Deux contrôles d’accès

Le partage n’accorde que Lecture, NTFS accorde Modification. Peut-on écrire via le chemin UNC ?

??? success "Correction expliquée"
    Non. L’action distante doit être autorisée aux deux niveaux. Les autorisations NTFS ne contournent pas la limite Lecture du partage.

## 15. M09 — Imprimer réellement

Une imprimante apparaît dans la liste. Qu’est-ce qui reste à vérifier avant de conclure que l’impression fonctionne ?

??? success "Correction expliquée"
    Pilote, port, état de la file et du spouleur, puis impression et contrôle d’une sortie réelle avec les paramètres demandés. Pour Microsoft Print to PDF dans le TP, ouvrir et vérifier le document produit.

## 16. M10 — Restauration et sauvegarde

Un utilisateur compte sur un point de restauration pour récupérer ses documents supprimés. Quelle distinction faut-il expliquer ?

??? success "Correction expliquée"
    Le point de restauration concerne l’état de composants système ; il ne remplace pas la sauvegarde des fichiers utilisateur. Choisir l’outil en fonction de ce qui doit être restauré.

## 17. M11 — Une borne exacte

Le volume doit avoir plus de 8 Go libres et une capacité qui ne dépasse pas 25 Go. Quels opérateurs conviennent ?

??? success "Correction expliquée"
    `$_.SizeRemaining -gt 8GB -and $_.Size -le 25GB`. L’opérateur `-le` inclut exactement 25 Go, contrairement à `-lt`. Sélectionner les propriétés ensuite et formater en dernier.

## 18. M12 — Préparer un master

Après Sysprep avec OOBE, généralisation et arrêt, faut-il redémarrer le master avant son Full Clone ?

??? success "Correction expliquée"
    Non. Le support demande de conserver l’état généralisé arrêté avant capture ou clonage. Le TP emploie un Full Clone VMware ; il ne réalise pas une capture WIM.

## 19. M13 — Cibler une stratégie

La restriction vise les non-administrateurs. Comment éviter un test trompeur réalisé avec un administrateur ?

??? success "Correction expliquée"
    Choisir dans MMC l’objet de stratégie local des non-administrateurs, configurer les paramètres demandés puis ouvrir une session avec le compte réellement ciblé. Vérifier séparément le comportement d’un administrateur.

## 20. Workstation — Choisir le réseau

Associez Bridge, NAT et Host-Only aux besoins de communication de la VM.

??? success "Correction expliquée"
    Bridge relie la VM au réseau physique ; NAT utilise la traduction de l’hôte pour les accès sortants ; Host-Only crée un réseau privé avec l’hôte. Le choix doit correspondre au scénario de laboratoire.

## Continuer la pratique

- [Cours et modules](../modules/02-systemes-clients-microsoft/index.md)
- [Les 16 travaux pratiques et leurs corrections](../tp/systemes-clients/index.md)
- [Fiches de révision](../revision/systemes-clients/index.md)
- [Commandes Windows et PowerShell](../commandes/windows-powershell.md)
