# Énoncé — TP5 — Sécuriser le surf Internet

Titre : « SÉCURISER LE SURF INTERNET », libellé TD5. Durée : 3 heures.

Avant de démarrer, l’énoncé demande de regarder des vidéos de filtrage web et de portail captif sur pfSense. Ces vidéos ne sont pas dans le dossier : **Inexistant**.

Objectif : mettre en place un proxy transparent avec filtrage web sur pfSense.

1. Squid, Services > Squid Proxy Server. Onglet General : activer, interface LAN, port 3128, cocher « Transparent HTTP Proxy ». Onglet Local Cache : taille 100, ou plus, puis Save sur chaque onglet.
2. Règle de pare-feu Firewall > Rules > LAN : Pass, interface LAN, TCP, source LAN net, destination any, port de destination HTTP, redirection vers `127.0.0.1` port 3128.
3. SquidGuard, Services > Proxy Filter. General settings : activer, choisir une liste noire. Common ACL : une règle qui bloque les sites pour adultes. Intégrer SquidGuard : Services > Squid Proxy Server > General, Redirect Program `/usr/local/bin/squidGuard`.
4. Tester depuis le client Windows un site autorisé et un site bloqué. Logs : Status > Proxy Filter.

Bonus, portail captif, en six étapes écrites :

1. Services > Captive Portal, Add, nom d’exemple « LAN_Portal », activer, interface LAN.
2. Durée de session exemple 60 minutes, réauthentifier les utilisateurs connectés chaque minute, idle timeout exemple 15 minutes, activer la fenêtre de déconnexion.
3. Personnaliser le HTML de la page, ajouter un logo et un message de bienvenue. Le logo n’est pas fourni : **Inexistant**.
4. Authentification exemple « Local User Manager », puis quelques utilisateurs de test dans System > User Manager.
5. Firewall > Rules > LAN : une règle doit permettre le trafic vers le portail.
6. Depuis le client Linux du LAN, ouvrir un navigateur, vérifier le portail, s’authentifier, vérifier Internet.

Un PDF commenté est annoncé dans les ressources à télécharger : **Inexistant**.
