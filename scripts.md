---
layout: default
title: "Bibliothèque de scripts personnalisés"
description: "Découvrez une collection de scripts pour Blood on the Clocktower dotés d'un design soigné : images en haute définition, PDF prêts à imprimer et fichiers JSON."
image: /images/logogold.png
---


<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>


<hr class="explication">

<div class="wiki-parchment">

<div style="background: rgba(246, 225, 184, 0.82); border: 2px solid rgba(92, 46, 31, 0.50); border-radius: 14px; box-shadow: 0 8px 18px rgba(92, 46, 31, 0.22); padding: 24px 20px; text-align: center; margin-bottom: 30px;">
<h1 style="color: #5C2E1F; margin: 0 0 10px 0; font-size: 26px;">Scripts Personnalisés</h1>
<p class="botc-flavour-text" style="color: #5C2E1F; text-align: center; margin: 0 auto; max-width: 820px; font-size: 18px; line-height: 1.6;">
Une sélection de scripts dotés d'une véritable identité visuelle et d'un design soigné. Chaque création allie un équilibre de jeu éprouvé à une mise en page sur mesure, pensée pour le plaisir des yeux autour de la table.
</p>
</div>

<hr class="legendaire">

<div class="scripts-gallery">

<div class="script-card">
<a href="/botc-fr-bambi/images/logogold.png" class="script-preview-link" target="_blank" title="Agrandir l'illustration">
<img src="/botc-fr-bambi/images/logogold.png" alt="Aperçu du script" class="script-thumb">
<span class="preview-overlay">🔍 Agrandir la feuille</span>
</a>

<div class="script-content">
<h2 class="script-title">Nom du Script</h2>

<div class="script-badges">
<span class="badge-parchment">✍️ Auteur : Nom</span>
<span class="badge-parchment">👥 7 à 15 joueurs</span>
</div>

<p class="script-description">
Présentation de l'atmosphère, des dynamiques de jeu et des particularités graphiques de ce scénario.
</p>

<div class="script-downloads">
<a href="#" class="btn-script" target="_blank">📄 Fiche PDF à imprimer</a>
<a href="#" class="btn-script" target="_blank">⚙️ Fichier JSON (App BotC)</a>
<a href="#" class="btn-script" target="_blank">🖼️ Feuille illustrée HD</a>
</div>
</div>
</div>

</div>

<div style="text-align: center; margin-top: 45px; margin-bottom: 10px;">
<a href="#" class="botc-back-to-top">
<span class="top-arrow">⬆</span> Revenir en haut de page
</a>
</div>

</div>

<style>
.scripts-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 26px;
  margin-top: 26px;
}

.script-card {
  background: rgba(246, 225, 184, 0.82);
  border: 2px solid rgba(92, 46, 31, 0.50);
  border-radius: 14px;
  box-shadow: 0 8px 18px rgba(92, 46, 31, 0.22);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.script-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(92, 46, 31, 0.28);
}

.script-preview-link {
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
  background: rgba(26, 11, 36, 0.95);
  overflow: hidden;
  border-bottom: 2px solid rgba(92, 46, 31, 0.40);
  text-decoration: none !important;
}

.script-thumb {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 12px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 11, 36, 0.70);
  color: #f4efe6;
  font-family: Georgia, serif;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.script-preview-link:hover .preview-overlay {
  opacity: 1;
}

.script-preview-link:hover .script-thumb {
  transform: scale(1.04);
}

.script-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.script-title {
  margin: 0 0 10px 0 !important;
  color: #5C2E1F !important;
  font-size: 22px !important;
}

.script-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.badge-parchment {
  display: inline-block;
  background: rgba(92, 46, 31, 0.12);
  border: 1px solid rgba(92, 46, 31, 0.35);
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
  font-weight: bold;
  color: #5C2E1F;
}

.script-description {
  color: #5C2E1F;
  font-size: 15px;
  line-height: 1.55;
  margin-bottom: 20px;
  flex: 1;
}

.script-downloads {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.btn-script {
  display: block;
  text-align: center;
  padding: 9px 12px;
  background: rgba(92, 46, 31, 0.12);
  color: #5C2E1F !important;
  border: 1px solid rgba(92, 46, 31, 0.45);
  border-radius: 8px;
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none !important;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.btn-script:hover {
  background: rgba(92, 46, 31, 0.22);
  border-color: rgba(92, 46, 31, 0.75);
}

.botc-back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #1e1329;
  color: #f4efe6 !important;
  border: 2px solid #d4a76a;
  border-radius: 999px;
  padding: 10px 22px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  transition: background 0.2s ease, transform 0.2s ease;
}

.botc-back-to-top:hover {
  background: #2d1b3f;
  transform: translateY(-2px);
}

.top-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #4ea3ff;
  color: #ffffff;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  font-size: 11px;
}

@media (max-width: 700px) {
  .scripts-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
