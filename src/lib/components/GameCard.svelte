<script>
  import { enhance } from "$app/forms"; // Import für besseres Form-Handling in Svelte
  let { game } = $props(); // Empfangen der Game-Daten als Prop
</script>

<div class="game-card">
  <div>
    <img class="img-fluid" src={game.poster} alt="" />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/games/" + game._id}>{game.name}</a>
    </div>
    <div class="info">
      <div>Veröffentlicht: {game.date}</div>
      <div>Dauer in Stunden: {game.duration}</div>
    </div>
    
    <div class="library-button">
      {#if game.library} <!-- Überprüfung ob Spiel in Library -->
        <form method="POST" action="?/removeFromLibrary" use:enhance>
          <input type="hidden" name="id" value={game._id} />
          <button class="library-btn remove">
            <span class="btn-text">Von Library entfernen</span>
          </button>
        </form>
      {:else}
        <form method="POST" action="?/addToLibrary" use:enhance>
          <input type="hidden" name="id" value={game._id} />
          <button class="library-btn add">
            <span class="btn-text">Auf die Library</span>
          </button>
        </form>
      {/if}
    </div>
  </div>
</div>

<style>
  .game-card {
    border: 1px solid #555;       /* Hellgrauer Rahmen */
    background-color: #444;       /* Dunkelgrauer Hintergrund */
    color: white;                 /* Weiße Schrift */
    border-radius: 8px;           /* Abgerundete Ecken */
    overflow: hidden;             /* Verhindert, dass Inhalte über die Ränder gehen */
    transition: transform 0.2s;    /* Sanfte Animation für Hover-Effekt */
  }

  .game-card:hover {
    transform: translateY(-5px);   /* Hebt die Karte beim Hovern leicht an */
  }

  .game-card > div:first-child {
    height: 400px;                /* Fixe Höhe für den Bild-Container */
    overflow: hidden;             /* Verhindert Überläufe beim Bild */
  }

  .img-fluid {
    width: 100%;                  /* Bild füllt Container horizontal */
    height: 100%;                 /* Bild füllt Container vertikal */
    object-fit: contain;          /* Behält Bildverhältnis bei, zeigt ganzes Bild */
    object-position: center;      /* Zentriert das Bild im Container */
  }

  .details {
    padding: 1rem;                /* Innenabstand für Text-Bereich */
    display: flex;                /* Aktiviert Flexbox-Layout */
    flex-direction: column;       /* Ordnet Elemente vertikal an */
    gap: 0.75rem;                /* Abstand zwischen Flex-Elementen */
  }

  .info {
    color: #ccc;                  /* Hellgraue Farbe für Info-Text */
    font-size: 0.9rem;           /* Etwas kleinere Schrift für Info */
  }

  .title {
    font-weight: bold;            /* Fette Schrift für Titel */
    font-size: 1.2rem;           /* Größere Schrift für Titel */
  }

  .title a {
    color: white;                 /* Weiße Farbe für Link */
    text-decoration: none;        /* Keine Unterstreichung für Link */
  }

  .title a:hover {
    text-decoration: underline;   /* Unterstreichung beim Hover über Link */
  }

  .library-button {
    margin-top: auto;            /* Drückt Button ans untere Ende der Card */
  }

  .library-btn {
    width: 100%;                 /* Button füllt volle Breite */
    padding: 0.5rem;             /* Innenabstand für Button */
    border: none;                /* Kein Rahmen */
    border-radius: 4px;          /* Abgerundete Ecken für Button */
    font-weight: 500;            /* Mittlere Schriftstärke */
    transition: all 0.2s;        /* Sanfte Animation für alle Änderungen */
    cursor: pointer;             /* Zeigt Hand-Cursor beim Hover */
  }

  .library-btn.add {
    /* Grüner Farbverlauf für "Hinzufügen" Button */
    background: linear-gradient(45deg, #2ecc71, #27ae60);
    color: white;
  }

  .library-btn.remove {
    /* Roter Farbverlauf für "Entfernen" Button */
    background: linear-gradient(45deg, #e74c3c, #c0392b);
    color: white;
  }

  .library-btn:hover {
    transform: scale(1.02);       /* Vergrößert Button leicht beim Hover */
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);  /* Schatten für 3D-Effekt */
  }

  .library-btn:active {
    transform: scale(0.98);       /* Verkleinert Button leicht beim Klicken */
  }
</style>