# Fiche de révision — Module 04 — Administration à distance

## À savoir refaire

- Identifier la clé d’hôte puis authentifier le compte.
- Garder la clé privée localement et distribuer le fichier public voulu.
- Distinguer mot de passe de compte et phrase secrète de la clé.
- Lire dans quel sens part chaque copie `scp`.

## Se tester

1. Quel fichier est transmis au serveur par `ssh-copy-id -i` ?
2. Pourquoi une phrase secrète peut-elle être demandée après mise en place des clés ?
3. Dans `scp hote:/etc/resolv.conf .`, où est la source ?

??? success "Réponses"
    1. La clé publique désignée.
    2. Elle protège la clé privée utilisée par le client.
    3. Sur l’hôte distant, au chemin `/etc/resolv.conf`.

[Cours optimisé et références](../../modules/15-services-reseau-en-environnement-linux/module-04-administration-a-distance.md) · [Travaux pratiques](../../tp/services-reseau-linux/module-04/index.md).
