---
layout: default
title: Quiz de règles — Blood on the Clocktower
description: Testez vos connaissances des règles sur le module Trouble Brewing.
image: /images/logogold.png
---

<p style="text-align:left;">
  <a href="/botc-fr-bambi/">
    <img src="./images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>

<hr class="explication">


<h1 style="color:#b58b52; font-size:24px; font-weight:bold; text-shadow:2px 2px 6px #000; padding-left:16px; margin:0 0 10px;">
Quiz de règles
</h1>

<p style="color:#e0c99d; font-size:18px; line-height:1.7; padding-left:16px; margin:0 0 25px;">
Testez vos connaissances sur les règles de <em>Blood on the Clocktower</em> et du script <strong style="color:#d4a76a;">Trouble Brewing</strong>.
</p>

<style>
#botc-quiz {
  max-width:750px;
  margin:20px auto;
  padding:25px;
  box-sizing:border-box;
  background:rgba(0,0,0,0.45);
  border:1px solid #b58b52;
  border-radius:12px;
  box-shadow:0 8px 20px rgba(0,0,0,0.45);
  color:#e0c99d;
}

#botc-quiz .quiz-number {
  margin-bottom:10px;
  color:#d4a76a;
  font-size:14px;
  font-weight:bold;
  letter-spacing:.8px;
}

#botc-quiz .quiz-question {
  margin-bottom:22px;
  color:#e0c99d;
  font-size:20px;
  font-weight:bold;
  line-height:1.5;
}

#botc-quiz .quiz-option,
#botc-quiz .quiz-next,
#botc-quiz .quiz-restart {
  font-family:inherit;
  transition:background .15s ease, border-color .15s ease, transform .15s ease;
}

#botc-quiz .quiz-option {
  display:block;
  width:100%;
  margin:0 0 10px;
  padding:13px 15px;
  box-sizing:border-box;
  background:rgba(0,0,0,0.28);
  border:1px solid rgba(181,139,82,.8);
  border-radius:8px;
  color:#e0c99d;
  font-size:16px;
  font-weight:bold;
  line-height:1.45;
  text-align:left;
  cursor:pointer;
}

#botc-quiz .quiz-option:hover:not(:disabled),
#botc-quiz .quiz-next:hover,
#botc-quiz .quiz-restart:hover {
  background:rgba(181,139,82,.22);
  border-color:#d4a76a;
  transform:translateY(-1px);
}

#botc-quiz .quiz-option:disabled {
  cursor:default;
  opacity:1;
}

#botc-quiz .quiz-option.is-correct {
  background:rgba(89,145,99,.30);
  border-color:#7fd1ae;
  color:#d9f3e7;
}

#botc-quiz .quiz-option.is-wrong {
  background:rgba(170,61,61,.28);
  border-color:#d45b5b;
  color:#ffdada;
}

#botc-quiz .quiz-explanation {
  display:none;
  margin-top:22px;
  padding:16px;
  background:rgba(0,0,0,.28);
  border-left:4px solid #b58b52;
  border-radius:8px;
}

#botc-quiz .quiz-explanation-title {
  margin-bottom:8px;
  color:#d4a76a;
  font-size:18px;
  font-weight:bold;
}

#botc-quiz .quiz-explanation-text {
  margin-bottom:14px;
  color:#e0c99d;
  font-size:16px;
  line-height:1.6;
}

#botc-quiz .quiz-role-link {
  display:inline-block;
  margin-bottom:15px;
  color:#d4a76a;
  font-weight:bold;
  text-decoration:none;
}

#botc-quiz .quiz-role-link:hover {
  color:#e0c99d;
  text-decoration:underline;
}

#botc-quiz .quiz-next,
#botc-quiz .quiz-restart {
  padding:11px 20px;
  background:rgba(181,139,82,.25);
  border:1px solid #b58b52;
  border-radius:8px;
  color:#e0c99d;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
}

#botc-quiz .quiz-result {
  display:none;
  padding:10px;
  text-align:center;
}

#botc-quiz .quiz-result h2 {
  margin:0 0 15px;
  color:#d4a76a;
  font-size:26px;
}

#botc-quiz .quiz-score {
  margin-bottom:15px;
  color:#e0c99d;
  font-size:22px;
  font-weight:bold;
}

#botc-quiz .quiz-message {
  margin:0 0 22px;
  color:#e0c99d;
  font-size:16px;
  line-height:1.6;
}

@media (max-width:600px) {
  #botc-quiz {
    margin:16px 0;
    padding:18px;
  }

  #botc-quiz .quiz-question {
    font-size:18px;
  }

  #botc-quiz .quiz-option {
    font-size:15px;
  }
}
</style>

<div id="botc-quiz" markdown="0">
<div id="quiz-question-box">
<div id="quiz-number" class="quiz-number">QUESTION 1 / 10</div>
<div id="quiz-question" class="quiz-question" aria-live="polite">Chargement de la question…</div>
<div id="quiz-options"></div>
<div id="quiz-explanation" class="quiz-explanation" aria-live="polite">
<div id="quiz-explanation-title" class="quiz-explanation-title"></div>
<div id="quiz-explanation-text" class="quiz-explanation-text"></div>
<a id="quiz-role-link" class="quiz-role-link" href="#">📖 Voir la fiche du rôle</a>
<div><button id="quiz-next" class="quiz-next" type="button">Question suivante →</button></div>
</div>
</div>
<div id="quiz-result" class="quiz-result">
<h2>Fin du quiz !</h2>
<div id="quiz-score" class="quiz-score"></div>
<p id="quiz-message" class="quiz-message"></p>
<button id="quiz-restart" class="quiz-restart" type="button">Recommencer le quiz</button>
</div>
</div>

<script>
(function () {
"use strict";

var quizData = [
{
q: "L’Empoisonneur cible la Voyante pendant la nuit. Que fait le Conteur lors du tour de la Voyante ?",
options: [
"Il ne réveille pas la Voyante.",
"Il la réveille normalement et peut lui donner une information erronée.",
"Il lui indique discrètement qu’elle est empoisonnée."
],
correct: 1,
expl: "Un joueur empoisonné ne sait pas qu’il l’est et pense utiliser sa capacité normalement. La Voyante est donc réveillée, mais son information peut être erronée.",
roleName: "L’Empoisonneur",
roleUrl: "/botc-fr-bambi/tb_roles/empoisonneur.html"
},
{
q: "Le Diablotin se choisit lui-même pendant la nuit. Que se passe-t-il ?",
options: [
"Il meurt et le Bien gagne immédiatement.",
"Rien : un Démon ne peut pas se choisir lui-même.",
"Il meurt, puis un Sbire vivant devient le nouveau Diablotin."
],
correct: 2,
expl: "Le Diablotin peut se choisir lui-même. S’il meurt ainsi pendant la nuit, l’un de ses Sbires vivants devient immédiatement le nouveau Diablotin.",
roleName: "Le Diablotin",
roleUrl: "/botc-fr-bambi/tb_roles/imp.html"
},
{
q: "La Corneille meurt pendant la nuit. Quand son pouvoir s’active-t-il ?",
options: [
"Elle est réveillée cette même nuit : elle choisit un joueur et apprend son rôle.",
"Elle doit attendre la journée suivante pour agir.",
"Son pouvoir ne s’active que si elle est exécutée durant la journée."
],
correct: 0,
expl: "Si la Corneille meurt la nuit, le Conteur la réveille immédiatement. Elle désigne alors un joueur et apprend son rôle exact.",
roleName: "La Corneille",
roleUrl: "/botc-fr-bambi/tb_roles/gardien.html"
},
{
q: "L’Empathe a deux voisins vivants : le Diablotin et un Villageois empoisonné. Quelle information reçoit-il ?",
options: [
"Le chiffre 1, car un seul de ses voisins est maléfique.",
"Le chiffre 2, car un joueur empoisonné compte comme maléfique.",
"Le chiffre 0, car le pouvoir de l’Empathe ne fonctionne plus."
],
correct: 0,
expl: "L’empoisonnement peut rendre une capacité dysfonctionnelle, mais ne change pas l’alignement. Le Villageois reste bon : l’Empathe reçoit donc « 1 ».",
roleName: "L’Empathe",
roleUrl: "/botc-fr-bambi/tb_roles/empathique.html"
},
{
q: "Le Moine protège le Soldat pendant la nuit, puis le Diablotin attaque le Soldat. Que se passe-t-il ?",
options: [
"Le Soldat meurt.",
"Le Soldat survit.",
"Le Moine meurt à la place du Soldat."
],
correct: 1,
expl: "Le Soldat ne peut pas mourir de l’attaque nocturne du Démon grâce à sa propre capacité. La protection du Moine aurait également empêché cette mort : le Soldat survit.",
roleName: "Le Moine",
roleUrl: "/botc-fr-bambi/tb_roles/moine.html"
},
{
q: "Le Saint est exécuté par décision du village pendant la journée. Quelle est la conséquence ?",
options: [
"L’équipe du Mal gagne immédiatement.",
"Le Saint meurt, mais la partie continue normalement.",
"Le Saint choisit un joueur qui meurt avec lui."
],
correct: 0,
expl: "Si le Saint est exécuté, son équipe perd immédiatement. Dans Trouble Brewing, le Saint est bon : le Mal gagne donc la partie.",
roleName: "Le Saint",
roleUrl: "/botc-fr-bambi/tb_roles/saint.html"
},
{
q: "La Pourfendeuse utilise sa capacité en journée, mais cible un joueur qui n’est pas le Démon. Peut-elle réessayer le lendemain ?",
options: [
"Oui, une fois par jour.",
"Non, sa capacité ne peut être utilisée qu’une seule fois par partie.",
"Oui, si le Conteur l’autorise."
],
correct: 1,
expl: "La Pourfendeuse ne peut utiliser sa capacité qu’une seule fois par partie. Qu’elle touche le Démon ou non, son unique tentative est consommée.",
roleName: "La Pourfendeuse",
roleUrl: "/botc-fr-bambi/tb_roles/mercenaire.html"
},
{
q: "L’Ivrogne pense être la Lavandière. Quelle information peut-il recevoir lors de la première nuit ?",
options: [
"Aucune information.",
"Obligatoirement une fausse information.",
"Une information qui peut être vraie ou fausse."
],
correct: 2,
expl: "L’Ivrogne ne sait pas qu’il est ivre. Le Conteur lui donne une information comme s’il était la Lavandière, mais cette information peut être vraie ou fausse.",
roleName: "L’Ivrogne",
roleUrl: "/botc-fr-bambi/tb_roles/ivrogne.html"
},
{
q: "La Femme Écarlate est en jeu. Le Diablotin est exécuté alors qu’il reste 7 joueurs vivants, sans Voyageur. Que se passe-t-il ?",
options: [
"La Femme Écarlate devient le nouveau Diablotin.",
"Le Bien gagne : la Femme Écarlate ne fonctionne qu’à moins de 5 joueurs vivants.",
"Le Diablotin ne meurt pas."
],
correct: 0,
expl: "S’il y a au moins 5 joueurs vivants lorsque le Démon meurt, la Femme Écarlate devient le Démon. La partie continue donc avec un nouveau Diablotin.",
roleName: "La Femme Écarlate",
roleUrl: "/botc-fr-bambi/tb_roles/femmeecarlate.html"
},
{
q: "Le Maire est vivant lorsqu’il ne reste plus que 3 joueurs vivants. Aucune exécution n’a lieu ce jour-là. Que se passe-t-il ?",
options: [
"Le Démon gagne automatiquement.",
"L’équipe du Maire gagne la partie.",
"La partie continue obligatoirement une journée de plus."
],
correct: 1,
expl: "Lorsque seulement 3 joueurs sont en vie et qu’aucune exécution n’a lieu ce jour-là, l’équipe du Maire gagne. Dans Trouble Brewing, le Maire est bon : le Bien gagne.",
roleName: "Le Maire",
roleUrl: "/botc-fr-bambi/tb_roles/maire.html"
}
];

var currentIndex = 0;
var score = 0;
var answered = false;

var questionBox = document.getElementById("quiz-question-box");
var resultBox = document.getElementById("quiz-result");
var numberElement = document.getElementById("quiz-number");
var questionElement = document.getElementById("quiz-question");
var optionsElement = document.getElementById("quiz-options");
var explanationElement = document.getElementById("quiz-explanation");
var explanationTitleElement = document.getElementById("quiz-explanation-title");
var explanationTextElement = document.getElementById("quiz-explanation-text");
var roleLinkElement = document.getElementById("quiz-role-link");
var nextButton = document.getElementById("quiz-next");
var scoreElement = document.getElementById("quiz-score");
var messageElement = document.getElementById("quiz-message");
var restartButton = document.getElementById("quiz-restart");

function loadQuestion() {
var data = quizData[currentIndex];

answered = false;
numberElement.textContent = "QUESTION " + (currentIndex + 1) + " / " + quizData.length;
questionElement.textContent = data.q;
explanationElement.style.display = "none";
optionsElement.innerHTML = "";

data.options.forEach(function (option, index) {
var button = document.createElement("button");

button.type = "button";
button.className = "quiz-option";
button.textContent = option;

button.addEventListener("click", function () {
checkAnswer(index);
});

optionsElement.appendChild(button);
});
}

function checkAnswer(selectedIndex) {
var data;
var buttons;
var isCorrect;

if (answered) {
return;
}

answered = true;
data = quizData[currentIndex];
buttons = optionsElement.querySelectorAll(".quiz-option");
isCorrect = selectedIndex === data.correct;

buttons.forEach(function (button, index) {
button.disabled = true;

if (index === data.correct) {
button.classList.add("is-correct");
} else if (index === selectedIndex) {
button.classList.add("is-wrong");
}
});

if (isCorrect) {
score += 1;
explanationTitleElement.textContent = "✓ Bonne réponse !";
explanationTitleElement.style.color = "#7fd1ae";
} else {
explanationTitleElement.textContent = "✗ Mauvaise réponse";
explanationTitleElement.style.color = "#d45b5b";
}

explanationTextElement.textContent = data.expl;
roleLinkElement.href = data.roleUrl;
roleLinkElement.textContent = "📖 Voir la fiche du rôle : " + data.roleName;
explanationElement.style.display = "block";
}

function showResult() {
var message;

questionBox.style.display = "none";
resultBox.style.display = "block";
scoreElement.textContent = "Score : " + score + " / " + quizData.length;

if (score === quizData.length) {
message = "🏆 Score parfait ! Vous maîtrisez les règles de Trouble Brewing.";
} else if (score >= 7) {
message = "👏 Très bon score ! Vous avez une excellente maîtrise du jeu.";
} else if (score >= 4) {
message = "🙂 Score honorable ! Relisez les fiches de rôles pour consolider les règles qui vous ont piégé.";
} else {
message = "📚 Quelques révisions s’imposent : les fiches de rôles sont là pour vous aider.";
}

messageElement.textContent = message;
}

nextButton.addEventListener("click", function () {
currentIndex += 1;

if (currentIndex < quizData.length) {
loadQuestion();
} else {
showResult();
}
});

restartButton.addEventListener("click", function () {
currentIndex = 0;
score = 0;
resultBox.style.display = "none";
questionBox.style.display = "block";
loadQuestion();
});

loadQuestion();
}());
</script>

<hr class="explication">

<ul style="color:#e0c99d; font-size:18px; line-height:1.8;">
<li>
Consultez la section
<a href="/botc-fr-bambi/installation.html" style="color:#d4a76a; font-weight:bold; text-decoration:none;">Mise en place</a>
pour apprendre à mener une partie.
</li>
<li>
<a href="#botc-quiz" style="color:#d4a76a; font-weight:bold; text-decoration:none;">Retour au quiz ↑</a>
</li>
<li>
<a href="/botc-fr-bambi/" style="color:#e0c99d; font-weight:bold; text-decoration:none;">Retour à la page d’accueil</a>
</li>
</ul>

