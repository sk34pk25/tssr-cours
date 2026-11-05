# Fiche de révision — Module 06 — Gestion des paquets logiciels

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

Le support reprend stable, testing, unstable/Sid, oldstable et oldoldstable. Experimental est un ensemble de paquets expérimentaux, pas un système complet autonome. Un serveur de production se rattache à une version choisie et à sa politique de maintenance.

## Tableau de mémorisation

| Élément | Sens |
|---|---|
| `deb` | Paquets binaires ; `deb-src` concerne leurs sources |
| URI | Emplacement du dépôt : HTTP, fichier local, média… |
| `bookworm` | Suite ou nom de code ciblé |
| `main contrib` | Composants à consulter |

## Se tester sans regarder


1. Quelle commande remplace `apt-get search` ?
2. `dpkg -l` interroge-t-il tout le dépôt distant ?
3. Pourquoi ne pas copier les lignes Bookworm sur un serveur Bullseye sans préparation ?

??? success "Réponses"
    1. `apt-cache search` ou `apt search`.
    2. Non, la base locale.
    3. Cela change la version visée et engage une migration majeure.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels.md) · [TP du parcours](../../tp/administration-linux/index.md).
