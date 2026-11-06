# TP 01 — Correction expliquée — Installation de l’environnement

## État initial

Le sujet prévoit VMware Workstation, les supports d’installation des systèmes et quatre machines de laboratoire. Relever le plan IP, le serveur DNS et les versions avant de configurer les services.

Le scénario installe GLPI pour le domaine Olympus.gr, puis permet son accès depuis Windows 10. Les versions sont celles du laboratoire : Debian 10, Windows Server2019 et GLPI 9.5. Le nom de base retenu ici est `glpidata`, pour lever l’alternance `glpidb/glpidata` du support. Les secrets sont fournis par le formateur.

## 1. Préparer les quatre machines

| Machine | Paramètres demandés | Validation |
|---|---|---|
| Debian | 64 bits avec bureau,4 Go  RAM,1 CPU,40 Go ; bridge/DHCP pendant l’installation puis VMNet18 | Hôte srv-glpi, IP 192.168.1.2/24, DNS CD01 |
| Windows Server2019 | DomaineOlympus.gr, serveur ADDS/DNS | srv-CD01, IP 192.168.1.1/24 ; ne pas créer encore les OU et utilisateurs |
| Windows 10 | ImageSysPrep, réseau du laboratoire | Adhésion au domaine et résolutionDNS |
| pfSense | FreeBSD64  bits,512 Mo  RAM,1 CPU,20 Go ; WAN bridgé/DHCP et LAN VMNet18 | LAN 192.168.1.254/24, configuration web achevée |

Le support nomme parfois le contrôleur `srv-CD1` et parfois `srv-CD01`. Conserver un seul nom dans la configuration effective. La règle autorisant tout le trafic sur les interfaces est une consigne du laboratoire isolé. La résolution de `ftp.fr.debian.org` doit fonctionner depuis CD01 et la communication depuis Debian. Configurer le redirecteurDNS autorisé par le formateur. Ne pas poursuivre si les dépôts ne sont pas accessibles ou si leur mise à jour échoue.

## 2. Installer les composants

```bash
apt update
apt install task-web-server mariadb-server php7.3 php7.3-mysql php7.3-mbstring php7.3-curl php7.3-gd php7.3-xml php7.3-ldap php7.3-xmlrpc php7.3-imap php7.3-intl php7.3-zip php7.3-bz2 php-apcu-bc php-cas
systemctl restart apache2
mysql_secure_installation
```

Les paquets doivent être disponibles dans le dépôt de formation. L’assistantMariaDB du support conserve le secret root déjà défini, retire les comptes anonymes et la base de test, interdit la connexion root distante et recharge les droits. La suppression des utilisateurs anonymes n’interdit pas la création ultérieure d’un compte applicatif.

```bash
mysql -u root -p
```

```sql
CREATE DATABASE glpidata;
SHOW DATABASES;
SHOW GRANTS FOR 'root'@'localhost';
```

Le support configure le compteroot pour l’application. Si le laboratoire utilise plutôt un compte dédié, lui attribuer les droits sur la base choisie avec la syntaxe de la version MariaDB installée. Les mots de passe et empreintes de l’exemple ne sont pas reproduits. La base présente dans `SHOW DATABASES` doit être celle saisie dans l’installateur.

## 3. Transférer et déployer GLPI

Transférer l’archive fournie par WinSCP/SSH avec un compte autorisé, puis travailler dans `/var/www`. Le serviceSSH doit être installé ; la connexionSSH de root peut être refusée, comme le signale le support.

```bash
cd /var/www
tar xvzf glpi-xxxx.tar.gz
rm glpi-xxxx.tar.gz
chown -R root:root /var/www/glpi
mkdir -p /etc/glpi /var/lib/glpi /var/log/glpi
```

Remplacer le nom d’archive par le fichier effectif. Vérifier que l’extraction a créé `/var/www/glpi` et non un niveau de dossiers supplémentaire.

## 4. Écrire la configuration des dossiers

Créer `/etc/glpi/local_define.php`. Le fichier ci-dessous rassemble les constantes demandées par l’énoncé, avec leur mise en forme rétablie :

```php
<?php
define('GLPI_VAR_DIR', '/var/lib/glpi');
define('GLPI_DOC_DIR', GLPI_VAR_DIR);
define('GLPI_CRON_DIR', GLPI_VAR_DIR . '/_cron');
define('GLPI_DUMP_DIR', GLPI_VAR_DIR . '/_dumps');
define('GLPI_GRAPH_DIR', GLPI_VAR_DIR . '/_graphs');
define('GLPI_LOCK_DIR', GLPI_VAR_DIR . '/_lock');
define('GLPI_PICTURE_DIR', GLPI_VAR_DIR . '/_pictures');
define('GLPI_PLUGIN_DOC_DIR', GLPI_VAR_DIR . '/_plugins');
define('GLPI_RSS_DIR', GLPI_VAR_DIR . '/_rss');
define('GLPI_SESSION_DIR', GLPI_VAR_DIR . '/_sessions');
define('GLPI_TMP_DIR', GLPI_VAR_DIR . '/_tmp');
define('GLPI_UPLOAD_DIR', GLPI_VAR_DIR . '/_uploads');
define('GLPI_CACHE_DIR', GLPI_VAR_DIR . '/_cache');
define('GLPI_LOG_DIR', '/var/log/glpi');
?>
```

Créer `/var/www/glpi/inc/downstream.php` :

```php
<?php
define('GLPI_CONFIG_DIR', '/etc/glpi/');
if (file_exists(GLPI_CONFIG_DIR . '/local_define.php')) {
    require_once GLPI_CONFIG_DIR . '/local_define.php';
}
?>
```

Copier les données puis appliquer les propriétaires demandés :

```bash
cp -R /var/www/glpi/files/. /var/lib/glpi/
chown -R www-data /etc/glpi /var/www/glpi/files /var/lib/glpi /var/log/glpi /var/www/glpi/marketplace
ls -l /var/lib/glpi
ls -ld /var/log/glpi /var/www/glpi/marketplace
```

Le support utilise parfois `/var/ww` : les commandes ci-dessus rétablissent `/var/www`. La copie `files/.` conserve aussi les fichiers cachés. Les répertoires `_cache`, `_cron`, `_dumps`, `_graphs`, `_lock`, `_pictures`, `_plugins`, `_rss`, `_sessions`, `_tmp` et `_uploads` doivent être accessibles au compte du service web.

## 5. Déclarer Apache et DNS

Créer le site `/etc/apache2/sites-available/glpi.olympus.gr.conf`. Cet exemple reprend le VirtualHost du laboratoire avec le nom effectif :

```apache
<VirtualHost *:80>
    DocumentRoot /var/www/glpi
    ServerName glpi.olympus.gr
    <Directory /var/www/glpi>
        AllowOverride none
        Options Indexes FollowSymLinks MultiViews
        Require all granted
    </Directory>
</VirtualHost>
```

```bash
a2ensite glpi.olympus.gr.conf
apache2ctl configtest
systemctl reload apache2
```

Nommer le serveur `srv-glpi.olympus.gr` et vérifier sa résolution locale. Dans leDNS de CD01, créer un enregistrement A pour le serveur vers192.168.1.2, puis le CNAME `glpi` vers ce nom. Le corrigé utilise aussi `debian.domaine.tld` comme exemple : adapter cette cible au nom effectivement créé, sans mélanger les deux.

## 6. Terminer et valider

Depuis Windows 10, ouvrir `http://glpi.olympus.gr`. Choisir la langue, installation, prérequis, accèsSQL et base `glpidata`, puis terminer. Les comptes initiaux sont `glpi`, `tech`, `normal`, `post-only` ; changer leurs secrets selon la procédure du formateur et désactiver le fichier d’installation.

Conserver les preuves suivantes : adhésion du client au domaine, résolution du nom GLPI, accès à l’assistant, prérequis satisfaits, base choisie, connexion administrateur, dossiers et propriétaires. Une page Apache ou un simpleping ne valide pas l’ensemble de cette chaîne.

## Résultat attendu et contrôles

| Contrôle | Preuve à relever |
| --- | --- |
| Réseau et nom | Vérifier l’adresse, la passerelle et le DNS côté client. Contrôler que le nom du site résout vers le serveur GLPI. |
| Chaîne web et SQL | Vérifier le VirtualHost, Apache et PHP, puis le service MariaDB et les droits du compte utilisé par l’application. |
| Installation | Contrôler les dossiers de configuration, données et journaux, puis tester la connexion au portail depuis le client. |

- [Énoncé complet](enonces.md)
- [Cours](../../../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md)

- [Fiche de révision](../../../revision/glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md)
