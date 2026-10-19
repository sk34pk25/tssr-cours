# TP 01 — L'objet

## Objectifs

- Comprendre le langage objet présenté dans le module.
- Utiliser les commandes de gestion de l'objet demandées par le scénario.

## Préparation

Le TP se déroule sur `<machine-de-laboratoire>`, après les vidéos du module 2.
Utiliser les identifiants et les valeurs fournis par le formateur. Ils ne sont
pas repris dans cette page.

## 1. Examiner un objet de service

Afficher les propriétés et les méthodes de l'objet
`System.ServiceProcess.ServiceController` avec `Get-Member` :

```powershell
Get-Service | Get-Member
```

Puis relevez :

- deux propriétés de type `String` ;
- une méthode de type `Bool` ;
- une méthode de type `int`.

## 2. Observer le service Spooler

Affichez les propriétés du service Spooler, relevez celles qui sont demandées
par le TP et indiquez la valeur observée pour chacune.

## 3. Observer un utilisateur local

Affichez les propriétés de `<utilisateur-de-laboratoire>`, puis relevez les
propriétés et leurs valeurs demandées dans le scénario.

Modifiez ensuite la valeur de `Description` comme demandé par le formateur.

## 4. Utiliser une méthode sur le service

Affichez l'état du service Spooler. Utilisez ensuite la méthode demandée pour
l'arrêter, puis vérifiez de nouveau son état.

## Bonus — Date d'expiration

Utilisez une méthode de l'objet `Get-Date` pour renseigner
`AccountExpires` de `<utilisateur-de-laboratoire>`. La valeur doit être au
minimum 48 heures postérieure à la date actuelle. Contrôlez ensuite la mise à
jour avec la forme demandée par le scénario.

→ [Voir la correction du TP](correction-tp-01.md)
