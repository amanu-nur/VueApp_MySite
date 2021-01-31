<template>
  <div class="body-wrap boxed-container">
    <Navbar />
    <ArtikelPage/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import ArtikelPage from "@/components/ArtikelPage.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Artikel",
  components: {
    Navbar,ArtikelPage, Footer
  },
};
</script>
