# Fiche de révision — Module 02 — Authentification AD — Habilitations

Relier GLPI à l’annuaire et vérifier les droits réellement obtenus dans chaque entité.

## Repères du laboratoire

AD DS et GLPI doivent fonctionner avant l’atelier. Préparer les OU, les groupes, les lieux et un accès local de secours avant de tester LDAP.

## Contrôles à savoir réaliser

| Contrôle | Preuve à relever |
| --- | --- |
| Liaison | Vérifier la connexion LDAP avec l’identité de liaison prévue, le DN de base et le filtre, sans relever le secret dans le compte rendu. |
| Règles | Suivre utilisateur, groupe AD, critère `MemberOf`, puis actions sur le profil et l’entité. |
| Comptes de test | Comparer Observer, Super-Admin, Technician, Hotliner et Self-Service avec les cas du TP. Contrôler la portée et l’interface. |

## Retenir puis vérifier

**L’authentification établit l’identité. Les habilitations associent profil, entité et éventuelle récursivité.**

**1. Quel lien unit un profil et une entité ?**

??? success "Réponse expliquée"
    L’habilitation indique les droits du profil et le périmètre où ils s’appliquent. La récursivité peut étendre ce périmètre aux sous-entités.

**2. Comment isoler un échec de droits après une connexion LDAP réussie ?**

??? success "Réponse expliquée"
    Vérifier la présence du groupe dans le résultat LDAP, la règle correspondante et l’entité active avec le compte concerné.

**3. Pourquoi garder un compte local de secours ?**

??? success "Réponse expliquée"
    Il permet de vérifier et de corriger la liaison même si l’annuaire ou ses règles empêchent la connexion.

## Pour pratiquer

- [Cours complet](../../modules/07-administration-glpi/module-02-authentification-ad-habilitations.md)
- [Travaux pratiques](../../tp/glpi/module-02/index.md)
- [Dépannage de l’accès à GLPI](../../troubleshooting/glpi-inaccessible.md)
- [Mémo GLPI et SQL](../../memo/glpi-sql.md)
