# Énoncé · Utilisation du RAID

Durée estimée : 1 heure. Avoir suivi les modules 1 à 4 et réalisé le TP précédent. Transcription dans le [module 04](../../../modules/16-sauvegarde-et-restauration/module-04-redondance-de-donnees-raid.md).

Objectif : configurer et manipuler une solution RAID.

Supprimer les serveurs existants, puis installer SRV-FIC2 : Windows 2019 serveur, disque 40 Go, RAM 2048.

Miroir :

1. Ajouter un disque de 5 Go et un disque de 10 Go.
2. Initialiser en GPT. L’énoncé écrit « GUI Partition Table ».
3. Créer le volume miroir. Noter la taille affichée : la réponse n’est pas fournie.
4. Créer un volume simple avec l’espace restant et peupler les deux volumes.
5. Retirer à chaud le disque de 5 Go, noter l’état, retirer le miroir manquant, vérifier l’explorateur, remplacer le disque et reconstruire.

RAID 5 :

1. Ajouter cinq disques. L’énoncé écrit « 5 Gb ».
2. Créer le RAID 5, noter la taille, peupler.
3. Retirer un disque à chaud, noter l’état, retirer le manquant, vérifier l’accès, remplacer et reconstruire.

Bonus : refaire ces organisations depuis le gestionnaire de serveur, pools de stockage, nouveau disque virtuel. Dire si les disques restent visibles dans le gestionnaire de disque.

[Correction inexistante](corrections.md)
