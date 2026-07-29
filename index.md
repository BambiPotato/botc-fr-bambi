---
layout: default
title: Accueil
share_title: "Wiki francophone communautaire de Blood on the Clocktower"
description: "Traductions, conseils et ressources pour jouer et conter à Blood on the Clocktower en français."
image: "/images/botcshare.png"
home_sidebar: true
---

<style>
.home-topbar{
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
gap:20px;
margin-bottom:20px;
}

.home-logo{
display:block;
flex:0 0 auto;
position:relative;
line-height:0;
transition:transform 0.18s ease, filter 0.18s ease;
}

.home-logo:hover{
transform:translateY(-2px) scale(1.035);
filter:drop-shadow(0 5px 8px rgba(0,0,0,0.18));
}

.home-logo img{
display:block;
width:200px;
height:auto;
}

.home-socials{
display:flex!important;
flex-direction:row!important;
flex-wrap:nowrap!important;
align-items:center;
justify-content:flex-end;
gap:10px;
margin-left:auto;
margin-right:0;
}

.home-socials a{
display:inline-flex!important;
align-items:center;
justify-content:center;
width:42px!important;
height:42px!important;
flex:0 0 42px!important;
border-radius:50%;
background:rgba(212,167,106,0.18);
border:1px solid rgba(181,139,82,0.32);
text-decoration:none!important;
line-height:1!important;
box-shadow:0 2px 5px rgba(0,0,0,0.08);
position:relative;
transition:transform 0.18s ease, background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.home-socials a:hover{
transform:translateY(-2px) scale(1.06);
background:rgba(212,167,106,0.32);
border-color:rgba(181,139,82,0.48);
box-shadow:0 4px 8px rgba(0,0,0,0.14);
}

.home-socials img{
display:block!important;
width:25px!important;
height:25px!important;
max-width:25px!important;
object-fit:contain;
margin:0!important;
}

.home-logo::after,
.home-socials a::after{
content:attr(data-tooltip);
position:absolute;
left:50%;
bottom:calc(100% + 10px);
transform:translateX(-50%) translateY(4px);
background:rgba(55,29,20,0.96);
color:#f3ddb0;
font-size:13px;
font-weight:600;
line-height:1.25;
white-space:nowrap;
padding:7px 10px;
border:1px solid rgba(212,167,106,0.45);
border-radius:8px;
box-shadow:0 5px 12px rgba(0,0,0,0.25);
opacity:0;
visibility:hidden;
pointer-events:none;
z-index:50;
transition:opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
}

.home-logo:hover::after,
.home-socials a:hover::after{
opacity:1;
visibility:visible;
transform:translateX(-50%) translateY(0);
}

@media (max-width:600px){
.home-topbar{
gap:8px;
}

.home-logo img{
width:130px;
}

.home-socials{
gap:5px;
}

.home-socials a{
width:32px!important;
height:32px!important;
flex:0 0 32px!important;
}

.home-socials img{
width:19px!important;
height:19px!important;
max-width:19px!important;
}

.home-logo::after,
.home-socials a::after{
display:none;
}
}
</style>

<div class="home-topbar">

<a class="home-logo"
href="/botc-fr-bambi/"
data-tooltip="Wiki pour jouer et conter en français">
<img src="images/logogold.png" alt="Accueil BotC FR">
</a>

<div class="home-socials">

<a href="https://discord.gg/tGDVmZfZpE"
target="_blank"
rel="noopener noreferrer"
aria-label="Rejoins-nous sur Discord"
data-tooltip="Rejoins-nous sur Discord">
<img src="images/discord.png" alt="Discord">
</a>

<a href="https://www.twitch.tv/bambibluepotato"
target="_blank"
rel="noopener noreferrer"
aria-label="Regarde les lives sur Twitch"
data-tooltip="Regarde les lives sur Twitch">
<img src="images/twitch.png" alt="Twitch">
</a>

<a href="https://www.youtube.com/@Bambipotato"
target="_blank"
rel="noopener noreferrer"
aria-label="Découvre les vidéos sur YouTube"
data-tooltip="Découvre les vidéos sur YouTube">
<img src="images/youtube.png" alt="YouTube">
</a>

<a href="https://www.instagram.com/bambibluepotato/"
target="_blank"
rel="noopener noreferrer"
aria-label="Suis-nous sur Instagram"
data-tooltip="Suis-nous sur Instagram">
<img src="images/instagram.png" alt="Instagram">
</a>

</div>
</div>

<style>
  .ccc-logo {
    display:inline-block;
    margin-top:12px;
    line-height:0;
    opacity:0.95;
    cursor:pointer;
    transition:
      transform 0.18s ease,
      filter 0.18s ease,
      opacity 0.18s ease;
  }

  .ccc-logo:hover {
    transform:translateY(-2px) scale(1.035);
    filter:drop-shadow(0 5px 8px rgba(0,0,0,0.22));
    opacity:1;
  }

  .official-botc-link {
    color:#d4a76a;
    font-weight:bold;
    text-decoration:none;
    transition:
      color 0.18s ease,
      text-shadow 0.18s ease;
  }

  .official-botc-link:hover {
    color:#f0c987;
    text-shadow:0 0 6px rgba(212,167,106,0.35);
  }
</style>

<!-- PAGE D’ACCUEIL - WIKI BOTC FR -->

<div style="text-align:center; margin:40px auto 0 auto; max-width:980px; padding:22px 24px; border:1px solid rgba(212,167,106,0.3); border-radius:14px; box-shadow:0 8px 18px rgba(0,0,0,0.28); background-color:rgba(0,0,0,0.45);">

  <h1 style="color:#b58b52; font-size:24px; font-weight:600; text-shadow:2px 2px 6px #000; margin:10px 0 20px 0;">
    Bienvenue sur le Wiki francophone de <br>
    <span style="color:#d4a76a;">Blood on the Clocktower</span>
  </h1>

  <p style="font-size:20px; color:#e0c99d; font-style:italic; line-height:1.7; margin:0;">
    « Un wiki communautaire pour jouer et conter en français. »
  </p>

  <div style="
    width:60%;
    height:1px;
    margin:28px auto;
    background:linear-gradient(
      to right,
      transparent,
      rgba(181,139,82,0.55),
      transparent
    );
  "></div>

 <p style="font-size:20px; color:#e0c99d; font-style:italic; line-height:1.7; margin:0;">
  Tout le contenu de
  <a href="https://bloodontheclocktower.com/"
     target="_blank"
     rel="noopener noreferrer"
     class="official-botc-link"
     title="Site officiel de Blood on the Clocktower">
    Blood on the Clocktower
  </a>
  appartient à
  <span style="color:#d4a76a; font-weight:bold;">The Pandemonium Institute</span>.
</p>

<a href="https://bloodontheclocktower.com/pages/community-created-content-policy"
   target="_blank"
   rel="noopener noreferrer"
   class="ccc-logo"
   title="Politique Community Created Content">
  <img src="images/ccc-parchment.png"
       alt="Community Created Content"
       width="220"
       style="display:block; max-width:100%; height:auto;">
</a>

</div>



<!-- ====== INFORMATIONS SUR LE JEU ====== -->

<h1 style="
  color:#b58b52;
  font-size:20px;
  font-weight:bold;
  text-shadow:2px 2px 6px #000;
  padding-left:16px;
  margin-bottom:10px;
">
  Informations sur le jeu
</h1>

<table class="rules-table">
  <tr>
    <td class="rules-cell">
      <a class="rules-link" href="./glossaire.html" aria-label="Glossaire des termes français">
        <div class="rules-title">Glossaire des termes</div>
        <div class="rules-sub">Liste des termes en français</div>
      </a>
    </td>

    <td class="rules-cell">
      <a class="rules-link" href="./glossaireengfr.html" aria-label="Glossaire des termes anglais">
        <div class="rules-title">Glossaire des termes anglais</div>
        <div class="rules-sub">Termes anglais & équivalents français</div>
      </a>
    </td>

    <td class="rules-cell">
      <a class="rules-link" href="./conteur.html" aria-label="Conseils pour les Conteurs et Conteuses">
        <div class="rules-title">Conseils pour les Conteurs et Conteuses</div>
        <div class="rules-sub">Astuces, bonnes pratiques</div>
      </a>
    </td>

    <td class="rules-cell">
      <a class="rules-link" href="./strategie.html" aria-label="Conseils et stratégies pour les joueurs et joueuses">
        <div class="rules-title">Conseils & stratégies pour les joueurs et joueuses</div>
        <div class="rules-sub">Pistes de réflexion en partie</div>
      </a>
    </td>
  </tr>
</table>

<!-- ====== LIVRE DES RÈGLES ====== -->

<h1 style="
  color:#b58b52;
  font-size:20px;
  font-weight:bold;
  text-shadow:2px 2px 6px #000;
  padding-left:16px;
  margin-bottom:14px;
">
  Livre des règles
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
    height:110px;
  }
  .rules-link { text-decoration:none; display:block; }
  .rules-title { color:#d4a76a; font-weight:bold; font-size:20px; line-height:1.25; margin:0; }
  .rules-sub { color:#c9b08a; font-size:14px; opacity:.9; margin-top:6px; }

  @media (max-width:720px) {
    .rules-table, .rules-table tbody, .rules-table tr, .rules-table td {
      display:block;
      width:100%;
    }
    .rules-cell {
      margin-bottom:12px;
      height:auto;
    }
  }
</style>

<table class="rules-table">
  <tr>
    <td class="rules-cell">
      <a class="rules-link" href="./blood_on_the_clocktower.html">
        <div class="rules-title">Découvrir le jeu</div>
        <div class="rules-sub">Premiers pas et esprit du jeu</div>
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
        <div class="rules-title">Mise en place</div>
        <div class="rules-sub">Mener une partie étape par étape</div>
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
        <div class="rules-sub">Format pour 5–6 joueurs</div>
      </a>
    </td>

    <td class="rules-cell">
      <a class="rules-link" href="./outildescript.html">
        <div class="rules-title">Outil de script</div>
        <div class="rules-sub">Créer des scripts personnalisés</div>
      </a>
    </td>
  </tr>
</table>

<!-- Rôles  -->
<h1 style="
  color:#b58b52;
  font-size:20px;
  font-weight:bold;
  text-shadow:2px 2px 6px #000;
  padding-left:16px;
  margin-bottom:14px;
">
  Rôles 
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

<table class="roles-grid" role="presentation" aria-label="Rôles">
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
        <span class="rg-title">Loric</span>
      </a>
    </td>

    <!--  Garden of Sin -->
    <td>
      <a  href="./trouble_brewing.html">
        <span class="rg-media">
          <img src="./images/logo_garden_of_sin.png" alt="Garden of Sin">
        </span>
        <span class="rg-title">Garden of Sin</span>
        <span class="rg-badge">Prochainement</span>
      </a>
    </td>

    <!--  The Tomb -->
    <td>
      <a  href="./trouble_brewing.html">
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
      <a href="./trouble_brewing.html">
        <span class="rg-media">
          <img src="./images/logo_midnight_in_the_house_of_the_damned.png" alt="Midnight in the House of the Damned">
        </span>
        <span class="rg-title">Midnight in the House of the Damned</span>
        <span class="rg-badge">Prochainement</span>
      </a>
    </td>

    <!-- The Greatest Show on Earth -->
    <td>
      <a  href="./trouble_brewing.html">
        <span class="rg-media">
          <img src="./images/logo_the_greatest_show_on_earth.png" alt="The Greatest Show on Earth">
        </span>
        <span class="rg-title">The Greatest Show on Earth</span>
        <span class="rg-badge">Prochainement</span>
      </a>
    </td>

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

    <!-- Marginaux -->
    <td style="width:50%; text-align:center; padding:12px; background:rgba(0,0,0,0.45); border:1px solid #b58b52; border-radius:12px;">
      <a href="./etrangers.html" style="text-decoration:none; display:inline-block;">
        <img src="./images/Generic_outsider.png" alt="Étrangers" width="240" style="border-radius:12px;">
        <div style="margin-top:8px; color:#4ea3ff; font-weight:bold; font-size:20px;">Marginaux</div>
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
  <a href="./legendaire.html" style="text-decoration:none; display:inline-block;">
    <img src="./images/Generic_fabled.png"
         alt="Légendaires"
         width="240"
         style="
           border-radius:12px;
           filter: brightness(1.15) contrast(1.10);
         ">
    <div style="margin-top:8px; color:#d4a76a; font-weight:bold; font-size:20px;">Légendaires</div>
  </a>
</td>
  </tr>

  <tr>
<!-- Lorics -->
  <td style="width:50%; text-align:center; padding:12px; background:rgba(0,0,0,0.45); border:1px solid #b58b52; border-radius:12px;">
    <a href="./loric.html" style="text-decoration:none; display:inline-block;">
      <img src="./images//Generic_loric.png" alt="Lorics" width="240" style="border-radius:12px;">
      <div style="margin-top:8px; color:#7fd1ae; font-weight:bold; font-size:20px;">Loric</div>
    </a>
  </td>

  <!-- Cellule vide -->
  <td></td>
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
      <a href="https://wiki.bloodontheclocktower.com/Main_Page" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Wiki officiel The Pandemonium Institute
      </a>
    </li>

    <!-- LIENS DÉJÀ EXISTANTS -->
    <li>
      <a href="https://botc.app/" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Application officielle pour jouer en ligne 
      </a>
    </li>


   <li>
      <a href="https://script.bloodontheclocktower.com/" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Outil officiel de création de scripts
      </a>
    </li>

  
    <li>
      <a href="https://www.botcscripts.com" target="_blank"
         style="color:#ffb84d; font-weight:bold; text-decoration:none;">
         Librairie communautaire des scripts BotC
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
      <a href="https://discord.gg/eD4zvq6RvB" target="_blank"
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
    Wiki Francophone Communautaire
  </h2>

  <!-- Petit icône communauté -->
  <img src="./images/bambibluepotato.png"
       alt="Communauté Bambi Blue Potato Clocktower"
       style="width:100px; height:auto; margin-bottom:15px; opacity:0.9; display:block;">

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
    Pour toute question ou amélioration du wiki, vous pouvez me contacter : <a href="mailto:bambibluepotato@gmail.com"
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
    Ce wiki a été créé par <span style="color:#d4a76a; font-weight:bold;">Bambi</span> pour les fans de
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
     <span style="color:#d4a76a;">&nbsp;•&nbsp;</span>
    <a href="https://www.twitch.tv/bambibluepotato/"
       target="_blank" rel="noopener noreferrer"
       style="color:#d4a76a; font-weight:bold; text-decoration:none;">
      Bambi
    </a>
  </p>


<hr class="explication">


  <p align="left" style="margin-top:30px;">
    <a href="/botc-fr-bambi/">
      <img src="images/logogold.png" alt="Accueil BotC FR" width="200">
    </a>
  </p>

</div>
