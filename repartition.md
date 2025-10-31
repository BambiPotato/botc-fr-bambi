---
layout: default
title: Répartition
---

<p align="left">
  <a href="/botc-fr-bambi/">
    <img src="images/logogold.png" alt="Accueil BotC FR" width="300">
  </a>
</p>

# ⚖️ Répartition du Village

Selon le nombre de joueurs et joueuses, la composition des rôles change.
Voici la configuration officielle :


<style>
/* Styles localisés au tableau de répartition uniquement */
.repartition-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 24px 0;
  table-layout: fixed;
  background: #ffffff;              /* fond blanc lisible */
  color: #101010;                   /* texte sombre dans le tableau */
  border: 1px solid rgba(0,0,0,.2); /* cadre externe */
}
.repartition-table th,
.repartition-table td {
  border: 1px solid rgba(0,0,0,.2); /* grilles nettes (verticales + horizontales) */
  padding: 10px 12px;
  text-align: center;
  vertical-align: middle;
}
.repartition-table thead th {
  background: #f7f7f7;             /* léger contraste sur l’en-tête */
  font-weight: 700;
}
.repartition-table .col-nb { width: 18%; }
.repartition-table .col-vil,
.repartition-table .col-etr,
.repartition-table .col-sbi,
.repartition-table .col-dem { width: 20.5%; }

/* Lignes d’icônes sous les libellés */
.repartition-table .icons-row img {
  height: 28px;
  width: auto;
}

/* Les liens gardent leur couleur (bleu/rouge doux via ton CSS global) */
.repartition-table a {
  text-decoration: none;
  font-weight: bold;
}

/* Sur écrans étroits : on garde la grille nette */
@media (max-width: 520px) {
  .repartition-table th,
  .repartition-table td { padding: 8px 6px; font-size: 14px; }
  .repartition-table .icons-row img { height: 22px; }
}
</style>

<table class="repartition-table">
  <thead>
    <tr>
      <th class="col-nb">Nombre de joueurs et joueuses</th>
      <th class="col-vil"><a href="villageois.md"><span style="color:blue;">Villageois</span></a></th>
      <th class="col-etr"><a href="etrangers.md"><span style="color:blue;">Étrangers</span></a></th>
      <th class="col-sbi"><a href="sbires.md"><span style="color:red;">Sbires</span></a></th>
      <th class="col-dem"><a href="demons.md"><span style="color:red;">Démons</span></a></th>
    </tr>
    <tr class="icons-row">
      <th></th>
      <th><img src="images/Generic_townsfolk.png" alt="Icône Villageois"></th>
      <th><img src="images/Generic_outsider.png" alt="Icône Étrangers"></th>
      <th><img src="images/Generic_minion.png" alt="Icône Sbires"></th>
      <th><img src="images/Generic_demon.png" alt="Icône Démons"></th>
    </tr>
  </thead>
  <tbody>
    <tr><td>5</td>  <td>3</td> <td>0</td> <td>1</td> <td>1</td></tr>
    <tr><td>6</td>  <td>3</td> <td>1</td> <td>1</td> <td>1</td></tr>
    <tr><td>7</td>  <td>5</td> <td>0</td> <td>1</td> <td>1</td></tr>
    <tr><td>8</td>  <td>5</td> <td>1</td> <td>1</td> <td>1</td></tr>
    <tr><td>9</td>  <td>5</td> <td>2</td> <td>1</td> <td>1</td></tr>
    <tr><td>10</td> <td>7</td> <td>0</td> <td>2</td> <td>1</td></tr>
    <tr><td>11</td> <td>7</td> <td>1</td> <td>2</td> <td>1</td></tr>
    <tr><td>12</td> <td>7</td> <td>2</td> <td>2</td> <td>1</td></tr>
    <tr><td>13</td> <td>9</td> <td>0</td> <td>3</td> <td>1</td></tr>
    <tr><td>14</td> <td>9</td> <td>1</td> <td>3</td> <td>1</td></tr>
    <tr><td>15</td> <td>9</td> <td>2</td> <td>3</td> <td>1</td></tr>
  </tbody>
</table>

<p style="color:#e0c99d; font-size:18px; line-height:1.7; margin-top:10px;">
🏠 <a href="./" style="color:#e0c99d; font-weight:bold; text-decoration:none;">Retour à la page d’accueil</a>
</p>
