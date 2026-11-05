# Révision — Module 05 — Découverte de GLPI

## GLPI relie les équipements, les personnes et l’assistance

Le support présente GLPI comme outil libre de gestion de parc et de centre de services. Comprendre les **objets et leurs relations** avant de mémoriser les menus : ordinateur, utilisateur, logiciel, contrat, composant et ticket. Les captures de l’Original montrent la version utilisée en formation ; l’emplacement des menus peut différer dans une autre version.

| Gestion de parc | Utilité pour le technicien |
|---|---|
| Inventaire matériel et informations administratives/financières | Identifier l’équipement et son contexte. |
| Composants internes, externes et cartographie réseau | Relier le symptôme aux dépendances réelles. |
| Historique, systèmes d’exploitation et cycle de vie | Retrouver les changements et prévoir maintenance ou remplacement. |
| Réservation, déploiement et licences | Planifier les moyens et vérifier les droits d’usage. |

L’interface **simplifiée** vise les usages utilisateur, selon les droits : tickets, réservations et FAQ. L’interface **standard** donne accès aux fonctions techniques, administratives et de configuration autorisées. Voir un menu dépend des habilitations ; être dans l’interface standard ne donne pas tous les droits.

## Construire une recherche reproductible

1. Choisir le type d’objet et les colonnes utiles.
2. Définir le champ recherché et l’opérateur adapté.
3. Combiner les critères avec **ET**, **OU** et les exclusions nécessaires.
4. Vérifier quelques fiches du résultat avant de généraliser.
5. Enregistrer la recherche si elle sera réutilisée et définir sa portée.

La recherche rapide porte sur les champs affichés ; la recherche multicritères permet d’interroger des paramètres plus précis et de grouper les conditions. Le support mentionne notamment `^` pour le début, `$` pour la fin et `NULL` pour une valeur vide, ainsi que des recherches numériques et relatives aux dates. **Précision externe :** vérifier les opérateurs réellement proposés par le champ et la version ; ne pas traiter toutes les zones de recherche comme un moteur d’expressions régulières complet.

| Fonction | Contrôle à effectuer |
|---|---|
| Colonnes et tri | Le résultat montre les informations permettant de décider. |
| Export | Le format et le périmètre correspondent au besoin. |
| Recherche enregistrée | Nom, visibilité, entité, récursivité et comptage adaptés. |
| Modification massive | Sélection exacte et action validée sur un petit échantillon. |
| Corbeille | Distinguer élément actif, supprimé et purge définitive. |
| Fiche d’un élément | Consulter ses onglets, relations et historique ; plusieurs onglets sont communs aux objets. |



## Vérifier ses acquis

**Mini-quiz.** 1. Pourquoi un technicien ne voit-il pas tous les menus ? 2. ET et OU donnent-ils le même résultat ? 3. Quelle précaution avant une modification massive ?

??? success "Réponses commentées"
    1. Les droits et la portée des habilitations limitent les accès.
    2. Non : ET exige toutes les conditions ; OU accepte les alternatives prévues.
    3. Vérifier filtre, sélection, entité et action sur un échantillon.

- [Cours et supports originaux](../../modules/06-sensibilisation-itil-gestion-parc/module-05-decouverte-de-glpi.md)
