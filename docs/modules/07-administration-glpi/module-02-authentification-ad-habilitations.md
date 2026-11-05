# Module 02 — Authentification AD et habilitations

L’authentification répond à « qui est cet utilisateur ? ». L’habilitation répond à « quels droits possède-t-il, dans quelle partie de l’organisation ? ». Une liaison LDAP qui fonctionne n’accorde donc pas, à elle seule, le bon profil GLPI.

## Entités, récursivité et lieux

Une entité segmente l’administration : par exemple une société, ses clients puis leurs filiales. Les objets d’une entité restent cloisonnés, sauf lorsqu’ils sont rendus récursifs. Un fournisseur commun peut être créé dans l’entité supérieure avec visibilité dans ses sous-entités. Un fournisseur local reste dans son entité sans récursivité.

Un lieu décrit une implantation géographique : site, bâtiment, salle. Il sert à positionner matériel et utilisateurs. Il ne remplace pas l’entité, qui règle la portée administrative. Les lieux sont arborescents et exigent une convention de nommage.

Les intitulés constituent le vocabulaire commun : lieux, statuts, fournisseurs, constructeurs, catégories de tickets, logiciels, prises réseau et calendriers. Ils peuvent être des listes plates ou des arbres. Les définir avant la saisie évite les doublons comme « Salle serveur », « salle serveurs » et « Serveur » pour un même lieu.

## Profils et interfaces

| Profil du support | Usage principal |
|---|---|
| Super-Admin | Tous les droits de configuration et d’administration |
| Admin | Administration de l’application |
| Technician | Inventaire et gestion des tickets selon ses droits |
| Hotliner | Saisie et suivi des tickets, avec restrictions d’attribution |
| Observer | Consultation |
| Self-Service | Utilisateur final en interface simplifiée |

L’interface simplifiée donne accès à la création et au suivi de ses tickets, aux réservations et à la FAQ. L’interface standard propose les modules autorisés par le profil et les vues personnelle, groupe et globale. Un profil détermine le type d’interface ainsi que les droits de lecture, mise à jour, création, suppression et purge dans Parc, Assistance, Cycles de vie, Gestion, Outils, Administration et Configuration.

Un même utilisateur peut posséder plusieurs habilitations. Chacune associe **un profil + une entité**, avec une éventuelle récursivité. Il peut être technicien dans une entité et simple demandeur dans une autre. Toujours vérifier le contexte actif lors d’un test. Conserver un compte local de secours avec les droits de configuration : le support avertit qu’un Super-Admin privé de l’interface adéquate peut perdre l’accès à la configuration.

## Connecter l’annuaire

GLPI possède une base de comptes interne. Il peut aussi interroger LDAP, LDAP Active Directory, des comptes POP/IMAP ou utiliser des certificats X509. L’annuaire externe permet une authentification centralisée et alimente les champs GLPI depuis les attributs AD.

Dans **Configuration → Authentification → Annuaires LDAP**, créer l’annuaire, choisir la préconfiguration ActiveDirectory, puis renseigner nom, serveur AD, BaseDN, DN du compte de liaison et secret fourni par le formateur. Les filtres préconfigurés excluent notamment les utilisateurs désactivés.

```text
Serveur : 192.168.1.1
Base DN : DC=olympus,DC=gr
Exemple de DN de liaison :
CN=Administrateur,OU=Administrateurs_AD,OU=Service_info,OU=Les_utilisateurs,OU=_Olympus,DC=olympus,DC=gr
```

Le DN est un chemin LDAP, à lire depuis l’objet vers le domaine. Le relever dans l’éditeur d’attributs AD plutôt que le deviner. Le compte du TP est Administrateur ; ce choix décrit le laboratoire. Un compte de liaison disposant seulement des lectures nécessaires permet de séparer ce rôle de l’administration du domaine. Le fait de fournir un secret ne justifie pas de le publier dans une procédure.

Tester la connexion LDAP, puis distinguer import manuel préalable et import automatique à la première connexion. Vérifier également l’état « actif » et l’annuaire par défaut, que la capture source signale comme non activés automatiquement.

## Construire les droits depuis les groupes AD

La gestion statique consiste à ajouter manuellement les habilitations à chaque utilisateur. Elle est simple pour un essai mais devient difficile à maintenir. Les règles dynamiques font correspondre une appartenance AD à un profil et une entité GLPI.

La méthode du support comporte cinq étapes : identifier les droits ; créer les groupes GLPI dans AD ; affecter les groupes métier/utilisateurs ; créer les règles d’affectation ; vérifier le profil et l’entité après import.

```mermaid
flowchart LR
    U["Utilisateur AD"] --> M["Groupe métier GG_techniciens"]
    M --> G["GG_GLPI_Technician"]
    G --> C["Critère LDAP MemberOf"]
    C --> H["Profil Technician + entité choisie"]
```

Ce schéma de synthèse est ajouté au support. Une règle d’habilitation possède au minimum les actions **profil** et **entité** ; la récursivité, le refus d’import et d’autres actions peuvent compléter le résultat. Le cours indique que toutes les règles sont lues à la connexion et qu’une règle correspond à une habilitation. Vérifier chaque combinaison et la logique ET/OU des critères.

La condition « contient » sur `(LDAP) MemberOf` est moins stricte qu’une égalité complète au DN. Elle peut aussi accepter des noms voisins : choisir un nom distinct et tester un utilisateur autorisé ainsi qu’un utilisateur qui ne doit pas recevoir le profil. L’imbrication des groupes AD et les attributs réellement remontés doivent être vérifiés dans le laboratoire ; une appartenance souhaitée ne prouve pas qu’elle est visible dans le critère LDAP.

## Réaliser le scénario Olympus

Le TP crée12identités ou fonctions : Zeus, Hephaistos, artemis, Hera, Hermes, Apollon, Aphrodite, Ares, Athena, votre compte, Poseidon et Dionysos. L’annexe complète conserve les fonctions, groupes, profils et lieux. Elle contient les graphies `Sefl-service`, `hotliner` et des variantes tiret/underscore ; les droits se choisissent à partir des profils réels proposés par GLPI.

Créer les OU des utilisateurs, matériels et groupes, les groupes globaux métier et les groupes GLPI. Créer ensuite un administrateur local nominatif, les lieux, l’annuaire puis les règles Observer, Super-Admin, Technician et Hotliner. Les captures de correction utilisent l’entité racine ; adapter la portée seulement si une autre entité a été définie dans la réalisation.

Importer utilisateurs et groupes, affecter les lieux puis désactiver `normal`, `post-only` et `tech`. Pour chaque type d’utilisateur, tester connexion, profil, entité active et actions permises. Une connexion réussie avec le mauvais profil est un échec de l’habilitation.

### Mini-quiz

1. Un lieu peut-il remplacer une entité pour isoler les droits ?
2. Quels sont les deux éléments indispensables d’une habilitation ?
3. Pourquoi garder un administrateur local ?

??? success "Réponses"
    1. Non : lieu géographique et portée administrative ont des fonctions différentes.
    2. Un profil et une entité ; la récursivité est une option.
    3. Pour conserver un accès de configuration si l’annuaire ou les règles ne fonctionnent plus.


## Appliquer ce module

- [Énoncé du TP](../../tp/glpi/module-02/enonces.md)
- [Correction expliquée](../../tp/glpi/module-02/corrections.md)
- [Fiche de révision](../../revision/glpi/module-02-authentification-ad-habilitations.md)
