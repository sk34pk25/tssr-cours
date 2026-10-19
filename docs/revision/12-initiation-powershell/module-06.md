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

## Points de vigilance

- Les scripts DNS de consigne et de correction comportent des formes
  divergentes : comparer les deux sans les normaliser silencieusement.
- La correction Active Directory contient une extension liée à un partage SMB
  et à des ACL NTFS, au-delà de la consigne principale.
- Les opérations sur Active Directory, DNS, le système, les partages ou les ACL
  sont à impact et restent réservées au laboratoire.
- Les scripts, l'archive et les données de laboratoire ne sont pas des
  ressources publiques téléchargeables.

## Pour poursuivre

- [Cours M06](../../modules/12-initiation-powershell/module-06.md)
- [TP M06](../../tp/12-initiation-powershell/module-06/index.md)
