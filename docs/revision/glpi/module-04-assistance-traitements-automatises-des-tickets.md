# Fiche de révision — Module 04 — Assistance — Traitements automatisés des tickets

Construire des formulaires et des règles de tickets, puis vérifier les délais et les affectations.

## Repères du laboratoire

GLPI doit fonctionner avec les utilisateurs, groupes, catégories et lieux nécessaires. Préparer les calendriers et les gabarits avant de relier les règles et les niveaux de service.

## Contrôles à savoir réaliser

| Contrôle | Preuve à relever |
| --- | --- |
| Formulaires | Vérifier les champs obligatoires, masqués et prédéfinis des incidents et demandes depuis le compte de test. |
| Critères | Tester un cas attendu et un cas d’exclusion pour chaque règle. Vérifier le regroupement de la catégorie et du type. |
| Temps et affectation | Lire le calendrier, les délais de prise en charge et de résolution, le groupe et l’historique des escalades. |

## Retenir puis vérifier

**Un gabarit règle la saisie. Une règle métier associe des critères et des actions. Le calendrier et le SLA déterminent les échéances.**

**1. Pourquoi le type « incident » doit-il être combiné avec la catégorie serveur ?**

??? success "Réponse expliquée"
    Un OU simple peut déclencher la règle pour une demande serveur ou un incident d’une autre catégorie. Tester les deux cas d’exclusion.

**2. Quelle différence entre prise en charge et résolution ?**

??? success "Réponse expliquée"
    Les délais mesurent deux étapes du traitement. Relever chaque échéance avec le calendrier lié au niveau de service.

**3. Quel horaire du vendredi contrôler dans le calendrier serveur ?**

??? success "Réponse expliquée"
    La fin à 17 h 30 donnée par l’énoncé et la capture de correction. Le texte du corrigé généralise une autre plage.

## Pour pratiquer

- [Cours complet](../../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets.md)
- [Travaux pratiques](../../tp/glpi/module-04/index.md)
- [Mémo GLPI et SQL](../../memo/glpi-sql.md)
