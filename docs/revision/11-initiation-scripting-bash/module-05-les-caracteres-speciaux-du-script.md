# Fiche de révision — Module 05 — Enchaînements et couleurs

| Forme | Repère |
| --- | --- |
| `A ; B` | B suit A quel que soit son statut dans le déroulement ordinaire |
| `A && B` | B s’exécute si A réussit |
| `A \|\| B` | B s’exécute si A a un statut non nul |
| `A \| B` | La sortie standard de A devient l’entrée de B |
| `( A; B )` | Le groupe s’exécute dans un sous-shell |
| `{ A; B; }` | Le groupe ordinaire s’exécute dans le shell courant |
| `2>/dev/null` | Écarte la sortie d’erreur |
| `> fichier` | Redirige la sortie en remplaçant le contenu du fichier |

Les codes de couleur du support vont de 30 à 37 pour le texte et 40 à 47 pour le fond. `\033[1;32m` demande le vert en gras et `\033[0m` réinitialise le style.

**TP 01.** Construisez le chemin de `fic_M5TP1.txt` dans le dossier saisi, vérifiez chaque étape et citez le chemin lors de son utilisation. Le succès de `mkdir -p` signifie que le dossier est prêt, y compris s’il existait déjà.

## Questions flash

1. Quelle branche est prise dans `A && B || C` si B échoue ?
2. Que vérifier si l’écriture du fichier échoue dans le TP ?

??? success "Réponses commentées"
    1. C est exécutée. Pour faire dépendre le choix uniquement de A, utiliser `if`.
    2. Le diagnostic et le statut non nul. La lecture doit être conditionnée à la réussite de l’écriture.

- [Cours](../../modules/11-initiation-scripting-bash/module-05-les-caracteres-speciaux-du-script.md)
- [TP et correction](../../tp/11-initiation-scripting-bash/module-05/index.md)
