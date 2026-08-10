---
layout: default
title: "🧠 Petit Quiz Blood on the Clocktower : module Bad Moon Rising"
description: "Testez vos connaissances sur le module Bad Moon Rising."
image: /images/logogold.png
---


<p style="text-align:left;">
  <a href="/botc-fr-bambi/">
    <img src="./images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>

<hr class="explication">	


<h1 style="color:#b58b52; font-size:24px; font-weight:bold; text-shadow:2px 2px 6px #000; padding-left:16px; margin:0 0 10px;">
Petit Quiz 🧠 sur le module Bad Moon Rising
</h1>

<p style="color:#e0c99d; font-size:18px; line-height:1.7; padding-left:16px; margin:0 0 25px;">
Testez vos connaissances sur les règles et subtilités du script <strong style="color:#d4a76a;">Bad Moon Rising</strong>.
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
q: "Si un Conspirateur est en jeu et que le Démon est exécuté de jour, que se passe-t-il ?",
options: [
"Le Bien gagne immédiatement la partie.",
"La partie continue secrètement un jour de plus : si personne n'est exécuté le lendemain, le Bien gagne. En revanche, si une personne est exécutée, son camp perd.",
"Un Sbire prend la place du Démon à sa mort."
],
correct: 1,
expl: "Grâce à la capacité du Conspirateur, si le Démon est exécuté, la partie continue secrètement un jour de plus. Si personne n'est exécuté le lendemain, le Bien gagne. En revanche, si une personne est exécutée, son camp perd.",
roleName: "Le Conspirateur",
roleUrl: "/botc-fr-bambi/bmr_roles/cerveau.html"
},
{
q: "Le Fou du Roi est ciblé par une attaque ou une exécution. Quelle est sa particularité la première fois qu'il doit mourir ?",
options: [
"Il meurt normalement.",
"La première fois que le Fou du Roi meurt, il ne meurt pas s’il est sobre et sain.",
"Il redirige la mort vers l'un de ses voisins."
],
correct: 1,
expl: "La première fois que le Fou du Roi meurt (que ce soit de nuit ou par exécution), il ne meurt pas s'il est sobre et sain.",
roleName: "Le Fou du Roi",
roleUrl: "/botc-fr-bambi/bmr_roles/fou.html"
},
{
q: "La Tisanière a deux voisins en vie qui sont tous les deux Bons. Que se passe-t-il si l'un d'eux est ciblé par une attaque ou une exécution ?",
options: [
"Le voisin meurt normalement.",
"Tant que ses deux voisins en vie sont Bons, ils ne peuvent pas mourir.",
"La Tisanière meurt à la place de son voisin."
],
correct: 1,
expl: "Tant que ses deux voisins directs en vie sont Bons, la Tisanière les protège : ils ne peuvent pas mourir.",
roleName: "La Tisanière",
roleUrl: "/botc-fr-bambi/bmr_roles/damedethe.html"
},
{
q: "Le Gros-bras est ciblé par la capacité d'un joueur durant la nuit. Que se passe-t-il ?",
options: [
"Le Gros-bras meurt immédiatement.",
"Il devient du même alignement que ce joueur, et ce dernier devient ivre jusqu'à l'aube suivante.",
"Le pouvoir du joueur échoue purement et simplement."
],
correct: 1,
expl: "Le premier joueur qui cible le Gros-bras durant la nuit le fait changer d'alignement pour rejoindre le sien, et ce joueur devient ivre jusqu'à l'aube suivante.",
roleName: "Le Gros-bras",
roleUrl: "/botc-fr-bambi/bmr_roles/brute.html"
},
{
q: "Chaque jour, la Commère peut faire une annonce publique. Que se passe-t-il la nuit suivante si cette annonce est vraie ?",
options: [
"Si cette annonce est vraie, le Conteur tue un joueur cette nuit-là.",
"La Commère apprend l'identité exacte du Démon.",
"Le joueur cité dans l'annonce devient ivre."
],
correct: 0,
expl: "Si l'annonce faite publiquement par la Commère durant la journée est vraie, le Conteur tue un joueur cette nuit-là.",
roleName: "La Commère",
roleUrl: "/botc-fr-bambi/bmr_roles/commere.html"
},
{
q: "Chaque nuit, le Marin choisit un joueur. Que se passe-t-il pour le Marin ou ce joueur ?",
options: [
"Ce joueur sera probablement ivre. Si le Marin se choisit lui-même, il perd sa capacité « vous ne pouvez pas mourir » jusqu’à être à nouveau sobre.",
"Le joueur choisi est protégé de toute attaque durant la nuit.",
"Le joueur choisi meurt immédiatement s'il est maléfique."
],
correct: 0,
expl: "Chaque nuit, le Marin choisit un joueur : ce joueur sera probablement ivre. Si le Marin se choisit lui-même, il perd sa capacité « vous ne pouvez pas mourir » jusqu’à être à nouveau sobre.",
roleName: "Le Marin",
roleUrl: "/botc-fr-bambi/bmr_roles/marin.html"
},
{
q: "Le Po décide de n'attaquer personne durant une nuit. Que se passe-t-il la nuit suivante ?",
options: [
"Il ne pourra plus jamais attaquer de la partie.",
"Si le Po décide de n’attaquer personne, alors il attaquera trois joueurs lors de la nuit suivante.",
"Il doit obligatoirement désigner un Sbire pour attaquer à sa place."
],
correct: 1,
expl: "Si le Po décide de n’attaquer personne, alors il attaquera trois joueurs lors de la nuit suivante.",
roleName: "Le Po",
roleUrl: "/botc-fr-bambi/bmr_roles/po.html"
},
{
q: "Le Shabaloth attaque chaque nuit. Quelle est la particularité liée aux victimes qu'il dévore ?",
options: [
"Les joueurs tués par le Shabaloth ne peuvent plus jamais voter.",
"Le Conteur a l'opportunité de ressusciter un joueur précédemment dévoré par le Shabaloth.",
"Le Shabaloth meurt s'il tente d'attaquer un Marginal."
],
correct: 1,
expl: "Chaque nuit, le Shabaloth peut tuer 2 joueurs, mais le Conteur a la possibilité de recracher (ressusciter) un joueur tué précédemment.",
roleName: "Le Shabaloth",
roleUrl: "/botc-fr-bambi/bmr_roles/shabaloth.html"
},
{
q: "Chaque nuit, la Femme de chambre choisit deux joueurs en vie, sauf elle-même. Qu'apprend-elle ?",
options: [
"Elle apprend combien d’entre eux se sont réveillés cette nuit à cause de leur capacité.",
"Elle apprend le rôle exact de chacun des deux joueurs.",
"Elle apprend si l'un d'eux a été ciblé par un Démon."
],
correct: 0,
expl: "Chaque nuit, la Femme de chambre choisit deux joueurs en vie, sauf elle-même, et apprend combien d’entre eux se sont réveillés cette nuit à cause de leur capacité.",
roleName: "La Femme de chambre",
roleUrl: "/botc-fr-bambi/bmr_roles/femmedechambre.html"
},
{
q: "Le Pukka empoisonne le Courtisan la nuit 1, puis le Courtisan est exécuté le jour 1. Que se passe-t-il lorsque le Pukka choisit un nouveau joueur la nuit 2 et au réveil du jour 2 ?",
options: [
"Le Pukka empoisonne 2 joueurs en même temps.",
"Le Pukka empoisonne 1 joueur. Il n'y a pas de mort car la victime du Pukka choisie en nuit 1 est déjà morte lors de l’exécution du jour 1.",
"Le Courtisan ressuscite immédiatement."
],
correct: 1,
expl: "Le Pukka tue la cible empoisonnée la nuit précédente au moment où il en choisit une nouvelle. Comme sa victime de la nuit 1 (le Courtisan) a déjà été exécutée le jour 1, il n'y a pas de mort due au Pukka lors de la nuit 2.",
roleName: "Le Pukka",
roleUrl: "/botc-fr-bambi/bmr_roles/pukka.html"
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
message = "🏆 Score parfait ! Vous maîtrisez les règles de niveau 1 de Bad Moon Rising à la perfection.";
} else if (score >= 7) {
message = "👏 Très bon score ! Vous connaissez très bien les mécaniques de Bad Moon Rising.";
} else if (score >= 4) {
message = "🙂 Score honorable ! Quelques subtilités de Bad Moon Rising méritent une relecture.";
} else {
message = "📚 N'hésitez pas à consulter les fiches de rôles de Bad Moon Rising pour réviser !";
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
N'hésitez pas à consulter la section 
<a href="./bmr.html" style="color:#ffa64d; font-weight:bold; text-decoration:none;">Bad Moon Rising</a></li>
pour découvrir tous les rôles en détail
</li>
<li>
<a href="#botc-quiz" style="color:#d4a76a; font-weight:bold; text-decoration:none;">Retour au quiz ↑</a>
</li>
<li>
<a href="/botc-fr-bambi/" style="color:#e0c99d; font-weight:bold; text-decoration:none;">Retour à la page d’accueil</a>
</li>
</ul>
