# GLPI inaccessible : isoler la couche en cause

Partir du symptôme observé depuis le client du laboratoire et conserver le message exact ainsi que l’heure de l’essai. LeTP01 doit avoir établi le réseau, les DNS, Apache/PHP et MariaDB avant l’intégrationLDAP.

| Symptôme | Vérification | Interprétation |
|---|---|---|
| Le nom GLPI ne se résout pas | DNS configuré sur le client, enregistrementA, CNAME et cible | Un alias doit pointer vers le nom serveur créé |
| Nom correct, connexionweb impossible | IP, masque, passerelle, réseau VMNet18 et filtrage pfSense | Distinguer résolution et transport |
| PageApache visible, GLPI absent | VirtualHost activé, nom du site et DocumentRoot | Le serveur web répond mais ne prouve pas la présence de l’application |
| ErreurPHP/prérequis | Modules installés pour la version PHP, redémarrage Apache | LeTP utilisePHP7.3 ; lediaporama mentionne7.4 |
| ConnexionSQL refusée | Service MariaDB, base, compte et droits | Vérifier `glpidb/glpidata` sans publier le secret |
| Écriture des fichiers impossible | Propriétairewww-data et chemins config/données/logs | Corriger la confusion `/var/ww` et `/var/www` |
| ConnexionLDAP seule en échec | ServeurAD, BaseDN, DN de liaison, état actif et filtres | Conserver l’accès local de secours |

```bash
systemctl status apache2 mariadb
apache2ctl configtest
ls -ld /etc/glpi /var/lib/glpi /var/log/glpi
```

Lire les journaux correspondant à l’erreur et corriger la cause identifiée. Après un changement, refaire le même test depuis le même client. Pour LDAP, distinguer réussite d’authentification et bons droits : les règles d’habilitation et l’entité active se contrôlent séparément.

- [Installation détaillée](../tp/glpi/module-01/corrections.md)
- [Authentification et habilitations](../modules/07-administration-glpi/module-02-authentification-ad-habilitations.md)
