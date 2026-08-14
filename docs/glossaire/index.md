---
hide:
  - toc
---

<!-- Fichier généré par scripts/build_glossary.py depuis data/glossaire.json. Ne pas modifier à la main. -->

# Glossaire TSSR

Retrouvez ici les termes, acronymes, commandes et concepts essentiels rencontrés dans les cours, travaux pratiques et fiches de révision de la formation.

<div class="tssr-glossary" data-glossary-root data-total="487">
  <form class="tssr-glossary-controls" data-glossary-controls hidden aria-label="Filtrer le glossaire">
    <div class="tssr-glossary-controls__primary">
      <label class="tssr-glossary-field tssr-glossary-field--search" for="glossaire-recherche">
        <span>Rechercher</span>
        <input id="glossaire-recherche" type="search" data-glossary-search autocomplete="off" spellcheck="false" placeholder="Terme, acronyme, définition…">
      </label>
      <label class="tssr-glossary-field" for="glossaire-cours">
        <span>Cours</span>
        <select id="glossaire-cours" data-glossary-course>
          <option value="">Tous les cours</option>
        <option value="reseaux">Bases des réseaux</option>
        <option value="windows">Systèmes clients Microsoft</option>
        <option value="m365">Microsoft 365 — Outils collaboratifs</option>
        <option value="linux">Utilisation d’une distribution GNU/Linux</option>
        <option value="debian">Administration Debian GNU/Linux</option>
        <option value="itil">Sensibilisation ITIL et gestion de parc</option>
        <option value="glpi">Administration GLPI</option>
        <option value="msp">Mise en situation professionnelle — Systèmes clients</option>
        </select>
      </label>
      <label class="tssr-glossary-field" for="glossaire-module">
        <span>Module</span>
        <select id="glossaire-module" data-glossary-module>
          <option value="">Tous les modules</option>
        <option value="r01" data-course="reseaux">Réseaux · M01 · Modèle OSI</option>
        <option value="r02" data-course="reseaux">Réseaux · M02 · Unités informatiques</option>
        <option value="r03" data-course="reseaux">Réseaux · M03 · Adressage IPv4</option>
        <option value="r04" data-course="reseaux">Réseaux · M04 · Communication réseau</option>
        <option value="r05" data-course="reseaux">Réseaux · M05 · Commandes réseau</option>
        <option value="r06" data-course="reseaux">Réseaux · M06 · Adressage IPv6</option>
        <option value="w01" data-course="windows">Windows · M01 · Systèmes d’exploitation</option>
        <option value="w02" data-course="windows">Windows · M02 · Installation Windows</option>
        <option value="w03" data-course="windows">Windows · M03 · Interagir avec Windows</option>
        <option value="w04" data-course="windows">Windows · M04 · Stockage Windows</option>
        <option value="w05" data-course="windows">Windows · M05 · Utilisateurs et groupes</option>
        <option value="w06" data-course="windows">Windows · M06 · NTFS et ACL</option>
        <option value="w07" data-course="windows">Windows · M07 · Réseau et pare-feu</option>
        <option value="w08" data-course="windows">Windows · M08 · Partage de ressources</option>
        <option value="w09" data-course="windows">Windows · M09 · Pilotes et imprimantes</option>
        <option value="w10" data-course="windows">Windows · M10 · Maintenance Windows</option>
        <option value="w11" data-course="windows">Windows · M11 · PowerShell</option>
        <option value="w12" data-course="windows">Windows · M12 · Capture et déploiement</option>
        <option value="w13" data-course="windows">Windows · M13 · Stratégies de groupe</option>
        <option value="wadd" data-course="windows">Windows · Additionnel · Workstation</option>
        <option value="m01" data-course="m365">Microsoft 365 · M01 · Microsoft 365</option>
        <option value="m02" data-course="m365">Microsoft 365 · M02 · Word</option>
        <option value="m03" data-course="m365">Microsoft 365 · M03 · Excel</option>
        <option value="m04" data-course="m365">Microsoft 365 · M04 · Outlook</option>
        <option value="m05" data-course="m365">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</option>
        <option value="l03" data-course="linux">GNU/Linux · M03 · Premières commandes</option>
        <option value="l04" data-course="linux">GNU/Linux · M04 · Fichiers et métacaractères</option>
        <option value="l05" data-course="linux">GNU/Linux · M05 · Fichiers et liens</option>
        <option value="l06" data-course="linux">GNU/Linux · M06 · Recherches et regex</option>
        <option value="l07" data-course="linux">GNU/Linux · M07 · Vi</option>
        <option value="l08" data-course="linux">GNU/Linux · M08 · Bash avancé</option>
        <option value="d01" data-course="debian">Debian · M01 · Présentation Debian</option>
        <option value="d02" data-course="debian">Debian · M02 · Installation Debian</option>
        <option value="d03" data-course="debian">Debian · M03 · Démarrage Debian</option>
        <option value="d04" data-course="debian">Debian · M04 · Mode maintenance</option>
        <option value="d05" data-course="debian">Debian · M05 · Réseau Debian</option>
        <option value="d06" data-course="debian">Debian · M06 · Paquets logiciels</option>
        <option value="d07" data-course="debian">Debian · M07 · Stockage</option>
        <option value="d08" data-course="debian">Debian · M08 · LVM</option>
        <option value="d09" data-course="debian">Debian · M09 · Systèmes de fichiers</option>
        <option value="d10" data-course="debian">Debian · M10 · Utilisateurs et groupes</option>
        <option value="d11" data-course="debian">Debian · M11 · Droits Linux</option>
        <option value="d12" data-course="debian">Debian · M12 · Maintenance</option>
        <option value="i01" data-course="itil">ITIL · M01 · Présentation ITIL</option>
        <option value="i02" data-course="itil">ITIL · M02 · Gestion des services</option>
        <option value="i03" data-course="itil">ITIL · M03 · Stratégie et conception</option>
        <option value="i04" data-course="itil">ITIL · M04 · Transition des services</option>
        <option value="i05" data-course="itil">ITIL · M05 · Découverte de GLPI</option>
        <option value="i06" data-course="itil">ITIL · M06 · Exploitation des services</option>
        <option value="i07" data-course="itil">ITIL · M07 · Amélioration continue</option>
        <option value="i08" data-course="itil">ITIL · M08 · Compétences professionnelles</option>
        <option value="i09" data-course="itil">ITIL · M09 · Assistance avec GLPI</option>
        <option value="g01" data-course="glpi">GLPI · M01 · Installation de GLPI</option>
        <option value="g02" data-course="glpi">GLPI · M02 · AD et habilitations</option>
        <option value="g03" data-course="glpi">GLPI · M03 · Inventaire informatique</option>
        <option value="g04" data-course="glpi">GLPI · M04 · Automatisation des tickets</option>
        <option value="g05" data-course="glpi">GLPI · M05 · MySQL et MariaDB</option>
        <option value="g06" data-course="glpi">GLPI · M06 · Plug-ins et inventaire</option>
        <option value="s01" data-course="msp">MSP · M01 · MSP Systèmes clients</option>
        </select>
      </label>
      <label class="tssr-glossary-field" for="glossaire-tri">
        <span>Trier par</span>
        <select id="glossaire-tri" data-glossary-sort>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
          <option value="course">Cours</option>
          <option value="module">Module</option>
          <option value="relevance">Pertinence</option>
        </select>
      </label>
    </div>
    <fieldset class="tssr-glossary-alphabet" data-glossary-alphabet>
      <legend>Initiale</legend>
      <button type="button" class="tssr-glossary-letter is-active" data-glossary-letter="" aria-pressed="true">Toutes</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="A" aria-pressed="false">A</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="B" aria-pressed="false">B</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="C" aria-pressed="false">C</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="D" aria-pressed="false">D</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="E" aria-pressed="false">E</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="F" aria-pressed="false">F</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="G" aria-pressed="false">G</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="H" aria-pressed="false">H</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="I" aria-pressed="false">I</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="J" aria-pressed="false">J</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="K" aria-pressed="false">K</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="L" aria-pressed="false">L</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="M" aria-pressed="false">M</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="N" aria-pressed="false">N</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="O" aria-pressed="false">O</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="P" aria-pressed="false">P</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="Q" aria-pressed="false">Q</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="R" aria-pressed="false">R</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="S" aria-pressed="false">S</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="T" aria-pressed="false">T</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="U" aria-pressed="false">U</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="V" aria-pressed="false">V</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="W" aria-pressed="false">W</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="X" aria-pressed="false">X</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="Y" aria-pressed="false">Y</button>
      <button type="button" class="tssr-glossary-letter" data-glossary-letter="Z" aria-pressed="false">Z</button>
    </fieldset>
    <div class="tssr-glossary-controls__status">
      <p data-glossary-status role="status" aria-live="polite"><strong data-glossary-count>487</strong> termes affichés <span data-glossary-summary>Tous les termes</span></p>
      <button type="reset" class="tssr-glossary-reset" data-glossary-reset>Réinitialiser</button>
    </div>
  </form>

  <noscript><p class="tssr-glossary-noscript">JavaScript est désactivé : toutes les définitions restent disponibles ci-dessous et la recherche générale du site reste utilisable.</p></noscript>

  <div class="tssr-glossary-empty" data-glossary-empty hidden>
    <strong>Aucun terme ne correspond à ces filtres.</strong>
    <span>Essayez une recherche plus courte ou réinitialisez les filtres.</span>
  </div>

  <div class="tssr-glossary-list" data-glossary-list>
<article class="tssr-glossary-card" id="accord-de-niveau-operationnel" data-glossary-card data-term="Accord de niveau opérationnel" data-full-name data-aliases="OLA | Operational Level Agreement" data-keywords="niveau de service" data-definition="Engagement interne entre équipes d’un même fournisseur qui soutient les objectifs d’un SLA sans être un contrat avec le client." data-courses="itil" data-modules="i03 i07" data-letter="A" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="352" aria-labelledby="accord-de-niveau-operationnel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="accord-de-niveau-operationnel-titre"><a href="#accord-de-niveau-operationnel" class="tssr-glossary-card__anchor" aria-label="Accord de niveau opérationnel">Accord de niveau opérationnel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Engagement interne entre équipes d’un même fournisseur qui soutient les objectifs d’un SLA sans être un contrat avec le client.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> OLA · Operational Level Agreement</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ace" data-glossary-card data-term="ACE" data-full-name="Access Control Entry" data-aliases="entrée de contrôle d’accès" data-keywords="DACL | permission" data-definition="Entrée individuelle d’une ACL indiquant quel utilisateur ou groupe reçoit une autorisation ou un refus sur une ressource." data-courses="windows" data-modules="w06" data-letter="A" data-course-sort="systemes clients microsoft" data-module-sort="011" data-source-order="77" aria-labelledby="ace-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ace-titre"><a href="#ace" class="tssr-glossary-card__anchor" aria-label="ACE">ACE</a></h2>
    <p class="tssr-glossary-card__full-name">Access Control Entry</p>
  </header>
  <p class="tssr-glossary-card__definition">Entrée individuelle d’une ACL indiquant quel utilisateur ou groupe reçoit une autorisation ou un refus sur une ressource.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> entrée de contrôle d’accès</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="acl" data-glossary-card data-term="ACL" data-full-name="Access Control List" data-aliases="liste de contrôle d’accès" data-keywords="droits | autorisation | sécurité" data-definition="Liste d’entrées qui autorisent ou refusent des actions sur une ressource selon une identité ou une règle. Sous Windows, elle porte notamment les permissions NTFS." data-courses="windows glpi" data-modules="w06 g02" data-letter="A" data-course-sort="systemes clients microsoft" data-module-sort="011" data-source-order="1" aria-labelledby="acl-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="acl-titre"><a href="#acl" class="tssr-glossary-card__anchor" aria-label="ACL">ACL</a></h2>
    <p class="tssr-glossary-card__full-name">Access Control List</p>
  </header>
  <p class="tssr-glossary-card__definition">Liste d’entrées qui autorisent ou refusent des actions sur une ressource selon une identité ou une règle. Sous Windows, elle porte notamment les permissions NTFS.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> liste de contrôle d’accès</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="action-automatique-glpi" data-glossary-card data-term="Action automatique GLPI" data-full-name data-aliases="cron GLPI" data-keywords="planification | automatisation" data-definition="Tâche planifiée par GLPI pour exécuter périodiquement des traitements comme notifications, collecteurs, nettoyages ou calculs de niveaux de service." data-courses="glpi" data-modules="g04" data-letter="A" data-course-sort="administration glpi" data-module-sort="055" data-source-order="422" aria-labelledby="action-automatique-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="action-automatique-glpi-titre"><a href="#action-automatique-glpi" class="tssr-glossary-card__anchor" aria-label="Action automatique GLPI">Action automatique GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Tâche planifiée par GLPI pour exécuter périodiquement des traitements comme notifications, collecteurs, nettoyages ou calculs de niveaux de service.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> cron GLPI</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="active-directory" data-glossary-card data-term="Active Directory" data-full-name data-aliases="AD | AD DS" data-keywords="annuaire | LDAP" data-definition="Service d’annuaire Microsoft qui centralise identités, groupes, ordinateurs et politiques, et peut servir de source d’authentification LDAP pour GLPI." data-courses="glpi" data-modules="g02" data-letter="A" data-course-sort="administration glpi" data-module-sort="053" data-source-order="423" aria-labelledby="active-directory-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="active-directory-titre"><a href="#active-directory" class="tssr-glossary-card__anchor" aria-label="Active Directory">Active Directory</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service d’annuaire Microsoft qui centralise identités, groupes, ordinateurs et politiques, et peut servir de source d’authentification LDAP pour GLPI.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> AD · AD DS</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="adduser" data-glossary-card data-term="adduser" data-full-name data-aliases data-keywords="utilisateur | création de compte" data-definition="Outil Debian convivial qui crée un compte et son environnement en appliquant les politiques locales, en s’appuyant sur des outils plus bas niveau." data-courses="debian" data-modules="d10" data-letter="A" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="282" aria-labelledby="adduser-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="adduser-titre"><a href="#adduser" class="tssr-glossary-card__anchor" aria-label="adduser">adduser</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Outil Debian convivial qui crée un compte et son environnement en appliquant les politiques locales, en s’appuyant sur des outils plus bas niveau.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="administrateur-local" data-glossary-card data-term="Administrateur local" data-full-name data-aliases data-keywords="élévation | groupe Administrateurs" data-definition="Compte ou membre du groupe Administrateurs qui possède des privilèges élevés sur un poste Windows, sous le contrôle de l’UAC." data-courses="windows msp" data-modules="w05 s01" data-letter="A" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="78" aria-labelledby="administrateur-local-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="administrateur-local-titre"><a href="#administrateur-local" class="tssr-glossary-card__anchor" aria-label="Administrateur local">Administrateur local</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Compte ou membre du groupe Administrateurs qui possède des privilèges élevés sur un poste Windows, sous le contrôle de l’UAC.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="adresse-de-boucle-locale" data-glossary-card data-term="Adresse de boucle locale" data-full-name data-aliases="loopback | localhost | 127.0.0.1 | ::1" data-keywords="test local" data-definition="Adresse qui renvoie le trafic vers la machine elle-même afin de tester sa pile réseau sans utiliser l’interface physique." data-courses="reseaux" data-modules="r03 r06" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="3" aria-labelledby="adresse-de-boucle-locale-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="adresse-de-boucle-locale-titre"><a href="#adresse-de-boucle-locale" class="tssr-glossary-card__anchor" aria-label="Adresse de boucle locale">Adresse de boucle locale</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Adresse qui renvoie le trafic vers la machine elle-même afin de tester sa pile réseau sans utiliser l’interface physique.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> loopback · localhost · 127.0.0.1 · ::1</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="adresse-de-broadcast" data-glossary-card data-term="Adresse de broadcast" data-full-name data-aliases="adresse de diffusion" data-keywords="broadcast | tous les hôtes" data-definition="Dernière adresse d’un sous-réseau IPv4, réservée à l’envoi vers tous ses hôtes. Elle ne peut pas être attribuée à une machine." data-courses="reseaux" data-modules="r03 r04" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="2" aria-labelledby="adresse-de-broadcast-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="adresse-de-broadcast-titre"><a href="#adresse-de-broadcast" class="tssr-glossary-card__anchor" aria-label="Adresse de broadcast">Adresse de broadcast</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Dernière adresse d’un sous-réseau IPv4, réservée à l’envoi vers tous ses hôtes. Elle ne peut pas être attribuée à une machine.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> adresse de diffusion</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="adresse-de-lien-local-ipv6" data-glossary-card data-term="Adresse de lien local IPv6" data-full-name data-aliases="link-local | FE80::/10" data-keywords="IPv6 | voisinage" data-definition="Adresse IPv6 de la plage FE80::/10 valable uniquement sur le lien local. Elle sert notamment aux échanges de voisinage et n’est pas routée." data-courses="reseaux" data-modules="r06" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="005" data-source-order="4" aria-labelledby="adresse-de-lien-local-ipv6-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="adresse-de-lien-local-ipv6-titre"><a href="#adresse-de-lien-local-ipv6" class="tssr-glossary-card__anchor" aria-label="Adresse de lien local IPv6">Adresse de lien local IPv6</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Adresse IPv6 de la plage FE80::/10 valable uniquement sur le lien local. Elle sert notamment aux échanges de voisinage et n’est pas routée.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> link-local · FE80::/10</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="adresse-ip-privee" data-glossary-card data-term="Adresse IP privée" data-full-name data-aliases="RFC 1918" data-keywords="LAN | adressage privé" data-definition="Adresse IPv4 réservée aux réseaux internes : 10.0.0.0/8, 172.16.0.0/12 ou 192.168.0.0/16. Elle n’est pas routée directement sur Internet." data-courses="reseaux msp" data-modules="r03 s01" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="5" aria-labelledby="adresse-ip-privee-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="adresse-ip-privee-titre"><a href="#adresse-ip-privee" class="tssr-glossary-card__anchor" aria-label="Adresse IP privée">Adresse IP privée</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Adresse IPv4 réservée aux réseaux internes : 10.0.0.0/8, 172.16.0.0/12 ou 192.168.0.0/16. Elle n’est pas routée directement sur Internet.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> RFC 1918</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="adresse-ip-publique" data-glossary-card data-term="Adresse IP publique" data-full-name data-aliases data-keywords="Internet | routable" data-definition="Adresse IP globalement unique et routable sur Internet, attribuée dans le cadre des plages publiques et distincte des adresses privées." data-courses="reseaux" data-modules="r03" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="6" aria-labelledby="adresse-ip-publique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="adresse-ip-publique-titre"><a href="#adresse-ip-publique" class="tssr-glossary-card__anchor" aria-label="Adresse IP publique">Adresse IP publique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Adresse IP globalement unique et routable sur Internet, attribuée dans le cadre des plages publiques et distincte des adresses privées.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="adresse-mac" data-glossary-card data-term="Adresse MAC" data-full-name="Media Access Control address" data-aliases="adresse physique" data-keywords="Ethernet | couche 2 | 48 bits" data-definition="Identifiant de couche liaison associé à une interface réseau. Ethernet l’utilise pour livrer une trame sur le réseau local." data-courses="reseaux" data-modules="r01 r04" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="7" aria-labelledby="adresse-mac-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="adresse-mac-titre"><a href="#adresse-mac" class="tssr-glossary-card__anchor" aria-label="Adresse MAC">Adresse MAC</a></h2>
    <p class="tssr-glossary-card__full-name">Media Access Control address</p>
  </header>
  <p class="tssr-glossary-card__definition">Identifiant de couche liaison associé à une interface réseau. Ethernet l’utilise pour livrer une trame sur le réseau local.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> adresse physique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="adresse-reseau" data-glossary-card data-term="Adresse réseau" data-full-name data-aliases="ID réseau | network ID" data-keywords="sous-réseau | masque" data-definition="Première adresse d’un sous-réseau IP ; ses bits hôte sont à zéro. Elle identifie le sous-réseau et ne s’attribue pas à une machine." data-courses="reseaux" data-modules="r03" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="8" aria-labelledby="adresse-reseau-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="adresse-reseau-titre"><a href="#adresse-reseau" class="tssr-glossary-card__anchor" aria-label="Adresse réseau">Adresse réseau</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Première adresse d’un sous-réseau IP ; ses bits hôte sont à zéro. Elle identifie le sous-réseau et ne s’attribue pas à une machine.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> ID réseau · network ID</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="affectation-de-ticket" data-glossary-card data-term="Affectation de ticket" data-full-name data-aliases="assignation" data-keywords="technicien | groupe" data-definition="Association d’un ticket à un technicien ou groupe responsable de son traitement, manuellement ou par une règle métier." data-courses="glpi itil" data-modules="g04 i09" data-letter="A" data-course-sort="administration glpi" data-module-sort="051" data-source-order="424" aria-labelledby="affectation-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="affectation-de-ticket-titre"><a href="#affectation-de-ticket" class="tssr-glossary-card__anchor" aria-label="Affectation de ticket">Affectation de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Association d’un ticket à un technicien ou groupe responsable de son traitement, manuellement ou par une règle métier.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> assignation</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="agregat-sql" data-glossary-card data-term="Agrégat SQL" data-full-name data-aliases data-keywords="fonction d’agrégation | requête" data-definition="Calcul portant sur un ensemble de lignes, par exemple COUNT, AVG, SUM, MIN ou MAX, éventuellement regroupé par critères." data-courses="glpi" data-modules="g05" data-letter="A" data-course-sort="administration glpi" data-module-sort="056" data-source-order="425" aria-labelledby="agregat-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="agregat-sql-titre"><a href="#agregat-sql" class="tssr-glossary-card__anchor" aria-label="Agrégat SQL">Agrégat SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Calcul portant sur un ensemble de lignes, par exemple COUNT, AVG, SUM, MIN ou MAX, éventuellement regroupé par critères.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="alerte" data-glossary-card data-term="Alerte" data-full-name data-aliases data-keywords="événement | supervision" data-definition="Notification signalant qu’un seuil ou une condition mérite une action ; elle peut provenir de la surveillance d’un événement technique." data-courses="itil" data-modules="i06" data-letter="A" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="353" aria-labelledby="alerte-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="alerte-titre"><a href="#alerte" class="tssr-glossary-card__anchor" aria-label="Alerte">Alerte</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Notification signalant qu’un seuil ou une condition mérite une action ; elle peut provenir de la surveillance d’un événement technique.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="alias-shell" data-glossary-card data-term="Alias shell" data-full-name data-aliases="alias Bash" data-keywords="commande personnalisée" data-definition="Nom court défini dans le shell pour remplacer une commande ou une séquence simple ; sa portée dépend de la session et des fichiers de configuration." data-courses="linux" data-modules="l08" data-letter="A" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="213" aria-labelledby="alias-shell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="alias-shell-titre"><a href="#alias-shell" class="tssr-glossary-card__anchor" aria-label="Alias shell">Alias shell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Nom court défini dans le shell pour remplacer une commande ou une séquence simple ; sa portée dépend de la session et des fichiers de configuration.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> alias Bash</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="alias-sql" data-glossary-card data-term="Alias SQL" data-full-name data-aliases data-keywords="AS | SELECT" data-definition="Nom temporaire donné à une colonne ou une table dans une requête avec AS afin de rendre le résultat ou l’écriture plus lisible." data-courses="glpi" data-modules="g05" data-letter="A" data-course-sort="administration glpi" data-module-sort="056" data-source-order="426" aria-labelledby="alias-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="alias-sql-titre"><a href="#alias-sql" class="tssr-glossary-card__anchor" aria-label="Alias SQL">Alias SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Nom temporaire donné à une colonne ou une table dans une requête avec AS afin de rendre le résultat ou l’écriture plus lisible.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="amelioration-continue" data-glossary-card data-term="Amélioration continue" data-full-name data-aliases="CSI | Continual Service Improvement" data-keywords="mesure | progrès" data-definition="Démarche régulière qui mesure les résultats, identifie les écarts, priorise des actions et vérifie les bénéfices obtenus." data-courses="itil" data-modules="i07" data-letter="A" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="049" data-source-order="354" aria-labelledby="amelioration-continue-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="amelioration-continue-titre"><a href="#amelioration-continue" class="tssr-glossary-card__anchor" aria-label="Amélioration continue">Amélioration continue</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Démarche régulière qui mesure les résultats, identifie les écarts, priorise des actions et vérifie les bénéfices obtenus.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> CSI · Continual Service Improvement</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="analyse-d-impact-metier" data-glossary-card data-term="Analyse d’impact métier" data-full-name data-aliases="BIA | Business Impact Analysis" data-keywords="continuité | risque" data-definition="Étude des conséquences d’une interruption sur les activités afin de fixer les priorités et objectifs de continuité." data-courses="itil" data-modules="i03" data-letter="A" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="355" aria-labelledby="analyse-d-impact-metier-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="analyse-d-impact-metier-titre"><a href="#analyse-d-impact-metier" class="tssr-glossary-card__anchor" aria-label="Analyse d’impact métier">Analyse d’impact métier</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Étude des conséquences d’une interruption sur les activités afin de fixer les priorités et objectifs de continuité.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> BIA · Business Impact Analysis</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="anycast" data-glossary-card data-term="Anycast" data-full-name data-aliases data-keywords="IPv6 | routage" data-definition="Mode d’adressage où plusieurs équipements partagent une adresse et où le routage dirige le trafic vers l’instance jugée la plus proche." data-courses="reseaux" data-modules="r06" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="005" data-source-order="9" aria-labelledby="anycast-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="anycast-titre"><a href="#anycast" class="tssr-glossary-card__anchor" aria-label="Anycast">Anycast</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mode d’adressage où plusieurs équipements partagent une adresse et où le routage dirige le trafic vers l’instance jugée la plus proche.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="apache-http-server" data-glossary-card data-term="Apache HTTP Server" data-full-name data-aliases="Apache" data-keywords="serveur web | HTTP" data-definition="Serveur web qui reçoit les requêtes HTTP ou HTTPS et, dans la pile GLPI étudiée, transmet l’exécution des pages PHP." data-courses="glpi" data-modules="g01" data-letter="A" data-course-sort="administration glpi" data-module-sort="052" data-source-order="427" aria-labelledby="apache-http-server-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="apache-http-server-titre"><a href="#apache-http-server" class="tssr-glossary-card__anchor" aria-label="Apache HTTP Server">Apache HTTP Server</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Serveur web qui reçoit les requêtes HTTP ou HTTPS et, dans la pile GLPI étudiée, transmet l’exécution des pages PHP.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Apache</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="apipa" data-glossary-card data-term="APIPA" data-full-name="Automatic Private IP Addressing" data-aliases="adresse automatique 169.254" data-keywords="DHCP indisponible" data-definition="Mécanisme qui attribue automatiquement une adresse 169.254.0.0/16 à un client IPv4 lorsque le serveur DHCP ne répond pas." data-courses="reseaux windows" data-modules="r03 r05 w07" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="10" aria-labelledby="apipa-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="apipa-titre"><a href="#apipa" class="tssr-glossary-card__anchor" aria-label="APIPA">APIPA</a></h2>
    <p class="tssr-glossary-card__full-name">Automatic Private IP Addressing</p>
  </header>
  <p class="tssr-glossary-card__definition">Mécanisme qui attribue automatiquement une adresse 169.254.0.0/16 à un client IPv4 lorsque le serveur DHCP ne répond pas.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> adresse automatique 169.254</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="approbation-uac" data-glossary-card data-term="Approbation UAC" data-full-name data-aliases="consent prompt" data-keywords="élévation" data-definition="Invite demandant à un administrateur de confirmer une action nécessitant un jeton élevé avant son exécution." data-courses="windows" data-modules="w05" data-letter="A" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="79" aria-labelledby="approbation-uac-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="approbation-uac-titre"><a href="#approbation-uac" class="tssr-glossary-card__anchor" aria-label="Approbation UAC">Approbation UAC</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Invite demandant à un administrateur de confirmer une action nécessitant un jeton élevé avant son exécution.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> consent prompt</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="apt" data-glossary-card data-term="APT" data-full-name="Advanced Package Tool" data-aliases="apt" data-keywords="paquet | dépôt" data-definition="Ensemble d’outils Debian qui résout les dépendances, télécharge et gère les paquets à partir de dépôts configurés." data-courses="debian" data-modules="d06" data-letter="A" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="283" aria-labelledby="apt-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="apt-titre"><a href="#apt" class="tssr-glossary-card__anchor" aria-label="APT">APT</a></h2>
    <p class="tssr-glossary-card__full-name">Advanced Package Tool</p>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble d’outils Debian qui résout les dépendances, télécharge et gère les paquets à partir de dépôts configurés.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> apt</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="apt-full-upgrade" data-glossary-card data-term="apt full-upgrade" data-full-name data-aliases data-keywords="mise à niveau | dépendances" data-definition="Commande APT qui met à niveau les paquets en autorisant si nécessaire installation ou suppression de dépendances pour résoudre l’évolution." data-courses="debian" data-modules="d06" data-letter="A" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="284" aria-labelledby="apt-full-upgrade-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="apt-full-upgrade-titre"><a href="#apt-full-upgrade" class="tssr-glossary-card__anchor" aria-label="apt full-upgrade">apt full-upgrade</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande APT qui met à niveau les paquets en autorisant si nécessaire installation ou suppression de dépendances pour résoudre l’évolution.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="apt-update" data-glossary-card data-term="apt update" data-full-name data-aliases data-keywords="index APT | dépôt" data-definition="Commande qui télécharge les index des dépôts configurés sans installer de mise à jour, afin de connaître les versions disponibles." data-courses="debian" data-modules="d06" data-letter="A" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="285" aria-labelledby="apt-update-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="apt-update-titre"><a href="#apt-update" class="tssr-glossary-card__anchor" aria-label="apt update">apt update</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui télécharge les index des dépôts configurés sans installer de mise à jour, afin de connaître les versions disponibles.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="apt-upgrade" data-glossary-card data-term="apt upgrade" data-full-name data-aliases data-keywords="mise à jour | paquet" data-definition="Commande qui installe les nouvelles versions disponibles sans retirer de paquet installé, après actualisation des index." data-courses="debian" data-modules="d06" data-letter="A" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="286" aria-labelledby="apt-upgrade-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="apt-upgrade-titre"><a href="#apt-upgrade" class="tssr-glossary-card__anchor" aria-label="apt upgrade">apt upgrade</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui installe les nouvelles versions disponibles sans retirer de paquet installé, après actualisation des index.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="arborescence-linux" data-glossary-card data-term="Arborescence Linux" data-full-name data-aliases data-keywords="répertoires | racine" data-definition="Organisation hiérarchique unique des fichiers et répertoires à partir de la racine /, dans laquelle les volumes sont montés." data-courses="linux debian" data-modules="l04 d09" data-letter="A" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="214" aria-labelledby="arborescence-linux-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="arborescence-linux-titre"><a href="#arborescence-linux" class="tssr-glossary-card__anchor" aria-label="Arborescence Linux">Arborescence Linux</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Organisation hiérarchique unique des fichiers et répertoires à partir de la racine /, dans laquelle les volumes sont montés.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="archive-tar" data-glossary-card data-term="Archive tar" data-full-name data-aliases="tarball" data-keywords="tar | sauvegarde" data-definition="Fichier qui regroupe une arborescence et ses métadonnées sans compression obligatoire ; gzip ou xz peut ensuite réduire sa taille." data-courses="linux debian" data-modules="l08 d12" data-letter="A" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="215" aria-labelledby="archive-tar-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="archive-tar-titre"><a href="#archive-tar" class="tssr-glossary-card__anchor" aria-label="Archive tar">Archive tar</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier qui regroupe une arborescence et ses métadonnées sans compression obligatoire ; gzip ou xz peut ensuite réduire sa taille.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> tarball</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="arp" data-glossary-card data-term="ARP" data-full-name="Address Resolution Protocol" data-aliases="résolution IP vers MAC" data-keywords="cache ARP | couche 2" data-definition="Protocole IPv4 qui retrouve l’adresse MAC correspondant à une adresse IP sur le réseau local avant l’envoi d’une trame." data-courses="reseaux" data-modules="r04 r05" data-letter="A" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="11" aria-labelledby="arp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="arp-titre"><a href="#arp" class="tssr-glossary-card__anchor" aria-label="ARP">ARP</a></h2>
    <p class="tssr-glossary-card__full-name">Address Resolution Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole IPv4 qui retrouve l’adresse MAC correspondant à une adresse IP sur le réseau local avant l’envoi d’une trame.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> résolution IP vers MAC</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="audit-mode" data-glossary-card data-term="Audit Mode" data-full-name data-aliases="mode audit" data-keywords="Sysprep | master" data-definition="Mode de démarrage Windows utilisé pour personnaliser et tester une image de référence avant de lancer Sysprep et l’expérience initiale." data-courses="windows" data-modules="w12" data-letter="A" data-course-sort="systemes clients microsoft" data-module-sort="017" data-source-order="80" aria-labelledby="audit-mode-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="audit-mode-titre"><a href="#audit-mode" class="tssr-glossary-card__anchor" aria-label="Audit Mode">Audit Mode</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mode de démarrage Windows utilisé pour personnaliser et tester une image de référence avant de lancer Sysprep et l’expérience initiale.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> mode audit</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image/" title="Systèmes clients Microsoft — Module 12 — Introduction à la capture et au déploiement d’image">Windows · M12 · Capture et déploiement</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="autodiscover" data-glossary-card data-term="Autodiscover" data-full-name data-aliases="découverte automatique" data-keywords="Outlook | Exchange" data-definition="Service Exchange qui fournit automatiquement à Outlook les paramètres de connexion d’une boîte aux lettres à partir de l’adresse de messagerie." data-courses="m365" data-modules="m04" data-letter="A" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="023" data-source-order="166" aria-labelledby="autodiscover-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="autodiscover-titre"><a href="#autodiscover" class="tssr-glossary-card__anchor" aria-label="Autodiscover">Autodiscover</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service Exchange qui fournit automatiquement à Outlook les paramètres de connexion d’une boîte aux lettres à partir de l’adresse de messagerie.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> découverte automatique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-04-exploiter-outlook-et-savoir-le-depanner/" title="Microsoft 365 — Outils collaboratifs — Module 04 — Exploiter Outlook et savoir le dépanner">Microsoft 365 · M04 · Outlook</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="base-de-donnees" data-glossary-card data-term="Base de données" data-full-name data-aliases data-keywords="table | SQL" data-definition="Ensemble organisé de données persistantes géré par un SGBD afin de permettre requêtes, contraintes, transactions, sauvegarde et restauration." data-courses="glpi" data-modules="g01 g05" data-letter="B" data-course-sort="administration glpi" data-module-sort="052" data-source-order="428" aria-labelledby="base-de-donnees-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="base-de-donnees-titre"><a href="#base-de-donnees" class="tssr-glossary-card__anchor" aria-label="Base de données">Base de données</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble organisé de données persistantes géré par un SGBD afin de permettre requêtes, contraintes, transactions, sauvegarde et restauration.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="base-de-reference" data-glossary-card data-term="Base de référence" data-full-name data-aliases="baseline" data-keywords="mesure | configuration" data-definition="État documenté et approuvé utilisé comme point de comparaison pour mesurer un changement, une performance ou une amélioration." data-courses="itil" data-modules="i04 i07" data-letter="B" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="356" aria-labelledby="base-de-reference-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="base-de-reference-titre"><a href="#base-de-reference" class="tssr-glossary-card__anchor" aria-label="Base de référence">Base de référence</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">État documenté et approuvé utilisé comme point de comparaison pour mesurer un changement, une performance ou une amélioration.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> baseline</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="bash" data-glossary-card data-term="Bash" data-full-name="Bourne Again Shell" data-aliases data-keywords="shell | script" data-definition="Shell courant sous GNU/Linux qui interprète les commandes et fournit variables, redirections, fonctions et langage de script." data-courses="linux msp" data-modules="l03 l08 s01" data-letter="B" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="216" aria-labelledby="bash-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="bash-titre"><a href="#bash" class="tssr-glossary-card__anchor" aria-label="Bash">Bash</a></h2>
    <p class="tssr-glossary-card__full-name">Bourne Again Shell</p>
  </header>
  <p class="tssr-glossary-card__definition">Shell courant sous GNU/Linux qui interprète les commandes et fournit variables, redirections, fonctions et langage de script.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="bibliotheque-de-documents-glpi" data-glossary-card data-term="Bibliothèque de documents GLPI" data-full-name data-aliases data-keywords="document | pièce jointe" data-definition="Fonction de gestion documentaire qui associe des fichiers et liens à des objets, tickets ou connaissances avec des droits d’accès." data-courses="glpi" data-modules="g03" data-letter="B" data-course-sort="administration glpi" data-module-sort="054" data-source-order="429" aria-labelledby="bibliotheque-de-documents-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="bibliotheque-de-documents-glpi-titre"><a href="#bibliotheque-de-documents-glpi" class="tssr-glossary-card__anchor" aria-label="Bibliothèque de documents GLPI">Bibliothèque de documents GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fonction de gestion documentaire qui associe des fichiers et liens à des objets, tickets ou connaissances avec des droits d’accès.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="bios" data-glossary-card data-term="BIOS" data-full-name="Basic Input/Output System" data-aliases data-keywords="firmware | démarrage" data-definition="Ancien micrologiciel qui initialise le matériel et lance le chargeur d’amorçage ; les machines récentes utilisent généralement UEFI." data-courses="windows debian" data-modules="w02 d02" data-letter="B" data-course-sort="systemes clients microsoft" data-module-sort="007" data-source-order="81" aria-labelledby="bios-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="bios-titre"><a href="#bios" class="tssr-glossary-card__anchor" aria-label="BIOS">BIOS</a></h2>
    <p class="tssr-glossary-card__full-name">Basic Input/Output System</p>
  </header>
  <p class="tssr-glossary-card__definition">Ancien micrologiciel qui initialise le matériel et lance le chargeur d’amorçage ; les machines récentes utilisent généralement UEFI.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-02-installation-du-systeme-d-exploitation-windows-10/" title="Systèmes clients Microsoft — Module 02 — Installation du système d’exploitation Windows 10">Windows · M02 · Installation Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 02 — Installation d’une distribution Debian">Debian · M02 · Installation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="bit" data-glossary-card data-term="Bit" data-full-name data-aliases="b" data-keywords="binaire | débit" data-definition="Plus petite unité d’information binaire, valant 0 ou 1. Les débits réseau sont couramment exprimés en bits par seconde." data-courses="reseaux" data-modules="r02" data-letter="B" data-course-sort="bases des reseaux" data-module-sort="001" data-source-order="13" aria-labelledby="bit-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="bit-titre"><a href="#bit" class="tssr-glossary-card__anchor" aria-label="Bit">Bit</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Plus petite unité d’information binaire, valant 0 ou 1. Les débits réseau sont couramment exprimés en bits par seconde.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> b</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-02-les-unites-informatiques/" title="Bases des réseaux — Module 02 — Les unités informatiques">Réseaux · M02 · Unités informatiques</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="blkid" data-glossary-card data-term="blkid" data-full-name data-aliases data-keywords="UUID | partition" data-definition="Commande qui identifie les périphériques blocs et affiche notamment UUID, type de système de fichiers et étiquette." data-courses="debian" data-modules="d07 d09" data-letter="B" data-course-sort="administration debian gnu/linux" data-module-sort="037" data-source-order="287" aria-labelledby="blkid-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="blkid-titre"><a href="#blkid" class="tssr-glossary-card__anchor" aria-label="blkid">blkid</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui identifie les périphériques blocs et affiche notamment UUID, type de système de fichiers et étiquette.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage/" title="Administration Debian GNU/Linux — Module 07 — Gestion des espaces de stockage">Debian · M07 · Stockage</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="boite-aux-lettres" data-glossary-card data-term="Boîte aux lettres" data-full-name data-aliases="mailbox" data-keywords="Outlook | Exchange Online" data-definition="Espace de messagerie associé à un utilisateur ou une ressource, contenant courriels, calendrier, contacts et paramètres côté serveur." data-courses="m365" data-modules="m04" data-letter="B" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="023" data-source-order="167" aria-labelledby="boite-aux-lettres-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="boite-aux-lettres-titre"><a href="#boite-aux-lettres" class="tssr-glossary-card__anchor" aria-label="Boîte aux lettres">Boîte aux lettres</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Espace de messagerie associé à un utilisateur ou une ressource, contenant courriels, calendrier, contacts et paramètres côté serveur.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> mailbox</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-04-exploiter-outlook-et-savoir-le-depanner/" title="Microsoft 365 — Outils collaboratifs — Module 04 — Exploiter Outlook et savoir le dépanner">Microsoft 365 · M04 · Outlook</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="broadcast" data-glossary-card data-term="Broadcast" data-full-name data-aliases="diffusion" data-keywords="FF:FF:FF:FF:FF:FF" data-definition="Transmission d’une trame ou d’un paquet vers tous les hôtes d’un même domaine de diffusion, contrairement à l’unicast et au multicast." data-courses="reseaux" data-modules="r04" data-letter="B" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="14" aria-labelledby="broadcast-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="broadcast-titre"><a href="#broadcast" class="tssr-glossary-card__anchor" aria-label="Broadcast">Broadcast</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Transmission d’une trame ou d’un paquet vers tous les hôtes d’un même domaine de diffusion, contrairement à l’unicast et au multicast.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> diffusion</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="bureau-a-distance" data-glossary-card data-term="Bureau à distance" data-full-name data-aliases="Remote Desktop | RDP" data-keywords="session distante" data-definition="Fonction Windows qui permet d’ouvrir une session graphique sur une machine distante au moyen du protocole RDP." data-courses="windows" data-modules="w08" data-letter="B" data-course-sort="systemes clients microsoft" data-module-sort="013" data-source-order="82" aria-labelledby="bureau-a-distance-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="bureau-a-distance-titre"><a href="#bureau-a-distance" class="tssr-glossary-card__anchor" aria-label="Bureau à distance">Bureau à distance</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fonction Windows qui permet d’ouvrir une session graphique sur une machine distante au moyen du protocole RDP.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Remote Desktop · RDP</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources/" title="Systèmes clients Microsoft — Module 08 — Le partage de ressources">Windows · M08 · Partage de ressources</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cab" data-glossary-card data-term="CAB" data-full-name="Change Advisory Board" data-aliases="comité consultatif des changements" data-keywords="RFC | changement" data-definition="Comité consultatif qui évalue risques, impacts, ressources et calendrier des changements normaux avant leur autorisation." data-courses="itil" data-modules="i04" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="357" aria-labelledby="cab-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cab-titre"><a href="#cab" class="tssr-glossary-card__anchor" aria-label="CAB">CAB</a></h2>
    <p class="tssr-glossary-card__full-name">Change Advisory Board</p>
  </header>
  <p class="tssr-glossary-card__definition">Comité consultatif qui évalue risques, impacts, ressources et calendrier des changements normaux avant leur autorisation.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> comité consultatif des changements</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cache-arp" data-glossary-card data-term="Cache ARP" data-full-name data-aliases data-keywords="arp -a | voisinage" data-definition="Table locale temporaire qui mémorise les correspondances entre adresses IPv4 et adresses MAC afin d’éviter une nouvelle requête ARP à chaque envoi." data-courses="reseaux" data-modules="r04 r05" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="12" aria-labelledby="cache-arp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cache-arp-titre"><a href="#cache-arp" class="tssr-glossary-card__anchor" aria-label="Cache ARP">Cache ARP</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Table locale temporaire qui mémorise les correspondances entre adresses IPv4 et adresses MAC afin d’éviter une nouvelle requête ARP à chaque envoi.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="canal-teams" data-glossary-card data-term="Canal Teams" data-full-name data-aliases="channel" data-keywords="équipe | SharePoint" data-definition="Espace thématique d’une équipe Teams qui organise conversations, réunions, onglets et fichiers autour d’un sujet ou d’un projet." data-courses="m365" data-modules="m05" data-letter="C" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="168" aria-labelledby="canal-teams-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="canal-teams-titre"><a href="#canal-teams" class="tssr-glossary-card__anchor" aria-label="Canal Teams">Canal Teams</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Espace thématique d’une équipe Teams qui organise conversations, réunions, onglets et fichiers autour d’un sujet ou d’un projet.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> channel</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="carte-reseau-virtuelle" data-glossary-card data-term="Carte réseau virtuelle" data-full-name data-aliases="vNIC" data-keywords="machine virtuelle" data-definition="Adaptateur réseau présenté à une machine virtuelle et relié par l’hyperviseur à un réseau NAT, ponté ou privé." data-courses="windows msp" data-modules="wadd s01" data-letter="C" data-course-sort="systemes clients microsoft" data-module-sort="019" data-source-order="83" aria-labelledby="carte-reseau-virtuelle-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="carte-reseau-virtuelle-titre"><a href="#carte-reseau-virtuelle" class="tssr-glossary-card__anchor" aria-label="Carte réseau virtuelle">Carte réseau virtuelle</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Adaptateur réseau présenté à une machine virtuelle et relié par l’hyperviseur à un réseau NAT, ponté ou privé.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> vNIC</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cat" data-glossary-card data-term="cat" data-full-name data-aliases data-keywords="afficher fichier | stdout" data-definition="Commande qui concatène des fichiers vers la sortie standard ; adaptée aux contenus courts et aux pipelines plutôt qu’à la lecture paginée." data-courses="linux" data-modules="l05" data-letter="C" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="217" aria-labelledby="cat-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cat-titre"><a href="#cat" class="tssr-glossary-card__anchor" aria-label="cat">cat</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui concatène des fichiers vers la sortie standard ; adaptée aux contenus courts et aux pipelines plutôt qu’à la lecture paginée.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="catalogue-de-services" data-glossary-card data-term="Catalogue de services" data-full-name data-aliases data-keywords="portefeuille | offre de service" data-definition="Vue des services actifs ou disponibles au déploiement, présentée avec les informations utiles aux clients et au support." data-courses="itil" data-modules="i03" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="358" aria-labelledby="catalogue-de-services-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="catalogue-de-services-titre"><a href="#catalogue-de-services" class="tssr-glossary-card__anchor" aria-label="Catalogue de services">Catalogue de services</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Vue des services actifs ou disponibles au déploiement, présentée avec les informations utiles aux clients et au support.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="categorie-de-ticket" data-glossary-card data-term="Catégorie de ticket" data-full-name data-aliases="catégorie ITIL" data-keywords="qualification | ticket" data-definition="Classification hiérarchique d’un incident ou d’une demande, utilisée pour le routage, les statistiques, les gabarits et les règles métier." data-courses="glpi itil" data-modules="g04 i09" data-letter="C" data-course-sort="administration glpi" data-module-sort="051" data-source-order="430" aria-labelledby="categorie-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="categorie-de-ticket-titre"><a href="#categorie-de-ticket" class="tssr-glossary-card__anchor" aria-label="Catégorie de ticket">Catégorie de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Classification hiérarchique d’un incident ou d’une demande, utilisée pour le routage, les statistiques, les gabarits et les règles métier.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> catégorie ITIL</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cd" data-glossary-card data-term="cd" data-full-name="Change Directory" data-aliases data-keywords="navigation | répertoire" data-definition="Commande interne du shell qui change le répertoire courant en utilisant un chemin absolu, relatif ou un raccourci comme ~." data-courses="linux" data-modules="l03 l04" data-letter="C" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="218" aria-labelledby="cd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cd-titre"><a href="#cd" class="tssr-glossary-card__anchor" aria-label="cd">cd</a></h2>
    <p class="tssr-glossary-card__full-name">Change Directory</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande interne du shell qui change le répertoire courant en utilisant un chemin absolu, relatif ou un raccourci comme ~.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cellule-excel" data-glossary-card data-term="Cellule Excel" data-full-name data-aliases data-keywords="Excel | référence" data-definition="Intersection d’une ligne et d’une colonne dans une feuille de calcul, identifiée par une référence comme B4 et contenant une valeur ou une formule." data-courses="m365" data-modules="m03" data-letter="C" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="169" aria-labelledby="cellule-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cellule-excel-titre"><a href="#cellule-excel" class="tssr-glossary-card__anchor" aria-label="Cellule Excel">Cellule Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Intersection d’une ligne et d’une colonne dans une feuille de calcul, identifiée par une référence comme B4 et contenant une valeur ou une formule.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="centre-de-services" data-glossary-card data-term="Centre de services" data-full-name data-aliases="Service Desk" data-keywords="support | SPOC" data-definition="Point de contact entre utilisateurs et fournisseur, chargé d’enregistrer, communiquer, coordonner et restaurer le service." data-courses="itil" data-modules="i06 i09" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="359" aria-labelledby="centre-de-services-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="centre-de-services-titre"><a href="#centre-de-services" class="tssr-glossary-card__anchor" aria-label="Centre de services">Centre de services</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Point de contact entre utilisateurs et fournisseur, chargé d’enregistrer, communiquer, coordonner et restaurer le service.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Service Desk</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="changement" data-glossary-card data-term="Changement" data-full-name data-aliases data-keywords="RFC | transition" data-definition="Ajout, modification ou suppression susceptible d’affecter un service ou un élément de configuration et devant être évalué puis tracé." data-courses="itil" data-modules="i04" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="360" aria-labelledby="changement-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="changement-titre"><a href="#changement" class="tssr-glossary-card__anchor" aria-label="Changement">Changement</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ajout, modification ou suppression susceptible d’affecter un service ou un élément de configuration et devant être évalué puis tracé.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="changement-d-urgence" data-glossary-card data-term="Changement d’urgence" data-full-name data-aliases="emergency change" data-keywords="ECAB" data-definition="Changement exceptionnel à mettre en œuvre rapidement pour traiter un risque majeur, avec une autorisation accélérée mais toujours contrôlée." data-courses="itil" data-modules="i04" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="361" aria-labelledby="changement-d-urgence-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="changement-d-urgence-titre"><a href="#changement-d-urgence" class="tssr-glossary-card__anchor" aria-label="Changement d’urgence">Changement d’urgence</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Changement exceptionnel à mettre en œuvre rapidement pour traiter un risque majeur, avec une autorisation accélérée mais toujours contrôlée.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> emergency change</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="changement-normal" data-glossary-card data-term="Changement normal" data-full-name data-aliases="normal change" data-keywords="CAB | RFC" data-definition="Changement qui suit le processus complet d’enregistrement, évaluation, autorisation, planification, test, mise en œuvre et revue." data-courses="itil" data-modules="i04" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="362" aria-labelledby="changement-normal-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="changement-normal-titre"><a href="#changement-normal" class="tssr-glossary-card__anchor" aria-label="Changement normal">Changement normal</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Changement qui suit le processus complet d’enregistrement, évaluation, autorisation, planification, test, mise en œuvre et revue.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> normal change</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="changement-standard" data-glossary-card data-term="Changement standard" data-full-name data-aliases="standard change" data-keywords="préautorisé" data-definition="Changement courant, documenté, à faible risque et préautorisé, exécuté selon une procédure éprouvée et des conditions définies." data-courses="itil" data-modules="i04" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="363" aria-labelledby="changement-standard-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="changement-standard-titre"><a href="#changement-standard" class="tssr-glossary-card__anchor" aria-label="Changement standard">Changement standard</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Changement courant, documenté, à faible risque et préautorisé, exécuté selon une procédure éprouvée et des conditions définies.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> standard change</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="chargeur-d-amorcage" data-glossary-card data-term="Chargeur d’amorçage" data-full-name data-aliases="bootloader" data-keywords="démarrage | GRUB" data-definition="Programme lancé par le firmware pour charger le noyau et son environnement initial ; GRUB remplit couramment ce rôle sous Debian." data-courses="debian" data-modules="d03" data-letter="C" data-course-sort="administration debian gnu/linux" data-module-sort="033" data-source-order="288" aria-labelledby="chargeur-d-amorcage-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="chargeur-d-amorcage-titre"><a href="#chargeur-d-amorcage" class="tssr-glossary-card__anchor" aria-label="Chargeur d’amorçage">Chargeur d’amorçage</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Programme lancé par le firmware pour charger le noyau et son environnement initial ; GRUB remplit couramment ce rôle sous Debian.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> bootloader</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 03 — Démarrage d’une distribution Debian">Debian · M03 · Démarrage Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="chemin-absolu" data-glossary-card data-term="Chemin absolu" data-full-name data-aliases data-keywords="Linux | racine" data-definition="Chemin qui commence à la racine et identifie une cible indépendamment du répertoire courant, par exemple /etc/hosts." data-courses="linux" data-modules="l04" data-letter="C" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="219" aria-labelledby="chemin-absolu-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="chemin-absolu-titre"><a href="#chemin-absolu" class="tssr-glossary-card__anchor" aria-label="Chemin absolu">Chemin absolu</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Chemin qui commence à la racine et identifie une cible indépendamment du répertoire courant, par exemple /etc/hosts.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="chemin-relatif" data-glossary-card data-term="Chemin relatif" data-full-name data-aliases data-keywords="Linux | répertoire courant" data-definition="Chemin interprété depuis le répertoire courant, par exemple documents/rapport.txt ou ../archives, sans commencer par /." data-courses="linux" data-modules="l04" data-letter="C" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="220" aria-labelledby="chemin-relatif-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="chemin-relatif-titre"><a href="#chemin-relatif" class="tssr-glossary-card__anchor" aria-label="Chemin relatif">Chemin relatif</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Chemin interprété depuis le répertoire courant, par exemple documents/rapport.txt ou ../archives, sans commencer par /.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="chgrp" data-glossary-card data-term="chgrp" data-full-name="Change Group" data-aliases data-keywords="groupe propriétaire | permissions" data-definition="Commande qui modifie le groupe propriétaire d’un fichier ou répertoire lorsque l’identité et les droits l’autorisent." data-courses="debian" data-modules="d11" data-letter="C" data-course-sort="administration debian gnu/linux" data-module-sort="041" data-source-order="291" aria-labelledby="chgrp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="chgrp-titre"><a href="#chgrp" class="tssr-glossary-card__anchor" aria-label="chgrp">chgrp</a></h2>
    <p class="tssr-glossary-card__full-name">Change Group</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui modifie le groupe propriétaire d’un fichier ou répertoire lorsque l’identité et les droits l’autorisent.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires/" title="Administration Debian GNU/Linux — Module 11 — Droits sur les fichiers et répertoires">Debian · M11 · Droits Linux</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="chmod" data-glossary-card data-term="chmod" data-full-name="Change Mode" data-aliases data-keywords="droits | permissions" data-definition="Commande qui modifie les permissions rwx d’un fichier ou répertoire avec une notation symbolique ou octale." data-courses="debian msp" data-modules="d11 s01" data-letter="C" data-course-sort="administration debian gnu/linux" data-module-sort="041" data-source-order="289" aria-labelledby="chmod-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="chmod-titre"><a href="#chmod" class="tssr-glossary-card__anchor" aria-label="chmod">chmod</a></h2>
    <p class="tssr-glossary-card__full-name">Change Mode</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui modifie les permissions rwx d’un fichier ou répertoire avec une notation symbolique ou octale.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires/" title="Administration Debian GNU/Linux — Module 11 — Droits sur les fichiers et répertoires">Debian · M11 · Droits Linux</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="chown" data-glossary-card data-term="chown" data-full-name="Change Owner" data-aliases data-keywords="propriétaire | groupe" data-definition="Commande qui change le propriétaire et éventuellement le groupe propriétaire d’un fichier ou d’une arborescence." data-courses="debian" data-modules="d11" data-letter="C" data-course-sort="administration debian gnu/linux" data-module-sort="041" data-source-order="290" aria-labelledby="chown-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="chown-titre"><a href="#chown" class="tssr-glossary-card__anchor" aria-label="chown">chown</a></h2>
    <p class="tssr-glossary-card__full-name">Change Owner</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui change le propriétaire et éventuellement le groupe propriétaire d’un fichier ou d’une arborescence.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires/" title="Administration Debian GNU/Linux — Module 11 — Droits sur les fichiers et répertoires">Debian · M11 · Droits Linux</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ci" data-glossary-card data-term="CI" data-full-name="Configuration Item" data-aliases="élément de configuration" data-keywords="CMDB | configuration" data-definition="Composant à gérer pour fournir un service, par exemple matériel, logiciel, document, personne ou service, avec attributs et relations." data-courses="itil glpi" data-modules="i04 g03" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="364" aria-labelledby="ci-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ci-titre"><a href="#ci" class="tssr-glossary-card__anchor" aria-label="CI">CI</a></h2>
    <p class="tssr-glossary-card__full-name">Configuration Item</p>
  </header>
  <p class="tssr-glossary-card__definition">Composant à gérer pour fournir un service, par exemple matériel, logiciel, document, personne ou service, avec attributs et relations.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> élément de configuration</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cidr" data-glossary-card data-term="CIDR" data-full-name="Classless Inter-Domain Routing" data-aliases="notation préfixée" data-keywords="masque | sous-réseau" data-definition="Notation sans classes qui indique le nombre de bits du préfixe réseau, par exemple /24, et permet un découpage d’adresses flexible." data-courses="reseaux msp" data-modules="r03 s01" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="15" aria-labelledby="cidr-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cidr-titre"><a href="#cidr" class="tssr-glossary-card__anchor" aria-label="CIDR">CIDR</a></h2>
    <p class="tssr-glossary-card__full-name">Classless Inter-Domain Routing</p>
  </header>
  <p class="tssr-glossary-card__definition">Notation sans classes qui indique le nombre de bits du préfixe réseau, par exemple /24, et permet un découpage d’adresses flexible.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> notation préfixée</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="classeur-excel" data-glossary-card data-term="Classeur Excel" data-full-name data-aliases="workbook" data-keywords="feuille | xlsx" data-definition="Fichier Excel contenant une ou plusieurs feuilles de calcul, ainsi que leurs données, formules, tableaux, graphiques et paramètres." data-courses="m365" data-modules="m03" data-letter="C" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="170" aria-labelledby="classeur-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="classeur-excel-titre"><a href="#classeur-excel" class="tssr-glossary-card__anchor" aria-label="Classeur Excel">Classeur Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier Excel contenant une ou plusieurs feuilles de calcul, ainsi que leurs données, formules, tableaux, graphiques et paramètres.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> workbook</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cle-etrangere" data-glossary-card data-term="Clé étrangère" data-full-name="Foreign Key" data-aliases data-keywords="relation | index" data-definition="Contrainte relationnelle dont la valeur référence une clé d’une autre table afin de préserver la cohérence entre les lignes." data-courses="glpi" data-modules="g05" data-letter="C" data-course-sort="administration glpi" data-module-sort="056" data-source-order="431" aria-labelledby="cle-etrangere-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cle-etrangere-titre"><a href="#cle-etrangere" class="tssr-glossary-card__anchor" aria-label="Clé étrangère">Clé étrangère</a></h2>
    <p class="tssr-glossary-card__full-name">Foreign Key</p>
  </header>
  <p class="tssr-glossary-card__definition">Contrainte relationnelle dont la valeur référence une clé d’une autre table afin de préserver la cohérence entre les lignes.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cle-primaire" data-glossary-card data-term="Clé primaire" data-full-name="Primary Key" data-aliases data-keywords="identifiant | unicité" data-definition="Colonne ou ensemble de colonnes qui identifie chaque ligne d’une table de façon unique et ne contient pas de valeur NULL." data-courses="glpi" data-modules="g05" data-letter="C" data-course-sort="administration glpi" data-module-sort="056" data-source-order="432" aria-labelledby="cle-primaire-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cle-primaire-titre"><a href="#cle-primaire" class="tssr-glossary-card__anchor" aria-label="Clé primaire">Clé primaire</a></h2>
    <p class="tssr-glossary-card__full-name">Primary Key</p>
  </header>
  <p class="tssr-glossary-card__definition">Colonne ou ensemble de colonnes qui identifie chaque ligne d’une table de façon unique et ne contient pas de valeur NULL.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cli" data-glossary-card data-term="CLI" data-full-name="Command-Line Interface" data-aliases="interface en ligne de commande" data-keywords="terminal | console" data-definition="Interface où l’utilisateur saisit des commandes textuelles, comme cmd.exe, PowerShell ou Bash, au lieu d’utiliser des fenêtres." data-courses="windows linux" data-modules="w03 l03" data-letter="C" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="84" aria-labelledby="cli-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cli-titre"><a href="#cli" class="tssr-glossary-card__anchor" aria-label="CLI">CLI</a></h2>
    <p class="tssr-glossary-card__full-name">Command-Line Interface</p>
  </header>
  <p class="tssr-glossary-card__definition">Interface où l’utilisateur saisit des commandes textuelles, comme cmd.exe, PowerShell ou Bash, au lieu d’utiliser des fenêtres.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> interface en ligne de commande</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="client-itil" data-glossary-card data-term="Client ITIL" data-full-name data-aliases="customer" data-keywords="SLA | service" data-definition="Personne ou organisation qui définit les besoins, commande le service et peut négocier ou accepter les niveaux de service." data-courses="itil" data-modules="i02" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="365" aria-labelledby="client-itil-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="client-itil-titre"><a href="#client-itil" class="tssr-glossary-card__anchor" aria-label="Client ITIL">Client ITIL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Personne ou organisation qui définit les besoins, commande le service et peut négocier ou accepter les niveaux de service.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> customer</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="clone-de-machine-virtuelle" data-glossary-card data-term="Clone de machine virtuelle" data-full-name data-aliases="clone de VM" data-keywords="virtualisation" data-definition="Copie d’une machine virtuelle servant à créer rapidement un environnement similaire ; son identité réseau et système doit rester unique." data-courses="windows msp" data-modules="wadd s01" data-letter="C" data-course-sort="systemes clients microsoft" data-module-sort="019" data-source-order="85" aria-labelledby="clone-de-machine-virtuelle-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="clone-de-machine-virtuelle-titre"><a href="#clone-de-machine-virtuelle" class="tssr-glossary-card__anchor" aria-label="Clone de machine virtuelle">Clone de machine virtuelle</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Copie d’une machine virtuelle servant à créer rapidement un environnement similaire ; son identité réseau et système doit rester unique.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> clone de VM</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cloture-de-ticket" data-glossary-card data-term="Clôture de ticket" data-full-name data-aliases data-keywords="ticket | résolution" data-definition="Étape finale après résolution et validation, où la solution, la catégorie, le temps et les informations utiles sont consignés." data-courses="itil glpi" data-modules="i09 g04" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="051" data-source-order="366" aria-labelledby="cloture-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cloture-de-ticket-titre"><a href="#cloture-de-ticket" class="tssr-glossary-card__anchor" aria-label="Clôture de ticket">Clôture de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Étape finale après résolution et validation, où la solution, la catégorie, le temps et les informations utiles sont consignés.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cloud-computing" data-glossary-card data-term="Cloud computing" data-full-name data-aliases="informatique en nuage" data-keywords="service en ligne" data-definition="Mise à disposition à la demande de ressources informatiques hébergées par un fournisseur et accessibles par réseau avec une capacité adaptable." data-courses="m365" data-modules="m01" data-letter="C" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="020" data-source-order="171" aria-labelledby="cloud-computing-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cloud-computing-titre"><a href="#cloud-computing" class="tssr-glossary-card__anchor" aria-label="Cloud computing">Cloud computing</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mise à disposition à la demande de ressources informatiques hébergées par un fournisseur et accessibles par réseau avec une capacité adaptable.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> informatique en nuage</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-01-decouverte-de-microsoft-365/" title="Microsoft 365 — Outils collaboratifs — Module 01 — Découverte de Microsoft 365">Microsoft 365 · M01 · Microsoft 365</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cmd-exe" data-glossary-card data-term="cmd.exe" data-full-name data-aliases="Invite de commandes | CMD" data-keywords="batch | CLI" data-definition="Interpréteur de commandes historique de Windows, utilisé pour les commandes internes, les outils système et les scripts batch." data-courses="windows msp" data-modules="w03 s01" data-letter="C" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="86" aria-labelledby="cmd-exe-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cmd-exe-titre"><a href="#cmd-exe" class="tssr-glossary-card__anchor" aria-label="cmd.exe">cmd.exe</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Interpréteur de commandes historique de Windows, utilisé pour les commandes internes, les outils système et les scripts batch.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Invite de commandes · CMD</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cmdb" data-glossary-card data-term="CMDB" data-full-name="Configuration Management Database" data-aliases="base de gestion des configurations" data-keywords="CI | CMS" data-definition="Base qui enregistre les éléments de configuration, leurs attributs et relations afin d’aider l’analyse d’impact et le support." data-courses="itil glpi" data-modules="i04 g03" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="367" aria-labelledby="cmdb-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cmdb-titre"><a href="#cmdb" class="tssr-glossary-card__anchor" aria-label="CMDB">CMDB</a></h2>
    <p class="tssr-glossary-card__full-name">Configuration Management Database</p>
  </header>
  <p class="tssr-glossary-card__definition">Base qui enregistre les éléments de configuration, leurs attributs et relations afin d’aider l’analyse d’impact et le support.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> base de gestion des configurations</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cmdlet" data-glossary-card data-term="Cmdlet" data-full-name data-aliases="commande PowerShell" data-keywords="Get-Process | Verbe-Nom" data-definition="Commande PowerShell nommée selon le couple Verbe-Nom, qui reçoit et produit généralement des objets plutôt que du texte brut." data-courses="windows" data-modules="w03 w11" data-letter="C" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="87" aria-labelledby="cmdlet-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cmdlet-titre"><a href="#cmdlet" class="tssr-glossary-card__anchor" aria-label="Cmdlet">Cmdlet</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande PowerShell nommée selon le couple Verbe-Nom, qui reçoit et produit généralement des objets plutôt que du texte brut.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> commande PowerShell</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cms" data-glossary-card data-term="CMS" data-full-name="Configuration Management System" data-aliases="système de gestion des configurations" data-keywords="CMDB | CI" data-definition="Ensemble d’outils, données et pratiques qui gère les informations de configuration ; une ou plusieurs CMDB peuvent en faire partie." data-courses="itil" data-modules="i04" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="368" aria-labelledby="cms-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cms-titre"><a href="#cms" class="tssr-glossary-card__anchor" aria-label="CMS">CMS</a></h2>
    <p class="tssr-glossary-card__full-name">Configuration Management System</p>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble d’outils, données et pratiques qui gère les informations de configuration ; une ou plusieurs CMDB peuvent en faire partie.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> système de gestion des configurations</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="coedition" data-glossary-card data-term="Coédition" data-full-name data-aliases="coauthoring | co-création" data-keywords="collaboration | Microsoft 365" data-definition="Modification simultanée d’un même document par plusieurs personnes, avec synchronisation des changements et présence visible des collaborateurs." data-courses="m365" data-modules="m05" data-letter="C" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="172" aria-labelledby="coedition-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="coedition-titre"><a href="#coedition" class="tssr-glossary-card__anchor" aria-label="Coédition">Coédition</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Modification simultanée d’un même document par plusieurs personnes, avec synchronisation des changements et présence visible des collaborateurs.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> coauthoring · co-création</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="collecteur-de-courriels-glpi" data-glossary-card data-term="Collecteur de courriels GLPI" data-full-name data-aliases="mail receiver" data-keywords="ticket par e-mail" data-definition="Configuration qui relève une boîte de messagerie afin de transformer les messages reçus en tickets selon des règles définies." data-courses="glpi" data-modules="g04" data-letter="C" data-course-sort="administration glpi" data-module-sort="055" data-source-order="433" aria-labelledby="collecteur-de-courriels-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="collecteur-de-courriels-glpi-titre"><a href="#collecteur-de-courriels-glpi" class="tssr-glossary-card__anchor" aria-label="Collecteur de courriels GLPI">Collecteur de courriels GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Configuration qui relève une boîte de messagerie afin de transformer les messages reçus en tickets selon des règles définies.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> mail receiver</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="colonne-sql" data-glossary-card data-term="Colonne SQL" data-full-name data-aliases="champ | attribut" data-keywords="table | type" data-definition="Attribut nommé d’une table possédant un type de données et éventuellement des contraintes ; chaque ligne porte une valeur pour cette colonne." data-courses="glpi" data-modules="g05" data-letter="C" data-course-sort="administration glpi" data-module-sort="056" data-source-order="434" aria-labelledby="colonne-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="colonne-sql-titre"><a href="#colonne-sql" class="tssr-glossary-card__anchor" aria-label="Colonne SQL">Colonne SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Attribut nommé d’une table possédant un type de données et éventuellement des contraintes ; chaque ligne porte une valeur pour cette colonne.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> champ · attribut</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="commutateur" data-glossary-card data-term="Commutateur" data-full-name data-aliases="switch" data-keywords="Ethernet | table MAC" data-definition="Équipement de couche 2 qui apprend les adresses MAC et transmet les trames vers le port approprié au sein d’un réseau local." data-courses="reseaux" data-modules="r01 r04" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="16" aria-labelledby="commutateur-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="commutateur-titre"><a href="#commutateur" class="tssr-glossary-card__anchor" aria-label="Commutateur">Commutateur</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Équipement de couche 2 qui apprend les adresses MAC et transmet les trames vers le port approprié au sein d’un réseau local.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> switch</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="compte-de-service-sql" data-glossary-card data-term="Compte de service SQL" data-full-name data-aliases data-keywords="moindre privilège | GLPI" data-definition="Utilisateur de base de données dédié à une application, auquel on accorde uniquement les privilèges nécessaires sur sa base." data-courses="glpi" data-modules="g01" data-letter="C" data-course-sort="administration glpi" data-module-sort="052" data-source-order="435" aria-labelledby="compte-de-service-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="compte-de-service-sql-titre"><a href="#compte-de-service-sql" class="tssr-glossary-card__anchor" aria-label="Compte de service SQL">Compte de service SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Utilisateur de base de données dédié à une application, auquel on accorde uniquement les privilèges nécessaires sur sa base.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="compte-local" data-glossary-card data-term="Compte local" data-full-name data-aliases data-keywords="utilisateur local | SAM" data-definition="Identité enregistrée sur un seul poste Windows et authentifiée par celui-ci, par opposition à un compte centralisé de domaine." data-courses="windows msp" data-modules="w05 s01" data-letter="C" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="88" aria-labelledby="compte-local-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="compte-local-titre"><a href="#compte-local" class="tssr-glossary-card__anchor" aria-label="Compte local">Compte local</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Identité enregistrée sur un seul poste Windows et authentifiée par celui-ci, par opposition à un compte centralisé de domaine.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="compte-standard" data-glossary-card data-term="Compte standard" data-full-name data-aliases data-keywords="moindre privilège" data-definition="Compte Windows destiné à l’usage quotidien, sans privilèges administratifs permanents et soumis à une demande d’élévation pour les opérations sensibles." data-courses="windows" data-modules="w05" data-letter="C" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="89" aria-labelledby="compte-standard-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="compte-standard-titre"><a href="#compte-standard" class="tssr-glossary-card__anchor" aria-label="Compte standard">Compte standard</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Compte Windows destiné à l’usage quotidien, sans privilèges administratifs permanents et soumis à une demande d’élévation pour les opérations sensibles.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="contrainte-sql" data-glossary-card data-term="Contrainte SQL" data-full-name data-aliases data-keywords="intégrité | table" data-definition="Règle imposée aux données d’une table, comme NOT NULL, UNIQUE, PRIMARY KEY ou FOREIGN KEY, pour maintenir leur intégrité." data-courses="glpi" data-modules="g05" data-letter="C" data-course-sort="administration glpi" data-module-sort="056" data-source-order="436" aria-labelledby="contrainte-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="contrainte-sql-titre"><a href="#contrainte-sql" class="tssr-glossary-card__anchor" aria-label="Contrainte SQL">Contrainte SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Règle imposée aux données d’une table, comme NOT NULL, UNIQUE, PRIMARY KEY ou FOREIGN KEY, pour maintenir leur intégrité.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="contrat-de-sous-traitance" data-glossary-card data-term="Contrat de sous-traitance" data-full-name data-aliases="UC | Underpinning Contract" data-keywords="SLA | fournisseur" data-definition="Accord avec un fournisseur externe qui contribue à la fourniture du service et soutient les engagements de niveau de service." data-courses="itil" data-modules="i03 i07" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="369" aria-labelledby="contrat-de-sous-traitance-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="contrat-de-sous-traitance-titre"><a href="#contrat-de-sous-traitance" class="tssr-glossary-card__anchor" aria-label="Contrat de sous-traitance">Contrat de sous-traitance</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Accord avec un fournisseur externe qui contribue à la fourniture du service et soutient les engagements de niveau de service.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> UC · Underpinning Contract</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="conversation-teams" data-glossary-card data-term="Conversation Teams" data-full-name data-aliases="publication de canal" data-keywords="fil de discussion" data-definition="Échange persistant publié dans un canal, visible par ses membres et distinct d’une discussion privée ou de groupe." data-courses="m365" data-modules="m05" data-letter="C" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="173" aria-labelledby="conversation-teams-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="conversation-teams-titre"><a href="#conversation-teams" class="tssr-glossary-card__anchor" aria-label="Conversation Teams">Conversation Teams</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Échange persistant publié dans un canal, visible par ses membres et distinct d’une discussion privée ou de groupe.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> publication de canal</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="couche-application" data-glossary-card data-term="Couche application" data-full-name data-aliases="couche 7 | L7" data-keywords="OSI" data-definition="Couche 7 du modèle OSI, au plus près des logiciels utilisateurs, où se situent des protocoles comme HTTP, DNS ou SMTP." data-courses="reseaux" data-modules="r01" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="17" aria-labelledby="couche-application-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="couche-application-titre"><a href="#couche-application" class="tssr-glossary-card__anchor" aria-label="Couche application">Couche application</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Couche 7 du modèle OSI, au plus près des logiciels utilisateurs, où se situent des protocoles comme HTTP, DNS ou SMTP.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> couche 7 · L7</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="couche-liaison-de-donnees" data-glossary-card data-term="Couche liaison de données" data-full-name data-aliases="couche 2 | L2" data-keywords="OSI | Ethernet | trame" data-definition="Couche 2 du modèle OSI qui organise les bits en trames, utilise les adresses MAC et détecte certaines erreurs locales." data-courses="reseaux" data-modules="r01" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="18" aria-labelledby="couche-liaison-de-donnees-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="couche-liaison-de-donnees-titre"><a href="#couche-liaison-de-donnees" class="tssr-glossary-card__anchor" aria-label="Couche liaison de données">Couche liaison de données</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Couche 2 du modèle OSI qui organise les bits en trames, utilise les adresses MAC et détecte certaines erreurs locales.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> couche 2 · L2</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="couche-physique" data-glossary-card data-term="Couche physique" data-full-name data-aliases="couche 1 | L1" data-keywords="OSI | signal" data-definition="Couche 1 du modèle OSI qui transporte les bits sous forme de signaux sur un support cuivre, fibre ou radio." data-courses="reseaux" data-modules="r01" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="19" aria-labelledby="couche-physique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="couche-physique-titre"><a href="#couche-physique" class="tssr-glossary-card__anchor" aria-label="Couche physique">Couche physique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Couche 1 du modèle OSI qui transporte les bits sous forme de signaux sur un support cuivre, fibre ou radio.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> couche 1 · L1</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="couche-presentation" data-glossary-card data-term="Couche présentation" data-full-name data-aliases="couche 6 | L6" data-keywords="OSI | format" data-definition="Couche 6 du modèle OSI chargée de représenter, convertir, compresser ou chiffrer les données pour les rendre exploitables par l’application." data-courses="reseaux" data-modules="r01" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="20" aria-labelledby="couche-presentation-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="couche-presentation-titre"><a href="#couche-presentation" class="tssr-glossary-card__anchor" aria-label="Couche présentation">Couche présentation</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Couche 6 du modèle OSI chargée de représenter, convertir, compresser ou chiffrer les données pour les rendre exploitables par l’application.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> couche 6 · L6</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="couche-reseau" data-glossary-card data-term="Couche réseau" data-full-name data-aliases="couche 3 | L3" data-keywords="OSI | IP | routage" data-definition="Couche 3 du modèle OSI qui adresse les paquets IP et choisit leur acheminement entre réseaux à l’aide des routeurs." data-courses="reseaux" data-modules="r01 r04" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="21" aria-labelledby="couche-reseau-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="couche-reseau-titre"><a href="#couche-reseau" class="tssr-glossary-card__anchor" aria-label="Couche réseau">Couche réseau</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Couche 3 du modèle OSI qui adresse les paquets IP et choisit leur acheminement entre réseaux à l’aide des routeurs.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> couche 3 · L3</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="couche-session" data-glossary-card data-term="Couche session" data-full-name data-aliases="couche 5 | L5" data-keywords="OSI" data-definition="Couche 5 du modèle OSI qui organise l’ouverture, le maintien et la fermeture des échanges logiques entre applications." data-courses="reseaux" data-modules="r01" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="22" aria-labelledby="couche-session-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="couche-session-titre"><a href="#couche-session" class="tssr-glossary-card__anchor" aria-label="Couche session">Couche session</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Couche 5 du modèle OSI qui organise l’ouverture, le maintien et la fermeture des échanges logiques entre applications.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> couche 5 · L5</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="couche-transport" data-glossary-card data-term="Couche transport" data-full-name data-aliases="couche 4 | L4" data-keywords="OSI | TCP | UDP" data-definition="Couche 4 du modèle OSI qui assure le transport de bout en bout, la segmentation et l’identification des applications par les ports." data-courses="reseaux" data-modules="r01" data-letter="C" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="23" aria-labelledby="couche-transport-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="couche-transport-titre"><a href="#couche-transport" class="tssr-glossary-card__anchor" aria-label="Couche transport">Couche transport</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Couche 4 du modèle OSI qui assure le transport de bout en bout, la segmentation et l’identification des applications par les ports.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> couche 4 · L4</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="courrier-electronique" data-glossary-card data-term="Courrier électronique" data-full-name data-aliases="e-mail | mail | courriel" data-keywords="SMTP | Outlook" data-definition="Message numérique transmis entre boîtes aux lettres par des serveurs de messagerie et consulté avec un client comme Outlook." data-courses="m365" data-modules="m04" data-letter="C" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="023" data-source-order="174" aria-labelledby="courrier-electronique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="courrier-electronique-titre"><a href="#courrier-electronique" class="tssr-glossary-card__anchor" aria-label="Courrier électronique">Courrier électronique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Message numérique transmis entre boîtes aux lettres par des serveurs de messagerie et consulté avec un client comme Outlook.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> e-mail · mail · courriel</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-04-exploiter-outlook-et-savoir-le-depanner/" title="Microsoft 365 — Outils collaboratifs — Module 04 — Exploiter Outlook et savoir le dépanner">Microsoft 365 · M04 · Outlook</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cp" data-glossary-card data-term="cp" data-full-name data-aliases data-keywords="copie | fichier" data-definition="Commande qui copie fichiers et répertoires ; les options de récursion, préservation et cible doivent être choisies selon le résultat attendu." data-courses="linux" data-modules="l04" data-letter="C" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="221" aria-labelledby="cp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cp-titre"><a href="#cp" class="tssr-glossary-card__anchor" aria-label="cp">cp</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui copie fichiers et répertoires ; les options de récursion, préservation et cible doivent être choisies selon le résultat attendu.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="cron" data-glossary-card data-term="cron" data-full-name data-aliases data-keywords="tâche planifiée | crontab" data-definition="Service de planification traditionnel qui exécute des commandes à des dates récurrentes décrites dans des crontabs." data-courses="debian" data-modules="d12" data-letter="C" data-course-sort="administration debian gnu/linux" data-module-sort="042" data-source-order="292" aria-labelledby="cron-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="cron-titre"><a href="#cron" class="tssr-glossary-card__anchor" aria-label="cron">cron</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service de planification traditionnel qui exécute des commandes à des dates récurrentes décrites dans des crontabs.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="crontab" data-glossary-card data-term="crontab" data-full-name data-aliases data-keywords="cron | planification" data-definition="Table de planification cron d’un utilisateur ou du système, composée de champs temporels suivis de la commande à exécuter." data-courses="debian" data-modules="d12" data-letter="C" data-course-sort="administration debian gnu/linux" data-module-sort="042" data-source-order="293" aria-labelledby="crontab-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="crontab-titre"><a href="#crontab" class="tssr-glossary-card__anchor" aria-label="crontab">crontab</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Table de planification cron d’un utilisateur ou du système, composée de champs temporels suivis de la commande à exécuter.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="csf" data-glossary-card data-term="CSF" data-full-name="Critical Success Factor" data-aliases="facteur clé de succès" data-keywords="KPI | objectif" data-definition="Condition essentielle à réunir pour atteindre un objectif ; des indicateurs permettent ensuite de vérifier si elle est satisfaite." data-courses="itil" data-modules="i07" data-letter="C" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="049" data-source-order="370" aria-labelledby="csf-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="csf-titre"><a href="#csf" class="tssr-glossary-card__anchor" aria-label="CSF">CSF</a></h2>
    <p class="tssr-glossary-card__full-name">Critical Success Factor</p>
  </header>
  <p class="tssr-glossary-card__definition">Condition essentielle à réunir pour atteindre un objectif ; des indicateurs permettent ensuite de vérifier si elle est satisfaite.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> facteur clé de succès</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="csv" data-glossary-card data-term="CSV" data-full-name="Comma-Separated Values" data-aliases="valeurs séparées" data-keywords="import | export" data-definition="Format texte tabulaire où chaque ligne représente un enregistrement et les champs sont séparés par un délimiteur convenu." data-courses="m365 glpi" data-modules="m03 g06" data-letter="C" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="437" aria-labelledby="csv-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="csv-titre"><a href="#csv" class="tssr-glossary-card__anchor" aria-label="CSV">CSV</a></h2>
    <p class="tssr-glossary-card__full-name">Comma-Separated Values</p>
  </header>
  <p class="tssr-glossary-card__definition">Format texte tabulaire où chaque ligne représente un enregistrement et les champs sont séparés par un délimiteur convenu.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> valeurs séparées</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="dacl" data-glossary-card data-term="DACL" data-full-name="Discretionary Access Control List" data-aliases="liste de contrôle d’accès discrétionnaire" data-keywords="ACL | NTFS" data-definition="Partie d’un descripteur de sécurité Windows qui rassemble les ACE autorisant ou refusant l’accès à un objet." data-courses="windows" data-modules="w06" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="011" data-source-order="90" aria-labelledby="dacl-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="dacl-titre"><a href="#dacl" class="tssr-glossary-card__anchor" aria-label="DACL">DACL</a></h2>
    <p class="tssr-glossary-card__full-name">Discretionary Access Control List</p>
  </header>
  <p class="tssr-glossary-card__definition">Partie d’un descripteur de sécurité Windows qui rassemble les ACE autorisant ou refusant l’accès à un objet.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> liste de contrôle d’accès discrétionnaire</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="dad" data-glossary-card data-term="DAD" data-full-name="Duplicate Address Detection" data-aliases="détection d’adresse dupliquée" data-keywords="NDP | IPv6" data-definition="Vérification IPv6 qui s’assure qu’une adresse n’est pas déjà utilisée sur le lien avant qu’une interface ne l’adopte." data-courses="reseaux" data-modules="r06" data-letter="D" data-course-sort="bases des reseaux" data-module-sort="005" data-source-order="24" aria-labelledby="dad-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="dad-titre"><a href="#dad" class="tssr-glossary-card__anchor" aria-label="DAD">DAD</a></h2>
    <p class="tssr-glossary-card__full-name">Duplicate Address Detection</p>
  </header>
  <p class="tssr-glossary-card__definition">Vérification IPv6 qui s’assure qu’une adresse n’est pas déjà utilisée sur le lien avant qu’une interface ne l’adopte.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> détection d’adresse dupliquée</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="data-injection" data-glossary-card data-term="Data Injection" data-full-name data-aliases="injection de données" data-keywords="CSV | plugin" data-definition="Plug-in GLPI historique qui importe en masse des données tabulaires selon un modèle de correspondance, avec contrôles avant insertion." data-courses="glpi" data-modules="g06" data-letter="D" data-course-sort="administration glpi" data-module-sort="057" data-source-order="438" aria-labelledby="data-injection-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="data-injection-titre"><a href="#data-injection" class="tssr-glossary-card__anchor" aria-label="Data Injection">Data Injection</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Plug-in GLPI historique qui importe en masse des données tabulaires selon un modèle de correspondance, avec contrôles avant insertion.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> injection de données</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="datagramme" data-glossary-card data-term="Datagramme" data-full-name data-aliases data-keywords="UDP | PDU" data-definition="Unité de données transmise sans établissement de connexion ; le terme désigne notamment un message UDP autonome." data-courses="reseaux" data-modules="r01" data-letter="D" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="25" aria-labelledby="datagramme-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="datagramme-titre"><a href="#datagramme" class="tssr-glossary-card__anchor" aria-label="Datagramme">Datagramme</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Unité de données transmise sans établissement de connexion ; le terme désigne notamment un message UDP autonome.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="debian" data-glossary-card data-term="Debian" data-full-name data-aliases data-keywords="distribution | paquet deb" data-definition="Distribution GNU/Linux communautaire fondée sur des logiciels libres, une organisation de projet et le gestionnaire de paquets dpkg/APT." data-courses="debian" data-modules="d01" data-letter="D" data-course-sort="administration debian gnu/linux" data-module-sort="031" data-source-order="294" aria-labelledby="debian-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="debian-titre"><a href="#debian" class="tssr-glossary-card__anchor" aria-label="Debian">Debian</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Distribution GNU/Linux communautaire fondée sur des logiciels libres, une organisation de projet et le gestionnaire de paquets dpkg/APT.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux/" title="Administration Debian GNU/Linux — Module 01 — Présentation de Debian GNU/Linux">Debian · M01 · Présentation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="debit-binaire" data-glossary-card data-term="Débit binaire" data-full-name data-aliases="bitrate | bps" data-keywords="bande passante" data-definition="Quantité de bits transmise par unité de temps, généralement mesurée en bit/s, kbit/s, Mbit/s ou Gbit/s." data-courses="reseaux" data-modules="r02" data-letter="D" data-course-sort="bases des reseaux" data-module-sort="001" data-source-order="27" aria-labelledby="debit-binaire-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="debit-binaire-titre"><a href="#debit-binaire" class="tssr-glossary-card__anchor" aria-label="Débit binaire">Débit binaire</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Quantité de bits transmise par unité de temps, généralement mesurée en bit/s, kbit/s, Mbit/s ou Gbit/s.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> bitrate · bps</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-02-les-unites-informatiques/" title="Bases des réseaux — Module 02 — Les unités informatiques">Réseaux · M02 · Unités informatiques</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="decapsulation" data-glossary-card data-term="Décapsulation" data-full-name data-aliases data-keywords="OSI | en-tête" data-definition="Opération par laquelle chaque couche réceptrice retire et interprète son en-tête avant de transmettre les données à la couche supérieure." data-courses="reseaux" data-modules="r01" data-letter="D" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="26" aria-labelledby="decapsulation-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="decapsulation-titre"><a href="#decapsulation" class="tssr-glossary-card__anchor" aria-label="Décapsulation">Décapsulation</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Opération par laquelle chaque couche réceptrice retire et interprète son en-tête avant de transmettre les données à la couche supérieure.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="decouverte-reseau" data-glossary-card data-term="Découverte réseau" data-full-name data-aliases data-keywords="SNMP | inventaire" data-definition="Exploration d’une plage réseau pour détecter des équipements joignables et collecter des informations avant leur intégration à l’inventaire." data-courses="glpi" data-modules="g06" data-letter="D" data-course-sort="administration glpi" data-module-sort="057" data-source-order="439" aria-labelledby="decouverte-reseau-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="decouverte-reseau-titre"><a href="#decouverte-reseau" class="tssr-glossary-card__anchor" aria-label="Découverte réseau">Découverte réseau</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Exploration d’une plage réseau pour détecter des équipements joignables et collecter des informations avant leur intégration à l’inventaire.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="demande-de-changement" data-glossary-card data-term="Demande de changement" data-full-name data-aliases="RFC | Request for Change" data-keywords="CAB | transition" data-definition="Enregistrement formel proposant un changement avec justification, périmètre, risques, priorité, planification, tests et retour arrière." data-courses="itil" data-modules="i04" data-letter="D" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="371" aria-labelledby="demande-de-changement-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="demande-de-changement-titre"><a href="#demande-de-changement" class="tssr-glossary-card__anchor" aria-label="Demande de changement">Demande de changement</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Enregistrement formel proposant un changement avec justification, périmètre, risques, priorité, planification, tests et retour arrière.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> RFC · Request for Change</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="demande-de-service" data-glossary-card data-term="Demande de service" data-full-name data-aliases="service request" data-keywords="catalogue | ticket" data-definition="Requête utilisateur prédéfinie portant sur une information, un accès ou une prestation standard, distincte d’une interruption de service." data-courses="itil" data-modules="i06 i09" data-letter="D" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="372" aria-labelledby="demande-de-service-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="demande-de-service-titre"><a href="#demande-de-service" class="tssr-glossary-card__anchor" aria-label="Demande de service">Demande de service</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Requête utilisateur prédéfinie portant sur une information, un accès ou une prestation standard, distincte d’une interruption de service.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> service request</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="dependance-logicielle" data-glossary-card data-term="Dépendance logicielle" data-full-name data-aliases data-keywords="APT | paquet" data-definition="Paquet, bibliothèque ou composant requis par un autre logiciel pour s’installer ou fonctionner correctement." data-courses="debian" data-modules="d06" data-letter="D" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="295" aria-labelledby="dependance-logicielle-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="dependance-logicielle-titre"><a href="#dependance-logicielle" class="tssr-glossary-card__anchor" aria-label="Dépendance logicielle">Dépendance logicielle</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Paquet, bibliothèque ou composant requis par un autre logiciel pour s’installer ou fonctionner correctement.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="deploiement" data-glossary-card data-term="Déploiement" data-full-name data-aliases data-keywords="release | transition" data-definition="Activité qui place une version nouvelle ou modifiée dans un environnement cible selon un plan contrôlé et vérifiable." data-courses="itil windows" data-modules="i04 w12" data-letter="D" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="017" data-source-order="373" aria-labelledby="deploiement-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="deploiement-titre"><a href="#deploiement" class="tssr-glossary-card__anchor" aria-label="Déploiement">Déploiement</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Activité qui place une version nouvelle ou modifiée dans un environnement cible selon un plan contrôlé et vérifiable.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image/" title="Systèmes clients Microsoft — Module 12 — Introduction à la capture et au déploiement d’image">Windows · M12 · Capture et déploiement</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="depot-apt" data-glossary-card data-term="Dépôt APT" data-full-name data-aliases="repository" data-keywords="sources.list | paquet" data-definition="Source signée d’index et de paquets Debian qu’APT consulte selon une adresse, une suite et des composants configurés." data-courses="debian" data-modules="d06" data-letter="D" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="296" aria-labelledby="depot-apt-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="depot-apt-titre"><a href="#depot-apt" class="tssr-glossary-card__anchor" aria-label="Dépôt APT">Dépôt APT</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Source signée d’index et de paquets Debian qu’APT consulte selon une adresse, une suite et des composants configurés.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> repository</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="descripteur-de-securite" data-glossary-card data-term="Descripteur de sécurité" data-full-name data-aliases="security descriptor" data-keywords="ACL | propriétaire" data-definition="Structure Windows associée à un objet et contenant notamment son propriétaire, son groupe et ses listes de contrôle d’accès." data-courses="windows" data-modules="w06" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="011" data-source-order="91" aria-labelledby="descripteur-de-securite-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="descripteur-de-securite-titre"><a href="#descripteur-de-securite" class="tssr-glossary-card__anchor" aria-label="Descripteur de sécurité">Descripteur de sécurité</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Structure Windows associée à un objet et contenant notamment son propriétaire, son groupe et ses listes de contrôle d’accès.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> security descriptor</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="df" data-glossary-card data-term="df" data-full-name="Disk Free" data-aliases data-keywords="capacité | filesystem" data-definition="Commande qui affiche l’utilisation et l’espace disponible des systèmes de fichiers montés, avec une présentation lisible via -h." data-courses="debian" data-modules="d09 d12" data-letter="D" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="297" aria-labelledby="df-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="df-titre"><a href="#df" class="tssr-glossary-card__anchor" aria-label="df">df</a></h2>
    <p class="tssr-glossary-card__full-name">Disk Free</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui affiche l’utilisation et l’espace disponible des systèmes de fichiers montés, avec une présentation lisible via -h.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="dhcp" data-glossary-card data-term="DHCP" data-full-name="Dynamic Host Configuration Protocol" data-aliases="configuration dynamique" data-keywords="bail DHCP | DORA" data-definition="Protocole qui fournit automatiquement à un client une adresse IP, un masque, une passerelle, des DNS et une durée de bail." data-courses="reseaux windows debian" data-modules="r03 w07 d05" data-letter="D" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="28" aria-labelledby="dhcp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="dhcp-titre"><a href="#dhcp" class="tssr-glossary-card__anchor" aria-label="DHCP">DHCP</a></h2>
    <p class="tssr-glossary-card__full-name">Dynamic Host Configuration Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole qui fournit automatiquement à un client une adresse IP, un masque, une passerelle, des DNS et une durée de bail.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> configuration dynamique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="diagnostic-initial" data-glossary-card data-term="Diagnostic initial" data-full-name data-aliases="premier diagnostic" data-keywords="support | qualification" data-definition="Collecte structurée des symptômes, du contexte, de la portée et des changements récents avant toute tentative de correction." data-courses="itil" data-modules="i06 i09" data-letter="D" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="374" aria-labelledby="diagnostic-initial-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="diagnostic-initial-titre"><a href="#diagnostic-initial" class="tssr-glossary-card__anchor" aria-label="Diagnostic initial">Diagnostic initial</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Collecte structurée des symptômes, du contexte, de la portée et des changements récents avant toute tentative de correction.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> premier diagnostic</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="discussion-teams" data-glossary-card data-term="Discussion Teams" data-full-name data-aliases="chat Teams" data-keywords="messagerie instantanée" data-definition="Conversation instantanée privée entre une ou plusieurs personnes, indépendante des publications d’un canal d’équipe." data-courses="m365" data-modules="m05" data-letter="D" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="175" aria-labelledby="discussion-teams-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="discussion-teams-titre"><a href="#discussion-teams" class="tssr-glossary-card__anchor" aria-label="Discussion Teams">Discussion Teams</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Conversation instantanée privée entre une ou plusieurs personnes, indépendante des publications d’un canal d’équipe.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> chat Teams</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="diskmgmt-msc" data-glossary-card data-term="diskmgmt.msc" data-full-name data-aliases="Gestion des disques" data-keywords="MMC | stockage" data-definition="Console graphique Gestion des disques utilisée pour initialiser les disques, créer des partitions, formater et attribuer des lettres de lecteur." data-courses="windows" data-modules="w04" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="95" aria-labelledby="diskmgmt-msc-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="diskmgmt-msc-titre"><a href="#diskmgmt-msc" class="tssr-glossary-card__anchor" aria-label="diskmgmt.msc">diskmgmt.msc</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Console graphique Gestion des disques utilisée pour initialiser les disques, créer des partitions, formater et attribuer des lettres de lecteur.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Gestion des disques</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="diskpart" data-glossary-card data-term="DiskPart" data-full-name data-aliases data-keywords="list disk | select disk | clean" data-definition="Outil en ligne de commande Windows pour sélectionner et gérer disques, partitions et volumes ; sa cible doit être vérifiée avant toute action." data-courses="windows" data-modules="w04" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="96" aria-labelledby="diskpart-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="diskpart-titre"><a href="#diskpart" class="tssr-glossary-card__anchor" aria-label="DiskPart">DiskPart</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Outil en ligne de commande Windows pour sélectionner et gérer disques, partitions et volumes ; sa cible doit être vérifiée avant toute action.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="dism" data-glossary-card data-term="DISM" data-full-name="Deployment Image Servicing and Management" data-aliases="outil de gestion des images" data-keywords="WIM | déploiement" data-definition="Outil Windows qui capture, applique, monte et maintient des images système ainsi que leurs composants, pilotes et fonctionnalités." data-courses="windows" data-modules="w12" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="017" data-source-order="92" aria-labelledby="dism-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="dism-titre"><a href="#dism" class="tssr-glossary-card__anchor" aria-label="DISM">DISM</a></h2>
    <p class="tssr-glossary-card__full-name">Deployment Image Servicing and Management</p>
  </header>
  <p class="tssr-glossary-card__definition">Outil Windows qui capture, applique, monte et maintient des images système ainsi que leurs composants, pilotes et fonctionnalités.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> outil de gestion des images</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image/" title="Systèmes clients Microsoft — Module 12 — Introduction à la capture et au déploiement d’image">Windows · M12 · Capture et déploiement</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="disponibilite" data-glossary-card data-term="Disponibilité" data-full-name data-aliases="availability" data-keywords="temps de service | SLA" data-definition="Aptitude d’un service ou composant à remplir sa fonction lorsqu’il est requis, sur une période et dans des conditions convenues." data-courses="itil" data-modules="i02 i03" data-letter="D" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="375" aria-labelledby="disponibilite-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="disponibilite-titre"><a href="#disponibilite" class="tssr-glossary-card__anchor" aria-label="Disponibilité">Disponibilité</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Aptitude d’un service ou composant à remplir sa fonction lorsqu’il est requis, sur une période et dans des conditions convenues.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> availability</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="disque-de-base" data-glossary-card data-term="Disque de base" data-full-name data-aliases data-keywords="partition | volume" data-definition="Type de disque Windows utilisant des partitions et volumes simples, adapté à la plupart des postes et plus portable qu’un disque dynamique." data-courses="windows" data-modules="w04" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="93" aria-labelledby="disque-de-base-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="disque-de-base-titre"><a href="#disque-de-base" class="tssr-glossary-card__anchor" aria-label="Disque de base">Disque de base</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Type de disque Windows utilisant des partitions et volumes simples, adapté à la plupart des postes et plus portable qu’un disque dynamique.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="disque-dynamique" data-glossary-card data-term="Disque dynamique" data-full-name data-aliases data-keywords="volume agrégé | miroir" data-definition="Type de disque Windows capable de créer certains volumes répartis, agrégés ou en miroir, avec des contraintes de compatibilité supplémentaires." data-courses="windows" data-modules="w04" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="94" aria-labelledby="disque-dynamique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="disque-dynamique-titre"><a href="#disque-dynamique" class="tssr-glossary-card__anchor" aria-label="Disque dynamique">Disque dynamique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Type de disque Windows capable de créer certains volumes répartis, agrégés ou en miroir, avec des contraintes de compatibilité supplémentaires.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="distribution-gnu-linux" data-glossary-card data-term="Distribution GNU/Linux" data-full-name data-aliases="distribution Linux | distro" data-keywords="Debian" data-definition="Ensemble cohérent réunissant noyau Linux, outils GNU, gestionnaire de paquets, logiciels et politique de maintenance, comme Debian." data-courses="linux debian" data-modules="l03 d01" data-letter="D" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="222" aria-labelledby="distribution-gnu-linux-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="distribution-gnu-linux-titre"><a href="#distribution-gnu-linux" class="tssr-glossary-card__anchor" aria-label="Distribution GNU/Linux">Distribution GNU/Linux</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble cohérent réunissant noyau Linux, outils GNU, gestionnaire de paquets, logiciels et politique de maintenance, comme Debian.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> distribution Linux · distro</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux/" title="Administration Debian GNU/Linux — Module 01 — Présentation de Debian GNU/Linux">Debian · M01 · Présentation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="dns" data-glossary-card data-term="DNS" data-full-name="Domain Name System" data-aliases="système de noms de domaine" data-keywords="résolution de noms | nameserver" data-definition="Système hiérarchique qui traduit des noms comme serveur.exemple.fr en adresses IP et publie d’autres informations de domaine." data-courses="reseaux windows debian" data-modules="r05 w07 d05" data-letter="D" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="29" aria-labelledby="dns-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="dns-titre"><a href="#dns" class="tssr-glossary-card__anchor" aria-label="DNS">DNS</a></h2>
    <p class="tssr-glossary-card__full-name">Domain Name System</p>
  </header>
  <p class="tssr-glossary-card__definition">Système hiérarchique qui traduit des noms comme serveur.exemple.fr en adresses IP et publie d’autres informations de domaine.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> système de noms de domaine</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="document-word" data-glossary-card data-term="Document Word" data-full-name data-aliases data-keywords="Word | DOCX" data-definition="Fichier de traitement de texte structuré en paragraphes, styles, sections et objets, généralement enregistré au format DOCX." data-courses="m365" data-modules="m02" data-letter="D" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="176" aria-labelledby="document-word-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="document-word-titre"><a href="#document-word" class="tssr-glossary-card__anchor" aria-label="Document Word">Document Word</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier de traitement de texte structuré en paragraphes, styles, sections et objets, généralement enregistré au format DOCX.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="domaine-de-diffusion" data-glossary-card data-term="Domaine de diffusion" data-full-name data-aliases="broadcast domain" data-keywords="routeur | VLAN" data-definition="Ensemble d’équipements qui reçoivent une même trame de broadcast. Un routeur ou une séparation VLAN en limite normalement l’étendue." data-courses="reseaux" data-modules="r04" data-letter="D" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="30" aria-labelledby="domaine-de-diffusion-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="domaine-de-diffusion-titre"><a href="#domaine-de-diffusion" class="tssr-glossary-card__anchor" aria-label="Domaine de diffusion">Domaine de diffusion</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble d’équipements qui reçoivent une même trame de broadcast. Un routeur ou une séparation VLAN en limite normalement l’étendue.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> broadcast domain</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="dpkg" data-glossary-card data-term="dpkg" data-full-name="Debian Package" data-aliases data-keywords="paquet Debian | APT" data-definition="Outil bas niveau qui installe, retire et interroge les paquets .deb locaux sans résoudre seul toutes les dépendances distantes." data-courses="debian" data-modules="d06" data-letter="D" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="298" aria-labelledby="dpkg-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="dpkg-titre"><a href="#dpkg" class="tssr-glossary-card__anchor" aria-label="dpkg">dpkg</a></h2>
    <p class="tssr-glossary-card__full-name">Debian Package</p>
  </header>
  <p class="tssr-glossary-card__definition">Outil bas niveau qui installe, retire et interroge les paquets .deb locaux sans résoudre seul toutes les dépendances distantes.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="droit-effectif" data-glossary-card data-term="Droit effectif" data-full-name data-aliases="autorisation effective" data-keywords="ACL | groupes" data-definition="Résultat final des autorisations et refus applicables à un utilisateur selon ses groupes, l’héritage, la propriété et le type d’accès." data-courses="windows" data-modules="w06" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="011" data-source-order="98" aria-labelledby="droit-effectif-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="droit-effectif-titre"><a href="#droit-effectif" class="tssr-glossary-card__anchor" aria-label="Droit effectif">Droit effectif</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Résultat final des autorisations et refus applicables à un utilisateur selon ses groupes, l’héritage, la propriété et le type d’accès.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> autorisation effective</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="droit-explicite" data-glossary-card data-term="Droit explicite" data-full-name data-aliases data-keywords="ACL | héritage" data-definition="Permission attribuée directement à un fichier ou dossier, par opposition à une permission héritée de son dossier parent." data-courses="windows" data-modules="w06" data-letter="D" data-course-sort="systemes clients microsoft" data-module-sort="011" data-source-order="97" aria-labelledby="droit-explicite-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="droit-explicite-titre"><a href="#droit-explicite" class="tssr-glossary-card__anchor" aria-label="Droit explicite">Droit explicite</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Permission attribuée directement à un fichier ou dossier, par opposition à une permission héritée de son dossier parent.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="du" data-glossary-card data-term="du" data-full-name="Disk Usage" data-aliases data-keywords="taille dossier | stockage" data-definition="Commande qui estime l’espace utilisé par des fichiers et répertoires, utile pour rechercher ce qui consomme un système de fichiers." data-courses="debian" data-modules="d09 d12" data-letter="D" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="299" aria-labelledby="du-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="du-titre"><a href="#du" class="tssr-glossary-card__anchor" aria-label="du">du</a></h2>
    <p class="tssr-glossary-card__full-name">Disk Usage</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui estime l’espace utilisé par des fichiers et répertoires, utile pour rechercher ce qui consomme un système de fichiers.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ecab" data-glossary-card data-term="ECAB" data-full-name="Emergency Change Advisory Board" data-aliases="comité des changements d’urgence" data-keywords="CAB | urgence" data-definition="Groupe restreint habilité à évaluer et autoriser rapidement un changement d’urgence selon la situation rencontrée." data-courses="itil" data-modules="i04" data-letter="E" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="376" aria-labelledby="ecab-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ecab-titre"><a href="#ecab" class="tssr-glossary-card__anchor" aria-label="ECAB">ECAB</a></h2>
    <p class="tssr-glossary-card__full-name">Emergency Change Advisory Board</p>
  </header>
  <p class="tssr-glossary-card__definition">Groupe restreint habilité à évaluer et autoriser rapidement un changement d’urgence selon la situation rencontrée.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> comité des changements d’urgence</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="editeur-du-registre" data-glossary-card data-term="Éditeur du Registre" data-full-name data-aliases="regedit" data-keywords="registre" data-definition="Console regedit.exe qui affiche et modifie la base de registre Windows ; une modification erronée peut rendre le système instable." data-courses="windows" data-modules="w13" data-letter="E" data-course-sort="systemes clients microsoft" data-module-sort="018" data-source-order="99" aria-labelledby="editeur-du-registre-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="editeur-du-registre-titre"><a href="#editeur-du-registre" class="tssr-glossary-card__anchor" aria-label="Éditeur du Registre">Éditeur du Registre</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Console regedit.exe qui affiche et modifie la base de registre Windows ; une modification erronée peut rendre le système instable.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> regedit</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-13-les-strategies-de-groupe-local/" title="Systèmes clients Microsoft — Module 13 — Les stratégies de groupe local">Windows · M13 · Stratégies de groupe</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="edition-stable-debian" data-glossary-card data-term="Édition stable Debian" data-full-name data-aliases="Debian stable" data-keywords="release | production" data-definition="Branche Debian publiée et maintenue en privilégiant stabilité et correctifs de sécurité plutôt que versions logicielles très récentes." data-courses="debian" data-modules="d01" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="031" data-source-order="300" aria-labelledby="edition-stable-debian-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="edition-stable-debian-titre"><a href="#edition-stable-debian" class="tssr-glossary-card__anchor" aria-label="Édition stable Debian">Édition stable Debian</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Branche Debian publiée et maintenue en privilégiant stabilité et correctifs de sécurité plutôt que versions logicielles très récentes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Debian stable</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux/" title="Administration Debian GNU/Linux — Module 01 — Présentation de Debian GNU/Linux">Debian · M01 · Présentation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="elevation-de-privileges" data-glossary-card data-term="Élévation de privilèges" data-full-name data-aliases data-keywords="UAC | administrateur" data-definition="Passage contrôlé d’un jeton standard à des privilèges administratifs pour exécuter une opération protégée, généralement après une invite UAC." data-courses="windows" data-modules="w05" data-letter="E" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="100" aria-labelledby="elevation-de-privileges-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="elevation-de-privileges-titre"><a href="#elevation-de-privileges" class="tssr-glossary-card__anchor" aria-label="Élévation de privilèges">Élévation de privilèges</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Passage contrôlé d’un jeton standard à des privilèges administratifs pour exécuter une opération protégée, généralement après une invite UAC.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="emergency-mode" data-glossary-card data-term="Emergency mode" data-full-name data-aliases="mode urgence" data-keywords="systemd | maintenance" data-definition="Cible systemd minimale ouvrant un environnement de secours avec très peu de services et souvent une racine montée en lecture seule." data-courses="debian" data-modules="d04" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="034" data-source-order="301" aria-labelledby="emergency-mode-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="emergency-mode-titre"><a href="#emergency-mode" class="tssr-glossary-card__anchor" aria-label="Emergency mode">Emergency mode</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Cible systemd minimale ouvrant un environnement de secours avec très peu de services et souvent une racine montée en lecture seule.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> mode urgence</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance/" title="Administration Debian GNU/Linux — Module 04 — Debian en mode maintenance">Debian · M04 · Mode maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="en-tete" data-glossary-card data-term="En-tête" data-full-name data-aliases="header" data-keywords="encapsulation" data-definition="Informations de contrôle ajoutées avant les données par un protocole, par exemple les adresses, ports, numéros de séquence ou durées de vie." data-courses="reseaux" data-modules="r01" data-letter="E" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="32" aria-labelledby="en-tete-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="en-tete-titre"><a href="#en-tete" class="tssr-glossary-card__anchor" aria-label="En-tête">En-tête</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Informations de contrôle ajoutées avant les données par un protocole, par exemple les adresses, ports, numéros de séquence ou durées de vie.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> header</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="en-tete-et-pied-de-page" data-glossary-card data-term="En-tête et pied de page" data-full-name data-aliases data-keywords="Word | mise en page" data-definition="Zones répétées en haut et en bas des pages d’un document Word, utilisées pour titres, dates, numéros de page ou informations communes." data-courses="m365" data-modules="m02" data-letter="E" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="177" aria-labelledby="en-tete-et-pied-de-page-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="en-tete-et-pied-de-page-titre"><a href="#en-tete-et-pied-de-page" class="tssr-glossary-card__anchor" aria-label="En-tête et pied de page">En-tête et pied de page</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Zones répétées en haut et en bas des pages d’un document Word, utilisées pour titres, dates, numéros de page ou informations communes.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="encapsulation" data-glossary-card data-term="Encapsulation" data-full-name data-aliases data-keywords="OSI | PDU | en-tête" data-definition="Ajout successif d’en-têtes, et parfois d’une bande de fin, lorsque les données descendent les couches d’une pile réseau." data-courses="reseaux" data-modules="r01" data-letter="E" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="31" aria-labelledby="encapsulation-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="encapsulation-titre"><a href="#encapsulation" class="tssr-glossary-card__anchor" aria-label="Encapsulation">Encapsulation</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ajout successif d’en-têtes, et parfois d’une bande de fin, lorsque les données descendent les couches d’une pile réseau.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="entite-glpi" data-glossary-card data-term="Entité GLPI" data-full-name data-aliases data-keywords="hiérarchie | cloisonnement" data-definition="Niveau hiérarchique qui cloisonne ou organise les objets, utilisateurs et règles d’une organisation dans une même instance GLPI." data-courses="glpi" data-modules="g02" data-letter="E" data-course-sort="administration glpi" data-module-sort="053" data-source-order="440" aria-labelledby="entite-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="entite-glpi-titre"><a href="#entite-glpi" class="tssr-glossary-card__anchor" aria-label="Entité GLPI">Entité GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Niveau hiérarchique qui cloisonne ou organise les objets, utilisateurs et règles d’une organisation dans une même instance GLPI.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="entree-standard" data-glossary-card data-term="Entrée standard" data-full-name data-aliases="stdin" data-keywords="descripteur 0 | flux" data-definition="Flux numéro 0 fourni par défaut à une commande, généralement le clavier ou la sortie d’une commande précédente dans un pipeline." data-courses="linux" data-modules="l08" data-letter="E" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="223" aria-labelledby="entree-standard-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="entree-standard-titre"><a href="#entree-standard" class="tssr-glossary-card__anchor" aria-label="Entrée standard">Entrée standard</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Flux numéro 0 fourni par défaut à une commande, généralement le clavier ou la sortie d’une commande précédente dans un pipeline.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> stdin</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="equipe-teams" data-glossary-card data-term="Équipe Teams" data-full-name data-aliases="team" data-keywords="canal | groupe Microsoft 365" data-definition="Groupe de collaboration Microsoft Teams qui réunit des membres, des canaux et les services Microsoft 365 associés." data-courses="m365" data-modules="m05" data-letter="E" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="178" aria-labelledby="equipe-teams-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="equipe-teams-titre"><a href="#equipe-teams" class="tssr-glossary-card__anchor" aria-label="Équipe Teams">Équipe Teams</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Groupe de collaboration Microsoft Teams qui réunit des membres, des canaux et les services Microsoft 365 associés.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> team</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="equipement-gere" data-glossary-card data-term="Équipement géré" data-full-name data-aliases="asset | élément d’inventaire" data-keywords="gestion de parc" data-definition="Actif identifié, attribué et suivi dans l’inventaire avec caractéristiques, état, localisation, relations et historique." data-courses="glpi itil" data-modules="g03 i05" data-letter="E" data-course-sort="administration glpi" data-module-sort="047" data-source-order="442" aria-labelledby="equipement-gere-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="equipement-gere-titre"><a href="#equipement-gere" class="tssr-glossary-card__anchor" aria-label="Équipement géré">Équipement géré</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Actif identifié, attribué et suivi dans l’inventaire avec caractéristiques, état, localisation, relations et historique.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> asset · élément d’inventaire</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-05-decouverte-de-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 05 — Découverte de GLPI">ITIL · M05 · Découverte de GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="equipement-reseau-glpi" data-glossary-card data-term="Équipement réseau GLPI" data-full-name data-aliases data-keywords="inventaire | switch" data-definition="Type d’actif représentant notamment commutateurs, routeurs ou points d’accès avec leurs ports, adresses et relations d’inventaire." data-courses="glpi" data-modules="g03" data-letter="E" data-course-sort="administration glpi" data-module-sort="054" data-source-order="441" aria-labelledby="equipement-reseau-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="equipement-reseau-glpi-titre"><a href="#equipement-reseau-glpi" class="tssr-glossary-card__anchor" aria-label="Équipement réseau GLPI">Équipement réseau GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Type d’actif représentant notamment commutateurs, routeurs ou points d’accès avec leurs ports, adresses et relations d’inventaire.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="erreur-connue" data-glossary-card data-term="Erreur connue" data-full-name data-aliases="known error" data-keywords="problème | contournement" data-definition="Problème dont la cause ou un contournement est documenté, même si la correction définitive n’est pas encore déployée." data-courses="itil" data-modules="i06" data-letter="E" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="377" aria-labelledby="erreur-connue-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="erreur-connue-titre"><a href="#erreur-connue" class="tssr-glossary-card__anchor" aria-label="Erreur connue">Erreur connue</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Problème dont la cause ou un contournement est documenté, même si la correction définitive n’est pas encore déployée.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> known error</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="erreur-standard" data-glossary-card data-term="Erreur standard" data-full-name data-aliases="stderr" data-keywords="descripteur 2 | 2&gt;" data-definition="Flux numéro 2 réservé aux diagnostics et erreurs, distinct de la sortie normale afin de pouvoir être redirigé séparément." data-courses="linux" data-modules="l06 l08" data-letter="E" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="028" data-source-order="224" aria-labelledby="erreur-standard-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="erreur-standard-titre"><a href="#erreur-standard" class="tssr-glossary-card__anchor" aria-label="Erreur standard">Erreur standard</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Flux numéro 2 réservé aux diagnostics et erreurs, distinct de la sortie normale afin de pouvoir être redirigé séparément.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> stderr</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres/" title="Utilisation d’une distribution GNU/Linux — Module 06 — Recherches et expressions régulières">GNU/Linux · M06 · Recherches et regex</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="escalade-fonctionnelle" data-glossary-card data-term="Escalade fonctionnelle" data-full-name data-aliases data-keywords="support N2 | compétence" data-definition="Transfert d’un dossier vers une équipe possédant les compétences ou outils nécessaires lorsque le niveau courant ne peut pas résoudre." data-courses="itil" data-modules="i06 i09" data-letter="E" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="378" aria-labelledby="escalade-fonctionnelle-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="escalade-fonctionnelle-titre"><a href="#escalade-fonctionnelle" class="tssr-glossary-card__anchor" aria-label="Escalade fonctionnelle">Escalade fonctionnelle</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Transfert d’un dossier vers une équipe possédant les compétences ou outils nécessaires lorsque le niveau courant ne peut pas résoudre.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="escalade-hierarchique" data-glossary-card data-term="Escalade hiérarchique" data-full-name data-aliases data-keywords="management | incident majeur" data-definition="Alerte vers un niveau de management lorsque priorité, délai, risque ou ressources exigent une décision ou une coordination supérieure." data-courses="itil" data-modules="i06" data-letter="E" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="379" aria-labelledby="escalade-hierarchique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="escalade-hierarchique-titre"><a href="#escalade-hierarchique" class="tssr-glossary-card__anchor" aria-label="Escalade hiérarchique">Escalade hiérarchique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Alerte vers un niveau de management lorsque priorité, délai, risque ou ressources exigent une décision ou une coordination supérieure.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="etc-fstab" data-glossary-card data-term="/etc/fstab" data-full-name data-aliases="file systems table" data-keywords="montage persistant | UUID" data-definition="Fichier qui décrit les systèmes de fichiers à monter, leurs points de montage et options ; mount -a permet de le tester avant redémarrage." data-courses="debian" data-modules="d09" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="275" aria-labelledby="etc-fstab-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="etc-fstab-titre"><a href="#etc-fstab" class="tssr-glossary-card__anchor" aria-label="/etc/fstab">/etc/fstab</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier qui décrit les systèmes de fichiers à monter, leurs points de montage et options ; mount -a permet de le tester avant redémarrage.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> file systems table</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="etc-group" data-glossary-card data-term="/etc/group" data-full-name data-aliases data-keywords="GID | groupes" data-definition="Fichier qui associe les noms de groupes locaux à leurs GID et liste les membres supplémentaires de chaque groupe." data-courses="debian" data-modules="d10" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="276" aria-labelledby="etc-group-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="etc-group-titre"><a href="#etc-group" class="tssr-glossary-card__anchor" aria-label="/etc/group">/etc/group</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier qui associe les noms de groupes locaux à leurs GID et liste les membres supplémentaires de chaque groupe.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="etc-gshadow" data-glossary-card data-term="/etc/gshadow" data-full-name data-aliases data-keywords="groupes | sécurité" data-definition="Fichier protégé qui complète /etc/group avec les informations sensibles, administrateurs et membres des groupes locaux." data-courses="debian" data-modules="d10" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="277" aria-labelledby="etc-gshadow-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="etc-gshadow-titre"><a href="#etc-gshadow" class="tssr-glossary-card__anchor" aria-label="/etc/gshadow">/etc/gshadow</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier protégé qui complète /etc/group avec les informations sensibles, administrateurs et membres des groupes locaux.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="etc-passwd" data-glossary-card data-term="/etc/passwd" data-full-name data-aliases data-keywords="utilisateurs | UID" data-definition="Fichier lisible qui décrit les comptes locaux avec nom, UID, GID principal, commentaire, répertoire personnel et shell de connexion." data-courses="debian" data-modules="d10" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="278" aria-labelledby="etc-passwd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="etc-passwd-titre"><a href="#etc-passwd" class="tssr-glossary-card__anchor" aria-label="/etc/passwd">/etc/passwd</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier lisible qui décrit les comptes locaux avec nom, UID, GID principal, commentaire, répertoire personnel et shell de connexion.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="etc-resolv-conf" data-glossary-card data-term="/etc/resolv.conf" data-full-name data-aliases data-keywords="nameserver | DNS" data-definition="Fichier indiquant notamment les serveurs DNS et options de résolution utilisés par le système, souvent généré par un gestionnaire réseau." data-courses="debian msp" data-modules="d05 s01" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="035" data-source-order="279" aria-labelledby="etc-resolv-conf-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="etc-resolv-conf-titre"><a href="#etc-resolv-conf" class="tssr-glossary-card__anchor" aria-label="/etc/resolv.conf">/etc/resolv.conf</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier indiquant notamment les serveurs DNS et options de résolution utilisés par le système, souvent généré par un gestionnaire réseau.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="etc-shadow" data-glossary-card data-term="/etc/shadow" data-full-name data-aliases data-keywords="mot de passe | expiration" data-definition="Fichier protégé contenant les condensats de mots de passe et paramètres d’expiration des comptes locaux Linux." data-courses="debian" data-modules="d10" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="280" aria-labelledby="etc-shadow-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="etc-shadow-titre"><a href="#etc-shadow" class="tssr-glossary-card__anchor" aria-label="/etc/shadow">/etc/shadow</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier protégé contenant les condensats de mots de passe et paramètres d’expiration des comptes locaux Linux.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="etc-sources-list" data-glossary-card data-term="/etc/sources.list" data-full-name data-aliases data-keywords="APT | dépôt Debian" data-definition="Fichier historique qui déclare les dépôts APT et leurs suites ; des fichiers .sources ou .list peuvent aussi exister sous sources.list.d." data-courses="debian" data-modules="d06" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="281" aria-labelledby="etc-sources-list-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="etc-sources-list-titre"><a href="#etc-sources-list" class="tssr-glossary-card__anchor" aria-label="/etc/sources.list">/etc/sources.list</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier historique qui déclare les dépôts APT et leurs suites ; des fichiers .sources ou .list peuvent aussi exister sous sources.list.d.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ethernet" data-glossary-card data-term="Ethernet" data-full-name data-aliases="IEEE 802.3" data-keywords="LAN | couche 2" data-definition="Famille de technologies de réseau local normalisée par IEEE 802.3, utilisant des trames et des adresses MAC." data-courses="reseaux" data-modules="r01 r04" data-letter="E" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="33" aria-labelledby="ethernet-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ethernet-titre"><a href="#ethernet" class="tssr-glossary-card__anchor" aria-label="Ethernet">Ethernet</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Famille de technologies de réseau local normalisée par IEEE 802.3, utilisant des trames et des adresses MAC.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> IEEE 802.3</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="evenement-itil" data-glossary-card data-term="Événement ITIL" data-full-name data-aliases="event" data-keywords="alerte | supervision" data-definition="Changement d’état significatif pour la gestion d’un service ou d’un élément de configuration, détecté par supervision ou observation." data-courses="itil" data-modules="i06" data-letter="E" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="380" aria-labelledby="evenement-itil-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="evenement-itil-titre"><a href="#evenement-itil" class="tssr-glossary-card__anchor" aria-label="Événement ITIL">Événement ITIL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Changement d’état significatif pour la gestion d’un service ou d’un élément de configuration, détecté par supervision ou observation.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> event</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="evenement-windows" data-glossary-card data-term="Événement Windows" data-full-name data-aliases data-keywords="Observateur d’événements | journal" data-definition="Enregistrement horodaté produit par le système, une application ou la sécurité et consultable dans les journaux Windows." data-courses="windows" data-modules="w10" data-letter="E" data-course-sort="systemes clients microsoft" data-module-sort="015" data-source-order="101" aria-labelledby="evenement-windows-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="evenement-windows-titre"><a href="#evenement-windows" class="tssr-glossary-card__anchor" aria-label="Événement Windows">Événement Windows</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Enregistrement horodaté produit par le système, une application ou la sécurité et consultable dans les journaux Windows.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="excel" data-glossary-card data-term="Excel" data-full-name data-aliases data-keywords="tableur | formule" data-definition="Application de tableur Microsoft destinée au calcul, à l’analyse et à la présentation de données dans des classeurs et feuilles." data-courses="m365" data-modules="m03" data-letter="E" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="179" aria-labelledby="excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="excel-titre"><a href="#excel" class="tssr-glossary-card__anchor" aria-label="Excel">Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Application de tableur Microsoft destinée au calcul, à l’analyse et à la présentation de données dans des classeurs et feuilles.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="exchange-online" data-glossary-card data-term="Exchange Online" data-full-name data-aliases data-keywords="Outlook | mailbox" data-definition="Service de messagerie hébergé de Microsoft 365 qui fournit boîtes aux lettres, calendriers et fonctions de transport des messages." data-courses="m365" data-modules="m01 m04" data-letter="E" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="020" data-source-order="180" aria-labelledby="exchange-online-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="exchange-online-titre"><a href="#exchange-online" class="tssr-glossary-card__anchor" aria-label="Exchange Online">Exchange Online</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service de messagerie hébergé de Microsoft 365 qui fournit boîtes aux lettres, calendriers et fonctions de transport des messages.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-01-decouverte-de-microsoft-365/" title="Microsoft 365 — Outils collaboratifs — Module 01 — Découverte de Microsoft 365">Microsoft 365 · M01 · Microsoft 365</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-04-exploiter-outlook-et-savoir-le-depanner/" title="Microsoft 365 — Outils collaboratifs — Module 04 — Exploiter Outlook et savoir le dépanner">Microsoft 365 · M04 · Outlook</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="export" data-glossary-card data-term="export" data-full-name data-aliases data-keywords="variable d’environnement | shell" data-definition="Commande Bash qui marque une variable pour qu’elle soit transmise dans l’environnement des processus enfants lancés ensuite." data-courses="linux" data-modules="l08" data-letter="E" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="226" aria-labelledby="export-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="export-titre"><a href="#export" class="tssr-glossary-card__anchor" aria-label="export">export</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande Bash qui marque une variable pour qu’elle soit transmise dans l’environnement des processus enfants lancés ensuite.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="expression-reguliere" data-glossary-card data-term="Expression régulière" data-full-name data-aliases="regex | regexp" data-keywords="grep | motif" data-definition="Motif formel décrivant un ensemble de chaînes pour rechercher ou filtrer du texte, avec des métacaractères dépendant du moteur utilisé." data-courses="linux" data-modules="l06" data-letter="E" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="028" data-source-order="225" aria-labelledby="expression-reguliere-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="expression-reguliere-titre"><a href="#expression-reguliere" class="tssr-glossary-card__anchor" aria-label="Expression régulière">Expression régulière</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Motif formel décrivant un ensemble de chaînes pour rechercher ou filtrer du texte, avec des métacaractères dépendant du moteur utilisé.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> regex · regexp</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres/" title="Utilisation d’une distribution GNU/Linux — Module 06 — Recherches et expressions régulières">GNU/Linux · M06 · Recherches et regex</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ext4" data-glossary-card data-term="ext4" data-full-name="Fourth Extended File System" data-aliases data-keywords="filesystem | journalisation" data-definition="Système de fichiers Linux journalisé, courant sous Debian, prenant en charge les permissions Unix et de grands volumes." data-courses="debian" data-modules="d09" data-letter="E" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="302" aria-labelledby="ext4-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ext4-titre"><a href="#ext4" class="tssr-glossary-card__anchor" aria-label="ext4">ext4</a></h2>
    <p class="tssr-glossary-card__full-name">Fourth Extended File System</p>
  </header>
  <p class="tssr-glossary-card__definition">Système de fichiers Linux journalisé, courant sous Debian, prenant en charge les permissions Unix et de grands volumes.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fat32" data-glossary-card data-term="FAT32" data-full-name="File Allocation Table 32" data-aliases data-keywords="formatage | compatibilité" data-definition="Système de fichiers largement compatible mais limité notamment à des fichiers de 4 Gio, souvent utilisé sur des supports amovibles ou EFI." data-courses="windows debian" data-modules="w04 d02" data-letter="F" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="102" aria-labelledby="fat32-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fat32-titre"><a href="#fat32" class="tssr-glossary-card__anchor" aria-label="FAT32">FAT32</a></h2>
    <p class="tssr-glossary-card__full-name">File Allocation Table 32</p>
  </header>
  <p class="tssr-glossary-card__definition">Système de fichiers largement compatible mais limité notamment à des fichiers de 4 Gio, souvent utilisé sur des supports amovibles ou EFI.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 02 — Installation d’une distribution Debian">Debian · M02 · Installation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fdisk" data-glossary-card data-term="fdisk" data-full-name data-aliases data-keywords="partitionnement | MBR | GPT" data-definition="Outil en ligne de commande pour consulter et modifier les tables de partitions ; toute écriture doit suivre une vérification du bon disque." data-courses="debian" data-modules="d07" data-letter="F" data-course-sort="administration debian gnu/linux" data-module-sort="037" data-source-order="303" aria-labelledby="fdisk-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fdisk-titre"><a href="#fdisk" class="tssr-glossary-card__anchor" aria-label="fdisk">fdisk</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Outil en ligne de commande pour consulter et modifier les tables de partitions ; toute écriture doit suivre une vérification du bon disque.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage/" title="Administration Debian GNU/Linux — Module 07 — Gestion des espaces de stockage">Debian · M07 · Stockage</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="feuille-de-calcul" data-glossary-card data-term="Feuille de calcul" data-full-name data-aliases="worksheet" data-keywords="Excel" data-definition="Page quadrillée d’un classeur Excel composée de cellules organisées en lignes et colonnes pour saisir et traiter des données." data-courses="m365" data-modules="m03" data-letter="F" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="181" aria-labelledby="feuille-de-calcul-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="feuille-de-calcul-titre"><a href="#feuille-de-calcul" class="tssr-glossary-card__anchor" aria-label="Feuille de calcul">Feuille de calcul</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Page quadrillée d’un classeur Excel composée de cellules organisées en lignes et colonnes pour saisir et traiter des données.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> worksheet</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fichier-cache-linux" data-glossary-card data-term="Fichier caché Linux" data-full-name data-aliases="dotfile" data-keywords="ls -a | configuration" data-definition="Fichier dont le nom commence par un point ; les commandes d’affichage ordinaires peuvent l’omettre sans l’option adaptée." data-courses="linux" data-modules="l04" data-letter="F" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="227" aria-labelledby="fichier-cache-linux-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fichier-cache-linux-titre"><a href="#fichier-cache-linux" class="tssr-glossary-card__anchor" aria-label="Fichier caché Linux">Fichier caché Linux</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier dont le nom commence par un point ; les commandes d’affichage ordinaires peuvent l’omettre sans l’option adaptée.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> dotfile</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="filtre-excel" data-glossary-card data-term="Filtre Excel" data-full-name data-aliases data-keywords="tri | tableau" data-definition="Fonction qui masque temporairement les lignes ne respectant pas des critères, sans supprimer ni modifier les données sources." data-courses="m365" data-modules="m03" data-letter="F" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="182" aria-labelledby="filtre-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="filtre-excel-titre"><a href="#filtre-excel" class="tssr-glossary-card__anchor" aria-label="Filtre Excel">Filtre Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fonction qui masque temporairement les lignes ne respectant pas des critères, sans supprimer ni modifier les données sources.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="find" data-glossary-card data-term="find" data-full-name data-aliases data-keywords="recherche de fichiers | -name" data-definition="Commande qui parcourt une arborescence et sélectionne des fichiers selon nom, type, taille, date, droits ou autres critères." data-courses="linux debian" data-modules="l06 d12" data-letter="F" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="028" data-source-order="228" aria-labelledby="find-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="find-titre"><a href="#find" class="tssr-glossary-card__anchor" aria-label="find">find</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui parcourt une arborescence et sélectionne des fichiers selon nom, type, taille, date, droits ou autres critères.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres/" title="Utilisation d’une distribution GNU/Linux — Module 06 — Recherches et expressions régulières">GNU/Linux · M06 · Recherches et regex</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="findmnt" data-glossary-card data-term="findmnt" data-full-name data-aliases data-keywords="montage | fstab" data-definition="Commande qui affiche les montages sous forme structurée et permet de vérifier la source, la cible, le type et les options d’un système de fichiers." data-courses="debian" data-modules="d08 d09" data-letter="F" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="304" aria-labelledby="findmnt-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="findmnt-titre"><a href="#findmnt" class="tssr-glossary-card__anchor" aria-label="findmnt">findmnt</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui affiche les montages sous forme structurée et permet de vérifier la source, la cible, le type et les options d’un système de fichiers.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fonction-excel" data-glossary-card data-term="Fonction Excel" data-full-name data-aliases data-keywords="formule | arguments" data-definition="Formule prédéfinie qui calcule un résultat à partir d’arguments, par exemple SOMME, MOYENNE ou SI." data-courses="m365" data-modules="m03" data-letter="F" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="183" aria-labelledby="fonction-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fonction-excel-titre"><a href="#fonction-excel" class="tssr-glossary-card__anchor" aria-label="Fonction Excel">Fonction Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Formule prédéfinie qui calcule un résultat à partir d’arguments, par exemple SOMME, MOYENNE ou SI.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fonction-itil" data-glossary-card data-term="Fonction ITIL" data-full-name data-aliases data-keywords="organisation | processus" data-definition="Équipe ou groupe de personnes et outils spécialisés qui réalise durablement un type d’activité, comme le centre de services." data-courses="itil" data-modules="i02" data-letter="F" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="381" aria-labelledby="fonction-itil-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fonction-itil-titre"><a href="#fonction-itil" class="tssr-glossary-card__anchor" aria-label="Fonction ITIL">Fonction ITIL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Équipe ou groupe de personnes et outils spécialisés qui réalise durablement un type d’activité, comme le centre de services.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="format-table" data-glossary-card data-term="Format-Table" data-full-name data-aliases="ft" data-keywords="PowerShell | formatage" data-definition="Cmdlet PowerShell de mise en forme qui présente des objets en tableau pour l’affichage ; son résultat n’est pas destiné au traitement en aval." data-courses="windows" data-modules="w11" data-letter="F" data-course-sort="systemes clients microsoft" data-module-sort="016" data-source-order="103" aria-labelledby="format-table-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="format-table-titre"><a href="#format-table" class="tssr-glossary-card__anchor" aria-label="Format-Table">Format-Table</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Cmdlet PowerShell de mise en forme qui présente des objets en tableau pour l’affichage ; son résultat n’est pas destiné au traitement en aval.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> ft</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="formule-excel" data-glossary-card data-term="Formule Excel" data-full-name data-aliases data-keywords="calcul | cellule" data-definition="Expression commençant par = qui combine valeurs, références, opérateurs et fonctions afin de calculer dynamiquement un résultat." data-courses="m365" data-modules="m03" data-letter="F" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="184" aria-labelledby="formule-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="formule-excel-titre"><a href="#formule-excel" class="tssr-glossary-card__anchor" aria-label="Formule Excel">Formule Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Expression commençant par = qui combine valeurs, références, opérateurs et fonctions afin de calculer dynamiquement un résultat.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fournisseur-de-services" data-glossary-card data-term="Fournisseur de services" data-full-name data-aliases="service provider" data-keywords="ITIL | service" data-definition="Organisation interne ou externe qui mobilise personnes, processus, technologies et partenaires pour fournir des services à des clients." data-courses="itil" data-modules="i02" data-letter="F" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="382" aria-labelledby="fournisseur-de-services-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fournisseur-de-services-titre"><a href="#fournisseur-de-services" class="tssr-glossary-card__anchor" aria-label="Fournisseur de services">Fournisseur de services</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Organisation interne ou externe qui mobilise personnes, processus, technologies et partenaires pour fournir des services à des clients.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> service provider</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fqdn" data-glossary-card data-term="FQDN" data-full-name="Fully Qualified Domain Name" data-aliases="nom de domaine pleinement qualifié" data-keywords="hostname | DNS" data-definition="Nom DNS complet d’une machine comprenant son nom d’hôte et son domaine, par exemple srv01.exemple.local." data-courses="debian glpi" data-modules="d05 g02" data-letter="F" data-course-sort="administration debian gnu/linux" data-module-sort="035" data-source-order="306" aria-labelledby="fqdn-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fqdn-titre"><a href="#fqdn" class="tssr-glossary-card__anchor" aria-label="FQDN">FQDN</a></h2>
    <p class="tssr-glossary-card__full-name">Fully Qualified Domain Name</p>
  </header>
  <p class="tssr-glossary-card__definition">Nom DNS complet d’une machine comprenant son nom d’hôte et son domaine, par exemple srv01.exemple.local.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> nom de domaine pleinement qualifié</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fsck" data-glossary-card data-term="fsck" data-full-name="File System Consistency Check" data-aliases data-keywords="réparation | filesystem" data-definition="Famille d’outils qui vérifie et répare un système de fichiers hors ligne lorsque son état le nécessite." data-courses="debian" data-modules="d04 d09" data-letter="F" data-course-sort="administration debian gnu/linux" data-module-sort="034" data-source-order="305" aria-labelledby="fsck-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fsck-titre"><a href="#fsck" class="tssr-glossary-card__anchor" aria-label="fsck">fsck</a></h2>
    <p class="tssr-glossary-card__full-name">File System Consistency Check</p>
  </header>
  <p class="tssr-glossary-card__definition">Famille d’outils qui vérifie et répare un système de fichiers hors ligne lorsque son état le nécessite.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance/" title="Administration Debian GNU/Linux — Module 04 — Debian en mode maintenance">Debian · M04 · Mode maintenance</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="fusioninventory" data-glossary-card data-term="FusionInventory" data-full-name data-aliases data-keywords="inventaire historique | agent" data-definition="Ancien écosystème d’agents et plug-in utilisé dans le laboratoire GLPI 9.5 ; les versions GLPI récentes privilégient l’inventaire natif et GLPI Agent." data-courses="glpi" data-modules="g06" data-letter="F" data-course-sort="administration glpi" data-module-sort="057" data-source-order="443" aria-labelledby="fusioninventory-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="fusioninventory-titre"><a href="#fusioninventory" class="tssr-glossary-card__anchor" aria-label="FusionInventory">FusionInventory</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ancien écosystème d’agents et plug-in utilisé dans le laboratoire GLPI 9.5 ; les versions GLPI récentes privilégient l’inventaire natif et GLPI Agent.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gabarit-glpi" data-glossary-card data-term="Gabarit GLPI" data-full-name data-aliases="template GLPI" data-keywords="standardisation" data-definition="Modèle prérempli qui standardise la création d’un objet ou ticket avec des valeurs, champs obligatoires, masqués ou prédéfinis." data-courses="glpi" data-modules="g03 g04" data-letter="G" data-course-sort="administration glpi" data-module-sort="054" data-source-order="444" aria-labelledby="gabarit-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gabarit-glpi-titre"><a href="#gabarit-glpi" class="tssr-glossary-card__anchor" aria-label="Gabarit GLPI">Gabarit GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Modèle prérempli qui standardise la création d’un objet ou ticket avec des valeurs, champs obligatoires, masqués ou prédéfinis.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> template GLPI</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="garantie-de-service" data-glossary-card data-term="Garantie de service" data-full-name data-aliases="warranty" data-keywords="ITIL | fit for use" data-definition="Assurance qu’un service sera disponible, capacitaire, continu et sécurisé selon les niveaux convenus ; elle répond à « dans quelles conditions »." data-courses="itil" data-modules="i02 i03" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="383" aria-labelledby="garantie-de-service-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="garantie-de-service-titre"><a href="#garantie-de-service" class="tssr-glossary-card__anchor" aria-label="Garantie de service">Garantie de service</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Assurance qu’un service sera disponible, capacitaire, continu et sécurisé selon les niveaux convenus ; elle répond à « dans quelles conditions ».</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> warranty</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestion-de-la-capacite" data-glossary-card data-term="Gestion de la capacité" data-full-name data-aliases="capacity management" data-keywords="charge | performance" data-definition="Pratique qui aligne ressources et performances sur les besoins actuels et futurs à un coût justifié." data-courses="itil" data-modules="i03" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="384" aria-labelledby="gestion-de-la-capacite-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestion-de-la-capacite-titre"><a href="#gestion-de-la-capacite" class="tssr-glossary-card__anchor" aria-label="Gestion de la capacité">Gestion de la capacité</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Pratique qui aligne ressources et performances sur les besoins actuels et futurs à un coût justifié.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> capacity management</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestion-de-la-continuite" data-glossary-card data-term="Gestion de la continuité" data-full-name data-aliases="IT service continuity management" data-keywords="PRA | BIA" data-definition="Préparation de la reprise des services après une interruption grave selon les besoins métier, risques et objectifs définis." data-courses="itil" data-modules="i03" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="385" aria-labelledby="gestion-de-la-continuite-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestion-de-la-continuite-titre"><a href="#gestion-de-la-continuite" class="tssr-glossary-card__anchor" aria-label="Gestion de la continuité">Gestion de la continuité</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Préparation de la reprise des services après une interruption grave selon les besoins métier, risques et objectifs définis.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> IT service continuity management</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestion-des-incidents" data-glossary-card data-term="Gestion des incidents" data-full-name data-aliases="incident management" data-keywords="rétablissement | support" data-definition="Processus visant à restaurer le service normal aussi vite que possible et limiter l’impact sur l’activité." data-courses="itil" data-modules="i06 i09" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="386" aria-labelledby="gestion-des-incidents-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestion-des-incidents-titre"><a href="#gestion-des-incidents" class="tssr-glossary-card__anchor" aria-label="Gestion des incidents">Gestion des incidents</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Processus visant à restaurer le service normal aussi vite que possible et limiter l’impact sur l’activité.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> incident management</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestion-des-problemes" data-glossary-card data-term="Gestion des problèmes" data-full-name data-aliases="problem management" data-keywords="cause racine" data-definition="Processus qui recherche les causes des incidents, documente les erreurs connues et réduit leur probabilité ou leur impact." data-courses="itil" data-modules="i06" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="387" aria-labelledby="gestion-des-problemes-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestion-des-problemes-titre"><a href="#gestion-des-problemes" class="tssr-glossary-card__anchor" aria-label="Gestion des problèmes">Gestion des problèmes</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Processus qui recherche les causes des incidents, documente les erreurs connues et réduit leur probabilité ou leur impact.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> problem management</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestion-des-services-informatiques" data-glossary-card data-term="Gestion des services informatiques" data-full-name data-aliases="ITSM | IT Service Management" data-keywords="service | valeur" data-definition="Capacités organisationnelles utilisées pour créer de la valeur avec des services informatiques répondant aux besoins des clients." data-courses="itil glpi" data-modules="i01 i02 g01" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="043" data-source-order="388" aria-labelledby="gestion-des-services-informatiques-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestion-des-services-informatiques-titre"><a href="#gestion-des-services-informatiques" class="tssr-glossary-card__anchor" aria-label="Gestion des services informatiques">Gestion des services informatiques</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Capacités organisationnelles utilisées pour créer de la valeur avec des services informatiques répondant aux besoins des clients.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> ITSM · IT Service Management</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-01-presentation-d-itil-et-historique/" title="Sensibilisation ITIL et gestion de parc — Module 01 — Présentation d’ITIL et historique">ITIL · M01 · Présentation ITIL</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestionnaire-de-peripheriques" data-glossary-card data-term="Gestionnaire de périphériques" data-full-name data-aliases="Device Manager | devmgmt.msc" data-keywords="pilote" data-definition="Console Windows qui inventorie le matériel, affiche l’état des périphériques et permet d’installer, mettre à jour ou restaurer des pilotes." data-courses="windows" data-modules="w09" data-letter="G" data-course-sort="systemes clients microsoft" data-module-sort="014" data-source-order="104" aria-labelledby="gestionnaire-de-peripheriques-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestionnaire-de-peripheriques-titre"><a href="#gestionnaire-de-peripheriques" class="tssr-glossary-card__anchor" aria-label="Gestionnaire de périphériques">Gestionnaire de périphériques</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Console Windows qui inventorie le matériel, affiche l’état des périphériques et permet d’installer, mettre à jour ou restaurer des pilotes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Device Manager · devmgmt.msc</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-09-les-pilotes-et-les-imprimantes/" title="Systèmes clients Microsoft — Module 09 — Les pilotes et les imprimantes">Windows · M09 · Pilotes et imprimantes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestionnaire-de-processus" data-glossary-card data-term="Gestionnaire de processus" data-full-name data-aliases="process owner" data-keywords="ITIL | KPI" data-definition="Rôle responsable de la conception, des objectifs, indicateurs, ressources et amélioration d’un processus de gestion des services." data-courses="itil" data-modules="i02" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="389" aria-labelledby="gestionnaire-de-processus-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestionnaire-de-processus-titre"><a href="#gestionnaire-de-processus" class="tssr-glossary-card__anchor" aria-label="Gestionnaire de processus">Gestionnaire de processus</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Rôle responsable de la conception, des objectifs, indicateurs, ressources et amélioration d’un processus de gestion des services.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> process owner</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestionnaire-de-service" data-glossary-card data-term="Gestionnaire de service" data-full-name data-aliases="service owner" data-keywords="SLA | client" data-definition="Rôle responsable du cycle de vie, de la performance et de l’amélioration d’un service donné auprès des parties prenantes." data-courses="itil" data-modules="i02" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="390" aria-labelledby="gestionnaire-de-service-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestionnaire-de-service-titre"><a href="#gestionnaire-de-service" class="tssr-glossary-card__anchor" aria-label="Gestionnaire de service">Gestionnaire de service</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Rôle responsable du cycle de vie, de la performance et de l’amélioration d’un service donné auprès des parties prenantes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> service owner</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gestionnaire-des-taches" data-glossary-card data-term="Gestionnaire des tâches" data-full-name data-aliases="Task Manager" data-keywords="processus | performance" data-definition="Outil Windows qui affiche applications, processus, performances, utilisateurs et programmes de démarrage, et permet certaines actions de diagnostic." data-courses="windows" data-modules="w10" data-letter="G" data-course-sort="systemes clients microsoft" data-module-sort="015" data-source-order="105" aria-labelledby="gestionnaire-des-taches-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gestionnaire-des-taches-titre"><a href="#gestionnaire-des-taches" class="tssr-glossary-card__anchor" aria-label="Gestionnaire des tâches">Gestionnaire des tâches</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Outil Windows qui affiche applications, processus, performances, utilisateurs et programmes de démarrage, et permet certaines actions de diagnostic.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Task Manager</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="get-help" data-glossary-card data-term="Get-Help" data-full-name data-aliases data-keywords="PowerShell | aide" data-definition="Cmdlet PowerShell qui affiche l’aide d’une commande, ses paramètres, des exemples et éventuellement la documentation en ligne." data-courses="windows" data-modules="w03 w11" data-letter="G" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="106" aria-labelledby="get-help-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="get-help-titre"><a href="#get-help" class="tssr-glossary-card__anchor" aria-label="Get-Help">Get-Help</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Cmdlet PowerShell qui affiche l’aide d’une commande, ses paramètres, des exemples et éventuellement la documentation en ligne.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="get-member" data-glossary-card data-term="Get-Member" data-full-name data-aliases="gm" data-keywords="PowerShell | objet" data-definition="Cmdlet PowerShell qui révèle le type, les propriétés et les méthodes des objets reçus dans le pipeline." data-courses="windows" data-modules="w03 w11" data-letter="G" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="107" aria-labelledby="get-member-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="get-member-titre"><a href="#get-member" class="tssr-glossary-card__anchor" aria-label="Get-Member">Get-Member</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Cmdlet PowerShell qui révèle le type, les propriétés et les méthodes des objets reçus dans le pipeline.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> gm</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gid" data-glossary-card data-term="GID" data-full-name="Group Identifier" data-aliases="identifiant de groupe" data-keywords="/etc/group" data-definition="Numéro qui identifie un groupe Unix ; chaque compte possède un GID principal et peut appartenir à des groupes supplémentaires." data-courses="linux debian" data-modules="l03 d10" data-letter="G" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="307" aria-labelledby="gid-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gid-titre"><a href="#gid" class="tssr-glossary-card__anchor" aria-label="GID">GID</a></h2>
    <p class="tssr-glossary-card__full-name">Group Identifier</p>
  </header>
  <p class="tssr-glossary-card__definition">Numéro qui identifie un groupe Unix ; chaque compte possède un GID principal et peut appartenir à des groupes supplémentaires.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> identifiant de groupe</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gio" data-glossary-card data-term="GIO" data-full-name="Gibioctet" data-aliases="Gio | GiB" data-keywords="capacité | unité binaire" data-definition="Unité binaire de capacité valant 1 024 Mio, soit 2 puissance 30 octets, distincte du gigaoctet décimal." data-courses="reseaux windows" data-modules="r02 w04" data-letter="G" data-course-sort="bases des reseaux" data-module-sort="001" data-source-order="108" aria-labelledby="gio-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gio-titre"><a href="#gio" class="tssr-glossary-card__anchor" aria-label="GIO">GIO</a></h2>
    <p class="tssr-glossary-card__full-name">Gibioctet</p>
  </header>
  <p class="tssr-glossary-card__definition">Unité binaire de capacité valant 1 024 Mio, soit 2 puissance 30 octets, distincte du gigaoctet décimal.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Gio · GiB</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-02-les-unites-informatiques/" title="Bases des réseaux — Module 02 — Les unités informatiques">Réseaux · M02 · Unités informatiques</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="globbing" data-glossary-card data-term="Globbing" data-full-name data-aliases="développement de chemins" data-keywords="métacaractère | wildcard" data-definition="Développement par le shell de motifs comme *, ? ou [abc] en noms de fichiers existants avant l’exécution de la commande." data-courses="linux" data-modules="l04" data-letter="G" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="229" aria-labelledby="globbing-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="globbing-titre"><a href="#globbing" class="tssr-glossary-card__anchor" aria-label="Globbing">Globbing</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Développement par le shell de motifs comme *, ? ou [abc] en noms de fichiers existants avant l’exécution de la commande.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> développement de chemins</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="glpi" data-glossary-card data-term="GLPI" data-full-name="Gestionnaire Libre de Parc Informatique" data-aliases data-keywords="ITSM | ITAM | ticket" data-definition="Application libre de gestion de services et de parc qui centralise inventaire, assistance, contrats, utilisateurs, règles et historique." data-courses="itil glpi" data-modules="i05 i09 g01" data-letter="G" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="047" data-source-order="445" aria-labelledby="glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="glpi-titre"><a href="#glpi" class="tssr-glossary-card__anchor" aria-label="GLPI">GLPI</a></h2>
    <p class="tssr-glossary-card__full-name">Gestionnaire Libre de Parc Informatique</p>
  </header>
  <p class="tssr-glossary-card__definition">Application libre de gestion de services et de parc qui centralise inventaire, assistance, contrats, utilisateurs, règles et historique.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-05-decouverte-de-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 05 — Découverte de GLPI">ITIL · M05 · Découverte de GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="glpi-agent" data-glossary-card data-term="GLPI Agent" data-full-name data-aliases data-keywords="inventaire natif | agent" data-definition="Agent d’inventaire maintenu pour les versions modernes de GLPI, capable de remonter des informations matérielles et logicielles vers le serveur." data-courses="glpi" data-modules="g06" data-letter="G" data-course-sort="administration glpi" data-module-sort="057" data-source-order="446" aria-labelledby="glpi-agent-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="glpi-agent-titre"><a href="#glpi-agent" class="tssr-glossary-card__anchor" aria-label="GLPI Agent">GLPI Agent</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Agent d’inventaire maintenu pour les versions modernes de GLPI, capable de remonter des informations matérielles et logicielles vers le serveur.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gnu-linux" data-glossary-card data-term="GNU/Linux" data-full-name data-aliases="Linux" data-keywords="GNU | noyau" data-definition="Système combinant le noyau Linux avec de nombreux outils et bibliothèques du projet GNU pour former un environnement complet." data-courses="linux debian" data-modules="l03 d01" data-letter="G" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="230" aria-labelledby="gnu-linux-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gnu-linux-titre"><a href="#gnu-linux" class="tssr-glossary-card__anchor" aria-label="GNU/Linux">GNU/Linux</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Système combinant le noyau Linux avec de nombreux outils et bibliothèques du projet GNU pour former un environnement complet.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Linux</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux/" title="Administration Debian GNU/Linux — Module 01 — Présentation de Debian GNU/Linux">Debian · M01 · Présentation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gpo-lgpo" data-glossary-card data-term="GPO / LGPO" data-full-name="Group Policy Object / Local Group Policy Object" data-aliases="stratégie de groupe | stratégie locale" data-keywords="gpedit.msc" data-definition="Ensemble de paramètres administratifs appliqués aux utilisateurs ou ordinateurs ; LGPO désigne la stratégie enregistrée localement sur un poste." data-courses="windows glpi" data-modules="w13 g02" data-letter="G" data-course-sort="systemes clients microsoft" data-module-sort="018" data-source-order="109" aria-labelledby="gpo-lgpo-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gpo-lgpo-titre"><a href="#gpo-lgpo" class="tssr-glossary-card__anchor" aria-label="GPO / LGPO">GPO / LGPO</a></h2>
    <p class="tssr-glossary-card__full-name">Group Policy Object / Local Group Policy Object</p>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble de paramètres administratifs appliqués aux utilisateurs ou ordinateurs ; LGPO désigne la stratégie enregistrée localement sur un poste.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> stratégie de groupe · stratégie locale</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-13-les-strategies-de-groupe-local/" title="Systèmes clients Microsoft — Module 13 — Les stratégies de groupe local">Windows · M13 · Stratégies de groupe</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gpt" data-glossary-card data-term="GPT" data-full-name="GUID Partition Table" data-aliases="table de partition GUID" data-keywords="UEFI | partition" data-definition="Schéma moderne de partitionnement associé à UEFI, prenant en charge de grands disques et de nombreuses partitions avec informations redondantes." data-courses="windows debian" data-modules="w04 d02" data-letter="G" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="110" aria-labelledby="gpt-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gpt-titre"><a href="#gpt" class="tssr-glossary-card__anchor" aria-label="GPT">GPT</a></h2>
    <p class="tssr-glossary-card__full-name">GUID Partition Table</p>
  </header>
  <p class="tssr-glossary-card__definition">Schéma moderne de partitionnement associé à UEFI, prenant en charge de grands disques et de nombreuses partitions avec informations redondantes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> table de partition GUID</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 02 — Installation d’une distribution Debian">Debian · M02 · Installation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="grep" data-glossary-card data-term="grep" data-full-name="Global Regular Expression Print" data-aliases data-keywords="filtrage texte | regex" data-definition="Commande qui sélectionne les lignes correspondant à un motif littéral ou une expression régulière dans des fichiers ou un flux." data-courses="linux" data-modules="l06" data-letter="G" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="028" data-source-order="231" aria-labelledby="grep-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="grep-titre"><a href="#grep" class="tssr-glossary-card__anchor" aria-label="grep">grep</a></h2>
    <p class="tssr-glossary-card__full-name">Global Regular Expression Print</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui sélectionne les lignes correspondant à un motif littéral ou une expression régulière dans des fichiers ou un flux.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres/" title="Utilisation d’une distribution GNU/Linux — Module 06 — Recherches et expressions régulières">GNU/Linux · M06 · Recherches et regex</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="groupadd" data-glossary-card data-term="groupadd" data-full-name data-aliases data-keywords="groupe | GID" data-definition="Commande bas niveau qui crée un groupe local en lui attribuant un nom et éventuellement un GID choisi." data-courses="debian" data-modules="d10" data-letter="G" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="309" aria-labelledby="groupadd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="groupadd-titre"><a href="#groupadd" class="tssr-glossary-card__anchor" aria-label="groupadd">groupadd</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande bas niveau qui crée un groupe local en lui attribuant un nom et éventuellement un GID choisi.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="groupe-de-techniciens" data-glossary-card data-term="Groupe de techniciens" data-full-name data-aliases data-keywords="affectation | support" data-definition="Ensemble d’utilisateurs GLPI auquel des tickets peuvent être affectés pour partager une file, des responsabilités et des notifications." data-courses="glpi" data-modules="g02 g04" data-letter="G" data-course-sort="administration glpi" data-module-sort="053" data-source-order="447" aria-labelledby="groupe-de-techniciens-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="groupe-de-techniciens-titre"><a href="#groupe-de-techniciens" class="tssr-glossary-card__anchor" aria-label="Groupe de techniciens">Groupe de techniciens</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble d’utilisateurs GLPI auquel des tickets peuvent être affectés pour partager une file, des responsabilités et des notifications.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="groupe-local" data-glossary-card data-term="Groupe local" data-full-name data-aliases data-keywords="utilisateurs | autorisation" data-definition="Objet Windows regroupant des comptes afin de leur attribuer collectivement des droits ou permissions sur une machine." data-courses="windows msp" data-modules="w05 s01" data-letter="G" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="111" aria-labelledby="groupe-local-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="groupe-local-titre"><a href="#groupe-local" class="tssr-glossary-card__anchor" aria-label="Groupe local">Groupe local</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Objet Windows regroupant des comptes afin de leur attribuer collectivement des droits ou permissions sur une machine.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="grub" data-glossary-card data-term="GRUB" data-full-name="GNU GRand Unified Bootloader" data-aliases data-keywords="bootloader | démarrage" data-definition="Chargeur d’amorçage courant sous Debian qui propose des noyaux et options puis charge le noyau avec son initramfs." data-courses="debian" data-modules="d03 d04" data-letter="G" data-course-sort="administration debian gnu/linux" data-module-sort="033" data-source-order="308" aria-labelledby="grub-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="grub-titre"><a href="#grub" class="tssr-glossary-card__anchor" aria-label="GRUB">GRUB</a></h2>
    <p class="tssr-glossary-card__full-name">GNU GRand Unified Bootloader</p>
  </header>
  <p class="tssr-glossary-card__definition">Chargeur d’amorçage courant sous Debian qui propose des noyaux et options puis charge le noyau avec son initramfs.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 03 — Démarrage d’une distribution Debian">Debian · M03 · Démarrage Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance/" title="Administration Debian GNU/Linux — Module 04 — Debian en mode maintenance">Debian · M04 · Mode maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gua" data-glossary-card data-term="GUA" data-full-name="Global Unicast Address" data-aliases="adresse unicast globale" data-keywords="IPv6 | 2000::/3" data-definition="Adresse IPv6 unicast globalement routable, généralement issue du préfixe 2000::/3 et utilisable au-delà du lien local." data-courses="reseaux" data-modules="r06" data-letter="G" data-course-sort="bases des reseaux" data-module-sort="005" data-source-order="34" aria-labelledby="gua-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gua-titre"><a href="#gua" class="tssr-glossary-card__anchor" aria-label="GUA">GUA</a></h2>
    <p class="tssr-glossary-card__full-name">Global Unicast Address</p>
  </header>
  <p class="tssr-glossary-card__definition">Adresse IPv6 unicast globalement routable, généralement issue du préfixe 2000::/3 et utilisable au-delà du lien local.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> adresse unicast globale</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gui" data-glossary-card data-term="GUI" data-full-name="Graphical User Interface" data-aliases="interface graphique" data-keywords="Windows" data-definition="Interface graphique fondée sur fenêtres, menus et contrôles visuels, par opposition à une interface en ligne de commande." data-courses="windows" data-modules="w03" data-letter="G" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="112" aria-labelledby="gui-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gui-titre"><a href="#gui" class="tssr-glossary-card__anchor" aria-label="GUI">GUI</a></h2>
    <p class="tssr-glossary-card__full-name">Graphical User Interface</p>
  </header>
  <p class="tssr-glossary-card__definition">Interface graphique fondée sur fenêtres, menus et contrôles visuels, par opposition à une interface en ligne de commande.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> interface graphique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="gzip" data-glossary-card data-term="gzip" data-full-name data-aliases data-keywords=".gz | compression" data-definition="Format et outil de compression couramment associé à tar ; il compresse un flux ou un fichier mais ne crée pas seul une archive de plusieurs fichiers." data-courses="linux" data-modules="l08" data-letter="G" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="232" aria-labelledby="gzip-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="gzip-titre"><a href="#gzip" class="tssr-glossary-card__anchor" aria-label="gzip">gzip</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Format et outil de compression couramment associé à tar ; il compresse un flux ou un fichier mais ne crée pas seul une archive de plusieurs fichiers.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="habilitation-glpi" data-glossary-card data-term="Habilitation GLPI" data-full-name data-aliases data-keywords="profil | entité | droits" data-definition="Association d’un utilisateur à un profil dans une entité, éventuellement avec récursivité, qui détermine ses droits et sa portée d’action." data-courses="glpi" data-modules="g02" data-letter="H" data-course-sort="administration glpi" data-module-sort="053" data-source-order="448" aria-labelledby="habilitation-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="habilitation-glpi-titre"><a href="#habilitation-glpi" class="tssr-glossary-card__anchor" aria-label="Habilitation GLPI">Habilitation GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Association d’un utilisateur à un profil dans une entité, éventuellement avec récursivité, qui détermine ses droits et sa portée d’action.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="head" data-glossary-card data-term="head" data-full-name data-aliases data-keywords="lecture fichier | premières lignes" data-definition="Commande qui affiche le début d’un fichier ou d’un flux, dix lignes par défaut, avec une quantité réglable par option." data-courses="linux" data-modules="l05" data-letter="H" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="233" aria-labelledby="head-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="head-titre"><a href="#head" class="tssr-glossary-card__anchor" aria-label="head">head</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui affiche le début d’un fichier ou d’un flux, dix lignes par défaut, avec une quantité réglable par option.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="heritage-ntfs" data-glossary-card data-term="Héritage NTFS" data-full-name data-aliases="héritage des permissions" data-keywords="ACL | parent" data-definition="Propagation des ACE d’un dossier parent vers ses sous-dossiers et fichiers, sauf rupture ou conversion explicite de l’héritage." data-courses="windows" data-modules="w06" data-letter="H" data-course-sort="systemes clients microsoft" data-module-sort="011" data-source-order="113" aria-labelledby="heritage-ntfs-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="heritage-ntfs-titre"><a href="#heritage-ntfs" class="tssr-glossary-card__anchor" aria-label="Héritage NTFS">Héritage NTFS</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Propagation des ACE d’un dossier parent vers ses sous-dossiers et fichiers, sauf rupture ou conversion explicite de l’héritage.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> héritage des permissions</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="historique-glpi" data-glossary-card data-term="Historique GLPI" data-full-name data-aliases data-keywords="traçabilité | audit" data-definition="Journal des modifications apportées aux objets et tickets, utile pour retracer acteurs, dates, anciennes valeurs et actions." data-courses="glpi" data-modules="g03 g04" data-letter="H" data-course-sort="administration glpi" data-module-sort="054" data-source-order="449" aria-labelledby="historique-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="historique-glpi-titre"><a href="#historique-glpi" class="tssr-glossary-card__anchor" aria-label="Historique GLPI">Historique GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Journal des modifications apportées aux objets et tickets, utile pour retracer acteurs, dates, anciennes valeurs et actions.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="hostname" data-glossary-card data-term="Hostname" data-full-name data-aliases="nom d’hôte" data-keywords="machine | FQDN" data-definition="Nom court attribué à une machine pour l’identifier localement et construire éventuellement son FQDN dans le DNS." data-courses="debian" data-modules="d05" data-letter="H" data-course-sort="administration debian gnu/linux" data-module-sort="035" data-source-order="310" aria-labelledby="hostname-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="hostname-titre"><a href="#hostname" class="tssr-glossary-card__anchor" aria-label="Hostname">Hostname</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Nom court attribué à une machine pour l’identifier localement et construire éventuellement son FQDN dans le DNS.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> nom d’hôte</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="hote" data-glossary-card data-term="Hôte" data-full-name data-aliases="host" data-keywords="machine | nœud" data-definition="Équipement terminal possédant une configuration réseau et capable d’émettre ou recevoir des données, comme un poste, un serveur ou une imprimante." data-courses="reseaux" data-modules="r03 r04" data-letter="H" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="35" aria-labelledby="hote-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="hote-titre"><a href="#hote" class="tssr-glossary-card__anchor" aria-label="Hôte">Hôte</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Équipement terminal possédant une configuration réseau et capable d’émettre ou recevoir des données, comme un poste, un serveur ou une imprimante.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> host</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="hyperviseur" data-glossary-card data-term="Hyperviseur" data-full-name data-aliases data-keywords="virtualisation | VM" data-definition="Logiciel ou couche système qui crée et exécute des machines virtuelles en partageant processeur, mémoire, stockage et réseau physiques." data-courses="windows msp" data-modules="wadd s01" data-letter="H" data-course-sort="systemes clients microsoft" data-module-sort="019" data-source-order="114" aria-labelledby="hyperviseur-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="hyperviseur-titre"><a href="#hyperviseur" class="tssr-glossary-card__anchor" aria-label="Hyperviseur">Hyperviseur</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Logiciel ou couche système qui crée et exécute des machines virtuelles en partageant processeur, mémoire, stockage et réseau physiques.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="icmp" data-glossary-card data-term="ICMP" data-full-name="Internet Control Message Protocol" data-aliases data-keywords="ping | erreur réseau" data-definition="Protocole de contrôle IP utilisé pour signaler des erreurs et réaliser des diagnostics, notamment avec les messages Echo de ping." data-courses="reseaux" data-modules="r05 r06" data-letter="I" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="36" aria-labelledby="icmp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="icmp-titre"><a href="#icmp" class="tssr-glossary-card__anchor" aria-label="ICMP">ICMP</a></h2>
    <p class="tssr-glossary-card__full-name">Internet Control Message Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole de contrôle IP utilisé pour signaler des erreurs et réaliser des diagnostics, notamment avec les messages Echo de ping.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="commande-id" data-glossary-card data-term="id" data-full-name data-aliases data-keywords="UID | GID | groupes" data-definition="Commande qui affiche l’UID, le GID principal et les groupes actifs d’un utilisateur, utile pour vérifier son identité et ses droits." data-courses="linux debian" data-modules="l03 d10" data-letter="I" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="234" aria-labelledby="commande-id-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="commande-id-titre"><a href="#commande-id" class="tssr-glossary-card__anchor" aria-label="id">id</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui affiche l’UID, le GID principal et les groupes actifs d’un utilisateur, utile pour vérifier son identité et ses droits.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="image-de-reference" data-glossary-card data-term="Image de référence" data-full-name data-aliases="master" data-keywords="Sysprep | WIM" data-definition="Installation Windows préparée, configurée et validée pour servir de source à la capture puis au déploiement sur d’autres postes." data-courses="windows" data-modules="w12" data-letter="I" data-course-sort="systemes clients microsoft" data-module-sort="017" data-source-order="115" aria-labelledby="image-de-reference-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="image-de-reference-titre"><a href="#image-de-reference" class="tssr-glossary-card__anchor" aria-label="Image de référence">Image de référence</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Installation Windows préparée, configurée et validée pour servir de source à la capture puis au déploiement sur d’autres postes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> master</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image/" title="Systèmes clients Microsoft — Module 12 — Introduction à la capture et au déploiement d’image">Windows · M12 · Capture et déploiement</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="image-iso" data-glossary-card data-term="Image ISO" data-full-name data-aliases="ISO" data-keywords="installation | média" data-definition="Fichier représentant le contenu d’un disque optique, utilisé comme support virtuel pour installer un système ou démarrer un outil." data-courses="windows debian msp" data-modules="w02 d02 s01" data-letter="I" data-course-sort="systemes clients microsoft" data-module-sort="007" data-source-order="116" aria-labelledby="image-iso-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="image-iso-titre"><a href="#image-iso" class="tssr-glossary-card__anchor" aria-label="Image ISO">Image ISO</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier représentant le contenu d’un disque optique, utilisé comme support virtuel pour installer un système ou démarrer un outil.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> ISO</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-02-installation-du-systeme-d-exploitation-windows-10/" title="Systèmes clients Microsoft — Module 02 — Installation du système d’exploitation Windows 10">Windows · M02 · Installation Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 02 — Installation d’une distribution Debian">Debian · M02 · Installation Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="imap" data-glossary-card data-term="IMAP" data-full-name="Internet Message Access Protocol" data-aliases data-keywords="courriel | synchronisation" data-definition="Protocole qui synchronise les messages et dossiers conservés sur un serveur de messagerie entre plusieurs clients." data-courses="m365" data-modules="m04" data-letter="I" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="023" data-source-order="185" aria-labelledby="imap-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="imap-titre"><a href="#imap" class="tssr-glossary-card__anchor" aria-label="IMAP">IMAP</a></h2>
    <p class="tssr-glossary-card__full-name">Internet Message Access Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole qui synchronise les messages et dossiers conservés sur un serveur de messagerie entre plusieurs clients.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-04-exploiter-outlook-et-savoir-le-depanner/" title="Microsoft 365 — Outils collaboratifs — Module 04 — Exploiter Outlook et savoir le dépanner">Microsoft 365 · M04 · Outlook</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="impact" data-glossary-card data-term="Impact" data-full-name data-aliases data-keywords="priorité | urgence" data-definition="Mesure de l’étendue des conséquences d’un incident ou changement sur les utilisateurs, services et activités métier." data-courses="itil glpi" data-modules="i04 i06 g04" data-letter="I" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="391" aria-labelledby="impact-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="impact-titre"><a href="#impact" class="tssr-glossary-card__anchor" aria-label="Impact">Impact</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mesure de l’étendue des conséquences d’un incident ou changement sur les utilisateurs, services et activités métier.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="imprimante-logique" data-glossary-card data-term="Imprimante logique" data-full-name data-aliases data-keywords="pilote | port d’impression" data-definition="Objet logiciel Windows qui associe un pilote, un port et des paramètres à un périphérique d’impression local ou réseau." data-courses="windows msp" data-modules="w09 s01" data-letter="I" data-course-sort="systemes clients microsoft" data-module-sort="014" data-source-order="117" aria-labelledby="imprimante-logique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="imprimante-logique-titre"><a href="#imprimante-logique" class="tssr-glossary-card__anchor" aria-label="Imprimante logique">Imprimante logique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Objet logiciel Windows qui associe un pilote, un port et des paramètres à un périphérique d’impression local ou réseau.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-09-les-pilotes-et-les-imprimantes/" title="Systèmes clients Microsoft — Module 09 — Les pilotes et les imprimantes">Windows · M09 · Pilotes et imprimantes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="incident" data-glossary-card data-term="Incident" data-full-name data-aliases data-keywords="rétablissement | ticket" data-definition="Interruption non planifiée d’un service, dégradation de sa qualité ou défaillance d’un composant susceptible de l’affecter." data-courses="itil glpi" data-modules="i06 i09 g04" data-letter="I" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="392" aria-labelledby="incident-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="incident-titre"><a href="#incident" class="tssr-glossary-card__anchor" aria-label="Incident">Incident</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Interruption non planifiée d’un service, dégradation de sa qualité ou défaillance d’un composant susceptible de l’affecter.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="incident-majeur" data-glossary-card data-term="Incident majeur" data-full-name data-aliases="major incident" data-keywords="crise | priorité" data-definition="Incident ayant un impact très élevé qui déclenche une procédure, une communication et une coordination renforcées." data-courses="itil" data-modules="i06" data-letter="I" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="393" aria-labelledby="incident-majeur-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="incident-majeur-titre"><a href="#incident-majeur" class="tssr-glossary-card__anchor" aria-label="Incident majeur">Incident majeur</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Incident ayant un impact très élevé qui déclenche une procédure, une communication et une coordination renforcées.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> major incident</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="index-sql" data-glossary-card data-term="Index SQL" data-full-name data-aliases data-keywords="performance | clé" data-definition="Structure auxiliaire qui accélère certaines recherches et tris sur une table au prix d’espace et de travail supplémentaire lors des écritures." data-courses="glpi" data-modules="g05" data-letter="I" data-course-sort="administration glpi" data-module-sort="056" data-source-order="451" aria-labelledby="index-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="index-sql-titre"><a href="#index-sql" class="tssr-glossary-card__anchor" aria-label="Index SQL">Index SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Structure auxiliaire qui accélère certaines recherches et tris sur une table au prix d’espace et de travail supplémentaire lors des écritures.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="initramfs" data-glossary-card data-term="initramfs" data-full-name="Initial RAM File System" data-aliases data-keywords="boot | noyau" data-definition="Système de fichiers temporaire chargé en mémoire au démarrage pour fournir pilotes et outils nécessaires avant de monter la racine réelle." data-courses="debian" data-modules="d03 d04" data-letter="I" data-course-sort="administration debian gnu/linux" data-module-sort="033" data-source-order="311" aria-labelledby="initramfs-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="initramfs-titre"><a href="#initramfs" class="tssr-glossary-card__anchor" aria-label="initramfs">initramfs</a></h2>
    <p class="tssr-glossary-card__full-name">Initial RAM File System</p>
  </header>
  <p class="tssr-glossary-card__definition">Système de fichiers temporaire chargé en mémoire au démarrage pour fournir pilotes et outils nécessaires avant de monter la racine réelle.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 03 — Démarrage d’une distribution Debian">Debian · M03 · Démarrage Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance/" title="Administration Debian GNU/Linux — Module 04 — Debian en mode maintenance">Debian · M04 · Mode maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="inner-join" data-glossary-card data-term="INNER JOIN" data-full-name data-aliases="jointure interne" data-keywords="SQL | relation" data-definition="Jointure SQL qui ne conserve que les combinaisons de lignes satisfaisant la condition de relation entre deux tables." data-courses="glpi" data-modules="g05" data-letter="I" data-course-sort="administration glpi" data-module-sort="056" data-source-order="450" aria-labelledby="inner-join-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="inner-join-titre"><a href="#inner-join" class="tssr-glossary-card__anchor" aria-label="INNER JOIN">INNER JOIN</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Jointure SQL qui ne conserve que les combinaisons de lignes satisfaisant la condition de relation entre deux tables.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> jointure interne</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="inode" data-glossary-card data-term="Inode" data-full-name data-aliases data-keywords="lien physique | métadonnées" data-definition="Structure d’un système de fichiers Unix contenant les métadonnées et pointeurs de données d’un objet, sans contenir son nom de répertoire." data-courses="linux debian" data-modules="l05 d09" data-letter="I" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="235" aria-labelledby="inode-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="inode-titre"><a href="#inode" class="tssr-glossary-card__anchor" aria-label="Inode">Inode</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Structure d’un système de fichiers Unix contenant les métadonnées et pointeurs de données d’un objet, sans contenir son nom de répertoire.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="instantane" data-glossary-card data-term="Instantané" data-full-name data-aliases="snapshot" data-keywords="VM | retour arrière" data-definition="État ponctuel d’une machine virtuelle permettant un retour rapide en laboratoire ; il ne remplace pas une sauvegarde indépendante." data-courses="windows msp" data-modules="wadd s01" data-letter="I" data-course-sort="systemes clients microsoft" data-module-sort="019" data-source-order="118" aria-labelledby="instantane-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="instantane-titre"><a href="#instantane" class="tssr-glossary-card__anchor" aria-label="Instantané">Instantané</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">État ponctuel d’une machine virtuelle permettant un retour rapide en laboratoire ; il ne remplace pas une sauvegarde indépendante.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> snapshot</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="interface-reseau" data-glossary-card data-term="Interface réseau" data-full-name data-aliases="NIC | carte réseau" data-keywords="adaptateur" data-definition="Point de connexion logique ou physique d’un équipement au réseau, identifié par une configuration IP et souvent une adresse MAC." data-courses="reseaux windows debian" data-modules="r04 w07 d05" data-letter="I" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="37" aria-labelledby="interface-reseau-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="interface-reseau-titre"><a href="#interface-reseau" class="tssr-glossary-card__anchor" aria-label="Interface réseau">Interface réseau</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Point de connexion logique ou physique d’un équipement au réseau, identifié par une configuration IP et souvent une adresse MAC.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> NIC · carte réseau</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="interface-simplifiee-glpi" data-glossary-card data-term="Interface simplifiée GLPI" data-full-name data-aliases="self-service" data-keywords="utilisateur | support" data-definition="Interface limitée destinée principalement aux demandeurs pour créer et suivre leurs tickets, consulter la FAQ et effectuer des réservations autorisées." data-courses="glpi" data-modules="g02" data-letter="I" data-course-sort="administration glpi" data-module-sort="053" data-source-order="452" aria-labelledby="interface-simplifiee-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="interface-simplifiee-glpi-titre"><a href="#interface-simplifiee-glpi" class="tssr-glossary-card__anchor" aria-label="Interface simplifiée GLPI">Interface simplifiée GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Interface limitée destinée principalement aux demandeurs pour créer et suivre leurs tickets, consulter la FAQ et effectuer des réservations autorisées.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> self-service</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="interface-standard-glpi" data-glossary-card data-term="Interface standard GLPI" data-full-name data-aliases data-keywords="technicien | profil" data-definition="Interface complète dont les menus dépendent du profil, destinée aux techniciens, gestionnaires et administrateurs de GLPI." data-courses="glpi" data-modules="g02" data-letter="I" data-course-sort="administration glpi" data-module-sort="053" data-source-order="453" aria-labelledby="interface-standard-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="interface-standard-glpi-titre"><a href="#interface-standard-glpi" class="tssr-glossary-card__anchor" aria-label="Interface standard GLPI">Interface standard GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Interface complète dont les menus dépendent du profil, destinée aux techniciens, gestionnaires et administrateurs de GLPI.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="inventaire-informatique" data-glossary-card data-term="Inventaire informatique" data-full-name data-aliases data-keywords="actif | parc" data-definition="Recensement structuré des matériels, logiciels, utilisateurs, contrats, localisations et relations nécessaires à la gestion du parc." data-courses="itil glpi" data-modules="i05 g03 g06" data-letter="I" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="047" data-source-order="454" aria-labelledby="inventaire-informatique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="inventaire-informatique-titre"><a href="#inventaire-informatique" class="tssr-glossary-card__anchor" aria-label="Inventaire informatique">Inventaire informatique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Recensement structuré des matériels, logiciels, utilisateurs, contrats, localisations et relations nécessaires à la gestion du parc.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-05-decouverte-de-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 05 — Découverte de GLPI">ITIL · M05 · Découverte de GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="invite-de-commande-linux" data-glossary-card data-term="Invite de commande Linux" data-full-name data-aliases="prompt" data-keywords="shell | terminal" data-definition="Texte affiché par le shell avant la saisie, souvent composé de l’utilisateur, de la machine, du répertoire et d’un signe $ ou #." data-courses="linux" data-modules="l03" data-letter="I" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="236" aria-labelledby="invite-de-commande-linux-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="invite-de-commande-linux-titre"><a href="#invite-de-commande-linux" class="tssr-glossary-card__anchor" aria-label="Invite de commande Linux">Invite de commande Linux</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Texte affiché par le shell avant la saisie, souvent composé de l’utilisateur, de la machine, du répertoire et d’un signe $ ou #.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> prompt</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="commande-ip" data-glossary-card data-term="ip" data-full-name data-aliases="iproute2" data-keywords="ip addr | ip route | ip neigh" data-definition="Commande Linux moderne pour afficher ou configurer interfaces, adresses, routes et voisins avec les objets link, address, route et neigh." data-courses="reseaux debian" data-modules="r05 d05" data-letter="I" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="38" aria-labelledby="commande-ip-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="commande-ip-titre"><a href="#commande-ip" class="tssr-glossary-card__anchor" aria-label="ip">ip</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande Linux moderne pour afficher ou configurer interfaces, adresses, routes et voisins avec les objets link, address, route et neigh.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> iproute2</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ipconfig" data-glossary-card data-term="ipconfig" data-full-name data-aliases data-keywords="ipconfig /all | release | renew | flushdns" data-definition="Commande Windows qui affiche la configuration IP et permet notamment de renouveler un bail DHCP ou de vider le cache DNS." data-courses="reseaux windows msp" data-modules="r05 w07 s01" data-letter="I" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="39" aria-labelledby="ipconfig-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ipconfig-titre"><a href="#ipconfig" class="tssr-glossary-card__anchor" aria-label="ipconfig">ipconfig</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande Windows qui affiche la configuration IP et permet notamment de renouveler un bail DHCP ou de vider le cache DNS.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ipv4" data-glossary-card data-term="IPv4" data-full-name="Internet Protocol version 4" data-aliases="IP version 4" data-keywords="32 bits | adresse IP" data-definition="Protocole d’adressage sur 32 bits, écrit en quatre octets décimaux, qui permet d’identifier les réseaux et les hôtes." data-courses="reseaux windows msp" data-modules="r03 w07 s01" data-letter="I" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="40" aria-labelledby="ipv4-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ipv4-titre"><a href="#ipv4" class="tssr-glossary-card__anchor" aria-label="IPv4">IPv4</a></h2>
    <p class="tssr-glossary-card__full-name">Internet Protocol version 4</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole d’adressage sur 32 bits, écrit en quatre octets décimaux, qui permet d’identifier les réseaux et les hôtes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> IP version 4</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ipv6" data-glossary-card data-term="IPv6" data-full-name="Internet Protocol version 6" data-aliases="IP version 6" data-keywords="128 bits | hextet" data-definition="Protocole d’adressage sur 128 bits, écrit en hexadécimal, conçu pour un espace d’adresses très vaste et un fonctionnement moderne." data-courses="reseaux windows" data-modules="r06 w07" data-letter="I" data-course-sort="bases des reseaux" data-module-sort="005" data-source-order="41" aria-labelledby="ipv6-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ipv6-titre"><a href="#ipv6" class="tssr-glossary-card__anchor" aria-label="IPv6">IPv6</a></h2>
    <p class="tssr-glossary-card__full-name">Internet Protocol version 6</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole d’adressage sur 128 bits, écrit en hexadécimal, conçu pour un espace d’adresses très vaste et un fonctionnement moderne.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> IP version 6</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="itil" data-glossary-card data-term="ITIL" data-full-name="Information Technology Infrastructure Library" data-aliases data-keywords="ITSM | service" data-definition="Cadre de bonnes pratiques pour organiser la gestion des services informatiques autour de la valeur, des processus et de l’amélioration." data-courses="itil" data-modules="i01 i02" data-letter="I" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="043" data-source-order="394" aria-labelledby="itil-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="itil-titre"><a href="#itil" class="tssr-glossary-card__anchor" aria-label="ITIL">ITIL</a></h2>
    <p class="tssr-glossary-card__full-name">Information Technology Infrastructure Library</p>
  </header>
  <p class="tssr-glossary-card__definition">Cadre de bonnes pratiques pour organiser la gestion des services informatiques autour de la valeur, des processus et de l’amélioration.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-01-presentation-d-itil-et-historique/" title="Sensibilisation ITIL et gestion de parc — Module 01 — Présentation d’ITIL et historique">ITIL · M01 · Présentation ITIL</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="jeton-d-acces" data-glossary-card data-term="Jeton d’accès" data-full-name data-aliases="access token" data-keywords="SID | UAC" data-definition="Objet Windows créé à l’ouverture de session qui contient le SID de l’utilisateur, ses groupes et ses privilèges pour les contrôles d’accès." data-courses="windows" data-modules="w05 w06" data-letter="J" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="119" aria-labelledby="jeton-d-acces-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="jeton-d-acces-titre"><a href="#jeton-d-acces" class="tssr-glossary-card__anchor" aria-label="Jeton d’accès">Jeton d’accès</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Objet Windows créé à l’ouverture de session qui contient le SID de l’utilisateur, ses groupes et ses privilèges pour les contrôles d’accès.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> access token</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="job-shell" data-glossary-card data-term="Job shell" data-full-name data-aliases="tâche shell" data-keywords="processus | arrière-plan" data-definition="Commande ou pipeline suivi par le shell comme tâche au premier plan ou en arrière-plan et contrôlable avec jobs, fg et bg." data-courses="linux" data-modules="l08" data-letter="J" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="237" aria-labelledby="job-shell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="job-shell-titre"><a href="#job-shell" class="tssr-glossary-card__anchor" aria-label="Job shell">Job shell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande ou pipeline suivi par le shell comme tâche au premier plan ou en arrière-plan et contrôlable avec jobs, fg et bg.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> tâche shell</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="journalctl" data-glossary-card data-term="journalctl" data-full-name data-aliases data-keywords="logs | systemd" data-definition="Commande de systemd qui interroge le journal central par unité, période, priorité, démarrage ou autres critères." data-courses="debian" data-modules="d03 d12" data-letter="J" data-course-sort="administration debian gnu/linux" data-module-sort="033" data-source-order="312" aria-labelledby="journalctl-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="journalctl-titre"><a href="#journalctl" class="tssr-glossary-card__anchor" aria-label="journalctl">journalctl</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande de systemd qui interroge le journal central par unité, période, priorité, démarrage ou autres critères.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 03 — Démarrage d’une distribution Debian">Debian · M03 · Démarrage Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="kill" data-glossary-card data-term="kill" data-full-name data-aliases data-keywords="signal | processus" data-definition="Commande qui envoie un signal à un processus identifié par son PID ; le signal TERM permet d’abord un arrêt propre, contrairement à KILL." data-courses="linux debian" data-modules="l08 d12" data-letter="K" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="238" aria-labelledby="kill-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="kill-titre"><a href="#kill" class="tssr-glossary-card__anchor" aria-label="kill">kill</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui envoie un signal à un processus identifié par son PID ; le signal TERM permet d’abord un arrêt propre, contrairement à KILL.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="kpi" data-glossary-card data-term="KPI" data-full-name="Key Performance Indicator" data-aliases="indicateur clé de performance" data-keywords="CSF | métrique" data-definition="Mesure choisie pour suivre l’efficacité ou l’efficience d’une activité par rapport à un objectif défini." data-courses="itil" data-modules="i07" data-letter="K" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="049" data-source-order="395" aria-labelledby="kpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="kpi-titre"><a href="#kpi" class="tssr-glossary-card__anchor" aria-label="KPI">KPI</a></h2>
    <p class="tssr-glossary-card__full-name">Key Performance Indicator</p>
  </header>
  <p class="tssr-glossary-card__definition">Mesure choisie pour suivre l’efficacité ou l’efficience d’une activité par rapport à un objectif défini.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> indicateur clé de performance</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ldap" data-glossary-card data-term="LDAP" data-full-name="Lightweight Directory Access Protocol" data-aliases data-keywords="annuaire | authentification" data-definition="Protocole d’accès aux annuaires utilisé par GLPI pour rechercher, importer et authentifier des comptes issus d’Active Directory." data-courses="glpi" data-modules="g02" data-letter="L" data-course-sort="administration glpi" data-module-sort="053" data-source-order="455" aria-labelledby="ldap-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ldap-titre"><a href="#ldap" class="tssr-glossary-card__anchor" aria-label="LDAP">LDAP</a></h2>
    <p class="tssr-glossary-card__full-name">Lightweight Directory Access Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole d’accès aux annuaires utilisé par GLPI pour rechercher, importer et authentifier des comptes issus d’Active Directory.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="le" data-glossary-card data-term="LE" data-full-name="Logical Extent" data-aliases="extension logique" data-keywords="LVM | LV" data-definition="Unité d’allocation d’un volume logique LVM, correspondant à une extension physique du groupe de volumes." data-courses="debian" data-modules="d08" data-letter="L" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="313" aria-labelledby="le-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="le-titre"><a href="#le" class="tssr-glossary-card__anchor" aria-label="LE">LE</a></h2>
    <p class="tssr-glossary-card__full-name">Logical Extent</p>
  </header>
  <p class="tssr-glossary-card__definition">Unité d’allocation d’un volume logique LVM, correspondant à une extension physique du groupe de volumes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> extension logique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="less" data-glossary-card data-term="less" data-full-name data-aliases data-keywords="pager | lecture fichier" data-definition="Visualiseur paginé qui permet de parcourir et rechercher un texte sans charger nécessairement tout le fichier à l’écran." data-courses="linux" data-modules="l05" data-letter="L" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="239" aria-labelledby="less-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="less-titre"><a href="#less" class="tssr-glossary-card__anchor" aria-label="less">less</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Visualiseur paginé qui permet de parcourir et rechercher un texte sans charger nécessairement tout le fichier à l’écran.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lettre-de-lecteur" data-glossary-card data-term="Lettre de lecteur" data-full-name data-aliases data-keywords="volume | montage" data-definition="Identifiant Windows comme C: ou D: associé à un volume monté afin de l’exposer dans l’arborescence du système." data-courses="windows" data-modules="w04" data-letter="L" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="120" aria-labelledby="lettre-de-lecteur-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lettre-de-lecteur-titre"><a href="#lettre-de-lecteur" class="tssr-glossary-card__anchor" aria-label="Lettre de lecteur">Lettre de lecteur</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Identifiant Windows comme C: ou D: associé à un volume monté afin de l’exposer dans l’arborescence du système.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="licence-logicielle" data-glossary-card data-term="Licence logicielle" data-full-name data-aliases data-keywords="conformité | logiciel" data-definition="Droit d’utiliser un logiciel selon des conditions et quantités définies, à rapprocher des installations relevées dans l’inventaire." data-courses="glpi" data-modules="g03" data-letter="L" data-course-sort="administration glpi" data-module-sort="054" data-source-order="456" aria-labelledby="licence-logicielle-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="licence-logicielle-titre"><a href="#licence-logicielle" class="tssr-glossary-card__anchor" aria-label="Licence logicielle">Licence logicielle</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Droit d’utiliser un logiciel selon des conditions et quantités définies, à rapprocher des installations relevées dans l’inventaire.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lien-de-partage" data-glossary-card data-term="Lien de partage" data-full-name data-aliases data-keywords="OneDrive | SharePoint | permission" data-definition="URL donnant un accès contrôlé à un fichier ou dossier, avec une portée et des droits à vérifier avant diffusion." data-courses="m365" data-modules="m05" data-letter="L" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="186" aria-labelledby="lien-de-partage-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lien-de-partage-titre"><a href="#lien-de-partage" class="tssr-glossary-card__anchor" aria-label="Lien de partage">Lien de partage</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">URL donnant un accès contrôlé à un fichier ou dossier, avec une portée et des droits à vérifier avant diffusion.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lien-physique" data-glossary-card data-term="Lien physique" data-full-name data-aliases="hard link" data-keywords="inode | ln" data-definition="Nouvelle entrée de répertoire pointant vers le même inode qu’un fichier existant ; les deux noms donnent accès aux mêmes données." data-courses="linux" data-modules="l05" data-letter="L" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="240" aria-labelledby="lien-physique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lien-physique-titre"><a href="#lien-physique" class="tssr-glossary-card__anchor" aria-label="Lien physique">Lien physique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Nouvelle entrée de répertoire pointant vers le même inode qu’un fichier existant ; les deux noms donnent accès aux mêmes données.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> hard link</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lien-symbolique" data-glossary-card data-term="Lien symbolique" data-full-name data-aliases="symlink | lien souple" data-keywords="ln -s" data-definition="Fichier spécial qui contient un chemin vers une cible et peut traverser les systèmes de fichiers, mais devient orphelin si la cible disparaît." data-courses="linux" data-modules="l05" data-letter="L" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="241" aria-labelledby="lien-symbolique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lien-symbolique-titre"><a href="#lien-symbolique" class="tssr-glossary-card__anchor" aria-label="Lien symbolique">Lien symbolique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier spécial qui contient un chemin vers une cible et peut traverser les systèmes de fichiers, mais devient orphelin si la cible disparaît.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> symlink · lien souple</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ligne-sql" data-glossary-card data-term="Ligne SQL" data-full-name data-aliases="row | enregistrement" data-keywords="table" data-definition="Enregistrement d’une table qui rassemble une valeur par colonne pour représenter une occurrence, par exemple un client ou un achat." data-courses="glpi" data-modules="g05" data-letter="L" data-course-sort="administration glpi" data-module-sort="056" data-source-order="457" aria-labelledby="ligne-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ligne-sql-titre"><a href="#ligne-sql" class="tssr-glossary-card__anchor" aria-label="Ligne SQL">Ligne SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Enregistrement d’une table qui rassemble une valeur par colonne pour représenter une occurrence, par exemple un client ou un achat.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> row · enregistrement</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="limit-offset" data-glossary-card data-term="LIMIT / OFFSET" data-full-name data-aliases data-keywords="pagination | SELECT" data-definition="Clauses SQL qui limitent le nombre de lignes retournées et indiquent combien de lignes ignorer avant le résultat." data-courses="glpi" data-modules="g05" data-letter="L" data-course-sort="administration glpi" data-module-sort="056" data-source-order="458" aria-labelledby="limit-offset-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="limit-offset-titre"><a href="#limit-offset" class="tssr-glossary-card__anchor" aria-label="LIMIT / OFFSET">LIMIT / OFFSET</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Clauses SQL qui limitent le nombre de lignes retournées et indiquent combien de lignes ignorer avant le résultat.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="liste-sharepoint" data-glossary-card data-term="Liste SharePoint" data-full-name data-aliases data-keywords="données | Microsoft Lists" data-definition="Collection structurée d’éléments et de colonnes utilisée pour suivre des informations, avec vues, règles et autorisations." data-courses="m365" data-modules="m05" data-letter="L" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="187" aria-labelledby="liste-sharepoint-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="liste-sharepoint-titre"><a href="#liste-sharepoint" class="tssr-glossary-card__anchor" aria-label="Liste SharePoint">Liste SharePoint</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Collection structurée d’éléments et de colonnes utilisée pour suivre des informations, avec vues, règles et autorisations.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ln" data-glossary-card data-term="ln" data-full-name data-aliases data-keywords="hard link | symlink" data-definition="Commande qui crée un lien physique par défaut ou un lien symbolique avec l’option -s entre un nouveau nom et une cible." data-courses="linux" data-modules="l05" data-letter="L" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="242" aria-labelledby="ln-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ln-titre"><a href="#ln" class="tssr-glossary-card__anchor" aria-label="ln">ln</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui crée un lien physique par défaut ou un lien symbolique avec l’option -s entre un nouveau nom et une cible.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="localisation-glpi" data-glossary-card data-term="Localisation GLPI" data-full-name data-aliases data-keywords="site | salle | parc" data-definition="Élément hiérarchique indiquant où se trouve un actif ou un utilisateur, utile pour inventaire, intervention et filtrage." data-courses="glpi" data-modules="g03" data-letter="L" data-course-sort="administration glpi" data-module-sort="054" data-source-order="459" aria-labelledby="localisation-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="localisation-glpi-titre"><a href="#localisation-glpi" class="tssr-glossary-card__anchor" aria-label="Localisation GLPI">Localisation GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Élément hiérarchique indiquant où se trouve un actif ou un utilisateur, utile pour inventaire, intervention et filtrage.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ls" data-glossary-card data-term="ls" data-full-name data-aliases data-keywords="répertoire | fichiers" data-definition="Commande qui liste le contenu d’un répertoire ; les options -l, -a et -h ajoutent respectivement détails, fichiers cachés et tailles lisibles." data-courses="linux" data-modules="l03 l04" data-letter="L" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="243" aria-labelledby="ls-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ls-titre"><a href="#ls" class="tssr-glossary-card__anchor" aria-label="ls">ls</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui liste le contenu d’un répertoire ; les options -l, -a et -h ajoutent respectivement détails, fichiers cachés et tailles lisibles.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lsblk" data-glossary-card data-term="lsblk" data-full-name="List Block Devices" data-aliases data-keywords="stockage | périphérique bloc" data-definition="Commande qui présente disques, partitions, volumes logiques, tailles et points de montage sous forme d’arborescence." data-courses="debian msp" data-modules="d07 d08 s01" data-letter="L" data-course-sort="administration debian gnu/linux" data-module-sort="037" data-source-order="314" aria-labelledby="lsblk-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lsblk-titre"><a href="#lsblk" class="tssr-glossary-card__anchor" aria-label="lsblk">lsblk</a></h2>
    <p class="tssr-glossary-card__full-name">List Block Devices</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui présente disques, partitions, volumes logiques, tailles et points de montage sous forme d’arborescence.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage/" title="Administration Debian GNU/Linux — Module 07 — Gestion des espaces de stockage">Debian · M07 · Stockage</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lv" data-glossary-card data-term="LV" data-full-name="Logical Volume" data-aliases="volume logique" data-keywords="LVM | lvcreate" data-definition="Volume logique découpé dans l’espace d’un VG, utilisable comme un périphérique bloc pour créer un système de fichiers ou du swap." data-courses="debian" data-modules="d08" data-letter="L" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="315" aria-labelledby="lv-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lv-titre"><a href="#lv" class="tssr-glossary-card__anchor" aria-label="LV">LV</a></h2>
    <p class="tssr-glossary-card__full-name">Logical Volume</p>
  </header>
  <p class="tssr-glossary-card__definition">Volume logique découpé dans l’espace d’un VG, utilisable comme un périphérique bloc pour créer un système de fichiers ou du swap.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> volume logique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lvcreate" data-glossary-card data-term="lvcreate" data-full-name data-aliases data-keywords="LV | VG" data-definition="Commande LVM qui crée un volume logique d’une taille donnée dans un groupe de volumes existant." data-courses="debian" data-modules="d08" data-letter="L" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="316" aria-labelledby="lvcreate-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lvcreate-titre"><a href="#lvcreate" class="tssr-glossary-card__anchor" aria-label="lvcreate">lvcreate</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande LVM qui crée un volume logique d’une taille donnée dans un groupe de volumes existant.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lvextend" data-glossary-card data-term="lvextend" data-full-name data-aliases data-keywords="extension LVM | resize2fs" data-definition="Commande LVM qui agrandit un volume logique ; le système de fichiers qu’il contient doit ensuite être étendu par l’outil adapté." data-courses="debian" data-modules="d08" data-letter="L" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="317" aria-labelledby="lvextend-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lvextend-titre"><a href="#lvextend" class="tssr-glossary-card__anchor" aria-label="lvextend">lvextend</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande LVM qui agrandit un volume logique ; le système de fichiers qu’il contient doit ensuite être étendu par l’outil adapté.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="lvm" data-glossary-card data-term="LVM" data-full-name="Logical Volume Manager" data-aliases="gestionnaire de volumes logiques" data-keywords="PV | VG | LV" data-definition="Couche de gestion du stockage qui regroupe des volumes physiques en groupes de volumes puis les découpe en volumes logiques redimensionnables." data-courses="debian msp" data-modules="d08 s01" data-letter="L" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="318" aria-labelledby="lvm-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="lvm-titre"><a href="#lvm" class="tssr-glossary-card__anchor" aria-label="LVM">LVM</a></h2>
    <p class="tssr-glossary-card__full-name">Logical Volume Manager</p>
  </header>
  <p class="tssr-glossary-card__definition">Couche de gestion du stockage qui regroupe des volumes physiques en groupes de volumes puis les découpe en volumes logiques redimensionnables.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> gestionnaire de volumes logiques</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="machine-virtuelle" data-glossary-card data-term="Machine virtuelle" data-full-name data-aliases="VM" data-keywords="virtualisation | système invité" data-definition="Ordinateur logiciel isolé qui exécute son propre système invité sur des ressources fournies par un hyperviseur." data-courses="windows msp" data-modules="wadd s01" data-letter="M" data-course-sort="systemes clients microsoft" data-module-sort="019" data-source-order="121" aria-labelledby="machine-virtuelle-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="machine-virtuelle-titre"><a href="#machine-virtuelle" class="tssr-glossary-card__anchor" aria-label="Machine virtuelle">Machine virtuelle</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ordinateur logiciel isolé qui exécute son propre système invité sur des ressources fournies par un hyperviseur.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> VM</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="man" data-glossary-card data-term="man" data-full-name="Manual" data-aliases data-keywords="aide Linux | documentation" data-definition="Commande qui consulte les pages de manuel locales d’une commande, d’un fichier de configuration ou d’une fonction système." data-courses="linux" data-modules="l03" data-letter="M" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="244" aria-labelledby="man-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="man-titre"><a href="#man" class="tssr-glossary-card__anchor" aria-label="man">man</a></h2>
    <p class="tssr-glossary-card__full-name">Manual</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui consulte les pages de manuel locales d’une commande, d’un fichier de configuration ou d’une fonction système.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mariadb" data-glossary-card data-term="MariaDB" data-full-name data-aliases data-keywords="SQL | base GLPI" data-definition="SGBD relationnel libre compatible avec MySQL, utilisé dans la pile étudiée pour stocker les données de l’application GLPI." data-courses="glpi" data-modules="g01 g05" data-letter="M" data-course-sort="administration glpi" data-module-sort="052" data-source-order="460" aria-labelledby="mariadb-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mariadb-titre"><a href="#mariadb" class="tssr-glossary-card__anchor" aria-label="MariaDB">MariaDB</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">SGBD relationnel libre compatible avec MySQL, utilisé dans la pile étudiée pour stocker les données de l’application GLPI.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="marketplace-glpi" data-glossary-card data-term="Marketplace GLPI" data-full-name data-aliases="marché des plugins" data-keywords="plugin | extension" data-definition="Catalogue intégré permettant de découvrir et gérer des extensions compatibles, sous réserve de contrôler version, maintenance et sécurité." data-courses="glpi" data-modules="g06" data-letter="M" data-course-sort="administration glpi" data-module-sort="057" data-source-order="461" aria-labelledby="marketplace-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="marketplace-glpi-titre"><a href="#marketplace-glpi" class="tssr-glossary-card__anchor" aria-label="Marketplace GLPI">Marketplace GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Catalogue intégré permettant de découvrir et gérer des extensions compatibles, sous réserve de contrôler version, maintenance et sécurité.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> marché des plugins</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="masque-de-sous-reseau" data-glossary-card data-term="Masque de sous-réseau" data-full-name data-aliases="subnet mask" data-keywords="CIDR | préfixe" data-definition="Valeur IPv4 qui sépare les bits du préfixe réseau des bits réservés aux hôtes, par exemple 255.255.255.0 pour /24." data-courses="reseaux msp" data-modules="r03 s01" data-letter="M" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="42" aria-labelledby="masque-de-sous-reseau-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="masque-de-sous-reseau-titre"><a href="#masque-de-sous-reseau" class="tssr-glossary-card__anchor" aria-label="Masque de sous-réseau">Masque de sous-réseau</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Valeur IPv4 qui sépare les bits du préfixe réseau des bits réservés aux hôtes, par exemple 255.255.255.0 pour /24.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> subnet mask</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="matrice-raci" data-glossary-card data-term="Matrice RACI" data-full-name="Responsible, Accountable, Consulted, Informed" data-aliases="RACI" data-keywords="rôles | responsabilités" data-definition="Table qui clarifie pour chaque activité qui réalise, rend compte, est consulté et doit être informé." data-courses="itil" data-modules="i02" data-letter="M" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="396" aria-labelledby="matrice-raci-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="matrice-raci-titre"><a href="#matrice-raci" class="tssr-glossary-card__anchor" aria-label="Matrice RACI">Matrice RACI</a></h2>
    <p class="tssr-glossary-card__full-name">Responsible, Accountable, Consulted, Informed</p>
  </header>
  <p class="tssr-glossary-card__definition">Table qui clarifie pour chaque activité qui réalise, rend compte, est consulté et doit être informé.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> RACI</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mbr" data-glossary-card data-term="MBR" data-full-name="Master Boot Record" data-aliases data-keywords="BIOS | partition" data-definition="Ancien schéma de partitionnement limité notamment à quatre partitions principales et environ 2 Tio par disque avec des secteurs de 512 octets." data-courses="windows debian" data-modules="w04 d02" data-letter="M" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="122" aria-labelledby="mbr-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mbr-titre"><a href="#mbr" class="tssr-glossary-card__anchor" aria-label="MBR">MBR</a></h2>
    <p class="tssr-glossary-card__full-name">Master Boot Record</p>
  </header>
  <p class="tssr-glossary-card__definition">Ancien schéma de partitionnement limité notamment à quatre partitions principales et environ 2 Tio par disque avec des secteurs de 512 octets.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 02 — Installation d’une distribution Debian">Debian · M02 · Installation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="metacaractere-shell" data-glossary-card data-term="Métacaractère shell" data-full-name data-aliases data-keywords="globbing | quoting" data-definition="Caractère interprété spécialement par le shell, comme *, ?, |, &gt;, $ ou ;, et qu’il faut protéger pour le traiter littéralement." data-courses="linux" data-modules="l04 l08" data-letter="M" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="245" aria-labelledby="metacaractere-shell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="metacaractere-shell-titre"><a href="#metacaractere-shell" class="tssr-glossary-card__anchor" aria-label="Métacaractère shell">Métacaractère shell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Caractère interprété spécialement par le shell, comme *, ?, |, &gt;, $ ou ;, et qu’il faut protéger pour le traiter littéralement.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="metrique" data-glossary-card data-term="Métrique" data-full-name data-aliases data-keywords="KPI | mesure" data-definition="Mesure brute ou calculée sur un composant, un processus ou un service, interprétée dans un contexte et une période." data-courses="itil" data-modules="i07" data-letter="M" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="049" data-source-order="397" aria-labelledby="metrique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="metrique-titre"><a href="#metrique" class="tssr-glossary-card__anchor" aria-label="Métrique">Métrique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mesure brute ou calculée sur un composant, un processus ou un service, interprétée dans un contexte et une période.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="microsoft-365" data-glossary-card data-term="Microsoft 365" data-full-name data-aliases="M365" data-keywords="cloud | collaboration" data-definition="Suite de services et applications Microsoft par abonnement réunissant notamment Office, Exchange Online, Teams, SharePoint et OneDrive." data-courses="m365" data-modules="m01" data-letter="M" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="020" data-source-order="188" aria-labelledby="microsoft-365-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="microsoft-365-titre"><a href="#microsoft-365" class="tssr-glossary-card__anchor" aria-label="Microsoft 365">Microsoft 365</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Suite de services et applications Microsoft par abonnement réunissant notamment Office, Exchange Online, Teams, SharePoint et OneDrive.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> M365</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-01-decouverte-de-microsoft-365/" title="Microsoft 365 — Outils collaboratifs — Module 01 — Découverte de Microsoft 365">Microsoft 365 · M01 · Microsoft 365</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="microsoft-teams" data-glossary-card data-term="Microsoft Teams" data-full-name data-aliases="Teams" data-keywords="collaboration" data-definition="Plateforme de collaboration qui réunit conversations, réunions, appels, équipes, canaux, fichiers et applications Microsoft 365." data-courses="m365" data-modules="m05" data-letter="M" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="189" aria-labelledby="microsoft-teams-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="microsoft-teams-titre"><a href="#microsoft-teams" class="tssr-glossary-card__anchor" aria-label="Microsoft Teams">Microsoft Teams</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Plateforme de collaboration qui réunit conversations, réunions, appels, équipes, canaux, fichiers et applications Microsoft 365.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Teams</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mkdir" data-glossary-card data-term="mkdir" data-full-name="Make Directory" data-aliases data-keywords="dossier | création" data-definition="Commande qui crée un ou plusieurs répertoires ; l’option -p crée aussi les parents manquants sans erreur s’ils existent déjà." data-courses="linux" data-modules="l04" data-letter="M" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="246" aria-labelledby="mkdir-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mkdir-titre"><a href="#mkdir" class="tssr-glossary-card__anchor" aria-label="mkdir">mkdir</a></h2>
    <p class="tssr-glossary-card__full-name">Make Directory</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui crée un ou plusieurs répertoires ; l’option -p crée aussi les parents manquants sans erreur s’ils existent déjà.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mkfs" data-glossary-card data-term="mkfs" data-full-name="Make File System" data-aliases data-keywords="formatage | ext4" data-definition="Famille de commandes qui crée un système de fichiers sur un périphérique bloc choisi ; cette action détruit la structure précédente." data-courses="debian" data-modules="d09" data-letter="M" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="319" aria-labelledby="mkfs-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mkfs-titre"><a href="#mkfs" class="tssr-glossary-card__anchor" aria-label="mkfs">mkfs</a></h2>
    <p class="tssr-glossary-card__full-name">Make File System</p>
  </header>
  <p class="tssr-glossary-card__definition">Famille de commandes qui crée un système de fichiers sur un périphérique bloc choisi ; cette action détruit la structure précédente.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mmc" data-glossary-card data-term="MMC" data-full-name="Microsoft Management Console" data-aliases="console MMC" data-keywords="snap-in | administration" data-definition="Cadre Windows qui héberge des composants logiciels enfichables d’administration comme Gestion de l’ordinateur ou Gestion des disques." data-courses="windows" data-modules="w03" data-letter="M" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="123" aria-labelledby="mmc-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mmc-titre"><a href="#mmc" class="tssr-glossary-card__anchor" aria-label="MMC">MMC</a></h2>
    <p class="tssr-glossary-card__full-name">Microsoft Management Console</p>
  </header>
  <p class="tssr-glossary-card__definition">Cadre Windows qui héberge des composants logiciels enfichables d’administration comme Gestion de l’ordinateur ou Gestion des disques.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> console MMC</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mode-commande-vi" data-glossary-card data-term="Mode commande Vi" data-full-name data-aliases="mode Ex" data-keywords="Vi | enregistrer" data-definition="Mode accessible avec : depuis le mode normal pour saisir des commandes comme :w, :q, :wq ou des substitutions." data-courses="linux" data-modules="l07" data-letter="M" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="029" data-source-order="247" aria-labelledby="mode-commande-vi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mode-commande-vi-titre"><a href="#mode-commande-vi" class="tssr-glossary-card__anchor" aria-label="Mode commande Vi">Mode commande Vi</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mode accessible avec : depuis le mode normal pour saisir des commandes comme :w, :q, :wq ou des substitutions.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> mode Ex</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-07-utilisation-de-vi/" title="Utilisation d’une distribution GNU/Linux — Module 07 — Utilisation de Vi">GNU/Linux · M07 · Vi</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mode-insertion-vi" data-glossary-card data-term="Mode insertion Vi" data-full-name data-aliases data-keywords="Vi | édition" data-definition="Mode dans lequel les touches ajoutent du texte au fichier ; on y entre notamment avec i, a ou o et on en sort avec Échap." data-courses="linux" data-modules="l07" data-letter="M" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="029" data-source-order="248" aria-labelledby="mode-insertion-vi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mode-insertion-vi-titre"><a href="#mode-insertion-vi" class="tssr-glossary-card__anchor" aria-label="Mode insertion Vi">Mode insertion Vi</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mode dans lequel les touches ajoutent du texte au fichier ; on y entre notamment avec i, a ou o et on en sort avec Échap.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-07-utilisation-de-vi/" title="Utilisation d’une distribution GNU/Linux — Module 07 — Utilisation de Vi">GNU/Linux · M07 · Vi</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mode-normal-vi" data-glossary-card data-term="Mode normal Vi" data-full-name data-aliases data-keywords="Vi | navigation" data-definition="Mode principal de Vi dans lequel les touches exécutent déplacements, suppressions, copies, collages et accès aux autres modes." data-courses="linux" data-modules="l07" data-letter="M" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="029" data-source-order="249" aria-labelledby="mode-normal-vi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mode-normal-vi-titre"><a href="#mode-normal-vi" class="tssr-glossary-card__anchor" aria-label="Mode normal Vi">Mode normal Vi</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mode principal de Vi dans lequel les touches exécutent déplacements, suppressions, copies, collages et accès aux autres modes.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-07-utilisation-de-vi/" title="Utilisation d’une distribution GNU/Linux — Module 07 — Utilisation de Vi">GNU/Linux · M07 · Vi</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mode-sans-echec" data-glossary-card data-term="Mode sans échec" data-full-name data-aliases="Safe Mode" data-keywords="diagnostic | récupération" data-definition="Mode de démarrage Windows avec un ensemble minimal de pilotes et services, utile pour isoler une panne de pilote ou de logiciel." data-courses="windows" data-modules="w10" data-letter="M" data-course-sort="systemes clients microsoft" data-module-sort="015" data-source-order="124" aria-labelledby="mode-sans-echec-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mode-sans-echec-titre"><a href="#mode-sans-echec" class="tssr-glossary-card__anchor" aria-label="Mode sans échec">Mode sans échec</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mode de démarrage Windows avec un ensemble minimal de pilotes et services, utile pour isoler une panne de pilote ou de logiciel.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Safe Mode</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="modele-de-document" data-glossary-card data-term="Modèle de document" data-full-name data-aliases="template" data-keywords="Word | normalisation" data-definition="Fichier de départ réutilisable qui impose une structure, des styles et éventuellement du contenu pour homogénéiser les documents." data-courses="m365" data-modules="m02" data-letter="M" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="190" aria-labelledby="modele-de-document-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="modele-de-document-titre"><a href="#modele-de-document" class="tssr-glossary-card__anchor" aria-label="Modèle de document">Modèle de document</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier de départ réutilisable qui impose une structure, des styles et éventuellement du contenu pour homogénéiser les documents.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> template</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="modele-pdca" data-glossary-card data-term="Modèle PDCA" data-full-name="Plan, Do, Check, Act" data-aliases="roue de Deming" data-keywords="amélioration continue" data-definition="Cycle d’amélioration consistant à planifier, réaliser, vérifier les résultats puis ajuster et standardiser." data-courses="itil" data-modules="i07" data-letter="M" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="049" data-source-order="398" aria-labelledby="modele-pdca-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="modele-pdca-titre"><a href="#modele-pdca" class="tssr-glossary-card__anchor" aria-label="Modèle PDCA">Modèle PDCA</a></h2>
    <p class="tssr-glossary-card__full-name">Plan, Do, Check, Act</p>
  </header>
  <p class="tssr-glossary-card__definition">Cycle d’amélioration consistant à planifier, réaliser, vérifier les résultats puis ajuster et standardiser.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> roue de Deming</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mount" data-glossary-card data-term="mount" data-full-name data-aliases data-keywords="montage | fstab" data-definition="Commande qui attache un système de fichiers à un point de l’arborescence et, avec -a, applique les entrées appropriées de fstab." data-courses="debian" data-modules="d09" data-letter="M" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="320" aria-labelledby="mount-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mount-titre"><a href="#mount" class="tssr-glossary-card__anchor" aria-label="mount">mount</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui attache un système de fichiers à un point de l’arborescence et, avec -a, applique les entrées appropriées de fstab.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mtu" data-glossary-card data-term="MTU" data-full-name="Maximum Transmission Unit" data-aliases="unité de transmission maximale" data-keywords="fragmentation" data-definition="Taille maximale de paquet transportable dans une trame sur une interface sans fragmentation, souvent 1 500 octets sur Ethernet." data-courses="reseaux" data-modules="r01" data-letter="M" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="43" aria-labelledby="mtu-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mtu-titre"><a href="#mtu" class="tssr-glossary-card__anchor" aria-label="MTU">MTU</a></h2>
    <p class="tssr-glossary-card__full-name">Maximum Transmission Unit</p>
  </header>
  <p class="tssr-glossary-card__definition">Taille maximale de paquet transportable dans une trame sur une interface sans fragmentation, souvent 1 500 octets sur Ethernet.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> unité de transmission maximale</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="multicast" data-glossary-card data-term="Multicast" data-full-name data-aliases="multidiffusion" data-keywords="groupe multicast" data-definition="Transmission d’un émetteur vers un groupe de destinataires abonnés, sans envoyer une copie séparée à chaque hôte ni diffuser à tous." data-courses="reseaux" data-modules="r04 r06" data-letter="M" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="44" aria-labelledby="multicast-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="multicast-titre"><a href="#multicast" class="tssr-glossary-card__anchor" aria-label="Multicast">Multicast</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Transmission d’un émetteur vers un groupe de destinataires abonnés, sans envoyer une copie séparée à chaque hôte ni diffuser à tous.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> multidiffusion</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mv" data-glossary-card data-term="mv" data-full-name data-aliases data-keywords="déplacement | renommage" data-definition="Commande qui déplace ou renomme un fichier ou répertoire ; une cible existante peut être remplacée selon les options et les droits." data-courses="linux" data-modules="l04" data-letter="M" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="250" aria-labelledby="mv-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mv-titre"><a href="#mv" class="tssr-glossary-card__anchor" aria-label="mv">mv</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui déplace ou renomme un fichier ou répertoire ; une cible existante peut être remplacée selon les options et les droits.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="mysql" data-glossary-card data-term="MySQL" data-full-name data-aliases data-keywords="base de données | SQL" data-definition="SGBD relationnel utilisant SQL, pris en charge par GLPI et proche de MariaDB pour les notions étudiées dans la formation." data-courses="glpi" data-modules="g01 g05" data-letter="M" data-course-sort="administration glpi" data-module-sort="052" data-source-order="462" aria-labelledby="mysql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="mysql-titre"><a href="#mysql" class="tssr-glossary-card__anchor" aria-label="MySQL">MySQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">SGBD relationnel utilisant SQL, pris en charge par GLPI et proche de MariaDB pour les notions étudiées dans la formation.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="nat" data-glossary-card data-term="NAT" data-full-name="Network Address Translation" data-aliases="traduction d’adresses réseau" data-keywords="PAT | adresse privée" data-definition="Traduction d’adresses réalisée par un équipement frontière, souvent pour faire partager une adresse publique à plusieurs hôtes privés." data-courses="reseaux windows" data-modules="r04 wadd" data-letter="N" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="45" aria-labelledby="nat-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="nat-titre"><a href="#nat" class="tssr-glossary-card__anchor" aria-label="NAT">NAT</a></h2>
    <p class="tssr-glossary-card__full-name">Network Address Translation</p>
  </header>
  <p class="tssr-glossary-card__definition">Traduction d’adresses réalisée par un équipement frontière, souvent pour faire partager une adresse publique à plusieurs hôtes privés.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> traduction d’adresses réseau</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="nat-virtuel" data-glossary-card data-term="NAT virtuel" data-full-name data-aliases data-keywords="VM | réseau virtuel" data-definition="Mode réseau où l’hyperviseur traduit le trafic des machines virtuelles derrière l’adresse de l’hôte pour leur donner un accès sortant." data-courses="windows" data-modules="wadd" data-letter="N" data-course-sort="systemes clients microsoft" data-module-sort="019" data-source-order="125" aria-labelledby="nat-virtuel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="nat-virtuel-titre"><a href="#nat-virtuel" class="tssr-glossary-card__anchor" aria-label="NAT virtuel">NAT virtuel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mode réseau où l’hyperviseur traduit le trafic des machines virtuelles derrière l’adresse de l’hôte pour leur donner un accès sortant.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ndp" data-glossary-card data-term="NDP" data-full-name="Neighbor Discovery Protocol" data-aliases="Neighbor Discovery" data-keywords="IPv6 | ICMPv6" data-definition="Ensemble de mécanismes ICMPv6 qui remplace ARP et gère découverte des voisins, routeurs, préfixes et détection des doublons." data-courses="reseaux" data-modules="r06" data-letter="N" data-course-sort="bases des reseaux" data-module-sort="005" data-source-order="46" aria-labelledby="ndp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ndp-titre"><a href="#ndp" class="tssr-glossary-card__anchor" aria-label="NDP">NDP</a></h2>
    <p class="tssr-glossary-card__full-name">Neighbor Discovery Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble de mécanismes ICMPv6 qui remplace ARP et gère découverte des voisins, routeurs, préfixes et détection des doublons.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Neighbor Discovery</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="netstat" data-glossary-card data-term="netstat" data-full-name data-aliases data-keywords="LISTEN | ESTABLISHED | ports" data-definition="Commande de diagnostic qui affiche connexions, ports en écoute, statistiques et routes ; des outils modernes comme ss peuvent la remplacer sous Linux." data-courses="reseaux" data-modules="r05" data-letter="N" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="47" aria-labelledby="netstat-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="netstat-titre"><a href="#netstat" class="tssr-glossary-card__anchor" aria-label="netstat">netstat</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande de diagnostic qui affiche connexions, ports en écoute, statistiques et routes ; des outils modernes comme ss peuvent la remplacer sous Linux.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="networkmanager" data-glossary-card data-term="NetworkManager" data-full-name data-aliases data-keywords="nmcli | connexion réseau" data-definition="Service de gestion réseau qui configure interfaces, connexions, adresses, routes et DNS, souvent au moyen de nmcli ou d’une interface graphique." data-courses="debian" data-modules="d05" data-letter="N" data-course-sort="administration debian gnu/linux" data-module-sort="035" data-source-order="321" aria-labelledby="networkmanager-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="networkmanager-titre"><a href="#networkmanager" class="tssr-glossary-card__anchor" aria-label="NetworkManager">NetworkManager</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service de gestion réseau qui configure interfaces, connexions, adresses, routes et DNS, souvent au moyen de nmcli ou d’une interface graphique.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="niveau-de-service" data-glossary-card data-term="Niveau de service" data-full-name data-aliases="service level" data-keywords="SLA | indicateur" data-definition="Résultat mesurable convenu pour un service, par exemple disponibilité, délai de prise en charge ou délai de résolution." data-courses="itil" data-modules="i03 i07" data-letter="N" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="399" aria-labelledby="niveau-de-service-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="niveau-de-service-titre"><a href="#niveau-de-service" class="tssr-glossary-card__anchor" aria-label="Niveau de service">Niveau de service</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Résultat mesurable convenu pour un service, par exemple disponibilité, délai de prise en charge ou délai de résolution.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> service level</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-07-amelioration-continue-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 07 — Amélioration continue des services">ITIL · M07 · Amélioration continue</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="notification-glpi" data-glossary-card data-term="Notification GLPI" data-full-name data-aliases data-keywords="e-mail | ticket" data-definition="Message généré lors d’un événement sur un objet ou ticket selon un modèle, des destinataires et une configuration de transport." data-courses="glpi" data-modules="g04" data-letter="N" data-course-sort="administration glpi" data-module-sort="055" data-source-order="463" aria-labelledby="notification-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="notification-glpi-titre"><a href="#notification-glpi" class="tssr-glossary-card__anchor" aria-label="Notification GLPI">Notification GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Message généré lors d’un événement sur un objet ou ticket selon un modèle, des destinataires et une configuration de transport.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="noyau-linux" data-glossary-card data-term="Noyau Linux" data-full-name data-aliases="kernel Linux" data-keywords="système d’exploitation" data-definition="Composant central qui gère processeurs, mémoire, pilotes, processus, réseau et systèmes de fichiers pour les programmes de l’espace utilisateur." data-courses="linux debian" data-modules="l03 d01" data-letter="N" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="251" aria-labelledby="noyau-linux-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="noyau-linux-titre"><a href="#noyau-linux" class="tssr-glossary-card__anchor" aria-label="Noyau Linux">Noyau Linux</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Composant central qui gère processeurs, mémoire, pilotes, processus, réseau et systèmes de fichiers pour les programmes de l’espace utilisateur.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> kernel Linux</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux/" title="Administration Debian GNU/Linux — Module 01 — Présentation de Debian GNU/Linux">Debian · M01 · Présentation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ntfs" data-glossary-card data-term="NTFS" data-full-name="New Technology File System" data-aliases data-keywords="permissions | volume" data-definition="Système de fichiers Windows prenant en charge journalisation, ACL, grands fichiers, compression, chiffrement et quotas." data-courses="windows msp" data-modules="w04 w06 s01" data-letter="N" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="126" aria-labelledby="ntfs-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ntfs-titre"><a href="#ntfs" class="tssr-glossary-card__anchor" aria-label="NTFS">NTFS</a></h2>
    <p class="tssr-glossary-card__full-name">New Technology File System</p>
  </header>
  <p class="tssr-glossary-card__definition">Système de fichiers Windows prenant en charge journalisation, ACL, grands fichiers, compression, chiffrement et quotas.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="null-sql" data-glossary-card data-term="NULL SQL" data-full-name data-aliases data-keywords="IS NULL | donnée manquante" data-definition="Marqueur indiquant une valeur inconnue ou absente, différent de zéro ou d’une chaîne vide et testé avec IS NULL." data-courses="glpi" data-modules="g05" data-letter="N" data-course-sort="administration glpi" data-module-sort="056" data-source-order="464" aria-labelledby="null-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="null-sql-titre"><a href="#null-sql" class="tssr-glossary-card__anchor" aria-label="NULL SQL">NULL SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Marqueur indiquant une valeur inconnue ou absente, différent de zéro ou d’une chaîne vide et testé avec IS NULL.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="objet-powershell" data-glossary-card data-term="Objet PowerShell" data-full-name data-aliases data-keywords="propriété | méthode | pipeline" data-definition="Valeur structurée possédant un type, des propriétés et des méthodes, transmise nativement entre commandes du pipeline PowerShell." data-courses="windows" data-modules="w03 w11" data-letter="O" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="127" aria-labelledby="objet-powershell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="objet-powershell-titre"><a href="#objet-powershell" class="tssr-glossary-card__anchor" aria-label="Objet PowerShell">Objet PowerShell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Valeur structurée possédant un type, des propriétés et des méthodes, transmise nativement entre commandes du pipeline PowerShell.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="observateur-de-ticket" data-glossary-card data-term="Observateur de ticket" data-full-name data-aliases="watcher" data-keywords="notification | acteur" data-definition="Personne ajoutée à un ticket pour suivre son évolution et recevoir les notifications sans en être le demandeur ni le technicien." data-courses="glpi itil" data-modules="g04 i09" data-letter="O" data-course-sort="administration glpi" data-module-sort="051" data-source-order="465" aria-labelledby="observateur-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="observateur-de-ticket-titre"><a href="#observateur-de-ticket" class="tssr-glossary-card__anchor" aria-label="Observateur de ticket">Observateur de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Personne ajoutée à un ticket pour suivre son évolution et recevoir les notifications sans en être le demandeur ni le technicien.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> watcher</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="observateur-d-evenements" data-glossary-card data-term="Observateur d’événements" data-full-name data-aliases="Event Viewer" data-keywords="journal Windows" data-definition="Console eventvwr.msc qui permet de filtrer et consulter les journaux Application, Système, Sécurité et les journaux spécialisés." data-courses="windows" data-modules="w10" data-letter="O" data-course-sort="systemes clients microsoft" data-module-sort="015" data-source-order="128" aria-labelledby="observateur-d-evenements-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="observateur-d-evenements-titre"><a href="#observateur-d-evenements" class="tssr-glossary-card__anchor" aria-label="Observateur d’événements">Observateur d’événements</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Console eventvwr.msc qui permet de filtrer et consulter les journaux Application, Système, Sécurité et les journaux spécialisés.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Event Viewer</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="octet" data-glossary-card data-term="Octet" data-full-name data-aliases="byte | B" data-keywords="8 bits" data-definition="Groupe de huit bits. Les adresses IPv4 comportent quatre octets et les capacités de stockage sont généralement exprimées en octets." data-courses="reseaux" data-modules="r02 r03" data-letter="O" data-course-sort="bases des reseaux" data-module-sort="001" data-source-order="48" aria-labelledby="octet-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="octet-titre"><a href="#octet" class="tssr-glossary-card__anchor" aria-label="Octet">Octet</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Groupe de huit bits. Les adresses IPv4 comportent quatre octets et les capacités de stockage sont généralement exprimées en octets.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> byte · B</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-02-les-unites-informatiques/" title="Bases des réseaux — Module 02 — Les unités informatiques">Réseaux · M02 · Unités informatiques</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="onedrive" data-glossary-card data-term="OneDrive" data-full-name data-aliases data-keywords="cloud | synchronisation" data-definition="Service Microsoft de stockage et synchronisation des fichiers personnels professionnels, avec partage et historique de versions." data-courses="m365" data-modules="m05" data-letter="O" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="191" aria-labelledby="onedrive-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="onedrive-titre"><a href="#onedrive" class="tssr-glossary-card__anchor" aria-label="OneDrive">OneDrive</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service Microsoft de stockage et synchronisation des fichiers personnels professionnels, avec partage et historique de versions.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="oobe" data-glossary-card data-term="OOBE" data-full-name="Out-of-Box Experience" data-aliases="expérience de première utilisation" data-keywords="Sysprep" data-definition="Séquence de première configuration Windows présentée après installation ou généralisation pour définir région, comptes et paramètres initiaux." data-courses="windows" data-modules="w02 w12" data-letter="O" data-course-sort="systemes clients microsoft" data-module-sort="007" data-source-order="129" aria-labelledby="oobe-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="oobe-titre"><a href="#oobe" class="tssr-glossary-card__anchor" aria-label="OOBE">OOBE</a></h2>
    <p class="tssr-glossary-card__full-name">Out-of-Box Experience</p>
  </header>
  <p class="tssr-glossary-card__definition">Séquence de première configuration Windows présentée après installation ou généralisation pour définir région, comptes et paramètres initiaux.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> expérience de première utilisation</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-02-installation-du-systeme-d-exploitation-windows-10/" title="Systèmes clients Microsoft — Module 02 — Installation du système d’exploitation Windows 10">Windows · M02 · Installation Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image/" title="Systèmes clients Microsoft — Module 12 — Introduction à la capture et au déploiement d’image">Windows · M12 · Capture et déploiement</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="order-by" data-glossary-card data-term="ORDER BY" data-full-name data-aliases data-keywords="tri | ASC | DESC" data-definition="Clause SQL qui trie le résultat d’une requête selon une ou plusieurs expressions, en ordre croissant ou décroissant." data-courses="glpi" data-modules="g05" data-letter="O" data-course-sort="administration glpi" data-module-sort="056" data-source-order="466" aria-labelledby="order-by-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="order-by-titre"><a href="#order-by" class="tssr-glossary-card__anchor" aria-label="ORDER BY">ORDER BY</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Clause SQL qui trie le résultat d’une requête selon une ou plusieurs expressions, en ordre croissant ou décroissant.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="outlook" data-glossary-card data-term="Outlook" data-full-name data-aliases data-keywords="messagerie | calendrier" data-definition="Client Microsoft de messagerie et d’organisation qui gère courriels, calendrier, contacts, tâches et connexion à Exchange." data-courses="m365" data-modules="m04" data-letter="O" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="023" data-source-order="192" aria-labelledby="outlook-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="outlook-titre"><a href="#outlook" class="tssr-glossary-card__anchor" aria-label="Outlook">Outlook</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Client Microsoft de messagerie et d’organisation qui gère courriels, calendrier, contacts, tâches et connexion à Exchange.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-04-exploiter-outlook-et-savoir-le-depanner/" title="Microsoft 365 — Outils collaboratifs — Module 04 — Exploiter Outlook et savoir le dépanner">Microsoft 365 · M04 · Outlook</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="paquet" data-glossary-card data-term="Paquet" data-full-name data-aliases data-keywords="couche 3 | IP" data-definition="PDU de la couche réseau contenant notamment les adresses IP source et destination nécessaires à l’acheminement entre réseaux." data-courses="reseaux" data-modules="r01 r04" data-letter="P" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="49" aria-labelledby="paquet-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="paquet-titre"><a href="#paquet" class="tssr-glossary-card__anchor" aria-label="Paquet">Paquet</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">PDU de la couche réseau contenant notamment les adresses IP source et destination nécessaires à l’acheminement entre réseaux.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="paquet-deb" data-glossary-card data-term="Paquet .deb" data-full-name data-aliases="paquet Debian" data-keywords="deb | dépendance" data-definition="Archive logicielle Debian contenant fichiers, métadonnées et scripts de gestion, installée par dpkg et orchestrée par APT." data-courses="debian" data-modules="d06" data-letter="P" data-course-sort="administration debian gnu/linux" data-module-sort="036" data-source-order="322" aria-labelledby="paquet-deb-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="paquet-deb-titre"><a href="#paquet-deb" class="tssr-glossary-card__anchor" aria-label="Paquet .deb">Paquet .deb</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Archive logicielle Debian contenant fichiers, métadonnées et scripts de gestion, installée par dpkg et orchestrée par APT.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> paquet Debian</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-06-gestion-des-paquets-logiciels/" title="Administration Debian GNU/Linux — Module 06 — Gestion des paquets logiciels">Debian · M06 · Paquets logiciels</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="paragraphe-word" data-glossary-card data-term="Paragraphe Word" data-full-name data-aliases data-keywords="mise en forme | Word" data-definition="Bloc de texte terminé par une marque de paragraphe et portant des propriétés comme alignement, retraits, espacement et style." data-courses="m365" data-modules="m02" data-letter="P" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="193" aria-labelledby="paragraphe-word-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="paragraphe-word-titre"><a href="#paragraphe-word" class="tssr-glossary-card__anchor" aria-label="Paragraphe Word">Paragraphe Word</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Bloc de texte terminé par une marque de paragraphe et portant des propriétés comme alignement, retraits, espacement et style.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pare-feu-windows-defender" data-glossary-card data-term="Pare-feu Windows Defender" data-full-name data-aliases="Windows Defender Firewall" data-keywords="filtrage réseau" data-definition="Composant qui filtre les communications entrantes et sortantes selon des profils et des règles associées aux programmes, ports ou adresses." data-courses="windows" data-modules="w07" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="012" data-source-order="130" aria-labelledby="pare-feu-windows-defender-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pare-feu-windows-defender-titre"><a href="#pare-feu-windows-defender" class="tssr-glossary-card__anchor" aria-label="Pare-feu Windows Defender">Pare-feu Windows Defender</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Composant qui filtre les communications entrantes et sortantes selon des profils et des règles associées aux programmes, ports ou adresses.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Windows Defender Firewall</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="partage-administratif" data-glossary-card data-term="Partage administratif" data-full-name data-aliases data-keywords="SMB | administration distante" data-definition="Partage Windows créé automatiquement pour l’administration, comme C$ ou ADMIN$, accessible uniquement aux comptes autorisés." data-courses="windows" data-modules="w08" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="013" data-source-order="131" aria-labelledby="partage-administratif-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="partage-administratif-titre"><a href="#partage-administratif" class="tssr-glossary-card__anchor" aria-label="Partage administratif">Partage administratif</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Partage Windows créé automatiquement pour l’administration, comme C$ ou ADMIN$, accessible uniquement aux comptes autorisés.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources/" title="Systèmes clients Microsoft — Module 08 — Le partage de ressources">Windows · M08 · Partage de ressources</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="parted" data-glossary-card data-term="parted" data-full-name data-aliases data-keywords="partition | GPT" data-definition="Outil de partitionnement capable de gérer MBR et GPT, en ligne de commande, avec affichage des limites et unités du disque." data-courses="debian" data-modules="d07" data-letter="P" data-course-sort="administration debian gnu/linux" data-module-sort="037" data-source-order="323" aria-labelledby="parted-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="parted-titre"><a href="#parted" class="tssr-glossary-card__anchor" aria-label="parted">parted</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Outil de partitionnement capable de gérer MBR et GPT, en ligne de commande, avec affichage des limites et unités du disque.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage/" title="Administration Debian GNU/Linux — Module 07 — Gestion des espaces de stockage">Debian · M07 · Stockage</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="partie-prenante" data-glossary-card data-term="Partie prenante" data-full-name data-aliases="stakeholder" data-keywords="client | fournisseur" data-definition="Personne ou organisation ayant un intérêt, une influence ou un impact lié à un service, un processus ou une décision." data-courses="itil" data-modules="i02" data-letter="P" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="400" aria-labelledby="partie-prenante-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="partie-prenante-titre"><a href="#partie-prenante" class="tssr-glossary-card__anchor" aria-label="Partie prenante">Partie prenante</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Personne ou organisation ayant un intérêt, une influence ou un impact lié à un service, un processus ou une décision.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> stakeholder</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="partition" data-glossary-card data-term="Partition" data-full-name data-aliases data-keywords="disque | volume" data-definition="Découpage logique d’un disque décrit dans une table MBR ou GPT et pouvant recevoir un système de fichiers ou un rôle technique." data-courses="windows debian" data-modules="w04 d02 d07" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="132" aria-labelledby="partition-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="partition-titre"><a href="#partition" class="tssr-glossary-card__anchor" aria-label="Partition">Partition</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Découpage logique d’un disque décrit dans une table MBR ou GPT et pouvant recevoir un système de fichiers ou un rôle technique.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 02 — Installation d’une distribution Debian">Debian · M02 · Installation Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage/" title="Administration Debian GNU/Linux — Module 07 — Gestion des espaces de stockage">Debian · M07 · Stockage</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="passerelle-par-defaut" data-glossary-card data-term="Passerelle par défaut" data-full-name data-aliases="default gateway" data-keywords="route par défaut" data-definition="Routeur auquel un hôte remet les paquets destinés à un réseau qu’il ne connaît pas comme directement connecté." data-courses="reseaux msp" data-modules="r03 r04 s01" data-letter="P" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="50" aria-labelledby="passerelle-par-defaut-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="passerelle-par-defaut-titre"><a href="#passerelle-par-defaut" class="tssr-glossary-card__anchor" aria-label="Passerelle par défaut">Passerelle par défaut</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Routeur auquel un hôte remet les paquets destinés à un réseau qu’il ne connaît pas comme directement connecté.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> default gateway</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="path" data-glossary-card data-term="PATH" data-full-name data-aliases="chemin de recherche" data-keywords="variable d’environnement" data-definition="Variable d’environnement contenant la liste ordonnée des répertoires où le shell recherche une commande saisie sans chemin." data-courses="linux" data-modules="l08" data-letter="P" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="252" aria-labelledby="path-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="path-titre"><a href="#path" class="tssr-glossary-card__anchor" aria-label="PATH">PATH</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Variable d’environnement contenant la liste ordonnée des répertoires où le shell recherche une commande saisie sans chemin.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> chemin de recherche</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pdu" data-glossary-card data-term="PDU" data-full-name="Protocol Data Unit" data-aliases="unité de données de protocole" data-keywords="OSI | encapsulation" data-definition="Unité de données manipulée par une couche réseau : bits, trame, paquet, segment ou données selon le niveau du modèle." data-courses="reseaux" data-modules="r01" data-letter="P" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="51" aria-labelledby="pdu-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pdu-titre"><a href="#pdu" class="tssr-glossary-card__anchor" aria-label="PDU">PDU</a></h2>
    <p class="tssr-glossary-card__full-name">Protocol Data Unit</p>
  </header>
  <p class="tssr-glossary-card__definition">Unité de données manipulée par une couche réseau : bits, trame, paquet, segment ou données selon le niveau du modèle.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> unité de données de protocole</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pe" data-glossary-card data-term="PE" data-full-name="Physical Extent" data-aliases="extension physique" data-keywords="LVM | PV" data-definition="Bloc d’allocation de taille fixe dans un volume physique LVM, mis à disposition du groupe de volumes." data-courses="debian" data-modules="d08" data-letter="P" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="324" aria-labelledby="pe-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pe-titre"><a href="#pe" class="tssr-glossary-card__anchor" aria-label="PE">PE</a></h2>
    <p class="tssr-glossary-card__full-name">Physical Extent</p>
  </header>
  <p class="tssr-glossary-card__definition">Bloc d’allocation de taille fixe dans un volume physique LVM, mis à disposition du groupe de volumes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> extension physique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="peripherique-bloc" data-glossary-card data-term="Périphérique bloc" data-full-name data-aliases="block device" data-keywords="/dev/sda | stockage" data-definition="Interface noyau donnant accès à un stockage par blocs, comme un disque, une partition ou un volume logique sous /dev." data-courses="debian" data-modules="d07 d08" data-letter="P" data-course-sort="administration debian gnu/linux" data-module-sort="037" data-source-order="325" aria-labelledby="peripherique-bloc-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="peripherique-bloc-titre"><a href="#peripherique-bloc" class="tssr-glossary-card__anchor" aria-label="Périphérique bloc">Périphérique bloc</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Interface noyau donnant accès à un stockage par blocs, comme un disque, une partition ou un volume logique sous /dev.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> block device</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage/" title="Administration Debian GNU/Linux — Module 07 — Gestion des espaces de stockage">Debian · M07 · Stockage</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="permission-de-partage" data-glossary-card data-term="Permission de partage" data-full-name data-aliases data-keywords="SMB | NTFS | ACL" data-definition="Autorisation appliquée lors d’un accès SMB à un dossier partagé ; l’accès effectif combine ces droits avec les permissions NTFS." data-courses="windows" data-modules="w08" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="013" data-source-order="133" aria-labelledby="permission-de-partage-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="permission-de-partage-titre"><a href="#permission-de-partage" class="tssr-glossary-card__anchor" aria-label="Permission de partage">Permission de partage</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Autorisation appliquée lors d’un accès SMB à un dossier partagé ; l’accès effectif combine ces droits avec les permissions NTFS.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources/" title="Systèmes clients Microsoft — Module 08 — Le partage de ressources">Windows · M08 · Partage de ressources</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="php" data-glossary-card data-term="PHP" data-full-name="PHP Hypertext Preprocessor" data-aliases data-keywords="Apache | application web" data-definition="Langage côté serveur dans lequel GLPI est développé ; le serveur web l’exécute pour produire les réponses de l’application." data-courses="glpi" data-modules="g01" data-letter="P" data-course-sort="administration glpi" data-module-sort="052" data-source-order="467" aria-labelledby="php-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="php-titre"><a href="#php" class="tssr-glossary-card__anchor" aria-label="PHP">PHP</a></h2>
    <p class="tssr-glossary-card__full-name">PHP Hypertext Preprocessor</p>
  </header>
  <p class="tssr-glossary-card__definition">Langage côté serveur dans lequel GLPI est développé ; le serveur web l’exécute pour produire les réponses de l’application.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pid" data-glossary-card data-term="PID" data-full-name="Process Identifier" data-aliases="identifiant de processus" data-keywords="ps | kill" data-definition="Numéro unique attribué à un processus actif afin de l’identifier pour l’observation, l’envoi de signaux ou la gestion des ressources." data-courses="linux debian" data-modules="l08 d12" data-letter="P" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="253" aria-labelledby="pid-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pid-titre"><a href="#pid" class="tssr-glossary-card__anchor" aria-label="PID">PID</a></h2>
    <p class="tssr-glossary-card__full-name">Process Identifier</p>
  </header>
  <p class="tssr-glossary-card__definition">Numéro unique attribué à un processus actif afin de l’identifier pour l’observation, l’envoi de signaux ou la gestion des ressources.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> identifiant de processus</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="piece-jointe-glpi" data-glossary-card data-term="Pièce jointe GLPI" data-full-name data-aliases data-keywords="document | ticket" data-definition="Fichier associé à un ticket, suivi ou objet pour apporter une preuve, une capture ou un document utile au traitement." data-courses="glpi" data-modules="g04" data-letter="P" data-course-sort="administration glpi" data-module-sort="055" data-source-order="468" aria-labelledby="piece-jointe-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="piece-jointe-glpi-titre"><a href="#piece-jointe-glpi" class="tssr-glossary-card__anchor" aria-label="Pièce jointe GLPI">Pièce jointe GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier associé à un ticket, suivi ou objet pour apporter une preuve, une capture ou un document utile au traitement.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pile-lamp" data-glossary-card data-term="Pile LAMP" data-full-name="Linux, Apache, MariaDB/MySQL, PHP" data-aliases="LAMP" data-keywords="GLPI | serveur web" data-definition="Architecture web réunissant un système Linux, un serveur HTTP, un SGBD relationnel et PHP pour exécuter une application comme GLPI." data-courses="glpi" data-modules="g01" data-letter="P" data-course-sort="administration glpi" data-module-sort="052" data-source-order="469" aria-labelledby="pile-lamp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pile-lamp-titre"><a href="#pile-lamp" class="tssr-glossary-card__anchor" aria-label="Pile LAMP">Pile LAMP</a></h2>
    <p class="tssr-glossary-card__full-name">Linux, Apache, MariaDB/MySQL, PHP</p>
  </header>
  <p class="tssr-glossary-card__definition">Architecture web réunissant un système Linux, un serveur HTTP, un SGBD relationnel et PHP pour exécuter une application comme GLPI.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> LAMP</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pilote" data-glossary-card data-term="Pilote" data-full-name data-aliases="driver" data-keywords="périphérique | matériel" data-definition="Logiciel qui permet au système d’exploitation de communiquer avec un périphérique matériel selon une interface comprise par les deux." data-courses="windows" data-modules="w09 w12" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="014" data-source-order="134" aria-labelledby="pilote-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pilote-titre"><a href="#pilote" class="tssr-glossary-card__anchor" aria-label="Pilote">Pilote</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Logiciel qui permet au système d’exploitation de communiquer avec un périphérique matériel selon une interface comprise par les deux.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> driver</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-09-les-pilotes-et-les-imprimantes/" title="Systèmes clients Microsoft — Module 09 — Les pilotes et les imprimantes">Windows · M09 · Pilotes et imprimantes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image/" title="Systèmes clients Microsoft — Module 12 — Introduction à la capture et au déploiement d’image">Windows · M12 · Capture et déploiement</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ping" data-glossary-card data-term="ping" data-full-name data-aliases data-keywords="Echo Request | Echo Reply | RTT" data-definition="Outil de diagnostic qui envoie des requêtes ICMP Echo pour vérifier l’accessibilité d’une destination et mesurer le temps aller-retour." data-courses="reseaux windows msp" data-modules="r05 w07 s01" data-letter="P" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="52" aria-labelledby="ping-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ping-titre"><a href="#ping" class="tssr-glossary-card__anchor" aria-label="ping">ping</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Outil de diagnostic qui envoie des requêtes ICMP Echo pour vérifier l’accessibilité d’une destination et mesurer le temps aller-retour.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pipe-unix" data-glossary-card data-term="Pipe Unix" data-full-name data-aliases="tube | pipeline Unix" data-keywords="stdout | stdin" data-definition="Opérateur | qui relie la sortie standard d’une commande à l’entrée standard de la suivante pour construire un traitement composé." data-courses="linux" data-modules="l08" data-letter="P" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="254" aria-labelledby="pipe-unix-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pipe-unix-titre"><a href="#pipe-unix" class="tssr-glossary-card__anchor" aria-label="Pipe Unix">Pipe Unix</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Opérateur | qui relie la sortie standard d’une commande à l’entrée standard de la suivante pour construire un traitement composé.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> tube · pipeline Unix</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pipeline-powershell" data-glossary-card data-term="Pipeline PowerShell" data-full-name data-aliases="tube PowerShell" data-keywords="objet | pipe" data-definition="Chaîne de commandes reliées par | dans laquelle les objets produits à gauche deviennent l’entrée de la commande suivante." data-courses="windows" data-modules="w11" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="016" data-source-order="135" aria-labelledby="pipeline-powershell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pipeline-powershell-titre"><a href="#pipeline-powershell" class="tssr-glossary-card__anchor" aria-label="Pipeline PowerShell">Pipeline PowerShell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Chaîne de commandes reliées par | dans laquelle les objets produits à gauche deviennent l’entrée de la commande suivante.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> tube PowerShell</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="plugin-glpi" data-glossary-card data-term="Plugin GLPI" data-full-name data-aliases="plug-in | extension" data-keywords="Marketplace" data-definition="Extension qui ajoute ou modifie des fonctions de GLPI ; sa compatibilité, sa source, ses permissions et sa maintenance doivent être vérifiées." data-courses="glpi" data-modules="g06" data-letter="P" data-course-sort="administration glpi" data-module-sort="057" data-source-order="470" aria-labelledby="plugin-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="plugin-glpi-titre"><a href="#plugin-glpi" class="tssr-glossary-card__anchor" aria-label="Plugin GLPI">Plugin GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Extension qui ajoute ou modifie des fonctions de GLPI ; sa compatibilité, sa source, ses permissions et sa maintenance doivent être vérifiées.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> plug-in · extension</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="point-de-montage" data-glossary-card data-term="Point de montage" data-full-name data-aliases data-keywords="mount | filesystem" data-definition="Répertoire de l’arborescence où le contenu d’un système de fichiers devient accessible après une opération de montage." data-courses="debian" data-modules="d09" data-letter="P" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="326" aria-labelledby="point-de-montage-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="point-de-montage-titre"><a href="#point-de-montage" class="tssr-glossary-card__anchor" aria-label="Point de montage">Point de montage</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Répertoire de l’arborescence où le contenu d’un système de fichiers devient accessible après une opération de montage.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="point-de-restauration" data-glossary-card data-term="Point de restauration" data-full-name data-aliases data-keywords="restauration système" data-definition="Instantané des fichiers système, pilotes, registre et paramètres Windows permettant d’annuler certaines modifications sans restaurer les documents personnels." data-courses="windows" data-modules="w10" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="015" data-source-order="136" aria-labelledby="point-de-restauration-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="point-de-restauration-titre"><a href="#point-de-restauration" class="tssr-glossary-card__anchor" aria-label="Point de restauration">Point de restauration</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Instantané des fichiers système, pilotes, registre et paramètres Windows permettant d’annuler certaines modifications sans restaurer les documents personnels.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pop3" data-glossary-card data-term="POP3" data-full-name="Post Office Protocol version 3" data-aliases data-keywords="courriel | téléchargement" data-definition="Protocole simple qui télécharge les messages d’un serveur vers un client, avec moins de synchronisation de dossiers qu’IMAP." data-courses="m365" data-modules="m04" data-letter="P" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="023" data-source-order="194" aria-labelledby="pop3-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pop3-titre"><a href="#pop3" class="tssr-glossary-card__anchor" aria-label="POP3">POP3</a></h2>
    <p class="tssr-glossary-card__full-name">Post Office Protocol version 3</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole simple qui télécharge les messages d’un serveur vers un client, avec moins de synchronisation de dossiers qu’IMAP.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-04-exploiter-outlook-et-savoir-le-depanner/" title="Microsoft 365 — Outils collaboratifs — Module 04 — Exploiter Outlook et savoir le dépanner">Microsoft 365 · M04 · Outlook</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="port-reseau" data-glossary-card data-term="Port réseau" data-full-name data-aliases="port TCP/UDP" data-keywords="socket | service" data-definition="Numéro de couche transport qui identifie un service ou une application sur une adresse IP, entre 0 et 65535 pour TCP ou UDP." data-courses="reseaux" data-modules="r01 r05" data-letter="P" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="53" aria-labelledby="port-reseau-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="port-reseau-titre"><a href="#port-reseau" class="tssr-glossary-card__anchor" aria-label="Port réseau">Port réseau</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Numéro de couche transport qui identifie un service ou une application sur une adresse IP, entre 0 et 65535 pour TCP ou UDP.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> port TCP/UDP</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="portefeuille-de-services" data-glossary-card data-term="Portefeuille de services" data-full-name data-aliases="service portfolio" data-keywords="pipeline | catalogue" data-definition="Ensemble structuré des services en étude, disponibles et retirés, utilisé pour décider des investissements et priorités." data-courses="itil" data-modules="i03" data-letter="P" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="401" aria-labelledby="portefeuille-de-services-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="portefeuille-de-services-titre"><a href="#portefeuille-de-services" class="tssr-glossary-card__anchor" aria-label="Portefeuille de services">Portefeuille de services</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble structuré des services en étude, disponibles et retirés, utilisé pour décider des investissements et priorités.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> service portfolio</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="powershell" data-glossary-card data-term="PowerShell" data-full-name data-aliases data-keywords="script | cmdlet | objet" data-definition="Shell et langage d’automatisation Microsoft orienté objets, fondé sur des cmdlets, des fournisseurs et un pipeline structuré." data-courses="windows msp" data-modules="w03 w11 s01" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="137" aria-labelledby="powershell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="powershell-titre"><a href="#powershell" class="tssr-glossary-card__anchor" aria-label="PowerShell">PowerShell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Shell et langage d’automatisation Microsoft orienté objets, fondé sur des cmdlets, des fournisseurs et un pipeline structuré.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="prefixe-reseau" data-glossary-card data-term="Préfixe réseau" data-full-name data-aliases="network prefix" data-keywords="CIDR | masque" data-definition="Suite de bits commune qui identifie un réseau IP ; sa longueur est indiquée après une barre oblique dans la notation CIDR." data-courses="reseaux" data-modules="r03 r06" data-letter="P" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="54" aria-labelledby="prefixe-reseau-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="prefixe-reseau-titre"><a href="#prefixe-reseau" class="tssr-glossary-card__anchor" aria-label="Préfixe réseau">Préfixe réseau</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Suite de bits commune qui identifie un réseau IP ; sa longueur est indiquée après une barre oblique dans la notation CIDR.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> network prefix</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="priorite-itil" data-glossary-card data-term="Priorité ITIL" data-full-name data-aliases data-keywords="impact | urgence" data-definition="Ordre de traitement dérivé de l’impact et de l’urgence, utilisé pour allouer les ressources et viser des délais adaptés." data-courses="itil glpi" data-modules="i04 i06 g04" data-letter="P" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="402" aria-labelledby="priorite-itil-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="priorite-itil-titre"><a href="#priorite-itil" class="tssr-glossary-card__anchor" aria-label="Priorité ITIL">Priorité ITIL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ordre de traitement dérivé de l’impact et de l’urgence, utilisé pour allouer les ressources et viser des délais adaptés.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="probleme-itil" data-glossary-card data-term="Problème ITIL" data-full-name data-aliases="problem" data-keywords="cause racine | erreur connue" data-definition="Cause, ou cause potentielle, d’un ou plusieurs incidents ; son traitement vise à comprendre et réduire les récurrences." data-courses="itil" data-modules="i06" data-letter="P" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="403" aria-labelledby="probleme-itil-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="probleme-itil-titre"><a href="#probleme-itil" class="tssr-glossary-card__anchor" aria-label="Problème ITIL">Problème ITIL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Cause, ou cause potentielle, d’un ou plusieurs incidents ; son traitement vise à comprendre et réduire les récurrences.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> problem</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="processus" data-glossary-card data-term="Processus" data-full-name data-aliases data-keywords="PID | programme" data-definition="Instance en cours d’exécution d’un programme, avec un PID, un état, un espace mémoire, des fichiers ouverts et une identité d’exécution." data-courses="linux windows debian" data-modules="l08 w10 d12" data-letter="P" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="015" data-source-order="255" aria-labelledby="processus-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="processus-titre"><a href="#processus" class="tssr-glossary-card__anchor" aria-label="Processus">Processus</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Instance en cours d’exécution d’un programme, avec un PID, un état, un espace mémoire, des fichiers ouverts et une identité d’exécution.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="processus-itil" data-glossary-card data-term="Processus ITIL" data-full-name data-aliases data-keywords="activité | KPI | rôle" data-definition="Ensemble structuré d’activités transformant des entrées en résultats mesurables pour atteindre un objectif de gestion des services." data-courses="itil" data-modules="i02" data-letter="P" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="404" aria-labelledby="processus-itil-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="processus-itil-titre"><a href="#processus-itil" class="tssr-glossary-card__anchor" aria-label="Processus ITIL">Processus ITIL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble structuré d’activités transformant des entrées en résultats mesurables pour atteindre un objectif de gestion des services.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="profil-glpi" data-glossary-card data-term="Profil GLPI" data-full-name data-aliases data-keywords="habilitation | autorisation" data-definition="Ensemble de droits fonctionnels qui, combiné à une entité et une éventuelle récursivité, définit ce qu’un utilisateur peut voir et faire." data-courses="glpi" data-modules="g02" data-letter="P" data-course-sort="administration glpi" data-module-sort="053" data-source-order="471" aria-labelledby="profil-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="profil-glpi-titre"><a href="#profil-glpi" class="tssr-glossary-card__anchor" aria-label="Profil GLPI">Profil GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble de droits fonctionnels qui, combiné à une entité et une éventuelle récursivité, définit ce qu’un utilisateur peut voir et faire.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="profil-reseau-windows" data-glossary-card data-term="Profil réseau Windows" data-full-name data-aliases data-keywords="pare-feu | public | privé" data-definition="Catégorie Domaine, Privé ou Public qui détermine l’ensemble de règles de pare-feu appliqué à une connexion Windows." data-courses="windows" data-modules="w07" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="012" data-source-order="138" aria-labelledby="profil-reseau-windows-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="profil-reseau-windows-titre"><a href="#profil-reseau-windows" class="tssr-glossary-card__anchor" aria-label="Profil réseau Windows">Profil réseau Windows</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Catégorie Domaine, Privé ou Public qui détermine l’ensemble de règles de pare-feu appliqué à une connexion Windows.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="profil-utilisateur-windows" data-glossary-card data-term="Profil utilisateur Windows" data-full-name data-aliases data-keywords="NTUSER.DAT | bureau" data-definition="Ensemble de dossiers et paramètres propres à un utilisateur, généralement stocké sous C:\Users et chargé à l’ouverture de session." data-courses="windows" data-modules="w05" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="139" aria-labelledby="profil-utilisateur-windows-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="profil-utilisateur-windows-titre"><a href="#profil-utilisateur-windows" class="tssr-glossary-card__anchor" aria-label="Profil utilisateur Windows">Profil utilisateur Windows</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble de dossiers et paramètres propres à un utilisateur, généralement stocké sous C:\Users et chargé à l’ouverture de session.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="propriete-powershell" data-glossary-card data-term="Propriété PowerShell" data-full-name data-aliases data-keywords="objet | Get-Member" data-definition="Information nommée portée par un objet PowerShell, par exemple Name, Status ou Length, que l’on peut sélectionner et filtrer." data-courses="windows" data-modules="w03 w11" data-letter="P" data-course-sort="systemes clients microsoft" data-module-sort="008" data-source-order="140" aria-labelledby="propriete-powershell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="propriete-powershell-titre"><a href="#propriete-powershell" class="tssr-glossary-card__anchor" aria-label="Propriété PowerShell">Propriété PowerShell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Information nommée portée par un objet PowerShell, par exemple Name, Status ou Length, que l’on peut sélectionner et filtrer.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-03-interagir-avec-windows-10/" title="Systèmes clients Microsoft — Module 03 — Interagir avec Windows 10">Windows · M03 · Interagir avec Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ps" data-glossary-card data-term="ps" data-full-name data-aliases data-keywords="processus | PID" data-definition="Commande qui affiche un instantané des processus et accepte plusieurs styles d’options pour choisir colonnes, utilisateurs et arborescence." data-courses="linux debian" data-modules="l08 d12" data-letter="P" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="256" aria-labelledby="ps-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ps-titre"><a href="#ps" class="tssr-glossary-card__anchor" aria-label="ps">ps</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui affiche un instantané des processus et accepte plusieurs styles d’options pour choisir colonnes, utilisateurs et arborescence.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pv" data-glossary-card data-term="PV" data-full-name="Physical Volume" data-aliases="volume physique" data-keywords="LVM | pvcreate" data-definition="Périphérique bloc initialisé pour LVM et apportant des extensions physiques à un groupe de volumes." data-courses="debian" data-modules="d08" data-letter="P" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="327" aria-labelledby="pv-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pv-titre"><a href="#pv" class="tssr-glossary-card__anchor" aria-label="PV">PV</a></h2>
    <p class="tssr-glossary-card__full-name">Physical Volume</p>
  </header>
  <p class="tssr-glossary-card__definition">Périphérique bloc initialisé pour LVM et apportant des extensions physiques à un groupe de volumes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> volume physique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pvcreate" data-glossary-card data-term="pvcreate" data-full-name data-aliases data-keywords="PV | LVM" data-definition="Commande qui initialise un périphérique bloc comme volume physique LVM après vérification de sa cible et de son contenu." data-courses="debian" data-modules="d08" data-letter="P" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="328" aria-labelledby="pvcreate-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pvcreate-titre"><a href="#pvcreate" class="tssr-glossary-card__anchor" aria-label="pvcreate">pvcreate</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui initialise un périphérique bloc comme volume physique LVM après vérification de sa cible et de son contenu.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="pwd" data-glossary-card data-term="pwd" data-full-name="Print Working Directory" data-aliases data-keywords="répertoire courant" data-definition="Commande qui affiche le chemin absolu du répertoire courant du shell afin de confirmer le contexte avant une manipulation." data-courses="linux" data-modules="l03 l04" data-letter="P" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="257" aria-labelledby="pwd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="pwd-titre"><a href="#pwd" class="tssr-glossary-card__anchor" aria-label="pwd">pwd</a></h2>
    <p class="tssr-glossary-card__full-name">Print Working Directory</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui affiche le chemin absolu du répertoire courant du shell afin de confirmer le contexte avant une manipulation.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="qualification-de-ticket" data-glossary-card data-term="Qualification de ticket" data-full-name data-aliases data-keywords="priorité | diagnostic" data-definition="Collecte et classification du type, de la catégorie, de l’impact, de l’urgence, des symptômes et des éléments concernés." data-courses="itil glpi" data-modules="i09 g04" data-letter="Q" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="051" data-source-order="405" aria-labelledby="qualification-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="qualification-de-ticket-titre"><a href="#qualification-de-ticket" class="tssr-glossary-card__anchor" aria-label="Qualification de ticket">Qualification de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Collecte et classification du type, de la catégorie, de l’impact, de l’urgence, des symptômes et des éléments concernés.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="racine-linux" data-glossary-card data-term="Racine Linux" data-full-name data-aliases="root directory" data-keywords="/ | arborescence" data-definition="Sommet de l’arborescence représenté par /, sous lequel se trouvent tous les répertoires et points de montage du système." data-courses="linux debian" data-modules="l04 d09" data-letter="R" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="258" aria-labelledby="racine-linux-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="racine-linux-titre"><a href="#racine-linux" class="tssr-glossary-card__anchor" aria-label="Racine Linux">Racine Linux</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Sommet de l’arborescence représenté par /, sous lequel se trouvent tous les répertoires et points de montage du système.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> root directory</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="rdp" data-glossary-card data-term="RDP" data-full-name="Remote Desktop Protocol" data-aliases="protocole Bureau à distance" data-keywords="TCP 3389" data-definition="Protocole Microsoft utilisé par le Bureau à distance pour transporter l’affichage, les entrées et certains périphériques d’une session distante." data-courses="windows" data-modules="w08" data-letter="R" data-course-sort="systemes clients microsoft" data-module-sort="013" data-source-order="141" aria-labelledby="rdp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="rdp-titre"><a href="#rdp" class="tssr-glossary-card__anchor" aria-label="RDP">RDP</a></h2>
    <p class="tssr-glossary-card__full-name">Remote Desktop Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole Microsoft utilisé par le Bureau à distance pour transporter l’affichage, les entrées et certains périphériques d’une session distante.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> protocole Bureau à distance</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources/" title="Systèmes clients Microsoft — Module 08 — Le partage de ressources">Windows · M08 · Partage de ressources</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="recursivite-glpi" data-glossary-card data-term="Récursivité GLPI" data-full-name data-aliases data-keywords="entité | portée" data-definition="Option qui étend la visibilité ou une habilitation d’une entité vers ses sous-entités dans la hiérarchie GLPI." data-courses="glpi" data-modules="g02" data-letter="R" data-course-sort="administration glpi" data-module-sort="053" data-source-order="472" aria-labelledby="recursivite-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="recursivite-glpi-titre"><a href="#recursivite-glpi" class="tssr-glossary-card__anchor" aria-label="Récursivité GLPI">Récursivité GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Option qui étend la visibilité ou une habilitation d’une entité vers ses sous-entités dans la hiérarchie GLPI.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="redirection-shell" data-glossary-card data-term="Redirection shell" data-full-name data-aliases data-keywords="stdin | stdout | stderr" data-definition="Mécanisme qui change la source ou la destination d’un flux avec des opérateurs comme &gt;, &gt;&gt;, &lt;, 2&gt; ou 2&gt;&amp;1." data-courses="linux" data-modules="l06 l08" data-letter="R" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="028" data-source-order="259" aria-labelledby="redirection-shell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="redirection-shell-titre"><a href="#redirection-shell" class="tssr-glossary-card__anchor" aria-label="Redirection shell">Redirection shell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mécanisme qui change la source ou la destination d’un flux avec des opérateurs comme &gt;, &gt;&gt;, &lt;, 2&gt; ou 2&gt;&amp;1.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres/" title="Utilisation d’une distribution GNU/Linux — Module 06 — Recherches et expressions régulières">GNU/Linux · M06 · Recherches et regex</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="reference-absolue-excel" data-glossary-card data-term="Référence absolue Excel" data-full-name data-aliases data-keywords="Excel | formule" data-definition="Référence de cellule verrouillée avec des signes $, comme $A$1, qui ne se décale pas lors de la copie d’une formule." data-courses="m365" data-modules="m03" data-letter="R" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="195" aria-labelledby="reference-absolue-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="reference-absolue-excel-titre"><a href="#reference-absolue-excel" class="tssr-glossary-card__anchor" aria-label="Référence absolue Excel">Référence absolue Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Référence de cellule verrouillée avec des signes $, comme $A$1, qui ne se décale pas lors de la copie d’une formule.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="reference-relative-excel" data-glossary-card data-term="Référence relative Excel" data-full-name data-aliases data-keywords="Excel | recopie" data-definition="Référence de cellule comme A1 qui s’ajuste selon le déplacement lorsque la formule est copiée dans une autre cellule." data-courses="m365" data-modules="m03" data-letter="R" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="196" aria-labelledby="reference-relative-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="reference-relative-excel-titre"><a href="#reference-relative-excel" class="tssr-glossary-card__anchor" aria-label="Référence relative Excel">Référence relative Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Référence de cellule comme A1 qui s’ajuste selon le déplacement lorsque la formule est copiée dans une autre cellule.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="registre-windows" data-glossary-card data-term="Registre Windows" data-full-name data-aliases="Registry" data-keywords="ruche | clé | valeur" data-definition="Base hiérarchique qui stocke de nombreux paramètres du système, des applications, du matériel et des profils utilisateurs." data-courses="windows" data-modules="w13" data-letter="R" data-course-sort="systemes clients microsoft" data-module-sort="018" data-source-order="142" aria-labelledby="registre-windows-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="registre-windows-titre"><a href="#registre-windows" class="tssr-glossary-card__anchor" aria-label="Registre Windows">Registre Windows</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Base hiérarchique qui stocke de nombreux paramètres du système, des applications, du matériel et des profils utilisateurs.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Registry</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-13-les-strategies-de-groupe-local/" title="Systèmes clients Microsoft — Module 13 — Les stratégies de groupe local">Windows · M13 · Stratégies de groupe</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="regle-de-pare-feu" data-glossary-card data-term="Règle de pare-feu" data-full-name data-aliases data-keywords="entrant | sortant" data-definition="Condition qui autorise ou bloque un trafic selon son sens, programme, protocole, port, adresse et profil réseau." data-courses="windows" data-modules="w07" data-letter="R" data-course-sort="systemes clients microsoft" data-module-sort="012" data-source-order="143" aria-labelledby="regle-de-pare-feu-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="regle-de-pare-feu-titre"><a href="#regle-de-pare-feu" class="tssr-glossary-card__anchor" aria-label="Règle de pare-feu">Règle de pare-feu</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Condition qui autorise ou bloque un trafic selon son sens, programme, protocole, port, adresse et profil réseau.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-07-la-gestion-du-reseau-et-du-pare-feu/" title="Systèmes clients Microsoft — Module 07 — La gestion du réseau et du pare-feu">Windows · M07 · Réseau et pare-feu</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="regle-metier-glpi" data-glossary-card data-term="Règle métier GLPI" data-full-name data-aliases data-keywords="automatisation | critère | action" data-definition="Mécanisme ordonné qui teste des critères sur un ticket puis applique des actions comme catégorie, priorité ou affectation." data-courses="glpi" data-modules="g04" data-letter="R" data-course-sort="administration glpi" data-module-sort="055" data-source-order="473" aria-labelledby="regle-metier-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="regle-metier-glpi-titre"><a href="#regle-metier-glpi" class="tssr-glossary-card__anchor" aria-label="Règle métier GLPI">Règle métier GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mécanisme ordonné qui teste des critères sur un ticket puis applique des actions comme catégorie, priorité ou affectation.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="release" data-glossary-card data-term="Release" data-full-name data-aliases="version mise en production" data-keywords="déploiement | transition" data-definition="Ensemble cohérent de composants nouveaux ou modifiés préparé, testé et autorisé pour être déployé dans un environnement." data-courses="itil" data-modules="i04" data-letter="R" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="406" aria-labelledby="release-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="release-titre"><a href="#release" class="tssr-glossary-card__anchor" aria-label="Release">Release</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble cohérent de composants nouveaux ou modifiés préparé, testé et autorisé pour être déployé dans un environnement.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> version mise en production</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="repertoire-personnel" data-glossary-card data-term="Répertoire personnel" data-full-name data-aliases="home directory | HOME" data-keywords="profil Linux" data-definition="Répertoire propre à un utilisateur pour ses fichiers et configurations, représenté par ~ et généralement situé sous /home." data-courses="linux debian" data-modules="l03 l04 d10" data-letter="R" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="260" aria-labelledby="repertoire-personnel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="repertoire-personnel-titre"><a href="#repertoire-personnel" class="tssr-glossary-card__anchor" aria-label="Répertoire personnel">Répertoire personnel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Répertoire propre à un utilisateur pour ses fichiers et configurations, représenté par ~ et généralement situé sous /home.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> home directory · HOME</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="requete-sql" data-glossary-card data-term="Requête SQL" data-full-name data-aliases data-keywords="SELECT | SGBD" data-definition="Instruction envoyée au SGBD pour lire ou modifier des données ; dans le module, les requêtes SELECT sont privilégiées pour l’interrogation." data-courses="glpi" data-modules="g05" data-letter="R" data-course-sort="administration glpi" data-module-sort="056" data-source-order="474" aria-labelledby="requete-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="requete-sql-titre"><a href="#requete-sql" class="tssr-glossary-card__anchor" aria-label="Requête SQL">Requête SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Instruction envoyée au SGBD pour lire ou modifier des données ; dans le module, les requêtes SELECT sont privilégiées pour l’interrogation.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="rescue-mode" data-glossary-card data-term="rescue mode" data-full-name data-aliases="mode secours" data-keywords="single-user | systemd" data-definition="Cible systemd de secours qui monte les systèmes locaux et fournit un environnement mono-utilisateur pour la maintenance." data-courses="debian" data-modules="d04" data-letter="R" data-course-sort="administration debian gnu/linux" data-module-sort="034" data-source-order="329" aria-labelledby="rescue-mode-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="rescue-mode-titre"><a href="#rescue-mode" class="tssr-glossary-card__anchor" aria-label="rescue mode">rescue mode</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Cible systemd de secours qui monte les systèmes locaux et fournit un environnement mono-utilisateur pour la maintenance.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> mode secours</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance/" title="Administration Debian GNU/Linux — Module 04 — Debian en mode maintenance">Debian · M04 · Mode maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="reseau-host-only" data-glossary-card data-term="Réseau host-only" data-full-name data-aliases="réseau privé hôte" data-keywords="VM | isolation" data-definition="Réseau virtuel privé entre l’hôte et ses machines virtuelles, sans accès direct au réseau physique sauf routage ajouté." data-courses="windows" data-modules="wadd" data-letter="R" data-course-sort="systemes clients microsoft" data-module-sort="019" data-source-order="144" aria-labelledby="reseau-host-only-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="reseau-host-only-titre"><a href="#reseau-host-only" class="tssr-glossary-card__anchor" aria-label="Réseau host-only">Réseau host-only</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Réseau virtuel privé entre l’hôte et ses machines virtuelles, sans accès direct au réseau physique sauf routage ajouté.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> réseau privé hôte</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="reseau-ponte" data-glossary-card data-term="Réseau ponté" data-full-name data-aliases="bridged networking" data-keywords="VM | bridge" data-definition="Mode virtuel qui connecte directement la machine virtuelle au réseau physique comme un équipement distinct possédant sa propre adresse." data-courses="windows msp" data-modules="wadd s01" data-letter="R" data-course-sort="systemes clients microsoft" data-module-sort="019" data-source-order="145" aria-labelledby="reseau-ponte-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="reseau-ponte-titre"><a href="#reseau-ponte" class="tssr-glossary-card__anchor" aria-label="Réseau ponté">Réseau ponté</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mode virtuel qui connecte directement la machine virtuelle au réseau physique comme un équipement distinct possédant sa propre adresse.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> bridged networking</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-additionnel-workstation/" title="Systèmes clients Microsoft — Module additionnel — Workstation">Windows · Additionnel · Workstation</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="resize2fs" data-glossary-card data-term="resize2fs" data-full-name data-aliases data-keywords="ext4 | extension" data-definition="Outil qui redimensionne un système de fichiers ext2, ext3 ou ext4 après adaptation du périphérique bloc sous-jacent." data-courses="debian" data-modules="d08 d09" data-letter="R" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="330" aria-labelledby="resize2fs-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="resize2fs-titre"><a href="#resize2fs" class="tssr-glossary-card__anchor" aria-label="resize2fs">resize2fs</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Outil qui redimensionne un système de fichiers ext2, ext3 ou ext4 après adaptation du périphérique bloc sous-jacent.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="resolution" data-glossary-card data-term="Résolution" data-full-name data-aliases data-keywords="incident | solution" data-definition="Action ou ensemble d’actions qui supprime la cause d’un incident ou rétablit durablement le service attendu." data-courses="itil" data-modules="i06 i09" data-letter="R" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="407" aria-labelledby="resolution-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="resolution-titre"><a href="#resolution" class="tssr-glossary-card__anchor" aria-label="Résolution">Résolution</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Action ou ensemble d’actions qui supprime la cause d’un incident ou rétablit durablement le service attendu.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="retablissement-du-service" data-glossary-card data-term="Rétablissement du service" data-full-name data-aliases="service restoration" data-keywords="incident" data-definition="Retour du service à un état utilisable, éventuellement grâce à un contournement, sans attendre nécessairement la suppression de la cause." data-courses="itil" data-modules="i06" data-letter="R" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="408" aria-labelledby="retablissement-du-service-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="retablissement-du-service-titre"><a href="#retablissement-du-service" class="tssr-glossary-card__anchor" aria-label="Rétablissement du service">Rétablissement du service</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Retour du service à un état utilisable, éventuellement grâce à un contournement, sans attendre nécessairement la suppression de la cause.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> service restoration</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="reunion-teams" data-glossary-card data-term="Réunion Teams" data-full-name data-aliases data-keywords="visioconférence | calendrier" data-definition="Session audio, vidéo et de partage d’écran planifiée ou instantanée, intégrée au calendrier et aux espaces Microsoft 365." data-courses="m365" data-modules="m05" data-letter="R" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="197" aria-labelledby="reunion-teams-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="reunion-teams-titre"><a href="#reunion-teams" class="tssr-glossary-card__anchor" aria-label="Réunion Teams">Réunion Teams</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Session audio, vidéo et de partage d’écran planifiée ou instantanée, intégrée au calendrier et aux espaces Microsoft 365.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="risque" data-glossary-card data-term="Risque" data-full-name data-aliases data-keywords="impact | contrôle" data-definition="Effet possible de l’incertitude sur un objectif, évalué notamment par vraisemblance et impact avant une décision ou un changement." data-courses="itil" data-modules="i03 i04" data-letter="R" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="045" data-source-order="409" aria-labelledby="risque-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="risque-titre"><a href="#risque" class="tssr-glossary-card__anchor" aria-label="Risque">Risque</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Effet possible de l’incertitude sur un objectif, évalué notamment par vraisemblance et impact avant une décision ou un changement.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="rm" data-glossary-card data-term="rm" data-full-name data-aliases data-keywords="suppression | danger" data-definition="Commande qui supprime des fichiers et, avec -r, des arborescences ; la cible doit être affichée et vérifiée avant une suppression récursive." data-courses="linux" data-modules="l04" data-letter="R" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="261" aria-labelledby="rm-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="rm-titre"><a href="#rm" class="tssr-glossary-card__anchor" aria-label="rm">rm</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui supprime des fichiers et, avec -r, des arborescences ; la cible doit être affichée et vérifiée avant une suppression récursive.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="rmdir" data-glossary-card data-term="rmdir" data-full-name data-aliases data-keywords="dossier vide | suppression" data-definition="Commande qui supprime uniquement des répertoires vides, ce qui évite de retirer accidentellement leur contenu." data-courses="linux" data-modules="l04" data-letter="R" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="262" aria-labelledby="rmdir-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="rmdir-titre"><a href="#rmdir" class="tssr-glossary-card__anchor" aria-label="rmdir">rmdir</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui supprime uniquement des répertoires vides, ce qui évite de retirer accidentellement leur contenu.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="routage-dynamique" data-glossary-card data-term="Routage dynamique" data-full-name data-aliases data-keywords="protocole de routage" data-definition="Méthode où des routeurs échangent des informations au moyen d’un protocole afin d’adapter automatiquement leurs routes aux changements." data-courses="reseaux" data-modules="r04" data-letter="R" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="57" aria-labelledby="routage-dynamique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="routage-dynamique-titre"><a href="#routage-dynamique" class="tssr-glossary-card__anchor" aria-label="Routage dynamique">Routage dynamique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Méthode où des routeurs échangent des informations au moyen d’un protocole afin d’adapter automatiquement leurs routes aux changements.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="routage-statique" data-glossary-card data-term="Routage statique" data-full-name data-aliases data-keywords="route manuelle" data-definition="Méthode où l’administrateur saisit manuellement les routes. Elle est prévisible mais ne s’adapte pas seule à une panne ou une nouvelle topologie." data-courses="reseaux" data-modules="r04" data-letter="R" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="58" aria-labelledby="routage-statique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="routage-statique-titre"><a href="#routage-statique" class="tssr-glossary-card__anchor" aria-label="Routage statique">Routage statique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Méthode où l’administrateur saisit manuellement les routes. Elle est prévisible mais ne s’adapte pas seule à une panne ou une nouvelle topologie.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="route-par-defaut" data-glossary-card data-term="Route par défaut" data-full-name data-aliases="default route" data-keywords="table de routage" data-definition="Entrée utilisée lorsqu’aucune route plus précise ne correspond à la destination, notée 0.0.0.0/0 en IPv4 ou ::/0 en IPv6." data-courses="reseaux debian" data-modules="r04 d05" data-letter="R" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="55" aria-labelledby="route-par-defaut-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="route-par-defaut-titre"><a href="#route-par-defaut" class="tssr-glossary-card__anchor" aria-label="Route par défaut">Route par défaut</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Entrée utilisée lorsqu’aucune route plus précise ne correspond à la destination, notée 0.0.0.0/0 en IPv4 ou ::/0 en IPv6.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> default route</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="routeur" data-glossary-card data-term="Routeur" data-full-name data-aliases data-keywords="passerelle | couche 3" data-definition="Équipement de couche 3 qui consulte une table de routage pour acheminer les paquets entre des réseaux IP différents." data-courses="reseaux" data-modules="r01 r04" data-letter="R" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="56" aria-labelledby="routeur-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="routeur-titre"><a href="#routeur" class="tssr-glossary-card__anchor" aria-label="Routeur">Routeur</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Équipement de couche 3 qui consulte une table de routage pour acheminer les paquets entre des réseaux IP différents.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="rtt" data-glossary-card data-term="RTT" data-full-name="Round-Trip Time" data-aliases="temps aller-retour" data-keywords="latence" data-definition="Durée aller-retour d’un message entre une source et une destination, couramment affichée par ping en millisecondes." data-courses="reseaux" data-modules="r05" data-letter="R" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="59" aria-labelledby="rtt-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="rtt-titre"><a href="#rtt" class="tssr-glossary-card__anchor" aria-label="RTT">RTT</a></h2>
    <p class="tssr-glossary-card__full-name">Round-Trip Time</p>
  </header>
  <p class="tssr-glossary-card__definition">Durée aller-retour d’un message entre une source et une destination, couramment affichée par ping en millisecondes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> temps aller-retour</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ruche-du-registre" data-glossary-card data-term="Ruche du Registre" data-full-name data-aliases="registry hive" data-keywords="HKLM | HKCU" data-definition="Branche racine logique du Registre Windows, telle que HKEY_LOCAL_MACHINE ou HKEY_CURRENT_USER, chargée depuis un ou plusieurs fichiers." data-courses="windows" data-modules="w13" data-letter="R" data-course-sort="systemes clients microsoft" data-module-sort="018" data-source-order="146" aria-labelledby="ruche-du-registre-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ruche-du-registre-titre"><a href="#ruche-du-registre" class="tssr-glossary-card__anchor" aria-label="Ruche du Registre">Ruche du Registre</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Branche racine logique du Registre Windows, telle que HKEY_LOCAL_MACHINE ou HKEY_CURRENT_USER, chargée depuis un ou plusieurs fichiers.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> registry hive</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-13-les-strategies-de-groupe-local/" title="Systèmes clients Microsoft — Module 13 — Les stratégies de groupe local">Windows · M13 · Stratégies de groupe</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="rwx" data-glossary-card data-term="rwx" data-full-name data-aliases="read write execute" data-keywords="permissions | chmod" data-definition="Triplet de permissions Unix : lecture, écriture et exécution, évalué séparément pour propriétaire, groupe et autres." data-courses="debian" data-modules="d11" data-letter="R" data-course-sort="administration debian gnu/linux" data-module-sort="041" data-source-order="331" aria-labelledby="rwx-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="rwx-titre"><a href="#rwx" class="tssr-glossary-card__anchor" aria-label="rwx">rwx</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Triplet de permissions Unix : lecture, écriture et exécution, évalué séparément pour propriétaire, groupe et autres.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> read write execute</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires/" title="Administration Debian GNU/Linux — Module 11 — Droits sur les fichiers et répertoires">Debian · M11 · Droits Linux</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="saas" data-glossary-card data-term="SaaS" data-full-name="Software as a Service" data-aliases="logiciel en tant que service" data-keywords="cloud | abonnement" data-definition="Modèle où une application est hébergée par un fournisseur et utilisée comme service, généralement par navigateur ou client connecté." data-courses="m365" data-modules="m01" data-letter="S" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="020" data-source-order="198" aria-labelledby="saas-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="saas-titre"><a href="#saas" class="tssr-glossary-card__anchor" aria-label="SaaS">SaaS</a></h2>
    <p class="tssr-glossary-card__full-name">Software as a Service</p>
  </header>
  <p class="tssr-glossary-card__definition">Modèle où une application est hébergée par un fournisseur et utilisée comme service, généralement par navigateur ou client connecté.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> logiciel en tant que service</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-01-decouverte-de-microsoft-365/" title="Microsoft 365 — Outils collaboratifs — Module 01 — Découverte de Microsoft 365">Microsoft 365 · M01 · Microsoft 365</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="saut-de-page" data-glossary-card data-term="Saut de page" data-full-name data-aliases data-keywords="Word | mise en page" data-definition="Marque Word qui force le contenu suivant à commencer sur une nouvelle page sans multiplier les paragraphes vides." data-courses="m365" data-modules="m02" data-letter="S" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="199" aria-labelledby="saut-de-page-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="saut-de-page-titre"><a href="#saut-de-page" class="tssr-glossary-card__anchor" aria-label="Saut de page">Saut de page</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Marque Word qui force le contenu suivant à commencer sur une nouvelle page sans multiplier les paragraphes vides.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="saut-de-section" data-glossary-card data-term="Saut de section" data-full-name data-aliases data-keywords="Word | section" data-definition="Séparation Word qui permet d’appliquer à une partie du document une mise en page, des colonnes ou des en-têtes différents." data-courses="m365" data-modules="m02" data-letter="S" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="200" aria-labelledby="saut-de-section-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="saut-de-section-titre"><a href="#saut-de-section" class="tssr-glossary-card__anchor" aria-label="Saut de section">Saut de section</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Séparation Word qui permet d’appliquer à une partie du document une mise en page, des colonnes ou des en-têtes différents.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sauvegarde-sql" data-glossary-card data-term="Sauvegarde SQL" data-full-name data-aliases="dump SQL" data-keywords="mysqldump | restauration" data-definition="Export cohérent de la structure et des données d’une base, à conserver séparément et à valider par un test de restauration." data-courses="glpi debian" data-modules="g05 d12" data-letter="S" data-course-sort="administration glpi" data-module-sort="042" data-source-order="475" aria-labelledby="sauvegarde-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sauvegarde-sql-titre"><a href="#sauvegarde-sql" class="tssr-glossary-card__anchor" aria-label="Sauvegarde SQL">Sauvegarde SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Export cohérent de la structure et des données d’une base, à conserver séparément et à valider par un test de restauration.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> dump SQL</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="savoir-etre" data-glossary-card data-term="Savoir-être" data-full-name data-aliases="aptitudes professionnelles" data-keywords="compétence | posture" data-definition="Comportements professionnels observables comme écoute, rigueur, adaptation, communication et gestion de la relation." data-courses="itil" data-modules="i08" data-letter="S" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="050" data-source-order="410" aria-labelledby="savoir-etre-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="savoir-etre-titre"><a href="#savoir-etre" class="tssr-glossary-card__anchor" aria-label="Savoir-être">Savoir-être</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Comportements professionnels observables comme écoute, rigueur, adaptation, communication et gestion de la relation.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> aptitudes professionnelles</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-08-savoir-savoir-faire-savoir-etre/" title="Sensibilisation ITIL et gestion de parc — Module 08 — Savoir, savoir-faire, savoir-être">ITIL · M08 · Compétences professionnelles</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="savoir-faire" data-glossary-card data-term="Savoir-faire" data-full-name data-aliases="compétence pratique" data-keywords="mise en pratique" data-definition="Capacité à mobiliser des connaissances, méthodes et outils pour réaliser correctement une activité dans une situation donnée." data-courses="itil" data-modules="i08" data-letter="S" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="050" data-source-order="411" aria-labelledby="savoir-faire-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="savoir-faire-titre"><a href="#savoir-faire" class="tssr-glossary-card__anchor" aria-label="Savoir-faire">Savoir-faire</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Capacité à mobiliser des connaissances, méthodes et outils pour réaliser correctement une activité dans une situation donnée.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> compétence pratique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-08-savoir-savoir-faire-savoir-etre/" title="Sensibilisation ITIL et gestion de parc — Module 08 — Savoir, savoir-faire, savoir-être">ITIL · M08 · Compétences professionnelles</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="script-shell" data-glossary-card data-term="Script shell" data-full-name data-aliases="script Bash" data-keywords="automatisation" data-definition="Fichier texte contenant une suite de commandes interprétées par un shell, souvent précédé d’un shebang et rendu exécutable." data-courses="linux msp" data-modules="l08 s01" data-letter="S" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="263" aria-labelledby="script-shell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="script-shell-titre"><a href="#script-shell" class="tssr-glossary-card__anchor" aria-label="Script shell">Script shell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fichier texte contenant une suite de commandes interprétées par un shell, souvent précédé d’un shebang et rendu exécutable.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> script Bash</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sdu" data-glossary-card data-term="SDU" data-full-name="Service Data Unit" data-aliases="unité de données de service" data-keywords="encapsulation | OSI" data-definition="Données remises par une couche supérieure avant que la couche courante y ajoute ses informations de protocole pour former une PDU." data-courses="reseaux" data-modules="r01" data-letter="S" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="60" aria-labelledby="sdu-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sdu-titre"><a href="#sdu" class="tssr-glossary-card__anchor" aria-label="SDU">SDU</a></h2>
    <p class="tssr-glossary-card__full-name">Service Data Unit</p>
  </header>
  <p class="tssr-glossary-card__definition">Données remises par une couche supérieure avant que la couche courante y ajoute ses informations de protocole pour former une PDU.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> unité de données de service</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="segment" data-glossary-card data-term="Segment" data-full-name data-aliases data-keywords="TCP | couche 4" data-definition="PDU de TCP à la couche transport, contenant notamment les ports ainsi que les informations de séquencement et de contrôle." data-courses="reseaux" data-modules="r01" data-letter="S" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="61" aria-labelledby="segment-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="segment-titre"><a href="#segment" class="tssr-glossary-card__anchor" aria-label="Segment">Segment</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">PDU de TCP à la couche transport, contenant notamment les ports ainsi que les informations de séquencement et de contrôle.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="select-object" data-glossary-card data-term="Select-Object" data-full-name data-aliases="select" data-keywords="projection | PowerShell" data-definition="Cmdlet PowerShell qui choisit des propriétés ou une portion des objets sans les réduire à une simple présentation visuelle." data-courses="windows" data-modules="w11" data-letter="S" data-course-sort="systemes clients microsoft" data-module-sort="016" data-source-order="147" aria-labelledby="select-object-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="select-object-titre"><a href="#select-object" class="tssr-glossary-card__anchor" aria-label="Select-Object">Select-Object</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Cmdlet PowerShell qui choisit des propriétés ou une portion des objets sans les réduire à une simple présentation visuelle.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> select</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="service-informatique" data-glossary-card data-term="Service informatique" data-full-name data-aliases="IT service" data-keywords="utilité | garantie" data-definition="Moyen de créer de la valeur pour un client en facilitant les résultats attendus sans lui faire porter tous les coûts et risques spécifiques." data-courses="itil" data-modules="i02" data-letter="S" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="412" aria-labelledby="service-informatique-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="service-informatique-titre"><a href="#service-informatique" class="tssr-glossary-card__anchor" aria-label="Service informatique">Service informatique</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Moyen de créer de la valeur pour un client en facilitant les résultats attendus sans lui faire porter tous les coûts et risques spécifiques.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> IT service</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="service-windows" data-glossary-card data-term="Service Windows" data-full-name data-aliases data-keywords="services.msc | démarrage" data-definition="Processus géré par le gestionnaire de services, généralement exécuté en arrière-plan sans session utilisateur interactive." data-courses="windows" data-modules="w10" data-letter="S" data-course-sort="systemes clients microsoft" data-module-sort="015" data-source-order="148" aria-labelledby="service-windows-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="service-windows-titre"><a href="#service-windows" class="tssr-glossary-card__anchor" aria-label="Service Windows">Service Windows</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Processus géré par le gestionnaire de services, généralement exécuté en arrière-plan sans session utilisateur interactive.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="setgid" data-glossary-card data-term="setgid" data-full-name data-aliases data-keywords="permission spéciale | groupe" data-definition="Bit spécial qui exécute un fichier avec le GID de son groupe ou fait hériter aux nouveaux fichiers le groupe d’un répertoire." data-courses="debian" data-modules="d11" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="041" data-source-order="332" aria-labelledby="setgid-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="setgid-titre"><a href="#setgid" class="tssr-glossary-card__anchor" aria-label="setgid">setgid</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Bit spécial qui exécute un fichier avec le GID de son groupe ou fait hériter aux nouveaux fichiers le groupe d’un répertoire.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires/" title="Administration Debian GNU/Linux — Module 11 — Droits sur les fichiers et répertoires">Debian · M11 · Droits Linux</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="setuid" data-glossary-card data-term="setuid" data-full-name data-aliases data-keywords="permission spéciale | privilège" data-definition="Bit spécial qui exécute un fichier avec l’UID de son propriétaire ; son emploi doit rester limité et audité." data-courses="debian" data-modules="d11" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="041" data-source-order="333" aria-labelledby="setuid-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="setuid-titre"><a href="#setuid" class="tssr-glossary-card__anchor" aria-label="setuid">setuid</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Bit spécial qui exécute un fichier avec l’UID de son propriétaire ; son emploi doit rester limité et audité.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires/" title="Administration Debian GNU/Linux — Module 11 — Droits sur les fichiers et répertoires">Debian · M11 · Droits Linux</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sgbd" data-glossary-card data-term="SGBD" data-full-name="Système de gestion de base de données" data-aliases="DBMS" data-keywords="MariaDB | MySQL" data-definition="Logiciel qui stocke, interroge, protège et restaure des bases de données tout en gérant accès, contraintes et transactions." data-courses="glpi" data-modules="g01 g05" data-letter="S" data-course-sort="administration glpi" data-module-sort="052" data-source-order="476" aria-labelledby="sgbd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sgbd-titre"><a href="#sgbd" class="tssr-glossary-card__anchor" aria-label="SGBD">SGBD</a></h2>
    <p class="tssr-glossary-card__full-name">Système de gestion de base de données</p>
  </header>
  <p class="tssr-glossary-card__definition">Logiciel qui stocke, interroge, protège et restaure des bases de données tout en gérant accès, contraintes et transactions.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> DBMS</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-01-presentation-de-l-environnement-installation-de-glpi/" title="Administration GLPI — Module 01 — Présentation de l’environnement — Installation de GLPI">GLPI · M01 · Installation de GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sharepoint-online" data-glossary-card data-term="SharePoint Online" data-full-name data-aliases="SharePoint" data-keywords="intranet | documents" data-definition="Service Microsoft 365 de sites collaboratifs, bibliothèques documentaires, listes, recherche et gestion des autorisations." data-courses="m365" data-modules="m05" data-letter="S" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="201" aria-labelledby="sharepoint-online-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sharepoint-online-titre"><a href="#sharepoint-online" class="tssr-glossary-card__anchor" aria-label="SharePoint Online">SharePoint Online</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service Microsoft 365 de sites collaboratifs, bibliothèques documentaires, listes, recherche et gestion des autorisations.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> SharePoint</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="shebang" data-glossary-card data-term="Shebang" data-full-name data-aliases="hashbang" data-keywords="script | interpréteur" data-definition="Première ligne #! d’un script Unix qui indique au système quel interpréteur lancer, par exemple #!/usr/bin/env bash." data-courses="linux" data-modules="l08" data-letter="S" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="264" aria-labelledby="shebang-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="shebang-titre"><a href="#shebang" class="tssr-glossary-card__anchor" aria-label="Shebang">Shebang</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Première ligne #! d’un script Unix qui indique au système quel interpréteur lancer, par exemple #!/usr/bin/env bash.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> hashbang</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="shell" data-glossary-card data-term="Shell" data-full-name data-aliases data-keywords="Bash | interpréteur" data-definition="Programme qui interprète les commandes d’un utilisateur ou d’un script et lance les processus, redirections et pipelines demandés." data-courses="linux" data-modules="l03 l08" data-letter="S" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="265" aria-labelledby="shell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="shell-titre"><a href="#shell" class="tssr-glossary-card__anchor" aria-label="Shell">Shell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Programme qui interprète les commandes d’un utilisateur ou d’un script et lance les processus, redirections et pipelines demandés.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sid" data-glossary-card data-term="SID" data-full-name="Security Identifier" data-aliases="identificateur de sécurité" data-keywords="utilisateur | groupe" data-definition="Identifiant unique attribué par Windows à un compte, un groupe ou un autre principal de sécurité et utilisé dans les ACL." data-courses="windows" data-modules="w05 w06" data-letter="S" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="149" aria-labelledby="sid-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sid-titre"><a href="#sid" class="tssr-glossary-card__anchor" aria-label="SID">SID</a></h2>
    <p class="tssr-glossary-card__full-name">Security Identifier</p>
  </header>
  <p class="tssr-glossary-card__definition">Identifiant unique attribué par Windows à un compte, un groupe ou un autre principal de sécurité et utilisé dans les ACL.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> identificateur de sécurité</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="site-sharepoint" data-glossary-card data-term="Site SharePoint" data-full-name data-aliases data-keywords="SharePoint | collection de sites" data-definition="Espace web collaboratif regroupant pages, bibliothèques, listes, membres et autorisations pour une équipe ou une activité." data-courses="m365" data-modules="m05" data-letter="S" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="202" aria-labelledby="site-sharepoint-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="site-sharepoint-titre"><a href="#site-sharepoint" class="tssr-glossary-card__anchor" aria-label="Site SharePoint">Site SharePoint</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Espace web collaboratif regroupant pages, bibliothèques, listes, membres et autorisations pour une équipe ou une activité.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="skms" data-glossary-card data-term="SKMS" data-full-name="Service Knowledge Management System" data-aliases="système de gestion des connaissances" data-keywords="CMS | connaissance" data-definition="Ensemble de sources, informations et outils qui transforme les données de gestion en connaissances utiles aux décisions sur les services." data-courses="itil" data-modules="i04" data-letter="S" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="413" aria-labelledby="skms-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="skms-titre"><a href="#skms" class="tssr-glossary-card__anchor" aria-label="SKMS">SKMS</a></h2>
    <p class="tssr-glossary-card__full-name">Service Knowledge Management System</p>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble de sources, informations et outils qui transforme les données de gestion en connaissances utiles aux décisions sur les services.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> système de gestion des connaissances</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sla" data-glossary-card data-term="SLA" data-full-name="Service Level Agreement" data-aliases="accord de niveau de service" data-keywords="disponibilité | délai" data-definition="Accord documenté entre fournisseur et client qui précise les services, objectifs mesurables, responsabilités et modalités de suivi." data-courses="itil glpi" data-modules="i02 i03 g04" data-letter="S" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="414" aria-labelledby="sla-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sla-titre"><a href="#sla" class="tssr-glossary-card__anchor" aria-label="SLA">SLA</a></h2>
    <p class="tssr-glossary-card__full-name">Service Level Agreement</p>
  </header>
  <p class="tssr-glossary-card__definition">Accord documenté entre fournisseur et client qui précise les services, objectifs mesurables, responsabilités et modalités de suivi.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> accord de niveau de service</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-03-strategie-et-conception-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 03 — Stratégie et conception des services">ITIL · M03 · Stratégie et conception</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="slaac" data-glossary-card data-term="SLAAC" data-full-name="Stateless Address Autoconfiguration" data-aliases="autoconfiguration IPv6 sans état" data-keywords="Router Advertisement" data-definition="Mécanisme IPv6 par lequel un hôte construit automatiquement une adresse à partir des annonces de routeur, sans bail DHCPv6 obligatoire." data-courses="reseaux" data-modules="r06" data-letter="S" data-course-sort="bases des reseaux" data-module-sort="005" data-source-order="62" aria-labelledby="slaac-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="slaac-titre"><a href="#slaac" class="tssr-glossary-card__anchor" aria-label="SLAAC">SLAAC</a></h2>
    <p class="tssr-glossary-card__full-name">Stateless Address Autoconfiguration</p>
  </header>
  <p class="tssr-glossary-card__definition">Mécanisme IPv6 par lequel un hôte construit automatiquement une adresse à partir des annonces de routeur, sans bail DHCPv6 obligatoire.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> autoconfiguration IPv6 sans état</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="smb" data-glossary-card data-term="SMB" data-full-name="Server Message Block" data-aliases="partage Windows" data-keywords="TCP 445 | UNC" data-definition="Protocole de partage de fichiers, imprimantes et autres ressources, utilisé nativement par Windows sur les réseaux IP." data-courses="windows msp" data-modules="w08 s01" data-letter="S" data-course-sort="systemes clients microsoft" data-module-sort="013" data-source-order="150" aria-labelledby="smb-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="smb-titre"><a href="#smb" class="tssr-glossary-card__anchor" aria-label="SMB">SMB</a></h2>
    <p class="tssr-glossary-card__full-name">Server Message Block</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole de partage de fichiers, imprimantes et autres ressources, utilisé nativement par Windows sur les réseaux IP.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> partage Windows</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources/" title="Systèmes clients Microsoft — Module 08 — Le partage de ressources">Windows · M08 · Partage de ressources</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="smtp" data-glossary-card data-term="SMTP" data-full-name="Simple Mail Transfer Protocol" data-aliases data-keywords="envoi de mail | transport" data-definition="Protocole utilisé pour soumettre et relayer les courriels entre clients et serveurs ou entre serveurs de messagerie." data-courses="m365" data-modules="m04" data-letter="S" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="023" data-source-order="203" aria-labelledby="smtp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="smtp-titre"><a href="#smtp" class="tssr-glossary-card__anchor" aria-label="SMTP">SMTP</a></h2>
    <p class="tssr-glossary-card__full-name">Simple Mail Transfer Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole utilisé pour soumettre et relayer les courriels entre clients et serveurs ou entre serveurs de messagerie.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-04-exploiter-outlook-et-savoir-le-depanner/" title="Microsoft 365 — Outils collaboratifs — Module 04 — Exploiter Outlook et savoir le dépanner">Microsoft 365 · M04 · Outlook</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="snmp" data-glossary-card data-term="SNMP" data-full-name="Simple Network Management Protocol" data-aliases data-keywords="OID | découverte réseau" data-definition="Protocole de supervision et d’inventaire qui permet d’interroger des équipements réseau au moyen d’identifiants d’objets." data-courses="glpi" data-modules="g06" data-letter="S" data-course-sort="administration glpi" data-module-sort="057" data-source-order="477" aria-labelledby="snmp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="snmp-titre"><a href="#snmp" class="tssr-glossary-card__anchor" aria-label="SNMP">SNMP</a></h2>
    <p class="tssr-glossary-card__full-name">Simple Network Management Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole de supervision et d’inventaire qui permet d’interroger des équipements réseau au moyen d’identifiants d’objets.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-06-plug-ins-et-inventaire/" title="Administration GLPI — Module 06 — Plug-ins et inventaire">GLPI · M06 · Plug-ins et inventaire</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="socket" data-glossary-card data-term="Socket" data-full-name data-aliases data-keywords="IP | TCP | UDP | port" data-definition="Association logique entre une adresse IP, un protocole de transport et un numéro de port, utilisée par un processus pour communiquer." data-courses="reseaux" data-modules="r01 r05" data-letter="S" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="63" aria-labelledby="socket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="socket-titre"><a href="#socket" class="tssr-glossary-card__anchor" aria-label="Socket">Socket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Association logique entre une adresse IP, un protocole de transport et un numéro de port, utilisée par un processus pour communiquer.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="solution-de-contournement" data-glossary-card data-term="Solution de contournement" data-full-name data-aliases="workaround" data-keywords="incident | erreur connue" data-definition="Mesure temporaire qui réduit ou supprime l’impact d’un incident ou problème sans éliminer nécessairement sa cause." data-courses="itil" data-modules="i06" data-letter="S" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="415" aria-labelledby="solution-de-contournement-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="solution-de-contournement-titre"><a href="#solution-de-contournement" class="tssr-glossary-card__anchor" aria-label="Solution de contournement">Solution de contournement</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Mesure temporaire qui réduit ou supprime l’impact d’un incident ou problème sans éliminer nécessairement sa cause.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> workaround</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sortie-standard" data-glossary-card data-term="Sortie standard" data-full-name data-aliases="stdout" data-keywords="descripteur 1 | flux" data-definition="Flux numéro 1 où une commande écrit normalement son résultat, affiché au terminal sauf redirection ou pipeline." data-courses="linux" data-modules="l08" data-letter="S" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="266" aria-labelledby="sortie-standard-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sortie-standard-titre"><a href="#sortie-standard" class="tssr-glossary-card__anchor" aria-label="Sortie standard">Sortie standard</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Flux numéro 1 où une commande écrit normalement son résultat, affiché au terminal sauf redirection ou pipeline.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> stdout</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sous-reseau" data-glossary-card data-term="Sous-réseau" data-full-name data-aliases="subnet" data-keywords="CIDR | masque" data-definition="Subdivision logique d’un réseau IP définie par un préfixe commun, avec une adresse réseau et, en IPv4, une adresse de broadcast." data-courses="reseaux msp" data-modules="r03 s01" data-letter="S" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="64" aria-labelledby="sous-reseau-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sous-reseau-titre"><a href="#sous-reseau" class="tssr-glossary-card__anchor" aria-label="Sous-réseau">Sous-réseau</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Subdivision logique d’un réseau IP définie par un préfixe commun, avec une adresse réseau et, en IPv4, une adresse de broadcast.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> subnet</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sous-reseautage" data-glossary-card data-term="Sous-réseautage" data-full-name data-aliases="subnetting" data-keywords="découpage réseau" data-definition="Action de diviser un bloc d’adresses en sous-réseaux plus petits en allongeant le préfixe pour isoler des groupes d’hôtes." data-courses="reseaux msp" data-modules="r03 s01" data-letter="S" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="65" aria-labelledby="sous-reseautage-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sous-reseautage-titre"><a href="#sous-reseautage" class="tssr-glossary-card__anchor" aria-label="Sous-réseautage">Sous-réseautage</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Action de diviser un bloc d’adresses en sous-réseaux plus petits en allongeant le préfixe pour isoler des groupes d’hôtes.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> subnetting</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="spoc" data-glossary-card data-term="SPOC" data-full-name="Single Point of Contact" data-aliases="point de contact unique" data-keywords="Service Desk" data-definition="Point de contact unique auquel les utilisateurs s’adressent pour les incidents, demandes, informations et communications de support." data-courses="itil" data-modules="i06" data-letter="S" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="048" data-source-order="416" aria-labelledby="spoc-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="spoc-titre"><a href="#spoc" class="tssr-glossary-card__anchor" aria-label="SPOC">SPOC</a></h2>
    <p class="tssr-glossary-card__full-name">Single Point of Contact</p>
  </header>
  <p class="tssr-glossary-card__definition">Point de contact unique auquel les utilisateurs s’adressent pour les incidents, demandes, informations et communications de support.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> point de contact unique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="spouleur-d-impression" data-glossary-card data-term="Spouleur d’impression" data-full-name data-aliases="Print Spooler" data-keywords="file d’impression" data-definition="Service qui reçoit les travaux, les place dans une file et les transmet au pilote puis au port de l’imprimante." data-courses="windows msp" data-modules="w09 s01" data-letter="S" data-course-sort="systemes clients microsoft" data-module-sort="014" data-source-order="151" aria-labelledby="spouleur-d-impression-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="spouleur-d-impression-titre"><a href="#spouleur-d-impression" class="tssr-glossary-card__anchor" aria-label="Spouleur d’impression">Spouleur d’impression</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service qui reçoit les travaux, les place dans une file et les transmet au pilote puis au port de l’imprimante.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Print Spooler</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-09-les-pilotes-et-les-imprimantes/" title="Systèmes clients Microsoft — Module 09 — Les pilotes et les imprimantes">Windows · M09 · Pilotes et imprimantes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sql" data-glossary-card data-term="SQL" data-full-name="Structured Query Language" data-aliases data-keywords="SELECT | table" data-definition="Langage déclaratif utilisé pour définir, interroger et modifier les données d’un SGBD relationnel comme MariaDB ou MySQL." data-courses="glpi" data-modules="g05" data-letter="S" data-course-sort="administration glpi" data-module-sort="056" data-source-order="478" aria-labelledby="sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sql-titre"><a href="#sql" class="tssr-glossary-card__anchor" aria-label="SQL">SQL</a></h2>
    <p class="tssr-glossary-card__full-name">Structured Query Language</p>
  </header>
  <p class="tssr-glossary-card__definition">Langage déclaratif utilisé pour définir, interroger et modifier les données d’un SGBD relationnel comme MariaDB ou MySQL.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="statut-d-inventaire" data-glossary-card data-term="Statut d’inventaire" data-full-name data-aliases data-keywords="actif | cycle de vie" data-definition="État métier attribué à un actif, par exemple en stock, en service, en réparation ou réformé, afin de suivre son cycle de vie." data-courses="glpi" data-modules="g03" data-letter="S" data-course-sort="administration glpi" data-module-sort="054" data-source-order="479" aria-labelledby="statut-d-inventaire-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="statut-d-inventaire-titre"><a href="#statut-d-inventaire" class="tssr-glossary-card__anchor" aria-label="Statut d’inventaire">Statut d’inventaire</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">État métier attribué à un actif, par exemple en stock, en service, en réparation ou réformé, afin de suivre son cycle de vie.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-03-gestion-de-parc-inventaire-informatique/" title="Administration GLPI — Module 03 — Gestion de parc — Inventaire informatique">GLPI · M03 · Inventaire informatique</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sticky-bit" data-glossary-card data-term="Sticky bit" data-full-name data-aliases="bit collant" data-keywords="/tmp | permission spéciale" data-definition="Bit spécial de répertoire qui limite la suppression d’une entrée à son propriétaire, au propriétaire du répertoire ou à root." data-courses="debian" data-modules="d11" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="041" data-source-order="340" aria-labelledby="sticky-bit-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sticky-bit-titre"><a href="#sticky-bit" class="tssr-glossary-card__anchor" aria-label="Sticky bit">Sticky bit</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Bit spécial de répertoire qui limite la suppression d’une entrée à son propriétaire, au propriétaire du répertoire ou à root.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> bit collant</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires/" title="Administration Debian GNU/Linux — Module 11 — Droits sur les fichiers et répertoires">Debian · M11 · Droits Linux</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="style-word" data-glossary-card data-term="Style Word" data-full-name data-aliases data-keywords="titre | mise en forme" data-definition="Ensemble nommé de propriétés de mise en forme appliqué de façon cohérente aux paragraphes ou caractères d’un document." data-courses="m365" data-modules="m02" data-letter="S" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="204" aria-labelledby="style-word-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="style-word-titre"><a href="#style-word" class="tssr-glossary-card__anchor" aria-label="Style Word">Style Word</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ensemble nommé de propriétés de mise en forme appliqué de façon cohérente aux paragraphes ou caractères d’un document.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sudo" data-glossary-card data-term="sudo" data-full-name="Superuser Do" data-aliases data-keywords="élévation | sudoers" data-definition="Mécanisme qui autorise un utilisateur à exécuter certaines commandes avec une autre identité selon une politique définie." data-courses="debian msp" data-modules="d10 s01" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="334" aria-labelledby="sudo-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sudo-titre"><a href="#sudo" class="tssr-glossary-card__anchor" aria-label="sudo">sudo</a></h2>
    <p class="tssr-glossary-card__full-name">Superuser Do</p>
  </header>
  <p class="tssr-glossary-card__definition">Mécanisme qui autorise un utilisateur à exécuter certaines commandes avec une autre identité selon une politique définie.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sudoers" data-glossary-card data-term="sudoers" data-full-name data-aliases data-keywords="/etc/sudoers | visudo" data-definition="Politique de délégation consultée par sudo, à modifier avec visudo afin de contrôler sa syntaxe et les droits accordés." data-courses="debian" data-modules="d10" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="335" aria-labelledby="sudoers-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sudoers-titre"><a href="#sudoers" class="tssr-glossary-card__anchor" aria-label="sudoers">sudoers</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Politique de délégation consultée par sudo, à modifier avec visudo afin de contrôler sa syntaxe et les droits accordés.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="suivi-de-ticket" data-glossary-card data-term="Suivi de ticket" data-full-name data-aliases="follow-up" data-keywords="communication | ticket" data-definition="Message ajouté au fil d’un ticket pour communiquer une information, demander une précision ou informer de l’avancement." data-courses="glpi itil" data-modules="g04 i09" data-letter="S" data-course-sort="administration glpi" data-module-sort="051" data-source-order="480" aria-labelledby="suivi-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="suivi-de-ticket-titre"><a href="#suivi-de-ticket" class="tssr-glossary-card__anchor" aria-label="Suivi de ticket">Suivi de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Message ajouté au fil d’un ticket pour communiquer une information, demander une précision ou informer de l’avancement.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> follow-up</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="supernetting" data-glossary-card data-term="Supernetting" data-full-name data-aliases="agrégation de routes | sur-réseau" data-keywords="résumé de routes" data-definition="Regroupement de plusieurs réseaux contigus derrière un préfixe plus court afin de résumer les routes et réduire la taille des tables." data-courses="reseaux" data-modules="r04" data-letter="S" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="66" aria-labelledby="supernetting-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="supernetting-titre"><a href="#supernetting" class="tssr-glossary-card__anchor" aria-label="Supernetting">Supernetting</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Regroupement de plusieurs réseaux contigus derrière un préfixe plus court afin de résumer les routes et réduire la taille des tables.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> agrégation de routes · sur-réseau</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="swap" data-glossary-card data-term="Swap" data-full-name data-aliases="espace d’échange" data-keywords="mémoire virtuelle" data-definition="Espace disque utilisé comme extension de la mémoire virtuelle et, selon la configuration, pour l’hibernation ; il est plus lent que la RAM." data-courses="debian" data-modules="d02 d07" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="032" data-source-order="336" aria-labelledby="swap-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="swap-titre"><a href="#swap" class="tssr-glossary-card__anchor" aria-label="Swap">Swap</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Espace disque utilisé comme extension de la mémoire virtuelle et, selon la configuration, pour l’hibernation ; il est plus lent que la RAM.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> espace d’échange</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 02 — Installation d’une distribution Debian">Debian · M02 · Installation Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage/" title="Administration Debian GNU/Linux — Module 07 — Gestion des espaces de stockage">Debian · M07 · Stockage</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="synchronisation-onedrive" data-glossary-card data-term="Synchronisation OneDrive" data-full-name data-aliases data-keywords="client de synchronisation | hors connexion" data-definition="Réplication contrôlée des fichiers entre un dossier local et le cloud, avec gestion des modifications et conflits de versions." data-courses="m365" data-modules="m05" data-letter="S" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="205" aria-labelledby="synchronisation-onedrive-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="synchronisation-onedrive-titre"><a href="#synchronisation-onedrive" class="tssr-glossary-card__anchor" aria-label="Synchronisation OneDrive">Synchronisation OneDrive</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Réplication contrôlée des fichiers entre un dossier local et le cloud, avec gestion des modifications et conflits de versions.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="sysprep" data-glossary-card data-term="Sysprep" data-full-name="System Preparation Tool" data-aliases data-keywords="generalize | image" data-definition="Outil Microsoft qui prépare une installation Windows pour la duplication, notamment en la généralisant avant capture et redémarrage en OOBE." data-courses="windows" data-modules="w12" data-letter="S" data-course-sort="systemes clients microsoft" data-module-sort="017" data-source-order="152" aria-labelledby="sysprep-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="sysprep-titre"><a href="#sysprep" class="tssr-glossary-card__anchor" aria-label="Sysprep">Sysprep</a></h2>
    <p class="tssr-glossary-card__full-name">System Preparation Tool</p>
  </header>
  <p class="tssr-glossary-card__definition">Outil Microsoft qui prépare une installation Windows pour la duplication, notamment en la généralisant avant capture et redémarrage en OOBE.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image/" title="Systèmes clients Microsoft — Module 12 — Introduction à la capture et au déploiement d’image">Windows · M12 · Capture et déploiement</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="systemctl" data-glossary-card data-term="systemctl" data-full-name data-aliases data-keywords="service | unit" data-definition="Commande principale pour consulter, démarrer, arrêter, activer et diagnostiquer les unités gérées par systemd." data-courses="debian" data-modules="d03 d12" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="033" data-source-order="339" aria-labelledby="systemctl-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="systemctl-titre"><a href="#systemctl" class="tssr-glossary-card__anchor" aria-label="systemctl">systemctl</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande principale pour consulter, démarrer, arrêter, activer et diagnostiquer les unités gérées par systemd.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 03 — Démarrage d’une distribution Debian">Debian · M03 · Démarrage Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="systemd" data-glossary-card data-term="systemd" data-full-name data-aliases data-keywords="PID 1 | systemctl" data-definition="Gestionnaire de système et de services qui orchestre le démarrage, les unités, les dépendances, les journaux et des tâches planifiées." data-courses="debian" data-modules="d03 d12" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="033" data-source-order="337" aria-labelledby="systemd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="systemd-titre"><a href="#systemd" class="tssr-glossary-card__anchor" aria-label="systemd">systemd</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Gestionnaire de système et de services qui orchestre le démarrage, les unités, les dépendances, les journaux et des tâches planifiées.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 03 — Démarrage d’une distribution Debian">Debian · M03 · Démarrage Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="systemd-timer" data-glossary-card data-term="systemd timer" data-full-name data-aliases="timer systemd" data-keywords="planification" data-definition="Unité systemd qui déclenche une unité de service selon un calendrier ou un délai et offre journalisation et dépendances intégrées." data-courses="debian" data-modules="d12" data-letter="S" data-course-sort="administration debian gnu/linux" data-module-sort="042" data-source-order="338" aria-labelledby="systemd-timer-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="systemd-timer-titre"><a href="#systemd-timer" class="tssr-glossary-card__anchor" aria-label="systemd timer">systemd timer</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Unité systemd qui déclenche une unité de service selon un calendrier ou un délai et offre journalisation et dépendances intégrées.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> timer systemd</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="systeme-de-fichiers" data-glossary-card data-term="Système de fichiers" data-full-name data-aliases="file system" data-keywords="formatage | volume" data-definition="Organisation logique qui stocke et retrouve fichiers, répertoires et métadonnées sur un volume, par exemple NTFS ou ext4." data-courses="windows debian" data-modules="w04 d09" data-letter="S" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="154" aria-labelledby="systeme-de-fichiers-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="systeme-de-fichiers-titre"><a href="#systeme-de-fichiers" class="tssr-glossary-card__anchor" aria-label="Système de fichiers">Système de fichiers</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Organisation logique qui stocke et retrouve fichiers, répertoires et métadonnées sur un volume, par exemple NTFS ou ext4.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> file system</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="systeme-d-exploitation" data-glossary-card data-term="Système d’exploitation" data-full-name data-aliases="OS" data-keywords="Windows | Linux | noyau" data-definition="Logiciel central qui gère le matériel, les processus, les fichiers, la sécurité et fournit des services aux applications et utilisateurs." data-courses="windows debian" data-modules="w01 d01" data-letter="S" data-course-sort="systemes clients microsoft" data-module-sort="006" data-source-order="153" aria-labelledby="systeme-d-exploitation-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="systeme-d-exploitation-titre"><a href="#systeme-d-exploitation" class="tssr-glossary-card__anchor" aria-label="Système d’exploitation">Système d’exploitation</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Logiciel central qui gère le matériel, les processus, les fichiers, la sécurité et fournit des services aux applications et utilisateurs.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> OS</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-01-les-systemes-d-exploitation-et-microsoft-windows-10/" title="Systèmes clients Microsoft — Module 01 — Les systèmes d’exploitation et Microsoft Windows 10">Windows · M01 · Systèmes d’exploitation</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux/" title="Administration Debian GNU/Linux — Module 01 — Présentation de Debian GNU/Linux">Debian · M01 · Présentation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="table-de-routage" data-glossary-card data-term="Table de routage" data-full-name data-aliases="routing table" data-keywords="route | métrique" data-definition="Liste des réseaux connus, passerelles et interfaces utilisée par un hôte ou un routeur pour choisir le prochain saut d’un paquet." data-courses="reseaux debian" data-modules="r04 r05 d05" data-letter="T" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="67" aria-labelledby="table-de-routage-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="table-de-routage-titre"><a href="#table-de-routage" class="tssr-glossary-card__anchor" aria-label="Table de routage">Table de routage</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Liste des réseaux connus, passerelles et interfaces utilisée par un hôte ou un routeur pour choisir le prochain saut d’un paquet.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> routing table</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-05-gestion-du-reseau/" title="Administration Debian GNU/Linux — Module 05 — Gestion du réseau">Debian · M05 · Réseau Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="table-des-matieres-word" data-glossary-card data-term="Table des matières Word" data-full-name data-aliases="sommaire automatique" data-keywords="styles de titre" data-definition="Liste générée à partir des niveaux de titres d’un document ; elle doit être mise à jour lorsque la structure ou la pagination change." data-courses="m365" data-modules="m02" data-letter="T" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="206" aria-labelledby="table-des-matieres-word-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="table-des-matieres-word-titre"><a href="#table-des-matieres-word" class="tssr-glossary-card__anchor" aria-label="Table des matières Word">Table des matières Word</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Liste générée à partir des niveaux de titres d’un document ; elle doit être mise à jour lorsque la structure ou la pagination change.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> sommaire automatique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="table-sql" data-glossary-card data-term="Table SQL" data-full-name data-aliases data-keywords="relation | enregistrement" data-definition="Structure relationnelle composée de colonnes et de lignes, définie par des types, clés et contraintes dans une base de données." data-courses="glpi" data-modules="g05" data-letter="T" data-course-sort="administration glpi" data-module-sort="056" data-source-order="481" aria-labelledby="table-sql-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="table-sql-titre"><a href="#table-sql" class="tssr-glossary-card__anchor" aria-label="Table SQL">Table SQL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Structure relationnelle composée de colonnes et de lignes, définie par des types, clés et contraintes dans une base de données.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="tableau-excel" data-glossary-card data-term="Tableau Excel" data-full-name data-aliases="table structurée" data-keywords="Excel | données" data-definition="Plage structurée avec en-têtes, filtres et références nommées, qui s’étend automatiquement lorsque de nouvelles lignes sont ajoutées." data-courses="m365" data-modules="m03" data-letter="T" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="207" aria-labelledby="tableau-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="tableau-excel-titre"><a href="#tableau-excel" class="tssr-glossary-card__anchor" aria-label="Tableau Excel">Tableau Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Plage structurée avec en-têtes, filtres et références nommées, qui s’étend automatiquement lorsque de nouvelles lignes sont ajoutées.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> table structurée</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="tache-de-ticket" data-glossary-card data-term="Tâche de ticket" data-full-name data-aliases data-keywords="technicien | temps passé" data-definition="Action de traitement planifiée ou réalisée dans un ticket, avec intervenant, durée, statut et éventuellement dates prévues." data-courses="glpi itil" data-modules="g04 i09" data-letter="T" data-course-sort="administration glpi" data-module-sort="051" data-source-order="482" aria-labelledby="tache-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="tache-de-ticket-titre"><a href="#tache-de-ticket" class="tssr-glossary-card__anchor" aria-label="Tâche de ticket">Tâche de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Action de traitement planifiée ou réalisée dans un ticket, avec intervenant, durée, statut et éventuellement dates prévues.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="tail" data-glossary-card data-term="tail" data-full-name data-aliases data-keywords="lecture fichier | suivi journal" data-definition="Commande qui affiche la fin d’un fichier ou d’un flux ; l’option -f suit les nouvelles lignes ajoutées à un journal." data-courses="linux debian" data-modules="l05 d12" data-letter="T" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="267" aria-labelledby="tail-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="tail-titre"><a href="#tail" class="tssr-glossary-card__anchor" aria-label="tail">tail</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui affiche la fin d’un fichier ou d’un flux ; l’option -f suit les nouvelles lignes ajoutées à un journal.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="target-systemd" data-glossary-card data-term="Target systemd" data-full-name data-aliases="cible systemd" data-keywords="démarrage | unit" data-definition="Unité systemd qui regroupe d’autres unités afin de représenter un état ou un objectif de démarrage, comme multi-user.target." data-courses="debian" data-modules="d03 d04" data-letter="T" data-course-sort="administration debian gnu/linux" data-module-sort="033" data-source-order="341" aria-labelledby="target-systemd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="target-systemd-titre"><a href="#target-systemd" class="tssr-glossary-card__anchor" aria-label="Target systemd">Target systemd</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Unité systemd qui regroupe d’autres unités afin de représenter un état ou un objectif de démarrage, comme multi-user.target.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> cible systemd</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 03 — Démarrage d’une distribution Debian">Debian · M03 · Démarrage Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-04-debian-en-mode-maintenance/" title="Administration Debian GNU/Linux — Module 04 — Debian en mode maintenance">Debian · M04 · Mode maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="tcp" data-glossary-card data-term="TCP" data-full-name="Transmission Control Protocol" data-aliases data-keywords="fiable | segment" data-definition="Protocole de transport orienté connexion qui fournit livraison ordonnée, accusés de réception, retransmission et contrôle de flux." data-courses="reseaux" data-modules="r01 r05" data-letter="T" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="68" aria-labelledby="tcp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="tcp-titre"><a href="#tcp" class="tssr-glossary-card__anchor" aria-label="TCP">TCP</a></h2>
    <p class="tssr-glossary-card__full-name">Transmission Control Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole de transport orienté connexion qui fournit livraison ordonnée, accusés de réception, retransmission et contrôle de flux.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="technicien-glpi" data-glossary-card data-term="Technicien GLPI" data-full-name data-aliases data-keywords="support | profil" data-definition="Utilisateur habilité à qualifier, prendre en charge, suivre et résoudre des tickets selon son profil, son entité et ses groupes." data-courses="glpi" data-modules="g02 g04" data-letter="T" data-course-sort="administration glpi" data-module-sort="053" data-source-order="483" aria-labelledby="technicien-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="technicien-glpi-titre"><a href="#technicien-glpi" class="tssr-glossary-card__anchor" aria-label="Technicien GLPI">Technicien GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Utilisateur habilité à qualifier, prendre en charge, suivre et résoudre des tickets selon son profil, son entité et ses groupes.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-02-authentification-ad-habilitations/" title="Administration GLPI — Module 02 — Authentification AD — Habilitations">GLPI · M02 · AD et habilitations</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="tenant-microsoft-365" data-glossary-card data-term="Tenant Microsoft 365" data-full-name data-aliases="locataire Microsoft 365" data-keywords="organisation | cloud" data-definition="Environnement logique isolé d’une organisation dans les services Microsoft, contenant ses identités, abonnements, domaines et paramètres." data-courses="m365" data-modules="m01" data-letter="T" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="020" data-source-order="208" aria-labelledby="tenant-microsoft-365-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="tenant-microsoft-365-titre"><a href="#tenant-microsoft-365" class="tssr-glossary-card__anchor" aria-label="Tenant Microsoft 365">Tenant Microsoft 365</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Environnement logique isolé d’une organisation dans les services Microsoft, contenant ses identités, abonnements, domaines et paramètres.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> locataire Microsoft 365</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-01-decouverte-de-microsoft-365/" title="Microsoft 365 — Outils collaboratifs — Module 01 — Découverte de Microsoft 365">Microsoft 365 · M01 · Microsoft 365</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="terminal" data-glossary-card data-term="Terminal" data-full-name data-aliases="émulateur de terminal" data-keywords="console | shell" data-definition="Interface qui fournit une session textuelle à un shell local ou distant et affiche ses entrées, sorties et erreurs." data-courses="linux" data-modules="l03" data-letter="T" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="268" aria-labelledby="terminal-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="terminal-titre"><a href="#terminal" class="tssr-glossary-card__anchor" aria-label="Terminal">Terminal</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Interface qui fournit une session textuelle à un shell local ou distant et affiche ses entrées, sorties et erreurs.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> émulateur de terminal</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ticket-glpi" data-glossary-card data-term="Ticket GLPI" data-full-name data-aliases data-keywords="assistance | incident | demande" data-definition="Enregistrement central d’une demande ou d’un incident avec acteurs, catégorie, priorité, suivi, tâches, solution et historique." data-courses="itil glpi" data-modules="i09 g04" data-letter="T" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="051" data-source-order="484" aria-labelledby="ticket-glpi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ticket-glpi-titre"><a href="#ticket-glpi" class="tssr-glossary-card__anchor" aria-label="Ticket GLPI">Ticket GLPI</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Enregistrement central d’une demande ou d’un incident avec acteurs, catégorie, priorité, suivi, tâches, solution et historique.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="titre-word" data-glossary-card data-term="Titre Word" data-full-name data-aliases data-keywords="Titre 1 | plan" data-definition="Paragraphe auquel un style de titre hiérarchique est appliqué afin de structurer le document et alimenter navigation et sommaire." data-courses="m365" data-modules="m02" data-letter="T" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="209" aria-labelledby="titre-word-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="titre-word-titre"><a href="#titre-word" class="tssr-glossary-card__anchor" aria-label="Titre Word">Titre Word</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Paragraphe auquel un style de titre hiérarchique est appliqué afin de structurer le document et alimenter navigation et sommaire.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="touch" data-glossary-card data-term="touch" data-full-name data-aliases data-keywords="création fichier | timestamp" data-definition="Commande qui met à jour les horodatages d’un fichier et crée un fichier vide lorsqu’il n’existe pas encore." data-courses="linux" data-modules="l04" data-letter="T" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="026" data-source-order="269" aria-labelledby="touch-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="touch-titre"><a href="#touch" class="tssr-glossary-card__anchor" aria-label="touch">touch</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui met à jour les horodatages d’un fichier et crée un fichier vide lorsqu’il n’existe pas encore.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-04-fichiers-dossiers-et-metacaracteres/" title="Utilisation d’une distribution GNU/Linux — Module 04 — Fichiers, dossiers et métacaractères">GNU/Linux · M04 · Fichiers et métacaractères</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="traceroute-tracert" data-glossary-card data-term="traceroute / tracert" data-full-name data-aliases="tracert | traceroute" data-keywords="chemin réseau | sauts" data-definition="Outil qui révèle les routeurs successifs vers une destination en provoquant l’expiration progressive du TTL des paquets envoyés." data-courses="reseaux" data-modules="r05" data-letter="T" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="69" aria-labelledby="traceroute-tracert-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="traceroute-tracert-titre"><a href="#traceroute-tracert" class="tssr-glossary-card__anchor" aria-label="traceroute / tracert">traceroute / tracert</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Outil qui révèle les routeurs successifs vers une destination en provoquant l’expiration progressive du TTL des paquets envoyés.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> tracert · traceroute</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="trame" data-glossary-card data-term="Trame" data-full-name data-aliases data-keywords="Ethernet | couche 2" data-definition="PDU de la couche liaison contenant notamment les adresses MAC source et destination ainsi qu’un contrôle d’erreur." data-courses="reseaux" data-modules="r01 r04" data-letter="T" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="70" aria-labelledby="trame-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="trame-titre"><a href="#trame" class="tssr-glossary-card__anchor" aria-label="Trame">Trame</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">PDU de la couche liaison contenant notamment les adresses MAC source et destination ainsi qu’un contrôle d’erreur.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="transition-des-services" data-glossary-card data-term="Transition des services" data-full-name data-aliases data-keywords="changement | release | déploiement" data-definition="Étape du cycle ITIL étudié qui planifie, teste et contrôle l’introduction de services nouveaux ou modifiés en production." data-courses="itil" data-modules="i04" data-letter="T" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="417" aria-labelledby="transition-des-services-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="transition-des-services-titre"><a href="#transition-des-services" class="tssr-glossary-card__anchor" aria-label="Transition des services">Transition des services</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Étape du cycle ITIL étudié qui planifie, teste et contrôle l’introduction de services nouveaux ou modifiés en production.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="tri-excel" data-glossary-card data-term="Tri Excel" data-full-name data-aliases data-keywords="ordre croissant | données" data-definition="Réorganisation des lignes selon une ou plusieurs colonnes, en conservant ensemble les valeurs appartenant à chaque enregistrement." data-courses="m365" data-modules="m03" data-letter="T" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="022" data-source-order="210" aria-labelledby="tri-excel-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="tri-excel-titre"><a href="#tri-excel" class="tssr-glossary-card__anchor" aria-label="Tri Excel">Tri Excel</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Réorganisation des lignes selon une ou plusieurs colonnes, en conservant ensemble les valeurs appartenant à chaque enregistrement.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-03-connaissances-des-notions-de-base-d-excel/" title="Microsoft 365 — Outils collaboratifs — Module 03 — Connaissances des notions de base d’Excel">Microsoft 365 · M03 · Excel</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ttl" data-glossary-card data-term="TTL" data-full-name="Time To Live" data-aliases="durée de vie" data-keywords="saut | traceroute" data-definition="Champ IP décrémenté à chaque routeur ; lorsque sa valeur atteint zéro, le paquet est détruit pour éviter les boucles infinies." data-courses="reseaux" data-modules="r05" data-letter="T" data-course-sort="bases des reseaux" data-module-sort="004" data-source-order="71" aria-labelledby="ttl-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ttl-titre"><a href="#ttl" class="tssr-glossary-card__anchor" aria-label="TTL">TTL</a></h2>
    <p class="tssr-glossary-card__full-name">Time To Live</p>
  </header>
  <p class="tssr-glossary-card__definition">Champ IP décrémenté à chaque routeur ; lorsque sa valeur atteint zéro, le paquet est détruit pour éviter les boucles infinies.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> durée de vie</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="type-de-ticket" data-glossary-card data-term="Type de ticket" data-full-name data-aliases data-keywords="incident | demande" data-definition="Distinction principale entre incident et demande dans GLPI, utilisée pour le traitement, les règles, les gabarits et les statistiques." data-courses="glpi itil" data-modules="g04 i09" data-letter="T" data-course-sort="administration glpi" data-module-sort="051" data-source-order="485" aria-labelledby="type-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="type-de-ticket-titre"><a href="#type-de-ticket" class="tssr-glossary-card__anchor" aria-label="Type de ticket">Type de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Distinction principale entre incident et demande dans GLPI, utilisée pour le traitement, les règles, les gabarits et les statistiques.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="uac" data-glossary-card data-term="UAC" data-full-name="User Account Control" data-aliases="contrôle de compte d’utilisateur" data-keywords="élévation | jeton" data-definition="Mécanisme Windows qui limite l’usage permanent des privilèges administratifs et demande une confirmation ou des identifiants lors d’une élévation." data-courses="windows" data-modules="w05" data-letter="U" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="155" aria-labelledby="uac-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="uac-titre"><a href="#uac" class="tssr-glossary-card__anchor" aria-label="UAC">UAC</a></h2>
    <p class="tssr-glossary-card__full-name">User Account Control</p>
  </header>
  <p class="tssr-glossary-card__definition">Mécanisme Windows qui limite l’usage permanent des privilèges administratifs et demande une confirmation ou des identifiants lors d’une élévation.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> contrôle de compte d’utilisateur</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="udp" data-glossary-card data-term="UDP" data-full-name="User Datagram Protocol" data-aliases data-keywords="datagramme | couche 4" data-definition="Protocole de transport sans connexion, léger et rapide, qui ne garantit ni livraison, ni ordre, ni retransmission." data-courses="reseaux" data-modules="r01 r05" data-letter="U" data-course-sort="bases des reseaux" data-module-sort="000" data-source-order="72" aria-labelledby="udp-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="udp-titre"><a href="#udp" class="tssr-glossary-card__anchor" aria-label="UDP">UDP</a></h2>
    <p class="tssr-glossary-card__full-name">User Datagram Protocol</p>
  </header>
  <p class="tssr-glossary-card__definition">Protocole de transport sans connexion, léger et rapide, qui ne garantit ni livraison, ni ordre, ni retransmission.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-01-le-modele-osi/" title="Bases des réseaux — Module 01 — Le modèle OSI">Réseaux · M01 · Modèle OSI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-05-les-premieres-commandes-reseau/" title="Bases des réseaux — Module 05 — Les premières commandes réseau">Réseaux · M05 · Commandes réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="uefi" data-glossary-card data-term="UEFI" data-full-name="Unified Extensible Firmware Interface" data-aliases data-keywords="firmware | GPT | EFI" data-definition="Micrologiciel moderne qui initialise la machine, gère des entrées de démarrage et fonctionne couramment avec des disques GPT." data-courses="windows debian" data-modules="w02 d02" data-letter="U" data-course-sort="systemes clients microsoft" data-module-sort="007" data-source-order="156" aria-labelledby="uefi-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="uefi-titre"><a href="#uefi" class="tssr-glossary-card__anchor" aria-label="UEFI">UEFI</a></h2>
    <p class="tssr-glossary-card__full-name">Unified Extensible Firmware Interface</p>
  </header>
  <p class="tssr-glossary-card__definition">Micrologiciel moderne qui initialise la machine, gère des entrées de démarrage et fonctionne couramment avec des disques GPT.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-02-installation-du-systeme-d-exploitation-windows-10/" title="Systèmes clients Microsoft — Module 02 — Installation du système d’exploitation Windows 10">Windows · M02 · Installation Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-02-installation-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 02 — Installation d’une distribution Debian">Debian · M02 · Installation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="uid" data-glossary-card data-term="UID" data-full-name="User Identifier" data-aliases="identifiant utilisateur" data-keywords="compte | permissions" data-definition="Numéro qui identifie un compte Unix dans les permissions et processus, indépendamment de son nom affiché dans /etc/passwd." data-courses="linux debian" data-modules="l03 d10" data-letter="U" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="342" aria-labelledby="uid-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="uid-titre"><a href="#uid" class="tssr-glossary-card__anchor" aria-label="UID">UID</a></h2>
    <p class="tssr-glossary-card__full-name">User Identifier</p>
  </header>
  <p class="tssr-glossary-card__definition">Numéro qui identifie un compte Unix dans les permissions et processus, indépendamment de son nom affiché dans /etc/passwd.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> identifiant utilisateur</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="ula" data-glossary-card data-term="ULA" data-full-name="Unique Local Address" data-aliases="adresse locale unique" data-keywords="IPv6 privé" data-definition="Adresse IPv6 destinée aux communications privées internes, généralement dans FC00::/7, et non routée sur l’Internet public." data-courses="reseaux" data-modules="r06" data-letter="U" data-course-sort="bases des reseaux" data-module-sort="005" data-source-order="73" aria-labelledby="ula-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="ula-titre"><a href="#ula" class="tssr-glossary-card__anchor" aria-label="ULA">ULA</a></h2>
    <p class="tssr-glossary-card__full-name">Unique Local Address</p>
  </header>
  <p class="tssr-glossary-card__definition">Adresse IPv6 destinée aux communications privées internes, généralement dans FC00::/7, et non routée sur l’Internet public.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> adresse locale unique</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="umask" data-glossary-card data-term="umask" data-full-name data-aliases data-keywords="permissions par défaut" data-definition="Masque qui retire des permissions lors de la création de nouveaux fichiers et répertoires, sans modifier les objets existants." data-courses="debian" data-modules="d11" data-letter="U" data-course-sort="administration debian gnu/linux" data-module-sort="041" data-source-order="343" aria-labelledby="umask-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="umask-titre"><a href="#umask" class="tssr-glossary-card__anchor" aria-label="umask">umask</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Masque qui retire des permissions lors de la création de nouveaux fichiers et répertoires, sans modifier les objets existants.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-11-droits-sur-les-fichiers-et-repertoires/" title="Administration Debian GNU/Linux — Module 11 — Droits sur les fichiers et répertoires">Debian · M11 · Droits Linux</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="unc" data-glossary-card data-term="UNC" data-full-name="Universal Naming Convention" data-aliases="chemin UNC" data-keywords="SMB | partage" data-definition="Syntaxe Windows \\serveur\partage\chemin qui désigne une ressource réseau sans dépendre d’une lettre de lecteur locale." data-courses="windows msp" data-modules="w08 s01" data-letter="U" data-course-sort="systemes clients microsoft" data-module-sort="013" data-source-order="157" aria-labelledby="unc-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="unc-titre"><a href="#unc" class="tssr-glossary-card__anchor" aria-label="UNC">UNC</a></h2>
    <p class="tssr-glossary-card__full-name">Universal Naming Convention</p>
  </header>
  <p class="tssr-glossary-card__definition">Syntaxe Windows \\serveur\partage\chemin qui désigne une ressource réseau sans dépendre d’une lettre de lecteur locale.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> chemin UNC</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources/" title="Systèmes clients Microsoft — Module 08 — Le partage de ressources">Windows · M08 · Partage de ressources</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/08-msp-systemes-clients/module-01-msp-systemes-clients/" title="Mise en situation professionnelle — Systèmes clients — Module 01 — MSP Systèmes clients">MSP · M01 · MSP Systèmes clients</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="unicast" data-glossary-card data-term="Unicast" data-full-name data-aliases="monodiffusion" data-keywords="un vers un" data-definition="Transmission d’une source vers un seul destinataire identifié, mode le plus courant pour les échanges IP individuels." data-courses="reseaux" data-modules="r04 r06" data-letter="U" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="74" aria-labelledby="unicast-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="unicast-titre"><a href="#unicast" class="tssr-glossary-card__anchor" aria-label="Unicast">Unicast</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Transmission d’une source vers un seul destinataire identifié, mode le plus courant pour les échanges IP individuels.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> monodiffusion</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-06-l-adressage-ipv6/" title="Bases des réseaux — Module 06 — L’adressage IPv6">Réseaux · M06 · Adressage IPv6</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="unite-systemd" data-glossary-card data-term="Unité systemd" data-full-name data-aliases="systemd unit" data-keywords="service | target" data-definition="Ressource décrite par systemd, par exemple un service, socket, montage, timer ou cible, avec état et dépendances." data-courses="debian" data-modules="d03 d12" data-letter="U" data-course-sort="administration debian gnu/linux" data-module-sort="033" data-source-order="344" aria-labelledby="unite-systemd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="unite-systemd-titre"><a href="#unite-systemd" class="tssr-glossary-card__anchor" aria-label="Unité systemd">Unité systemd</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Ressource décrite par systemd, par exemple un service, socket, montage, timer ou cible, avec état et dépendances.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> systemd unit</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-03-demarrage-d-une-distribution-debian/" title="Administration Debian GNU/Linux — Module 03 — Démarrage d’une distribution Debian">Debian · M03 · Démarrage Debian</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production/" title="Administration Debian GNU/Linux — Module 12 — Maintenance d’un système en production">Debian · M12 · Maintenance</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="unstable-debian" data-glossary-card data-term="Unstable Debian" data-full-name data-aliases="Debian Sid" data-keywords="branche Debian" data-definition="Branche de développement continue de Debian, appelée Sid, où arrivent les nouveaux paquets avant leur migration vers testing." data-courses="debian" data-modules="d01" data-letter="U" data-course-sort="administration debian gnu/linux" data-module-sort="031" data-source-order="345" aria-labelledby="unstable-debian-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="unstable-debian-titre"><a href="#unstable-debian" class="tssr-glossary-card__anchor" aria-label="Unstable Debian">Unstable Debian</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Branche de développement continue de Debian, appelée Sid, où arrivent les nouveaux paquets avant leur migration vers testing.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Debian Sid</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-01-presentation-de-debian-gnu-linux/" title="Administration Debian GNU/Linux — Module 01 — Présentation de Debian GNU/Linux">Debian · M01 · Présentation Debian</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="urgence" data-glossary-card data-term="Urgence" data-full-name data-aliases data-keywords="priorité | incident" data-definition="Temps disponible avant que l’absence de traitement n’entraîne un impact significatif, utilisé avec l’impact pour déterminer la priorité." data-courses="itil glpi" data-modules="i04 i06 g04" data-letter="U" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="046" data-source-order="418" aria-labelledby="urgence-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="urgence-titre"><a href="#urgence" class="tssr-glossary-card__anchor" aria-label="Urgence">Urgence</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Temps disponible avant que l’absence de traitement n’entraîne un impact significatif, utilisé avec l’impact pour déterminer la priorité.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-04-transition-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 04 — Transition des services">ITIL · M04 · Transition des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-06-exploitation-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 06 — Exploitation des services">ITIL · M06 · Exploitation des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="useradd" data-glossary-card data-term="useradd" data-full-name data-aliases data-keywords="utilisateur | UID" data-definition="Commande bas niveau qui crée un compte selon les options et valeurs par défaut ; elle ne reproduit pas toujours le dialogue d’adduser." data-courses="debian" data-modules="d10" data-letter="U" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="346" aria-labelledby="useradd-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="useradd-titre"><a href="#useradd" class="tssr-glossary-card__anchor" aria-label="useradd">useradd</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande bas niveau qui crée un compte selon les options et valeurs par défaut ; elle ne reproduit pas toujours le dialogue d’adduser.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="usermod" data-glossary-card data-term="usermod" data-full-name data-aliases data-keywords="utilisateur | groupes" data-definition="Commande qui modifie un compte existant, notamment ses groupes, son shell, son répertoire, son identifiant ou son verrouillage." data-courses="debian" data-modules="d10" data-letter="U" data-course-sort="administration debian gnu/linux" data-module-sort="040" data-source-order="347" aria-labelledby="usermod-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="usermod-titre"><a href="#usermod" class="tssr-glossary-card__anchor" aria-label="usermod">usermod</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui modifie un compte existant, notamment ses groupes, son shell, son répertoire, son identifiant ou son verrouillage.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-10-gestion-des-utilisateurs-et-groupes/" title="Administration Debian GNU/Linux — Module 10 — Gestion des utilisateurs et groupes">Debian · M10 · Utilisateurs et groupes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="utilisateur-authentifie" data-glossary-card data-term="Utilisateur authentifié" data-full-name data-aliases data-keywords="groupe spécial | ACL" data-definition="Principal Windows représentant un compte dont l’identité a été validée, souvent utilisé dans les ACL pour cibler les sessions connectées." data-courses="windows" data-modules="w05 w06" data-letter="U" data-course-sort="systemes clients microsoft" data-module-sort="010" data-source-order="158" aria-labelledby="utilisateur-authentifie-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="utilisateur-authentifie-titre"><a href="#utilisateur-authentifie" class="tssr-glossary-card__anchor" aria-label="Utilisateur authentifié">Utilisateur authentifié</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Principal Windows représentant un compte dont l’identité a été validée, souvent utilisé dans les ACL pour cibler les sessions connectées.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-05-les-utilisateurs-et-les-groupes/" title="Systèmes clients Microsoft — Module 05 — Les utilisateurs et les groupes">Windows · M05 · Utilisateurs et groupes</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-06-la-securite-ntfs-et-les-acl/" title="Systèmes clients Microsoft — Module 06 — La sécurité NTFS et les ACL">Windows · M06 · NTFS et ACL</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="utilisateur-itil" data-glossary-card data-term="Utilisateur ITIL" data-full-name data-aliases="user" data-keywords="client | support" data-definition="Personne qui utilise quotidiennement le service et fournit symptômes, contexte, validation et retour d’expérience au support." data-courses="itil" data-modules="i02 i09" data-letter="U" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="419" aria-labelledby="utilisateur-itil-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="utilisateur-itil-titre"><a href="#utilisateur-itil" class="tssr-glossary-card__anchor" aria-label="Utilisateur ITIL">Utilisateur ITIL</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Personne qui utilise quotidiennement le service et fournit symptômes, contexte, validation et retour d’expérience au support.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> user</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="utilite-de-service" data-glossary-card data-term="Utilité de service" data-full-name data-aliases="utility | fit for purpose" data-keywords="valeur | garantie" data-definition="Fonctionnalité offerte par un service pour répondre à un besoin ; elle exprime ce que le service permet d’accomplir." data-courses="itil" data-modules="i02" data-letter="U" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="420" aria-labelledby="utilite-de-service-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="utilite-de-service-titre"><a href="#utilite-de-service" class="tssr-glossary-card__anchor" aria-label="Utilité de service">Utilité de service</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Fonctionnalité offerte par un service pour répondre à un besoin ; elle exprime ce que le service permet d’accomplir.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> utility · fit for purpose</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="uuid" data-glossary-card data-term="UUID" data-full-name="Universally Unique Identifier" data-aliases="identifiant unique universel" data-keywords="blkid | fstab" data-definition="Identifiant stable d’un système de fichiers ou périphérique, préférable au nom /dev/sdX pour un montage persistant dans fstab." data-courses="debian" data-modules="d09" data-letter="U" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="348" aria-labelledby="uuid-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="uuid-titre"><a href="#uuid" class="tssr-glossary-card__anchor" aria-label="UUID">UUID</a></h2>
    <p class="tssr-glossary-card__full-name">Universally Unique Identifier</p>
  </header>
  <p class="tssr-glossary-card__definition">Identifiant stable d’un système de fichiers ou périphérique, préférable au nom /dev/sdX pour un montage persistant dans fstab.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> identifiant unique universel</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="valeur-de-service" data-glossary-card data-term="Valeur de service" data-full-name data-aliases="service value" data-keywords="ITIL | résultat" data-definition="Bénéfice perçu par les parties prenantes grâce aux résultats facilités par le service, en tenant compte des coûts et risques." data-courses="itil" data-modules="i02" data-letter="V" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="044" data-source-order="421" aria-labelledby="valeur-de-service-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="valeur-de-service-titre"><a href="#valeur-de-service" class="tssr-glossary-card__anchor" aria-label="Valeur de service">Valeur de service</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Bénéfice perçu par les parties prenantes grâce aux résultats facilités par le service, en tenant compte des coûts et risques.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> service value</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-02-la-gestion-des-services/" title="Sensibilisation ITIL et gestion de parc — Module 02 — La gestion des services">ITIL · M02 · Gestion des services</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="validation-de-ticket" data-glossary-card data-term="Validation de ticket" data-full-name data-aliases data-keywords="approbation | demande" data-definition="Demande formelle d’accord adressée à un utilisateur ou responsable avant de poursuivre ou accepter une action liée au ticket." data-courses="itil glpi" data-modules="i09 g04" data-letter="V" data-course-sort="sensibilisation itil et gestion de parc" data-module-sort="051" data-source-order="486" aria-labelledby="validation-de-ticket-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="validation-de-ticket-titre"><a href="#validation-de-ticket" class="tssr-glossary-card__anchor" aria-label="Validation de ticket">Validation de ticket</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Demande formelle d’accord adressée à un utilisateur ou responsable avant de poursuivre ou accepter une action liée au ticket.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/06-sensibilisation-itil-gestion-parc/module-09-assistance-avec-glpi/" title="Sensibilisation ITIL et gestion de parc — Module 09 — Assistance avec GLPI">ITIL · M09 · Assistance avec GLPI</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-04-assistance-traitements-automatises-des-tickets/" title="Administration GLPI — Module 04 — Assistance — Traitements automatisés des tickets">GLPI · M04 · Automatisation des tickets</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="variable-de-shell" data-glossary-card data-term="Variable de shell" data-full-name data-aliases data-keywords="Bash | export" data-definition="Valeur nommée connue du shell courant mais non transmise aux processus enfants tant qu’elle n’est pas exportée." data-courses="linux" data-modules="l08" data-letter="V" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="271" aria-labelledby="variable-de-shell-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="variable-de-shell-titre"><a href="#variable-de-shell" class="tssr-glossary-card__anchor" aria-label="Variable de shell">Variable de shell</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Valeur nommée connue du shell courant mais non transmise aux processus enfants tant qu’elle n’est pas exportée.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="variable-d-environnement" data-glossary-card data-term="Variable d’environnement" data-full-name data-aliases data-keywords="export | environnement" data-definition="Valeur nommée héritée par les processus enfants, utilisée pour transmettre un contexte comme PATH, HOME, LANG ou un paramètre applicatif." data-courses="linux" data-modules="l08" data-letter="V" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="030" data-source-order="270" aria-labelledby="variable-d-environnement-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="variable-d-environnement-titre"><a href="#variable-d-environnement" class="tssr-glossary-card__anchor" aria-label="Variable d’environnement">Variable d’environnement</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Valeur nommée héritée par les processus enfants, utilisée pour transmettre un contexte comme PATH, HOME, LANG ou un paramètre applicatif.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-08-mecanismes-linux-et-bash-avance/" title="Utilisation d’une distribution GNU/Linux — Module 08 — Mécanismes Linux et Bash avancé">GNU/Linux · M08 · Bash avancé</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="versioning" data-glossary-card data-term="Versioning" data-full-name data-aliases="historique des versions" data-keywords="SharePoint | OneDrive" data-definition="Conservation de versions successives d’un fichier afin de consulter l’historique ou restaurer un état antérieur après une modification." data-courses="m365" data-modules="m05" data-letter="V" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="024" data-source-order="211" aria-labelledby="versioning-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="versioning-titre"><a href="#versioning" class="tssr-glossary-card__anchor" aria-label="Versioning">Versioning</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Conservation de versions successives d’un fichier afin de consulter l’historique ou restaurer un état antérieur après une modification.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> historique des versions</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-05-exploiter-teams-sharepoint-et-onedrive/" title="Microsoft 365 — Outils collaboratifs — Module 05 — Exploiter Teams, SharePoint et OneDrive">Microsoft 365 · M05 · Teams, SharePoint, OneDrive</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="vg" data-glossary-card data-term="VG" data-full-name="Volume Group" data-aliases="groupe de volumes" data-keywords="LVM | PV | LV" data-definition="Réservoir d’espace LVM constitué d’un ou plusieurs volumes physiques et dans lequel sont créés les volumes logiques." data-courses="debian" data-modules="d08" data-letter="V" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="349" aria-labelledby="vg-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="vg-titre"><a href="#vg" class="tssr-glossary-card__anchor" aria-label="VG">VG</a></h2>
    <p class="tssr-glossary-card__full-name">Volume Group</p>
  </header>
  <p class="tssr-glossary-card__definition">Réservoir d’espace LVM constitué d’un ou plusieurs volumes physiques et dans lequel sont créés les volumes logiques.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> groupe de volumes</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="vgcreate" data-glossary-card data-term="vgcreate" data-full-name data-aliases data-keywords="VG | PV" data-definition="Commande LVM qui crée un groupe de volumes à partir d’un ou plusieurs volumes physiques initialisés." data-courses="debian" data-modules="d08" data-letter="V" data-course-sort="administration debian gnu/linux" data-module-sort="038" data-source-order="350" aria-labelledby="vgcreate-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="vgcreate-titre"><a href="#vgcreate" class="tssr-glossary-card__anchor" aria-label="vgcreate">vgcreate</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande LVM qui crée un groupe de volumes à partir d’un ou plusieurs volumes physiques initialisés.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm/" title="Administration Debian GNU/Linux — Module 08 — Gestion des espaces de stockage avancée — LVM">Debian · M08 · LVM</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="vhd-vhdx" data-glossary-card data-term="VHD / VHDX" data-full-name="Virtual Hard Disk" data-aliases="disque dur virtuel" data-keywords="Hyper-V | montage" data-definition="Formats de disque dur virtuel Microsoft ; VHDX est plus récent, plus robuste et prend en charge des capacités supérieures à VHD." data-courses="windows" data-modules="w04" data-letter="V" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="159" aria-labelledby="vhd-vhdx-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="vhd-vhdx-titre"><a href="#vhd-vhdx" class="tssr-glossary-card__anchor" aria-label="VHD / VHDX">VHD / VHDX</a></h2>
    <p class="tssr-glossary-card__full-name">Virtual Hard Disk</p>
  </header>
  <p class="tssr-glossary-card__definition">Formats de disque dur virtuel Microsoft ; VHDX est plus récent, plus robuste et prend en charge des capacités supérieures à VHD.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> disque dur virtuel</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="vi-vim" data-glossary-card data-term="Vi / Vim" data-full-name data-aliases="Vi | Vim" data-keywords="éditeur modal" data-definition="Éditeur de texte modal en terminal où les commandes diffèrent selon les modes normal, insertion et commande." data-courses="linux" data-modules="l07" data-letter="V" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="029" data-source-order="272" aria-labelledby="vi-vim-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="vi-vim-titre"><a href="#vi-vim" class="tssr-glossary-card__anchor" aria-label="Vi / Vim">Vi / Vim</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Éditeur de texte modal en terminal où les commandes diffèrent selon les modes normal, insertion et commande.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Vi · Vim</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-07-utilisation-de-vi/" title="Utilisation d’une distribution GNU/Linux — Module 07 — Utilisation de Vi">GNU/Linux · M07 · Vi</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="vlan" data-glossary-card data-term="VLAN" data-full-name="Virtual Local Area Network" data-aliases="réseau local virtuel" data-keywords="segmentation | 802.1Q" data-definition="Segmentation logique d’un réseau commuté en domaines de diffusion séparés, même lorsque les équipements partagent des commutateurs physiques." data-courses="reseaux" data-modules="r04" data-letter="V" data-course-sort="bases des reseaux" data-module-sort="003" data-source-order="75" aria-labelledby="vlan-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="vlan-titre"><a href="#vlan" class="tssr-glossary-card__anchor" aria-label="VLAN">VLAN</a></h2>
    <p class="tssr-glossary-card__full-name">Virtual Local Area Network</p>
  </header>
  <p class="tssr-glossary-card__definition">Segmentation logique d’un réseau commuté en domaines de diffusion séparés, même lorsque les équipements partagent des commutateurs physiques.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> réseau local virtuel</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-04-la-communication-dans-un-reseau/" title="Bases des réseaux — Module 04 — La communication dans un réseau">Réseaux · M04 · Communication réseau</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="vlsm" data-glossary-card data-term="VLSM" data-full-name="Variable Length Subnet Mask" data-aliases="masque de longueur variable" data-keywords="adressage efficace" data-definition="Méthode de sous-réseautage qui attribue des préfixes de longueurs différentes selon le nombre d’hôtes réellement nécessaire." data-courses="reseaux" data-modules="r03" data-letter="V" data-course-sort="bases des reseaux" data-module-sort="002" data-source-order="76" aria-labelledby="vlsm-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="vlsm-titre"><a href="#vlsm" class="tssr-glossary-card__anchor" aria-label="VLSM">VLSM</a></h2>
    <p class="tssr-glossary-card__full-name">Variable Length Subnet Mask</p>
  </header>
  <p class="tssr-glossary-card__definition">Méthode de sous-réseautage qui attribue des préfixes de longueurs différentes selon le nombre d’hôtes réellement nécessaire.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> masque de longueur variable</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/01-bases-reseaux/module-03-l-adressage-ipv4/" title="Bases des réseaux — Module 03 — L’adressage IPv4">Réseaux · M03 · Adressage IPv4</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="volume" data-glossary-card data-term="Volume" data-full-name data-aliases data-keywords="disque | système de fichiers" data-definition="Espace de stockage logique formatable et montable, créé à partir d’une partition ou d’un assemblage géré par le système." data-courses="windows debian" data-modules="w04 d07" data-letter="V" data-course-sort="systemes clients microsoft" data-module-sort="009" data-source-order="160" aria-labelledby="volume-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="volume-titre"><a href="#volume" class="tssr-glossary-card__anchor" aria-label="Volume">Volume</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Espace de stockage logique formatable et montable, créé à partir d’une partition ou d’un assemblage géré par le système.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-04-la-gestion-du-stockage/" title="Systèmes clients Microsoft — Module 04 — La gestion du stockage">Windows · M04 · Stockage Windows</a></li>
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-07-gestion-des-espaces-de-stockage/" title="Administration Debian GNU/Linux — Module 07 — Gestion des espaces de stockage">Debian · M07 · Stockage</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="waas" data-glossary-card data-term="WaaS" data-full-name="Windows as a Service" data-aliases="Windows en tant que service" data-keywords="mise à jour" data-definition="Modèle de maintenance où Windows reçoit régulièrement mises à jour de qualité et évolutions fonctionnelles pendant son cycle de support." data-courses="windows" data-modules="w01" data-letter="W" data-course-sort="systemes clients microsoft" data-module-sort="006" data-source-order="161" aria-labelledby="waas-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="waas-titre"><a href="#waas" class="tssr-glossary-card__anchor" aria-label="WaaS">WaaS</a></h2>
    <p class="tssr-glossary-card__full-name">Windows as a Service</p>
  </header>
  <p class="tssr-glossary-card__definition">Modèle de maintenance où Windows reçoit régulièrement mises à jour de qualité et évolutions fonctionnelles pendant son cycle de support.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> Windows en tant que service</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-01-les-systemes-d-exploitation-et-microsoft-windows-10/" title="Systèmes clients Microsoft — Module 01 — Les systèmes d’exploitation et Microsoft Windows 10">Windows · M01 · Systèmes d’exploitation</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="wc" data-glossary-card data-term="wc" data-full-name="Word Count" data-aliases data-keywords="comptage | texte" data-definition="Commande qui compte lignes, mots et octets ou caractères d’un fichier ou d’un flux, utile en fin de pipeline." data-courses="linux" data-modules="l05" data-letter="W" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="027" data-source-order="273" aria-labelledby="wc-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="wc-titre"><a href="#wc" class="tssr-glossary-card__anchor" aria-label="wc">wc</a></h2>
    <p class="tssr-glossary-card__full-name">Word Count</p>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui compte lignes, mots et octets ou caractères d’un fichier ou d’un flux, utile en fin de pipeline.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-05-lire-des-fichiers-et-gerer-les-liens/" title="Utilisation d’une distribution GNU/Linux — Module 05 — Lire des fichiers et gérer les liens">GNU/Linux · M05 · Fichiers et liens</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="where" data-glossary-card data-term="WHERE" data-full-name data-aliases data-keywords="filtre | SELECT | AND | OR" data-definition="Clause SQL qui conserve uniquement les lignes satisfaisant une condition, avec une attention particulière à NULL et aux opérateurs logiques." data-courses="glpi" data-modules="g05" data-letter="W" data-course-sort="administration glpi" data-module-sort="056" data-source-order="487" aria-labelledby="where-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="where-titre"><a href="#where" class="tssr-glossary-card__anchor" aria-label="WHERE">WHERE</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Clause SQL qui conserve uniquement les lignes satisfaisant une condition, avec une attention particulière à NULL et aux opérateurs logiques.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/07-administration-glpi/module-05-les-bases-de-mysql-et-mariadb/" title="Administration GLPI — Module 05 — Les bases de MySQL et MariaDB">GLPI · M05 · MySQL et MariaDB</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="where-object" data-glossary-card data-term="Where-Object" data-full-name data-aliases="where | ?" data-keywords="filtrage | pipeline" data-definition="Cmdlet PowerShell qui conserve uniquement les objets satisfaisant une condition portant sur leurs propriétés." data-courses="windows" data-modules="w11" data-letter="W" data-course-sort="systemes clients microsoft" data-module-sort="016" data-source-order="162" aria-labelledby="where-object-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="where-object-titre"><a href="#where-object" class="tssr-glossary-card__anchor" aria-label="Where-Object">Where-Object</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Cmdlet PowerShell qui conserve uniquement les objets satisfaisant une condition portant sur leurs propriétés.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> where · ?</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-11-plus-loin-avec-powershell/" title="Systèmes clients Microsoft — Module 11 — Plus loin avec PowerShell">Windows · M11 · PowerShell</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="whoami" data-glossary-card data-term="whoami" data-full-name data-aliases data-keywords="identité | utilisateur" data-definition="Commande qui affiche le nom de l’utilisateur effectif exécutant la session ou le processus courant." data-courses="linux" data-modules="l03" data-letter="W" data-course-sort="utilisation d’une distribution gnu/linux" data-module-sort="025" data-source-order="274" aria-labelledby="whoami-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="whoami-titre"><a href="#whoami" class="tssr-glossary-card__anchor" aria-label="whoami">whoami</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Commande qui affiche le nom de l’utilisateur effectif exécutant la session ou le processus courant.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/04-utilisation-gnu-linux/module-03-premieres-commandes/" title="Utilisation d’une distribution GNU/Linux — Module 03 — Premières commandes">GNU/Linux · M03 · Premières commandes</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="wim" data-glossary-card data-term="WIM" data-full-name="Windows Imaging Format" data-aliases="image Windows" data-keywords="DISM | capture" data-definition="Format d’image fichier de Microsoft pouvant contenir plusieurs éditions ou installations Windows et utilisé pour capture et déploiement." data-courses="windows" data-modules="w12" data-letter="W" data-course-sort="systemes clients microsoft" data-module-sort="017" data-source-order="163" aria-labelledby="wim-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="wim-titre"><a href="#wim" class="tssr-glossary-card__anchor" aria-label="WIM">WIM</a></h2>
    <p class="tssr-glossary-card__full-name">Windows Imaging Format</p>
  </header>
  <p class="tssr-glossary-card__definition">Format d’image fichier de Microsoft pouvant contenir plusieurs éditions ou installations Windows et utilisé pour capture et déploiement.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> image Windows</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-12-introduction-a-la-capture-et-au-deploiement-d-image/" title="Systèmes clients Microsoft — Module 12 — Introduction à la capture et au déploiement d’image">Windows · M12 · Capture et déploiement</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="windows-update" data-glossary-card data-term="Windows Update" data-full-name data-aliases data-keywords="correctif | mise à jour" data-definition="Service et interface qui recherchent, téléchargent et installent les correctifs de sécurité, qualité, pilotes et parfois fonctionnalités Windows." data-courses="windows" data-modules="w10" data-letter="W" data-course-sort="systemes clients microsoft" data-module-sort="015" data-source-order="165" aria-labelledby="windows-update-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="windows-update-titre"><a href="#windows-update" class="tssr-glossary-card__anchor" aria-label="Windows Update">Windows Update</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Service et interface qui recherchent, téléchargent et installent les correctifs de sécurité, qualité, pilotes et parfois fonctionnalités Windows.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="winre" data-glossary-card data-term="WinRE" data-full-name="Windows Recovery Environment" data-aliases="environnement de récupération Windows" data-keywords="dépannage" data-definition="Environnement de récupération Windows qui fournit réparation du démarrage, restauration, désinstallation de mises à jour et outils avancés." data-courses="windows" data-modules="w10" data-letter="W" data-course-sort="systemes clients microsoft" data-module-sort="015" data-source-order="164" aria-labelledby="winre-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="winre-titre"><a href="#winre" class="tssr-glossary-card__anchor" aria-label="WinRE">WinRE</a></h2>
    <p class="tssr-glossary-card__full-name">Windows Recovery Environment</p>
  </header>
  <p class="tssr-glossary-card__definition">Environnement de récupération Windows qui fournit réparation du démarrage, restauration, désinstallation de mises à jour et outils avancés.</p>
  <p class="tssr-glossary-card__aliases"><span>Alias</span> environnement de récupération Windows</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/02-systemes-clients-microsoft/module-10-la-maintenance-du-systeme/" title="Systèmes clients Microsoft — Module 10 — La maintenance du système">Windows · M10 · Maintenance Windows</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="word" data-glossary-card data-term="Word" data-full-name data-aliases data-keywords="DOCX | traitement de texte" data-definition="Application Microsoft de traitement de texte utilisée pour créer, structurer, mettre en forme, réviser et partager des documents." data-courses="m365" data-modules="m02" data-letter="W" data-course-sort="microsoft 365 — outils collaboratifs" data-module-sort="021" data-source-order="212" aria-labelledby="word-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="word-titre"><a href="#word" class="tssr-glossary-card__anchor" aria-label="Word">Word</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Application Microsoft de traitement de texte utilisée pour créer, structurer, mettre en forme, réviser et partager des documents.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/03-microsoft-365-outils-collaboratifs/module-02-connaissances-des-notions-de-base-word/" title="Microsoft 365 — Outils collaboratifs — Module 02 — Connaissances des notions de base Word">Microsoft 365 · M02 · Word</a></li>
  </ul>
</article>

<article class="tssr-glossary-card" id="xfs" data-glossary-card data-term="XFS" data-full-name data-aliases data-keywords="filesystem | journalisation" data-definition="Système de fichiers journalisé conçu pour les gros volumes et les opérations parallèles, dont l’agrandissement s’effectue lorsqu’il est monté." data-courses="debian" data-modules="d09" data-letter="X" data-course-sort="administration debian gnu/linux" data-module-sort="039" data-source-order="351" aria-labelledby="xfs-titre">
  <header class="tssr-glossary-card__header">
    <h2 id="xfs-titre"><a href="#xfs" class="tssr-glossary-card__anchor" aria-label="XFS">XFS</a></h2>
  </header>
  <p class="tssr-glossary-card__definition">Système de fichiers journalisé conçu pour les gros volumes et les opérations parallèles, dont l’agrandissement s’effectue lorsqu’il est monté.</p>
  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">
    <li><a class="tssr-glossary-card__context" href="../modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system/" title="Administration Debian GNU/Linux — Module 09 — Gestion des espaces de stockage — File System">Debian · M09 · Systèmes de fichiers</a></li>
  </ul>
</article>
  </div>
</div>
