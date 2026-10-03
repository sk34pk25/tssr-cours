# Module 02 — Active Directory

**Séquence :** Services réseaux en environnement Microsoft
**Sources originales (A) :** support, fiches, énoncés et corrections TSSR du module 02.
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Expliquer le rôle d’Active Directory dans un domaine.
- Identifier les ressources, utilisateurs et groupes administrés.
- Comprendre le principe AGDLP pour l’accès aux ressources partagées.

## Un annuaire de domaine

Active Directory centralise l’authentification, les informations sur les utilisateurs et les ressources, ainsi que des paramètres d’ordinateurs et d’utilisateurs. La source cite notamment DNS, LDAP et Kerberos parmi les protocoles utilisés dans cet environnement.

## Accès aux ressources : AGDLP

Le principe AGDLP organise l’attribution des droits par groupes : les **comptes** appartiennent à des **groupes globaux**, placés dans des **groupes locaux de domaine**, auxquels sont affectées des **permissions**. Il évite l’attribution directe de droits dispersés sur chaque utilisateur.

## Méthode

Créer et contrôler les objets dans le contexte du TP ; affecter les droits au groupe prévu puis tester l’accès avec un compte de test. Ne pas conclure à partir de la seule présence d’un objet dans la console.

## Vérification des acquis

1. Quel est l’objectif d’AGDLP ?
2. Quel protocole de la source est associé à l’authentification ?

??? success "Réponses"
    1. Structurer l’attribution des permissions par groupes.
    2. Kerberos.
