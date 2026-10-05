# Correction — Module 05 — Gestion du réseau

**Sources originales (A) :** `M05TP01 - Solution - Gestion de la configuration réseau d'un poste` et support M05 TSSR.
**Correction du portail (B) :** contrôles et procédures reformulés à partir des sources.

## Contrôles avant et après configuration

La source distingue l'adresse de l'interface, la route par défaut et la résolution DNS. Relever chaque état avant modification, puis vérifier qu'il correspond au résultat attendu :

```bash
ip a
ip route
cat /etc/resolv.conf
```

Sur le serveur sans interface graphique, la solution configure l'interface dans `/etc/network/interfaces`, les serveurs DNS et domaines de recherche dans `/etc/resolv.conf`, puis redémarre le service `networking`. Les valeurs d'adresse et de DNS doivent être celles du laboratoire courant, jamais des exemples génériques copiés dans un environnement tiers.

Le changement de nom implique `/etc/hostname` et la ligne concernée de `/etc/hosts`. La nouvelle valeur est contrôlée dans un nouveau shell ou une nouvelle session. La seconde interface host-only reste sans passerelle par défaut : elle ne doit pas détourner le trafic du réseau principal.

## Poste graphique et validation

La source utilise la configuration IPv4 manuelle du gestionnaire graphique ; les domaines DNS peuvent nécessiter l'outil indiqué dans la solution. Après désactivation/réactivation de l'interface, vérifier séparément :

1. l'adresse de la VM graphique ;
2. le ping de la VM Debian sans interface graphique ;
3. la connectivité et la résolution vers les hôtes du laboratoire.

Un résultat correct exige la cohérence de ces contrôles, et non un seul ping concluant.

## Voir aussi

- [Présentation du TP](index.md)
- [Énoncé du TP](enonces.md)
- [Fiche de révision — Module 05](../../../revision/administration-linux/module-05-gestion-du-reseau.md)
