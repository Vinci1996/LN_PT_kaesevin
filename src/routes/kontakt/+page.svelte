<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    let name = '';
    let email = '';
    let message = '';
    let isLoading = false;
    let showSuccess = false;
    let errors = {
        name: '',
        email: '',
        message: ''
    };

    const dispatch = createEventDispatcher();

    // Email Validierung
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Form Validierung
    function validateForm() {
        let isValid = true;
        errors = {
            name: '',
            email: '',
            message: ''
        };

        if (name.length < 2) {
            errors.name = 'Name muss mindestens 2 Zeichen lang sein';
            isValid = false;
        }

        if (!isValidEmail(email)) {
            errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
            isValid = false;
        }

        if (message.length < 10) {
            errors.message = 'Nachricht muss mindestens 10 Zeichen lang sein';
            isValid = false;
        }

        return isValid;
    }

    async function handleSubmit() {
        if (!validateForm()) {
            return;
        }

        isLoading = true;
        
        try {
            // Simuliere API-Aufruf
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const contactData = {
                name,
                email,
                message
            };
            
            dispatch('submit', contactData);
            showSuccess = true;
            
            // Reset Form
            name = '';
            email = '';
            message = '';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                showSuccess = false;
            }, 5000);
            
        } catch (error) {
            console.error('Fehler beim Senden:', error);
        } finally {
            isLoading = false;
        }
    }
</script>

<div class="hero">
    <h1>Kontaktformular</h1>
    <p class="subtitle">Wir freuen uns auf Ihre Nachricht!</p>
</div>

<div class="container mt-5">
    <div class="form-container">
        {#if showSuccess}
            <div class="alert alert-success" role="alert">
                Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.
            </div>
        {/if}

        <form on:submit|preventDefault={handleSubmit}>
            <div class="mb-4">
                <label for="name" class="form-label">Name</label>
                <input
                    type="text"
                    class="form-control custom-input {errors.name ? 'is-invalid' : ''}"
                    id="name"
                    bind:value={name}
                    required
                    disabled={isLoading}
                />
                {#if errors.name}
                    <div class="invalid-feedback">
                        {errors.name}
                    </div>
                {/if}
            </div>

            <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control custom-input {errors.email ? 'is-invalid' : ''}"
                    id="email"
                    bind:value={email}
                    required
                    disabled={isLoading}
                />
                {#if errors.email}
                    <div class="invalid-feedback">
                        {errors.email}
                    </div>
                {/if}
            </div>

            <div class="mb-4">
                <label for="message" class="form-label">Nachricht</label>
                <textarea
                    class="form-control custom-input {errors.message ? 'is-invalid' : ''}"
                    id="message"
                    rows="5"
                    bind:value={message}
                    required
                    disabled={isLoading}
                ></textarea>
                {#if errors.message}
                    <div class="invalid-feedback">
                        {errors.message}
                    </div>
                {/if}
            </div>

            <button 
                type="submit" 
                class="btn btn-primary custom-button"
                disabled={isLoading}
            >
                {#if isLoading}
                    <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Wird gesendet...
                {:else}
                    Nachricht senden
                {/if}
            </button>
        </form>
    </div>
</div>

<style>
    .form-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        background-color: #333;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .custom-input {
        background-color: #444 !important;
        border: 1px solid #555 !important;
        color: white !important;
        transition: all 0.3s ease;
    }

    .custom-input:focus {
        background-color: #4a4a4a !important;
        border-color: #666 !important;
        box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.1) !important;
    }

    .custom-input::placeholder {
        color: #888 !important;
    }

    .custom-button {
        width: 100%;
        padding: 0.8rem;
        font-size: 1.1rem;
        background: linear-gradient(45deg, #007bff, #0056b3);
        border: none;
        transition: all 0.3s ease;
    }

    .custom-button:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
    }

    .custom-button:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    .form-label {
        color: #fff;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .invalid-feedback {
        color: #ff6b6b !important;
    }

    .alert {
        margin-bottom: 2rem;
    }

    .subtitle {
        color: #ccc;
        margin-bottom: 0;
    }
</style>