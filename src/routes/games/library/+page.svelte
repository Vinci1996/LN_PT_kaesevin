<script>
    import GameCard from "$lib/components/GameCard.svelte";
    export let data;
    $: games = data.games;
  </script>
  
  <div class="hero">
    <h1>Meine Library</h1>
    <p class="subtitle">Deine gespeicherten Spiele</p>
  </div>
  
  <div class="container mt-4">
    <div class="row g-4">
      {#each games as game}
        <div class="col-sm-6 col-md-4 col-lg-3">
          <GameCard {game} />
        </div>
      {/each}
    </div>
  </div>