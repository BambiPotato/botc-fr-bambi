<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="images/logo.png" alt="Accueil BotC FR" width="300">
  </a>
</p>
   
 <!-- 🏠 PAGE D’ACCUEIL - WIKI BOTC FR -->

<div style="text-align:center; margin-top:40px;">

  <h1 style="color:#b58b52; font-size:46px; font-weight:bold; text-shadow:2px 2px 6px #000;">
    📜 PAGE PRINCIPALE
  </h1>

  <h2 style="color:#b58b52; font-size:36px; font-weight:bold; text-shadow:2px 2px 6px #000; margin-top:20px;">
    🚪 Bienvenue sur le Wiki Francophone 🇫🇷 de <br>
    <span style="color:#d4a76a;">Blood 🩸 on the Clocktower 🕰️</span>
  </h2>

  <p style="font-size:20px; color:#e0c99d; font-style:italic; margin-top:15px;">
    « Explorez les rôles, les stratégies et les secrets de chaque édition. »
  </p>

</div>


<div style="text-align:center; margin-top:25px;">

  <p style="font-size:22px; color:#e0c99d; font-style:italic; line-height:1.8;">
    Ce projet a pour but de proposer des
    <span style="font-weight:bold; color:#d4a76a;">traductions fidèles</span>,
    des <span style="font-weight:bold; color:#d4a76a;">conseils</span> et des
    <span style="font-weight:bold; color:#d4a76a;">ressources</span>
    pour aider les communautés francophones à jouer dans un cadre
    <span style="font-weight:bold; color:#d4a76a;">inclusif 🤝 et bienveillant. 🫶🏻</span>
  </p>

</div>

![Bannière BotC FR](images/banner.png)
<button id="theme-toggle">☀️ Mode clair</button>

<p align="center">
  <a href="https://bambipotato.github.io/botc-fr-bambi/">
    <img src="images/logo.png" alt="Logo BotC FR" width="300">
  </a>
</p>

---
<!-- 📖 Informations sur le Jeu-->
<h1 style="color:#b58b52; font-size:46px; font-weight:bold; text-shadow:2px 2px 6px #000;">
    📜 Informations sur le Jeu
  </h1>

- 📘 <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**Glossaire des termes 🇫🇷**](glossaire.md)</span>  

- 📘 <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**Glossary termes en anglais**](glossaireengfr.md)</span>  

- 📘 <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**Conseils pour les Conteurs et les Conteuses**](conteur.md)</span> 

- 📘 <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**Conseils & Stratégies pour les joueurs et les joueuses**](strategie.md)</span> 

---
<!-- 📖 Livre des Règles-->
<h1 style="color:#b58b52; font-size:46px; font-weight:bold; text-shadow:2px 2px 6px #000;">
    📜 Livre des Règles
  </h1>

- 🏗️ <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**Installation**](installation.md)</span>

- 📜 <span style="color:#b58b52; font-weight:bold; font-size:20px;">*Vous débutez sur Blood 🩸 on the Clocktower ?* [**Venez Découvrir le Jeu Blood on the Clocktower**](blood_on_the_clocktower.md)</span>

- 📜 <span style="color:#b58b52; font-weight:italic; font-size:20px;">Consultez les [**Explications des Règles**](regles.md) pour découvrir l’univers, la mise en place et le déroulement du jeu.</span>

- ⚖️ <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**Répartition du Village**](repartition.md) </span>  

- 📋 <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**Capacités**](capacite.md)</span> 

- 🌀 <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**États**](etats.md)</span> 

- 🐥 <span style="color:#b58b52; font-weight:bold; font-size:20px;">[**Teensyville**](teensyville.md)</span> 

- 🔧 <span style="color:#b58b52; font-weight:bold; font-size:20px;">Créez des scripts uniques [**Outil de Script**](outildescript.md)</span>

---

## <span style="color:#b58b52; font-weight:bold; font-size:22px;">👺 Rôles par Édition</span>

<!-- ====== GRID D'ACCUEIL (cartes cliquables, 3 par ligne) ====== -->
<style>
  /* Conteneur global */
  .home-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(220px, 1fr));
    gap: 28px;
    justify-items: center;
    align-items: start;
    margin: 26px auto 10px auto;
    max-width: 1100px;
  }
  /* Responsive : 2 colonnes puis 1 colonne */
  @media (max-width: 980px) {
    .home-grid { grid-template-columns: repeat(2, minmax(220px, 1fr)); }
  }
  @media (max-width: 640px) {
    .home-grid { grid-template-columns: 1fr; }
  }

  /* Carte cliquable */
  .home-card {
    display: inline-block;
    text-decoration: none;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(181,139,82,0.28);            /* doré discret */
    background: rgba(255,255,255,0.02);                 /* voile léger sur fond sombre */
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

  /* Image */
  .home-card img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;            /* ratio stable */
    object-fit: contain;            /* garde les logos nets */
    background: rgba(0,0,0,0.25);   /* petit fond pour contraste */
  }

  /* Titre sous l'image */
  .home-card .home-title {
    display: block;
    padding: 10px 10px 12px 10px;
    color: #b58b52;                 /* doré doux */
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
    letter-spacing: .2px;
  }

  /* Badge "à venir" (style discret) */
  .badge-pending {
    display: inline-block;
    margin: 2px 0 10px 0;
    padding: 2px 8px;
    font-size: 12px;
    color: #d4a76a;
    border: 1px solid rgba(212,167,106,0.45);
    border-radius: 999px;
    opacity: .85;
  }
</style>

<div class="home-grid">

  <!-- 🍺 Trouble Brewing -->
  <a class="home-card" href="./trouble_brewing.html">
    <img src="./images/Logo_trouble_brewing.png" alt="Trouble Brewing">
    <span class="home-title">🍺 Trouble Brewing</span>
  </a>

  <!-- 🌛 Bad Moon Rising -->
  <a class="home-card" href="./bmr.html">
    <img src="./images/Logo_bad_moon_rising-1.png" alt="Bad Moon Rising">
    <span class="home-title">🌛 Bad Moon Rising</span>
  </a>

  <!-- 🌸 Sects & Violets -->
  <a class="home-card" href="./sv.html">
    <img src="./images/Logo_sects_and_violets.png" alt="Sects &amp; Violets">
    <span class="home-title">🌸 Sects &amp; Violets</span>
  </a>

  <!-- 🚶 Voyageurs et Voyageuses -->
  <a class="home-card" href="./voyageurs/voyageurs.html">
    <img src="./images/Generic_traveller.png" alt="Voyageurs et Voyageuses">
    <span class="home-title">🚶 Voyageurs et Voyageuses</span>
  </a>

  <!-- 🏰 Légendaires (à venir) -->
  <a class="home-card" href="#" onclick="return false;">
    <img src="./images/Generic_fabled.png" alt="Légendaires" style="opacity:.55; filter: grayscale(20%);">
    <span class="home-title">🏰 Légendaires</span>
    <span class="badge-pending">à venir</span>
  </a>

  <!-- 🎠 The Carousel Expérimental -->
  <a class="home-card" href="./experimentaux.html">
    <img src="./images/carousel.png" alt="The Carousel Expérimental" style="opacity:.9;">
    <span class="home-title">🎠 The Carousel Expérimental</span>
  </a>

</div>
<!-- ====== /GRID D'ACCUEIL ====== -->


---

##  <span style="color:#b58b52; font-weight:bold; font-size:20px;">🎭Catégories</span>  

- [<span style="color:blue">**Villageois**</span>](villageois.md) 
- [<span style="color:blue">**Étrangers**</span>](etrangers.md) 
- [<span style="color:red">**Sbires**</span>](sbires.md) 
- [<span style="color:red">**Démons**</span>](demons.md) 
- [<span style="color:purple">**Voyageurs**</span>](voyageurs/voyageurs.md)
- [<span style="color:#b58b52">**Légendaires**</span>](#) *(à venir)* 


---

## <span style="color:#b58b52; font-weight:bold; font-size:22px;">🪄 Scripts Personnalisés</span>

<div align="center" style="margin-top:20px;">

  <a href="#" style="text-decoration:none;">
    <img src="./images/Icon_mezepheles.png" alt="Scripts personnalisés" width="260" style="border-radius:12px; box-shadow:0 0 10px rgba(0,0,0,0.3); opacity:0.9;">
    <br>
    <span style="color:#b58b52; font-weight:bold; font-size:20px;">📜 Scripts personnalisés</span>
  </a>
  <br>
  <em style="color:#b58b52;">(à venir)</em>

</div>


---
<div style="text-align:left; margin:40px 0; line-height:1.8;">

  <h2 style="color:#b58b52; font-weight:bold; font-size:26px; margin-bottom:10px;">
    🛠️ Ressources
  </h2>

  <ul style="list-style:none; padding-left:0; font-size:19px; color:#e0c99d;">
    <li>🎮 <a href="https://botc.app/" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Pour jouer en ligne à Blood 🩸 on the Clocktower 🕰️</a></li>
    <li>📜 <a href="https://wiki.bloodontheclocktower.com/Main_Page" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Wiki officiel BotC🩸TPI</a></li>
         <li>📚 <a href="https://www.botcscripts.com" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">BotC Scripts</a></li>
    <li>🧮 <a href="https://script.bloodontheclocktower.com/" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Outil 🔧 officiel de création de scripts</a></li>
    <li>🧪 <a href="https://savant.thegrim.gg/" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Générateur d’informations pour le Savant 🦽</a></li>
  
  </ul>

  <hr style="width:40%; border:1px solid #b58b52; opacity:0.6; margin:25px 0;">

  <h2 style="color:#b58b52; font-weight:bold; font-size:26px; margin-bottom:10px;">
    🔗 Réseaux Sociaux
  </h2>

  <p style="color:#e0c99d; font-size:19px; margin-bottom:15px;">
    Rejoignez notre <span style="color:#d4a76a; font-weight:bold;">Discord</span> pour jouer en ligne, partager de bons moments et participer à nos parties streamées :
  </p>

  <ul style="list-style:none; padding-left:0; font-size:19px; color:#e0c99d;">
    <li>💬 <a href="https://discord.gg/tGDVmZfZpE" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Discord</a></li>
    <li>🎥 <a href="https://www.youtube.com/@Bambipotato" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">YouTube</a></li>
    <li>🎮 <a href="https://www.twitch.tv/bambibluepotato" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Twitch</a></li>
    <li>📸 <a href="https://www.instagram.com/bambibluepotato/" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Instagram</a></li>
    <li>🌐 <a href="https://bsky.app/profile/bambibluepotato.bsky.social" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">Bluesky</a></li>
  </ul>

</div>

---
<div style="text-align:left; margin-top:40px; line-height:1.8;">

  <h2 style="color:#d4a76a; font-size:34px; font-weight:bold; text-shadow:1px 1px 4px #000;">
    🩸🕰️ Jouer en personne ?
  </h2>

  <p style="font-size:20px; color:#e0c99d;">
    Vous voulez découvrir <em>Blood 🩸on the Clocktower🕰️</em> autour d’une vraie table ?<br>
    Rejoignez le groupe <span style="font-weight:bold; color:#d4a76a;">Meetup Blood on the Clocktower Paris</span>,
    mené par <span style="font-weight:bold; color:#d4a76a;">Pierre</span> 💫
  </p>

  <p style="margin-top:10px; font-size:20px;">
    👉 <a href="https://www.meetup.com/blood-on-the-clocktower-paris/" target="_blank" style="color:#ffb84d; font-weight:bold; text-decoration:none;">
      Blood on the Clocktower Paris – Meetup
    </a>
  </p>

  <hr style="width:50%; margin:30px 0; border:1px solid #b58b52; opacity:0.6;">

  <h3 style="color:#b58b52; font-size:28px; font-weight:bold;">Qui sommes-nous ?</h3>

  <p style="font-size:20px; color:#e0c99d;">
    Notre but est de partager <span style="color:#d4a76a; font-weight:bold;">Blood on the Clocktower</span> en français
    et de le rendre accessible à toutes et à tous :<br>
    que vous soyez <em>débutant·e</em>, <em>joueur·se confirmé·e</em> ou membre d’une nouvelle communauté,
    <span style="color:#d4a76a; font-weight:bold;">vous êtes les bienvenu·e·s</span>.
  </p>

  <p style="font-size:19px; color:#e0c99d; margin-top:20px;">
    ✨ Ce projet vit grâce à l’implication de nombreuses joueuses et joueurs passionnés.<br>
    N’hésitez pas à proposer vos <span style="color:#d4a76a; font-weight:bold;">idées</span> ou vos <span style="color:#d4a76a; font-weight:bold;">corrections</span>.
  </p>

</div>

