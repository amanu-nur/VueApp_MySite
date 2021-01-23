<template>
  <div class="body-wrap boxed-container">
    <Navbar />
    <Jumbotron/>
    <About/>
    <Skills/>
    <Service/>
    <Experience/>
    <Portfolio/>
    <Library/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Service from "@/components/service.vue";
import Experience from "@/components/Experience.vue";
import Portfolio from "@/components/Portfolio.vue";
import Library from "@/components/Library.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar, Jumbotron, About, Skills, Service, Experience, Portfolio, Library, Footer
  },
};
</script>
