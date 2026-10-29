<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Matériel et Boîtes - Blood on the Clocktower FR</title>
<style>
/* --- TOUT LE CSS DE LA PAGE EST ICI --- */
body {
  background-color: #2b1b3d; /* Le fameux fond violet foncé */
  color: #f4efe6;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

.official-showcase-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 40px auto;
  max-width: 1200px;
  gap: 30px;
}

.official-image-container {
  flex: 1 1 45%;
  min-width: 300px;
  text-align: center;
}

/* Effet loupe au survol */
.img-zoom-effect {
  width: 100%;
  height: auto;
  max-width: 500px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: zoom-in;
}

.img-zoom-effect:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.7));
}

.official-content-box {
  flex: 1 1 45%;
  min-width: 300px;
  background: rgba(30, 15, 43, 0.95);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
}

.official-content-box h3 {
  color: #f4efe6;
  font-family: Georgia, serif;
  font-size: 26px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(244, 239, 230, 0.2);
  padding-bottom: 15px;
}

/* Liste numérotée */
.numbered-list {
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: official-counter;
}
.numbered-list li {
  position: relative;
  padding-left: 45px;
  margin-bottom: 20px;
  color: #d8c9b8;
  font-size: 15px;
  line-height: 1.5;
}
.numbered-list li::before {
  counter-increment: official-counter;
  content: counter(official-counter);
  position: absolute;
  left: 0;
  top: -2px;
  width: 26px;
  height: 26px;
  border: 1.5px solid #d8c9b8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #d8c9b8;
}

/* Système de Zoom */
.lightbox-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: none;
  z-index: 9999;
}
.lightbox-overlay:target { display: flex; align-items: center; justify-content: center; }
.lightbox-close-zone { position: absolute; top: 0; left: 0; width: 100%; height: 100%; cursor: zoom-out; }
.lightbox-close-btn { position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; text-decoration: none; z-index: 10000; }
.lightbox-content { position: relative; z-index: 10001; max-width: 90vw; max-height: 90vh; }
.lightbox-img { max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.lightbox-toggle { display: none; }
</style>
</head>
<body>

<!-- C'EST ICI QUE NOUS AJOUTERONS LES BOÎTES ENSUITE -->

</body>
</html>
