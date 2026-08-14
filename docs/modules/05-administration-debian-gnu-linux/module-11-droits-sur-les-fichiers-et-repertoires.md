# Module 11 — Droits sur les fichiers et répertoires

**Séquence :** Administration Debian GNU/Linux  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 0 support(s) de cours, 0 énoncé(s), 0 correction(s)

!!! warning "Périmètre et versions"
    Les supports d’installation ciblent Debian 11 et certaines diapositives citent Debian 12. La version stable officielle en août 2026 est Debian 13 « trixie » ; les concepts restent valables, mais les écrans, dépôts et versions de paquets doivent être adaptés. Référence : [Versions Debian](https://www.debian.org/releases/).

## Objectifs et compétences

- Lire droits rwx, propriétaire et groupe.
- Calculer et appliquer les permissions symboliques ou octales.
- Comprendre les droits différents sur fichiers et répertoires.
- Utiliser setuid, setgid et sticky bit avec prudence.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Droits sur les fichiers et répertoires » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Lire les permissions sans deviner

<figure class="tssr-figure">
  <div class="tssr-figure__canvas">
    <div class="tssr-permissions" role="img" aria-label="Décomposition des permissions Linux rwx pour le propriétaire, le groupe et les autres">
      <div>Type</div><div>Propriétaire</div><div>Groupe</div><div>Autres</div>
      <div><code>-</code></div><div><code>rwx</code><br/>7 = 4+2+1</div><div><code>r-x</code><br/>5 = 4+0+1</div><div><code>---</code><br/>0</div>
      <div>Fichier</div><div>lire · écrire · exécuter</div><div>lire · exécuter</div><div>aucun accès</div>
    </div>
  </div>
  <figcaption><code>-rwxr-x---</code> correspond à <code>750</code>. Sur un répertoire, <code>x</code> autorise la traversée et <code>w</code> la modification de ses entrées.</figcaption>
</figure>

<div class="tssr-reperes-grid" aria-label="Valeurs octales des permissions Linux">
  <div class="tssr-repere" style="--card-color:#3978c5"><b>r = 4</b><span>Lire le contenu d’un fichier ou lister les noms d’un répertoire.</span></div>
  <div class="tssr-repere" style="--card-color:#c47a18"><b>w = 2</b><span>Modifier un fichier ou créer/supprimer une entrée dans un répertoire.</span></div>
  <div class="tssr-repere" style="--card-color:#159574"><b>x = 1</b><span>Exécuter un fichier ou traverser un répertoire.</span></div>
  <div class="tssr-repere" style="--card-color:#7c5bc4"><b>Contrôle</b><span><code>namei -l chemin</code> vérifie les droits de chaque niveau du chemin.</span></div>
</div>

## Concepts essentiels

Le support de cours autonome n’est pas présent dans l’archive. La progression ci-dessus et les travaux pratiques associés constituent la matière exploitable de ce module ; le portail ne complète pas artificiellement les parties absentes.

## Mise en pratique

- Aucun énoncé de TP distinct n’est fourni pour ce module.
- [Fiche de révision du module](../../revision/administration-linux/module-11-droits-sur-les-fichiers-et-repertoires.md)

## Questions flash

1. Comment expliquer simplement « Droits sur les fichiers et répertoires » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Lire droits rwx, propriétaire et groupe.
    - Calculer et appliquer les permissions symboliques ou octales.
    - Comprendre les droits différents sur fichiers et répertoires.
    - Utiliser setuid, setgid et sticky bit avec prudence.

## Voir aussi

- [Présentation de la séquence](index.md)
