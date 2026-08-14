#!/bin/bash
set -euo pipefail
# Exécuter en root. Remplacer les quatre variables avant exécution.
VOTRE_LOGIN='jdupont'
VOTRE_NOM='Jean Dupont'
LOGIN_BINOME='mmartin'
NOM_BINOME='Marie Martin'

apt update
apt install -y ksh

for g in l_direction l_commercial l_comptabilite l_informatique l_logistique documentation; do
  getent group "$g" >/dev/null || groupadd "$g"
done

create_user() {
  local login="$1" fullname="$2" group="$3" shell="$4"
  if ! id "$login" >/dev/null 2>&1; then
    useradd -m -c "$fullname" -g "$group" -G documentation -s "$shell" "$login"
  fi
  echo "Définir le mot de passe temporaire de $login :"
  passwd "$login"
  chage -M -1 "$login"
}

create_user rgrimes 'Rick Grimes' l_direction /bin/bash
create_user ddixon 'Daryl Dixon' l_commercial /bin/bash
create_user gstokes 'Gabriel Stokes' l_commercial /bin/bash
create_user mgreene 'Maggie Greene' l_commercial /bin/bash
create_user eporter 'Eugene Porter' l_comptabilite /bin/bash
create_user cpeletier 'Carol Peletier - interimaire' l_comptabilite /bin/bash
create_user "$VOTRE_LOGIN" "$VOTRE_NOM" l_informatique /bin/bash
create_user "$LOGIN_BINOME" "$NOM_BINOME" l_informatique /bin/ksh
create_user respinosa 'Rosita Espinosa' l_logistique /bin/bash
create_user mjones 'Morgan Jones' l_logistique /bin/bash

# Le prestataire/binôme doit changer son mot de passe à la première connexion.
chage -d 0 "$LOGIN_BINOME"

getent passwd rgrimes ddixon gstokes mgreene eporter cpeletier "$VOTRE_LOGIN" "$LOGIN_BINOME" respinosa mjones
getent group l_direction l_commercial l_comptabilite l_informatique l_logistique documentation
