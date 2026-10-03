# Module 10 — Gestion des utilisateurs et groupes

**Sources originales (A) :** support et TP TSSR « Gérer les groupes et utilisateurs ».
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Distinguer UID, GID, groupe principal et groupes secondaires.
- Créer et contrôler un compte ou un groupe de laboratoire.
- Comprendre l’élévation de privilèges dans un cadre administré.

## Identités Unix

Sous Linux, un utilisateur est notamment défini par un UID et un groupe principal défini par un GID. Un utilisateur peut appartenir à des groupes supplémentaires. Ces informations déterminent les accès avec les droits sur les fichiers ; elles ne doivent pas être modifiées sans vérifier les dépendances du compte.

```bash
id utilisateur
getent passwd utilisateur
getent group groupe
```

## Méthode

Créer d’abord un groupe puis le compte de TP, contrôler les entrées créées et tester les groupes de la session après reconnexion. Toute élévation de privilèges doit être limitée à la tâche nécessaire et vérifiée.

## À retenir

La gestion des comptes relie identité, groupes et droits. La création n’est achevée qu’après contrôle des attributs et de l’accès réel.

## Vérification des acquis

1. Que signifie UID ?
2. Quelle commande affiche les groupes d’un utilisateur ?

??? success "Réponses"
    1. Identifiant utilisateur.
    2. `id utilisateur`.
