# TP 01 — Énoncé — Présentation de l’environnement — Installation de GLPI

## Préparer l’atelier

Le sujet prévoit VMware Workstation, les supports d’installation des systèmes et quatre machines de laboratoire. Relever le plan IP, le serveur DNS et les versions avant de configurer les services.

Réaliser les consignes avant de consulter la correction. Conserver une preuve pour chaque résultat, puis comparer avec les critères de validation du module.

## Consignes complètes


### Installation de l’environnement

### TP du Module 1 – Présentation de l’environnement – Installation de GLPI

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1.

### Objectifs

- Installer un GLPI et un domaine Active Directory Prérequis

- VMware Workstation, ISO Debian 10 NetInstall, Windows server 2019 graphique et pfSense Contexte

- La société Olympus vous demande d’installer l’application GLPI au sein de son domaine.

- L’application GLPI sera ensuite utilisée pour de la gestion de parc et de l’assistance utilisateur.

Adressage IP des VM :

- 192.168.1.0/24 + DHCP salle

### .254

### Réseau de salle

### DHCP

### 192.168.1.0/24

### PFSENSE

### VMNET 18

### srv-glpi srv-CD1

### .1 .2

### Principales tâches à réaliser

### Installation du serveur GLPI

- Installez une VM Debian 10 64 b avec interface graphique

- 4 Go  RAM, 1 CPU, bridge, 40 Gb de disque dur.

- Utilisez l’ISO NetInstall de Debian 10 disponible sur distrib.

- Adressage réseau : DHCP en bridge pour l’installation.

- Puis faites la configuration réseau une fois installée (VMNet18).

- Serveur DNS : srv-CD01.

- Uniquement le serveur SSH et l’environnement graphique de bureau seront

installés avec les utilitaires usuels du système.

### Installation du domaine ADDS

- Depuis l’image ISO Windows Server 2019 présente sur distrib, déployez le serveur pour le domaine Olympus.gr.

- Procédez au nommage et adressage réseau comme indiqué sur le schéma.

- Créez les domaines ADDS « Olympus.gr ».

- Ne créer ni OU, ni utilisateurs pour le moment.

### Installation d’un client W10

- Depuis l’image SysPrep Windows 10 présente dans distrib, déployez un client.

- Procédez à la configuration réseau en vous basant sur le schéma.

- Ajoutez le client dans le domaine ADDS.

### Installation du firewall pfSense

- Créez une nouvelle machine virtuelle avec les caractéristiques suivantes :

- OS : Other, FreeBSD 64-bit, 512 de  RAM, 1 CPU, Disque 20 G GB.

- Carte réseau n°1 : bridgée en DHCP

- Carte réseau n°2 : VMNet18

- Depuis l’ISO présente sur Distrib, installez un pfSense avec les réglages par défaut.

- Laissez la carte em0 en DHCP, configurez la carte em1 sur le LAN VMNET18 comme indiqué sur le schéma.

- Accédez à l’interface web du pfSense et effectuez-y la configuration préalable qui sera proposée.

- Créez une règle de filtrage sur toutes les interfaces qui autorise tout le trafic.

- Test de communication

- Depuis srv-Cd01, vous devez pouvoir résoudre ftp.fr.debian.org (pensez au

### DNS)

- Depuis srv-glpi, ping vers ftp.fr.debian.org.

### Installation de l’application GLPI

Le serveur Debian doit pouvoir, à travers le pfSense, accéder au réseau extérieur, dont les dépôts de l’Ecole. La mise à jour des dépôts ne doit pas provoquer d’erreurs. Inutile d’aller plus loin si cette étape n’est pas vérifiée.

- Installez les paquets suivants :

- Serveur WEB et le serveur de base de données : task-web-server et mariadb-

server.

- Extensions obligatoires PHP pour GLPI :

- Php7.3

- php7.3-mysql

- php7.3-mbstring

- php7.3-curl

- php7.3-gd

- php7.3-xml

- php7.3-ldap

- php7.3-xmlrpc

- php7.3-imap

- php7.3-intl

- php7.3-zip

- php7.3-bz2

- php-apcu-bc

- php-cas

- Redémarrez ensuite le serveur Apache

- Configuration de la base de données

#mysql_secure_installation

Change the root password? [Y/n] n Remove anonymous users? [Y/n] Y Disallow root login remotely? [Y/n] Y Remove test database and access to it? [Y/n] Y Reload privilege tables now? [Y/n] Y

- Connectez-vous au Shell mysql : mysql -u root -p

- Créez une base de données pour GLPI :

```sql
create database glpidata;
```

Afin de vérifier si votre base de données a bien été créée :

```sql
show databases ;
```

| Database |
| --- |
| glpidata |
| information_schema |
| mysql |
| performance |

- Créez un gestionnaire avec tous les droits sur cette base de données :

```sql
grant all privileges on glpidata.* to root@localhost identified by '[mot de passe fourni par le formateur]';
```

Afin de vérifier si cela a bien fonctionné :

```sql
SHOW GRANTS FOR 'root'@'localhost';
```

Vérifier les privilèges retournés sur la base GLPI. L’empreinte d’authentification de l’exemple est masquée.

- Installation de GLPI

- Récupérez l’archive de GLPI présente sur le partage formateur sur la machine

Debian avec Winscp disponible sur Distrib (attention, openssh-server doit être installé et le démon sshd empêche la connexion avec l’utilisateur root…).

- Copiez le fichier glpi-xxxx.tar.gz dans le dossier /var/www/

- Utilisez la commande tar pour désarchiver et décompressez dans /var/www

puis supprimez le fichier glpi-xxxx.tar.gz.

- Vérifiez que root est bien propriétaire et groupe propriétaire du répertoire, et

en récursif, GLPI, sinon faites le changement.

- Modification de l’emplacement des fichiers de configuration de GLPI.

- Créez un répertoire GLPI dans /etc.

- Créez le fichier local_define.php dans le répertoire /etc/glpi avec les

instructions suivantes :

```php
<?php
define('GLPI_VAR_DIR', '/var/lib/glpi');
define('GLPI_DOC_DIR',
GLPI_VAR_DIR);
define('GLPI_CRON_DIR',
GLPI_VAR_DIR . '/_cron');
define('GLPI_DUMP_DIR',
GLPI_VAR_DIR . '/_dumps');
define('GLPI_GRAPH_DIR',
GLPI_VAR_DIR . '/_graphs');
define('GLPI_LOCK_DIR',
GLPI_VAR_DIR . '/_lock');
define('GLPI_PICTURE_DIR',
GLPI_VAR_DIR . '/_pictures');
define('GLPI_PLUGIN_DOC_DIR',
GLPI_VAR_DIR . '/_plugins');
define('GLPI_RSS_DIR',
GLPI_VAR_DIR . '/_rss');
define('GLPI_SESSION_DIR',
GLPI_VAR_DIR . '/_sessions');
define('GLPI_TMP_DIR',
GLPI_VAR_DIR . '/_tmp');
define('GLPI_UPLOAD_DIR',
GLPI_VAR_DIR . '/_uploads');
define('GLPI_CACHE_DIR',
GLPI_VAR_DIR . '/_cache');
define('GLPI_LOG_DIR', '/var/log/glpi');
?>
```

- Donnez les droits en récursif à l’utilisateur www-data sur /etc/glpi et sur /var/www/glpi/files.

- Créez un répertoire /var/lib/glpi.

- Copiez tout ce qui se trouve dans /var/www/glpi/files vers /var/lib/glpi.

- Donnez les droits en récursif à l’utilisateur www-data sur /var/lib/glpi. Vérifiez.

```bash
ls -l /var/lib/glpi
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _cache
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _cron
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _dumps
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _graphs
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _locales
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _lock
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _log
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _pictures
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _plugins
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _rss
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _sessions
drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _tmp
drwxr xr x 2 www data root 4096 janv 24 10:37 uploads
```

- Créez un répertoire /var/log/glpi afin de gérer la journalisation de GLPI.

- Donnez les droits à l’utilisateur www-data sur /var/log/glpi.

- Vérifiez.

```bash
ls -ld /var/log/glpi
drwxr-xr-x 2 www-data root 4096 janv. 24 10:33 glpi/
```

- Créez un fichier /var/www/glpi/inc/downstream.php.

```php
<?php
define('GLPI_CONFIG_DIR', '/etc/glpi/');
if (file_exists(GLPI_CONFIG_DIR . '/local_define.php')) { require_once
GLPI_CONFIG_DIR . '/local_define.php';
}
?>
```

- Donnez les droits à l’utilisateur www-data sur /var/www/glpi/marketplace.

- Vérifiez.

```bash
ls -ld marketplace
drwxr-xr-x 2 www-data root 4096 janv. 24 10:33 marketplace/
```

- Afin de publier le site web GLPI, il faut créer le fichier /etc/apache2/sites- available/glpi.domaine.tld.conf.

```text
<VirtualHost *:80>
Documentroot /var/www/glpi
ServerName glpi.domaine.tld
<Directory /var/www/glpi>
AllowOverride none
Options Indexes FollowSymLinks Multiviews
Require all granted
</Directory>
</VirtualHost>
```

- Enfin, publiez le site internet.

- Rechargez la configuration du serveur Apache.

- Donnez un FQDN à votre serveur GLPI en olympus.gr.

- Créez l’enregistrement d’hôte pour votre serveur GLPI dans le DNS de CD01.

- Créez un enregistrement CNAME « glpi » pour l’enregistrement A créer ci-dessus.

- Pour la suite des TP, depuis le client W10, faites-en sorte de pouvoir y accéder depuis l’URL suivante : http://glpi.olympus.gr puis terminez la configuration.


## Méthode et points de contrôle

Suivre le réseau, les dépôts, les paquets, la base, les fichiers puis le site dans cet ordre. Le nom de base retenu ci-dessous est `glpidata` : il remplace l’alternance `glpidb/glpidata` du document. Les chemins erronés `/var/ww` sont corrigés en `/var/www`. Les secrets et empreintes d’authentification de l’exemple sont masqués.

Le code fourni correspond au laboratoire historique. Pour valider : résolution DNS depuis Windows et Debian, accès aux dépôts sans erreur, services Apache/MariaDB actifs, prérequis PHP satisfaits, propriétaire attendu sur les dossiers et connexion depuis `http://glpi.olympus.gr`.

Les commentaires du support sur la suppression des comptes anonymes ne signifient pas que tous les comptes applicatifs doivent être supprimés. La règle pfSense autorisant tout le trafic est limitée au scénario isolé. Ne pas utiliser le fichier d’exemple de VirtualHost sans choisir le nom effectif du domaine.

## Livrables

| Contrôle | Preuve à relever |
| --- | --- |
| Réseau et nom | Vérifier l’adresse, la passerelle et le DNS côté client. Contrôler que le nom du site résout vers le serveur GLPI. |
| Chaîne web et SQL | Vérifier le VirtualHost, Apache et PHP, puis le service MariaDB et les droits du compte utilisé par l’application. |
| Installation | Contrôler les dossiers de configuration, données et journaux, puis tester la connexion au portail depuis le client. |

- [Correction expliquée](corrections.md)
- [Cours du module](../../../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md)

- [Fiche de révision](../../../revision/glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md)
