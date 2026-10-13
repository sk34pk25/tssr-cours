# Énoncé — Module 05 — Les utilisateurs et les groupes

## Contexte et environnement

Dans la VM `Win10-XX`, manipulez les utilisateurs et les groupes à l’aide de la console de gestion graphique, de `cmd.exe` et de PowerShell. Le TP demande également l’utilisation de la VM Discovery pour les activités PowerShell.

**Durée estimée :** 1 heure 30 minutes.

!!! warning "Ressources du scénario"
    Utilisez les ressources de laboratoire fournies par le formateur. Les VM et la console mentionnées dans l’énoncé ne sont pas disponibles dans le dossier Drive M05 live.

## 1. Créer des comptes et des groupes

1. Créez les groupes `L_Informatiques` et `L_Responsables`.
2. Créez le compte François ; son mot de passe n’a pas de date d’expiration et il appartient aux deux groupes précédents.
3. Créez le compte Yann et placez-le dans les mêmes groupes que François.
4. Créez deux comptes avec nom, prénom et identifiant de votre choix ; ils appartiennent au groupe `L_Collegues`.

Pour toute saisie d’authentification exigée par le scénario, utilisez les identifiants fournis par le formateur. Ne consignez aucun mot de passe dans votre rendu.

## 2. Attribuer et observer des privilèges

- Donnez à François la possibilité d’administrer les ressources du poste.
- Permettez à Yann de consulter les journaux d’évènements et de configurer la carte réseau.
- Donnez aux deux collègues la possibilité de sauvegarder le poste.
- Retirez l’un des collègues du groupe Utilisateurs.
- Dans la console graphique, relevez les propriétés d’un utilisateur et celles d’un groupe.

## 3. Contrôler avec CMD

1. Affichez les informations du compte François.
2. Affichez les membres du groupe Administrateurs.
3. Créez l’utilisateur Romain en utilisant une saisie de mot de passe non affichée.
4. Ajoutez Romain au groupe `L_Responsables`.

## 4. Ouvrir une session et observer les profils

1. Fermez la session de l’utilisateur courant.
2. Déterminez quels utilisateurs peuvent ouvrir une session sur le poste et expliquez pourquoi un collègue ne peut pas ouvrir de session.
3. Ouvrez une session avec François, puis observez les profils présents sur le système.
4. Affichez le SID de François ainsi que les SID des groupes dont il est membre.

## 5. Contrôler avec PowerShell dans la VM Discovery

- Affichez, pour les utilisateurs du système, le nom, le SID et la description.
- Recherchez pour l’utilisateur `james` son nom complet, sa description, sa classe d’objets et sa dernière connexion.
- Ajoutez la description demandée à l’utilisateur `adm`.
- Affichez le nom et le SID des membres du groupe local `L_SupportInfo`.

## Livrables et vérifications

Conservez les résultats de contrôle demandés par chaque activité : propriétés, appartenances, listes de membres, profils et SID. Vérifiez que chaque résultat répond à la consigne correspondante avant de consulter la [correction](corrections.md).
