# Fiche de révision — Module 10 — Gestion des utilisateurs et groupes

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

Root possède l’UID 0. Les comptes système sont utilisés par des services, tandis que les comptes de connexion permettent l’usage interactif. Le support utilise les plages Debian usuelles, mais ses formules « humains > 1000 » et « 99 % des services » sont trop générales : l’allocation se règle dans la configuration et un premier compte peut précisément avoir l’UID 1000.

## Tableau de mémorisation

| Fichier | Champs essentiels du support | Rôle |
|---|---|---|
| `/etc/passwd` | login, marqueur de mot de passe, UID, GID, commentaire, home, shell | Définition des comptes |
| `/etc/shadow` | login, hash, dernier changement, âges, avertissement, inactivité, expiration, réservé | Authentification et vieillissement |
| `/etc/group` | nom, marqueur de mot de passe, GID, membres supplémentaires | Définition des groupes |
| `/etc/gshadow` | nom, mot de passe, administrateurs, membres | Informations protégées des groupes |

## Se tester sans regarder


1. Pourquoi préférer `usermod -aG` pour ajouter une appartenance ?
2. Verrouiller le mot de passe suffit-il toujours à désactiver un compte ?
3. Combien de champs comporte gshadow ?

??? success "Réponses"
    1. `-G` seul remplace la liste des groupes supplémentaires.
    2. Non ; expiration et autres méthodes d’authentification doivent être considérées.
    3. Quatre.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes.md) · [TP du parcours](../../tp/administration-linux/index.md).
