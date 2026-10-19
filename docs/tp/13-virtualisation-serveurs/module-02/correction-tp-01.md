# Correction — Atelier 1 : VMware Workstation

## État initial et cadre

La solution part d’un poste de laboratoire sous Windows Server 2019 et d’une présence
attendue de VMware Workstation 16. Les captures utilisent Workstation 16 Pro et montrent
une compatibilité 16.2.x : ces repères sont historiques et dépendants de la version.

Les noms de VM et de machine, les chemins locaux, le serveur de distribution, le partage
ISO, les identifiants et les mots de passe sont neutralisés.

## Méthode montrée par la solution

1. Préparer le dossier de stockage de la VM sur le volume de données du laboratoire.
2. Créer la VM Windows Server 2019 du scénario dans ce dossier.
3. Conserver les paramètres de scénario : 2 processeurs, 1 cœur par processeur, 2 Go de
   mémoire et disque de 60 Go en fichier unique.
4. Accéder à la personnalisation matérielle pour activer l’option de virtualisation
   processeur indiquée dans la solution.
5. Relier l’image ISO de laboratoire au lecteur CD/DVD virtuel.
6. Régler la carte réseau sur **Bridged**. Une capture montre NAT avant ce réglage : il
   s’agit d’un état intermédiaire, non du résultat final.
7. Installer Windows Server 2019 avec expérience utilisateur, puis installer VMware
   Tools à partir du menu montré dans la solution.
8. Nommer la machine de laboratoire, arrêter la VM, puis créer le snapshot final du
   scénario.

## Contrôles et résultat attendu

| Contrôle | Résultat attendu par les sources |
| --- | --- |
| Matériel de la VM | Les valeurs correspondent au scénario de laboratoire. |
| Processeur | L’option de virtualisation montrée dans la solution est activée. |
| Réseau | Bridged est l’état final. |
| Système invité | Windows Server 2019 avec expérience utilisateur est installé dans la VM. |
| Outils invités | VMware Tools est installé dans le cadre de l’atelier. |
| Fin d’atelier | La VM est arrêtée et le snapshot final est créé. |

## Divergences documentaires à ne pas normaliser

- Le support recommande une création avec installation différée ; la solution visuelle
  sélectionne une ISO et montre Easy Install.
- L’énoncé cite le DHCP « ENI » ; la solution parle plus généralement du DHCP.
- L’énoncé affiche « 1 heure » et la solution « 1 heures ».
- Les interfaces, Workstation 16 Pro et 16.2.x sont des observations historiques de
  captures, non des prescriptions actuelles.

## Provenance

Contenu A : solution de l’Atelier n°1 consultée dans Drive TSSR en lecture seule.
Contenu B : mise en forme de correction sans extrapolation de procédure, sans exécution
de VM et sans donnée sensible de laboratoire.
