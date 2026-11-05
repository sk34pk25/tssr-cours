# Révision — Module 06 — Pour aller plus loin

## Authentification dans un script

- Un script peut être lancé avec un compte à privilèges réduits et demander un
  autre credential lorsqu'une action le nécessite.
- `Get-Credential` ouvre la demande d'authentification.
- Le résultat peut être conservé dans une variable, par exemple `$Cred`, puis
  réutilisé pendant le script.
- `-Message` personnalise le texte de la demande ; `-UserName` peut proposer un
  utilisateur de laboratoire.
- Le champ du mot de passe est masqué et le secret ne doit pas être affiché dans
  un script, un livrable ou une page de cours.

## TP : trois activités dans un seul parcours

1. analyser et commenter un script fourni ;
2. rechercher des erreurs de syntaxe dans un scénario DNS ;
3. écrire au choix un script de configuration réseau ou de gestion
   d'utilisateurs Active Directory.
## Autoévaluation

Identifiez les deux parties de `PSCredential` et une commande qui accepte l’objet. Comparez les deux scripts DNS en séparant erreur de grammaire, commande introuvable et résultat de configuration. Expliquez la différence entre un enregistrement NS, une délégation et le transfert d’une zone secondaire. Pour le menu AD, donnez un cas de test pour la création d’un compte, le doublon et la limite de l’OU.

- [Cours du module](../../modules/12-initiation-powershell/module-06.md)
- [TP et correction](../../tp/12-initiation-powershell/module-06/index.md)
