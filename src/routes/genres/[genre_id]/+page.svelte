<script>
    import GameCard from "$lib/components/GameCard.svelte";
    export let data;
    let genre = data.genre;
    let games = data.games;
    $: games = data.games;
</script>

<div class="hero">
    <a href="/genres" class="back-button">Zurück</a>
    <h1>{genre.name}</h1>
</div>

<h1>{genre.name}</h1>

<!-- Games Sektion mit GameCard -->
<div class="games-section mt-4">
    <h2>Spiele im Genre {genre.name}</h2>
    {#if games.length > 0}
        <div class="row">
            {#each games as game}
                <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
                    <GameCard {game} />
                </div>
            {/each}
        </div>
    {:else}
        <p>Keine Spiele in diesem Genre verfügbar.</p>
    {/if}
</div>
