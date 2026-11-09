# Fiche de révision — Module 01 — Concept, enjeux et définition

## À savoir refaire

- Citer les trois objectifs : pérennité, récupération après incident, disponibilité.
- Énoncer la règle 3-2-1, original compris.
- Distinguer PCA et PRA, et la note « toute l’entreprise ».
- Nommer les sept rubriques minimales du plan de sauvegarde.
- Dire pourquoi un réplica Veeam ne se démarre pas à la main.
- Importer la maquette sans réimporter SRV-AD1 ni SRV-FIC1.

## Se tester

1. Que compte la règle dans ses trois copies ?
2. Le PRA contient-il le repli physique des utilisateurs ?
3. Quelle commande confirme l’intégration du NAS à l’annuaire ?

??? success "Réponses"

    1. Les données d’origine et au minimum deux sauvegardes.
    2. Non. Le repli des personnes est dans le PCA. Le PRA est le volet système d’information.
    3. `sudo wbinfo -t`.

[Cours](../../modules/16-sauvegarde-et-restauration/module-01-concept-enjeux-et-definition.md) · [TP](../../tp/16-sauvegarde-et-restauration/module-01/index.md)
