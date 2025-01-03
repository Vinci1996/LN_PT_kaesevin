<script>
  // Empfangen der Genre-Daten als Prop
  let { genre } = $props();
</script>

<!-- Gesamte Card ist jetzt ein Link -->
<a href={"/genres/" + genre._id} class="genre-link">
    <div class="genre-card">
        <div class="image-container">
            <!-- Bild des Genres -->
            <img class="img-fluid" src={genre.poster} alt="" />
            <!-- Overlay Container für den Hover-Effekt -->
            <div class="overlay">
                <span class="genre-name">{genre.name}</span>
            </div>
        </div>
    </div>
</a>

<style>
    /* Stil für den Link */
    .genre-link {
        text-decoration: none;        /* Entfernt die Unterstreichung des Links */
        color: inherit;               /* Behält die Standardfarbe bei */
        display: block;               /* Link füllt den verfügbaren Platz */
    }

    /* Grundstil für die Genre-Karte */
    .genre-card {
        border-radius: 8px;           /* Abgerundete Ecken */
        overflow: hidden;             /* Verhindert, dass Inhalte über die Ränder gehen */
        transition: transform 0.2s;    /* Sanfte Animation für Hover-Effekt */
    }

    /* Hebt die Karte beim Hovern leicht an */
    .genre-card:hover {
        transform: translateY(-5px);   /* Hebt die Karte beim Hovern leicht an */
    }

    /* Container für das Bild */
    .image-container {
        height: 400px;                /* Fixe Höhe für den Bild-Container */
        position: relative;           /* Ermöglicht absolute Positionierung des Overlays */
    }

    /* Bildanpassungen */
    .img-fluid {
        width: 100%;                  /* Bild füllt Container horizontal */
        height: 100%;                 /* Bild füllt Container vertikal */
        object-fit: cover;            /* Behält Bildverhältnis bei und füllt Container */
    }

    /* Overlay für den Hover-Effekt */
    .overlay {
        position: absolute;           /* Absolute Positionierung über dem Bild */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7); /* Halbtransparenter schwarzer Hintergrund */
        display: flex;                /* Zentriert den Genre-Namen */
        justify-content: center;
        align-items: center;
        opacity: 0;                   /* Startet unsichtbar */
        transition: opacity 0.3s;      /* Sanfte Ein-/Ausblendung */
    }

    /* Macht Overlay beim Hovern sichtbar */
    .genre-card:hover .overlay {
        opacity: 1;
    }

    /* Stil für den Genre-Namen */
    .genre-name {
        color: white;                 /* Weiße Schrift */
        font-size: 1.5rem;           /* Größere Schrift */
        font-weight: bold;            /* Fette Schrift */
    }
</style>