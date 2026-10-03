# Module 05 — Le service DHCP

**Séquence :** Services réseaux en environnement Microsoft
**Sources originales (A) :** support, fiches, énoncés et corrections TSSR du module 05.
**Contenu du portail (B) :** reformulation structurée des sources TSSR.

## Objectifs

- Définir le rôle DHCP et le contenu d’un bail.
- Expliquer les étapes DORA d’obtention d’un bail.
- Vérifier une configuration DHCP et le comportement d’un client.

## Le bail DHCP

Un bail est l’ensemble d’informations transmises à un client : durée, adresse IP, masque et autres paramètres. La source présente la séquence DORA pour l’obtention d’un bail et les étapes de renouvellement, notamment à 50 %, 87,5 % et à expiration du bail.

## Méthode

1. Définir l’étendue et les options exigées par le scénario.
2. Vérifier que le serveur est autorisé et que le service est actif dans le laboratoire.
3. Demander un bail depuis un client de test.
4. Contrôler l’adresse obtenue, les options et les événements du serveur.

## À retenir

DHCP centralise la configuration IP, mais un bail doit être lu avec ses options : adresse seule, masque ou passerelle isolés ne suffisent pas à valider la connectivité.

## Vérification des acquis

1. Que contient un bail DHCP ?
2. Que signifie DORA dans le déroulement du bail ?

??? success "Réponses"
    1. Une adresse, un masque, une durée et éventuellement d’autres paramètres.
    2. Les étapes d’obtention d’un bail DHCP.
