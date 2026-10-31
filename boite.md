---
layout: default
title: "Qu'est-ce qu'il y a dans la boîte du jeu Blood on the Clocktower ?"
description: "Vous retrouverez ici en images le détail de ce qu'il y a dans la boîte de base et dans les différents modules."
image: /images/Grimoire_1_2.webp
---

<div markdown="0">

<style>
.page-materiel-container { font-family: Arial, sans-serif; margin: 0; padding: 0; }

/* 1. INTRO AVEC DÉCORATION */
.intro-section { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #f4efe6; padding: 80px 20px 50px 20px; text-align: center; overflow: hidden; }
.decorations-left { position: absolute; left: 15%; bottom: 25%; width: 120px; z-index: 1; opacity: 0.9; }
.decorations-left img { width: 100%; height: auto; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3)); }
.decorations-right { position: absolute; right: 15%; bottom: 25%; width: 120px; z-index: 1; opacity: 0.9; }
.decorations-right img { width: 100%; height: auto; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3)); }
.intro-image { max-width: 500px; z-index: 2; margin-bottom: 40px; }
.intro-image img { width: 100%; height: auto; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.4)); }
.intro-text h1 { font-family: Georgia, serif; color: #5C2E1F !important; font-size: 32px; text-transform: uppercase; letter-spacing: 2px; border-top: 1px solid #5C2E1F; border-bottom: 1px solid #5C2E1F; padding: 20px 0; margin: 0; z-index: 2; position: relative; }

/* 2. SECTION SOMBRE VIOLETTE OFFICIELLE (POUR LE MATÉRIEL) */
.dark-box-section { 
background-image: url('images/bg-violet.jpg'); 
background-color: #1e0f2b;
background-size: cover; background-position: center; padding: 60px 20px; margin-bottom: 40px; border-radius: 8px;
}

.dark-box-content { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; gap: 40px; }
.box-exploded-image { flex: 1 1 50%; max-width: 600px; text-align: center; }
.box-list-container { flex: 1 1 40%; min-width: 300px; }
.box-list-container h3 { color: #f4efe6 !important; font-family: Georgia, serif; font-size: 28px; text-transform: uppercase; letter-spacing: 2px; margin-top: 0; margin-bottom: 30px; }

/* EFFET LOUPE GLOBAL */
.img-zoom-effect { width: 100%; height: auto; object-fit: contain; transition: transform 0.3s ease, filter 0.3s ease; cursor: zoom-in; }
.img-zoom-effect:hover { transform: scale(1.05); filter: drop-shadow(0 15px 25px rgba(0,0,0,0.7)); }

/* LISTE NUMÉROTÉE OFFICIELLE */
.numbered-list { list-style-type: none !important; padding-left: 0 !important; margin: 0; counter-reset: official-counter; }
.numbered-list li { position: relative; padding-left: 45px !important; margin-bottom: 20px !important; color: #f4efe6 !important; font-size: 15px; line-height: 1.5; list-style: none !important; }
.numbered-list li::before { counter-increment: official-counter; content: counter(official-counter); position: absolute; left: 0; top: -2px; width: 26px; height: 26px; border: 1.5px solid #f4efe6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #f4efe6; }

/* 3. SECTION ÉDITIONS (MODULES) */
.module-section { background-color: #f4efe6; padding: 60px 20px; }
.module-container { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto 40px auto; background: white; border: 2px solid #e0d5c1; position: relative; overflow: hidden; }

/* ANIMATION LOUPE DES LOGOS */
.module-logo { flex: 1 1 25%; padding: 30px; text-align: center; z-index: 2; }
.module-logo img { width: 100%; max-width: 250px; height: auto; filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2)); transition: transform 0.3s ease, filter 0.3s ease; }
.module-logo img:hover { transform: scale(1.08); filter: drop-shadow(0 12px 20px rgba(0,0,0,0.3)); }

.module-text { flex: 1 1 40%; padding: 30px; z-index: 2; }
.module-text h2 { color: #8B2500 !important; font-family: Georgia, serif; font-size: 28px; text-transform: uppercase; margin: 0 0 5px 0; }
.module-text .niveau { color: #b58b52 !important; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-top: 0; margin-bottom: 20px; }
.module-text p { color: #5C2E1F !important; font-size: 16px; line-height: 1.6; margin-bottom: 25px; }

/* LIENS DÉCOUVRIR */
.links-container { display: flex; gap: 20px; flex-wrap: wrap; }
.discover-more-link { display: inline-block; color: #8B2500 !important; font-family: Georgia, serif; font-size: 16px; font-weight: bold; text-transform: uppercase; text-decoration: none; letter-spacing: 1px; border-bottom: 2px solid #8B2500; padding-bottom: 2px; transition: opacity 0.2s ease; }
.discover-more-link:hover { opacity: 0.7; }

.module-artwork { flex: 1 1 35%; text-align: right; z-index: 1; }
.module-artwork img { width: 100%; max-width: 350px; height: auto; display: block; margin-left: auto; }

/* 4. FOOTER OFFICIEL */
.custom-footer {
  background-image: url('images/bg-violet.jpg');
  background-color: #1e0f2b;
  background-size: cover;
  background-position: center;
  padding: 60px 40px;
}
.custom-footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 50px;
}
.footer-logo { flex: 0 0 120px; }
.footer-logo img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.5));
  transition: transform 0.3s ease, filter 0.3s ease;
}
.footer-logo img:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 8px 20px rgba(0,0,0,0.7));
}
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.footer-nav a {
  color: #d8c9b8 !important;
  font-family: Georgia, serif;
  font-size: 16px;
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}
.footer-nav a:hover {
  color: #ffffff !important;
  text-decoration: underline;
  padding-left: 5px;
}

/* LIGHTBOX (ZOOM) */
.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85); display: none; z-index: 9999; }
.lightbox-overlay:target { display: flex; align-items: center; justify-content: center; }
.lightbox-close-zone { position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: zoom-out; }
.lightbox-close-btn { position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; text-decoration: none; z-index: 10000; }
.lightbox-content { position: relative; z-index: 10001; max-width: 90vw; max-height: 90vh; }
.lightbox-img { max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.lightbox-toggle { display: none; }

/* =========================================
   ADAPTATION MOBILE (SMARTPHONES & TABLETTES)
   ========================================= */
@media (max-width: 768px) {
  .decorations-left { left: 0; bottom: 50%; width: 75px; }
  .decorations-right { right: 0; bottom: 50%; width: 75px; }
  .intro-text h1 { font-size: 24px; line-height: 1.4; margin-top: 15px; }

  .module-container { flex-direction: column; text-align: center; }
  .module-logo, .module-text, .module-artwork { flex: 1 1 100%; width: 100%; padding: 20px 10px; }
  .module-logo img { max-width: 220px; margin: 0 auto; }
  .module-artwork img { margin: 0 auto; max-width: 250px; }
  .links-container { justify-content: center; }

  .dark-box-content { flex-direction: column; }
  .box-exploded-image, .box-list-container { flex: 1 1 100%; width: 100%; }
  .custom-footer-content { flex-direction: column; text-align: center; gap: 25px; }
  .footer-logo { flex: 1 1 100%; }
  .footer-logo img { max-width: 90px; margin: 0 auto; }
}
</style>

<div class="page-materiel-container">

<!-- 1. EN-TÊTE : LE GRIMOIRE ANIMÉ AVEC BOUGIES ET LOTUS -->
<div id="haut-de-page" class="intro-section">
<div class="decorations-left">
<img src="images/3_-_TT_Cutout_-_Candles_1.png.avif" alt="Bougies" class="img-zoom-effect">
</div>
<div class="decorations-right">
<img src="images/3_-_TAF_Cutout_-_Lotus_B_1.png.avif" alt="Fleur de Lotus" class="img-zoom-effect">
</div>
<div class="intro-image">
<a href="#zoom-grimoire" title="Agrandir l'image">
<img src="images/buy-book.png.webp" alt="Le Grimoire Blood on the Clocktower" class="img-zoom-effect">
</a>
</div>
<div class="intro-text">
<h1>Blood on the Clocktower le jeu</h1>
</div>
</div>

<!-- 2. SECTION SOMBRE : MATÉRIEL ÉCLATÉ GLOBAL -->
<div class="dark-box-section">
<div class="dark-box-content">
<div class="box-exploded-image">
<a href="#zoom-boite-base" title="Agrandir l'image">
<img src="images/Group_42531_1.webp" alt="Matériel détaillé" class="img-zoom-effect">
</a>
</div>
<div class="box-list-container">
<h3>QU'EST-CE QU'IL Y A DANS LA BOÎTE DE JEU ?</h3>
<ul class="numbered-list">
<li>1 livre de règles principal et 4 almanachs de rôles.</li>
<li>99 rôles uniques : 39 Villageois, 12 Marginaux, 12 Sbires, 9 Démons, 15 Voyageurs, et 12 Légendaires.</li>
<li>120 jetons de rappel pour le Conteur, pour toutes les situations possibles.</li>
<li>60 fiches de rôles - 20 pour chacun des trois premiers module du jeu.</li>
<li>Plateau de la Place du Village, 20 jetons de vie, et 18+ jetons de vote.</li>
<li>La boîte elle-même forme l'illustre Grimoire ; le guide du Conteur pour chaque partie.</li>
<li>Support pliant pour poser votre Grimoire.</li>
<li>4 boîtes de jetons pour ranger et organiser chaque module.</li>
<li>Tout le reste pour vous aider à organiser et suivre : 18+ linceuls, 25+ jetons de nuit, 4 tuiles d'information, 1 petit sac en tissu violet pour la sélection des rôles, 3 fiches de nuit, 1 fiche de mise en place, 1 fiche de Voyageurs, des pinces pour le Grimoire.</li>
</ul>
</div>
</div>
</div>

<!-- SECTION SOMBRE : TROUBLE BREWING -->
<div class="dark-box-section">
<div class="dark-box-content">
<div class="box-exploded-image">
<a href="#zoom-tb-box" title="Agrandir l'image">
<img src="images/Editon_Spread_TB_1_1.png.webp" alt="Matériel Trouble Brewing" class="img-zoom-effect">
</a>
</div>
<div class="box-list-container">
<h3>QU'EST-CE QU'IL Y A DANS LE MODULE TROUBLE BREWING ?</h3>
<ul class="numbered-list">
<li>1 almanach de rôles Trouble Brewing</li>
<li>1 boîte du module Trouble Brewing</li>
<li>1 fiche de nuit Trouble Brewing</li>
<li>20 fiches de rôles Trouble Brewing</li>
<li>25 jetons de rôles Trouble Brewing</li>
<li>16 jetons de rappel Trouble Brewing</li>
</ul>
</div>
</div>
</div>

<!-- SECTION SOMBRE : BAD MOON RISING -->
<div class="dark-box-section">
<div class="dark-box-content">
<div class="box-exploded-image">
<a href="#zoom-bmr-box" title="Agrandir l'image">
<img src="images/Editon_Spread_TB_1_11f5b346-e2e3-48db-b5e8-47327a73cced.png.webp" alt="Matériel Bad Moon Rising" class="img-zoom-effect">
</a>
</div>
<div class="box-list-container">
<h3>QU'EST-CE QU'IL Y A DANS LE MODULE BAD MOON RISING ?</h3>
<ul class="numbered-list">
<li>1 almanach de rôles Bad Moon Rising</li>
<li>1 boîte du module Bad Moon Rising</li>
<li>1 fiche de nuit Bad Moon Rising</li>
<li>20 fiches de rôles Bad Moon Rising</li>
<li>25 jetons de rôles Bad Moon Rising</li>
<li>42 jetons de rappel Bad Moon Rising</li>
</ul>
</div>
</div>
</div>

<!-- SECTION SOMBRE : SECTS & VIOLETS -->
<div class="dark-box-section">
<div class="dark-box-content">
<div class="box-exploded-image">
<a href="#zoom-sv-box" title="Agrandir l'image">
<img src="images/Edition_Spread_S_V.png.webp" alt="Matériel Sects & Violets" class="img-zoom-effect">
</a>
</div>
<div class="box-list-container">
<h3>QU'EST-CE QU'IL Y A DANS LE MODULE SECTS & VIOLETS ?</h3>
<ul class="numbered-list">
<li>1 almanach de rôles Sects & Violets</li>
<li>1 boîte du module Sects & Violets</li>
<li>1 fiche de nuit Sects & Violets</li>
<li>20 fiches de rôles Sects & Violets</li>
<li>26 jetons de rôles Sects & Violets</li>
<li>37 jetons de rappel Sects & Violets</li>
</ul>
</div>
</div>
</div>

<!-- SECTION SOMBRE : VOYAGEURS ET LÉGENDAIRES -->
<div class="dark-box-section">
<div class="dark-box-content">
<div class="box-exploded-image">
<a href="#zoom-voyageurs-box" title="Agrandir l'image">
<img src="images/blood-on-the-clocktower-board-game-travellers-and-fabled-tokens.png.webp" alt="Matériel Voyageurs et Légendaires" class="img-zoom-effect">
</a>
</div>
<div class="box-list-container">
<h3>VOYAGEURS ET LÉGENDAIRES CE QUI EST INCLUS</h3>
<ul class="numbered-list">
<li>1 almanach de rôles Voyageurs et Légendaires</li>
<li>1 boîte de jetons Voyageurs et Légendaires</li>
<li>15 jetons de rôles de Voyageurs</li>
<li>14 jetons de rappel de Voyageurs</li>
<li>12 jetons de rôles Légendaires</li>
<li>11 jetons de rappel Légendaires</li>
</ul>
</div>
</div>
</div>

<!-- SECTION SOMBRE : LE GRIMOIRE -->
<div class="dark-box-section">
<div class="dark-box-content">
<div class="box-exploded-image">
<a href="#zoom-grimoire-tuto" title="Agrandir l'image">
<img src="images/grimoireopen_jpg.jpg" alt="Comment installer et utiliser le Grimoire" class="img-zoom-effect" style="border-radius: 8px;">
</a>
</div>
<div class="box-list-container">
<h3>COMMENT INSTALLER ET UTILISER LE GRIMOIRE ?</h3>
<ul class="numbered-list">
<li>Dépliez le lutrin et insérez le socle dans les encoches pour former le support.</li>
<li>Assemblez les deux moitiés de la boîte et fixez-les solidement à l'aide des deux pinces incluses pour former votre Grimoire.</li>
<li><strong>Côté droit :</strong> placez votre fiche de Conteur (l'ordre de la nuit) et vos jetons d'information pour vous assister.</li>
<li><strong>Côté gauche :</strong> disposez les jetons de rôles et de rappel dans le sens des aiguilles d'une montre, en respectant la position des joueurs.</li>
<li>Placez un linceul sur le jeton de rôle d'un joueur dès que celui-ci meurt.</li>
<li><strong>En bas :</strong> installez la boîte de jetons correspondant au module joué (exemple : <em>Trouble Brewing</em>) pour garder les jetons de rôles et les linceuls à portée de main.</li>
<li>Une fois la partie terminée, rangez les jetons dans leur boîte, ou glissez les rôles dans le sac en tissu violet pour une nouvelle pioche !</li>
</ul>
</div>
</div>
</div>

<!-- SECTION SOMBRE : LE PLATEAU DE LA PLACE DU VILLAGE -->
<div class="dark-box-section">
<div class="dark-box-content">
<div class="box-exploded-image">
<a href="#zoom-plateau-box" title="Agrandir l'image">
<img src="images/Town%20Square.jpg" alt="Le Plateau de la Place du Village" class="img-zoom-effect" style="border-radius: 8px;">
</a>
</div>
<div class="box-list-container">
<h3>LE PLATEAU DE LA PLACE DU VILLAGE</h3>
<ul class="numbered-list">
<li>Placez le plateau de la Place du Village au centre, par terre, ou sur une petite table</li>
<li>Glissez en dessous, en faisant dépasser, la fiche de mise en place qui indique la répartition du Village selon le nombre de joueurs</li>
<li>Placez les jetons de vie selon le nombre de joueurs</li>
<li>Retournez le jeton de vie du joueur lorsqu'il meurt</li>
<li>Placez les jetons de vote lorsqu'un joueur meurt sur le jeton de vie</li>
</ul>
</div>
</div>
</div>

<!-- 3. SECTION ÉDITIONS : MODULES -->
<div class="module-section">

  <!-- MODULE 1 : TROUBLE BREWING -->
  <div class="module-container">
    <div class="module-logo">
      <img src="images/logo-PO4QGYTI.webp" alt="Logo Trouble Brewing">
    </div>
    <div class="module-text">
      <h2>TROUBLE BREWING</h2>
      <p class="niveau">DÉBUTANT</p>
      <p>Trouble Brewing contient un peu de tout. Certains rôles reçoivent passivement des informations, d'autres doivent agir pour savoir qui est qui, tandis que d'autres veulent simplement inciter le Démon à les attaquer.</p>
      <div class="links-container">
        <a href="trouble_brewing.html" class="discover-more-link">DÉCOUVREZ PLUS</a>
      </div>
    </div>
    <div class="module-artwork">
      <img src="images/explore-artwork-I3UOZ3DW.webp" alt="Illustration Trouble Brewing">
    </div>
  </div>

  <!-- MODULE 2 : BAD MOON RISING -->
  <div class="module-container">
    <div class="module-logo">
      <img src="images/logo-DUKMGWFZ.webp" alt="Logo Bad Moon Rising">
    </div>
    <div class="module-text">
      <h2>BAD MOON RISING</h2>
      <p class="niveau">INTERMÉDIAIRE</p>
      <p>Bad Moon Rising est un festival de morts. Les Démons tuent plusieurs fois par nuit et les Sbires participent aussi à l'action. Les joueurs du Bien peuvent prendre de grands risques pour obtenir des informations cruciales, mais peuvent accidentellement tuer leurs amis au passage.</p>
      <div class="links-container">
        <a href="bmr.html" class="discover-more-link">DÉCOUVREZ PLUS</a>
      </div>
    </div>
    <div class="module-artwork">
      <img src="images/explore-artwork-Z6GETMQQ.webp" alt="Illustration Bad Moon Rising">
    </div>
  </div>

  <!-- MODULE 3 : SECTS & VIOLETS -->
  <div class="module-container">
    <div class="module-logo">
      <img src="images/logo-QJNZUCAR.webp" alt="Logo Sects & Violets">
    </div>
    <div class="module-text">
      <h2>SECTS & VIOLETS</h2>
      <p class="niveau">INTERMÉDIAIRE</p>
      <p>Sects & Violets est le plus fou des 3 modules inclus dans la boîte de base. Les rôles du Bien obtiennent des informations incroyables chaque nuit. Cependant, l'équipe du Mal est extrêmement variée et menaçante et peut semer une confusion massive dans la partie.</p>
      <div class="links-container">
        <a href="sv.html" class="discover-more-link">DÉCOUVREZ PLUS</a>
      </div>
    </div>
    <div class="module-artwork">
      <img src="images/explore-artwork-Z6H24WEY.webp" alt="Illustration Sects & Violets">
    </div>
  </div>

  <!-- MODULE 4 : VOYAGEURS ET LÉGENDAIRES -->
  <div class="module-container">
    <div class="module-logo">
      <img src="images/logo-3V3QAAVM.webp" alt="Logo Voyageurs et Légendaires">
    </div>
    <div class="module-text">
      <h2>VOYAGEURS ET LÉGENDAIRES</h2>
      <p class="niveau">INTERMÉDIAIRE</p>
      <p>Voyageurs & Légendaires est une collection de rôles sauvages, étranges et puissants qui sont ajoutés selon les besoins aux parties de TROUBLE BREWING, BAD MOON RISING, SECTS & VIOLETS, ou d'autres éditions.</p>
      <div class="links-container">
        <a href="voyageurs/voyageurs.html" class="discover-more-link">DÉCOUVREZ LES VOYAGEURS</a>
        <a href="legendaire.html" class="discover-more-link">DÉCOUVREZ LES LÉGENDAIRES</a>
      </div>
    </div>
    <div class="module-artwork">
      <img src="images/explore-artwork-YW7L7OJB.webp" alt="Illustration Voyageurs et Légendaires">
    </div>
  </div>

</div>

<!-- 4. FOOTER OFFICIEL -->
<div class="custom-footer">
  <div class="custom-footer-content">
    <div class="footer-logo">
      <a href="#haut-de-page" title="Revenir en haut">
        <img src="images/logo_3.png.avif" alt="Logo Démon">
      </a>
    </div>
    <div class="footer-nav">
      <a href="/botc-fr-bambi/">Retour à la page d'accueil</a>
      <a href="#haut-de-page">Revenir en haut de la page</a>
      <a href="bases.html">Découvrir les bases du jeu</a>
    </div>
  </div>
</div>

</div>

<!-- MODULES DE ZOOM (LIGHTBOX) -->
<div id="zoom-grimoire" class="lightbox-overlay">
<a href="#close" class="lightbox-close-zone" title="Fermer la vue"></a>
<a href="#close" class="lightbox-close-btn" title="Fermer">✖</a>
<div class="lightbox-content">
<input type="checkbox" id="toggle-zoom-grimoire" class="lightbox-toggle">
<label for="toggle-zoom-grimoire" class="lightbox-img-wrapper" title="Cliquer pour fermer">
<img src="images/buy-book.png.webp" alt="Zoom sur le Grimoire" class="lightbox-img">
</label>
</div>
</div>

<div id="zoom-boite-base" class="lightbox-overlay">
<a href="#close" class="lightbox-close-zone" title="Fermer la vue"></a>
<a href="#close" class="lightbox-close-btn" title="Fermer">✖</a>
<div class="lightbox-content">
<input type="checkbox" id="toggle-zoom-boite" class="lightbox-toggle">
<label for="toggle-zoom-boite" class="lightbox-img-wrapper" title="Cliquer pour fermer">
<img src="images/Group_42531_1.webp" alt="Zoom sur le matériel de base" class="lightbox-img">
</label>
</div>
</div>

<div id="zoom-tb-box" class="lightbox-overlay">
<a href="#close" class="lightbox-close-zone" title="Fermer la vue"></a>
<a href="#close" class="lightbox-close-btn" title="Fermer">✖</a>
<div class="lightbox-content">
<input type="checkbox" id="toggle-zoom-tb-box" class="lightbox-toggle">
<label for="toggle-zoom-tb-box" class="lightbox-img-wrapper" title="Cliquer pour fermer">
<img src="images/Editon_Spread_TB_1_1.png.webp" alt="Zoom sur le matériel Trouble Brewing" class="lightbox-img">
</label>
</div>
</div>

<div id="zoom-bmr-box" class="lightbox-overlay">
<a href="#close" class="lightbox-close-zone" title="Fermer la vue"></a>
<a href="#close" class="lightbox-close-btn" title="Fermer">✖</a>
<div class="lightbox-content">
<input type="checkbox" id="toggle-zoom-bmr-box" class="lightbox-toggle">
<label for="toggle-zoom-bmr-box" class="lightbox-img-wrapper" title="Cliquer pour fermer">
<img src="images/Editon_Spread_TB_1_11f5b346-e2e3-48db-b5e8-47327a73cced.png.webp" alt="Zoom sur le matériel Bad Moon Rising" class="lightbox-img">
</label>
</div>
</div>

<div id="zoom-sv-box" class="lightbox-overlay">
<a href="#close" class="lightbox-close-zone" title="Fermer la vue"></a>
<a href="#close" class="lightbox-close-btn" title="Fermer">✖</a>
<div class="lightbox-content">
<input type="checkbox" id="toggle-zoom-sv-box" class="lightbox-toggle">
<label for="toggle-zoom-sv-box" class="lightbox-img-wrapper" title="Cliquer pour fermer">
<img src="images/Edition_Spread_S_V.png.webp" alt="Zoom sur le matériel Sects & Violets" class="lightbox-img">
</label>
</div>
</div>

<div id="zoom-voyageurs-box" class="lightbox-overlay">
<a href="#close" class="lightbox-close-zone" title="Fermer la vue"></a>
<a href="#close" class="lightbox-close-btn" title="Fermer">✖</a>
<div class="lightbox-content">
<input type="checkbox" id="toggle-zoom-voyageurs-box" class="lightbox-toggle">
<label for="toggle-zoom-voyageurs-box" class="lightbox-img-wrapper" title="Cliquer pour fermer">
<img src="images/blood-on-the-clocktower-board-game-travellers-and-fabled-tokens.png.webp" alt="Zoom sur le matériel Voyageurs et Légendaires" class="lightbox-img">
</label>
</div>
</div>

<div id="zoom-grimoire-tuto" class="lightbox-overlay">
<a href="#close" class="lightbox-close-zone" title="Fermer la vue"></a>
<a href="#close" class="lightbox-close-btn" title="Fermer">✖</a>
<div class="lightbox-content">
<input type="checkbox" id="toggle-zoom-grimoire-tuto" class="lightbox-toggle">
<label for="toggle-zoom-grimoire-tuto" class="lightbox-img-wrapper" title="Cliquer pour fermer">
<img src="images/grimoireopen_jpg.jpg" alt="Zoom sur l'utilisation du Grimoire" class="lightbox-img" style="border-radius: 8px;">
</label>
</div>
</div>

<div id="zoom-plateau-box" class="lightbox-overlay">
<a href="#close" class="lightbox-close-zone" title="Fermer la vue"></a>
<a href="#close" class="lightbox-close-btn" title="Fermer">✖</a>
<div class="lightbox-content">
<input type="checkbox" id="toggle-zoom-plateau-box" class="lightbox-toggle">
<label for="toggle-zoom-plateau-box" class="lightbox-img-wrapper" title="Cliquer pour fermer">
<img src="images/Town%20Square.jpg" alt="Zoom sur Le Plateau de la Place du Village" class="lightbox-img" style="border-radius: 8px;">
</label>
</div>
</div>

</div>
