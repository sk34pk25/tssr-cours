# Fiche de révision — Module 05 — Les utilisateurs et les groupes

## Identité et profils

- Un utilisateur local est enregistré dans la base locale **SAM**.
- Un utilisateur de domaine est géré par un annuaire Active Directory, dans le périmètre décrit par le support.
- Le **SID** identifie un utilisateur ou un groupe pour le système.
- À la première ouverture de session, un profil personnel est créé dans `C:\Users`.
- Le profil public est commun aux utilisateurs ; le profil par défaut sert de modèle de création.

## Groupes et jeton d’accès

- Tout utilisateur appartient à au moins un groupe.
- Les groupes locaux servent notamment aux autorisations d’accès et privilèges d’administration.
- Les groupes prédéfinis sont fournis par Windows ; le module cite notamment Administrateurs et Opérateurs de sauvegarde.
- Les SID de l’utilisateur et de ses groupes composent le **jeton d’accès** de la session.

## Outils à reconnaître

| Outil | Repère du module |
| --- | --- |
| GUI / MMC | `lusrmgr.msc` et `compmgmt.msc` pour les utilisateurs et groupes locaux |
| CMD | `net user`, `net localgroup`, `whoami /user`, `whoami /groups` |
| PowerShell | Cmdlets des familles `LocalUser`, `LocalGroup` et membres de groupes locaux |

## UAC

L’UAC demande une validation ou une authentification lorsque l’action nécessite une élévation. Le bouclier et la fonction **Exécuter en tant qu’administrateur** sont les repères cités par le support.

## Contrôles à savoir faire

1. Contrôler les propriétés et l’appartenance d’un utilisateur ou groupe dans la console.
2. Vérifier les membres d’un groupe avec l’outil demandé.
3. Ouvrir une session pour constater la création d’un profil.
4. Afficher les SID de l’utilisateur et de ses groupes.
5. Interpréter une sortie PowerShell demandée dans le TP.

## Ressources de laboratoire

Le scénario cite `Win10-XX`, VM Discovery et `MaConsole.msc`. Ces ressources ne sont pas fournies parmi les fichiers du module.

Pour aller plus loin : [cours du module](../../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes.md) · [Kahoot M05](../../kahoot/02-systemes-clients-microsoft-05-les-utilisateurs-et-les-groupes.md).

## Retenir puis vérifier

**Le SID identifie le compte ; les groupes et le jeton expliquent ses accès.**

1. **Compte et profil sont-ils interchangeables ?**

??? success "Réponse expliquée"
    Non. Le compte porte l’identité ; le profil conserve l’environnement de cet utilisateur.

2. **Pourquoi affecter les droits aux groupes ?**

??? success "Réponse expliquée"
    Pour gérer les accès par rôle sans multiplier les règles individuelles.

3. **Une appartenance modifiée est-elle forcément dans le jeton de la session ouverte ?**

??? success "Réponse expliquée"
    Non. Pour vérifier les nouveaux droits, le scénario peut nécessiter une nouvelle ouverture de session.

[Relire le cours complet](../../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes.md) · [Mettre en pratique](../../tp/systemes-clients/module-05/index.md)
