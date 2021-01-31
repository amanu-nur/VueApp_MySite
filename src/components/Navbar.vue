<template>
  <header class="site-header">
    <div class="header-shape header-shape-1">
      <svg
        width="337"
        height="222"
        viewBox="0 0 337 222"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="55.434%"
            x2="50%"
            y2="0%"
            id="header-shape-1"
          >
            <stop stop-color="#E0E1FE" stop-opacity="0" offset="0%" />
            <stop stop-color="#E0E1FE" offset="100%" />
          </linearGradient>
        </defs>
        <path
          d="M1103.21 0H1440v400h-400c145.927-118.557 166.997-251.89 63.21-400z"
          transform="translate(-1103)"
          fill="url(#header-shape-1)"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <div class="header-shape header-shape-2">
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        style="overflow:visible"
      >
        <defs>
          <linearGradient
            x1="93.05%"
            y1="19.767%"
            x2="15.034%"
            y2="85.765%"
            id="header-shape-2"
          >
            <stop stop-color="#FF3058" offset="0%" />
            <stop stop-color="#FF6381" offset="100%" />
          </linearGradient>
        </defs>
        <circle
          class="anime-element fadeup-animation"
          cx="64"
          cy="64"
          r="64"
          fill="url(#header-shape-2)"
          fill-rule="evenodd"
        />
      </svg>
    </div>

    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"
            ><img src="./../assets/Logo.png" width="55"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <router-link class="nav-link" to="/">Home</router-link>
              <router-link class="nav-link" to="/artikel">Artikel</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  // props: {
  //   msg: String,
  // },
};
</script>
