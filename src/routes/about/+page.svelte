<script>
    import { onMount } from 'svelte';
    
    export let data; // Empfange die Daten von +page.server.js
    
    $: stats = [
        { number: `${data.games.length}+`, label: "Spiele in der Datenbank" },
        { number: "50K+", label: "Aktive Nutzer" },
        { number: "24/7", label: "Support" },
        { number: `${data.publishers.length}+`, label: "Publisher" }
    ];

    let team = [
        {
            name: "Max Mustermann",
            role: "CEO & Gründer",
            image: "/images/team-member1.jpg",
            description: "Mit über 10 Jahren Erfahrung in der Gaming-Industrie leitet Max die strategische Ausrichtung von GameWorld.",
            socials: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "Erika Musterfrau",
            role: "CTO",
            image: "/images/team-member2.jpg",
            description: "Erika ist verantwortlich für die technische Innovation und Entwicklung unserer Plattform.",
            socials: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "Hans Beispiel",
            role: "Leiter der Entwicklung",
            image: "/images/team-member3.jpg",
            description: "Hans und sein Team sorgen für die kontinuierliche Verbesserung und Wartung unserer Systeme.",
            socials: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        }
    ];
</script>

<!-- Hero Section -->
<div class="hero">
    <h1>Über Uns</h1>
    <p class="subtitle">Lerne das Team hinter GameWorld kennen</p>
</div>

<!-- Mission Section -->
<section class="mission-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h2 class="section-title">Unsere Mission</h2>
                <p class="mission-text">
                    Bei GameWorld streben wir danach, die ultimative Plattform für Gaming-Enthusiasten zu schaffen. 
                    Unser Ziel ist es, Spielern einen einfachen Zugang zu ihrer persönlichen Spielebibliothek zu ermöglichen 
                    und sie über die neuesten Entwicklungen in der Gaming-Welt zu informieren.
                </p>
                <div class="stats-container">
                    {#each stats as stat}
                        <div class="stat-item">
                            <span class="stat-number">{stat.number}</span>
                            <span class="stat-label">{stat.label}</span>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="col-md-6">
                <div class="mission-image">
                    <img src="/images/gamesworld.png" alt="GameWorld Mission" class="img-fluid rounded shadow" />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Team Section -->
<section class="team-section">
    <div class="container">
        <h2 class="section-title text-center mb-5">Unser Team</h2>
        <div class="row">
            {#each team as member}
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="team-card">
                        <div class="member-image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div class="member-info">
                            <h3>{member.name}</h3>
                            <span class="role">{member.role}</span>
                            <p class="description">{member.description}</p>
                            <div class="social-links">
                                <i class="bi bi-linkedin"></i>
                                <i class="bi bi-twitter"></i>
                                <i class="bi bi-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Values Section -->
<section class="values-section">
    <div class="container">
        <h2 class="section-title text-center">Unsere Werte</h2>
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="value-card">
                    <i class="bi bi-heart-fill value-icon"></i>
                    <h3>Leidenschaft</h3>
                    <p>Gaming ist unsere Leidenschaft, und das spiegelt sich in allem wider, was wir tun.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="value-card">
                    <i class="bi bi-shield-check value-icon"></i>
                    <h3>Qualität</h3>
                    <p>Wir setzen auf höchste Qualitätsstandards bei der Bewertung und Katalogisierung von Spielen.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="value-card">
                    <i class="bi bi-people-fill value-icon"></i>
                    <h3>Community</h3>
                    <p>Unsere Community steht im Mittelpunkt unserer Entwicklung und Entscheidungen.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Mission Section Styles */
    .mission-section {
        padding: 5rem 0;
        background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7));
    }

    .section-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
        color: #fff;
        font-weight: bold;
    }

    .mission-text {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #e0e0e0;
        margin-bottom: 2rem;
    }

    .stats-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .stat-item {
        text-align: center;
        padding: 1rem;
        background: rgba(255,255,255,0.1);
        border-radius: 8px;
        transition: transform 0.3s ease;
    }

    .stat-item:hover {
        transform: translateY(-5px);
    }

    .stat-number {
        display: block;
        font-size: 2rem;
        font-weight: bold;
        color: #007bff;
        margin-bottom: 0.5rem;
    }

    .stat-label {
        color: #e0e0e0;
        font-size: 0.9rem;
    }

    /* Team Section Styles */
    .team-section {
        padding: 5rem 0;
        background-color: #1a1a1a;
    }

    .team-card {
        background: #2a2a2a;
        border-radius: 15px;
        overflow: hidden;
        transition: transform 0.3s ease;
    }

    .team-card:hover {
        transform: translateY(-10px);
    }

    .member-image {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }

    .member-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .member-info {
        padding: 1.5rem;
    }

    .member-info h3 {
        margin: 0;
        font-size: 1.5rem;
        color: #fff;
    }

    .role {
        display: block;
        color: #007bff;
        margin: 0.5rem 0 1rem;
        font-size: 1.1rem;
    }

    .description {
        color: #e0e0e0;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .social-links {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
    }



    /* Values Section Styles */
    .values-section {
        padding: 5rem 0;
        background-color: #222;
    }

    .value-card {
        text-align: center;
        padding: 2rem;
        background: #2a2a2a;
        border-radius: 10px;
        margin-bottom: 2rem;
        transition: transform 0.3s ease;
    }

    .value-card:hover {
        transform: translateY(-5px);
    }

    .value-icon {
        font-size: 2.5rem;
        color: #007bff;
        margin-bottom: 1rem;
    }

    .value-card h3 {
        color: #fff;
        margin-bottom: 1rem;
    }

    .value-card p {
        color: #e0e0e0;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
        .stats-container {
            grid-template-columns: 1fr;
        }

        .section-title {
            font-size: 2rem;
        }
    }
</style>