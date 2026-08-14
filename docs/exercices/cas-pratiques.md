# Cas pratiques transversaux

## 1. Poste avec adresse APIPA — débutant

Un poste reçoit `169.254.22.8/16`. Établir la séquence de diagnostic.

??? success "Correction"
    Vérifier le lien, l’état de l’interface, la présence du client DHCP, la joignabilité du serveur ou du relais, puis renouveler le bail après correction. Ne pas attribuer immédiatement une adresse statique sans comprendre la panne DHCP.

## 2. Partage Windows refusé — intermédiaire

Un utilisateur est autorisé dans le partage mais reçoit « Accès refusé ».

??? success "Correction"
    Contrôler l’identité réellement utilisée, les groupes, les permissions de partage et l’ACL NTFS. Le droit effectif est la combinaison la plus restrictive entre partage et NTFS, avec prise en compte des refus explicites.

## 3. Service web Linux indisponible — intermédiaire

Le processus démarre puis s’arrête immédiatement.

??? success "Correction"
    Lire `systemctl status`, puis `journalctl -u`. Vérifier la syntaxe, le port occupé, les droits et les dépendances. Corriger une cause, relancer et tester le service depuis un client.

## 4. Import GLPI incomplet — avancé

Data Injection termine sans erreur mais plusieurs colonnes restent vides.

??? success "Correction"
    Vérifier encodage, séparateur, ligne d’en-tête, correspondances, champs obligatoires, règles de transformation et rapport d’import. Tester d’abord sur un échantillon sauvegardé.
