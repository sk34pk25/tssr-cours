# Tutoriel — Configurer FortiClient VPN pour le laboratoire ENI

## Source et périmètre

Cette procédure reprend le support ENI daté 2026-01. Télécharger le client uniquement depuis le site officiel Fortinet ou la source fournie par l’établissement.

## Configuration

1. Installer **FortiClient VPN**.
2. Accepter les conditions puis choisir **Configurer le VPN**.
3. Créer une connexion SSL-VPN avec un nom explicite.
4. Saisir la passerelle `vpnssl.campus-eni.fr`.
5. Activer le port personnalisé `10443`.
6. Enregistrer.
7. Se connecter avec le compte AD apprenant attribué par l’établissement.
8. Valider le certificat uniquement si son nom, son émetteur et sa période de validité sont cohérents.
9. Ouvrir ensuite la session distante vers la machine de salle attribuée.

## Vérification

- L’état du client indique que le tunnel est connecté.
- La route vers le réseau de salle est présente.
- La machine attribuée répond au service attendu.

## Déconnexion

Fermer la session distante, puis utiliser l’icône FortiClient de la zone de notification et choisir **Disconnect**. Ne jamais stocker le mot de passe dans un script ou un fichier partagé.
