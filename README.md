<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="images/logogold.png" alt="Accueil BotC FR" width="200">
  </a>
</p>

<!-- PATCH LISIBILITÉ + BANNIÈRE ÉCLAIRCIE (version plus sombre et équilibrée) -->
<style>
  /* 1) BANNIÈRE : voile plus discret, ambiance dorée douce */
  body::before {
    background: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),
                url("/botc-fr-bambi/images/banner.png") no-repeat center / cover !important;
    opacity: 1 !important;
  }

  /* 2) Couleur générale du texte */
  body { color: #f2ede3 !important; }

  /* 3) Titres : doré profond, bien lisible sur fond sombre */
  h1, h2, h3 {
    color: #c9a758 !important;
    text-shadow: 1px 1px 5px rgba(0,0,0,0.4) !important;
  }

  /* 4) Liens : doré doux */
  a { color: #d2b56e !important; }
  a:hover { color: #f0d88f !important; }

/* 6) Cartes et blocs – un peu plus opaques pour la lisibilité */
.home-card, .rules-cell {
  background: rgba(0,0,0,0.45) !important;  /* voile sombre léger mais net */
  border: 1px solid rgba(198,162,93,0.40) !important;
  box-shadow: 0 3px 12px rgba(0,0,0,0.45) !important;
}

.home-card:hover, .rules-cell:hover {
  background: rgba(0,0,0,0.60) !important;  /* un peu plus marqué au survol */
  border-color: rgba(198,162,93,0.65) !important;
  box-shadow: 0 8px 18px rgba(0,0,0,0.60) !important;
}
</style>


<!--  PAGE D’ACCUEIL - WIKI BOTC FR -->

<div style="text-align:center; margin:40px auto 0 auto; max-width:980px; padding:25px 20px; border:1px solid rgba(212,167,106,0.3); border-radius:10px; box-shadow:0 0 12px rgba(0,0,0,0.4); background-color:rgba(0,0,0,0.45);">

  <h1 style="color:#b58b52; font-size:24px; font-weight:bold; text-shadow:2px 2px 6px #000; margin-top:20px;">
     Bienvenue sur le Wiki Francophone « non officiel » de <br>
    <span style="color:#d4a76a;">Blood on the Clocktower</span>
  </h1>

  <p style="font-size:20px; color:#e0c99d; font-style:italic; margin-top:15px;">
    « Explorez les rôles, les stratégies et les secrets de chaque édition. »
  </p>

</div>

<div style="margin:25px auto 0 auto; max-width:980px; padding:20px; border:1px solid rgba(212,167,106,0.3); border-radius:10px; box-shadow:0 0 12px rgba(0,0,0,0.4); background-color:rgba(0,0,0,0.45);">

  <p style="font-size:20px; color:#e0c99d; font-style:italic; line-height:1.8; margin:0;">
    <span style="font-weight:bold; color:#d4a76a;">Traductions fidèles</span>,
    des <span style="font-weight:bold; color:#d4a76a;">conseils</span> et des
    <span style="font-weight:bold; color:#d4a76a;">ressources</span>
    pour aider les communautés francophones à jouer dans un cadre
    <span style="font-weight:bold; color:#d4a76a;">inclusif et bienveillant.</span>
  </p>

  <p style="font-size:16px; color:#e0c99d; line-height:1.7; margin-top:14px; margin-bottom:0;">
    Ce site web est né de l’amour de
    <a href="https://bloodontheclocktower.com/"
       target="_blank" rel="noopener noreferrer"
       style="color:#d4a76a; font-weight:bold; text-decoration:none;">
      Blood on the Clocktower
    </a>
    et il n’a aucun but lucratif.<br>
    Tout le contenu de
    <a href="https://bloodontheclocktower.com/"
       target="_blank" rel="noopener noreferrer"
       style="color:#d4a76a; font-weight:bold; text-decoration:none;">
      Blood on the Clocktower
    </a>
    appartient à
    <span style="color:#d4a76a; font-weight:bold;">The Pandemonium Institute</span>.
  </p>

</div>

<hr style="margin:16px auto; max-width:980px; border:1px solid rgba(181,139,82,.25);">

<!-- ====== INFORMATIONS SUR LE JEU ====== -->

<h1 style="
  color:#b58b52;
  font-size:20px;
  font-weight:bold;
  text-shadow:2px 2px 6px #000;
  padding-left:16px;
  margin-bottom:10px;
">
  Informations sur le Jeu
</h1>

<table class="rules-table">
  <tr>
    <td class="rules-cell">
      <a class="rules-link" href="./glossaire.html" aria-label="Glossaire des termes Français">
        <div class="rules-title">Glossaire des termes </div>
        <div class="rules-sub">Liste des termes en français</div>
      </a>
    </td>

    <td class="rules-cell">
      <a class="rules-link" href="./glossaireengfr.html" aria-label="Glossaire des termes anglais">
        <div class="rules-title">Glossary des termes en anglais</div>
        <div class="rules-sub">Termes anglais & équivalents</div>
      </a>
    </td>

    <td class="rules-cell">
      <a class="rules-link" href="./conteur.html" aria-label="Conseils pour les Conteurs et Conteuses">
        <div class="rules-title">Conseils pour les Conteurs et Conteuses</div>
        <div class="rules-sub">Astuces, bonnes pratiques</div>
      </a>
    </td>

    <td class="rules-cell">
      <a class="rules-link" href="./strategie.html" aria-label="Conseils et Stratégies pour les joueurs et joueuses">
        <div class="rules-title">Conseils & Stratégies pour les joueurs et joueuses</div>
        <div class="rules-sub">Pistes de réflexion en partie</div>
      </a>
    </td>
  </tr>
</table>

<!-- ====== /INFORMATIONS SUR LE JEU ====== -->


<!--  Livre des Règles (version table, sans <div>) -->
<h1 style="
  color:#b58b52;
  font-size:20px;
  font-weight:bold;
  text-shadow:2px 2px 6px #000;
  padding-left:16px;
  margin-bottom:14px;
">
  Livre des Règles
</h1>

<style>
  .rules-table { width:100%; border-collapse:separate; border-spacing:16px 14px; }
  .rules-cell {
    border:1px solid rgba(181,139,82,0.25);
    border-radius:14px;
    background:rgba(0,0,0,0.45);
    box-shadow:0 6px 18px rgba(0,0,0,0.28);
    padding:18px 12px;
    text-align:center;
    vertical-align:middle;
    height:110px; /* hauteur uniforme */
  }
  .rules-link { text-decoration:none; display:block; }
  .rules-title { color:#d4a76a; font-weight:bold; font-size:20px; line-height:1.25; margin:0; }
  .rules-sub   { color:#c9b08a; font-size:14px; opacity:.9; margin-top:6px; }
  @media (max-width: 720px) {
    .rules-table, .rules-table tbody, .rules-table tr, .rules-table td { display:block; width:100%; }
    .rules-cell { margin-bottom:12px; height:auto; }
  }
</style>

<table class="rules-table">
  <tr>
    <td class="rules-cell">
      <a class="rules-link" href="./blood_on_the_clocktower.html">
        <div class="rules-title">Découvrir le jeu</div>
        <div class="rules-sub">Premiers pas, esprit du jeu</div>
      </a>
    </td>
    <td class="rules-cell">
      <a class="rules-link" href="./regles.html">
        <div class="rules-title">Explications des règles</div>
        <div class="rules-sub">Univers, signaux, déroulé</div>
      </a>
    </td>
    <td class="rules-cell">
      <a class="rules-link" href="./repartition.html">
        <div class="rules-title">Répartition du village</div>
        <div class="rules-sub">Configuration officielle</div>
      </a>
    </td>
    <td class="rules-cell">
      <a class="rules-link" href="./installation.html">
        <div class="rules-title">Installation</div>
        <div class="rules-sub">Mise en place étape par étape</div>
      </a>
    </td>
  </tr>
  <tr>
    <td class="rules-cell">
      <a class="rules-link" href="./capacite.html">
        <div class="rules-title">Capacités</div>
        <div class="rules-sub">Quand et comment elles s’appliquent</div>
      </a>
    </td>
    <td class="rules-cell">
      <a class="rules-link" href="./etats.html">
        <div class="rules-title">États</div>
        <div class="rules-sub">Ivresse, empoisonnement…</div>
      </a>
    </td>
    <td class="rules-cell">
      <a class="rules-link" href="./teensyville.html">
        <div class="rules-title">Teensyville</div>
        <div class="rules-sub">Format 5–6 joueurs et joueuses</div>
      </a>
    </td>
    <td class="rules-cell">
      <a class="rules-link" href="./outildescript.html">
        <div class="rules-title">Outil de Script</div>
        <div class="rules-sub">Créez vos scripts personnalisés</div>
      </a>
    </td>
  </tr>
</table>

<!-- Rôles par Édition -->
<h1 style="
  color:#b58b52;
  font-size:20px;
  font-weight:bold;
  text-shadow:2px 2px 6px #000;
  padding-left:16px;
  margin-bottom:14px;
">
  Rôles par Édition
</h1>

<style>
  /* === Grille table 3x3, responsive, sans <div> visibles === */
  table.roles-grid{
  width:100%;
  max-width:1200px;
  margin:12px 0 0 0;
  border-collapse:separate;
  border-spacing:16px;
}
table.roles-grid td{
  width:33.333%;
  background:rgba(0,0,0,0.45);          /* fond plus opaque */
  border:1px solid rgba(181,139,82,0.40);
  border-radius:16px;
  text-align:center;
  padding:12px;
  vertical-align:top;
}
}
  }
  table.roles-grid a{
    text-decoration:none;
    display:inline-block;
    width:100%;
    color:#e0b97a; /* doré clair, plus lisible */
  }

  /* Image uniforme partout */
  .rg-media{
    display:inline-block;
    width:100%;
    max-width:360px;
    height:160px;
    background:rgba(0,0,0,0.18);
    border-radius:12px;
    overflow:hidden;
  }
  .rg-media img{
    display:block;
    max-width:100%;
    max-height:100%;
    width:auto;
    height:100%;
    object-fit:contain;
    margin:0 auto;
  }

  /* Titre uniforme (réserve la même hauteur) */
  .rg-title{
    display:block;
    font-weight:700;
    font-size:16px;
    line-height:1.3;
    min-height:48px;
    padding:10px 6px 0 6px;
    color:#e0b97a; /* doré clair */
  }

  .rg-badge{
    display:inline-block;
    margin:8px 0 4px 0;
    padding:3px 8px;
    font-size:12px;
    font-weight:700;
    letter-spacing:.2px;
    border-radius:999px;
    background:rgba(213,165,106,0.15);
    color:#e0b97a;
  }

  /* ===== Responsive : 1 carte par ligne en mobile ===== */
  @media (max-width: 740px){
    table.roles-grid,
    table.roles-grid tbody,
    table.roles-grid tr,
    table.roles-grid td{
      display:block;
      width:100% !important;
    }
    table.roles-grid{ border-spacing:14px; }
    .rg-media{ height:140px; }
  }
</style>

<table class="roles-grid" role="presentation" aria-label="Rôles par Édition">
  <tr>
    <!--  Trouble Brewing -->
    <td>
      <a href="./trouble_brewing.html">
        <span class="rg-media">
          <img src="./images/Logo_trouble_brewing.png" alt="Trouble Brewing">
        </span>
        <span class="rg-title">Trouble Brewing</span>
      </a>
    </td>

    <!--  Bad Moon Rising -->
    <td>
      <a href="./bmr.html">
        <span class="rg-media">
          <img src="./images/Logo_bad_moon_rising-1.png" alt="Bad Moon Rising">
        </span>
        <span class="rg-title">Bad Moon Rising</span>
      </a>
    </td>

    <!--  Sects & Violets -->
    <td>
      <a href="./sv.html">
        <span class="rg-media">
          <img src="./images/Logo_sects_and_violets.png" alt="Sects &amp; Violets">
        </span>
        <span class="rg-title">Sects &amp; Violets</span>
      </a>
    </td>
  </tr>

  <tr>
    <!--  Voyageurs -->
    <td>
      <a href="./voyageurs/voyageurs.html">
        <span class="rg-media">
          <img src="./images/Generic_traveller.png" alt="Voyageurs">
        </span>
        <span class="rg-title">Voyageurs</span>
      </a>
    </td>

    <!--  The Carousel Expérimental -->
    <td>
      <a href="./experimentaux.html">
        <span class="rg-media">
          <img src="./images/carousel.png" alt="The Carousel Expérimental">
        </span>
        <span class="rg-title">The Carousel Expérimentaux</span>
      </a>
    </td>

    <!--  Légendaires -->
    <td>
      <a href="./legendaire.html">
        <span class="rg-media">
          <img src="./images/Generic_fabled.png" alt="Légendaires" style="opacity:.65; filter:grayscale(15%);">
        </span>
        <span class="rg-title">Légendaires</span>
      </a>
    </td>
  </tr>

  <tr>
    <!--  Lorics -->
    <td>
      <a href="./loric.html">
        <span class="rg-media">
          <img src="./images/Generic_loric.png" alt="Lorics">
        </span>
        <span class="rg-title">Lorics</span>
      </a>
    </td>

    <!--  Garden of Sin -->
    <td>
      <a href="./gardenofsin.html">
        <span class="rg-media">
          <img src="./images/logo_garden_of_sin.png" alt="Garden of Sin">
        </span>
        <span class="rg-title">Garden of Sin</span>
        <span class="rg-badge">Prochainement</span>
      </a>
    </td>

    <!--  The Tomb -->
    <td>
      <a href="./thetomb.html">
        <span class="rg-media">
          <img src="./images/logo_the_tomb.png" alt="The Tomb">
        </span>
        <span class="rg-title">The Tomb</span>
        <span class="rg-badge">Prochainement</span>
      </a>
    </td>
  </tr>

  <tr>
    <!-- Midnight in the House of the Damned -->
    <td>
      <a href="./mind.html">
        <span class="rg-media">
          <img src="./images/logo_midnight_in_the_house_of_the_damned.png" alt="Midnight in the House of the Damned">
        </span>
        <span class="rg-title">Midnight in the House of the Damned</span>
        <span class="rg-badge">Prochainement</span>
      </a>
    </td>

    <!-- The Greatest Show on Earth -->
    <td>
      <a href="./gshow.html">
        <span class="rg-media">
          <img src="./images/logo_the_greatest_show_on_earth.png" alt="The Greatest Show on Earth">
        </span>
        <span class="rg-title">The Greatest Show on Earth</span>
        <span class="rg-badge">Prochainement</span>
      </a>
    </td>

    <!-- Placeholder vide pour compléter la ligne -->
    <td aria-hidden="true"></td>
  </tr>
</table>
<!-- ====== /GRID D'ACCUEIL ====== -->

<!-- Catégories -->
<h2 style="
  color:#b58b52;
  font-weight:bold;
  font-size:20px;
  text-shadow:2px 2px 6px #000;
  padding-left:16px;
  margin-bottom:14px;
">
  Catégories
</h2>

<div style="width:100%; text-align:left;">

<table style="width:100%; border-collapse:separate; border-spacing:16px;">
  <tr>
    <!-- Villageois -->
    <td style="width:50%; text-align:center; padding:12px; background:rgba(0,0,0,0.45); border:1px solid #b58b52; border-radius:12px;">
      <a href="./villageois.html" style="text-decoration:none; display:inline-block;">
        <img src="./images/Generic_townsfolk.png" alt="Villageois" width="240" style="border-radius:12px;">
        <div style="margin-top:8px; color:#4ea3ff; font-weight:bold; font-size:20px;">Villageois</div>
      </a>
    </td>

    <!-- Étrangers -->
    <td style="width:50%; text-align:center; padding:12px; background:rgba(0,0,0,0.45); border:1px solid #b58b52; border-radius:12px;">
      <a href="./etrangers.html" style="text-decoration:none; display:inline-block;">
        <img src="./images/Generic_outsider.png" alt="Étrangers" width="240" style="border-radius:12px;">
        <div style="margin-top:8px; color:#4ea3ff; font-weight:bold; font-size:20px;">Étrangers</div>
      </a>
    </td>
  </tr>

  <tr>
    <!-- Sbires -->
    <td style="width:50%; text-align:center; padding:12px; background:rgba(0,0,0,0.45); border:1px solid #b58b52; border-radius:12px;">
      <a href="./sbires.html" style="text-decoration:none; display:inline-block;">
        <img src="./images/Generic_minion.png" alt="Sbires" width="240" style="border-radius:12px;">
        <div style="margin-top:8px; color:#d45b5b; font-weight:bold; font-size:20px;">Sbires</div>
      </a>
    </td>

    <!-- Démons -->
    <td style="width:50%; text-align:center; padding:12px; background:rgba(0,0,0,0.45); border:1px solid #b58b52; border-radius:12px;">
      <a href="./demons.html" style="text-decoration:none; display:inline-block;">
        <img src="./images/Generic_demon.png" alt="Démons" width="240" style="border-radius:12px;">
        <div style="margin-top:8px; color:#d45b5b; font-weight:bold; font-size:20px;">Démons</div>
      </a>
    </td>
  </tr>

  <tr>
    <!-- Voyageurs -->
    <td style="width:50%; text-align:center; padding:12px; background:rgba(0,0,0,0.45); border:1px solid #b58b52; border-radius:12px;">
      <a href="./voyageurs/voyageurs.html" style="text-decoration:none; display:inline-block;">
        <img src="./images/Generic_traveller.png" alt="Voyageurs" width="240" style="border-radius:12px;">
        <div style="margin-top:8px; color:#9b59b6; font-weight:bold; font-size:20px;">Voyageurs</div>
      </a>
    </td>

    <!-- Légendaires -->
    <td style="width:50%; text-align:center; padding:12px; background:rgba(0,0,0,0.45); border:1px solid #b58b52; border-radius:12px;">
      <a href="./legendaire.html" style="text-decoration:none; display:inline-block; opacity:0.8;">
        <img src="./images/Generic_fabled.png" alt="Légendaires" width="240" style="border-radius:12px; opacity:0.7;">
        <div style="margin-top:8px; color:d4a76a; font-weight:bold; font-size:20px;">Légendaires</div>
      </a>
    </td>
  </tr>
</table>

</div>


<!-- ====== SCRIPTS PERSONNALISÉS ====== -->
<style>
.scripts-grid {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    margin: 26px 0 12px 0; /* plus de centrage automatique */
    width: 100%; /* prend toute la largeur comme les autres blocs */
}

  .home-card {
    display: inline-block;
    text-decoration: none;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(181,139,82,0.28);
   background: rgba(0,0,0,0.45); /* voile plus opaque */
    box-shadow: 0 6px 18px rgba(0,0,0,0.28);
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, background .18s ease;
    width: 100%;
    max-width: 290px;
    text-align: center;
  }

  .home-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.38);
    border-color: rgba(212,167,106,0.55);
    background: rgba(255,255,255,0.04);
  }

  .home-card img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: contain;
    background: rgba(0,0,0,0.25);
  }

  .home-card .home-title {
    display: block;
    padding: 10px 10px 12px 10px;
    color: #b58b52;
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
    letter-spacing: .2px;
  }

  .badge-pending {
    display: inline-block;
    margin: 4px 0 12px 0;
    padding: 2px 8px;
    font-size: 12px;
    color: #d4a76a;
    border: 1px solid rgba(212,167,106,0.45);
    border-radius: 999px;
    opacity: .85;
  }
</style>

<h2 style="
  color:#b58b52;
  font-weight:bold;
  font-size:20px;
  text-shadow:2px 2px 6px #000;
  padding-left:16px;
  margin-bottom:14px;
">
  Scripts personnalisés
</h2>

<div class="scripts-grid">

  <!-- Scripts personnalisés -->
  <a class="home-card" href="#" onclick="return false;" aria-label="Scripts personnalisés">
    <img src="./images/Icon_mezepheles.png" alt="Scripts personnalisés" style="opacity:.9;">
    <span class="home-title">Scripts personnalisés</span>
    <span class="badge-pending">à venir</span>
  </a>

</div>
<!-- ====== /SCRIPTS PERSONNALISÉS ====== -->


<div style="
  width:100%;
  margin:40px 0;
  padding:25px 20px;
  text-align:left;
  border:1px solid rgba(212,167,106,0.3);
  border-radius:10px;
  background-color:rgba(0,0,0,0.45);
  box-shadow:0 0 12px rgba(0,0,0,0.4);
">

  <h2 style="
    color:#b58b52;
    font-weight:bold;
    font-size:20px;
    margin-bottom:10px;
  ">
     Ressources en ligne pour Blood on the Clocktower
  </h2>

  <!-- Petite icône Blood on the Clocktower -->
  <img src="./images/logomini.png"
       alt="Blood on the Clocktower"
       style="width:65px; height:auto; margin-bottom:12px; opacity:0.95; display:block;">

  <p style="color:#e0c99d; font-size:18px; margin-bottom:18px;">
     Le jeu <span style="color:#d4a76a; font-weight:bold;">Blood on the Clocktower</span>
     a été créé par <span style="color:#d4a76a; font-weight:bold;">The Pandemonium Institute</span>.
  </p>

  <ul style="
    list-style:none;
    padding-left:0;
    font-size:16px;
    color:#e0c99d;
  ">
    
    <!-- LIENS EN PREMIER -->
    <li>
      <a href="https://bloodontheclocktower.com/" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Site Officiel Blood on the Clocktower 
      </a>
    </li>

    <li>
      <a href="https://discord.gg/eD4zvq6RvB" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Discord Unofficial
      </a>
    </li>

    <!-- LIENS DÉJÀ EXISTANTS -->
    <li>
      <a href="https://botc.app/" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Application pour jouer en ligne 
      </a>
    </li>

    <li>
      <a href="https://wiki.bloodontheclocktower.com/Main_Page" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Wiki officiel The Pandemonium Institute
      </a>
    </li>

    <li>
      <a href="https://www.botcscripts.com" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         La librairie des scripts BotC
      </a>
    </li>

    <li>
      <a href="https://script.bloodontheclocktower.com/" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Outil officiel de création de scripts
      </a>
    </li>

    <li>
      <a href="https://savant.thegrim.gg/" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Générateur d’informations pour le rôle du Savant
      </a>
    </li>

    <!-- YOUTUBE -->
    <li>
      <a href="https://www.youtube.com/@BloodontheClocktower" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         YouTube  
      </a>
    </li>

    <!-- TWITCH OFFICIEL -->
    <li>
      <a href="https://www.twitch.tv/thepandemoniuminstitute" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
        Twitch 
      </a>
    </li>

    <!-- INSTAGRAM -->
    <li>
      <a href="https://www.instagram.com/stories/bloodontheclocktower/" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Instagram 
      </a>
    </li>

    <!-- PATREON -->
    <li>
      <a href="https://www.patreon.com/c/botconline/posts" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Patreon 
      </a>
    </li>

    <!-- CONTACT OFFICIEL -->
    <li>
      <a href="mailto:butler@bloodontheclocktower.com"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Contact : butler@bloodontheclocktower.com
      </a>
    </li>

  </ul>

</div>


<div style="
  width:100%;
  margin:40px 0;
  padding:25px 20px;
  text-align:left;
  border:1px solid rgba(212,167,106,0.3);
  border-radius:10px;
  background-color:rgba(0,0,0,0.45);
  box-shadow:0 0 12px rgba(0,0,0,0.4);
">

  <h2 style="color:#b58b52; font-weight:bold; font-size:18px; margin-bottom:10px;">
     Open Sesame Games
  </h2>

  <!-- Petite icône Open Sesame Games -->
  <img src="./images/opensesamegames.jpg"
       alt="Open Sesame Games"
       style="width:65px; height:auto; margin-bottom:15px; opacity:0.95; display:block;">

  <p style="color:#e0c99d; font-size:16px; margin-bottom:15px;">
     <span style="color:#d4a76a; font-weight:bold;">Le jeu Blood on the Clocktower en français</span> est édité par Open Sesame Games.
  </p>

  <ul style="list-style:none; padding-left:0; font-size:16px; color:#e0c99d;">

    <li>
      <a href="https://open-sesame.games" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Site officiel Open Sesame Games
      </a>
    </li>

    <li>
      <a href="https://discord.gg/7jM7F9bZGf" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Discord 
      </a>
    </li>

    <li>
      <a href="https://www.youtube.com/@opensesamegames1793" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         YouTube 
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/opensesamegames/" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Instagram 
      </a>
    </li>

    <li>
      <a href="mailto:contact@open-sesame.games"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Contact : contact@open-sesame.games
      </a>
    </li>

  </ul>

</div>



<div style="
  width:100%;
  margin:40px 0;
  padding:25px 20px;
  text-align:left;
  border:1px solid rgba(212,167,106,0.3);
  border-radius:10px;
  background-color:rgba(0,0,0,0.45);
  box-shadow:0 0 12px rgba(0,0,0,0.4);
">

  <h2 style="color:#b58b52; font-weight:bold; font-size:18px; margin-bottom:10px;">
    Wiki Francophone « non officiel »
  </h2>

  <!-- Petit icône communauté -->
  <img src="./images/bambibluepotato.png"
       alt="Communauté Bambi Blue Potato Clocktower"
       style="width:100px; height:auto; margin-bottom:15px; opacity:0.9; display:block;">

  <p style="color:#e0c99d; font-size:16px; margin-bottom:15px;">
    Rejoignez notre petite communauté sur <span style="color:#d4a76a; font-weight:bold;">Discord</span> pour jouer en ligne et participer à nos parties streamées :
  </p>

  <ul style="list-style:none; padding-left:0; font-size:16px; color:#e0c99d;">
    <li> <a href="https://discord.gg/tGDVmZfZpE" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Discord</a></li>
    <li> <a href="https://www.youtube.com/@Bambipotato" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">YouTube</a></li>
    <li> <a href="https://www.twitch.tv/bambibluepotato" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Twitch</a></li>
    <li> <a href="https://www.instagram.com/bambibluepotato/" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Instagram</a></li>
  </ul>

  <!-- Ligne de contact -->
  <p style="
    margin-top:20px;
    font-size:16px;
    color:#e0c99d;
    line-height:1.6;
  ">
    Pour toute question, suggestion ou amélioration du wiki,<br>
    vous pouvez me contacter :  
    <a href="mailto:bambibluepotato@gmail.com"
       style="color:#ffb84d; font-weight:bold; text-decoration:none;">
       BambiBluePotato
    </a>
  </p>

</div>


<div style="text-align:left; margin-top:40px; line-height:1.8; border:1px solid rgba(212,167,106,0.3); border-radius:10px; padding:25px; box-shadow:0 0 12px rgba(0,0,0,0.4); background-color:rgba(0,0,0,0.45);">

  <h2 style="color:#d4a76a; font-size:18px; font-weight:bold; text-shadow:1px 1px 4px #000;">
    Jouer en personne ou en ligne&nbsp;?
  </h2>

  <p style="font-size:16px; color:#e0c99d;">
    Que vous découvriez <em>Blood on the Clocktower</em> autour d’une table ou à distance,  
    ce wiki est là pour vous aider à créer des parties passionnantes, accessibles et équilibrées.
  </p>

  <p style="font-size:16px; color:#e0c99d;">
    Chaque communauté, qu’elle soit locale ou en ligne, est encouragée à jouer dans un
    <span style="color:#d4a76a; font-weight:bold;">cadre bienveillant, respectueux et sain</span>,  
    où l’amusement, la confiance et l’inclusivité passent toujours avant la compétition.
  </p>

  <p style="font-size:16px; color:#e0c99d;">
    Si vous souhaitez jouer en personne, dans un <span style="color:#d4a76a; font-weight:bold;">cadre bienveillant</span>,  
    plusieurs groupes francophones organisent régulièrement des parties :
  </p>

  <ul style="color:#e0c99d; font-size:16px; line-height:1.7; margin-left:30px;">
    <li>
      <a href="https://www.meetup.com/blood-on-the-clocktower-paris/"
         target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
        Blood on the Clocktower Paris Meetup
      </a>
    </li>
    <li>
      <a href="https://www.meetup.com/blood-on-the-clocktower-nantes/"
         target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
        Blood on the Clocktower Nantes Meetup
      </a>
    </li>
  </ul>

  <!-- Séparation visuelle nette -->
  <hr style="margin:22px 0; width:50%; border:1px solid rgba(212,167,106,0.25);">

  <p style="font-size:16px; color:#e0c99d; text-align:left; max-width:980px; margin:20px 0 10px 0; line-height:1.7;">
    Ce site est créé par et pour les fans de
    <span style="color:#d4a76a; font-weight:bold;">Blood on the Clocktower</span>
    et n’a aucun but lucratif.<br>
    Tout le contenu lié à
    <span style="color:#d4a76a; font-weight:bold;">Blood on the Clocktower</span>
    appartient à
    <span style="color:#d4a76a; font-weight:bold;">The Pandemonium Institute</span>.
  </p>

  <p style="font-size:16px; color:#e0c99d; text-align:left; max-width:980px; margin:10px 0 0 0; line-height:1.7;">
    <span style="color:#e0c99d; font-style:italic;">Soutenez :</span><br>
    <a href="https://bloodontheclocktower.com/"
       target="_blank" rel="noopener noreferrer"
       style="color:#d4a76a; font-weight:bold; text-decoration:none;">
      The Pandemonium Institute
    </a>
    <span style="color:#d4a76a;">&nbsp;•&nbsp;</span>
    <a href="https://open-sesame.games/"
       target="_blank" rel="noopener noreferrer"
       style="color:#d4a76a; font-weight:bold; text-decoration:none;">
      Open Sesame Games
    </a>
  </p>

  <p align="left" style="margin-top:30px;">
    <a href="/botc-fr-bambi/">
      <img src="images/logogold.png" alt="Accueil BotC FR" width="200">
    </a>
  </p>

</div>
