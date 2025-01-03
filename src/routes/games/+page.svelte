<script>
  import GameCard from "$lib/components/GameCard.svelte";
  let { data, filterByLibrary = false } = $props();

  let games = $derived.by(() => {
    if (filterByLibrary) {
      let gamesFiltered = data.games.filter((game) => game.library);
      return gamesFiltered;
    }
    return data.games;
  });
</script>

<!-- Hero Section -->
<div class="hero">
  <h1>Games</h1>
  <p class="subtitle">Entdecke unsere Spielesammlung</p>
</div>



<!-- Container mit row für das Grid-Layout -->
<div class="row mt-3">
  <!-- "Neues Spiel" Card -->
  <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
    <div class="card h-100">
      <div class="new-game-overlay">
        <div class="overlay-content">
          <span class="plus">+</span>
        </div>
      </div>
      <img
        src="/images/add_game_background.jpg"
        class="card-img-top h-100"
        style="object-fit: cover;"
        alt="Add new game"
      />
      <a href="/games/create" class="stretched-link"></a>
    </div>
  </div>

  <!-- Bestehende Game Cards im gleichen Grid -->
  {#each games as game}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <GameCard {game}></GameCard>
    </div>
  {/each}
</div>

<style>

  .card {
    cursor: pointer;
    transition: transform 0.2s;
    position: relative;
    background: none; /* Entfernt den weißen Hintergrund */
    border: none; /* Entfernt den Border */
  }

  .card:hover .new-game-overlay {
    opacity: 1;
  }

  .overlay-content {
    color: white;
    text-align: center;
  }

  .plus {
    font-size: 4rem;
    font-weight: bold;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  .new-game-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

</style>
