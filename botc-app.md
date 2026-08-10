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
/* En-tête de page principal */
.guide-header {
  max-width: 1200px;
  margin: 20px auto 30px auto;
  padding: 0 10px;
}

.guide-tag {
  display: inline-block;
  background: rgba(255, 217, 125, 0.15);
  border: 1px solid #ffd97d;
  color: #ffd97d;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.guide-main-title {
  color: #fffdf0 !important;
  font-size: 42px !important;
  font-weight: 900 !important;
  font-style: italic !important;
  text-transform: uppercase !important;
  margin: 0 0 12px 0;
  text-shadow: 3px 3px 0px #000000, 1px 1px 0px #000000 !important;
  letter-spacing: 1px;
  line-height: 1.1;
}

.guide-subtitle {
  color: #e2d3f3 !important;
  font-size: 17px;
  line-height: 1.5;
  margin-bottom: 25px;
  max-width: 800px;
}

/* Bloc Vidéo Tuto */
.video-container-card {
  background: #1c102e;
  border: 1px solid #b58b52;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 35px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.6);
  max-width: 700px;
}

.video-badge {
  display: inline-block;
  background: #ff6b6b;
  color: #ffffff;
  font-size: 11px;
  font-weight: 900;
  padding: 3px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* Ratio 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 217, 125, 0.3);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Disposition générale du guide */
.guide-container {
  display: flex;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  color: #f0e2ca;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Sommaire latéral fixe */
.guide-sidebar {
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 20px;
  height: fit-content;
  background: #1c102e;
  border: 1px solid #ffd97d;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.6);
  max-height: 90vh;
  overflow-y: auto;
}

.guide-sidebar h3 {
  color: #ffd97d !important;
  font-size: 14px;
  font-weight: 800;
  font-style: italic;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 22px 0 10px 0;
  border-bottom: 1px solid rgba(255, 217, 125, 0.3);
  padding-bottom: 5px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.9);
}

.guide-sidebar h3:first-child {
  margin-top: 0;
}

.guide-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.guide-sidebar li {
  margin-bottom: 8px;
}

.guide-sidebar a {
  color: #ffffff !important; /* Texte de menu en Blanc Pur ultra lisible */
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  display: block;
  line-height: 1.3;
}

.guide-sidebar a:hover {
  color: #ffd97d !important;
  padding-left: 5px;
  text-shadow: 0 0 8px rgba(255, 217, 125, 0.6);
}

/* Zone de contenu principale */
.guide-content {
  flex-grow: 1;
}

/* Cartes d'étapes */
.step-card {
  background: #231538;
  border: 1px solid #b58b52;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  scroll-margin-top: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 22px;
}

/* CERCLE & NUMÉRO HAUTEMENT LISIBLE */
.step-number {
  background: #fdf0a6 !important;
  color: #1a0f2b !important;
  width: 52px !important;
  height: 52px !important;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900 !important;
  font-size: 26px !important;
  font-family: inherit;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.6);
}

/* TITRES STYLE MODÈLE : COULEUR CRÈME/BLANC LUMINEUX (PLUS AUCUN ROUGE) */
.step-title {
  color: #fffdf0 !important;
  font-size: 28px !important;
  font-weight: 900 !important;
  font-style: italic !important;
  text-transform: uppercase !important;
  margin: 0;
  text-shadow: 3px 3px 0px #000000, 1px 1px 0px #000000 !important;
  letter-spacing: 1px;
}

/* Sous-titres à l'intérieur des étapes */
.step-text h4 {
  color: #ffd97d !important;
  font-size: 18px !important;
  font-weight: 800 !important;
  margin-top: 0;
  margin-bottom: 8px;
}

/* Grille pour sous-étapes avec image + texte */
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

@media (max-width: 768px) {
  .guide-container {
    flex-direction: column;
  }
  .guide-sidebar {
    width: 100%;
    position: relative;
    top: 0;
  }
  .step-row {
    flex-direction: column;
  }
}

/* Emplacement Média / Image */
.step-media {
  width: 280px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(255, 217, 125, 0.4);
  overflow: hidden;
  background: #12091f;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a894b8;
  font-size: 13px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

/* Textes et encadrés - Couleur de corps très lisible */
.step-text {
  flex-grow: 1;
  color: #f0e2ca !important;
  font-size: 15px;
  line-height: 1.6;
}

.step-text strong {
  color: #ffe89c !important;
}

/* Encadré À FAIRE / ACTION */
.action-box {
  background: #160c24;
  border-left: 4px solid #ffd97d;
  border-radius: 6px;
  padding: 12px 15px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.action-badge {
  display: inline-block;
  background: #ffd97d;
  color: #1a0f2b;
  font-size: 11px;
  font-weight: 900;
  padding: 2px 8px;
  border-radius: 10px;
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

/* Touches de clavier */
.key-badge {
  background: #ffffff;
  color: #1a0f2b;
  padding: 2px 8px;
  border-radius: 5px;
  font-weight: 800;
  font-family: monospace;
  font-size: 13px;
  box-shadow: 0 2px 0 #9e8256, inset 0 -1px 0 #ccc;
  display: inline-block;
  border: 1px solid #ccc;
}

/* Séparateur - OU - */
.or-divider {
  color: #ff6b6b;
  font-weight: 900;
  font-style: italic;
  margin: 8px 0;
  display: block;
  letter-spacing: 1px;
}

html {
  scroll-behavior: smooth;
}
</style>

<!-- EN-TÊTE DU GUIDE -->
<div class="guide-header" markdown="0">
  <div class="guide-tag">GUIDE DU JOUEUR · BOTC.APP</div>
  <h1 class="guide-main-title">COMMENT JOUER SUR BOTC.APP</h1>
  <p class="guide-subtitle">
    Vous trouverez ici tout ce dont vous avez besoin pour rejoindre une partie, parler aux autres joueurs et gérer votre grimoire — sur l'application officielle en ligne de <strong>Blood on the Clocktower</strong>.
  </p>

  <!-- CARTE VIDÉO -->
  <div class="video-container-card">
    <div class="video-badge">▶ TUTO VIDÉO</div>
    <p style="margin-top: 0; font-weight: bold; color: #fffdf0;">Vous préférez une démonstration en vidéo ?</p>
    <div class="video-wrapper">
      <iframe src="https://www.youtube.com/embed/O2ksf5eTeSI" title="Tuto pour utiliser l'application BOTC" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="guide-container" markdown="0">

  <!-- SOMMAIRE LATÉRAL -->
  <nav class="guide-sidebar">
    <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="display: block; text-align: center; background: rgba(181,139,82,.25); border: 1px solid #ffd97d; border-radius: 8px; color: #ffd97d; font-weight: bold; padding: 10px; margin-bottom: 15px; text-decoration: none;">
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

  <!-- CONTENU PRINCIPAL DU GUIDE -->
  <div class="guide-content">

    <!-- ÉTAPE 1 -->
    <div id="step-1" class="step-card">
      <div class="step-header">
        <div class="step-number">1</div>
        <h2 class="step-title">S’ENREGISTRER SUR LE SITE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Formulaire d'inscription]</div>
          <div class="step-text">
            <p>Pour jouer avec l’application <strong>Blood 🩸 on the Clocktower 🕰️</strong>, vous devez créer un <strong>compte gratuit</strong>.</p>
            <ul style="list-style: none; padding-left: 0;">
              <li style="margin-bottom: 10px;">
                <strong>1️⃣ Rendez-vous sur le site officiel :</strong><br>
                ▫️ <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="color: #ffd97d !important; font-weight: bold; text-decoration: underline;">https://botc.app/login 🔗</a>
              </li>
              <li style="margin-bottom: 10px;">
                <strong>2️⃣ Cliquez sur Register :</strong> Remplissez les champs <em>(email, mot de passe, pseudo)</em>.<br>
                ➡️ <strong style="color: #ff6b6b !important;">Ne cliquez pas sur Patreon.</strong>
              </li>
              <li><strong>3️⃣ Connectez-vous :</strong> Entrez vos identifiants et cliquez sur <strong>Login</strong>.</li>
            </ul>
            <div class="action-box">
              <span class="action-badge">👏🏻 BRAVO</span><br>
              <strong>Votre compte est créé !</strong> Passez à l'étape suivante pour rejoindre une table.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 2 : REJOINDRE UNE PARTIE -->
    <div id="step-2" class="step-card">
      <div class="step-header">
        <div class="step-number">2</div>
        <h2 class="step-title">REJOINDRE UNE PARTIE</h2>
      </div>
      <div class="step-grid">
        <!-- 2A : Partie Publique -->
        <div class="step-row">
          <div class="step-media">[Image 1 : Liste des parties publiques]</div>
          <div class="step-text">
            <h4>Rejoindre une partie publique</h4>
            <p>Une fois connecté, vous verrez une liste de parties publiques disponibles. Elles varient selon la langue, la difficulté, la phase actuelle et le type de jeu. Choisissez-en une pour rejoindre en tant que spectateur ou pour jouer. Posez vos questions au Conteur si besoin.</p>
          </div>
        </div>
        <!-- 2B : Partie Privée avec Lien -->
        <div class="step-row">
          <div class="step-media">[Image 2 : Invitation par lien]</div>
          <div class="step-text">
            <h4>Rejoindre une partie privée</h4>
            <p>La plupart des Conteurs vous invitent avec un lien, et c’est tout ce dont vous avez besoin. Cela ressemble à :<br>
            <strong style="color: #ffd97d; font-size: 16px;">https://botc.app/join/66666666</strong></p>
          </div>
        </div>
        <!-- 2C : Partie Privée avec Code -->
        <div class="step-row">
          <div class="step-media">[Image 3 : Option Join Private Game]</div>
          <div class="step-text">
            <span class="or-divider">— OU —</span>
            <p>Cliquez sur <strong>Rejoindre une partie privée (Join Private Game)</strong> et entrez le code de la partie privée fourni par votre Conteur.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 3 -->
    <div id="step-3" class="step-card">
      <div class="step-header">
        <div class="step-number">3</div>
        <h2 class="step-title">PRENDRE UN SIÈGE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Cliquer sur un siège]</div>
          <div class="step-text">
            Une fois dans le village, cliquez sur un siège vide autour de la table pour vous y installer.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 4 : CONFIGURER CAMÉRA & MICRO (8 IMAGES) -->
    <div id="step-4" class="step-card">
      <div class="step-header">
        <div class="step-number">4</div>
        <h2 class="step-title">CONFIGURER CAMÉRA & MICRO</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Ouvrir le menu Réglages]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Appuyez sur <span class="key-badge">Q</span> sur votre clavier.
              <span class="or-divider">— OU —</span>
              Cliquez sur l'engrenage ⚙️.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Onglet 3]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur le 3ème onglet.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Bouton Settings]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur <strong>Paramètres (Settings)</strong> ou appuyez sur <span class="key-badge">Q</span>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Onglet Chat/Média]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur le 3ème onglet, <strong>Chat</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 5 : Lancer la configuration]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur <strong>Lancer la configuration (Run the Setup)</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 6 : Bouton Démarrer]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur <strong>Démarrer (Start)</strong> dans la fenêtre pop-up.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 7 : Sélecteur de périphériques]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Choisissez la caméra et le micro à utiliser. Lorsque la caméra est bien réglée, <strong>vous vous verrez à l'écran</strong> ; quand le micro est bon, vous verrez des <strong>barres jaunes</strong> bouger au son de votre voix. Une fois terminé, cliquez sur <strong>Fermer (Close)</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 8 : Icônes micro/caméra en haut]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              De retour sur la Place du Village, vous commencerez avec <strong>le micro coupé et la caméra désactivée</strong>. Rallumez-les à l'aide des boutons situés dans le coin supérieur droit.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 5 -->
    <div id="step-5" class="step-card">
      <div class="step-header">
        <div class="step-number">5</div>
        <h2 class="step-title">LEVER LA MAIN</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Main levée]</div>
          <div class="step-text">
            <p>Levez la main pour indiquer que vous souhaitez prendre la parole — cette fonction sert aussi à voter lors des exécutions.</p>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Appuyez sur la touche <span class="key-badge">ESPACE</span> de votre clavier pour lever ou baisser la main.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 6 : RÉPONDRE À UN CHAT PRIVÉ (2 IMAGES) -->
    <div id="step-6" class="step-card">
      <div class="step-header">
        <div class="step-number">6</div>
        <h2 class="step-title">RÉPONDRE À UNE DEMANDE DE CHAT PRIVÉ</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Notification dans l'onglet Vocal]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Quand quelqu'un souhaite discuter en privé avec vous, vous entendrez un petit son ("ding") et son nom apparaîtra dans l'onglet <strong>Vocal</strong> à gauche. Cliquez sur son nom pour accepter.<br>
              <small><em>(Par défaut, aucun son n'est émis pendant la phase de Nuit.)</em></small>
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Salon privé]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Personne d'autre ne peut entendre une conversation privée, bien qu'ils voient toujours votre caméra (sauf la Nuit). Le Conteur et les spectateurs ayant accès au Grimoire peuvent rejoindre la discussion à tout moment. Pour quitter, cliquez sur <strong>Quitter</strong> ou appuyez sur <span class="key-badge">RETOUR ARRIÈRE</span> (Backspace).
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 7 : DEMANDER UN CHAT PRIVÉ (2 IMAGES) -->
    <div id="step-7" class="step-card">
      <div class="step-header">
        <div class="step-number">7</div>
        <h2 class="step-title">DEMANDER UN CHAT PRIVÉ</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Raccourci ou bouton Vocal]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Appuyez sur <span class="key-badge">ENTRÉE</span>.
              <span class="or-divider">— OU —</span>
              Dans l'onglet <strong>Vocal</strong>, cliquez sur <strong>Demander un chat privé (Request Private Chat)</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Bulle de dialogue sur un joueur]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur la bulle de dialogue 💬 à côté d'un joueur pour lui demander une discussion privée.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 8 : ENVOYER UN CHUCHOTEMENT (4 IMAGES) -->
    <div id="step-8" class="step-card">
      <div class="step-header">
        <div class="step-number">8</div>
        <h2 class="step-title">ENVOYER UN CHUCHOTEMENT (WHISPER)</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Icône enveloppe]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur l'enveloppe 📩 pour envoyer un chuchotement par écrit. Vous ne pouvez chuchoter qu'à vos <strong>voisins directs</strong> et au <strong>Conteur</strong>. Une animation d'enveloppe se joue — sa taille varie selon la longueur de votre message.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Onglet Texte]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Les notifications de nouveaux messages s'affichent dans l'onglet <strong>Texte</strong>. Appuyez sur <span class="key-badge">TAB</span> pour l'ouvrir.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Chat public]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Il existe également un chat public visible par tout le monde. Les messages y disparaissent après un certain temps.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Animation d'envoi]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              L'enveloppe s’agrandit proportionnellement à la longueur du texte envoyé à votre voisin.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 9 : CHANGER DE NOM & D'AVATAR (4 IMAGES) -->
    <div id="step-9" class="step-card">
      <div class="step-header">
        <div class="step-number">9</div>
        <h2 class="step-title">CHANGER DE NOM & D'AVATAR</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Touche Q / Menu]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Appuyez sur <span class="key-badge">Q</span> pour ouvrir le menu des réglages de l'application.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Onglet Utilisateur]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur le 2ème onglet, <strong>Utilisateur (User)</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Changer le nom]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur votre nom pour le modifier.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Changer l'avatar]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur votre avatar pour changer votre photo de profil <em>(nécessite un abonnement Patreon)</em>.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 10 : QUITTER SON SIÈGE (2 IMAGES) -->
    <div id="step-10" class="step-card">
      <div class="step-header">
        <div class="step-number">10</div>
        <h2 class="step-title">QUITTER SON SIÈGE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Engrenage ⚙️]</div>
          <div class="step-text">
            Cliquez sur la roue dentée ⚙️ (Engrenage).
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Option Libérer le siège]</div>
          <div class="step-text">
            Cliquez sur <strong>Libérer le siège (Stand up / Leave seat)</strong>. Vous resterez dans la partie en tant que Spectateur — vous pourrez toujours chuchoter au Conteur et discuter avec les autres spectateurs.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 11 -->
    <div id="step-11" class="step-card">
      <div class="step-header">
        <div class="step-number">11</div>
        <h2 class="step-title">DEMANDER L'ACCÈS AU GRIMOIRE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Menu Conteur]</div>
          <div class="step-text">
            Cliquez sur le Conteur pour ouvrir son menu, puis choisissez <strong>Demander l'accès au Grimoire</strong>. S'il accepte, vous pourrez voir le rôle de chacun et rejoindre les chats privés — mais vous ne pourrez plus envoyer de messages ni parler aux joueurs.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 12 : QUITTER LA PARTIE (2 IMAGES) -->
    <div id="step-12" class="step-card">
      <div class="step-header">
        <div class="step-number">12</div>
        <h2 class="step-title">QUITTER LA PARTIE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Touche L]</div>
          <div class="step-text">
            Appuyez sur la touche <span class="key-badge">L</span> de votre clavier (une confirmation apparaîtra).
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Option Quitter dans le menu]</div>
          <div class="step-text">
            <span class="or-divider">— OU —</span>
            Cliquez sur l'engrenage ⚙️, puis sélectionnez <strong>Quitter la partie (Leave Game)</strong>.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 13 : OUVRIR L'ONGLET RÔLES (3 IMAGES) -->
    <div id="step-13" class="step-card">
      <div class="step-header">
        <div class="step-number">13</div>
        <h2 class="step-title">OUVRIR L'ONGLET RÔLES</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Premier clic]</div>
          <div class="step-text">
            Cliquez sur l'onglet <strong>Personnages (Characters)</strong> pour ouvrir une liste simplifiée des rôles du script.
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Second clic]</div>
          <div class="step-text">
            Cliquez une seconde fois sur cet onglet pour afficher le script complet détaillé.
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Troisième clic]</div>
          <div class="step-text">
            Cliquez une troisième fois pour fermer le panneau.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 14 : PLACER DES JETONS & DES RAPPELS (6 IMAGES) -->
    <div id="step-14" class="step-card">
      <div class="step-header">
        <div class="step-number">14</div>
        <h2 class="step-title">PLACER DES JETONS & DES RAPPELS</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Changer un jeton]</div>
          <div class="step-text">
            Vous pouvez modifier le jeton d'un joueur en cliquant directement dessus.
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Prise de note personnelle]</div>
          <div class="step-text">
            Changer le jeton d'un joueur est une action <strong>purement personnelle</strong> : vous seul le voyez. Cela ne modifie le rôle de personne (même pas le vôtre) — c'est un outil idéal pour prendre des notes !
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Survol du cercle intérieur]</div>
          <div class="step-text">
            Pour ajouter plusieurs jetons de rappel à un joueur, survolez son cercle intérieur jusqu'à ce qu'un <strong>jeton violet vierge</strong> apparaisse, puis cliquez dessus.
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Sélection du rappel]</div>
          <div class="step-text">
            Choisissez n'importe quel jeton de rappel présent dans la partie.
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 5 : Rappels personnalisés]</div>
          <div class="step-text">
            Vous pouvez également créer vos propres <strong>jetons de rappel personnalisés</strong>.
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 6 : Exemples pratiques]</div>
          <div class="step-text">
            Parfait pour noter les prétentions multiples, les informations du Savant, la cible de la Commère... et bien plus encore !
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 15 : DÉPANNAGE CAMÉRA / MICRO (PRÉCISION WINDOWS & MAC) -->
    <div id="step-15" class="step-card">
      <div class="step-header">
        <div class="step-number">15</div>
        <h2 class="step-title">CAMÉRA OU MICRO QUI NE FONCTIONNE PAS ?</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Rafraîchir la page / Autorisations]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Si vous rencontrez un problème audio ou vidéo, la première étape est de <strong>rafraîchir la page web</strong> :
              <ul style="margin-top: 8px; margin-bottom: 8px; padding-left: 20px;">
                <li><strong>Sur Windows / Linux :</strong> Appuyez sur <span class="key-badge">F5</span> ou forcez avec <span class="key-badge">CTRL</span> + <span class="key-badge">F5</span>.</li>
                <li><strong>Sur Mac OS :</strong> Cliquez sur le bouton <strong>« Actualiser cette page » 🔄</strong> (la petite flèche qui tourne en rond à côté de la barre d'adresse de votre navigateur) ou faites <span class="key-badge">⌘ CMD</span> + <span class="key-badge">R</span>.</li>
              </ul>
              Vérifiez aussi les autorisations de votre navigateur (icône de cadenas 🔒 à gauche de l'URL) et assurez-vous que votre casque n'est pas coupé électriquement par un bouton physique.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 16 -->
    <div id="step-16" class="step-card">
      <div class="step-header">
        <div class="step-number">16</div>
        <h2 class="step-title">IMPOSSIBLE DE VOIR VOTRE JETON ?</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Touche T / Vue Town Square]</div>
          <div class="step-text">
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Appuyez sur la touche <span class="key-badge">T</span> de votre clavier. Vous êtes probablement basculé sur la vue <strong>Town Square (Place du Village)</strong> — réappuyez sur <span class="key-badge">T</span> pour revenir en arrière.
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

