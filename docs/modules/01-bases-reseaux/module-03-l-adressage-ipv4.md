# Module 03 — L’adressage IPv4

**Séquence :** Bases des réseaux

## Objectifs

- décomposer une adresse IPv4 en identifiant réseau et partie hôte ;
- relier un masque ou un préfixe CIDR au réseau et aux hôtes ;
- calculer une adresse réseau, une adresse de diffusion et une plage d’hôtes ;
- appliquer le raisonnement aux sous-réseaux étudiés dans le TP.

## 1. Structure d’une adresse IPv4

Une adresse IPv4 comporte **32 bits**, soit quatre octets écrits en notation décimale pointée. Les sources présentent l’adresse comme la combinaison d’un identifiant réseau et d’un identifiant hôte. Le masque détermine quels bits appartiennent à chaque partie.

Exemple source : `192.168.1.10` s’écrit `11000000.10101000.00000001.00001010` en binaire.

## 2. Masque et notation CIDR

Un préfixe CIDR indique le nombre de bits réservés au réseau. Les sources donnent notamment :

| Préfixe | Masque décimal | Bits hôte | Hôtes utilisables cités |
|---|---|---:|---:|
| `/24` | `255.255.255.0` | 8 | 254 |
| `/26` | `255.255.255.192` | 6 | 62 |
| `/28` | `255.255.255.240` | 4 | 14 |

Les classes IPv4, les plages privées, la boucle locale et APIPA sont présentées dans les sources comme repères historiques et de diagnostic. Ils sont utilisés ici au niveau des exemples TSSR, sans compléter leur portée par une règle externe.

## 3. Adresse réseau, diffusion et hôtes

Pour obtenir l’adresse réseau, appliquer l’opération logique **AND** entre l’adresse et le masque. Pour l’adresse de diffusion, placer les bits de la partie hôte à `1`. Les hôtes utilisables se situent entre l’adresse réseau et la diffusion, sans utiliser ces deux adresses.

### Exemple source : `192.168.10.100/24`

| Élément | Résultat |
|---|---|
| Adresse réseau | `192.168.10.0` |
| Diffusion | `192.168.10.255` |
| Plage d’hôtes | `192.168.10.1` à `192.168.10.254` |
| Type indiqué par la source | Adresse privée utilisée dans un LAN |

### Exemple source : `172.25.192.0/20`

Les sources associent le masque `255.255.240.0` au préfixe `/20`, donnent l’adresse réseau `172.25.192.0`, la diffusion `172.25.207.255` et la plage `172.25.192.1` à `172.25.207.254`.

## 4. Sous-réseautage

Le TP demande de vérifier la validité d’adresses CIDR, de déterminer les masques adaptés, de calculer des sous-réseaux et d’identifier des plages inutilisées. Procéder dans cet ordre :

1. relever le réseau de départ, le préfixe et le besoin ;
2. déterminer le nombre de bits réseau et hôte à partir de l’exemple demandé ;
3. calculer réseau, diffusion et hôtes pour chaque bloc ;
4. vérifier que l’adresse donnée n’est ni l’adresse réseau ni la diffusion lorsqu’un hôte est demandé ;
5. comparer le résultat à la correction seulement après la tentative.

!!! warning "Écart conservé entre énoncé et correction"
    Le scénario 1 du TP source demande 25 hôtes par segment ; sa correction source propose un masque `/28`, qui est associé à 14 hôtes utilisables dans le même document. Cet écart est conservé pour revue : il ne doit pas être corrigé ou généralisé silencieusement.

## 5. Ressource Packet Tracer

La ressource `M03_TP05 - Ressource - Adressage IP avec Packet Tracer.pka` est attestée dans Drive et reliée au TP. Son contenu est binaire : cette page ne l’interprète pas. Ouvrez-la avec Cisco Packet Tracer et rattachez vos observations aux calculs IPv4 étudiés.

## Vérifications et liens

- [TP — présentation et ressource Packet Tracer](../../tp/reseaux/module-03/index.md)
- [Énoncé du TP sous-réseaux](../../tp/reseaux/module-03/enonces.md)
- [Correction du TP sous-réseaux](../../tp/reseaux/module-03/corrections.md)
- [Fiche de révision](../../revision/reseaux/module-03-l-adressage-ipv4.md)
- [Kahoot du module](../../kahoot/bases-reseaux-m03-adressage-ipv4.md)

## Source et provenance

- **Sources A — TSSR Drive live :** support partagé `cours kahoot module 3 et 4.txt`, Drive `1CzvgvyPCTzyKee2jnBfryFhcr8-MA7XT`, SHA-256 `6742f4b5b0b756fdecf31f1c9e91acbdaab2a93cca15f31b29e4c85e818b0239` ; énoncé `M03-04-TP-Sous-réseaux.pdf`, Drive `1tjvGBelc6J2jftBAFjm0l2psagWX-E-p`, SHA-256 `ad726effb62af7f234555d36fe84d9e5c1bb09fb986c7ab4ebc036d9ca0e6daf` ; correction `M03-04-TP-Sous-réseaux_Correction.pdf`, Drive `1ioU0uTtjNzBXzO5gbMCT3bxfja9CyLIc`, SHA-256 `3a47c869c9c914eac7b308b58e0e7ac4c6b34a497ddbe8fb5ac31e4c3f7a52e1`.
- **Structuration B :** progression pédagogique, tableaux et méthodes fondés uniquement sur le périmètre IPv4 M03 des sources A.
