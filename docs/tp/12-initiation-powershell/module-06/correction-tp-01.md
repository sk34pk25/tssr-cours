# Restitution pédagogique — Activités pour aller plus loin

## Périmètre de cette restitution

Les scripts sources fournissent des éléments de correction pour certaines
activités du TP. Cette page n'en est pas une transcription et ne constitue pas
un script exécutable : les données de laboratoire et les valeurs sensibles ont
été exclues.

## Activité 1 — Comprendre et commenter

Le point de contrôle consiste à relier les instructions du script à son
intention, puis à documenter les lignes comprises. La source demande
d'expliquer et de commenter le script fourni ; elle ne demande pas de le
réécrire ni de publier un autre script.

## Activité 2 — Erreurs dans un scénario DNS

Le script de consigne DNS sert précisément à rechercher des erreurs de syntaxe.
Le script de correction présente des formes documentaires différentes. Les
écarts portent notamment sur des familles autour de :

- `Set-DnsClientServerAddress` ;
- `Restart-Computer` ;
- `Add-DnsServerConditionalForwarderZone` ;
- `Add-DnsServerPrimaryZone` ;
- `Add-DnsServerResourceRecord` ;
- `Get-DnsServerResourceRecord`.

> **NEEDS_REVIEW — écarts consigne/correction :** ne déduisez pas une forme
> universelle de ces scripts. Dans le laboratoire, comparez la demande du
> script de consigne, l'erreur identifiée et la forme montrée par le script de
> correction.

Les opérations DNS et système présentes dans les sources ont un impact ; elles
ne sont pas des procédures générales à exécuter hors du scénario.

## Activité 3 — Choix d'écriture

La source propose un sujet de configuration réseau ou un sujet de gestion
d'utilisateurs Active Directory. Les scripts de laboratoire attestent des
opérations de création ou modification d'objets, de groupes et de comptes. Ils
attestent aussi des commandes à impact sur DNS et le système.

> **NEEDS_REVIEW — périmètre de correction élargi :** la correction Active
> Directory contient aussi une extension liée à un partage SMB et à des ACL
> NTFS. Cette extension dépasse la consigne principale de création d'objets
> Active Directory ; elle ne doit pas être présentée comme explicitement
> demandée par l'énoncé.

Les sources emploient également une forme de conversion de mot de passe en
clair dans un script de laboratoire. Cette valeur et sa commande associée ne
sont ni reproduites ni recommandées dans cette restitution.

## Contrôles communs

- neutraliser les données de laboratoire dans tout livrable ;
- annoncer avant toute exécution les opérations qui modifient Active Directory,
  DNS, le système, un partage ou une ACL ;
- conserver les divergences documentaires au lieu de les corriger silencieusement ;
- ne pas publier ou exécuter les scripts sources bruts.
