# Module 04 — Assistance et traitements automatisés des tickets

Le ticket assure traçabilité, communication, répartition des tâches et détection des problèmes récurrents. Il sollicite le centre de services, contient des informations exploitables, passe par un cycle de vie et porte un type : **incident** ou **demande**.

## Choisir le flux de création

Trois flux sont étudiés : depuis GLPI, par courriel vers une boîte support reliée à un collecteur, ou par téléphone avec saisie par un technicien. Depuis GLPI, l’interface anonyme historique se trouve à `http(s)://<serveur>/front/helpdesk.html` ; elle ne nécessite pas de connexion, peut être désactivée, personnalisée enHTML/CSS et se rattache par défaut à l’entité racine.

L’interface simplifiée exige une authentification. Le demandeur remplit un formulaire géré par un gabarit, peut joindre un document, associer un élément concerné, suivre par courriel et consulter ses tickets. Une délégation peut autoriser un autre demandeur. L’interface standard, accessible par **Assistance → Tickets**, sert notamment aux techniciens N1/N2 et présente plus de champs.

## Personnaliser le formulaire avec un gabarit

Un gabarit déclare des champs obligatoires, masqués ou prédéfinis pour les interfaces standard et simplifiée. Il peut être le gabarit par défaut. Le choix du type et de la catégorie charge le gabarit associé. Toujours vérifier l’entité active et la récursivité du gabarit.

La démarche du support est : créer les catégories, créer les gabarits nommés `catégorie-type`, puis les associer depuis la catégorie. Une catégorie peut avoir un gabarit d’incident et un de demande. Les catégories du TP sont :

```text
Logiciel
├── Bureautique
│   ├── Word
│   ├── Excel
│   └── Outlook
└── Infographiste
Serveur
├── Virtualisation
└── Active Directory
Matériel
├── Souris/clavier
└── Ecran
```

| Gabarit | Champs obligatoires | Champs masqués |
|---|---|---|
| Incident serveur | Titre, catégorie, type, lieu, description | Aucun explicitement demandé |
| Incident bureautique | Les précédents + éléments associés | Urgence et impact |
| Demande bureautique | Titre, catégorie, type, lieu, description | Urgence et impact |

Le TP associe Bureautique, Word et Excel aux deux gabarits bureautiques ; Serveur, Virtualisation et Active Directory à Incident serveur. Outlook existe dans l’arbre mais n’est pas explicitement cité dans ces associations : ne pas élargir la consigne sans décision expliquée.

## Appliquer les règles métier

Le gabarit sert d’abord à la présentation du formulaire ; la configuration automatique du ticket se centralise dans **Administration → Règles**. Les critères identifient notamment type et catégorie ; les actions affectent priorité, groupe/technicien ou SLA. Plusieurs règles peuvent écrire un même champ : leur ordre et leur concurrence doivent être contrôlés. Le support décrit leur lecture à la création du ticket ; tester les déclencheurs de la version utilisée plutôt que généraliser à toute modification.

Une condition correcte pour les incidents serveur est `(catégorie=Serveur OU Virtualisation OU Active Directory) ET type=Incident`. Le corrigé préconise « OU » pour tous les critères, type compris : cela accepterait aussi un incident d’une autre catégorie ou une demande de la catégorie Serveur. Pour conserver les deux contraintes, utiliser une règle par catégorie avec type=Incident et opérateur ET, ou un mécanisme de regroupement de critères effectivement disponible dans l’interface. Vérifier par un ticket positif et un ticket qui doit rester exclu.

## Calendriers, SLA et escalades

Un SLA fixe un temps de prise en charge ou de résolution. Une date butoir peut être saisie directement ou calculée par un objet SLA, affecté manuellement ou par une règle. Le calcul dépend du calendrier de travail ; le dépassement informe, il n’empêche pas le traitement.

| Calendrier du TP | Jours | Horaires attendus |
|---|---|---|
| cal serveur | Lundi–jeudi | 08 h00–18 h00 |
| cal serveur | Vendredi | 08 h00–17 h30 |
| cal utilisateurs | Lundi–vendredi | 09 h00–17 h30 |

Le texte du corrigé indique 08h00–18h00 pour les jours ouvrés. La capture de correction confirme l’horaire demandé par l’énoncé, 08h00–17h30 le vendredi.

| Niveau de service | Prise en charge | Résolution | Calendrier | Priorité initiale / groupe |
|---|---:|---:|---|---|
| Incident serveur | 1 h | 8 h | cal serveur | Moyenne / GG_GLPI_Technician |
| Incident bureautique | 4 h | 2 jours | cal utilisateurs | Basse / GG_GLPI_hotliner |
| Demande bureautique | 4 h | 10 jours | cal utilisateurs | Très basse / GG_GLPI_hotliner |

Les deux jours et dix jours sont à interpréter dans le paramétrage du calendrier et de l’unité du SLA. Vérifier la date calculée sur un ticket de test, notamment en fin de journée ou avant un week-end.

Une escalade modifie le ticket pendant sa vie à un instant relatif à une échéance. Pour les incidents serveur, le TP demande :10 minutes après création sans prise en charge, affecter le groupe Super-Admin et vous placer observateur ;4 heures avant la date butoir de résolution, priorité haute et affectation vers vous ;3 heures avant, priorité très haute et affectation vers Zeus. Distinguer heure de création, échéance de prise en charge et échéance de résolution : le déclencheur choisi doit produire le délai demandé. Si une escalade est relative à une prise en charge à1h, vérifier que son décalage conduit réellement à création+10 min.

## Construire et tester dans le bon ordre

Créer les catégories → les gabarits et leurs associations → les calendriers et SLA → les escalades → les règles métier. Un SLA doit exister avant qu’une règle puisse l’affecter. Un groupe ou un utilisateur doit être importé avant son affectation.

Créer un ticket pour chaque cas, puis vérifier formulaire, catégorie/type, groupe, priorité et deux échéances. Ajouter une demande Serveur et un incident Matériel comme cas d’exclusion. Pour les escalades, contrôler le déclenchement et les acteurs sans modifier les heures du serveur de formation. La preuve attendue est le ticket effectivement traité et son historique, pas seulement la présence d’une règle.

### Mini-quiz

1. Quel objet détermine les champs obligatoires ?
2. Pourquoi « OU » entre trois catégories et le type Incident est-il trop large ?
3. Le délai de résolution tient-il compte des périodes fermées ?

??? success "Réponses"
    1. Le gabarit de ticket.
    2. Une seule condition suffirait. Il faut aussi imposer le type pour chaque catégorie acceptée.
    3. Le calcul utilise le calendrier associé. Vérifier la date produite dans le laboratoire.


## Appliquer ce module

- [Énoncé du TP](../../tp/glpi/module-04/enonces.md)
- [Correction expliquée](../../tp/glpi/module-04/corrections.md)
- [Fiche de révision](../../revision/glpi/module-04-assistance-traitements-automatises-des-tickets.md)
