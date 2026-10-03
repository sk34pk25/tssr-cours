# Module 05 — Gestion du réseau

**Sources originales (A) :** support et TP TSSR « Gestion de la configuration réseau d’un poste ».
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Lire la configuration IP d’un poste Debian.
- Identifier adresse IP, masque, passerelle et résolution de noms.
- Vérifier une modification de réseau sans supposer sa réussite.

## Les éléments à contrôler

La source rappelle qu’une configuration IP comprend généralement une adresse, un masque, éventuellement une passerelle et des serveurs de noms. Une connectivité apparente ne garantit pas que tous ces éléments sont corrects : tester l’interface, le routage et la résolution séparément.

```bash
ip a
ip route
ping -c 4 adresse-ip
getent hosts nom-hote
```

## Procédure

1. Relever l’état actuel avant toute modification.
2. Modifier uniquement le paramètre requis dans l’environnement de laboratoire.
3. Contrôler l’adresse et les routes.
4. Tester d’abord une cible IP, puis la résolution d’un nom.
5. Consigner le résultat ou restaurer la configuration attendue.

## À retenir

Une configuration réseau est complète lorsque l’interface, le routage et la résolution fonctionnent conformément au besoin ; un seul ping ne suffit pas à conclure.

## Vérification des acquis

1. Quelle commande affiche les routes ?
2. Quel contrôle distingue un problème DNS d’un problème de connectivité IP ?

??? success "Réponses"
    1. `ip route`.
    2. Tester une cible IP puis un nom d’hôte.
