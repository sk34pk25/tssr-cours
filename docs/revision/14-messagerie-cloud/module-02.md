# Réviser le module 02 · Administration Microsoft 365

| Vérification | Réponse attendue |
| --- | --- |
| Distinguer identité, licence et rôle | Authentification, services consommés et droits administratifs |
| Choisir un groupe | Collaboration, diffusion, sécurité ou usage mixte |
| Tester une délégation | Lecture, Envoyer en tant que et Envoyer de la part de séparément |
| Trouver la cause d’une absence de synchronisation | UPN, OU, attribut, état du connecteur et erreur d’export |
| Tester un alias | proxyAddresses côté AD, synchronisation, réception effective |

**Entraînement.** Un utilisateur synchronisé apparaît dans le tenant. Son alias échoue et il peut ouvrir la boîte partagée sans pouvoir envoyer. Tracez les deux contrôles indépendants, proxyAddresses et délégation d’envoi.

??? success "Correction commentée"
    Vérifier l’adresse dans `proxyAddresses` côté AD, la synchronisation et la réception effective. Puis vérifier séparément le droit Envoyer en tant que ou Envoyer de la part de. L’accès à la boîte partagée prouve uniquement que son contenu peut être consulté.

## S’exercer

- [Cours et documents sources](../../modules/14-messagerie-cloud/module-02.md)
- [TP et corrections](../../tp/14-messagerie-cloud/module-02/index.md)
- [Kahoot associé](../../kahoot/14-messagerie-cloud-module-02.md)
