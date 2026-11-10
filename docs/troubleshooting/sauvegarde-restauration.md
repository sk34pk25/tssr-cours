# Dépannage — Sauvegarde et restauration

Partir du symptôme vu dans les énoncés. Les corrections détaillées des TP sont **Inexistant** : le contrôle est celui que l’énoncé écrit.

## Le NAS ne confirme pas l’annuaire

1. Ouvrir `https://192.168.30.1` depuis srv-backup.
2. Lancer `sudo wbinfo -t` dans paramètres systèmes, Console.
3. Tant que cette commande échoue, ne pas activer iSCSI comme si la cible était prête.

## L’initiateur iSCSI reste déconnecté

1. Vérifier l’adresse `192.168.30.1` et le port `3260`.
2. Contrôler le VLAN 3 du schéma : NAS `.1`, routeur `.254`.
3. Ne formater un disque de 80 Go que lorsqu’il apparaît vraiment.

## Backup Exec n’ajoute pas l’agent

Symptôme écrit : `Erreur finale : 0xe00086ce`.

1. Copier le dossier Agents de srv-backup vers `C:\` de la cible par `c$`.
2. Exécuter `C:\Agents\RAWSX64\setup.exe` sur la cible.
3. Recommencer l’ajout depuis srv-backup.

## La restauration granulaire n’a rien à restaurer

1. La complète srv-ad1 doit être sans erreur avant de supprimer l’utilisateur.
2. Ne restaurer que cet utilisateur, puis ouvrir une session avec lui.

## Veeam ne voit pas l’hôte

1. Ouvrir le port 445, Accès réseau (NP-in), sur SRV-HyperV.
2. Compte d’ajout : `SRV-HyperV\administrateur`, limite de tâches 4.
3. SRV-AD1 et SRV-FIC1 doivent être visibles avant le job `SVGD-FIC1`.

## Après un disque retiré du miroir ou du RAID 5

1. Noter l’état dans le gestionnaire de disques avant de supprimer le disque manquant.
2. Vérifier l’explorateur. La réponse attendue n’est pas fournie : **Inexistant**.
3. Remplacer le disque et lancer la reconstruction demandée.
4. Un RAID dégradé ne remplace pas une sauvegarde hors site.

[Cours](../modules/16-sauvegarde-et-restauration/index.md)
