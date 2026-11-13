# Module 07 — Connecter les collaborateurs pour le télétravail

Semaine **2/2**. Support de cours : **Inexistant**.

[Énoncé](../../tp/17-reseau-et-securite/module-07/enonces.md) · [Correction](../../tp/17-reseau-et-securite/module-07/corrections.md) · [Révision](../../revision/17-reseau-et-securite/module-07.md) · [Kahoot préparé](../../kahoot/17-reseau-et-securite-module-07.md)

=== "Cours Original"

    Connecter les
    collaborateurs pour le
    télétravail
     TD8

     Avant de démarrer ce TP.

                Durée estimée

                  4 heures

    Énoncé

    Objectifs:

    Mise en place

    ![TP8, énoncé, page 1](../../assets/images/reseau-et-securite/tp8/enonce-p01-01.png)

    ![TP8, énoncé, page 1](../../assets/images/reseau-et-securite/tp8/enonce-p01-02.png)

    Texte visible sur la capture :

    ```text
    Routeur formafeur 88.66.44.1
    VMnet 10 LAN CLT
    VMnet11 LAN SRV
    VMnet12 LAN DMZ
    ```

    Sur SRV-CD
    https://wireguard.how/client/debian/

    Solution
    Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les
    ressources à télécharger.

=== "Cours Optimisé IA"

    Le support de cours est **Inexistant**. Le fichier d’installation client n’est pas publié.

    1. Vérifier le ping des adresses WAN entre binômes. Les CEL sortent le client Windows sur le réseau bridge, reprennent l’adresse de CLT-NAT et éteignent CLT-NAT.
    2. Sur pfSense, si le LDAP n’est plus là : autorité de certification, certificat serveur, authentification LDAP, serveur OpenVPN, client OpenVPN.
    3. Échanger le fichier d’installation et tester chacun son tour.
    4. Paramétrer WireGuard et le pair CLT-NAT. Renouveler les clés, activer le routage, puis joindre le serveur web en SSH. Les commandes citées sont sur https://wireguard.how/client/debian/.
