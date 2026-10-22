# Module 04 — Révision : découverte d’Hyper-V

## Repères à retenir dans le contexte des sources

- Le module vise Hyper-V 2019 ; le support conserve aussi des références v2/v3 et
  Windows Server 2008 R2/2012/Windows 8. Ces repères historiques ne sont pas une
  recommandation de version actuelle.
- Le support cite la virtualisation processeur Intel VT-x/AMD-V et les réglages
  BIOS/UEFI, ainsi que SLAT dans son contexte Windows 8 Pro 64 bits.
- Hyper-V est présenté comme un rôle serveur ou une fonctionnalité du client cité.
- Fermer la fenêtre de console d’une VM ne l’arrête pas.
- Le réseau privé relie les invités ; l’interne ajoute la communication avec l’hôte ;
  l’externe donne accès au réseau physique. Le support distingue aussi l’externe dédié.
- L’indication de disque d’amorçage IDE concerne la première génération. L’atelier
  demande une VM de génération 2, avec disque VHDX.
- Dans l’atelier, Hyper-V est installé dans une VM Workstation pour les besoins du
  laboratoire ENI ; les paramètres de ressources restent propres à ce scénario.

## Ordre du travail documenté

Préparer mémoire et disque de la VM hôte → créer le volume de données → installer le
rôle et régler le stockage/réseau → créer et installer la première VM → généraliser
avec Sysprep et arrêter → exporter → importer une copie dans des sous-dossiers propres
à la seconde VM → contrôler leur liaison.

## Contrôles et pièges documentaires

| Point | Contrôle ou limite à conserver |
| --- | --- |
| Ressources | 8 Go pour la VM hôte ; ajout SCSI de 100 Go ; VM Hyper-V avec 2 Go fixes et VHDX de 32 Go, valeurs du laboratoire. |
| Migration | La migration à chaud n’est pas autorisée dans l’atelier. |
| Export | Attendre sa fin ; l’énoncé évoque jusqu’à cinq minutes sans progression visible. |
| Import | L’atelier choisit Copy the virtual machine et des sous-dossiers distincts ; ne pas lui substituer l’exemple différent du support. |
| Sysprep | Generalize et Shutdown s’appliquent à la première VM Hyper-V ; action à impact à vérifier avant confirmation. |
| Réseau | Relever l’adresse de chaque VM avec ipconfig et viser l’autre VM avec ping. La capture de solution vise la passerelle affichée et ne prouve pas cette liaison. |
| Snapshot | L’énoncé demande un snapshot VMware de la VM hôte ; la solution ne documente pas cette dernière étape. |
| Ressources | ISO, VM/disques et schéma exploitable ne sont pas fournis dans les trois PDF. |

## Documents du module

- [Cours M04](../../modules/13-virtualisation-serveurs/module-04.md).
- [Atelier unique, énoncé et correction](../../tp/13-virtualisation-serveurs/module-04/index.md).

Contenu A : support M04, énoncé et solution de l’Atelier n°2 Hyper-V, Drive TSSR en
lecture seule. Contenu B : synthèse des éléments attestés, sans quiz ni exercice ajouté.
