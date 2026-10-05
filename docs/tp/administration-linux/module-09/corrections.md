# Correction — Module 09 — Préparation des systèmes de fichiers

**Sources originales (A) :** solution M09TP01 et support M09 Drive. **Correction (B) :** synthèse des contrôles de la solution.

La solution crée le système de fichiers avec `mkfs.ext4` et affecte l’étiquette avec l’option `-L`; `blkid` vérifie ensuite le type, l’UUID et l’étiquette. `resize2fs` étend le système de fichiers après l’extension du LV effectuée au TP précédent ; si `lvextend -r` avait déjà été utilisé, il peut être déjà à sa taille maximale.

Pour migrer `/var`, la solution impose un snapshot, vérifie les fichiers utilisés avec `lsof`, passe en mode rescue pour limiter les écritures, monte le nouveau volume temporairement sous `/mnt`, puis copie en préservant propriétaires, groupes, permissions et récursivité. Après le montage de `lvvar` sur `/var`, contrôler le point de montage et les journaux sous `/var/log`.

L’entrée persistante est ajoutée dans `/etc/fstab` avec l’étiquette créée. Tester les montages définis par ce fichier avant le redémarrage ; ne pas conclure sur la seule modification du fichier.
