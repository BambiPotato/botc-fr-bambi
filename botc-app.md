---
layout: default
title: Guide d'utilisation de BOTC App
description: Tutoriel complet pour jouer à Blood on the Clocktower en ligne sur l'application officielle.
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
  font-size: 14px !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  margin: 20px 0 10px 0 !important;
  border-bottom: 1px solid rgba(255, 217, 125, 0.3) !important;
  padding-bottom: 5px !important;
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
  font-size: 14px !important;
  display: inline-block !important;
}

.guide-content {
  flex-grow: 1;
}

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
  width: 280px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(255, 217, 125, 0.4);
  background: #12091f;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a894b8 !important;
  font-size: 13px;
  text-align: center;
  padding: 10px;
}

.action-box {
  background: #12091f !important;
  border-left: 4px solid #ffd97d !important;
  border-radius: 6px !important;
  padding: 15px !important;
  margin: 10px 0 !important;
}

/* BADGES DE BOUTONS (À FAIRE / BRAVO) - DESIGN ENCADRÉ VIOLET/JAUNE VERRROUILLÉ */
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

/* TAILLE ÉMOJIS DANS BADGES */
.badge-icon {
  font-size: 17px !important;
  line-height: 1 !important;
  display: inline-block !important;
}

/* TOUCHES CLAVIER */
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

/* TITRES DE SOUS-ÉTAPES JAUNES ENCADRÉS / LISIBLES */
.sub-step-title {
  color: #ffd97d !important;
  font-size: 18px !important;
  font-weight: 900 !important;
  margin: 0 0 8px 0 !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}

/* ENCART VIDÉO COMPACT */
.video-card-compact {
  background: #f7f3ec !important;
  border: 1.5px solid #dcd1c4 !important;
  border-radius: 16px !important;
  padding: 18px 16px !important;
  max-width: 380px !important;
  margin: 20px 0 35px 0 !important;
  text-align: center !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06) !important;
}

.video-card-compact h3 {
  color: #3b1b15 !important;
  font-size: 22px !important;
  font-weight: 800 !important;
  margin: 0 0 14px 0 !important;
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

@media (max-width: 768px) {
  .guide-container { flex-direction: column; }
  .guide-sidebar { width: 100%; }
  .step-row { flex-direction: column; }
  .video-card-compact { max-width: 100% !important; }
}
</style>

<!-- EN-TÊTE PAGE ACCUEIL -->
<div style="max-width: 1200px; margin: 20px auto 10px auto; padding: 0 10px;" markdown="0">
  <span style="display: inline-block !important; background: #1c102e !important; color: #ffd97d !important; font-size: 13px !important; font-weight: 900 !important; letter-spacing: 2px !important; padding: 6px 14px !important; border-radius: 6px !important; text-transform: uppercase !important;">GUIDE DU JOUEUR · BOTC.APP</span>
  
  <h1 style="color: #1c102e !important; font-size: 40px !important; font-weight: 900 !important; font-style: italic !important; text-transform: uppercase !important; margin: 12px 0 !important;">COMMENT JOUER SUR BOTC.APP</h1>
  
  <p style="color: #2b1a3f !important; font-size: 16px !important; line-height: 1.5 !important; font-weight: 600 !important; max-width: 900px;">
    Vous trouverez ici tout ce dont vous avez besoin pour rejoindre une partie, parler aux autres joueurs et gérer votre grimoire — sur l'application officielle en ligne de <strong>Blood on the Clocktower</strong>.
  </p>

  <!-- ENCART VIDÉO TUTO -->
  <div class="video-card-compact">
    <h3>Tuto vidéo</h3>
    <div class="video-wrapper-compact">
      <iframe src="https://www.youtube-nocookie.com/embed/O2ksf5eTeSI" title="Tutoriel pour jouer sur l'application" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p>Une petite démonstration en vidéo pour vous guider pas à pas sur l'application.</p>
  </div>
</div>

<div class="guide-container" markdown="0">

  <!-- SOMMAIRE LATÉRAL -->
  <nav class="guide-sidebar">
    <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="text-align: center; background: rgba(181,139,82,.25); border: 1px solid #ffd97d; border-radius: 8px; color: #ffd97d !important; font-weight: bold; padding: 10px; margin-bottom: 15px; display: block !important;">
      🌐 Ouvrir BOTC.APP ↗
    </a>

    <h3>Rejoindre le jeu</h3>
    <ul>
      <li><a href="#step-1">1. S’enregistrer sur le site</a></li>
      <li><a href="#step-2">2. Rejoindre une partie</a></li>
      <li><a href="#step-3">3. Prendre un siège</a></li>
      <li><a href="#step-4">4. Configurer caméra & micro</a></li>
    </ul>

    <h3>Parler aux autres joueurs</h3>
    <ul>
      <li><a href="#step-5">5. Lever la main</a></li>
      <li><a href="#step-6">6. Répondre à un chat privé</a></li>
      <li><a href="#step-7">7. Demander un chat privé</a></li>
      <li><a href="#step-8">8. Envoyer un chuchotement</a></li>
    </ul>

    <h3>Profil & Siège</h3>
    <ul>
      <li><a href="#step-9">9. Nom & Avatar</a></li>
      <li><a href="#step-10">10. Quitter son siège</a></li>
      <li><a href="#step-11">11. Accès au Grimoire</a></li>
      <li><a href="#step-12">12. Quitter la partie</a></li>
    </ul>

    <h3>Script & Grimoire</h3>
    <ul>
      <li><a href="#step-13">13. Onglet Rôles</a></li>
      <li><a href="#step-14">14. Jetons & Rappels</a></li>
    </ul>

    <h3>Dépannage</h3>
    <ul>
      <li><a href="#step-15">15. Dépannage Caméra/Micro</a></li>
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
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Formulaire d'inscription]</div>
          <div>
            <p style="color: #ffffff !important;">Pour jouer avec l’application <strong>Blood 🩸 on the Clocktower 🕰️</strong>, vous devez créer un <strong>compte gratuit</strong>.</p>
            <ul style="list-style: none; padding-left: 0;">
              <li style="margin-bottom: 12px; color: #ffffff !important;">
                <h4 class="sub-step-title">1️⃣ Rendez-vous sur le site officiel :</h4>
                <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="color: #ffd97d !important; font-weight: bold; text-decoration: underline;">https://botc.app/login 🔗</a>
              </li>
              <li style="margin-bottom: 12px; color: #ffffff !important;">
                <h4 class="sub-step-title">2️⃣ Cliquez sur S'inscrire :</h4>
                Remplissez les champs <em>(adresse e-mail, mot de passe, pseudonyme)</em>.<br>
                ➡️ <strong style="color: #ff6b6b !important;">Ne cliquez pas sur Patreon.</strong>
              </li>
              <li style="color: #ffffff !important;">
                <h4 class="sub-step-title">3️⃣ Connectez-vous :</h4>
                Entrez vos identifiants puis cliquez sur <strong>Connexion</strong>.
              </li>
            </ul>
            <div class="action-box">
              <span class="badge-bravo"><span class="badge-icon">👏🏻</span> BRAVO</span><br>
              <span style="color: #ffffff !important; font-weight: bold;">Votre compte est créé !</span> <span style="color: #ffffff !important;">Passez à l'étape suivante pour rejoindre une table.</span>
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
          <div class="step-media">[Image 1 : Liste des parties publiques]</div>
          <div>
            <h4 class="sub-step-title">Rejoindre une partie publique</h4>
            <p style="color: #ffffff !important; margin: 0 !important;">Une fois connecté, vous verrez la liste des parties publiques disponibles. Choisissez-en une pour vous installer ou simplement observer la partie.</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Invitation par lien]</div>
          <div>
            <h4 class="sub-step-title">Rejoindre une partie privée</h4>
            <p style="color: #ffffff !important; margin: 0 !important;">La plupart du temps, le Conteur vous enverra un lien direct. Il suffit de cliquer dessus :<br>
            <strong style="color: #ffd97d !important; font-size: 16px;">https://botc.app/join/66666666</strong></p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Option Partie Privée]</div>
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
          <div class="step-media">[Image 1 : Cliquer sur un siège]</div>
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Une fois arrivé dans le village, cliquez sur un siège libre autour du cercle pour vous y installer.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 4 -->
    <div id="step-4" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">4</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">CONFIGURER CAMÉRA & MICRO</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Menu Réglages]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur la touche <span class="key-cap">Q</span> de votre clavier.</span>
              <span style="color: #ffd97d !important; font-weight: 900 !important; font-style: italic !important; margin: 10px 0 !important; display: block !important;">— OU —</span>
              <span style="color: #ffffff !important;">Cliquez sur l'icône d'engrenage ⚙️.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Onglet Chat]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur le 3ème onglet (<strong style="color: #ffd97d !important;">Chat / Audio</strong>).</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Configuration]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur <strong>Lancer la configuration</strong> puis sur <strong>Démarrer</strong> dans la fenêtre qui s'ouvre.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Test caméra et micro]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Sélectionnez votre caméra et votre microphone. Quand le micro fonctionne, des <strong style="color: #ffd97d !important;">barres jaunes</strong> bougent quand vous parlez. Cliquez sur <strong>Fermer</strong> quand vous avez terminé.</span>
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
          <div class="step-media">[Image 1 : Main levée]</div>
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
          <div class="step-media">[Image 1 : Notification dans le menu Vocal]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Si un joueur veut discuter en privé avec vous, un signal sonore retentit et son nom apparaît dans l'onglet <strong style="color: #ffd97d !important;">Vocal</strong> à gauche. Cliquez sur son nom pour accepter la discussion.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Salon privé]</div>
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
          <div class="step-media">[Image 1 : Touche Entrée]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur la touche <span class="key-cap">ENTRÉE</span>.</span>
              <span style="color: #ffd97d !important; font-weight: 900 !important; font-style: italic !important; margin: 10px 0 !important; display: block !important;">— OU —</span>
              <span style="color: #ffffff !important;">Dans l'onglet <strong style="color: #ffd97d !important;">Vocal</strong>, cliquez sur <strong>Demander un chat privé</strong>.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Bulle sur joueur]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez directement sur l'icône de bulle 💬 à côté du joueur que vous souhaitez contacter.</span>
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
          <div class="step-media">[Image 1 : Enveloppe]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Cliquez sur l'icône d'enveloppe 📩 pour chuchoter par écrit à vos <strong>voisins directs</strong> ou au <strong>Conteur</strong>.</span>
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Onglet Texte]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur la touche <span class="key-cap">TAB</span> pour ouvrir rapidement le panneau de texte.</span>
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
          <div class="step-media">[Image 1 : Réglages Utilisateur]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur <span class="key-cap">Q</span> pour ouvrir les réglages, puis cliquez sur le 2ème onglet (<strong style="color: #ffd97d !important;">Utilisateur</strong>) pour modifier votre nom ou votre image de profil.</span>
            </div>
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
          <div class="step-media">[Image 1 : Option Libérer le siège]</div>
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur l'engrenage ⚙️ puis choisissez <strong>Libérer le siège</strong>. Vous resterez dans le salon en tant que Spectateur.</p>
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
          <div class="step-media">[Image 1 : Demande au Conteur]</div>
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
          <div class="step-media">[Image 1 : Option Quitter]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <span style="color: #ffffff !important;">Appuyez sur la touche <span class="key-cap">L</span> de votre clavier.</span>
              <span style="color: #ffd97d !important; font-weight: 900 !important; font-style: italic !important; margin: 10px 0 !important; display: block !important;">— OU —</span>
              <span style="color: #ffffff !important;">Cliquez sur l'engrenage ⚙️ puis choisissez <strong>Quitter la partie</strong>.</span>
            </div>
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
          <div class="step-media">[Image 1 : Onglet Personnages]</div>
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur l'onglet <strong style="color: #ffd97d !important;">Personnages</strong> pour afficher la liste des rôles du script. Un second clic affiche les détails complets.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 14 -->
    <div id="step-14" class="step-card">
      <div class="step-header">
        <div style="background: #fdf0a6 !important; color: #1a0f2b !important; width: 52px !important; height: 52px !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; font-weight: 900 !important; font-size: 26px !important; flex-shrink: 0 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;">14</div>
        <h2 style="color: #ffffff !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">PLACER DES JETONS & DES RAPPELS</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Modification d'un jeton]</div>
          <div>
            <p style="color: #ffffff !important; margin: 0 !important;">Cliquez sur le jeton d'un joueur pour le modifier. Cette note est <strong style="color: #ffd97d !important;">100 % personnelle</strong> : vous seul la voyez sur votre écran !</p>
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
          <div class="step-media">[Image 1 : Actualiser la page]</div>
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
          <div class="step-media">[Image 1 : Touche T]</div>
          <div>
            <div class="action-box">
              <span class="badge-afaire"><span class="badge-icon">★</span> À FAIRE</span><br>
              <p style="color: #ffffff !important; margin: 0 !important;">Appuyez sur la touche <span class="key-cap">T</span> de votre clavier. Vous êtes sans doute basculé en vue <strong style="color: #ffd97d !important;">Place du Village</strong> — réappuyez sur <span class="key-cap">T</span> pour revenir à la vue normale.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<hr class="explication">


<ul style="color:#f5f5f5; font-size:18px; line-height:1.7;">
  <li><a href="/botc-fr-bambi/" style="color:#5C2E1F; font-weight:bold; text-decoration:none;">Retour à l’accueil</a></li>
  <li><a href="./regles.html" style="color:#5C2E1F; font-weight:bold; text-decoration:none;">Règles du jeu</a></li>
</ul>

