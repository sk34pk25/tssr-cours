# Révision — Module 02 — Active Directory

## Suivre un compte jusqu’à sa ressource

DNS localise le domaine, LDAP interroge l’annuaire et Kerberos authentifie. Dans AGDLP, les comptes rejoignent un groupe global, puis un groupe de domaine local portant une permission.

## Exercice de rappel

Un utilisateur a Modification en NTFS et Lecture au partage. Quel accès SMB peut-il obtenir ?

??? success "Réponse"
    Lecture, si aucune autre entrée n’altère le résultat.

## Vérifier en laboratoire

Relever les comptes ordinateurs et comparer une ouverture de session locale avec une ouverture de session de domaine. Préciser le compte utilisé sur chaque machine.

- [Cours](../../modules/09-services-reseaux-en-environnement-microsoft/module-02-module-02.md)
- [Activités du module](../../tp/services-reseaux-microsoft/module-02/index.md)
