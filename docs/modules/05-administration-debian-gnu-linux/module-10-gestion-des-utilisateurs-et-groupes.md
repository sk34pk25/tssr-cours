# Module 10 — Gestion des utilisateurs et groupes

**Séquence :** Administration Debian GNU/Linux  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 0 support(s) de cours, 0 énoncé(s), 0 correction(s)

!!! warning "Périmètre et versions"
    Les supports d’installation ciblent Debian 11 et certaines diapositives citent Debian 12. La version stable officielle en août 2026 est Debian 13 « trixie » ; les concepts restent valables, mais les écrans, dépôts et versions de paquets doivent être adaptés. Référence : [Versions Debian](https://www.debian.org/releases/).

## Objectifs et compétences

- Lire /etc/passwd, /etc/shadow, /etc/group et /etc/gshadow.
- Créer, modifier, verrouiller et supprimer un compte.
- Gérer groupe principal et groupes supplémentaires.
- Déléguer avec sudo et contrôler l’expiration des mots de passe.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Gestion des utilisateurs et groupes » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Identité locale et groupes

```mermaid
flowchart LR
    U["Compte<br/>/etc/passwd"] --> X["Secret et expiration<br/>/etc/shadow"]
    U --> G["Groupe principal<br/>GID"]
    U --> S["Groupes secondaires<br/>/etc/group"]
    G --> T["Identité de la session<br/>id"]
    S --> T
```

<p class="tssr-caption">Ajouter un utilisateur à un groupe ne modifie pas toujours une session déjà ouverte : reconnecter la session ou utiliser un mécanisme contrôlé, puis vérifier avec <code>id</code>.</p>

## Concepts essentiels

Le support de cours autonome n’est pas présent dans l’archive. La progression ci-dessus et les travaux pratiques associés constituent la matière exploitable de ce module ; le portail ne complète pas artificiellement les parties absentes.

## Mise en pratique

- Aucun énoncé de TP distinct n’est fourni pour ce module.
- [Fiche de révision du module](../../revision/administration-linux/module-10-gestion-des-utilisateurs-et-groupes.md)

## Questions flash

1. Comment expliquer simplement « Gestion des utilisateurs et groupes » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Lire /etc/passwd, /etc/shadow, /etc/group et /etc/gshadow.
    - Créer, modifier, verrouiller et supprimer un compte.
    - Gérer groupe principal et groupes supplémentaires.
    - Déléguer avec sudo et contrôler l’expiration des mots de passe.

## Voir aussi

- [Présentation de la séquence](index.md)
