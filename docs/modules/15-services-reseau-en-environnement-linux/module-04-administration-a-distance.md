# Module 04 — Administration à distance

[Travaux pratiques](../../tp/services-reseau-linux/module-04/index.md)

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 04 - Support de cours · 8 pages transcrites
2. Services réseau en environnement Linux
3. Protocole et clients
4. Transfert de fichiers
5. Accès par clé
6. Configuration du service SSH
7. Énoncé
8. Configuration du service SSH
9. Solution

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 04 - Support de cours · 8 pages transcrites"]
    N2["Services réseau en environnement Linux"]
    N3["Protocole et clients"]
    N4["Transfert de fichiers"]
    N5["Accès par clé"]
    N7["Configuration du service SSH"]
    N8["Énoncé"]
    N10["Configuration du service SSH"]
    N11["Solution"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N7
    N7 --> N8
    N8 --> N10
    N10 --> N11
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 04 - Support de cours · 8 pages transcrites

!!! note "À retenir"
    Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés.

Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. Les adresses numériques et les consignes restent celles de la source.

## Services réseau en environnement Linux

Module 04 - Administration à distance

### Administration à distance

### Objectifs

!!! note "À retenir"
    Mettre en place les accès SSH aux serveurs

- Mettre en place les accès SSH aux serveurs

### Administration à distance

## Protocole et clients

### Protocole et clients

### Les outils

!!! note "À retenir"
    Pour administrer un serveur Linux, on va s'y connecter à distance via un protocole sécurisé : SSH C'est un protocole normalisé et sécurisé permettant de chiffrer les communications entre le client et le serveur Support réseau SSH SSH SSH SSH SSH SSH SSH SSH SSH SSH SSH Client Serveur Protocole utilisé

- Pour administrer un serveur Linux, on va s'y connecter à distance via un protocole sécurisé : SSH
- C'est un protocole normalisé et sécurisé permettant de chiffrer les communications entre le client et le serveur

Support réseau

SSH SSH SSH SSH SSH SSH SSH SSH SSH SSH SSH

Client

Serveur

Protocole utilisé

### Protocole et client

### Côté client

!!! note "À retenir"
    Sous Linux et macOS, le client sera le client openssh-client fourni avec la commande ssh, utilisable aussi sous Windows Server 2019 maintenant.

**Visuel externe**

```mermaid
flowchart LR
    N1["Sous Windows il est possible d'utiliser :"]
    N2["PuTTy : outil basique pour se connecter en SSH"]
    N3["mRemoteNG : multifenêtres, multiprotocoles"]
    N4["MobaXterm : multi-onglets, multiprotocoles"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

- Sous Linux et macOS, le client sera le client openssh-client fourni avec la commande ssh, utilisable aussi sous Windows Server 2019 maintenant.
- Sous Windows il est possible d'utiliser :
- PuTTy : outil basique pour se connecter en SSH

https://www.chiark.greenend.org.uk/~sgtatham/putty

- mRemoteNG : multifenêtres, multiprotocoles

https://mremoteng.org/ - https://mremoteng.readthedocs.io/

- MobaXterm : multi-onglets, multiprotocoles

https://mobaxterm.mobatek.net/

### Administration à distance

## Transfert de fichiers

### Transfert de fichiers

### Commande scp

!!! note "À retenir"
    Il est possible de transférer des fichiers de façon sécurisée grâce au protocole SSH avec la commande scp.

**Visuel externe**

```mermaid
flowchart LR
    N1["Pour la copie, on utilisera :"]
    N2["scp sous Linux"]
    N3["WinSCP sous Windows (ou les outils avancés comme MobaXTerm)"]
    N1 --> N2
    N2 --> N3
```

- Il est possible de transférer des fichiers de façon sécurisée grâce au protocole SSH avec la commande scp.

Transcription du détail du support.

```
SSH + CP = SCP
```

- Pour la copie, on utilisera :
- scp sous Linux
- WinSCP sous Windows (ou les outils avancés comme MobaXTerm)

### Transfert de fichiers

### La commande scp

!!! note "À retenir"
    La commande fonctionne dans les deux sens, soit on transfère un fichier du client vers le serveur soit du serveur vers le client.

!!! example "Exemple"
    Exemple de copie d'un fichier d'un serveur vers le local : # scp user@ip:/etc/exemple.conf /tmp /etc/exemple.conf Réseau SSH SSH SSH SSH SSH SSH SSH SSH SSH SSH SSH Client SSH Serveur SSH /tmp

- La commande fonctionne dans les deux sens, soit on transfère un fichier du client vers le serveur soit du serveur vers le client.
- Exemple de copie d'un fichier d'un serveur vers le local : # scp user@ip:/etc/exemple.conf /tmp

/etc/exemple.conf

Réseau

SSH SSH SSH SSH SSH SSH SSH SSH SSH SSH SSH

Client SSH Serveur SSH

/tmp

### Administration à distance

## Accès par clé

### Accès par clé

### Clés SSH

!!! note "À retenir"
    De base, l'accès SSH se fait avec un login et password.

**Visuel externe**

```mermaid
flowchart LR
    N1["De base, l'accès SSH se fait avec un login et password."]
    N2["On ne se connecte jamais en root via SSH."]
    N3["Il est préférable de mettre en place des clés SSH pour se connecter."]
    N4["Permet aussi d'automatiser des transferts via SCP ou rsync."]
    N5["Plusieurs algorithmes de clés : RSA, DSA, ECDSA"]
    N6["On va utiliser le plus habituel, i.e. RSA."]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
```

- De base, l'accès SSH se fait avec un login et password.
- On ne se connecte jamais en root via SSH.
- Il est préférable de mettre en place des clés SSH pour se connecter.
- Permet aussi d'automatiser des transferts via SCP ou rsync.
- Plusieurs algorithmes de clés : RSA, DSA, ECDSA
- On va utiliser le plus habituel, i.e. RSA.

### Accès par clé

### Génération de la clé

**Visuel externe**

```mermaid
flowchart LR
    N1["Pour générer une paire de clés SSH, on va utiliser la commande ssh-keygen."]
    N2["On obtient une paire de fichiers :"]
    N3["Une clé privée (à conserver en local et backuper)"]
    N4["Une clé publique à installer sur les serveurs pour se connecter"]
    N5["Si le nom n'est pas précisé, les clés s’appellent :"]
    N6["id_rsa pour la clé privée"]
    N7["id_rsa.pub pour la clé publique"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
```

- Pour générer une paire de clés SSH, on va utiliser la commande ssh-keygen.
- On obtient une paire de fichiers :
- Une clé privée (à conserver en local et backuper)
- Une clé publique à installer sur les serveurs pour se connecter
- Si le nom n'est pas précisé, les clés s’appellent :
- id_rsa pour la clé privée
- id_rsa.pub pour la clé publique

### Accès par clé

### Génération de la clé

Transcription du détail du support.

```
fred@cli-debian:~$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/fred/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/fred/.ssh/id_rsa.
Your public key has been saved in /home/fred/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:HZrJ3cZaWa4nrrwHqve4oLVVUgfxcPauRZyBbAA8ip8 fred@cli-debian
The key’s randomart image is shown for an RSA 2048-bit key.
```

### Accès par clé

### Génération de la clé

- Suivant le contexte, on mettra ou pas une passphrase :
- Accès sécurisé sur un serveur : passphrase
- Synchronisation de données entre deux machines : pas de passphrase

### Accès par clé

### Copie de la clé

- Une fois la clé générée, on va la copier sur la machine distante.
- On utilise la commande ssh-copy-id.

Transcription du détail du support.

```
fred@cli-debian:~$ ssh-copy-id admin@192.168.6.66
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/admin/.ssh/id_rsa.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
fred@192.168.6.66's password:

Number of key(s) added: 1

Now try logging into the machine, with: "ssh 'admin@192.168.6.66'"
and check to make sure that only the key(s) you wanted were added.
```

### Accès par clé

### Copie de la clé

- Par défaut, elle copie la clé id_rsa, si besoin préciser le nom de la clé à copier
- Elle génère le fichier authorized_keys sur le serveur
- Dans le répertoire $HOME/.ssh

### Accès par clé

### Clé pour root

- Il n'est pas autorisé de se connecter en root via un login / pass
- Par contre, c'est possible avec une clé SSH
- Pour sa mise en place :

Transcription du détail du support.

```
root@srv-debian:~# mkdir /root/.ssh
root@srv-debian:~# chmod 700 /root/.ssh
root@srv-debian:~# cp /home/admin/.ssh/authorized_keys /root/.ssh/
```

Référence du document : 1Dn8otCfssD-wTKjFRq7274ZvWMMI_KAB · SHA-256 bcbd1729184530a0…

| Support · Module 04 - Support de cours · 8 pages transcrites | Les noms et chemins de formation portant le nom de l’éditeur ont été neutralisés. |
