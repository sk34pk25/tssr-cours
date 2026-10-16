# Correction — TP2 : Archivages et Compression

```text
tar -cvf /tmp/$LOGNAME.tar $HOME
ls -lh /tmp/$LOGNAME.tar
tar -czvf /tmp/$LOGNAME.tar.gz $HOME
ls -lh /tmp/$LOGNAME.tar.gz
tar -cjvf /tmp/$LOGNAME.tar.bz2 $HOME
ls -lh /tmp/$LOGNAME.tar.bz2
ls -l /tmp/$LOGNAME.tar*
mkdir $HOME/Restaurations
tar -xzvf /tmp/$LOGNAME.tar.gz -C Restaurations
tar -cvf /tmp/$LOGNAME-v2.tar --exclude=Restaurations $HOME
touch new_fichier.txt
tar -uvf /tmp/$LOGNAME-v2.tar ~/new_fichier.txt
tar -tf /tmp/$LOGNAME-v2.tar
```
