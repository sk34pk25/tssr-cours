# Corrections expliquées — Module 03 — Stratégies de groupe

## Solution du TP - Prise en main des stratégies de groupe

Utiliser `gpupdate /force` et `gpresult /r`. Le lecteur Prospects dépend aussi des autorisations SMB/NTFS. Vérifier la file Production existante malgré la différence de modèle entre les modules. Pour les intérimaires, tester séparément l’interdiction de nouvelle connexion et la fermeture de session demandée. Les paramètres de pare-feu et de mot de passe décrivent le laboratoire.

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

- Le partage Prospects doit automatiquement être disponible dans l’explorateur de fichiers, et dès l’ouverture de session.

### Pour les membres du service Production

- L’imprimante HP Color LaserJet Pro MFP M477 sera automatiquement installée.

### Pour les Secrétaires

- Le fond d’écran sera commun (logo de l’entreprise).

### Étapes illustrées dans le support

1. Dans GPO_Secretaire, ouvrir Configuration utilisateur, Stratégies, Modèles d’administration, Bureau, Bureau, Papier peint du Bureau.
2. Activer le paramètre, renseigner le chemin du fichier de fond d’écran puis choisir le style Center.
3. Dans Group Policy Management, vérifier le lien de GPO_Secretaire sur l’UO SECRETAIRE. La capture affiche le filtrage Utilisateurs authentifiés et aucun filtre WMI.

- [Activités du module](index.md)
- [Cours](../../../modules/09-services-reseaux-en-environnement-microsoft/module-03-module-03.md)
