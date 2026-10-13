# Correction — Module 09 — Les pilotes et les imprimantes

Cette correction décrit le scénario de laboratoire de la source. Les noms de machines, de matériel, de partage, les identifiants et les résultats observés restent propres à cet environnement.

## 1. Exports CSV des pilotes

Depuis l'invite de commandes, la correction source utilise :

```text
driverquery /v /fo CSV > pilotes_details.csv
driverquery /si /fo CSV > pilotes_signatures.csv
```

Les CSV peuvent être ouverts dans Excel puis convertis en sélectionnant la colonne A, **Données**, **Convertir**, **Délimité**, puis le séparateur virgule.

!!! note "Divergence documentaire à conserver"
    L'énoncé demande `Pilotes_detail.csv` et `Pilotes_signature.csv`, alors que la correction montre `pilotes_details.csv` et `pilotes_signatures.csv`. Cette différence est préservée : ne renommez pas silencieusement les fichiers demandés.

## 2. Pilote graphique : observation du laboratoire

1. Ouvrez `devmgmt.msc`.
2. Déployez **Cartes graphiques**.
3. Ouvrez les propriétés du matériel observé, puis l'onglet **Détails** et la propriété **ID compatibles**.

Dans la correction source, le matériel observé est **VMware SVGA 3D**, avec `VENDOR_ID=15AD` et `DEVICE_ID=0405`. Ces valeurs sont des observations de la VM de laboratoire ; elles ne constituent pas une référence générale pour un autre matériel.

## 3. Imprimantes disponibles

La correction source passe par **Panneau de configuration → Matériel et audio → Périphériques et imprimantes**. Elle liste trois imprimantes par défaut :

- FAX ;
- Microsoft Print to PDF ;
- Microsoft XPS Document Writer.

La console citée dans la correction permet de les retrouver sous le nœud **Files d'attente à l'impression**.

!!! note "Divergence documentaire à signaler"
    L'énoncé demande quatre imprimantes disponibles par défaut, tandis que la correction source en liste trois. La divergence est à signaler dans le livrable ; elle n'est pas résolue ni complétée ici.

## 4. Microsoft Print to PDF

1. Faites un clic droit sur Microsoft Print to PDF et définissez-la comme imprimante par défaut.
2. Ouvrez les propriétés de l'imprimante, puis les préférences.
3. Choisissez l'orientation **Paysage**, conformément à la correction source.
4. Imprimez une page de test.

Le résultat attendu est un document PDF enregistré à l'emplacement choisi dans le laboratoire, vérifié en orientation paysage.

## 5. Imprimante partagée du scénario

Depuis l'Explorateur Windows, la correction indique un chemin UNC construit avec l'adresse de Discovery et le partage :

```text
\\<adresse de Discovery>\HP_LaserJet_Accueil_RDC_Bât2
```

Utilisez les identifiants fournis par le formateur si l'environnement les demande. Connectez l'imprimante, puis attendez l'installation du pilote. Le contrôle attendu est son apparition dans la liste des imprimantes du panneau de configuration et dans l'interface Windows indiquée.

## 6. Informations PowerShell sur Discovery

La correction source utilise :

```powershell
Get-Printer -Name "HP LaserJet"
Get-Printer -Name "HP LaserJet" | Select Name, Shared, ShareName, PortName, Location, Priority
```

Vérifiez que les propriétés demandées sont affichées : nom, partage, nom de partage, port, emplacement et priorité. Les résultats sont dépendants de la configuration de Discovery ; ne les généralisez pas à un autre environnement.
