---
layout: default
title: Guide d'utilisation de BOTC App
description: Tutoriel complet pour jouer à Blood on the Clocktower sur l'application officielle.
image: /images/logogold.png
---


<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>


<hr class="explication">


<style>
/* Disposition générale */
.guide-container {
  display: flex;
  gap: 30px;
  max-width: 1200px;
  margin: 30px auto;
  color: #f0e2ca;
  font-family: inherit;
}

/* Sommaire latéral fixe à gauche */
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

/* TITRES DE CATÉGORIES DANS LE SOMMAIRE */
.guide-sidebar h3 {
  color: #ffd97d !important; /* Jaune/Doré éclatant */
  font-size: 15px;
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
  color: #e2d3f3 !important;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  display: block;
  line-height: 1.3;
}

.guide-sidebar a:hover {
  color: #ffffff !important;
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
  margin-bottom: 25px;
  scroll-margin-top: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 18px;
}

.step-number {
  background: #ffd97d; /* Pastille Jaune */
  color: #1a0f2b;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 20px;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(0,0,0,0.5);
}

/* FIX DES TITRES PRINCIPAUX : Doré vif + Ombre nette */
.step-title {
  color: #ffd97d !important; /* Jaune lumineux comme la pastille ! */
  font-size: 24px !important;
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 2px 2px 4px #000000 !important;
  letter-spacing: 1px;
}

.step-body {
  display: flex;
  gap: 20px;
  align-items: flex-start;
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
  .step-body {
    flex-direction: column;
  }
}

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
}

.step-media img, .step-media video {
  width: 100%;
  height: auto;
  display: block;
}

/* FIX DU TEXTE PRINCIPAL : Blanc/Beige clair */
.step-text, .step-text p, .step-text li {
  color: #f0e2ca !important;
  font-size: 15px;
  line-height: 1.6;
}

.step-text strong {
  color: #ffe89c !important; /* Mots importants en doré très clair */
}

/* Encadré d'action */
.action-box {
  background: #160c24;
  border-left: 4px solid #ffd97d;
  border-radius: 6px;
  padding: 12px 15px;
  margin-top: 15px;
}

.action-badge {
  display: inline-block;
  background: #ffd97d;
  color: #1a0f2b;
  font-size: 11px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 10px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.key-badge {
  background: #f0e2ca;
  color: #1a0f2b;
  padding: 2px 7px;
  border-radius: 4px;
  font-weight: bold;
  font-family: monospace;
  font-size: 13px;
  box-shadow: 0 2px 0 #9e8256;
  display: inline-block;
}

html {
  scroll-behavior: smooth;
}
</style>

<!-- ÉTAPE 1 : CRÉATION DE COMPTE -->
    <div id="step-1" class="step-card">
      <div class="step-header">
        <div class="step-number">1</div>
        <h2 class="step-title">S’ENREGISTRER SUR LE SITE</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Formulaire d'inscription botc.app]</div>
        <div class="step-text">
          <p>Pour jouer avec l’application <strong>Blood 🩸 on the Clocktower 🕰️</strong>, vous devez créer un <strong>compte gratuit</strong>.</p>
          <p>Pour cela, <strong>suivez la procédure ci-dessous</strong> 😗 :</p>

          <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 12px;">
              <strong>1️⃣ Rendez-vous sur le site Blood on the Clocktower Online :</strong><br>
              ▫️ <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="color: #ffd97d !important; font-weight: bold; text-decoration: underline;">https://botc.app/login 🔗</a>
            </li>

            <li style="margin-bottom: 12px;">
              <strong>2️⃣ Cliquez sur Register :</strong><br>
              ▫️ Renseignez tous les champs demandés <em>(adresse e-mail, mot de passe, pseudo)</em>.<br>
              ➡️ <strong style="color: #ff6b6b !important;">Ne cliquez pas sur Patreon.</strong>
            </li>

            <li style="margin-bottom: 12px;">
              <strong>3️⃣ Cliquez sur Register</strong>
            </li>

            <li style="margin-bottom: 12px;">
              <strong>4️⃣ Une fois votre compte créé :</strong><br>
              Entrez votre adresse <strong>e-mail</strong> et votre <strong>mot de passe</strong>, puis cliquez sur <strong>Login</strong>.
            </li>
          </ul>

          <div class="action-box">
            <span class="action-badge">👏🏻 BRAVO</span><br>
            <strong>Vous venez de créer votre compte !</strong> Vous êtes prêt à passer à l'étape suivante pour rejoindre le village.
          </div>
        </div>
      </div>
    </div>



<div class="guide-container" markdown="0">

  <!-- SOMMAIRE LATÉRAL -->
  <nav class="guide-sidebar">
    <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="display: block; text-align: center; background: rgba(181,139,82,.25); border: 1px solid #b58b52; border-radius: 8px; color: #d4a76a; font-weight: bold; padding: 10px; margin-bottom: 15px; text-decoration: none;">
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
      <li><a href="#step-13">13. Onglet Personnages</a></li>
      <li><a href="#step-14">14. Jetons & Rappels</a></li>
    </ul>

    <h3>Dépannage</h3>
    <ul>
      <li><a href="#step-15">15. Caméra ou Micro en panne</a></li>
      <li><a href="#step-16">16. Jeton invisible / Introuvable</a></li>
    </ul>
  </nav>

  <!-- CONTENU PRINCIPAL -->
  <div class="guide-content">

    <!-- ÉTAPE 1 : CRÉATION DE COMPTE -->
    <div id="step-1" class="step-card">
      <div class="step-header">
        <div class="step-number">1</div>
        <h2 class="step-title">S’ENREGISTRER SUR LE SITE</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Formulaire d'inscription botc.app]</div>
        <div class="step-text">
          <p>Pour jouer avec l’application <strong>Blood 🩸 on the Clocktower 🕰️</strong>, vous devez créer un <strong>compte gratuit</strong>.</p>
          <p>Pour cela, <strong>suivez la procédure ci-dessous</strong> 😗 :</p>

          <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 12px;">
              <strong>1️⃣ Rendez-vous sur le site Blood on the Clocktower Online :</strong><br>
              ▫️ <a href="https://botc.app/login" target="_blank" rel="noopener noreferrer" style="color: #d4a76a; font-weight: bold; text-decoration: underline;">https://botc.app/login 🔗</a>
            </li>

            <li style="margin-bottom: 12px;">
              <strong>2️⃣ Cliquez sur Register :</strong><br>
              ▫️ Renseignez tous les champs demandés <em>(adresse e-mail, mot de passe, pseudo)</em>.<br>
              ➡️ <strong style="color: #d45b5b;">Ne cliquez pas sur Patreon.</strong>
            </li>

            <li style="margin-bottom: 12px;">
              <strong>3️⃣ Cliquez sur Register</strong>
            </li>

            <li style="margin-bottom: 12px;">
              <strong>4️⃣ Une fois votre compte créé :</strong><br>
              Entrez votre adresse <strong>e-mail</strong> et votre <strong>mot de passe</strong>, puis cliquez sur <strong>Login</strong>.
            </li>
          </ul>

          <div class="action-box">
            <span class="action-badge">👏🏻 BRAVO</span><br>
            <strong>Vous venez de créer votre compte !</strong> Vous êtes prêt à passer à l'étape suivante pour rejoindre le village.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 2 -->
    <div id="step-2" class="step-card">
      <div class="step-header">
        <div class="step-number">2</div>
        <h2 class="step-title">REJOINDRE UNE PARTIE</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Entrer l'ID de partie]</div>
        <div class="step-text">
          Entrez le lien ou l'identifiant de la partie fourni par votre Conteur pour accéder au village.
        </div>
      </div>
    </div>

    <!-- ÉTAPE 3 -->
    <div id="step-3" class="step-card">
      <div class="step-header">
        <div class="step-number">3</div>
        <h2 class="step-title">PRENDRE UN SIÈGE</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Cliquer sur un siège vide]</div>
        <div class="step-text">
          Une fois dans le village, cliquez sur un siège vide autour de la table pour vous y installer.
        </div>
      </div>
    </div>

    <!-- ÉTAPE 4 -->
    <div id="step-4" class="step-card">
      <div class="step-header">
        <div class="step-number">4</div>
        <h2 class="step-title">CONFIGURER CAMÉRA & MICRO</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Réglages média]</div>
        <div class="step-text">
          Autorisez votre navigateur à utiliser votre micro et votre caméra lorsque la fenêtre pop-up apparaît.
        </div>
      </div>
    </div>

    <!-- ÉTAPE 5 -->
    <div id="step-5" class="step-card">
      <div class="step-header">
        <div class="step-number">5</div>
        <h2 class="step-title">LEVER LA MAIN</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Animation : Main levée]</div>
        <div class="step-text">
          Levez la main pour indiquer que vous souhaitez prendre la parole — cette fonction est également utilisée pour voter lors des exécutions.
          <div class="action-box">
            <span class="action-badge">★ À FAIRE</span><br>
            Appuyez sur la touche <span class="key-badge">ESPACE</span> de votre clavier pour lever ou baisser la main.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 6 -->
    <div id="step-6" class="step-card">
      <div class="step-header">
        <div class="step-number">6</div>
        <h2 class="step-title">RÉPONDRE À UNE DEMANDE DE CHAT PRIVÉ</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Vidéo : Accepter un chat privé]</div>
        <div class="step-text">
          <div class="action-box">
            <span class="action-badge">★ À FAIRE</span><br>
            Quand quelqu'un souhaite discuter en privé avec vous, vous entendrez un petit son ("ding") et son nom apparaîtra dans l'onglet <strong>Vocal</strong> à gauche. Cliquez sur son nom pour accepter.<br><small><em>(Par défaut, aucun son n'est émis pendant la phase de Nuit.)</em></small>
          </div>
          <div class="action-box" style="margin-top:10px;">
            <span class="action-badge">★ À FAIRE</span><br>
            Personne d'autre ne peut entendre une conversation privée, bien qu'ils voient toujours votre caméra (sauf la Nuit). Le Conteur et les spectateurs ayant accès au Grimoire peuvent rejoindre la discussion à tout moment. Pour quitter, cliquez sur <strong>Quitter</strong> ou appuyez sur <span class="key-badge">RETOUR ARRIÈRE</span>.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 7 -->
    <div id="step-7" class="step-card">
      <div class="step-header">
        <div class="step-number">7</div>
        <h2 class="step-title">DEMANDER UN CHAT PRIVÉ</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Vidéo : Demander un chat]</div>
        <div class="step-text">
          <div class="action-box">
            <span class="action-badge">★ À FAIRE</span><br>
            Appuyez sur <span class="key-badge">ENTRÉE</span>.<br>
            — ou —<br>
            Dans l'onglet <strong>Vocal</strong>, cliquez sur <strong>Demander un chat privé</strong>.
          </div>
          <div class="action-box" style="margin-top:10px;">
            <span class="action-badge">★ À FAIRE</span><br>
            Cliquez sur la bulle de dialogue à côté d'un joueur pour lui demander une discussion privée.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 8 -->
    <div id="step-8" class="step-card">
      <div class="step-header">
        <div class="step-number">8</div>
        <h2 class="step-title">ENVOYER UN CHUCHOTEMENT (WHISPER)</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Animation : Enveloppe de message]</div>
        <div class="step-text">
          <div class="action-box">
            <span class="action-badge">★ À FAIRE</span><br>
            Cliquez sur l'enveloppe pour envoyer un chuchotement par écrit. Vous ne pouvez chuchoter qu'à vos <strong>voisins directs</strong> et au <strong>Conteur</strong>. Une animation d'enveloppe se joue — sa taille varie selon la longueur de votre message.
          </div>
          <div class="action-box" style="margin-top:10px;">
            <span class="action-badge">★ À FAIRE</span><br>
            Les notifications de nouveaux messages s'affichent dans l'onglet <strong>Texte</strong>. Appuyez sur <span class="key-badge">TAB</span> pour l'ouvrir.
          </div>
          <div class="action-box" style="margin-top:10px;">
            <span class="action-badge">★ À FAIRE</span><br>
            Il existe également un chat public visible par tout le monde. Les messages y disparaissent après un certain temps.
          </div>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 9 -->
    <div id="step-9" class="step-card">
      <div class="step-header">
        <div class="step-number">9</div>
        <h2 class="step-title">CHANGER DE NOM & D'AVATAR</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Menu Utilisateur]</div>
        <div class="step-text">
          <ul>
            <li>Appuyez sur <span class="key-badge">Q</span> pour ouvrir le menu des réglages de l'application.</li>
            <li>Cliquez sur le 2ème onglet, <strong>Utilisateur</strong>.</li>
            <li>Cliquez sur votre nom pour le modifier.</li>
            <li>Cliquez sur votre avatar pour changer votre photo de profil <em>(nécessite un abonnement Patreon)</em>.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 10 -->
    <div id="step-10" class="step-card">
      <div class="step-header">
        <div class="step-number">10</div>
        <h2 class="step-title">QUITTER SON SIÈGE</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Libérer le siège]</div>
        <div class="step-text">
          Cliquez sur la roue dentée (Engrenage), puis cliquez sur <strong>Libérer le siège</strong>. Vous resterez dans la partie en tant que Spectateur — vous pourrez toujours chuchoter au Conteur et discuter avec les autres spectateurs.
        </div>
      </div>
    </div>

    <!-- ÉTAPE 11 -->
    <div id="step-11" class="step-card">
      <div class="step-header">
        <div class="step-number">11</div>
        <h2 class="step-title">DEMANDER L'ACCÈS AU GRIMOIRE</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Menu Conteur]</div>
        <div class="step-text">
          Cliquez sur le Conteur pour ouvrir son menu, puis choisissez <strong>Demander l'accès au Grimoire</strong>. S'il accepte, vous pourrez voir le rôle de chacun et rejoindre les chats privés — mais vous ne pourrez plus envoyer de messages ni parler aux joueurs.
        </div>
      </div>
    </div>

    <!-- ÉTAPE 12 -->
    <div id="step-12" class="step-card">
      <div class="step-header">
        <div class="step-number">12</div>
        <h2 class="step-title">QUITTER LA PARTIE</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Quitter]</div>
        <div class="step-text">
          Appuyez sur la touche <span class="key-badge">L</span> de votre clavier (un message de confirmation apparaîtra pour éviter les erreurs).<br>
          — ou —<br>
          Cliquez sur l'engrenage, puis sélectionnez <strong>Quitter la partie</strong>.
        </div>
      </div>
    </div>

    <!-- ÉTAPE 13 -->
    <div id="step-13" class="step-card">
      <div class="step-header">
        <div class="step-number">13</div>
        <h2 class="step-title">OUVRIR L'ONGLET PERSONNAGES</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Onglet Personnages]</div>
        <div class="step-text">
          <ul>
            <li>Cliquez sur l'onglet <strong>Personnages</strong> pour ouvrir une liste simplifiée des rôles du script.</li>
            <li>Cliquez une seconde fois sur cet onglet pour afficher le script complet.</li>
            <li>Cliquez une troisième fois pour le fermer.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 14 -->
    <div id="step-14" class="step-card">
      <div class="step-header">
        <div class="step-number">14</div>
        <h2 class="step-title">PLACER DES JETONS & DES RAPPELS</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Placement de rappels]</div>
        <div class="step-text">
          <p><strong>Placer un jeton de rôle :</strong> Cliquez sur le jeton d'un joueur pour le modifier. Cela ne change le rôle de personne (même pas le vôtre) : c'est un outil personnel très utile pour prendre des notes !</p>
          <p><strong>Ajouter des rappels :</strong> Survolez le cercle intérieur d'un joueur jusqu'à ce qu'un jeton violet vierge apparaisse, puis cliquez dessus. Sélectionnez n'importe quel rappel en jeu ou créez vos propres rappels personnalisés (parfait pour noter plusieurs prétentions de rôles, les infos du Savant, les cibles de la Commère, etc.).</p>
        </div>
      </div>
    </div>

    <!-- ÉTAPE 15 -->
    <div id="step-15" class="step-card">
      <div class="step-header">
        <div class="step-number">15</div>
        <h2 class="step-title">CAMÉRA OU MICRO QUI NE FONCTIONNE PAS</h2>
      </div>
      <div class="step-body">
        <div class="step-media">[Image : Permissions navigateur]</div>
        <div class="step-text">
          <div class="action-box">
            <span class="action-badge">★ À FAIRE</span><br>
            Pour tout problème, commencez par rafraîchir la page (<span class="key-badge">F5</span> ou rafraîchissement forcé avec <span class="key-badge">CTRL</span> + <span class="key-badge">F5</span>).<br><br>
            Toujours bloqué ? Vérifiez les autorisations de votre navigateur : cliquez sur l'icône de caméra à gauche de la barre d'adresse pour confirmer que le site a la permission d'utiliser vos périphériques. Vérifiez également que votre casque n'est pas en muet via un bouton physique, puis réessayez.
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
      <div class="step-body">
        <div class="step-media">[Image : Vue Town Square]</div>
        <div class="step-text">
          <div class="action-box">
            <span class="action-badge">★ À FAIRE</span><br>
            Appuyez sur la touche <span class="key-badge">T</span> de votre clavier. Vous avez probablement basculé sur la vue <strong>Town Square (Place du Village)</strong> — appuyez sur <span class="key-badge">T</span> pour revenir en arrière. Cette vue est également idéale pour vérifier le nombre théorique de chaque type de personnage et le total des joueurs vivants/morts.
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

