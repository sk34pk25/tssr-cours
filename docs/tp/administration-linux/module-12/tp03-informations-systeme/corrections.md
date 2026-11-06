# Corrigé commenté — TP 03 · Informations sur le système

**Durée du TP** — 20 à 45 minutes. Les captures et le corrigé littéral se lisent dans **Cours Original**. Les étapes qui suivent expliquent les résultats et donnent des commandes complètes à utiliser dans le laboratoire.

## 1. Lire la mémoire et le processeur

~~~bash
free -m
lscpu
lsmem -a
~~~

Dans la capture du corrigé, la ligne de RAM affiche 1 951 Mio au total, 117 Mio dans la colonne « utilisée », 1 729 Mio libres et 1 708 Mio disponibles. La ligne de swap affiche **975 Mio au total et 0 Mio utilisés**. La phrase qui donne 975 Mio de swap utilisée confond le total et l’utilisation.

Pour répondre à « RAM réellement libre », relever **free** pour la mémoire inutilisée à l’instant de la mesure. **available** estime la mémoire que de nouvelles applications peuvent employer sans recourir au swap. Lire cette colonne directement. Elle tient compte de ce que le noyau peut récupérer dans le cache. [Documentation Debian de free](https://manpages.debian.org/trixie/procps/free.1.en.html)

Relever l’architecture et le nom du modèle dans la sortie de `lscpu`. Le corrigé affiche un Intel Core i5-6600 à 3,30 GHz. `lsmem -a` complète le relevé avec les plages de mémoire de la machine. Relever les caractéristiques de la VM du TP.

## 2. Lister et compter les noms qui finissent par d

~~~bash
ps -eo pid=,user=,comm= | awk '$NF ~ /d$/'
ps -eo comm= | awk '/d$/ {count++} END {print count+0}'
~~~

La première commande conserve le PID, l’utilisateur et le nom de la commande. La seconde affiche un nombre, y compris zéro. La variante du support avec `ps -ef` filtre la ligne complète et peut correspondre à un argument. Sélectionner `comm` vérifie le critère demandé sur le nom du processus. Le fragment `awk '3 /d/ {print $0}'` du support est conservé dans **Cours Original**. [Documentation Debian de ps](https://manpages.debian.org/trixie/procps/ps.1.en.html)

## 3. Relever les sessions sur le serveur

Ouvrir une session SSH avec le compte utilisateur du TP. Lister ses processus, puis enregistrer les processus SSH visibles sur le serveur.

~~~bash
ps -u "$USER" -o pid,ppid,tty,stat,args
ps -C sshd,sshd-session,sshd-auth -o pid,ppid,user,args > "$HOME/liste-putty.txt"
cat "$HOME/liste-putty.txt"
~~~

PuTTY est le client de connexion. Le fichier relève les processus du serveur SSH, dont les noms varient selon la version, et peut inclure le processus d’écoute. Comparer le relevé avant et après l’ouverture de la seconde session.

## 4. Interrompre le shell de la seconde session

Depuis la **seconde** session SSH, relever le PID du shell et son terminal.

~~~bash
ps -p "$$" -o pid,ppid,user,tty,args
~~~

Depuis la **première** session, saisir ce PID et relire la ligne affichée. Vérifier qu’elle correspond au shell et au terminal relevés dans la seconde session.

~~~bash
read -r -p 'PID du shell de la seconde session : ' pid
[[ "$pid" =~ ^[1-9][0-9]*$ ]] && ps -p "$pid" -o pid,ppid,user,tty,args
~~~

Envoyer le signal par défaut, **SIGTERM**, puis vérifier la disparition du shell avec `ps -p "$pid"`. Exécuter le bloc suivant uniquement après avoir vérifié l’identité de la cible.

~~~bash
if [[ "$pid" =~ ^[1-9][0-9]*$ ]]; then
    kill -TERM -- "$pid"
    ps -p "$pid" -o pid,ppid,user,tty,args
fi
~~~

Le corrigé imprimé attribue à **SIGHUP (1)** une capture qui montre `kill -9`, c’est-à-dire **SIGKILL (9)**. Si le shell de test reste présent, confirmer à nouveau le PID et le terminal avant d’utiliser `kill -KILL -- "$pid"`. Refaire le contrôle et vérifier que la première session reste ouverte.

## Compte rendu attendu

- État de départ et cible précise de la manipulation.
- Commandes ou paramètres appliqués, avec les valeurs réellement utilisées.
- Résultats observés et contrôles qui les établissent.
- Différences entre l’environnement actuel et celui des captures.

[Retour au TP](index.md) · [Énoncés](enonces.md) · [Corrigés](corrections.md).
