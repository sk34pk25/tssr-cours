# Révision — Module 05, surf

Semaine 1/2. Support de cours : **Inexistant**.

## Squid

Port 3128. Interface LAN (énoncé) ou LANCLIENT (correction). Cache 100 ou 1024. Le mode transparent et la redirection HTTP vers 127.0.0.1:3128 sont dans l’énoncé.

## SquidGuard

Services > Proxy Filter. Liste noire. ACL : sites pour adultes, et dans la correction le jeu, l’astrologie et MyfirstBlackList. Un domaine imposé par la correction est interdit (exemple : site-interdit.example). Programme /usr/local/bin/squidGuard. Journaux : Status > Proxy Filter.

## Portail captif

Zone d’exemple LAN_Portal, session 60 minutes, idle timeout 15 minutes, utilisateurs locaux, test depuis le client Linux.

[Cours](../../modules/17-reseau-et-securite/module-05-securiser-le-surf-internet.md)
