# TP 04 — Énoncé — Assistance — Traitements automatisés des tickets

## Préparer l’atelier

GLPI doit fonctionner avec les utilisateurs, groupes, catégories et lieux nécessaires. Préparer les calendriers et les gabarits avant de relier les règles et les niveaux de service.

Réaliser les consignes avant de consulter la correction. Conserver une preuve pour chaque résultat, puis comparer avec les critères de validation du module.

## Consignes complètes


### Assistance

### TP du Module 4 – Assistance – Traitements automatisés des tickets

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 4 et d’avoir réalisé les TP proposés.

### Objectifs

- Correctement utiliser les gabarits de ticket et les règles métiers pour les tickets.

### Prérequis

Application GLPI fonctionnelle.

### Principales tâches à réaliser

Gabarit de ticket.

- Créez un gabarit de ticket « Incident serveur » :

- Champs obligatoires :

- Titre.

- Catégorie.

- Type.

- Lieu.

- Description.

- Créez un gabarit de ticket « Incident Bureautique » :

- Champs obligatoires :

- Titre.

- Catégorie.

- Type.

- Lieu.

- Description.

- Éléments associés.

- Champs masqués :

- Urgence.

- Impact.

- Créez un gabarit de ticket « Demande Bureautique » :

- Champs obligatoires :

- Titre.

- Catégorie.

- Type.

- Lieu.

- Description.

- Champs masqués :

- Urgence.

- Impact.

### Catégorie de ticket

- Créez les catégories :

- Logiciel.

- Bureautique comme enfant de logiciel.

- Word comme enfant de bureautique.

- Excel comme enfant de Bureautique.

- Outlook comme enfant de bureautique.

- Infographiste comme enfant de logiciel.

- Serveur.

- Virtualisation comme enfant de serveur.

- Active Directory comme enfant de serveur.

- Matériel.

- Souris/clavier comme enfant de matériel.

- Ecran comme enfant de matériel.

- Lier les catégories à leurs gabarits :

- Catégorie « Bureautique », « Word » et « Excel » aux gabarits de ticket

« Incident bureautique » et « Demande bureautique ».

- Catégorie « Serveur », « Virtualisation » et « Active Directory » au gabarit

« Incident serveur ».

### Calendrier

- Tous les Incidents serveur seront traités sur un calendrier « cal serveur » en jours ouvrés (lundi à jeudi) 08 h00 – 18 h00 et 8 h00 – 17 h-30 le vendredi.

- Tous les autres incidents utiliseront un calendrier « cal utilisateurs » en jours ouvrés (lundi à vendredi) 9 h00 – 17 h30.

### Niveau de service

- Créez un niveau de service « SLA incident serveur » de l’entreprise Olympus avec les spécificités suivantes :

- Calendrier « cal serveur ».

- SLA « Incident serveur ».

- Le temps de prise en charge pour les incidents de type « serveur », « virtualisation » et « Active Directory » devra être inférieur à 1 h00.

- Le temps de résolution pour les incidents serveur devra être inférieur à 8 h.

- Si incident de toutes les catégories « serveur », « virtualisation » et « Active Directory » n’est pas prise en charge 10 minutes après la création du ticket, le groupe « GG_GLPI_Super-Admin » sera automatiquement positionné dessus ainsi que vous en tant qu’observateur sur le ticket.

- Si le ticket n’est pas résolu 4 h avant la date butoir de résolution, le ticket passera en priorité haute avec une escalade vers vous.

- Si le ticket n’est pas résolu 3 h avant la date butoir de résolution, le ticket passera en priorité très haute avec une escalade vers le directeur « Zeus ».

- Créez un niveau de service « SLA incident bureautique » de l’entreprise Olympus avec les spécificités suivantes :

- Avec le calendrier « cal utilisateurs ».

- Un SLA Temps de résolution de 2 jours.

- Un SLA Temps de prise en charge 4 h.

- Créez un niveau de service « SLA demande bureautique » de l’entreprise Olympus avec les spécificités suivantes :

- Avec le calendrier « cal utilisateurs ».

- Un SLA Temps de résolution de 10 jours.

- Un SLA Temps de prise en charge 4 h.

### Règles métier pour les tickets

- Créez une règle métier pour les tickets « règle SLA serveur ».

- Comme critères :

- Catégories « serveur », « virtualisation » et « Active Directory ».

- Type incident.

- Comme actions :

- SLAs Temps de résolution « incident serveur ».

- SLAs Temps de prise en charge « incident serveur ».

- Priorité moyenne.

- Groupe de technicien « GG_GLPI_Technician ».

- Créez une règle métier pour les tickets « règle SLA incident bureautique ».

- Comme critères :

- Catégories « Bureautique », « Word » et « Excel ».

- Type « incident ».

- Comme actions :

- SLAs Temps de résolution « incident bureautique ».

- SLAs Temps de prise en charge « incident bureautique ».

- Priorité basse.

- Groupe de technicien « GG_GLPI_hotliner ».

- Créez une règle métier pour les tickets « règle SLA demande bureautique ».

- Comme critères :

- Catégories « Bureautique », « Word » et « Excel ».

- Type « demande ».

- Comme actions :

- SLAs Temps de résolution « demande bureautique ».

- SLAs Temps de prise en charge « demande bureautique ».

- Priorité très basse.

- Groupe de technicien « GG_GLPI_hotliner ».


## Vérifier la logique des règles

Le texte source du corrigé préconise parfois OU entre les catégories et le type. Pour respecter la demande, le test doit exprimer `(une des catégories prévues) ET type attendu`. Lorsque l’interface ne permet pas ce regroupement, créer une règle par catégorie avec ET. Dans la reprise ci-dessous, les avertissements OU du corrigé sont remplacés par cette précision.

L’énoncé et la capture de correction fixent la fin du vendredi à 17h30. Pour l’escalade à 10 minutes de création, vérifier l’origine du délai utilisé : une durée relative à une échéance de prise en charge n’est pas automatiquement relative à la création.

| Ticket de test | Formulaire | Affectation/SLA |
|---|---|---|
| Incident Serveur/Virtualisation/AD | Incident serveur | Technician, priorité moyenne, prise en charge 1 h / résolution 8 h |
| Incident Bureautique/Word/Excel | Incident bureautique, élément associé obligatoire | Hotliner, priorité basse, 4 h/2 jours |
| Demande Bureautique/Word/Excel | Demande bureautique | Hotliner, priorité très basse, 4 h/10 jours |
| Demande Serveur | Ne doit pas déclencher la règle d’incident serveur | Cas d’exclusion |
| Incident Matériel | Ne doit pas recevoir le SLA serveur | Cas d’exclusion |

Conserver l’historique des changements de priorité, des acteurs et des échéances. Le directeur Zeus doit exister/importé avant l’escalade qui le vise. L’attribution comme technicien dans la capture exige les habilitations adéquates ; ne pas supposer que le profil Observer suffit.

## Livrables

| Contrôle | Preuve à relever |
| --- | --- |
| Formulaires | Vérifier les champs obligatoires, masqués et prédéfinis des incidents et demandes depuis le compte de test. |
| Critères | Tester un cas attendu et un cas d’exclusion pour chaque règle. Vérifier le regroupement de la catégorie et du type. |
| Temps et affectation | Lire le calendrier, les délais de prise en charge et de résolution, le groupe et l’historique des escalades. |

- [Correction expliquée](corrections.md)
- [Cours du module](../../../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets.md)

- [Fiche de révision](../../../revision/glpi/module-04-assistance-traitements-automatises-des-tickets.md)
