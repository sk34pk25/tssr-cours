# Module 08 — Gestion des espaces de stockage avancée — LVM

**Séquence :** Administration Debian GNU/Linux  
**Importance :** socle de la progression officielle  
**Sources consolidées :** 0 support(s) de cours, 0 énoncé(s), 0 correction(s)

!!! warning "Périmètre et versions"
    Les supports d’installation ciblent Debian 11 et certaines diapositives citent Debian 12. La version stable officielle en août 2026 est Debian 13 « trixie » ; les concepts restent valables, mais les écrans, dépôts et versions de paquets doivent être adaptés. Référence : [Versions Debian](https://www.debian.org/releases/).

## Objectifs et compétences

- Comprendre PV, VG et LV.
- Créer un volume logique et son système de fichiers.
- Étendre stockage et système de fichiers dans le bon ordre.
- Contrôler avec pvs, vgs, lvs, lsblk et findmnt.

!!! tip "Façon simple de le comprendre"
    Ce module sert à passer de la notion « Gestion des espaces de stockage avancée — LVM » à une méthode que l’on peut expliquer, appliquer, vérifier et dépanner.

## Méthode de travail

1. Lire les concepts dans l’ordre du support.
2. Reproduire les exemples dans un environnement de laboratoire.
3. Noter le résultat attendu avant de modifier une configuration.
4. Vérifier avec l’outil ou la commande appropriée.
5. Revenir à l’état initial si le résultat diverge.

## Architecture LVM

<figure class="tssr-figure">
  <div class="tssr-figure__canvas">
    <div class="tssr-storage" role="img" aria-label="Architecture LVM des volumes physiques vers un groupe de volumes puis des volumes logiques">
      <div class="tssr-storage__group" style="--group-color:#596675"><b>PV · Physical Volumes</b><div class="tssr-storage__items"><span>/dev/sdb1</span><span>/dev/sdc1</span></div></div>
      <div class="tssr-storage__group" style="--group-color:#3978c5"><b>VG · Volume Group</b><div class="tssr-storage__items"><span>vg_data · espace mutualisé</span></div></div>
      <div class="tssr-storage__group" style="--group-color:#159574"><b>LV · Logical Volumes</b><div class="tssr-storage__items"><span>lv_apps → /srv/apps</span><span>lv_backup → /backup</span></div></div>
    </div>
  </div>
  <figcaption>Recréation du principe présenté dans le support Administration Linux, module 08, pages 5 et 9 à 11 : les PV alimentent un VG, découpé en LV formatés puis montés.</figcaption>
</figure>

```mermaid
flowchart LR
    A["Ajouter le disque<br/>et contrôler avec lsblk"] --> B["pvcreate"] --> C["vgcreate ou vgextend"] --> D["lvcreate ou lvextend"] --> E["Créer ou agrandir<br/>le système de fichiers"] --> F["Monter et vérifier<br/>findmnt · df · lvs"]
```

<p class="tssr-caption">Lors d’une extension, agrandir d’abord la couche de stockage concernée, puis le système de fichiers ; vérifier chaque étape avant de poursuivre.</p>

## Concepts essentiels

Le support de cours autonome n’est pas présent dans l’archive. La progression ci-dessus et les travaux pratiques associés constituent la matière exploitable de ce module ; le portail ne complète pas artificiellement les parties absentes.

## Mise en pratique

- Aucun énoncé de TP distinct n’est fourni pour ce module.
- [Fiche de révision du module](../../revision/administration-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md)

## Questions flash

1. Comment expliquer simplement « Gestion des espaces de stockage avancée — LVM » à un collègue ?
2. Quelles étapes ou notions doivent être maîtrisées avant la manipulation ?
3. Quel contrôle permet de prouver que le résultat est correct ?
4. Quel est le premier risque ou piège à écarter ?

??? success "Éléments de réponse"
    - Comprendre PV, VG et LV.
    - Créer un volume logique et son système de fichiers.
    - Étendre stockage et système de fichiers dans le bon ordre.
    - Contrôler avec pvs, vgs, lvs, lsblk et findmnt.

## Voir aussi

- [Présentation de la séquence](index.md)
