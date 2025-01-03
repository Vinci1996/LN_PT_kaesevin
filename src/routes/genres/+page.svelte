<script>
    import GenreCard from "$lib/components/GenreCard.svelte";
    export let data;

  let genres = data.genres;
    //let {data} = $props();
</script>

<!-- Hero Section -->
<div class="hero">
  <h1>Liste aller Genres</h1>
  <p class="subtitle">Entdecke alle Spiel-Kategorien</p>
</div>

<div class="row mt-3">
    {#each genres as genre}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <GenreCard {genre}></GenreCard>
    </div>
  {/each}

</div>

