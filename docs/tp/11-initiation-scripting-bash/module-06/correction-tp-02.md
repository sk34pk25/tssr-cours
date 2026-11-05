# Correction — TP 02 — Compte utilisateur

Le script source traite un choix après la saisie du nom. Il appelle `useradd -m -s /bin/bash`, `passwd`, `userdel` et examine `/etc/passwd`. La recherche `grep $nom` peut retenir une sous-chaîne ou un autre champ.

## Variante pédagogique de script_M6TP2.sh

Dans cette variante, la vérification compare exactement le premier champ des comptes locaux. Les actions qui modifient un compte visent un compte du laboratoire préfixé par `tp_`, sur une machine virtuelle dédiée. La création, le changement de mot de passe et la suppression requièrent les droits d’administration du laboratoire.

```bash
#!/bin/bash
read -r -p "Identifiant utilisateur : " nom || exit 1
if [[ ! $nom =~ ^[a-z_][a-z0-9_-]*$ ]]; then
    printf '%s\n' "Identifiant invalide pour ce laboratoire." >&2
    exit 1
fi

printf 'GESTION DES UTILISATEURS : %s\n' "$nom"
printf '%s\n' 'C - Créer' 'M - Modifier le mot de passe' 'S - Supprimer' \
    'V - Vérifier' 'Q - Quitter'
read -r -p "Votre choix : " choix || exit 1

existe_localement() {
    awk -F: -v nom="$nom" '$1 == nom { trouve=1 } END { exit !trouve }' /etc/passwd
}

case "$choix" in
    v|V)
        if existe_localement; then
            printf 'Compte local %s existant.\n' "$nom"
        else
            printf 'Compte local %s absent.\n' "$nom"
        fi
        ;;
    q|Q) exit 0 ;;
    c|C|m|M|s|S)
        if [[ $nom != tp_?* ]] || (( EUID != 0 )); then
            printf '%s\n' "Un compte tp_ et les droits du laboratoire sont requis." >&2
            exit 2
        fi
        case "$choix" in
            c|C) useradd -m -s /bin/bash -- "$nom" ;;
            m|M) passwd "$nom" ;;
            s|S) userdel -- "$nom" ;;
        esac
        ;;
    *)
        printf '%s\n' "Choix inconnu." >&2
        exit 1
        ;;
esac
```

`useradd -m` demande un répertoire personnel et `-s /bin/bash` choisit le shell. `userdel` sans option de suppression du répertoire personnel traite le compte sans demander le retrait de ce répertoire. Une erreur d’une commande de gestion donne son statut à l’appelant. Le test d’existence porte sur `/etc/passwd` dans ce TP local. [Page de manuel Debian de useradd](https://manpages.debian.org/trixie/passwd/useradd.8.en.html)

Contrôlez d’abord V sur un identifiant existant puis sur un autre absent. Dans la VM, utilisez un compte de test, vérifiez son existence après la création et après la suppression. Vérifiez aussi Q et un choix invalide.

[Revenir aux TP du module](index.md)
