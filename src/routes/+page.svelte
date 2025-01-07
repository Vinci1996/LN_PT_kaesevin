<script>
    export let data; // Daten von +page.server.js

    // Statistiken mit Animation
    $: stats = [
        { number: `${data.games.length}`, label: "Spiele" },
        { number: `${data.publishers.length}`, label: "Publisher" },
        { number: `${data.genres.length}`, label: "Genres" }
    ];
</script>

<!-- Hero Section mit Typewriter Effekt -->
<div class="hero-section">
    <div class="hero-content">
        <h1 class="typewriter">Welcome to GameWorld</h1>
        <p class="fade-in">Your fasttrack to the best Games in the World!</p>
    </div>
</div>

<!-- Statistiken -->
<section class="stats-section">
    <div class="container">
        <div class="stats-grid">
            {#each stats as stat}
                <div class="stat-card">
                    <span class="number">{stat.number}</span>
                    <span class="label">{stat.label}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    /* Hero Section */
    .hero-section {
        height: 80vh;
        background-image: url('/images/gamesworld.png');
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }

    .hero-content {
        position: relative;
        z-index: 2;
        max-width: 800px;
        padding: 2rem;
    }

    /* Typewriter Animation */
    .typewriter {
        color: white;
        font-size: 3.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        overflow: hidden;
        white-space: nowrap;
        animation: typing 3.5s steps(40, end);
    }

    /* Fade-in Animation */
    .fade-in {
        color: #ddd;
        font-size: 1.5rem;
        opacity: 0;
        animation: fadeIn 2s ease-in forwards;
        animation-delay: 1s;
    }

    /* Stats Section */
    .stats-section {
        padding: 4rem 0;
        background: #1a1a1a;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .stat-card {
        text-align: center;
        padding: 2rem;
        background: #2a2a2a;
        border-radius: 10px;
        transition: transform 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-5px);
    }

    .number {
        display: block;
        font-size: 2.5rem;
        font-weight: bold;
        color: white;
        margin-bottom: 0.5rem;
    }

    .label {
        color: #aaa;
        font-size: 1.2rem;
    }

    /* Animations */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>