# Tutoriel — Importer la maquette de sauvegarde

Procédure guidée de l’énoncé du module 01. La transcription et le schéma d’adresses sont dans le [cours](../modules/16-sauvegarde-et-restauration/module-01-concept-enjeux-et-definition.md). Correction fournie : **Inexistant**.

## Préparer

- Gestionnaire Hyper-V disponible sur la machine de salle.
- Accès au partage qui contient `R:\Distrib\Bundles\TSSR\RES24_0160B - Sauvegarde & restauration`.
- Dossier distinct sur `D:\` pour chaque machine importée.

## Importer

1. Importer les machines du bundle, sauf SRV-AD1 et SRV-FIC1.
2. Vérifier le tableau des comptes. Le mot de passe écrit dans la grille ne concerne que Srv-backup. La section de vérification donne ensuite Administrateur / Pa$$w0rd pour les sessions Windows et admin / Pa$$w0rd pour le portail du NAS.
3. Démarrer toutes les VM.

## Prouver

| Depuis | Action | Résultat attendu par l’énoncé |
|---|---|---|
| srv-backup | Joindre SRV-AD1, SRV-Fic1, SRV-NAS | Connectivité, pare-feu ajusté seulement si besoin |
| srv-backup | Portail `https://192.168.30.1` | Page ouverte |
| Console du NAS | `sudo wbinfo -t` | Intégration à l’annuaire correcte |
| Menu service du NAS | Activer ISCSI | Service actif |
| srv-fic1 | Ping srv-ad1, srv-backup, truenas | Réponses |

Les ateliers Backup Exec, Veeam et RAID supposent cette maquette. Ils ne se lancent pas tant que ces contrôles échouent.

[Énoncé](../tp/16-sauvegarde-et-restauration/module-01/enonces.md)
