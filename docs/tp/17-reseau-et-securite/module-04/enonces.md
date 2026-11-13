# Énoncé — TP4 — Services hébergés dans une DMZ

Titre : « Services hébergés dans une DMZ ». Le PDF imprime seulement « TD ». Durée estimée : 1 heure. Prérequis : avoir fait le TP2.

Objectif de l’énoncé : « Gestion de la DMZ. »

Installation du serveur web : récupérer le bundle `SRV-Apache.ova`. Mot de passe root `P@ssw0rd`. Attribuer l’adresse et la passerelle du schéma. Connecter sur le VMnet 12. Modifier `/etc/hosts` et `/etc/resolv.conf` avec les informations de l’infrastructure. L’énoncé écrit « bunble ». Les bundles, OVF et OVA cités ne sont pas dans le dossier. Fichiers : **Inexistant**.

Faire l’enregistrement DNS sur SRV-CD.

Sur SRV-DC : exécuter `D:/scripts/Script-TP3-AddDnsZone.ps1` et entrer la nouvelle adresse de SRV-Apache. Tester `https://extra.rouliere.eni`.

Sur pfSense : alias d’URL pour `extra.rouliere.eni`, puis une redirection NAT depuis le WAN « pour accèder on site WEB ». La phrase suivante est écrite telle quelle : « A voir si fessable ». Attention aux règles de pare-feu.

Depuis la machine hôte, tester le serveur web avec l’IP WAN. Depuis le client Windows, tester avec le FQDN.

Un PDF commenté est annoncé dans les ressources à télécharger : **Inexistant** dans le dossier.
