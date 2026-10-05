# Correction — Module 06 — Gestion des paquets logiciels

**Sources originales (A) :** solution M06TP01 et support M06. **Correction (B) :** contrôles reformulés.

`deb` désigne un dépôt de binaires et `deb-src` un dépôt de sources. Les lignes `*-updates` et de sécurité ont des rôles distincts. Après modification des dépôts, `apt update` actualise uniquement les index : le nombre de mises à jour dépend de l'écart entre le média d'installation et la date de réalisation.

Avant une installation, rechercher le paquet précis et relire les dépendances. `apt show` fournit les métadonnées ; `dpkg -L` liste les fichiers du paquet installé. Sur le poste graphique, l'outil Logiciels demande une élévation de privilèges ; GParted est seulement lancé puis quitté dans le TP.

La configuration VIM est contrôlée dans les fichiers mentionnés par la solution, en vérifiant le nom du répertoire de version présent sur le système. Toute modification est limitée au laboratoire.
