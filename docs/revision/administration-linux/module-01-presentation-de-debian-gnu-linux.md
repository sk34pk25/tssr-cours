# Fiche de révision — Module 01 — Présentation de Debian GNU/Linux

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

Le support présente Debian comme une base particulièrement adaptée aux serveurs et cite Ubuntu et Linux Mint parmi ses dérivées. Cette orientation pédagogique explique le choix d’un serveur en console dans les TP ; Debian propose également des environnements de bureau.

## Tableau de mémorisation

| Terme | Sens opérationnel | Conséquence pour l’administrateur |
|---|---|---|
| Version numérotée et nom de code | Une publication identifiée, par exemple 11 / Bullseye | Permet de documenter exactement l’OS du TP |
| Stable | Branche de production publiée | Paquets et mises à jour de cette version |
| Testing | Préparation de la prochaine stable | Évolution plus fréquente, contexte de validation différent |
| Unstable / Sid | Développement continu | Changements et problèmes possibles à anticiper |
| Oldstable / oldoldstable | Positions relatives N−1 et N−2 | Vérifier séparément la période de support |
| Experimental | Paquets expérimentaux, pas une distribution complète | Ne constitue pas une quatrième installation complète |

## Se tester sans regarder


1. Quelle différence existe entre `trixie` et `stable` ?
2. Faut-il recopier `user@deb:~$` dans le terminal ?
3. Pourquoi noter la version avant de configurer les dépôts ?

??? success "Réponses"
    1. Le nom de code identifie une version ; l’alias stable change avec les publications.
    2. Non : c’est l’invite, pas la commande.
    3. Les dépôts doivent correspondre à la version et au projet de mise à jour prévu.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux.md) · [TP du parcours](../../tp/administration-linux/index.md).
