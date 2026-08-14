# Tutoriel — Capturer et déployer une image Windows

## Objectif

Préparer un poste de référence, le généraliser, le capturer puis appliquer l’image dans un laboratoire.

## Étapes

1. Installer et mettre à jour le poste de référence.
2. Installer uniquement les applications validées.
3. Nettoyer les données propres à l’utilisateur et créer un instantané.
4. Généraliser et arrêter :

```cmd
C:\Windows\System32\Sysprep\sysprep.exe /oobe /generalize /shutdown
```

5. Ne pas redémarrer le master avant la capture.
6. Démarrer dans WinPE ou via PXE.
7. Capturer l’image WIM avec l’outil prévu par l’atelier.
8. Préparer le disque cible, appliquer l’image et recréer les fichiers de démarrage.
9. Démarrer, parcourir l’OOBE et vérifier pilotes, activation, identité et réseau.

!!! danger
    DiskPart et DISM peuvent effacer ou remplacer un système. Toujours identifier le disque par sa taille et son numéro, puis tester sur une VM jetable.

## Validation

- [ ] Le master est généralisé et arrêté.
- [ ] L’image est stockée hors du poste master.
- [ ] Le poste déployé reçoit une identité propre.
- [ ] Les pilotes et applications fonctionnent.
- [ ] Le journal de déploiement est archivé.
