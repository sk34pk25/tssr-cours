# Module 10 — Gestion des utilisateurs et groupes

[Travaux pratiques](../../tp/administration-linux/module-10/index.md)

Les parties ci-dessous reprennent le cours original, dans le même ordre. Les encadrés et les schémas répètent ses formulations.

## Parcours de lecture

1. Support · RES24_0050B - M10 - Linux Administration (Debian) · 42 pages transcrites
2. Gestion des utilisateurs et groupes
3. Gestion des utilisateurs et groupes
4. Les identifiants
5. Les types d’utilisateurs
6. Gestion des utilisateurs et groupes
7. Généralités
8. Le fichier /etc/group
9. Le fichier /etc/group
10. Le fichier /etc/gshadow
11. Le fichier /etc/gshadow
12. Gestion des utilisateurs et groupes
13. groupadd
14. groupmod
15. groupdel
16. gpasswd
17. Commandes de gestion des groupes
18. Gestion des utilisateurs et groupes
19. Informations concernant les utilisateurs
20. Le fichier /etc/passwd
21. Le fichier /etc/passwd
22. Le fichier /etc/shadow
23. Le fichier /etc/shadow
24. Le fichier /etc/shadow
25. Le fichier /etc/shadow
26. Gestion des groupes et utilisateurs
27. useradd
28. useradd
29. usermod
30. usermod
31. usermod
32. usermod
33. userdel
34. passwd
35. Commandes de gestion des utilisateurs
36. Gestion des utilisateurs et groupes
37. La commande su
38. La commande sudo
39. La commande sudo
40. Changement d’identité et élévation de privilèges
41. Gestion des utilisateurs et groupes
42. Conclusion
43. Transcription des commandes et informations utiles visibles
44. Transcription des commandes et informations utiles visibles
45. Transcription des commandes et informations utiles visibles
46. Transcription des commandes et informations utiles visibles
47. Transcription des commandes visibles
48. Transcription des commandes et informations utiles visibles
49. Transcription des commandes et informations utiles visibles

**Visuel externe**

```mermaid
flowchart TD
    N1["Support · RES24_0050B - M10 - Linux Administration (Debian) · 42 pages transcrites"]
    N2["Gestion des utilisateurs et groupes"]
    N3["Gestion des utilisateurs et groupes"]
    N4["Les identifiants"]
    N5["Les types d’utilisateurs"]
    N6["Gestion des utilisateurs et groupes"]
    N7["Généralités"]
    N8["Le fichier /etc/group"]
    N9["Le fichier /etc/group"]
    N10["Le fichier /etc/gshadow"]
    N11["Le fichier /etc/gshadow"]
    N12["Gestion des utilisateurs et groupes"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
    N7 --> N8
    N8 --> N9
    N9 --> N10
    N10 --> N11
    N11 --> N12
```

SOURCE DRIVE · TRANSCRIPTION DU SUPPORT

Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. Les textes et tableaux sont intégrés à la page Web. Aucun fichier PDF, aucune diapositive entière ni aucune reproduction de page n’est affiché. Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. Les versions et les consignes restent celles des supports de formation. Les compléments IA sont conservés dans leur onglet distinct.

## Support · RES24_0050B - M10 - Linux Administration (Debian) · 42 pages transcrites

### Administration Debian

### GNU/Linux

!!! note "À retenir"
    Module 10 – Gestion des utilisateurs et groupes

Module 10 – Gestion des utilisateurs et groupes

## Gestion des utilisateurs et groupes

### Objectifs

!!! note "À retenir"
    Créer et gérer des groupes et utilisateurs Consulter les fichiers de configuration Effectuer une élévation de privilèges en environnement GNU/Linux

**Visuel externe**

```mermaid
flowchart LR
    N1["Créer et gérer des groupes et utilisateurs"]
    N2["Consulter les fichiers de configuration"]
    N3["Effectuer une élévation de privilèges en environnement GNU/Linux"]
    N1 --> N2
    N2 --> N3
```

- Créer et gérer des groupes et utilisateurs
- Consulter les fichiers de configuration
- Effectuer une élévation de privilèges en environnement GNU/Linux

## Gestion des utilisateurs et groupes

### Considérations

générales

## Les identifiants

!!! note "À retenir"
    Sous Linux, les utilisateurs sont représentés par deux valeurs importantes : L’UID : l’identifiant utilisateur Le GID : l’identifiant du groupe principal Il est possible qu’un utilisateur appartienne à plusieurs groupes.

**Visuel externe**

```mermaid
flowchart LR
    N1["Sous Linux, les utilisateurs sont représentés par deux valeurs importantes :"]
    N2["L’UID : l’identifiant utilisateur"]
    N3["Le GID : l’identifiant du groupe principal"]
    N1 --> N2
    N2 --> N3
```

- Sous Linux, les utilisateurs sont représentés par deux valeurs importantes :
- L’UID : l’identifiant utilisateur
- Le GID : l’identifiant du groupe principal
- Il est possible qu’un utilisateur appartienne à plusieurs groupes. Il y aura donc les notions de groupe principal et de groupe secondaire
- Le groupe principal est le groupe attribué à l’utilisateur au moment de sa connexion

## Les types d’utilisateurs

!!! note "À retenir"
    Il existe trois types d’utilisateurs : root : UID=0, GID=0 C’est le super-administrateur du système.

!!! warning "Attention"
    Il est donc conseillé d’être le moins possible sous cette identité, voire fortement conseillé de ne pas se connecter avec mais de faire une élévation de privilèges via la commande su -.

- Il existe trois types d’utilisateurs :
- root : UID=0, GID=0 C’est le super-administrateur du système. Il a tout pouvoir. Il est donc conseillé d’être le moins possible sous cette identité, voire fortement conseillé de ne pas se connecter avec mais de faire une élévation de privilèges via la commande su -. Sur certains systèmes, il sera impossible de se connecter en root dans l’interface graphique.
- daemon : UID 1-999, GID 1-999 Les utilisateurs compris entre 1 et 999 pour leur UID/GID représentent les utilisateurs applicatifs (les services). En effet sous Linux 99% des services ne sont pas exécutés sous l’identité de root mais sous leur propre identité à des fins de sécurité.
- Utilisateur : UID et GID > 1000 Les utilisateurs « humains » sont représentés par des UID/GID supérieurs à 1000.

## Gestion des utilisateurs et groupes

### Les fichiers liés à la gestion des groupes

## Généralités

!!! note "À retenir"
    Les informations concernant les groupes d’un système Linux sont contenus dans les fichiers /etc/group et /etc/gshadow Nous pourrons y prendre des informations, mais nous ne les modifierons jamais directement La manipulation des groupes devra se faire par les commandes dédiées

!!! warning "Attention"
    Les informations concernant les groupes d’un système Linux sont contenus dans les fichiers /etc/group et /etc/gshadow Nous pourrons y prendre des informations, mais nous ne les modifierons jamais directement La manipulation des groupes devra se faire par les commandes dédiées

- Les informations concernant les groupes d’un système Linux sont contenus dans les fichiers /etc/group et /etc/gshadow
- Nous pourrons y prendre des informations, mais nous ne les modifierons jamais directement
- La manipulation des groupes devra se faire par les commandes dédiées

## Le fichier /etc/group

!!! note "À retenir"
    Ce fichier est composé de plusieurs champs, séparés par le caractère :

- Ce fichier est composé de plusieurs champs, séparés par le caractère :

```
root@deb:~# cat /etc/group
root:x:0:
daemon:x:1:
[...]
user:x:1000:
jmartin:x:1001:
sdia:x:1002:
abenabel:x:1101:
informatique:x:1500:jmartin,abenabel,sdia
```

## Le fichier /etc/group

- Analyse de colonnes

```
nomgroupe:passechiffré:GID:membres,de,ce,groupe,secondaire
```

- En général, il y a un x dans la colonne du mot de passe, cela indique que le mot de passe est dans le fichier /etc/gshadow

```
user:x:1000:
jmartin:x:1001:
sdia:x:1002:
abenabel:x:1101:
informatique:x:1500:jmartin,abenabel,sdia
```

## Le fichier /etc/gshadow

- Ce fichier contient les informations cachées sur les groupes séparés par le caractère : . Il est rarement utilisé

```
root@deb:~# cat /etc/gshadow
root:$6$c.n9lt$tmf169GMlTRp/:18684:0:99999:7::: 
daemon:*:18001:0:99999:7:::
bin:*:18001:0:99999:7:::
sys:*:18001:0:99999:7:::
[...]
jmartin:$6$X1URi$CDj5CU5Gl2Ex.:18153:0:99999:7:::
sdia:$6$X0RisM$JngFdwTEmaOfH.:18592:0:99999:7:::
abenabel:$6$gjD5IZ$EtlYhsMJngFw:18457:0:99999:7:::
```

## Le fichier /etc/gshadow

- Analyse de colonnes

```
nomgroupe:passechiffré:administrateurs:membres,du,groupe
```

- Si le champ du mot de passe contient les caractères « ! » ou « * », les utilisateurs ne pourront pas utiliser le mot de passe pour accéder au groupe.
- Si le champ est vide, dans ce cas seul les membres du groupe pourront obtenir les permissions du groupe.
- Le champ administrateur contient la liste des administrateurs du groupe séparé par des virgules. Les administrateurs peuvent modifier le mot de passe et les membres du groupe.

## Gestion des utilisateurs et groupes

### Commandes de gestion

des groupes

```
groupadd
```

```
• groupadd <options> [nom du groupe]
```

- Option usuelle : -g [GID] : valeur numérique de l’identifiant du groupe. Cette valeur doit être unique. Par défaut, le plus petit identifiant supérieur au GID_MIN et aux identifiants des groupes existants est utilisé.

```
groupmod
```

```
• groupmod <options> [nom du groupe]
```

- Options usuelles :
- -g [GID] : change le GID d’un groupe. Attention aux orphelins des fichiers créés préalablement
- -n [nouveau nom] : change le nom du groupe

```
groupdel
```

```
• groupdel <options> [nom du groupe]
```

- Cette commande permet de supprimer un groupe s’il est vidé de tous ses membres avant

```
gpasswd
```

**Visuel externe**

```mermaid
flowchart LR
    N1["Cette commande permet d’administrer les groupes"]
    N2["Options usuelles :"]
    N3["-a (utilisateur) : ajoute « utilisateur » au groupe."]
    N4["-d (utilisateur) : supprime « utilisateur » au groupe."]
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

```
• gpasswd <options> [nom du groupe]
```

- Cette commande permet d’administrer les groupes
- Options usuelles :
- -a [utilisateur] : ajoute « utilisateur » au groupe.
- -d [utilisateur] : supprime « utilisateur » au groupe.

## Commandes de gestion des groupes

Démo

Gérer les groupes

## Gestion des utilisateurs et groupes

### Les fichiers liés à la gestion des utilisateurs

## Informations concernant les utilisateurs

- Les informations concernant les utilisateurs d’un système Linux sont contenus dans les fichiers /etc/passwd et /etc/shadow
- Nous pourrons y prendre des informations, mais nous ne les modifierons jamais directement
- La manipulation des utilisateurs devra se faire par les commandes dédiées

## Le fichier /etc/passwd

- Ce fichier est composé de plusieurs champs, séparés par le caractère :

```
root@deb:~# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
[...]
jmartin:x:1001:1001:Jean Martin -
Logistique:/home/jmartin:/bin/bash
sdia:x:1002:1002::/home/sdia:/bin/sh
abenabel:x:1002:1002:Ashanti Ben 
Abel:/home/abenabel:/bin/bash
```

## Le fichier /etc/passwd

```
nom:motdepassechiffré:UID:GID:nom complet:/repertoire/personnel:/shell
```

- En général, il y a un x dans la colonne du mot de passe, cela indique que le mot de passe est dans le fichier /etc/shadow.
- Le champ UID indique le numéro qui est l’identifiant unique de l’utilisateur.
- Le champ GID détermine quel est le groupe principal de l’utilisateur.
- Le champ nom,complet comporte des informations complémentaires comme le nom complet, le téléphone, etc. Ces informations peuvent être directement indiquées lors de la création de l’utilisateur ou via la commande chfn.
- Le champ répertoire personnel contient le chemin du répertoire d’accueil de l’utilisateur, si celui-ci a été créé.
- Le champ shell correspond au chemin du binaire correspondant au shell de l’utilisateur. Il est possible de le modifier avec la commande chsh.

## Le fichier /etc/shadow

- Ce fichier contient les informations cachées des utilisateurs séparées par le caractère :

```
root@deb:~# cat /etc/shadow
root:$6$c.n9lt$tmf169GMlTRp/:18684:0:99999:7::: 
daemon:*:18001:0:99999:7:::
bin:*:18001:0:99999:7:::
sys:*:18001:0:99999:7:::
[...]
jmartin:$6$X1URi$CDj5CU5Gl2Ex.:18153:0:99999:7:::
sdia:$6$X0RisM$JngFdwTEmaOfH.:18592:0:99999:7:::
abenabel:$6$gjD5IZ$EtlYhsMJngFw:18457:0:99999:7:::
```

## Le fichier /etc/shadow

**Visuel externe**

```mermaid
flowchart LR
    N1["User : champ contenant le nom de l’utilisateur"]
    N2["Premier champ : algorithme de hashage"]
    N3["$1$ signifie MD5"]
    N4["$2a$ signifie Blowfish"]
    N5["$2$ signifie Blowfish (manipulation correcte de caractères 8 bits)"]
    N6["$5$ signifie SHA-256"]
    N7["$6$ signifie SHA-512"]
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
```

```
user:motdepasse:datedernierchangement:agemini:agemax:périodeavertissement:pério
deinectivité:datefinvalidité:champréservé
```

- User : champ contenant le nom de l’utilisateur
- Mot de passe : champ contenant le hash du mot de passe. Cette colonne est composée de 3 champs séparés par des « $ »
- Premier champ : algorithme de hashage
- $1$ signifie MD5
- $2a$ signifie Blowfish
- $2$ signifie Blowfish (manipulation correcte de caractères 8 bits)
- $5$ signifie SHA-256
- $6$ signifie SHA-512
- Deuxième champ : le sel (ou grain de sable). C’est une chaîne de caractère aléatoire qui sera ajoutée au mot de passe avant de faire son hash

## Le fichier /etc/shadow

```
user:motdepasse:datedernierchangement:agemini:agemax:périodeavertissement:périod
einectivité:datefinvalidité:champréservé
```

- Troisième champ : le hash du mot de passe plus son sel. Le hash est une chaîne de caractère unique généré par l’algorithme de hash. Plus l’algorithme est fort plus le hash est complexe à décrypter.
- Le fait d’utiliser un sel dans le stockage des mots de passe permet d’augmenter la sécurité des mots de passe. Le principe du hash est de générer une chaîne de caractère unique d’une certaine taille par rapport à une chaîne de caractère donnée. Donc si deux utilisateurs ont le même mot de passe, par exemple « Pa$$w0rd », alors les hashs purs seront identiques. L’ajout du sel fait en sorte que les hashs soient différents, pourtant les utilisateurs ont le même mot de passe.

## Le fichier /etc/shadow

```
user:motdepasse:datedernierchangement:agemini:agemax:périodeavertis
sement:périodeinectivité:datefinvalidité:champréservé
```

- Date de dernier changement de mot de passe : nombre de jours depuis le 1er janvier 1970 déterminant le dernier changement du mot de passe. Une valeur à 0 force le changement du mot de passe pour l’utilisateur à la prochaine connexion. Si ce champ est vide, l’utilisateur ne subit pas les options de vieillissement du mot de passe.
- Âge minimum : l’âge minimum est la durée en jour que l’utilisateur devra attendre avant de pouvoir changer son mot de passe de nouveau. Un champ vide ou à 0 signifie qu’il n’y a pas d’âge minimum.

## Gestion des groupes et utilisateurs

### Commandes de gestion

des utilisateurs

```
useradd
```

```
useradd <options> [utilisateur]
```

- Options usuelles :
- -m : useradd crée le répertoire d’accueil de l’utilisateur.
- -d [/chemin/rep/accueil] : répertoire d’accueil de l’utilisateur. Si non indiqué, useradd utilisera le nom de l’utilisateur et la valeur de la variable HOME du fichier /etc/default/useradd.
- -u [UID] : indique l’UID de l’utilisateur. Si non renseigné, useradd utilisera le plus petit UID disponible.

```
useradd
```

- -g [GID] : indique le GID du groupe principal de l’utilisateur.
- -G [groupe1,groupe2,groupen] : indique la liste des groupes secondaires de l’utilisateur séparés par des « , ».
- -s : indique le shell de l’utilisateur sous la forme du chemin absolu du binaire.
- -r : indique la création d’un utilisateur système. Lors de la création d’un utilisateur, si l’option –m est passée à useradd, alors useradd copiera le contenu du répertoire /etc/skel dans le répertoire d’accueil de l’utilisateur.

```
usermod
```

```
• usermod <options> [utilisateur]
```

- Options usuelles :
- -d [/home/DIR] : indique le nouveau répertoire d’accueil de l’utilisateur. Si l’option –m est fournie, le contenu du répertoire actuel sera déplacé dans le nouveau répertoire d’accueil
- -e [DATE FIN VALIDITE] : date à laquelle le compte utilisateur sera désactivé. La date est indiquée dans le format AAAA-MM- JJ ou en nombre de jours depuis le 1er janvier 1970. Un paramètre DATE_FIN_VALIDITÉ vide désactivera l'expiration du compte.

```
usermod
```

- -f [DUREE INACTIVITE] : nombre de jours suivant la fin de validité d’un mot de passe après lequel le compte est définitivement désactivé. Une valeur de 0 désactive le compte dès que le mot de passe a dépassé sa fin de validité, et une valeur de -1 désactive cette fonctionnalité.
- -g [GID] : nom du nouveau groupe principal de l’utilisateur. Tout fichier du répertoire personnel de l'utilisateur appartenant au groupe principal précédent de l'utilisateur appartiendra à ce nouveau groupe. Le groupe propriétaire des fichiers en dehors du répertoire personnel de l'utilisateur doit être modifié manuellement.

```
usermod
```

```
• usermod <options> [utilisateur]
```

- Options usuelles :
- -G [groupe1,groupe2,groupen] : liste des groupes secondaires de l’utilisateur. Si l’utilisateur appartient déjà à des groupes secondaires, il est peut-être utile d’ajouter l’option -a afin de ne pas perdre ces appartenances. Le groupe propriétaire des fichiers en dehors du répertoire personnel de l'utilisateur doit être modifié manuellement.
- -a : ajouter les groupes supplémentaires à l’utilisateur. À n’utiliser qu’avec l’option -G.

```
usermod
```

```
• usermod <options> [utilisateur]
```

- Options usuelles :
- -s [shell] : chemin du nouveau shell de l’utilisateur (peut être configuré à l’aide de la commande chsh).
- -L : verrouille le mot de passe de l’utilisateur. Cette option ajoute un « ! » devant le hash du mot de passe dans /etc/shadow. Remarque : pour verrouiller le compte (et pas seulement l'accès par un mot de passe), il est également nécessaire de placer DATE_FIN_VALIDITÉ à 1.
- -U : déverrouille le mot de passe de l’utilisateur.

```
userdel
```

```
• userdel <options> [nom du groupe]
```

- Cette commande permet de supprimer un utilisateur.
- Option usuelle :
- -r : les fichiers présents dans le répertoire d’accueil de l’utilisateur seront également supprimés. Les fichiers de l’utilisateur présents dans d’autres répertoires ne seront pas supprimés.

```
passwd
```

```
• passwd <options> [utilisateur]
```

- En plus de pouvoir changer le mot de passe, si root l’exécute, passwd modifiera suivant les options passées les champs du fichier /etc/shadow.
- Options usuelles :
- -e [utilisateur] : annuler immédiatement la validité du mot de passe d’un utilisateur. Celui-ci sera obligé de changer son mot de passe à sa prochaine connexion.
- -l [utilisateur] : verrouille le mot de passe en ajoutant un « ! » devant le hash du mot de passe dans /etc/shadow.
- -u [utilisateur] : déverrouille le mot de passe en supprimant le « ! » devant le hash du mot de passe dans /etc/shadow.

## Commandes de gestion des utilisateurs

Démo

Gérer les utilisateurs

## Gestion des utilisateurs et groupes

### Changement d’identité et élévation de privilèges

## La commande su

- su <options> [utilisateur]
- su permet de changer d’utilisateur ou d’exécuter une commande sous l’identité d’un autre utilisateur.
- Si la commande est invoquée par un simple utilisateur, il faudra qu’il connaisse le mot de passe de l’autre utilisateur.
- su peut aussi permettre de devenir root.
- -s [shell] : préciser le shell à utiliser pour l’ouverture de session.
- - ou -l [utilisateur] : faire un changement complet d’identité (charge les variables d’environnement de l’utilisateur cible).
- -c [cmd] : exécuter la commande, il est conseillé de mettre la commande entre simples quote.

## La commande sudo

```
• sudo <options> [commande]
```

- La commande sudo permet de déléguer des tâches précises d'administration à certains utilisateurs. Par exemple, il sera possible d'accorder les privilèges de gestion des utilisateurs à un groupe d'utilisateurs.
- Nous ne rentrerons pas dans les détails dans ce cours.
- Afin qu’un utilisateur puisse utiliser la commande sudo, il faut qu’il soit renseigné dans le fichier de configuration /etc/sudoers et renseigner les commandes qu’il pourra utiliser.

```
jdoe@deb:~$ sudo apt update
[sudo] Mot de passe de jdoe
Réception de http://deb.debian.org/debian 
stretch-updates InRelease [91,0 kB]
```

## La commande sudo

- De façon simple, il est possible de donner tous les droits root à un utilisateur en ajoutant le groupe sudo à l’utilisateur.
- L’utilisation de la commande sudo demande le mot de passe de l’utilisateur et non celui de root. L’élévation de privilège sera gardée en mémoire pour cinq minutes par défaut.

```
jdoe@deb:~$ sudo -i
[sudo] Mot de passe de jdoe
root@deb:~#
```

## Changement d’identité et élévation de privilèges

Démo

Élévation de privilèges

## Gestion des utilisateurs et groupes

TP

Démo

Gérer les groupes et utilisateurs

## Conclusion

- Vous savez créer et gérer des groupes et utilisateurs
- Vous savez consulter les fichiers de configuration
- Vous savez effectuer une élévation de privilèges en environnement GNU/Linux

Référence du document : 13t-YQt1AhuI0Dx4-SAB7wpbiAJLdmZEQ · SHA-256 4eb7394ca58f1c64…

| Les identifiants | Sous Linux, les utilisateurs sont représentés par deux valeurs importantes : L’UID : l’identifiant utilisateur Le GID : l’identifiant du groupe principal Il est possible qu’un u… |
| Les types d’utilisateurs | Il existe trois types d’utilisateurs : root : UID=0, GID=0 C’est le super-administrateur du système. |
| Généralités | Les informations concernant les groupes d’un système Linux sont contenus dans les fichiers /etc/group et /etc/gshadow Nous pourrons y prendre des informations, mais nous ne les… |
| Le fichier /etc/group | Ce fichier est composé de plusieurs champs, séparés par le caractère : |
| Le fichier /etc/group | Analyse de colonnes En général, il y a un x dans la colonne du mot de passe, cela indique que le mot de passe est dans le fichier /etc/gshadow |
| Le fichier /etc/gshadow | Ce fichier contient les informations cachées sur les groupes séparés par le caractère : . |
| Le fichier /etc/gshadow | Analyse de colonnes Si le champ du mot de passe contient les caractères « ! |
| groupadd | Option usuelle : -g [GID] : valeur numérique de l’identifiant du groupe. |
| groupmod | Options usuelles : -g [GID] : change le GID d’un groupe. |
| groupdel | Cette commande permet de supprimer un groupe s’il est vidé de tous ses membres avant |
| gpasswd | Cette commande permet d’administrer les groupes Options usuelles : -a [utilisateur] : ajoute « utilisateur » au groupe. |
| Informations concernant les utilisateurs | Les informations concernant les utilisateurs d’un système Linux sont contenus dans les fichiers /etc/passwd et /etc/shadow Nous pourrons y prendre des informations, mais nous ne… |
| Le fichier /etc/passwd | Ce fichier est composé de plusieurs champs, séparés par le caractère : |
| Le fichier /etc/passwd | En général, il y a un x dans la colonne du mot de passe, cela indique que le mot de passe est dans le fichier /etc/shadow. |
| Le fichier /etc/shadow | Ce fichier contient les informations cachées des utilisateurs séparées par le caractère : |
| Le fichier /etc/shadow | User : champ contenant le nom de l’utilisateur Mot de passe : champ contenant le hash du mot de passe. |
| Le fichier /etc/shadow | Troisième champ : le hash du mot de passe plus son sel. |
| Le fichier /etc/shadow | Date de dernier changement de mot de passe : nombre de jours depuis le 1er janvier 1970 déterminant le dernier changement du mot de passe. |
| useradd | Options usuelles : -m : useradd crée le répertoire d’accueil de l’utilisateur. |
| useradd | -g [GID] : indique le GID du groupe principal de l’utilisateur. |
| usermod | Options usuelles : -d [/home/DIR] : indique le nouveau répertoire d’accueil de l’utilisateur. |
| usermod | -f [DUREE INACTIVITE] : nombre de jours suivant la fin de validité d’un mot de passe après lequel le compte est définitivement désactivé. |
| usermod | Options usuelles : -G [groupe1,groupe2,groupen] : liste des groupes secondaires de l’utilisateur. |
| usermod | Options usuelles : -s [shell] : chemin du nouveau shell de l’utilisateur (peut être configuré à l’aide de la commande chsh). |
| userdel | Cette commande permet de supprimer un utilisateur. |
| passwd | En plus de pouvoir changer le mot de passe, si root l’exécute, passwd modifiera suivant les options passées les champs du fichier /etc/shadow. |
| La commande su | su <options> [utilisateur] su permet de changer d’utilisateur ou d’exécuter une commande sous l’identité d’un autre utilisateur. |
| La commande sudo | La commande sudo permet de déléguer des tâches précises d'administration à certains utilisateurs. |
| La commande sudo | De façon simple, il est possible de donner tous les droits root à un utilisateur en ajoutant le groupe sudo à l’utilisateur. |
| Conclusion | Vous savez créer et gérer des groupes et utilisateurs Vous savez consulter les fichiers de configuration Vous savez effectuer une élévation de privilèges en environnement GNU/Li… |
| Transcription des commandes et informations utiles visibles | Les options de useradd : -m pour forcer la création du répertoire personnel de l'utilisateur -s pour préciser le binaire du shell à utiliser, -g pour le groupe principal, -G pou… |
| Transcription des commandes et informations utiles visibles | Commande ou détail d’interface isolé du document de formation. |
| Transcription des commandes et informations utiles visibles | Commande ou détail d’interface isolé du document de formation. |
| Transcription des commandes et informations utiles visibles | Détail de la procédure du laboratoire, isolé et vérifié. |
| Transcription des commandes visibles | Pour Fabrice : Shell à utiliser Le shell bash Répertoire personnel /home/fabrice Mot de passe password Son compte devra être désactivé Groupes secondaires vip Création du compte… |
| Transcription des commandes et informations utiles visibles | Commande ou détail d’interface isolé du document de formation. |
