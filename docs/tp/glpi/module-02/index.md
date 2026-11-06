# TP — Module 02 — Authentification AD — Habilitations

## Objectif du laboratoire

Relier GLPI à l’annuaire et vérifier les droits réellement obtenus dans chaque entité.

## Préparer et réaliser l’atelier

AD DS et GLPI doivent fonctionner avant l’atelier. Préparer les OU, les groupes, les lieux et un accès local de secours avant de tester LDAP.

1. [Lire l’énoncé complet](enonces.md).
2. Réaliser les étapes dans le laboratoire et relever les preuves.
3. [Comparer avec la correction](corrections.md), puis reprendre la [fiche de révision](../../../revision/glpi/module-02-authentification-ad-habilitations.md).

| Contrôle | Preuve à relever |
| --- | --- |
| Liaison | Vérifier la connexion LDAP avec l’identité de liaison prévue, le DN de base et le filtre, sans relever le secret dans le compte rendu. |
| Règles | Suivre utilisateur, groupe AD, critère `MemberOf`, puis actions sur le profil et l’entité. |
| Comptes de test | Comparer Observer, Super-Admin, Technician, Hotliner et Self-Service avec les cas du TP. Contrôler la portée et l’interface. |

## Liens

- [Cours du module](../../../modules/07-administration-glpi/module-02-authentification-ad-habilitations.md)
- [Tous les ateliers GLPI](../index.md)
- [Dépannage de l’accès à GLPI](../../../troubleshooting/glpi-inaccessible.md)
- [Mémo GLPI et SQL](../../../memo/glpi-sql.md)
