# Module 03 — Configuration du NAT

Semaine **1/2**. Énoncé 2 h, libellé imprimé TD2. Correction « TD3 du Module 1 », 2 h.

[Énoncé](../../tp/17-reseau-et-securite/module-03/enonces.md) · [Correction](../../tp/17-reseau-et-securite/module-03/corrections.md) · [Révision](../../revision/17-reseau-et-securite/module-03.md) · [Kahoot préparé](../../kahoot/17-reseau-et-securite-module-03.md)

Support de cours : **Inexistant**. Le dossier ne contient que l’énoncé et la correction.

=== "Cours Original"

    Titre : « Configuration du NAT Pfsense ». Le PDF imprime le libellé TD2. Durée estimée : 2 heures. La ligne « Avant de démarrer ce TP » ne donne pas de prérequis supplémentaire.

    Objectif : comprendre la gestion des accès réseau et l’importance de la redirection NAT.

    - Connexion au routeur formateur : `http://192.168.150.1`, identifiant `stag`, mot de passe `P@ssw0rd`.
    - Ajouter les réseaux privés avec la passerelle de l’adresse IP WAN, puis tester Internet depuis les réseaux.
    - Sur pfSense : mettre les règles de pare-feu du TP1 sur la carte WAN. L’énoncé écrit « par-feu ».
    - Ajouter une redirection NAT du protocole RDP vers l’IP de SRV-MBR.
    - Sur SRV-MBR : activer le bureau à distance avec le groupe GG-IT.
    - Client Windows 11 : en binôme, tester le bureau à distance avec des utilisateurs du groupe GG-IT. L’énoncé écrit « Utilser ».

    Un PDF commenté est annoncé dans les ressources à télécharger. Il n’est pas dans le dossier : **Inexistant**.

=== "Cours Optimisé IA"

    1. Avoir fini les TP précédents, comme le dit la correction. L’énoncé ne l’écrit pas.
    2. Ajouter sur le routeur formateur les réseaux privés, avec la passerelle WAN. L’énoncé écrit `http://192.168.150.1` et le mot de passe `P@ssw0rd`. La correction écrit `http://192.168.150.100` et le mot de passe `stag`. Les deux couples sont ceux des documents.
    3. Tester Internet depuis les réseaux privés.
    4. Sur pfSense, règles WAN issues du TP1. La correction ajoute un alias de SRV-MBR et redirige le RDP vers cet alias. L’énoncé redirige vers l’IP du serveur.
    5. Activer le bureau à distance pour GG-IT.
    6. Tester depuis le binôme ou, selon la correction, depuis `CLT-NAT.ovf`.

    Le fichier `CLT-NAT.ovf` est **Inexistant** sur le site.
