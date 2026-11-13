# Module 07 — Connecter les collaborateurs pour le télétravail

Semaine **2/2**. Énoncé TD8, 4 h. Correction « TD8 du Module 2 », 4 h. OpenVPN et WireGuard.

[Énoncé](../../tp/17-reseau-et-securite/module-07/enonces.md) · [Correction](../../tp/17-reseau-et-securite/module-07/corrections.md) · [Révision](../../revision/17-reseau-et-securite/module-07.md) · [Kahoot préparé](../../kahoot/17-reseau-et-securite-module-07.md)

Support de cours : **Inexistant**. Le dossier ne contient que l’énoncé et la correction.

=== "Cours Original"

    Titre : « Connecter les collaborateurs pour le télétravail », libellé TD8. Durée : 4 heures. La ligne « Avant de démarrer » ne précise rien.

    Objectif de l’énoncé : « Mise en place ».

    Le seul autre texte est, sous le titre « Sur SRV-CD », l’adresse `https://wireguard.how/client/debian/`.

    Un PDF commenté est annoncé dans les ressources à télécharger : **Inexistant**.

=== "Cours Optimisé IA"

    L’énoncé ne décrit pas les étapes : il donne seulement l’adresse `https://wireguard.how/client/debian/` sous le titre SRV-CD, et l’objectif « Mise en place ». Cette adresse est externe au cours. Elle est citée telle quelle.

    La correction est le document qui décrit OpenVPN puis WireGuard. Ordre écrit :

    1. Ping des WAN entre binômes, ou, à distance, client Windows sur le bridge avec l’adresse de CLT-NAT, CLT-NAT éteint.
    2. Si le LDAP n’est plus en place : autorité, certificat serveur, LDAP, serveur OpenVPN, client OpenVPN.
    3. Échanger le fichier d’installation et tester.
    4. WireGuard et pair CLT-NAT, renouvellement des clés, routage, SSH vers le serveur web.

    Les clics visibles seulement sur les captures ne sont pas retranscrits : **Inexistant** sous forme de texte. Les fichiers d’installation générés par pfSense ne sont pas dans le dossier : **Inexistant**.
