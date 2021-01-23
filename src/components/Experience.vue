<template>
  <section class="testimonials section">
    <div class="testimonials-shape testimonials-shape-1">
      <svg
        width="280"
        height="280"
        viewBox="0 0 280 280"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="testimonials-shape-1"
          >
            <stop stop-color="#261FB6" offset="0%" />
            <stop stop-color="#4950F6" offset="100%" />
          </linearGradient>
        </defs>
        <circle
          cx="140"
          cy="685"
          r="140"
          transform="translate(0 -545)"
          fill="url(#testimonials-shape-1)"
          fill-rule="evenodd"
        />
      </svg>
    </div>
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
        <h2 class="section-title mt-0 text-center">My Experience</h2>
        <div class="testimonials-wrap">
            <div class=" testimonial text-xs" v-for="work in Experience" v-bind:key="work.id">
              <div class="testimonial-inner">
                <div class="testimonial-main">
                  <div class="testimonial-header">
                    <p class="title-experience-work m-2 text-center">
                      {{ work.workplace }}
                    </p>
                  </div>
                  <div class="testimonial-body">
                    <p class="title-experience">{{work.Work_as}}</p>
                    <p class="mb-0" v-html="work.description">
                    </p>
                  </div>
                </div>
                <div class="testimonial-footer">
                  <div class="testimonial-link mt-2">
                    <p>{{work.year_start}} - {{work.year_end}}</p>
                  </div>
                </div>
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
  name: "Experience",
  data() {
    return {
      Experience: [],
    };
  },
  mounted() {
    axios
      .get("http://server.villagecodeid.site/api/v1/working")
      .then(res => (this.Experience = res.data.data))
      .catch(err => console.log(err));
  },
};
</script>
