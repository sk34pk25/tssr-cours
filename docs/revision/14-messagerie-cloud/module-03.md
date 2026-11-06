# Réviser le module 03 · Administration Microsoft 365 — reprise documentaire du module 2

Les cinq PDF classés dans le dossier Module 3 sont des copies exactes des fichiers correspondants du Module 2. Chaque paire a la même empreinte SHA-256. Le titre interne indique « Module 02 – Administration Microsoft 365 ».

[Réviser les notions dans la fiche du module 02](module-02.md)

## Cas de révision — alias et boîte partagée

L’utilisateur apparaît dans le tenant, mais l’alias ne reçoit rien et la boîte partagée refuse l’envoi. Expliquer pourquoi ces contrôles sont indépendants.

??? success "Correction commentée"
    Contrôler la valeur de `proxyAddresses` et son export dans l’annuaire pour l’alias. Vérifier l’autorisation d’envoi attachée à la boîte pour l’autre problème. Ouvrir la boîte avec un droit de lecture ne prouve pas la délégation d’envoi.

## S’exercer

- [Cours et documents sources](../../modules/14-messagerie-cloud/module-03.md)
- [TP et corrections](../../tp/14-messagerie-cloud/module-03/index.md)
- [Kahoot associé](../../kahoot/14-messagerie-cloud-module-03.md)
