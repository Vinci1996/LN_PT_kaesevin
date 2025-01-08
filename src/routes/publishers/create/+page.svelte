<script>
    import { enhance } from "$app/forms";
    let showSuccessPopup = false;
    let selectedFile = null;

    function handleSubmit(event) {
        showSuccessPopup = true;
    }

    function closePopup() {
        showSuccessPopup = false;
        window.location.href = "/publishers";
    }
</script>

<div class="hero">
    <a href="/publishers" class="back-button">← Zurück</a>
    <h1>Add a Publisher</h1>
</div>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card bg-dark text-white">
                <div class="card-body">
                    <form
                        method="POST"
                        action="?/create"
                        use:enhance
                        onsubmit={handleSubmit}
                        enctype="multipart/form-data"
                    >
                        <!-- Name -->
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                name="name"
                                required
                            />
                        </div>

                        <!-- Country -->
                        <div class="mb-3">
                            <label for="country" class="form-label">Land</label>
                            <input
                                type="text"
                                class="form-control"
                                id="country"
                                name="country"
                                required
                            />
                        </div>

                        <!-- Logo Upload -->
                        <div class="mb-3">
                            <label for="logo" class="form-label">Logo</label>
                            <input
                                type="file"
                                class="form-control"
                                id="logo"
                                name="logo"
                                accept="image/*"
                                bind:files={selectedFile}
                            />
                        </div>

                        <button type="submit" class="btn btn-primary"
                            >Publisher erstellen</button
                        >
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showSuccessPopup}
    <div class="popup-overlay">
        <div class="popup">
            <h3>Publisher erfolgreich erstellt!</h3>
            <button class="close-button" onclick={closePopup}>OK</button>
        </div>
    </div>
{/if}
