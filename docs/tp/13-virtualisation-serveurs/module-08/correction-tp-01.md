# Correction documentaire — Atelier n°6 : modèles OVF

Restitution de la solution de six pages, comparée à l’énoncé de deux pages. Les
captures décrivent un laboratoire historique ; aucune réussite actuelle n’est déduite.

## Export

Les pages 2 et 3 ouvrent l’action Exporter de la VM source. La sélection inclut
descripteur `.ovf`, manifeste `.mf` et disque `.vmdk`, avec `.nvram` exclu. La capture
du dossier de téléchargement montre les trois fichiers attendus. Leurs noms et
emplacements sont neutralisés dans l’adaptation.

## Import

Les pages 3 et 4 ouvrent Créer/Enregistrer sur le second ESXi, choisissent le
déploiement OVF/OVA et sélectionnent le descripteur OVF et le disque VMDK. La banque
de destination est celle du stockage iSCSI partagé. La page 5 illustre le mappage
vers le groupe de ports des VM, le provisionnement mince et la mise sous tension
automatique cochée. Ces choix appartiennent à cette solution.

!!! warning "NEEDS_REVIEW — image disque requise manquante"

    Le récapitulatif de la page 5 affiche cette erreur. Le texte demande de
    l’ignorer, mais n’en établit pas la cause ni l’innocuité. Cette demande est
    conservée comme anomalie documentaire ; elle ne justifie pas un contournement
    général ni une affirmation d’intégrité de l’import.

La capture des tâches présente l’avancement de l’import. La page 6 montre la VM
dans l’inventaire et demande son démarrage pour contrôler son bon fonctionnement.
Ces éléments ne constituent pas une preuve de test complet du système invité.

## Périmètre

L’énoncé cite l’atelier n°3 comme prérequis explicite ; sa destination iSCSI suppose
le stockage de l’atelier n°5. Aucun fichier d’export réel n’est joint aux PDF.
Aucun arrêt, Sysprep, modification d’identité, commande ou dépannage externe n’est
ajouté à cette correction. L’erreur reste à revoir avant exécution.

[Énoncé](tp-01.md) · [Retour aux ateliers](index.md)

Provenance A : solution OVF M08 et énoncé ; B : restitution web fidèle et neutralisée.
