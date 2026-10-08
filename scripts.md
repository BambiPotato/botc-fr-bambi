---
layout: default
title: "Bibliothèque de Scripts Personnalisés"
description: "Découvrez une collection de scripts pour Blood on the Clocktower dotés d'un design soigné : images en haute définition, PDF prêts à imprimer et fichiers JSON."
image: /images/logogold.png
---

<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="/botc-fr-bambi/images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>

<hr class="explication">

<div class="wiki-parchment">

  <h1 style="text-align: center; margin-bottom: 12px;">Scripts Personnalisés</h1>
  
  <p class="botc-flavour-text" style="text-align: center; margin: 0 auto 24px auto; max-width: 820px;">
    Une sélection de scripts dotés d'une véritable identité visuelle et d'un design sur mesure. Chaque scénario allie un équilibre de jeu éprouvé à une mise en page soignée, pensée pour le plaisir des yeux autour de la table.
  </p>

  <hr class="legendaire">

  <!-- GALERIE DES SCRIPTS -->
  <div class="scripts-gallery">

    <!-- ==================== FICHE SCRIPT 1 ==================== -->
    <div class="script-card">
      
      <!-- APERÇU VISUEL / GALERIE CLIQUABLE -->
      <a href="/botc-fr-bambi/images/logogold.png" class="script-preview-link" target="_blank" title="Cliquer pour agrandir la feuille de script">
        <img src="/botc-fr-bambi/images/logogold.png" alt="Aperçu illustré du script" class="script-thumb">
        <span class="preview-overlay">🔍 Voir la feuille en grand</span>
      </a>

      <!-- CONTENU & DÉTAILS -->
      <div class="script-content">
        <h2 class="script-title">Nom du Script</h2>
        
        <div class="script-badges">
          <span class="badge-parchment">✍️ Création : Auteur</span>
          <span class="badge-parchment">👥 7 à 15 joueurs</span>
        </div>

        <p class="script-description">
          Présentation de l'atmosphère, de la trame narrative et des particularités graphiques de cette création sur mesure.
        </p>

        <!-- BOUTONS DE TÉLÉCHARGEMENT DANS LES TONS DU SITE -->
        <div class="script-downloads">
          <a href="#" class="btn-script" target="_blank">📄 Fiche PDF à imprimer</a>
          <a href="#" class="btn-script" target="_blank">⚙️ Fichier JSON (App BotC)</a>
          <a href="#" class="btn-script" target="_blank">🖼️ Feuille illustrée HD</a>
        </div>
      </div>

    </div>
    <!-- ================== FIN FICHE SCRIPT 1 ================== -->

  </div>

</div>

<style>
/* Grille de la galerie */
.scripts-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  margin-top: 26px;
}

/* Carte façon feuillet de grimoire */
.script-card {
  background: rgba(246, 239, 229, 0.85);
  border: 2px solid rgba(92, 46, 31, 0.45);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(92, 46, 31, 0.12);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.script-card:hover {
  transform: translateY(-2px);
  border-color: rgba(92, 46, 31, 0.7);
  box-shadow: 0 10px 22px rgba(92, 46, 31, 0.18);
}

/* Zone d'aperçu d'image */
.script-preview-link {
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
  background: rgba(42, 17, 53, 0.85);
  text-decoration: none !important;
  overflow: hidden;
  border-bottom: 1px solid rgba(92, 46, 31, 0.3);
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
  background: rgba(42, 17, 53, 0.65);
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

/* Corps de texte */
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
  background: rgba(92, 46, 31, 0.08);
  border: 1px solid rgba(92, 46, 31, 0.25);
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

/* Boutons sobres aux couleurs parchemin / cuir */
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
  background: rgba(92, 46, 31, 0.1);
  color: #5C2E1F !important;
  border: 1px solid rgba(92, 46, 31, 0.4);
  border-radius: 8px;
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none !important;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.btn-script:hover {
  background: rgba(92, 46, 31, 0.2);
  border-color: rgba(92, 46, 31, 0.7);
  text-decoration: none !important;
}

/* Adaptation petits écrans */
@media (max-width: 700px) {
  .scripts-gallery {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
