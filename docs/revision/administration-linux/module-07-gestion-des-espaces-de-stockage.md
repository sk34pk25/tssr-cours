# Fiche de révision — Module 07 — Gestion des espaces de stockage

**Fiche pédagogique issue du cours optimisé ; les précisions externes restent identifiées dans le cours complet.**

## Repère essentiel

## Lire MBR et GPT

## Tableau de mémorisation

| Sujet | MBR, scénario « legacy » | GPT |
|---|---|---|
| Structure | Secteur initial avec code d’amorçage, quatre entrées et signature | En-têtes et tableaux de partitions avec identifiants GUID |
| Organisation | Partitions primaires, éventuelle partition étendue contenant les logiques | Entrées de partitions sans structure primaire/étendue équivalente |
| Limites | Dépendent notamment de l’adressage et de la taille des secteurs | Capacités et nombre d’entrées bien plus importants |

## Se tester sans regarder


1. Que fait `q` avant l’écriture ?
2. Le type `8e` formate-t-il une partition ?
3. Pourquoi vérifier taille et identité du disque, en plus du nom `/dev/sdb` ?

??? success "Réponses"
    1. Il abandonne les modifications en attente.
    2. Non : c’est un type de partition MBR.
    3. L’ordre de détection peut changer et le nom seul ne prouve pas que c’est le bon disque.


## Contrôle de maîtrise

- [ ] Expliquer les termes avec un exemple concret.
- [ ] Justifier la commande choisie et son effet avant de l’exécuter.
- [ ] Distinguer ce que le système fait maintenant et ce qui est configuré pour plus tard.
- [ ] Vérifier le résultat sur la machine réelle et identifier les différences de version.

[Reprendre le cours complet](../../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage.md) · [TP du parcours](../../tp/administration-linux/index.md).
