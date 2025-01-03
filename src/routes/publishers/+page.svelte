<script>
  import PublisherCard from "$lib/components/PublisherCard.svelte";
  export let data;
  let publishers = data.publishers;
</script>

<!-- Hero Section -->
<div class="hero">
  <h1>Publishers</h1>
  <p class="subtitle">Entdecke alle Publishers und ihre Spiele</p>
</div>

<!-- Publishers Grid -->
<div class="container mt-5">
  <div class="row g-4">
      {#each publishers as publisher}
          <div class="col-sm-6 col-lg-4">
              <PublisherCard {publisher} />
          </div>
      {/each}
  </div>
</div>

