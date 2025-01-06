<script>
  let { data, form } = $props();
  let showPopup = $state(false);
  let selectedFile = null;  

  $effect(() => {
      if (form?.success) {
          showPopup = true;
      }
  });

  function handleFileSelect(event) {
    selectedFile = event.target.files[0];
    if (selectedFile) {
      imagePreview = URL.createObjectURL(selectedFile);
    }
  }
</script>

<div class="hero">
  <a href="/games" class="back-button">Zurück</a>
  <h1>Add a Game</h1>
</div>


<form method="POST" action="?/create">
<div class="mb-3">
  <label for="" class="form-label">Name</label>
  <input name="name" class="form-control" type="text" required />
</div>
<div class="mb-3">
  <label for="" class="form-label">Veröffentlicht</label>
  <input name="date" class="form-control" type="text" required />
</div>
<div class="mb-3">
  <label for="" class="form-label">Spielzeit in Stunden</label>
  <input name="duration" class="form-control" type="number" required />
</div>
<div class="mb-3">
  <label for="" class="form-label">Mindestalter</label>
  <input name="minAge" class="form-control" type="number" required />
</div>
<div class="mb-3">
  <label for="" class="form-label">Publisher</label>
  <select name="publisher_id" class="form-control" required>
    {#each data.publishers as publisher}
      <option value={publisher.id}>{publisher.name}</option>
    {/each}
  </select>
</div>
<div class="mb-3">
  <label for="" class="form-label">Kategorie</label>
  <select name="genre_id" class="form-control" required>
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
    onchange={handleFileSelect}
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

