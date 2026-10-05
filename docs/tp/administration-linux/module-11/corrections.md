# Correction — Module 11 — Gestion des permissions

**Sources originales (A) :** solution M11TP01 et support M11 Drive. **Correction (B) :** synthèse des contrôles.

La solution place l’arborescence dans `/srv`. Le répertoire `depot` reçoit le sticky bit afin que seul le propriétaire du fichier ou `root` puisse supprimer un fichier. Le répertoire `admin` retire les droits de `other`, autorise l’écriture du groupe, puis reçoit le groupe propriétaire `admin`. Le répertoire `documentation` active l’écriture du groupe et le bit SetGID, ce qui fait hériter les nouveaux fichiers du groupe du répertoire.

Contrôler avec `ls -ld` les droits, le groupe propriétaire et les bits spéciaux. `chmod` modifie les droits ; `chown` modifie propriétaire et groupe. La récursivité doit rester limitée au contenu explicitement concerné.
