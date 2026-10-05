# Énoncé — Module 06 — Gestion des paquets logiciels

!!! warning "Laboratoire"
    Les dépôts, versions et paquets cités sont liés au TP. Relever la distribution et les sources avant toute modification ; ne pas mélanger de branches Debian.

**Sources originales (A) :** énoncé M06TP01 et support M06. **Énoncé (B) :** reformulation structurée.

1. Avec l'interface graphique, examiner les dépôts configurés, désactiver le média CD-ROM seulement s'il gêne le laboratoire et lire `/etc/apt/sources.list`.
2. Distinguer les lignes `deb`, `deb-src` et les suites de mise à jour ; désactiver les sources demandées par le TP.
3. Actualiser les index, relever les mises à jour proposées et installer les logiciels de laboratoire demandés ; comparer `apt show` et `dpkg -L`.
4. Sur le système sans interface graphique, déclarer seulement les dépôts Bookworm prescrits, contrôler les mises à jour et installer les paquets demandés.
5. Configurer VIM selon le scénario du TP et vérifier le résultat sans imposer la configuration à un autre contexte.
