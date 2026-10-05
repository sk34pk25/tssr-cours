# Énoncé — Module 08 — Stockage avancé LVM

!!! danger "Disque de laboratoire uniquement"
    Identifier le disque ajouté à la machine virtuelle avant toute écriture. Ne jamais appliquer ce TP à un disque contenant des données utiles.

**Sources originales (A) :** M08TP01 et support M08 Drive. **Énoncé (B) :** reformulation structurée.

1. Ajouter à la VM un disque de laboratoire de 40 Go et vérifier sa présence dans `/dev`.
2. Créer sur ce disque une partition principale couvrant le disque, prévue pour LVM.
3. Ajouter cette partition au groupe de volumes déjà présent.
4. Créer le volume logique `lvvar` de 20 Go, puis étendre `lvhome` avec l’espace libre restant.
5. Pour une détection SCSI sans redémarrage, identifier la chaîne du disque avec `udevadm info --query=path --name=sda`, puis déclencher le scan du `host` identifié, uniquement dans le laboratoire.
