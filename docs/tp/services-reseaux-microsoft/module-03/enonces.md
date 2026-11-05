# Énoncés — Module 03 — Stratégies de groupe

## Enoncé du TP - Prise en main des stratégies de groupe

### Prise en main des stratégies de groupes

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos du module 3 et réalisé les TP précédents.

30 minutes à 1 heure

Prérequis :

- Avoir réalisé le TP précédent du Module 02.

### Mise en œuvre des GPO

- Trouvez et validez le paramètre adapté (utilisateur ou ordinateur).
- Définissez les stratégies de groupe nécessaires et le point de liaison (UO) pour leur application.
- Regroupez les paramètres du même type dans une seule GPO.
- Testez-en le bon fonctionnement avec les comptes utilisateurs adéquats. Pour l’ensemble des utilisateurs du domaine

- La fonctionnalité de chiffrement EFS doit être désactivée.
- Le pare-feu système doit être désactivé.
- Internet Explorer sera client proxy du serveur 172.28.10.248 en écoutant sur le port 8080.
- Le mot de passe devra compter au moins 5 caractères et il sera à changer tous les 5 jours.
- Aucune exigence de complexité de mot de passe n’est envisagée.

### Pour les membres du service Commercial

- Le partage Prospects doit automatiquement être disponible dans l’explorateur de fichiers, et dès l’ouverture de session. Pour les membres du service Production

- L’imprimante HP Color LaserJet Pro MFP M477 sera automatiquement installée. Pour les Secrétaires

- Le fond d’écran sera commun (logo de l’entreprise).

Bonus :

- Automatiser l’installation d’Acrobat Reader (paquet .msi) pour les secrétaires.
- Le répertoire Documents des utilisateurs sera déporté sur W19-SRV1 (excepté pour les membres du service Informatique).
- Ouverture de session limitée de 9h à 18h.
- Fermeture de session obligatoire après 18h pour les intérimaires.

### Preuves attendues

Pour chaque réglage, relever son type ordinateur ou utilisateur, la GPO et son lien, le compte de test et le résultat. Prévoir un compte exclu pour chaque ciblage.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-03-module-03.md)
