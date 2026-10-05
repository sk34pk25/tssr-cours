# Énoncé — Module 09 — Préparation des systèmes de fichiers

!!! danger "Machine virtuelle et instantané requis"
    Le TP migre `/var`. Réaliser un snapshot de la VM avant toute modification et travailler seulement sur le volume de laboratoire attendu.

**Sources originales (A) :** énoncé M09TP01 Drive. **Énoncé (B) :** reformulation structurée sans ajout de procédure.

1. À partir du volume logique `lvvar`, créer un système de fichiers ext4 portant l’étiquette `VAR`.
2. Agrandir le système de fichiers de `lvhome` afin qu’il utilise la capacité de son volume logique.
3. Migrer `/var` vers le volume logique `lvvar` en préservant les données existantes : vérifier son utilisation, éviter les écritures pendant la copie, employer un montage temporaire et préserver les permissions.
4. Activer au démarrage le montage de `lvvar` sur `/var` dans la station de laboratoire.
