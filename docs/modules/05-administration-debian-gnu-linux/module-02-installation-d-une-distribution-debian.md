# Module 02 — Installation d’une distribution Debian

**Cours optimisé — reformulation pédagogique du support et des TP associés.** Les exemples du parcours conservent leur contexte Debian 11 ; les corrections et actualisations sont identifiées comme compléments externes. Les transcriptions intégrales se consultent dans l’onglet Original.
## Choisir une méthode d’installation

Le support distingue le média qui lance l’installeur, la provenance des paquets et le système que l’on souhaite obtenir. Une interface graphique d’installation peut parfaitement produire un serveur sans bureau.

| Méthode du support | Principe | Point à vérifier |
|---|---|---|
| Live | Tester un environnement avant installation | Le test ne remplace pas l’installation sur disque |
| DVD complet | Beaucoup de paquets disponibles hors ligne | Mises à jour postérieures au média |
| Netinstall | Petit média puis récupération sur un dépôt | Accès réseau et miroir accessibles |
| USB | Porter une image d’installation sur une clé | Méthode d’écriture adaptée à l’image |
| PXE / réseau | Obtenir une configuration réseau puis un chargeur | Services réseau et fichier d’amorçage |
| Installation automatisée | FAI ou préconfiguration | Réponses, cible et reproductibilité |
| Clonage | Déployer une image préparée avec FOG, Ghost, Acronis ou Clonezilla | État et identité des systèmes clonés |

Ventoy, Etcher, Rufus et Unetbootin sont les exemples d’outils USB cités, pas des étapes obligatoires. Pour un grand parc, une installation automatisée reconstruit un système à partir de paramètres, tandis que le clonage réutilise une image préparée.

## Préparer les deux machines du TP

| Paramètre source | Machine avec bureau | Serveur sans bureau |
|---|---|---|
| Version du scénario | Debian 11 | Debian 11 |
| Média | Netinstall | DVD |
| Disque dynamique | 40 Go | 10 Go |
| Mémoire | 4 096 Mo | 2 048 Mo |
| Réseau | Bridged donnant accès à Internet | Bridged donnant accès au réseau du laboratoire |
| Logiciels | Bureau Debian et utilitaires usuels | Serveur SSH et utilitaires usuels |

Le pont réseau du scénario suppose un environnement de formation adapté. Le nom de domaine de formation est affiché avec un repère neutralisé dans les transcriptions. Le nom d’hôte, les comptes et la connectivité se choisissent avant la copie des paquets.

## Parcours de l’installeur

1. Démarrer sur le média connecté à la VM, puis choisir l’installeur graphique ou texte.
2. Choisir français, France et clavier français pour reproduire le TP. Une installation en anglais avec clavier français reste un choix distinct.
3. Définir le nom d’hôte et, si nécessaire, le domaine DNS. Un domaine DNS n’inscrit pas automatiquement le poste dans un annuaire.
4. Choisir la politique des comptes : mot de passe root puis utilisateur ordinaire dans les TP fournis.
5. Définir le partitionnement et les points de montage. Vérifier le disque sélectionné avant validation.
6. Configurer le miroir et un proxy uniquement s’il existe. Le TP serveur demande de ne pas utiliser de miroir à cette étape.
7. Sélectionner les tâches logicielles, puis installer le chargeur de démarrage correspondant au mode d’amorçage.
8. Redémarrer sur le disque installé et contrôler comptes, réseau et stockage.

## Root, su et sudo

Dans le parcours Debian de la source, donner un mot de passe à root ne donne pas automatiquement les droits sudo au premier utilisateur. Laisser ce mot de passe vide dans l’installeur conduit à un parcours différent, avec administration via le premier utilisateur et sudo. **Ce sont des paramètres d’installation, pas une propriété immuable des comptes.**

```bash
su -
sudo -i
```

`su -` ouvre un environnement de connexion de l’identité cible, root par défaut. `sudo -i` dépend des autorisations sudo et demande généralement le mot de passe de l’utilisateur qui l’invoque. Le support montre aussi `sudo passwd root` pour attribuer ensuite un mot de passe à root ; cette modification doit correspondre à la politique choisie.

## Partitionnement du scénario

Sur la machine graphique, le TP impose un partitionnement manuel avec LVM : swap de 2 048 MB, racine ext4 de 20 GB, FAT32 de 5 GB montée sur `/windows`, et reste en ext4 pour `/home`. Sur le serveur, le mode assisté utilise tout le disque avec LVM et sépare `/home`, `/var` et `/tmp`. Les noms de VG/LV visibles dans une correction ne remplacent pas les noms réellement créés sur votre VM.

Le support propose une règle historique pour le swap : 1,5 fois la RAM sous 1 Go, même taille jusqu’à 2 Go, puis 2 Go ou davantage selon le besoin. Cette règle décrit le support ; elle ne dimensionne pas automatiquement une machine moderne.

!!! info "Clarification externe — racine, swap et amorçage"
    Une partition swap séparée n’est pas une obligation universelle : le besoin et le dimensionnement dépendent notamment de la charge et de l’hibernation. La disposition du disque dépend aussi du firmware ; un système UEFI nécessite une disposition adaptée avec partition système EFI. Ne recopiez pas aveuglément l’étape BIOS `/dev/sda` sur une installation UEFI. Référence : [guide d’installation Debian, partitionnement](https://www.debian.org/releases/trixie/amd64/ch06s03.fr.html).

## Contrôles et erreurs fréquentes

Après installation, vérifier la présence des montages demandés, ouvrir une session ordinaire et tester le mécanisme d’élévation choisi. Si le serveur affiche un bureau, revoir la sélection des logiciels ; si l’installeur était graphique, cela ne prouve rien sur le système installé. Une absence de paquets récents sur un DVD s’explique par la date du média ; une netinstall dépend du dépôt effectivement utilisé.

## Schéma explicatif — complément pédagogique

```mermaid
flowchart LR
 M["Média : ISO / USB / réseau"] --> I["Installeur graphique ou texte"]
 I --> D["Disques + comptes + dépôts"]
 D --> T["Tâches sélectionnées"]
 T --> G["Bureau"]
 T --> S["Serveur en console"]
```

## Autoévaluation

1. L’installeur graphique oblige-t-il à installer GNOME ?
2. Quel volume reçoit le reste du disque du TP graphique ?
3. Pourquoi relever BIOS/UEFI avant de choisir la disposition du disque ?

??? success "Réponses"
    1. Non ; le bureau est choisi dans les tâches logicielles.
    2. Le volume destiné à `/home`.
    3. Les exigences d’amorçage et le placement du chargeur diffèrent.

## Pour travailler ce module

- [Fiche de révision](../../revision/administration-linux/module-02-installation-d-une-distribution-debian.md)
- [Travaux pratiques](../../tp/administration-linux/module-02/index.md)
- [Progression du cours](index.md)
