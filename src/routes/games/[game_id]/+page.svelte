<!-- Hauptkomponente für die Game-Detail-Seite -->
<script>
  export let data; // Daten von der Server-Seite importieren
  let game = data.game; // Game-Objekt extrahieren
  let publisher = data.publisher; // Publisher-Objekt extrahieren
  let genre = data.genre; // Genre-Objekt extrahieren
</script>

<!-- Hauptcontainer für die gesamte Detail-Ansicht -->
<div class="game-detail">
  <!-- Hero Section mit dynamischem Hintergrundbild vom Game -->
  <div class="hero" style="background-image: url({game.poster})">
    <!-- Dunkler Overlay für bessere Lesbarkeit des Textes -->
    <div class="hero-overlay"></div>

    <!-- Container für den Content im Hero-Bereich -->
    <div class="hero-content">
      <!-- Zurück-Button mit Pfeil -->
      <a href="/games" class="back-button"> ← Zurück zur Übersicht </a>
      <!-- Spieltitel -->
      <h1>{game.name}</h1>
    </div>
  </div>

  <!-- Hauptinhalt-Container mit maximaler Breite -->
  <div class="content-container">
    <!-- Grid für zweispaltiges Layout -->
    <div class="game-grid">
      <!-- Linke Spalte - Poster -->
      <div class="poster-section">
        <img class="poster" src={game.poster} alt={game.name} />
      </div>

      <!-- Rechte Spalte - Spielinformationen -->
      <div class="info-section">
        <div class="info-card">
          <h2>Details</h2>
          <!-- Grid für die einzelnen Info-Einträge -->
          <div class="info-grid">
            <!-- Veröffentlichungsdatum -->
            <div class="info-item">
              <span class="label">Veröffentlicht</span>
              <span class="value">{game.date}</span>
            </div>
            <!-- Spielzeit -->
            <div class="info-item">
              <span class="label">Spielzeit</span>
              <span class="value">{game.duration} Stunden</span>
            </div>
            <!-- Altersfreigabe -->
            <div class="info-item">
              <span class="label">Altersfreigabe</span>
              <span class="value">{game.minAge} Jahre</span>
            </div>
            <!-- Publisher -->
            <div class="info-item">
              <span class="label">Publisher</span>
              <span class="value">
                <a href="/publishers/{publisher._id}" class="publisher-link"
                  >{publisher.name}</a
                >
              </span>
            </div>
            <!-- Genre -->
            <div class="info-item">
              <span class="label">Genre</span>
              <span class="value">
                <a href="/genres/{genre._id}" class="genre-link">{genre.name}</a
                >
              </span>
            </div>
          </div>

          <!-- Aktions-Bereich für Buttons -->
          <div class="actions">
            <form method="POST" action="?/delete">
              <input type="hidden" name="id" value={game._id} />
              <button class="delete-btn">Spiel löschen</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Hero-Bereich Styling */
  .hero {
    position: relative; /* Für absolute Positionierung des Overlays */
    height: 300px; /* Feste Höhe für den Hero */
    background-size: cover; /* Bild füllt den Container aus */
    background-position: center; /* Bild wird zentriert */
    color: white; /* Text in Weiß */
    margin-bottom: 2rem; /* Abstand zum nächsten Element */
  }

  /* Dunkler Overlay über dem Hero-Bild */
  .hero-overlay {
    position: absolute; /* Absolut positioniert über dem Hero */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Gradient von oben nach unten für bessere Lesbarkeit */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.6)
    );
  }

  /* Container für den Hero-Content */
  .hero-content {
    position: relative; /* Über dem Overlay */
    max-width: 1200px; /* Maximale Breite */
    margin: 0 auto; /* Zentriert den Container */
    padding: 2rem; /* Innenabstand */
    height: 100%; /* Volle Höhe */
    display: flex; /* Flexbox für vertikale Ausrichtung */
    flex-direction: column; /* Elemente untereinander */
    justify-content: flex-end; /* Content am unteren Rand */
  }



  /* Container für den Hauptinhalt */
  .content-container {
    max-width: 1200px; /* Maximale Breite */
    margin: 0 auto; /* Zentriert */
    padding: 0 2rem; /* Seitlicher Abstand */
  }

  /* Grid-Layout für Poster und Info */
  .game-grid {
    display: grid; /* CSS Grid für Layout */
    grid-template-columns: 300px 1fr; /* Feste Breite links, Rest rechts */
    gap: 2rem; /* Abstand zwischen den Spalten */
  }

  /* Poster-Bild Styling */
  .poster-section img {
    width: 100%; /* Volle Breite */
    border-radius: 8px; /* Abgerundete Ecken */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Schatten für 3D-Effekt */
  }

  /* Info-Karte Styling */
  .info-card {
    background: #444; /* Dunkelgrauer Hintergrund */
    border-radius: 8px; /* Abgerundete Ecken */
    padding: 2rem; /* Innenabstand */
    color: white; /* Weiße Schrift */
  }

  /* Grid für Info-Einträge */
  .info-grid {
    display: grid; /* CSS Grid */
    gap: 1.5rem; /* Abstand zwischen Items */
    margin-top: 1.5rem; /* Abstand nach oben */
  }

  /* Einzelne Info-Items */
  .info-item {
    display: flex; /* Flexbox */
    flex-direction: column; /* Spaltenanordnung */
    gap: 0.5rem; /* Abstand zwischen Label und Wert */
  }

  /* Label-Styling (z.B. "Veröffentlicht") */
  .label {
    color: #999; /* Hellgraue Schrift */
    font-size: 0.9rem; /* Kleinere Schriftgröße */
  }

  /* Value-Styling (z.B. das Datum) */
  .value {
    font-size: 1.1rem; /* Größere Schrift */
    font-weight: 500; /* Etwas fetter */
  }

  /* Container für Action-Buttons */
  .actions {
    margin-top: 2rem; /* Abstand nach oben */
    padding-top: 2rem; /* Innenabstand oben */
    border-top: 1px solid #555; /* Trennlinie */
  }

  /* Löschen-Button Styling */
  .delete-btn {
    background: linear-gradient(
      45deg,
      #e74c3c,
      #c0392b
    ); /* Roter Farbverlauf */
    color: white; /* Weiße Schrift */
    border: none; /* Kein Rahmen */
    padding: 0.75rem 1.5rem; /* Innenabstand */
    border-radius: 4px; /* Abgerundete Ecken */
    cursor: pointer; /* Hand-Cursor */
    transition: all 0.2s; /* Animations-Effekt */
  }

  /* Hover-Effekt für Löschen-Button */
  .delete-btn:hover {
    transform: translateY(-2px); /* Leicht nach oben */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Schatten-Effekt */
  }

  /* Click-Effekt für Löschen-Button */
  .delete-btn:active {
    transform: translateY(0); /* Zurück zur Ausgangsposition */
  }



  .poster-section {
    max-width: 300px; /* Maximale Poster-Breite */
    margin: 0 auto; /* Zentriert das Poster */
  }
  .genre-link {
    color: white;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .genre-link:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
  .publisher-link {
    color: white;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .publisher-link:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
</style>
