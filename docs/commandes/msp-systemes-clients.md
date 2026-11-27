# Commandes — MSP Systèmes clients

**Source : MSP Systèmes clients (supports et corrections de TP du Drive).** Lignes de commande reprises telles quelles ; seule la source de chaque bloc est indiquée. Domaines et identifiants de l’établissement masqués (`.lab`, `[masqué]`).

### Modèle_Solution_MSP

```text
New-LocalUser -FullName "Lena Oxton" -Description "Adminstratrice trop rapide" -Name
New-LocalUser -FullName "$FullName" -Description "$description" -Name "$login" Password (ConvertTo-SecureString -AsPlainText "$password" -Force)
New-LocalGroup -Name ”L_informatique” -Description “groupe informatiques”
New-LocalGroup -Name ”$groupes” -Description “$description”
Add-LocalGroupMember -Group "L_comptabilite" -Member "eporter"
Add-LocalGroupMember -Group "L_comptabilite" -Member "cpeletier"
Add-LocalGroupMember -Group "L_commercial" -Member "ddixon"
Add-LocalGroupMember -Group "L_commercial" -Member "gstokes”
Add-LocalGroupMember -Group "L_commercial" -Member "mgreene"
net user cpeletier /times:lundi-vendredi,9:00-12:00
useradd -c "Rick Grimes" rgrimes -m -g direction --shell /bin/bash -p RGP4$$VV0rI)
useradd -c "365 magnum et presta bien faite" jmaccree -m -g informatique --shell /bin/ksh p JMP4$$VV0rI)
net user admin rgrimes /add
Add-LocalGroupMember -Group "Administrateurs" -Member "loxton"
Add-LocalGroupMember -Group "Administrateurs" -Member "jmaccree"
apt install vim
fdisk -l
fdisk /dev/sdb
apt install xfsprogs
mkfs.ext4 -L PROFILS /dev/sdb1
mkfs.ext4 -L DATA /dev/sdb2
mkfs.xfs -L LOGS /dev/sdb3
cp -rp /home /tmp/home-backup
vim /etc/fstab
mount -a
cp -rp /tmp/home-backup/* /home/
mkdir -p /services/
cd /services/
chown :commercial commercial
chown :comptabilite comptabilite
chown :direction direction
chown :informatique informatique
chown :logistique logistique
chmod 770 *
chmod g+x *
net use U: \\10.10.255.253\Support_info$ /persistent:yes
vim /etc/default/grub
fdisk /dev/sda
apt upgrade
tar cf /root/HomeBack.tar /home
tar cf /root/ServicesBack.tar /services
scp /root/*.tar loxton@ipdubinôme:/dossier
mkdir /tmp/logs
cp -rp /var/log /tmp/logs
cp -rp /tmp/logs/* /var/log/
tail /var/log/syslog
pvcreate /dev/sdc /dev/sdd
vgcreate applications /dev/sdc /dev/sdd
lvcreate -n opt -L 32G applications
mkfs.ext4 /dev/applications/opt
```

### MSP_Systemes_clients_solution_172.16.0.128-26

```text
ipconfig /all
ping 172.16.0.188
ping 172.16.0.187
ping 172.16.0.186
ip -br a
ip route
cat /etc/resolv.conf
ping -c 4 172.16.0.189
ping -c 4 172.16.0.187
ping -c 4 172.16.0.186
net localgroup l_direction /add /comment:"Groupe local du service Direction"
net localgroup l_comptabilite /add /comment:"Groupe local du service Comptabilite"
net user rgrimes * /add /fullname:"Rick Grimes" /comment:"Direction" /expires:never
net localgroup l_direction rgrimes /add
net user eporter * /add /fullname:"Eugene Porter" /comment:"Comptabilite" /expires:never
net localgroup l_comptabilite eporter /add
net user cpeletier * /add /fullname:"Carol Peletier" /comment:"Comptabilite - interimaire"
net localgroup l_comptabilite cpeletier /add
net user cpeletier /times:L-V,09:00-12:00
New-LocalGroup -Name 'l_informatique' -Description 'Service Informatique'
New-LocalUser -Name '<VOTRE_LOGIN>' -FullName '<VOTRE_PRENOM_NOM>' -Description 'Informatique administrateur' -Password $pwd
Add-LocalGroupMember -Group 'l_informatique' -Member '<VOTRE_LOGIN>'
Add-LocalGroupMember -Group 'Administrateurs' -Member '<VOTRE_LOGIN>'
net user cpeletier
net accounts /minpwlen:12 /maxpwage:25
net user adminsecours * /add /fullname:"Administrateur de secours"
net localgroup Administrateurs adminsecours /add
net localgroup Administrateurs <VOTRE_LOGIN> /add
net localgroup Administrateurs <LOGIN_BINOME> /add
net user <LOGIN_BINOME> /logonpasswordchg:yes
net accounts
chmod +x 01_utilisateurs_groupes.sh
sudo ./01_utilisateurs_groupes.sh
gpupdate /force
gpresult /r
sudo vim /etc/apt/sources.list
sudo apt update
sudo apt install -y vim
sudo tee /etc/vim/vimrc.local >/dev/null <<'EOF'
vim --version | head
sudo fdisk /dev/sdb
sudo partprobe /dev/sdb
sudo apt install -y xfsprogs
sudo mkfs.ext4 -L PROFILS /dev/sdb1
sudo mkfs.ext4 -L DATA /dev/sdb2
sudo mkfs.xfs -f -L LOGS /dev/sdb3
lsblk -f
sudo mkdir -p /mnt/profils
sudo mount LABEL=PROFILS /mnt/profils
sudo cp -a /home/. /mnt/profils/
sudo vim /etc/fstab
sudo reboot
df -hT /home
su - ddixon -c 'touch ~/test-profils && ls -l ~/test-profils'
sudo mkdir -p /services
sudo sh -c 'echo "LABEL=DATA /services ext4 defaults 0 2" >> /etc/fstab'
sudo mount -a
sudo mkdir -p /services/{commercial,comptabilite,direction,informatique,logistique}
sudo chown root:documentation /services
sudo chmod 2770 /services
sudo chown root:l_commercial /services/commercial
sudo chown root:l_comptabilite /services/comptabilite
sudo chown root:l_direction /services/direction
sudo chown root:l_informatique /services/informatique
sudo chown root:l_logistique /services/logistique
sudo chmod 2770 /services/{commercial,comptabilite,direction,informatique,logistique}
su - ddixon -c 'touch /services/commercial/test-ok'
su - ddixon -c 'touch /services/comptabilite/test-interdit'
mkdir D:\donnees\Commerciaux
mkdir D:\Support_Info
icacls D:\donnees\Commerciaux /inheritance:r
icacls D:\donnees\Commerciaux /grant:r "SYSTEM:(OI)(CI)F" "Administrateurs:(OI)(CI)F" "l_commercial:(OI)
icacls D:\Support_Info /inheritance:r
icacls D:\Support_Info /grant:r "SYSTEM:(OI)(CI)F" "Administrateurs:(OI)(CI)F" "l_informatique:(OI)(CI)M
New-SmbShare -Name 'Support_Info$' -Path 'D:\Support_Info' -ChangeAccess 'l_informatique' -FullAccess
Get-SmbShare
net share
net use U: \\172.16.0.189\Support_Info$ /persistent:yes
New-PSDrive -Name U -PSProvider FileSystem -Root '\\172.16.0.189\Support_Info$' -Persist
Stop-Service Spooler -Force
New-Item D:\Spool -ItemType Directory -Force
Set-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name DefaultSpoolDirectory
Start-Service Spooler
sudo vim /etc/default/grub
sudo update-grub
grep '^GRUB_TIMEOUT=' /etc/default/grub
sudo swapoff -a
sudo fdisk /dev/sda
sudo partprobe /dev/sda
sudo mkswap -L SWAP /dev/sda4
sudo swapon -a
free -h
sudo apt full-upgrade -y
sudo apt autoremove --purge -y
netstat -ano | findstr :3389
Get-NetTCPConnection -LocalPort 3389 -State Listen
cd <DOSSIER_RESSOURCES>
sudo apt install -y remmina
sudo apt install -y perl openssl libauthen-pam-perl libio-pty-perl apt-show-versions
sudo dpkg -i webmin_*.deb
sudo apt --fix-broken install -y
sudo systemctl enable --now webmin
sudo ss -lntp | grep 10000
sudo apt install -y openssh-client
sudo ssh-keygen -t ed25519 -f /root/.ssh/id_ed25519
sudo ssh-copy-id -i /root/.ssh/id_ed25519.pub <LOGIN_BINOME>@172.16.0.186
sudo install -m 700 02_sauvegarde_quotidienne.sh /usr/local/sbin/sauvegarde-msp
sudo /usr/local/sbin/sauvegarde-msp
sudo crontab -e
sudo crontab -l
ls -lh /var/backups/msp
ssh <LOGIN_BINOME>@172.16.0.186 ls -lh /srv/sauvegardes/DEB10-<INITIALES>
Enable-ComputerRestore -Drive 'C:\'
sudo mkdir -p /mnt/logs
sudo mount LABEL=LOGS /mnt/logs
sudo cp -a /var/log/. /mnt/logs/
sudo sh -c 'echo "LABEL=LOGS /var/log xfs defaults 0 0" >> /etc/fstab'
sudo tail -n 30 /var/log/syslog
sudo apt install -y cifs-utils
sudo mkdir -p /mnt/support_info
sudo tee /root/.smb-support >/dev/null <<'EOF'
sudo chmod 600 /root/.smb-support
touch /mnt/support_info/test-debian.txt
sudo pvcreate /dev/sdc /dev/sdd
sudo vgcreate vg_applications /dev/sdc /dev/sdd
sudo lvcreate -L 32G -n lv_opt vg_applications
sudo mkfs.ext4 -L OPT /dev/vg_applications/lv_opt
sudo mkdir -p /mnt/nouveau_opt
sudo mount /dev/vg_applications/lv_opt /mnt/nouveau_opt
sudo cp -a /opt/. /mnt/nouveau_opt/
Get-SmbShare, net share, lecteur U: persistant et fichier créé
```

### M01-ressource-creation-utilisateur

```text
New-LocalUser -FullName "$FullName" -Description "$description" -Name "$login" -Password (ConvertTo-SecureString -AsPlainText "$password" -Force)
```

### solution-pack-ressource-01-utilisateurs-groupes.sh

```text
apt update
apt install -y ksh
useradd -m -c "$fullname" -g "$group" -G documentation -s "$shell" "$login"
passwd "$login"
```

### solution-pack-ressource-02-informatique-logistique.ps1

```text
New-LocalGroup -Name $g.Name -Description $g.Description
New-LocalUser -Name $u.Name -FullName $u.FullName -Description $u.Description -Password $pwd
Add-LocalGroupMember -Group $u.Group -Member $u.Name -ErrorAction SilentlyContinue
Add-LocalGroupMember -Group 'Administrateurs' -Member $u.Name -ErrorAction SilentlyContinue
Get-LocalGroupMember l_informatique
Get-LocalGroupMember l_logistique
Get-LocalGroupMember Administrateurs
```

### solution-pack-ressource-03-preparer-profils.ps1

```text
New-Item -ItemType Directory -Path $defaultDesktop -Force | Out-Null
Get-ChildItem 'C:\Users' -Directory | Where-Object {
New-Item -ItemType Directory -Path $dest -Force | Out-Null
Copy-Item (Join-Path $defaultDesktop 'Règlement intérieur.txt') $dest -Force
```

### solution-pack-ressource-05-deplacer-spool.ps1

```text
New-Item -ItemType Directory -Path $Spool -Force | Out-Null
icacls $Spool /inheritance:r | Out-Null
icacls $Spool /grant:r '*S-1-5-18:(OI)(CI)F' '*S-1-5-32-544:(OI)(CI)F' | Out-Null
Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name 'DefaultSpoolDirectory' -Value $Spool
Get-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\Print\Printers' -Name 'DefaultSpoolDirectory'
```

### solution-pack-ressource-03-lvm-opt.sh

```text
apt install -y lvm2
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS
vgcreate vg_applications /dev/sdc /dev/sdd
lvcreate -L 32G -n lv_opt vg_applications
mkfs.ext4 -L OPT /dev/vg_applications/lv_opt
mkdir -p /mnt/nouveau_opt
mount /dev/vg_applications/lv_opt /mnt/nouveau_opt
cp -a /opt/. /mnt/nouveau_opt/
umount /mnt/nouveau_opt
```

### solution-pack-tp-solution-msp-systemes-clients-solution-172-16-0-128-26

```text
sudo sh -c 'echo "//172.16.0.187/Support_Info$ /mnt/support_info cifs credentials=/root/.smb-
```

### solution-pack-ressource-01-direction-comptabilite.cmd

```text
net user cpeletier * /add /fullname:"Carol Peletier" /comment:"Comptabilite - interimaire" /expires:never
net user
net localgroup l_direction
net localgroup l_comptabilite
```

### solution-pack-ressource-04-partage-support-info.ps1

```text
New-Item -ItemType Directory -Path $Path -Force | Out-Null
icacls $Path /inheritance:r | Out-Null
icacls $Path /grant:r '*S-1-5-18:(OI)(CI)F' '*S-1-5-32-544:(OI)(CI)F' "${ItGroup}:(OI)(CI)M" | Out-Null
Remove-SmbShare -Name $ShareName -Force
New-SmbShare -Name $ShareName -Path $Path -ChangeAccess $ItGroup -FullAccess 'Administrateurs'
Get-SmbShare -Name $ShareName
```

### solution-pack-ressource-02-sauvegarde-quotidienne.sh

```text
mkdir -p "$BACKUP_DIR"
tar -cpf "$BACKUP_DIR/home-$DATE.tar" /home
tar -cpf "$BACKUP_DIR/services-$DATE.tar" /services
scp -i /root/.ssh/id_ed25519 "$BACKUP_DIR/home-$DATE.tar" "$BACKUP_DIR/services-$DATE.tar" \
find "$BACKUP_DIR" -type f -name '*.tar' -mtime +7 -delete
```

[Cours](../modules/08-msp-systemes-clients/index.md)
