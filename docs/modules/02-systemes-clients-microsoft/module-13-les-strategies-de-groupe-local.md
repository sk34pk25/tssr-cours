# Module 13 — Les stratégies de groupe local

**Séquence :** Systèmes clients Microsoft  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 1 support(s) de cours, 1 énoncé(s), 1 correction(s)

!!! warning "Périmètre et versions"
    Le support enseigne Windows 10. Windows 10 a atteint sa fin de support général le 14 octobre 2025 ; les manipulations restent utiles pour le laboratoire et les environnements hérités, mais un déploiement neuf doit viser une édition Windows encore prise en charge. Référence : [Cycle de vie Windows 10](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro).

## Objectifs et compétences

- Ouvrir et parcourir les stratégies de groupe local.
- Appliquer des paramètres ordinateur ou utilisateur.
- Mettre en place des règles de sécurité locales.
- Forcer l’actualisation et contrôler le résultat effectif.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Les stratégies de groupe local » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Module 13 - Support de cours

### Systèmes clients Microsoft

#### Module 13 — Les stratégies de groupe local

#### Objectifs • Les stratégies de groupe local pour

- Personnaliser l’environnement des utilisateurs
- Personnaliser Windows 10
- Sécuriser le système

### programmes et périphériques matériels

- La base de registre Windows
- Base de données hiérarchique et centrale
- Stocke toutes les informations de configuration du système pour un ou plusieurs utilisateurs,
- Utilisée depuis Windows 98
- Contient des milliers de paramètres
- Lors de son exécution, Windows consulte en permanence les informations contenues dans

#### le Registre

- Consultation et modification du registre : commande regedit
- À manipuler avec la plus grande précaution

#### La base de registre Windows

- Paramètres regroupés sous 5 catégories (ou ruches)

HKEY_CLASSES_ROOT Informations sur les applications (objets OLE, extensions)

#### HKEY_CURRENT_USER

( = HKEY_USERS \ SID ) Configuration relative à l'utilisateur qui a ouvert une session HKEY_LOCAL_MACHINE Contient des informations de configuration spécifiques à

#### l'ordinateur (pour n'importe quel utilisateur)

#### HKEY_USERS Contient tous les profils utilisateur chargés activement sur

#### l'ordinateur

#### HKEY_CURRENT_CONFIG Profil matériel utilisé par l'ordinateur

### La base de registre Windows

- Les ruches contiennent des clés
- Qui peuvent elles-mêmes contenir des clés…
- Les clés contiennent des valeurs
- Binaires ou hexadécimales
- Chaînes de caractères
- Chaque valeur correspond à un paramètre du système !

#### LGPO

- Les LGPO (Local Group Policy Object)
- Gérer le comportement du poste de travail et des utilisateurs avec une seule et même console :
- Console mmc personnalisée composant logiciel enfichable
- Éditeur d'objets de stratégie de groupe
- Console mmc Stratégie de sécurité locale (secpol.msc)
- Réduire le temps consacré à la gestion du poste de travail
- Agir sur la base de registre de façon plus conviviale
- Concrètement que peut-on faire par LGPO ?
- Modifier les stratégies de mots de passe
- Agir sur les privilèges d'administration du système
- Uniformiser l'aspect du poste de travail (bureau, barre des tâches)
- Restreindre l'accès à certains paramètres (panneau de configuration, ligne de commande)
- Démarrer des scripts à l'ouverture, à la fermeture de session utilisateur

### LGPO

- Possibilité d'agir sur le poste local ou sur un poste distant
- Possibilité d'agir sur différents objets de la base SAM

#### LGPO

#### Chaque paramètre :

- Peut être activé ou désactivé
- Peut être non configuré = comportement par

#### défaut du système

- Peut être commenté
- Possède des conditions
- Peut posséder des options supplémentaires
- Possède surtout une aide précieuse, lisez-la !

### Démonstration

#### TP

### Conclusion

- Bien connaître le fonctionnement des stratégies

#### de groupe local pour

- Découvrir la base de registre
- Les paramètres utilisateurs
- Les paramètres ordinateurs
- Les stratégies de sécurité
- Se préparer à l’utilisation des stratégies de groupe de domaine

## Mise en pratique

- [Travaux pratiques du module](../../tp/systemes-clients/module-13/index.md)
- [Fiche de révision du module](../../revision/systemes-clients/module-13-les-strategies-de-groupe-local.md)

## Questions flash

1. Comment expliquer simplement « Les stratégies de groupe local » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Ouvrir et parcourir les stratégies de groupe local.
    - Appliquer des paramètres ordinateur ou utilisateur.
    - Mettre en place des règles de sécurité locales.
    - Forcer l’actualisation et contrôler le résultat effectif.

## Voir aussi

- [Présentation de la séquence](index.md)
