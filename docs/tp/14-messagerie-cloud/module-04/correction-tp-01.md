# Correction · TP 01 · Déploiement de Microsoft 365 Apps

## Document original

[M4 - Solution du TP 1 - Déploiement Office 365](../../../assets/course-sources/3ec56eac14b68e7b/transcription-11qy2tWr5VU5QdKrj8Ztldb3XcGN1NgnS.html) · 3 pages.

Les mots de passe, codes de validation et coordonnées nominatives sont neutralisés. Les noms de domaine d’accès des exemples utilisent des domaines réservés à la documentation.

## Aide pédagogique · version optimisée

### Expliquer le chemin de déploiement

Les lignes du support illustrent le téléchargement avec /download et l’installation avec /configure. Pour un chemin UNC contenant des espaces, entourez-le de guillemets dans le script de test. Ciblez l’OU du poste Client2 et vérifiez l’accès de son compte ordinateur au partage et au XML, puis redémarrez pour déclencher le script. Contrôlez la stratégie appliquée, les journaux de l’installation et l’activation avec le compte de test. [Office Deployment Tool](https://learn.microsoft.com/en-us/deployoffice/overview-office-deployment-tool).

## Texte du corrigé fourni

### Page 1

[Page de la transcription](../../../assets/course-sources/3ec56eac14b68e7b/transcription-11qy2tWr5VU5QdKrj8Ztldb3XcGN1NgnS.html#page-1)

#### Déploiement Microsoft 365

TP 01 du Module 04 – Services complémentaires

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 4 et d’avoir réalisé les TP proposés.

#### Solution

#### Bloquer le téléchargement d’Office

- Rendez-vous dans les paramètres de téléchargement des logiciels Office et désactivez la possibilité pour les utilisateurs d’installer le pack Office.

#### Déploiement du pack Office manuellement

- En allant sur le site https://www.microsoft.com/en-us/download/details.aspx?id=49117; vous pouvez télécharger l’outil de déploiement pour le pack Office 365.

### Page 2

[Page de la transcription](../../../assets/course-sources/3ec56eac14b68e7b/transcription-11qy2tWr5VU5QdKrj8Ztldb3XcGN1NgnS.html#page-2)

- Créez un partage sur votre serveur, de préférence dans une partition D:\ prévue à cet effet.
- Déposez le contenu du package téléchargé au préalable.

Vous pouvez au choix utiliser les fichiers XML présents par défaut, ou personnaliser le déploiement à l’aide du site https://config.office.com/.

- Lancez le téléchargement des sources grâce à la commande :

~~~text
PS D:\office_365> .\setup.exe /download \\Serveur\partage créé\Configuration.xml
~~~

Vous pouvez maintenant installer le pack Office :

~~~text
D:\office_365> .\setup.exe /configure \\Serveur\partage créé\Configuration.xml
~~~

- Créez ensuite la GPO :
- Créez un fichier Notepad, glissez la ligne de commande précédente et transformez l’extension du fichier en .cmd.
- Editez la GPO, allez dans Configuration ordinateur / Paramètres Windows / Scripts de démarrage / Arrêt et ajoutez le script créé précédemment.

NB : le partage dans lequel est placé le script doit être lisible des utilisateurs impactés par la GPO.

##### Commande de la capture du script de démarrage

~~~text
\\cd01\Office_365\setup.exe /configure \\cd01\Office_365\Configuration.xml
~~~

### Page 3

[Page de la transcription](../../../assets/course-sources/3ec56eac14b68e7b/transcription-11qy2tWr5VU5QdKrj8Ztldb3XcGN1NgnS.html#page-3)

~~~text
PS C:\users\administrator\office_365> gpupdate /force
~~~

- Redémarrez la machine et vérifiez que le pack Office est bien installé.

[Revenir à l’énoncé](tp-01.md) · [Tous les ateliers](index.md)
