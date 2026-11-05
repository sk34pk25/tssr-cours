# Fiche de révision — Module 04 — Debian en mode maintenance

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

| Méthode | Origine de l’environnement | Point déterminant |
|---|---|---|
| Paramètre `single` dans GRUB | Système installé | Authentification root généralement demandée dans ce scénario |
| `init=/bin/bash` | Noyau installé, shell à la place de l’initialisation normale | Services et arrêt ordinaires absents |
| Rescue mode de l’ISO | Environnement externe au système installé | Sélection du système racine à monter |

## Tableau de mémorisation

| Méthode | Origine de l’environnement | Point déterminant |
|---|---|---|
| Paramètre `single` dans GRUB | Système installé | Authentification root généralement demandée dans ce scénario |
| `init=/bin/bash` | Noyau installé, shell à la place de l’initialisation normale | Services et arrêt ordinaires absents |
| Rescue mode de l’ISO | Environnement externe au système installé | Sélection du système racine à monter |

## Se tester sans regarder


1. Pourquoi `/home` peut-il sembler vide dans le shell initial ?
2. Quelle commande rend la racine montée accessible en écriture ?
3. Pourquoi identifier la racine choisie depuis l’ISO ?

??? success "Réponses"
    1. Son volume séparé n’est peut-être pas monté.
    2. `mount -o remount,rw /`.
    3. Le shell de secours et le système à réparer ne sont pas nécessairement la même arborescence.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance.md) · [TP du parcours](../../tp/administration-linux/index.md).
