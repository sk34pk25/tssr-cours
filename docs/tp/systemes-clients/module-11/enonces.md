# Énoncés — Module 11 — Plus loin avec PowerShell

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## Enonc‚ du TP - PowerShell redirection, pipeline, filtrage, formatage

### Systèmes Clients Microsoft

Redirection, pipeline,

#### filtrage, formatage

#### TP du Module 11 — Plus loin avec PowerShell

Concernant ce TP, l'objectif sera de répondre aux consignes, notamment en traduisant les consignes du français en langage PowerShell. Pour arriver à vos fins, n'oubliez pas les bonnes pratiques. Utilisez get-command pour rechercher la bonne cmdlet. Utilisez get-help, pour savoir comment elle fonctionne. Si des propriétés spécifiques sont demandées dans les consignes, utiliser select après le pipeline. Si une ou des valeurs sont spécifiées dans les consignes, utilisez le pipe where et éventuellement la syntaxe spécifique du filtrage avancé pour rechercher deux valeurs ou plus. Utiliser les commandes de formatage si la consigne le précise. Dans tous les cas, prenez votre temps pour ce TP et, comme toujours avec PowerShell, investissez du temps de lecture du get-help.

#### Durée estimée

#### 2 heures

#### Énoncé

#### Lisez l'ensemble de cet atelier avant de vous lancer dans la pratique

#### Sur Win10-XX, recherchez les commandes adaptées pour les besoins

#### suivants

Affichez la date du jour, puis, à l'aide de la même commande, affichez le quantième

#### de l'année (le numéro du jour de l’année)

Affichez la liste des évènements ayant été enregistrés dans le journal security À l'aide de la commande précédente, affichez les évènements dont l'EventID est 4624 Affichez la liste précédente en ne montrant que l’ EventID, la date d’écriture de

#### l’évènement et le message

#### Affichez la liste des règles de pare-feu activées

Parmi ces règles de pare-feu activées, n'affichez que leurs noms, le profil réseau à laquelle elles appartiennent, leurs directions et si elles autorisent ou bloquent l'accès

#### Afficher des propriétés selon plusieurs critères

#### Sur Discovery, affichez la liste des volumes disques :

Affichez la liste des volumes qui possèdent plus de 8 Go d’espace libre : Affichez la liste des volumes dont la taille maximum ne dépasse pas 25 Go :

Affichez la liste des volumes qui possèdent plus de 8Go d'espace libre et dont la taille

#### maximale ne dépasse pas 25Go

Le résultat de la commande précédente ne devra afficher que le nom, la lettre de

#### lecteur et le type de système de fichier… le tout sous forme de liste

Affichez les noms et statuts des services qui sont actuellement démarrés et qui démarrent automatiquement au lancement du système d’exploitation. Affichez les membres (et leur SID) du groupe L_HA_Ventes.

Affichez le nom et le chemin des partages administratifs sous forme de liste Affichez la lettre de lecteur , le type de lecteur et l’état de santé des volumes dont

#### l’état est sain et de type CD-ROM :

Affichez le nom, le type, le nom du pilote et le nom du partage de l’imprimante HP LaserJet. Le résultat sera affiché sous la forme d'une liste.

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger.

Une fois le travail terminé : [consulter les corrections](corrections.md).
