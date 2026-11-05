# Fiche de révision — Module 05 — Gestion du réseau

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

```bash
ip address
ip route
cat /etc/resolv.conf
```

## Tableau de mémorisation

| Interface / rôle | Adressage demandé | Route par défaut |
|---|---|---|
| Serveur, première carte | `10.X.Y.1/16` : X = réseau de salle, Y = numéro de stagiaire | `10.X.255.254` |
| Serveur, deuxième carte Host-only | `192.168.100.1/24` | Aucune sur cette carte |
| Client graphique | Adresse distincte compatible avec la première carte du serveur | Selon le segment et la connectivité attendue |

## Se tester sans regarder


1. Quel est le réseau de `10.49.222.1/16` ?
2. Pourquoi éviter une passerelle sur la carte Host-only du TP ?
3. Une édition de resolv.conf est-elle toujours durable ?

??? success "Réponses"
    1. `10.49.0.0/16`.
    2. Cette carte relie un segment local ; le TP ne lui donne pas le rôle de sortie par défaut.
    3. Non ; le fichier peut être généré par le gestionnaire réseau.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau.md) · [TP du parcours](../../tp/administration-linux/index.md).
