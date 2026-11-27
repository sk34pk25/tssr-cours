# GLPI inaccessible : isoler la couche en cause

Partir du symptôme observé depuis le client du laboratoire et conserver le message exact ainsi que l’heure de l’essai. Le TP01 doit avoir établi le réseau, les DNS, Apache/PHP et MariaDB avant l’intégration LDAP.

| Symptôme | Vérification | Interprétation |
|---|---|---|
| Le nom GLPI ne se résout pas | DNS configuré sur le client, enregistrement A, CNAME et cible | Un alias doit pointer vers le nom serveur créé |
| Nom correct, connexion web impossible | IP, masque, passerelle, réseau VMNet18 et filtrage pfSense | Distinguer résolution et transport |
| Page Apache visible, GLPI absent | VirtualHost activé, nom du site et DocumentRoot | Le serveur web répond mais ne prouve pas la présence de l’application |
| Erreur PHP/prérequis | Modules installés pour la version PHP, redémarrage Apache | Le TP utilise PHP 7.3 ; le diaporama mentionne 7.4 |
| Connexion SQL refusée | Service MariaDB, base, compte et droits | Vérifier `glpidb/glpidata` sans publier le secret |
| Écriture des fichiers impossible | Propriétaire www-data et chemins config/données/logs | Corriger la confusion `/var/ww` et `/var/www` |
| Connexion LDAP seule en échec | Serveur AD, DN de liaison, état actif et filtres | Conserver l’accès local de secours |

```bash
systemctl status apache2 mariadb
ls -ld /etc/glpi /var/lib/glpi /var/log/glpi
```

Après un changement, refaire le même test depuis le même client. Pour LDAP, distinguer réussite d’authentification et bons droits : les règles d’habilitation et l’entité active se contrôlent séparément.

- [Installation détaillée](../tp/glpi/module-01/corrections.md)
- [Authentification et habilitations](../modules/07-administration-glpi/module-02-authentification-ad-habilitations.md)
