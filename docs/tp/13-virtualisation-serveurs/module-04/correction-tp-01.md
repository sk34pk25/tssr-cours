# Atelier n°2 — Correction documentée et limites

Cette correction restitue la solution PDF de **15 pages**. Elle conserve l’atelier
unique d’une heure. Les noms de machines, les chemins propres au poste et les
adresses des captures sont remplacés par les repères de
[l’énoncé](tp-01-hyper-v.md). Les captures ne sont pas republiées.

## Préparation Workstation et volume de données

La solution montre la mémoire de la VM hôte portée à **8 Go**, puis l’ajout du disque
**SCSI de 100 Go** (page 2). Après démarrage de cette VM, elle illustre la préparation
du nouveau disque et la création du volume `DATA` (pages 3–4).

Le contrôle attendu est de retrouver le disque ajouté et le volume destiné aux
fichiers de l’atelier. Les noms et emplacements affichés dans les captures sont des
exemples de laboratoire ; ils ne doivent pas désigner un disque de production.

## Installation du rôle et emplacements

La solution passe par l’assistant d’ajout de rôles et sélectionne Hyper-V. Elle montre
le choix de la carte du laboratoire pour le commutateur virtuel, puis les emplacements
des disques et des fichiers de configuration et la confirmation de l’installation
(pages 5–7). La consigne textuelle exclut la migration à chaud.

Après l’installation et les redémarrages, vérifier dans le Gestionnaire Hyper-V le
serveur concerné, le commutateur prévu et les emplacements `VMs`/`VHDs` du volume
de données. Aucune commande PowerShell d’installation n’est fournie par cette solution.

## Création de la première VM et installation du système

Les pages 8–11 montrent la préparation de l’ISO et l’assistant de création : nom et
emplacement de la VM, **génération 2**, mémoire de **2048 Mo**, case de mémoire
dynamique décochée, raccordement au commutateur du laboratoire, disque et média ISO.
Le texte demande un disque **VHDX de 32 Go**.

Les contrôles reprennent ces paramètres, sans généraliser les valeurs à d’autres
environnements. Le système est installé dans la VM Hyper-V depuis l’ISO de laboratoire.
Ni cette ISO ni une image de VM prête à démarrer ne font partie des fichiers Drive M04.

## Sysprep, export et import de la seconde VM

La page 12 situe Sysprep dans `C:\Windows\System32\Sysprep` et montre les choix
**Generalize** et **Shutdown**. Cette action s’applique à la VM Hyper-V qui vient
d’être installée ; elle généralise le système et l’arrête.

La solution illustre ensuite l’export et l’attente de sa fin, puis l’assistant d’import
avec **Copy the virtual machine** (pages 12–13). Les emplacements des fichiers et des
disques de la seconde VM sont choisis dans des sous-dossiers distincts ; la VM importée
est renommée (page 14). Le support de cours propose aussi un exemple d’import sans
duplication : cet exemple historique ne remplace pas la consigne de copie de l’atelier.

## Vérification réseau : consigne et capture distinguées

La consigne finale demande de démarrer les deux VM, de relever leurs adresses et de
faire un test de liaison entre elles. La page 15 montre `ipconfig` et `ping`.

```text
ipconfig
ping <ADRESSE_IP_RELEVEE_SUR_L_AUTRE_VM>
```

Le second élément est un paramètre à remplacer dans le laboratoire, pas une adresse
à saisir littéralement. Ces commandes sont restituées à des fins pédagogiques et
n’ont pas été exécutées pendant l’ingestion.

!!! warning "La capture ne prouve pas le contrôle demandé entre les deux VM"

    Dans la capture finale, la cible du ping est identique à la passerelle affichée
    par ipconfig. La capture témoigne donc de ce test précis ; elle ne suffit pas à
    attester un ping vers l’autre VM. Conserver la consigne de liaison entre les deux
    VM et relever leurs adresses réelles dans le laboratoire autorisé.

En cas d’échec, le texte demande de vérifier les pare-feux Windows. Aucune désactivation
générale du pare-feu ni commande de modification de règles n’est ajoutée.

## Dernière étape absente de la solution

L’énoncé demande un snapshot VMware Workstation de la VM qui héberge Hyper-V, nommé
`Fin atelier 2`. La solution PDF s’arrête au contrôle réseau et ne documente pas ce
snapshot : aucune capture ni suite de clics n’est inventée pour combler l’absence.
Le « Schéma » annoncé dans l’énoncé n’est pas fourni sous une forme exploitable.

## Provenance

Contenu A : solution et énoncé de l’Atelier n°2, module 4 Hyper-V, et support M04,
Drive TSSR en lecture seule. Contenu B : correction web restructurée, données de
laboratoire neutralisées et divergences rendues explicites, sans procédure externe.
