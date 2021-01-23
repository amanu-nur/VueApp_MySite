<template>
  <section class="newsletter section text-light">
    <div class="container-sm">
      <div class="newsletter-inner section-inner">
        <div class="newsletter-header text-center">
          <h2 class="section-title mt-0">My expertise 😎</h2>
          <div class="expert">
            <div
              class="frame-img mx-2 mt-3"
              v-for="itemImage in imgUrl"
              v-bind:key="itemImage.id"
            >
              <img
                class="img-skill"
                v-bind:src="
                  `http://server.villagecodeid.site/uploads/skill-library/${itemImage.imageUrl}`
                "
                v-bind:alt="itemImage.imageUrl"
                width="40"
              />
            </div>
          </div>
          <div class="expert mt-5">
            <div class="my-locations">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.9854911017505!2d111.84671071480543!3d-8.10295878329839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e791d62b389a48d%3A0xd840b8826f43e080!2sAMANU%20SERVIS!5e0!3m2!1sid!2sid!4v1611362580206!5m2!1sid!2sid"
                width="400"
                height="300"
                frameborder="0"
                style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
              <p class="text-white text-center text-alamat mt-2">
               Unnamed Road, Jeruk, Kendal, Kec. Gondang, Kabupaten Tulungagung, Jawa Timur 66263
            </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Library",
  data() {
    return {
      imgUrl: [],
    };
  },
  mounted() {
    axios
      .get("http://server.villagecodeid.site/api/v1/skill")
      .then(res => (this.imgUrl = res.data.imageUrl))
      .catch(err => console.log(err));
  },
};
</script>
