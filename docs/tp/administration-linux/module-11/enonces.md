# Énoncé — Module 11 — Gestion des permissions

**Sources originales (A) :** énoncé M11TP01 Drive. **Énoncé (B) :** reformulation structurée.

Créer sous `/srv` une arborescence de laboratoire pertinente au regard du FHS, puis tester les accès avec les différents comptes.

1. `public` : lecture et écriture pour tous les utilisateurs.
2. `depot` : lecture et écriture pour tous, mais suppression limitée au propriétaire du fichier.
3. `admin` : lecture et écriture limitées au groupe `admin`.
4. `documentation` : lecture pour tous, lecture/écriture pour le groupe `documentation`, et héritage de ce groupe pour les nouveaux fichiers.

!!! warning "Portée de laboratoire"
    Vérifier les droits effectifs pour chaque rôle de test. Ne pas appliquer une modification récursive sans avoir vérifié l’arborescence visée.
