# Dépannage — Client sans réseau

## Symptôme

Le poste n’accède ni aux services internes ni à Internet.

## Diagnostic

```mermaid
flowchart TD
    A["Lien physique ou Wi-Fi actif ?"] -->|"Non"| A1["Câble · radio · pilote · port du switch"]
    A -->|"Oui"| B{"Adresse IPv4 attendue ?"}
    B -->|"APIPA 169.254.x.x"| B1["Contrôler DHCP, VLAN et bail"]
    B -->|"Oui"| C{"Passerelle joignable ?"}
    C -->|"Non"| C1["Masque · ARP · VLAN · pare-feu local"]
    C -->|"Oui"| D{"IP distante joignable ?"}
    D -->|"Non"| D1["Route et filtrage intermédiaire"]
    D -->|"Oui"| E{"Nom DNS résolu ?"}
    E -->|"Non"| E1["Serveur DNS · suffixe · cache"]
    E -->|"Oui"| F["Tester le service applicatif"]
```

<p class="tssr-caption">Procéder de la couche locale vers le service : chaque réponse réduit le domaine de recherche.</p>

| Test | Résultat | Interprétation |
|---|---|---|
| Interface | Désactivée / lien absent | Câble, Wi-Fi, pilote ou commutateur |
| Adresse | APIPA `169.254.0.0/16` | DHCP absent ou inaccessible |
| Passerelle | Injoignable | Masque, VLAN, ARP, pare-feu local |
| IP distante | Joignable | Routage opérationnel |
| Nom DNS | Non résolu | DNS mal configuré ou indisponible |

Corriger une hypothèse à la fois, noter le résultat observé, puis recommencer les tests depuis le début afin de prouver le rétablissement.
