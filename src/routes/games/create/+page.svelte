<script>
   
  let { data, form } = $props();

  // Funktion zum manuellen Schließen des Modals
  function closeModal() {
    const modal = document.getElementById('successModal');  // Holt die Modal-Element-Referenz
    const bootstrapModal = bootstrap.Modal.getInstance(modal);  // Erstellt Bootstrap Modal-Instanz
    if (bootstrapModal) {
      bootstrapModal.hide();  // Versteckt das Modal
    }
    window.location.href = '/games';  // Navigiert zur Spieleübersicht
  }

  // Effect Hook der ausgeführt wird, wenn sich form.success ändert
  $effect(() => {
    if (form?.success) {  // Prüft ob das Formular erfolgreich verarbeitet wurde
      const modal = document.getElementById('successModal');  // Holt Modal-Element
      const bootstrapModal = new bootstrap.Modal(modal);  // Erstellt neue Modal-Instanz
      bootstrapModal.show();  // Zeigt das Modal an
    }
  });
</script>

<a href="/games">Back</a>
<h1>Add a Game</h1>
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
  <button type="submit" class="btn btn-primary">Add Game</button>
</form>

<!-- Bootstrap Modal für Erfolgsmeldung -->
<div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
  <div class="modal-dialog">  <!-- Modal Dialog Container -->
    <div class="modal-content">  <!-- Modal Inhalt Container -->
      <div class="modal-header bg-success text-white">  <!-- Grüner Header für Erfolgsanzeige -->
        <h5 class="modal-title" id="successModalLabel">Erfolgreich!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>  <!-- Schließen-Button -->
      </div>
      <div class="modal-body">  <!-- Modal Hauptinhalt -->
        <p>Das Spiel wurde erfolgreich hinzugefügt.</p>
      </div>
      <div class="modal-footer">  <!-- Modal Footer mit Aktions-Buttons -->
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>  <!-- Modal schließen Button -->
      </div>
    </div>
  </div>
</div>

<style>
  /* Entfernt die Standard-Trennlinien des Modals für ein cleaneres Design */
  .modal-header {
    border-bottom: none;
  }
  .modal-footer {
    border-top: none;
  }
</style>