<template>
  <main>
    <section class="hero">
      <div class="container">
        <div class="title text-center">
          <h2 class="title-author">My Artikel</h2>
          <p class="title-feeds">Stories by Amanu Nur Abdillah on Medium</p>
        </div>
        <!-- Content -->
        <div class="content-artikel mt-5">
          <div class="row artikel-page-list">
            <div class="col-4-lg m-2" v-for="feed in feeds" v-bind:key="feed.id">
              <div class="card" style="width: 18rem;" >
                <img :src="feed.thumbnail" :alt="feed.thumbnail" class="card-img-top"  />
                <div class="card-body">
                  <p class="author-text"><i class="far fa-user-circle mr-2"></i> {{feed.author}}</p>
                  <p class="rilis-text"><i class="far fa-clock mr-2"></i> {{feed.pubDate}}</p>
                  <a v-bind:href="feed.link" target="_blank" class="btn btn-block btn-primary stretched-link">Baca Selengkapnya...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "ArtikelPage",
  data() {
    return {
      feeds: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@amanunur"
      )
      .then(res => (this.feeds = res.data.items))
      .catch(err => console.log(err));
  },
};
</script>
