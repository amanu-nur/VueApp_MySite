<template>
  <section class="testimonials section">
    <div class="testimonials-shape testimonials-shape-1"></div>
    <div class="testimonials-shape testimonials-shape-2">
      <svg
        width="125"
        height="107"
        viewBox="0 0 125 107"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#C6FDF3" cx="48" cy="59" r="48" />
          <path
            d="M58.536 39.713c0-6.884 1.72-14.007 5.163-21.368 3.443-7.36 8.167-13.458 14.173-18.292l11.645 7.91c-3.589 4.98-6.262 10.016-8.02 15.106S78.86 33.598 78.86 39.384v13.623H58.536V39.713z"
            fill="#55EBD0"
          />
          <path
            d="M93.252 39.713c0-6.884 1.722-14.007 5.164-21.368 3.442-7.36 8.166-13.458 14.172-18.292l11.646 7.91c-3.589 4.98-6.262 10.016-8.02 15.106s-2.637 10.529-2.637 16.315v13.623H93.252V39.713z"
            fill="#1ADAB7"
          />
        </g>
      </svg>
    </div>
    <div class="testimonials-shape testimonials-shape-3">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        mlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="93.05%"
            y1="19.767%"
            x2="15.034%"
            y2="85.765%"
            id="testimonials-shape-3"
          >
            <stop stop-color="#FF3058" offset="0%" />
            <stop stop-color="#FF6381" offset="100%" />
          </linearGradient>
        </defs>
        <circle
          cx="24"
          cy="434"
          r="24"
          transform="translate(0 -410)"
          fill="url(#testimonials-shape-3)"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    <div class="container">
      <div class="testimonials-inner section-inner">
        <h2 class="section-title mt-0 text-center">My Skills</h2>
        <div class="bar-skil" v-for="skills in skill" v-bind:key="skills.id">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="`width: ${skills.html}%;`"
              aria-valuenow="94"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              HTML {{ skills.html }}%
            </div>
          </div>
          <div class="progress mt-3">
            <div
              class="progress-bar "
              role="progressbar"
              :style="`width: ${skills.css}%;`"
              aria-valuenow="91"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              CSS {{ skills.css }}%
            </div>
          </div>
          <div class="progress mt-3">
            <div
              class="progress-bar "
              role="progressbar"
              :style="`width: ${skills.javascript}%;`"
              aria-valuenow="87"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              JAVASCRIPT {{ skills.javascript }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Skills",
  data() {
    return {
      imgUrl: [],
      skill: [],
    };
  },
  mounted() {
    axios
      .get("http://server.villagecodeid.site/api/v1/skill")
      .then(res => (this.imgUrl = res.data.imageUrl))
      .catch(err => console.log(err));

    axios
      .get("http://server.villagecodeid.site/api/v1/skill")
      .then(res => (this.skill = res.data.data))
      .catch(err => console.log(err));
  },
};
</script>
