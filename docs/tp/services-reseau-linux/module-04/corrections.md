# Corrigés commentés — Module 04 — Administration à distance

La démarche suit les objectifs des énoncés. Les écarts du corrigé source et les adaptations sont signalés au moment de la manipulation. Les transcriptions complètes restent dans l’onglet Original.

## TP 1 — Installation, accès par clé et copies SSH

Confirmer la communication entre Cli-db-10 et les trois cibles. Sur chacun des serveurs, comparer la version Debian et les dépôts configurés. Les trois lignes Buster de l’énoncé appartiennent au scénario ancien. Actualiser les index des dépôts correspondant à l’OS et vérifier le paquet `openssh-server`. Installer Terminator sur le client.

Sur Cli-db-10, ouvrir une session avec le compte administrateur de la maquette et créer la paire de clés. Copier la clé publique vers le compte ordinaire de chaque serveur. Dans l’exemple `X=10`, les cibles sont RouTux à `172.18.10.254`, DEB-S1 à `192.168.10.11` et DEB-S2 à `192.168.10.12`. Vérifier l’empreinte hôte et établir une nouvelle session vers chacune. Le mot de passe du compte distant et la phrase secrète locale jouent deux rôles distincts.

```bash
ssh-copy-id -i ~/.ssh/tssr-lab.pub utilisateur@192.168.10.11
ssh -i ~/.ssh/tssr-lab utilisateur@192.168.10.11
```

Le corrigé montre également la copie des clés autorisées vers root. Cette partie se comprend avec la politique `PermitRootLogin` du serveur. La démarche complémentaire réalise les copies via un compte ordinaire disposant des droits de lecture nécessaires. Séparer les fichiers selon le serveur pour éviter d’écraser un homonyme.

```bash
mkdir -p conf_deb-s1
scp utilisateur@192.168.10.11:/etc/resolv.conf conf_deb-s1/
scp utilisateur@192.168.10.11:/etc/network/interfaces conf_deb-s1/
```

Récupérer également la configuration APT pertinente. Si un fichier demande une élévation, utiliser la procédure de copie autorisée par le laboratoire et vérifier les droits sur la copie. Le compte rendu relève l’identité distante, l’empreinte vérifiée et les fichiers reçus depuis chaque machine.

[Reprendre les énoncés](enonces.md) · [Exemples détaillés et références du cours](../../../modules/15-services-reseau-en-environnement-linux/module-04-administration-a-distance.md).
