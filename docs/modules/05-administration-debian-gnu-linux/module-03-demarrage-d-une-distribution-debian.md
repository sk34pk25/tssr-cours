# Module 03 — Démarrage d’une distribution Debian

**Sources originales (A) :** support et TP TSSR « Démarrer et arrêter Debian » / « Gérer les services ».
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Identifier les étapes principales du démarrage Linux.
- Gérer l’arrêt, le redémarrage et les services avec systemd.
- Contrôler l’état d’un service avant et après une action.

## Du firmware aux services

La source présente GRUB2 comme chargeur d’amorçage, puis le passage vers l’initialisation des services. Le démarrage ne se résume pas à l’apparition d’une invite : chaque étape prépare la suivante. Lors d’un diagnostic, repérer l’étape où l’exécution s’arrête est plus utile que redémarrer au hasard.

## Gérer avec systemd

```bash
systemctl status nom.service
systemctl start nom.service
systemctl stop nom.service
systemctl restart nom.service
systemctl enable nom.service
```

`status` est le contrôle de départ. `enable` configure le démarrage automatique ; il ne remplace pas une vérification de l’état actuel du service.

## Arrêter proprement

Utiliser une commande d’arrêt ou de redémarrage prévue pour le système et prévenir les utilisateurs concernés. Une coupure brutale peut laisser un système de fichiers dans un état incohérent.

## À retenir

Le démarrage et les services s’administrent en observant d’abord l’état, en appliquant l’action minimale nécessaire puis en relisant cet état.

## Vérification des acquis

1. Quelle commande affiche l’état d’un service ?
2. Quel est le rôle de `enable` ?

??? success "Réponses"
    1. `systemctl status nom.service`.
    2. Configurer le démarrage automatique du service.
