# Fiche de révision — Module 02 — Types de sauvegarde

## À savoir refaire

- Comparer chaud et froid.
- Dire ce que devient le bit d’archive après chaque méthode.
- Restaurer une complète, une différentielle et une incrémentale avec les bons jeux.
- Citer 21 bandes pour le GFS sur 5 jours.
- Enchaîner iSCSI, les deux jobs Backup Exec, la restauration d’un utilisateur et la duplication.

## Se tester

1. Quelle méthode laisse le bit à 1 ?
2. Quelle erreur d’agent le TP documente-t-il ?
3. Vers quel partage la duplication est-elle demandée ?

??? success "Réponses"

    1. La différentielle, aussi dite cumulative ou T1.
    2. `0xe00086ce`, avec copie du dossier Agents et `RAWSX64\setup.exe`.
    3. `backup-fic1`, après la complète et après l’incrémentale.

[Cours](../../modules/16-sauvegarde-et-restauration/module-02-types-de-sauvegarde.md) · [TP](../../tp/16-sauvegarde-et-restauration/module-02/index.md)
