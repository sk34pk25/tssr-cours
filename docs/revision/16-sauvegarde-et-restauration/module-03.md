# Fiche de révision — Module 03 — Gestion du stockage

## À savoir refaire

- Citer les cinq critères de choix d’un support.
- Placer le système de fichiers : machine pour le DAS, serveur pour le SAN, appareil pour le NAS.
- Lire LTO 9 : 18 To natifs, 45 To compressés.
- Distinguer sauvegarde locale et externalisée, avec le rappel 3-2-1.
- Installer Veeam 12 après Backup Exec et restaurer srv-fic1.

## Se tester

1. Le NAS du support parle-t-il en blocs ou en fichiers ?
2. Quel port Hyper-V le TP fait-il ouvrir ?
3. Quel dépôt le job `SVGD-FIC1` utilise-t-il ?

??? success "Réponses"

    1. En fichiers : CIFS, NFS ou Samba. Le SAN identifie des blocs.
    2. Le port 445, Accès réseau (NP-in).
    3. Default Backup Repository.

[Cours](../../modules/16-sauvegarde-et-restauration/module-03-gestion-du-stockage.md) · [TP](../../tp/16-sauvegarde-et-restauration/module-03/index.md)
