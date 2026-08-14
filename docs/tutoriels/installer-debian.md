# Tutoriel — Installer Debian

## Objectif

Installer une Debian de laboratoire avec une configuration reproductible. Le support fourni illustre Debian 11 ; la version stable en août 2026 est Debian 13 « trixie ». Voir le [guide d’installation officiel](https://www.debian.org/releases/stable/installmanual).

## Préparation

- Télécharger l’image depuis un miroir Debian officiel.
- Vérifier l’empreinte et préparer la VM ou la machine.
- Choisir le mode firmware et le partitionnement avant le démarrage.
- Sauvegarder toute donnée existante.

## Étapes

1. Démarrer sur l’image d’installation.
2. Choisir langue, pays et clavier.
3. Configurer nom d’hôte, réseau et compte administrateur selon la politique du laboratoire.
4. Créer l’utilisateur non privilégié.
5. Partitionner le disque ; relire le résumé avant d’écrire les changements.
6. Sélectionner le miroir et les ensembles de logiciels nécessaires.
7. Installer le chargeur d’amorçage sur la cible prévue.
8. Redémarrer sans le média, ouvrir une session et mettre à jour.

```bash
sudo apt update
sudo apt full-upgrade
cat /etc/os-release
ip addr
systemctl --failed
```

## Résultat attendu

Le système démarre depuis son disque, le réseau fonctionne, les dépôts répondent et `systemctl --failed` ne signale aucun service critique.
