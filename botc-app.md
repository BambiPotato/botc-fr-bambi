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
/* Style global et correctifs de priorité */
.guide-header-title {
  color: #1c102e !important; /* Sombre sur fond clair */
  font-size: 38px !important;
  font-weight: 900 !important;
  font-style: italic !important;
  text-transform: uppercase !important;
  margin: 10px 0 !important;
}

.guide-header-sub {
  color: #2b1a3f !important;
  font-size: 16px !important;
  line-height: 1.5 !important;
}

.guide-tag-badge {
  display: inline-block;
  background: #1c102e !important;
  color: #fdf0a6 !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: 1.5px !important;
  padding: 4px 12px !important;
  border-radius: 4px !important;
  text-transform: uppercase !important;
}

/* CARTE D'ÉTAPE (FOND SOMBRE VIOLET) */
.step-card {
  background: #231538 !important;
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

.step-number {
  background: #fdf0a6 !important;
  color: #1a0f2b !important;
  width: 52px !important;
  height: 52px !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-weight: 900 !important;
  font-size: 26px !important;
  flex-shrink: 0 !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;
}

/* RÈGLE ABSOLUE POUR TOUT CE QUI EST DANS LES CARTES SOMBRES */
.step-card h2, .step-card h3, .step-card h4, .step-title {
  color: #fffdf0 !important; /* CRÈME ULTRA LISIBLE */
  text-shadow: 2px 2px 0px #000000 !important;
}

.step-card p, .step-card li, .step-card span {
  color: #f4ebd9 !important; /* TEXTE CRÈME CLAIR */
}

/* Disposition */
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

.guide-sidebar a {
  color: #ffffff !important;
  text-decoration: none !important;
  font-size: 14px !important;
  display: block !important;
  margin-bottom: 8px !important;
}

.guide-content {
  flex-grow: 1;
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
  background: #160c24 !important;
  border-left: 4px solid #ffd97d !important;
  border-radius: 6px;
  padding: 12px 15px;
  margin: 10px 0;
}

.action-badge {
  background: #ffd97d !important;
  color: #1a0f2b !important;
  font-size: 11px !important;
  font-weight: 900 !important;
  padding: 2px 8px;
  border-radius: 10px;
  text-transform: uppercase;
}

.key-badge {
  background: #ffffff !important;
  color: #1a0f2b !important;
  padding: 2px 8px;
  border-radius: 5px;
  font-weight: 800;
  font-family: monospace;
  font-size: 13px;
}

.or-divider {
  color: #ff6b6b !important;
  font-weight: 900 !important;
  font-style: italic;
  margin: 8px 0;
  display: block;
}

.video-card {
  background: #1c102e !important;
  border: 1px solid #b58b52;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  max-width: 700px;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
}

.video-wrapper iframe {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%; border: 0;
}

@media (max-width: 768px) {
  .guide-container { flex-direction: column; }
  .guide-sidebar { width: 100%; }
  .step-row { flex-direction: column; }
}
</style>

<!-- EN-TÊTE EN HAUT DE PAGE (SUR FOND CLAIR) -->
<div style="max-width: 1200px; margin: 20px auto 30px auto; padding: 0 10px;" markdown="0">
  <span class="guide-tag-badge">GUIDE DU JOUEUR · BOTC.APP</span>
  <h1 class="guide-header-title">COMMENT JOUER SUR BOTC.APP</h1>
  <p class="guide-header-sub">
    Vous trouverez ici tout ce dont vous avez besoin pour rejoindre une partie, parler aux autres joueurs et gérer votre grimoire — sur l'application officielle en ligne de <strong>Blood on the Clocktower</strong>.
  </p>

  <!-- CARTE VIDÉO -->
  <div class="video-card">
    <span style="background: #ff6b6b; color: #fff; font-size: 11px; font-weight: 900; padding: 3px 10px; border-radius: 4px; text-transform: uppercase;">▶ TUTO VIDÉO</span>
    <h3 style="color: #ffffff !important; font-size: 20px !important; margin: 12px 0 !important; font-weight: 800 !important;">Vous préférez une démonstration en vidéo ?</h3>
    <div class="video-wrapper">
      <iframe src="https://www.youtube.com/embed/O2ksf5eTeSI" title="Tuto pour utiliser l'application BOTC" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="guide-container" markdown="0">

  <!-- SOMMAIRE LATÉRAL -->
  <nav class="guide-sidebar">
    <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="text-align: center; background: rgba(181,139,82,.25); border: 1px solid #ffd97d; border-radius: 8px; color: #ffd97d !important; font-weight: bold; padding: 10px; margin-bottom: 15px;">
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
        <div class="step-number">1</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">S’ENREGISTRER SUR LE SITE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Formulaire d'inscription]</div>
          <div>
            <p style="color: #f4ebd9 !important;">Pour jouer avec l’application <strong>Blood 🩸 on the Clocktower 🕰️</strong>, vous devez créer un <strong>compte gratuit</strong>.</p>
            <ul style="list-style: none; padding-left: 0;">
              <li style="margin-bottom: 10px; color: #f4ebd9 !important;">
                <strong style="color: #ffd97d !important;">1️⃣ Rendez-vous sur le site officiel :</strong><br>
                ▫️ <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="color: #ffd97d !important; font-weight: bold; text-decoration: underline;">https://botc.app/login 🔗</a>
              </li>
              <li style="margin-bottom: 10px; color: #f4ebd9 !important;">
                <strong style="color: #ffd97d !important;">2️⃣ Cliquez sur Register :</strong> Remplissez les champs <em>(email, mot de passe, pseudo)</em>.<br>
                ➡️ <strong style="color: #ff6b6b !important;">Ne cliquez pas sur Patreon.</strong>
              </li>
              <li style="color: #f4ebd9 !important;"><strong style="color: #ffd97d !important;">3️⃣ Connectez-vous :</strong> Entrez vos identifiants et cliquez sur <strong>Login</strong>.</li>
            </ul>
            <div class="action-box">
              <span class="action-badge">👏🏻 BRAVO</span><br>
              <strong style="color: #ffffff !important;">Votre compte est créé !</strong> Passez à l'étape suivante pour rejoindre une table.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 2 -->
    <div id="step-2" class="step-card">
      <div class="step-header">
        <div class="step-number">2</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">REJOINDRE UNE PARTIE</h2>
      </div>
      <div class="step-grid">
        <!-- 2A -->
        <div class="step-row">
          <div class="step-media">[Image 1 : Liste des parties publiques]</div>
          <div>
            <h4 style="color: #fffdf0 !important; font-size: 20px !important; margin: 0 0 8px 0 !important; font-weight: 800 !important;">Rejoindre une partie publique</h4>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Une fois connecté, vous verrez une liste de parties publiques disponibles. Elles varient selon la langue, la difficulté, la phase actuelle et le type de jeu. Choisissez-en une pour rejoindre en tant que spectateur ou pour jouer. Posez vos questions au Conteur si besoin.</p>
          </div>
        </div>
        <!-- 2B -->
        <div class="step-row">
          <div class="step-media">[Image 2 : Invitation par lien]</div>
          <div>
            <h4 style="color: #fffdf0 !important; font-size: 20px !important; margin: 0 0 8px 0 !important; font-weight: 800 !important;">Rejoindre une partie privée</h4>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">La plupart des Conteurs vous invitent avec un lien, et c’est tout ce dont vous avez besoin. Cela ressemble à :<br>
            <strong style="color: #ffd97d !important; font-size: 16px;">https://botc.app/join/66666666</strong></p>
          </div>
        </div>
        <!-- 2C -->
        <div class="step-row">
          <div class="step-media">[Image 3 : Option Join Private Game]</div>
          <div>
            <span class="or-divider">— OU —</span>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Cliquez sur <strong>Rejoindre une partie privée (Join Private Game)</strong> et entrez le code de la partie privée fourni par votre Conteur.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 3 -->
    <div id="step-3" class="step-card">
      <div class="step-header">
        <div class="step-number">3</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">PRENDRE UN SIÈGE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Cliquer sur un siège]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Une fois dans le village, cliquez sur un siège vide autour de la table pour vous y installer.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 4 -->
    <div id="step-4" class="step-card">
      <div class="step-header">
        <div class="step-number">4</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">CONFIGURER CAMÉRA & MICRO</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Ouvrir le menu Réglages]</div>
          <div>
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
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur le 3ème onglet.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Bouton Settings]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur <strong>Paramètres (Settings)</strong> ou appuyez sur <span class="key-badge">Q</span>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Onglet Chat/Média]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur le 3ème onglet, <strong>Chat</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 5 : Lancer la configuration]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur <strong>Lancer la configuration (Run the Setup)</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 6 : Bouton Démarrer]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur <strong>Démarrer (Start)</strong> dans la fenêtre pop-up.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 7 : Sélecteur de périphériques]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Choisissez la caméra et le micro à utiliser. Lorsque la caméra est bien réglée, <strong>vous vous verrez à l'écran</strong> ; quand le micro est bon, vous verrez des <strong>barres jaunes</strong> bouger au son de votre voix. Une fois terminé, cliquez sur <strong>Fermer (Close)</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 8 : Icônes micro/caméra en haut]</div>
          <div>
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
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">LEVER LA MAIN</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Main levée]</div>
          <div>
            <p style="color: #f4ebd9 !important;">Levez la main pour indiquer que vous souhaitez prendre la parole — cette fonction sert aussi à voter lors des exécutions.</p>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Appuyez sur la touche <span class="key-badge">ESPACE</span> de votre clavier pour lever ou baisser la main.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 6 -->
    <div id="step-6" class="step-card">
      <div class="step-header">
        <div class="step-number">6</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">RÉPONDRE À UNE DEMANDE DE CHAT PRIVÉ</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Notification dans l'onglet Vocal]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Quand quelqu'un souhaite discuter en privé avec vous, vous entendrez un petit son ("ding") et son nom apparaîtra dans l'onglet <strong>Vocal</strong> à gauche. Cliquez sur son nom pour accepter.<br>
              <small><em>(Par défaut, aucun son n'est émis pendant la phase de Nuit.)</em></small>
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Salon privé]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Personne d'autre ne peut entendre une conversation privée, bien qu'ils voient toujours votre caméra (sauf la Nuit). Le Conteur et les spectateurs ayant accès au Grimoire peuvent rejoindre la discussion à tout moment. Pour quitter, cliquez sur <strong>Quitter</strong> ou appuyez sur <span class="key-badge">RETOUR ARRIÈRE</span> (Backspace).
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 7 -->
    <div id="step-7" class="step-card">
      <div class="step-header">
        <div class="step-number">7</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">DEMANDER UN CHAT PRIVÉ</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Raccourci ou bouton Vocal]</div>
          <div>
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
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur la bulle de dialogue 💬 à côté d'un joueur pour lui demander une discussion privée.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 8 -->
    <div id="step-8" class="step-card">
      <div class="step-header">
        <div class="step-number">8</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">ENVOYER UN CHUCHOTEMENT (WHISPER)</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Icône enveloppe]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur l'enveloppe 📩 pour envoyer un chuchotement par écrit. Vous ne pouvez chuchoter qu'à vos <strong>voisins directs</strong> et au <strong>Conteur</strong>. Une animation d'enveloppe se joue — sa taille varie selon la longueur de votre message.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Onglet Texte]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Les notifications de nouveaux messages s'affichent dans l'onglet <strong>Texte</strong>. Appuyez sur <span class="key-badge">TAB</span> pour l'ouvrir.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Chat public]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Il existe également un chat public visible par tout le monde. Les messages y disparaissent après un certain temps.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Animation d'envoi]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              L'enveloppe s’agrandit proportionnellement à la longueur du texte envoyé à votre voisin.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 9 -->
    <div id="step-9" class="step-card">
      <div class="step-header">
        <div class="step-number">9</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">CHANGER DE NOM & D'AVATAR</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Touche Q / Menu]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Appuyez sur <span class="key-badge">Q</span> pour ouvrir le menu des réglages de l'application.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Onglet Utilisateur]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur le 2ème onglet, <strong>Utilisateur (User)</strong>.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Changer le nom]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur votre nom pour le modifier.
            </div>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Changer l'avatar]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              Cliquez sur votre avatar pour changer votre photo de profil <em>(nécessite un abonnement Patreon)</em>.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 10 -->
    <div id="step-10" class="step-card">
      <div class="step-header">
        <div class="step-number">10</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">QUITTER SON SIÈGE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Engrenage ⚙️]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Cliquez sur la roue dentée ⚙️ (Engrenage).</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Option Libérer le siège]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Cliquez sur <strong>Libérer le siège (Stand up / Leave seat)</strong>. Vous resterez dans la partie en tant que Spectateur — vous pourrez toujours chuchoter au Conteur et discuter avec les autres spectateurs.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 11 -->
    <div id="step-11" class="step-card">
      <div class="step-header">
        <div class="step-number">11</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">DEMANDER L'ACCÈS AU GRIMOIRE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Menu Conteur]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Cliquez sur le Conteur pour ouvrir son menu, puis choisissez <strong>Demander l'accès au Grimoire</strong>. S'il accepte, vous pourrez voir le rôle de chacun et rejoindre les chats privés — mais vous ne pourrez plus envoyer de messages ni parler aux joueurs.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 12 -->
    <div id="step-12" class="step-card">
      <div class="step-header">
        <div class="step-number">12</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">QUITTER LA PARTIE</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Touche L]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Appuyez sur la touche <span class="key-badge">L</span> de votre clavier (une confirmation apparaîtra).</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Option Quitter dans le menu]</div>
          <div>
            <span class="or-divider">— OU —</span>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Cliquez sur l'engrenage ⚙️, puis sélectionnez <strong>Quitter la partie (Leave Game)</strong>.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 13 -->
    <div id="step-13" class="step-card">
      <div class="step-header">
        <div class="step-number">13</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">OUVRIR L'ONGLET RÔLES</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Premier clic]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Cliquez sur l'onglet <strong>Personnages (Characters)</strong> pour ouvrir une liste simplifiée des rôles du script.</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Second clic]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Cliquez une seconde fois sur cet onglet pour afficher le script complet détaillé.</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Troisième clic]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Cliquez une troisième fois pour fermer le panneau.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 14 -->
    <div id="step-14" class="step-card">
      <div class="step-header">
        <div class="step-number">14</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">PLACER DES JETONS & DES RAPPELS</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Changer un jeton]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Vous pouvez modifier le jeton d'un joueur en cliquant directement dessus.</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 2 : Prise de note personnelle]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Changer le jeton d'un joueur est une action <strong>purement personnelle</strong> : vous seul le voyez. Cela ne modifie le rôle de personne (même pas le vôtre) — c'est un outil idéal pour prendre des notes !</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 3 : Survol du cercle intérieur]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Pour ajouter plusieurs jetons de rappel à un joueur, survolez son cercle intérieur jusqu'à ce qu'un <strong>jeton violet vierge</strong> apparaisse, puis cliquez dessus.</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 4 : Sélection du rappel]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Choisissez n'importe quel jeton de rappel présent dans la partie.</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 5 : Rappels personnalisés]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Vous pouvez également créer vos propres <strong>jetons de rappel personnalisés</strong>.</p>
          </div>
        </div>
        <div class="step-row">
          <div class="step-media">[Image 6 : Exemples pratiques]</div>
          <div>
            <p style="color: #f4ebd9 !important; margin: 0 !important;">Parfait pour noter les prétentions multiples, les informations du Savant, la cible de la Commère... et bien plus encore !</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 15 -->
    <div id="step-15" class="step-card">
      <div class="step-header">
        <div class="step-number">15</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">CAMÉRA OU MICRO QUI NE FONCTIONNE PAS ?</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Rafraîchir la page / Autorisations]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              <p style="color: #f4ebd9 !important; margin: 5px 0 !important;">Si vous rencontrez un problème audio ou vidéo, la première étape est de <strong>rafraîchir la page web</strong> :</p>
              <ul style="margin-top: 8px; margin-bottom: 8px; padding-left: 20px;">
                <li style="color: #f4ebd9 !important;"><strong>Sur Windows / Linux :</strong> Appuyez sur <span class="key-badge">F5</span> ou forcez avec <span class="key-badge">CTRL</span> + <span class="key-badge">F5</span>.</li>
                <li style="color: #f4ebd9 !important;"><strong>Sur Mac OS :</strong> Cliquez sur le bouton <strong>« Actualiser cette page » 🔄</strong> (la petite flèche qui tourne en rond) ou faites <span class="key-badge">⌘ CMD</span> + <span class="key-badge">R</span>.</li>
              </ul>
              <p style="color: #f4ebd9 !important; margin: 0 !important;">Vérifiez aussi les autorisations de votre navigateur (icône de cadenas 🔒 à gauche de l'URL) et assurez-vous que votre casque n'est pas coupé électriquement par un bouton physique.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 16 -->
    <div id="step-16" class="step-card">
      <div class="step-header">
        <div class="step-number">16</div>
        <h2 style="color: #fffdf0 !important; font-size: 26px !important; font-weight: 900 !important; font-style: italic !important; margin: 0 !important;">IMPOSSIBLE DE VOIR VOTRE JETON ?</h2>
      </div>
      <div class="step-grid">
        <div class="step-row">
          <div class="step-media">[Image 1 : Touche T / Vue Town Square]</div>
          <div>
            <div class="action-box">
              <span class="action-badge">★ À FAIRE</span><br>
              <p style="color: #f4ebd9 !important; margin: 0 !important;">Appuyez sur la touche <span class="key-badge">T</span> de votre clavier. Vous êtes probablement basculé sur la vue <strong>Town Square (Place du Village)</strong> — réappuyez sur <span class="key-badge">T</span> pour revenir en arrière.</p>
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

