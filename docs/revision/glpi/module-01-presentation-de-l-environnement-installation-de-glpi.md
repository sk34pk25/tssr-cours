# Révision — Module 01 — Présentation de l’environnement — Installation de GLPI

## Chaîne d’installation

Réseau/DNS → dépôts → Apache/PHP/MariaDB → base → code et dossiers → VirtualHost/DNS → assistantGLPI.

## À expliquer sans le support

Apache sert les pages, PHP interprète le code et MariaDB conserve les données. `glpidb/glpidata` est une incohérence de source à résoudre par un nom unique. Les données vont dans `/var/lib/glpi`, la configuration dans `/etc/glpi`, les journaux dans `/var/log/glpi`.

## Mise en situation

Reprendre le TP du module et expliquer la fonction de chaque objet ou commande. Avant chaque manipulation, annoncer le résultat attendu, puis montrer la preuve obtenue. Pour une erreur, indiquer quelle couche ou quel critère est en cause.

## Question rapide

La page Apache suffit-elle à prouver que GLPI fonctionne ?

??? success "Réponse"
    Non. Contrôler aussi PHP, la base et les permissions.

- [Cours](../../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi.md)
- [TP](../../tp/glpi/module-01/index.md)
