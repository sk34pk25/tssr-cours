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

1. Que contient `PSCredential` ?
2. Que prouve une analyse syntaxique réussie ?
3. Quelle preuve est nécessaire pour la zone secondaire ?

??? success "Réponses commentées"
    1. Un nom d’utilisateur et un secret protégé en `SecureString`, utilisables par une commande qui accepte cet objet.
    2. Que le texte suit la grammaire PowerShell. Vérifier ensuite les commandes, leurs paramètres, les droits et la configuration produite.
    3. Vérifier le type et les données de la zone sur le serveur cible ainsi que le transfert autorisé depuis la source.

- [Cours du module](../../modules/12-initiation-powershell/module-06.md)
- [TP et correction](../../tp/12-initiation-powershell/module-06/index.md)
