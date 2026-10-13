# TP — Module 04 — La gestion du stockage

Ce TP reprend le scénario TSSR de gestion du stockage sous Windows : ajout de disques à une VM, création et contrôle de volumes avec l’interface graphique et `diskpart`, puis investigation de volumes avec PowerShell.

**Durée source : 1 heure 30 minutes.**

## Prérequis et ressources de laboratoire

Le scénario suppose une VM Windows du laboratoire, VMware Workstation et une VM Discovery. Les PDF demandent notamment l’ajout de deux disques de 60 Go à la VM Windows.

!!! info "Ressources non fournies dans le dossier Drive M04"
    L’inventaire Drive live M04 contient le support, l’énoncé et la correction, mais aucun fichier de VM, disque virtuel, ISO, archive ou script de laboratoire. Utilisez les environnements fournis dans le cadre de la formation ; cette page ne remplace pas ces ressources.

## Résultats attendus

À la fin du TP, vous devez pouvoir :

- montrer la structure demandée sur les disques de la VM ;
- identifier les volumes par leur lettre, leur libellé, leur taille et leur système de fichiers lorsque la consigne le demande ;
- expliquer la différence entre le chemin GPT montré par la correction et l’alternative MBR qu’elle décrit ;
- produire la procédure `GestionDuStockage` demandée par le scénario ;
- relever les informations de stockage demandées sur la VM Discovery avec PowerShell.

## Déroulé

1. Lire l’[énoncé](enonces.md) intégralement et relever les valeurs attendues.
2. Réaliser les opérations dans la VM de laboratoire prévue.
3. Vérifier l’état obtenu avec la console, `diskpart` ou PowerShell selon la partie du scénario.
4. Consulter la [correction](corrections.md) après une tentative complète.

Les consignes et les réponses restent volontairement séparées.

- [Énoncé du TP](enonces.md)
- [Correction du TP](corrections.md)
- [Cours du module](../../../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage.md)
- [Fiche de révision](../../../revision/systemes-clients/module-04-la-gestion-du-stockage.md)
