# Module 09 — Les pilotes et les imprimantes

**Séquence :** Systèmes clients Microsoft  
**Fil conducteur :** comprendre le rôle du pilote, identifier un périphérique puis configurer et tester une ressource d’impression.

## Objectifs

- Définir un pilote et choisir les outils de consultation adaptés.
- Distinguer architecture, signature, fichiers du pilote et magasin Windows.
- Séparer périphérique d’impression, imprimante logique, file et partage.
- Exporter les informations des pilotes, régler Print to PDF et installer l’imprimante partagée du TP.

## 1. Matériel, détection et pilote

Un pilote permet au système d’exploiter un composant matériel ou logiciel. Le support distingue le matériel **Plug and Play**, pris en charge « à chaud », du matériel non Plug and Play pouvant nécessiter un redémarrage. Détection et installation peuvent être automatiques ou manuelles.

Le **Gestionnaire de périphériques**, `devmgmt.msc`, montre les composants pris en charge ou non. Il permet de mettre à jour, désactiver ou désinstaller un périphérique, ainsi que de restaurer un pilote et d’examiner ses informations détaillées. Une installation visible et un matériel correctement exploité sont deux vérifications complémentaires.

Les pilotes dépendent de l’architecture, **32 ou 64 bits**. Le support privilégie les pilotes signés et les relie à la stabilité du système ; il précise leur obligation pour les éditions 64 bits dans le contexte présenté.

## 2. Fichiers et magasin de pilotes

| Fichier | Rôle présenté dans le cours |
|---|---|
| `*.inf` | Définition du pilote au format texte, utilisée pour sa prise en charge. |
| `*.sys` | Pilote lui-même. |
| `*.cat` | Catalogue/certificat associé à la signature, fourni par Microsoft ou un tiers de confiance selon le support. |
| `*.exe`, `*.dll`, `*.xml`… | Fichiers complémentaires selon les besoins. |

L’installation peut commencer depuis le fichier INF, un programme `setup.exe` ou un assistant de mise à jour. Une fois installé, le pilote est mémorisé pour permettre sa réinstallation automatique. Le support cite `C:\Windows\inf`, avec les noms `oemXX.inf` pour les pilotes tiers installés, et d’autres fichiers sous `C:\Windows\System32` ou `C:\Windows\SysWOW64`.

Le **DriverStore**, `C:\Windows\System32\DriverStore`, est le magasin de pilotes de Windows. Le cours présente `pnputil` pour sa gestion et `msinfo32` pour le détail matériel.

```bat
driverquery
driverquery /si
pnputil /enum-drivers
pnputil /add-driver pilote.inf
```

Le nom `pilote.inf` représente le paquet du scénario. Lister les pilotes tiers et ajouter un paquet au magasin sont deux opérations différentes. Les exports du TP ci-dessous restent des opérations de consultation.

## 3. Le vocabulaire de l’impression

| Terme | Sens dans le support |
|---|---|
| Périphérique d’impression | Matériel qui produit la feuille. |
| Imprimante | Ressource logicielle comprenant pilote, configuration, file et port. |
| File d’attente / spouleur | Gestion des travaux, conversion vers un langage interprétable et envoi au port d’impression. |
| Imprimante locale | Périphérique relié directement au poste par un port local. |
| Imprimante partagée | Ressource locale publiée par l’OS d’un poste ; dépend de la disponibilité de cet hôte. |
| Imprimante réseau | Équipement autonome doté de sa propre interface réseau, de son OS et souvent d’une configuration web. |

**Illustration IA / externe au cours — chemin logique d’un travail.**

```mermaid
flowchart LR
    A["Application et document"] --> B["Imprimante logique et pilote"]
    B --> C["Spouleur et file d’attente"]
    C --> D["Port local ou réseau"]
    D --> E["Périphérique d’impression"]
```

Une imprimante locale peut employer un pilote générique déjà présent dans le magasin ou un pilote signé du constructeur offrant davantage de fonctions. Ses propriétés donnent accès à la file d’attente, aux informations générales et aux options avancées : horaires de disponibilité et priorité, notamment.

## 4. Permissions, partage, serveur et pool

Le support montre l’onglet **Sécurité** avec les actions **Imprimer**, **Gérer cette imprimante** et **Gestion des documents**. Le partage rend une imprimante locale accessible par `\\serveur\imprimante` tant que l’hôte est disponible. Les utilisateurs accèdent au serveur depuis l’Explorateur puis choisissent **Connecter**.

!!! info "Clarification externe — permissions de l’imprimante"
    Le support emploie l’expression « sécurité NTFS de l’imprimante ». L’objet imprimante possède en réalité ses propres droits d’utilisation et d’administration ; il ne s’agit pas de convertir l’imprimante en fichier NTFS. [Droits d’accès aux imprimantes, Microsoft](https://learn.microsoft.com/en-us/windows/win32/printdocs/printer-defaults).

Le rôle **Serveur d’impression** centralise la publication et la gestion de plusieurs imprimantes. Le spouleur organise les travaux et les envoie aux périphériques ; le support indique que son emplacement peut être changé par un réglage du registre, sans fournir ici de procédure complète à appliquer.

Un **pool d’impression** relie une imprimante logique à plusieurs périphériques, pour distribuer les travaux au prochain disponible et réduire l’attente. Il faut distinguer cette distribution d’un simple partage d’une seule imprimante.

## 5. TP guidé — environ 1 heure

### A. Exporter les informations des pilotes sur Win10-XX

La correction utilise deux commandes distinctes : l’une pour les détails, l’autre pour la signature.

```bat
driverquery /v /fo CSV > pilotes_details.csv
driverquery /si /fo CSV > pilotes_signatures.csv
```

`/fo CSV` choisit le format et `>` écrit le résultat dans un fichier. Ouvrir le CSV avec Excel ; si tout apparaît en colonne A, sélectionner cette colonne, choisir **Données → Convertir → Délimité**, puis le séparateur **Virgule**. Vérifier que les propriétés sont réparties en colonnes.

!!! note "Écart de noms conservé"
    L’énoncé nomme `Pilotes_detail.csv` et `Pilotes_signature.csv`, alors que la correction utilise les pluriels `pilotes_details.csv` et `pilotes_signatures.csv`. Les commandes ci-dessus suivent la correction. L’objectif est le contenu des deux exports, avec des noms identifiés de façon cohérente.

!!! tip "Complément externe — options de driverquery"
    `/v` produit un affichage détaillé et `/si` des informations sur les pilotes signés ; ne pas les cumuler dans cet exercice. [Référence Microsoft driverquery](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/driverquery).

### B. Identifier la carte graphique

1. Ouvrir `devmgmt.msc` et développer **Cartes graphiques**.
2. Ouvrir les propriétés de **VMware SVGA 3D**, onglet **Détails**.
3. Consulter la propriété d’identification montrée par la correction, **ID compatibles**.
4. Relever **VENDOR_ID `15AD`** et **DEVICE_ID `0405`** dans cet exemple VMware.

La correction cite `www.pcilookup.com` comme outil de recherche de ces identifiants ; il reste une référence historique du support, et non une validation de la machine actuelle. Les valeurs identifient le composant de l’exemple, pas tous les matériels possibles.

### C. Examiner les imprimantes puis régler Print to PDF

Dans **Panneau de configuration → Matériel et audio → Périphériques et imprimantes**, relever les imprimantes présentes ; les retrouver dans le nœud **Files d’attente à l’impression** du Gestionnaire de périphériques.

!!! note "Différence entre l’énoncé et la correction"
    L’énoncé demande « les 4 imprimantes » par défaut. La correction et sa capture en montrent trois : **Fax**, **Microsoft Print to PDF** et **Microsoft XPS Document Writer**. Relever l’état réel de la VM ; une quatrième imprimante ne doit pas être inventée pour compléter le chiffre.

Pour Print to PDF :

1. Choisir **Définir comme imprimante par défaut**.
2. Ouvrir **Propriétés de l’imprimante → Préférences**.
3. Choisir l’orientation **Paysage** puis valider.
4. Imprimer une page de test.
5. Comme il s’agit d’une imprimante virtuelle, choisir un nom et un emplacement pour le document produit, puis vérifier son orientation.

### D. Connecter l’imprimante partagée de Discovery

Depuis l’Explorateur de Win10-XX, ouvrir le chemin de l’imprimante **`HP_LaserJet_Accueil_RDC_Bât2`** publié par Discovery :

```text
\\ADRESSE_IP_DISCOVERY\HP_LaserJet_Accueil_RDC_Bât2
```

Remplacer le marqueur par l’adresse de la VM. Utiliser le compte demandé par le scénario lorsqu’une authentification est présentée, choisir **Connecter**, attendre l’installation du pilote puis vérifier la nouvelle imprimante dans le Panneau de configuration et dans la console adaptée. La correction abrège ponctuellement le nom en `HP_LaserJet_Accueil_RDC_Bât` : le nom réellement publié par Discovery fait foi pour le test.

### E. Lire la configuration sur Discovery

```powershell
Get-Printer -Name "HP LaserJet"
Get-Printer -Name "HP LaserJet" | Select-Object Name,Shared,ShareName,PortName,Location,Priority
```

| Propriété | Contrôle effectué |
|---|---|
| `Name` | Nom local de la ressource imprimante. |
| `Shared` | Publication en partage ou non. |
| `ShareName` | Nom utilisé dans le chemin réseau. |
| `PortName` | Port associé à la ressource. |
| `Location` | Emplacement renseigné. |
| `Priority` | Priorité de la ressource. |

Ne pas confondre **Name** et **ShareName** : le nom affiché localement peut différer du nom de publication. Vérifier le partage et l’installation côté client avant de conclure que l’accès fonctionne.

## 6. Mini-quiz — 5 questions

1. Quel fichier définit un paquet de pilote au format texte ?
2. Quelle console donne les détails d’un périphérique ?
3. Pourquoi utiliser deux commandes pour les exports `driverquery` ?
4. Quelle différence entre imprimante partagée et imprimante réseau dans le vocabulaire du cours ?
5. Quelle propriété PowerShell donne le nom publié en partage ?

??? success "Réponses commentées"
    1. Le fichier `.inf`.
    2. Le Gestionnaire de périphériques, `devmgmt.msc`.
    3. Le TP distingue le détail des pilotes de leurs informations de signature.
    4. La première dépend de l’hôte qui la partage ; la seconde est un équipement autonome connecté au réseau.
    5. `ShareName`, à distinguer de `Name`.

## Pour pratiquer et réviser

- [TP — présentation](../../tp/systemes-clients/module-09/index.md)
- [Énoncé complet](../../tp/systemes-clients/module-09/enonces.md) et [correction](../../tp/systemes-clients/module-09/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-09-les-pilotes-et-les-imprimantes.md)
- [Kahoot existant](../../kahoot/02-systemes-clients-microsoft-09-les-pilotes-et-les-imprimantes.md)
- [Retour à la formation](index.md)

## Sources et choix éditoriaux

Support M09, énoncé et correction lus en lecture seule dans le Drive. Les divergences de nombres, de fichiers et de noms d’imprimante sont signalées ; les versions originales ne sont pas harmonisées artificiellement. Les tableaux, le schéma et le mini-quiz apportent une organisation pédagogique, et les clarifications Microsoft sont externes au support. Les captures utiles et les transcriptions figurent dans **Cours Original**.
