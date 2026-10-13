# Correction — Module 07 — Gestion du réseau

## Lire cette correction

Cette correction décrit une exécution dans le laboratoire source. Les adresses, routes, réponses DNS, noms d’hôtes et nombres de sauts observés peuvent varier selon l’environnement et la date. Ils sont donc indiqués comme résultats historiques du scénario, et non comme des valeurs permanentes à reproduire.

## 1. État initial du laboratoire

La correction source commence par les contrôles suivants sur la VM `Win10-XX` :

1. vérifier le report de 35 jours depuis les options avancées de Windows Update ;
2. vérifier dans VMware Workstation que l’adaptateur réseau est configuré sur **Bridged** ;
3. ouvrir `cmd.exe` et utiliser `ipconfig` pour relever l’adresse reçue et déterminer le réseau associé.

Dans l’exemple de la correction, l’adresse `172.28.2.5` avec son masque conduit au réseau `172.28.0.0`. Cette valeur est un exemple historique du laboratoire.

## 2. Configuration IPv4

Depuis l’environnement de travail, la correction utilise :

```text
ipconfig /all
```

Cette commande sert à relever la partie réseau, la passerelle par défaut et le DNS préféré nécessaires au scénario.

Sur `Win10-XX`, la méthode GUI décrite est :

1. lancer `ncpa.cpl` ;
2. ouvrir les propriétés de la carte `Ethernet0` ;
3. sélectionner **Protocole Internet version 4 (TCP/IPv4)** puis ses propriétés ;
4. choisir l’utilisation d’une adresse IP et d’un serveur DNS renseignés manuellement ;
5. saisir les valeurs déduites du scénario de laboratoire.

L’exemple source utilise l’adresse `172.28.18.7`, le masque `255.255.0.0`, la passerelle `172.28.0.254` et le DNS `172.28.0.4`. Il illustre le calcul de la partie hôte à partir des lettres demandées par l’énoncé ; ce ne sont pas des paramètres généraux.

## 3. Connectivité et chemin réseau

La correction teste d’abord la passerelle :

```text
ping 172.28.0.254
```

Une réponse ICMP indique, dans le scénario, que `Win10-XX` communique avec sa passerelle par défaut.

Pour retrouver l’adresse de la VM Discovery, utilisez les informations de laboratoire fournies par le formateur puis exécutez `ipconfig` sur la VM concernée. Ne recopiez ni identifiant ni donnée d’accès dans un compte rendu public.

Si Discovery reçoit une adresse APIPA, la correction explique qu’elle ne dispose pas d’informations provenant du DHCP. Le scénario demande alors de vérifier son raccordement au switch Bridged et d’attendre l’obtention des paramètres adaptés.

Les contrôles suivants sont ensuite demandés :

```text
ping <adresse IP de la VM Discovery>
ping www.facebook.com
```

Le premier test porte sur la communication locale. Le second illustre la communication vers un autre réseau via la passerelle par défaut. Le résultat réel dépend de l’environnement utilisé.

`tracert` permet ensuite d’observer la différence entre une destination directement joignable et une destination atteinte via des routeurs. Le nombre de sauts et les délais de réponse sont des observations variables. Un délai dépassé dans la sortie source ne suffit pas, à lui seul, à conclure que le routage est interrompu.

## 4. Résolution DNS

La correction associe `nslookup` à l’interrogation du service DNS : connaître le nom d’un hôte permet d’obtenir l’adresse retournée par le serveur DNS configuré.

Pour les trois noms de l’énoncé, relevez dans votre environnement :

- le serveur DNS interrogé ;
- la présence ou non d’une réponse ;
- les adresses retournées au moment de l’essai.

Les adresses IPv4 et IPv6, l’alias Facebook et le nom du serveur DNS montrés dans le document source sont des résultats historiques du laboratoire. Ils ne doivent pas être mémorisés comme des résultats actuels attendus.

## 5. Pare-feu Windows

La correction utilise l’interface **Pare-feu Windows Defender** pour vérifier l’état du pare-feu selon les profils réseau. Dans son scénario, la VM se trouve sur un réseau privé ; l’emplacement de domaine n’est pas indiqué pour une VM non jointe à un domaine.

Pour autoriser le Bureau à distance selon l’énoncé :

1. ouvrir **Autoriser une application via le Pare-feu Windows** ;
2. cocher **Bureau à distance** pour le profil **Privé** uniquement.

Pour le test ICMPv4 :

1. ouvrir **Pare-feu Windows Defender avec fonctions avancées de sécurité** ;
2. ouvrir les règles de trafic entrant ;
3. activer la règle **Partage de fichiers et d’imprimantes (Demande d’écho — Trafic entrant ICMPv4)** dont le profil correspond au scénario ;
4. lancer ensuite le `ping` demandé depuis la VM Discovery vers `Win10-XX`.

Le résultat attendu stable est que la règle activée corresponde au bon profil et que le test soit exécuté entre les deux postes prévus. La réponse réseau elle-même reste dépendante du laboratoire.
