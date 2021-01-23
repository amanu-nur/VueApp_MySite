<template>
  <section class="features section">
    <div class="container">
      <div class="features-inner section-inner">
        <div class="features-header text-center">
          <div class="container-sm">
            <h2 class="section-title mt-0">About Me</h2>
            <div class="d-flex justify-content-center mt-4">
              <img
                src="./../assets/pp.png"
                alt="pp.png"
                class="mb-3"
                width="90"
              />
            </div>
            <p class="section-paragraph">
              Hi 🖐, I am a frontend web developer with a javascript library
              from Indonesia, I always try my best for you.
            </p>
            <ul class="mt-5 mx-sm-5"  v-for="aboutMe in about" v-bind:key="aboutMe.id">
              <li className="list text-left">Name <span>{{aboutMe.name}}</span></li>
              <li className="list text-left mt-1">
                Date of birth
                <span>
                  {{aboutMe.tanggal_lahir}}, {{aboutMe.bulan_lahir}} {{aboutMe.tahun_lahir}} 
                </span>
              </li>
              <li className="list text-left mt-1">
                Phone <span>{{aboutMe.phone}} </span>
              </li>
              <li className="list text-left mt-1">
                Email <span>{{aboutMe.email}} </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
   data() {
    return {
      about: [
      ],
    };
  },
  mounted() {
    axios
      .get("http://server.villagecodeid.site/api/v1/about")
      .then(res => (this.about = res.data.data))
      .catch(err => console.log(err));
  },
};
</script>
