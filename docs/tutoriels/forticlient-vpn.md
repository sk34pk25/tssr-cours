# Tutoriel — Configurer FortiClient VPN pour le laboratoire

**Source : Systèmes clients Microsoft, procédure « Installation et configuration du client VPN » (V 2026-01).** Étapes reprises du document ; l’adresse de la passerelle et le domaine sont masqués (`.lab`).

## 1. Récupération et installation du client VPN

Le Web installeur est à télécharger directement depuis la section du site Fortinet > <https://www.fortinet.com/fr/support/product-downloads>. Le récupérer et l’installer.

## 2. Configuration du client VPN

Une fois installé, lancer l’application client VPN : **FortiClient VPN**.

Au lancement, cocher la case d’acceptation des conditions d’utilisation, puis cliquer sur : **Configurer le VPN**.

Renseigner les champs suivants :

- Le nom que vous souhaitez voir associé à cette connexion
- L’adresse de la passerelle : `vpnssl.exemple.lab`
- Cocher la case **Port personnalisé**
- Renseigner le numéro de port : `10443`

Et cliquer sur **Sauvegarder**.

## 3. Connexion au VPN

Pour vous connecter au VPN, renseignez les informations suivantes :

- Nom d’utilisateur : renseigner votre identifiant de compte AD du domaine (format `pnomAAAA` : p = première lettre de votre prénom, nom = votre nom de famille, AAAA = l’année de votre entrée en formation). Le format indiqué correspond à un compte apprenant (différent pour les formateurs).
- Mot de passe : indiquer le mot de passe de votre compte.

Et cliquer sur le bouton : **Connecter**. Cliquer sur « Yes » pour accepter le certificat.

Vous pouvez maintenant accéder via le bureau à distance à la machine de salle qui vous a été allouée. Quand vous n’aurez plus besoin d’accéder à cette machine de salle, pensez à vous déconnecter du VPN.

## 4. Déconnexion du VPN

- Dans la barre d’état système, cliquer sur le chevron.
- Localiser l’icône du client VPN Fortinet et faire un clic droit dessus.
- Cliquer sur **Disconnect**.
