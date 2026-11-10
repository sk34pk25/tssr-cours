# Quiz — Sauvegarde et Restauration

Dix questions courtes. Les réponses commentées reprennent le support. Ce n’est pas un corrigé de TP : les corrections de TP sont **Inexistant**.

1. Une sauvegarde à froid laisse-t-elle les données accessibles ?
2. Quel plan contient les licences des applications ?
3. Pourquoi une incrémentale restaure-t-elle plus difficilement qu’une complète ?
4. Le fils, le père et le grand-père correspondent à quelles périodes ?
5. Un NAS du support identifie-t-il des blocs ou des fichiers ?
6. Quelle famille de bande le support dit-il au format ouvert ?
7. Que ne faut-il pas faire avec un réplica Veeam ?
8. Quel job Backup Exec enchaîne complète puis incrémentale ?
9. Le RAID 0 tolère-t-il un disque en panne ?
10. Le bonus du TP RAID utilise-t-il le gestionnaire de disque seul ?

??? success "Réponses"

    1. Non. L’utilisateur n’y a pas accès pendant la copie, et le service est interrompu.
    2. Le PRA. Le PCA couvre en plus la communication, le repli et la crise.
    3. Il faut la complète et toutes les incrémentales. La complète se suffit.
    4. Quotidien, hebdomadaire, mensuel.
    5. Des fichiers, avec un offset d’octet. Les blocs sont le propos du SAN.
    6. LTO, Linear Tape-Open.
    7. Le démarrer à la main. La console Veeam sert au calcul de RTO.
    8. `srv-ad1 job`. Le job `srv-fic1 job` est une complète.
    9. Non. Le tableau indique « Pas de protection (0) ».
    10. Non. Il passe par les pools de stockage du gestionnaire de serveur.

[Cours](../modules/16-sauvegarde-et-restauration/index.md) · [Révisions](../revision/16-sauvegarde-et-restauration/index.md)
