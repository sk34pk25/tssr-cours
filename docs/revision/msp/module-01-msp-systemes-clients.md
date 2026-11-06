# Révision — MSP Systèmes clients

La compétence visée est de construire une maquette cohérente et d’expliquer ses vérifications. Refaire la séquence sans copier le corrigé, puis justifier chaque résultat.

## Les valeurs à connaître pour ce dossier

| Élément | Attendu |
| --- | --- |
| Versions du laboratoire | Windows 10 Professionnel ; Debian 10 avec interface graphique |
| Machines | 2 VM par participant ; tests avec les 4 VM du binôme |
| VM Windows | W10-VosInitiales, système 32 Go, second disque 40 Go, Bridged |
| VM Debian | DEB10-VosInitiales, 1 vCPU, 2048 Mo, système 20 Go, second disque 40 Go, Bridged |
| Partitionnement initial Debian | / 17 Go ; /boot 512 Mo ; swap 256 Mo ; /home 1 Go ; conserver l’espace libre |
| Réseau adapté | 172.16.0.128/26 ; masque 255.255.255.192 ; hôtes .129 à .190 ; diffusion .191 |
| Adresses de la correction | Windows .189, Debian .188, Windows binôme .187, Debian binôme .186 |
| Passerelle .190 et DNS | Hypothèses de la correction à confirmer |
| Identités | Initiale du prénom + nom entier ; 5 services, 10 personnes dans le tableau |
| Windows mots de passe | Minimum 12 caractères, complexité active, durée 25 jours, changement initial du binôme |
| Carol Peletier | Connexion lundi à vendredi 9 h–12 h |
| Debian shells | Bash ; KSH pour le prestataire/binôme |
| Windows DATA | Second disque MBR, D: de 15 Go, NTFS |
| Debian second disque | PROFILS ext4 15 Go ; DATA ext4 15 Go ; LOGS xfs reste |
| Montages | PROFILS→/home ; DATA→/services ; LOGS→/var/log ; volume logique→/opt |
| Stratégies standard | CD/DVD et gravure bloqués, regedit bloqué, papier peint imposé ; pare-feu actif pour tous |
| Partage | Support_Info$ ; accès IT ; U: persistant depuis le binôme |
| Imprimantes adaptées | HP 172.16.168.189 ; Xerox 172.16.168.188 et 172.16.169.188, adresses fictives |
| Xerox | Pool, comptabilité 19 h–3 h, IT contrôle total, 2 files et priorité direction, spool D: |
| Système | GRUB 2 s ; swap Debian 1 Go ; RDP avec NLA ; pagination Windows sur D: gérée par le système |
| Sauvegardes | Debian tous les jours 12:30, tar /home et /services + scp ; données IT Windows tous les jours 12:45 |
| Restauration | Image système Windows ; C: protection 8 % ; restauration d’un fichier de test |
| LVM | Deux disques SCSI de 20 Go, LV 32 Go ext4 monté sur /opt |

## Expliquer les outils et les preuves

| Action | Outils / commandes | Preuve utile |
| --- | --- | --- |
| Réseau | ipconfig /all, ip -br a, ip route, ping | Adressage cohérent + tests des quatre postes |
| Identités Windows | net user, net localgroup, Get-LocalUser, Get-LocalGroupMember | Description, appartenance, compte standard et administrateur distincts |
| Identités Debian | getent passwd, getent group, id, chage -l | Shell, groupes, expiration et ouverture de session |
| Stratégies | secpol.msc, MMC ciblant Non-administrateurs, gpupdate /force, gpresult /r | Connexion standard restreinte, administrateur opérationnel |
| Disques et montages | DiskPart, lsblk -f, blkid, findmnt, df -hT | Bon volume au bon endroit, y compris après redémarrage |
| Permissions | icacls, accès effectif, ls -ld, su - utilisateur | Création permise dans son service et refusée ailleurs |
| Partage | Get-SmbShare, net share, net use, New-PSDrive | U: persistant et création d’un fichier avec le bon compte |
| Impression | Gestion de l’impression, ports TCP/IP, sécurité, paramètres avancés | Ports, pool, horaires, droits et priorité ; test matériel seulement si possible |
| RDP | netstat -an, Test-NetConnection, Remmina | Écoute de 3389 puis session NLA du binôme |
| Sauvegarde | crontab -l, journal, tar -tf, scp, wbadmin get versions | Archive locale, copie distante et restauration d’un témoin |
| LVM | pvs, vgs, lvs, findmnt /opt | Deux PV, un VG, un LV de 32 Go, contenu /opt conservé |

## Formules du tableur

Les élèves occupent les lignes 5 à 12. Recopier F5:I5 jusqu’à la ligne 12 et les statistiques de B vers E.

```text
F5 = SOMME(B5:E5)
G5 = MOYENNE(B5:E5)
B15 = SOMME(B5:B12)
B16 = MOYENNE(B5:B12)
B17 = MAX(B5:B12)
B18 = MIN(B5:B12)
B19 = NBVAL(A5:A12)
I5 = SI(ET(G5>10;H5>10);"Bien";SI(ET(G5<=10;H5>=10);"En progrès";SI(ET(G5>=10;H5<10);"Trop d'absences";"En danger!")))
```

La moyenne >10 avec assiduité =10 n’est pas définie par les consignes. La formule de la correction retourne son dernier cas « En danger ! » ; conserver cette limite explicite. Le nombre d’élèves est 8, les totaux par matière sont 97 ; 104 ; 97 ; 85,5.

## Erreurs à reconnaître

- Un suffixe $ ne remplace pas les permissions ; l’accès distant dépend du partage et de NTFS.
- Monter un nouveau volume ne copie pas les anciennes données. Copier avec attributs et fichiers cachés avant le basculement.
- `/expires:never` n’est pas PasswordNeverExpires. Vérifier la règle de durée du mot de passe séparément.
- `useradd -p` attend une empreinte, pas un mot de passe en clair ; le fichier des groupes s’appelle /etc/group.
- Une règle pare-feu « tout autoriser » ne se justifie pas par le seul besoin d’un ping.
- L’ancien modèle ne remplace pas le sujet : Host-only, 512 Mo, les IP .63.x, le cron en semaine et SMB1 sont des écarts documentés.
- Les imprimantes ont des adresses fictives ; distinguer paramétrage et sortie papier réellement vérifiée.
- Une image système, un point de restauration et une archive de données n’offrent pas le même service.
- Un LV réparti sur deux disques sans redondance ne protège pas contre leur panne.

## Autoévaluation

1. Recalculer les bornes du /26 et expliquer la place de .190.
2. Décrire le trajet d’un accès Windows U: jusqu’au droit d’écriture effectif.
3. Expliquer comment déplacer /home sans masquer ni perdre les anciens fichiers.
4. Montrer pourquoi les groupes sont plus simples à maintenir que des droits attribués personne par personne.
5. Expliquer comment valider une sauvegarde sans se contenter du message « terminé ».
6. Comparer un pool d’imprimantes et deux files avec des priorités différentes.
7. Trouver le cas non couvert par les règles d’appréciation.

??? success "Réponses attendues"
    1. 64 adresses, 62 hôtes, .128 réseau, .191 diffusion ; .190 est une passerelle choisie, pas automatiquement imposée.
    2. Authentification du compte, droit du partage, droit NTFS puis action effective ; le suffixe $ ne change pas ces contrôles.
    3. Identifier PROFILS, monter temporairement, copier /home/. avec attributs, modifier fstab, basculer et vérifier avec une session utilisateur après redémarrage.
    4. Les permissions portent sur les rôles de service ; modifier une appartenance suit l’arrivée ou le départ d’une personne.
    5. Examiner dates et contenu, vérifier la copie distante puis restaurer un fichier dans un emplacement de test.
    6. Le pool utilise plusieurs ports pour une file ; les priorités portent sur plusieurs files vers un même périphérique.
    7. Moyenne strictement supérieure à 10 et assiduité exactement égale à 10.

## Vérifier les preuves

Utiliser la [matrice de validation du dossier](../../tp/msp/module-01/corrections.md#msp-bilan) pour retrouver les résultats par phase. Comparer l’état initial, l’action menée et le résultat observé, puis consigner les écarts entre le sujet et les essais.

## Revenir aux documents

- [Cours complet et explications](../../modules/08-msp-systemes-clients/module-01-msp-systemes-clients.md)
- [Énoncé](../../tp/msp/module-01/enonces.md)
- [Correction et scripts](../../tp/msp/module-01/corrections.md)
