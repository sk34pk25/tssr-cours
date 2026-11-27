# Tutoriel — Diagnostiquer une connexion réseau

**Source : Bases des réseaux, Module 5 « Les premières commandes » (notes de cours du Drive).** Les phrases et les commandes ci-dessous sont reprises telles quelles. La liste complète des options est dans [Commandes réseau](../commandes/reseau.md). Le cours complet est dans le [module 5](../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau.md).

## 1. Diagnostiquer une connexion réseau

Utilisez ipconfig pour vérifier l’adresse IP actuelle de votre machine, la passerelle par défaut, et les serveurs DNS. Si vous n’avez pas d’adresse IP ou si elle commence par 169.254.x.x (APIPA), cela indique un problème avec le serveur DHCP.

Avec ipconfig /all, vous pouvez vérifier si une interface est configurée en DHCP ou en IP statique, ainsi que les serveurs DNS configurés.

```text
ipconfig /all
```

## 2. Changer d’adresse IP

Si vous êtes sur un réseau où l’adresse IP est assignée dynamiquement et que vous suspectez un conflit d’adresse, libérez et renouvelez votre adresse IP :

```text
ipconfig /release
ipconfig /renew
```

## 3. Résoudre des problèmes DNS

Si un site web ne se charge pas ou si vous suspectez un problème de résolution DNS, utilisez :

```text
ipconfig /flushdns
```

Cela efface le cache DNS local et force le système à récupérer des informations DNS actualisées.

## 4. Tester la connectivité (ping)

1. Tester la connectivité vers une machine spécifique :

    ```text
    ping 192.168.1.1
    ```

    Utilisé pour vérifier si un routeur ou une machine locale est accessible.

2. Vérifier l’accès à Internet :

    ```text
    ping 8.8.8.8
    ```

    Cette commande teste la connexion vers les serveurs DNS publics de Google.

3. Diagnostiquer un problème de nom de domaine : si le nom de domaine ne résout pas, utilisez l’adresse IP directement pour vérifier si le problème vient du DNS.

Problèmes détectés par ping :

- **Aucune réponse** (`Request timeout for icmp_seq X`) : la machine cible est hors ligne ; un pare-feu bloque les paquets ICMP ; une erreur de configuration réseau.
- **Latence élevée** : une surcharge du réseau ; une distance importante entre les deux machines ; des problèmes de performances sur la machine ou le routeur.
- **Pertes de paquets** : un problème de connectivité réseau ; une mauvaise qualité de la liaison ; une saturation du réseau.

## 5. Vérifier la table ARP

Si un appareil ne répond pas, vérifier la table ARP avec arp -a peut montrer si l’adresse MAC est connue et si la résolution ARP est correcte.

```text
arp -a
```

## 6. Localiser une coupure (tracert / traceroute)

Si vous ne pouvez pas atteindre un site ou une ressource réseau, tracert peut révéler où le trafic est bloqué ou ralentit.

- Si les premiers sauts répondent mais que certains sauts plus loin ne répondent pas, le problème est probablement externe (chez un FAI ou au-delà).
- Si le premier saut ne répond pas, le problème est sur votre réseau local.

```text
tracert /d /h 15 /w 1000 www.google.com
```

Sous Linux, on utilise généralement traceroute au lieu de tracert.

```text
traceroute www.google.com
```

## 7. Vérifier les connexions et les ports en écoute (netstat)

```text
netstat -an
netstat -an | grep :80
netstat -p | grep :22
```
