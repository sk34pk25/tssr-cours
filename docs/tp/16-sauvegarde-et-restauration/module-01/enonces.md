# Énoncé · Création de l’infrastructure

Durée estimée : 1 heure. Avoir suivi le module 1. Le gestionnaire Hyper-V et le partage distrib sont nécessaires sur la machine de salle.

La transcription intégrale, le tableau des comptes et les adresses de la figure sont dans l’onglet **Cours Original** du [module 01](../../../modules/16-sauvegarde-et-restauration/module-01-concept-enjeux-et-definition.md). Cette page garde l’ordre des gestes.

Objectifs : installer le rôle Hyper-V ; déployer l’infrastructure pour les ateliers suivants.

1. Importer les bundles `R:\Distrib\Bundles\TSSR\RES24_0160B - Sauvegarde & restauration`.
2. Stocker chaque VM dans son dossier sur `D:\`.
3. Ne pas importer SRV-AD1 ni SRV-FIC1 : elles sont dans SRV-HyperV.
4. Comptes du tableau : Srv-backup a le mot de passe écrit `Pa$$w0rd`. Les autres cellules affichent `*`. La vérification demande ensuite Administrateur / Pa$$w0rd sur les VM et admin / Pa$$w0rd sur le NAS.
5. Allumer toutes les VM.
6. Depuis srv-backup, joindre SRV-AD1, SRV-Fic1 et SRV-NAS. Ajuster le pare-feu si besoin.
7. Portail `https://192.168.30.1`, puis `sudo wbinfo -t`, puis activer ISCSI.
8. Depuis srv-fic1, ping srv-ad1, srv-backup et truenas.

[Pas-à-pas commenté](../../../modules/16-sauvegarde-et-restauration/module-01-concept-enjeux-et-definition.md) · [Correction inexistante](corrections.md)
