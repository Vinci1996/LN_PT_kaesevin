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
<div class="row mt-3">
  <!-- Add Publisher Card -->
  <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
    <div class="card h-100">
      <div class="new-publisher-overlay">
        <div class="overlay-content">
          <span class="plus">+</span>
        </div>
      </div>
      <img
        src="/images/add_publisher_background.jpg"
        class="card-img-top h-100"
        style="object-fit: cover;"
        alt="Add new publisher"
      />
      <a href="/publishers/create" class="stretched-link" aria-label="Neuen Publisher hinzufügen"></a>
    </div>
  </div>

  <!-- Publishers Grid -->

  {#each publishers as publisher}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <PublisherCard {publisher} />
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

  .card:hover .new-publisher-overlay {
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

  .new-publisher-overlay {
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
