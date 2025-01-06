<script>
  let { data, form } = $props();
  let showPopup = $state(false);  
 
  $effect(() => {
    if (form?.success) {
      showPopup = true;
    }
  });
 </script>
 
 <div class="hero">
  <a href="/games" class="back-button">Zurück</a>
  <h1>Add a Game</h1>
 </div>
 
 <form method="POST" action="?/create" enctype="multipart/form-data">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input id="name" name="name" class="form-control" type="text" required />
  </div>
  
  <div class="mb-3">
    <label for="date" class="form-label">Veröffentlicht</label>
    <input id="date" name="date" class="form-control" type="text" required />
  </div>
  
  <div class="mb-3">
    <label for="duration" class="form-label">Spielzeit in Stunden</label>
    <input id="duration" name="duration" class="form-control" type="number" required />
  </div>
  
  <div class="mb-3">
    <label for="minAge" class="form-label">Mindestalter</label>
    <input id="minAge" name="minAge" class="form-control" type="number" required />
  </div>
  
  <div class="mb-3">
    <label for="publisher" class="form-label">Publisher</label>
    <select id="publisher" name="publisher_id" class="form-control" required>
      {#each data.publishers as publisher}
        <option value={publisher.id}>{publisher.name}</option>
      {/each}
    </select>
  </div>
  
  <div class="mb-3">
    <label for="genre" class="form-label">Kategorie</label>
    <select id="genre" name="genre_id" class="form-control" required>
      {#each data.genres as genre}
        <option value={genre.id}>{genre.name}</option>
      {/each}
    </select>
  </div>
 
  <div class="mb-3">
    <label for="poster" class="form-label">Spiel-Cover</label>
    <input 
      type="file" 
      class="form-control" 
      id="poster" 
      name="poster" 
      accept="image/*"
    />
  </div>
 
  <button type="submit" class="btn btn-primary">Add Game</button>
 </form>
 
 {#if showPopup}
  <div class="popup-overlay">
    <div class="popup">
      <h3>Erfolgreich!</h3>
      <p>Das Spiel wurde erfolgreich hinzugefügt.</p>
      <button 
        class="close-button" 
        onclick={() => showPopup = false}
        aria-label="Popup schließen"
      >
        Schließen
      </button>
    </div>
  </div>
 {/if}