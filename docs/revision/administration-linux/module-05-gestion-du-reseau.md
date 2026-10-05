# Fiche de révision — Module 05 — Gestion du réseau

**Sources originales (A) :** support M05 et TP M05 TSSR.
**Fiche de révision (B) :** synthèse reformulée des sources.

## Les quatre contrôles réseau

| Élément | Contrôle | Erreur à éviter |
|---|---|---|
| Interface et adresse | `ip a` | conclure sans vérifier le préfixe |
| Routage | `ip route` | ajouter une seconde passerelle par défaut |
| DNS | `/etc/resolv.conf` et une requête de nom | confondre résolution et connectivité IP |
| Nom d'hôte | `/etc/hostname` et `/etc/hosts` | modifier un seul des deux fichiers source |

## Méthode de diagnostic

1. Relever l'interface, l'adresse, les routes et la résolution avant modification.
2. Appliquer une seule configuration au contexte de laboratoire.
3. Vérifier l'adresse puis la route par défaut.
4. Tester une cible IP, puis un nom d'hôte.
5. Vérifier le nom de la machine dans une nouvelle session.
6. Consigner ou restaurer le résultat demandé.

## À retenir

- Les valeurs de salle (adresses, DNS, domaines et noms d'hôtes) sont des données de laboratoire, pas une recette universelle.
- La seconde interface host-only ne reçoit pas de passerelle par défaut dans le TP.
- Sur le serveur, les fichiers de configuration IP et DNS sont distincts dans la source.
- Sur le poste graphique, le gestionnaire de réseau prend en charge la configuration IPv4 mais des paramètres DNS peuvent exiger un outil complémentaire indiqué dans le support.

## Liens utiles

- [Cours complet](../../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau.md)
- [TP — Gestion du réseau](../../tp/administration-linux/module-05/index.md)
- [Kahoot du module](../../kahoot/05-administration-debian-gnu-linux-module-05-gestion-du-reseau.md)
