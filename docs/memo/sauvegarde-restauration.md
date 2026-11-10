# Mémo — Sauvegarde et restauration

Aide de synthèse du cours. Les consignes exactes restent dans l’onglet **Cours Original** de chaque module.

## Règle et plans

| Repère | Retenir |
|---|---|
| 3 | Original compris, plus au moins deux sauvegardes |
| 2 | Deux types de supports |
| 1 | Une copie hors site |
| PCA | Toute l’entreprise, pas seulement le SI |
| PRA | Volet informatique du PCA : sauvegarde, stockage, restauration, licences |

## Méthodes

| Méthode | Bit après copie | Jeux à restaurer |
|---|---|---|
| Complète | 0 | Cette complète |
| Différentielle | 1 | Complète + dernière différentielle |
| Incrémentale | 0 | Complète + chaque incrémentale |

GFS sur 5 jours : environ 21 bandes. Fils quotidien, père hebdomadaire, grand-père mensuel.

## Stockage

| Famille | Système de fichiers |
|---|---|
| DAS | Sur la machine, périphérique branché |
| SAN | Sur le serveur, accès par blocs |
| NAS | Sur l’appareil, accès par fichiers |

## RAID du support

| Niveau | Disques min. | Panne tolérée | Capacité annoncée |
|---|---|---|---|
| 0 | 2 | Aucune | 100 % |
| 1 | 2 | 1 disque | 50 % |
| 5 | 3 | 1 disque | 67 %–94 % |
| 10 | 4 | 1 disque par miroir | 50 % |

## Maquette

| Rôle | Repère |
|---|---|
| Hôte | SRV-HyperV · 192.168.10.250 |
| Annuaire | Srv-ad1 · 192.168.10.1 · déjà dans l’hôte |
| Fichiers | SRV-FIC1 · 192.168.10.2 · déjà dans l’hôte |
| Sauvegarde | 192.168.20.1 |
| NAS | 192.168.30.1 · iSCSI 3260 |
| Routeur | .254 dans chaque VLAN |

[Cours](https://sk34pk25.github.io/tssr-cours/modules/16-sauvegarde-et-restauration/)
