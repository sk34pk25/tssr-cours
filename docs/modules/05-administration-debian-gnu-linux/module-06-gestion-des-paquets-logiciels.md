# Module 06 — Gestion des paquets logiciels

**Cours optimisé — reformulation pédagogique du support et des TP associés.** Les exemples du parcours conservent leur contexte Debian 11 ; les corrections et actualisations sont identifiées comme compléments externes. Les transcriptions intégrales se consultent dans l’onglet Original.
## Objectifs

- Lire la suite, le dépôt et les composants d’une entrée APT.
- Séparer actualisation des index, mise à jour, installation et inventaire local.
- Réaliser l’atelier sur les deux VM et contrôler SSH et la configuration de Vim.

## Dépôts, branches et paquets

Les dépôts fournissent les paquets et leurs métadonnées. APT recherche et résout les dépendances ; dpkg gère l’installation et l’état local des paquets Debian. Les recherches peuvent généralement se faire avec un compte ordinaire ; les modifications système exigent les privilèges appropriés.

Le support reprend stable, testing, unstable/Sid, oldstable et oldoldstable. Experimental est un ensemble de paquets expérimentaux, pas un système complet autonome. Un serveur de production se rattache à une version choisie et à sa politique de maintenance.

## Lire une source APT

```text
deb http://ftp.fr.debian.org/debian/ bookworm main contrib
```

| Élément | Sens |
|---|---|
| `deb` | Paquets binaires ; `deb-src` concerne leurs sources |
| URI | Emplacement du dépôt : HTTP, fichier local, média… |
| `bookworm` | Suite ou nom de code ciblé |
| `main contrib` | Composants à consulter |

Le support décrit `main` comme libre, `contrib` comme libre avec des dépendances extérieures au cœur libre, et `non-free` comme non libre. Les fichiers se trouvent dans `/etc/apt/sources.list` et dans `/etc/apt/sources.list.d`. Les exemples Buster, Bullseye et Bookworm appartiennent à des contextes différents : les juxtaposer n’est pas une procédure de mise à niveau.

!!! info "Actualisation externe — formats et version cible"
    Les versions récentes acceptent notamment le format deb822 dans des fichiers `.sources` et le composant `non-free-firmware`. Garder la suite correspondant à l’OS ; remplacer Bullseye par Bookworm transforme le contexte en migration de version majeure, qui exige les notes de publication. Références : [sources.list(5)](https://manpages.debian.org/trixie/apt/sources.list.5.en.html) et [notes de publication Debian](https://www.debian.org/releases/).

## Opérations courantes

| Besoin | Commande |
|---|---|
| Rafraîchir l’index des paquets | `apt update` |
| Mettre à jour sans retirer de paquet existant | `apt upgrade` |
| Résoudre une mise à jour pouvant retirer des paquets | `apt full-upgrade` |
| Installer | `apt install vim openssh-server terminator` |
| Désinstaller en conservant les configurations gérées | `apt remove paquet` |
| Supprimer aussi ces fichiers de configuration | `apt purge paquet` |
| Vider le cache d’archives téléchargées | `apt clean` |
| Rechercher | `apt search motif` ou `apt-cache search motif` |
| Lire les métadonnées | `apt show paquet` ou `apt-cache show paquet` |

`update` n’installe pas les nouvelles versions. Lire le récapitulatif d’APT avant de confirmer une opération, particulièrement avec `full-upgrade`. `purge` ne signifie pas suppression automatique des documents présents dans le dossier personnel d’un utilisateur.

!!! info "Correction externe — commandes APT"
    Le support écrit `apt-get search` : cette sous-commande n’existe pas ; utiliser `apt-cache search` ou `apt search`. `apt upgrade` peut ajouter des dépendances sans supprimer de paquet, tandis que `apt-get upgrade` ne possède pas exactement la même politique par défaut. Références : [apt(8)](https://manpages.debian.org/trixie/apt/apt.8.en.html) et [apt-get(8)](https://manpages.debian.org/trixie/apt/apt-get.8.en.html).

## Interroger l’état local avec dpkg

```bash
dpkg -l '*ftp*'
dpkg -L openssh-server
dpkg -S /usr/bin/scp
```

`-l` examine les enregistrements de la base locale, avec des états tels que installé, supprimé avec configuration restante ou connu mais non installé. **Il ne liste pas le catalogue complet des dépôts**, contrairement à la formulation du support. `-L` indique les chemins enregistrés pour un paquet ; `-S` cherche le paquet auquel un chemin enregistré appartient. Référence externe : [dpkg-query(1)](https://manpages.debian.org/trixie/dpkg/dpkg-query.1.en.html).

L’historique APT se consulte dans `/var/log/apt/history.log`, celui de dpkg dans `/var/log/dpkg.log`, avec les éventuelles archives de rotation. Une opération APT appelle dpkg pour réaliser les actions sur les paquets : les deux journaux apportent des niveaux de détail différents.

## TP — Gérer les paquets sur les deux VM

### Poste graphique

1. Ouvrir **Software & Updates** et relever les dépôts. Vérifier les entrées de `/etc/apt/sources.list` et des fichiers actifs dans `/etc/apt/sources.list.d/`. Distinguer les paquets binaires, les mises à jour et les dépôts de sources. Désactiver le CD-ROM si la VM utilise désormais des dépôts réseau et désactiver les entrées de sources comme demandé.
2. Rafraîchir les index. Relever le nombre de mises à jour proposées avant de les installer. Le nombre dépend de l’état de la VM et des dépôts activés.
3. Installer GParted dans **Logiciels** et l’ouvrir depuis GNOME, sans écrire sur un disque. Chercher le paquet SSH, puis installer Vim, OpenSSH Server et Terminator.

```bash
sudo apt update
apt list --upgradable
sudo apt upgrade
apt search openssh-server
sudo apt install vim openssh-server terminator
apt show vim openssh-server terminator
dpkg -L vim
dpkg -L openssh-server
dpkg -L terminator
systemctl status ssh --no-pager
```

Tester SSH depuis PuTTY vers la VM graphique. Lire l’adresse de la VM et vérifier que le client rejoint le bon hôte.

### Serveur en console

Le TP donne des dépôts Bookworm. Vérifier d’abord `VERSION_CODENAME` dans `/etc/os-release`. Sur la VM Bookworm de l’exercice, relever les lignes binaires de la suite de base et de `bookworm-updates`, puis conserver `bookworm-security`. Sur une VM Bullseye, suivre les notes de version si une migration est explicitement demandée.

Après la vérification de la suite, lancer `sudo apt update`, relever les mises à jour et examiner la proposition de `sudo apt upgrade`. Installer les deux paquets demandés et contrôler leur présence locale.

```bash
cat /etc/os-release
sudo apt install vim cifs-utils
dpkg -l vim cifs-utils
```

### Réglage Vim commun

Sur les deux VM, activer `syntax on` dans la configuration indiquée par le TP. Le corrigé utilise `vim90`. Vérifier le fichier `defaults.vim` réellement installé avant de reprendre la première ligne de `/etc/vim/vimrc.local`.

```vim
source /usr/share/vim/vim90/defaults.vim
let skip_defaults_vim = 1
if has('mouse')
    set mouse=r
endif
set paste
```

Ouvrir un fichier de test, vérifier la coloration et lire les options effectives avec `:set mouse? paste?`. Après le collage, `:set nopaste` rétablit les fonctions d’édition habituelles pour la session. Le résultat du TP comprend les dépôts relevés, la liste des paquets, la connexion SSH et le test Vim.

## Installer depuis les sources

La démarche du support est **lire README/INSTALL → préparer les dépendances → configurer → compiler → installer**. Pour un projet fondé sur Autotools :

```bash
./configure
make
```

La compilation se réalise avec un utilisateur ordinaire dans un espace prévu. L’installation système par `make install` exige les droits nécessaires ; ne l’exécuter qu’après lecture du projet. Ce cheminement ne s’applique pas à tous les logiciels et n’enregistre pas automatiquement un paquet Debian maintenable par APT.

## Schéma explicatif — complément pédagogique

```mermaid
flowchart LR
 D["Dépôts configurés"] --> U["apt update : index"] --> A["APT : choix et dépendances"] --> P["dpkg : état et installation locale"]
```

## À retenir

Vérifier la suite installée avant de modifier un dépôt. `apt update` actualise les index et `apt upgrade` propose les mises à jour. `dpkg` décrit l’état local après l’installation.

## Autoévaluation

1. Quelle commande remplace `apt-get search` ?
2. `dpkg -l` interroge-t-il tout le dépôt distant ?
3. Pourquoi ne pas copier les lignes Bookworm sur un serveur Bullseye sans préparation ?
4. Quel résultat noter entre `apt update` et `apt upgrade` ?
5. Comment vérifier le fichier Vim proposé avant de le sourcer ?

??? success "Réponses commentées"
    1. `apt-cache search` ou `apt search`.
    2. Non, la base locale.
    3. Cela change la version visée et engage une migration majeure.
    4. Lister les paquets pouvant être mis à jour et relever leur nombre. Ce résultat dépend de la VM et des dépôts actifs.
    5. Trouver le `defaults.vim` installé sur la VM. Le chemin `vim90` ne doit être utilisé que s’il correspond à cette installation.

## Pour travailler ce module

- [Fiche de révision](../../revision/administration-linux/module-06-gestion-des-paquets-logiciels.md)
- [Travaux pratiques](../../tp/administration-linux/module-06/index.md)
- [Progression du cours](index.md)
