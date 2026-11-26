# Module 09 — Les pilotes et les imprimantes

[Travaux pratiques](../../tp/systemes-clients/module-09/index.md)

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · Module 09 - Support de cours · 9 pages transcrites
2. Systèmes clients Microsoft
3. Objectifs
4. Pilotes
5. Gestionnaires de périphériques
6. Pilotes
7. Pilotes
8. Pilotes
9. Démonstration
10. Imprimantes
11. Imprimantes
12. Imprimantes
13. Imprimantes
14. Imprimantes
15. Imprimantes
16. Démonstration
17. TP
18. Conclusion
19. Systèmes Clients Microsoft Les pilotes et les imprimantes
20. Énoncé
21. Solution
22. Les pilotes et les imprimantes
23. Proposition de solution

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · Module 09 - Support de cours · 9 pages transcrites"]
    N2["Systèmes clients Microsoft"]
    N3["Objectifs"]
    N4["Pilotes"]
    N5["Gestionnaires de périphériques"]
    N6["Pilotes"]
    N7["Pilotes"]
    N8["Pilotes"]
    N9["Démonstration"]
    N10["Imprimantes"]
    N11["Imprimantes"]
    N12["Imprimantes"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
    N8 --> N9
    N9 --> N10
    N10 --> N11
    N11 --> N12
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · Module 09 - Support de cours · 9 pages transcrites

## Systèmes clients Microsoft

!!! note "À retenir"
    Module 09 – Les pilotes et les imprimantes

Module 09 – Les pilotes et les imprimantes

## Objectifs

!!! note "À retenir"
    Définir un pilote Windows et les pilotes Windows et les imprimantes Utiliser, configurer une imprimante Partager une ressource « imprimante »

**Visuel externe**

```mermaid
flowchart LR
    N1["Définir un pilote"]
    N2["Windows et les pilotes"]
    N3["Windows et les imprimantes"]
    N4["Utiliser, configurer une imprimante"]
    N5["Partager une ressource « imprimante »"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
```

- Définir un pilote
- Windows et les pilotes
- Windows et les imprimantes
- Utiliser, configurer une imprimante
- Partager une ressource « imprimante »

## Pilotes

!!! note "À retenir"
    Prise en charge du matériel Plug and Play : prise en charge « à chaud » Non Plug and Play : nécessite un redémarrage (plus rare) Plusieurs modes de prise en charge Détection et installation automatique Détection et installation manuelle Affichage et paramétrage Outil Gestionnaire de périphériques Devmgmt.msc

**Visuel externe**

```mermaid
flowchart LR
    N1["Prise en charge du matériel"]
    N2["Plug and Play : prise en charge « à chaud »"]
    N3["Non Plug and Play : nécessite un redémarrage (plus rare)"]
    N4["Plusieurs modes de prise en charge"]
    N5["Détection et installation automatique"]
    N6["Détection et installation manuelle"]
    N7["Affichage et paramétrage"]
    N8["Outil Gestionnaire de périphériques"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

- Prise en charge du matériel
- Plug and Play : prise en charge « à chaud »
- Non Plug and Play : nécessite un redémarrage (plus rare)
- Plusieurs modes de prise en charge
- Détection et installation automatique
- Détection et installation manuelle
- Affichage et paramétrage
- Outil Gestionnaire de périphériques
- Devmgmt.msc

## Gestionnaires de périphériques

!!! note "À retenir"
    Affichage des composants pris en charge et non pris en charge Mettre à jour, désactiver, désinstaller Fonctionnalités avancées : Restaurer le pilote, informations détaillées, paramètres Illustration isolée du support — Module 09 - Support de cours

- Affichage des composants pris en charge et non pris en charge
- Mettre à jour, désactiver, désinstaller
- Fonctionnalités avancées : Restaurer le pilote, informations détaillées, paramètres

![Illustration isolée du support — Module 09 - Support de cours](../../assets/course-sources/isolated/f5f6f49eafb0aeb3/g2-p2-1.webp)

Illustration isolée du support — Module 09 - Support de cours

## Pilotes

**Visuel externe**

```mermaid
flowchart LR
    N1["Pour la gestion des composants matériel et logiciel"]
    N2["Spécifiques à chaque architecture : 32 bits ou 64 bits"]
    N3["Les pilotes signés sont privilégiés par Microsoft"]
    N4["Ils permettent de garantir la stabilité des systèmes"]
    N5["Ils sont obligatoires pour les éditions 64 bits"]
    N6["Les principaux fichiers"]
    N7["*.inf : définition du pilote au format texte"]
    N8["*.sys : pilote lui-même"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

- Pour la gestion des composants matériel et logiciel
- Spécifiques à chaque architecture : 32 bits ou 64 bits
- Les pilotes signés sont privilégiés par Microsoft
- Les certificats sont délivrés par Microsoft ou générés en suivant les procédures fournies par Microsoft
- Ils permettent de garantir la stabilité des systèmes
- Ils sont obligatoires pour les éditions 64 bits
- Les principaux fichiers
- *.inf : définition du pilote au format texte
- *.sys : pilote lui-même
- *.cat : certificat fourni par Microsoft ou un tiers de confiance
- *.exe, *.dll, *.xml… : fichiers complémentaires selon les besoins

## Pilotes

**Visuel externe**

```mermaid
flowchart LR
    N1["La prise en charge se fait à partir du fichier INF"]
    N2["Directement depuis le fichier (clic droit Installer)"]
    N3["À partir d’un assistant d’installation (setup.exe) ou de mise à jour"]
    N4["Une fois installé, le pilote est mémorisé par le système"]
    N5["Permet sa réinstallation automatique"]
    N6["Fichiers INF dans C:\Windows\inf"]
    N7["Chaque pilote installé manuellement génère un fichier oemXX.inf"]
    N8["Autres fichiers dans C:\Windows\system32 et C:\Windows\sysWOW64"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
```

- La prise en charge se fait à partir du fichier INF
- Directement depuis le fichier (clic droit Installer)
- À partir d’un assistant d’installation (setup.exe) ou de mise à jour
- Une fois installé, le pilote est mémorisé par le système
- Permet sa réinstallation automatique
- Fichiers INF dans C:\Windows\inf
- Chaque pilote installé manuellement génère un fichier oemXX.inf
- Autres fichiers dans C:\Windows\system32 et C:\Windows\sysWOW64
- Le magasin de pilotes Windows
- Pour une prise en charge immédiate du matériel (installation du système)
- Emplacement : C:\Windows\System32\DriverStore
- Gestion du magasin en ligne de commande avec pnputil

## Pilotes

En complément

- msinfo32 pour le détail du matériel
- driverquery : outil CMD pour lister les pilotes installés
- driverquery /SI pour lister les pilotes signés
- pnputil : gestion du magasin de pilotes (ajout, suppression, information)
- pnputil /enum-drivers pour lister les pilotes tiers (oemXX.inf)
- pnputil /add-driver pilote.inf pour ajouter un pilote au magasin

## Démonstration

## Imprimantes

| Vocabulaire | Définition du support |
| --- | --- |
| Périphérique d’impression | Le matériel : moteur permettant de sortir la feuille imprimée. |
| Imprimante | Le logiciel : envoie l’ordre d’impression au périphérique d’impression (pilote, configuration, file d’attente d’impression, port d’impression). |
| File d’attente d’impression | Service spouleur : conversion numérique du document dans un langage interprétable par le périphérique d’impression. Envoi du job vers le port d’impression. |
| Imprimante locale | Périphérique d’impression directement relié à l’ordinateur via un port local. |
| Imprimante partagée | Imprimante locale partagée sur le réseau grâce à l’OS de l’ordinateur. Disponible si et seulement si l’ordinateur est allumé. |
| Imprimante réseau | Imprimante indépendante. Possède son propre OS, une interface réseau, un service web pour la configuration. |

## Imprimantes

Imprimante locale

- Directement reconnue par le système
- Utilisation d'un pilote générique du magasin de pilote
- Possibilité d'installer le pilote signé du constructeur pour plus de fonctionnalités
- Sécurité NTFS de l'imprimante

(Propriétés de l'imprimante onglet Sécurité)

![Illustration isolée du support — Module 09 - Support de cours](../../assets/course-sources/isolated/f5f6f49eafb0aeb3/g2-p5-1.webp)

Illustration isolée du support — Module 09 - Support de cours

## Imprimantes

!!! note "À retenir"
    Imprimante locale Disponible via le composant du Panneau de configuration Visualiser la file d'attente et autres options Éditer les propriétés de l'imprimante Informations générales Options avancées (horaire de production, priorité…)

Imprimante locale

- Disponible via le composant du Panneau de configuration
- Visualiser la file d'attente et autres options
- Éditer les propriétés de l'imprimante
- Informations générales
- Options avancées (horaire de production, priorité…)

## Imprimantes

Imprimante locale

- Disponible via le composant du Panneau de configuration
- Visualiser la file d'attente et autres options
- Éditer les propriétés de l'imprimante
- Informations générales
- Options avancées (horaire de production, priorité…)
- Partager l'imprimante locale sur le réseau
- Disponible et utilisable via le réseau de l'entreprise
- Accessible depuis le chemin UNC : \\serveur\imprimante
- Disponible si l'ordinateur hôte est allumé
- Les droits NTFS s'appliquent

![Illustration isolée du support — Module 09 - Support de cours](../../assets/course-sources/isolated/f5f6f49eafb0aeb3/g2-p6-1.webp)

Illustration isolée du support — Module 09 - Support de cours

![Illustration isolée du support — Module 09 - Support de cours](../../assets/course-sources/isolated/f5f6f49eafb0aeb3/g2-p6-2.webp)

Illustration isolée du support — Module 09 - Support de cours

## Imprimantes

Imprimante réseau

- Les imprimantes sont généralement raccordées au réseau de l’entreprise
- Le service de rôle Serveur d’impression pour
- Partager plusieurs imprimantes
- Centraliser la gestion des imprimantes
- Simplifier l'accès et la gestion des imprimantes

Réseau

Depuis le client

- Accès au serveur d'impression depuis le chemin UNC
- …puis connecter…

## Imprimantes

Le spouleur d'impression

- Programme qui gère la file d'attente
- Envoie les travaux d'impression au périphérique d'impression
- Peut être déplacé via une clé de la base de registre

Créer un pool d'impression

- Imprimante connectée à plusieurs périphériques d'impression
- Distribuer automatiquement les travaux d'impression à la prochaine imprimante disponible
- Réduit les délais d'attente des documents pour les utilisateurs.

![Illustration isolée du support — Module 09 - Support de cours](../../assets/course-sources/isolated/f5f6f49eafb0aeb3/g2-p7-1.webp)

Illustration isolée du support — Module 09 - Support de cours

## Démonstration

## TP

## Conclusion

!!! note "À retenir"
    Les périphériques ont besoin D’une liaison à un ordinateur Liaison locale Liaison réseau Les ordinateurs ont besoin D’un « mode d’emploi » du périphérique Les imprimantes sont des ressources à part entière Référence du document : 1yLnisoK5zTai4MhKpPNzNqRt4iXBSVHH · SHA-256 f5f6f49eafb0aeb3…

- Les périphériques ont besoin
- D’une liaison à un ordinateur
- Liaison locale
- Liaison réseau
- Les ordinateurs ont besoin
- D’un « mode d’emploi » du périphérique
- Les imprimantes sont des ressources à part entière

Référence du document : 1yLnisoK5zTai4MhKpPNzNqRt4iXBSVHH · SHA-256 f5f6f49eafb0aeb3…

| Systèmes clients Microsoft | Module 09 – Les pilotes et les imprimantes |
| Objectifs | Définir un pilote Windows et les pilotes Windows et les imprimantes Utiliser, configurer une imprimante Partager une ressource « imprimante » |
| Pilotes | Prise en charge du matériel Plug and Play : prise en charge « à chaud » Non Plug and Play : nécessite un redémarrage (plus rare) Plusieurs modes de prise en charge Détection et… |
| Gestionnaires de périphériques | Affichage des composants pris en charge et non pris en charge Mettre à jour, désactiver, désinstaller Fonctionnalités avancées : Restaurer le pilote, informations détaillées, pa… |
| Pilotes | Pour la gestion des composants matériel et logiciel Spécifiques à chaque architecture : 32 bits ou 64 bits Les pilotes signés sont privilégiés par Microsoft Les certificats sont… |
| Pilotes | La prise en charge se fait à partir du fichier INF Directement depuis le fichier (clic droit Installer) À partir d’un assistant d’installation (setup.exe) ou de mise à jour Une… |
| Pilotes | En complément msinfo32 pour le détail du matériel driverquery : outil CMD pour lister les pilotes installés driverquery /SI pour lister les pilotes signés pnputil : gestion du m… |
| Imprimantes | Imprimante locale Directement reconnue par le système Utilisation d'un pilote générique du magasin de pilote Possibilité d'installer le pilote signé du constructeur pour plus de… |
| Imprimantes | Imprimante locale Disponible via le composant du Panneau de configuration Visualiser la file d'attente et autres options Éditer les propriétés de l'imprimante Informations génér… |
| Imprimantes | Imprimante locale Disponible via le composant du Panneau de configuration Visualiser la file d'attente et autres options Éditer les propriétés de l'imprimante Informations génér… |
| Imprimantes | Imprimante réseau Les imprimantes sont généralement raccordées au réseau de l’entreprise Le service de rôle Serveur d’impression pour Partager plusieurs imprimantes Centraliser… |
| Imprimantes | Le spouleur d'impression Programme qui gère la file d'attente Envoie les travaux d'impression au périphérique d'impression Peut être déplacé via une clé de la base de registre C… |
| Conclusion | Les périphériques ont besoin D’une liaison à un ordinateur Liaison locale Liaison réseau Les ordinateurs ont besoin D’un « mode d’emploi » du périphérique Les imprimantes sont d… |
| Énoncé | Lisez l'ensemble de cet atelier avant de vous lancer dans la pratique |
| Solution | Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger. |
| Proposition de solution | Sur Win10-XX Avec la commande cmd.exe adaptée, générez les fichiers CSV suivants : o Pilotes_detail.csv recensant les informations détaillées sur l’ensemble des pilotes o Pilote… |
