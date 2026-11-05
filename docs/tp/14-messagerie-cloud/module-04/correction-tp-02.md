# Correction · TP 02 · Administration SharePoint et OneDrive

## Document original

[M4 - Solution du TP2 - Administration SharePoint et OneDrive](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html) · 11 pages.

Les mots de passe, codes de validation et coordonnées nominatives sont neutralisés. Les noms de domaine d’accès des exemples utilisent des domaines réservés à la documentation.

## Aide pédagogique · version optimisée

### Évaluer l’autorisation effective

L’énoncé décrit un site et une bibliothèque pour l’exercice. Le corrigé choisit « Centre de documents », puis configure Fichiers de l’entreprise. Attribuez GDL_SP_Fichiers_RW au groupe Membres avec Collaboration et GDL_SP_Fichiers_RO au groupe Visiteurs avec Lecture. Vérifiez la portée et la remontée du groupe. Le corrigé ajoute GG_ServiceIT à RW et supprime All company des Visiteurs dans la maquette. Vérifiez quels accès restent effectifs avant de nettoyer une autorisation.

Le réglage hors connexion porte sur le site ou la bibliothèque choisie. Vérifiez son effet avec un utilisateur de test. Les trois cases historiques agissent sur les possibilités de partage, l’invitation et les demandes. Les autorisations effectives dépendent aussi de la politique de l’organisation et du site. [Partage externe SharePoint et OneDrive](https://learn.microsoft.com/en-us/sharepoint/external-sharing-overview).

## Texte du corrigé fourni

### Page 1

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-1)

#### Administration SharePoint et OneDrive

TP 02 du Module 04 – Services complémentaires

Avant de démarrer ce TP, il convient d’avoir suivi les vidéos des modules 1 à 4 et d’avoir réalisé les TP proposés.

#### Solution

#### Administration OneDrive

- Connectez-vous sur https://login.microsoftonline.com/ et utilisez vos identifiants de connexion créés dans l’étape précédente.

#### Parcours de l’ensemble des options proposées

- Administration SharePoint – Création d’un site
- Allez dans le panneau d’administration SharePoint, cliquez sur Sites, Sites actifs puis Créer.
- Cliquez sur Autres options.

### Page 2

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-2)

- Choisissez le modèle Centre de documents, nommez le site, ajoutez le propriétaire et sélectionnez la langue et le fuseau horaire.

### Page 3

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-3)

- N’ajoutez pas de membres pour le moment et terminez la création du site. Revenez ensuite sur la liste des sites actifs et cliquez sur l’URL du site.
- A l’image des pratiques sur des serveurs de fichiers On Premise, nous allons utiliser AGDLP pour gérer les permissions d’accès à notre site. Créez deux groupes de domaine local dans l’unité d’organisation Groupes puis forcez la synchronisation.
- Ajoutez GG_ServiceIT dans le groupe GDL_SP_Fichiers_RW

### Page 4

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-4)

- Sur le site SharePoint Fichiers de l’entreprise, cliquez sur la roue dentée puis Paramètres du site.

### Page 5

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-5)

- Cliquez sur Autorisations de site.
- Cliquez sur Accorder des autorisations puis ajoutez le groupe GDL_SP_Fichiers_RW créé, affichez les options et sélectionnez collaboration.

### Page 6

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-6)

- Cliquez sur Accorder des autorisations puis ajoutez le groupe GDL_SP_Fichiers_RO créé, affichez les options et sélectionnez Visiteurs.

### Page 7

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-7)

- Afin de clarifier la gestion dans le futur, vous pouvez supprimer les autorisations par défaut positionnées par SharePoint.
- Cliquez ensuite sur Visiteurs et supprimez l’entrée All company.

### Page 8

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-8)

#### Quelques bonnes pratiques

Il est possible de nettoyer l’affichage afin de clarifier l’ensemble des éléments affichés.

- Cliquez sur Modifier dans le volet à gauche pour masquer les éléments jugés inutiles.

### Page 9

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-9)

Vous pouvez désactiver la synchronisation hors connexion sur les sites et ainsi protéger les données d’éventuelles erreurs de synchronisation. Il est possible de le faire au niveau du site ou de chaque bibliothèque.

- Cliquez sur la roue dentée puis Paramètres du site.
- Dans la section Rechercher cliquez sur Disponibilité du mode Hors connexion.

##### Option affichée pour le mode hors connexion

- À la question « Voulez-vous autoriser le téléchargement des éléments de ce site sur les clients en mode hors connexion ? », choisir « Non ».

### Page 10

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-10)

- Afin de limiter les fuites de données et les demandes d’accès intempestives, vous pouvez restreindre cela en allant dans les autorisations de site puis Paramètres de demande d’accès.

### Page 11

[Page de la transcription](../../../assets/course-sources/5cb1e4dbf1ad8029/transcription-1NFVLCn71-19tdQ1gyOGCdIZQ188D2HS9.html#page-11)

- Décochez les 3 cases présentées et cliquez sur OK.

##### Cases affichées dans la capture des paramètres de demandes d’accès

- Autoriser les membres et propriétaires à partager le site, des fichiers et des dossiers.
- Autoriser les membres à inviter d’autres personnes dans le groupe des membres du site.
- Autoriser les demandes d’accès.

[Revenir à l’énoncé](tp-02.md) · [Tous les ateliers](index.md)
