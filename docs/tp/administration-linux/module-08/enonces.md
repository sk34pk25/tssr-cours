# Énoncés — Module 08 — Gestion des espaces de stockage avancée — LVM

**Reprise structurée des consignes et explications de la source.** Les figures utiles restent isolées et les commandes transcrites restent littérales. Les écarts de version et les corrections techniques sont signalés séparément.

## M08TP01 - Enoncé - Manipuler les disques et LVM

### Manipuler les disques et LVM

Durée estimée

15 à 20 minutes

### I. Gestion des disques sur la station avec environnement graphique

- Ajouter un nouveau disque de 40 Go.
- Vérifier que le disque est bien présent dans /dev
- Créer 1 partition sur le nouveau disque avec fdisk :
- Partition principale de la totalité du disque pour du LVM
- Intégrer la partition au groupe de volume présent dans votre système.
- Créer un volume logique de 20 Go nommé lvvar.
- Agrandir le volume logique lvhome avec le reste de l’espace disponible du groupe de volume.

### II. Astuce

Pour détecter les disques SCSI sans redémarrer :

- Trouver la chaine SCSI qui gère les disques avec la commande :

```bash
udevadm info --query=path --name=sda
```

- Ex. résultat : /devices/pci0000:00/0000:00:10.0/host0/target0:0:0/0:0:0:0/block/sda
- Cela veut dire que host0 gère les disques SCSI

- Lancer un scan de la chaine SCSI

```bash
echo "- - -" > /sys/class/scsi_host/host0/scan
```


## Clarifications et contrôles — complément pédagogique

Identifier le VG existant et le contrôleur SCSI réel avant de reprendre les noms de la correction. `lvextend -l +100%FREE` consomme tous les extents libres du VG visé. Le TP suivant prend en charge le système de fichiers ; sans adaptation de cette couche, un LV agrandi ne suffit pas.

Pour les justifications et références officielles, lire le [cours optimisé](../../../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md).

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
