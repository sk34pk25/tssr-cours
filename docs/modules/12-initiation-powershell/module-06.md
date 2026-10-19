# Module 06 — Pour aller plus loin

Ce module prolonge l'initiation au scripting PowerShell à partir des sources
TSSR du module 06. Il présente une demande d'authentification dans un script et
le cadre des activités pratiques associées.

## Objectifs

- demander un autre credential lorsqu'une action ne peut pas être réalisée avec
  le compte à privilèges réduits qui a lancé le script ;
- conserver ce résultat dans une variable pour le réutiliser dans le script ;
- situer trois activités de pratique : analyser un script, corriger des erreurs
  de syntaxe et écrire un script dans un scénario de laboratoire.

## Demander un credential

Les sources présentent l'exécution initiale d'un script avec un compte à
privilèges réduits. Lorsque certaines actions demandent une autre
authentification, le script peut ouvrir une demande dédiée :

```powershell
$Cred = Get-Credential
```

Le résultat est conservé dans la variable `$Cred` et peut être réutilisé dans
le même script. Lors de la saisie, le champ du mot de passe est masqué. Dans
l'exemple source, l'affichage de la variable ne révèle pas directement ce
secret.

## Personnaliser la demande

Le message et le nom d'utilisateur proposé peuvent être adaptés au scénario :

```powershell
$Cred = Get-Credential -Message "<message>" -UserName "<utilisateur-de-laboratoire>"
```

Les valeurs entre chevrons sont des repères neutres : les données du
laboratoire ne sont pas des valeurs à recopier dans un script ou un document.

## Activités pour aller plus loin

Le TP du module est annoncé pour une durée estimée de quatre heures. Il réunit
trois activités :

1. analyser un script fourni et le commenter ;
2. identifier puis corriger des erreurs de syntaxe dans un script lié à DNS ;
3. écrire, au choix, un script de configuration réseau ou un menu de gestion
   d'utilisateurs Active Directory.

Les scripts de travail correspondants sont des ressources de laboratoire. Ils
ne sont pas publiés ici : ils comportent des données propres au scénario et
des commandes à impact.

## Vérifications et précautions

- Distinguer la demande formulée par un script de consigne de la forme montrée
  dans un script de correction.
- Dans l'activité DNS, rechercher les erreurs de syntaxe avant de conclure sur
  une forme corrigée.
- Les opérations sur Active Directory, DNS, le système, les partages ou les
  ACL sont des opérations de laboratoire à impact : elles ne doivent pas être
  exécutées hors du contexte prévu.
- Ne pas inscrire de mot de passe, de compte, de domaine, de machine, d'adresse
  ou de chemin de laboratoire dans le script ou dans ses livrables.

## Synthèse

`Get-Credential` permet de demander une authentification pendant l'exécution
d'un script, puis de conserver son résultat dans une variable. Le module
introduit ensuite des activités de lecture, de correction et d'écriture de
scripts, avec une attention explicite aux données sensibles et aux commandes à
impact.

## Ressources du parcours

Les activités pratiques, leur restitution pédagogique redacted et la fiche de
révision font l'objet d'une proposition gouvernée distincte. Aucun lien vers
ces objets n'est ajouté avant leur présence sur le site.
