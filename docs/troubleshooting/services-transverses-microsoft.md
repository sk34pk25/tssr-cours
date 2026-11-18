# Dépannage — Services transverses Microsoft (RDS/WDS)

Pistes écrites dans les énoncés, sans étape inventée.

| Symptôme écrit | Contrôle écrit |
|---|---|
| La session RDS ne s’ouvre pas | Vérifier les paramètres de la collection |
| Un compte ne doit plus entrer | Limiter la collection à Direction et Pédagogique, puis tester prénom3 et prénom5 |
| Les lecteurs du client apparaissent | Revoir la redirection, puis tester prénom1 et prénom4 |
| Le portail RemoteApp signale un certificat | Exporter `RDS.cer` en X509 base 64 et le déployer par la GPO `Deploy-Certificats-Clients` |
| CLINVX ne démarre pas sur WDS | Image `boot.wim`, serveur qui répond à tous les clients, dossier `D:\WDS` |
| L’écran MDT ne vient pas | Remplacer l’image de boot WDS par celle du partage, après mise à jour du partage |
| Des questions restent à l’installation | Les reporter dans CustomSettings.ini ; Bootstrap.ini demande aussi une mise à jour du partage et de l’image WDS |
| Pilotes manquants après MDT | Ajouter les pilotes VMware prévus pour Windows 10 |

Vidéos, ISO et partage distrib : **Inexistant** s’ils manquent au moment du TP.

[Cours](../modules/18-services-transverses-microsoft/index.md)
