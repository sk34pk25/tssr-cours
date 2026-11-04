# Module 07 — La gestion du réseau et du pare-feu

**Séquence :** Systèmes clients Microsoft  
**Fil conducteur :** configurer une interface, situer le réseau, puis autoriser les seuls échanges attendus.

## Objectifs

- Réutiliser les bases d’adressage, de passerelle et de routage.
- Configurer une carte réseau et identifier son emplacement réseau.
- Distinguer adressage statique, DHCP et repli APIPA.
- Diagnostiquer connectivité, route et résolution de noms avec les outils du cours.
- Manipuler les règles et profils du pare-feu Windows dans le scénario du TP.

## 1. Rappel : communiquer dans son réseau ou au-delà

Le schéma du support relie deux postes par deux routeurs. Les machines conservent leurs adresses IP de bout en bout dans cet exemple ; pour sortir du réseau local, elles utilisent leur passerelle.

| Équipement représenté | Adresse IP | Adresse MAC | Passerelle du poste |
|---|---|---|---|
| Poste A | `192.168.5.1/24` | `00-01-02-03-04-05` | `192.168.5.254` |
| Routeur 1, liaison entre routeurs | `203.0.113.1/30` | `50-51-52-53-54-55` | — |
| Routeur 2, liaison entre routeurs | `203.0.113.2/30` | `1A-2B-3C-4D-5E-6F` | — |
| Poste B | `192.168.10.1/24` | `AA-BB-CC-DD-EE-FF` | `192.168.10.254` |

**Illustration IA / externe au cours — même organisation logique, sans reproduction de diapositive.**

```mermaid
flowchart LR
    A["Poste A — 192.168.5.1/24"] --> R1["Passerelle 192.168.5.254"]
    R1 --> L["Liaison 203.0.113.0/30"]
    L --> R2["Passerelle 192.168.10.254"]
    R2 --> B["Poste B — 192.168.10.1/24"]
```

## 2. Retrouver les réglages Windows

Le **Centre Réseau et partage** est accessible depuis l’icône réseau de notification, via **Paramètres réseau et Internet**, ou par le Panneau de configuration, **Réseau et Internet**. Il indique la connectivité du poste, les connexions détectées et les profils réseau associés. Il donne accès aux paramètres de découverte et de partage, aux cartes et aux nouvelles connexions. `ncpa.cpl` ouvre directement **Connexions réseau**.

Une carte est associée à un **emplacement réseau**, qui détermine notamment le comportement du pare-feu. Le support distingue le réseau privé d’un poste autonome, le réseau de domaine lorsque le poste y est joint, et le public, notamment quand l’identification du réseau ne permet pas de le considérer comme privé ou domaine.

!!! note "Lire le profil réellement actif"
    Le support décrit plusieurs situations de choix d’emplacement. Dans le TP, observer le profil indiqué par Windows avant de choisir une règle ; ne pas déduire le profil du seul fait que l’ordinateur est dans une salle de formation.

## 3. Les paramètres indispensables

| Paramètre | Question pratique |
|---|---|
| Adresse IP et masque | Quelle est l’identité de l’interface et quel est son réseau ? |
| Passerelle | Quel routeur permet de joindre les autres réseaux ? |
| DNS préféré et auxiliaire | À quel service demander la résolution des noms ? |
| Mode d’attribution | Configuration manuelle ou automatique ? |

L’adressage **statique** est saisi manuellement. L’adressage **DHCP** est fourni par un serveur. Si Windows ne peut joindre le DHCP alors que la configuration automatique est demandée, **APIPA** permet un adressage de repli sur `169.254.0.0/16`, destiné à la communication locale. Une adresse APIPA n’est pas la preuve d’une réponse du DHCP.

La capture générale du cours et le TP utilisent des réseaux différents. Le TP de correction donne l’exemple `172.28.0.0/16`, avec une passerelle `172.28.0.254` et un DNS `172.28.0.4`. Ces valeurs appartiennent à son environnement ; relever celles du laboratoire au lieu de les copier sur une autre infrastructure.

## 4. Diagnostiquer dans un ordre utile

| Outil du support | Rôle |
|---|---|
| État de connexion, Connexions réseau, assistant Résoudre les problèmes | Premier constat graphique et contrôles orientés utilisateur. |
| `ipconfig` | Afficher la configuration et interagir avec la configuration DNS/DHCP. |
| `ping` | Tester une réponse ICMP, en tenant compte du pare-feu. |
| `tracert` | Observer les sauts du trajet vers une destination. |
| `nslookup` | Interroger le DNS et distinguer serveur interrogé et hôte recherché. |

Ne pas confondre « le nom ne se résout pas », « la destination ne répond pas au ping » et « aucune connexion réseau n’est possible ». Ces observations orientent vers des contrôles différents. Le TP compare une passerelle et Discovery sur le réseau local avec une destination Internet pour rendre la distinction visible.

## 5. Pare-feu : pourquoi, quels profils et quels outils ?

Le pare-feu délimite les flux autorisés en entrée et en sortie, protège contre les accès non autorisés et participe à la stratégie de sécurité de l’entreprise. Le support le décrit activé par défaut, bloquant certains flux entrants tout en autorisant les sorties par défaut. Les règles prédéfinies peuvent être activées selon le besoin ; leur application dépend des profils réseau. La configuration peut être administrée de façon centralisée ou exportée.

| Niveau présenté | Utilisation |
|---|---|
| Utilisateur | Vérifier l’état et activer/désactiver le pare-feu. |
| Programme | **Autoriser une application via le pare-feu Windows**, ensemble de règles regroupées par application. |
| Avancé | **Pare-feu Windows Defender avec fonctions avancées de sécurité**, paramétrage détaillé et vue des règles actives. |

`firewall.cpl` ouvre le composant du Panneau de configuration. Pour autoriser un usage, travailler sur la règle et le profil concernés plutôt que désactiver globalement le pare-feu.

## 6. TP guidé — environ 1 heure

### A. Préparer le laboratoire et relever la configuration

Dans le scénario, vérifier d’abord le report de **35 jours** de Windows Update, puis connecter la carte de Win10-XX au switch **Bridged** dans les paramètres VMware Workstation. Il s’agit du réglage demandé par ce laboratoire, pas d’une politique générale de maintenance.

```bat
ipconfig
ipconfig /all
```

Relever l’adresse actuelle, le masque, le réseau, la passerelle et le DNS depuis l’environnement de formation. La correction observe `172.28.2.5` avec réseau `172.28.0.0`, obtenu par le ET binaire entre adresse et masque.

### B. Construire l’adresse statique demandée

Dans **Connexions réseau → Ethernet0 → Propriétés → Protocole Internet version 4 → Propriétés**, choisir les valeurs du TP.

| Champ | Règle de l’énoncé |
|---|---|
| Partie réseau | Même partie réseau que l’environnement de formation. |
| Troisième octet | Rang alphabétique de la première lettre du prénom. |
| Quatrième octet | Rang alphabétique de la première lettre du nom. |
| Masque | `255.255.0.0` dans ce scénario. |
| Passerelle et DNS préféré | Ceux relevés sur l’environnement Campus. |

L’exemple Pierre-Louis Le Guervelec donne `16.12` pour la partie hôte. La correction illustre un autre nom avec `172.28.18.7` ; ne pas mélanger ces deux exemples. Vérifier que la manipulation a lieu sur **Win10-XX**.

### C. Comparer les chemins de communication

```bat
ping 172.28.0.254
ping ADRESSE_IP_DISCOVERY
ping www.facebook.com
tracert 172.28.0.254
tracert ADRESSE_IP_DISCOVERY
tracert www.facebook.com
```

Remplacer `ADRESSE_IP_DISCOVERY` par la valeur relevée. Dans la correction, la passerelle et Discovery sont joints directement ; la destination Internet nécessite des routeurs. Si Discovery possède une adresse APIPA, vérifier sa connexion au switch Bridged et sa communication DHCP. Une ligne `Délai de la demande dépassé` dans `tracert` ne suffit pas à conclure à l’échec de la destination : observer aussi la suite des sauts et le résultat final.

### D. Lire une réponse DNS

```bat
nslookup www.hadopi.fr
nslookup www.amendes.gouv.fr
nslookup www.facebook.com
```

Le document montre un DNS Campus à `172.28.0.4`, des adresses de réponse et l’alias `www.facebook.com` associé à `star-mini.c10r.facebook.com`. Les adresses de ces services sont des **résultats historiques de la correction**. Le but est d’identifier le serveur DNS interrogé, la réponse IPv4/IPv6 et les alias, sans imposer que les valeurs Internet soient encore identiques.

### E. Autoriser les usages précis

1. Vérifier l’état du pare-feu pour chaque profil ; la correction place la VM en privé, hors domaine.
2. Dans les applications autorisées, autoriser **Bureau à distance** pour **Privé uniquement**, comme demandé.
3. Dans les règles de trafic entrant avancées, trouver **Partage de fichiers et d’imprimantes (Demande d’écho – Trafic entrant ICMPv4)**.
4. Activer la règle correspondant aux profils visés par le scénario, puis tester le ping de Discovery vers Win10-XX.
5. Contrôler le nom de la règle, sa direction et ses profils ; plusieurs lignes portent un intitulé semblable.

## 7. Mini-quiz — 5 questions

1. Quelle commande affiche tous les paramètres IP utiles au TP ?
2. Que suggère une adresse APIPA sur une interface en configuration automatique ?
3. Quel outil compare les sauts vers une destination ?
4. Pourquoi le profil d’une règle de pare-feu doit-il être vérifié ?
5. Pourquoi les adresses Internet de la correction ne sont-elles pas des réponses fixes à apprendre ?

??? success "Réponses commentées"
    1. `ipconfig /all`.
    2. Windows n’a pas reçu la configuration DHCP attendue et utilise le repli local.
    3. `tracert`.
    4. Une règle peut être active sans s’appliquer au profil actuellement utilisé.
    5. Elles montrent un état du DNS au moment du support ; le raisonnement compte davantage que ces valeurs.

## Pour pratiquer et réviser

- [TP — présentation](../../tp/systemes-clients/module-07/index.md)
- [Énoncé complet](../../tp/systemes-clients/module-07/enonces.md) et [correction](../../tp/systemes-clients/module-07/corrections.md)
- [Fiche de révision](../../revision/systemes-clients/module-07-la-gestion-du-reseau-et-du-pare-feu.md)
- [Kahoot existant](../../kahoot/02-systemes-clients-microsoft-07-la-gestion-du-reseau-et-du-pare-feu.md)
- [Retour à la formation](index.md)

## Sources et choix éditoriaux

Support M07, énoncé et correction du Drive consultés en lecture seule. Le schéma du PDF comportant des couches d’animation superposées, **Cours Original** reprend son état visible et les valeurs lisibles, sans publier les fragments de texte dupliqués de l’extraction. Les tableaux, étapes, schéma et mini-quiz de cette page sont la structuration pédagogique ; les exemples réseau restent explicitement liés à leur contexte.
