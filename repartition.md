---
layout: default
title: Répartition
description: Répartition du Village selon le nombre de joueurs et joueuses.
image: /images/logogold.png
---

<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>

#  Répartition du Village

Selon le nombre de joueurs et joueuses, la composition des catégories change.  
Voici la configuration officielle :

<style>
.repartition-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: #f5f5f5; /* texte clair neutre */
  font-size: 18px;
  text-align: center;
  background: transparent; /* pas de fond coloré */
}

.repartition-table th, .repartition-table td {
  border: 1px solid #a88b5f; /* doré doux pour les bordures */
  padding: 8px;
}

.repartition-table th {
  font-weight: bold;
  font-size: 19px;
}

.repartition-table img {
  vertical-align: middle;
}

.repartition-table a {
  color: inherit;
  font-weight: bold;
  text-decoration: none;
}

/* --- Ajustements mobile uniquement --- */
@media (max-width: 640px) {
  .repartition-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    max-width: 100%;
  }
  /* Laisse la table prendre sa largeur naturelle pour activer le scroll horizontal */
  .repartition-table {
    width: max-content;
  }
}
</style>

<!-- Conteneur scrollable (mobile uniquement grâce à la media query) -->
<div class="repartition-wrapper">
  <table class="repartition-table">
    <thead>
      <tr>
        <th>Nombre de joueurs et joueuses</th>
        <th><a href="villageois.html"><span style="color:#4ea3ff;">Villageois</span></a> <img src="images/Generic_townsfolk.png" alt="Villageois" width="24"></th>
        <th><a href="etrangers.html"><span style="color:#4ea3ff;">Marginaux</span></a> <img src="images/Generic_outsider.png" alt="Étrangers" width="24"></th>
        <th><a href="sbires.html"><span style="color:#d45b5b;">Sbires</span></a> <img src="images/Generic_minion.png" alt="Sbires" width="24"></th>
        <th><a href="demons.html"><span style="color:#d45b5b;">Démons</span></a> <img src="images/Generic_demon.png" alt="Démons" width="24"></th>
      </tr>
    </thead>
    <tbody>
      <tr><td>5</td><td>3</td><td>0</td><td>1</td><td>1</td></tr>
      <tr><td>6</td><td>3</td><td>1</td><td>1</td><td>1</td></tr>
      <tr><td>7</td><td>5</td><td>0</td><td>1</td><td>1</td></tr>
      <tr><td>8</td><td>5</td><td>1</td><td>1</td><td>1</td></tr>
      <tr><td>9</td><td>5</td><td>2</td><td>1</td><td>1</td></tr>
      <tr><td>10</td><td>7</td><td>0</td><td>2</td><td>1</td></tr>
      <tr><td>11</td><td>7</td><td>1</td><td>2</td><td>1</td></tr>
      <tr><td>12</td><td>7</td><td>2</td><td>2</td><td>1</td></tr>
      <tr><td>13</td><td>9</td><td>0</td><td>3</td><td>1</td></tr>
      <tr><td>14</td><td>9</td><td>1</td><td>3</td><td>1</td></tr>
      <tr><td>15</td><td>9</td><td>2</td><td>3</td><td>1</td></tr>
    </tbody>
  </table>
</div>

---

<p style="color:#f5f5f5; font-size:18px; line-height:1.7; margin-top:10px;">
 <a href="./index.html" style="color:#f5f5f5; font-weight:bold; text-decoration:none;">Retour à la page d’accueil</a>
</p>
