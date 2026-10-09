# Fiche de révision — Module 03 — L’adressage IPv4

## Lire une adresse IPv4

- IPv4 : 32 bits, soit quatre octets.
- Le masque ou préfixe CIDR sépare la partie réseau et la partie hôte.
- L’adresse réseau identifie le bloc ; la diffusion place tous les bits hôte à `1`.
- Les hôtes utilisables sont compris entre ces deux adresses.

## Méthode de calcul

1. écrire l’adresse et le masque ;
2. convertir en binaire lorsque le calcul le nécessite ;
3. appliquer `AND` pour obtenir l’adresse réseau ;
4. mettre les bits hôte à `1` pour la diffusion ;
5. vérifier que l’adresse analysée n’est pas réseau ou diffusion si elle doit être attribuée à un hôte.

## Exemples source

| Adresse | Réseau | Diffusion | Plage d’hôtes |
|---|---|---|---|
| `192.168.10.100/24` | `192.168.10.0` | `192.168.10.255` | `.1` à `.254` |
| `172.25.192.0/20` | `172.25.192.0` | `172.25.207.255` | `172.25.192.1` à `172.25.207.254` |

## Sous-réseautage

Le TP demande de relier le besoin en segments et hôtes au préfixe proposé, puis de lister les blocs dans l’ordre. Conservez les calculs intermédiaires : ils permettent de vérifier le masque, les réseaux disponibles et les plages inutilisées.

!!! warning "Point à faire vérifier"
    Le scénario 1 du TP source demande 25 hôtes par segment, mais sa correction source associe `/28` à 14 hôtes utilisables. Ne modifiez ni l’énoncé ni la correction : signalez cet écart lors de la relecture.

## Liens

[Cours complet](../../modules/01-bases-reseaux/module-03-l-adressage-ipv4.md) · [Énoncé du TP](../../tp/reseaux/module-03/enonces.md) · [Correction](../../tp/reseaux/module-03/corrections.md) · [Kahoot](../../kahoot/bases-reseaux-m03-adressage-ipv4.md)

## Provenance

- **Sources A :** support IPv4 M03 et énoncé/correction M03-04 TSSR Drive live.
- **Structuration B :** synthèse pédagogique sans apport externe.
