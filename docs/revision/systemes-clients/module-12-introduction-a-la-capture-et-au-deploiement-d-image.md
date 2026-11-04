# Fiche de révision — Module 12 — Capture et déploiement d’image

## Idées clés

- L’industrialisation vise des systèmes homogènes et prêts à l’emploi.
- Le **master** est le poste de référence préparé avant capture ou clonage.
- Sysprep prépare le système à devenir unique après généralisation.

## Sysprep

- **OOBE** : expérience de premier démarrage.
- **Généraliser** : retire des informations propres à l’installation pour qu’elles soient régénérées au déploiement ; cela ne supprime pas indistinctement toutes les personnalisations du master.
- **Arrêt** : le support demande de ne pas redémarrer le master avant la capture.
- Journaux : répertoires Panther sous `C:\Windows\System32\Sysprep`.

```cmd
C:\Windows\System32\sysprep\sysprep.exe /oobe /generalize /shutdown
```

## Capture et déploiement

| Approche | Éléments du support |
| --- | --- |
| Automatisée | serveur, WDS, PXE et image d’amorçage |
| Manuelle | WinPE et `dism` |

Le support cite WIM et la mise à jour offline avec `dism`, ainsi que `diskpart`, `mount`, `drvload`, `net use` et PowerShell dans WinPE. Il ne fournit pas ici leurs procédures détaillées.

## TP : Full Clone VMware

Le TP réalise un Full Clone VMware après Sysprep, pas une capture WIM ni un déploiement WDS. Les différences master/clone sont des observations de laboratoire : nom de machine, comptes, IP, snapshots, restauration, pilote et règle ICMP.

- [Cours](../../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image.md)
- [Kahoot](../../kahoot/02-systemes-clients-microsoft-12-introduction-a-la-capture-et-au-deploiement-d-image.md)

## Retenir puis vérifier

**Préparer et généraliser le master avant capture ou clonage ; tester ensuite l’unicité du poste obtenu.**

1. **Faut-il redémarrer le master généralisé avant la capture ?**

??? success "Réponse expliquée"
    Non : le support demande de le laisser arrêté et de capturer ou cloner l’état préparé.

2. **Le TP réalise-t-il une capture WIM ?**

??? success "Réponse expliquée"
    Non. Il réalise un Full Clone VMware ; WIM, WinPE, DISM et WDS sont présentés dans le cours comme autres outils du déploiement.

3. **Un clone est-il validé dès qu’il démarre ?**

??? success "Réponse expliquée"
    Non. Comparer identité, réseau, comptes, pilotes et règles, puis documenter les différences observées.

[Relire le cours complet](../../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image.md) · [Mettre en pratique](../../tp/systemes-clients/module-12/index.md)
