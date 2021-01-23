<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer-inner has-top-divider">
        <div class="brand footer-brand">
          <a href="/">
            <img src="./../assets/Logo.png" width="45" />
          </a>
        </div>
        <ul class="footer-links list-reset">
          <li>
            <p>Contact</p>
          </li>
          <li>
            <p>About us</p>
          </li>
          <li>
            <p>FAQ's</p>
          </li>
          <li>
            <p>Support</p>
          </li>
        </ul>
        <div class="kontak-api" v-for="kontak in Contact" v-bind:key="kontak.id">
        <ul class="footer-social-links list-reset">
          <li  >
            <a :href="kontak.url" target="_blank" >
              <i class="fab fa-whatsapp" v-if="kontak.name === 'WhatsApp'"></i>
              <i class="fab fa-instagram" v-if="kontak.name === 'Instagram'"></i>
              <i class="fab fa-telegram-plane" v-if="kontak.name === 'Telegram'"></i>
              <i class="fab fa-google" v-if="kontak.name === 'Gmail'"></i>
            </a>
          </li>
        </ul>
        </div>
        <div class="footer-copyright">
          &copy; 2021 VillageCodeID, all rights reserved
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",
  data() {
    return {
      Contact: [],
    };
  },
  mounted() {
    axios
      .get("http://server.villagecodeid.site/api/v1/kontak")
      .then(res => (this.Contact = res.data.data))
      .catch(err => console.log(err));
  },
};
</script>
