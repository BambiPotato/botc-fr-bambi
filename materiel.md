---
layout: default
title: "Qu'est-ce qu'il y a dans la boîte du jeu Blood on the Clocktower ?"
description: "Vous retrouverez ici en images le détail de ce qu'il y a dans la boîte de base et dans les différents modules."
image: /images/logogold.png
---

<style>
.page-materiel-container { font-family: Arial, sans-serif; margin: 0; padding: 0; }

.intro-section { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; background-color: #f4efe6; padding: 50px 20px; gap: 40px; }
.intro-image { flex: 1 1 40%; max-width: 500px; }
.intro-image img { width: 100%; height: auto; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.4)); }
.intro-text { flex: 1 1 40%; text-align: center; max-width: 500px; }
.intro-text h1 { font-family: Georgia, serif; color: #5C2E1F !important; font-size: 32px; text-transform: uppercase; letter-spacing: 2px; border-top: 1px solid #5C2E1F; border-bottom: 1px solid #5C2E1F; padding: 20px 0; margin: 0; }

/* FOND VIOLET ET TEXTE CLAIR FORCÉ */
.dark-box-section { 
background-image: url('/botc-fr-bambi/images/NOM_DE_TON_IMAGE_VIOLETTE.png'); 
background-color: #1e0f2b;
background-size: cover; 
background-position: center; 
padding: 60px 20px; 
}

.dark-box-content { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; gap: 40px; }
.box-exploded-image { flex: 1 1 50%; max-width: 600px; }
.img-zoom-effect { width: 100%; height: auto; object-fit: contain; transition: transform 0.3s ease, filter 0.3s ease; cursor: zoom-in; }
.img-zoom-effect:hover { transform: scale(1.05); filter: drop-shadow(0 15px 25px rgba(0,0,0,0.7)); }
.box-list-container { flex: 1 1 40%; min-width: 300px; }
.box-list-container h3 { color: #f4efe6 !important; font-family: Georgia, serif; font-size: 28px; text-transform: uppercase; letter-spacing: 2px; margin-top: 0; margin-bottom: 30px; }

/* LISTE SANS POINTS, NUMÉROS CERCLÉS, TEXTE BLANC */
.numbered-list { list-style-type: none !important; padding-left: 0 !important; margin: 0; counter-reset: official-counter; }
.numbered-list li { position: relative; padding-left: 45px !important; margin-bottom: 20px !important; color: #f4efe6 !important; font-size: 15px; line-height: 1.5; list-style: none !important; }
.numbered-list li::before { counter-increment: official-counter; content: counter(official-counter); position: absolute; left: 0; top: -2px; width: 26px; height: 26px; border: 1.5px solid #f4efe6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #f4efe6; }

.module-section { background-color: #f4efe6; padding: 60px 20px; }
.module-container { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto; background: white; border: 2px solid #e0d5c1; position: relative; overflow: hidden; }
.module-logo { flex: 1 1 25%; padding: 30px; text-align: center; z-index: 2; }
.module-logo img { width: 100%; max-width: 250px; height: auto; }
.module-text { flex: 1 1 40%; padding: 30px; z-index: 2; }
.module-text h2 { color: #8B2500 !important; font-family: Georgia, serif; font-size: 28px; text-transform: uppercase; margin: 0 0 5px 0; }
.module-text .niveau { color: #b58b52 !important; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-top: 0; margin-bottom: 20px; }
.module-text p { color: #5C2E1F !important; font-size: 16px; line-height: 1.6; margin-bottom: 25px; }
.discover-more-link { display: inline-block; color: #8B2500 !important; font-family: Georgia, serif; font-size: 16px; font-weight: bold; text-transform: uppercase; text-decoration: none; letter-spacing: 1px; border-bottom: 2px solid #8B2500; padding-bottom: 2px; transition: opacity 0.2s ease; }
.discover-more-link:hover { opacity: 0.7; }
.module-artwork { flex: 1 1 35%; text-align: right; z-index: 1; }
.module-artwork img { width: 100%; max-width: 350px; height: auto; display: block; margin-left: auto; }

.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85); display: none; z-index: 9999; }
.lightbox-overlay:target { display: flex; align-items: center; justify-content: center; }
.lightbox-close-zone { position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: zoom-out; }
.lightbox-close-btn { position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; text-decoration: none; z-index: 10000; }
.lightbox-content { position: relative; z-index: 10001; max-width: 90vw; max-height: 90vh; }
.lightbox-img { max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.lightbox-toggle { display: none; }
</style>

<div class="page-materiel-container">

<div class="intro-section">
<div class="intro-image">
<img src="/botc-fr-bambi/images/Grimoire_1_2.webp" alt="Le Grimoire Blood on the Clocktower">
</div>
<div class="intro-text">
<h1>Blood on the Clocktower le jeu</h1>
</div>
</div>

<div class="dark-box-section">
<div class="dark-box-content">
<div class="box-exploded-image">
<a href="#zoom-boite-base" title="Agrandir l'image">
<img src="/botc-fr-bambi/images/boite-base_2.png" alt="Matériel détaillé" class="img-zoom-effect">
</a>
</div>
<div class="box-list-container">
<h3>QU'EST-CE QU'IL Y A DANS LA BOÎTE DE JEU ?</h3>
<ul class="numbered-list">
<li>1 livre de règles principal et 4 almanachs de personnages.</li>
<li>99 personnages uniques : 39 Villageois, 12 Marginaux, 12 Sbires, 9 Démons, 15 Voyageurs, et 12 Légendaires.</li>
<li>120 jetons de rappel pour le Conteur, pour toutes les situations possibles.</li>
<li>60
