# Corrections — Module 01 — Présentation de l’environnement — Installation de GLPI

!!! warning
    Une correction décrit le contexte du laboratoire. Comparer la logique et les contrôles avant de reprendre une valeur, une version ou un chemin dans un autre environnement.

## M1 - Solution du TP - Installation de lenvironnement

### GLPI

#### Installation de

#### l’environnement

#### TP du Module 1 — Présentation de l’environnement — Installation de

#### GLPI

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 1.

#### Énoncé

- Installer un GLPI et un domaine Active Directory

#### Prérequis

- VMware Workstation, ISO Debian10 NetInstall, Windows server 2019 graphique et

#### pfSense

#### Contexte

- La société Olympus vous demande d’installer l’application GLPI au sein de son

domaine.

- L’application GLPI sera ensuite utilisée pour de la gestion de parc et de l’assistance

utilisateur.

#### Adressage IP des VM :

- 192.168.1.0/24 + DHCP salle

#### srv-glpi srv-CD1

#### PFSENSE

#### VMNET 18

#### Réseau de salle

#### .1.2

192.168.1.0/24

#### .254

#### DHCP

#### Principales tâches à réaliser

#### Installation du serveur GLPI

- Installez une VM Debian 10 64b avec interface graphique

  - 4Go RAM, 1CPU, bridge, 40Gb de disque dur.
  - Utilisez l’ISO NetInstall de Debian 10 disponible sur distrib.
  - Adressage réseau : DHCP en bridge pour l’installation.
  - Puis faites la configuration réseau une fois installée (VMNet18).
  - Serveur DNS : srv-CD01.
  - Uniquement le serveur SSH et l’environnement graphique de bureau seront

installés avec les utilitaires usuels du système.

#### Installation du domaine ADDS

- Depuis l’image ISO Windows Server 2019 présente sur distrib, déployez le serveur pour le

domaine Olympus.gr.

- Procédez au nommage et adressage réseau comme indiqué sur le schéma.
- Créez les domaines ADDS « Olympus.gr ».
- Ne créer ni OU, ni utilisateurs pour le moment.

#### Installation d’un client W10

- Depuis l’image SysPrep Windows 10 présente dans distrib, déployez un client.
- Procédez à la configuration réseau en vous basant sur le schéma.
- Ajoutez le client dans le domaine ADDS.

#### Installation du firewall pfSense

- Créez une nouvelle machine virtuelle avec les caractéristiques suivantes :

  - OS : Other, FreeBSD 64-bit, 512 de RAM, 1 CPU, Disque 20G GB.
  - Carte réseau n°1 : bridgée en DHCP
  - Carte réseau n°2 : VMNet18

- Depuis l’ISO présente sur Distrib, installez un pfSense avec les réglages par défaut.
- Laissez la carte em0 en DHCP, configure z la carte em1 sur le LAN VMNET18 comme

indiqué sur le schéma.

- Accédez à l’interface web du pfSense et effectuez-y la configuration préalable qui sera

proposée.

- Créez une règle de filtrage sur toutes les interfaces qui autorise tout le trafic.
- Test de communication

  - Depuis srv -Cd01, vous devez pouvoir résoudre ftp.fr.debian.org (pensez au

#### DNS)

#### Redirecteur inconditionnel vers le DNS de l’ENI

  - Depuis srv-glpi, ping vers ftp.fr.debian.org.

#### Installation de l’application GLPI

#### Une procédure complète est disponible ici :

https://campuseni.sharepoint.com/:w:/s/Cursus_TSSR/EaLk9qRHCvVMhummMhbc0ecBQG

#### XtQdB3LEB_kJAb9toKiw

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

  - Connectez-vous au Shell mysql : mysql -u root -p
  - Créez une base de données pour GLPI :

#### Afin de vérifier si votre base de données a bien été créée :

`Mysql&gt;create database glpidb;`

`Mysql&gt;show databases ;`

#### +----------------------------+

#### | Database |

#### +----------------------------+

#### | glpidata |

#### | information_schema |

#### | mysql |

#### | performance |

#### +----------------------------+

#### #mysql_secure_installation

#### Change the root password? [Y/n] n

#### Remove anonymous users? [Y/n] Y

#### Disallow root login remotely? [Y/n] Y

#### Remove test database and access to it? [Y/n] Y

#### Reload privilege tables now? [Y/n] Y

- Créez un gestionnaire avec tous les droits sur cette base de données :

#### Afin de vérifier si cela a bien fonctionné :

- Installation de GLPI

  - Récupérez l’archive de GLPI présente sur le partage formateur sur la machine

Debian avec Winscp disponible sur Distrib (attention, openssh-server doit être installé et le démon sshd empêche la connexion avec l’utilisateur root…).

  - Copiez le fichier glpi-xxxx.tar.gz dans le dossier /var/www/
  - Utilisez la commande tar pour désarchiver et décompressez dans /var/www

puis supprimez le fichier glpi-xxxx.tar.gz.

`tar xvzf /var/www/glpi-xxxx.tar.gz`

Attention, vous devez être dans le répertoire /var/www ou utiliser l’option -C

`rm glpi-xxxx.tar.gz`

  - Vérifiez que root est bien propriétaire et groupe propriétaire du répertoire, et

en récursif, GLPI, sinon faites le changement.

`chown -R root glpi`

(attention, vous devez être dans le répertoire /var/www ou utiliser le chemin

#### absolu)

- Modification de l’emplacement des fichiers de configuration de GLPI.

  - Créez un répertoire GLPI dans /etc.

#### # mkdir /etc/glpi

  - Créez le fichier local_define.php dans le répertoire /etc/glpi avec les

#### instructions suivantes :

`Mysql&gt;grant all privileges on glpidata.* to root@localhost identified by ‘motdepass’;`

`Mysql&gt;show grants for root@localhost;`

+-------------------------------------------------------------------------------------------------------

#### ----------+

#### | Grants for root@localhost

#### |

+-------------------------------------------------------------------------------------------------------

#### ----------+

| GRANT ALL PRIVILEGES ON *.* TO ‘root’@’localhost’ IDENTIFIED BY PASSWORD

#### ‘*2470C0C06DEE42FD1618BB99005ADCA2EC9D1E19’ WITH GRANT OPTION |

#### | GRANT ALL PRIVILEGES ON ‘glpidata’.* TO ‘root’@’localhost’ |

#### | GRANT PROXY ON ‘’@’%’ TO ‘root’@’localhost’ WITH GRANT OPTION |

+-------------------------------------------------------------------------------------------------------

#### -----------+

#### &lt;?php

define('GLPI_VAR_DIR', '/var/lib/glpi'); define('GLPI_DOC_DIR', GLPI_VAR_DIR); define('GLPI_CRON_DIR', GLPI_VAR_DIR . '/_cron'); define('GLPI_DUMP_DIR', GLPI_VAR_DIR . '/_dumps'); define('GLPI_GRAPH_DIR', GLPI_VAR_DIR . '/_graphs'); define('GLPI_LOCK_DIR', GLPI_VAR_DIR . '/_lock'); define('GLPI_PICTURE_DIR', GLPI_VAR_DIR . '/_pictures'); define('GLPI_PLUGIN_DOC_DIR', GLPI_VAR_DIR . '/_plugins'); define('GLPI_RSS_DIR', GLPI_VAR_DIR . '/_rss'); define('GLPI_SESSION_DIR', GLPI_VAR_DIR . '/_sessions'); define('GLPI_TMP_DIR', GLPI_VAR_DIR . '/_tmp'); define('GLPI_UPLOAD_DIR', GLPI_VAR_DIR . '/_uploads'); define('GLPI_CACHE_DIR', GLPI_VAR_DIR . '/_cache');

- Donnez les droits en récursif à l’utilisateur www-data sur /etc/glpi et sur

/var/www/glpi/files.

#### # chown -R www-data /etc/glpi

#### # chown -R www-data /var/www/glpi/files

- Créez un répertoire /var/lib/glpi.

#### # mkdir /var/lib/glpi

- Copiez tout ce qui se trouve dans /var/ww/glpi/files vers /var/lib/glpi.

#### # cp -R /var/www/glpi/files/* /var/lib/glpi

- Donnez les droits en récursif à l’utilisateur www-data sur /var/lib/glpi. Vérifiez.

#### # chown -R www-data /var/lib/glpi

- Créez un répertoire /var/log/glpi afin de gérer la journalisation de GLPI.

#### #mkdir /var/log/glpi

- Donnez les droits à l’utilisateur www-data sur /var/log/glpi.
- Vérifiez.
- Créez un fichier /var/www/glpi/inc/downstream.php.

#### # vi /var/www/glpi/inc/downstream.php

#### # ls -l /var/lib/glpi

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _cache

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _cron

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _dumps

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _graphs

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _locales

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _lock

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _log

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _pictures

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _plugins

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _rss

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _sessions

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _tmp

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:37 _uploads

#### #ls -ld /var/log/glpi

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:33 glpi/

#### &lt;?php

define('GLPI_CONFIG_DIR', '/etc/glpi/');

#### if (file_exists(GLPI_CONFIG_DIR . '/local_define.php')) { require_once

GLPI_CONFIG_DIR . '/local_define.php';

#### }

?&gt;

- Donnez les droits à l’utilisateur www-data sur /var/www/glpi/marketplace.

#### #chown -R www-data /var/ww/glpi/marketplace

- Vérifiez.
- Afin de publier le site web GLPI, il faut créer le fichier /etc/apache2/sites-

available/glpi.domaine.tld.conf.

#### #vi /etc/apache2/sites-available/glpi.domaine.tld.conf

- Enfin, publiez le site internet.

#### a2ensite glpi.domaine.tld.conf

- Rechargez la configuration du serveur Apache.

`systemctl reload apache2.service`

- Donnez un FQDN à votre serveur GLPI en olympus.gr.

#### #hostname srv-glpi.olympus.gr

#### #vi /etc/hosts

127.0.1.1 srv-glpi srv-glpi.olympus.gr

- Créez l’enregistrement d’hôte pour votre serveur GLPI dans le DNS de CD01.

#### Créez un enregistrement A

#### Debian A @IP

- Créez un enregistrement CNAME « glpi » pour l’enregistrement A créer ci-dessus.

#### glpi cname debian.domaine.tld

- Pour la suite des TP, depuis le client W10, faites-en sorte de pouvoir y accéder depuis

l’URL suivante : http://glpi.olympus.gr puis terminez la configuration.

#### #ls -ld marketplace

#### drwxr-xr-x 2 www-data root 4096 janv. 24 10:33 marketplace/

&lt;VirtualHost *:80&gt;

#### Documentroot /var/www/glpi

#### ServerName glpi.domaine.tld

&lt;Directory /var/www/glpi&gt;

#### AllowOverride none

#### Options Indexes FollowSymLinks Multiviews

#### Require all granted

&lt;/Directory&gt; &lt;/VirtualHost&gt;
