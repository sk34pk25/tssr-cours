# Module 03 — Démarrage d’une distribution Debian

**Cours optimisé — reformulation pédagogique du support et des TP associés.** Les exemples du parcours conservent leur contexte Debian 11 ; les corrections et actualisations sont identifiées comme compléments externes. Les transcriptions intégrales se consultent dans l’onglet Original.
## Comprendre le démarrage

Le support suit une machine BIOS avec MBR : firmware, chargeur GRUB, noyau Linux, initialisation, puis services et sessions. Ce scénario est un exemple d’architecture, pas l’unique chaîne d’amorçage possible. GRUB choisit une entrée, charge le noyau et l’image initiale, puis transmet des paramètres comme la racine du système.

Dans `/boot`, le support distingue `vmlinuz` (noyau), `initrd` (image initiale), `System.map` et `config`. Les suffixes correspondent aux versions installées. Une ligne GRUB comportant `root=/dev/mapper/... ro quiet` indique notamment le périphérique racine, le montage initial en lecture seule et la réduction des messages. En appuyant sur `e`, on modifie temporairement l’entrée sélectionnée ; il ne faut pas recopier le chemin du noyau d’une autre machine.

## Systemd, PID 1 et unités

Après la phase noyau, systemd assure l’initialisation dans le scénario. Il est le processus PID 1. Les **unités** décrivent différents objets : services, cibles, montages ou timers. Les dépendances permettent de démarrer en parallèle ce qui peut l’être, avec un ordre lorsque celui-ci est nécessaire. Une cible rassemble des unités ; elle ne correspond pas à un programme unique.

| Cible étudiée | Rôle | Ancien repère numérique du support |
|---|---|---|
| `poweroff.target` | Arrêter la machine | 0 |
| `rescue.target` | Environnement de secours restreint | 1 |
| `multi-user.target` | Fonctionnement multiutilisateur sans bureau | 3 |
| `graphical.target` | Fonctionnement avec environnement graphique | 5 |
| `reboot.target` | Redémarrer | 6 |

Les nombres sont des compatibilités historiques avec les niveaux d’exécution ; ils n’épuisent pas toutes les cibles possibles.

## Observer les unités et choisir une cible

```bash
systemctl get-default
systemctl list-units
systemctl list-units --all
systemctl list-unit-files
```

`list-units` présente les unités chargées, avec une sélection dépendant des options. `list-unit-files` examine les fichiers d’unités et leur état d’activation : une ligne ne prouve donc pas que le service fonctionne actuellement.

```bash
systemctl set-default multi-user.target
systemctl isolate graphical.target
```

La première commande définit la cible pour les prochains démarrages. La seconde bascule l’état courant et peut arrêter des unités ou sessions qui ne font pas partie de la nouvelle cible. Dans le TP, on relève la cible du poste graphique, on choisit `multi-user.target`, on redémarre pour observer la console, puis on charge le mode graphique. Revenir ensuite à la cible initiale si l’exercice le prévoit.

## Distinguer fonctionnement et activation

| Commande avec `cron.service` | Effet |
|---|---|
| `systemctl status cron.service` | Lire l’état et des messages récents |
| `systemctl start cron.service` | Démarrer maintenant |
| `systemctl stop cron.service` | Arrêter maintenant |
| `systemctl restart cron.service` | Arrêter puis démarrer |
| `systemctl enable cron.service` | Préparer l’activation selon les liens de dépendance |
| `systemctl disable cron.service` | Retirer ces liens d’activation |

Arrêter cron ne désactive pas son prochain démarrage. Désactiver un service ne l’arrête pas forcément et ne bloque pas toute activation par dépendance ou manuelle. Pour le TP, observer ces deux axes séparément : `is-active` et `is-enabled` sont des contrôles pratiques supplémentaires.

## Identifier le service SSH

Le TP demande le fichier d’unité, le binaire serveur et sa configuration. Sur Debian, le service usuel est `ssh.service`, avec `sshd` pour le démon et `/etc/ssh/sshd_config` pour la configuration. `systemctl status ssh.service` et `systemctl cat ssh.service` aident à examiner la machine réelle. Les unités fournies par les paquets peuvent apparaître sous `/lib/systemd/system` ou `/usr/lib/systemd/system` ; leurs surcharges locales relèvent de `/etc/systemd/system`.

!!! info "Précision externe — activation et configuration"
    `enable` et `disable` concernent l’activation ; `--now` ajoute une action immédiate. Pour modifier un service, préférer une surcharge locale plutôt que le fichier livré par le paquet. Les états et chemins se vérifient sur la version utilisée. Référence : [systemctl(1)](https://www.freedesktop.org/software/systemd/man/latest/systemctl.html).

## Arrêter et planifier un redémarrage

```bash
shutdown -h now
shutdown -h +10 'Arrêt dans dix minutes'
shutdown -r 16:30
shutdown -c
```

Le support présente également `reboot` et `shutdown -r now`. Vérifier les utilisateurs et les tâches en cours avant l’arrêt. `shutdown -c` annule un arrêt planifié encore en attente ; il ne revient pas sur un arrêt déjà réalisé.

## Schéma explicatif — complément pédagogique

```mermaid
flowchart LR
 F["Firmware"] --> G["GRUB"] --> K["Noyau + initramfs"] --> S["systemd PID 1"]
 S --> C["Cible"] --> U["Services et sessions"]
```

## Autoévaluation

1. `set-default` change-t-il immédiatement la cible courante ?
2. Pourquoi cron redémarre-t-il après un simple `stop` suivi d’un reboot ?
3. Quelle commande distingue les fichiers d’unités des seules unités chargées ?

??? success "Réponses"
    1. Non ; `isolate` agit sur l’état courant.
    2. Son activation au démarrage est restée configurée.
    3. `systemctl list-unit-files`.

## Pour travailler ce module

- [Fiche de révision](../../revision/administration-linux/module-03-demarrage-d-une-distribution-debian.md)
- [Travaux pratiques](../../tp/administration-linux/module-03/index.md)
- [Progression du cours](index.md)
