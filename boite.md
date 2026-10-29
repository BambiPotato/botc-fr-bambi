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

/* 2. SECTION SOMBRE VIOLETTE OFFICIELLE */
.dark-box-section { 
background-image: url('images/bg-violet.jpg'); 
background-color: #1e0f2b;
background-size: cover; background-position: center; padding: 60px 20px; 
}
.dark-box-content { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; gap: 40px; }
.box-exploded-image { flex: 1 1 50%; max-width: 600px; }
.box-list-container { flex: 1 1 40%; min-width: 300px; }
.box-list-container h3 { color: #f4efe6 !important; font-family: Georgia, serif; font-size: 28px; text-transform: uppercase; letter-spacing: 2px; margin-top: 0; margin-bottom: 30px; }

/* EFFET LOUPE GLOBAL */
.img-zoom-effect { width: 100%; height: auto; object-fit: contain; transition: transform 0.3s ease, filter 0.3s ease; cursor: zoom-in; }
.img-zoom-effect:hover { transform: scale(1.05); filter: drop-shadow(0 15px 25px rgba(0,0,0,0.7)); }

/* LISTE NUMÉROTÉE OFFICIELLE */
.numbered-list { list-style-type: none !important; padding-left: 0 !important; margin: 0; counter-reset: official-counter; }
.numbered-list li { position: relative; padding-left: 45px !important; margin-bottom: 20px !important; color: #f4efe6 !important; font-size: 15px; line-height: 1.5; list-style: none !important; }
.numbered-list li::before { counter-increment: official-counter; content: counter(official-counter); position: absolute; left: 0; top: -2px; width: 26px; height: 26px; border: 1.5px solid #f4efe6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #f4efe6; }

/* 3. SECTION TROUBLE BREWING */
.module-section { background-color: #f4efe6; padding: 60px 20px; }
.module-container { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; background: white; border: 2px solid #e0d5c1; position: relative; overflow: hidden; }
.module-logo { flex: 1 1 25%; padding: 30px; text-align: center; z-index: 2; }
.module-logo img { width: 100%; max-width: 250px; height: auto; filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2)); }
.module-text { flex: 1 1 40%; padding: 30px; z-index: 2; }
.module-text h2 { color: #8B2500 !important; font-family: Georgia, serif; font-size: 28px; text-transform: uppercase; margin: 0 0 5px 0; }
.module-text .niveau { color: #b58b52 !important; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-top: 0; margin-bottom: 20px; }
.module-text p { color: #5C2E1F !important; font-size: 16px; line-height: 1.6; margin-bottom: 25px; }
.discover-more-link { display: inline-block; color: #8B2500 !important; font-family: Georgia, serif; font-size: 16px; font-weight: bold; text-transform: uppercase; text-decoration: none; letter-spacing: 1px; border-bottom: 2px solid #8B2500; padding-bottom: 2px; transition: opacity 0.2s ease; }
.discover-more-link:hover { opacity: 0.7; }
.module-artwork { flex: 1 1 35%; text-align: right; z-index: 1; }
.module-artwork img { width: 100%; max-width: 350px; height: auto; display: block; margin-left: auto; }

/* LIGHTBOX (ZOOM) */
.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85); display: none; z-index: 9999; }
.lightbox-overlay:target { display: flex; align-items: center; justify-content: center; }
.lightbox-close-zone { position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: zoom-out; }
.lightbox-close-btn { position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; text-decoration: none; z-index: 10000; }
.lightbox-content { position: relative; z-index: 10001; max-width: 90vw; max-height: 90vh; }
.lightbox-img { max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.lightbox-toggle { display: none; }
</style>

<div class="page-materiel-container">

<!-- 1. EN-TÊTE : LE GRIMOIRE ANIMÉ AVEC BOUGIES ET LOTUS -->
<div class="intro-section">
<div class="decorations-left">
<img src="images/3_-_TT_Cutout_-_Candles_1.png.avif" alt="Bougies">
</div>
<div class="decorations-right">
<img src="images/3_-_TAF_Cutout_-_Lotus_B_1.png.avif" alt="Fleur de Lotus">
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

<!-- 2. SECTION SOMBRE : MATÉRIEL ÉCLATÉ -->
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
<li>60 fiches de rôles - 20 pour chacune des trois premières éditions du jeu.</li>
<li>Plateau de la Place du Village, 20 jetons de vie, et 18+ jetons de vote.</li>
<li>La boîte elle-même forme l'illustre Grimoire ; le guide du Conteur pour chaque partie.</li>
<li>Support pliant pour poser votre Grimoire.</li>
<li>4 boîtes de jetons pour ranger et organiser chaque édition.</li>
<li>Tout le reste pour vous aider à organiser et suivre : 18+ linceuls, 25+ jetons de nuit, 4 jetons d'information, 1 sac en tissu pour la sélection des rôles, 3 fiches de nuit, 1 fiche de mise en place, 1 fiche de Voyageurs, des pinces pour le Grimoire.</li>
</ul>
</div>
</div>
</div>

<!-- 3. SECTION ÉDITIONS : TROUBLE BREWING -->
<div class="module-section">
<div class="module-container">
<div class="module-logo">
<img src="images/logo-PO4QGYTI.webp" alt="Logo Trouble Brewing">
</div>
<div class="module-text">
<h2>TROUBLE BREWING</h2>
<p class="niveau">DÉBUTANT</p>
<p>Trouble Brewing a un peu de tout. Certains rôles reçoivent passivement des informations, d'autres doivent agir pour savoir qui est qui, tandis que d'autres veulent simplement inciter le Démon à les attaquer.</p>
<a href="trouble_brewing.html" class="discover-more-link">DÉCOUVREZ PLUS</a>
</div>
<div class="module-artwork">
<img src="images/explore-artwork-I3UOZ3DW.webp" alt="Illustration Trouble Brewing">
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
<img src="images/Group_42531_1.webp" alt="Zoom sur le matériel" class="lightbox-img">
</label>
</div>
</div>

</div>
