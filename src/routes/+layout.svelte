<script>
  import "./styles.css";
  let { children } = $props();
  import {page} from '$app/stores';
</script>

<nav
  class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
  data-bs-theme="dark"
>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">GameWorld</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link active dropdown-toggle"
            href="/games"
            data-bs-toggle="dropdown"
            aria-current="page">Games</a
          >
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/games">Alle Spiele</a></li>
            <li>
              <a class="dropdown-item" href="/games/library">Library</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/genres"
            >Genres</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/publishers"
            >Publishers</a
          >
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/kontakt"
            >Kontakt</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about"
            >Über uns</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>

