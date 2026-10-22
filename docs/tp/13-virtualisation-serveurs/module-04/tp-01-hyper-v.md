# Atelier n°2 — Mise en place et découverte d’Hyper-V

**Durée estimée : 1 heure.** Prérequis : cours M04 et VM Windows Server 2019 du
module 2. Dans cette restitution, `<HOTE_HYPERV>` désigne cette VM Workstation ;
`<VM_HV1>` et `<VM_HV2>` désignent les deux VM créées dans Hyper-V. Ces repères
remplacent les noms du laboratoire. `<VOLUME_DATA>` et `<ISO_WS2019>` sont à adapter
au laboratoire autorisé, sans publier d’adresse de partage ou de donnée d’accès.

## 1. Préparer la VM sous VMware Workstation

1. Porter la mémoire de `<HOTE_HYPERV>` à **8 Go**.
2. Ajouter un deuxième disque **SCSI de 100 Go**.
3. Démarrer cette VM.

Le document impose ce montage imbriqué pour les postes ENI et indique un serveur
physique dans son scénario d’entreprise. Les valeurs ci-dessus ne sont pas un
dimensionnement universel.

## 2. Préparer Hyper-V dans la VM hôte

1. À partir du nouveau disque, créer un volume nommé `DATA`.
2. Installer le rôle Hyper-V et utiliser l’interface du laboratoire indiquée dans
   l’énoncé comme commutateur virtuel.
3. **Ne pas autoriser la migration à chaud** des VM.
4. Définir le stockage des VM dans `<VOLUME_DATA>\VMs` et celui de leurs disques
   dans `<VOLUME_DATA>\VHDs`.
5. Mettre l’ISO Windows Server 2019 à disposition sur le bureau de la VM hôte.

!!! warning "Actions sur l’environnement de laboratoire"

    La préparation du volume doit concerner le disque ajouté pour l’atelier.
    L’installation du rôle et ses redémarrages concernent `<HOTE_HYPERV>`.
    Les ressources binaires et les paramètres d’accès ne sont pas fournis ici.

## 3. Créer et installer la première VM Hyper-V

Créer `<VM_HV1>` avec les caractéristiques demandées :

| Paramètre | Valeur de l’énoncé |
| --- | --- |
| Génération | 2 |
| Mémoire | 2 Go, sans mémoire dynamique |
| Réseau | Commutateur associé à la carte indiquée dans le laboratoire |
| Disque | VHDX de 32 Go |
| Installation | ISO Windows Server 2019 préparée sur le bureau |

Démarrer cette VM, ouvrir sa console et installer le système depuis l’ISO.

## 4. Généraliser, exporter et importer

1. Une fois l’installation terminée, ouvrir **Sysprep** dans `<VM_HV1>`.
2. Cocher **Generalize** et sélectionner **Shutdown**.
3. Exporter la VM vers le dossier prévu pour l’occasion dans
   `<VOLUME_DATA>\VMs\EXPORT\Machines virtuelles`.
4. Attendre la fin de l’export : l’énoncé évoque jusqu’à cinq minutes, même sans
   indication d’avancement visible.
5. Utiliser **Import Virtual Machine** et sélectionner le chemin contenant l’export.
6. Choisir **Copy the virtual machine**. Placer les fichiers de VM et les disques dans
   des sous-dossiers propres à `<VM_HV2>`, à partir des emplacements `VMs` et `VHDs`.
7. Renommer la VM importée `<VM_HV2>`.

Sysprep généralise puis arrête la première VM dans ce scénario ; vérifier la machine
concernée avant de confirmer. Ne pas remplacer cette manipulation par une procédure
externe non présente dans les sources.

## 5. Contrôler le résultat et terminer l’atelier

Démarrer les deux VM Hyper-V, relever leurs adresses IP et tester la liaison entre
elles avec `ping` vers **l’adresse relevée sur l’autre VM**. Ne pas recopier les
adresses de la capture source. Si la liaison échoue, l’énoncé demande de vérifier les
pare-feux Windows ; il ne fournit pas de commande de désactivation à reproduire.

L’énoncé demande enfin un snapshot **VMware Workstation de `<HOTE_HYPERV>`**, nommé
`Fin atelier 2`. Il s’agit de la VM hôte du laboratoire, et non d’une instruction de
création d’un checkpoint Hyper-V. La solution fournie ne montre pas cette étape finale.

## Limites et sources

La rubrique « Schéma » de l’énoncé n’est pas accompagnée d’un schéma exploitable :
aucune topologie n’a été inventée. La correction reste dans un
[document séparé](correction-tp-01.md).

Contenu A : énoncé de l’Atelier n°2, module 4 Hyper-V, Drive TSSR en lecture seule.
Contenu B : restructuration de ses consignes, avec neutralisation des données de
laboratoire et signalement des actions à impact. Aucun nouvel exercice ni ressource.
