<template>
   <div class="container">
      <div class="testimonials-inner section-inner">
        <h2 class="section-title mt-0 text-center">What have I done 🤩</h2>
        <div class="testimonials-wrap">
            <div class=" testimonial text-xs" v-for="items in portfolio" v-bind:key="items.id">
              <a :href="items.url" target="_blank" class="testimonial-inner text-decoration-none stretched-link">
                <div class="testimonial-main">
                  <div class="testimonial-header">
                    <p class="title-experience-work m-2 text-center">
                      {{items.name}}
                    </p>
                  </div>
                  <div class="testimonial-body">
                    <img :src="`http://server.villagecodeid.site/uploads/portfolio/${items.imageUrl}`" :alt="items.imageUrl">
                  </div>
                </div>
                <div class="testimonial-footer">
                  <div class="testimonial-link mt-1">
                    <p>Follow this link 👈</p>
                  </div>
                </div>
              </a>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "portfolio",
     data() {
    return {
      portfolio: [],
    };
  },
  mounted() {
    axios
      .get("http://server.villagecodeid.site/api/v1/data-kerja")
      .then(res => (this.portfolio = res.data.data))
      .catch(err => console.log(err));
  },
}
</script>