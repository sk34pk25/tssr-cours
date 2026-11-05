# Énoncés — Module 07 — DNS autoritaire sur zone

Les consignes suivent les scénarios des sources. Les valeurs historiques et les particularités de version sont expliquées dans le cours et les corrigés.

## TP 1 — Zone directe et zones inverses

### Configurer un service DNS faisant autorité

Durée estimée

2 heures

### Objectifs

- Configurer un service DNS hébergeur permettant la résolution directe et inverse des zones dont il assure la gestion.

### Prérequis

- Les ateliers précédents doivent être fonctionnels

### Notes

- Pour toutes les configurations réseau, vous remplacerez num\_stag par un chiffre entre 1 et 30, par exemple 10.

### Etape 1 - Configurer le serveur DEB-S2 pour qu’il héberge une zone directe

- Modifier la configuration de Bind9 mise en place à l’atelier 5 afin que votre serveur héberge la zone tssr.example.
- Dans votre zone, créer des enregistrements d’hôtes pour : DEB-S1, DEB-S2 et RouTux (pour ses adresses sur LAN Clients et LAN Serveurs uniquement).
- Créer un enregistrement d’hôte pour votre appliance pfSense en référençant son adresse sur le réseau VMNet2.
- Créer un enregistrement d’hôte pour NS1 pointant vers l’adresse de DEB-S2.
- Créer un alias pour test via NS1
- Avant de relancer le service faire un contrôle syntaxique du fichier de zone. En l’absence d’erreur, recharger la configuration de Bind9 au moyen de la commande

```text
# rndc reload
```

### Etape 2 - Tests de résolution depuis le poste client Debian

Pour tous les tests de résolution demandés ci-dessous, vous utiliserez la commande dig depuis le poste client Cli-db-10.

- Faire un test de résolution successivement des enregistrements SOA puis NS de la zone. Ces enregistrements sont-ils corrects ?
- Faire les tests de résolution des différents enregistrements créés précédemment.
- Faire un test de connectivité avec les serveurs DEB-S1 et DEB-S2, d’abord avec le nom FQDN puis uniquement avec le nom d’hôte.
- Si besoin, adapter la configuration DHCP pour permettre la résolution des enregistrements de votre domaine sans avoir à préciser le nom de domaine.

### Etape 3 - Configuration de zones inverses

- Modifier la configuration du service DNS de DEB-S2 afin qu’il prenne en charge la résolution inverse pour les réseaux LAN Clients et LAN Serveurs.
- Pour LAN Clients, y inscrire un enregistrement inverse pour RouTux.
- Pour LAN Serveurs, les adresses IP de DEB-S1, DEB-S2 et RouTux devront être résolues.
- Faire les tests de résolution depuis Cli-db-10.

## TP 2 — Copie secondaire et redondance DNS

### Configurer un service DNS secondaire

Durée estimée

2 heures

### Objectifs

- Configurer un service DNS secondaire

### Prérequis

- Les ateliers précédents doivent être fonctionnels.

### Notes

- Pour toutes les configurations réseau, vous remplacerez num\_stag par un chiffre entre 1 et 30, par exemple 10.

### Etape 1 - Autoriser le transfert des zones hébergées pour DEB-S1 uniquement

- Depuis le client Cli-db-10, requêter le service Bind9 de DEB-S2 et lui faire une demande de transfert de zone de votre zone directe. Pour ce faire, exécuter la commande suivante : \# dig axfr tssr.example

Le transfert a-t-il abouti ?

- Modifier la configuration de votre zone directe afin de n’autoriser son transfert que pour l’hôte DEB-S1.
- Au moyen de la commande dig effectuée précédemment, vérifier la bonne prise en compte de la restriction de transfert. Cette commande devra être réalisée successivement depuis Cli-db-10 et DEB-S1.

### Etape 2 - Ajout d’un service DNS secondaire sur DEB-S1

- Sur DEB-S2, modifier votre zone directe afin que DEB-S1 soit référencé comme serveur DNS faisant autorité pour cette zone (en complément de DEB-S2).
- Installer le service DNS de Bind9 sur DEB-S1.
- Configurer le service DNS de DEB-S1 afin qu’il héberge une copie de votre zone tssr.example à partir de DEB-S2.

- Avant de relancer le service, faire un contrôle syntaxique de la configuration. En l’absence d’erreur, recharger la configuration de Bind9.

### Etape 3 - Test de résolution de noms depuis les clients

- Faire un test de résolution des enregistrements SOA et NS de votre domaine en interrogeant spécifiquement le serveur DEB-S1.
- Sur DEB-S2, arrêter le service Bind9. Depuis vos clients, vérifier la connectivité vers les serveurs DEB-S1 et DEB-S2 en utilisant leurs FDQN. La résolution a-t-elle fonctionné ?
- Sur DEB-S2, redémarrer le service Bind9

### Etape 4 - Test de résolution de noms depuis les clients

- Sur DEB-S2, activer le suivi des requêtes DNS dans les logs avec la commande rndc.
- Suivre ensuite les logs relatifs au démon named.
- Sur DEB-S2, ajouter un enregistrement dans la zone directe et recharger la zone.
- Analyser les requêtes de transfert entre DEB-S2 et DEB-S1. Quel est le type de transfert ?
- Sur DEB-S2, arrêter le service Bind9. Depuis vos clients, vérifier la connectivité vers l’extérieur.

Sur DEB-S1, définir les options de configuration Bind9 pour :

- Désactiver DNSSEC.
- Autoriser les requêtes provenant des réseaux LAN Clients et LAN Serveurs.
- Résoudre des requêtes DNS vers les domaines extérieurs à votre infrastructure via le redirecteur FAI (66.55.44.33 ou 9.9.9.9).

Pour quelles requêtes DNS la redondance n’est-elle pas assurée par DEB-S1 ?

Que faudrait-il mettre en place pour résoudre la problématique ?

- Sur DEB-S2, redémarrer le service Bind9.


[Corrigés commentés](corrections.md) · [Cours du module](../../../modules/15-services-reseau-en-environnement-linux/module-07-dns-autoritaire-sur-zone.md).
