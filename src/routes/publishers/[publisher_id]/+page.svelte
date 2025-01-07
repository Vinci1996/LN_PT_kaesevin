<script>
    import GameCard from "$lib/components/GameCard.svelte";
    export let data;
    let publisher = data.publisher;
    let games = data.games;
    $: games = data.games;
</script>

<div class="hero">
    <a href="/publishers" class="back-button">Zurück</a>
    <h1>{publisher.name}</h1>
    <p class="subtitle">Land: {publisher.country}</p>
</div>

<!-- Games Sektion mit GameCard -->
<div class="games-section mt-4">
    <h2>Spiele von {publisher.name}</h2>
    {#if games.length > 0}
        <div class="row">
            {#each games as game}
                <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
                    <GameCard {game} />
                </div>
            {/each}
        </div>
    {:else}
        <p>Keine Spiele von diesem Publisher verfügbar.</p>
    {/if}
</div>
