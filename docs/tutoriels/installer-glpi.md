# Installer GLPI dans le laboratoire Olympus

Cette procédure renvoie au scénario historique du cours : Debian 10, GLPI 9.5, MariaDB, Apache et PHP 7.3. Les versions fournies par le formateur doivent être cohérentes ; le support théorique mentionne aussi PHP 7.4.

1. Préparer VMNet18, pfSense, ADDS/DNS et le client Windows 10. Tester DNS et l’accès aux dépôts.
2. Installer Apache, MariaDB et les extensionsPHP ; contrôler leurs services.
3. Préparer une base dont le nom reste constant. Le support mélange `glpidb` et `glpidata` : la correction adopte `glpidata`.
4. Extraire l’archive GLPI dans `/var/www`, séparer configuration, données et journaux et attribuer les propriétaires.
5. Déclarer le VirtualHost, vérifier la configuration Apache puis créer les enregistrementsDNS.
6. Achever l’assistant depuis Windows 10 ; contrôler la connexionSQL et les prérequis ; changer les secrets initiaux et désactiver le fichier d’installation.

Les deux fichiersPHP complets, le VirtualHost et chaque commande sont donnés dans la [correction du TP 01](../tp/glpi/module-01/corrections.md). Ne pas remplacer des chemins à la volée : vérifier le dossier réellement créé et le nom de site activé. Le secret SQL est fourni par le formateur et ne doit pas figurer dans la documentation de l’exercice.

La validation réunit accèsDNS, fonctionnementweb/PHP, connexion à la bonne base et accès en écriture aux dossiers nécessaires. En casd’échec, suivre le [diagnostic GLPI](../troubleshooting/glpi-inaccessible.md).
