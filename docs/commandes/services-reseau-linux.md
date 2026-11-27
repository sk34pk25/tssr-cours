# Commandes — Services réseau en environnement Linux

**Source : Services réseau en environnement Linux (supports et corrections de TP du Drive).** Lignes de commande reprises telles quelles ; seule la source de chaque bloc est indiquée. Domaines et identifiants de l’établissement masqués (`.lab`, `[masqué]`).

### M02 - Solution du TP1 - Adressage réseau

```text
nmcli connection modify Wired\ connection\ 1
vi /etc/network/interface
systemctl restart
vi /etc/hostname
hostname -F /etc/hostname
vi /etc/hosts
```

### Module 02 - Support de cours

```text
systemctl restart networking
```

### M03 - Solution du TP1- Routage

```text
vi /etc/network/interfaces
vi /etc/sysctl.conf
net.ipv4.ip_forward=1
nmcli connection modify
```

### M04 - Solution du TP1 - Configuration du service ssh

```text
apt update
apt install openssh-server
dpkg -l |grep openssh-server
ssh-keygen
ssh-copy-id
ssh user@192.168.X.11
su # mkdir .ssh
chmod 700 .ssh
mkdir conf_deb-s1
```

### Module 04 - Support de cours

```text
scp user@ip:/etc/monconf.cfg /tmp
ssh-keygen.
```

### M05 - Solution du TP1 - Configurer un serveur DNS resolveur

```text
apt install bind9
named-checkconf
apt install dnsutils
vi /etc/resolv.conf
vi /etc/bind/named.conf.options
```

### Module 05 - Support de cours

```text
named-checkzone
```

### M06 - Enoncé du TP1 - Configurer le serveur DHCP avec isc-dhcp-server

```text
dpkg-reconfigure nom-du-paquet
```

### M06 - Solution du TP1 - Configurer le serveur DHCP avec isc-dhcp-server

```text
apt search ^isc-dhcp
apt install isc-dhcp- relay
ip a
dpkg-reconfigure isc-dhcp-server
vi /etc/default/is-dhcp-server
vi /etc/dhcp/dhcpd.conf
systemctl restart rsyslog isc-dhcp-server
systemctl stop isc-dhcp- relay.service
systemctl status isc-dhcp- relay.service
systemctl start isc-dhcp- server
systemctl start isc-dhcp- relay
```

### Module 06 - Support de cours

```text
systemctl (status|stop|start|restart) isc-dhcp-server
```

### M07 - Solution du TP1 - Configurer un service DNS faisant autorité

```text
vi /etc/bind/named.conf.local
vi /var/cache/bind/db.tssr.lab
named-checkzone tssr.lab /var/cache/bind/db.tssr.lab
named-checkconf -z
dig ns1.tssr.lab
vi /var/cache/bind/db.inv.172.18.30
vi /var/cache/bind/db.inv.192.168.30
dig -x 172.18.10.254
dig -x 192.168.10.254
```

### M07 - Solution du TP2 - Configurer un service DNS secondaire

```text
dig axfr tssr.lab
vi /var/cache/bind/db.tssr.lab
dig soa tssr.lab @192.168.X.11
dig ns tssr.lab @192.168.X.11
ping deb-s1.tssr.lab.
ping deb-s2.tssr.lab.
journalctl -fu bind9.service
```

### M04-tp-solution-configuration-du-service-ssh

```text
ssh-copy-id user@192.168.X.11
mkdir .ssh
cp /home/user/.ssh/authorized _keys /root/.ssh
scp root@192.168.X.11:/etc/resolv.conf conf_deb-s1
```

### M03-tp-solution-routage

```text
systemctl restart networking.service
nmcli connection modify Wired\ connection\ 1 ipv4.gateway 172.18.X.254
```

### M02-tp-solution-adressage-reseau

```text
nmcli connection modify Wired\ connection\ 1 ipv4.addresses
```

[Cours](../modules/15-services-reseau-en-environnement-linux/index.md)
