# Module 04 — Debian en mode maintenance

**Sources originales (A) :** support et TP TSSR « Debian en mode maintenance ».
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Reconnaître les cas qui justifient un démarrage de maintenance.
- Accéder à un environnement de réparation avec une méthode contrôlée.
- Préserver les données et consigner les actions effectuées.

## Quand intervenir

La source cite notamment une mise à jour empêchant le démarrage, la perte du mot de passe root ou la récupération de données. Le mode maintenance n’est pas une procédure courante : il donne des droits importants dans un état dégradé du système.

## Méthode de réparation

1. Décrire le symptôme et préserver les informations disponibles.
2. Démarrer par la voie de maintenance adaptée au contexte du TP, par exemple depuis GRUB ou le support d’installation.
3. Identifier le système et les partitions avant une modification.
4. Appliquer une action ciblée, puis contrôler son effet.
5. Redémarrer normalement et vérifier le service ou le compte concerné.

## Points d’attention

- Une action de réparation peut aggraver une perte de données si la cible n’est pas identifiée.
- Ne pas confondre mot de passe root, compte utilisateur et accès à une console de récupération.
- Documenter toute modification réalisée hors du fonctionnement normal.

## À retenir

Le mode maintenance est un environnement de diagnostic et de réparation : l’objectif est de revenir à un démarrage normal avec des actions minimales et vérifiables.

## Vérification des acquis

1. Citer un cas où le mode maintenance est utile.
2. Pourquoi identifier les partitions avant une réparation ?

??? success "Réponses"
    1. Par exemple après une mise à jour qui empêche le démarrage.
    2. Pour éviter de modifier ou de récupérer les mauvaises données.
