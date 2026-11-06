# Réviser le module 01 · Les composantes du Cloud et de Microsoft 365

| Vérification | Réponse attendue |
| --- | --- |
| Comparer SaaS, PaaS et IaaS | Application prête, plateforme d’exécution, ressources d’infrastructure |
| Choisir un hébergement pour un cas | Lier disponibilité, confidentialité, connectivité, compétences, coût et reprise |
| Suivre l’envoi | MUA → MSA → MTA → relais/MTA de destination → MDA → boîte |
| Justifier TXT, MX et CNAME | Vérification, routage entrant et découverte de configuration |
| Prouver la bascule | DNS public, état d’intégrité, envoi, réception et retour possible |

**Entraînement.** Dessinez le flux d’un message externe qui arrive sur une ancienne plateforme. Indiquez le contrôle DNS et le contrôle de remise qui isolent la cause.

??? success "Correction commentée"
    Commencer par les enregistrements MX publics du domaine. Identifier ensuite le système qui a accepté le message dans la trace de transport et vérifier la remise dans la boîte. Un MX correct ne prouve pas la remise au destinataire.

## S’exercer

- [Cours et documents sources](../../modules/14-messagerie-cloud/module-01.md)
- [TP et corrections](../../tp/14-messagerie-cloud/module-01/index.md)
- [Kahoot associé](../../kahoot/14-messagerie-cloud-module-01.md)
