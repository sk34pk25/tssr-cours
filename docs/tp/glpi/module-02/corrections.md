# TP 02 — Correction expliquée — Authentification AD — Habilitations

## État initial

AD DS et GLPI doivent fonctionner avant l’atelier. Préparer les OU, les groupes, les lieux et un accès local de secours avant de tester LDAP.

## Déroulement du scénario


### Liaison LDAP et ajout d'utilisateurs

### TP du Module 2 – Authentification AD – Habilitations

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 2 et d’avoir réalisé les TP proposés.

### Objectifs

- Utiliser l’ADDS avec GLPI et utiliser le moteur de règle d’habilitations.

### Prérequis

- AD et GLPI fonctionnels.

### Principales tâches à réaliser

### Structure AD et utilisateurs

- Créez les utilisateurs en fonction de l’annexe 1 (cf. fin du document).

- Créez les groupes globaux suivant le tableau en annexe 1.

- Les groupes globaux dans l’AD

- Créez les groupes globaux GLPI.

- Les groupes GLPI dans l’AD

- Membres du groupe GG_GLPI_Observer

- Membres du groupe GG_GLPI_Super_Admin

- Membres du groupe GG_GLPI_Technician

- Membres du groupe GG_GLPI_Hotliner

- Créez des modèles d’utilisateurs, dans les groupes puis les utilisateurs.

- Créez ces OU dans l’Active Directory d’Olympus en organisant convenablement sa structure en fonction de l’annexe 2.

### Configuration de GLPI

- Création d’un compte local d’administration.

- Créez un utilisateur à votre nom disposant des droits maximums sur GLPI (profil

le plus haut). C’est depuis ce compte que seront effectuées toutes les manipulations qui suivront.

- Création des lieux en fonction de l’annexe 3.

- Ajout de l’annuaire LDAP

- Ajoutez le contrôleur de domaine d’Olympus comme source d’authentification LDAP.

- Vous utiliserez le compte « Administrateur » pour l’authentification auprès de

l’AD.

- Obtenir le DN de l’administrateur

- Paramétrage de la liaison AD dans GLPI

### Règles d’habilitation

- Faites en sorte que quand un utilisateur du domaine se connecte sur GLPI, il lui soit automatiquement attribué le/les profils GLPI sur les bonnes entités du groupe (les bonnes habilitations).

- Règle d’importation observer

- Règle d’importation Super_Admin

- Règle d’importation technicien

- Règle d’importation hotliner

- Importez tous les utilisateurs et les mettre dans le bon lieu.

- Importez tous les groupes.

- Désactivez les utilisateurs : normal, post-only et tech.

La désactivation s’effectue à partir de chaque compte utilisateurs.

### Annexe 1

| SERVICE / FONCTION | Prénom / Nom | LOGIN | PROFIL GLPI | Groupe GG_ADDS | Lieu |
| --- | --- | --- | --- | --- | --- |
| Direction | Mr Ze US | Zeus | Observer | GG_dir ; GG_GLPI_observer | Temple de Zeus |
| Secrétaires de direction | Mr Heph AISTOS | Hephaistos | Sefl-service | GG_secretaires_dir | Temple de Zeus |
| Secrétaires de compta | Mme Arte MIS | artemis | Sefl-service | GG_secretaires | Temple d’Héra |
| Experts-comptables | Mme Her A | Hera | Observer | GG_experts-compta ; GG_compta ; GG_GLPI_observer | Temple d’Héra |
| comptables | Mr Her MES | Hermes | Self-service | GG_compta | Temple d’Héra |
| Stagiaires comptables | Mr Apo LLON | Apollon | Self-service | GG_stag_compta | Temple d’Héra |
| Directrice commerciale | Mme Aphro DITE | Aphrodite | Self-service | GG_dir_comm ; GG_comm | Hôtellerie |
| Commercial | Mr Ar ES | Ares | Self-service | GG_comm | Hôtellerie |
| Administrateurs informatiques | Mme Athé NA | Athena | Super-Admin | GG_admin ; GG_GLPI_Super-Admin | Salle des trésors |
| Admin AD informatique | Mme ou Mr vous | Vous | Super-Admin | GG_admin ; GG_admin_ad ; GG_GLPI_Super-Admin | Salle des trésors |
| Techniciens informatiques | Mr Po SEIDON | Poseidon | Technician | GG_techniciens ; GG_GLPI_Technician | Salle des trésors |
| Stagiaires informatiques | Mr Dio NYSOS | Dionysos | hotliner | GG_stagiaires_info ; GG_GLPI_hotliner | Salle des trésors |

### Annexe 2

```text
_Olympus
├── Les_utilisateurs
│   ├── Direction
│   ├── Service_compta / comptables
│   ├── Service_commercial / commerciaux
│   ├── secretaires
│   └── Service_info
│       ├── Administrateurs
│       ├── Administrateurs AD
│       ├── Techniciens
│       └── stagiaires
├── Les_materiels
│   ├── Les_ordis
│   │   ├── Direction
│   │   ├── Service_compta / comptables
│   │   ├── Service_commercial / commerciaux
│   │   ├── secretaires
│   │   └── Service_info
│   │       ├── Administrateurs AD
│   │       ├── Administrateurs
│   │       ├── Techniciens
│   │       └── stagiaires
│   └── Les_imprimantes
└── Les_groupes
    ├── Groupes_GLPI
    ├── Groupes_GG
    └── Groupes_DL
```

### Annexe 3

## Résultat attendu et contrôles

Avant l’import : créer le compte local nominatif de secours, les OU, groupes, lieux et profils attendus. Choisir les profils proposés par l’interface : les graphies `Sefl-service`, `Supervisor`, `Super-Admin`, les tirets et underscores diffèrent entre passages du support.

Pour chaque règle, contrôler un critère `(LDAP) MemberOf`, puis les deux actions profil+entité. Les captures de correction associent les groupes métier aux groupes GLPI : `GG_dir` et le groupe experts à Observer, `GG_admin` à Super-Admin, `GG_techniciens` à Technician, `GG_stagiaires_info` à Hotliner. Vérifier l’appartenance réellement visible par LDAP, surtout si des groupes sont imbriqués.

| Essai | Résultat à conserver |
|---|---|
| Zeus ou Hera | Profil Observer et bon lieu |
| Athena ou votre compte | Super-Admin, bonne portée administrative |
| Poseidon | Technician |
| Dionysos | Hotliner |
| Compte Self-Service | Interface simplifiée, sans droits d’administration |
| normal, post-only, tech | Comptes désactivés à la fin du TP |

Le compte Administrateur de liaison est une consigne du laboratoire. Son secret reste fourni par le formateur. Conserver une trace des DN sans publier de mot de passe.

- [Énoncé](enonces.md)
- [Cours du module](../../../modules/07-administration-glpi/module-02-authentification-ad-habilitations.md)

- [Fiche de révision](../../../revision/glpi/module-02-authentification-ad-habilitations.md)
