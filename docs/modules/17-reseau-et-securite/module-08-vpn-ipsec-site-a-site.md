# Module 08 — Connecter les collaborateurs site à site

Semaine **2/2**. Énoncé TD9, 4 h. Correction « TD9 du Module 2 », 2-3 h. VPN IPsec.

[Énoncé](../../tp/17-reseau-et-securite/module-08/enonces.md) · [Correction](../../tp/17-reseau-et-securite/module-08/corrections.md) · [Révision](../../revision/17-reseau-et-securite/module-08.md) · [Kahoot préparé](../../kahoot/17-reseau-et-securite-module-08.md)

Support de cours : **Inexistant**. Le dossier ne contient que l’énoncé et la correction.

=== "Cours Original"

    Titre : « Connecter les collaborateurs site à site », libellé TD9. Durée : 4 heures. La ligne « Avant de démarrer » est vide.

    Objectif : « Mise en place ».

    Texte : « Sur le routeur PFsense ». « En binôme pour salle ». « Mise en place d’un deuxième PFsense pour CEL ».

    Un PDF commenté est annoncé dans les ressources à télécharger : **Inexistant**.

=== "Cours Optimisé IA"

    L’énoncé demande un deuxième pfSense : en salle, en binôme ; à distance, un second pfSense à mettre en place. Il ne donne pas les phases IKE et ESP.

    La correction donne l’ordre, sans les paramètres chiffrés :

    1. Deux pfSense, chacun avec un LAN.
    2. Tunnel IPsec, phase 1 IKE des deux côtés, phase 2 ESP des deux côtés.
    3. Réseaux locaux et distants, règles de pare-feu, trafic IPsec autorisé, trafic entre LAN autorisé.
    4. Vérifier l’état du tunnel, la connectivité, les logs.

    Les algorithmes, clés et adresses de pairs ne figurent pas dans le texte extrait. Ils ne sont pas inventés.
