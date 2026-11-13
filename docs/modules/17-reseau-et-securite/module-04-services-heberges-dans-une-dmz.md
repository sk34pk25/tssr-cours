# Module 04 — Services hébergés dans une DMZ

Semaine **1/2**. Énoncé 1 h, libellé « TD ». Correction « TD4 Module 1 », 2-3 h.

[Énoncé](../../tp/17-reseau-et-securite/module-04/enonces.md) · [Correction](../../tp/17-reseau-et-securite/module-04/corrections.md) · [Révision](../../revision/17-reseau-et-securite/module-04.md) · [Kahoot préparé](../../kahoot/17-reseau-et-securite-module-04.md)

Support de cours : **Inexistant**. Le dossier ne contient que l’énoncé et la correction.

=== "Cours Original"

    Titre : « Services hébergés dans une DMZ ». Le PDF imprime seulement « TD ». Durée estimée : 1 heure. Prérequis : avoir fait le TP2.

    Objectif de l’énoncé : « Gestion de la DMZ. »

    Installation du serveur web : récupérer le bundle `SRV-Apache.ova`. Mot de passe root `P@ssw0rd`. Attribuer l’adresse et la passerelle du schéma. Connecter sur le VMnet 12. Modifier `/etc/hosts` et `/etc/resolv.conf` avec les informations de l’infrastructure. L’énoncé écrit « bunble ». Les bundles, OVF et OVA cités ne sont pas dans le dossier. Fichiers : **Inexistant**.

    Faire l’enregistrement DNS sur SRV-CD.

    Sur SRV-DC : exécuter `D:/scripts/Script-TP3-AddDnsZone.ps1` et entrer la nouvelle adresse de SRV-Apache. Tester `https://extra.rouliere.eni`.

    Sur pfSense : alias d’URL pour `extra.rouliere.eni`, puis une redirection NAT depuis le WAN « pour accèder on site WEB ». La phrase suivante est écrite telle quelle : « A voir si fessable ». Attention aux règles de pare-feu.

    Depuis la machine hôte, tester le serveur web avec l’IP WAN. Depuis le client Windows, tester avec le FQDN.

    Un PDF commenté est annoncé dans les ressources à télécharger : **Inexistant** dans le dossier.

=== "Cours Optimisé IA"

    1. Partir du TP2, comme l’énoncé, ou des TP précédents, comme la correction.
    2. Déployer le serveur web en DMZ sur VMnet 12. Énoncé : `SRV-Apache.ova`. Correction : `SRV-WEB.ovf`. Mot de passe root écrit dans les deux : `P@ssw0rd`. Les deux fichiers sont **Inexistant**.
    3. Renseigner `/etc/hosts` et `/etc/resolv.conf`.
    4. Enregistrement DNS. Énoncé : `Script-TP3-AddDnsZone.ps1`. Correction : `AddDnsZone.ps1`. Les deux visent `https://extra.rouliere.eni`.
    5. Alias d’URL puis NAT WAN. L’énoncé laisse ouvert « A voir si fessable » et demande de surveiller les règles.
    6. Tester par l’IP WAN depuis l’hôte, et par le FQDN depuis le client Windows. La correction ajoute le test entre binômes ou depuis CLT-NAT.

    Le nom `extra.rouliere.eni` est celui imprimé dans les deux PDF. Il n’est pas modifié.
