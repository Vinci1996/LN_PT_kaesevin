<script>
    // Empfangen der Publisher-Daten als Prop
    export let publisher;


</script>

<div class="publisher-card">
    <div class="card-content">
        <!-- Publisher Logo/Banner Bereich -->
        <div class="publisher-banner">
            <div class="logo-container">
                <img 
                    src={publisher.logo} 
                    alt={`${publisher.name} Logo`}
                    class="publisher-logo"
                />
            </div>
            <div class="banner-overlay">
                <h3 class="publisher-name">{publisher.name}</h3>
            </div>
        </div>
        
        <!-- Publisher Info Box -->
        <div class="info-box">
            <!-- Land mit Icon -->
            <div class="info-item">
                <i class="bi bi-globe"></i>
                <span>{publisher.country}</span>
            </div>
            
            <!-- Link zu den Spielen -->
            <a href={`/publishers/${publisher._id}`} class="view-games">
                <span>Spiele entdecken</span>
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
</div>

<style>
    /* Hauptcontainer für die Publisher-Karte */
    .publisher-card {
        background: #2a2a2a;          /* Dunkelgrauer Hintergrund */
        border-radius: 12px;          /* Stärker abgerundete Ecken */
        overflow: hidden;             /* Verhindert Überlauf */
        height: 100%;                 /* Volle Höhe */
        transition: transform 0.3s, box-shadow 0.3s;  /* Sanfte Animationen */
    }

    /* Hover-Effekt für die Karte */
    .publisher-card:hover {
        transform: translateY(-5px);   /* Hebt die Karte an */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);  /* Schatten-Effekt */
    }

    /* Banner-Bereich für Publisher */
    .publisher-banner {
        height: 120px;               /* Höhe des Banners */
        background: linear-gradient(45deg, #1a1a1a, #333);  /* Gradienten-Hintergrund */
        position: relative;          /* Für absolute Positionierung des Overlays */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin-top: 40px;           /* Mehr Platz für das größere Logo */
    }

    /* Logo Container */
    .logo-container {
        position: absolute;
        top: -40px;                /* Mehr Abstand nach oben */
        left: 50%;
        transform: translateX(-50%);
        width: 80px;               /* Größerer Container */
        height: 80px;              /* Größerer Container */
        background: white;         /* Weißer Hintergrund */
        border-radius: 50%;
        padding: 8px;              /* Mehr Padding */
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .publisher-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;       /* Behält das Seitenverhältnis bei */
        border-radius: 50%;
    }

    /* Banner-Overlay für Text */
    .banner-overlay {
        text-align: center;
        z-index: 1;
    }

    /* Publisher Name Styling */
    .publisher-name {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  /* Text-Schatten */
    }

    /* Info Box unterhalb des Banners */
    .info-box {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    /* Einzelne Info-Items */
    .info-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #ddd;
    }

    .info-item i {
        color: #007bff;              /* Blaue Farbe für Icons */
    }

    /* Link zu den Spielen */
    .view-games {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.8rem 1rem;
        background: #333;            /* Dunklerer Hintergrund */
        border-radius: 6px;
        color: #007bff;
        text-decoration: none;
        transition: background-color 0.3s;
    }

    /* Hover-Effekt für den Link */
    .view-games:hover {
        background: #404040;
    }

    /* Icon im Link */
    .view-games i {
        transition: transform 0.3s;
    }

    /* Animation für den Pfeil beim Hover */
    .view-games:hover i {
        transform: translateX(5px);
    }
</style>