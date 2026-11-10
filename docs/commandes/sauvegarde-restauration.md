# Commandes et gestes — Sauvegarde et restauration

Les lignes ci-dessous sont celles des supports et des énoncés. Les valeurs d’accès appartiennent à la maquette de formation.

| Geste | Commande ou chemin | Contrôle |
|---|---|---|
| Intégration du NAS à l’annuaire | `sudo wbinfo -t` dans la console du portail | Le support demande un résultat d’intégration correct |
| Portail du NAS | `https://192.168.30.1` | Le service ISCSI s’active ensuite dans le menu service |
| Bundles de la maquette | `R:\Distrib\Bundles\TSSR\RES24_0160B - Sauvegarde & restauration` | Un dossier par VM sur `D:\` |
| Initiateur iSCSI | Portail `192.168.30.1`, port `3260` | Statut connecté, puis disque de 80 Go formaté |
| Agent Backup Exec en échec | Copier `C:\Program Files\Veritas\Backup Exec\Agents`, puis `C:\Agents\RAWSX64\setup.exe` | Après `0xe00086ce`, refaire l’ajout depuis srv-backup |
| Export MySQL cité | `mysqldump` vers un fichier `DUMP.sql` | Le support ne fige pas un compte réel |
| Import MySQL cité | `mysql` avec redirection `< fichier_source.sql` | Même réserve |
| RMAN cité | `backup incremental level 0 section size 512m database plus archivelog` | Exemple Oracle du support |

Le support montre aussi des invites de mot de passe dans les exemples MySQL. Elles ne sont pas recopiées sous forme d’affectation.

[Cours](../modules/16-sauvegarde-et-restauration/index.md) · [Mémo](../memo/sauvegarde-restauration.md)
