# Correction — TP5 — Sécuriser le surf Internet

Titre identique, « TD5 Module 1 ». Durée : 4 heures. Même prérequis de vidéos, absentes du dossier : **Inexistant**. Les TP précédents doivent être réalisés.

Objectif de la correction : proxy avec filtrage web et portail captif. Elle ne dit pas « transparent ».

Squid : activer, interface LANCLIENT (et non LAN), port 3128. La case « Transparent HTTP Proxy » n’est pas écrite. Cache disque : 1024, ou plus. ACL : autoriser le réseau client et interdire un domaine nommé dans la correction. Ce nom de domaine n’est pas repris. Attention aux règles de pare-feu. Télécharger le certificat CA-TP5 et l’installer sur les clients. Ce certificat n’est pas dans le dossier : **Inexistant**. Ajouter le proxy pfSense sur les postes clients.

SquidGuard : Services > Proxy Filter, activer, choisir une liste noire. Common ACL : bloquer les sites pour adultes, le jeu et l’astrologie. La correction écrit « gaming,astrology ». Créer une liste nommée MyfirstBlackList et y ajouter des domaines au choix. La correction écrit « blaklist ».

Tester depuis Windows un site normal et un site bloqué. Logs : Status > Proxy Filter.

Bonus : désactiver le proxy Squid et mettre un portail captif pour les clients. Rédiger une procédure et la remettre au formateur. Le détail en six étapes de l’énoncé n’est pas réécrit dans la correction.

Les pages du PDF qui ne portent que l’en-tête de formation sont des captures d’écran. Aucun texte n’y est extractible : elles ne sont pas recopiées, et aucun logo n’est repris. La correction annonce un PDF commenté, sans autre texte.
