# Mémo — Services transverses Microsoft (RDS/WDS)

Les valeurs viennent des énoncés et du support. Les secrets d’exemple sont `[masqué]`.

## Semaine

Du 16 au 20 novembre 2026. Une seule période, sans découpage 1/2 et 2/2. Formateur : non renseigné.

## Maquette du TP 1

| VM | Système écrit | RAM | Réseau | Adresse |
|---|---|---|---|---|
| INFRA | Windows Serveur 2019 Standard | 1024 MB | Vmnet 10 | 192.168.1.1/24 |
| RDS | Windows Serveur 2019 standard | 1024 MB | Vmnet 10 | 192.168.1.2/24 |
| DEPLOY | Windows Serveur 2019 standard | 1024 MB | Vmnet 10 | 192.168.1.3/24 |
| CLI10 | Windows 10 Pro | 1024 MB | Vmnet 10 | client DHCP |
| CLINVX | Windows 10 Pro, sans système | 1024 MB | Vmnet 10 | déploiement |

Domaine à créer : `prénom.eni`. Plage DHCP : 192.168.1.100 à 192.168.1.199.

## Chemins écrits ensuite

| Usage | Valeur |
|---|---|
| Dossier WDS | `D:\WDS` |
| Dossier MDT | `D:\MDT` |
| Portail | `https://rds.prénom.eni/RDweb` |
| Flux RemoteApp | `https://rds.prénom.eni/RDweb/feed/webfeed.aspx` |
| Domaine de jointure d’exemple | `deploy.eni` |
| Séquence | `DEP-W10-PRO`, modèle Client Standard |

[Cours](../modules/18-services-transverses-microsoft/index.md)
