# Module 04 — Le routage

Une route donne un réseau de destination, un masque et un prochain saut. Le routeur prend une décision pour chaque paquet. Les routes peuvent être configurées statiquement ou apprises dynamiquement. Le TP utilise des routes statiques et des routeurs pfSense.

## Décider si la destination est locale

Avec `192.168.1.10/24` et `192.168.1.20/24`, les postes appartiennent à `192.168.1.0/24`. Si nécessaire, le premier diffuse une requête ARP pour apprendre la MAC du second. Il envoie alors le paquet à cette MAC. Si la destination est distante, le poste cherche la MAC de sa passerelle et lui remet la trame. L’adresse IP de destination reste celle de l’hôte distant.

À chaque saut, le routeur lit la destination IP, choisit la route, puis prépare une nouvelle trame sur son interface de sortie. Il recherche par ARP l’hôte directement connecté ou le routeur suivant. Le chemin retour doit fonctionner lui aussi. Un ping perdu peut venir d’une route manquante, d’un filtre ou d’une réponse impossible.

Le support associe `192.168.2.140/26` à la passerelle `192.168.2.254`. Ce poste appartient à `192.168.2.128/26`, dont les hôtes vont de `.129` à `.190`. Une passerelle comme `.190` serait joignable sur ce sous-réseau si elle était configurée sur le routeur. Vérifier l’adresse et le masque ensemble. Les MAC terminées par `1R` ou `2R` sont des symboles du schéma. Une MAC réelle s’écrit en hexadécimal.

## Distinguer routage, NAT et filtrage

Le routage choisit où envoyer le paquet. Le filtrage autorise ou refuse le passage. La traduction d’adresse et de port modifie les valeurs exposées sur une interface. Dans l’exemple du support, `192.168.20.13:3008` contacte `80.87.128.67:80`. Le routeur traduit la source en `90.83.78.224:49010`, puis utilise son état pour remettre la réponse à `192.168.20.13:3008`. Les IP publiques du schéma sont des valeurs historiques d’illustration.

## Relier les réseaux du TP

Dans le TP 1, `CLI-00` utilise VMNet10 avec `192.168.0.10/24`. `RTR-00` reçoit une adresse dynamique sur une carte bridge, `172.16.0.1/16` sur une autre et `192.168.0.254/24` sur VMNet10. Les VM fournies `CLI-01-TP8-OK` et `RTR-01-TP8-OK` complètent la topologie. Tester client → routeur, routeur → routeur puis client → client, et documenter les routes, interfaces et règles utilisées.

Le TP 2 relie trois routeurs. Le corrigé utilise `172.16.200.96/29` côté CLI-00 et `192.168.0.96/29` côté CLI-01. Les liaisons entre routeurs sont `4.4.4.4/30` et `8.8.8.8/30`. Reproduire ces adresses uniquement dans l’environnement de formation où elles sont prévues. Les « première » et « dernière » adresses d’un réseau désignent ici les adresses d’hôte utilisables.

| Routeur | Préfixe de destination | Prochain saut |
|---|---|---|
| RTR-01 | `0.0.0.0/0` | `4.4.4.5` |
| RTR-00 | `172.16.200.96/29` | `4.4.4.6` |
| RTR-00 | `192.168.0.96/29` | `8.8.8.10` |
| RTR-02 | `0.0.0.0/0` | `8.8.8.9` |

Les réseaux directement connectés figurent déjà dans la table. Les deux routeurs de bord peuvent avoir une route par défaut vers RTR-00. RTR-00 a besoin de connaître les deux réseaux distants. La correction demande de réduire les routes ajoutées tout en conservant la communication entre tous les hôtes.

```cmd
ipconfig /all
arp -a
route print
tracert 192.168.0.98
```

Contrôler d’abord le lien, l’adresse, le masque et la passerelle. Examiner ensuite la route vers le réseau distant, le prochain saut et les règles pfSense. Comparer les résultats des deux sens du trajet. Les captures d’installation montrent les options console et l’assistant Web dans la version historique du TP. Employer les paramètres réels de chaque VM.

### Mini-quiz

1. Quelle MAC le client utilise-t-il pour joindre un réseau distant ?
2. Pourquoi `.254` est-elle inadaptée à `192.168.2.140/26` ?
3. Quelle différence entre une route et une règle de filtrage ?

??? success "Réponses"
    1. La MAC de sa passerelle sur le réseau local.
    2. Elle appartient à un autre sous-réseau que `.140/26`.
    3. La route indique le chemin. La règle décide si le trafic peut l’emprunter.


## Appliquer le cours

- [Travaux pratiques et démonstrations](../../tp/services-reseaux-microsoft/module-04/index.md)
- [Fiche de révision](../../revision/services-reseaux-microsoft/module-04-module-04.md)
