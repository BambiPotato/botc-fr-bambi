---
layout: default
title: Quiz de Règles - Blood on the Clocktower
description: Teste tes connaissances sur les règles de Trouble Brewing !
image: /images/logogold.png
---

<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>

<hr class="explication">

<!-- ===== BOUTON RETOUR ===== -->
<div style="margin-bottom:20px;">
  <a href="/botc-fr-bambi/index.html" style="color:#f5f5f5; font-weight:bold; text-decoration:none; font-size:16px;">← Retour à la page d'accueil</a>
</div>

<!-- ===== EN-TÊTE ===== -->
<h2 style="color:#e0c99d; margin-bottom:10px;"><span>Quiz : Test de Règles (Trouble Brewing)</span></h2>
<p style="color:#f5f5f5; font-size:18px; line-height:1.7; margin-bottom:25px;">
  Sauras-tu trancher ces 10 situations de jeu comme un vrai Conteur ?
</p>

<!-- ===== CARTE DU QUIZ AVEC IMAGE DE FOND ===== -->
<div id="quiz-container" style="
  background: linear-gradient(rgba(28, 21, 16, 0.88), rgba(28, 21, 16, 0.95)), url('./images/quiz.png');
  background-size: cover;
  background-position: center;
  border: 2px solid #b58b52;
  border-radius: 12px;
  padding: 30px 20px;
  max-width: 750px;
  margin: 0 auto;
  box-shadow: 0 6px 20px rgba(0,0,0,0.6);
">

  <!-- ZONE DE QUESTION -->
  <div id="question-box">
    <div id="q-number" style="color: #e0c99d; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 8px;">
      QUESTION 1 / 10
    </div>
    <div id="q-text" style="color: #ffffff; font-size: 20px; font-weight: bold; line-height: 1.4; margin-bottom: 25px;">
      Chargement...
    </div>

    <!-- PROPOSITIONS DE RÉPONSES -->
    <div id="options-box"></div>

    <!-- BLOC D'EXPLICATION (Caché au départ) -->
    <div id="explanation-box" style="display: none; margin-top: 25px; padding: 18px; background: rgba(0, 0, 0, 0.6); border-left: 4px solid #b58b52; border-radius: 6px;">
      <div id="expl-title" style="font-weight: bold; font-size: 18px; margin-bottom: 8px;"></div>
      <div id="expl-text" style="color: #f5f5f5; font-size: 16px; line-height: 1.6; margin-bottom: 15px;"></div>
      
      <!-- Lien vers la fiche du rôle -->
      <a id="role-link" href="#" style="display: inline-block; color: #e0c99d; font-weight: bold; text-decoration: underline; font-size: 16px; margin-bottom: 15px;">
        📖 Consulter la fiche du rôle
      </a>

      <div>
        <button id="next-btn" onclick="nextQuestion()" style="background: #b58b52; color: #000; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 15px;">
          Question suivante →
        </button>
      </div>
    </div>
  </div>

  <!-- ZONE DE RÉSULTAT FINAL -->
  <div id="result-box" style="display: none; text-align: center; padding: 20px 10px;">
    <h2 style="color: #e0c99d; font-size: 28px; margin-bottom: 15px;">Fin du Quiz !</h2>
    <div id="final-score" style="color: #ffffff; font-size: 24px; font-weight: bold; margin-bottom: 15px;"></div>
    <p id="final-message" style="color: #f5f5f5; font-size: 17px; line-height: 1.6; margin-bottom: 25px;"></p>
    
    <button onclick="restartQuiz()" style="background: #b58b52; color: #000; border: none; padding: 12px 25px; border-radius: 8px; font-weight: bold; font-size: 16px; cursor: pointer;">
      Recommencer le Quiz
    </button>
  </div>

</div>

<!-- ===== PIED DE PAGE ===== -->
<hr class="explication" style="margin-top: 40px;">
<div style="margin-top: 20px;">
  <a href="/botc-fr-bambi/index.html" style="color:#f5f5f5; font-weight:bold; text-decoration:none; font-size:16px;">← Retour à la page d'accueil</a>
</div>

<!-- ===== SCRIPT DU QUIZ ===== -->
<script>
  const quizData = [
    {
      q: "1. L'Empoisonneur cible la Voyante durant la nuit. Que doit faire le Conteur lors du tour de la Voyante ?",
      options: [
        "Le Conteur ne la réveille pas.",
        "Le Conteur la réveille normalement, mais il peut lui donner une fausse information.",
        "Le Conteur lui indique discrètement qu'elle est empoisonnée."
      ],
      correct: 1,
      expl: "Un joueur empoisonné croit jouer normalement. La Voyante se réveille, mais le Conteur peut lui donner une fausse information.",
      roleName: "L'Empoisonneur",
      roleUrl: "/botc-fr-bambi/tb_roles/empoisonneur.html"
    },
    {
      q: "2. Le Diablotin (Démon) se choisit lui-même pendant la nuit. Que se passe-t-il ?",
      options: [
        "Il meurt et l'équipe du Bien gagne immédiatement la partie.",
        "Rien ne se passe, un Démon ne peut pas s'auto-détruire.",
        "Il meurt, et l'un de ses Sbires devient le nouveau Diablotin."
      ],
      correct: 2,
      expl: "C'est le pouvoir du Diablotin ! S'il se tue la nuit, il transmet immédiatement le rôle du Diablotin à l'un de ses Sbires en vie.",
      roleName: "Le Diablotin",
      roleUrl: "/botc-fr-bambi/tb_roles/imp.html"
    },
    {
      q: "3. La Corneille meurt pendant la nuit. Quand son pouvoir s'active-t-il ?",
      options: [
        "Elle se réveille immédiatement la nuit même pour désigner un joueur et apprendre son rôle.",
        "Elle doit attendre la journée suivante pour l'annoncer au village.",
        "Son pouvoir ne s'active que si elle est exécutée le jour."
      ],
      correct: 0,
      expl: "La Corneille s'active la nuit de sa mort. Le Conteur la réveille aussitôt : elle pointe un joueur et découvre son rôle exact.",
      roleName: "La Corneille",
      roleUrl: "/botc-fr-bambi/tb_roles/gardien.html"
    },
    {
      q: "4. L'Empathe a deux voisins en vie : l'un est le Diablotin et l'autre est un Villageois empoisonné. Que reçoit l'Empathe ?",
      options: [
        "Le chiffre 1, car il a 1 voisin maléfique.",
        "Le chiffre 2, car un joueur empoisonné compte comme maléfique.",
        "Le chiffre 0, car son pouvoir ne marche pas."
      ],
      correct: 0,
      expl: "L'empoisonnement ne change pas l'alignement d'un joueur. Le Villageois reste Bon, donc l'Empathe apprend la valeur '1' (pour le Diablotin).",
      roleName: "L'Empathe",
      roleUrl: "/botc-fr-bambi/tb_roles/empathique.html"
    },
    {
      q: "5. Le Moine désigne le Soldat pendant la nuit. Plus tard, le Diablotin attaque le Soldat. Que se passe-t-il ?",
      options: [
        "Le Soldat meurt quand même.",
        "Le Soldat survit (grâce à son pouvoir personnel et la protection du Moine).",
        "Le Moine meurt à la place du Soldat."
      ],
      correct: 1,
      expl: "Le Soldat ne meurt pas la nuit face au Démon, et la protection du Moine le sécurise encore plus. Personne ne meurt.",
      roleName: "Le Moine",
      roleUrl: "/botc-fr-bambi/tb_roles/moine.html"
    },
    {
      q: "6. Le Saint est exécuté par le village pendant la journée. Quelle est la conséquence ?",
      options: [
        "L'équipe du Mal gagne immédiatement la partie.",
        "Le Saint meurt mais la partie continue normalement.",
        "Le Saint peut désigner un joueur qui mourra avec lui."
      ],
      correct: 0,
      expl: "Si le Saint est exécuté par décision du village, son équipe (le Bien) perd immédiatement la partie.",
      roleName: "Le Saint",
      roleUrl: "/botc-fr-bambi/tb_roles/saint.html"
    },
    {
      q: "7. La Pourfendeuse tente de tuer un joueur en journée mais se trompe (ce n'est pas le Démon). Peut-elle réessayer le lendemain ?",
      options: [
        "Oui, une fois par jour.",
        "Non, sa capacité ne peut être utilisée qu'une seule fois par partie.",
        "Oui, si le Conteur lui en donne l'autorisation."
      ],
      correct: 1,
      expl: "La Pourfendeuse n'a qu'un seul tir pour toute la partie. Qu'elle touche ou qu'elle râte, son pouvoir est consommé.",
      roleName: "La Pourfendeuse",
      roleUrl: "/botc-fr-bambi/tb_roles/mercenaire.html"
    },
    {
      q: "8. L'Ivrogne pense être la Lavandière. Quelle information reçoit-il lors de la première nuit ?",
      options: [
        "Aucune information.",
        "Le Conteur lui donne obligatoirement une fausse information.",
        "Le Conteur lui donne une information qui peut être vraie ou fausse."
      ],
      correct: 2,
      expl: "L'Ivrogne ne sait pas qu'il est ivre. Le Conteur lui donne une information qui a l'air vraie, mais qui peut être totalement fausse (ou vraie si cela arrange le Conteur).",
      roleName: "L'Ivrogne",
      roleUrl: "/botc-fr-bambi/tb_roles/ivrogne.html"
    },
    {
      q: "9. La Femme Écarlate est en jeu. Le Diablotin est exécuté le jour alors qu'il y a 7 joueurs en vie. Que se passe-t-il ?",
      options: [
        "La Femme écarlate devient le nouveau Diablotin.",
        "L'équipe du Bien gagne car la Femme Écarlate ne s'active qu'à 5 joueurs en vie ou plus.",
        "Le Diablotin ne meurt pas."
      ],
      correct: 0,
      expl: "S'il y a 5 joueurs en vie ou plus (ici 7) au moment où le Démon meurt, la Femme écarlate prend immédiatement sa place et la partie continue !",
      roleName: "La Femme Écarlate",
      roleUrl: "/botc-fr-bambi/tb_roles/femmeecarlate.html"
    },
    {
      q: "10. Le Maire est en vie lors des 3 derniers joueurs et aucune exécution n'a lieu la journée. Que se passe-t-il ?",
      options: [
        "Le Démon gagne automatiquement.",
        "L'équipe du Maire (le Bien) gagne la partie.",
        "La partie repart pour une journée supplémentaire."
      ],
      correct: 1,
      expl: "C'est la condition de victoire spéciale du Maire ! S'il ne reste que 3 joueurs en vie et qu'aucune exécution n'a lieu, l'équipe du Bien l'emporte.",
      roleName: "Le Maire",
      roleUrl: "/botc-fr-bambi/tb_roles/maire.html"
    }
  ];

  let currentIdx = 0;
  let score = 0;
  let answered = false;

  function loadQuestion() {
    answered = false;
    const data = quizData[currentIdx];
    
    document.getElementById('q-number').innerText = `QUESTION ${currentIdx + 1} / ${quizData.length}`;
    document.getElementById('q-text').innerText = data.q;
    document.getElementById('explanation-box').style.display = 'none';
    
    const optsBox = document.getElementById('options-box');
    optsBox.innerHTML = '';

    data.options.forEach((optText, i) => {
      const btn = document.createElement('button');
      btn.style.cssText = "display:block; width:100%; background:rgba(28,21,16,0.9); border:1px solid #b58b52; color:#f5f5f5; padding:14px; margin-bottom:12px; border-radius:8px; font-size:16px; text-align:left; cursor:pointer; transition:0.2s;";
      btn.innerText = optText;
      btn.onclick = () => checkAnswer(i, btn);
      optsBox.appendChild(btn);
    });
  }

  function checkAnswer(selectedIdx, btnClicked) {
    if (answered) return;
    answered = true;

    const data = quizData[currentIdx];
    const allButtons = document.getElementById('options-box').children;

    if (selectedIdx === data.correct) {
      score++;
      btnClicked.style.background = "#2e6b34";
      btnClicked.style.borderColor = "#4caf50";
      document.getElementById('expl-title').innerText = "✅ Bonne réponse !";
      document.getElementById('expl-title').style.color = "#4caf50";
    } else {
      btnClicked.style.background = "#8b2626";
      btnClicked.style.borderColor = "#f44336";
      allButtons[data.correct].style.background = "#2e6b34";
      document.getElementById('expl-title').innerText = "❌ Mauvaise réponse";
      document.getElementById('expl-title').style.color = "#f44336";
    }

    document.getElementById('expl-text').innerText = data.expl;
    const link = document.getElementById('role-link');
    link.href = data.roleUrl;
    link.innerText = `📖 Voir la fiche du rôle : ${data.roleName}`;

    document.getElementById('explanation-box').style.display = 'block';
  }

  function nextQuestion() {
    currentIdx++;
    if (currentIdx < quizData.length) {
      loadQuestion();
    } else {
      showFinalResult();
    }
  }

  function showFinalResult() {
    document.getElementById('question-box').style.display = 'none';
    const resBox = document.getElementById('result-box');
    resBox.style.display = 'block';

    document.getElementById('final-score').innerText = `Score : ${score} / ${quizData.length}`;

    let msg = "";
    if (score === 10) {
      msg = "🏆 Score parfait ! Tu maîtrises les règles de Trouble Brewing à la perfection. Tu es un Conteur hors-pair !";
    } else if (score >= 7) {
      msg = "👏 Très bon score ! Tu as une excellente maîtrise du jeu et de ses subtilités.";
    } else if (score >= 4) {
      msg = "🙂 Score honorable ! Quelques petites règles t'ont piégé, n'hésite pas à relire les fiches pour réviser.";
    } else {
      msg = "📚 Encore un peu de lecture nécessaire ! Les règles de Blood on the Clocktower sont pleines de pièges.";
    }
    document.getElementById('final-message').innerText = msg;
  }

  function restartQuiz() {
    currentIdx = 0;
    score = 0;
    document.getElementById('question-box').style.display = 'block';
    document.getElementById('result-box').style.display = 'none';
    loadQuestion();
  }

  loadQuestion();
</script>

