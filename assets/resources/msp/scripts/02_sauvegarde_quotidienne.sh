#!/bin/bash
set -euo pipefail
# À adapter avant utilisation.
REMOTE_USER='mmartin'
REMOTE_HOST='172.16.0.186'
REMOTE_DIR='/srv/sauvegardes/DEB10-XX'
BACKUP_DIR='/var/backups/msp'
DATE="$(date +%F)"

mkdir -p "$BACKUP_DIR"
tar -cpf "$BACKUP_DIR/home-$DATE.tar" /home
tar -cpf "$BACKUP_DIR/services-$DATE.tar" /services

scp -i /root/.ssh/id_ed25519 "$BACKUP_DIR/home-$DATE.tar" "$BACKUP_DIR/services-$DATE.tar" \
  "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/"

# Conservation locale de 7 jours.
find "$BACKUP_DIR" -type f -name '*.tar' -mtime +7 -delete
