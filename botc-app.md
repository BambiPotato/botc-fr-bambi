---
layout: default
title: "BotC APP : le guide d'utilisation pour jouer en ligne."
description: "Tutoriel complet pour jouer à Blood on the Clocktower en ligne sur l'application officielle."
image: /images/logogold.png
---


<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>


<hr class="explication">


<style>
/* Layout principal */
.guide-container {
  display: flex;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, sans-serif;
}

.guide-sidebar {
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 20px;
  height: fit-content;
  background: #1c102e !important;
  border: 1px solid #ffd97d !important;
  border-radius: 12px;
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
}

.guide-sidebar h3 {
  color: #ffd97d !important;
  font-size: 13px !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  margin: 18px 0 8px 0 !important;
  border-bottom: 1px solid rgba(255, 217, 125, 0.3) !important;
  padding-bottom: 4px !important;
}

.guide-sidebar ul {
  list-style: none !important;
  padding-left: 0 !important;
  margin: 0 !important;
}

.guide-sidebar li {
  margin-bottom: 8px !important;
  position: relative;
  padding-left: 15px;
}

.guide-sidebar li::before {
  content: "•";
  color: #ffd97d !important;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.guide-sidebar a {
  color: #ffffff !important;
  text-decoration: none !important;
  font-size: 13px !important;
  display: inline-block !important;
}

.guide-sidebar a:hover {
  color: #ffd97d !important;
  text-decoration: underline !important;
}

.guide-content {
  flex-grow: 1;
}

/* SECTION HAUT DE PAGE / EN-TÊTE EN DOUBLE CARTE */
.header-hero-container {
  max-width: 1200px;
  margin: 20px auto 30px auto;
  padding: 0 10px;
}

.header-grid {
  display: flex;
  gap: 20px;
  align-items: stretch;
}

.hero-card {
  flex: 1;
  background: #f7f3ec !important;
  border: 1.5px solid #dcd1c4 !important;
  border-radius: 16px !important;
  padding: 24px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-card h1 {
  color: #1c102e !important;
  font-size: 32px !important;
  font-weight: 900 !important;
  font-style: italic !important;
  text-transform: uppercase !important;
  margin: 12px 0 !important;
  line-height: 1.2 !important;
}

.hero-card p {
  color: #3b1b15 !important;
  font-size: 15px !important;
  line-height: 1.6 !important;
  font-weight: 600 !important;
  margin: 0 !important;
}

/* ENCART VIDÉO COMPACT */
.video-card-compact {
  flex: 1;
  background: #f7f3ec !important;
  border: 1.5px solid #dcd1c4 !important;
  border-radius: 16px !important;
  padding: 20px 18px !important;
  text-align: center !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06) !important;
}

.video-card-compact h3 {
  color: #3b1b15 !important;
  font-size: 22px !important;
  font-weight: 800 !important;
  margin: 0 0 12px 0 !important;
  font-family: Georgia, serif !important;
}

.video-wrapper-compact {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  background: #000000;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

.video-wrapper-compact iframe {
  position: absolute;
  top: -8%; 
  left: -4%; 
  width: 108%; 
  height: 116%; 
  border: 0;
}

.video-card-compact p {
  color: #3b1b15 !important;
  font-size: 14px !important;
  margin: 12px 0 0 0 !important;
  font-weight: 500 !important;
}

/* CARTES D'ÉTAPES */
.step-card {
  background: #1c102e !important;
  border: 1px solid #b58b52 !important;
  border-radius: 12px !important;
  padding: 25px !important;
  margin-bottom: 30px !important;
  scroll-margin-top: 20px !important;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5) !important;
}

.step-header {
  display: flex !important;
  align-items: center !important;
  gap: 15px !important;
  margin-bottom: 22px !important;
}

.step-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-row {
  display: flex;
  gap: 20px;
  align-items: center;
}

.step-media {
  width: 280px !important;
  height: 160px !important;
  object-fit: cover !important;
  flex-shrink: 0 !important;
  border-radius: 8px !important;
  border: 1px solid rgba(255, 217, 125, 0.4) !important;
  background: #12091f !important;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3) !important;
}

.action-box {
  background: #12091f !important;
  border-left: 4px solid #ffd97d !important;
  border-radius: 6px !important;
  padding: 15px !important;
  margin: 10px 0 !important;
}

/* BADGES BOUTONS */
.badge-afaire, .badge-bravo {
  background: #2a143d !important;
  color: #ffe885 !important;
  border: 1.5px solid #ffd97d !important;
  font-size: 13px !important;
  font-weight: 900 !important;
  letter-spacing: 1.5px !important;
  padding: 6px 14px !important;
  border-radius: 6px !important;
  text-transform: uppercase !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px !important;
  margin-bottom: 12px !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;
}

.badge-icon {
  font-size: 17px !important;
  line-height: 1 !important;
  display: inline-block !important;
}

.key-cap {
  background: #ffffff !important;
  color: #000000 !important;
  padding: 3px 8px !important;
  border-radius: 5px !important;
  font-weight: 900 !important;
  font-family: monospace !important;
  font-size: 14px !important;
  border: 1px solid #000000 !important;
  display: inline-block !important;
  box-shadow: 0 2px 0 rgba(0,0,0,0.2) !important;
}

.sub-step-title {
  color: #ffd97d !important;
  font-size: 18px !important;
  font-weight: 900 !important;
  margin: 0 0 8px 0 !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}

/* BOUTON RETOUR EN HAUT */
.back-to-top {
  display: block;
  width: fit-content;
  margin: 40px auto 20px auto;
  padding: 12px 24px;
  background: #1c102e !important;
  color: #ffd97d !important;
  border: 1.5px solid #ffd97d !important;
  border-radius: 30px;
  font-weight: 800;
  font-size: 15px;
  text-decoration: none !important;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.back-to-top:hover {
  transform: translateY(-2px);
  background: #2b1845 !important;
  color: #ffffff !important;
}

/* ADAPTATION MOBILE */
@media (max-width: 768px) {
  .header-grid { flex-direction: column; }
  .guide-container { flex-direction: column; }
  .guide-sidebar { width: 100%; position: static; }
  .step-row { flex-direction: column; }
}
</style>

<!-- EN-TÊTE / ANCRE DE HAUT DE PAGE (ALIGNÉ CÔTÉ À CÔTÉ) -->
<div id="top-guide" class="header-hero-container" markdown="0">
  <div class="header-grid">
    
    <!-- CARTE TEXTE D'ACCUEIL -->
    <div class="hero-card">
      <div>
        <span style="display: inline-block !important; background: #1c102e !important; color: #ffd97d !important; font-size: 12px !important; font-weight: 900 !important; letter-spacing: 2px !important; padding: 6px 12px !important; border-radius: 6px !important; text-transform: uppercase !important;">GUIDE DU JOUEUR · BOTC.APP</span>
      </div>
      <h1>COMMENT JOUER SUR L'APPLICATION OFFICIELLE</h1>
      <p>
        Vous trouverez ici tout ce dont vous avez besoin pour rejoindre une partie en ligne, parler aux autres joueurs et gérer votre grimoire sur l'application officielle de <strong>Blood on the Clocktower</strong>.
      </p>
    </div>

    <!-- CARTE TUTO VIDÉO -->
    <div class="video-card-compact">
      <h3>Tuto vidéo</h3>
      <div class="video-wrapper-compact">
        <iframe src="https://www.youtube-nocookie.com/embed/O2ksf5eTeSI" title="Tutoriel pour jouer sur l'application" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p>Une petite démonstration en vidéo pour vous guider pas à pas sur l'application.</p>
    </div>

  </div>
</div>

<div class="guide-container" markdown="0">

  <!-- SOMMAIRE LATÉRAL -->
  <nav class="guide-sidebar">
    <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="text-align: center; background: rgba(181,139,82,.25); border: 1px solid #ffd97d; border-radius: 8px; color: #ffd97d !important; font-weight: bold; padding: 10px; margin-bottom: 15px; display: block !important;">
      🌐 Ouvrir BOTC.APP ↗
    </a>

    <h3>1. Inscription</h3>
    <ul>
      <li><a href="#step-1">1. S’enregistrer sur le site</a></li>
    </ul>

    <h3>2. Rejoindre une partie</h3>
    <ul>
      <li><a href="#step-2">2. Rejoindre une partie</a></li>
      <li><a href="#step-3">3. Prendre un siège</a></li>
      <li><a href="#step-4">4. Configurer caméra & micro</a></li>
    </ul>

    <h3>3. Parler aux joueurs</h3>
    <ul>
      <li><a href="#step-5">5. Lever la main</a></li>
      <li><a href="#step-6">6. Répondre à un chat privé</a></li>
      <li><a href="#step-7">7. Demander un chat privé</a></li>
      <li><a href="#step-8">8. Envoyer un chuchotement</a></li>
    </ul>

    <h3>4. Profil & Siège</h3>
    <ul>
      <li><a href="#step-9">9. Changer de nom & d'avatar</a></li>
      <li><a href="#step-10">10. Quitter son siège</a></li>
      <li><a href="#step-11">11. Accès au Grimoire</a></li>
      <li><a href="#step-12">12. Quitter la partie</a></li>
    </ul>

    <h3>5. Script, Jetons & Dépannage</h3>
    <ul>
      <li><a href="#step-13">13. Ouvrir l'onglet Rôles</a></li>
      <li><a href="#step-14">14. Jetons de rôles & rappels</a></li>
      <li><a href="#step-15">15. Caméra/Micro en panne</a></li>
      <li><a href="#step-16">16. Jeton introuvable</a></li>
    </ul>
  </nav>

  <!-- CONTENU PRINCIPAL -->
  <div class="guide-content">

    <!-- ÉTAPE 1 -->
    <div id="step-1" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">1</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">S’ENREGISTRER SUR LE SITE</h2>
      </div>

      <p style="color: #ffffff !important; margin-bottom: 20px;">Pour jouer avec l’application <strong>Blood 🩸 on the Clocktower 🕰️</strong>, vous devez créer un <strong>compte gratuit</strong>.</p>

      <div class="step-grid">
        <div class="step-row">
          <img src="images/inscription-1.png" alt="Formulaire d'inscription" class="step-media">
          <div>
            <h4 class="sub-step-title">1️⃣ Rendez-vous sur le site officiel :</h4>
            <p style="margin-bottom: 12px;">
              <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="color: #ffd97d !important; font-weight: bold; text-decoration: underline;">https://botc.app/login 🔗</a>
            </p>

            <h4 class="sub-step-title">2️⃣ Cliquez sur S'inscrire :</h4>
            <p style="color: #ffffff !important; margin: 0;">
              Remplissez les champs <em>(adresse e-mail, mot de passe, pseudonyme)</em>.<br>
              ➡️ <strong style="color: #ff6b6b !important;">Ne cliquez pas sur Patreon.</strong>
            </p>
          </div>
        </div>

        <div class="step-row">
          <img src="images/inscription-2.png" alt="Écran de connexion" class="step-media">
          <div>
            <h4 class="sub-step-title">3️⃣ Connectez-vous :</h4>
            <p style="color: #ffffff !important; margin-bottom: 15px;">
              Entrez vos identifiants puis cliquez sur <strong>Connexion</strong>.
            </p>

            <div class="action-box">
              <span class="badge-bravo"><span class="badge-icon">👏🏻</span> BRAVO</span><br>
              <span style="color: #ffffff !important; font-weight: bold;">Votre compte est créé !</span> 
              <span style="color: #ffffff !important;">Passez à l'étape suivante pour rejoindre une table.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 2 -->
    <div id="step-2" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">2</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">REJOINDRE UNE PARTIE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/partie-publique.png" alt="Partie publique" class="step-media">
          <div>
            <h4 class="sub-step-title">Rejoindre une partie publique</h4>
            <p style="color: #ffffff !important; margin: 0 !important;">Une fois connecté, vous verrez la liste des parties publiques disponibles. Choisissez-en une pour vous installer ou simplement observer la partie.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/invitation.png" alt="Lien d'invitation" class="step-media">
          <div>
            <h4 class="sub-step-title">Rejoindre une partie privée</h4>
            <p style="color: #ffffff !important; margin: 0 !important;">La plupart du temps, le Conteur vous enverra un lien direct. Il suffit de cliquer dessus :<br>
            <strong style="color: #ffd97d !important; font-size: 16px;">https://botc.app/join/66666666</strong></p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/partie-privee.png" alt="Code privé" class="step-media">
          <div>
            <span style="color: #ffd97d !important; font-weight: 900 !important; font-style: italic !important; margin: 10px 0 !important; display: block !important;">— OU —</span>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur <strong>Rejoindre une partie privée</strong> et entrez le code donné par le Conteur.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 3 -->
    <div id="step-3" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">3</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">PRENDRE UN SIÈGE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/siege.png" alt="Prendre un siège" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Une fois arrivé dans le village, cliquez sur un siège libre autour du cercle pour vous y installer.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 4 : CONFIGURER CAMÉRA & MICRO -->
    <div id="step-4" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">4</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">CONFIGURER CAMÉRA & MICRO</h2>
      </div>
      <div class="step-grid">
        <!-- Image 1 -->
        <div class="step-row">
          <img src="images/reglages.png" alt="Réglages" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur la touche <span class="key-cap">Q</span> de votre clavier.</span>
              <span style="color: #ffd97d !important; font-weight: 900 !important; font-style: italic !important; margin: 10px 0 !important; display: block !important;">— OU —</span>
              <span style="color: #ffffff !important;">Cliquez sur l'icône ⚙️ d'engrenage.</span>
            </div>
          </div>
        </div>
        <!-- Image 2 -->
        <div class="step-row">
          <img src="images/onglet-chat.png" alt="3ème Onglet" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur le 3ème onglet.</span>
            </div>
          </div>
        </div>
        <!-- Image 3 -->
        <div class="step-row">
          <img src="images/lancer-config.png" alt="Paramètres" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur <strong>Paramètres</strong>.</span>
            </div>
          </div>
        </div>
        <!-- Image 4 -->
        <div class="step-row">
          <img src="images/onglet-audio.png" alt="Onglet Chat" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur le 3ème onglet, <strong>Chat</strong>.</span>
            </div>
          </div>
        </div>
        <!-- Image 5 -->
        <div class="step-row">
          <img src="images/bouton-lancer.png" alt="Lancer la config" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur <strong>Lancer la configuration</strong>.</span>
            </div>
          </div>
        </div>
        <!-- Image 6 -->
        <div class="step-row">
          <img src="images/bouton-demarrer.png" alt="Démarrer" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur <strong>Commencer</strong>.</span>
            </div>
          </div>
        </div>
        <!-- Image 7 -->
        <div class="step-row">
          <img src="images/test-micro.png" alt="Choix Caméra et Micro" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Choisissez la caméra et le microphone à utiliser. Lorsque la caméra est bien réglée, vous vous verrez ; lorsque le micro fonctionne, des <strong style="color: #ffd97d !important;">barres jaunes</strong> bougent au rythme de votre voix. Une fois terminé, cliquez sur <strong>Fermer</strong>.</span>
            </div>
          </div>
        </div>
        <!-- Image 8 -->
        <div class="step-row">
          <img src="images/reactiver-micro.gif" alt="Réactiver le micro" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">De retour sur la place du village, vous commencerez avec votre micro en sourdine et votre caméra coupée. Réactivez-les à l'aide des boutons situés dans le coin supérieur droit.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 5 -->
    <div id="step-5" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">5</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">LEVER LA MAIN</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/main-levee.gif" alt="Lever la main" class="step-media">
          <div>
            <p style="color: #ffffff !important;">Levez la main pour demander la parole ou pour voter pendant les phases d'exécution.</p>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur la barre <span class="key-cap">ESPACE</span> pour lever ou baisser la main.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 6 -->
    <div id="step-6" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">6</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">RÉPONDRE À UNE DEMANDE DE CHAT PRIVÉ</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/notif-vocal.png" alt="Notification Vocal" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Si un joueur veut discuter en privé avec vous, un signal sonore retentit et son nom apparaît dans l'onglet <strong style="color: #ffd97d !important;">VOIX</strong> à gauche. Cliquez sur son nom pour accepter la discussion.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <img src="images/salon-prive.png" alt="Salon privé" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Pour quitter un salon privé, cliquez sur <strong>Quitter</strong> ou appuyez sur la touche <span class="key-cap">RETOUR ARRIÈRE</span> (Effacer) de votre clavier.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 7 -->
    <div id="step-7" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">7</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">DEMANDER UN CHAT PRIVÉ</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/touche-entree.png" alt="Touche Entrée" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur la touche <span class="key-cap">ENTRÉE</span>.</span>
              <span style="color: #ffd97d !important; font-weight: 900 !important; font-style: italic !important; margin: 10px 0 !important; display: block !important;">— OU —</span>
              <span style="color: #ffffff !important;">Dans l'onglet <strong style="color: #ffd97d !important;">VOIX</strong>, cliquez sur <strong>Demander un chat privé</strong>.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <img src="images/bulle-joueur.png" alt="Bulle Joueur" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez directement sur l'icône 💬 de bulle à côté du joueur que vous souhaitez contacter.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 8 -->
    <div id="step-8" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">8</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">ENVOYER UN CHUCHOTEMENT</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/touche-entree-demande.png" alt="Demande de chat" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur la touche <span class="key-cap">ENTRÉE</span>.</span>
              <span style="color: #ffd97d !important; font-weight: 900 !important; font-style: italic !important; margin: 10px 0 !important; display: block !important;">— OU —</span>
              <span style="color: #ffffff !important;">Dans l'onglet Vocal, cliquez sur <strong>Demander un chat privé</strong>.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <img src="images/enveloppe.png" alt="Enveloppe chuchotement" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur l'enveloppe pour envoyer un chuchotement. Vous ne pouvez chuchoter qu'à vos <strong>voisins directs</strong> et au <strong>Conteur</strong>. Une animation d'enveloppe se joue — sa taille s'adapte à la longueur de votre message.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <img src="images/notif-texte.png" alt="Notifications texte" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Les notifications de nouveaux messages s'affichent dans l'onglet Texte. Appuyez sur la touche <span class="key-cap">TAB</span> pour l'ouvrir.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <img src="images/chat-public.png" alt="Chat public" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Il existe également un chat public visible par tout le monde. Les messages disparaissent après un certain temps.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 9 -->
    <div id="step-9" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">9</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">CHANGER DE NOM & D'AVATAR</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/menu-reglages-q.png" alt="Menu Reglages" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Appuyez sur <span class="key-cap">Q</span> pour ouvrir le menu des réglages de l'application.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/onglet-utilisateur.png" alt="Onglet Utilisateur" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur le 2ème onglet, <strong>Utilisateur</strong>.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/modifier-nom.png" alt="Modifier Nom" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur votre nom pour le modifier.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/modifier-avatar.png" alt="Modifier Avatar" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">
              Cliquez sur l'avatar pour changer votre image (nécessite un abonnement <a href="https://www.patreon.com/cw/botconline/membership" target="_blank" rel="noopener noreferrer" style="color: #ffd97d !important; font-weight: bold; text-decoration: underline;">Patreon 🔗</a>).
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 10 -->
    <div id="step-10" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">10</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">QUITTER SON SIÈGE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/clic-engrenage.png" alt="Engrenage" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur l'icône ⚙️ d'engrenage.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/liberer-siege.png" alt="Quitter son siège" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur <strong>Quitter son siège</strong>. Vous restez dans la partie en tant que Spectateur — vous pouvez chuchoter au Conteur et discuter avec les autres spectateurs.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 11 -->
    <div id="step-11" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">11</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">DEMANDER L'ACCÈS AU GRIMOIRE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/demande-grimoire.png" alt="Accès Grimoire" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur le jeton du Conteur puis sélectionnez <strong>Demander l'accès au Grimoire</strong> pour voir l'ensemble des rôles de la partie en tant que spectateur.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 12 -->
    <div id="step-12" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">12</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">QUITTER LA PARTIE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/quitter-touche-l.png" alt="Touche L" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Appuyez sur la touche <span class="key-cap">L</span> du clavier — un message d'avertissement apparaît pour éviter les déconnexions accidentelles.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/quitter-partie.png" alt="Quitter Partie Engrenage" class="step-media">
          <div>
            <span style="color: #ffd97d !important; font-weight: 900 !important; font-style: italic !important; margin: 10px 0 !important; display: block !important;">— OU —</span>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur l'icône ⚙️ d'engrenage puis sur <strong>Quitter la partie</strong>.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 13 -->
    <div id="step-13" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">13</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">OUVRIR L'ONGLET RÔLES</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/roles-liste-courte.png" alt="Liste courte rôles" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur l'onglet <strong>RÔLES</strong> pour afficher la liste simplifiée des personnages du script.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/roles-script-complet.png" alt="Script complet" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez une deuxième fois sur l'onglet <strong>RÔLES</strong> pour afficher le script complet avec tous les détails.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/roles-fermer.png" alt="Fermer l'onglet rôles" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez une troisième fois sur l'onglet <strong>RÔLES</strong> pour le fermer.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 14 -->
    <div id="step-14" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">14</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">JETONS DE RÔLES & RAPPELS</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/changer-jeton-joueur.png" alt="Changer jeton" class="step-media">
          <div>
            <h4 class="sub-step-title">Définir un jeton</h4>
            <p style="color: #ffffff !important; margin: 0 !important;">Vous pouvez modifier le jeton d'un joueur en cliquant directement dessus.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/notes-personnelles.png" alt="Note personnelle" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Définir le jeton d’un joueur est une information <strong>visible uniquement par vous</strong>. Cela ne change le rôle de personne (pas même le vôtre) — très pratique pour prendre des notes !</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/ajouter-rappel.png" alt="Ajouter rappel" class="step-media">
          <div>
            <h4 class="sub-step-title">Placer des rappels</h4>
            <p style="color: #ffffff !important; margin: 0 !important;">Ajoutez plusieurs jetons de rappel sur un joueur. Survolez le cercle intérieur jusqu'à ce qu'un jeton violet vierge apparaisse, puis cliquez sur le jeton de rappel souhaité.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/choisir-rappel.png" alt="Choisir jeton rappel" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Choisissez n'importe quel jeton de rappel disponible dans la partie.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/rappel-personnalise.png" alt="Rappel personnalise" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Vous pouvez également créer vos propres jetons de rappel personnalisés.</p>
          </div>
        </div>
        <div class="step-row">
          <img src="images/exemples-rappels.png" alt="Exemples de rappels" class="step-media">
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Parfait pour suivre plusieurs revendications de rôles, les infos du Savant, la cible de la Commère... et bien plus encore !</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 15 -->
    <div id="step-15" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">15</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">CAMÉRA OU MICRO QUI NE FONCTIONNE PAS ?</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/actualiser.png" alt="Actualiser la page" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <p style="color: #ffffff !important; margin: 5px 0 !important;">Rafraîchissez votre page web pour réinitialiser la connexion audio/vidéo :</p>
              <ul style="margin-top: 8px; margin-bottom: 8px; padding-left: 20px;">
                <li style="color: #ffffff !important;"><strong>Sous Windows / Linux :</strong> Appuyez sur <span class="key-cap">F5</span> ou forcez avec <span class="key-cap">CTRL</span> + <span class="key-cap">F5</span>.</li>
                <li style="color: #ffffff !important;"><strong>Sous Mac OS :</strong> Cliquez sur le bouton <strong>Actualiser 🔄</strong> du navigateur ou faites <span class="key-cap">⌘ CMD</span> + <span class="key-cap">R</span>.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 16 -->
    <div id="step-16" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">16</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">IMPOSSIBLE DE VOIR VOTRE JETON ?</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <img src="images/touche-t.png" alt="Touche T" class="step-media">
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <p style="color: #ffffff !important; margin: 0 !important;">Appuyez sur la touche <span class="key-cap">T</span> de votre clavier. Vous êtes sans doute basculé en vue <strong style="color: #ffd97d !important;">Place du Village</strong> — réappuyez sur <span class="key-cap">T</span> pour revenir à la vue normale.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BOUTON REVENIR EN HAUT -->
    <a href="#top-guide" class="back-to-top">⬆️ Revenir en haut de page</a>

  </div>
</div>

<hr class="explication">


<ul style="color:#f5f5f5; font-size:18px; line-height:1.7;">
  <li><a href="/botc-fr-bambi/" style="color:#5C2E1F; font-weight:bold; text-decoration:none;">Retour à l’accueil</a></li>
  <li><a href="./regles.html" style="color:#5C2E1F; font-weight:bold; text-decoration:none;">Règles du jeu</a></li>
</ul>

