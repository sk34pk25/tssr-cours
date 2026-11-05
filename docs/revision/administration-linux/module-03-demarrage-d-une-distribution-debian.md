# Fiche de révision — Module 03 — Démarrage d’une distribution Debian

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

Dans `/boot`, le support distingue `vmlinuz` (noyau), `initrd` (image initiale), `System.map` et `config`. Les suffixes correspondent aux versions installées. Une ligne GRUB comportant `root=/dev/mapper/... ro quiet` indique notamment le périphérique racine, le montage initial en lecture seule et la réduction des messages. En appuyant sur `e`, on modifie temporairement l’entrée sélectionnée ; il ne faut pas recopier le chemin du noyau d’une autre machine.

## Tableau de mémorisation

| Cible étudiée | Rôle | Ancien repère numérique du support |
|---|---|---|
| `poweroff.target` | Arrêter la machine | 0 |
| `rescue.target` | Environnement de secours restreint | 1 |
| `multi-user.target` | Fonctionnement multiutilisateur sans bureau | 3 |
| `graphical.target` | Fonctionnement avec environnement graphique | 5 |
| `reboot.target` | Redémarrer | 6 |

## Se tester sans regarder


1. `set-default` change-t-il immédiatement la cible courante ?
2. Pourquoi cron redémarre-t-il après un simple `stop` suivi d’un reboot ?
3. Quelle commande distingue les fichiers d’unités des seules unités chargées ?

??? success "Réponses"
    1. Non ; `isolate` agit sur l’état courant.
    2. Son activation au démarrage est restée configurée.
    3. `systemctl list-unit-files`.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian.md) · [TP du parcours](../../tp/administration-linux/index.md).
