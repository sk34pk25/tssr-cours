# Énoncés — Module 06 — Plug-ins et inventaire

!!! danger "Avant une manipulation destructive"
    Vérifier la cible, créer une sauvegarde ou un instantané et préparer le retour arrière. Les adresses et noms de machines du support appartiennent au laboratoire de formation.

## M6 - Enoncé du TP - Plugins

### GLPI

#### Plugins

#### TP du Module 6 — Présentation des plugins — Inventaire avec

#### FusionInventory

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 6 et d’avoir réalisé les TP proposés.

#### Enoncé

- Installer le plugin FusionInventory et l’agent.

#### Prérequis

- Avoir un serveur GLPI fonctionnel.

#### Contexte :

- La société Olympus vous demande d’installer le plugin FusionInventory et l’agent sur

l’application GLPI au sein de son domaine.

#### Adressage IP des VM : 192.168.1.0/24 + DHCP salle

#### srv-glpi srv-CD1

#### PFSENSE

#### VMNET 18

#### Réseau de salle

#### .1.2

192.168.1.0/24

#### .254

#### DHCP

#### Principales tâches à réaliser

Installation du Plugins FusionInventory.

- Récupérez depuis le serveur Debian, le fichier fusioninventory-9.5.0+1.0.tar.bz2.

- Extrayez l’archive fusioninventory-9.5.0+1.0.tar.bz2 dans le répertoire

/var/www/glpi/plugins.

- Changez l’utilisateur propriétaire pour www-data sur ce répertoire et tout son contenu.

- Installez et activez le plugin dans l’interface GLPI.

- Installez l’agent FusionInventory sur votre contrôleur de domaine Olympus.gr.

#### Bonus

- Activez le marketplace puis installez le plugin « Data injection ».

- Un fichier avec seulement les en -têtes et un autre rempli est disponible auprès du

formateur.

Une solution est proposée pour ce TP sous la forme d'un PDF commenté, disponible dans les ressources à télécharger, accompagnée de captures d’écran pour vous guider.

Une fois le travail terminé : [consulter les corrections](corrections.md).
