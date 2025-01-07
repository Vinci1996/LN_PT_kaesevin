<script>
  import GameCard from "$lib/components/GameCard.svelte";
  let { data, filterByLibrary = false } = $props();
  let searchTerm = $state('');

  let games = $derived(data.games);

  let filteredGames = $derived(games.filter(game => 
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));
</script>
 
 <div class="hero">
  <h1>Games</h1>
  <p class="subtitle">Entdecke unsere Spielesammlung</p>
 </div>
 
 <div class="mb-3">
  <input 
    type="search" 
    bind:value={searchTerm}
    placeholder="Spiel suchen..." 
    class="form-control"
  />
 </div>
 
 <div class="row mt-3">
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
      <a href="/games/create" class="stretched-link" aria-label="Neues Game hinzufügen"></a>
    </div>
  </div>
 
  {#each filteredGames as game}
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
    background: none;
    border: none;
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