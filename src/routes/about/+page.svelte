<script>
    export let data;
    
    $: stats = [
        { number: data.games.length, label: "Spiele in der Datenbank" },
        { number: data.publishers.length, label: "Publisher" }
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